const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

 
app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
      email: "john@doe.com"
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@doe.com"
    }
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});