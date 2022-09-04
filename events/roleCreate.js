const { EmbedBuilder } = require("discord.js");
const db = require("orio.db")

module.exports = async(client, role) => {
  
  if(db.fetch(`log_${role.guild.id}`)) {
    
    const embed = new EmbedBuilder()
    .setTitle("#️⃣ Bir Rol Oluşturuldu")
    .addFields([
                { name: "Rol Adı", value: `${role.name}`, inline: true },
                { name: "Rol ID", value: `${role.id}`, inline: true },
                { name: "Oluşturulma Tarihi", value: `<t:${parseInt(role.createdTimestamp / 1000)}:R>`, inline: true },
              ])
              .setColor("Green")
              .setFooter({text:`${role.guild.name}`, iconURL: `${client.user.displayAvatarURL({ dynmaic: true })}`})
              .setTimestamp()
    
   role.guild.channels.cache.get(db.fetch(`log_${role.guild.id}`).logChannel).send({ embeds: [embed] })
    
  }
  
}