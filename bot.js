const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '^'
 
 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nasa`,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 client.on('message', message => {
    const prefix = "^";
      if (message.author.kick) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "kick") {
                   if(!message.channel.guild) return;
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
     
      if (message.mentions.users.size < 1) return message.reply("منشن شخص");
      if(!reason) return message.reply ("اكتب سبب الطرد");
      if (!message.guild.member(user)
      .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
     
      message.guild.member(user).kick(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor('Kicked !', user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("User:",  `[ + ${user.tag} + ]`)
      .addField("By:", `[  + ${message.author.tag} +  ]`)
      .addField("Reason:", `[ + ${reason} +  ]`)
      client.channels.get("539058402786017296").send({embed : banembed})
    }
    });



 





client.on('message', message => {
    if (message.content.startsWith("inviteserver")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});



client.on('message', message => {
    var prefix = "^";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bcc') {
        if (!args[1]) {
    message.channel.send("**اكتب شي بعد الكوماند**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });



client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات `);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});


client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='^members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });




client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ?    **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links  !**`)
    }
}
});

client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
         if(message.content === prefix + "cm") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "om") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});
 

client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "suggestions")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react('✅').then(() => 
               c.react('❌'))
           
       }).catch(e => console.error(e)
       )
   }
});

client.on('guildMemberAdd', Sal => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'welcome') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});

  client.on('message', msg => {
  if(msg.content === '^hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('تم')
  }
})   

client.on('message', msg => {
  if(msg.content === '^unhide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('تم')
  }
})                             

client.on('message', message => {
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on('message',async message => {
  if(message.content === '^unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**`ADMINISTRATOR`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });

client.on("message", message => {
            if(message.content.startsWith("^app")) { /// Mal , Codes //// O҉Z҉X҉ 
        if(!message.channel.guild) return;////////غير البرفكس
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")//////dont change any thing
            if(!channel) return message.reply("**لانشاء روم التقديمات ^room1 من فضلك اكتب الامر**")/////////dont change
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل **' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل تتعهد بعدم خيانة أي عضو من السيرفر |أخيرا| لا يهمنا التفاعل يهمنا فقط الإنضباط  🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل سوف تتعهد بوضعك لشعار السيرفر في الجانب الأيسر من إسمك ؟!  📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();///////dont change
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل تتعهد بعدم خيانة أي عضو من السيرفر |أخيرا| لا يهمنا التفاعل يهمنا فقط الإنضباط`**',`${ask}`)
                        .addField('**`هل سوف تتعهد بوضعك لشعار السيرفر في الجانب الأيسر من إسمك ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith("^room1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("^acc")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("^room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم قبولك بنجاح**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("/de")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("^room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("^room2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم القبول والرفض بنجاح**")///////dont change
            }
})


client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = '^' //بريفكس البوت
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **الروم المختار للجيف اواي (كتابه فقط بدون هاشتاق**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **وقت الجيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                 console.log(e);
               }
             });
           });
         });
       });
     });
   });
 }
});


client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
}); 


	client.on("message", msg => {
  if(msg.content === '^' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
      msg.channel.send({embed: embed})
  }
})

client.on('message', message => {
    if (message.content === "^server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)            
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
   
         message.channel.send({embed:xNiTRoZ});
     }
    }); 

