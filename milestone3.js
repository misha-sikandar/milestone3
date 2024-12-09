document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    if (!form || !resumeDisplayElement) {
        console.error('Form or resume display element is missing in the HTML.');
        return;
    }
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f, _g;
        event.preventDefault(); // Prevent page reload on form submission
        // Collect input values
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
        var linkedin = ((_d = document.getElementById('linkedin')) === null || _d === void 0 ? void 0 : _d.value) || '';
        var education = ((_e = document.getElementById('education')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var experience = ((_f = document.getElementById('experience')) === null || _f === void 0 ? void 0 : _f.value) || '';
        var skills = ((_g = document.getElementById('skills')) === null || _g === void 0 ? void 0 : _g.value) || '';
        // Generate the resume content dynamically
        var resumeHTML = "\n            <h3><b>Resume</b></h3>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n            <p><b>LinkedIn:</b> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('Resume display element is missing.');
        }
    });
});
