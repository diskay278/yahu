module.exports = [{
  name:"tick-role",
  code:`
  $setGuildVar[tickrole;$findRole[$message[1]]]
    ✅ | Ticket Role Berhasil di set-up
    $onlyif[$roleExists[$findRole[$message[1]]]==true;Mention role yang diizinkan untuk melihat ticket channel]
    $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unknown error has occurre]
`},{
    name: "remove-role",
    code: `$setGuildVar[tickrole;]
    ✅ Ticket Role berhasil di hapus
    $onlyPerms[administrator;:x:Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unknown error has occurre]`
}]