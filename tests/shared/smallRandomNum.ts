export function smallRandomNum(): number {
    const num = Math.random();
    if (num >= 0.5) throw new Error("I got rejected :(");

    return num;
}