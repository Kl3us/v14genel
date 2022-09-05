const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = async (client) => {

   const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }
  
  client.user.setPresence({ activities: [{ name: '/yardım - '+client.guilds.cache.size+' sunucu' }], status: 'online' });

    console.log(`${client.user.tag} Aktif!`);
};