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
    
    const value = interaction.values[0]
    if(interaction.customId === "select") {
      
      
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
          name: "/ban",
          value: "İnsanları banlarsınız.",
          inline: true
        },
           {
          name: "/forceban",
          value: "ID ile kullanıcı yasaklarsın.",
          inline: true
        },
        {
          name: "/unban",
          value: "Kullanıcının Yasağını Kaldırırsın.",
          inline: true
        },
           {
          name: "/kick",
          value: "Kullanıcıyı Sunucudan Atarsın.",
          inline: true
        },
         {
          name: "/rol-al",
          value: "Birinden Rol Alırsın.",
          inline: true
        },
        {
          name: "/rol-ver",
          value: "Birine Rol Verirsin.",
          inline: true
        },
         {
          name: "/reklam-engel",
          value: "Reklam Engel Sistemini Açıp Kapatırsın.",
          inline: true
        },
            {
          name: "/sa-as",
          value: "Selam Sistemini Açıp Kapatırsın.",
          inline: true
        },
        
             {
          name: "/oto-tag",
          value: "Sunucuya giren üyelere otomatik tag verir.",
          inline: true
        },
         {
          name: "/oto-rol",
          value: "Yeni Gelenlere Otomatik Rol Verir.",
          inline: true
        },
         {
          name: "/rol-oluştur",
          value: "Yeni Bir Rol Oluşturursun.",
          inline: true
        },
      )
          
          
          
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })    
      }
      }
  
      if(value === "four_option") {
          const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
      .addFields(
         {
          name: "/istatisk",
          value: "Botun bilgi menüsüne erişin.",
          inline: true
        },
        {
          name: "/ping",
          value: "Botun pingi.",
          inline: true
        },
      )
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })  
      }
    
    if(value === "sixth_option") {
          const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
      .addFields(
         {
          name: "/çekiliş-başlat",
          value: "Bir çekiliş oluşturursun.",
          inline: true
        },
        {
          name: "/çekiliş-bitir",
          value: "Bir çekilişi sona erdirirsin.",
          inline: true
        },
          {
          name: "/çekiliş-yenile",
          value: "Bir çekilişi yeniden çekersin.",
          inline: true
        },
      )
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })  
      }
    
    if(value === "zorti_option") {
          const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
      .addFields(
        {
          name: "/uptime-ekle",
          value: "Sisteme link ekleyin.",
          inline: true
        },
         {
          name: "/uptime-sil",
          value: "Sistemden link silin.",
          inline: true
        },
           {
          name: "/linkler",
          value: "Sistemdeki linkleri görüntüleyin.",
          inline: true
        },
      )
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
          
      interaction.update({ embeds: [embed] })  
      }
      
    }
   

};  
