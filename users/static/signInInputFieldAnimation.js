document.addEventListener('DOMContentLoaded', function () {
    // Get the input element
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var username2 = document.getElementById("username2");
    var password2 = document.getElementById("password2");

    // Function to update placeholder visibility
    function updatePlaceholderVisibility() {
    if (username.value || username === document.activeElement) {
        username.classList.add("focused");
    } else {
        username.classList.remove("focused");
    }
}

    // Add event listeners for focus, blur, and input events
    username.addEventListener("focus", updatePlaceholderVisibility);
    username.addEventListener("blur", updatePlaceholderVisibility);
    username.addEventListener("input", updatePlaceholderVisibility);

    function updatePlaceholderVisibility2() {
        if (password.value || password === document.activeElement) {
            password.classList.add("focused");
        } else {
            password.classList.remove("focused");
        }
    }
    
    // Add event listeners for focus, blur, and input events
    password.addEventListener("focus", updatePlaceholderVisibility2);
    password.addEventListener("blur", updatePlaceholderVisibility2);
    password.addEventListener("input", updatePlaceholderVisibility2);

    function updatePlaceholderVisibilityEmail() {
        if (email.value || email === document.activeElement) {
            email.classList.add("focused");
        } else {
            email.classList.remove("focused");
        }
    }
    
    // Add event listeners for focus, blur, and input events
    email.addEventListener("focus", updatePlaceholderVisibilityEmail);
    email.addEventListener("blur", updatePlaceholderVisibilityEmail);
    email.addEventListener("input", updatePlaceholderVisibilityEmail);

    function updatePlaceholderVisibilityUsername2() {
        if (username2.value || username2 === document.activeElement) {
            username2.classList.add("focused");
        } else {
            username2.classList.remove("focused");
        }
    }
    
    // Add event listeners for focus, blur, and input events
    username2.addEventListener("focus", updatePlaceholderVisibilityUsername2);
    username2.addEventListener("blur", updatePlaceholderVisibilityUsername2);
    username2.addEventListener("input", updatePlaceholderVisibilityUsername2);

    function updatePlaceholderVisibilityPassword2() {
        if (password2.value || password2 === document.activeElement) {
            password2.classList.add("focused");
        } else {
            password2.classList.remove("focused");
        }
    }
    
    // Add event listeners for focus, blur, and input events
    password2.addEventListener("focus", updatePlaceholderVisibilityPassword2);
    password2.addEventListener("blur", updatePlaceholderVisibilityPassword2);
    password2.addEventListener("input", updatePlaceholderVisibilityPassword2);
});