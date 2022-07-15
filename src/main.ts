import Account from './class/Account.js';

console.log('main.ts');

const acc = new Account(1, 'Serbentautas', 5);
acc.username = 'Serbas';

const acc2 = new Account(2, 'James Bond', 500);
acc2.deposit(500);
// acc2.owner = 'Mike';

console.log('acc ===', acc);
console.log('acc2 ===', acc2);
