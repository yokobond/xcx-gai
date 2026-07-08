import { parseContentPartsText, interpretContentPartDirectives } from "../../src/vm/extensions/block/content-directive.js";
import { images } from "./images.js";
import { sounds } from "./sounds.js";

describe("gemini-helper", () => {
  describe("functions", () => {
    it("parseContentPartsText", () => {
      const contentPartsText = `Please explain ${images.whiteWall} and ${images.blackWall} images.`;
      const result = parseContentPartsText(contentPartsText);
      expect(result).toBeDefined();
      expect(result).toHaveLength(5);
      expect(result[0]).toBe('Please explain');
      expect(result[1]).toBe(`${images.whiteWall}`);
      expect(result[2]).toBe("and");
      expect(result[3]).toBe(`${images.blackWall}`);
      expect(result[4]).toBe("images.");
    });
    it("parseContentPartsText keeps newlines in plain multi-line text", () => {
      // Xcratch's Cast.toString converts a typed `\n` into a real newline, so
      // multi-line prompts are common; the parser must not split them into
      // separate directives (the separators would be lost on re-join).
      const contentPartsText = "when green flag clicked\nmove (10) steps\nsay [Hi!]";
      const result = parseContentPartsText(contentPartsText);
      expect(result).toEqual(["when green flag clicked\nmove (10) steps\nsay [Hi!]"]);
    });
    it("parseContentPartsText keeps newlines around a data URL", () => {
      const contentPartsText = `first line\nsecond line ${images.whiteWall} third line\nfourth line`;
      const result = parseContentPartsText(contentPartsText);
      expect(result).toHaveLength(3);
      expect(result[0]).toBe("first line\nsecond line");
      expect(result[1]).toBe(`${images.whiteWall}`);
      expect(result[2]).toBe("third line\nfourth line");
    });
    it("parseContentPartsText with [] {}", () => {
      const contentPartsText = `Please explain [${images.whiteWall}] and {${images.blackWall}}images.`;
      const result = parseContentPartsText(contentPartsText);
      expect(result).toBeDefined();
      expect(result).toHaveLength(5);
      expect(result[0]).toBe('Please explain');
      expect(result[1]).toBe(`${images.whiteWall}`);
      expect(result[2]).toBe("and");
      expect(result[3]).toBe(`${images.blackWall}`);
      expect(result[4]).toBe("images.");
    });
    it("parseContentPartsText with () \"\"", () => {
      const contentPartsText = `Please explain (${images.whiteWall}) and "${images.blackWall}}" images.`;
      const result = parseContentPartsText(contentPartsText);
      expect(result).toBeDefined();
      expect(result).toHaveLength(5);
      expect(result[0]).toBe('Please explain');
      expect(result[1]).toBe(`${images.whiteWall}`);
      expect(result[2]).toBe("and");
      expect(result[3]).toBe(`${images.blackWall}`);
      expect(result[4]).toBe("images.");
    });
    it("parseContentPartsText with wide char", () => {
      const contentPartsText = `次の画像データ${images.whiteWall}と　${images.blackWall}　を説明してください。`;
      const result = parseContentPartsText(contentPartsText);
      expect(result).toBeDefined();
      expect(result).toHaveLength(5);
      expect(result[0]).toBe('次の画像データ');
      expect(result[1]).toBe(`${images.whiteWall}`);
      expect(result[2]).toBe("と");
      expect(result[3]).toBe(`${images.blackWall}`);
      expect(result[4]).toBe("を説明してください。");
    });
    it("interpretContentPartDirectives", () => {
      const directives = ['These are image data:', images.whiteWall, images.blackWall];
      const result = interpretContentPartDirectives(directives);
      expect(result).toBeDefined();
      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({type: 'text', data: 'These are image data:'});
      expect(result[1]).toEqual({type: 'dataURL', data: images.whiteWall});
      expect(result[2]).toEqual({type: 'dataURL', data: images.blackWall});
    });
    it("parseContentPartsText with sound", () => {
      const contentPartsText = `Please explain ${sounds.meow} sound.`;
      const result = parseContentPartsText(contentPartsText);
      expect(result).toBeDefined();
      expect(result).toHaveLength(3);
      expect(result[0]).toBe('Please explain');
      expect(result[1]).toBe(`${sounds.meow}`);
      expect(result[2]).toBe("sound.");
    });
  });
});