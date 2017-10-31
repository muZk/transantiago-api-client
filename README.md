# :oncoming_bus: Transantiago API Client

Unofficial API Client for querying data from Transantiago.

# Usage

```javascript
const transantiago = require('transantiago-api-client')

// Example response: https://www.transantiago.cl/restservice/rest/getpuntoparada?lat=-33.443018&lon=-70.65387
const nearlyBusStops = transantiago.nearlyBusStops(-33.4443018, -70.65387)

// Example response: https://www.transantiago.cl/predictor/prediccion?codsimt=PA375&codser=
const prediction = transantiago.prediction('PA375')

// Example response: https://www.transantiago.cl/predictor/prediccion?codsimt=PA375&codser=406
const prediction = transantiago.prediction('PA375', '406')

// Example response: https://www.transantiago.cl/restservice/rest/getrecorrido/406
const route = transantiago.route('406')
```
