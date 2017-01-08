var app = angular.module('picViewApp', []);

app.controller('allPhotos', function allPhotos($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/photos').
        then(function(response) {
            $scope.photos = response.data;
        });
});
