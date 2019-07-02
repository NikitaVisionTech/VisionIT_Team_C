Feature: Check the Search Functionality for multiple products
  Iterate Search for multiple products
 
  @cscart_search
  Scenario Outline: Search multiple products from feature file
  	Given As a user when I launch application in "chrome" 
	  And navigate to url as "https://demo.cs-cart.com"
    When I enter "<Product>" in top search box
    And click on search submit button 
    Then page navigates to product search results
    And proudct results are displayed
    And close the browser
 
    Examples: 
      | Product         |
      | Computer        |
      | Mobile          |