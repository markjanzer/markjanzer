//= require vendor/_fastclick.min
//= require vendor/_tessarray.min

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// Tessarray Example

function getHeightAndSpacing() {
  var targetRowHeight, boxSpacing;
  var viewWidth = $("#container").clientWidth;
  if (viewWidth <= 640) {
    targetRowHeight = viewWidth * 0.40;
    boxSpacing = 8;
  } else if (viewWidth <= 768) {
    targetRowHeight = viewWidth * 0.30;
    boxSpacing = 12;
  } else {
    targetRowHeight = viewWidth * 0.23;
    boxSpacing = 14;
  }
  return {
    targetRowHeight: targetRowHeight,
    boxSpacing: boxSpacing
  };
};

var tessarrayExample = new Tessarray('#container', '.box', {
  containerTransition: {
    duration: 500,
    timingFunction: "cubic-bezier(0.320, 1.385, 0.730, -0.470)",
    delay: 0,
  },
  resize: false,
  flickr: getHeightAndSpacing()
});

var responsiveResize = function() {
  var heightAndSpacing = getHeightAndSpacing();
  if (heightAndSpacing.targetRowHeight !== tessarrayExample.options.flickr.targetRowHeight) {
    tessarrayExample.options.flickr.targetRowHeight = heightAndSpacing.targetRowHeight;
    if (heightAndSpacing.boxSpacing !== tessarrayExample.options.flickr.boxSpacing) {
      tessarrayExample.options.flickr.boxSpacing = heightAndSpacing.boxSpacing;
    }
    tessarrayExample.render();
  }
};

window.addEventListener("resize", tessarrayExample.debounce(responsiveResize, 100));

// Util
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

function $(selector) {
  if (selector.charAt(0) === "#") {
    return document.querySelector(selector);
  } else {
    return document.querySelectorAll(selector);
  }
}

// Project opening and closing
bindListenerToDocument("click", "project-title", (event) => openProject(event));
document.addEventListener("click", event => {
  if ($(".project.is-active").length > 0) {
    if (!event.target.closest(".project-body")) {
      closeAllProjects();
    }
  }
});
bindListenerToDocument("click", "close-project", (event) => closeAllProjects() );

function openProject(event) {
  // Don't proceed if project is already open
  var projectDiv = event.target.closest(".project");
  if (projectDiv.classList.contains("is-active")) return;

  console.log("openProject");
  closeAllProjects();
  var projectTitle = event.target;
  var project = projectTitle.closest(".project");
  var projectBackground = project.querySelector(".project-background");
  projectBackground.style.zIndex = "2";
  project.classList.add("is-active");
  project.classList.remove("shake-trigger");

  if (projectTitle.closest(".project").classList.contains("tessarray")) {
    responsiveResize();
  }
}

function closeAllProjects(event) {
  // console.log("closeAllProjects");
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
bindListenerToDocument("click", "close-job", (event) => closeAllJobs() );

function openJob(event) {
  // Don't proceed if job is already open
  var jobDiv = event.target.closest(".job");
  if (jobDiv.classList.contains("is-active")) return;

  closeAllJobs();
  var jobTitle = event.target;
  var job = jobTitle.closest(".job");
  var jobBackground = job.querySelector(".job-background");
  jobBackground.style.zIndex = "2";
  job.classList.add("is-active");
  job.classList.remove("shake-trigger");
}
function closeAllJobs() {
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