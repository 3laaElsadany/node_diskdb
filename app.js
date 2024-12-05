const express = require("express");
const app = express();
const db = require("diskdb");
const bcrypt = require("bcrypt");


db.connect("./db", ["Users"]);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/users", (req, res) => {
  const users = db.Users.find();
  res.json({
    count: users.length,
    users
  });
})

app.post("/signup", async (req, res) => {
  try {
    const {
      email,
      password,
      name,
      senitiveData
    } = req.body;

    const userExist = await db.Users.findOne({
      email
    });

    if (userExist) {
      throw new Error("User already exist")
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await db.Users.save({
      email,
      hashPassword,
      name,
      senitiveData
    })

    res.json({
      success: true,
      user: user
    })
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
})

app.post("/login", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const userExist = db.Users.findOne({
      email
    });
    if (!userExist) {
      throw new Error();
    }

    const passwordVallid = await bcrypt.compare(password, userExist.hashPassword);

    if (!passwordVallid) {
      throw new Error();
    }
    res.status(200).json({
      success: true,
      message: "login success",
      user: userExist
    })
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "email or password incorrect"
    })
  }
})

app.listen(3000, () => console.log("Server is running"))