// Switch tabs on the main page
function switchTab(evt, Name, Menu) {
  var i, x;

  // Get all class "tab" tags
  x = document.getElementsByClassName("tab");

  // Change all display styles to "none" to hide them.
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  // Get all side menus
  x = document.getElementsByClassName("sidemenu");

  // Change all display styles to "none" to hide them.
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  // Display current tab content.
  document.getElementById(Name).style.display = "block";
  document.getElementById(Menu).style.display = "block";
}

// Switch the pages under schoolwork tabs
function switchCourse(page, evt, Course) {
  var i, x;

  // Get all class "course" tags
  x = document.getElementsByClassName(page);

  // Change all display styles to "none" to hide them.
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  // Display current tab content.
  document.getElementById(Course).style.display = "block";
}
