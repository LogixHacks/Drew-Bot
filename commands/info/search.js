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
    name: "play",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args, ops) => {
        search(args.join(" "), function (err, res) {

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

            if (err) return message.channel.send("Sorry something went wrong try again");


            let videos = res.videos.slice(0, 5);

            let resp = "";
            for (var i in videos) {
                resp += `**[${parseInt(i) + 1}]:** \`${videos[i].title}\`\n`;
            }
            resp += `\n** Choose a number between \`1-${videos.length}**\``;

            message.channel.send(resp);

            const filter = m => !isNaN(m.content) && m.content < videos.length + 0 && m.content > 0;

            const collector = message.channel.createMessageCollector(filter);

            collector.videos = videos;

            collector.once('collect', function (m) {

                let commandFile = require(`./play.js`);

                commandFile.run(client, message, [this.videos[parseInt(m.content) - 1].url], ops);


            });

        });
    }
}