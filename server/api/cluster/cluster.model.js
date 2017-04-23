'use strict';

import mongoose from 'mongoose';

var ClusterSchema = new mongoose.Schema({
  algorithm: String,
  cluster_id: String,
  insta_place_ids: [String]
});

export default mongoose.model('clusters', ClusterSchema);
