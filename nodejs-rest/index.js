const express = require("express");

const app = express();
app.use(express.json());
const postsRouter = require("./posts/postsRouter");

app.set("content-type", "application/json");
app.use("/posts", postsRouter);

app.listen(3000, () => {
  console.log("listenening");
});
