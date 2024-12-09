document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

    if (!form || !resumeDisplayElement) {
        console.error('Form or resume display element is missing in the HTML.');
        return;
    }

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload on form submission

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement)?.value || '';
        const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || '';
        const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';
        const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || '';

        // Generate the resume content dynamically
        const resumeHTML = `
            <h3><b>Resume</b></h3>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>LinkedIn:</b> <a href="${linkedin}" target="_blank">${linkedin}</a></p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Work Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('Resume display element is missing.');
        }
    });
});
