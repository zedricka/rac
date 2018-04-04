function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Testing adding to cart button with test button
$(".cart").append("<button class='btn1'>Test</button>");
//.click() so when button is clicked, it adds an HTML element to the front end
$("button").click(function () {
//meant to append requested HTML element to cart
  $("#cartitem").append("<div>Test</div>").
});
