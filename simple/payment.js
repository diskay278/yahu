module.exports = [{
  name:"payment",
  suppressAllErrors: true,
  code:`
  $sendMessage[{newEmbed:
  {title:💰 Payment}
  {description:$getUserVar[pay]}
  {footer:$userTag:$userAvatar}
  {timestamp}
  {color:$getVar[color]}
  {thumbnail:$guildIcon}
  {image:$getUserVar[qris]}
  };false]
  
  `
}, {
    name: "set-pay",
    suppressAllErrors: true,
    code: `
$setUserVar[pay;$message]
$title[✅ Accepted]
$description[Payment Berhasil Di Tambahkan!
Payment Yang Kamu Tambahan Saat Ini:
> $message]
  $footer[$userTag;$userAvatar]
  $addTimestamp
  $color[$getGuildVar[color]]
  $onlyIf[$message!=;Masukkan List payment Yang Kamu Inginkan!
Contoh: $getGuildVar[prefix]set-pay Gopay,Dana,Ovo]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors`
},{
  name:"reset-pay",
  suppressAllErrors: true,
  code:`
  $setUserVar[pay;]
  $title[🔨 Reset Sukses]
  $description[Payment Berhasil Di Reset/Dikosongkan]
  $footer[$userTag;$userAvatar]
  $addTimestamp
  $color[$getVar[color]]
  $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
  $suppressErrors
`},{
  name:"set-qris",
  code:`
  $setUserVar[qris;$messageAttachment]
  $description[✅ Qris berhasil diatur]
  $color[$getVar[color]]
  $image[$messageAttachment]
  $onlyIf[$messageAttachment!=;Tolong berikan screenshot/foto qris]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
`},{
  name:"remove-qris",
  code:`
  $setUserVar[qris;]
  ✅ Qris Berhasil di hapus dari \`$getVar[prefix]payment\`
  $onlyPerms[administrator; :x: Kamu tidak memiliki permissions administrator]
  `}]
  