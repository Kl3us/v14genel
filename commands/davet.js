const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "davet",
  description: "Botun davet linkini görüntülersiniz.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setColor("Blue")
    .setDescription("Beni sunucuna davet etmek istersen aşağıdaki butonları kullanabilirsin!")

    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('0 Perm')
          .setURL("https://discord.com/api/oauth2/authorize?client_id=1016303472678813726&permissions=0&scope=bot%20applications.commands")
					.setStyle(ButtonStyle.Link),
        new ButtonBuilder()
					.setLabel('8 Perm')
          .setURL("https://discord.com/api/oauth2/authorize?client_id=1016303472678813726&permissions=8&scope=bot%20applications.commands")
					.setStyle(ButtonStyle.Link),
			);

    interaction.reply({ embeds: [embed], components: [row] })

  }

};
