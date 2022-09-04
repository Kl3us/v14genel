const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "log",
  description: "Bot sunucunuzda gelişen tüm gelişmeleri belirlediğiniz log kanalına aktarır.",
  type: 1,
  options: [{
    type: 1,
    name: "ayarla",
    description: "Bot sunucunuzda gelişen tüm gelişmeleri belirlediğiniz log kanalına aktarır.",
    options: [{
      type: 7,
      name: "channel",
      description: "Hedef kanalınızı belirleyin.",
      required: true
    }]
  }],

  run: async(client, interaction, db) => {

     if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
       return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kullanmak için `Yönetici` yetkisine ihtiyacın var." }], ephemeral: true })
     }
    
    const log = db.fetch(`log_${interaction.guild.id}`)
    if(log) return interaction.reply({ embeds: [{
      description: ":x: **|** Mod-Log sistemi zaten aktif olarak çalışıyor.",
      color: 0xED4245
    }]})
    
    const channel = interaction.options.getChannel("channel");
    
    db.set(`log_${interaction.guild.id}`, { logChannel: channel.id })
    interaction.reply({ embeds: [{
      description: "✅ **|** Mod-Log sistemi için kanal başarıyla <#"+channel.id+"> olarak ayarlandı.",
      color: 0x57F287
    }] })

  }

};
