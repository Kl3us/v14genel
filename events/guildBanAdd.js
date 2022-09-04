const { EmbedBuilder } = require("discord.js");
const db = require("orio.db")

module.exports = async(client, ban) => {
  
  if(db.fetch(`log_${ban.guild.id}`)) {
    
    const embed = new EmbedBuilder()
    .setColor("Red")
    .setTitle("Biri Banlandı")
    .addFields({ name: "Banlanan", value: "```"+ban.user.tag+"```", inline: true }, { name: "Sebep", value: "```"+ban.reason+"```", inline: true })
    .setFooter({text:`${ban.guild.name}`, iconURL: `${client.user.displayAvatarURL({ dynmaic: true })}`})
    .setTimestamp()
    
  ban.guild.channels.cache.get(db.fetch(`log_${ban.guild.id}`).logChannel).send({ embeds: [embed] })
    
  }
  
}