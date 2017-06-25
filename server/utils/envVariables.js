import packageJSON from '../../package.json';
var whiteListVariables = ['DATA_CENTER','INSTANCE_ID','IP_ADDRESS','ORCHARD_INSTANCE_ID'];
var variables = {
  version : packageJSON.version
};

whiteListVariables.forEach(variable=>{
  variables[variable] = process.env[variable];
});


module.exports = variables;
