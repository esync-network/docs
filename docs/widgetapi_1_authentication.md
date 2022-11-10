# eCredits Widget API Authentication

The eCredits Widget API uses JWT bearer tokens for api authentication.

In order to get a valid token a request with following format needs to be sent to the ***authentication*** endpoint:

**Request:**

POST https://widget.api.tst.ecredits.com/api/authentication

```json
{
  "secret": "VLLXVHVU3BA1FNiwyEtv8CQTxpaCg6t3zcAu9q57vB7dMzghfubu8mUJwsZfhHnw",
  "clientId": "3fa85f34-5717-4562-b3fc-2c963f66afa7"
}
```

REQUEST DATA:

| Parameter | Type   | Mandatory | Description                                          |
|-----------|--------|-----------|------------------------------------------------------|
| secret    | string | yes       | The API key created in eCredits Portal (Web Widget)  |
| clientId  | guid   | yes       | The ID of the business that should receive the funds |

**Response:**

```json
{
    "token": "eyJhbGciOiJIU[...]",
    "expiresAt": "2022-05-09T06:57:44.4906378+00:00"
}
```

RESPONSE DATA:

| Parameter | Type           | Description                                             |
|-----------|----------------|---------------------------------------------------------|
| token     | string         | The JWT bearer token to be used for subsequent requests |
| expiresAt | datetime (UTC) | The ID of the business that should receive the funds    |