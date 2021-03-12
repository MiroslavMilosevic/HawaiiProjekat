import userData from './userData.js'
import objectsData from './objectsData.js'
//import ddd from '../../htmlFiles/html'

function loginFnk(username, password) {
let returnArray = [];
    if(username.length < 1 || password.length < 1){
        returnArray.push(false);
    }else {
        returnArray.push(true);
    }


   // console.log(userData);
    let counter = 0;
    userData.forEach(el => {

        if (el.name == username && el.password == password) {
            counter++;
            console.log(123);
            localStorage.setItem('allUsers', JSON.stringify(userData));
            localStorage.setItem('logedUser', JSON.stringify(el));
            localStorage.setItem('allObjects', JSON.stringify(objectsData));
            window.location.href = "../../front/htmlFiles/home.html";
       
        }
    })
    returnArray.unshift(counter == 1); 

    return returnArray;

}
export default loginFnk