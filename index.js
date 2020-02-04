const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
var { token } = require('./token.json');
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const search = require("yt-search");
const fs = require("fs");
const bot = new Discord.Client({ dissableEveryone: true });
let xp = require(`./commands/fun/xp/xp.json`);
 

bot.commands = new Discord.Collection();

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./hand/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`This Bot is ready to go. Online on ${client.guilds.size} Servers!`);
  client.user.setActivity(`!help Protecting ${client.guilds.size} Guilds`, {
    type: 'PLAYING'
  });
})

client.on('message', message => {
  let prefixes = JSON.parse(fs.readFileSync("./commands/misc/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
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

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp = curxp + xpAdd;
  if (nxtLvl <= xp[message.author.id].xp) {
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor()
      .addField("New Level", curlvl + 1);
    message.channel.send(lvlup).then(msg => { msg.delete(5000) });
  }
  fs.writeFile("./commands/fun/xp/xp.json", JSON.stringify(xp), (err) => {
    if (err) console.log(err)
  });
});
client.login(token);