import Base = require('./index');

class MonthlyPayout extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    fetch(payoutMonth: string) {
        return super.request('payouts/monthly-payouts', {
            payout_month: payoutMonth
        });
    }

}

export = MonthlyPayout;