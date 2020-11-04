package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Feature"
		,glue= {"stepDefs"}
		,plugin = { "pretty", "junit:report/Cucumber.xml"} ,
		tags = {"@must, @positive"},
		monochrome = true,
		strict = false,
		dryRun = false
		)

public class FeesTest {

}
