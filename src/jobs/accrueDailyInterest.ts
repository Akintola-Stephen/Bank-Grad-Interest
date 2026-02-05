import { InterestCalculator } from "../services/InterestCalculator";
import { InterestAccrual } from "../models/InterestAccrual";

export async function accrueDailyInterest(principal: number, date: Date) {
    const dailyInterest = InterestCalculator.calculateDailyInterest(principal, 2750, date);
    const record = await InterestAccrual.create({
        principal,
        interest: dailyInterest,
        date,
    });
    return record;
}
