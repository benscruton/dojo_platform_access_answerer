require("dotenv").config();

const {Client, Intents} = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", msg => {
  if(msg.author.bot) return;
  
  const msgLC = msg.content.toLowerCase();
  if(
    msgLC.includes("access") && msgLC.includes("platform")
    || msgLC.includes("alumni pass")
  ){
    msg.reply(
      "Are you asking about alumni access to the platform?  If so, try reaching out to support@codingdojo.com"
    ).catch(error => console.log(error));
  }
});

client.login(process.env.DISCORD_TOKEN);