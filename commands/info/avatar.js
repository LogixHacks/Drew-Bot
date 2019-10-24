const { Discord, Client, Collection } = require("discord.js");

module.exports = {
    name: "av",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        regex = /\?=size[0-9]{1,45}$/g;
        memberMention = null;
        if (message.mentions.members) {
          memberMention = message.mentions.members.first()
        }
        if (message.mentions.users) {
          userMention = message.mentions.users.first()
        }
        if (!memberMention) {
          if (message.author.displayAvatarURL.indexOf(/\.gif\?size=[0-9]{1,49}$/g)) {
            const av = new Discord.RichEmbed()
              .setAuthor(`${message.author.username}'s Avatar`)
              .setColor("#a500ff")
              .setImage(message.author.avatarURL)
              .setTimestamp()
            return message.channel.send(av)
          }
          return message.channel.send(message.author.displayAvatarURL)
        }
        if (memberMention.user.displayAvatarURL.indexOf(/\.gif\?size=[0-9]{1,49}$/g)) {
          const mentionav = new Discord.RichEmbed()
            .setAuthor(`${memberMention.user.username}'s Avatar`)
            .setColor(`#a500ff`)
            .setImage(memberMention.user.avatarURL)
            .setTimestamp()
    
          return message.channel.send(mentionav)
        }
        message.channel.send(memberMention.user.displayAvatarURL)         
    }
  }
  