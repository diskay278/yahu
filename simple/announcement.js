module.exports = [{
name: "ann",
code: `
$title[$splitText[1]]
$description[$splitText[2]]
$addTimestamp
$textSplit[$message|$message;|]
$color[$getGuildVar[color]]
    $deletecommand
$onlyIf[$message!=;$getGuildVar[prefix]$commandName **__text1 | text2__**]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors[:x: An unexpected error occurred]`

},{
  name:"annc",
  code:`
  $message
  $deletecommand
  $onlyIf[$message!=;$getGuildVar[prefix]$commandName PESAN]
  $onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
  $suppressErrors
  `
}]
