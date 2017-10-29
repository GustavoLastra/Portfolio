//Googlemap's apikey AIzaSyDhWWNW_45q9qMr8Ft8c4SmJVEB66pLCyQ
//@autor: Gustavo Antonio Lastra Colorado
//@date : 06.03.2017
// Objects with the display function
/*
1. bio
2. work
3. project
4. education
5. language
*/
var bio = {
  "name" : "Gustavo Lastra",
  "role" : "Frontend Developer",
  "contacts" : {
    "mobile" : "+49 1742 813 345",
    "email" : "Gustavo.LastraC@gmail.com",
    "gitlab" : "@GustavoLastra",
    "location" : "Ilmenau",
    "github" : "GustavoLastra"
  },
  "footer" : [
    {
      "link" : "mailto:Gustavo.Lastrac@gmail.com?Subject=Hello%20again",
      "image" : "img/google.png"
    },
    {
      "link" : "https://www.linkedin.com/in/gustavolastra?trk=nav_responsive_tab_profile_pic",
      "image" : "img/Linkedin.png"
    },
    {
      "link" : "https://github.com/GustavoLastra",
      "image" : "img/Github.png"
    },
    {
      "link" : "https://sse-lehre.theoinf.tu-ilmenau.de/dashboard/projects",
      "image" : "img/gitlab.png"
    }
  ],
  "biopic" : "./img/Gustavo.jpg",
  "welcomeMessage" : "Welcome to my resume",
  "skills" : ["Languages: HTML5, CSS, Javascript, Phyton, Java, PHP","Libraries/Frameworks: jQuery, Bootstrap, Grunt, React, Django, Knockout, Jasmine", "Others: Git/Github, AJAX, JSON, Restful APIs"],

  display : function() {
    var fHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var fHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var fBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var fMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fGitlab = HTMLgitlab.replace("%data%", bio.contacts.gitlab);
    var fLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var fGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fSkillOne = HTMLskills.replace("%data%", bio.skills[0]);
    var fSkillTwo = HTMLskills.replace("%data%", bio.skills[1]);
    var fSkillThree = HTMLskills.replace("%data%", bio.skills[2]);
    var fContacts = [fMobile,fEmail,fGitlab,fLocation,fGithub];
    var fSkills = [fSkillOne,fSkillTwo,fSkillThree];


    $("#headerSection").prepend(fHeaderRole);
    $("#headerSection").prepend(fHeaderName);
    $("#headerSection").append(fBioPic);
    $("#headerSection").append(fWelcomeMsg);
    $("#headerSection").append(HTMLskillsStart);

    fContacts.forEach(function(contact) {
      $("#topContacts").append(contact);
    });

    fSkills.forEach(function(skill) {
      $("#skills-h3").append(skill);
    });

    var indent = "<div class='col-xs-1'></div>";
    for (var i=0; i<4; i++) {
      $("#Connect").append(indent);
    }

    bio.footer.forEach(function(contact) {
      var fFooterLink = HTMLfooterLink.replace("#", contact.link);
      var fFooterImage = HTMLfooterImage.replace("#", contact.image);
      var div = "<div class='col-xs-1'>";
      var enddiv = "</div>";
      var fFooter = div+ fFooterLink + fFooterImage + enddiv;
      $("#Connect").append(fFooter);
    });
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "BE EXCELLENT",
      "link" : "http://www.bee.io",
      "title" : "Junior Front-End Developer E-Commerce",
      "dates" : "20 March - Actual",
      "location" : "Jena, Germany",
      "description" : "Application, development and implementation, as well as technical reviews in post-launch phase for our custom software solutions based on the Salesforce Commerce Cloud platform.",
      //"workDescriptionTwo" : "Proactive monitoring and improvement of existing solutions"
    },
    {
      "employer" : "Criser S.A de C.V.",
      "link" : "http://www.criser.com.mx/index.php?lang=es",
      "title" : "Technical support of information technology",
      "dates" : "May 2014 - July 2014",
      "location" : "Monterrey, Mexico",
      "description" : "Planned and implemented the methodology “Lean Manufacturing” used in industrial processes.",
      //"descriptionTwo" : "Improved the efficiency of process execution in two departments.",
    },
    {
      "employer" : "Criser S.A de C.V.",
      "link" : "http://www.criser.com.mx/index.php?lang=es",
      "title" : "Technical support of information technology",
      "dates" : "June 2013 - August 2013",
      "location" : "Monterrey, Mexico",
      "description" : "Gave attention and technical support to the employee of the company.",
      //"workDescriptionTwo" : "Managed, installed and formatted the operative system and the working tools (Microsoft Office, Windows, Ubuntu).",
    }
  ],

  display : function (){

    work.jobs.forEach(function(work) {
      var fEmplyerAndLink = HTMLworkEmployer.replace("%data%", work.employer).replace("#", work.link);
      var fWorkTitle = HTMLworkTitle.replace("%data%", work.title );
      var fWorkDates = HTMLworkDates.replace("%data%",work.dates);
      var fWorkLocation = HTMLworkLocation.replace("%data%",work.location);
      var fWorkDescriptionOne = HTMLworkDescription.replace("%data%",work.description);
      //var fWorkDescriptionTwo = HTMLworkDescription.replace("%data%",work.workDescriptionTwo);
      var fWorks = [fEmplyerAndLink + fWorkTitle,fWorkDates,fWorkLocation,fWorkDescriptionOne, "<br>"];
      //var fWorks = [fEmplyerAndLink + fWorkTitle,fWorkDates,fWorkLocation,fWorkDescriptionOne, fWorkDescriptionTwo, "<br>"];

      $("#workExperience").append(fWorks);
    });

  }
};

