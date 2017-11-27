Feature: Brand Switching

    Background:
        Given I go to the 'Default Home' page

    Scenario: No brand is selected
        Then the 'mainLogo' element is hidden
        And the 'mainTitle' element contains the text "Welcome to the Unbranded Home Page"

    Scenario: Pick a brand - Topshop
        And I click the 'topshop' button
        And the 'mainLogo' element is visible
        And the 'mainLogo' src attribute is "/images/topshop-logo.gif"

    Scenario: Pick a brand - ASOS
        And I click the 'asos' button
        And the 'mainLogo' element is visible
        And the 'mainLogo' src attribute is "/images/asos-logo.png"

    Scenario: Pick a brand - Next
        And I click the 'next' button
        And the 'mainLogo' element is visible
        And the 'mainLogo' src attribute is "/images/next-logo.png"
