const biLtPromise = require('./getBiLtData');

// Use openexchangerates.org free api

biLtPromise().then(data => console.log(data.length));
