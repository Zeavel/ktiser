const TelegramBot = require('node-telegram-bot-api'); 
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
    
  //anything
     
});
bot.on('message', (msg) => {
  console.log(msg)
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
      console.log(resp)
    });
