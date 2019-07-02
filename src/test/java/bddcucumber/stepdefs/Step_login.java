package bddcucumber.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import bddcucmber.po.Po_login;


import bddcucumber.managers.WebDriverManagerSingleton;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_login {
	
	WebDriverManagerSingleton browserManager = WebDriverManagerSingleton.getInstanceOfWebDriverManager();
	WebDriver driver = browserManager.getDriver();
	Scenario scn ;
	Po_login Pologin = PageFactory.initElements(driver, Po_login.class);

	@Before
	public void SetUp(Scenario s) {
		this.scn = s;
	}
	
	@Given("As a user when I launch application in {string}")
	public void as_a_user_when_I_launch_application_in(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			browserManager= WebDriverManagerSingleton.getInstanceOfWebDriverManager();
			driver = browserManager.getDriver();
			scn.write("Chrome Driver Invoked");
		}else if (browser.equalsIgnoreCase("firefox")) {
			
		}
	}

	@Given("navigate to url as {string}")
	public void navigate_to_url_as(String url) {
	   driver.get(url);
	}

	@When("I click on My account link at the top right")
	public void i_click_on_My_account_link_at_the_top_right() {
	    Pologin.myaccount();
	}

	@When("and click on Sign in button")
	public void and_click_on_Sign_in_button() {
	    Pologin.sign();
	}

	@When("username and password already entered")
	public void username_and_password_already_entered() {
	   Pologin.customer();
	   Pologin.pass();
	}

	@When("I click on sign button")
	public void i_click_on_sign_in_button() {
	    Pologin.sub();
	}

	@Then("I am logged in to the application")
	public void i_am_logged_in_to_the_application() {

	}

}