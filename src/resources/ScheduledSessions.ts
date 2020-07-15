import Base = require('./index');

class ScheduledSessions extends Base {
    constructor(apikey: string) {
        super(apikey);
    }

    confirm(sessionId: string) {
        return super.request(`scheduled-sessions/${sessionId}/confirm`, {}, 'post');
    }

    reschedule(sessionId: string) {
        return super.request(`scheduled-sessions/${sessionId}/reschedule`, {}, 'post');
    }

    decline(sessionId: string) {
        return super.request(`scheduled-sessions/${sessionId}/decline`, {}, 'post');
    }


}

export = ScheduledSessions;