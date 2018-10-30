const TelegramBot = require('node-telegram-bot-api'); 
const token = process.env.BOT_TOKEN;

    
bot.on('message', (msg) => {
    
  //anything
     
});
bot.on('message', (msg) => {
    
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
        
    });
