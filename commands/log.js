const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "log",
  description: "Bot sunucunuzda gelişen tüm gelişmeleri belirlediğiniz log kanalına aktarır.",
  type: 1,
  options: [{
    type: 1,
    name: "ayarla",
    description: "Bot sunucunuzda gelişen tüm gelişmeleri belirlediğiniz log kanalına aktarır.",
    options: [{
      type: 7,
      name: "channel",
      description: "Hedef kanalınızı belirleyin.",
      required: true
    }]
  }],

  run: async(client, interaction) => {

    interaction.reply({ embeds: [ new EmbedBuilder().setDescription(`Pong! ***${client.ws.ping}ms***`) ], ephemeral: true })

  }

};
