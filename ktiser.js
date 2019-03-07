const Discord = require('discord.js');
const client = new Discord.Client();







var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("-" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function getRandomInt(min, max)
{

  return Math.floor(Math.random() * (max - min + 1)) + min;

}



/*client.on("ready", n =>{
    client.setInterval(function play()
    {
     
            var sam = client.guilds.get("351491707554103296").members.size
            var mems = client.guilds.get("351491707554103296").members.map(g=>g.id)
            for(i=0;i<sam;i++)
            {
                var user = client.guilds.get("351491707554103296").members.get(mems[i])
                var roles = client.guilds.get("351491707554103296").members.get(mems[i]).roles.map(h=>h.name)
                if(roles.includes("Стример"))
                {
                  
                    user.user.fetchProfile().then(f=>{
                        var url =  f.connections.map(f=>f.id)
                        var nam =  f.connections.map(f=>f.name)
                       var serv = f.connections.map(f=>f.type)
                       var sez = f.connections.size
                    var typeurl;
           
                    for(d=0;d<sez;d++)
                    {
                        var urle = url[d]
                        var typ = serv[d]
                        if(typ == "youtube")
                        {
                            typeurl = "https://www.youtube.com/channel/"+urle

                        }
                        if(typ == "twitch")
                        {
                            typeurl = "https://www.twitch.tv/"+nam[d]

                        }
                        
                    }
                     
                     })
                }
          
            }
            var urle = "http://uo.theabyss.ru";
            var cheerio = require('cheerio');
            var request = require('request');
        
            request(urle, function (error, response, body) {
              if (!error) {
                
                var $ = cheerio.load(body)
        
              }
            })
     
       
    },5000)
})*/
client.on("message", message =>
{
if(commandIs("change",message))
{    

  
var id = message.content.substring(8).replace("<#","").replace(">","")
client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(g=>{
g.edit(id)
})
 message.channel.send("Канал для опросов успешно сменен на **"+message.guild.channels.get(id).name+"**")
 
}
if(commandIs("opr",message))
{
     var time = message.content.substring(5)
     message.channel.send("Задайте вопрос")
     const filter = m => m.content.startsWith('!');
     message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
     .then(collected => {
       var ask = collected.map(h=>h.content.replace("!","")).toString()
       message.channel.send("Задайте ответы, разделите ответы через | и емодзи через запятую, пример '!ответ,:one:|ответ2,:two:'")
       message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
       .then(collectede => {
              var que = collectede.map(h=>h.content.replace("!","")).toString()
              var que2 = que.split("|")
              var emomas = [];
              for(i=0;i<que2.length;i++)
              {
                  var asq = que2[i].split(",")
                  var sq = asq[0]
                  var emo = asq[1]

              }
              var msid;
              client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(g=>{
              var embed = new Discord.RichEmbed()
              .setTitle(ask)
              for(i=0;i<que2.length;i++)
              {
                var asq = que2[i].split(",")
                var sq = asq[0]
                 embed.addField(sq+"-"+asq[1], 0)
              }
            
              message.guild.channels.get(g.content).send(embed).then(m=>{
                  for(d=0;d<que2.length;d++)
                  {
                    var asq = que2[d].split(",")
                    var emo = asq[1]
                    emomas.push(emo)
                    m.react(emo)
                   
                  }
                 // console.log(m.embeds[0].fields)
                  const filter = (user) => !user.bot
                  m.awaitReactions(filter, { time: parseInt(time)*1000})
                  .then((collectedr) => {
               var userz = collectedr.map(g=>g.users)
            
var names = collectedr.map(g=>g.emoji.name)
var count = collectedr.map(g=>g.emoji.reaction.count)
var em = new Discord.RichEmbed(m.embeds[0])
 for(r=0;r<que2.length;r++)
 {
    em.fields[emomas.indexOf(names[r])].value = count[r] - 1
     
 }
 m.edit(em)

                  })
          
              })
            })
              
             
             
             
       })
     })
  


}
   
})


client.login(process.env.TOKEN)
