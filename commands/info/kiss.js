

module.exports = {
  name: "kiss",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {

    var kissuser = message.mentions.members.first()
    if (!kissuser) {
      const kisserror = new Discord.RichEmbed()
        .setTitle('Error')
        .setDescription(`Mention the user you would like to kiss!`)
        .setColor("#a500ff")
        .setTimestamp()
      return message.channel.send(kisserror)
    }
    const kissembed = new Discord.RichEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
      .setColor("#a500ff")
      .setDescription(`${message.author} gave **${kissuser}** a kiss!`)
    message.channel.send(kissembed)
  }
}
