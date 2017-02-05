/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	new:function(req,res){
		console.log("entre por aqui");
		res.view();
	},
	create: function(req,res){
		console.log("ola" + req.param('Nombre'));
		var userObj={
			Nombre: req.param('Nombre'),
			Telefono: req.param('Telefono'),
			Barrio: req.param('Barrio'),
			Direccion: req.param('Direccion'),
			email: req.param('email'),
		}
		User.create(userObj,function(err,user){
			if(err){
				console.log(err);
				return res.redirect('/user/new');
			}
			res.redirect('/user');
		})
	}
};

