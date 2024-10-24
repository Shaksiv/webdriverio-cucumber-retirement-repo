

import { browser, $, $$, expect, driver } from '@wdio/globals'
import { Key } from 'webdriverio'
//const { browser, $ } = require('@wdio/globals')

class defaultCalcModal {

    /*defining page objects for Page retirementCalcPage */
 

    get additionalIncomeInput() {
        return $('#additional-income');
    }
    get retirementDurationInput() {
        return $('#retirement-duration');
    }
   
    //To check
    get saveChangesBtn() {
        return $('label[for="yes-social-benefits"]');
    }

    async getAdjustDefaultValuesLink() {
        //had to use this method of element finding bad code- needs change
        let linktext = await $('a=Adjust default values');
      await linktext.click();
    }

    

    get defaultValuesModalTitle() {
        //had to use this method of element finding bad code- needs change
        return $('#default-values-modal-title');
    }




}

module.exports = new defaultCalcModal();