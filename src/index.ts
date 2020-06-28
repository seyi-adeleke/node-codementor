const ROOT_URL = 'https://dev.codementor.io/api/';

class Codementor {
    apiKey:string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        if (typeof apiKey !== 'string') {
            throw new Error('Api Key should be a string');
        }
    }

    getVersion() {
        return '0.0.1';
    }
}


export = Codementor;
