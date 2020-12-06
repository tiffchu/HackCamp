const Discord = require('discord.js')
const bot = new Discord.Client();

bot.login('Nzg1MjE3NDY4NDkwMzE3ODI0.X80owQ._-j46parqbEUcTr3lxH6z-ZXwMI')

bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag);
});

bot.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('pong');
    }
})