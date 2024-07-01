module.exports = [{
name: "nuke",
code: `

$deleteChannel[$channelid]
$cloneChannel[$channelID;$channelName[$channelID];false]
$onlyPerms[managemessages;managechannels; **You are missing the perm \`MANAGE_MESSAGES\`  and \`MANGE_CHANNELS\` **
$onlyPerms[administrator;:x: You don't have admin permission]
$suppressErrors
`}]