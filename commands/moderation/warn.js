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
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warn/warnings.json", "utf8"));
const bot = new Discord.Client({ dissableEveryone: true });
purple = (`#a500ff`)

module.exports = {
    name: "warn",
    category: "moderation",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No can do pal!");
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (!wUser) return message.reply("That user is not in the guild");
        if (wUser.hasPermission("ADMINISTRATOR")) return message.reply("That user cannot be warned");
        let reason = args.join(" ").slice(22);

        if (!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        };
        warns[wUser.id].warns++;
        fs.writeFile("./warn/warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err)
        });
        let warnEmbed = new Discord.RichEmbed()
            .setDescription("Warns")
            .setAuthor(message.author.username)
            .setColor(purple)
            .addField("Warned User", `<@${wUser.id}>`)
            .addField("Warned By", `<@${message.author.id}>`)
            .addField("Warned In", message.channel)
            .addField("Number of Warnings", warns[wUser.id].warns)
            .addField("Reason", reason)
            .addField("Time", message.createdAt);
        let warnchannel = message.guild.channels.find(`name`, "logs");
        if (!warnchannel) return message.reply(`Couldn't find channel called "logs"`);
        warnchannel.send(warnEmbed);
        if (warns[wUser.id].warns == 4) {
            let muterole = message.guild.roles.find(`name`, "muted");
            if (!muterole) return message.reply("Cannot find muted role Please create a role called muted!");
            let mutetime = "600s";
            await (wUser.addRole(muterole.id));
            message.channel.send(`<@${wUser.id}> has been temporarily muted For 10min!`);
            setTimeout(function () {
                wUser.removeRole(muterole.id)
                message.reply(`<@${wUser.id}> has been unmuted.`)
            }, ms(mutetime))
        }
        if (warns[wUser.id].warns == 10) {
            message.guild.member(wUser).kick(reason);
            message.reply(`<@${wUser.id}> has been kicked.`)
        }
    }
}         