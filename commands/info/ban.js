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
    name: "ban",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!buser) message.channel.send("That user is not in the guild!");
        let breason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have Permissions!");
        if (buser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That user cannot be kicked!");

        let banembed = new Discord.RichEmbed()
            .setDescription(`Banned`)
            .addField("Bannd User", `${buser}`)
            .addField("Banned By", `<@${message.author.id}>`)
            .addField("Banned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", breason)
            .setColor("#a500ff");

        let banChannel = message.guild.channels.find(`name`, "logs");
        if (!banChannel) return message.channel.send("Cannot find logs channel.");

        message.guild.member(buser).ban(breason);
        banChannel.send(banembed);
        return;
    }
}
