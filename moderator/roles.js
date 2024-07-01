module.exports = [{
  name: "roleall",
  code:`
$forEachMember[5;{};roleall;]
$description[✅ Seluruh member sudah anda berikan role <@&$findRole[$message[1]]>]
$color[$getGuildVar[color]]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true; :x: Saya tidak memiliki permissions manage channels]
$onlyIf[$message!=;$getGuildVar[prefix]$commandName < @ROLE >]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]
$suppressErrors
`
},{
name: "roleall",
type: "awaited",
code:`$giveRole[$guildID;$authorID;$findRole[$message[1]]]
$suppressErrors
`
}] 