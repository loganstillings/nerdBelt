myApp.controller('nerdController', function($scope, nerdFactory, $location, $route){
    $scope.nerdErrors = [];
    $scope.addNerd = function(){
        if(!$scope.nerd || !$scope.nerd.name || !$scope.nerd.power){
            $scope.nerdErrors = [];
            $scope.nerdErrors.push('Nerd name and power are required')
        }
        else{
            nerdFactory.addNerd($scope.nerd)
            $location.url('/dashboard')
        }
    }
    nerdFactory.allNerds(function(data){
        $scope.allNerds = data
        $scope.activeNerds = [];
        $scope.inactiveNerds = [];
        for(var i = 0; i < $scope.allNerds.length; i++){
            if ($scope.allNerds[i].status == 'Active'){
                $scope.activeNerds.push($scope.allNerds[i])
            }
            else{
                $scope.inactiveNerds.push($scope.allNerds[i])
            }
        }
    })

    $scope.like = function(id){
        nerdFactory.like(id);
        $route.reload();
    }
    $scope.change = function(id){
        nerdFactory.change(id);
        $route.reload();
    }
})