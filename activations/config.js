const { formConfigError } = require('../helpers');

module.exports = async (req, res) => {
  // If your trigger have 'Show trigger in bulk' disabled you will always receive below query params
  // If your trigger have this option enabled, in bulk mode you will not receive it
  const { job_id, stage_id } = req.query;
  console.log(job_id, stage_id);
  try {
    return res.json({
      config: {
        fields: [
          // if you do not require any config, you can respond with { config: fields: [] }
          // The values selected by user will appear in webhook-data in webhook call
          {
            id: 'persona',
            label: 'Persona',
            placeholder: 'Select persona',
            type: 'select',
            options: [
              { id: 1, label: 'Senior developer' },
              { id: 2, label: 'Junior developer' },
            ],
          },
        ],
      },
    });
  } catch (error) {
    // perhaps something will fail and you can respond with error element
    // it will prevent user from setting the trigger and sending the request to /webhook
    return res.json(formConfigError(error.message || 'oops'));
  }
};
