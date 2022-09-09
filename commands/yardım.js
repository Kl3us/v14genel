const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder  } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    
    const embed = new EmbedBuilder()
    .setColor("Blue")
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
    .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
    .addFields({ name: "Butonlar > 🔧", value: "Moderasyon komutlarını sana gösterir.", inline: true })
    .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
    .setTimestamp()
    
    interaction.reply({ embeds: [embed] })
  }

};
