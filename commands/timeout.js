const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const ms = require("ms")

module.exports = {
  name: "timeout",
  description: "Susturmak istediğiniz birini susturabilirsiniz.",
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

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
       return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kullanmak için `Yönetici` yetkisine ihtiyacın var." }], ephemeral: true })
     }
    
   const member = interaction.options.getMember("user")
   const user = interaction.options.getMember("user")
   
    if(user.id === interaction.guild.ownerId) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu sunucu sahibinde kullanamazsın." }], ephemeral: true })
    if(user.id === interaction.user.id) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu kendinde kullanamazsın." }], ephemeral: true })
    if(member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [{ color: 0xED4245, description: ":x: **|** Bu komutu yönetici izni olan birinde kullanamazsın." }], ephemeral: true })
    
      
    
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
