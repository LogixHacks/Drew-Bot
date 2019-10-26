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
module.exports = {
  name: "yeahdongfuckingrundthiscommand",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    const queue = new Discord.RichEmbed()
    .setAuthor("Server queue.")
    .setDescription(`${server.queue}`)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
    .setColor(`#a500ff`)
  message.channel.send(queue)
    
  }
}
