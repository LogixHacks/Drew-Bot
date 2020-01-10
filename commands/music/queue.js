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
module.exports = {
    name: "queue",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args, ops) => {
        const { music } = message.guild;

        if (!music.playing) return message.sendMessage(message.language.get("MUSIC_NOT_PLAYING"));
        if (!music.queue.length) return message.sendMessage(message.language.get("MUSIC_NO_SONGS_IN_QUEUE"));

        const pages = new RichDisplay(new MessageEmbed()
            .setTitle(`${message.language.get("MUSICIF_QUEUE_TITLE")}`)
            .setAuthor(`PenguBot - Music Queue`, "https://i.imgur.com/IS8hX4t.png")
            .setDescription(`"${message.language.get("MUSICIF_QUEUE_HINT")}`)
            .setColor("#428bca")
        );

        for (let i = 0; i < music.queue.length; i += 12) {
            const curr = music.queue.slice(i, i + 12);
            pages.addPage(t => t.setDescription(curr.map(y => `\`${music.queue.findIndex(s => s.id === y.id) + 1}\` [${y.title.replace(/\*/g, "\\*")}](${y.url}) (${y.friendlyDuration})`).join("\n")));
        }
        pages.run(await message.sendMessage(`${this.client.emotes.loading} ${message.language.get("MUSICIF_QUEUE_LOADING")}`), {
            time: 120000,
            filter: (reaction, user) => user === message.author
        });
    }
}