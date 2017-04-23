'use strict';

import mongoose from 'mongoose';

var NeighborhoodSchema = new mongoose.Schema({
  id: String,
  name: String,
  lat: Number,
  lng: Number
});

export default mongoose.model('neighborhood_polygons', NeighborhoodSchema);
