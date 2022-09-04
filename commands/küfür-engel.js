const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "küfür",
  description: "Sunucudaki küfürleri engeller.",
  type: 1,
  options: [{
    type: 1,
    name: "engel",
    description: "Sunucudaki küfürleri engeller.",
    options: [{
      type: 3,
      name: "durum",
      description: "Sistemin Aktif/Pasif Durumunu Ayarlar",
      required: true,
      choices:[{name:"Aktif",value:"aktif"},{name:"Pasif",value:"pasif"}]
    }]
  }],

  run: async(client, interaction, db) => {

     if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
       return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kullanmak için `Mesajları Yönet` yetkisine ihtiyacın var." }], ephemeral: true })
     }
    
     const data = db.fetch(`kfrEngel_${interaction.guild.id}`)
     const value = interaction.options.getString("durum")
     
     if(value === "aktif") {
       
       if(data) return  interaction.reply({ embeds: [{
         description: "❌ **|** Küfür engel sistemi zaten `aktif` edilmiş.",
         color: 0xED4245
       }] })
       
       db.set(`kfrEngel_${interaction.guild.id}`, true)
       interaction.reply({ embeds: [{
         description: "✅ **|** Küfür engel sistemi başarıyla `aktif` edildi.",
         color: 0x57F287
       }] })
       
     } else {
       
       if(!data) return  interaction.reply({ embeds: [{
         description: "❌ **|** Küfür engel sistemi zaten `de-aktif` edilmiş.",
         color: 0xED4245
       }] })
       
       db.delete(`kfrEngel_${interaction.guild.id}`)
       interaction.reply({ embeds: [{
         description: "✅ **|** Küfür engel sistemi başarıyla `de-aktif` edildi.",
         color: 0x57F287
       }] })
       
     }
    
  }

};
