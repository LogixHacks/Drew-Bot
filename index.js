const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
var { prefix, token } = require('./config.json');
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

bot.commands = new Discord.Collection();

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./hand/${handler}`)(client);
});

exports.play = function(){

}

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], { filter: "audioonly" }));

  server.queue.shift();

  server.dispatcher.on("end", function () {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();

  })
}


client.once('ready', () => {
  console.log(`Aurora is ready to go. Online on ${bot.guilds.size} Servers!`);
  client.user.setActivity('In beta (2.3.3)!help', {
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
  // USEFUL COMMAND AREA  
  // USEFUL COMMAND AREA
  // USEFUL COMMAND AREA
  else if (message.content === `${prefix}help`) {
    const help = new Discord.RichEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor("#a500ff")
      .setTimestamp()
      .addField("Helpful Commands", `!ping  | Pong?
    !socials | Sends all of Drews social accounts!
    !help  | Sends you this message.
    !av    | Fetches your avatar, or someone you mention.`)
      .addField("Fun Commands", `!8ball | Let the Magic 8-ball answer your life questions.
    !kiss  | Give someone a kiss!
    !kill  | Kill someone!`)
      .addField(`Media Commands`, `!meme | Fetches you a random dank meme.
      !link | Link a youtube song For the bot to play
      !stop | Makes bot leave VC
      !skip | Skips current song!
      !play | search for a song on youtube`)
    message.channel.send("Sent.");
    message.member.send(help);
  }

  // fun commands

  // 8ball command
  else if (message.content.startsWith(`${prefix}8ball`)) {

    if (!args[2]) {
      const eightballerror = new Discord.RichEmbed()
        .setFooter(`Requested by ${message.author.tag}`)
        .setTitle('Error')
        .setDescription("Ask a longer question.")
        .setColor("#a500ff")
        .setTimestamp()
      return message.channel.send(eightballerror)
    }

    let replies = ["Yes.", "No.", "Hell no.", "Hell yeah!", "I don't know", "I really don't know.", "Ask again."]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ")

    const eightball = new Discord.RichEmbed()
      .setTitle('Magic 8-Ball Results')

      .setColor("#a500ff")
      .setTimestamp()
      .addField("Question", question)
      .addField("Answer", replies[result])
    message.channel.send(eightball)
  }
  // kill command
  else if (message.content.startsWith(`${prefix}kill`)) {
    var killuser = message.mentions.members.first()
    if (!killuser) {
      const killerror = new Discord.RichEmbed()
        .setTitle('Error')
        .setDescription(`Mention the user you would like to kill!`)
        .setColor("#a500ff")
        .setTimestamp()
      return message.channel.send(killerror)
    }
    const killembed = new Discord.RichEmbed()
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      .setColor("#a500ff")
      .setDescription(`${message.author} killed **${killuser}**.`)
    message.channel.send(killembed)
  }

  else if (message.content.startsWith(`${prefix}meme`)) {
    randomPuppy(sub)
    var subreddits = [
      'dankmemes',
      'edgymemes'
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
      .then(url => {
        const memeembed = new Discord.RichEmbed()
          .setColor("#a500ff")
          .setTitle(`Provided by r/${sub}`)
          .setURL(`https://reddit.com/r/${sub}`)
          .setFooter(`Requested by ${message.author.tag}`)
          .setTimestamp()
          .setImage(url);
        message.channel.send(memeembed)

      })
  }

});
client.login(token);