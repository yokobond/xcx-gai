import { blockClass } from "../../src/vm/extensions/block/index.js";
import AIAdapter from "../../src/vm/extensions/block/ai-adapter.js";

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
            abortRequests: jest.fn()
        };

        // Mock the aiForTarget method
        block.aiForTarget = jest.fn();
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
});

