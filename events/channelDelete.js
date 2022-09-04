const { EmbedBuilder } = require("discord.js");
const db = require("orio.db")

module.exports = async(client, channel) => {
  
  if(db.fetch(`log_${channel.guild.id}`)) {
    
    const embed = new EmbedBuilder()
    .setTitle("#️⃣ Bir kanal Silindi")
    .addFields([
                { name: "Kanal Adı", value: `${channel.name}`, inline: true },
                { name: "Kanal Tipi", value: `${String(channel.type)
                .replace(0,"Yazı Kanalı")
                .replace(2,"Ses Kanalı")
                .replace(4,"Kategori")
                .replace(5,"Duyuru Kanalı")
                .replace(11,"Herkese Açık Alt Başlık Kanalı")
                .replace(13,"Sahne Kanalı")
                .replace(14,"Rehber Kanalı")
                .replace(15,"Forum Kanalı")
              }`
                , inline: true },
                { name: "Kanal ID", value: `${channel.id}`, inline: true },
                { name: "Olusturulma Tarihi", value: `<t:${parseInt(channel.createdTimestamp / 1000)}:R>`, inline: true },
                { name:"NSFW",value:`${channel.nsfw ? "✅ Açık" : "❌ Kapalı"}`,inline:true},
              ])
              .setColor("Red")
              .setFooter({text:`${channel.guild.name}`, iconURL: `${client.user.displayAvatarURL({ dynmaic: true })}`})
              .setTimestamp()
    
    channel.guild.channels.cache.get(db.fetch(`log_${channel.guild.id}`).logChannel).send({ embeds: [embed] })
    
  }
  
}