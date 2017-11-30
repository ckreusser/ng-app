angular.module('inboxApp').controller('toolcontroller', toolbarfun)

function toolbarfun() {
  const vm = this;

  vm.test = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  };

  vm.selectNone = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false;
    }
  };

  vm.totalSelected = function(mail) {
    var counter = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++;
      }
    }
    return counter;
  };

  vm.markRead = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if(mail[i].selected == true){
        mail[i].read = true;
      }
    }
  };

  vm.markUnread = function(mail) {
    for (var i = mail.length -1; i>=0; i--){
      if(mail[i].selected == true){
        mail[i].read = false;
      }
    }
  };

  vm.totalUnread = function(mail){
    var count = 0;
    for (var i = 0; i < mail.length; i++){
      if(mail[i].read == false){
        count++;
      }
    }
    return count;
  };

  vm.allLabels = [
    {
      "id": 1,
      "label": "dev"
    },
    {
      "id": 2,
      "label": "personal"
    },
    {
      "id": 3,
      "label": "gschool"
    }
  ];

  vm.frodo = function(selected) {
    console.log(selected);
  };
}
