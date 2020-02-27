Feature: Register a new user into losestudiantes
    As a user I want to register an account within losestudiantes website

Scenario Outline: Register new account

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with my <name>, <lastname>, <email>, selected a <department>, fill my <password> and accept the <terms> and conditions
    And I try to register
    Then I expect do not see the errors : <error_email>, <error_pass> and <error_terms>

    Examples:
      | name            | lastname  | email                        | department | password      | terms  | error_email                | error_pass                                        | error_terms                               |
      |                 |           |                              |            |               |        | "Ingresa un correo"        | "Ingresa una contraseña"                          | "Debe aceptar los términos y condiciones" |
      | Titarufo        | Hernandez | wrongemail                   |            |               |        | "Ingresa un correo valido" | "Ingresa una contraseña"                          | "Debe aceptar los términos y condiciones" |
      | Titarufo        | Hernandez | t.hernandez@uniandes.edu.co  |            |               |        |                            | "Ingresa una contraseña"                          | "Debe aceptar los términos y condiciones" |
      | Titarufo        | Hernandez | t.hernandez@uniandes.edu.co  |            | 1234          |        |                            | "La contraseña debe ser al menos de 8 caracteres" | "Debe aceptar los términos y condiciones" |
      | Titarufo        | Hernandez | t.hernandez@uniandes.edu.co  |     3      | Pass1234      |   1    |                            |                                                   |                                           |