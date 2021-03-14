var retrievedCurrentObject = localStorage.getItem('currentObject');
if (retrievedCurrentObject.length > 5) {

    var currentObject = JSON.parse(retrievedCurrentObject);
    let page_main_div = document.getElementById('editEventsMainDiv');
    page_main_div.innerHTML = '';
       
    console.log(currentObject.postsArray);








}