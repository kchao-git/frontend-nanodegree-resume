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

//Work Experience Template
var work = {
	position: 'Job Position',
	employer: 'Company Name',
	years: '2015',
	city: 'City Name'
};

//Education History Template
var education = {
	name: 'School Name',
	years: '2015',
	city: 'City Name'
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

//Work Experience
work.position = 'Web Developer';
var formattedWork = HTMLworkStart +
	HTMLworkEmployer +
	HTMLworkTitle.replace('%data%', work.position) +
	HTMLworkDates +
	HTMLworkLocation +
	HTMLworkDescription;

//Education
education['name'] = 'DeVry University';
var formattedEducation = HTMLschoolStart +
	HTMLschoolName.replace('%data%', education['name']) +
	HTMLschoolDegree +
	HTMLschoolDates +
	HTMLschoolLocation +
	HTMLschoolMajor;

$('#header').prepend(formattedSkills);
$('#header').prepend(HTMLskillsStart);
$('#header').prepend(formattedWelcome);
$('#header').prepend(formattedPic);
$('#header').prepend(formattedContact);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

$('#workExperience').append(formattedWork);
$('#education').append(formattedEducation);