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
  name: "skip",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    var server = servers[message.guild.id];
    if (!message.member.voiceChannel) {
      message.channel.send("You must be in a voice channel!")
      return;
    }
    if (server && server.dispatcher) server.dispatcher.end();
    const skipembed = new Discord.RichEmbed()
      .setAuthor("Skip Report")
      .setDescription(`Successfully skipped Song`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor(`#a500ff`)
    message.channel.send(skipembed)
  }
}
