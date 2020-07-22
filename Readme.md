
## About
`node-codementor` is a npm package that lets you access the [codementor](https://www.codementor.io) api in your node projects.

## Installation
```bash
npm install --save node-codementor
```

## Getting Started

To use the package import the package into your project and then instantiate a new codementor class with your api key as a parameter (visit https://www.codementor.io/settings/api to get a key.)

```javascript
const Codementor = require('node-codementor');

const codementor = new Codementor('xxxxxxxxxxxxxxx');
```

The codementor class exports the following methods;

| Method  | Parameter  |  Optional | Format   | Details  | Http Method |
|---|---|---|---|---|---|
| directPayments()  | -  | -  |  - |  https://dev.codementor.io/docs#direct-payments |  GET|
|  freelanceJobs() | starting_after  | true  | xxxxxxxx  | https://dev.codementor.io/docs#freelance-jobs  | GET
| monthlyPayouts()  |  payout_month | false  | yyyy-mm  | https://dev.codementor.io/docs#list-payouts-by-month  | GET
| sessions()  |  starting_after  |  true |  xxxxxxxx | https://dev.codementor.io/docs#list-all-sessions  | GET
|  confirmSession() | scheduled_session_id   |  false | xxxxxxxx  | https://dev.codementor.io/docs#confirm  | POST
|  rescheduleSession() | scheduled_session_id   |  false | xxxxxxxx  | https://dev.codementor.io/docs#reschedule  | POST
|  declineSession() | scheduled_session_id   |  false | xxxxxxxx  | https://dev.codementor.io/docs#decline  | POST

## Example
All methods are promisified.

To get all your sessions you can use the following code;
```Javascript
//sessions() also takes an optional `starting_after` argument.
codementor.sessions().then(sessions =>{
    console.log(sessions)
}).catch(error =>{
    console.log(error)
});
```

## Todo
Proper Examples
Tests

## Contributions
Contributions are welcome! Please File any issues or make a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

Copyright &copy; 2020 Seyi Adeleke
