const Codementor = require('./lib/index');

const codementor = new Codementor('');

const payments = codementor.directPayment();

console.log(payments.then(res));