const div = document.getElementById('Container');
const bt = document.getElementById('btn');

const h1 = document.createElement('h1');
h1.innerText = "Data Is Loading...";

let obj = {
    Name: "Vishal Singh",
    Roll: 215,
    Branch: "AIML",
    Clg: "ABES Engineering College",
    TechStack: "AI Integration"
};

function display() {
    div.appendChild(h1);

    setTimeout(() => {
        let table = `
            <table border="10" style="width: 450px; height: 350px; font-size: 10px; background-color: white;
        color: black; text-align: center;
        border-color: black;">
                <tr>
                    <th colspan="1">Resume</th>
                </tr>
                <tr>
                    <th>Name:</th>
                    <td>${obj.Name}</td>
                </tr>
                <tr>
                    <th>RollNo:</th>
                    <td>${obj.Roll}</td>
                </tr>
                <tr>
                    <th>Branch:</th>
                    <td>${obj.Branch}</td>
                </tr>
                <tr>
                    <th>College:</th>
                    <td>${obj.Clg}</td>
                </tr>
                <tr>
                    <th>TechStack:</th>
                    <td>${obj.TechStack}</td>
                </tr>
            </table>
        `;

        div.innerHTML = table;
    }, 1000);
}

bt.addEventListener('click', display);