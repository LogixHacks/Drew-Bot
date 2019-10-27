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
    name: "meme",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        randomPuppy(sub)
        var subreddits = [
            'dankmemes',
            'edgymemes'
        ]

        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(sub)
            .then(url => {
                const memeembed = new Discord.RichEmbed()
                    .setColor("#a500ff")
                    .setTitle(`Provided by r/${sub}`)
                    .setURL(`https://reddit.com/r/${sub}`)
                    .setFooter(`Requested by ${message.author.tag}`)
                    .setTimestamp()
                    .setImage(url);
                message.channel.send(memeembed)

            })
    }
}
