import Account from './class/Account.js';
import Transaction from './class/Transaction.js';

console.log('main.ts');

const acc = new Account(1, 'Serbentautas', 5);
acc.username = 'Serbas';

const acc2 = new Account(2, 'James Bond', 500);
acc2.deposit(500);
// acc2.owner = 'Mike';
acc.changeOwnerName('Severijus', 'secret1');
console.log('acc ===', acc);
console.log('acc2 ===', acc2);

const tr1 = new Transaction('dog', 'cat', 125);
// console.log('tr1 ===', tr1);
// acc.deposit(tr1);
