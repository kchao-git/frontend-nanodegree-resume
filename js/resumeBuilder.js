//Bio Info
var bio = {
	name: 'Kenny Chao',
	role: 'Web Developer',
	contacts: {
		email: 'kchao394@gmail.com',
		github: 'kchao-git',
		location: 'Santa Ana'
	},
	photo: 'images/fry.jpg',
	message: 'Hello there!',
	skills: ['HTML', 'CSS', 'Javascript']
};

//Name and Role Header
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

//Contact Info
var formattedContact = '<ul>' + HTMLemail.replace('%data%', bio.contacts.email) + 
	HTMLgithub.replace('%data%', bio.contacts.github) +
	HTMLlocation.replace('%data%', bio.contacts.location) +
	'</ul>';

//Profile Pic
var formattedPic = HTMLbioPic.replace('%data%', bio.photo);

//Welcome Message
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.message);

//Skills
var formattedSkills = '<ul>';
bio.skills.forEach(function(skill) {
	formattedSkills += HTMLskills.replace('%data%', skill);
});
formattedSkills += '</ul>';

$('#header').prepend(formattedSkills);
$('#header').prepend(HTMLskillsStart);
$('#header').prepend(formattedWelcome);
$('#header').prepend(formattedPic);
$('#header').prepend(formattedContact);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

