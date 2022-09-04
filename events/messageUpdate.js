const { EmbedBuilder } = require("discord.js");
const db = require("orio.db")

module.exports = async(client, newMessage, oldMessage) => {
  
  if(db.fetch(`log_${oldMessage.guild.id}`)) {
  if(oldMessage.author.bot) return;
    
    const embed = new EmbedBuilder()
    .setColor("Red")
    .setTitle("Bir Mesaj Güncellendi")
    .addFields({ name: "Eski Mesaj", value: "```"+oldMessage.content+"```", inline: true }, { name: "Mesaj Sahibi", value: "```"+oldMessage.author.tag+"```", inline: true })
    .setFooter({text:`${oldMessage.guild.name}`, iconURL: `${client.user.displayAvatarURL({ dynmaic: true })}`})
    .setTimestamp()
    
  oldMessage.guild.channels.cache.get(db.fetch(`log_${oldMessage.guild.id}`).logChannel).send({ embeds: [embed] })
    
  }
  
}