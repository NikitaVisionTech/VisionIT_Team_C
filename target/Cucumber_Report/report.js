$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Github workspace/com.CucumberCScart/Feature/eCommerce/CsCart_AddToCart.feature");
formatter.feature({
  "name": "Add to Cart",
  "description": "  To validate products are added in the cart",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cs_cart"
    },
    {
      "name": "@cs_cart_add_to_cart"
    }
  ]
});
formatter.background({
  "name": "Pre Requsite open and sign in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_login.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on My account link at the top right",
  "keyword": "When "
});
formatter.match({
  "location": "Step_login.i_click_on_My_account_link_at_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and click on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.and_click_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in pop up is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.sign_in_pop_up_is_displayed()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat bddcucumber.stepdefs.Step_AddToCart.sign_in_pop_up_is_displayed(Step_AddToCart.java:11)\r\n\tat ✽.sign in pop up is displayed(D:/Github workspace/com.CucumberCScart/Feature/eCommerce/CsCart_AddToCart.feature:10)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "username and password already entered",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.username_and_password_already_entered()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_login.i_am_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add to cart single product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cs_cart"
    },
    {
      "name": "@cs_cart_add_to_cart"
    }
  ]
});
formatter.step({
  "name": "I enter \"computer\" in top search box",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Search.i_enter_in_top_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.click_on_search_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page navigates to product search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Search.page_navigates_to_product_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "product results are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Step_AddToCart.product_results_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on list view button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_on_list_view_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "products are displayed in list view",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.products_are_displayed_in_list_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click add to cart for product code H0217E3OE9",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_add_to_cart_for_product_code_H_E_OE(Integer,Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "my cart is updated with product quantity as 1 and correct total price",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.my_cart_is_updated_with_product_quantity_as_and_correct_total_price(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Pre Requsite open and sign in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_login.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on My account link at the top right",
  "keyword": "When "
});
formatter.match({
  "location": "Step_login.i_click_on_My_account_link_at_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and click on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.and_click_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in pop up is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.sign_in_pop_up_is_displayed()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat bddcucumber.stepdefs.Step_AddToCart.sign_in_pop_up_is_displayed(Step_AddToCart.java:11)\r\n\tat ✽.sign in pop up is displayed(D:/Github workspace/com.CucumberCScart/Feature/eCommerce/CsCart_AddToCart.feature:10)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "username and password already entered",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.username_and_password_already_entered()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_login.i_am_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add to cart two different products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cs_cart"
    },
    {
      "name": "@cs_cart_add_to_cart"
    }
  ]
});
formatter.step({
  "name": "I enter \"computer\" in top search box",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Search.i_enter_in_top_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.click_on_search_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page navigates to product search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Search.page_navigates_to_product_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "product results are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Step_AddToCart.product_results_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on list view button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_on_list_view_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "products are displayed in list view",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.products_are_displayed_in_list_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click add to cart for product code H0217E3OE9",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_add_to_cart_for_product_code_H_E_OE(Integer,Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click add to cart for product code F01262AH0T",
  "keyword": "And "
});
formatter.match({
  "location": "Step_AddToCart.i_click_add_to_cart_for_product_code_F_AH_T(Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "my cart is updated with product quantity as 2 and correct total price",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.my_cart_is_updated_with_product_quantity_as_and_correct_total_price(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Pre Requsite open and sign in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_login.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on My account link at the top right",
  "keyword": "When "
});
formatter.match({
  "location": "Step_login.i_click_on_My_account_link_at_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and click on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.and_click_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in pop up is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.sign_in_pop_up_is_displayed()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat bddcucumber.stepdefs.Step_AddToCart.sign_in_pop_up_is_displayed(Step_AddToCart.java:11)\r\n\tat ✽.sign in pop up is displayed(D:/Github workspace/com.CucumberCScart/Feature/eCommerce/CsCart_AddToCart.feature:10)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "username and password already entered",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.username_and_password_already_entered()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_login.i_am_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add to cart single product with quantity as 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cs_cart"
    },
    {
      "name": "@cs_cart_add_to_cart"
    }
  ]
});
formatter.step({
  "name": "I enter \"computer\" in top search box",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Search.i_enter_in_top_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.click_on_search_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page navigates to product search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Search.page_navigates_to_product_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "product results are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Step_AddToCart.product_results_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on list view button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_click_on_list_view_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "products are displayed in list view",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.products_are_displayed_in_list_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter quantity as 2 for product code H0217E3OE9",
  "keyword": "When "
});
formatter.match({
  "location": "Step_AddToCart.i_enter_quantity_as_for_product_code_H_E_OE(Integer,Integer,Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click add to cart for product code H0217E3OE9",
  "keyword": "And "
});
formatter.match({
  "location": "Step_AddToCart.i_click_add_to_cart_for_product_code_H_E_OE(Integer,Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "my cart is updated with product quantity as 2 and correct total price",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_AddToCart.my_cart_is_updated_with_product_quantity_as_and_correct_total_price(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("D:/Github workspace/com.CucumberCScart/Feature/eCommerce/CsCart_Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  To validate that I am able to login in to the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cs_cart"
    }
  ]
});
formatter.scenario({
  "name": "validate the sign in pop up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cs_cart"
    },
    {
      "name": "@cs_cart_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_login.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on My account link at the top right",
  "keyword": "When "
});
formatter.match({
  "location": "Step_login.i_click_on_My_account_link_at_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and click on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.and_click_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username and password already entered",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.username_and_password_already_entered()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_login.i_am_logged_in_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("D:/Github workspace/com.CucumberCScart/Feature/eCommerce/CsCart_Search.feature");
formatter.feature({
  "name": "Check the Search Functionality for multiple products",
  "description": "  Iterate Search for multiple products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search multiple products from feature file",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@cscart_search"
    }
  ]
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"\u003cProduct\u003e\" in top search box",
  "keyword": "When "
});
formatter.step({
  "name": "click on search submit button",
  "keyword": "And "
});
formatter.step({
  "name": "page navigates to product search results",
  "keyword": "Then "
});
formatter.step({
  "name": "proudct results are displayed",
  "keyword": "And "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Computer"
      ]
    },
    {
      "cells": [
        "Mobile"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search multiple products from feature file",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@cscart_search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_login.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Computer\" in top search box",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Search.i_enter_in_top_search_box(String)"
});
formatter.write("enter searchComputer");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.click_on_search_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page navigates to product search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Search.page_navigates_to_product_search_results()"
});
formatter.write("validation of the page title is successfull");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "proudct results are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.proudct_results_are_displayed()"
});
formatter.write("validating the Search results");
formatter.write("validation of the Search results is successfull");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search multiple products from feature file",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@cscart_search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_login.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_login.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Mobile\" in top search box",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Search.i_enter_in_top_search_box(String)"
});
formatter.write("enter searchMobile");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.click_on_search_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page navigates to product search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Search.page_navigates_to_product_search_results()"
});
formatter.write("validation of the page title is successfull");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "proudct results are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.proudct_results_are_displayed()"
});
formatter.write("validating the Search results");
formatter.write("validation of the Search results is successfull");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Search.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("D:/Github workspace/com.CucumberCScart/Feature/eCommerce/Cscart_Register.feature");
formatter.feature({
  "name": "Regiter",
  "description": "  To validate that I am able to Register in to the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cs_cart"
    }
  ]
});
formatter.scenario({
  "name": "validate the sign to pop up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cs_cart"
    },
    {
      "name": "@cs_cart_Register"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Register.as_a_user_when_I_launch_application_in(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url \"https://demo.cs-cart.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.navigate_to_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on My account link",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Register.i_click_on_My_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clik on signout",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_clik_on_signout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on my account1",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Register.i_click_on_my_account(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on register button at top of right",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_click_on_register_button_at_top_of_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter first name",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Register.i_enter_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter last name",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_enter_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_enter_phone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_enter_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_enter_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter birthdate",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_enter_birthdate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select birthday",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_select_birthday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check Checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Register.i_check_che()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Reister button",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Register.i_click_on_Reister_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am Register in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Register.i_am_Register_in_to_the_application()"
});
formatter.result({
  "status": "passed"
});
});