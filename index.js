const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'bing') {
    msg.reply('users should be banned from the internet so thye can\'t use their terrible search engine which is overall terribly terrible');
  }
});

client.login('NDYxMjYxMjk0NDE1MzgwNDkw.DhuvYQ.8yOcRH9jx-r2V3qONGzxm-VMtV4');
