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
    return `${this.firstName} ${this.lastName}!`;
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

type TeacherSubs = 'Math' | 'Literature' | 'Architecture';

class Teacher extends Person {
  workWeek: [1?, 2?, 3?, 4?, 5?, 6?, 7?] = [];
  constructor(public subject: TeacherSubs, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  // perrasant tevines klases metoda pridedam override
  override get fullName(): string {
    // super === tevine klase
    return `Doc. ${super.fullName}`;
  }
}

const t1 = new Teacher('Architecture', 'James', 'Band');
const t2 = new Teacher('Math', 'Mike', 'Tyson');
// t2.walk(5);
// t2.walk(5);
// t2.walk(10);
// [7, 7, 6].forEach((t: number) => t1.walk(t));
// console.log('t1 ===', t1.todayWalked);
// console.log('t2 ===', t2.todayWalked);

t1.workWeek = [1, 2, , , 5];

console.log('t1.fullName ===', t1.fullName);

// const p1 = new Person('Severijus', 'Klaida');
// const p2 = new Student('Sebas@Niekada.com', 'Sebentautas', 'Niekada');
// p2.takeTest('Node authorization');
// // console.log('p2 ===', p2);
// // console.log(p1.fullName);
// // p1.walk(5);
// // p1.walk(5);
// p2.walk(5);
// p2.walk(7);
// // cp1onsole.log('p1 ===', p1);
// p2.todayWalked;
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
