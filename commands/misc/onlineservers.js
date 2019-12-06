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
    name: "serverlist",
    category: "misc",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const dc = new Discord.RichEmbed()
        .setDescription(`I am online in ${client.guilds.size} Guilds!`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        .setColor(`#a500ff`)
      message.channel.send(dc)
    }
}
