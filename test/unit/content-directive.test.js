import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { parseContentPartsText, parseContentPartDirective } from "../../src/vm/extensions/block/content-directive.js";

describe("gemini-helper", () => {
  describe("functions", () => {
    it("parseContentPartsText", () => {
      const contentPartsText = "[ランドマーク]と[都市]を特定します。[costume:コロッセオ]都市: ローマ、ランドマーク: コロッセオ。[costume:４]都市: 北京、ランドマーク: 禁止都市。それでは[snapshot]、[var:変数]、[list:リスト:1]、[backdrop:背景1]は?"
      const result = parseContentPartsText(contentPartsText);
      assert.exists(result);
      assert.lengthOf(result, 13);
      assert.equal(result[0], "[ランドマーク]と[都市]を特定します。");
      assert.equal(result[1], "[costume:コロッセオ]");
      assert.equal(result[2], "都市: ローマ、ランドマーク: コロッセオ。");
      assert.equal(result[3], "[costume:４]");
      assert.equal(result[4], "都市: 北京、ランドマーク: 禁止都市。それでは");
      assert.equal(result[5], "[snapshot]");
      assert.equal(result[6], "、");
      assert.equal(result[7], "[var:変数]");
      assert.equal(result[8], "、");
      assert.equal(result[9], "[list:リスト:1]");
      assert.equal(result[10], "、");
      assert.equal(result[11], "[backdrop:背景1]");
      assert.equal(result[12], "は?");
    });
    it("parseContentPartDirective", () => {
      let contentPartDirective;
      let result;
      contentPartDirective = "[costume:コロッセオ]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "costume");
      assert.equal(result.resourceName, "コロッセオ");

      contentPartDirective = "[costume:4]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "costume");
      assert.equal(result.resourceName, "4");

      contentPartDirective = "[costume:４]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "costume");
      assert.equal(result.resourceName, "４");

      contentPartDirective = "[snapshot]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "snapshot");
      assert.equal(result.resourceName, "");

      contentPartDirective = "[costume]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "costume");
      assert.equal(result.resourceName, "");

      contentPartDirective = "[var:変数]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "var");
      assert.equal(result.resourceName, "変数");

      contentPartDirective = "[list:リスト:1]";
      result = parseContentPartDirective(contentPartDirective);
      assert.equal(result.directiveType, "list");
      assert.equal(result.resourceName, "リスト");
      assert.equal(result.resourceArgs[0], "1");
    });
  });
});