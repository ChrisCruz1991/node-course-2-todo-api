const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5b75dca6eb7969eec8519a77 ';

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User', user);
  })
  .catch(e => console.log(e));

// const id = '5b7c7206e3795b1485ada88011';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos ', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });
