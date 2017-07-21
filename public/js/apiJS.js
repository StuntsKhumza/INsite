var app = angular.module('myApp', ['searchApp', 'addSearchApp']);

app.controller('myCtrl', function ($scope, $http) {
  $scope.dataFromSearch = [];
  $scope.showResults = false;
  $scope.obj = { search_field: "" }
  $scope.submit = function () {

    //dowork

    $http.get("/dowork/" + $scope.obj.search_field)
      .then(function (httpResponse) {

        if (httpResponse.data.length > 0) {
          $scope.dataFromSearch = httpResponse.data;

          $scope.showResults = true;
        }else{
                alert("No results");
              }


      })

  }

  $scope.submit_e = function (e) {
    
    if (e.keyCode == 13) {

      //dowork

      $http.get("/dowork/" + $scope.obj.search_field)
        .then(function (httpResponse) {

          if (httpResponse.data.length > 0) {
            $scope.dataFromSearch = httpResponse.data;

            $scope.showResults = true;
          }else{
                alert("No results");
              }


        })
    }



  }
});

