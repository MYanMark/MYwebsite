// Flag to track if the automatic jump has occurred
var jumped = false;

// Auto-jump to main page after 0.5 seconds
setTimeout(function () {
    jumped = true;
    location.replace("myhome.html");
}, 500);

// If no jump after 4 seconds, show manual verification button
setTimeout(function () {
    if (!jumped) {
        document.getElementById("verify").classList.remove("hidden");
    }
}, 4000);
