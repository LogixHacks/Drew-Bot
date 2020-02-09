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
    name: "userinfo",
    category: "msic",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        try {
            const user = message.mentions.members.first() || message.member

            const embed = new Discord.RichEmbed()
                .setTitle(user.user.username)
                .setDescription(`ID: ${user.id}
        Name: ${user.user.username}
        Icon URL: ${user.user.avatarURL}
        Account Created At: ${user.user.createdAt}
        Game: ${user.user.presence.game || 'none'}
        Status: ${user.user.presence.status.toUpperCase()}
        Full Name: ${user.user.tag}`)
                .setThumbnail(user.user.avatarURL)
                .setColor(purple)

            message.channel.send(embed)
        } catch (err) {
            message.channel.send('There was an error!\n' + err).catch()
        }
    }
}
