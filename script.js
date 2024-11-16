// Function to handle the form submission and generate the resume
document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const careerObjective = document.getElementById("careerObjective").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const yearOfCompletion = document.getElementById("yearOfCompletion").value;
    const grade = document.getElementById("grade").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const duration = document.getElementById("duration").value;
    const jobDescription = document.getElementById("jobDescription").value;
    const skills = document.getElementById("skills").value;
    const hobbies = document.getElementById("hobbies").value;
    const languages = document.getElementById("languages").value;

    // Create the resume output
    let resumeContent = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h4>Career Objective</h4>
        <p>${careerObjective}</p>

        <h4>Education</h4>
        <p><strong>${degree}</strong> from ${institution}, ${yearOfCompletion}</p>
        <p><strong>Grade/Percentage:</strong> ${grade}</p>

        <h4>Work Experience</h4>
        <p><strong>${jobTitle}</strong> at ${company} (${duration})</p>
        <p>${jobDescription}</p>

        <h4>Skills</h4>
        <ul>
            ${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>

        <h4>Additional Information</h4>
        ${hobbies ? `<p><strong>Hobbies:</strong> ${hobbies}</p>` : ""}
        ${languages ? `<p><strong>Languages:</strong> ${languages}</p>` : ""}
    `;

    // Display the generated resume
    document.getElementById("resumeContent").innerHTML = resumeContent;
    document.getElementById("resumeOutput").style.display = "block";
});

// Clear form function
function clearForm() {
    document.getElementById("resumeForm").reset();
    document.getElementById("resumeOutput").style.display = "none";
}
