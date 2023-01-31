Feature: Testing login credentials and navigation to admin page.
  Testing the credentials for logging in and to navigate to the admin page within the schedule web app.

Scenario: Login is successful
Given I am on the login page
When Valid credentials are given
Then I should see Nodehill Logo and some other stuff in schedule page
Then Login is successful

Scenario: Login is not successful
Given I am on the login page
When Invalid credentials are given
Then Login is unsuccessful

Scenario: Successful login and navigation
Given I am on the login page
When Valid credentials are given
Then I should see Nodehill Logo and some other stuff in schedule page
When I click on the admin button
Then I visit the admin page