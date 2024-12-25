const express = require("express");
const router = express.Router(); // router ka instance create kr liya 

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo ,getTodoById } = require("../controllers/getTodo");
const {updateTodo} = requiredeleteTodo("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define API routes...   => routes ko controller se link kr diya ....
router.post("/createTodo" , createTodo);





//map krwa diya routes ko controller se...
router.get("/getTodos" ,getTodo);


//map  krwa diya given routes ko controller se ....
router.get("/getTodos/:id" , getTodoById);


//map krwa diya given routes ko update todo wle controllers se ...
router.put("./updateTodo/:id" , updateTodo);

// map krwana hoga kisi v routes ko delete controlers ko se...

router.delete("./deleteTodo/:id" , deleteTodo);






module.exports = router;