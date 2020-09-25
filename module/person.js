var mongoose=require("mongoose")

var PersonSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    favoriteFood:{
        type:[String]
    }
})

module.exports=mongoose.model("Person",PersonSchema)