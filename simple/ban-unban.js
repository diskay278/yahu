module.exports = [{
    name:"ban",
    $if: "v4",
    code: `$ban[$guildID;$findUser[$message[1];yes];0;Diban oleh $userTag ($authorID) - $if[$replaceText[$message;$message[1];]==]
    Tanpa Alasan
    $else $replaceText[$message;$message[1];]]
   $color[Red]
    $description[1;<@$findUser[$message[1];yes]> Telah DiBanned
    Alasan: $if[$replaceText[$message;$message[1];]==]\`Tanpa Alasan\` $replaceText[$message;$message[1];]]
    

    $if[$authorID!=$ownerID]
    $if[$findMember[$message[1];no]!=]
        $onlyIf[$highestRole[$findUser[$message[1];yes]]!=$highestRole[$authorID];:x: Kamu tidak dapat membanned seseorang yang memiliki role sama seperti saya]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];yes]]];:x: Dia memiliki role yang lebih tinggi dari saya]
    $onlyIf[$highestRole[$findUser[$message[1];yes]]!=$highestRole[$clientID];:x: Saya tidak dapat membanned seseorang yang memiliki role lebih tinggi dari saya]
    
    
    $onlyIf[$findUser[$message[1];yes]!=$ownerID;:x: Kamu tidak dapat melakukan itu pada pemilik server]
    $onlyIf[$findUser[$message[1];yes]!=$authorID;:x: Saya tidak dapat membanned dirimu:)]
    $onlyIf[$findUser[$message[1];yes]!=$clientID;:x: Saya tidak dapat membanned diri saya sendiri]
    
    $onlyIf[$findUser[$message[1];no]!=;$getGuildVar[prefix]$commandname < @USER >]
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;:x: Kamu tidak memiliki  Permissions Ban Members]
    $onlyBotPerms[banmembers;:x: Saya tidak memiliki permissions Ban Members]
    $suppressErrors
`
},{
    name: "unban",
    code: `$unban[$guildID;$findUser[$message[1];yes]]
   
    $description[1;<@$findUser[$message[1];yes]> Berhasil di unbanned!]
    $color[Green]
    $onlyIf[$isBanned[$guildID;$findUser[$message[1];yes]]==true;:x: Seseorang yang anda maksud tidak terbanned]
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true; :x: Kamu tidak memiliki permissions Ban Members]
    $onlyBotPerms[banmembers;:x: Saya tidak memiliki Permissions Ban Members]
    $onlyIf[$message!=;$getGuildVar[prefix]unban \`ID USER\`]
    $suppressErrors
`
}]