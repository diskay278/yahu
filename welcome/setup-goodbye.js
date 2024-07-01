module.exports = [{
name: "welcome-message",
aliases: ['message-welcome','wmessage'],
code: `

$color[$getVar[color]]
$description[✅ Welcome Message berhasil di setup]
$setGuildVar[wmessage;$message]
$onlyIf[$message!=;$getVar[prefix]$commandname \`MESSAGE\`]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
    name: "welcome-title",
aliases: ['title-welcome','wtitle'],
code: `

$color[$getVar[color]]
$description[ ✅ Welcome Title berhasil di setup]
$setGuildVar[wtitle;$message]
$onlyIf[$message!=;$getVar[prefix]$commandname \`TITLE\`]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
name: "welcome-channel",
aliases: ['wchannel'],
code: `
$color[$getVar[color]]
$description[**✅ Channel welcome berhasil di setup <#$mentionedChannels[1;true]>**]
$setGuildVar[wchannel;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;$getVar[prefix]$commandname #CHANNEL]
$onlyIf[$checkContains[$message;$mentionedChannels[1;true]]==true;$getVar[prefix]$commandname #CHANNEL]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]

`},{
name:"removewelcome",
aliases: ['remove-welcome','rwelcome'],
code: `
$color[$getVar[color]]
$description[✅ Welcome channel berhasil di hapus]
$setGuildVar[wchannel;undefined]
$onlyIf[$mentionedChannels[1;true]!=;$getVar[prefix]$commandname #CHANNEL]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]

`},{
name: "wimg",
code: `
$color[1;$getVar[color]]
$description[✅ Welcome image berhasil disetuo]
$image[$messageAttachment]

$setGuildVar[wimg;$messageAttachment]

$onlyIf[$messageAttachment!=;Masukkan foto yang ingin kamu gunakan sebagai welcome image]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]


`}]