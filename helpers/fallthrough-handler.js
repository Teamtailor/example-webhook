module.exports = () => {
  // message in json should be a simple string
  return (err, req, res, _next) => {
    if (err.errors && Array.isArray(err.errors)) {
      const errors = err.errors || 'Unexpected error.';
      return res.status(err.status || 500).json(errors.join(', '));
    }
    if (err.message) {
      return res.status(err.status || 500).json(err.message);
    }
    return res.status(500).json('Unexpected error');
  };
};
