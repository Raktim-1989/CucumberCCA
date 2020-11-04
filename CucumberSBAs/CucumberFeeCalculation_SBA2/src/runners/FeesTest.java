package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/features",
		glue= {"stepDefinitions"},
		plugin = {"pretty", "html:target/cucumber-reports"},
		tags = {"@must, @positive"},
		monochrome = true,
		strict = false,
		dryRun = false
		)

public class FeesTest {

}
