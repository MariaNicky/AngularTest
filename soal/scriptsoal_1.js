var sismiop = angular.module('sismiop', ['ngCookies']);

sismiop.controller('inputtext', ['$scope', function($scope) {
    $scope.kasus = 'ingat';
    $scope.namaUser = '';
}]);
sismiop.controller('inputnumber', ['$scope', function($scope) {
    $scope.inputNumber = 0;
}]);
sismiop.controller('inputkaryawanlist', ['$scope', function($scope) {
    $scope.list = ["Budy","Icha","Fajar","Candra","Anton","Winny","Danu"];
}]);
sismiop.controller('inputkaryawanselect', ['$scope', function($scope) {
    $scope.inputSelect = '0';
    $scope.inputSelection = {
      '0': '--Nama Karyawan--',
      '1':'Budi',
      '2':'Icha',
      '3':'Fajar',
      '4':'Candra',
      '5':'Anton',
      '6':'Winny',
      '7':'Danu',
      };
       $scope.inputSelectionKeys = Object.keys($scope.inputSelection)
}]);
sismiop.controller('page', ['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.struktur_list = {
    nama:'NoName',
  };
  $scope.list = [
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
  ];
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
            url: 'pingsoal_1.php',
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