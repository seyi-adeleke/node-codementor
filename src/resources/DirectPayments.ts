import Base = require('./index');

class DirectPayment extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    fetch(startingAfter?: string) {
        return super.request('direct-payments', {starting_after: startingAfter});
    }

}

export = DirectPayment;