jest.dontMock('../player-search.js');
jest.donMock('jquery');
let jQuery require('jquery');
// moduel to test
import searchAPI from '../player-search';
// assign $ as a global
$ = jQuery;
// search function
let searchRequest = searchAPI.getInstance();
// Build a request
describe('Module can build a request to the search API and', () => {
    it('can build the correct url', () => {
        // spy on a deffered object
        spyOn($, "Deffered").andCallThrough();
        // spy on ajax
        spyOn($, "ajax").andCallFake((e) => {
            url = e.url;
        });
        //make a request
        searchRequest.searchValue('coronation%20street').retrieve();
        // expect url to be that as called
        expect(url).toBe('http://whatever');
    });
    it('can throw an error if request does not have correct params', () => {
        //search with no values
        let errorCount = 0;
        // expect an error to occur if something wrong
        try {
            // search with incorrect values
            searchRequest.searchValue('').retrieve;
        } catch(e) {
            errorCount++;
        }
        // another eror type
        try {
            // expect non string to error
            searchRequest.searchValue(Object).retrieve();
        } catch (e) {
            // expect an error to have been caught
            errorCount++;
        }
        // expect errors to have occurred twice
        expect(errorCount).toEqual(2);
    })
});
// successful request
describe('Module can handle a successful call when', () => {
    let successFullResponse = require('../__json__/api-sample-success');
    let response = null;

    it('recieves a successful JSON response', () => {
        //set up spies
        spyOn($, 'Deferred').andCallThrough();
        spyOn($, 'ajax').andCallFake((e) => {
            // a successful response would bring back json
            response = successFullResponse;
        });
        // make the call
        searchRequest.searchValue('coronation%20street').retrieve();
        // check if we received an object in response
        expect(typeof response).toBe("object");
        // check if response retrieved was successful
        expect(response.success).toBe(true);
        // check if results are populated
        expect(response.results instanceof Array).toBe(true);
        // expect an array of images to exist
        expect(response.results[0].images instanceof Array).toBe(true);
        // expect a title to exist
        expect(typeof response.results[0].shortName).toBe("string");
        // expect a number of titles to exist
        expect(typeof response.results[0].availableEpisodes).toBe("number");
    });
});
// failed request
describe("Module can handle a failed call when", () => {
    let failResponse = require('../__json__/api-sample-fail');
    //set up spies
    spyOn($, 'Deferred').andCallThrough();
    spyOn($, 'ajax').andCallFake((e) => {
        // a successful response would bring back json
        response = failResponse;
    });
    // simulate a fail - bad string characters
    searchRequest.searchValue('%2090').retrieve();

    it('receives a failed JSON response', () => {
        // expect success to be false
        expect(response.success).toBe(false);
        // expect a reason object
        expect(typeof response.reason).toBe("object");
        // expect a reason code
        expect(typeof response.reason.code).toBe("object");
        // expect a message
        expect(typeof response.reason.message).toBe("string");
    });
});