client.on('message', message => {
            if (message.content.startsWith("^rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

const hero = new Discord.Client({disableEveryone: true, maxMessagesCache: 1});
const as = require('array-sort');
const config = { prefix: "^", token: "NTM5MDkyNDM4Mzg0NTA4OTI4.Dy-0jQ.I9f6KbCM_b2_RdQK4WGTIfEp6Io" };
const tpoints = {};
const vpoints = {};
hero.config = config;
hero.login(hero.config.token);
hero.on('ready',async () => {
  hero.users.forEach(m => {
    if(m.bot) return;
    if(!tpoints[m.id]) tpoints[m.id] = {points: 0, id: m.id};
 
    if(!vpoints[m.id]) vpoints[m.id] = {points: 0, id: m.id};
  });
});
 
hero.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let member = message.member;
  let mention = message.mentions.users.first();
  let guild = message.guild;
  let author = message.author;
 
  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  tpoints[author.id].points += rPoints;
  if(args[0] === `${hero.config.prefix}top`) {
    let _voicePointer = 1;
    let _textPointer = 1;
    let _voiceArray = Object.values(vpoints);
    let _textArray = Object.values(tpoints);
    let _topText = as(_textArray, 'points', { reverse: true });
    let _topVoice = as(_voiceArray, 'points', { reverse: true });;
    let topRoyale = new Discord.RichEmbed();
    topRoyale.setAuthor(message.author.username, message.author.avatarURL);
    topRoyale.setTitle('^ " top');
    //topRoyale.setThumbnail(message.guild.iconURL);
    topRoyale.addField(`**TOP 5 TEXT 💬**`, _topText.map(r => `**\`.${_textPointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    topRoyale.addField(`**TOP 5 VOICE 🎙**`, _topVoice.map(r => `**\`.${_voicePointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    message.channel.send(topRoyale).catch(e => {
      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);
    });
  }
});

 client.on("message", (message) => {
    
                        if (message.content.startsWith(prefix + "new")) {
        const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`  \`Support Team\` يجب عليك عمل رتبه بأسم . `);
        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`تذكره موجوده بالفعل .`);
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`تم أنشاء التذكره , #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(` ${message.author.username}!`, ` *** شكرًا لك على التواصل مع فريق الدعم! سنرد عليك في أقرب وقت ممكن.. *** `)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }

                        if (message.content.startsWith(prefix + "close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج روم التذكره.`);

        message.channel.send(` ***هل أنت متأكد من إغلآق التذكرة ؟, Type ^close to close the ticket., لديك 10 ثوآني للتأكيد .***`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '^close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('أنتهى الوقت لن يتم أغلاق لتذكره').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});

client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Hello Dude' , `Welcome to the server **${member}**`)
        .addField('User Id :', "**[" + `${member.id}` + "]**" )
                .addField(' Member Number',`${member.guild.memberCount}`)

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                                     .addField(' Server', `${member.guild.name}`,true)
.setFooter(member.user.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')


        .setTimestamp()

    member.createDM().then(function (channel) {
return channel.send(embed)
    }
    )});

client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====اتمنا لك الاستمتاع====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })

const adminprefix = "^vip";
const devs = ['520347455792087040'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

client.on('message', message => {
    if (message.content === ('^bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@520347455792087040>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});


client.on("message", message => {
    if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#111111")
      .setDescription(`
**
^bc 
^user
^avatar
^bcc 
^kick 
inviteserver  
^cm 
^om  
^mute  
^unmute 
^clear + Number
^hide
^unhide
^date
^unbanall 
^ban 
^app 
^gstart 
^server 
^rules 
^new  
^close  
^top 
^bot
**
 `)
   message.channel.sendEmbed(embed)
   
   }
   });

 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("^cutt")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");





client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("انت لم تدخل روم صوتي");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("ليست لدي صلاحيات للدخول الى الروم");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("انا لا يمكنني التكلم في هاذه الروم");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("انا لا املك صلاحيات ارسال روابط")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم اختيار الاغنية');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
        if (!serverQueue) return msg.channel.send("ليست هناك اغاني ليتم التخطي");

		serverQueue.connection.dispatcher.end('تم تخطي الاغنية');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم ايقاف الاغنية لقد خرجت من الروم الصوتي');
        return undefined;
        
	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
		if (!serverQueue) return msg.channel.send('يعمل الامر فقط عند تشغيل مقطع صوتي');
        if (!args[1]) return msg.channel.send(`لقد تم تغير درجة الصوت الى**${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`درجة الصوت الان**${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم الايقاف');
		}
		return msg.channel.send('في انتظار تشغيل المقطع');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('تم التشغيل');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, تمت اضافة المقطع الى قائمة الانتظار `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}


client.on('message', message => {
    if (message.content === '^helpmusic') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**أوامر الميوزك...**')
        .setDescription('**برفكس البوت (^)**')
        .addField('^play', 'لتشغيل اغنية')
        .addField('^join', 'دخول رومك الصوتي')
        .addField('^disconnect', 'الخروج من رومك الصوتي')
        .addField('^skip', 'تخطي الأغنية')
        .addField('^pause', 'ايقاف الاغنية مؤقتا')
        .addField('^resume', 'تكملة الاغنية')
        .addField('^queue', 'اظهار قائمة التشغيل')
        .addField('^np', 'اظهار الاغنية اللي انت مشغلها حاليا')
        .setFooter('^help لاظهار الاوامر العامة')
      message.channel.send(helpEmbed);
    }
})

const Sra7a = [
    'صراحه  |  صوتك حلو؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('^sra7a')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});


client.on('message', message => {
   if(message.content.startsWith("^invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has **${inviteCount}** invites.`);
});
  }
});
client.on('message',  (message) => {
        if(message.content.startsWith('^slap')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
    'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
    'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
    'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
    'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
    'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
    'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
    'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
    'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
    'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
    'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
    'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
    'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
    'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
    'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
    'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
    'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
    'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
    'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
    'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
client.on('message',  (message) => {
        if(message.content.startsWith('^boom')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let bombs = [
    'https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif',
    'https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif',
    'https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif',
    'https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif',
    'https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif',
    'https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif',
    'https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif',
    'https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif',
    'https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif',
    'https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif',
    'https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif',
    'https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif',
    'https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif',
    'https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif',
    'https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif',
    'https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif',
    'https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif',
    'https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif',
    'https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif',
    'https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif',
    'https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif',
    'https://media.giphy.com/media/XathaB5ILqSME/giphy.gif',
    'https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif',
    'https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif',
    'https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif',
    'https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif',
    'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
    'https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif',
    'https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username} لقد تم تطير الجبه بنجاح  جبهتك طارت ${user.username}!`,
      image: {
        url: bombs[Math.floor(Math.random() * bombs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
 
client.on('message',  (message) => {
        if(message.content.startsWith('^sad')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let sads = [
    'https://media.giphy.com/media/3oriO4SMR6ThimOQbS/giphy.gif',
    'https://media.giphy.com/media/QhCAwDXZ0BltK/giphy.gif',
    'https://media.giphy.com/media/Q8FaD6GjQ97jO/giphy.gif',
    'https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif',
    'https://media.giphy.com/media/VqcflcXbbud2M/giphy.gif',
    'https://media.giphy.com/media/3UkLhoyi553r2/giphy.gif',
    'https://media.giphy.com/media/3UkLhoyi553r2/giphy.gif',
    'https://media.giphy.com/media/Txh1UzI7d0aqs/giphy.gif',
    'https://media.giphy.com/media/GyNeHf5IrpQNG/giphy.gif',
    'https://media.giphy.com/media/lKWlXRBGltz2g/giphy.gif',
    'https://media.giphy.com/media/NTY1kHmcLsCsg/giphy.gif',
    'https://media.giphy.com/media/vzpy2NjOKdeyk/giphy.gif',
    'https://media.giphy.com/media/jRtGjzkm8JbRC/giphy.gif',
    'https://media.giphy.com/media/iyfeJqd6NLNK0/giphy.gif',
    'https://media.giphy.com/media/z2ug5EHHBuFaM/giphy.gif',
    'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
    'https://media.giphy.com/media/5bukWFXJ6pn5S/giphy.gif',
    'https://media.giphy.com/media/13RfBpyqVyvIME/giphy.gif',
    'https://media.giphy.com/media/CL2Y9t4YQbp2U/giphy.gif',
    'https://media.giphy.com/media/3ov9ka1OzbTGjQtCXC/giphy.gif',
    'https://media.giphy.com/media/l3vR11Mr4XpqhtSHm/giphy.gif',
    'https://media.giphy.com/media/l2R08A0HfJkV2lwQg/giphy.gif',
    'https://media.giphy.com/media/3o6YghZV15YGZoOtIk/giphy.gif',
    'https://media.giphy.com/media/8LM1P6bkXTyhy/giphy.gif',
    'https://media.giphy.com/media/l4FGooziZSanyKS3u/giphy.gif',
    'https://media.giphy.com/media/4TnZKIJHMhjKh3mIB1/giphy.gif',
    'https://media.giphy.com/media/l0HlyXP3OkdhvO61G/giphy.gif',
    'https://media.giphy.com/media/SXCQWrsob9TGg/giphy.gif',
    'https://media.giphy.com/media/6nYwftjsGdKgOXB5C4/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username} حزين بسببك او زعلان منك ${user.username}!`,
      image: {
        url: sads[Math.floor(Math.random() * sads.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
client.on('message',  (message) => {
        if(message.content.startsWith('^hug')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
    'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
    'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
    'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
    'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
    'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
    'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
    'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
    'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
    'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
    'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
    'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
    'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
    'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
    'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
    'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
    'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
    'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
    'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
    'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
    'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
    'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
    'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
    'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
    'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
    'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
    'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
    'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username} اداك حضن او ضمه ${user.username}!`,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
 
client.on('message',  (message) => {
        if(message.content.startsWith('^kiss')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let kiss = [
    'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
    'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
    'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
    'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
    'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
    'https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif',
    'https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif',
    'https://giphy.com/gifs/kiss-anime-nISHppsUAzosMhttps://media.giphy.com/media/nISHppsUAzosM/giphy.gif',
    'https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif',
    'https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif',
    'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
    'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
    'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
    'https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif',
    'https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif',
    'https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif',
    'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
    'https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif',
    'https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif',
    'https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif',
    'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
    'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
    'https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif',
    'https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif',
    'https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif',
    'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
    'https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif',
    'https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif',
    'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
    'https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username}اداك قبله ا�� بوسه ${user.username}!`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
 
client.on('message',  (message) => {
        if(message.content.startsWith('-miss')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let misss = [
    'https://media.giphy.com/media/3o6vXUgk6M0h07MnuM/giphy.gif',
    'https://media.giphy.com/media/NfOD0Bv11XnhK/giphy.gif',
    'https://media.giphy.com/media/2Jl7a8ixNlNHa/giphy.gif',
    'https://media.giphy.com/media/WkNXHaiV9HLji/giphy.gif',
    'https://media.giphy.com/media/3DiUM4dGYyali/giphy.gif',
    'https://media.giphy.com/media/17CdXoPQo7Un6/giphy.gif',
    'https://media.giphy.com/media/pjgaGMqsNhjhe/giphy.gif',
    'https://media.giphy.com/media/qdhgMbi5mwS9W/giphy.gif',
    'https://media.giphy.com/media/xTgJVYEHoVzpe/giphy.gif',
    'https://media.giphy.com/media/o1UKv4TutEOUo/giphy.gif',
    'https://media.giphy.com/media/3o6QLcNZgGKvFBluKs/giphy.gif',
    'https://media.giphy.com/media/to8AmZ3lEUhqg/giphy.gif',
    'https://media.giphy.com/media/3o6QKXms0mJznYVkm4/giphy.gif',
    'https://media.giphy.com/media/148LYpgc9AIUdW/giphy.gif',
    'https://media.giphy.com/media/4MDnmxVxCZcYM/giphy.gif',
    'https://media.giphy.com/media/5XHHIFJZpQsXS/giphy.gif',
    'https://media.giphy.com/media/3o7TKzEQfYQ7inapoI/giphy.gif',
    'https://media.giphy.com/media/l2Je61TcDeJ4ZOIyk/giphy.gif',
    'https://media.giphy.com/media/3o6Mb3mYI1yuqEwgFi/giphy.gif',
    'https://media.giphy.com/media/mfAGXwxCd3D8Y/giphy.gif',
    'https://media.giphy.com/media/l0HlFinR4G1JvptjG/giphy.gif',
    'https://media.giphy.com/media/9iVgOohm2SKT6/giphy.gif',
    'https://media.giphy.com/media/26gsj4kyT3LwhPufK/giphy.gif',
    'https://media.giphy.com/media/116mAogyorg84U/giphy.gif',
    'https://media.giphy.com/media/l2ZDOR1uY9yo6MJyM/giphy.gif',
    'https://media.giphy.com/media/l2ZDWLIIZLhLiuMSs/giphy.gif',
    'https://media.giphy.com/media/OT89Nuhy3GAFbW359x/giphy.gif',
    'https://media.giphy.com/media/82AkGaEtqrybM2RFSh/giphy.gif',
    'https://media.giphy.com/media/1o1ouZSWwFVwysKcnm/giphy.gif',
    'https://media.giphy.com/media/8mqyDwYRdzdRof6fzu/giphy.gif',
    'https://media.giphy.com/media/3oriO0bDWiobwAWqGY/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username} اشتاق اليك كثيرا  ${user.username}!`,
      image: {
        url: misss[Math.floor(Math.random() * misss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
 
client.on('message',  (message) => {
        if(message.content.startsWith('^love')) {
  let user = message.mentions.users.first();
  if (!user) {
 
    return message.emit('commandUsage', message, this.help);
  }
  let loves = [
    'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
    'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
    'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
    'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
    'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
    'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
    'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
    'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
    'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
    'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
    'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
    'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
    'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
    'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
    'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
    'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
    'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
    'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
    'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
    'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
    'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
    'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
    'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
    'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
    'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
    'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
    'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
    'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
    'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
    'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
  ];
 
  message.channel.send({
    embed: {
      description: `${message.author.username} :heart:  يعبر لك عن حبه الحقيقي   ${user.username}!`,
      image: {
        url: loves[Math.floor(Math.random() * loves.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
 
 
   var prefix = "^";
 
var cats = [
 
"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg?cs=srgb&dl=adorable-animal-animal-photography-1022158.jpg&fm=jpg",
"https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?cs=srgb&dl=adorable-animal-animal-photography-248280.jpg&fm=jpg",
"https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?cs=srgb&dl=adorable-animal-cat-156934.jpg&fm=jpg",
"https://images.pexels.com/photos/385960/pexels-photo-385960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=adorable-animal-animal-photography-735423.jpg&fm=jpg",
"https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.login(process.env.BOT_TOKEN);
