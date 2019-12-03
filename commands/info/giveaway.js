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
let purple = ("#a500ff");
const bot = new Discord.Client({ dissableEveryone: true });


module.exports = {
    name: "giveaway",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        var item = "";
        var time;
        var WinnerCount;
        let messageArray = message.content.split(" ");

        for (var i = 3; i < messageArray.length; i++){
            item += (messageArray[i] + " ");
        }
        WinnerCount = Number(messageArray[1]);
        time = Number(messageArray[2]);
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`Giveaway From ${message.author.tag}`)
        embed.setTimestamp()
        embed.setDescription(item)
        embed.setColor(`#a500ff`)
        var embedSent = await message.channel.send(embed);
        embedSent.react(`🎉`);
        setTimeout(function(){
            var peopleReacted = embedSent.reactions.get(`🎉`).users.array();
            var index = Math.floor(Math.random() * peopleReacted.length);
            var winners = [];
            var WinnerMessage = "";
            for (var i = 0; i < WinnerCount; i++){
                winners.push(peopleReacted[index]);
                var index = Math.floor(Math.random() * peopleReacted.length);
            }
            for (var i = 0; i < winners.length; i++){
                if (winners[i].id == bot.user){
                winners[i].slice(i, 1);
                continue;
                }
                WinnerMessage += (winners[i].toString() + " ");
            }
            var haveHas = `has`;
            if (winners.length ==1){
                haveHas = "has";
            }
            else {
                haveHas = "have";
            }
            message.channel.send(WinnerMessage + " " + haveHas + `won ${item}`);
        },time * 1000);
    }
  }
  