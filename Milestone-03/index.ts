const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "result-display"
) as HTMLDivElement;

// Handle form Submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // Collect input value
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const gender = (document.getElementById("gender") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate Dynamic Resume content dynamically
  const resumeHtml = `
    <h2> Resume</h2>
    <br/>
    <h3>Personal Information </h3>
    <p><b>Name : </b>${name}</p>
      <p><b>Email : </b>${email}</p>
        <p><b>Date of Birth : </b>${dob}</p>
          <p><b>Gender : </b>${gender}</p>
             <h3>Education </h3>
                <p><b>Education : </b>${education}</p>
                  <h3>Experience </h3>
                <p><b>Experience : </b>${experience}</p>
                  <h3>Skills </h3>
                <p><b>Skills : </b>${skills}</p>


    `;
  // Display the Generate Resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtml;
  } else {
    console.error("The resume display element is missing.");
  }
});
