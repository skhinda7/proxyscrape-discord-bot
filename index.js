const { Message, Client, Intents } = require('discord.js');
const request = require('request');
const prefix = '.'

const Discord = require('discord.js');
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const {
    token, 
    usProxyLink,
    cnProxyLink,
    allProxyLink
} = require('./config.json');

client.once('ready', () => {
    console.log('Ready to send Proxies!')
});

client.on('messageCreate', (msg => {
    if(msg.content === prefix + 'proxyme US') {
        msg.author.send(`**Here's your proxies!** :slight_smile:
        \`\`\` Your Proxies:\`\`\``)
        const embed = new Discord.MessageEmbed() 
        .setTitle(`Check your DM's :wink:`)
        .setColor('00ffff')
        .setDescription('``US`` proxies have been delivered to your DM!')
        .setFooter(`Proxy Bot | Powered by Skhinda#0001`, 'https://pbs.twimg.com/profile_images/1345808481207648258/0qJwtwyW_400x400.jpg')
    request.get({
        uri: usProxyLink,
    }, function (err, resp, body) {
    msg.author.send(body)
    msg.channel.send({embeds:[embed]})
    });    
    }
}));

client.on('messageCreate', (msg => {
    if(msg.content === prefix + 'proxyme CN') {
        msg.author.send(`**Here's your proxies!** :slight_smile:
        \`\`\` Your Proxies:\`\`\``)
        const embed = new Discord.MessageEmbed() 
        .setTitle(`Check your DM's :wink:`)
        .setColor('00ffff')
        .setDescription('``CN`` proxies have been delivered to your DM!')
        .setFooter(`Proxy Bot | Powered by Skhinda#0001`, 'https://pbs.twimg.com/profile_images/1345808481207648258/0qJwtwyW_400x400.jpg')
    request.get({
            uri: cnProxyLink,
        }, function (err, resp, body) {
    msg.author.send(body)
    msg.channel.send({embeds:[embed]})
    });
    }
}));

client.on('messageCreate', (msg => {
    if(msg.content === prefix + 'proxyme all') {
        msg.author.send(`**Here's your proxies!** :slight_smile:
        \`\`\` Your Proxies:\`\`\``)
        const embed = new Discord.MessageEmbed()
        .setTitle( `Check Your DM's :wink:`)
        .setColor('00ffff')
        .setDescription('``Global`` proxies have been delivered to your DM!')
        .setFooter(`Proxy Bot | Powered by Skhinda#0001`, 'https://pbs.twimg.com/profile_images/1345808481207648258/0qJwtwyW_400x400.jpg')
        request.get({
            uri: allProxyLink,
        }, function (err, resp, body) {
        msg.author.send(body)
        msg.channel.send({embeds:[embed]})
    });
    }
}));

client.login(token);