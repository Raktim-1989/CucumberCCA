#Please Do not change Feature Templet
Feature: To Test the Shipping details in DATAX Shipping Company
  #Please Do not change Scenario Outline Templet
  Scenario Outline: Title of your scenario outline
    #Please Do not change Given Templet
    Given Start firefox browser and open the application
    When Test the text in H2 tag and the "<ShipmentID>" for ShipmentID
    Then Validate the Customer name "<CustomerName>" is displayed
    Then Quit the browser
    
    Examples:
    |ShipmentID|CustomerName|
    |6543217   |Maya        |