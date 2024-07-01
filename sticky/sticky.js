module.exports = [{
  name: "$alwaysExecute",
code:`

$setChannelVar[stickyID;$get[msg]]

$let[msg;$channelSendMessage[$channelId;
$nonEscape[$getChannelVar[stickymessage]]
;true]


]

$deleteMessage[$getChannelVar[stickyID];$channelID]

$onlyForChannels[$getChannelVar[stickychannel];]
$wait[1s]
`},{
   name:"set-sticky",
  code:`
  $setChannelVar[stickyID;$get[msg]]
$let[msg;
$channelSendMessage[$channelId;
$nonEscape[$getChannelVar[stickymessage]]
;true]

$deleteIn[5s]
$deletecommand
$description[✅ Sticky Berhasil Di Setup]
$color[Green]

$setChannelVar[stickychannel;$channelID]
  $setChannelVar[stickymessage;$message;$channelID]
  $onlyIf[$message!=;$nonEscape[$getVar[prefix]set-sticky \`MESSAGE\`]]

  $onlyPerms[administrator;:x: Kamu tidak memiliki permission administrator]
  
`},{
    name:"sticky-remove",
    code:`
    ✅ Sticky Berhasil Di Hapus
    $setChannelVar[stickyID;;$channelID]
    $setChannelVar[stickychannel;;$channelID]
    $onlyPerms[administrator;:x: Kamu tidak memiliki permission administrator]
  
    `}]