var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "url" : "https://gustavolastra.github.io/Portfolio/",
      "dates" : "January 2017",
      "description" : "Developed a fully responsive portfolio. It works on mobile, tablet, and desktop browsers.",
      "tools" : "Tools: HTML, CSS, Bootstrap, Media Queries."

    },
    {
      "title" : "Bugs (Arcade-Game)",
      "url" : "https://gustavolastra.github.io/Bugs/",
      "dates" : "March 2017",
      "description" : "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
      "tools" : "Tools: HTML, Javascript, Canvas, JQuery."

    },
    {
      "title" : "Online Resume",
      "url" : "https://gustavolastra.github.io/Resume/",
      "dates" : "March 2017",
      "description" : "Developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information.",
      "tools" : "Tools: HTML, CSS, Bootstrap, media queries, Javascript, JQuery, Googlemaps API."
    },
    {
      "title" : "Paintvocado",
      "url" : "https://gustavolastra.github.io/Paintvocado/",
      "dates" : "April 2017",
      "description" : "Developed a „Paint“ application.",
      "tools" : "Tools: HTML, CSS, Bootstrap, media queries, Javascript, Canvas, JQuery"
    },
    {
      "title" : "Website-Optimization",
      "url" : "https://github.com/GustavoLastra/Website-Optimization",
      "dates" : "May 2017",
      "description" : "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
      "tools" : "Tools: PageSpeed Tools, Chrome Developer Tools."
    },
    {
      "title" : "Map application of Hamburg",
      "url" : "https://gustavolastra.github.io/Neighborhood-Map/",
      "dates" : "September 2017",
      "description" : "A single-page web application, that displays a Google Map of Hamburg and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the Wikipedia APIs.",
      "tools" : "Tools: Google Apis, Knockout.js (MVVM)."
    },
    {
      "title" : "Unit Test-Feedreader",
      "url" : "https://github.com/GustavoLastra/UnitTest-Feedreader",
      "dates" : "September 2017",
      "description" : "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
      "tools" : "Tools: Jasmine, JavaScript testing frameworks."
    }
  ],
  display : function(){

    projects.projects.forEach(function(project) {
      var fProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url );
      var fProjectDates = HTMLprojectDates.replace("%data%",project.dates );
      var fProjectDescription = HTMLprojectDescription.replace("%data%",project.description );
      var fProjectTools = HTMLprojectTools.replace("%data%",project.tools );

      var fProjects = '<div class="col-xs-8">' + fProjectTitle + fProjectDates + fProjectDescription + fProjectTools + '</div>';
      $("#entry").append(fProjects);
    });
  }


};

