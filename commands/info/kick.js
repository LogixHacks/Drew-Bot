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
    name: "kick",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kuser) message.channel.send("That user is not in the guild!");
        let kreason = args.join(" ").slice(22);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have Permissions!");
        if (kuser.hasPermission("KICK_MEMBERS")) return message.channel.send("That user cannot be kicked!");

        let kickembed = new Discord.RichEmbed()
            .setDescription(`Kick`)
            .addField("Kicked User", `${kuser}`)
            .addField("Kicked By", `<@${message.author.id}>`)
            .addField("Kicked In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kreason)
            .setColor("#a500ff");

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if (!kickChannel) return message.channel.send("Cannot find logs channel.");

        message.guild.member(kuser).kick(kreason);

        kickChannel.send(kickembed);
        return;

    }
}