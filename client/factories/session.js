myApp.factory('sessionFactory', function($http, $location){
    var factory = {}

    factory.checkUser = function(cb){
        $http.get('/checkuser').then(function(output){
            if(!output.data){
                $location.url('/login')
            }
            else{
                cb(output.data)
            }
        })
    }

    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dashboard')
            }
        })
    }

    return factory
})