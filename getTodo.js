// firstly import the models...
const Todo = require("../models/Todo");


//define route handler

exports.createTodo = async(req,res) =>{
    try{

        // fetch all  todos items from  data base
        const Todos =await Todo.find({});


        //response
        res.status(200)
        .json({
            success:true,
            data:Todos,
            message:"Entire Todo Data is fetched from data base"



        })

       
}
    catch(err){

        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}
       


// firstly import the models...
const Todo = require("../models/Todo");



//define route handler
exports.getTodobyId = async(req,res) =>{
    try{

        //extract todo items basis on id

        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        //data forgiven id not found
        if(!todo){
            return res.status(404).json({

                success:false,
                message:"no data found with given id"

            })

        }

        //data for given id found

        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        })

      
       
}
    catch(err){

        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })


    }
}
       