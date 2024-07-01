module.exports = [{
name: "goodbye",
aliases: "tleave",
code: `
$sendMessage[{newEmbed:
{title:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[gtitle];{name};$username];{mention};<@$authorID>];{tag};$usertag[$authorID]];{servername};$guildName];{count};$memberscount];{owner};$username[$ownerID]];{owner.tag};$usertag[$ownerID]];{owner.id};$ownerID];{owner.mention};<@$ownerID>];{author.id};$authorid];{user.age};<t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:R>];{owner.age};<t:$truncate[$divide[$creationDate[$ownerID;ms];1000]]:R>];{server.age};<t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>];{join.time};<t:$truncate[$divide[$datestamp;1000]]:R>];{leave.time};<t:$truncate[$divide[$getUserVar[jage];1000]]:R>];undefined; 👋 Bye]}
{description:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[gmessage];{name};$username];{mention};<@$authorID>];{tag};$usertag[$authorID]];{servername};$guildName];{count};$memberscount];{owner};$username[$ownerID]];{owner.tag};$usertag[$ownerID]];{owner.id};$ownerID];{owner.mention};<@$ownerID>];{author.id};$authorid];{user.age};<t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:R>];{owner.age};<t:$truncate[$divide[$creationDate[$ownerID;ms];1000]]:R>];{server.age};<t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>];{join.time};<t:$truncate[$divide[$datestamp;1000]]:R>];{leave.time};<t:$truncate[$divide[$getUserVar[jage];1000]]:R>];undefined; Selamat tinggal <@$authorID>]}
{image:$getGuildVar[gimg]}
{color:$getVar[color]}
}]
`},{
    name: "welcome",
code: `
$sendMessage[{newEmbed:
{image:$getGuildVar[wimg]}
{color:$getVar[color]}
{title:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[wtitle];{name};$username];{mention};<@$authorID>];{tag};$usertag[$authorID]];{servername};$guildName];{count};$memberscount];{owner};$username[$ownerID]];{owner.tag};$usertag[$ownerid]];{owner.id};$ownerid];{owner.mention};<@$ownerid>];{author.id};$authorID];{user.age};<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];{owner.age};<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];{server.age};<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];{join.time};<t:$truncate[$divide[$datestamp;1000]]:R>];undefined;👋 | Selamat datang ]}
{description:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[wmessage];{name};$username];{mention};<@$authorID>];{tag};$usertag[$authorID]];{servername};$guildName];{count};$memberscount];{owner};$username[$ownerID]];{owner.tag};$usertag[$ownerid]];{owner.id};$ownerid];{owner.mention};<@$ownerid>];{author.id};$authorID];{user.age};<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];{owner.age};<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];{server.age};<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];{join.time};<t:$truncate[$divide[$datestamp;1000]]:R>];undefined;👋 Selamat datang <@$authorID> ]}
}]
`}]