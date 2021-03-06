import baseClass from '../stv-base-class';
import apiClient from '../api-client';
import errorHandler from '../error-handler';

// create search class - with error handler and api client base
@baseClass
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
            throw new Error(e.message);
        }
    }
    retrieve() {
        try {
            this.hasValue(this.requestParams.input);
            /* some func */
            makeAPIRequest().done((data) => {
                return data;
            });
        } catch (e) {
            // RequiredError from ErrorHandler
            throw new Error(e.message);
        }
    }
}
