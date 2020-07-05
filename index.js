const Codementor = require('./lib/index');

const codementor = new Codementor('99a91c236992640e6d57');

codementor.sessions('5foer0ruzq').then(sessions =>{
    console.log(sessions)
}).catch(error =>{
    console.log(sessions)
});