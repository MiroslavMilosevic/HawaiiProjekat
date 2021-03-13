document.getElementById("button-log").addEventListener('click', function () {
    console.log("userPageMainJsFile >>>>>>>>>>>>>>>>>>>>  Log");
    var retrievedLogedUser = localStorage.getItem('logedUser');
    var retrievedAllUsers = localStorage.getItem('allUsers');
    var retrievedAllObjects = localStorage.getItem('allObjects');
    var logedUser = JSON.parse(retrievedLogedUser);
    var usersArray = JSON.parse(retrievedAllUsers);
    var objectArray = JSON.parse(retrievedAllObjects);

    console.log(logedUser);
    console.log("-------------------------------------------------------------------------------");
    console.log(usersArray);
    console.log("--------------------------------------------------------");
    console.log(objectArray);
})
document.getElementById("button-log-out").addEventListener('click', function () {
    localStorage.setItem('allUsers', '');
    localStorage.setItem('logedUser', '');
    localStorage.setItem('allObjects', '');

    window.location.href = "../../front/htmlFiles/index.html";
})

document.getElementById("button-add-object").addEventListener('click', function(){

    window.location.href = "../../front/htmlFiles/addObj.html";
})

document.getElementById("button-edit-object").addEventListener('click', function(){

    window.location.href = "../../front/htmlFiles/editObj.html";
})


