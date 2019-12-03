const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
var { prefix, token } = require('./config.json');
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const search = require("yt-search");
const fs = require("fs");
const bot = new Discord.Client({ dissableEveryone: true });

bot.commands = new Discord.Collection();

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./hand/${handler}`)(client);
});




client.once('ready', () => {
  console.log(`Drew Bot is ready to go. Online on ${bot.guilds.size} Servers!`);
  client.user.setActivity('In beta (2.7.0)!help', {
    type: 'PLAYING'
  });
})

client.on('message', message => {

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) command - client.commands.get(client.aliases.get(cmd));

  if (command)
    command.run(client, message, args);

});
client.login(token);