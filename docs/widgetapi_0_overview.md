# eCredits Widget API

## Introduction

The eCredits Widget API enables online merchants to accept purchases with the eCredits Cryptocurrency from their customers using the eCredits mobile wallet available for android and iOS.

It acts as a backend for the WebWidget shop plugin component which can be integrated into various web shop systems like Magento, WooCommerce or PrestaShop.

Basically the transaction flow comprises the following steps:

1. Creation of the transaction request
2. Showing the generated QR code in the checkout page of the merchant's web shop
3. Polling for the status of the transaction request / waiting for the retrieval of a webhook notification upon successful settlement
4. Showing success screen, updating the merchant's order item (e.g. continue with shipping, etc.)

## Prerequisites

In order to use the API you first need to:

1. create a business profile in the eCredits Portal
2. Purchase a business subscription to make that profile active
3. Setup the eCredits mobile wallet for the profile by creating a seed phrase so an address is generated and funds can be collected there.
4. Set up an API key in the WebWidget section to be used for API authentication.

Once all steps are completed you can authenticate and start creating transaction requests, check their status and eventually receive eCredits into your business wallet.

## Endpoints

### Swagger

Test: <https://widget.api.tst.ecredits.com/swagger/index.html>  
Prod: <https://widget.api.ecredits.com/swagger/index.html>

## Additional Resources

### eCredits Blockchain Explorer

Web application to lookup transaction hashes and wallet balances.

Test: <https://explorer.tst.ecredits.com/>  
Prod: <https://explorer.ecredits.com/>