
function repaintAllObjects(nizObjekata, edit_obj_main_div) {
    edit_obj_main_div.innerHTML = ''
    //console.log(edit_obj_main_div);
    nizObjekata.forEach(el => {

        let objectWrapperDiv = document.createElement('div');
        objectWrapperDiv.id = 'obj-wrapper';
        let p_name = document.createElement('p');
        p_name.className = 'obj-info-paragraph';
        p_name.innerText = el.name;
        ///
        let p_description = document.createElement('p');
        p_description.className = 'obj-info-paragraph';
        p_description.innerText = el.description;
        ///
        let p_adress = document.createElement('p');
        p_adress.className = 'obj-info-paragraph';
        p_adress.innerText = el.adress;
        ///
        let p_email = document.createElement('p');
        p_email.className = 'obj-info-paragraph';
        p_email.innerText = el.email;
        ///
        let p_hours = document.createElement('p');
        p_hours.className = 'obj-info-paragraph';
        p_hours.innerText = el.hours;
        ///
        let objImageWrapper = document.createElement('div');
        objImageWrapper.className = 'obj-image-wrapper';
        let img = document.createElement('img');
        img.className = 'featured-obj-image';
        img.src = el.feateured_image;
        img.setAttribute('style', 'width:100px ; height:100px');
        objImageWrapper.append(img);
        ///
        let buttonEditObj = document.createElement('button');
        buttonEditObj.className = 'buttonEditObj';
        buttonEditObj.innerText = 'Edit Object';
        ///// appending ...
        objectWrapperDiv.append(p_name, p_description, p_adress, p_email, p_hours, objImageWrapper, buttonEditObj);

        edit_obj_main_div.append(objectWrapperDiv);


    });


}

export default repaintAllObjects

//
// "id": 1,
// "name":"River",
// "description": "blablablablablalbal",
// "adress": "Rajka iz Kestena 24p",
// "email": "riverbusiness@gmail.com",
// "hours": "10-23",
// "feateured_image":'https://firebasestorage.googleapis.com/v0/b/myfirstproject-1b7bc.appspot.com/o/myPictures%2FThu%20Mar%2011%202021%2022%3A13%3A38%20GMT%2B0100%20(Central%20European%20Standard%20Time)%20-%20milan.jpg?alt=media&token=167bcca1-01b9-49ad-a6f9-e8dd941df070',
// "imagesArray":[1,1,1,1,1],
// "postsArray":[{},{},{}]
//