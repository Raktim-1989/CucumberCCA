package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.FirefoxBinary;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.*;

public class StepDefinition {

	WebDriver driver;
	
@Given("^Start firefox browser and open the application$")
public void SetUp() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "/usr/bin/geckodriver");
    	FirefoxBinary firefoxBinary = new FirefoxBinary();
    	firefoxBinary.addCommandLineOptions("--headless");
        FirefoxProfile profile=new FirefoxProfile();
    	FirefoxOptions firefoxOptions = new FirefoxOptions();
    	firefoxOptions.setBinary(firefoxBinary);
    	firefoxOptions.setProfile(profile);
        driver=new FirefoxDriver(firefoxOptions);
	    driver.get("https://webapps.tekstac.com/shippingDetails/");
}

@When("^Test the text in H2 tag and the \"([^\"]*)\" for ShipmentID$")
public void  testShippingDetails(String arg1) throws Throwable {
	WebElement ele=driver.findElement(By.xpath("//center/h2"));
	String header=ele.getText();
	Assert.assertEquals(header,"Shipping Details");
	WebElement ele2=driver.findElement(By.xpath("//a[text()='"+arg1+"']"));
	String link=ele2.getText();
	Assert.assertEquals(link, arg1);
	ele2.click();
	
	
	
}

@Then("^Validate the Customer name \"([^\"]*)\" is displayed$")
public void  validateResult(String arg1) throws Throwable {
   //Please fill the required codes
	
	WebElement ele2=driver.findElement(By.xpath("//div[@id='result']/descendant::table/tbody/tr/td[text()='"+arg1+"']"));
	String name=ele2.getText();
	Assert.assertEquals(name, arg1);
}

@Then("^Quit the browser$")
public void Quit_the_browser() throws Throwable {
    driver.close();
}


}
  