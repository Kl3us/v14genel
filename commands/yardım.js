const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder  } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Wegna'Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    
    const embed = new EmbedBuilder()
    .setColor("Blue")
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
    .setDescription(`Merhaba değerli kullanıcımız, şuan size ve sizlere toplam **28** etkileşimli komut ile beraber hizmet etmekteyim, bir sorun oluşursa [destek sunucu]([http://discord.gg/altyapilar)ma sizleri beklerim.`)
    .addFields({ name: "Menü > 🔧", value: "Moderasyon komutlarını sana gösterir.", inline: true }, { name: "Menü >  👤", value: "Kullanıcı komutlarını sana gösterir.", inline: true }, { name: "Menü >  🤖", value: "Bot komutlarını sana gösterir.", inline: true })
    .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
    .setTimestamp()
    
    const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Hiçbir şey seçilmedid')
					.addOptions(
						{
							label: '💪 Koruma menüsü',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: '🤖 Bot menüsü',
							description: 'This is also a description',
							value: 'second_option',
						},
            {
							label: '🎉 Çekiliş menüsü',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);
    
    interaction.reply({ embeds: [embed], components: [row] })
  }

};
