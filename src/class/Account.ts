/* eslint-disable no-underscore-dangle */
// OOP
export default class Account {
  // properties
  // public - default, access from anywere
  // private - access from whitnin class
  // protected - access from within and inherited classes

  username?: string | undefined;
  // paraterer properties
  constructor(public readonly id: number, private _owner: string, private _balance: number) {}

  deposit(value: number): void {
    if (value < 0) throw new Error('Invalid amount');
    // record transaction
    this._balance += value;
  }

  private calculateTax(tax: number): void {
    console.log(this._balance * tax);
  }

  // changeOnerName(); // leisti pakeisti varda jei gautas slaptazodis yra  === secret

  // getter - get <savybes pavadinimas>
  // setter

  get balace(): number {
    return this._balance;
  }

  get owner(): string {
    return this._owner;
  }
}
