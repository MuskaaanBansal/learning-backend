const express = require("express");

const app = express();
app.use(express.json());
const postsRouter = require("./posts/postsRouter");
const usersRouter = require("./users/usersRouter");


app.set("content-type", "application/json");
app.use("/posts", postsRouter);

app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log("listenening");
});
