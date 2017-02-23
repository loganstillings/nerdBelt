myApp.controller('sessionController', function($scope, sessionFactory){
    $scope.errors = []
    
    sessionFactory.checkUser(function(data){
        $scope.currentUser = data;
    });

    $scope.login = function(){
        if (!$scope.logReg || $scope.logReg.name.length < 3){
            $scope.errors = []
            $scope.errors.push('Please enter a name of at least 3 characters.')
        }else{
            sessionFactory.login($scope.logReg);
        }
    }
})