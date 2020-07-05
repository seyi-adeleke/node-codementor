import Base = require('./index');

class Sessions extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    // buggy
    fetch(startingAfter?: string) {
        return super.request('sessions', {
            starting_after: startingAfter,
        });
    }

}

export = Sessions;