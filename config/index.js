require(`dotenv`).config();

module.exports = {
  googleApiKey: process.env.GOOGLE_API_KEY,
  slackToken: process.env.SLACK_TOKEN,
  slackChannelId: process.env.SLACK_CHANNEL_ID,
};
