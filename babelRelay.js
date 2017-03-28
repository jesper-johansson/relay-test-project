/* eslint-disable */
var BabelRelayPlugin = require('babel-relay-plugin');
var schemaData = require('./data/schema.json').data;

module.exports = BabelRelayPlugin(schemaData);
