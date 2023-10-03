const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

const PORT = 3000;

// start middleware

app.use(function (req, res, next) {
  const start = Date.now();
  next();
  // console.log(start);
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.baseUrl} ${delta}ms`);
});

// app express middleware builtin function
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// app.get("/", function (req, res) {
//   console.log(messagesController.getMessages);
//   // res.write(messagesController);
//   res.send(messagesController.getMessages);
// });

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
