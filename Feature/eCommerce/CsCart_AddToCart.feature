@cs_cart   @cs_cart_add_to_cart
Feature: Add to Cart
  To validate products are added in the cart

  Background: Pre Requsite open and sign in
		Given As a user when I launch application in "chrome" 
	  And navigate to url as "https://demo.cs-cart.com"
    When I click on My account link at the top right
    And and click on Sign in button
    Then sign in pop up is displayed
		And username and password already entered
		When I click on sign in button
		Then I am logged in to the application
		
		Scenario: Add to cart single product
	    When I enter "computer" in top search box
	    And click on search submit button 
	    Then page navigates to product search results
	    And product results are displayed
	    When I click on list view button
	    Then products are displayed in list view
	    When I click add to cart for product code H0217E3OE9
			Then my cart is updated with product quantity as 1 and correct total price
	    And close the browser
		
		Scenario: Add to cart two different products
	    When I enter "computer" in top search box
	    And click on search submit button 
	    Then page navigates to product search results
	    And product results are displayed
	    When I click on list view button
	    Then products are displayed in list view
	    When I click add to cart for product code H0217E3OE9
	    And I click add to cart for product code F01262AH0T
			Then my cart is updated with product quantity as 2 and correct total price
	    And close the browser

		Scenario: Add to cart single product with quantity as 2
	    When I enter "computer" in top search box
	    And click on search submit button 
	    Then page navigates to product search results
	    And product results are displayed
	    When I click on list view button
	    Then products are displayed in list view
	    When I enter quantity as 2 for product code H0217E3OE9
	    And I click add to cart for product code H0217E3OE9
			Then my cart is updated with product quantity as 2 and correct total price
	    And close the browser