var mongoose=require('mongoose');
var Schema =mongoose.Schema;

var movieModel=new Schema({
    title:String,
    genre:String,
    rating:String
});

module.exports=mongoose.model('movie',movieModel);


