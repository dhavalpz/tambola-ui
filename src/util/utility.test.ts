import { formatNumber } from "./utility";

describe("testing utility methods", () => {
  it("should format number 0 to _", () => {
    expect(formatNumber(0)).toStrictEqual("_");
  });
  it("should format number 0-9", () => {
    expect(formatNumber(1)).toStrictEqual("01");
  });
  it("should format number 10-90", () => {
    expect(formatNumber(10)).toStrictEqual("10");
  });
});
