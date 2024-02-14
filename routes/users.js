import express from 'express';

//importing create user
import { createUser,getUsers,getUser,deleteUser,updateUser } from '../controller/users.js'
//1
const router = express.Router(); //initialize our router

//4

//3
//a routes in here are starting with /users
router.get('/',getUsers); //once we visit the route we will have a call back functio
//call back function has req and res objects

//5
//in here now we'll have to deal with some actual data we'll be sending in for testing the post route
// we can no longer use chrome or any browser for that matter why is that so because whenever you type something into the url bar 
//it's making only a get request so browsers can only make get requests that's why we need a software which can help us test our api and that's where postman comes

router.post('/',createUser); //found in controller


//get request
router.get('/:id', getUser);
//delete user
router.delete('/:id', deleteUser);
//updated
router.patch('/:id', updateUser);
//2
//exporting this file
export default router; // so we can use it in index.js file