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

  getBalace(): number {
    return this._balance;
  }

  getOwner(): string {
    return this._owner;
  }
}

const acc = new Account(1, 'Serbentautas', 5);
acc.username = 'Serbas';
// acc.id = 5; // error
console.log('acc.getBalace() ===', acc.getBalace());
const acc2 = new Account(2, 'James Bond', 500);
acc2.deposit(500);
// padaryti owner nepasiekiama is isores
// acc2._owner = 'MIke';
console.log('acc2.getOwner() ===', acc2.getOwner());

// pasirasom metoda kad gautu ownerio varda

console.log('acc ===', acc);
console.log('acc2 ===', acc2);
