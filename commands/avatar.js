  const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"avatar",
    description: 'Birinin Avatarına Bakarsın!',
    type:1,
    options: [
        {
            name:"user",
            description:"Avatarına Bakmak İstediğin Kullanıcıyı Etiketle!",
            type:6,
            required:true
        },
      
    ],
  run: async(client, interaction) => {

    const user = interaction.options.getUser('user').displayAvatarURL({ dynamic: true, size: 1024 })
   
    const embed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle(interaction.options.getUser('user').tag)
    .setImage(user)
    .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
    
    interaction.reply({ embeds: [embed] })
}

};
