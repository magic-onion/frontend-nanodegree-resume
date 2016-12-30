 var bio = {
     "name": "Alex Truong",
     "role": "Web Developer",
     "contacts": {
         "mobile": "612-284-5194",
         "email": "alexander.m.truong@gmail.com",
         "location": "Saigon, Vietnam",
         "github" : "http://www.github.com/magic-onion"
     },
     "welcomeMessage": "Thanks for viewing my Resume",
     "skills": [
         "HTML", "CSS", "JS", "Jquery"
     ],
     "biopic": "images/alex-portrait-small.jpg"
 };

 var education = {
     "schools": [{
         "name": "University of Wisconsin - Madison",
         "location": "Madison, WI",
         "degree": "BS",
         "majors": ["Economics", "History"],
         "dates": "2011",
         "url": "http://www.wisc.edu"
     }],
     "onlineCourses": [{
         "title": "Front End Web Developer Nanodegree",
         "school": "Udacity",
         "dates": "2016",
         "url": "http://www.udacity.com",
     }]
 };

 var work = {
     "jobs": [{
         "employer": "405 Media Group",
         "location": "Minneapolis, MN",
         "title": "Project Manager",
         "dates": "May 2015 - Present",
         "description": "A BETTER DESCRIPTION HERE"
     }, {
         "employer": "Printlab",
         "location": "Chicago, IL",
         "title": "Production Manager",
         "dates": "Aug 2014 - May 2015",
         "description": "A BETTER DESCRIPTION HERE"
     }]
 };

 var projects = {
     "projects": [{
         "title": "Sample Project 1",
         "dates": "2016",
         "description": "a description",
         "images" : [
            "images/port1.png",
            "images/port2.png"
            ]
         }
     ]
 };


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedjobLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;


        $(".work-entry:last").append(formattedEmployer);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedjobLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    }); 
};
work.display();

education.display = function() {
    education.schools.forEach(function(schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", schools.name).replace("#", schools.url);
        $(".education-entry:last").append(formattedSchool);
        var formattedDegree = HTMLschoolDegree.replace("%data%", schools.degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", schools.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", schools.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedDates = HTMLschoolDates.replace("%data%", schools.dates);
        $(".education-entry:last").append(formattedDates);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(online) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
        $(".education-entry:last").append(formattedonlineSchool);
        var formattedonlineClass = HTMLonlineTitle.replace("%data%", online.title);
        $(".education-entry:last").append(formattedonlineClass);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", online.url);
        $(".education-entry:last").append(formattedURL);
    });
};

education.display();

projects.display = function () {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);  

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedProjectImage);
        });     
    });
};

projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);