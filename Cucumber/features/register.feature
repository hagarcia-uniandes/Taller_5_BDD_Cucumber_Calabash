Feature: Register a new user into losestudiantes
    As a user I want to register an account within losestudiantes website

Scenario Outline: Register failed
    Given I go to losestudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies, is MBA <isMBA> and <program>
	And I set the password <password> and sign up
	Then I expect to be on sign up

    Examples:
	|      name       |  lastName           | email                        | isMBA	 |program |password  |
	|				  |    Hernandez        | titarufohernandez@gmail.com  | true	 |   12   |Pass1234  |
	|      Titarufo   |                     | titarufohernandez@gmail.com  | true	 |   12   |Pass1234  |
	|      Titarufo   |    Hernandez        |         		               | true	 |   12   |Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | true	 |        |Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | true	 |   12   |		     |
	|                 |    Hernandez        | titarufohernandez@gmail.com  | false	 |   12   |Pass1234  |
	|      Titarufo   |                     | titarufohernandez@gmail.com  | false	 |   12   |Pass1234  |
	|      Titarufo   |    Hernandez        |         		               | false	 |   12   |Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | false	 |        |Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | false	 |   12   |		     |
	

Scenario Outline: Register success
    Given I go to losestudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies, is MBA <isMBA> and <program>
	And I set the password <password> and sign up
	Then I expect to be logged in
	
	Examples:
	|      name       |  lastName           | email                         | isMBA |program |password | 
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com   | true  |   12   |Pass1234 |
	|      Alber      |    Tefeo            | albertefeo@gmail.com          | false |   12   |Pass1234 |
