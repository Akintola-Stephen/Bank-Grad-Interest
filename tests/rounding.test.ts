import { InterestCalculator } from "../src/services/InterestCalculator";

describe("InterestCalculator rounding", () => {
    it("rounds down fractional cents", () => {
        const principal = 1;
        const rateBps = 2750;
        const date = new Date("2026-02-05");
        const interest = InterestCalculator.calculateDailyInterest(principal, rateBps, date);
        expect(interest).toBe(0);
    });
});
