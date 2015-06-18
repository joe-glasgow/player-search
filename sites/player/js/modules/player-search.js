import apiClient from '../api-client';
import errorHandler from '../error-handler';

// create search class - with error handler and api client base
@errorHandler
@apiClient
export default class playerSearch {
    constructor() {
        // add /search/ to api url  http://api/search/
        this.queryType = 'search'
    }
    searchValue(value) {
        /* some func*/
    }
    retrieve() {
        /* some func */
    }
}
