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

        if (!args[1]) {
            const eightballerror = new Discord.RichEmbed()
                .setFooter(`Requested by ${message.author.tag}`)
                .setTitle('Error')
                .setDescription("Ask a longer question.")
                .setColor("#a500ff")
                .setTimestamp()
            return message.channel.send(eightballerror)
        }

        let replies = ["Yes.", "No.", "Hell no.", "Hell yeah!", "I don't know", "I really don't know.", "Ask again."]

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(1).join(" ")

        const eightball = new Discord.RichEmbed()
            .setTitle('Magic 8-Ball Results')

            .setColor("#a500ff")
            .setTimestamp()
            .addField("Question", question)
            .addField("Answer", replies[result])
        message.channel.send(eightball)
    }
}
