var fibos = require('fibos');

fibos.load("http");
fibos.load("chain");
fibos.load("net");
fibos.load("chain_api");
fibos.load("history_api");
fibos.load("producer", {
	'producer-name': 'eosio',
	'enable-stale-production': true
});

fibos.start();