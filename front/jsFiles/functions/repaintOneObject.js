

function repaintOneObject(obj, edit_obj_main_div) {
    edit_obj_main_div.innerHTML = '';

    let objectWrapperDiv2 = document.createElement('div');
    objectWrapperDiv2.id = "object-wrapper2";
    ///
    //      objectWrapperDiv.append(p_name, p_description, p_adress, p_email, p_hours, objImageWrapper, buttonEditObj);
    let p_name = document.createElement('p');
    p_name.className = 'obj-info-paragraph2';
    p_name.innerText = obj.name;
    ///
    let p_description = document.createElement('p');
    p_description.className = 'obj-info-paragraph2';
    p_description.innerText = obj.description;
    ///
    let p_adress = document.createElement('p');
    p_adress.className = 'obj-info-paragraph2';
    p_adress.innerText = obj.adress;
    ///
    let p_email = document.createElement('p');
    p_email.className = 'obj-info-paragraph2';
    p_email.innerText = obj.email;
    ///
    let p_hours = document.createElement('p');
    p_hours.className = 'obj-info-paragraph2';
    p_hours.innerText = obj.hours;
    ///
    let pictures_wrapper_div = document.createElement('div');
    pictures_wrapper_div.className = 'obj-pictures-wrapper';
    console.log(obj);
    obj.imagesArray.forEach(element => {
        
        let img = document.createElement('img');
        img.className='obj-images';
        img.src=element.url;
     //   console.log(element.url);
     //   console.log(element);
        
        pictures_wrapper_div.appendChild(img);
        
    });

    //
    objectWrapperDiv2.append(p_name, p_description, p_adress, p_email, p_hours, pictures_wrapper_div);
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