const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTgyMDUzMzAzMDYwMjY3MDIx.XOoOKw.9sisVDpEl_HweJ_ofoMbqydiSCM);//where BOT_TOKEN is the token of our bot
