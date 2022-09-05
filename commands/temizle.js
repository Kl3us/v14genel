const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "temizle",
  description: "Sunucudan belirli bir miktar kadar mesaj siler.",
  options: [{
    type: 4,
    name: "count",
    description: "Mesaj silme miktarı girin.",
    required: true,
    maxValue: 100,
    minValue: 1
  }],
  type: 1,

  run: async(client, interaction, db) => {

     if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
       return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kullanmak için `Mesajları Yönet` yetkisine ihtiyacın var." }], ephemeral: true })
     }
    
    const count = interaction.options.getInteger("count")
    
    interaction.reply({ embeds: [{
      color: 0x7289DA,
      description: "🚮 **|** `"+count+"` mesajı başarıyla çöp kutusuna gönderdim."
    }], ephemeral: true })
    interaction.channel.bulkDelete(count, true)
    
    

  }

};
