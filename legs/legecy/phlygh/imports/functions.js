// Imports
import from_index from '../index.js';

let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (id_String, class_String, data_Object) => {

    let element = document.createElement('div');

    if (id_String != null) {
      element.setAttribute("id",id_String);
    };

    if (id_String != null) {
      if (class_String) {
          element.classList = class_String;
      };
    };
                        
    if ((data_Object) != null) {
        element.innerHTML = `
            ${data_Object}
        `;
    };

    return element
};

let Generate_new_li_post = (data_Object) => {

    let element = document.createElement('li');

        if (data_Object.child == 'library') {

          if (data_Object.title != null) {
            element.setAttribute("id",data_Object.title);
          };

          if (data_Object.title != null) {
            element.classList = data_Object.title;
          };
                              
          if ((data_Object) != null) {
              element.innerHTML = `
                  ${'child: ' + data_Object.child}
                  ${'title: ' + data_Object.title}
                  ${'time: ' + data_Object.time}
                  ${'likes: ' + data_Object.likes}
                  ${'views: ' + data_Object.views}
              `;
          };
        };

        if (data_Object.child == 'roster') {

          if (data_Object.username != null) {
            element.setAttribute("id",data_Object.username);
          };

          if (data_Object.username != null) {
            element.classList = data_Object.username;
          };
                              
          if ((data_Object) != null) {
              element.innerHTML = `
                  ${'child: ' + data_Object.child}
                  ${'username: ' + data_Object.username}
                  ${'password: ' + data_Object.password}
                  ${'time: ' + data_Object.time}
                  ${'likes: ' + data_Object.likes}
                  ${'views: ' + data_Object.views}
              `;
          };
        };

        if (data_Object.child == 'stream') {

          if (data_Object.username != null) {
            element.setAttribute("id",data_Object.username);
          };

          if (data_Object.username != null) {
            element.classList = data_Object.username;
          };
                              
          if ((data_Object) != null) {
              element.innerHTML = `
                  ${'<div>'}
                  ${'child: ' + data_Object.child}
                  ${'id: ' + data_Object.id}
                  ${'likes: ' + data_Object.likes}
                  ${'views: ' + data_Object.views}
                  ${'username: ' + data_Object.username}
                  ${'time: ' + data_Object.time}
                  ${'</div>'}
                  ${'<div>'}
                  ${'<div>like</div>'}
                  ${'<div>dislike</div>'}
                  ${'<div>view</div>'}
                  ${'</div>'}
              `;
          };


          // Objects: Firebase Library Items
          // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

          element.children[1].children[0].addEventListener("click", function(event) {
              from_index.firebase_like_Listings(data_Object.id);
          });

          element.children[1].children[1].addEventListener("click", function(event) {
              from_index.firebase_dislike_Listings(data_Object.id);
          });

          element.children[1].children[2].addEventListener("click", function(event) {
              from_index.firebase_view_Listings(data_Object.id);
          });

          /*
          element.children[1].children[3].addEventListener("click", function(event) {
              from_index.deleteWhoListings(data_Object.child, data_Object.id);
          });
          */

        };

    return element
};

export default {
Generate_new_fragment,
Generate_new_div,
Generate_new_li_post
}
