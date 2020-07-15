import Base = require('./index');

class FreelanceJobs extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    fetch(startingAfter?: string) {
        return super.request('freelance-jobs', {starting_after: startingAfter});
    }

}

export = FreelanceJobs;