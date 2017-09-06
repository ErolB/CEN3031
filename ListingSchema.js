var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
    code: {type: String, required: true},
    name: {type: String, required: true},
    coordinates: {
        latitude: Number,
        longitude: Number
    },
    address: String,
    updated_at: Number,
    created_at: Number
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  this.updated_at = Date.now().valueOf() || this.updated_at;
  this.created_at = Date.now().valueOf() || this.created_at;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
