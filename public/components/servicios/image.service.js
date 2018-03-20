(()=>{
  'use strict';
  angular
  .module('correos')
  .service('imageService', imageService);
  
  imageService.$inject = ['$http'];
  
  function imageService($http){

    let cloudObj = {
      url:'',
      data:{
        upload_preset: '',
        tags:'Any',
        context:'photo=test'
      }
    };

    let public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }
  }
})();