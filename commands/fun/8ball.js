const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const randomPuppy = require('random-puppy');
const servers = require("net");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });

module.exports = {
    name: "8ball",
    category: "fun",
    description: "Ask The Magic 8-Ball a question.",
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send(":x: **Please ask a longer question!**");
        let replies = ["Yessir.", "Uhhuh.", "Yep.", "For sure.", "Definitely.", "Maybe.", "Not sure.", "Nah.", "No chance.", "Hell no.", "Dude, seriously?", "God no."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(` `);

        let ballembed = new Discord.RichEmbed()
            .setTitle("Results")
            .setColor(`#a500ff`)
            .addField(`Question`, question)
            .addField(`Answer`, replies[result])
            .setTimestamp()
        message.channel.send(ballembed);
    }
}
