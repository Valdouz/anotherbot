const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const db = require('quick.db')

module.exports.run = (client, message, args) => {

if (args[0]) member = message.guild.author(message.mentions.users.first());
id = message.author.id;
xp = db.get(`xp.${message.guild.id}.${id}.lvl`);

message.channel.send("Vous êtes niveau " + xp)
}

module.exports.help = {
    name: 'rank',
    category: 'informations',
    utility: 'Permet de voir son niveau'
}