module.exports =[{
    name: 'testi',
    code: `
    ✅ | Testimoni telah dikirim ke <#$getGuildVar[testichannel]>
  $channelSendMessage[$getGuildVar[testichannel];{newEmbed:
 
  {title:$guildName Testimonial #$getGuildVar[testi]}
  {description:
  _Thank you very much for buying our product!_
  
  **Testimonial Information
・ Buyer : $splitText[1]
・ Product : $splitText[2]
・ Expired : $splitText[3]
・ Price : Rp $splitText[4]**}
{image:$messageAttachment}

{color:White}
  
  };false]
  $setGuildVar[testi;$sum[$getGuildVar[testi];1]
  
  $textSplit[$message|$message|$message|$message;|]
  
  $onlyIf[$message!=;$getGuildVar[prefix]$commandName BUYER | PRODUK | EXPIRED| PRICE]

  $onlyForRoles[$getGuildVar[roletesti];:x: Kamu tidak memiliki role seller.]
  
  
  $onlyIf[$getGuildVar[testichannel]!=;❌ Channel Testimoni belum kamu setting!]
$onlyIf[$getGuildVar[roletesti]!=;❌ Role seller belum di setting!]



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
      `},{
        name:"testi-role",
      code:`
      $setGuildVar[roletesti;$mentionedRoles[1]]
      ✅ | Role Seller berhasil di setting
      $onlyIf[$checkContains[$message;$mentionedRoles[1]]==true;❌ Mention role seller.]
      $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors
      `},{
        name:"help",
        code:`
        $title[ Testi Commands]
        $description[
\`testi\` - untuk mengirimkan testimoni.
\`testi-role\` - untuk mengatur testimoni role seller.
\`testi-channel\` - untuk mengatur channel testimoni.
\`set-testi\` - untuk mengatur jumlah testi.
\`reset-testi\` - untuk mengatur ulang jumlah testi.
        ]
        $color[$getVar[color]]
        $onlyForRoles[$getGuildVar[roletesti];:x: Kamu tidak memiliki role seller.]
  
        `}]

