// security.js - Prevents direct access to internal pages
(function () {
    const ref = document.referrer;

    // Allow access only if coming from same origin or internal navigation
    if (!ref || !ref.includes(location.hostname)) {
        console.warn("Blocked direct access. Redirecting to homepage.");
        window.location.href = "myhome.html"; 
    }
})();
