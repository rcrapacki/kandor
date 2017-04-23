/**
 * Thing model events
 */

'use strict';

import {EventEmitter} from 'events';
import Thing from './cluster.model';
var ClusterEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClusterEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Thing.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ClusterEvents.emit(event + ':' + doc._id, doc);
    ClusterEvents.emit(event, doc);
  }
}

export default ClusterEvents;
