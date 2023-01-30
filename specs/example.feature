Feature: Admin login, navigation and creation
  As a admin, I want to be able to log in to the web app and navigate to the schedule web app.

Scenario: Successful login
Given I am on the login page
When I see Nodehill Logo
Then Login is successful

Scenario: Successful navigation
Given I am on the schedule page
When I click on the admin button
Then I visit the admin page