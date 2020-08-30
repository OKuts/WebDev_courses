const man = new Man('Ivan', 33, 'TT456789', 'm');
const employer = new Employer('Serg', 44, 'AA456789', 'm', '2020-07-28', 2000);

console.log(man);
console.log(employer);
man.render('body', 'out-1');
employer.render('body', 'out-2');
console.log(employer.name);
employer.name = 'Alex';
console.log(employer.name);