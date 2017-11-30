angular.module('inboxApp').controller('messages', messages);

function messages($http) {
  const vm = this;

  $http.get('https://warm-badlands-58623.herokuapp.com/api/messages')
  .then((api) => {
    vm.mail = api.data._embedded.messages;
  });
}
