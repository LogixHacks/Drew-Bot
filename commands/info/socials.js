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
opusscript = require("opusscript");
const { getInfo } = require('ytdl-getinfo')
const YouTube = require("discord-youtube-api");
const youtube = new YouTube("AIzaSyCeTsg18c-2NdaNhnTNTZP07VfwELOQYFw");


module.exports = {
    name: "socials",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

      const socals = new Discord.RichEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor("#a500ff")
      .setTimestamp()
      .addField("Twitter", 
      `@DrewfusGaming`)
      .addField("Youtube", 
      `@Drewfus Gaming`)
      .addField(`Instagram`, 
      `@imdrewfusttv`)
    message.channel.send(socals);
    }
  }
  