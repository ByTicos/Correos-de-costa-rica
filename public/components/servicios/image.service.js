(()=>{
  'use strict';
  angular
  .module('correos')
  .service('imageService', imageService);
  
  imageService.$inject = ['$http'];
  
  function imageService($http){

    let cloudObj = {
      url:'https://api.cloudinary.com/v1_1/ldelvalleu/image/upload',
      data:{
        upload_preset: 'cnmu8ucf',
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