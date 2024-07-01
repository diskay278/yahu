module.exports = [{
  name:"edit-verify",
  code:`
  $setGuildVar[verifytext;$message]
  ✅ | Text verifikasi berhasil di edit
  $onlyIf[$message!=; Masukkan pesan untuk embed verifikasi]
$onlyPerms[administrator;:x: Kamu tidak memiliki permissions administrator]
$suppressErrors
`
}]