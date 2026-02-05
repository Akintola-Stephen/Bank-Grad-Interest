import { InterestCalculator } from "../src/services/InterestCalculator";

describe("InterestCalculator", () => {
    it("calculates daily interest correctly for 27.5%", () => {
        const principal = 100_000;
        const rateBps = 2750;
        const date = new Date("2026-02-05");
        const interest = InterestCalculator.calculateDailyInterest(principal, rateBps, date);
        expect(interest).toBe(Math.floor((100000 * 2750) / (365 * 10000)));
    });
});
