function generateCV() {
    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    // Insert values into the CV template
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-phone").textContent = phone;
    document.getElementById("output-education").textContent = education;
    document.getElementById("output-skills").textContent = skills;

    // Show the CV output
    document.getElementById("cv-output").style.display = "block";
}
