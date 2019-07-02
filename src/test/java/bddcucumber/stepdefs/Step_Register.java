package bddcucumber.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import bddcucmber.po.Po_Register;

import bddcucumber.managers.WebDriverManagerSingleton;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Register {
	WebDriverManagerSingleton browserManager = WebDriverManagerSingleton.getInstanceOfWebDriverManager();
	WebDriver driver = browserManager.getDriver();
	Scenario scn ;
	Po_Register Po_Regis = PageFactory.initElements(driver, Po_Register.class);

	@Before
	public void SetUp(Scenario s) {
		this.scn = s;
	}
	
	

	
	@Given("As a user I launch application in {string}")
	public void as_a_user_when_I_launch_application_in(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			browserManager= WebDriverManagerSingleton.getInstanceOfWebDriverManager();
			driver = browserManager.getDriver();
			scn.write("Chrome Driver Invoked");
		}else if (browser.equalsIgnoreCase("firefox")) {
			
		}
	}
	
	@Given("navigate to url {string}")
	public void navigate_to_url_as(String url) {
	     driver.get(url);;
	}

	@When("I click on My account link")
	public void i_click_on_My_account_link() {
	    Po_Regis.myacount();
	}

	@When("I clik on signout")
	public void i_clik_on_signout() {
		Po_Regis.signOut();
	   
	}

	@Then("I click on my account{int}")
	public void i_click_on_my_account(Integer int1) {
	    Po_Regis.myacount2();
	}

	@Then("I click on register button at top of right")
	public void i_click_on_register_button_at_top_of_right() {
	    Po_Regis.User_register();
	}

	@Then("I enter first name")
	public void i_enter_first_name() {
	   Po_Regis.first_name();
	}

	@Then("I enter last name")
	public void i_enter_last_name() {
	   Po_Regis.last_name();
	}

	@Then("I enter phone")
	public void i_enter_phone() {
	    Po_Regis.Phone();
	}

	@Then("I enter Email")
	public void i_enter_Email() {
	    Po_Regis.user_Email();
	}

	@Then("I enter password")
	public void i_enter_password() {
	    Po_Regis.pass();
	}

	@Then("I enter confirm password")
	public void i_enter_confirm_password() {
	   Po_Regis.conf_pass();
	}

	@Then("I enter birthdate")
	public void i_enter_birthdate() {
	   Po_Regis.user_birthday();
	}

	@Then("I select birthday")
	public void i_select_birthday() {
	    Po_Regis.select_birthday();
	}
	@Then("I check Checkbox")
	public void i_check_che() {
	    Po_Regis.checkbox_click();
	}


	@When("I click on Reister button")
	public void i_click_on_Reister_button() {
	    Po_Regis.button_reg();
	}

	@Then("I am Register in to the application")
	public void i_am_Register_in_to_the_application() {
	    
	}


}
