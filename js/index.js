$(".wrapper .sidebar ul li").on("click", function () {
  $(".li").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close");
function openForm() {
  document.getElementById("myModal").style.display = "block";
}
span.onclick = function() {
  console.log("55")
  document.getElementById("myModal").style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




