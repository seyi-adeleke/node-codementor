import DirectPayment = require('./resources/DirectPayments');

class Codementor {
    [x: string]: any;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        if (typeof apiKey !== 'string') {
            throw new Error('Api Key should be a string');
        }
    }
    self = this;

    directPayment() {
        return new DirectPayment(this.self.apiKey).fetch();
    }
}


export = Codementor;
