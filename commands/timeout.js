const { Client, EmbedBuilder } = require("discord.js");
const ms = require("ms")

module.exports = {
  name: "timeout",
  description: "Birini sunucudan banlayabilirsiniz.",
  options: [{
    type: 6,
    name: "user",
    description: "Bir kullanıcı etiketi girin.",
    required: true
  },
  {
    type: 3,
    name: "süre",
    description: "Bir süre belirtin 1d, 1m gibi",
    required: true
  }],
  type: 1,

  run: async(client, interaction, db) => {

      
    const user = interaction.options.getMember("user")
    const time = interaction.options.getString("süre") 
    
    const timeout = ms(time)
    if(!timeout) return interaction.reply({ embeds: [{
      color: 0xED4245,
      description: ":x: **|** Bu bir süre olarak kabul edilemez."
    }], ephemeral: true })
    
    await user.timeout(timeout)
    interaction.reply({ embeds: [{ color: 0x57F287, description: "✅ **|** `"+user.user.tag+"` başarıyla susturuldu." }] })

  }

};
