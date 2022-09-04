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
     
     if(value === "") {
       
     } else {
       
     }
    
  }

};
