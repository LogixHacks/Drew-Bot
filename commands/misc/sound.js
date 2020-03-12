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
purple = (`#a500ff`)
const bot = new Discord.Client({ dissableEveryone: true });

module.exports = {
    name: "soundcloud",
    category: "msic",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const killembed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('SoundCloud')
        .setFooter(`Requested by ${message.author.tag}`)
        .setColor(purple)
        .setDescription(`Stream Jashade on SoundCloud Pleb https://soundcloud.com/jashade/born2be-ft-koda :fire: :fire: :fire: `)
      message.channel.send(killembed)
        
    }
}
