let edit_obj_main_div = document.getElementById('edit-obj-main-div');
edit_obj_main_div.innerHTML=''
var logedUser={};
var usersArray=[];

console.log(123);
var retrievedLogedUser = localStorage.getItem('logedUser');
var retrievedAllUsers = localStorage.getItem('allUsers');
var retrievedAllObjects = localStorage.getItem('allObjects');
if(retrievedLogedUser != ''){
 logedUser = JSON.parse(retrievedLogedUser);  }
if(retrievedAllUsers != ''){
 usersArray = JSON.parse(retrievedAllUsers);  }
 if(retrievedAllObjects != ''){
    objectArray = JSON.parse(retrievedAllObjects);  }

console.log();

objectArray.forEach(el => {

let h3Name = document.createElement('h3');
h3Name.innerText=el.name+"   "+el.adress;

edit_obj_main_div.append(h3Name);


});