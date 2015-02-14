describe("controller: HomeController ($httpBackend.expect().respond, vanilla jasmine, javascript)", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, $rootScope) {
  
    this.scope = $rootScope.$new();
  
    $controller('HomeController', {
      $scope: this.scope
    });
  }));



  describe("successfully logging in", function() {
    it("should title", function() {
    
      expect(this.scope.title).toBe('');
    });
  });
});
