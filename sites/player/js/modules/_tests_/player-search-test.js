jest.dontMock('../player-search.js');

import searchAPI from '../player-search';

// Build a request
describe('Module can build a request to the search API and', () => {
    it('can build the correct url', () => {
        expect(url).toBe('http://whatever');
    });
    it('can throw an error if request does not have correct params', () => {
        var callAPIWithError = api.doWrongThing();
        var malFormatted = api.badString();
        // expect an error to occur if something wrong
        expect(callAPIWithError).toEqual(error);
        // expect a malformed string to error
        expect(malFormatted).toEqual(error);
    })
});
// successful request
describe('Module can handle a successful call when', () => {
    it('recieves a successful JSON response', () => {
        // check a call was made
        expect(api.makeRequest).toHaveBeenCalled();
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
    it('receives a failed JSON response', () => {
        // expect success to be false
        expect(response.success).toBe(false);
        // expect a reason code
        expect(typeof response.reason).toBe("number");
    });
});
