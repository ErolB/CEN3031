/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose');
var Listing = require('./ListingSchema');
var config = require('./config.js');

// set up database connection
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: 'Library West'}, function(error, data){
        console.log(data);
  })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
  Listing.findOneAndRemove({code: 'CABL'}, function(error, data){});
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(error, data){
      console.log(data);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
