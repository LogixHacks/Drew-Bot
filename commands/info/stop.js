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
  name: "stop",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    var server = servers[message.guild.id];
    if (!message.member.voiceChannel) {
      const vc = new Discord.RichEmbed()
      .setAuthor("Error")
      .setDescription(`You need to vbe in a voice channel`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor(`#a500ff`)
      message.channel.send(vc)
      return;
    }
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    const dc = new Discord.RichEmbed()
      .setAuthor("Disconnect Report")
      .setDescription(`Successfully disconnected from VC`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor(`#a500ff`)
    message.channel.send(dc)
  }
}
