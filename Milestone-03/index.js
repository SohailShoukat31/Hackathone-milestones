var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("result-display");
// Handle form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    // Generate Dynamic Resume content dynamically
    var resumeHtml = "\n    <h2> Resume</h2>\n    <h3>Personal Information </h3>\n    <p><b>Name:</b>".concat(name, "</p>\n      <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Date of Birth:</b>").concat(dob, "</p>\n          <p><b>Gender:</b>").concat(gender, "</p>\n             <h3>Education </h3>\n                <p><b>Education</b>").concat(education, "</p>\n                  <h3>Experience </h3>\n                <p><b>Experience</b>").concat(experience, "</p>\n                  <h3>Skills </h3>\n                <p><b>Skills:</b>").concat(skills, "</p>\n\n\n    ");
    // Display the Generate Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
