package bddcucmber.po;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Po_Register {
	WebDriver driver;
	public Po_Register(WebDriver driver)
	{
	this.driver=driver;
	}
	@FindBy(how=How.LINK_TEXT, using="My Account")
	WebElement myaccount2;
	
	@FindBy(how=How.XPATH, using="//a[@class='ty-btn ty-btn__primary']")
	WebElement singout;
	@FindBy(how=How.LINK_TEXT, using="My Account")
	WebElement myaccount3;
	@FindBy(how=How.XPATH, using="//a[@class='ty-btn ty-btn__primary']")
	WebElement Register;
@FindBy(how=How.ID,using="elm_6")
WebElement FirstName;

@FindBy(how=How.ID,using="elm_7")
WebElement LastName;

@FindBy(how=How.NAME,using="user_data[phone]")
WebElement PhoneNumber;

@FindBy(how=How.ID,using="email")
WebElement Email;

@FindBy(how=How.ID,using="password1")
WebElement Password;
@FindBy(how=How.ID,using="password2")
WebElement Conf_Password;
@FindBy(how=How.ID,using="birthday")
WebElement birthday;

@FindBy(how=How.XPATH ,using="(//td[@class=' ']//a)[2]")
WebElement SelectDate;
@FindBy(how=How.XPATH, using="(//input[@type='checkbox'])[2]")
WebElement Checkbox;
@FindBy(how=How.XPATH, using="//button[text()='Register']")
WebElement btn_Register;
public void myacount()
{
	myaccount2.click();
}

public void signOut()
{
	singout.click();
}
public void myacount2()
{
	myaccount3.click();
}
public void User_register()
{
	Register.click();
}

public void first_name()
{
	FirstName.sendKeys("pragati");
}
public void last_name()
{
	LastName.sendKeys("shamk");
}
public void Phone()
{
	PhoneNumber.sendKeys("918983277695");
}
public void user_Email()
{
	Email.sendKeys("shamk@gmail.com");
}
public void pass()
{
	Password.sendKeys("pragati");
}
public void conf_pass()
{
	Conf_Password.sendKeys("pragati");
}
public void user_birthday()
{
	birthday.click();
}
public void select_birthday()
{
	SelectDate.click();
}
public void checkbox_click()
{
	Checkbox.click();
}
public void button_reg()
{
	btn_Register.click();
}

}
