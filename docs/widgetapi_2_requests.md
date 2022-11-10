# eCredits Widget API - Transaction Requests

## Create Transaction Request

In order to create a transaction request whose QR code can be shown to the customer in the checkout process and which can be paid with the eCredits Wallet App a request like below needs to be sent to the ***requests*** resource:

### Create Transaction Request - Request

POST <https://widget.api.ecredits.com/api/v1/requests>

```json
{
  "id": "70df7B42-2926-4fa7-8fed-c5805f823167",
  "amountDue": 99.99,  
  "currencyCode": "EUR",
  "paymentReference": "OrderId123",
  "generateQrCode": true
}
```

**REQUEST DATA:**

| Parameter        | Type      | Mandatory          | Description                                                                                                                                                                                                               |
| ---------------- | --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | guid      | yes                | Unique identifier of the request                                                                                                                                                                                          |
| amountDue        | decimal   | yes                | The requested amount the shop wants to receive from the consumer                                                                                                                                                          |
| currencyCode     | string(3) | yes                | The code of the amountDue currency. Currently only ECS and EUR supported. If set to EUR the conversion to ECS is done automatically                                                                                       |
| paymentReference | string    | no                 | The merchant's reference to correlate the request and the paid transaction to the shop order item                                                                                                                         |
| generateQrCode   | boolean   | no (default false) | Defines whether a base64 encoded QR string should be returned that can be directly embedded into the checkout page                                                                                                        |
| qrCodeType       | string    | no                 | "Basic" or "HtmlEmbedded". Default is "Basic". "HtmlEmbedded" returns the QR code rendered in a HTML element with additional styles and contextual text                                                                   |
| testMode         | boolean   | no (default false) | Indicates whether the request is supposed to be paid on the eCredits pub testnet. NOTE: in test mode no real funds are transferred and you need to have a wallet on the eCredits public testnet to pay for such requests! |

### Create Transaction Request - Response

```json
{
    "id": "70df7B42-2926-4fa7-8fed-c5805f823167",
    "fiatCurrencyCode": "EUR",
    "fiatAmountDue": 99.99,
    "amountDue": 9999,
    "currencyCode": "ECS",
    "qrCodeBase64": "R0lGODlh+gD6APcAAAAA[..]",
    "qrCodeHtml": null,
    "qrCodeString": "eCreditsPayment:70df7B42-2926-4fa7-8fed-c5805f823167",
    "href": "https://auth.ecredits.com/payment?code=70df7B42-2926-4fa7-8fed-c5805f823167",
    "paymentReference": "OrderId123",
    "expiresAt": "2022-05-09T06:11:30.4659728+00:00"
}
```

**RESPONSE DATA:**

| Parameter        | Type      | Description                                                                                                                                          |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | guid      | Unique identifier of the request                                                                                                                     |
| amountDue        | decimal   | The requested amount the shop wants to receive from the consumer                                                                                     |
| currencyCode     | string(3) | The code of the amountDue currency. Currently only ECS and EUR supported. If set to EUR the conversion to ECS is done automatically                  |
| fiatAmountDue    | decimal   | The amount the shop wants to receive from the shopper in fiat currency. Will return EUR in case currencyCode was sent with EUR upon request creation |
| fiatCurrencyCode | string(3) | Currency code of the fiat amount. Currently only EUR supported. Will be set in case currencyCode was sent with EUR upon request creation             |
| paymentReference | string    | The merchant's reference to correlate the request and the paid transaction to the shop order item                                                    |
| qrCodeBase64     | string    | The string that is encoded in the QR code that is used by the WalletApp upon scanning. Can be used to create your own QR code                        |
| qrCodeHtml       | string    | Contains html with qr code in case qrCodeType was set to "HtmlEmbedded", null in case of "Basic"                                                     |
| href             | string    | Universal link to open the WalletApp on mobile devices as QR code cannot be scanned when browsing the checkout page on the same device               |
| expiresAt        | datetime  | The timestamp after that the request will expire. In such case an entire new request with a new id should be created                                 |

## Check the status of Transaction Requests

### Get a Transaction Request by ID

**Request:**

GET <https://widget.api.ecredits.com/api/v1/requests/{id}?generateQrCode=true&qrCodeType=HtmlEmbedded>

Example: <https://widget.api.ecredits.com/api/v1/requests/70df7B42-2926-4fa7-8fed-c5805f823167?generateQrCode=true&qrCodeType=HtmlEmbedded>

**REQUEST DATA:**

