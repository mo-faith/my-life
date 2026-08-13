function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === "Fahith" && password === "12345") {

        alert("Login successful!");

        window.location.href = "./Homepage.html";

    }

    else {

        document.getElementById("message").innerHTML =
        "Incorrect username or password";

    }

}