const TelegramBot = require('node-telegram-bot-api'); 
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {
  polling: true
});
const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
var Commandss = new CC.Commands();
var fs = require("fs");
var prefix = "."
client.login(process.env.DIS_TOKEN)
bot.on('message', (msg) => {
    
  //anything
     
});
client.on('message', message =>
{ 
    if(message.channel.id === "405086875083341835") 
   {
    bot.sendMessage("-1001450066187", message.author.tag + "\n"+ message.content)
   }
})
bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    
    }
    
   
      
    });
    bot.onText(/\/echo (.+)/, (msg, match) => {
      // 'msg' is the received Message from Telegram
      // 'match' is the result of executing the regexp above on the text content
      // of the message
    
      const chatId = msg.chat.id;
      const resp = match[1]; // the captured "whatever"
    
      // send back the matched "whatever" to the chat
      bot.sendMessage(chatId, resp);
      client.guilds.get("351491707554103296").channels.get("381810646011871232").send(resp)
      console.log(resp)
    });
 bot.onText(/\/dis (.+)/, (msg, match) => {
      // 'msg' is the received Message from Telegram
      // 'match' is the result of executing the regexp above on the text content
      // of the message
    
      const chatId = msg.chat.id;
      const resp = match[1]; // the captured "whatever"
    
      // send back the matched "whatever" to the chat
     
       client.channels.get("405086875083341835").send(resp)
      console.log(chatId)
    });
