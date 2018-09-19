/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list
// * All 3 Employees have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/hq/test/EmployeeList_northWind/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/hq/test/EmployeeList_northWind/test/integration/pages/App",
	"com/hq/test/EmployeeList_northWind/test/integration/pages/Browser",
	"com/hq/test/EmployeeList_northWind/test/integration/pages/Master",
	"com/hq/test/EmployeeList_northWind/test/integration/pages/Detail",
	"com/hq/test/EmployeeList_northWind/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.hq.test.EmployeeList_northWind.view."
	});

	sap.ui.require([
		"com/hq/test/EmployeeList_northWind/test/integration/MasterJourney",
		"com/hq/test/EmployeeList_northWind/test/integration/NavigationJourney",
		"com/hq/test/EmployeeList_northWind/test/integration/NotFoundJourney",
		"com/hq/test/EmployeeList_northWind/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});