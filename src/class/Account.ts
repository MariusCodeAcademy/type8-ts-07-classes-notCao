/* eslint-disable no-underscore-dangle */
// OOP
class Account {
  // properties
  // public - default, access from anywere
  // private - access from whitnin class
  // protected - access from within and inherited classes
  readonly id: number;
  owner: string;
  private _balance: number;
  username?: string | undefined;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(value: number): void {
    if (value < 0) throw new Error('Invalid amount');
    // record transaction
    this._balance += value;
  }
}

const acc = new Account(1, 'Serbentautas', 5);
acc.username = 'Serbas';
// acc.id = 5; // error
// acc._balance += 1001;
const acc2 = new Account(2, 'James Bond', 500);
acc2.deposit(500);

console.log('acc ===', acc);
console.log('acc2 ===', acc2);
