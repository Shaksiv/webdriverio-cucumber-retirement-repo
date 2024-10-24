import { browser, $, $$,  driver } from '@wdio/globals'
const { expect } = require('@wdio/globals')
const { Given, When, Then, And } = require('@cucumber/cucumber');
const RetirementCalcPage = require('../pageobjects/retirementCalcPage');
const DefaultCalcModal = require('../pageobjects/defaultCalcModal');
const support = require('../../common/support');
let resulttMessageFromUI : string;




Given(/^user is on the retirement calculator page$/, async () => {
	await RetirementCalcPage.navigateToRetirementCalcPage();
	
});

/*When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});*/

When(/^user enters all mandatory data (.+)$/, async(currentAge : number) => {
	await RetirementCalcPage.setcurrentAgeInput(currentAge);
});

When(/^user enters retirementAge (.+)$/, async(retirementAge : number) => {
	await RetirementCalcPage.setretirementAgeInput(retirementAge);
});

When(/^user enters current annual income (.+)$/, async(currentIncome : number) => {
	await RetirementCalcPage.setcurrentIncomeInput(currentIncome);

});


When(/^user enters spouseIncome (.+)$/, async(spouseIncome : number) => {
	await RetirementCalcPage.setspouseIncomeInput(spouseIncome);
});

When(/^user enters TotalSavings (.+)$/, async(TotalSavings : number) => {
	
	await RetirementCalcPage.setcurrentTotalSavingsInput(TotalSavings);
});

When(/^user enters AnnualSavings (.+)$/, async(AnnualSavings : number) => {
	
	await RetirementCalcPage.setcurrentAnnualSavingsInput(AnnualSavings);
});

When(/^user enters savingsIncreaseRate (.+)$/, async(savingsIncreaseRate : number) => {
	
	await RetirementCalcPage.setsavingsIncreaseRateInput(savingsIncreaseRate);
});

Then(/^user enters retirementSavingBalance (.+)$/, async(retirementSavingBalance : number) => {
	await RetirementCalcPage.setretirementSavingBalance(retirementSavingBalance);
});


When(/^user enters AnnualSavingsRate (.+)$/, async(AnnualSavingsRate : number) => {
	await RetirementCalcPage.setannualSavingsRate(AnnualSavingsRate);
});


When(/^select social benefits  data (.+)$/, async(SocialBenefits: string) => {
	await RetirementCalcPage.setSocialBenefitsRadio(SocialBenefits);
});


Then(/^user should be taken to results page with (.+)$/, async(messageToValidate: string) => {
	
	await RetirementCalcPage.calculate();
	resulttMessageFromUI = RetirementCalcPage.getPageSubmitMessageSuccess('success');
	expect(resulttMessageFromUI.toString().includes(messageToValidate));

	//accessing string comparer from support utility
	//support.validateMessage(resulttMessageFromUI,messageToValidate)
	
});

Then(/^required field error message should be displayed (.+)$/, async(messageToValidate: string) => {
	//Please fill out all required fields
	await RetirementCalcPage.calculate();
	
	resulttMessageFromUI = RetirementCalcPage.getPageSubmitMessageFail('fail');
	expect(resulttMessageFromUI.toString().includes(messageToValidate));
	//accessing string comparer from support utility
	//support.validateMessage(resulttMessageFromUI,messageToValidate)
	
});




Then(/^validate availablity of (.+)$/, async(MaritalStatus: string) => {
	
	await RetirementCalcPage.setMaritalStatusRadio(MaritalStatus);
	//console.log(await RetirementCalcPage.yesSocialBenefitsRadio.isSelected());
});


When(/^user selects Adjust default values link$/, async() => {
	DefaultCalcModal.getAdjustDefaultValuesLink();

});



Then(/^modal with title default value is displayed$/, async() => {
	await expect (DefaultCalcModal.defaultValuesModalTitle).toBeDisplayed
 console.log(await DefaultCalcModal.defaultValuesModalTitle.getText());
});

