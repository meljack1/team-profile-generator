const generateHTML = (manager, engineers, interns) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <main class="d-md-flex flex-wrap justify-content-evenly">
            <div class="card mb-3">
                <div class="card-header text-white team-manager">
                    <h2>${manager.name}</h2>
                    <h3>Team Manager</h3> 
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: ${manager.email} </li>
                        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>` 
+ generateEngineers(engineers)
+ generateEngineers(interns)
+        `
        </main>
    </body>
    </html>`
}

function generateEngineers(engineers) {
    let string = ``;
    engineers.forEach(engineer => {
        string +=
        `
            <div class="card mb-3">
                <div class="card-header text-white engineer">
                    <h2>${engineer.name}</h2>
                    <h3>Engineer</h3> 
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: ${engineer.email} </li>
                        <li class="list-group-item">GitHub: ${engineer.github}</li>
                      </ul>
                </div>
            </div> \n`
    } )
    return string;
}

function generateInterns(interns) {
    let string = ``;
    interns.forEach(intern => {
        string +=
        `
            <div class="card mb-3">
                <div class="card-header text-white intern">
                    <h2>${intern.name}</h2>
                    <h3>Engineer</h3> 
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${internemail} </li>
                        <li class="list-group-item">GitHub: ${intern.school}</li>
                      </ul>
                </div>
            </div> \n`
    } )
    return string;
}

module.exports = { 
    generateHTML, 
}

