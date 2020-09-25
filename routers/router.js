const { Router } = require('express')
var express=require('express')
var router=express.Router()
var PersonModel=require('../module/person')

router.post('/',(req,res)=>{
    var person=new PersonModel(req.body)
    person.save()
          .then(docs=>{console.log(docs);res.send(docs)})
          .catch(err=>{console.log(err)})
})

router.post('/personName',(req,res)=>{
    PersonModel
    .find({name:req.body.name})
    .then(docs=>{console.log(docs);res.send(docs)})
    .catch(err=>console.log(err))
})

router.post('/food',(req,res)=>{
    PersonModel
    .findOne({favoriteFood:req.body.favoriteFood})
    .then(docs=>{console.log(docs);res.send(docs)})
    .catch(err=>console.log(err))
})
router.post('/:id',(req,res)=>{
    PersonModel
    .findById({_id:req.params.id})
    .then(docs=>{console.log(docs);res.send(docs)})
    .catch(err=>console.log(err))
})


///// Perform New Updates on a Document Using model.findOneAndUpdate()
router.put('/update/:id',(req,res)=>{
  PersonModel
  .findOneAndUpdate(req.params.id,{$set:req.body})
  .then(docs=>{console.log(docs);res.send(docs)})
  .catch(err=>console.log(err))
})
  /////////////Remove

  router.delete('/remove/:id',(req,res)=>{
    PersonModel
    .findOneAndRemove({_id:req.params.id})
    .then(docs=>{console.log(docs);res.send(docs)})
    .catch(err=>console.log(err))
})

module.exports=router;

//MongoDB and Mongoose - Delete Many Documents with model.remove()
//Chain Search Query Helpers to Narrow Search Results
