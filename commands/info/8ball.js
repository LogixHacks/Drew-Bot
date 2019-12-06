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
    name: "8ball",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if (!args[0]) return message.reply("Please  ask a longer question!");
        let replies = ["Yes", "No ", "Maybe", "Ask again later"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(1).join(` `);

        let ballembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor(`#a500ff`)
            .addField(`Question`, question)
            .addField(`Answer`, replies[result]);
        message.channel.send(ballembed);
    }
}
