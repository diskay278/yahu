module.exports = [{
    name: "t-start",
    code: `
    $title[1;$getGuildVar[titleopen]]
    $description[1;$getGuildVar[tickopen]]
    $color[1;$getGuildVar[color]]
        
$addButton[1;Create Ticket;secondary;support;no;✉️]
    $onlyIf[$getGuildVar[category]!=;❌ Ticket Category belum anda setting!]
$onlyPerms[administrator;Kamu tidak memiliki permissions administrator]
$deletecommand
$suppressErrors[:x: An unknown error has occurre]
    `
},{
   name: "support",
    type: "interaction",
    prototype: "button",
    code: `
            

        $modifyChannelPerms[$getGuildVar[tickrole];$channelID[ticket-$username];+viewchannel]
        $onlyif[$roleExists[$getGuildVar[tickrole];$guildID]==true;]
$wait[1s]

            $modifyChannelPerms[$guildID;$channelID[ticket-$username];-viewchannel]

$channelSendMessage[$channelID[ticket-$username];<@$authorID>]
    $setChannelVar[user;$authorID;$channelID[creating-$authorID]]
    $setChannelVar[id;$channelID[creating-$authorID];$channelID[creating-$authorID]]
    $interactionReply[✅ | Berhasil membuat tiket <#$channelID[ticket-$username]>;;;;all;true]
    $wait[1s]
    
    $newTicket[ticket-$username;{newEmbed:{title:$getGuildVar[titleclose]}
    {description:
    $getGuildVar[tickclose]}{color:$getGuildVar[color]}}{actionRow:{button:🔒 Tutup:danger:cmdclose:false}}
;$getGuildVar[category];false;eror ]
      
  $onlyIF[$channelExists[$channelID[ticket-$username]]<true;Kamu sudah memiliki tiket <#$channelID[ticket-$username]>
        {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
]


`

},{
    name: "cmdclose",
    type: "interaction",
    prototype: "button",
    code: `
       $interactionReply[Apakah kamu yakin ingin tetap menghapus ticket ini?;;{actionRow:
{button:Konfirmasi:success:hapus}
{button:Batal:danger:buka}
};;all;false]
$suppressErrors[:x: An unknown error has occurre]
    `
    },{
    name: "hapus",
    type: "interaction",
    prototype: "button",
    code: `
    
 
    $deleteChannel[$channelID]
    $wait[10s]
$editChannel[$channelID;{"name":"closed"}]
    $interactionReply[✅ Ticket akan di hapus dalam hitungan 10 detik;;;;all;no]
$suppressErrors[:x: An unknown error has occurre]
    `
        },{
    name: "buka",
    type: "interaction",
    prototype: "button",
    code: `
        
    $clear[2;$clientID;no;$channelID]
    $interactionReply[✅ Ticket berhasil dibatalkan;;;;all;no]
$suppressErrors[:x: An unknown error has occurre]
    `
}]