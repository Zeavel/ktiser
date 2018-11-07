const TelegramBot = require('node-telegram-bot-api'); 
const token = process.env.BOT_TOKEN;
const token2 = process.env.BOT_TOKEN2
const bot = new TelegramBot(token, {
  polling: true
});
const bot2 = new TelegramBot(token2, {
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
     var messag;
     var chet;
     var args1;
     var args2;
     var id;
     if(message.content.includes("<@"))
        {
        args1 = message.content.split("<@")
        args2 = args1[1].split(">")
        id = args2[0]
     chet = message.content.replace("<@"+id+">", "@"+client.users.get(id).username)
          messag = "**"+chet +"** "+ message.attachments.map(h => h.url).toString()
        }
     else
     {
       messag = "**"+message.content + "** " + message.attachments.map(h => h.url).toString()
     }
     
     
    bot.sendMessage("-1001450066187", "`"+message.author.tag+"`" + "\n"+ messag)
   }
})
bot.on('message', (msg) => {

   if(msg.from.first_name == "Welcome Bot")
   {
     console.log("Это велком")
   }
  else
  {
console.log("Это не велком")
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
      console.log(msg)
    bot.getChatMember("-1001450066187", "563932238").then(g=> {
  if(g.status == "member")
  {
    bot.sendMessage("-1001450066187", "Юзер "+g.user.first_name + " - обычный участник")
  }
  else
  {
    bot.sendMessage("-1001450066187", "Юзер "+g.user.first_name + " - админ")
  }
})
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
bot2.onText(/\/ecso (.+)/, (msg, match) => {
      // 'msg' is the received Message from Telegram
      // 'match' is the result of executing the regexp above on the text content
      // of the message
    
      const chatId = msg.chat.id;
      const resp = match[1]; // the captured "whatever"
    
      // send back the matched "whatever" to the chat
      bot2.sendMessage(chatId, "/echo pidor");
      client.guilds.get("351491707554103296").channels.get("381810646011871232").send(resp)
     
    });
