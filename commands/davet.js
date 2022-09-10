const Discord = require("discord.js")
const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"davet",
    description: 'Botu davet edersin!',
    type:1,
    options: [

    ],
  run: async(client, interaction) => {

   const embed = new EmbedBuilder()
.setTitle("Wegna Davet")
.setDescription("Aşağıda ki butonlardan beni ekleyebilirsin.")
.setColor("Random")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("0 Perm")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.com/api/oauth2/authorize?client_id=1016303472678813726&permissions=0&scope=bot%20applications.commands"),
new Discord.ButtonBuilder()
.setLabel("8 Perm")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.com/api/oauth2/authorize?client_id=1016303472678813726&permissions=8&scope=applications.commands%20bot"))
interaction.reply({embeds: [embed], components: [row]})
}
}