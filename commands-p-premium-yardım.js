const { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, version  } = require("discord.js");
const os = require(`os`);
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  name: "premium-yardım",
  description: "Botun yardım menüsünü gösterir.",
  type: 1,

  run: async(client, interaction, db) => {

      const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Davet Et')
          .setURL("https://discord.com/api/oauth2/authorize?client_id=996343874509353122&permissions=8&scope=bot%20applications.commands")
          .setEmoji("💳")
					.setStyle(ButtonStyle.Link),
        new ButtonBuilder()
					.setLabel('Destek Sunucusu')
          .setURL("https://discord.gg/auPYVPYhqr")
          .setEmoji("🏠")
					.setStyle(ButtonStyle.Link),
        new ButtonBuilder()
					.setCustomId('bilgi')
					.setLabel('İstatistik')
          .setEmoji("🤖")
					.setStyle(ButtonStyle.Secondary),
			);
    
      const embed = new EmbedBuilder()
      .setTitle(`${client.user.username} - Yardım Menüsü`)
      .setDescription("Merhabalar değerleri kullanıcımız, şuan sizlere toplam **18** komut ile hizmet vermekteyim, bot ile ilgili birkaç bilgi edinmek istiyorsan aşağıdaki menüden ilgili menüyü seçerek ilgili yazıya ulaşabilirsin.")
      .setColor("Blue")
      .addFields({
        name: "/ban",
        value: "Birini sunucudan banlayabilirsiniz.",
        inline: true
      },
      {
        name: "/ban-list",
        value: "Banlı Olan Kullanıcıları Görürsün.",
        inline: true
      },
                  {
        name: "/unban",
        value: "Kullanıcının Yasağını Kaldırırsın.",
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
        name: "/temizle",
        value: "Sunucudan belirli bir miktar kadar mesaj siler.",
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
        name: "/reklam engel",
        value: "Sunucudaki reklamları engeller.",
        inline: true
      })
      .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynmaic: true }) })
      .setTimestamp()
      
      await interaction.reply({ embeds: [embed], components: [row] })
    
    const filter = i => i.customId === 'bilgi' && i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {
    
		const cpu = os.cpus().map(c => c.model)[0]
		var platform = os.platform()

		const up = os.uptime()
		const ver = os.version().slice(0, 12)

		if (platform === 'win32') { platform = 'Windows' } else if (platform === 'linux') { platform = 'Gnu/Linux' } else if (platform = 'darwin') { platform = 'macOS' }


    const embed = new EmbedBuilder()
	.setColor("Blue")
    .setTitle(`${client.user.username} - İstatistikleri!`)
	.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
	.addFields(
		{ name: 'Geliştirici', value: `<@994343860526399638>`},
		{ name: 'İşlemci', value: `${cpu}`},
		{ name: 'İşletim Sistemi', value: `${platform}`, inline: true},
		{ name: 'Çalışma Süresi', value: `${Math.floor(up / 60)} Dakika`, inline: true},
		{ name: 'Versiyon', value: `${ver}`, inline: true},
		{ name: 'Sunucu Sayısı', value: `${client.guilds.cache.size}`},
		{ name: 'Kullanıcı Sayısı', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) + client.users.cache.size}`, inline: true},
		{ name: 'Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true},
		{ name: 'Komut Sayısı', value: `9`},
		{ name: 'Bot Versiyon', value: `**BETA**`, inline: true},
		{ name: 'Discord.JS Versiyon', value: `${version}`, inline: true},
		{ name: 'Node Versiyon', value: `${process.version}`, inline: true},
		{ name: 'RAM Kullanımı', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}MB/1GB`},

		)
    .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
	.setTimestamp()
      
      await i.update({ embeds: [embed], components: [] });
});
   
  }

};
