var mongoose = require('mongoose')
var Nerd = mongoose.model('Nerd')

module.exports = function(){
    return {
        addNerd: function(req,res){
            var newNerd = new Nerd(req.body);
            newNerd.save(function(err){
                if(err){
                    res.json({status: false})
                }
            })
        },
        allNerds: function(req,res){
            Nerd.find({}, function(err,data){
                res.json(data)
            })
        },
        like: function(req,res){
            Nerd.findOne({_id: req.params.id}, function(err, nerd){
                if(err){
                    res.json({status: false})
                }
                else{
                    nerd.like++;
                    nerd.save(function(err){
                        if(err){
                            res.json({status:false})
                        }
                        else{
                            res.json({status: true})
                        }
                    })
                }
            })
        },
        change: function(req,res){
            Nerd.findOne({_id: req.params.id}, function(err, nerd){
                if(err){
                    res.json({status: false})
                }
                else{
                    if (nerd.status == 'Active'){
                        nerd.status = 'Inactive'
                    }
                    else{
                        nerd.status = 'Active'
                    }
                    nerd.save(function(err){
                        if(err){
                            res.json({status:false})
                        }
                        else{
                            res.json({status: true})
                        }
                    })
                }
            })
        }
    }
}()