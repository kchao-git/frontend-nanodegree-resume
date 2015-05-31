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
	"jobs": [
		{
			"employer": "NIS America, Inc.",
			"position": "Web Developer",
			"years": "2015 - Present",
			"location": "Santa Ana, CA",
			"description": "Write code to support various website and web applications."
		},
		{
			"employer": "NIS America, Inc.",
			"position": "Online Store Coordinator",
			"years": "2011 - 2015",
			"location": "Santa Ana, CA",
			"description": "Administrate various web applications and write scripts to support business workflows."
		},
		{
			"employer": "Say Design",
			"position": "Flash/Actionscript Developer",
			"years": "2010 - 2011",
			"location": "Irvine, CA",
			"description": "Develop Flash-based games and applications for various clients."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample",
			"dates": "2015",
			"description": "Sample Description",
			"images": ['images/197x148.gif','images/197x148.gif']
		}
	]
};

//Education History Template
var education = {
	"schools": [
		{
			"name": "DeVry University",
			"degree": "BS",
			"years": "2006 - 2009",
			"location": "Long Beach, CA",
			"major": "Game and Simulation Programming"
		}
	]
};

//Create Project display function
projects.display = function () {
	for (var project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

projects.display();

//Add Name and Role
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

//Add Skills to Header
if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	var formattedSkills = '';
	bio.skills.forEach(function(skill) {
		formattedSkills += HTMLskills.replace('%data%', skill);
	});

	$('#skills').append(formattedSkills);
}

//Add Work Experience
displayWork();

//Add international button
$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);

function displayWork() {
	work.jobs.forEach(function(job) {
		$('#workExperience').append(HTMLworkStart);
		var formattedWork = HTMLworkEmployer.replace('%data%', job.employer) +
			HTMLworkTitle.replace('%data%', job.position) +
			HTMLworkDates.replace('%data%', job.years) +
			HTMLworkLocation.replace('%data%', job.location) +
			HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedWork);
	});
}

function inName(name) {
	var names = name.trim().split(' ');
	console.log(names);
	var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lastName = names[1].toUpperCase();

	return (firstName + ' ' + lastName);
}

/*
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
*/