Feature: Routes feature

    Scenario: Remove welcome home screen
        Given I press "Routes"

    Scenario: See transmilenio routes
        Given I press "Routes"
        When I press "TRANSMILENIO"
        Then I should see "Universidades"

    Scenario: See urban routes
        Given I press "Routes"
        When I press "URBANO"
        Then I should see "Palmitas"

    Scenario: See complementary routes
        Given I press "Routes"
        When I press "COMPLEMENTARIO"
        Then I should see "Mundo Aventura"

    Scenario: see special routes
        Given I press "Routes"
        When I press "COMPLEMENTARIO"
        And I press "ESPECIAL"
        Then I should see "Torca"

    Scenario: See alimentador routes
        Given I press "Routes"
        When I press "COMPLEMENTARIO"
        And I press "ESPECIAL"
        And I press "ALIMENTADOR"
        Then I should see "Cortijo"

    Scenario: See route stations
        Given I press "Routes"
        When I press "j"
        Then I should see "Portal 20 de Julio"
