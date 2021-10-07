const BASE_URL = `http://localhost:5000`;
const signUp = e => {
    // main js for getting all data from inputs 

    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var fullName = firstName + lastName;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passRematch = document.getElementById("confirm_password").value;
    var signupBtn = document.getElementById("myBtn");
    var address = document.getElementById("address").value;
    var mobile = document.getElementById("mobile").value;

    if (password === passRematch) {
        let user = {
            lastName: document.getElementById("last_name").value,
            firstName: document.getElementById("first_name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            passRematch: document.getElementById("confirm_password").value,
            address: address,
            mobile: mobile

        }

        var message = document.getElementById("message");
        // axios.get(`${BASE_URL}/getemail`)
        //     .then((response) => {
        //         response.data.foreach(element => {
        //             console.log(element.email);
        //             if (user.email != element.email) {
        //                 // this user is not exist
        //                 axios.post(`${BASE_URL}/signup`, user)
        //                     .then((response) => {
        //                         console.log(response);
        //                     }).catch((err) => {
        //                         console.log(err);
        //                     });
        //                 message.innerHTML = "account created";
        //                 location.href = "login.html"

        //             } else {
        //                 message.innerHTML = user.email + " use in another account";
        //             }
        //         })
        //     });
        // async function userCheck(url) {
        //     try {
        //         const response = await axios.get(url);
        //         response.data.forEach(element => {
        //             console.log(element.email);
        //             if (user.email != element.email) {
        //                 // this user is not exist
        //                 axios.post(`${BASE_URL}/signup`, user)
        //                     .then((response) => {
        //                         console.log(response);
        //                     }).catch((err) => {
        //                         console.log(err);
        //                     });
        //                 message.innerHTML = "account created";


        //             } else {
        //                 message.innerHTML = user.email + " use in another account";
        //             }
        //         });
        //     } catch (err) { console.error(err.message) }
        // }
        // userCheck(`${BASE_URL}/getemail`);
        // clear state

        axios.post(`${BASE_URL}/signup`, user)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            });
        message.innerHTML = "account created";


        setTimeout(() => {
            message.innerHTML = "";
            location.href = "login.html"
        }, 5000);


    } else {
        alert("! Entered passwords do not match")
    }
    e.preventDefault();
}




// signin page starts here
const signIn = f => {
    let userInput = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    var message = document.getElementById("message");

    // var users = JSON.parse(localStorage.getItem("users")) || [];

    // var currentUser = users.find(function (val) {
    //     return val.email.toLowerCase() === userInput.email.toLowerCase() && val.password === userInput.password;
    // });
    // if (currentUser) {
    //     localStorage.setItem("user", JSON.stringify(currentUser));
    //     // user login

    //     location.href = "dashboard.html";
    // } else {
    //     message.innerHTML = "Invalid credentials";
    // }
    // clear state

    axios.get(`${BASE_URL}/getemail`)
        .then((response) => {
            console.log(response.data);
            response.data.forEach(element => {
                if(element.email === userInput.email){
                    message.innerHTML = "logged in successfully";
                }
            })
        })
        .catch((err) => {
            console.log(err);
        });
    // async function handleAuth() {
    //     const message = await axios.post(`${BASE_URL}/login`, userInput)
    //     return message.innerHTML = message;
    //   }

    setTimeout(() => {
        message.innerHTML = "";
        location.href = "dashboard.html";
    }, 20000);
    f.preventDefault();
}

