import DirectPayment = require('./resources/DirectPayments');
import FreelanceJobs = require('./resources/FreelanceJobs');
import MonthlyPayout = require('./resources/MonthlyPayout');
import Sessions = require('./resources/Sessions');

class Codementor {
    [x: string]: any;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        if (typeof apiKey !== 'string') {
            throw new Error('Api Key should be a string');
        }
    }
    self = this;

    async directPayment() {
        return await new DirectPayment(this.self.apiKey).fetch();
    }

    // add support for query strings
    async freelanceJobs() {
        return await new FreelanceJobs(this.self.apiKey).fetch();
    }

    async monthlyPayouts(payoutMonth:string) {
        return await new MonthlyPayout(this.self.apiKey).fetch(payoutMonth);
    }

    async sessions() {
        return await new Sessions(this.self.apiKey).fetch();
    }
}


export = Codementor;
