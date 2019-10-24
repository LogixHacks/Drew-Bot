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
const youtube = new YouTube("AIzaSyCeTsg18c-2NdaNhnTNTZP07VfwELOQYFw");


module.exports = {
    name: "link",
    category: "info",
    description: "plays youtube song",
    run: async (client, message, args, ops) => {
        function play(connection, message) {
            var server = servers[message.guild.id];
            server.dispatcher = connection.playStream(YTDL(server.queue[0], { filter: "audioonly" }));

            server.queue.shift();

            server.dispatcher.on("end", function () {
                if (server.queue[0]) play(connection, message);
                else connection.disconnect();
            })
        }


        if (!args[0]) {
            const urlerror = new Discord.RichEmbed()
                .setAuthor("Error")
                .setDescription(`Please, input a **YouTube** URL following this`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag}`)
                .setColor(`#a500ff`)
            message.channel.send(urlerror)
            return;

        }
        if (!message.member.voiceChannel) {
            const voiceerror = new Discord.RichEmbed()
                .setAuthor("Error")
                .setDescription(`You need to be in a voice channel!`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag}`)
                .setColor(`#a500ff`)
            message.channel.send(voiceerror)
            return;
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };
        var server = servers[message.guild.id];

        let validate = YTDL.validateURL(args[0])
        if (!validate) return message.channel.send(`Sorry, pleast input a **valid** URL.(YouTube)`)

        const songInfo = await YTDL.getInfo(args[0]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
        };

        server.queue.push(args[0]);
        if (server.queue[0])
            message.channel.send(`**${song.title}** Was added to the queue!`)



        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
            play(connection, message)
            const playembed = new Discord.RichEmbed()
                .setAuthor("	🎶")
                .setDescription(`**Now Playing ${song.title}**`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag}`)
                .setColor(`#a500ff`)
            message.channel.send(playembed)
        });



    }

}
