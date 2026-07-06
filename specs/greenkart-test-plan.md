# GreenKart shopping flow test plan

## Application Overview

GreenKart is a catalog-driven shopping demo with product cards, cart quantity controls, and a checkout flow. The expanded plan adds scenarios for empty-cart behavior, quantity changes, item removal, and navigation entry points.

## Test Scenarios

### 1. shopping-flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. browse products and add items to cart

**File:** `tests/shopping-flow.spec.ts`

**Steps:**
  1. Open the GreenKart homepage at https://rahulshettyacademy.com/seleniumPractise/#/
    - expect: The page loads successfully and shows the product catalog.
  2. Verify that the catalog displays multiple product cards with names, prices, and an ADD TO CART action.
    - expect: At least one product is visible and interactive.
  3. Add one product to the cart from the catalog.
    - expect: The cart counter updates and the checkout action becomes available.
  4. Add a second product to the cart.
    - expect: The cart count increases and both products are reflected in the cart summary.

#### 1.2. view and modify cart contents

**File:** `tests/shopping-flow.spec.ts`

**Steps:**
  1. Open the cart after adding products.
    - expect: The cart shows the selected products and their quantities.
  2. Increase the quantity of a product using the plus control.
    - expect: The quantity and total pricing update correctly.
  3. Decrease the quantity of a product using the minus control.
    - expect: The quantity decreases or the product is removed if it reaches zero.
  4. Remove a product from the cart.
    - expect: The product disappears and the totals are recalculated.

#### 1.3. complete checkout with valid data

**File:** `tests/shopping-flow.spec.ts`

**Steps:**
  1. Add at least one product to the cart and open checkout.
    - expect: The checkout view is shown with the selected items.
  2. Proceed through the checkout flow using placeholder customer details.
    - expect: The checkout reaches the expected confirmation or completion state.
  3. Confirm that the order summary matches the selected items and total.
    - expect: The displayed summary is consistent with the cart contents.

#### 1.4. handle an empty cart without errors

**File:** `tests/shopping-flow.spec.ts`

**Steps:**
  1. Open the homepage in a fresh state without adding any products.
    - expect: The cart is empty and no product is selected.
  2. Attempt to open checkout directly from the empty state.
    - expect: The UI remains stable and shows an empty-cart state instead of crashing.
  3. Verify that no stale totals or product rows remain visible.
    - expect: The cart area is empty and the totals are not misleading.

#### 1.5. add the same product repeatedly and verify quantity behavior

**File:** `tests/shopping-flow.spec.ts`

**Steps:**
  1. Add the same product multiple times from the catalog.
    - expect: The cart quantity increases for that product rather than creating duplicate rows unexpectedly.
  2. Open the cart and inspect the product row.
    - expect: The quantity count reflects the repeated additions.
  3. Reduce the quantity back to one.
    - expect: The cart still shows the product correctly without any broken state.

#### 1.6. verify storefront navigation links

**File:** `tests/shopping-flow.spec.ts`

**Steps:**
  1. Click the Top Deals link from the homepage.
    - expect: The page navigates to the offers experience without breaking the storefront.
  2. Return to the homepage and click the Flight Booking link.
    - expect: The user is taken to the expected booking destination or a clearly handled external navigation flow.
