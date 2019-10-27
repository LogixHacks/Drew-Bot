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
    name: "kill",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        var killuser = message.mentions.members.first()
        if (!killuser) {
          const killerror = new Discord.RichEmbed()
            .setTitle('Error')
            .setDescription(`Mention the user you would like to kill!`)
            .setColor("#a500ff")
            .setTimestamp()
          return message.channel.send(killerror)
        }
        const killembed = new Discord.RichEmbed()
          .setTimestamp()
          .setFooter(`Requested by ${message.author.tag}`)
          .setColor("#a500ff")
          .setDescription(`${message.author} killed **${killuser}**.`)
        message.channel.send(killembed)
    }
  }
  