Feature: Next Brand - Contact Page

  Background:
    Given I go to the 'Next - Contact' page

  Scenario: Required fields form validation
    Then I enter "" into the 'name' field
    And I enter "" into the 'email' field
    And I enter "" into the 'message' field
    And I click the 'submit' button
    Then the 'nameError' element contains the text "Please provide your name"
    And the 'emailError' element contains the text "Please provide your email"
    And the 'messageError' element contains the text "Please provide your message"

  Scenario: Invalid email form validation
    Then I enter "Joe Bloggs" into the 'name' field
    And I enter "Invalid" into the 'email' field
    And I enter "My message" into the 'message' field
    And I click the 'submit' button
    Then the 'nameError' element is hidden
    And the 'emailError' element contains the text "Invalid email"
    And the 'messageError' element is hidden

  Scenario: Valid form submission
    Then I enter "Joe Bloggs" into the 'name' field
    And I enter "my@test.email" into the 'email' field
    And I enter "My message" into the 'message' field
    And I click the 'submit' button
    Then the 'submittedText' element contains the text "Next contact form successfully submitted!"
