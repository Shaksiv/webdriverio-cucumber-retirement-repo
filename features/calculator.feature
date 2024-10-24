Feature: Retirement calculator

  Background:
    Given user is on the retirement calculator page

  @smoke @sanity
  Scenario Outline: Submit retirement calculator form
    When user enters all mandatory data <currentAge>
    And user enters retirementAge <retirementAge>
    And user enters current annual income <currentIncome>
    And user enters spouseIncome <spouseIncome>
    And user enters retirementSavingBalance <retirementSavingBalance>
    And user enters AnnualSavingsRate <AnnualSavingsRate>
    And user enters savingsIncreaseRate <savingsIncreaseRate>
    And select social benefits  data <SocialBenefits>
    Then user should be taken to results page with <ResultMessage>

    Examples:
      | currentAge | retirementAge | currentIncome | spouseIncome | retirementSavingBalance | AnnualSavingsRate | savingsIncreaseRate | SocialBenefits | ResultMessage       |
      |         40 |            80 |        100000 |        75000 |                  500000 |                10 |                   5 | No             | You are exceeding   |
      |         60 |            61 |         10000 |        10000 |                    1000 |                20 |                   5 | No             | consider increasing |

  @regression @sanity
  Scenario Outline: Social Security income selections validations
    When select social benefits  data <SocialBenefits>
    Then validate availablity of <MaritalStatus>

    Examples:
      | SocialBenefits | MaritalStatus |
      | Yes            | Single        |
      | Yes            | Married       |

  @sanity
  Scenario Outline: Submit calculator missing the mandatory fields
    When user enters retirementAge <retirementAge>
    And user enters retirementSavingBalance <retirementSavingBalance>
    And user enters AnnualSavingsRate <AnnualSavingsRate>
    Then required field error message should be displayed <Message>

    Examples:
      | retirementAge | retirementSavingBalance | AnnualSavingsRate | Message                             |
      |            80 |                  500000 |                10 | Please fill out all required fields |
