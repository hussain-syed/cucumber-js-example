Feature: Join Github

Scenario: entering an existing username prompts username already taken error message
    Given I am on the join GitHub page
     When I enter an existing username
     Then I should see username already taken error message