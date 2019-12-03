const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const randomPuppy = require('random-puppy');
const YTDL = require("ytdl-core");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const servers = require("net");
const search = require("yt-search");
const fs = require("fs");
const bot = new Discord.Client({ dissableEveryone: true });

module.exports = {
  name: "help",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    const help = new Discord.RichEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor("#a500ff")
      .setTimestamp()
      .addField("Helpful Commands", `!ping  | Pong?
    !help  | Sends you this message.
    !av    | Fetches your avatar, or someone you mention.`)
      .addField("Fun Commands", `!8ball | Let the Magic 8-ball answer your life questions.
    !kiss  | Give someone a kiss!
    !kill  | Kill someone!`)
      .addField(`Media Commands`, `!meme | Fetches you a random dank meme.
      !link | Link a youtube song For the bot to play
      !stop | Makes bot leave VC
      !skip | Skips current song!
      !play | search for a song on youtube`)
    message.channel.send("Sent.");
    message.member.send(help);

  }
}
