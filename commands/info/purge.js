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
    name: "purge",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        try {
            let num
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have Permissions!");
            if (!isNaN(args[0])) {
                num = parseInt(args[0])

                if (num <= 100 && num > 1) {
                    message.delete()
                    message.channel.bulkDelete(num)
                } else message.reply('You must enter a number between 2 and 100 for me to clear!')
            } else {
                message.reply('You must enter a number between 2 and 100 for me to clear!')
            }
        } catch (err) {
            message.channel.send('There was an error!\n' + err).catch()
        }
    }
}
