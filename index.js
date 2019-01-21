const { RTMClient } = require(`@slack/client`);
const { slackToken, slackChannelId } = require(`./config`);
const GetTime = require(`./actions/GetTime`);

const rtm = new RTMClient(slackToken);
rtm.start();

rtm.on(`message`, async (message) => {
  const { text } = message;
  const response = await GetTime.run(text);
  rtm.sendMessage(`Current time at ${text}: ${response.time}.`, slackChannelId);
});
