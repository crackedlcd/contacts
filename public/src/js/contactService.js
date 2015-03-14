angular.module('contactService', [])

  .factory('Contacts', function($http) {
    return {
      get: function() {
        return $http.get('/api/contacts');
      },
      create: function(contactData) {
        return $http.post('/api/contacts', contactData);
      },
      update: function(id) {
        return $http.put('/api/contacts/' + id);
      },
      delete: function(id) {
        return $http.delete('/api/contacts/' + id);
      }
    };
  });