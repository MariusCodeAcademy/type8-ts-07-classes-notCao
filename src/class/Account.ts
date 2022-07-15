/* eslint-disable no-underscore-dangle */
// OOP
class Account {
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

  changeOnerName(); // leisti pakeisti varda jei gautas slaptazodis yra  === secret

  // getter - get <savybes pavadinimas>
  // setter

  get balace(): number {
    return this._balance;
  }

  get owner(): string {
    return this._owner;
  }
}

const acc = new Account(1, 'Serbentautas', 5);
acc.username = 'Serbas';

console.log('acc.balace ===', acc.balace);
const acc2 = new Account(2, 'James Bond', 500);
acc2.deposit(500);
acc2.owner = 'Mike';
console.log('acc2.owner ===', acc2.owner);
console.log('acc ===', acc);
console.log('acc2 ===', acc2);
