 var bio = {
     "name": "Alex Truong",
     "role": "Web Developer",
     "contacts": {
         "mobile": "612-284-5194",
         "email": "alexander.m.truong@gmail.com",
         "github": "magic-onion",
         "location": "Saigon, Vietnam"
     },
     "welcomeMessage": "Thanks for viewing my Resume",
     "skills": [
         "HTML", "CSS", "JS", "Jquery"
     ],
     "biopic": "images/animage.jpg"
 };

 var education = {
     "schools": [{
         "name": "University of Wisconsin - Madison",
         "city": "Madison, WI",
         "degree": "BS",
         "majors": "Economics, History",
         "dates": 2011,
         "url": "http://www.wisc.edu"
     }],
     "onlineCourses": [{
         "title": "Front End Web Developer Nanodegree",
         "school": "Udacity",
         "dates": 2016,
         "url": "http://www.udacity.com",
     }]
 };

 var work = {
     "jobs": [{
         "employer": "405 Media Group",
         "title": "Project Manager",
         "dates": "May 2015 - Present",
         "description": "A BETTER DESCRIPTION HERE"
     }, {
         "employer": "Printlab",
         "title": "Production Manager",
         "dates": "Aug 2014 - May 2015",
         "description": "A BETTER DESCRIPTION HERE"
     }]
 };

 var projects = {
     "projects": [{
         "title": "Sample Project 1",
         "dates": "2016",
         "description": "a description"
     }]
 };
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("header").append(formattedEmail);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("header").append(formattedLocation);


 if (bio.skills.length > 0) {

     $("#header").append(HTMLskillsStart);

     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
     $("#skills").append(formattedSkill);
 }

 function displayWork() {
     for (job in work.jobs) {
         $("#workExperience").append(HTMLworkStart);
         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;

         $(".work-entry:last").append(formattedEmployer);
         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         $(".work-entry:last").append(formattedDates);

         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);
     }
 }
 displayWork();

 function inName(name) {
 	name = name.trim().split(" ");
 	console.log(name);
 	name[1] = name[1].toUpperCase();
 	name[0] = name[0].slice(0,1).toUpperCase() +
 	name[0].slice(1).toLowerCase();

 	return name[0] +" "+name[1];
 }

 $('#main').append(internationalizeButton);

 projects.display = function () {
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 		$(".project-entry:last").append(formattedTitle);

 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 		$(".project-entry:last").append(formattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 		$(".project-entry:last").append(formattedDescription);

 		if (projects.projects[project].images.length > 0) {
 			for (image in projects.projects[project].images) {
 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 				$(".project-entry:last").append(formattedImage);
 			}
 		}
 	}
 }
$("mapDiv").append(googleMap);