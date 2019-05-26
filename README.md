# TECH HEROES 2019 PROJECT

## MY APP ALGORITHM BREAKDOWN

# TASK 1 [BVN VEIFICATION]
1. Get input from the user
2. Check if it is non negative integers, and 11 digits
3. Query Rave BVN Validator API with Secret key and user's sanitized input
4. Notify the user via a notification box whether the entered BVN is validated or an error occurred
5. Empty out the user's input

# TASK 2 [ MERCHANT AND SUB ACCOUNT PAYMENT SPLITTING ]
1. Display a payment page with amount acurred from the ride
2. On click of the 'Pay my Ride' button, which query Rave Payment API
3. Enter preferred payment method and details
4. After success response from the API, redirect to url with verification script (Mock SERVER verification)
5. Query Rave payment verification API with txtref and SECKEY
6. Validate returned response with Amount, Currency, txref, and status
7. If correct, fetch META object and redirect to a success page
8. Display merchant_commission, and subaccount_earning

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
Developed with vue.js, love and some cups of coffee
