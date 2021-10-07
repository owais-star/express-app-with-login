
function logOut() {
    localStorage.removeItem("user");
    location.href = "login.html";
}

// var currentUser = JSON.parse(localStorage.getItem("user"));

// var dashBoardName = document.getElementById("dashBoardName");
// var dashBoardAddress = document.getElementById("dashBoardAddress");
// var dashBoardEmail = document.getElementById("dashBoardEmail")
// var dashBoardPhone = document.getElementById("dashBoardPhone")

// dashBoardName.innerText = currentUser.firstName + " " + currentUser.lastName;
// dashBoardAddress.innerText = currentUser.address;
// dashBoardEmail.innerText = currentUser.email;
// dashBoardPhone.innerText = currentUser.mobile;

// const arr = [];
const url = `http://localhost:5000`;

function postShare() {
    var title = document.getElementById('title').value;
    var titlePost = document.getElementById('titlePost').value;
    if (title && titlePost != '') {
        var postArea = document.getElementsByClassName('postArea');
        myUl = document.createElement('ul');
        myLi = document.createElement('li');
        myLi2 = document.createElement('li');
        myDiv = document.createElement('div');
        myDiv2 = document.createElement('div');
        myDiv3 = document.createElement('div');
        myDiv4 = document.createElement('div');
        myDiv5 = document.createElement('div');
        myDiv6 = document.createElement('div');
        myDiv7 = document.createElement('div');
        myImg = document.createElement('img');
        myImg2 = document.createElement('img');
        myHeading = document.createElement('h3');
        myPara = document.createElement('p');
        myUl.setAttribute("class", "posts");
        myDiv.setAttribute("class", "userData");
        myDiv3.setAttribute("class", "userName");
        myDiv3.setAttribute("id", "userName");
        myDiv4.setAttribute("class", "dateNtime");
        myDiv4.setAttribute("id", "dateNtime");
        myDiv7.setAttribute("class", "title");
        myImg.setAttribute("src", "user.png");
        myImg2.setAttribute("id", "postImage");
        myImg2.setAttribute("width", "100%");
        myImg2.setAttribute("src", "https://source.unsplash.com/user/erondu/600x400");
        myHeading.setAttribute("id", "sharedTitle");
        myPara.setAttribute("id", "sharedTitlePost");
        postArea[0].appendChild(myUl);
        myUl.appendChild(myLi);
        myUl.appendChild(myLi2);
        myLi.appendChild(myDiv);
        myDiv.appendChild(myImg);
        myDiv.appendChild(myDiv2);
        myDiv2.appendChild(myDiv3);
        myDiv2.appendChild(myDiv4);
        myLi2.appendChild(myDiv5);
        myDiv5.appendChild(myDiv6);
        myDiv5.appendChild(myImg2);
        myDiv6.appendChild(myDiv7);
        myDiv7.appendChild(myHeading);
        myDiv7.appendChild(myPara);

        var sharedTitle = document.getElementById('sharedTitle');
        var sharedTitlePost = document.getElementById('sharedTitlePost');
        var userData = document.getElementsByClassName('userData');
        var postImage = document.getElementById('postImage');

        let obj = {
            title: title,
            description: titlePost,
        }


        axios.post(`${url}/create`, obj)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            });


        // myDiv3.innerText = currentUser.firstName + " " + currentUser.lastName;
        dateToday = new Date();
        myDiv4.innerText = dateToday.getDate() + "/" + dateToday.getMonth() + "/" + dateToday.getFullYear();

        myHeading.innerText = title;
        myPara.innerText = titlePost;
        var title = document.getElementById('title').value = "";
        var titlePost = document.getElementById('titlePost').value = "";
    } else {
        alert("empty post can not be shared")
    }
}

// dashboard page ends here


let getPost = () => {
    // console.log("onload");
    let postArea = document.getElementById("callPosts");
    axios.get(`${url}/posts`)
        .then((response) => {
            console.log(response.data);
            response.data.forEach(element => {
                let ul = document.createElement("ul");
                ul.setAttribute("class", "posts");
                let card =
                    `<li>
                    <div class="userData">
                        <img width="7%" src="user.png" alt="">
                        <div>
                            <div class="userName"><h2 id="userName"></h2></div>
                            <div class="dateNtime" id="dateNtime">${element.created_on}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="title">
                            <h3 id="sharedTitle">${element.title}</h3>
                            <p id="sharedTitlePost">${element.description}</p>
                        </div>
                        <img id="postImage" width="100%" src="https://source.unsplash.com/user/erondu/600x400" alt="">
                    </div>
                </li>`;
                ul.innerHTML = card;
                postArea.appendChild(ul);
            })
        })
        .catch((err) => {
            console.log(err);
        });

}
document.addEventListener("load", getPost());