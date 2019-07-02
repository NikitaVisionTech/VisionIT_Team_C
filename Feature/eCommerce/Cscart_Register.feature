@cs_cart
Feature: Regiter
  To validate that I am able to Register in to the application

  @cs_cart_Register
  Scenario: validate the sign to pop up
		Given As a user I launch application in "chrome" 
	  And navigate to url "https://demo.cs-cart.com"
    When I click on My account link 
    And I clik on signout
    Then I click on my account1
    And I click on register button at top of right
    Then I enter first name
		And I enter last name
		And I enter phone 
		And I enter Email
		And I enter password
		And I enter confirm password
		And I enter birthdate
		And I select birthday
		And I check Checkbox
		When I click on Reister button
		Then I am Register in to the application