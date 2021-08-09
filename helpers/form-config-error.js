// this is a way you can render error message in the config, to prevent user of sending webhook
module.exports = (message) => {
  return {
    config: {
      fields: [
        {
          id: '_error',
          label: message,
          placeholder: '',
          type: 'hidden',
          required: true,
          disabled: 'disabled',
        },
      ],
    },
  };
};
