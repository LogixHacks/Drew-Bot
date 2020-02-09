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
opusscript = require("opusscript");
const { getInfo } = require('ytdl-getinfo')
const YouTube = require("discord-youtube-api");
purple = (`#a500ff`)

module.exports = {
    name: "donate",
    category: "msic",
    description: "plays youtube song",
    run: async (client, message, args, ops, data) => {
        let donateembet = new Discord.RichEmbed()
                .setAuthor("Donataions :)")
                .setDescription(`Hi, this is Steven(stΞvΞn#1093) Creator of DrewBot(Drew-Bot#5400) And i dont like to ask for money but  maintaining this project isn't exactly free. I have to pay for a server to host the bot and i only bought thta server for a year and its almost the end of the year so i may not be able to host this bot for much longer . And i also I don't expect to be paid for what I'm doing
                But if you really want to donate here is my PayPal
                ---------------------------------------------
                Paypal: < https://paypal.me/StevenDahill >
                ---------------------------------------------`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag}`)
                .setColor(purple)
        message.channel.send(donateembet)
    }
}