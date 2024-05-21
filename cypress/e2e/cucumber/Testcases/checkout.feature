Feature: Checkout process

  Scenario: Login, add a product to cart, checkout, and verify completion
    Given I am on the login page
    When I login with valid credentials
    And I add a product to the cart
    And I proceed to checkout via the cart page
    And I fill in all required information
    And I complete the checkout process
    Then I should see that the checkout is completed
    And I should see the order dispatched message