var education = {
  "schools" : [
    {
      "name" : "Udacity",
      "link" : "https://www.udacity.com",
      "degree" : "Nanodegree-Program, Front-End Web Developement",
      "majors": [
        "Front-End"
      ],
      "dates" : "October 2016 - September 2018",
      "location" : "USA"
    },
    {
      "name" : "Technische Universität Ilmenau",
      "link" : "https://www.tu-ilmenau.de",
      "degree" : "Master's Degree, Media Tecnology",
      "majors": [
        "Software engineering"
      ],
      "dates" : "November 2016 - November 2017",
      "location" : "Germany"
    },
    {
      "name" : "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      "link" : "https://tec.mx",
      "degree" : "Bachelor's Degree, Electronic and Computer Engineering",
      "majors": [
        "Software engineering"
      ],
      "dates" : "August 2010 - July 2015",
      "location" : "Mexico",
    }
  ],
  "onlineCourses" :[
    {
      "title" : "HTML, CSS and JavaScript",
      "link" : "https://www.coursera.org",
      "school" : "Coursera",
      "dates" : "September 2016",
      "license" : "License",
      "url" : "https://www.coursera.org/account/accomplishments/verify/VFNFP827ELM3"
    },
    {
      "title" : "Java for Android",
      "link" : "https://www.coursera.org",
      "school" : "Coursera",
      "dates" : "Juny 2016",
      "license" : "License",
      "url" : "https://www.coursera.org/account/accomplishments/verify/WEEERRKH9F85"
    },
    {
      "title" : "Android App Components: Intents, Activities, and Broadcast Receivers",
      "link" :  "https://www.coursera.org",
      "school" : "Coursera",
      "dates" : "October 2016",
      "license" : "License",
      "url" : "https://www.coursera.org/account/accomplishments/verify/CPTGP2UCH9W6"
    }
  ],
  display : function(){

    education.schools.forEach(function(school) {
      var fSchoolNameLink = HTMLschoolName.replace("%data%",school.name).replace("#",education.link);
      var fSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree );
      var fSchoolMajor = HTMLschoolMajor.replace("%data%",school.majors[0]);
      var fSchoolDates = HTMLschoolDates.replace("%data%",school.dates );
      var fSchoolLocation = HTMLschoolLocation.replace("%data%",school.location );
      var fSchools = fSchoolNameLink + fSchoolDegree + fSchoolMajor + fSchoolDates + fSchoolLocation;
      //$("#education").append(HTMLschoolStart);
      //$(".education-entry").append(fSchools);
      $("#education").append(fSchools);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(online) {
      var fOnlineTitleLink = HTMLonlineTitle.replace("%data%", online.title ).replace("#", online.link);
      var fOnlineSchool = HTMLonlineSchool.replace("%data%", online.school );
      var fOnlineDates = HTMLonlineDates.replace("%data%", online.dates );
      var fOnlineURL = HTMLonlineURL.replace("%data%", online.license).replace("#", online.url);
      var fOnlineSchools = fOnlineTitleLink + fOnlineSchool + fOnlineDates + fOnlineURL;
      //$("#education").append(HTMLschoolStart);
      //$(".education-entry").append(fOnlineSchools);
      $("#education").append(fOnlineSchools);
    });
  }
};

var language = {
  "languages" : [
    {
      "language" : "English",
      "certification" : "Toefle IBT",
      "level" : "Full professional proficiency (C1)",
      "date" : "June 2015"
    },
    {
      "language" : "German",
      "certification" : "TestDaf",
      "level" : "Full professional proficiency (C1)",
      "date" : "August 2016"
    },
    {
      "language" : "Spanish",
      "certification" : "",
      "level" : "Native proficiency",
      "date" : ""
    }
  ],

  display : function (){

    language.languages.forEach(function(language) {
      var fLanguage = HTMLlaguage.replace("%data%", language.language);
      var fLanguageCertification = HTMLlanguageCertification.replace("%data%", language.certification);
      var fLanguageLevel = HTMLlanguageLevel.replace("%data%", language.level);
      var fLanguageDate = HTMLlanguageDate.replace("%data%", language.date);
      var fLanguages = fLanguage + fLanguageCertification + fLanguageLevel + fLanguageDate + "<br>";
      $("#language").append(fLanguages);
    });
  }
}

//Call to Display functions from objects
bio.display();
work.display();
projects.display();
language.display();
education.display();

// append() to #mapDiv
 $("#mapDiv").append(googleMap);
