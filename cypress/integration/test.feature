Feature: Testing Scenarios

    Scenario Outline: Testing <URL> url
        Given User navigates to "<URL>" url
        Then User checks console for any errors
        Then User checks the response status of "<URL>" page to be <ResponseCode>
        Then User checks all the links on the page

        Examples:
        | URL | ResponseCode |
        | multiModal | 200 |
        | htmlCSS | 200 |
        | bad | 404 |

  