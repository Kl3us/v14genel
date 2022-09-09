const { Collection, EmbedBuilder } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");

module.exports = async(client, interaction) => {

  if(interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);


      }


    });



  }
  
  if(interaction.isSelectMenu()) {
    if(interaction.customId === "select") {
      
      const value = interaction.values[0]
      if(value === "first_option") {
        
      }
      
      if(value === "second_option") {
        
      }
      
      if(value === "third_option") {
        
      }
      
    }
  }

};
