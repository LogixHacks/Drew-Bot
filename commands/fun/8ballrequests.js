const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const randomPuppy = require('random-puppy');
const servers = require("net");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
module.exports = {
    name: "8balladd",
    category: "fun",
    description: "Ask The Magic 8-Ball a question.",
    run: async (client, message, args) => {
        let add8ball_args = args.slice(0).join(` `);

        fs.writeFile("./8balladd.json", JSON.stringify(add8ball_args), (err) => {
            if (err) console.log(err)
        });

        let ballembed = new Discord.RichEmbed()
            .setTitle("8Ball")
            .setColor(`#a500ff`)
            .setDescription(`I have added **${add8ball_args}** to a json`)
            .setTimestamp()
        message.channel.send(ballembed);
    }
}
