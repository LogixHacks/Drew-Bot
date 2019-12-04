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
    name: "prefix",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
        if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");
      
        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      
        prefixes[message.guild.id] = {
          prefixes: args[0]
        };
      
        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
          if (err) console.log(err)
        });
      
        let sEmbed = new Discord.RichEmbed()
        .setColor("#a500ff")
        .setTitle("Prefix Set!")
        .setDescription(`Set to ${args[0]}`);
      
        message.channel.send(sEmbed);
      
    }
}
