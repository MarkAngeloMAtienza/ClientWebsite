document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header').classList.add('show-animation');
});
document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    document.querySelector('.overlay').classList.add('active'); // Expand the overlay
    setTimeout(function() {
      window.location.href = event.target.href; // Redirect to the home.html page after a delay
    }, 800); // Adjust the delay as needed to match the transition duration
  });
  
  function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }