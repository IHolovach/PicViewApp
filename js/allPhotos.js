var app = angular.module('picViewApp', []);
app.controller('allPhotos', function allPhotos($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/photos').
        then(function(response) {
            $scope.allphotos = response.data;
	});
	$scope.getAlbum = function(albumId){
		$http.get('http://jsonplaceholder.typicode.com/album/'+albumId+'/photos/').
        then(function(response) {
			$scope.photos = 0;
            return $scope.albumPhoto = response.data;
        }); 
	};	
	$scope.getPhoto = function(id){
		$http.get('http://jsonplaceholder.typicode.com/photos/'+id).
        then(function(response) {
			$scope.allphotos = 0;
			$scope.albumPhoto = 0;
            return $scope.onephoto = response.data;
        }); 
	};
});

