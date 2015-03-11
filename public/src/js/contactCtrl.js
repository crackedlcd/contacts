angular.module('contactCtrl', [])

  .controller('contactCtrl', function($scope, $http, Contacts) {
    $scope.formData = {};
    $scope.selectedContact;

    Contacts.get()
      .success(function(data) {
        $scope.contacts = data;
        $scope.selectedContact = $scope.contacts[0];
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

    $scope.updateContact = function(id) {
      if(!$.isEmptyObject($scope.formData)) {
        Contacts.update(id)
          .success(function(data) {
            $scope.contacts = data;
          });
      }
    }

    $scope.deleteContact = function(id) {
      Contacts.delete(id)
        .success(function(data) {
          $scope.contacts = data;
        });
    };

    $scope.setSelectedContact = function(contact) {
      $scope.selectedContact = contact;
    }
  });