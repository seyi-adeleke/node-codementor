import axios from "axios";
import { PathLike } from "fs";
import * as qs from "qs";

class Base {
    apiKey:string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }
    self = this;
    url = 'https://dev.codementor.io/api';

    getUrl() {
        return this.url;
    }

    getApiKey() {
        return this.self.apiKey;
    }

   async request(resource: string, params?: object) {
        let apiConfig: any = {};
        apiConfig= {
            url: `/${resource}`,
            params,
            returnRejectedPromiseOnError: true,
            withCredentials: true,
            timeout: 30000,
            baseURL: `${this.getUrl()}`,
            headers: {
                'x-codementor-api-key': `${this.getApiKey()}`
            },
        }
        return await this.makeRequest(apiConfig);
    }

    private makeRequest = async (apiConfig: any) => {
        const response = await axios.request(apiConfig);
        return response.data;
    }
}

export = Base;
