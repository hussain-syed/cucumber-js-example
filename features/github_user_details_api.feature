Feature: Github api user details

Scenario: Calling github's username returns user details when user exists
    Given I have an user with name "photobox" for github
     When I call github endpoint to get user details
     Then The name property in user details should have "PhotoBox"