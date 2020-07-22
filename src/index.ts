import DirectPayment = require('./resources/DirectPayments');
import FreelanceJobs = require('./resources/FreelanceJobs');
import MonthlyPayout = require('./resources/MonthlyPayout');
import Sessions = require('./resources/Sessions');
import ScheduledSessions = require('./resources/ScheduledSessions');

class Codementor {
    [x: string]: any;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        if (typeof apiKey !== 'string') {
            throw new Error('Api Key should be a string');
        }
    }
    self = this;

    async directPayments() {
        return await new DirectPayment(this.self.apiKey).fetch();
    }

    async freelanceJobs(startingAfter?: string) {
        return await new FreelanceJobs(this.self.apiKey).fetch(startingAfter);
    }

    async monthlyPayouts(payoutMonth:string) {
        return await new MonthlyPayout(this.self.apiKey).fetch(payoutMonth);
    }

    async sessions(startingAfter?: string) {
        return await new Sessions(this.self.apiKey).fetch(startingAfter);
    }

    async confirmSession(sessionId: string) {
        return await new ScheduledSessions(this.self.apiKey).confirm(sessionId);
    }

    async rescheduleSession(sessionId: string) {
        return await new ScheduledSessions(this.self.apiKey).reschedule(sessionId);
    }

    async declineSession(sessionId: string) {
        return await new ScheduledSessions(this.self.apiKey).decline(sessionId);
    }
}


export = Codementor;
