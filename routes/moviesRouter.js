var express = require('express');
var moviesController=require('./../controller/moviesController');

var moviesRouter = express.Router();

moviesRouter.route('/get').get(moviesController.get);
moviesRouter.route('/post').post(moviesController.add);
moviesRouter.route('/:id').get(moviesController.getById);
moviesRouter.route('/:id').put(moviesController.Update);
moviesRouter.route('/:id').patch(moviesController.patch);
moviesRouter.route('/').delete(moviesController.del);

module.exports=moviesRouter;