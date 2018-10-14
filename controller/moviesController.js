var movie=require('./../models/movieModel');



/*  Add request */
var add=function(req,res){
    var movieNew=new movie(req.body);
    console.log(movieNew)
    movieNew.save(function(err,result){
        console.log(result);
        if(!err){
            res.send(result);
        }else{
            res.send(err);
            console.log(err)
        }
    })
}
/* End add request */


/* Get Request */
var get=function(req,res){
   movie.find(function(err,movies){
       if(err){
           res.send("Internet Error");
       }else{
           res.send(movies)
       }
   })
}
/* End Get Request */

/* GetById User */

var getById=function(req,res){
    movie.findById(req.params.id,function(err,movies){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(movies);
        }
    })
}
/* End GetById */


/* Update Request */
var Update=function(req,res){
    movie.findById(req.params.id,function(err,movies){
        if(err){
            res.status(400);
            res.send("Not Found");
        }else{
            movies.title=req.body.title;
            movies.genre=req.body.genre;
            movies.rating=req.body.rating;

            movies.save(function(err){
                if(!err){
                    res.status(200);
                    res.send(movies)
                }else{
                    res.status(500);
                    res.send("Faild");
                }
            })
        }
    })
}

var del=function(req,res){
    movie.findById(req.body._id,function(err,movies){
        movies.remove(function(err){
            if(!err){
                res.status(204);
                res.send("Removed");
            }
        });
    });

}

var patch=function(req,res){
     movie.findById(req.params.id,function(err,movies){
         if(!err){
             if(req.body._id){
                 delete req.body._id;
             }
             for(var p in req.body){
                 movies[p] = req.body[p];
             }
             movies.save(function(err){
                 if(!err){
                     res.status(200);
                     res.send(movies);
                 }
             })
         }
     })
}
module.exports = {
    add:add,
    get:get,
    getById:getById,
    Update:Update,
    patch:patch,
    del:del
};