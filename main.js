function login() {
    console.log("Đang Login");
    axios.post('https://dev.api-connect.io/id/user/login', {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value

    })
        .then(function (response) {
            console.log("Hello World");
            console.log(response);
            alert(`Status: ${response.status}`);
            alert(`Created: ${response.data.created}`);
            alert(`ID: ${response.data.id}`);
            alert(`TTL: ${response.data.ttl}`);
            alert(`UserID: ${response.data.userId}`);

        })
        .catch(function (error) {
            console.log("̶H̶̶e̶̶l̶̶l̶̶o̶ ̶W̶̶o̶̶r̶̶l̶̶d̶");
        });
}