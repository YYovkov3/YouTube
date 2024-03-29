document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menuIcon");
    menuIcon.addEventListener("click", function() {
      var rightElements = document.querySelectorAll(".right");
  
      rightElements.forEach(function(element) {
        var currentDisplayStyle = window.getComputedStyle(element).display;
        if (currentDisplayStyle === "none") {
          element.style.display = "block"; 
        } else {
          element.style.display = "none";
        }
      });
    });
  });