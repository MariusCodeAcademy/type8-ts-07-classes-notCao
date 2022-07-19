interface Calculator {
  num1: number;
  num2: number;
  add(): number;
  minus(): number;
  // multiply(): number;
}

export default class Calc implements Calculator {
  constructor(public num1: number, public num2: number) {}

  add(): number {
    const sum: number = this.num1 + this.num2;
    console.log(`If jou add ${this.num1} to ${this.num2} === ${sum}`);
    return sum;
  }

  minus(): number {
    const minus: number = this.num1 - this.num2;
    console.log(`If jou subtract from ${this.num1} ${this.num2} === ${minus}`);
    return minus;
  }

  // aprasyti minus()
}
