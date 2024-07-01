module.exports = [{
    name:"antilink-off",
    code:`
$setGuildVar[antilink;false]
⛔ | Antilink berhasil nonaktifkan 
   $onlyPerms[administrator;Kamu tidak memiliki permission untuk menggunakan command ini]
$suppressErrors`
},{
    name:"antilink-on",
    code:`
$setGuildVar[antilink;true]
✅ | Antilink Berhasil diaktifkan. 
   $onlyPerms[administrator;Kamu tidak memiliki permission untuk menggunakan command ini]
$suppressErrors`
},{
name: "$alwaysExecute",
code: `
$deleteIn[20s]
<@$authorID>
$description[Detected share link without the knowledge of the server owner]
$color[$getGuildVar[color]]
$deletecommand
$onlyIf[$checkContains[$message;https://;https;www.youtube.com;discord.gg/;https://discord.gg/]==true;]
$onlyIf[$getGuildVar[antilink]==true;]
$suppressErrors[:x: An unexpected error occurred]
`}]