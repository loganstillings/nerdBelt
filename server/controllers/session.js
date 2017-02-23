var mongoose = require('mongoose')
var users = mongoose.model('User')
module.exports = function(){
    return {
        login: function(req,res){
            users.findOne({name: req.body.name}, function(err, user){
                if(!user){
                    var newUser = new users(req.body)
                    newUser.save(function(err){
                        if(err){
                            return res.json({error: 'Something Went Wrong'})
                        }
                        req.session.user = newUser;
                        req.session.save();
                        res.json({status:true})
                    })
                }
                else{
                    req.session.user = user;
                    req.session.save();
                    res.json({status:true})
                }
            })
        },
        checkuser: function(req,res){
            if(!req.session || !req.session.user){
                res.json(null)
            }
            else{
                res.json(req.session.user)
            }
        },
        logout: function(req,res){
            req.session.destroy();
            res.redirect('/')
        }
    }
}()