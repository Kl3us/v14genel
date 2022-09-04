const { EmbedBuilder } = require("discord.js");
const db = require("orio.db")

module.exports = async(client, message) => {
  
  if(db.fetch(`log_${message.guild.id}`)) {
  if(message.author.bot) return;
    
    const embed = new EmbedBuilder()
    .setColor("Red")
    .setTitle("Bir mesaj silindi")
    .addFields({ name: "Mesaj İçeriği", value: "```"+message.content+"```", inline: true }, { name: "Mesaj Sahibi", value: "```"+message.author.tag+"```", inline: true })
    .setFooter({text:`${message.guild.name}`, iconURL: `${client.user.displayAvatarURL({ dynmaic: true })}`})
    .setTimestamp()
    
   message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).logChannel).send({ embeds: [embed] })
    
  }
  
}