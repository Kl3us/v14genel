const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle  } = require("discord.js");

module.exports = {
  name: "yardım",
  description: "Botun yardım menüsünü gösterir.",
  type: 1,

  run: async(client, interaction, db) => {

      const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('davet')
					.setLabel('Davet Et')
          .setEmoji("💳")
					.setStyle(ButtonStyle.Link),
        new ButtonBuilder()
					.setCustomId('destek')
					.setLabel('Destek Sunucusu')
          .setEmoji("🏠")
					.setStyle(ButtonStyle.Link),
        new ButtonBuilder()
					.setCustomId('bilgi')
					.setLabel('Bot Bilgi')
          .setEmoji("🤖")
					.setStyle(ButtonStyle.Primary),
			);
    
      const embed = new EmbedBuilder()
      .setTitle(`${client.user.username} - Yardım Menüsü`)
      .setDescription("Merhabalar değerleri kullanıcımız, şuan sizlere toplam **5** komut ile hizmet vermekteyim, bot ile ilgili birkaç bilgi edinmek istiyorsan aşağıdaki menüden ilgili menüyü seçerek ilgili yazıya ulaşabilirsin.")
      .setColor("Blue")
      .addFields({
        name: "/ban",
        value: "Birini sunucudan banlayabilirsiniz.",
        inline: true
      },
      {
        name: "/kick",
        value: "Birini sunucudan atabilirsiniz.",
        inline: true
      },
      {
        name: "/log ayarla",
        value: "Bot sunucunuzda gelişen tüm gelişmeleri belirlediğiniz log kanalına aktarır.",
        inline: true
      },
      {
        name: "/timeout",
        value: "Susturmak istediğiniz birini susturabilirsiniz.",
        inline: true
      },
      {
        name: "/yardım",
        value: "Botun yardım menüsünü gösterir.",
        inline: true
      },
      {
        name: "/bot",
        value: "Botun birkaç bilgisine göz atabilirsiniz.",
        inline: true
      })
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
      
      await interaction.reply({ embeds: [embed] })
   
  }

};