| Parameter      | Type    | Mandatory          | Description                                                                                                                         |
| -------------- | ------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| id             | guid    | yes                | The ID of the transaction request                                                                                                   |
| generateQrCode | boolean | no (default false) | Defines whether a base64 encoded QR string should be returned that can be directly embedded into the checkout page                  |
| qrCodeType     | string  | no                 | "Basic" or "HtmlEmbedded". "HtmlEmbedded" returns the QR code rendered in a HTML element with additional styles and contextual text |

**RESPONSE DATA:**

Same as for [Create Transaction Request Response](widgetapi_2_requests.md?id=create-transaction-request-response)

### Get transactions for a particular request by ID

Allows to retrieve all successful transactions created for a particular transaction request. Usually one transaction per request, however user may send a transaction twice by mistake. The merchant can create a refund in such situations in the eCredits Web Portal or via the eCredits Wallet App to compensate such overpayments.

**Request:**

GET <https://widget.api.ecredits.com/api/v1/requests/{id}/payments>

Example: GET <https://widget.api.ecredits.com/api/v1/requests/70df7B42-2926-4fa7-8fed-c5805f823167/payments>

REQUEST DATA:

| Parameter | Type | Mandatory | Description                       |
| --------- | ---- | --------- | --------------------------------- |
| id        | guid | yes       | The ID of the transaction request |

**Response:**

A string list of transaction hashes (can be looked up in eCredits Blockchain Explorer).

**RESPONSE DATA:**

```json
[
  "Hash1",
  "Hash2"
]
```

### Check if transaction request is paid

Gives a quick indication whether the transaction request is successfully paid by at least one transaction.

**Request:**

GET <https://widget.api.ecredits.com/api/v1/requests/{id}/paid>

Example: GET <https://widget.api.ecredits.com/api/v1/requests/70df7B42-2926-4fa7-8fed-c5805f823167/paid>

**REQUEST DATA:**

| Parameter | Type | Mandatory | Description                       |
| --------- | ---- | --------- | --------------------------------- |
| id        | guid | yes       | The ID of the transaction request |

**Response:**

A boolean indicating succesful transaction/settlement of a particular transaction request.

**RESPONSE DATA:**

`true`

## Webhooks

eCredits supports webhook notifications to allow merchants to subscribe for **successfully paid** requests (push) in order to not having all pending requests queried from the eCredits API for the last status (pull).

Upon successful settlement of a request there will be a webhook request sent to the shops webhook url in case such a url is configured (must to be set up and configured in the eCredits Web Portal).

POST <https://merchant.com/path/to/webhook>

```json
{
  "requestId": "70df7B42-2926-4fa7-8fed-c5805f823167",
  "status": 1,  
  "transactionHash": "0x9c81985ce77c8e9990d854460d14462cd1737136df66efd17f31cdba66e41963",
  "signature": "YWVeYXagBM11lOxqEp09PYt8IskwjKTf+tYNoVjniFs=",
  "testMode": false
}
```

**REQUEST DATA:**

| Parameter | Type    | Description                                                                                                      |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| requestId | guid    | The id of the transaction request                                                                                |
| status    | int     | The status code of the transaction request. Possible values are: Pending (0), Settled (1), Expired(2)            |
| testMode  | boolean | Whether the request was created and paid on the eCredits public testnet. If true no real funds were transferred. |

The possible status codes of a request are listed below:

| Status  | Code | Description                                                                                                                                     |
| ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Pending | 0    | The request has not been fully paid yet successfully                                                                                            |
| Settled | 1    | The request is paid successfully                                                                                                                |
| Expired | 2    | The request was not paid in time and is expired. A new transaction request should be created if the web shop order is still supposed to be paid |

The webhook page should return a HTTP 200 OK response to indicate it received and processed the notifiation properly. Failing to do so we reschedule the notification several times until successful response with increasing time interval between the single attempts.

> **WARNING**: Please note that due to this retry-behaviour and for client simplicity it is important the the webhook page should have an idempotent behaviour be prepared for multiple notifications for the same id!

## Validation of webhook requests

The merchant is responsible for validating the received webhook notification for authenticity (to guarantee the requests originates really from eCredits). In order to do so the HMAC256 value of the request id should be calculated via the signing secret (configured in the eCredits Portal when setting up the webhook) and compared to value embedded in the request.

It is recommended to not solely rely on the status of the webhook request, instead the request details can be queried once more from the API.

An example method to calculate the HMAC256 value of the webhook request in C# can be found below:

```csharp
private static string CalcHmac256(string text, string key)
{
       using (var hmacSha256 = new HMACSHA256(Encoding.UTF8.GetBytes(key)))
       {
             var hash = hmacSha256.ComputeHash(Encoding.UTF8.GetBytes(text.ToLowerInvariant()));
             return Convert.ToBase64String(hash);
       }
}

Assert.Equal(request.signature, CalcHmac256(request.id, "TheSigningSecretOfTheWebHook"));
```
