const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// post api for creating a post

app.post("/callback", (request, response) => {
  try {
    const body = request.body;
    console.log(body);
    return response.status(200).json({
      status: "success",
      message: "callback received",
      data: body,
    });
  } catch (error) {
    response.send(`got an error`, error);
  }
});
app.listen(port, () => console.log(`App is live on localhost:${port}`));
