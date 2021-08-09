const {
  NODE_ENV = 'development',
  BASE_URL = 'https://tt-example-adapter.eu.ngrok.io',
  TT_API_KEY = 'abcd',
} = process.env;

module.exports = {
  PRODUCTION: NODE_ENV === 'production',
  DEVELOPMENT: NODE_ENV === 'development',
  BASE_URL,
  TT_API_KEY,
};
