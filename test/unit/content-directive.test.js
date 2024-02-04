import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { parseContentPartsText } from "../../src/vm/extensions/block/content-directive.js";

describe("gemini-helper", () => {
  describe("functions", () => {
    it("parseContentPartsText", () => {
      const contentPartsText = "次の画像[data:image/png;base64,iVBORw0KGgoAAAA]と[data:image/png;base64,iVBORw0KGgoAAAA]を説明してください。"
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 5);
      assert.equal(result[0], "次の画像");
      assert.equal(result[1], "[data:image/png;base64,iVBORw0KGgoAAAA]");
      assert.equal(result[2], "と");
      assert.equal(result[3], "[data:image/png;base64,iVBORw0KGgoAAAA]");
      assert.equal(result[4], "を説明してください。");
    });
  });
});