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
  name: "queue",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    let queue = message.client.queues.get;

    let voice = message.member.voice.channel;
    if (!voice) {
      return message.channel.send(message.language.get("PLAY_ERR_VOICE_CHANNEL"));
    }

    if (!queue) {
      return message.channel.send(message.language.get("PLAY_ERR_NOT_PLAYING"));
    }

    let index = 0;
    let sQueue = queue.songs.map((song) => {
      let title = song.title;
      let author = song.channel;
      return `**${message.language.get("UTILS").TITLE}**: ${title}\n**${message.language.get("UTILS").AUTHOR}**: ${author}`;
    });

    // Generate discord embed to display the songs list
    let embed = new Discord.MessageEmbed()
      .addField(message.language.get("QUEUE_TITLE"), sQueue.join("\n-------\n"))
      .setColor(data.config.embed.color)
      .setFooter(data.config.embed.footer)
      .setTimestamp();

    // Then, send the embed in the current channel
    message.channel.send(embed);

  }
}



