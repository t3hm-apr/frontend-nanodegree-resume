/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var formattedName = HTMLheaderName.replace("%data%", "Alex P.");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Architect");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var name = "audacity";*/


/*var skills = ["awesomeness", "architecture", "Android", "Microservices"];

// $("#main").append(skills[0]);


var bio = {
    "name": "Alex P.",
    "role": "Architect",
    "contactInfo": "dev@t3hm.de",
    "pictureUrl": "http://link.to/my/picture.png",
    "welcomeMessage": "Whoop whoop!",
    "skills": skills
};



var formattedContactInfo = HTMLemail.replace("%data%", bio.contactInfo);
$("#main").prepend(formattedContactInfo);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#main").prepend(formattedRole)

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#main").prepend(formattedName);*/

/*
var work = {};
work.employer = "david";
work.yearsWorked = 4;

var education = {};
education["gym"] = "Gymnasium Großburgwedel";
education.years = 7;

$("#main").prepend(work.employer);
$("#main").prepend(education["gym"]);*/

var education = {
    "schools" : [{
        "name": "Grundschule Wettmar",
        "years": 4,
        "funFactor": 7
    }, {
        "name": "Orientierungsstufe Großburgwedel",
        "years": 2,
        "funFactor": 9
    }, {
        "name": "Gymnasium Großburgwedel",
        "years": 7,
        "funFactor": 8
    }]
};

var work = {
    "jobs":[{
        "employer": "DAVID Software",
        "location": "Braunschweig",
        "yearsWorked": 4,
        "role": "Software Architect/Engineer",
        "datesWorked": "08/2012 - today",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }, {
        "employer": "AX Solutions",
        "location": "Braunschweig",
        "yearsWorked": 1,
        "role": "Senior Developer",
        "datesWorked": "01/2012 - 08/2012",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
    }, {
        "employer": "MUGS Inf.ges.mbH",
        "location": "Braunschweig",
        "yearsWorked": 7,
        "role": "CTO",
        "datesWorked": "04/2005 – 01/2012",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
    }, {
        "employer": "iPRESsolutions",
        "location": "Braunschweig",
        "yearsWorked": 2,
        "role": "Developer",
        "datesWorked": "06/2004 – 04/2005",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
    }]
};

var projects = {
    "projects": [{
        "title": "Logan",
        "description": "some logistics app with server"
    }, {
        "title": "MOD",
        "description": "VW CarNet"
    }]
};

var bio = {
    "name": "Alex P.",
    "skills": ["Software Architecture", "Android", "Microservices", "JavaEE"],
    "age": 34,
    "imageUrl": "images/t3hm.jpeg",
    "contacts": {
        "email": "alexander.preugschat@david-software.de",
        "phone": "983748998278934",
        "mobile": "01728989977889"
    },
    "welcomeMessage": "Whoop whoop!"
};

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);

        var formattedTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].datesWorked));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

function addInternalizeButton() {
    $("#main").append(internationalizeButton);
}

function locationizer(work_obj) {

    var result = [];

    for(var jobIdx in work_obj.jobs) {
        var j = work_obj.jobs[jobIdx];

        result.push(j.location);
    }

    return result;
}

function displayHeaderStuff() {
    $("#header").append(HTMLbioPic.replace("%data%", bio.imageUrl));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills && bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }

    }
}

function inName(name) {
    var arr = name.trim().split(" ", 2);

    arr[1] = arr[1].toUpperCase();
    arr[0] = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1).toLowerCase();

    return arr.join(" ");
}

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
})


displayHeaderStuff();
displayWork();
addInternalizeButton();





