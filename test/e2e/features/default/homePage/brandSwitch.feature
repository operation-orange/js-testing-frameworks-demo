Feature: Default Brand - Brand Switching From Home Page

  Background:
    Given I go to the 'Default - Home' page

  Scenario: No brand is selected
    Then the 'mainLogo' element is hidden
    And the 'mainTitle' element contains the text "Welcome to the Unbranded Home Page"

  Scenario: Pick a brand - Topshop
    And I click the 'topshop' button
    Then I arrive at the 'Topshop - Home' page
    And the 'mainLogo' element is visible
    And the 'mainLogo' src attribute is "/images/topshop-logo.gif"
    And the 'mainTitle' element contains the text "Welcome to the Topshop Home Page"

  Scenario: Pick a brand - ASOS
    And I click the 'asos' button
    Then I arrive at the 'ASOS - Home' page
    And the 'mainLogo' element is visible
    And the 'mainLogo' src attribute is "/images/asos-logo.png"
    And the 'mainTitle' element contains the text "Welcome to the ASOS Home Page"

  Scenario: Pick a brand - Next
    And I click the 'next' button
    Then I arrive at the 'Next - Home' page
    And the 'mainLogo' element is visible
    And the 'mainLogo' src attribute is "/images/next-logo.png"
    And the 'mainTitle' element contains the text "Welcome to the Next Home Page"
