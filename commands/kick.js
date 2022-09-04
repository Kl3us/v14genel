const { Client, EmbedBuilder } = require("discord.js");

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

      
    const user = interaction.options.getMember("user")
    
    user.kick();
    interaction.reply({ embeds: [{
      description: "✅ **|** `"+user.tag+"` sunucudan başarıyla atıldı.",
      color: 0x57F287
    }]})
    

  }

};
