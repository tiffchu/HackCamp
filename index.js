require('dotenv-flow').config();

const Discord = require('discord.js')
const bot = new Discord.Client();
const prefix = "!"

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag);
});

bot.on('message', msg => {
    if (msg.content.startsWith(prefix + 'ping')) {
        msg.reply('pong');
    } else if (msg.content.startsWith(prefix + 'hello')) {
        var content = msg.content.trim().split(' ');
        msg.reply('Hello ' + content[1]);
    }
})