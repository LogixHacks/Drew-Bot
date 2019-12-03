const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
var { prefix, token } = require('./config.json');
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const search = require("yt-search");
const fs = require("fs");
const bot = new Discord.Client({ dissableEveryone: true });
let purple = ("#a500ff");
let xp = require(`./commands/info/xp.json`);

bot.commands = new Discord.Collection();

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./hand/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`This Bot is ready to go. Online on ${bot.guilds.size} Servers!`);
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
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor(purple)
      .addField("New Level", curlvl + 1);
  
      message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
  });
});
client.login(token);