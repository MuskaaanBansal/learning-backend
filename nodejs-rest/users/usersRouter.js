const express = require('express');

const usersRouter = express.Router();


const users = [
  {
    id: 'user-id-1',
    name: 'user-one'
  }
]
usersRouter.get('/', (req, res) => res.send('users'))

module.exports = usersRouter;


// Post, User

// A user can have multiple posts

// user -> id, name, username

// posts -> id title, content, userId

// we want all of the posts of user id 1

// posts.filter((post) => post.userId === 1)

// get me the name of the user who create post with id 2

// const post = posts.find((post) => post.id === 2) -> post.userId
// const user = users.find((user) => user.id === post.userId);

// select * from posts where id  = 2 -> post.useId 1
// join users on post.userId = user.id;


// 
// user.name, 