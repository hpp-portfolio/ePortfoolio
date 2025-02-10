document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response").innerText = "Aitäh, " + name + "! Võtan sinuga peagi ühendust.";
        this.reset();
    } else {
        document.getElementById("response").innerText = "Palun täida kõik väljad.";
    }
});
