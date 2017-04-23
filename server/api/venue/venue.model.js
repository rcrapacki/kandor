'use strict';

import mongoose from 'mongoose';

var VenueSchema = new mongoose.Schema({
  id: String,
  fb_id: String,
  insta_place: {
  	name: String,
  	latitude: Number,
  	longitude: Number,
  	id: String
  }
});

export default mongoose.model('insta_places', VenueSchema);
