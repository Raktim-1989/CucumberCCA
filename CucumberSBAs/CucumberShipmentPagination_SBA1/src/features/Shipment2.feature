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

  @page2, @must, @positive
  Scenario: Title of your scenario
    Given I initialize the firefox driver for shipment page two navigation
    When I click on second page
    Then I validate the following data for page two in table
      | Name            | Status  | Weight  | Arrival Port | Departure Port |
      | Shoes           | Pending | 76516.0 | Rotterdam    | Klang          |
      | Clothings       | Arrived | 16846.0 | Kaohsiung    | Dalian         |
      | Mobile Phomes   | Delayed | 46863.0 | Hemburg      | Antwerp        |
      | Chemical Wastes | Pending | 46846.0 | Xiamen       | LosAngeles     |
      | Television      | Delayed | 86563.0 | LongBeach    | TanjungPriok   |
