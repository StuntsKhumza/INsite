//directive

angular.module('searchApp', [])
  .directive('searchResultsPage', function () {

    return {
      restrict: 'E',
      templateUrl: "/js/search-result/search-page.html",
      controller: function ($scope, $http) {
        $scope.search_result_field = "";
        $scope.search_result_field = $scope.obj.search_field;

        $scope.search2 = function () {
          
          $http.get("/dowork/" + $scope.search_result_field)
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
    }

  })

  .directive('searchResult', function () {

    return {
      restrict: 'E',
      templateUrl: "/js/search-result/search.html",
      scope: {
        data: "="
      }
    }

  })