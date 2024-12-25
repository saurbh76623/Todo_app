// firstly import the models
const Todo = require("../models/Todo");



//define route handler

exports.updateTodo = async(req,res) =>{
    try{

        // id ko fetch kr liya parameter se 
        const {id} = req.params;

        // title and desc ko body se fetch kr liya body se
        const {title,description} =req.body;


        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description ,updateAt: Date.now()},

        )
      
        res.staus(200).json({
            success:true,
            data:todo,
            message:`updated successfully`,

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
