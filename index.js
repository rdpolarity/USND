const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();
const express = require("express");
const app = express();
const path = require("path");
const btoa = require("btoa");
const fetch = require("node-fetch");
const Discord = require("discord.js");
const Client = new Discord.Client();
const fs = require("fs");
const hbs = require("express-handlebars");
require("dotenv").config();

// Client.login(process.env.BOT_TOKEN);

// Client.once("ready", () => {
//   console.log("Ready!");
//   // Client.channels.fetch("690550593466400848").then(channel => {
//   //   channel.send("Starting Up");
//   // });
// });

// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT = encodeURIComponent(process.env.REDIRECT);
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", async (req, res) => {
  res.redirect(
    `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify%20guilds&response_type=code&redirect_uri=${REDIRECT}`
  );
});

app.get("/welcome", async (req, res) => {
  // if (!req.query.code) throw new Error("NoCodeProvided");
  // const CODE = req.query.code;
  // const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  // const response = await fetch(
  //   `https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${CODE}&redirect_uri=${REDIRECT}`,
  //   {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Basic ${creds}`
  //     }
  //   }
  // );
  // const json = await response.json();
  // const token = json.access_token;
  // const user = await oauth.getUser(token);
  // const guilds = await oauth.getUserGuilds(token);

  // let formatGuilds = guilds.map(guild => guild.name);

  // Client.channels.fetch("690550593466400848").then(channel => {
  //   channel.send({
  //     embed: {
  //       title: "New Login!",
  //       description: ` \`\`${user.username} (${
  //         user.id
  //       })\`\` \n __**Guilds**__\n ${formatGuilds.join("\n")}`
  //     }
  //   });
  // });

  ////////////////////////////////////////////////////////////////

  // PUT MONGODB QUERY HERE

  // USE user AND guilds VARIABLES

  // JSON STRUCTURE CAN BE FOUND HERE https://www.npmjs.com/package/discord-oauth2

  ////////////////////////////////////////////////////////////////

  res.render("welcome", { profile: user.avatar, username: user.username });
});

app.listen(PORT);
