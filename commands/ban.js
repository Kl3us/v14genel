const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Birini sunucudan banlayabilirsiniz.",
  options: [{
    type: 6,
    name: "user",
    description: "Bir kullanıcı etiketi girin.",
    required: true
  }],
  type: 1,

  run: async(client, interaction, db) => {

     if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
       return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kullanmak için `Üyeleri Banla` yetkisine ihtiyacın var." }], ephemeral: true })
     }  
    
    const user = interaction.options.getUser("user")
    const member = interaction.options.getMember("user")
    
    if(user.id === interaction.guild.ownerId) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu sunucu sahibinde kullanamazsın." }], ephemeral: true })
    if(user.id === interaction.user.id) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kendinde kullanamazsın." }], ephemeral: true })
    if(member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu yönetici izni olan birinde kullanamazsın." }], ephemeral: true })
    
    
    interaction.guild.members.ban(user)
    interaction.reply({ embeds: [{
      description: "✅ **|** `"+user.tag+"` sunucudan başarıyla yasaklandı.",
      color: 0x57F287
    }]})
    

  }

};
