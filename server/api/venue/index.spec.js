'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var venueCtrlStub = {
  index: 'venueCtrl.index',
  show: 'venueCtrl.show',
  create: 'venueCtrl.create',
  update: 'venueCtrl.update',
  destroy: 'venueCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var venueIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './venue.controller': venueCtrlStub
});

describe('Venue API Router:', function() {

  it('should return an express router instance', function() {
    venueIndex.should.equal(routerStub);
  });

  describe('GET /api/venues', function() {

    it('should route to venue.controller.index', function() {
      routerStub.get
        .withArgs('/', 'venueCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/venues/:id', function() {

    it('should route to venue.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'venueCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/venues', function() {

    it('should route to venue.controller.create', function() {
      routerStub.post
        .withArgs('/', 'venueCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/venues/:id', function() {

    it('should route to venue.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'venueCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/venues/:id', function() {

    it('should route to venue.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'venuerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/venues/:id', function() {

    it('should route to venue.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'venueCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
