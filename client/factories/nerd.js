myApp.factory('nerdFactory', function($http){
    var factory = {}
    factory.addNerd = function(nerd){
        $http.post('/addNerd', nerd).then(function(output){
            if(output){
                alert('something went wrong')
            }
        })
    }
    factory.allNerds = function(cb){
        $http.get('/allNerds').then(function(output){
            cb(output.data)
        })
    }
    factory.like = function(id){
        $http.get('/like/' + id).then(function(output){
            if(output.data.status == false){
                alert('something went wrong')
            }
        })
    }
    factory.change = function(id){
        $http.get('/change/' + id).then(function(output){
            if(output.data.status == false){
                alert('something went wrong')
            }
        })
    }
    return factory;
})