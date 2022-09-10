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
    .addFields({ name: "Moderasyon > 🔧", value: "Moderasyon komutlarını sana gösterir.", inline: true }, { name: "Kullanıcı >  👤", value: "Kullanıcı komutlarını sana gösterir.", inline: true }, { name: "Çekiliş >  🎉", value: "Çekiliş komutlarını sana gösterir.", inline: true }, { name: "Uptime >  🧼", value: "Uptime komutlarını sana gösterir.", inline: true })
    .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
    .setTimestamp()
    
    const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Hiçbir şey seçilmedi')
					.addOptions(
						{
							label: 'Moderasyon',
              emoji: "🔧",
							description: 'Moderasyon komutlarını sana gösterir.',
							value: 'first_option',
						},
						{
							label: 'Kullanıcı',
              emoji: "👤",
							description: 'Kullanıcı komutlarını sana gösterir.',
							value: 'four_option',
						},
            {
							label: 'Çekiliş',
              emoji: "🎉",
							description: 'Çekiliş komutlarını sana gösterir.',
							value: 'sixth_option',
						},
            {
							label: 'Uptime',
              emoji: "🧼",
							description: 'Uptime komutlarını sana gösterir.',
							value: 'zorti_option',
						},
					),
			);
    
    interaction.reply({ embeds: [embed], components: [row] })
  }

};
