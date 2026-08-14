const employee = {
    empid: 2,
    name: 'Ram',
    Designation: 'Java Developer',
    techstack: [{
    plang: 'java',
    server: 'Apache Tomcat',
    database: 'mySql',
    database2: 'mongodb'
    },{
    plang: 'python',
    server: 'Django',
    database: 'mySql',
    database2: 'mongodb'
    },
    {
        plang: 'React',
    server: 'node server',
    database: 'mySql',
    database2: 'mongodb'
    }
]
}

console.log(employee.techstack[0])
console.log(employee.techstack[1])
console.log(employee.techstack[2].server)