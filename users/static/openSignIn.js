document.addEventListener('DOMContentLoaded', function () {
    var openSignInBtn = document.getElementById("open-sign-up");
    var modal1 = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");

    openSignInBtn.addEventListener('click', function (event) {
        console.log("sign up btn clicked")
        event.preventDefault();
        modal2.style.display = "none";
        modal1.style.display = "block";
    });
});
