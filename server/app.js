const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./schema");
const constructor = require("./schema");
const { posts, emails } = constructor;
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const DB_URI = "mongodb+srv://owais:admin@cluster0.uc1gd.mongodb.net/test"
// const DB_URI = "mongodb+srv://admin:admin@cluster0.x26vs.mongodb.net/dev";

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// post api for creating a post

app.post("/create", (request, response) => {
    try {
        const body = request.body
        constructor.posts.create(body, (error, data) => {
            if (error) {
                throw error;
            } else {
                console.log(data)
                response.send("Created post succesfully")
            }
        });
    } catch (error) {
        response.send(`got an error`, error.message);
    }
});

// get api for getting posts from db

app.get("/posts", (req, res) => {
    try {
        const { title } = req.headers;
        const query = {};
        if (title) {
            query.title = title;
        }
        constructor.posts.find(query, (error, data) => {
            if (error) {
                throw error;
            } else {
                res.send(JSON.stringify(data));
            }
        });

    } catch (error) {
        res.send(`got an error during get post ${error.message}`);
    }
});

// get api to get one specific post from db

app.get("/post", (request, response) => {
    try {
        const { title } = request.headers;
        const query = {
            title: title
        };
        if (query.title) {

            constructor.posts.findOne(query, (error, data) => {
                if (error) {
                    throw error;
                } else {
                    response.send(JSON.stringify(data));
                }
            });
        } else {
            response.send(`Nothing related to your search found`)
        }

    } catch (error) {
        response.send(`got an error during get post ${error.message}`);
    }
});

//for sign up page

// app.post("/signup" ,(request,response)=>{
//     try {
//         const body = request.body
//         constructor.emails.create(body, (error , data)=>{
//             if(error){
//                 throw error;
//             }else{
//                 console.log(data)
//                 response.send("Created your account succesfully")
//             }
//         });
//     } catch (error) {
//         response.send(`got an error` , error.message);
//     }
// });
 
app.post("/signup",  (req, res) => {
    try {
        const email = req.body;

        let user =  User.findOne({email : data.email});
        if (user) {
            return res.status(400).send("User already registered.");
        } else {
            constructor.emails.create(email, (error, data) => {
                if (error) {
                    throw error;
                } else {
                    console.log(data)
                    response.send("Created your account succesfully")
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

app.get("/getemail", (request, response) => {
    try {
        const { email } = request.headers;
        const query = {
            email: email
        };
        if (query.email) {
            constructor.emails.find(query, (error, data) => {
                if (error) {
                    throw error;
                } else {
                    response.send(JSON.stringify(data));
                }
            });
        } else {
            response.send(`No account found with this email, signup now`)
        }

    } catch (error) {
        response.send(`got an error during get post ${error.message}`);
    }
});

// Login endpoint
// app.post("/login", (req, res) => {
//     const email = req.body.email;
  
//     if (!email) {
//       res.statusCode(403);
//       res.send({
//         message: "There is no email address that matches this.",
//       });
//     }
  
//     if (email) {
//       res.send.statusCode(200);
//       res.send(email);
//     }
//   });


mongoose.connection.on("connected", () => console.log("Mongoose Connected"));
mongoose.connection.on("error", (error) => console.log(`Mongoose Connection Error ${error.message}`));

app.listen(port, () => console.log(`App is live on localhost:${port}`));