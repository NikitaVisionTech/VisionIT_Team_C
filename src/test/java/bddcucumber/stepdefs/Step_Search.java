package bddcucumber.stepdefs;



import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


import bddcucmber.po.Po_Search;
import bddcucumber.managers.WebDriverManagerSingleton;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Search
{WebDriverManagerSingleton browserManager = WebDriverManagerSingleton.getInstanceOfWebDriverManager();
WebDriver driver = browserManager.getDriver();
Scenario scn ;
Po_Search PoSearch = PageFactory.initElements(driver, Po_Search.class);

@Before
public void SetUp(Scenario s) {
	this.scn = s;
}
	@When("I enter {string} in top search box")
	public void i_enter_in_top_search_box(String u) {
		PoSearch.Use_Searchbox(u);
		scn.write("enter search"+u);
	}

	@When("click on search submit button")
	public void click_on_search_submit_button() {
	    PoSearch.click_Search();
	}

	@Then("page navigates to product search results")
	public void page_navigates_to_product_search_results() {
		String expected = "Search results";
		String actual = driver.getTitle();
		Assert.assertEquals(expected, actual);
		scn.write("validation of the page title is successfull");
	}

	@Then("proudct results are displayed")
	public void proudct_results_are_displayed() {
		scn.write("validating the Search results");
		Po_Search.validate_search_results();
		scn.write("validation of the Search results is successfull");;
	}

	@Then("close the browser")
	public void close_the_browser() {
	    
	}



}
