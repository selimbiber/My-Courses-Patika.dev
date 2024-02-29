import capitalize from "../Scripts/capitalize";

describe("Capitalize", () => {
  test("Name", () => {
    expect(capitalize("selim")).toBe("Selim");
  });
  test("Is Undefined", () => {
    expect(capitalize()).toBe("");
  });
  test("Is Null", () => {
    expect(capitalize(null)).toBe("");
  });
});
