module.exports = [{
    name: "set-verify",
    code: `
    $title[1;Verification]
    $description[1;$getGuildVar[verifytext]]
    $color[$getGuildVar[color]]  
 $addButton[1;Verify;secondary;verify2;no;$getGuildVar[verifyemoji]]
    
$setGuildVar[verify;$mentionedRoles[1]]

   
$onlyIf[$message!=;$getGuildVar[prefix]setverify @ROLE] 
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors

    `
},{
   name: "verify2",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[✅ | Kamu berhasil terverifikasi;;;;everyone;true]
$wait[1s]

$giveRole[$guildID;$authorID;$getGuildVar[verify]]
$suppressErrors
`
}]