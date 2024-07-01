module.exports = [{
  name:"send",
  code:`
  $channelSendMessage[$channelID;✅ | Pesan berhasil dikirim!]
  $dm[$mentioned[1;true]]
  $message
  
  $onlyIf[$message!=;$getGuildVar[prefix]$commandName <@MENTION> <PESAN>]
  $suppressErrors`

}]