module.exports = [{
name: "goodbye-message",
aliases: ['message-goodbye','gmessage'],
code: `
$color[$getVar[color]]
$description[✅ Goodbye message berhasil di setup]
$setGuildVar[gmessage;$message]
$onlyIf[$message!=; $getVar[prefix]$commandname \`MESSAGE\`]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]

`},{
    name: "goodbye-title",
aliases: ['title-goodbye','gtitle'],
code: `

$color[$getVar[color]]
$description[ ✅ GoodbyeTitle berhasil di setup]
$setGuildVar[gtitle;$message]
$onlyIf[$message!=;$getVar[prefix]$commandname \`TITLE\`]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
name: "goodbye-channel",
aliases: ['gc','gchannel'],
code: `
$color[1;$getVar[color]]
$description[✅ Channel goodbye berhasil di setup <#$mentionedChannels[1;yes]>]
$setGuildVar[gchannel;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;true]!=; $getVar[prefix]$commandname #CHANNEL]
$onlyIf[$checkContains[$message;$mentionedChannels[1;true]]==true;$getVar[prefix]$commandname #CHANNEL]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
name: "gimg",
code: `
$color[$getVar[color]]
$description[✅ Goodbye image berhasil di setup]
$image[$messageAttachment]
$setGuildVar[gimg;$messageAttachment]
$onlyIf[$messageAttachment!=;Masukkan foto yang ingin kamu gunakan sebagai welcome image]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]

`},{
name: "removegoodbye",
aliases: ['remove-goodbye','gremove'],
code: `

$color[1;$getVar[color]]
$description[✅ Goodbye channel berhasil dihapus]
$setGuildVar[gchannel;undefined]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
name: "remove-wimg",
aliases: ['r-wimg'],
code: `

$color[1;$getVar[color]]
$description[✅ Welcome Image berhasil di hapus]
$setGuildVar[wimg;]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
  name: "remove-gimg",
aliases: ['r-gimg'],
code: `

$color[1;$getVar[color]]
$description[✅ Goodbye Image berhasil di hapus]
$setGuildVar[gimg;]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`}]