const Discord = require("discord.js")
const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"medya",
    description: 'Wegna sosyal medya',
    type:1,
    options: [

    ],
  run: async(client, interaction) => {

   const embed = new EmbedBuilder()
.setTitle("Wegna medya")
.setDescription("Sosyal Medya")
.setColor("Random")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Youtube")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://www.youtube.com/channel/UCDQEPmKbxlSNFFAba3F92hg"),
new Discord.ButtonBuilder()
.setLabel("Spotify")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://open.spotify.com/user/315tmz2xcmuaw7as3spnciufl7re?si=1a36b9f746be4034"),
new Discord.ButtonBuilder()
.setLabel("Beta Development")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/4sENkNQpsS"))
interaction.reply({embeds: [embed], components: [row]})
}
}