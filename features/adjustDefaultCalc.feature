Feature: Adjust default calculator

  Background:
    Given user is on the retirement calculator page
@regression
  Scenario: Default calculator modal input validations
  
    When user selects Adjust default values link
    Then modal with title default value is displayed
