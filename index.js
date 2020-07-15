const Codementor = require('./lib/index');

const codementor = new Codementor('');

codementor.declineSession('5eyyfic1fm').then(sessions =>{
    console.log(sessions)
}).catch(error =>{
    console.log(error)
});