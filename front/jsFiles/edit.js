import repaintAllObjects from './functions/repaintAllObjects.js'

let edit_obj_main_div = document.getElementById('edit-obj-main-div');

var logedUser = {};
var usersArray = [];
var objectArray = [];

console.log(123);
var retrievedLogedUser = localStorage.getItem('logedUser');
var retrievedAllUsers = localStorage.getItem('allUsers');
var retrievedAllObjects = localStorage.getItem('allObjects');
//console.log(retrievedAllObjects);
if (retrievedLogedUser != '') {
    logedUser = JSON.parse(retrievedLogedUser);
}
if (retrievedAllUsers != '') {
    usersArray = JSON.parse(retrievedAllUsers);
}
if (retrievedAllObjects != '') {
    objectArray = JSON.parse(retrievedAllObjects);
}
    /////
 //   console.log(edit_obj_main_div);
repaintAllObjects(objectArray, edit_obj_main_div);
