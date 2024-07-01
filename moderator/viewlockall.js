module.exports = [{
name: "viewlockall",
aliases: "vla",
code: `
$forEachGuildChannel[5;{};viewlock;]
**✅ Seluruh channel berhasil di sembunyikan**
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;Kamu tidak memiliki permissions manage channels]
$onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true;Saya tidak memiliki permissions manage channels]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]

$suppressErrors`
},{
type: "awaited",
name: "viewlock",
code: `
$modifyChannelPerms[$guildid;$channelid;-viewchannel]
$suppressErrors
`},{
name: "viewunlockall",
aliases: "vula",
code: `
$forEachGuildChannel[5;{};viewunlock;]
**✅ Seluruh channel berhasil di sembunyikan**
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;Kamu tidak memiliki permissions manage channels]
$onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true;Saya tidak memiliki permissions manage channels]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]

$suppressErrors`
},{
type: "awaited",
name: "viewunlock",
code: `
$modifyChannelPerms[$guildid;$channelid;+viewchannel]
$suppressErrors
`}]

