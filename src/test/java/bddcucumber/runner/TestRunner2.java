package bddcucumber.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features={"D:\\Github workspace\\com.CucumberCScart\\Feature"},
		glue={"bddcucumber/stepdefs"},
		tags={" @cs_cart_add_to_cart"}
				
)
public class TestRunner2 
{

}
