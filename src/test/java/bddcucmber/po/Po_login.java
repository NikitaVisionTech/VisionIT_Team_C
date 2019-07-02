package bddcucmber.po;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Po_login {
	
	WebDriver driver;
	public Po_login(WebDriver driver)
	{
	this.driver=driver;
	}
	@FindBy(how=How.LINK_TEXT, using="My Account")
	WebElement myaccount1;
	@FindBy(how=How.LINK_TEXT, using="Sign in")
	WebElement signIn1;
	@FindBy(how=How.ID, using="login_main_login")
	WebElement customerID;
	@FindBy(how=How.ID, using="psw_main_login")
	WebElement password;
	//@FindBy(how=How.LINK_TEXT, using="Sign in")
	//WebElement submit;
	@FindBy(how=How.XPATH,using="(//div/div/button[text()='Sign in'])[2]")
	WebElement submit;

	public void myaccount()
	{
		myaccount1.click();
	}
	public void sign()
	{
		signIn1.click();
	}
	public void customer()
	{
		customerID.clear();
		customerID.sendKeys("customer@example.com");
	}
	public void pass()
	{
		password.clear();
		password.sendKeys("customer");
	}

	public void sub()
	{
		submit.click();
	}
	}



