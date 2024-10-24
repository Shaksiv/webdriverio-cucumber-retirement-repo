

import { browser, $, $$, expect, driver } from '@wdio/globals'
import { Key } from 'webdriverio'
import { getElement } from 'webdriverio/build/commands/element';
//const { browser, $ } = require('@wdio/globals')

class retirementCalcPage {

    /*defining page objects for Page retirementCalcPage */

    get currentAgeInput() {
        return $('#current-age');
    }

    get retirementAgeInput() {
        return $('#retirement-age');
    }

    get currentIncomeInput() {
        return $('#current-income');
    }

    get spouseIncomeInput() {
        return $('#spouse-income');
    }

    /* locator has the id this way*/
    get retirementSavingBalanceInput() {
        return $('#current-total-savings');
    }

    get AnnualSavingsRateInput() {
        return $('#current-annual-savings');
    }

    get resultMessageFailure() {
        return $('#calculator-input-alert-desc');
    }

    get resultMessageSuccess() {
        return $('#result-message');
    }


    get savingsIncreaseRateInput() {
        return $('#savings-increase-rate');
    }

    get noSocialBenefitsRadio() {
        return $('#no-social-benefits');
    }
    // get yesSocialBenefitsRadio() {        return $('#yes-social-benefits');    }

    get yesSocialBenefitsRadio() {
        return $('label[for="yes-social-benefits"]');
    }




    get calculateButton() {
        return $('button[data-tag-id="submit"]');
    }

    get maritalStatusMarried() {
       // return $('#married');
        return $('label[for="married"]');
    }

    get maritalStatusSingle() {
       // return $('#single');
        return $('label[for="single"]');
    }



    // await expect(page.getByText('Welcome, John')).toBeVisible();

    /* Defining methods to Set data to fields*/

    async setcurrentAgeInput(currentAgeInput: number) {

        await this.currentAgeInput.setValue(currentAgeInput);

    }

    async setretirementAgeInput(retirementAgeInput: number) {

        await this.retirementAgeInput.setValue(retirementAgeInput);
        await browser.pause(3000)
    }

    async setcurrentIncomeInput(currentIncome: string) {

        //await this.currentIncomeInput.setValue(value, { translateToUnicode })
        this.currentIncomeInput.click();
        await this.currentIncomeInput.setValue(currentIncome);

        //  browser.keys(currentIncome)
        await browser.pause(3000)
    }

    async setspouseIncomeInput(spouseIncome: string) {
        this.spouseIncomeInput.click();
        await this.spouseIncomeInput.setValue(spouseIncome);
        // browser.keys(spouseIncome)
        await browser.pause(3000)

    }

    async setannualSavingsRate(AnnualSavingsRate: number) {

        await this.AnnualSavingsRateInput.setValue(AnnualSavingsRate);
        await browser.pause(3000)

    }


    async setretirementSavingBalance(retirementSavingBalance: string) {
        this.retirementSavingBalanceInput.click();
        await this.retirementSavingBalanceInput.setValue(retirementSavingBalance);
        // browser.keys(retirementSavingBalance)
        await browser.pause(3000)

    }

    async setsavingsIncreaseRateInput(savingsIncreaseRateInput: number) {

        await this.savingsIncreaseRateInput.setValue(savingsIncreaseRateInput);
        await browser.pause(3000)
    }

    async setSocialBenefitsRadio(SocialBenefits: string) {

        if (SocialBenefits = 'No') {

            //await this.noSocialBenefitsRadio.click();
            console.log(await this.noSocialBenefitsRadio.isSelected());
            await expect(this.noSocialBenefitsRadio).toBeDisplayed();
        }

        if (SocialBenefits = 'Yes') {
            browser.scroll(0, 400)
            // await expect(this.yesSocialBenefitsRadio).toBeDisplayed()
            await this.yesSocialBenefitsRadio.click();
            // document.getElementById("yes-social-benefits")
            browser.pause(2000)
            console.log(await this.yesSocialBenefitsRadio.isSelected());
            await expect(this.yesSocialBenefitsRadio).toBeDisplayed();

        }


    }

    async setMaritalStatusRadio(maritalStatus: string) {

        if (maritalStatus = 'Married') {

            
            await this.maritalStatusMarried.click();
          //  console.log(await this.maritalStatusMarried.isSelected());
            await expect(this.maritalStatusMarried).toBeDisplayed();
            
        }

        if (maritalStatus = 'Single') {
           
           // await this.maritalStatusSingle.click();
            browser.pause(2000)
          //  console.log(await this.maritalStatusSingle.isSelected());
            await expect(this.maritalStatusSingle).toBeDisplayed();

        }


    }



    async navigateToRetirementCalcPage() {

        await browser.url('retirement-calculator.html');
        browser.maximizeWindow();
    }

    async calculate() {

        await this.calculateButton.click();
        await browser.pause(2000)
       
        
    }

    async getPageSubmitMessageSuccess(transaction: String) {
//waiting for element to load and getting text from message
            await this.resultMessageSuccess.waitForDisplayed() 
            let message = this.resultMessageSuccess.getText()
            await browser.pause(2000)
            console.log(message);
            return message;
        
    }


    async getPageSubmitMessageFail(transaction: String) {
        //waiting for element to load and getting text from message
              
                    await this.resultMessageFailure.waitForDisplayed()
                    let message = this.resultMessageFailure.getText()
                    console.log(message);
                    return message;
                
            }

}

module.exports = new retirementCalcPage();


