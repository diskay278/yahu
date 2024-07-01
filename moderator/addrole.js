module.exports = [{
name: "addrole",
  suppressAllErrors: true,
code: `
$giveRoles[$guildID;$get[u];$get[id]]
✅ Role\`$rolename[$get[id]]\` berhasil ditambahin ke \`$usertag[$get[u]]\`
$onlyIf[$hasRoles[$guildID;$get[u];$get[id]]==false; :x: Dia sudah memiliki role yang ingin anda berikan ]
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;:x: Kamu tidak miliki permissions MANAGE ROLES]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true; :x: Saya tidak memiliki permissions  MANAGE ROLES]
$onlyIf[$message!=;$getGuildVar[prefix]$commandname < @USER > < @ROLE >]
$let[id;$findRole[$message[2]]]
$let[u;$findMember[$message[1];yes]]
$suppressErrors
`},{
  name: "removerole",
code: `
$takeRole[$guildID;$get[u];$get[id]]
Role $rolename[$get[id]] yang dimiliki $usertag[$get[u]] berhasil di ambil
$onlyIf[$hasRoles[$guildID;$get[u];$get[id]]==true;**$username** tidak memiliki role itu]
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true; **Kamu tidak memiliki permissions \`manage roles\`]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true; **Saya tidak memiliki permissions \`Manage Roles\`]
$onlyIf[$message!=;$getGuildVar[prefix]$commandname < @USER > < @ROLE >]
$let[id;$findRole[$message[2]]]
$let[u;$findMember[$message[1];yes]]
$suppressErrors
`}]
