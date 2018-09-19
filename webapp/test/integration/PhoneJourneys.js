/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/hq/test/EmployeeList_northWind/test/integration/NavigationJourneyPhone",
		"com/hq/test/EmployeeList_northWind/test/integration/NotFoundJourneyPhone",
		"com/hq/test/EmployeeList_northWind/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});