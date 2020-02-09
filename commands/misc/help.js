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
purple = (`#a500ff`)

module.exports = {
  name: "help",
  category: "misc",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    const help = new Discord. RichEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor(purple)
      .setTimestamp()
      .addField("Helpful Commands", `!ping  | Pong?
    !help  | Sends you this message.
    !av    | Fetches your avatar, or someone you mention.
    !8balladd | Adds a sugestion for 8ball to a json`)
      .addField("Fun Commands", `!8ball | Let the Magic 8-ball answer your life questions.
    !kiss  | Give someone a kiss!
    !kill  | Kill someone!
    !server | Shows server information
    !userinfo |Shows user information`)
      .addField(`Media Commands`, `!meme | Fetches you a random dank meme.
      !link | Link a youtube song For the bot to play
      !stop | Makes bot leave VC
      !skip | Skips current song!
      !play | search for a song on youtube`)
      .addField(`Moderation`, `!ban | Bans a user you mention. Example !ban @user [Reason]
      !kick | Kicks a user you mention. Example !kick @user [Reason] (For this command tou need to have the permission called "Kick Members")
      !warn | Warns a user you mention. Example !warn @user [Reason] (For this command tou need to have the permission called "Ban Members")
      !purge | Purges user messages Example !purge 50 (For this command tou need to have the permission called "Manage Messages")`)
      .addField(`Donations`,
        `!donate | You dont have to trust me!`)
      .addField(`Support`,
        `If you experience any bugs/problems please contact me By DM @stΞvΞn#1093 or By joining my server https://discord.gg/tMCGH5F`)
    message.channel.send(help);
  }
}
