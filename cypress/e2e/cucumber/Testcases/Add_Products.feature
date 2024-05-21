Feature: Login and add products to cart

  Scenario: Login, filter products by price, and add to cart
    Given I am on the login page
    When I login with valid credentials
    And I filter products by price from low to high
    And Verify if the sortins is done from low to high
    And I add the first listed product to the cart
    And I add the last listed product to the cart
    Then I should see both products in the cart with correct descriptions
    And I should see both products in the cart with correct prices
    
