module.exports = [{
name: "lockall",
aliases: "lall",
code: `
$forEachGuildChannel[1;{};lock;]
**✅ Seluruh Channel berhasil di kunci**
$let[id;$findChannel[$message;yes]]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;:x: Kamu tidak memiliki permissions manage channels]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;:x: Saya tidak memiliki permissions manage channels ]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]
$suppressErrors`
},{
type: "awaited",
name: "lock",
code: `
$modifyChannelPerms[$guildid;$channelid;-sendmessages]`
},{
  name: "unlockall",
code: `
$forEachGuildChannel[1;{};unlock;]
**✅ Seluruh Channel berhasil di buka**
$let[id;$findChannel[$message;yes]]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;:x: Kamu tidak memiliki permissions manage channels]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;:x: Saya tidak memiliki permissions manage channels]
$suppressErrors`
},{
type: "awaited",
name: "unlock",
code: `
$modifyChannelPerms[$guildID;$channelID;+sendmessages]
$suppressErrors`}]

