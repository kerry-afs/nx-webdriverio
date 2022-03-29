Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given mobile-login: I am on the login page
    When mobile-login: I login with <username> and <password>
    Then mobile-login: I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
