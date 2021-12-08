function login() {
    console.log("Đang Login");
    axios.post('https://dev.api-connect.io/id/user/login', {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value

    })
        .then(function (response) {
            console.log("Hello World");
            console.log(response);

            const br = document.createElement('br');
            const newDiv = document.createElement('div');
            newDiv.classList.add('result');

            const pStatus = document.createElement('p');
            const pCreated = document.createElement('p');
            const pID = document.createElement('p');
            const pTTL = document.createElement('p');
            const pUserID = document.createElement('p');

            document.getElementById("demo").appendChild(br);
            document.getElementById("demo").appendChild(newDiv);

            newDiv.appendChild(pStatus);
            newDiv.appendChild(pCreated);
            newDiv.appendChild(pID);
            newDiv.appendChild(pTTL);
            newDiv.appendChild(pUserID);

            pStatus.textContent = `Status: ${response.status}`;
            pCreated.textContent = `Created: ${response.data.created}`;
            pID.textContent = `ID: ${response.data.id}`;
            pTTL.textContent = `TTL: ${response.data.ttl}`;
            pUserID.textContent = `UserID: ${response.data.userId}`
        })
        .catch(function (error) {
            console.log("̶H̶̶e̶̶l̶̶l̶̶o̶ ̶W̶̶o̶̶r̶̶l̶̶d̶");
        });
}