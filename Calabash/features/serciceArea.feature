Feature: Service Area Tests

  Scenario: Remove welcome home screen
    Given I press "Routes"

  Scenario: See service areas
    Given I wait to see "HOME"
    And I click on screen 80% from the left and 90% from the top
    When I press "ALL"
    Then I should see "744 Papers"

  Scenario: See recharge points
    Given I wait to see "HOME"
    And I click on screen 80% from the left and 90% from the top
    When I press "RECHARGE"
    Then I should see "744 Papers"

  Scenario: See custom points
    Given I wait to see "HOME"
    And I click on screen 80% from the left and 90% from the top
    When I press "CUSTOM"
    Then I should see "Cdc Simon Bolivar"

  Scenario: Look for rechage point
    Given I wait to see "HOME"
    And I click on screen 80% from the left and 90% from the top
    When I press "ALL"
    And I click on screen 70% from the left and 10% from the top
    Then I enter text "Ajr Comunicaciones" into field with id "search_src_text"
    And I press the enter button
    Then I should see "Ajr Comunicaciones"
