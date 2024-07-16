import { formatCurrency } from "../../scripts/utils/money.js";
describe("test suit: formatCurrency", () => {
  it(`convert cents into $$`, () => {
    expect(formatCurrency(2095)).toEqual("20.95"); //to compare values
  });
  it(`works with 0`, () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it(`new try`, () => {
    expect(formatCurrency(2000.5).toEqual("20.00"));
  });
});

//provided by jasmine
