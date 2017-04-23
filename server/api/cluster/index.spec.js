'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var clusterCtrlStub = {
  index: 'clusterCtrl.index',
  show: 'clusterCtrl.show',
  create: 'clusterCtrl.create',
  update: 'clusterCtrl.update',
  destroy: 'clusterCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var clusterIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './cluster.controller': clusterCtrlStub
});

describe('Cluster API Router:', function() {

  it('should return an express router instance', function() {
    clusterIndex.should.equal(routerStub);
  });

  describe('GET /api/clusters', function() {

    it('should route to cluster.controller.index', function() {
      routerStub.get
        .withArgs('/', 'clusterCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/clusters/:id', function() {

    it('should route to cluster.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'clusterCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/clusters', function() {

    it('should route to cluster.controller.create', function() {
      routerStub.post
        .withArgs('/', 'clusterCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/clusters/:id', function() {

    it('should route to cluster.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'clusterCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/clusters/:id', function() {

    it('should route to cluster.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'clusterCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/clusters/:id', function() {

    it('should route to cluster.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'clusterCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
