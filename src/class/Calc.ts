export default class Calc {
  constructor(public num1: number, public num2: number) {}

  add(): number {
    const sum: number = this.num1 + this.num2;
    console.log(`If jou add ${this.num1} to ${this.num2} === ${sum}`);
    return sum;
  }

  // aprasyti minus()
}
