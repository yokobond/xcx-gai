import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { parseContentPartsText } from "../../src/vm/extensions/block/content-directive.js";
import { images } from "./images.js";

describe("gemini-helper", () => {
  describe("functions", () => {
    it("parseContentPartsText", () => {
      const contentPartsText = `次の画像[${images.whiteWall}]と[${images.blackWall}]を説明してください。`;
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 5);
      assert.equal(result[0], "次の画像");
      assert.equal(result[1], `[${images.whiteWall}]`);
      assert.equal(result[2], "と");
      assert.equal(result[3], `[${images.blackWall}]`);
      assert.equal(result[4], "を説明してください。");
    });
  });
});