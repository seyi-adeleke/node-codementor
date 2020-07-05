import Base = require('./index');

class FreelanceJobs extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    fetch() {
        return super.request('freelance-jobs');
    }

}

export = FreelanceJobs;