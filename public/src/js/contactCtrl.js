angular.module('contactCtrl', [])

  .controller('mainCtrl', function($scope, $http, Contacts) {
    $scope.formData = {};

    Contacts.get()
      .success(function(data) {
        $scope.contacts = data;
      });

    $scope.createContact = function() {
      if (!$.isEmptyObject($scope.formData)) {
        Contacts.create($scope.formData)
          .success(function(data) {
            $scope.formData = {};
            $scope.contacts = data;
          });
      }
    };

    $scope.deleteContact = function(id) {
      Contacts.delete(id)
        .success(function(data) {
          $scope.contacts = data;
        });
    };
  });