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
  name: "kiss",
  category: "fun",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {

    var kissuser = message.mentions.members.first()
    if (!kissuser) {
      const kisserror = new Discord.RichEmbed()
        .setTitle('Error')
        .setDescription(`Mention the user you would like to kiss!`)
        .setColor(purple)
        .setTimestamp()
      return message.channel.send(kisserror)
    }
    const kissembed = new Discord.RichEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
      .setColor(purple)
      .setDescription(`${message.author} gave **${kissuser}** a kiss!`)
    message.channel.send(kissembed)
  }
}
