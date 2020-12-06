require('dotenv-flow').config();

//const Discord = require('discord.js')
//const bot = new Discord.Client();
const { CommandoClient } = require('discord.js-commando');
const prefix = "!"
const bot = new CommandoClient({
	commandPrefix: prefix,
});

bot.registry
    .registerDefaultTypes()
    .registerGroup('test', 'test group')
    .registerDefaultGroups()
    //.registerDefaultCommands()
    .registerCommandsIn(__dirname + '/commands');

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag);
});

bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'bye')) {
        msg.reply('bye!');
    }
})
bot.on('message', msg => {
    if(msg.content. startWith(prefix)) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().tolowerCase();

    if(command === 'fwoosh'){
        message.channel.send('swoosh!');
    } else if(command == 'youtube'){
        message.channel.send('https://wwww.youtube.com')
    }
});
