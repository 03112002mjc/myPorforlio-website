// script.js

// Function to handle tab switching
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Function to open side menu
function openmenu() {
    var sidemen = document.getElementById("sidemenu");
    sidemen.style.right = "0";
}

// Function to close side menu
function closemenu() {
    var sidemen = document.getElementById("sidemenu");
    sidemen.style.right = "-200px";
}

// Function to submit form data to Google Sheets
document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIxjtD0AwgVeuRceATAgmFnRezvw_a2cHx5HfZkR4FCZWlXcpjC8wz9mby63IV65KQjg/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message successfully sent!";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
});
