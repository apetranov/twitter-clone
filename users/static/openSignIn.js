document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById("open-sign-in");

    var modal1 = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    

    popup.onclick = function () {
        console.log("clicked");
        modal1.style.display = "none";
        modal2.style.display = "block";
    }
});