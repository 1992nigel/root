// Imports
import from_index from '../index.js';

let state = '';
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (id_String, class_String, data_Object) => {

        let state = from_index.Handle_return_state();

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

        let state = from_index.Handle_return_state();

    let element = document.createElement('li');


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
  
          if ((data_Object) != null) {
              element.innerHTML += `
                <button>like?</button>
                <button>dislike?</button>
                <button>rate 1- 3?</button>
                <button>re"tweet"?</button>
                <button>save</button>
              `;
          };

          // Objects: Firebase Library Items
          // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

          if (data_Object.child != 'roster') {

            element.addEventListener("click", function(event) {
                alert('not roster');
                document.getElementById('modal_gradient_bottom_container').innerHTML = '';
                document.getElementById('modal_gradient_bottom_container').innerHTML = `
                  ${data_Object.id}
                `;
                state.app.url = data_Object.id;
                state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
                history.pushState({}, null, `/p/`+state.app.url);
                //from_index.firebase_like_Listings(data_Object.id);
            });

          };

          if (data_Object.child == 'roster') {

            element.addEventListener("click", function(event) {
                alert('roster');
                document.getElementById('modal_gradient_bottom_container').innerHTML = '';
                document.getElementById('modal_gradient_bottom_container').innerHTML = `
                  ${data_Object.id}
                `
                state.app.url = data_Object.username;
                state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
                history.pushState({}, null, state.app.url);
                //from_index.firebase_like_Listings(data_Object.id);
            });

          };

          /*
          element.children[1].children[3].addEventListener("click", function(event) {
              from_index.deleteWhoListings(data_Object.child, data_Object.id);
          });
          */


    return element
};


// Handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

        let state = from_index.Handle_return_state();

    // Function Check # 1
    (function() {
        if (Ui_State == true) {
            function_one_if_state_true(id_tag);
        }

        if (Ui_State == false) {
            function_two_if_state_false(id_tag);
        }
    })();
};

let Toggle_classes_IF_State = (addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) => {

        let state = from_index.Handle_return_state();

    let MANIPULATED = document.getElementById(id_Tag);

    if (MANIPULATED != null) {

        if (Ui_State == true) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

                // remove item after buffer
                setTimeout(function() {

                    MANIPULATED.classList.remove(addThisClass_if_state_false);
                    MANIPULATED.classList.add(addThisClass_if_state_true);

                }, 0);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 0);

                return;
            };
        };

    };
};


let Toggle_display_and_opacity_on_with_no_delay = (id) => {

        let state = from_index.Handle_return_state();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 1);

            return;
        };
    };
};

let Toggle_display_and_opacity_off_with_delay = (id) => {

        let state = from_index.Handle_return_state();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 101);

            return;
        };
    };
};

// 1000 ms delay for bg items
let Toggle_stages_display_and_opacity_on_with_no_delay = (id) => {

        let state = from_index.Handle_return_state();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 1);

            return;
        };
    };
};

let Toggle_stages_display_and_opacity_off_with_delay = (id) => {

        let state = from_index.Handle_return_state();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 1000);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 1001);

            return;
        };
    };
};


export default {
  Generate_new_fragment,
  Generate_new_div,
  Generate_new_li_post,
  Toggle_functions_IF_State,
  Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay,
  Toggle_stages_display_and_opacity_on_with_no_delay,
  Toggle_stages_display_and_opacity_off_with_delay
}
