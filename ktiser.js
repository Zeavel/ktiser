const TelegramBot = require('node-telegram-bot-api'); 
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {
  polling: true
});
var prefix = "."
function commandIs(str, msg){

 
  return msg.text.toString().toLowerCase().startsWith(prefix + str);
}
bot.on('message', (msg) => {
    
  //anything
     
});
bot.on('message', (msg) => {
    function send(str)
    {
      bot.sendMessage(msg.chat.id, str)
    }
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    
    }
    if(commandIs("Da", message))
    {
     send("test")
    }
   
      
    });
