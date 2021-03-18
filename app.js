const Discord = require('discord.js');
// const schedule = require('node-schedule');
var CronJob = require('cron').CronJob;
require('dotenv').config();

const client = new Discord.Client();  
client.login(process.env.BOT_TOKEN);

// const job = schedule.scheduleJob('58 13 * * 4', function(){
//     console.log("hi")
//     client.channels.cache.get("821511906774876170").send(`I am online 58 13 4`);

// });

client.on('ready', () => {
    console.log(`I am online, my name is ${client.user.username}`);

    // client.user.setActivity('bit.ly/compscilinktree', { type: 'WATCHING' });
    client.user.setPresence({ activity: { name: 'with discord.js' }, status: 'dnd' })

    var job = new CronJob(
        '0 30 14 * * 4',
        function(){
            console.log("0 30 14 * * 4")
            client.channels.cache.get("821511906774876170").send(`I am online 0 30 14 * * 4`);
        },
        null,
        true,
        'America/Los_Angeles'
    );

    // cron

    // node-schedule
    // job();

    // date stuff
    var date = new Date();
    var now = new Date(date.setTime(date.getTime() - (7 * 60 * 60 * 1000)));
    console.log(now.toLocaleString('en-US'));
    console.log(now.getDay())
    console.log(now.getHours())
    console.log(now.getMinutes())

    if(now.getDay() === 2){ // tuesday
        if(now.getHours() === 15){ // 3pm
            if(now.getMinutes() === 0){ // 0mins
                console.log("tue 3:00pm")
            }
        }
    }

    if(now.getDay() === 3){ // wednesday
        if(now.getHours() === 12){ // 12pm
            if(now.getMinutes() === 30){ // 30mins
                console.log("wed 12:30pm")
            }
        }
    }

    // specific channel
    if(1 == 2){
        client.channels.cache.get("821511906774876170").send(`I am online, my name is ${client.user.username}`);
    }

    // message embed
    // const embed = new Discord.MessageEmbed()
    // .setTitle('Test Title')
    // .setColor(0x69f0ae)
    // .setAuthor()
    // .setDescription('Test description');

    client.channels.cache.get("821511906774876170").send("test");

    // client.channels.cache.get("821511906774876170").send("Hello @everyone,\n", {embed: {
    //     content: "Hello @everyone,\n",
    //     color: "0x69f0ae",
    //     author: {
    //       name: "WHS Computer Science Club | Meeting 03/16/21",
    //       icon_url: "https://cdn.discordapp.com/icons/750556186247692369/cceaf85821f7fbc8af688a7e1b2f0ac4.png?size=256"
    //     },
    //     title: "Image Classification in ML",
    //     url: "http://google.com", // do we need this?
    //     description: "Hello @everyone, \nHIHIHII",
    //     fields: [{
    //         name: "Fields",
    //         value: "They can have different fields with small headlines."
    //       },
    //       {
    //         name: "Masked links",
    //         value: "You can put [masked links](http://google.com) inside of rich embeds."
    //       },
    //       {
    //         name: "Markdown",
    //         value: "You can put all the *usual* **__Markdown__** inside of them."
    //       }
    //     ],
    //     timestamp: new Date(),
    //     footer: {
    //     //   icon_url: client.user.avatarURL,
    //       text: "Linktree",
    //     }
    //   }
    // });
    // client.channels.cache.get("821511906774876170").send(embed);
});


