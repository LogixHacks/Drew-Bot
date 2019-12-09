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
    name: "server",
    category: "misc",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const Icon = message.guild.iconURL === null
            ? 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png' : message.guild.iconURL
        const verified = message.guild.verified !== true ? 'No' : 'Yes'
        const afk_channel = message.guild.afkChannel === null ? '**No channel**' : message.guild.afkChannel

        let region = ''
        if (message.guild.region === 'brazil') region = ':flag_br: Brazil'
        if (message.guild.region === 'central-europe') region = ':flag_eu: Central Europe'
        if (message.guild.region === 'western-europe') region = ':flag_eu: Western Europe'
        if (message.guild.region === 'hong-kong') region = ':flag_hk: Hong Kong'
        if (message.guild.region === 'india') region = ':flag_in: India'
        if (message.guild.region === 'japan') region = ':flag_jp: Japan'
        if (message.guild.region === 'russia') region = ':flag_ru: Russia'
        if (message.guild.region === 'singapore') region = ':flag_sg: Singapore'
        if (message.guild.region === 'south-africa') region = ':flag_za: South Africa'
        if (message.guild.region === 'sydney') region = ':flag_au: Australia'
        if (message.guild.region === 'us-central') region = ':flag_us: US Central'
        if (message.guild.region === 'us-east') region = ':flag_us: US East'
        if (message.guild.region === 'us-south') region = ':flag_us: US South'
        if (message.guild.region === 'us-west') region = ':flag_us: US West'

        const embed = new Discord.RichEmbed()
            .setColor("#a500ff")
            .setThumbnail(Icon)
            .setFooter(`${message.guild.id}`,
                'https://cdn.discordapp.com/avatars/492871769485475840/6164d0068b8e76e497af9b0e1746f671.png?size=2048')
            .setTitle(`${message.guild.name}`)

            .addField('Owner', `${message.guild.owner}`, true)
            .addField('Members', `${message.guild.memberCount}`, true)
            .addField('Verified?', `${verified}`)
            .addField('Created on', `${message.guild.createdAt}`, true)
            .addField('AFK', `${afk_channel}\n **Timeout:** ${message.guild.afkTimeout} seconds.`, true)
            //.addField('Region', `${region}`, true)
            .setTimestamp()

        message.channel.send(embed)
    }
}    