document.getElementById("button-log").addEventListener('click', function () {
    console.log("userPageMainJsFile >>>>>>>>>>>>>>>>>>>>  Log");
    var retrievedLogedUser = localStorage.getItem('logedUser');
    var retrievedAllUsers = localStorage.getItem('allUsers');
    var logedUser = JSON.parse(retrievedLogedUser);
    var usersArray = JSON.parse(retrievedAllUsers);

    console.log(logedUser);
    console.log("-------------------------------------------------------------------------------");
    console.log(usersArray);
})
document.getElementById("button-log-out").addEventListener('click', function () {
    localStorage.setItem('allUsers', '');
    localStorage.setItem('logedUser', '');
    window.location.href = "../../front/htmlFiles/index.html";
})

document.getElementById("button-add-object").addEventListener('click', function(){

    window.location.href = "../../front/htmlFiles/addObj.html";
})

document.getElementById("button-edit-object").addEventListener('click', function(){

    window.location.href = "../../front/htmlFiles/editObj.html";
})


