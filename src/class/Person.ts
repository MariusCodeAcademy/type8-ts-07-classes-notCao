// sukurti klase Person
class Person {
  // firstName, lastName,
  private _todayWalked: number;
  constructor(public firstName: string, public lastName: string) {
    this._todayWalked = 0;
  }

  // getter
  get fullName(): string {
    // fullName getteris = grazina 'James Bond'
    return `${this.firstName} ${this.lastName}`;
  }

  // walk
  // walk metodas paduodam sk kilomentrais ir atspausdina kad nuejom xx kilometru
  walk(val: number): void {
    this._todayWalked += val;
    console.log(`${this.firstName} walked ${val} km just now. Yeyyy!`);
  }

  // getteris today waked
  get todayWalked(): number {
    console.log(`${this.firstName} walked ${this._todayWalked} km Today. Yeyyy!`);
    return this._todayWalked;
  }
}

class Student extends Person {
  constructor(public readonly email: string, firstName: string, lastName: string) {
    // super === Person.contstrutor()
    super(firstName, lastName);
  }

  takeTest(subject: string): void {
    console.log(`${this.firstName} is taking a test in ${subject}`);
  }
}

const p1 = new Person('Severijus', 'Klaida');
const p2 = new Student('Sebas@Niekada.com', 'Sebentautas', 'Niekada');
p2.takeTest('Node authorization');
// console.log('p2 ===', p2);
// console.log(p1.fullName);
// p1.walk(5);
// p1.walk(5);
p2.walk(5);
p2.walk(7);
// cp1onsole.log('p1 ===', p1);
p2.todayWalked;
// p1.fullName = 'Severijus';

// extends ekvivalentas
// const user = {
//   name: 'John',
//   age: 34,
// };
// const userEmail = {
//   ...user,
//   email: 'john@example.com',
// };
