package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.FirefoxBinary;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.*;


public class StepDefinition {

	WebDriver driver;
	String text;

	@Given("^User loads the application and navigate to home page$")
	public void setUp(){		
		System.setProperty("webdriver.gecko.driver", "/usr/bin/geckodriver");
    	FirefoxBinary firefoxBinary = new FirefoxBinary();
    	firefoxBinary.addCommandLineOptions("--headless");
        FirefoxProfile profile=new FirefoxProfile();
    	FirefoxOptions firefoxOptions = new FirefoxOptions();
    	firefoxOptions.setBinary(firefoxBinary);
    	firefoxOptions.setProfile(profile);
        driver=new FirefoxDriver(firefoxOptions);
		driver.get("https://webapps.tekstac.com/Handling_Reg_Expression");
		System.out.println("Application is launched");
	}

	@When("^User enters \"([^\"]*)\" on the tracking page$")
	public void testUserDetails(String Name){
		//Please fill the required codes
		driver.findElement(By.id("userId")).sendKeys(Name);
		driver.findElement(By.id("track")).click();
	}

	@Then("^following should be displayed$")
	public void validateResult(DataTable ShipmentDetails) {
		//Please fill the required codes
		List<String> obj= ShipmentDetails.asList(String.class);
		text = driver.findElement(By.id("result")).getText();

		
	}
	
	@After
	public void closeDriver(){
		driver.quit();
	}
}


