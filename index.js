require('dotenv-flow').config();

const Discord = require('discord.js')
//const { CommandoClient } = require('discord.js-commando');
const prefix = "!"
const bot = new Discord.Client();
// const bot = new CommandoClient({
// 	commandPrefix: prefix,
// });

// bot.registry
//     .registerDefaultTypes()
//     .registerGroup('test', 'test group')
//     .registerDefaultGroups()
//     .registerDefaultCommands()
//     .registerCommandsIn(__dirname + '/commands');

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

bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'bye')) {
        msg.reply('bye!');
    }
})
