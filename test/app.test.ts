import { compoundInterestCalc } from "../src/utils/utils";

describe("Compound interest test", () => {
  const initialMoney = 30;
  const deadline = 10;
  const interest = 0.25;

  it("returns the total ammount of money after a period of time", async () => {
    expect(compoundInterestCalc(initialMoney, deadline, interest)).toBeCloseTo(
      30.76
    );
  });

  it("returns interest net gains", async () => {
    expect(
      compoundInterestCalc(initialMoney, deadline, interest) - initialMoney
    ).toBeCloseTo(0.76);
  });
});
