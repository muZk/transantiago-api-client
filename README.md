# :oncoming_bus: Transantiago API Client

WIP - JS Wrapper for Transantiago API http://scltrans.it

---

[![Build Status](https://travis-ci.org/muZk/transantiago-api-client.svg?branch=master)](https://travis-ci.org/muZk/transantiago-api-client)
[![dependencies Status](https://david-dm.org/muZk/transantiago-api-client/status.svg)](https://david-dm.org/muZk/transantiago-api-client)

## Installation

    npm install transantiago-api-client

Or with yarn:

    yarn add transantiago-api-client

## Usage

```javascript
const transantiago = require('transantiago-api-client');

// Example response: https://api.scltrans.it/v1/stops?center_lat=-33.4443018&center_lon=-70.65387&radius=200
const nearlyBusStops = transantiago.nearlyBusStops(-33.4443018, -70.65387, 200);

// Example response: https://api.scltrans.it/v2/stops/PA375/next_arrivals
const prediction = transantiago.prediction('PA375');

// Example response: https://api.scltrans.it/v2/routes/406/directions
const route = transantiago.route('406');
```
