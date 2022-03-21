# ph-node-api

[![NPM](https://nodei.co/npm/ph-node-api.png)](https://nodei.co/npm/ph-node-api/)

NodeJS PlanetHoster API integration.

Please refer to the documentation of the [PlanetHoster API](https://apidoc.planethoster.com/) for all endpoints details.

## Installation
```
npm install ph-node-api
```

## Usage
```javascript
const PhNodeApi = require('ph-node-api');

async function ClientUsage() {
  const api = new PhNodeApi({
    api_key: 'API_KEY',
    api_user: 'API_USER'
  });

  try {
    console.log(await api.testConnection());
  } catch (e) {
    console.log(e);
  }
}
```