import express from "express";
import { config } from "dotenv";

config({
  path: "./config/config.env",
});

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => res.send("<h1>Site is working here</h1>"));

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  console.log(data);
  const evenNum = [];
  const oddNum = [];
  const alp = [];
  data.forEach((item) => {
    if (typeof data[i] == "number") {
      if (data[i] % 2 == 0) {
        evenNum.push(data[i]);
      } else {
        oddNum.push(data[i]);
      }
    } else {
      alp.push(data[i]);
    }
  });
  return res.status(200).json({
    is_success: true,
    user_id: "sarthak_jain_23052003",
    email: "sarthak1280.be21@chitkara.edu.in",
    roll_number: "2110991280",
    odd_numbers: oddNum,
    even_numbers: evenNum,
    alphabets: alp,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port : ${process.env.PORT}`);
});
