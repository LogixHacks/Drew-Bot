const Discord = require('discord.js');
var { token } = require(`../../token.json`)
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
    name: "restart",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if (message.author.id === `611775766698524674`)
        message.channel.send(`Restarting bot....`)
            .then(client.destroy())
            .then(client.login(token))
            .then(client.user.setActivity(`!help Protecting ${client.guilds.size} Guilds`))
        message.channel.send(`Bot restarted`)
        
    }
}