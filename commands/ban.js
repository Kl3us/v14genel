const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "yasakla",
  description: "Birini sunucudan banlayabilirsiniz.",
  options: [{
    type: 6,
    name: "user",
    description: "Bir kullanıcı etiketi girin.",
    required: true
  }],
  type: 1,

  run: async(client, interaction, db) => {

      
    const user = interaction.options.getUser("user")
    
    interaction.guild.members.ban(user)
    interaction.reply({ embeds: [{
      description: "✅ **|** `"+user.tag+"` sunucudan başarıyla yasaklandı.",
      color: 0x57F287
    }]})
    

  }

};
