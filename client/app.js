var getresults = $("info").html();

console.log(getresults);

// Below is the side nav functions

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("myMenubar").style.width = "0";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("bag");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
    $(".sideboi").click(function(){
        $(".block1").fadeIn("slow");

    });
});

/* Set the width of the side navigation to 250px */
function openMe() {
    document.getElementById("myMenubar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeMenu() {
    document.getElementById("myMenubar").style.width = "0";
}