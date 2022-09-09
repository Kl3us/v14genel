const { Collection, EmbedBuilder } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");

module.exports = async(client, interaction) => {

  if(interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);


      }


    });



  }
  
  if(interaction.isSelectMenu()) {
    if(interaction.customId === "select") {
      
      const value = interaction.values[0]
      if(value === "first_option") {
          const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
      .addFields(
        {
          name: "/ban-list",
          value: "Banlı kişileri görürsünüz.",
          inline: true
        },
        {
          name: "/ban-list",
          value: "Banlı kişileri görürsünüz.",
          inline: true
        },
      )
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })    
      }
      
      if(value === "second_option") {
          const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
      .addFields(
        
      )
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })  
      }
      
      if(value === "third_option") {
          const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
      .addFields(
        
      )
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })  
      }
      
    }
  }

};
