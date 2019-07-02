package bddcucmber.po;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Po_Search 
{
	WebDriver driver;
	public Po_Search(WebDriver driver)
	{
	this.driver=driver;
	}
	@FindBy(how=How.ID, using="search_input")
	WebElement Searchbox;
	@FindBy(how=How.XPATH, using="(//button[@type='submit']//i)[2]")
	WebElement Search;
	public void Use_Searchbox(String u)
	{
		Searchbox.sendKeys(u);
	}
	public void click_Search()
	{
		Search.click();
	}
	public static void validate_search_results() {
		
		
	
	}
	

}
