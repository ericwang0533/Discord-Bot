const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();  
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`I am online, my name is ${client.user.username}`);
    var date = new Date();
    var now = new Date(date.setTime(date.getTime() - (7 * 60 * 60 * 1000)));
    console.log(now.toLocaleString('en-US'));
    console.log(now.getDay())

    if(now.getDay() === 2){ // tuesday
        console.log("hihihi")
    }

    if(1 == 2){
        client.channels.cache.get("821511906774876170").send(`I am online, my name is ${client.user.username}`);
    }
});


