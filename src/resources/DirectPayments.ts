import Base = require('./index');

class DirectPayment extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    fetch() {
        return super.request('direct-payments');
    }

}

export = DirectPayment;