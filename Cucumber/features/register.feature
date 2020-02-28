Feature: Register a new user into losestudiantes
    As a user I want to register an account within losestudiantes website

Scenario Outline: Register failed
    Given I go to los estudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies <university>, is MBA <isMBA> and <program>
	And I set the password <password> and sign up
	Then I expect to be on sign up

    Examples:
	|      name       |  lastName           | email                        | university              | isMBA	 |program                                                   |password  |
	|				  |    Hernandez        | titarufohernandez@gmail.com  | Universidad de los Andes| true	     |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234  |
	|      Titarufo   |                     | titarufohernandez@gmail.com  | Universidad de los Andes| true	     |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234  |
	|      Titarufo   |    Hernandez        |         		               | Universidad de los Andes| true	     |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | Universidad de los Andes| true	     | 				                                            |Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | Universidad de los Andes| true	     |Maestría en Arquitecturas de Tecnologías de la Información|		   |
	|                 |    Hernandez        | titarufohernandez@gmail.com  | Universidad de los Andes| false	 |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234  |
	|      Titarufo   |                     | titarufohernandez@gmail.com  | Universidad de los Andes| false	 |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234  |
	|      Titarufo   |    Hernandez        |         		               | Universidad de los Andes| false	 |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | Universidad de los Andes| false	 | 				                                            |Pass1234  |
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com  | Universidad de los Andes| false	 |Maestría en Arquitecturas de Tecnologías de la Información|		   |
	

Scenario Outline: Register success
    Given I go to los estudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies <university>, is MBA <isMBA> and <program>
	And I set the password <password> and sign up
	Then I expect to be logged in
	
	Examples:
	|      name       |  lastName           | email                         | university              | isMBA |program                                                   |password | 
	|      Titarufo   |    Hernandez        | titarufohernandez@gmail.com   | Universidad de los Andes| true  |Maestría en Arquitecturas de Tecnologías de la Información|Pass1234 |
	|      Alber      |    Tefeo            | albertefeo@gmail.com          | Universidad del Rosario | false |Historia													 |Pass1234 |
