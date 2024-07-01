module.exports = [{
  name:"stock",
  suppressAllErrors: true,
  code:`
  
  $title[📦 Stock Yang Tersedia]
  $description[$getUserVar[stock]]
  $footer[$userTag;$userAvatar]
  $addTimestamp
  $color[$getGuildVar[color]]
  $suppressErrors
  `
}, {
    name: "set-stock",
    suppressAllErrors: true,
    code: `
$setUserVar[stock;$message]
$title[✅ Accepted]
$description[Stock Berhasil Di Tambahkan!
Stock Yang Kamu Tambahan Saat Ini:
> $message]
  $footer[$userTag;$userAvatar]
  $addTimestamp
  $color[$getGuildVar[color]]
  $onlyIf[$message!=;Masukkan List Stock Yang Kamu Inginkan!
Contoh: $getGuildVar[prefix]set-stock Rdp Ready
Nitro 
Yt Premium
VPS]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors`
},{
  name:"reset-stock",
  suppressAllErrors: true,
  code:`
  $setUserVar[stock;]
  $title[🔨 Reset Sukses]
  $description[Stock Berhasil Di Reset/Dikosongkan]
  $footer[$userTag;$userAvatar]
  $addTimestamp
  $color[$getGuildVar[color]]
  $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
  $suppressErrors
`}]
  