var sismiop = angular.module('sismiop', []);

sismiop.controller('menu', ['$scope', function($scope) {
    $scope.kasus = 'ingat';
    $scope.namaUser = '';
}]);
sismiop.controller('inputan', ['$scope', function($scope) {
    $scope.inputStatis = 'AXF';
    $scope.inputSelect = '0';
    $scope.inputSelection = {
    	'0': '--pilih menu--',
    	'1':'pentol',
    	'2':'tahu gembos',
    	'3':'mie puteh',
    	'4':'mie koneng',
    	'5':'somay',
    	};
    	 $scope.inputSelectionKeys = Object.keys($scope.inputSelection)
}]);
sismiop.controller('submenu', ['$scope', '$http', function($scope, $http) {
    $scope.kasus = 'lupa';
    $scope.list = [{
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
        {
            nama: '',
            umur: ''
        },
    ];
    $scope.submit = function() {
        $http({
            method: 'POST',
            url: 'ping.php',
            data: $.param({
              list:$scope.list
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            console.log(response.data);
        });
    };
}]);