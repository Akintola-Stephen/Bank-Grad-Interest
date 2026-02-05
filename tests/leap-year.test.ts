import { InterestCalculator } from "../src/services/InterestCalculator";

describe("InterestCalculator leap year", () => {
    it("uses 366 days for leap year", () => {
        const principal = 100_000;
        const rateBps = 2750;
        const date = new Date("2024-02-29"); // leap year
        const interest = InterestCalculator.calculateDailyInterest(principal, rateBps, date);
        expect(interest).toBe(Math.floor((100_000 * 2750) / (366 * 10000)));
    });
});
