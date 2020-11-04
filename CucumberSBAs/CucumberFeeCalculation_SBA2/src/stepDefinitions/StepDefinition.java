package stepDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	WebDriver driver = null;
	String AppURL = "http://apps.qa2qe.cognizant.e-box.co.in/CucumberHostelFeeCalc/";

	@Given("^I want to launch firefox$")
	public void i_want_to_launch_firefox() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Jatin\\Downloads\\Cucumber_Jars\\CucumberJars1\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);	    
	}

	@Given("^Navigate to Index Page$")
	public void navigate_to_Index_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(AppURL);
	}

	@When("^I verify all the form fields for \"([^\"]*)\" along with \"([^\"]*)\" in step$")
	public void i_verify_all_the_form_fields_for_along_with_in_step(String type, String room) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    WebElement wbName = driver.findElement(By.id("name"));
	    WebElement wbNumber = driver.findElement(By.id("number"));
	    WebElement wbGetFee = driver.findElement(By.id("getFee"));
	    WebElement wbHosteller = driver.findElement(By.xpath("//input[@name='type' and @value='hosteller']"));
	    WebElement wbDayScholar = driver.findElement(By.xpath("//input[@name='type' and @value='day-scholar']"));
	    assertTrue(wbName.isDisplayed());
	    assertTrue(wbNumber.isDisplayed());
	    assertTrue(wbHosteller.isDisplayed());
	    assertTrue(wbDayScholar.isDisplayed());
	    assertTrue(wbGetFee.isDisplayed());
	    wbName.sendKeys("Keerthi");
	    if(type.equalsIgnoreCase("Hosteller"))
	    {
	    	wbHosteller.click();
	    }
	    else
	    {
	    	wbDayScholar.click();
	    }
	    wbNumber.sendKeys(room);
	    
	    wbGetFee.click();
	}

	@Then("^I verify the \"([^\"]*)\" along with \"([^\"]*)\" along with \"([^\"]*)\" along with \"([^\"]*)\" in step$")
	public void i_verify_the_along_with_along_with_along_with_in_step(String collegeFee, String hostelFee, String additionalFee, String totalFee) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    WebElement wbTable = driver.findElement(By.id("feeTable"));
	    String CollegeFee = wbTable.findElement(By.xpath(".//tr[1]/td[2]")).getText().trim();
	    String HostelFee = wbTable.findElement(By.xpath(".//tr[2]/td[2]")).getText().trim();
	    String AdditionalFee = wbTable.findElement(By.xpath(".//tr[3]/td[2]")).getText().trim();
	    String TotalFee = wbTable.findElement(By.xpath(".//tr[4]/td[2]")).getText().trim();
	    
	    if(collegeFee.trim().equals(""))
	    {
	    	collegeFee = "0";
	    }
	    if(hostelFee.trim().equals(""))
	    {
	    	hostelFee = "0";
	    }
	    if(additionalFee.trim().equals(""))
	    {
	    	additionalFee = "0";
	    }

	    
	    assertEquals(Integer.parseInt(collegeFee), Integer.parseInt(CollegeFee.replace("Rs.", "").replace(".0", "").replace("--", "0")));
	    assertEquals(Integer.parseInt(hostelFee), Integer.parseInt(HostelFee.replace("Rs.", "").replace(".0", "").replace("--", "0")));
	    assertEquals(Integer.parseInt(additionalFee), Integer.parseInt(AdditionalFee.replace("Rs.", "").replace(".0", "").replace("--", "0")));
	    assertEquals(Integer.parseInt(totalFee), Integer.parseInt(TotalFee.replace("Rs.", "").replace(".0", "").replace("--", "0")));
	    
	    driver.quit();
	}
	
}
