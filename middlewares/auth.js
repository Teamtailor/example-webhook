const { formConfigError } = require('../helpers');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json('Missing authorization headers');
  }
  try {
    // here you will see your provider key, by default we send random uuid, but you can describe your own format
    // it can be for example a token that will allow you to authenticate against your API, or different set of credentials,
    const auth = req.headers.authorization.split('Bearer ')[1];
    req.auth = auth;
    return next();
  } catch (error) {
    if (req.path.includes('config')) {
      return res.json(formConfigError(error.message));
    }

    return next();
  }
};
