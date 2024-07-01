module.exports = [{
  name:"tick-category",
  code:`
  $setGuildVar[category;$message]
    ✅ | Kategori Ticket Berhasil di set-up
    $onlyIf[$message!=;Masukkan ID kategori 
Contoh: $getGuildVar[prefix]tick-category 72927292xxx]
    $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unknown error has occurre]
`},{
    name:"remove-category",
    code: `$setGuildVar[category;]
    ✅ Kategori Ticket berhasil di hapus
    $onlyPerms[administrator;:x:Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unknown error has occurre]`
}]