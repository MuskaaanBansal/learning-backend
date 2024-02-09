const express = require("express");

const postsRouter = express.Router();
const uuid = require("uuid").v4;

const posts = [
  {
    id: uuid(),
    title: "New Post 0",
    content: "lorem ipsum 0",
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    id: uuid(),
    title: "New Post 1",
    content: "lorem ipsum 1",
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];

// Task 1: Update query for adding new post
postsRouter.post("/", (req, res) => {
  const id = uuid();
  const newPost = {
    ...req.body,
    id,
    createdDate: new Date(),
    updatedDate: new Date(),
  };
  posts.push(newPost);
  res.status(201).send(newPost);
});

// task 2:
postsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id == id);
  if (!post) {
    return res.status(404).send({ error: "Post not found" });
  }
  res.send({ data: post });
});

// Task 4: get all posts
postsRouter.get("/", (req, res) => {
  const { title } = req.query;
  if (title) {
    return res
      .status(200)
      .send({ data: posts.filter((post) => post.title === title) });
  }
  res.status(200).send({ data: posts });
});

// put
postsRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(404).send("Invalid Id");
  }

  const post = req.body;
  if (post) {
    const postToUpdate = posts.find((post) => post.id === id);
    if (postToUpdate) {
      const updatedPost = {
        ...postToUpdate,
        ...post,
      };
      res.status(200).send({ updatedPost });
    }
  }
});

// delete
postsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(404).send("Invalid Id");
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).send({});
});

module.exports = postsRouter;
