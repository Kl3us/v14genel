const db = require("orio.db")
const kelimeler = require("../kfr.json");
const { PermissionsBitField } = require("discord.js")
const linkler = require("../lnks.json");

module.exports = async(client, message) => {
  
  if(message.author.bot) return;
  if(message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return;
  
  const kfrEngel = db.fetch(`kfrEngel_${message.guild.id}`)
  const lnkEngl = db.fetch(`rklmEngel_${message.guild.id}`)
  
  if(kfrEngel)
    {
            let blacklist = kelimeler;
            let foundInText = false;
            for (var i in blacklist) {
                if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) foundInText = true;
            }
        if (foundInText) 
        {
            message.delete();
            message.channel.send({embeds:[{
            description:`:x: **|** Hey ${message.author}, bu sunucuda küfür engel sistemi bulunuyor.`,
            color: 0xED4245
                }]
            });
            return;
        }
    }
  
   if(lnkEngl)
    {
        let blacklist = linkler;
            let foundInText = false;
            for (var i in blacklist) {
                if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) foundInText = true;
            }
        if (foundInText) 
        {
            message.delete();
            message.channel.send({embeds:[{
             description:`:x: **|** Hey ${message.author}, bu sunucuda reklam engel sistemi bulunuyor.`,
            color: 0xED4245
                }]
            });
            return;
        }
    }
  
}