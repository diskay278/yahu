module.exports = [{
name: "lock",
usage: "lock < #channel >",
code: `
$modifyChannelPerms[$guildID;$channelID;-sendmessages]
**✅ Channel berhasil dikunci <#$channelID>**
$let[id;$findChannel[$message;yes]]
$onlyIf[$hasPerms[$guildid;$authorID;managechannels]==true;**:x: You don't have  \`MANAGE CHANNELS\` permission**]
$onlyIf[$hasPerms[$guildid;$clientID;managechannels]==true;**:x: Something went wrong, I don't have \`MANAGE CHANNELS\` permissions**]
$suppressErrors
`},{
name: "unlock",
code: `
$modifyChannelPerms[$guildID;$channelID;+sendmessages]
**✅ Channel berhasil dibuka <#$channelID>**
$let[id;$findChannel[$message;yes]]
$onlyIf[$hasPerms[$guildid;$authorID;managechannels]==true;**:x: You don't have  \`MANAGE CHANNELS\` permission**]
$onlyIf[$hasPerms[$guildid;$clientID;managechannels]==true;**:x: Something went wrong, I don't have \`MANAGE CHANNELS\` permissions**]
$suppressErrors
`}]

