// sukurti klase Person
class Person {
  // firstName, lastName,
  constructor(public firstName: string, public lastName: string) {}

  // getter
  get fullName(): string {
    // fullName getteris = grazina 'James Bond'
    return `${this.firstName} ${this.lastName}`;
  }

  // walk
  // walk metodas paduodam sk kilomentrais ir atspausdina kad nuejom xx kilometru
  walk(val: number): void {
    console.log(`${this.firstName} walked ${val} km today. Yeyyy!`);
  }
}

const p1 = new Person('Severijus', 'Klaida');
const p2 = new Person('Sebentautas', 'Niekada');
console.log('p1 ===', p1);
console.log(p1.fullName);
p1.walk(5);
p2.walk(7);
// p1.fullName = 'Severijus';
