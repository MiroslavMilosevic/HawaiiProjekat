

function repaintOneObject(obj, edit_obj_main_div) {
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    let br3 = document.createElement('br');
    let br4 = document.createElement('br');
    let br5 = document.createElement('br');
    edit_obj_main_div.innerHTML = '';

    let objectWrapperDiv2 = document.createElement('div');
    objectWrapperDiv2.id = "object-wrapper2";
    ///
    //      objectWrapperDiv.append(p_name, p_description, p_adress, p_email, p_hours, objImageWrapper, buttonEditObj);
    let input_name = document.createElement('input');
    input_name.className = 'obj-info-input';
    input_name.value = obj.name;
    ///
    let input_description = document.createElement('input');
    input_description.className = 'obj-info-input';
    input_description.value = obj.description;
    ///
    let input_adress = document.createElement('input');
    input_adress.className = 'obj-info-input';
    input_adress.value = obj.adress;
    ///
    let input_email = document.createElement('input');
    input_email.className = 'obj-info-input';
    input_email.value = obj.email;
    ///
    let input_hours = document.createElement('input');
    input_hours.className = 'obj-info-input';
    input_hours.value = obj.hours;
    ///
    let pictures_wrapper_div = document.createElement('div');
    pictures_wrapper_div.className = 'obj-pictures-wrapper';
    console.log(obj);
    obj.imagesArray.forEach(element => {

        let img = document.createElement('img');
        img.className = 'obj-images';
        img.src = element.url;

        pictures_wrapper_div.appendChild(img);
    });
    let imgAdd = document.createElement('img');
    imgAdd.className = 'obj-images';
    imgAdd.src ='.././images/add.png';
     pictures_wrapper_div.appendChild(imgAdd)
    //
      let buttonEditEvents = document.createElement('button');
      buttonEditEvents.innerText='Edit events';
      buttonEditEvents.addEventListener('click', ()=>{
        window.location.href = "../../front/htmlFiles/editEvents.html";
      })

      let buttonCommit = document.createElement('button');
      buttonCommit.innerText='Commit changes';
      
    //
    objectWrapperDiv2.append(input_name, br1, input_description, br2, input_adress, br3, input_email, br4, input_hours, br5, pictures_wrapper_div,
        buttonCommit,buttonEditEvents);
    edit_obj_main_div.append(objectWrapperDiv2);
}

export default repaintOneObject;
//
// "id": 1,
// "name":"River",
// "description": "blablablablablalbal",
// "adress": "Rajka iz Kestena 24p",
// "email": "riverbusiness@gmail.com",
// "hours": "10-23",
// "feateured_image":'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
// "imagesArray":[
//    1,1,1,1,1
//],
// "postsArray":[{},{},{}]
//