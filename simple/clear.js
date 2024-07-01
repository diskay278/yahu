module.exports = [{
name: "purge",
aliases: "clear",
code: `
$deleteIn[4s]
**$username** menghapus $message pesan
$clear[$message]
$onlyIf[$message<101; Kamu hanya dapat menghapus 100 pesan]
$onlyIf[$message!=;$getGuildVar[prefix]$commandname < JUMLAHPESAN >]
$onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator.]
$suppressErrors
`}]
