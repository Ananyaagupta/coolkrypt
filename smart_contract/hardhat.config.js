// https://eth-ropsten.alchemyapi.io/v2/7mZySz8gpK4dgIJhkvyHw3nqCoNM7hv6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7mZySz8gpK4dgIJhkvyHw3nqCoNM7hv6',
      accounts: [ 'ec86f0a18886bc4a4a8b56eb3153c71c85277d5adf13de474d7e3fe9a94cabf5' ]
    }
  }
}