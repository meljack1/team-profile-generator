const generateHTML = (manager, engineers, interns) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css">
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
            </div>
        </main>
    </body>
    </html>`
}

module.exports = { 
    generateHTML, 
}

