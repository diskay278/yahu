module.exports = [{
name: "winfos",
code: `
$title[Welcome - Goodbye Info]
$description[
{servername} - Menampilkan nama guild
{tag} - Menampilkan tag pengguna
{count} - Menampilkan jumlah anggota baru
{name} - Menampilkan nama pengguna
{mention} - Mention user yang baru bergabung
{owner} - Menampilkan username pemilik server
{owner.tag} - Menampilkan tag pemilik server
{owner.id} - Menampilkan ID pemilik server
{owner.mention} - Mention pemilik server
{author.id} - Menampilkan ID author
{user.age} - Menampilkan tanggal dibuatnya akun pengguna
{owner.age} - Menampilkan tanggal dibuatnya akun pemilik server
{server.age} - Menampilkan tanggal dibuatnya server
{join.time} - Menampilkan waktu bergabung
{leave.time} - Menampilkan waktu keluar (hanya berfungsi pada Goodbye)]
$color[$getVar[color]]
$onlyPerms[administrator;:x: Kamu tidak memiliki akses]

`},{
    name:"welcome-help",
  aliases:['whelp','w-help'],
    code:`
$title[ Welcome - Goodbye Cmd]
$description[
\`welcome-title,welcome-message,wimg,
welcome-channel,welcome,goodbye-title,
goodbye-message,gimg,goodbye-channel,winfos\`]
$color[$getVar[color]]
$onlyPerms[administrator;:x: Kamu tidak memiliki akses]
`}]
