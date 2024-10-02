import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { parseContentPartsText, interpretContentPartDirectives } from "../../src/vm/extensions/block/content-directive.js";
import { images } from "./images.js";
import { sounds } from "./sounds.js";

describe("gemini-helper", () => {
  describe("functions", () => {
    it("parseContentPartsText", () => {
      const contentPartsText = `Please explain ${images.whiteWall} and ${images.blackWall} images.`;
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 5);
      assert.equal(result[0], 'Please explain');
      assert.equal(result[1], `${images.whiteWall}`);
      assert.equal(result[2], "and");
      assert.equal(result[3], `${images.blackWall}`);
      assert.equal(result[4], "images.");
    });
    it("parseContentPartsText with [] {}", () => {
      const contentPartsText = `Please explain [${images.whiteWall}] and {${images.blackWall}}images.`;
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 5);
      assert.equal(result[0], 'Please explain');
      assert.equal(result[1], `${images.whiteWall}`);
      assert.equal(result[2], "and");
      assert.equal(result[3], `${images.blackWall}`);
      assert.equal(result[4], "images.");
    });
    it("parseContentPartsText with () \"\"", () => {
      const contentPartsText = `Please explain (${images.whiteWall}) and "${images.blackWall}}" images.`;
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 5);
      assert.equal(result[0], 'Please explain');
      assert.equal(result[1], `${images.whiteWall}`);
      assert.equal(result[2], "and");
      assert.equal(result[3], `${images.blackWall}`);
      assert.equal(result[4], "images.");
    });
    it("parseContentPartsText with wide char", () => {
      const contentPartsText = `次の画像データ${images.whiteWall}と　${images.blackWall}　を説明してください。`;
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 5);
      assert.equal(result[0], '次の画像データ');
      assert.equal(result[1], `${images.whiteWall}`);
      assert.equal(result[2], "と");
      assert.equal(result[3], `${images.blackWall}`);
      assert.equal(result[4], "を説明してください。");
    });
    it("interpretContentPartDirectives", () => {
      const directives = ['These are image data:', images.whiteWall, images.blackWall];
      const result = interpretContentPartDirectives(directives);
      assert.exists(result);
      assert.lengthOf(result, 3);
      assert.deepEqual(result[0], {type: 'text', data: 'These are image data:'});
      assert.deepEqual(result[1], {type: 'dataURL', data: images.whiteWall});
      assert.deepEqual(result[2], {type: 'dataURL', data: images.blackWall});
    });
    it("parseContentPartsText with sound", () => {
      const contentPartsText = `Please explain ${sounds.meow} sound.`;
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 3);
      assert.equal(result[0], 'Please explain');
      assert.equal(result[1], `${sounds.meow}`);
      assert.equal(result[2], "sound.");
    });
  });
});