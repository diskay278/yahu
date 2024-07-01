module.exports = [{
    name: "tick-panelmsg",
    code: `
    $setGuildVar[tickopen;$message]
    ✅ | Tampilan Awal Ticket berhasil di rubah.
    $onlyIf[$message!=;Masukkan pesan untuk tampilan awal ticket]
    $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unknown error has occurre]
`
},{
    name: "tick-closemsg",
    code: `
$setGuildVar[tickclose;$message]
✅ | Tampilan close ticket berhasil dirubah.
$onlyIf[$message!=; Masukkan pesan untuk tampilan close ticket]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unknown error has occurre]
    `
}]