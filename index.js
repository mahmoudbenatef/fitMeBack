const express = require("express");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const statusCode = require("./src/helper/statusCode");
const cors = require("cors");
const port = 3001;
const app = express();
const userRouter = require("./src/routes/userRoute");
const mealRouter = require("./src/routes/mealRoute");
const categoryRouter = require("./src/routes/categoryRoute");
const questionerRouter = require("./src/routes/questionerRoute");
const campRoute = require("./src/routes/campRoute");
app.use("/public", express.static("public"));

mongoose.connect(
  // process.env.MONGO_CONNECTION_STRING+"/goodreads"||
  "mongodb://localhost:27017/fitMe",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("falied to connect mongo");
      console.log(process.env.MONGODB_URI, "monkooooo");
    } else console.log("connected successfully to mongo");
  }
);

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      function (err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

// routes
app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use('/questioner', questionerRouter);
app.use("/camp", campRoute);
app.use("/meals", mealRouter);
app.get("/", (req, res) => {
  res.end("hello at home page atef");
});
//     .post(userHandlers.register);
app.listen(process.env.PORT || port, (err) => {
  if (err) console.log("error in connecting");
  else console.log("connected successfully on port " + port);
});

// app.use(express.static('public'));

// error handler middleware
app.use((err, req, res, next) => {
  console.log("**************ERROR****************** \n \n", err);
  // error from mongoDB, but dose not work !!!!!
  if (err.name === "MongoError") {
    return res
      .status(statusCode.ServerError)
      .json({ message: "some thing wrong happend" });
  }
  // error from validation
  if (err) return res.status(statusCode.BadRequest).json(err);
});
