module.exports = [{
name:"kick",
usage: "kick < userID > < reason >",
code: ` $kick[$findMember[$message[1];yes];$guildID;0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]
$userTag[$findMember[$message[1];yes]] Telah dikick! Reason: $if[$messageslice[1]==;Tanpa Alasan;$messageslice[1]]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]]; :x: Eror!]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];:x: Saya tidak dapat melakukan nya]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]]; :x: Dia memiliki role lebih tinggi dari kamu]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];:x: Saya tidak dapat mengkick seseorang yang memiliki role sama seperti saya]
 $onlyIf[$findMember[$message[1];yes]!=$ownerID;:x: Kamu tidak dapat mengkick pemilik server]
 $onlyIf[$findMember[$message[1];yes]!=$authorID;$getGuildVar[prefix]$commandname < @USER > < REASON >]
 $onlyIf[$findMember[$message[1];yes]!=$clientID;:x: Saya tidak dapat mengkick diri saya sendiri]
$onlyIf[$findMember[$message[1];no]!=$ownerID;Kamu tidak dapat mengkick pemilik server ]
    $onlyIf[$findMember[$message[1];yes]!=$authorID;:x: Saya tidak dapat mengkick anda]
    $onlyIf[$findMember[$message[1];no]!=$clientID;:x: Saya tidak dapat mengkick diri saya sendiri]
 
$onlyIf[$hasPerms[$guildid;$authorid;kickmembers]==true;:x: You don't have permission **\`kick\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;kickmembers]==true;:x: Saya tidak memiliki permissions  kick members]
$argsCheck[>0;$getGuildVar[prefix]$commandname < @USER > < REASON >]
$suppressErrors
`}]
