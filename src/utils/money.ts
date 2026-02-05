export type Cents = number;


export function divFloor(a: number, b: number): number {
    if (b === 0) throw new Error("Division by zero");
    return Math.floor(a / b);
}


export function mulDivFloor(a: number, numerator: number, denominator: number): number {
    return divFloor(a * numerator, denominator);
}
