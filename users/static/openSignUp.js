document.addEventListener('DOMContentLoaded', function () {
    var openSignInBtn = document.getElementById("open-sign-in");
    var modal1 = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");

    openSignInBtn.addEventListener('click', function (event) {
        event.preventDefault();
        modal1.style.display = "none";
        modal2.style.display = "block";
    });
});
