document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the page from reloading/posting

        const email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});