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

  @page1, @must, @positive
  Scenario: Title of your scenario
    Given I initialize the firefox driver for shipment page navigation
    When I click on first page
    Then I validate the following data in table
      | Name              | Status  | Weight  | Arrival Port | Departure Port |
      | Computers         | Pending | 36542.0 | Shanghai     | Singapore      |
      | Laptops           | Arrived | 13516.0 | Shenzhen     | HongKong       |
      | Furnitures        | Delayed | 15653.0 | Ningbo       | Gangzhou       |
      | Electronic wastes | Pending | 68466.0 | Busan        | Qingdao        |
      | Chairs            | Delayed | 16843.0 | Tainjin      | Dubai          |