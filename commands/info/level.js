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
let purple = ("#a500ff");
let xp = require(`./xp.json`);
const bot = new Discord.Client({ dissableEveryone: true });

module.exports = {
  name: "level",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {

    if (!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 300;
    let difference = nxtLvlXp - curxp;

    let lvlEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor(purple)
      .addField("Level", curlvl, true)
      .addField("XP", curxp, true)
      .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

    message.channel.send(lvlEmbed).then(msg => { msg.delete(5000) });
  }
}
