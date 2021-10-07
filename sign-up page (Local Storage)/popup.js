// popup  page user details

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    // modal.style.display = "none";
    window.location.href = "/login.html"
  }
function getDetails(){
    let formData = JSON.parse(localStorage.getItem('formData'));
    var toPrintData = document.getElementsByClassName("user-input");
    toPrintData[0].innerHTML = formData.firstName +" " + formData.lastName ;
    toPrintData[1].innerHTML = formData.email;
    toPrintData[2].innerHTML = formData.password;
}
// popup page ends here