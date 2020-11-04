#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Title of your scenario
    Given I want to write a step with precondition
    And some other precondition
    When I complete action
    And some other action
    And yet another action
    Then I validate the outcomes
    And check more outcomes

  @tag2, @must, @positive
  Scenario Outline: Title of your scenario outline
    Given I want to launch firefox
    And Navigate to Index Page
    When I verify all the form fields for "<Student Type>" along with "<Students per room>" in step
    Then I verify the "<College Fee>" along with "<Hostel Fee>" along with "<Additional Fee>" along with "<Total Fee>" in step

    Examples: 
      | Student Type | Students per room | College Fee | Hostel Fee | Additional Fee | Total Fee |
      | Day Scholar  |                   |      120000 |            |                |    120000 |
      | Hosteller    |                 1 |      120000 |      75750 |          30300 |    226050 |
      | Hosteller    |                 2 |      120000 |      75750 |          15150 |    210900 |
      | Hosteller    |                 3 |      120000 |      75750 |                |    195750 |
