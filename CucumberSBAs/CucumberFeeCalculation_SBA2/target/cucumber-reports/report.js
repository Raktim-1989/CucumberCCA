$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CollegeFee.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2,"
    },
    {
      "line": 33,
      "name": "@must,"
    },
    {
      "line": 33,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to launch firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to Index Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify all the form fields for \"\u003cStudent Type\u003e\" along with \"\u003cStudents per room\u003e\" in step",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify the \"\u003cCollege Fee\u003e\" along with \"\u003cHostel Fee\u003e\" along with \"\u003cAdditional Fee\u003e\" along with \"\u003cTotal Fee\u003e\" in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "Student Type",
        "Students per room",
        "College Fee",
        "Hostel Fee",
        "Additional Fee",
        "Total Fee"
      ],
      "line": 41,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "Day Scholar",
        "",
        "120000",
        "",
        "",
        "120000"
      ],
      "line": 42,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "Hosteller",
        "1",
        "120000",
        "75750",
        "30300",
        "226050"
      ],
      "line": 43,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    },
    {
      "cells": [
        "Hosteller",
        "2",
        "120000",
        "75750",
        "15150",
        "210900"
      ],
      "line": 44,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;4"
    },
    {
      "cells": [
        "Hosteller",
        "3",
        "120000",
        "75750",
        "",
        "195750"
      ],
      "line": 45,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2,"
    },
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@positive"
    },
    {
      "line": 33,
      "name": "@must,"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to launch firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to Index Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify all the form fields for \"Day Scholar\" along with \"\" in step",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify the \"120000\" along with \"\" along with \"\" along with \"120000\" in step",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_want_to_launch_firefox()"
});
formatter.result({
  "duration": 4906046213,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.navigate_to_Index_Page()"
});
formatter.result({
  "duration": 577773151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Day Scholar",
      "offset": 34
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "StepDefinition.i_verify_all_the_form_fields_for_along_with_in_step(String,String)"
});
formatter.result({
  "duration": 1349968228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120000",
      "offset": 14
    },
    {
      "val": "",
      "offset": 34
    },
    {
      "val": "",
      "offset": 48
    },
    {
      "val": "120000",
      "offset": 62
    }
  ],
  "location": "StepDefinition.i_verify_the_along_with_along_with_along_with_in_step(String,String,String,String)"
});
formatter.result({
  "duration": 1206290096,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2,"
    },
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@positive"
    },
    {
      "line": 33,
      "name": "@must,"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to launch firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to Index Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify all the form fields for \"Hosteller\" along with \"1\" in step",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify the \"120000\" along with \"75750\" along with \"30300\" along with \"226050\" in step",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_want_to_launch_firefox()"
});
formatter.result({
  "duration": 2765643747,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.navigate_to_Index_Page()"
});
formatter.result({
  "duration": 574259121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hosteller",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "StepDefinition.i_verify_all_the_form_fields_for_along_with_in_step(String,String)"
});
formatter.result({
  "duration": 1111917607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120000",
      "offset": 14
    },
    {
      "val": "75750",
      "offset": 34
    },
    {
      "val": "30300",
      "offset": 53
    },
    {
      "val": "226050",
      "offset": 72
    }
  ],
  "location": "StepDefinition.i_verify_the_along_with_along_with_along_with_in_step(String,String,String,String)"
});
formatter.result({
  "duration": 1250357974,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2,"
    },
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@positive"
    },
    {
      "line": 33,
      "name": "@must,"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to launch firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to Index Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify all the form fields for \"Hosteller\" along with \"2\" in step",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify the \"120000\" along with \"75750\" along with \"15150\" along with \"210900\" in step",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_want_to_launch_firefox()"
});
formatter.result({
  "duration": 2569023632,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.navigate_to_Index_Page()"
});
formatter.result({
  "duration": 550574550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hosteller",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 57
    }
  ],
  "location": "StepDefinition.i_verify_all_the_form_fields_for_along_with_in_step(String,String)"
});
formatter.result({
  "duration": 915672391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120000",
      "offset": 14
    },
    {
      "val": "75750",
      "offset": 34
    },
    {
      "val": "15150",
      "offset": 53
    },
    {
      "val": "210900",
      "offset": 72
    }
  ],
  "location": "StepDefinition.i_verify_the_along_with_along_with_along_with_in_step(String,String,String,String)"
});
formatter.result({
  "duration": 1195726389,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2,"
    },
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@positive"
    },
    {
      "line": 33,
      "name": "@must,"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to launch firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Navigate to Index Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify all the form fields for \"Hosteller\" along with \"3\" in step",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify the \"120000\" along with \"75750\" along with \"\" along with \"195750\" in step",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_want_to_launch_firefox()"
});
formatter.result({
  "duration": 3017781207,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.navigate_to_Index_Page()"
});
formatter.result({
  "duration": 826453469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hosteller",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 57
    }
  ],
  "location": "StepDefinition.i_verify_all_the_form_fields_for_along_with_in_step(String,String)"
});
formatter.result({
  "duration": 963868698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120000",
      "offset": 14
    },
    {
      "val": "75750",
      "offset": 34
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "195750",
      "offset": 67
    }
  ],
  "location": "StepDefinition.i_verify_the_along_with_along_with_along_with_in_step(String,String,String,String)"
});
formatter.result({
  "duration": 983903844,
  "status": "passed"
});
});