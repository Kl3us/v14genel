const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Birini sunucudan atabilirsiniz.",
  options: [{
    type: 6,
    name: "user",
    description: "Bir kullanıcı etiketi girin.",
    required: true
  }],
  type: 1,

  run: async(client, interaction, db) => {

     if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
       return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kullanmak için `Üyeleri At` yetkisine ihtiyacın var." }], ephemeral: true })
     }
    
    const member = interaction.options.getMember("user")

    if(user.id === interaction.guild.ownerId) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu sunucu sahibinde kullanamazsın." }], ephemeral: true })
    if(user.id === interaction.user.id) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kendinde kullanamazsın." }], ephemeral: true })
    if(member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu yönetici izni olan birinde kullanamazsın." }], ephemeral: true })
    
    
    const user = interaction.options.getMember("user")
    
    user.kick();
    interaction.reply({ embeds: [{
      description: "✅ **|** `"+user.tag+"` sunucudan başarıyla atıldı.",
      color: 0x57F287
    }]})
    

  }

};
