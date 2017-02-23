var session = require('../controllers/session.js')
var nerd = require('../controllers/nerd.js')
module.exports = function(app){
    app.post('/login', function(req,res){
        session.login(req,res);
    })
    app.get('/checkuser', function(req,res){
        session.checkuser(req,res);
    })
    app.get('/logout', function(req,res){
        session.logout(req,res);
    })
    app.post('/addNerd', function(req,res){
        nerd.addNerd(req,res);
    })
    app.get('/allNerds', function(req,res){
        nerd.allNerds(req,res);
    })
    app.get('/like/:id', function(req,res){
        nerd.like(req,res)
    })
    app.get('/change/:id', function(req,res){
        nerd.change(req,res)
    })
}