import { RTMClient } from "@slack/rtm-api";
import { SLACK_OAUTH_TOKEN } from "./constants";
// const packageJson = require("../package.json");

const rtm = new RTMClient(SLACK_OAUTH_TOKEN);

rtm.start().catch(console.error);

rtm.on("ready", async () => {
  console.log("bot started");
  //   sendMessage(
  //     BOT_SPAM_CHANNEL,
  //     `Bot version ${packageJson.version} is online.`
  //   );
});
