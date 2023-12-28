const mongoose=require("mongoose")



mongoose.connect("mongodb://localhost:27017/loginn")
.then(()=>{
  console.log("mongo coonected");
})

.catch(()=>{
  console.log("fail");
})

const LogInSchema=new mongoose.Schema({
  name:{
    type:String,reqired:true
  },
  password:{
    type:String,reqired:true
  }
})

const collection=new mongoose.model("collection1",LogInSchema)

module.exports=collection