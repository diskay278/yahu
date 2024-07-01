module.exports =[{
    name: 'testi',
    code: `
    ✅ | Testimoni telah dikirim ke <#$getGuildVar[testichannel]>
  $channelSendMessage[$getGuildVar[testichannel];{newEmbed:
  {title:Testimoni Ke #$getGuildVar[testi]}
{description: Terimakasih sudah berbelanja di toko kami!}
  {footer:Testimoni By $userTag:$userAvatar}
  {color:$getGuildVar[color]}
  {field:Buyer:
  $message[1]}
  {field:Produk:
  $message[2]}
  {field:Price:
  Rp $message[3]}
    {field:Payment:
  $message[4]}
  
  {image:$messageAttachment}
  {timestamp}};false]
  
  
  $setGuildVar[testi;$sum[$getGuildVar[testi];1]
  $onlyIf[$getGuildVar[testichannel]!=;❌ Channel Testimoni belum kamu setting!]


  $onlyIf[$message!=;$getGuildVar[prefix]$commandName BUYER PRODUK PRICE PAYMENT BUKTI]
  $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
  $suppressErrors
  `
},{
  name:"set-testi",
  code:`
  $setGuildVar[testi;$message]
  ✅ | Testimoni berhasil di setting ke $message testimoni.
  $onlyIf[$checkContains[$message;1;2;3;4;5;6;7;8;9;0]==true;❌ Masukkan jumlah testimoni saat ini]
  $onlyIf[$message!=;$getGuildVar[prefix]$commandName JUMLAH TESTI
  Contoh: $getGuildVar[prefix]$commandName 99]
  $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
  `},{
    name:"reset-testi",
    code:`$setGuildVar[testi;0]
    ✅ | Jumlah testimoni berhasil di reset ke 0 testimoni.
    $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors
    `},{
      name:"testi-channel",
      code:`
      $setGuildVar[testichannel;$mentionedChannels[1;true]]
      ✅ | Channel testi testimoni berhasil di setting ke $message
      $onlyIf[$checkContains[$message;$mentionedChannels[1;true]]==true;❌ Mention channel testimoni!.]
      $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors
      `}]