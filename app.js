const express = require("express");
const data = require("./data");
const cors = require("cors");

const app = express();
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log("live on http://localhost:4000");
});
