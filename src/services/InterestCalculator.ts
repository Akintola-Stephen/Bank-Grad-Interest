import { Cents, mulDivFloor } from "../utils/money";
import { daysInYear } from "../utils/date";

export class InterestCalculator {
    static calculateDailyInterest(principal: Cents, annualRateBps: number, date: Date): Cents {
        const days = daysInYear(date);
        return mulDivFloor(principal, annualRateBps, days * 10000);
    }
}
