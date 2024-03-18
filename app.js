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
  try {
    const data = req.body.data;
    const evenNum = [];
    const oddNum = [];
    const alp = [];
    data.forEach((item) => {
      if (typeof item == "number") {
        if (item % 2 == 0) {
          evenNum.push(item);
        } else {
          oddNum.push(item);
        }
      } else {
        alp.push(item);
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
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port : ${process.env.PORT}`);
});
