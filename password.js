// Create an HTML page with a form. The form should include inputs for a username, password,
// an h1 tag as well as a button. In a Javascript file, write code that does the following things
// when the button is pressed:
// checks that the password is 12345678
// checks that the username is less than 14 characters in length
// if the info in the form is correct, have Javascript change the text in the h1 to say
// "Congrats on knowing your username and password!"
// if anything is wrong, send an alert message saying "Incorrect username or password"

// Get the Button
var btn = document.getElementById("myBtn");

// Define the function check()
function check() {
    var usrname = document.getElementsByName("username")[0]["value"]; // 
    var pssword = document.getElementsByName("password")[0]["value"];
    
    if(pssword === "12345678") {
        if(usrname.length < 14) {
            document.getElementsByName("h1tag")[0]["innerHTML"] = "Congrats on knowing your username and password!";
        }
    } else {
        alert("Incorrect username or password");
    }
}

btn.onclick = function() {
    check();
}
