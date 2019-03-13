const Discord = require('discord.js');
const client = new Discord.Client();


console.log(new Date().getTime())




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


client.on("ready", n =>{
    client.setInterval(function play()
    {
        client.guilds.get("351491707554103296").channels.get("554292623125512203").fetchMessage("555462354985287713").then(f=>{
        
            if(parseInt(f.content) < new Date().getTime())
            {
                client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(ch=>{

              
                 
                client.guilds.get("351491707554103296").channels.get("553195332234641416").fetchMessage("555461399703322628").then(fe=>{
                    client.guilds.get("416006394102415370").channels.get(ch.content).fetchMessage(fe.content).then(se=>{
                        var em = new Discord.RichEmbed(se.embeds[0])
                         em.title = em.title + "\nГолосование закончилось!"
                         se.edit(em)
                         f.edit("Dsd")
                         fe.edit("Dsd")
                    })
                })
                  })
            }
        })
    },5000)
})
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
client.on('raw', packet => {
    // We don't want this to run on unrelated packets
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    // Grab the channel to check the message from
    const channel = client.channels.get(packet.d.channel_id);
    // There's no need to emit if the message is cached, because the event will fire anyway for that
    if (channel.messages.has(packet.d.message_id)) return;
    // Since we have confirmed the message is not cached, let's fetch it
    channel.fetchMessage(packet.d.message_id).then(message => {
        // Emojis can have identifiers of name:id format, so we have to account for that case as well
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        // This gives us the reaction we need to emit the event properly, in top of the message object
        const reaction = message.reactions.get(emoji);
       client.guilds.get("351491707554103296").channels.get("553195332234641416").fetchMessage("555461399703322628").then(f=>{
           console.log(f.content + ' ' + reaction.message.id)
        if(f.content === reaction.message.id.toString())
        {
            client.guilds.get("351491707554103296").channels.get("554309409153744906").fetchMessage("555462499001171988").then(r=>{
   
                r.edit(parseInt(r.content) + 1)   
                client.guilds.get("351491707554103296").channels.get("554285927896317970").fetchMessage("555461701240225843").then(er=>{
                    var meo = er.content.split(",").length
                    client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(ch=>{
                 client.guilds.get("416006394102415370").channels.get(ch.content).fetchMessage(reaction.message.id).then(e=>{
                    
                     var erea = e.reactions.map(ere=>ere.count)
                     var men = 0;
                     for(d=0;d<erea.length;d++)
                     {
                         men = men + erea[d]
                    
                     }
                     if(men == meo)
                     {
                         r.edit(meo)   
                     }
                   //  console.log("re:"+e.reactions.size+" meo:"+meo)
                     if(men > meo)
                     {
                         var names = er.content.split(",")
                         var count = e.reactions.map(ere=>ere.count)
                         
                         
                         var em = new Discord.RichEmbed(e.embeds[0])
                          for(r=0;r<names.length;r++)
                          {
                             var cel = men - names.length
                             var del = count[r] - 1
                             var percn =  parseInt(100/cel*del)
                             if(percn>10)
                             {
                                 percn = percn - parseInt(percn.toString()[1])
                             }
                             if(percn<10 && percn>0)
                             {
                                 percn = 10
                             }
                             if(percn == 0)
                             {
                                 percn = 0
                             }
                             var bl = ""
                             var wh = ""
                             var reverse = 100 - percn
                             for(i=0;i<percn/10;i++)
                             {
                                 wh = wh + " :large_blue_circle: "
                             }
                             for(i=0;i<reverse/10;i++)
                             {
                                 bl = bl + " :black_circle: "
                             }
                             em.fields[names.indexOf(names[r])].value = count[r] - 1 + " " + wh + bl
                              
                          }
                          e.edit(em)
                     }
                 })
                })
             })
                
                
             })    
        }
        else
        {
            console.log(" ne wow")
        }
        })
      //  console.log(reaction.message.id)
        // Adds the currently reacting user to the reaction's users collection.
      /*  if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
        // Check which type of event it is before emitting
        if (packet.t === 'MESSAGE_REACTION_ADD') {
           client.emit('messageReactionAdd', reaction);
         
           console.log("log")
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
        }*/
    });
});
client.on("messageReactionAdd", re=>{
    client.guilds.get("351491707554103296").channels.get("553195332234641416").fetchMessage("555461399703322628").then(f=>{
        console.log(f.content + ' ' + re.message.id)
     if(f.content === re.message.id.toString())
     {
        client.guilds.get("351491707554103296").channels.get("554309409153744906").fetchMessage("555462499001171988").then(r=>{
   
           r.edit(parseInt(r.content) + 1)   
           client.guilds.get("351491707554103296").channels.get("554285927896317970").fetchMessage("555461701240225843").then(er=>{
               var meo = er.content.split(",").length
               client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(ch=>{
                client.guilds.get("416006394102415370").channels.get(ch.content).fetchMessage(re.message.id).then(e=>{
               
                var erea = e.reactions.map(ere=>ere.count)
                var men = 0;
                for(d=0;d<erea.length;d++)
                {
                    men = men + erea[d]
               
                }
                if(men == meo)
                {
                    r.edit(meo)   
                }
              //  console.log("re:"+e.reactions.size+" meo:"+meo)
                if(men > meo)
                {
                    var names = er.content.split(",")
                    var count = e.reactions.map(ere=>ere.count)
                    
                    
                    var em = new Discord.RichEmbed(e.embeds[0])
                     for(r=0;r<names.length;r++)
                     {
                        var cel = men - names.length
                        var del = count[r] - 1
                        var percn =  parseInt(100/cel*del)
                        if(percn>10)
                        {
                            percn = percn - parseInt(percn.toString()[1])
                        }
                        if(percn<10 && percn>0)
                        {
                            percn = 10
                        }
                        if(percn == 0)
                        {
                            percn = 0
                        }
                        var bl = ""
                        var wh = ""
                        var reverse = 100 - percn
                        for(i=0;i<percn/10;i++)
                        {
                            wh = wh + " :large_blue_circle: "
                        }
                        for(i=0;i<reverse/10;i++)
                        {
                            bl = bl + " :black_circle: "
                        }
                        em.fields[names.indexOf(names[r])].value = count[r] - 1 + " " + wh + bl
                         
                     }
                     e.edit(em)
                }
            })
           })
        })
           
           
        })
      
    /*   */
        
     }
     else
     {
         console.log(" ne wow")
     }
     })
})
// msg 554273251929489409 ch 553195332234641416
client.on("message", message =>
{
    if(commandIs('send',message))
    {
        message.channel.send("553159634186272779")
    }
    if(commandIs("percent",message))
    {
        var con = message.content.substring(9).split(" ")
        var cel = con[0]
        var del = con[1]
        var percn =  parseInt(100/cel*del)
       if(percn>10)
        {
            percn = percn - parseInt(percn.toString()[1])
        }
        if(percn<10 && percn>0)
        {
            percn = 10
        }
        if(percn == 0)
        {
            percn = 0
        }
        var bl = ""
        var wh = ""
        var reverse = 100 - percn
        for(i=0;i<percn/10;i++)
        {
            wh = wh + " :large_blue_circle: "
        }
        for(i=0;i<reverse/10;i++)
        {
            bl = bl + " :black_circle: "
        }
       
        message.channel.send("551384140268699648")

    }
    if(commandIs("end",message))
    {
        client.guilds.get("351491707554103296").channels.get("554292623125512203").fetchMessage("555462354985287713").then(f=>{
        
          
                client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(ch=>{

              
                 
                client.guilds.get("351491707554103296").channels.get("553195332234641416").fetchMessage("555461399703322628").then(fe=>{
                    client.guilds.get("416006394102415370").channels.get(ch.content).fetchMessage(fe.content).then(se=>{
                        var em = new Discord.RichEmbed(se.embeds[0])
                         em.title = em.title + "\nГолосование закончилось!"
                         se.edit(em)
                         f.edit("Dsd")
                         fe.edit("Dsd")
                    })
                })
                  })
          
        })
    }
if(commandIs("change",message))
{    

  
var id = message.content.substring(8).replace("<#","").replace(">","")
client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("553164702969102336").then(g=>{
g.edit(id)
})
 message.channel.send("Канал для опросов успешно сменен на **"+message.guild.channels.get(id).name+"**")
 
}
if(commandIs("opd",message))
{
     var time = message.content.substring(5)
     var timed;
     if(time.includes("s"))
     {
         timed = parseInt(time.split("s")[0]) *1000
     }
     if(time.includes("m"))
     {
         timed = parseInt(time.split("m")[0]) * 60000
     }
     if(time.includes("h"))
     {
         timed = parseInt(time.split("h")[0]) * 3600000
     }
     if(time.includes("d"))
     {
         timed = parseInt(time.split("d")[0]) * 86400000
     }
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
              client.guilds.get("351491707554103296").channels.get("553159634186272779").fetchMessage("554279082775281664").then(g=>{
              var embed = new Discord.RichEmbed()
              .setTitle(ask)
              for(i=0;i<que2.length;i++)
              {
                var asq = que2[i].split(",")
                var sq = asq[0]
                 embed.addField(sq+"-"+asq[1], 0)
              }
            
              message.guild.channels.get(g.content).send(embed).then(m=>{

                var d;
                      
                client.guilds.get("351491707554103296").channels.get("554285927896317970").fetchMessage("555461701240225843").then(f=>{
            
                var ras = [];
                  
                          
                  for(d=0;d<que2.length;d++)
                  {
                    var asq = que2[d].split(",")
                    var emo = asq[1]
                   ras.push(emo)
                   
                      
                      
                       
                   
              
                
                    m.react(emo)
                   
                  }
                     if(ras.length == que2.length)
                     {
                           f.edit(ras.toString())
                     }
                  
                          
                        
              
            })
            client.guilds.get("351491707554103296").channels.get("554309409153744906").fetchMessage("555462499001171988").then(r=>{
r.edit(0)
            })
                  client.guilds.get("351491707554103296").channels.get("553195332234641416").fetchMessage("555461399703322628").then(h=>{
                      h.edit(m.id)
                  })
                  client.guilds.get("351491707554103296").channels.get("554292623125512203").fetchMessage("555462354985287713").then(b=>{
                    b.edit(new Date().getTime() + timed)
                })
                 // console.log(m.embeds[0].fields)
                  const filter = (user) => !user.bot
               /*   m.awaitReactions(filter, { time: timed})
                  .then((collectedr) => { 
               var userz = collectedr.map(g=>g.users)
            
var names = collectedr.map(g=>g.emoji.name)
var count = collectedr.map(g=>g.emoji.reaction.count)


var em = new Discord.RichEmbed(m.embeds[0])
 for(r=0;r<que2.length;r++)
 {
    var cel = collectedr.size - 1
    var del = count[r] - 1
    var percn =  parseInt(100/cel*del)
    if(percn>10)
    {
        percn = percn - parseInt(percn.toString()[1])
    }
    if(percn<10 && percn>0)
    {
        percn = 10
    }
    if(percn == 0)
    {
        percn = 0
    }
    var bl = ""
    var wh = ""
    var reverse = 100 - percn
    for(i=0;i<percn/10;i++)
    {
        wh = wh + " :large_blue_circle: "
    }
    for(i=0;i<reverse/10;i++)
    {
        bl = bl + " :black_circle: "
    }
    em.fields[emomas.indexOf(names[r])].value = count[r] - 1 + " " + wh + bl
     
 }
 m.edit(em)

                  })*/
          
              })
            })
              
             
             
             
       })
     })
  


}
   
})

client.login(process.env.TOKEN)
