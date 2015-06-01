//Bio Info
var bio = {
	"name": "Kenny Chao",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(714) 555-5555",
		"email": "kchao394@gmail.com",
		"github": "kchao-git",
		"twitter": "@sometwitter",
		"location": "Santa Ana, CA"
	},
	"welcomeMessage": "Hello there!",
	"skills": [
		"HTML",
		"CSS",
		"Javascript"
	],
	"biopic": "images/fry.jpg"
};

//Define bio object's display function
bio.display = function() {
	//Format and Add all bio info
	//Role
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);

	//Name
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);

	//Contact Info - Mobile
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);
	$('#footerContacts').append(formattedMobile);

	//Email
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	$('#footerContacts').append(formattedEmail);

	//GitHub
	var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGitHub);
	$('#footerContacts').append(formattedGitHub);

	//Twitter
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedTwitter);

	//Location
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);
	$('#footerContacts').append(formattedLocation);

	//Bio Pic
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	$('#header').append(formattedBioPic);

	//Welcome Message
	var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelcome);

	//Skills
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		var formattedSkills = '';
		bio.skills.forEach(function(skill) {
			formattedSkills += HTMLskills.replace('%data%', skill);
		});

		$('#skills').append(formattedSkills);
	}
};

//Work Experience Info
var work = {
	"jobs": [
		{
			"employer": "NIS America, Inc.",
			"title": "Web Developer",
			"location": "Santa Ana, CA",
			"dates": "2015 - Present",
			"description": "Write code to support various website and web applications."
		},
		{
			"employer": "NIS America, Inc.",
			"title": "Online Store Coordinator",
			"location": "Santa Ana, CA",
			"dates": "2011 - 2015",
			"description": "Administrate various web applications and write scripts to support business workflows."
		},
		{
			"employer": "Say Design",
			"title": "Flash/Actionscript Developer",
			"location": "Irvine, CA",
			"dates": "2010 - 2011",
			"description": "Develop Flash-based games and applications for various clients."
		}
	]
};

//Define work object's display function
work.display = function() {
	work.jobs.forEach(function(job) {
		//Add the starter work HTML code
		$('#workExperience').append(HTMLworkStart);

		//Format and add work info
		//Employer and Title
		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		$('.work-entry:last').append(formattedEmployer + formattedTitle);

		//Dates
		var formattedDates =	HTMLworkDates.replace('%data%', job.dates);
		$('.work-entry:last').append(formattedDates);

		//Location
		var formattedLocation =	HTMLworkLocation.replace('%data%', job.location);
		$('.work-entry:last').append(formattedLocation);

		//Description
		var formattedDescription =HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedDescription);
	});
};

//Project Info
var projects = {
	"projects": [
		{
			"title": "Sample",
			"dates": "2015",
			"description": "Sample Description",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		},
		{
			"title": "Sample",
			"dates": "2015",
			"description": "Sample Description",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}
	]
};

//Define project object's display function
projects.display = function () {
	projects.projects.forEach(function(project) {
		$('#projects').append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
		$('.project-entry:last').append(formattedDescription);

		if (project.images.length > 0) {
			project.images.forEach(function(image) {
				var formattedImage = HTMLprojectImage.replace('%data%', image);
				$('.project-entry:last').append(formattedImage);
			});
		}
	});
};

//Education History
var education = {
	"schools": [
		{
			"name": "DeVry University",
			"location": "Long Beach, CA",
			"degree": "BS",
			"majors": [
				"Game and Simulation Programming"
			],
			"dates": 2009,
			"url": "http://www.devry.edu"
		},
		{
			"name": "Some other school",
			"location": "Somewhere, CA",
			"degree": "BS",
			"majors": [
				"CS",
				"Some other major"
			],
			"dates": 2015,
			"url": "http://www.google.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
		}
	]
};

//Define education object's display function
education.display = function() {
	
	//Add each school info
	education.schools.forEach(function(school) {
		//Starter HTML code for schools
		$('#education').append(HTMLschoolStart);

		//Add school info
		//School Name and Degree
		var formattedName = HTMLschoolName.replace('%data%', school.name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
		$('.education-entry:last').append(formattedName + formattedDegree);

		//School Url
		$('.education-entry:last').find('a').attr('href', school.url);
		
		//Graduation Date
		var formattedDate = HTMLschoolDates.replace('%data%', school.dates);
		$('.education-entry:last').append(formattedDate);

		//Location
		var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
		$('.education-entry:last').append(formattedLocation);

		//Major
		var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
		$('.education-entry:last').append(formattedMajor);
	});
	
	//Add online course header if there are online courses to add
	if(education.onlineCourses.length > 0) {
		$('#education').append(HTMLonlineClasses);
	}

	//Add each online course info
	education.onlineCourses.forEach(function(course) {
		//Starter HTML code for online courses
		$('#education').append(HTMLschoolStart);

		//Add online course info
		//Course Title and School's Name
		var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
		$('.education-entry:last').append(formattedTitle + formattedSchool);

		//Date taken
		var formattedDate = HTMLonlineDates.replace('%data%', course.date);
		$('.education-entry:last').append(formattedDate);

		//Url
		var formattedUrl = HTMLonlineURL.replace('%data%', course.url);
		$('.education-entry:last').append(formattedUrl);

		//Add url to Title-Name and Url links
		$('.education-entry:last').find('a').attr('href', course.url);
	});
};

//Display all info
bio.display();
work.display();
projects.display();
education.display();

//Add Google Map
$('#mapDiv').append(googleMap);