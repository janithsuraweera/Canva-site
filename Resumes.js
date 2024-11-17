// Generate CV Function
function generateCV() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    // Fill output fields
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-phone").textContent = phone;
    document.getElementById("output-education").textContent = education;
    document.getElementById("output-skills").textContent = skills;

    // Show the CV output
    document.getElementById("cv-output").style.display = "block";
}

// Download CV Function
function downloadCV() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    // Create the CV content
    const cvContent = `
Curriculum Vitae

Name: ${name}
Email: ${email}
Phone: ${phone}

Education:
${education}

Skills:
${skills}
`;

    //  trigger the download
    const blob = new Blob([cvContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}-CV.txt`;
    link.click();
}
