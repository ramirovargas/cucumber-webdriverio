Feature: Registration into losestudiantes
    As an user I want to register with my data

Scenario Outline: Registration with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill registration with <name>, <lastName>, <email> and <password>
    And I try to register
    Then I expect to see <error>

    Examples:
      |   name        |    lastName          | email               | password | error                    |
      |  Ramiro       |     Vargas           |   test@correo.com   |          | "Ingresa una contraseña" |
      |  Ramiro       |     Vargas           |                     |    123   | "Ingresa tu correo"      |
      |  Ramiro       |     Vargas           |   test@correo.com   |    123   | "La contraseña debe ser al menos de 8 caracteres"      |

Scenario Outline: Registration with right inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill registration with <name>, <lastName>, <email> and <password>
    And I try to register
    Then I expect to see success <respuesta>

    Examples:
      |   name        |    lastName          | email               | password                  | respuesta                    |
      |  Ramiro       |     Vargas           |   test@correo.com   |     testinpassword123     | "Registro exitoso!" |