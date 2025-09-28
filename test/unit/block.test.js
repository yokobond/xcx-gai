import { blockClass } from "../../src/vm/extensions/block/index.js";
import { AIAdapter } from "../../src/vm/extensions/block/ai-adapter.js";

// Mock AIAdapter
jest.mock("../../src/vm/extensions/block/ai-adapter.js");

describe("blockClass", () => {
    const runtime = {
        formatMessage: function (msg) {
            return msg.default;
        },
        on: function () { },
    };

    let block;
    let mockTarget;
    let mockAIAdapter;

    beforeEach(() => {
        jest.clearAllMocks();
        
        block = new blockClass(runtime);
        
        mockTarget = {
            id: 'test-target-id'
        };
 
        mockAIAdapter = {
            abortRequests: jest.fn(),
            getResultFiles: jest.fn()
        };

        mockUtil = { target: mockTarget };
        
        // Mock aiForTarget method
        block.aiForTarget = jest.fn().mockReturnValue(mockAIAdapter);
    });

    it("should create an instance of blockClass", () => {
        expect(block).toBeInstanceOf(blockClass);
    });

    describe("abortRequestsForTarget", () => {
        it("should call abortRequests on AI adapter when adapter exists", () => {
            block.aiForTarget.mockReturnValue(mockAIAdapter);

            block.abortRequestsForTarget(mockTarget, "test reason");

            expect(block.aiForTarget).toHaveBeenCalledWith(mockTarget);
            expect(mockAIAdapter.abortRequests).toHaveBeenCalledWith("test reason");
        });

        it("should do nothing when no AI adapter exists for target", () => {
            block.aiForTarget.mockReturnValue(null);

            expect(() => block.abortRequestsForTarget(mockTarget, "test reason")).not.toThrow();
            expect(block.aiForTarget).toHaveBeenCalledWith(mockTarget);
        });

        it("should handle undefined target gracefully", () => {
            block.aiForTarget.mockReturnValue(null);

            expect(() => block.abortRequestsForTarget(undefined, "test reason")).not.toThrow();
            expect(block.aiForTarget).toHaveBeenCalledWith(undefined);
        });
    });

    describe('File methods', () => {
        describe('getFileDataAtIndex', () => {
            it('should return empty string when no AI adapter', () => {
                block.aiForTarget.mockReturnValue(null);
                const result = block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return empty string when no files', () => {
                mockAIAdapter.getResultFiles.mockReturnValue([]);
                const result = block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return file data URL at valid index', () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' },
                    { base64: 'data2', mediaType: 'image/jpeg' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('data:image/png;base64,data1');
                
                const result2 = block.getFileDataAtIndex({ INDEX: 2 }, mockUtil);
                expect(result2).toBe('data:image/jpeg;base64,data2');
            });

            it('should return empty string for invalid index', () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileDataAtIndex({ INDEX: 0 }, mockUtil);
                expect(result).toBe('');
                
                const result2 = block.getFileDataAtIndex({ INDEX: 3 }, mockUtil);
                expect(result2).toBe('');
            });

            it('should handle non-integer index', () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileDataAtIndex({ INDEX: 1.7 }, mockUtil);
                expect(result).toBe('data:image/png;base64,data1');
            });

            it('should use default media type when mediaType is missing', () => {
                const mockFiles = [
                    { base64: 'data1' } // mediaType missing
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('data:application/octet-stream;base64,data1');
            });

            it('should return empty string when base64 is empty', () => {
                const mockFiles = [
                    { base64: '', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return empty string when base64 is missing', () => {
                const mockFiles = [
                    { mediaType: 'image/png' } // base64 missing
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileDataAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });
        });

        describe('getFileMediaTypeAtIndex', () => {
            it('should return empty string when no AI adapter', () => {
                block.aiForTarget.mockReturnValue(null);
                const result = block.getFileMediaTypeAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return empty string when no files', () => {
                mockAIAdapter.getResultFiles.mockReturnValue([]);
                const result = block.getFileMediaTypeAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('');
            });

            it('should return media type at valid index', () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' },
                    { base64: 'data2', mediaType: 'image/jpeg' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileMediaTypeAtIndex({ INDEX: 1 }, mockUtil);
                expect(result).toBe('image/png');
                
                const result2 = block.getFileMediaTypeAtIndex({ INDEX: 2 }, mockUtil);
                expect(result2).toBe('image/jpeg');
            });

            it('should return empty string for invalid index', () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getFileMediaTypeAtIndex({ INDEX: 0 }, mockUtil);
                expect(result).toBe('');
                
                const result2 = block.getFileMediaTypeAtIndex({ INDEX: 3 }, mockUtil);
                expect(result2).toBe('');
            });
        });

        describe('getMaxFileNumber', () => {
            it('should return 0 when no AI adapter', () => {
                block.aiForTarget.mockReturnValue(null);
                const result = block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(0);
            });

            it('should return 0 when no files', () => {
                mockAIAdapter.getResultFiles.mockReturnValue([]);
                const result = block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(0);
            });

            it('should return file count', () => {
                const mockFiles = [
                    { base64: 'data1', mediaType: 'image/png' },
                    { base64: 'data2', mediaType: 'image/jpeg' },
                    { base64: 'data3', mediaType: 'image/gif' }
                ];
                mockAIAdapter.getResultFiles.mockReturnValue(mockFiles);
                
                const result = block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(3);
            });

            it('should return 0 when getResultFiles returns null', () => {
                mockAIAdapter.getResultFiles.mockReturnValue(null);
                const result = block.getMaxFileNumber({}, mockUtil);
                expect(result).toBe(0);
            });
        });
    });
});

