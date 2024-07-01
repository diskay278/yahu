const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "",
prefix: "?",
intents: "all"
})

//Events
bot.onMessage()

bot.status({
text: "Testing...",
type: "PLAYING",
  time:"12",
status: "online"
})



//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})


//---------UPTIME---------
bot.command({
  name:"uptime",
  aliases:['up'],
code:`$reply[$messageID;yes]
$title[1;Uptime Information]
$description[1;
\`\`\`js\n$uptime\`\`\`
]
$footer[1;$userTag[$authorID];$authorAvatar]
$color[1;#ffffff]
$addTimestamp[1]`
})

bot.command({
name: "register",
  code: `
$reply[$messageID;yes]
$changeNickname[$authorID;[WARGA] $message]

$giveRole[$guildID;$authorID;ID ROLE]
$suppressErrors[:x: Your role is too high for me, I can't register you!]

$title[1;✅ Accepted]
$description[1; > $noMentionMessage _Successfully registered on the server **$serverName[$guildID]**_]
$footer[1;$userTag[$authorID];$authorAvatar]

$addTimestamp[1]
$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;:x:You're an admin, so you can't register!]

$onlyForChannels[DI CHANNEL;]

$onlyBotPerms[managenicknames;**Your bot must have __Manage Nickname__ permission in order to register**]
$onlyBotPerms[manageroles;**Your bot must have __Manage Roles__ permission in order to register**]
$onlyBotPerms[admin;**Your bot must have __administrator__ permission in order to register**]


$onlyIf[$charCount[$message]<=24;:x: Your nickname is too long!] 

$onlyIf[$message!=;?register Your_Name] 


$color[1;#ffffff]

`
  
})