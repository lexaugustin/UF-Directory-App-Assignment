angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({
        "code": $scope.newListing.code,
        "name": $scope.newListing.name,
        "latitude": $scope.newListing.coordinates.latitude,
        "longitude": $scope.newListing.coordinates.longitude,
        "address": $scope.newListing.address
      });

      $scope.newListing.code = "";
      $scope.newListing.name = "";
      $scope.newListing.coordinates.latitude = "";
      $scope.newListing.coordinates.longitude = "";
      $scope.newListing.address = "";
    };


    $scope.deleteListing = function(index) {
      var removedListing = $scope.listings.indexOf(index);
      $scope.listings.splice(removedListing, 1);
    };

    $scope.showDetails = function(index) {
      $scope.selectedIndex = index;
    };
  }
]);
