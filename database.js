var mongoose=require('mongoose')
const databases="mongodb+srv://yosri123:yosri123@cluster0.tc2tu.mongodb.net/<dbname>?retryWrites=true&w=majority"

module.exports=()=>mongoose.connect(databases,{ useNewUrlParser: true, useUnifiedTopology: true  },err=>{
    if(err){console.log(err);return}
    console.log("Database is connected well")
})
