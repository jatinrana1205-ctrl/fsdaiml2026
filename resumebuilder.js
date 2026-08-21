const div = document.getElementById('root');
const bt = document.getElementById('btn');

const h1 = document.createElement('h1');
h1.innerText = "Data Is Loading...";

let obj = {
    "Name": "Jatin Singh Rana",
    "Roll": 93,
    "Branch": "CSE - AIML",
    "Clg": "ABES Engineering College, Ghaziabad",
    "Email": "jatinrana1205@gmail.com",
    "Phone": "+91 9625132940",
    "Location": "Ghaziabad, Uttar Pradesh",
    "TechStack": "HTML, CSS, JavaScript, Python",
    "Education": "B.Tech in Computer Science & Engineering - AIML",
    "CGPA": "7.17",
    "Project": "Calorizen - Nutrition Tracking Web Application",
    "Certification": "Python Programming, Web Development",
    "Hobbies": "Gym, Technology, Travelling"
};

function display() {

    div.appendChild(h1);

    setTimeout(() => {

        let table = `
        <table border="4" cellpadding="12" cellspacing="0" width="700">

            <tr>
                <th colspan="2">
                    <h1>${obj.Name}</h1>
                    <p>${obj.Branch} | ${obj.TechStack}</p>
                </th>
            </tr>

            <tr>
                <th colspan="2">CONTACT INFORMATION</th>
            </tr>

            <tr>
                <th>Email</th>
                <td>${obj.Email}</td>
            </tr>

            <tr>
                <th>Phone</th>
                <td>${obj.Phone}</td>
            </tr>

            <tr>
                <th>Location</th>
                <td>${obj.Location}</td>
            </tr>

            <tr>
                <th colspan="2">EDUCATION</th>
            </tr>

            <tr>
                <th>Degree</th>
                <td>${obj.Education}</td>
            </tr>

            <tr>
                <th>College</th>
                <td>${obj.Clg}</td>
            </tr>

            <tr>
                <th>Roll Number</th>
                <td>${obj.Roll}</td>
            </tr>

            <tr>
                <th>CGPA</th>
                <td>${obj.CGPA}</td>
            </tr>

            <tr>
                <th colspan="2">TECHNICAL SKILLS</th>
            </tr>

            <tr>
                <th>Tech Stack</th>
                <td>${obj.TechStack}</td>
            </tr>

            <tr>
                <th colspan="2">PROJECTS</th>
            </tr>

            <tr>
                <th>Project </th>
                <td>
                    <b>${obj.Project}</b><br>
                    A web application that helps users track
                    nutrition and calories in their daily diet.
                </td>
            </tr>

            <tr>
                <th colspan="2">CERTIFICATIONS</th>
            </tr>

            <tr>
                <th>Certifications</th>
                <td>${obj.Certification}</td>
            </tr>

            <tr>
                <th colspan="2">INTERESTS</th>
            </tr>

            <tr>
                <th>Hobbies</th>
                <td>${obj.Hobbies}</td>
            </tr>

        </table>
        `;

        div.innerHTML = table;

    }, 1000);
}

bt.addEventListener('click', display);