import repaintOneObject from './functions/repaintOneObject.js'
   var retrievedCurrentObject = localStorage.getItem('currentObject');
   if(retrievedCurrentObject.length > 5){
    var currentObject = JSON.parse(retrievedCurrentObject);
    let page_main_div = document.getElementById('edit-one-obj-main-div');
    repaintOneObject(currentObject, page_main_div);





   }

//    var logedUser = JSON.parse(retrievedLogedUser);

