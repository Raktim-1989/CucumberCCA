$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Shipment1.feature");
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
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@page1,"
    },
    {
      "line": 23,
      "name": "@must,"
    },
    {
      "line": 23,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I initialize the firefox driver for shipment page navigation",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on first page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate the following data in table",
  "rows": [
    {
      "cells": [
        "Name",
        "Status",
        "Weight",
        "Arrival Port",
        "Departure Port"
      ],
      "line": 28
    },
    {
      "cells": [
        "Computers",
        "Pending",
        "36542.0",
        "Shanghai",
        "Singapore"
      ],
      "line": 29
    },
    {
      "cells": [
        "Laptops",
        "Arrived",
        "13516.0",
        "Shenzhen",
        "HongKong"
      ],
      "line": 30
    },
    {
      "cells": [
        "Furnitures",
        "Delayed",
        "15653.0",
        "Ningbo",
        "Gangzhou"
      ],
      "line": 31
    },
    {
      "cells": [
        "Electronic wastes",
        "Pending",
        "68466.0",
        "Busan",
        "Qingdao"
      ],
      "line": 32
    },
    {
      "cells": [
        "Chairs",
        "Delayed",
        "16843.0",
        "Tainjin",
        "Dubai"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.i_initialize_the_firefox_driver_for_shipment_page_navigation()"
});
formatter.result({
  "duration": 4222216154,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.i_click_on_first_page()"
});
formatter.result({
  "duration": 297636663,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.i_validate_the_following_data_in_table(DataTable)"
});
formatter.result({
  "duration": 1484866690,
  "status": "passed"
});
formatter.uri("Shipment2.feature");
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
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@page2,"
    },
    {
      "line": 23,
      "name": "@must,"
    },
    {
      "line": 23,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I initialize the firefox driver for shipment page two navigation",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on second page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate the following data for page two in table",
  "rows": [
    {
      "cells": [
        "Name",
        "Status",
        "Weight",
        "Arrival Port",
        "Departure Port"
      ],
      "line": 28
    },
    {
      "cells": [
        "Shoes",
        "Pending",
        "76516.0",
        "Rotterdam",
        "Klang"
      ],
      "line": 29
    },
    {
      "cells": [
        "Clothings",
        "Arrived",
        "16846.0",
        "Kaohsiung",
        "Dalian"
      ],
      "line": 30
    },
    {
      "cells": [
        "Mobile Phomes",
        "Delayed",
        "46863.0",
        "Hemburg",
        "Antwerp"
      ],
      "line": 31
    },
    {
      "cells": [
        "Chemical Wastes",
        "Pending",
        "46846.0",
        "Xiamen",
        "LosAngeles"
      ],
      "line": 32
    },
    {
      "cells": [
        "Television",
        "Delayed",
        "86563.0",
        "LongBeach",
        "TanjungPriok"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition2.i_initialize_the_firefox_driver_for_shipment_page_navigation()"
});
formatter.result({
  "duration": 2569745553,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition2.i_click_on_first_page()"
});
formatter.result({
  "duration": 315123185,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition2.i_validate_the_following_data_in_table(DataTable)"
});
formatter.result({
  "duration": 1366649771,
  "status": "passed"
});
});