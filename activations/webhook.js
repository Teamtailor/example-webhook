module.exports = async (req, res) => {
  const { 'partner-event': partnerEvent } = req.body;
  const config = partnerEvent['webhook-data'];
  // above are properties selected by the user in the config
  console.log(JSON.stringify(req.body, null, 2));
  // If you have 'Show trigger in bulk mode' turned on, when running the webhook from that context you will not get a job object
  // Here you will receive a partnerEvent in the body
  // do some processing and return 200 or > 4xx to render an error
  return res.status(200);
};
