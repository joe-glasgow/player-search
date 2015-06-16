# Player Search

## As a customer, I would like to use a basic search function, so that I can find a programme to watch

### QA Test Cases

(*taken from Target Process*)

    Verify there is a search icon on the homepage that opens the overlay when clicked.

    Verify there is a search icon on programme pages that opens the overlay when clicked.

    Verify there is a search icon on episode pages that opens the overlay when clicked.

    Verify there is a search icon on the watch live page that opens the overlay when clicked.

    Verify the user can type in free text in the Search box and results are returned when hitting enter.

    Ensure the programme image, title & number of available episodes is returned with the list of results.

    Verify there is a clear button to clear the text that was typed.

    Verify there is a clear button to clear the text that was typed.

    Verify the user can click through on the Search results to the programme page.

    Ensure a suitable message is returned to the user when no results are found.

    Ensure when the Search results are closed and then repoened again that the previous results are no longer displayed.

    Verify the search icon works when signed out.

## Unit Tests

From first glance, not many of the QA test cases could be bona fide unit test - being more akin to dom and "end-to-end" (e2e) tests. However a couple stand out:

    Ensure the programme image, title & number of available episodes is returned with the list of results.
    Ensure a suitable message is returned to the user when no results are found.

From these the following unit tests could be written:

#### Describe:
	Module can build a request to the search API and
	    It can build the correct url
	    	expect the built url to be that of correct url

	    It can throw an error if request does not have correct parameters
	    	expect an error if the request  is not correct format
	    	expect an error if incorrect query type sent to module

#### Describe:
	Module can handle a successful call when
		It receives a successful JSON response
			expect the response to fit the format of a successful response as determined by API docs
			expect a successful callback to have been called

#### Describe:
	Module can handle a failed call when
		 It receives a  failed JSON response
			expect a fail response to fit the format as defined in the API
			expect a server error to be hanlded with error and message to user


But wait! We need to build some more things for these tests to pass!

A layer that can communicate with the API and an error handling module - these
will also need unit tested!

#### Test Plan:
	Build a layer that can communicate with the STV player API
		Layer must handle various parameters as defined in the STV player API docs
		Layer must be able to handle errors
		Layer must be able defer response and pass back success or error functions.

##### Create base API Module - test cases as above
        Create an Error handling Module
        Unit Test error handling Module

#### describe -
	Error module can return an invalid response when
		It receives a request for data of the wrong type
			expect given strings when expecting a number to throw an error
			expect given numbers when expecting strings to throw an error
    Error module can notify of an correct  API url when
		It receives a malformed string
			expect incorrect url to throw error
			expect badly formatted url to throw error
	Error module can notify session log when
		It receives any error
			expect all error types to write to session log
			expect session log to contain correct error information
