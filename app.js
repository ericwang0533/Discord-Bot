const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();  
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`I am online, my name is ${client.user.username}`);

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

    const embed = {
        "title": "title ~~(did you know you can have markdown here too?)~~",
        "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
        "url": "https://discordapp.com",
        "color": 10385318,
        "timestamp": "2021-03-16T23:57:58.379Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "footer text"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "image": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "author": {
          "name": "author name",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "🤔",
            "value": "some of these properties have certain limits..."
          },
          {
            "name": "😱",
            "value": "try exceeding some of them!"
          },
          {
            "name": "🙄",
            "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
          },
          {
            "name": "<:thonkang:219069250692841473>",
            "value": "these last two",
            "inline": true
          },
          {
            "name": "<:thonkang:219069250692841473>",
            "value": "are inline fields",
            "inline": true
          }
        ]
      };

    client.channels.cache.get("821511906774876170").send(embed);
});


