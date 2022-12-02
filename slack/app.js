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

var https = require("https");

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: "www.nodejitsu.com",
  path: "/",
  //since we are listening on a custom port, we need to specify it by hand
  port: "1337",
  //This is what changes the request to a POST request
  method: "POST",
};

callback = function (response) {
  var str = "";
  response.on("data", function (chunk) {
    str += chunk;
  });

  response.on("end", function () {
    console.log(str);
  });
};

var req = https.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end();
