package stepDefinitions;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition2 {
	
	WebDriver driver = null;
	String AppURL = "http://apps.qa2qe.cognizant.e-box.co.in/CucumberShipmentPagination/";
	
	@Given("^I initialize the firefox driver for shipment page two navigation$")
	public void i_initialize_the_firefox_driver_for_shipment_page_navigation() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Jatin\\Downloads\\Cucumber_Jars\\CucumberJars1\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);		
	    driver.get(AppURL);
	}

	@When("^I click on second page$")
	public void i_click_on_first_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//span/a[text()='2']")).click();
	}

	@Then("^I validate the following data for page two in table$")
	public void i_validate_the_following_data_in_table(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<Map<String, String>> alData = arg1.asMaps(String.class, String.class);
		
		List<WebElement> wbRows = driver.findElements(By.xpath("//body[child::h2='Shipment Details']/table/tbody/tr"));
		int iRowCount = wbRows.size();
		//for each row except the header
		for(int iRow = 1; iRow<iRowCount; iRow++)
		{
			assertEquals(wbRows.get(iRow).findElement(By.xpath(".//td[1]")).getText().trim(), 
					alData.get(iRow-1).get("Name"));
			assertEquals(wbRows.get(iRow).findElement(By.xpath(".//td[2]")).getText().trim(), 
					alData.get(iRow-1).get("Status"));
			assertEquals(wbRows.get(iRow).findElement(By.xpath(".//td[3]")).getText().trim(), 
					alData.get(iRow-1).get("Weight"));
			assertEquals(wbRows.get(iRow).findElement(By.xpath(".//td[4]")).getText().trim(), 
					alData.get(iRow-1).get("Arrival Port"));
			assertEquals(wbRows.get(iRow).findElement(By.xpath(".//td[5]")).getText().trim(), 
					alData.get(iRow-1).get("Departure Port"));
		}
		
		driver.quit();
	}

}
