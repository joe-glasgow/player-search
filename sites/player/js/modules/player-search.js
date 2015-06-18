import apiClient from '../api-client';
import errorHandler from '../error-handler';

// create search class - with error handler and api client base
@errorHandler
@apiClient
export default class playerSearch {
    constructor() {
        // add /search/ to api url  http://{this.apiurl}/search/
        this.queryType = 'search'
    }
    searchValue(value) {
        /* some func*/
        try {
            //error handler for is string will throw error if not a string
            this.isString(value);
            //add search input to query  http://{this.apiurl}/search/?input=<value>
            this.requestParams.input = value;
        } catch(e) {
            throw new TypeError("Value must be a string");
        }
    }
    retrieve() {
        /* some func */
        makeAPIRequest().done(function (data) {
            return data;
        });
    }
}
