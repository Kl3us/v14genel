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
    
    
    
    interaction.guild.members.ban(user)
    interaction.reply({ embeds: [{
      description: "✅ **|** `"+user.tag+"` sunucudan başarıyla yasaklandı.",
      color: 0x57F287
    }]})
    

  }

};
