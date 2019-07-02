package bddcucumber.managers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverManager {

	private static WebDriver driver;
	
	public static WebDriver GetDriver(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");
			if (driver==null) {
				driver = new ChromeDriver();
			}else {
				return driver;
			}
			
		}else if (browser.equalsIgnoreCase("firefox")) {
			//yet to be written
		}
		return driver;
		
	}

	public static WebDriverManagerSingleton getInstanceOfWebDriverManager() {
		// TODO Auto-generated method stub
		return null;
	}

	
}
