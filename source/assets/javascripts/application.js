//= require vendor/_fastclick.min
//= require vendor/_picturefill.min
//= require vendor/_tessarray.min
//= require blocks/_menu

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// How does this work without parallax?
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

var tessarrayExample = new Tessarray("#container", ".box", {
  containerTransition: {
    duration: 500,
    timingFunction: "cubic-bezier(0.320, 1.385, 0.730, -0.470)",
    delay: 0
  }
});

const bindListenerToDocument = (event, elementClass, callback) => {
  if (Array.isArray(elementClass)) {
    document.addEventListener(event, (event) => {
      if (elementClass.some((element) => event.target.classList.contains(element))) {
        callback(event);
      }
    });
  } else {
    document.addEventListener(event, (event) => {
      if (event.target.classList.contains(elementClass)) {
        callback(event);
      }
    });
  }
}

const $ = (selector) => {
  if (selector.charAt(0) === "#") {
    return document.querySelector(selector);
  } else {
    return document.querySelectorAll(selector);
  }
}

bindListenerToDocument("click", "project-title", (event) => openProject(event));
document.addEventListener("click", event => {
  if ($(".project.is-active").length > 0) {
    if (!event.target.closest(".project-body")) {
      closeAllProjects();
      console.log("closeAllProjects");
    }
  }
})

function openProject(event) {
  console.log("openProject");
  closeAllProjects();
  var projectTitle = event.target;
  var project = projectTitle.closest(".project");
  var projectBackground = project.querySelector(".project-background");
  projectBackground.style.zIndex = "2";
  project.classList.add("is-active");
  project.classList.remove("shake-trigger");
  tessarrayExample.render();
  // open();
}

function closeAllProjects(event) {
  var openProjects = $(".project.is-active");
  Array.from(openProjects).forEach(project => {
    project.classList.remove("is-active");
    project.classList.add("shake-trigger");
    setTimeout(() => {
      var projectBackground = project.querySelector(".project-background");
      projectBackground.style.zIndex = "-1";
    }, 1000)
    // Array.from(project.querySelectorAll(".hide")).forEach(hideElement => {
    //   hideElement.addEventListener("webkitTransitionEnd", positionAbsolute);
    // });
  });
}

function positionAbsolute() {
  console.log("positionAbsolute");
  console.log(this);
  this.style.position = "absolute";
  this.removeEventListener("webkitTransitionEnd", positionAbsolute)
}

bindListenerToDocument("click", "job-title", (event) => openJob(event));
document.addEventListener("click", event => {
  if ($(".job.is-active").length > 0) {
    if (!event.target.closest(".job-body")) {
      closeAllJobs();
    }
  }
});

function openJob(event) {
  console.log("openJob");
  closeAllJobs();
  var jobTitle = event.target;
  var job = jobTitle.closest(".job");
  var jobBackground = job.querySelector(".job-background");
  jobBackground.style.zIndex = "2";
  job.classList.add("is-active");
  job.classList.remove("shake-trigger");
}
function closeAllJobs(event) {
  var openJobs = $(".job.is-active");
  Array.from(openJobs).forEach(job => {
    job.classList.remove("is-active");
    job.classList.add("shake-trigger");
    setTimeout(() => {
      var jobBackground = job.querySelector(".job-background");
      jobBackground.style.zIndex = "-1";
    }, 1000)
  });
}

// Letter Tessarray
// function open() {
//   Array.from($(".hide")).forEach(hideElement => {
//     hideElement.style.position = "relative";
//   });
// }

