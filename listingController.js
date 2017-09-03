angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    this.detailedInfo = 123;
    $scope.listings = Listings;
    $scope.search_term = undefined;  // used for searches
    $scope.visible_listings = Listings;  // listings to be displayed (initially all listings)
    $scope.temp = {"code":undefined, "name":undefined, "coordinates": {"latitude": undefined, "longitude": undefined}, "address":undefined}
    $scope.addListing = function(new_entry) {
        var to_be_added = {"code":new_entry["code"], "name":new_entry["name"],
            "coordinates":{"latitude":new_entry["coordinates"]["latitude"], "longitude":new_entry["coordinates"]["longitude"]},
            "address":new_entry["address"]
        };  // this creates a copy the information is not passed by reference
        $scope.listings.push(to_be_added);
        $scope.listings.sort(function(a,b){return a['code'].toLowerCase() > b['code'].toLowerCase()});  // case-insensitive
    };
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
        $scope.visible_listings = $scope.listings.slice();  // update
    };
    $scope.filterListings = function(term) {
        var to_be_visible = [];
        for (i = 0; i < $scope.listings.length; i++){
            if (($scope.listings[i].name.search(term) != -1) || ($scope.listings[i].code.search(term) != -1)) {
                to_be_visible.push($scope.listings[i]);
            }
        }
        $scope.visible_listings = to_be_visible;
    };
  }
]);