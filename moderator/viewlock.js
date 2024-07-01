module.exports = [{
name: "viewlock",
aliases: "vl",
usage: "viewlock",
code: `
$modifyChannelPerms[$guildID;$channelID;-viewchannel]
**✅ Channel berhasil di sembunyikan <#$channelID>**
$let[id;$findChannel[$message;yes]]
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;Kamu tidak memiliki permissions manage channels]
$onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true;Saya tidak memiliki permissions manage channels]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]
$suppressErrors`
},{ 
  name: "unviewlock",
  aliases:"uvl",
  code: `
$modifyChannelPerms[$guildID;$channelID;+viewchannel]
**✅ Channel berhasil di tampilkan <#$channelID>**
$let[id;$findChannel[$message;yes]]
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;Kamu tidak memiliki permissions manage channels]
$onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true; Saya tidak memiliki permissions manage channels]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]
$suppressErrors
`}]