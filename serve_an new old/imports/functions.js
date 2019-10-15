// Imports
import from_index from '../index.js';

let state = '';
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (id_String, class_String, data_Object) => {

    let state = from_index.handle_ReturnState();

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

let Generate_new_wp_li_post = (data_Object) => {

    let state = from_index.handle_ReturnState();

    let element = document.createElement('li');

      element.setAttribute("id",data_Object.title);

      element.classList = data_Object.title + ' bg_grey';

      var time_parts = data_Object.date_published.split('-');
      var times = data_Object.date_published.split('T');

      var time_year = time_parts[0]
      var time_month = time_parts[1]
      var time_date = (time_parts[2].split('T'))[0];
      var time_clock = times[1].split('+')[0];
      var time_clock_hours = time_clock.split(':')[0];
      var time_clock_minutes = time_clock.split(':')[1];
      var time_clock_seconds = time_clock.split(':')[2];
      var overall_time = time_year + time_month + time_date + time_clock_hours + time_clock_minutes + time_clock_seconds;

      element.innerHTML = `
          <a href="${data_Object.url}"><p class="font_size_5vw color_white">title:${data_Object.title}</p></a>

          <p class="font_size_205vw color_white">author.name:${data_Object.author.name}</p>
          <p class="font_size_205vw color_white">author.avatar:${data_Object.author.avatar}</p>
          <p class="font_size_205vw color_white">author.url:${data_Object.author.url}</p>
          <p class="font_size_205vw color_white">title:${data_Object.title}</p>
          <p class="font_size_205vw color_white">id:${data_Object.id}</p>
          <p class="font_size_205vw color_white">url:${data_Object.url}</p>
          <p class="font_size_205vw color_white">date_published:${data_Object.date_published}</p>
          <p class="font_size_205vw color_white">time_parts:${time_parts[0] + time_parts[1]}</p>
          <p class="font_size_205vw color_white">times:${times[0]}</p>
          <p class="font_size_205vw color_white">clock:${times[1]}</p>
          <p class="font_size_205vw color_white">time_year:${time_year}</p>
          <p class="font_size_205vw color_white">time_month:${time_month}</p>
          <p class="font_size_205vw color_white">time_date:${time_date}</p>
          <p class="font_size_205vw color_white">time_clock_hours:${time_clock_hours}</p>
          <p class="font_size_205vw color_white">time_clock_minutes:${time_clock_minutes}</p>
          <p class="font_size_205vw color_white">time_clock_seconds:${time_clock_seconds}</p>
          <p class="font_size_205vw color_white">overall_time:${overall_time}</p>
          <p class="font_size_205vw color_white">content_text:${data_Object.content_text}</p>
          <p class="font_size_205vw color_white">content_html:${data_Object.content_html}</p>
          <p class="font_size_205vw color_white">image:${data_Object.image}</p>
          <p class="font_size_205vw color_white">tags:${data_Object.tags[0]}</p>
          <p class="font_size_205vw color_white">summary:${data_Object.summary}</p>
      `

      element.addEventListener("click", function(event) {
          //alert('going to wp url: seo play');
      });


    return element
};

let Generate_new_li_post = (data_Object) => {

        let state = from_index.handle_ReturnState();

    let element = document.createElement('li');


          if (data_Object.title != null) {
            element.setAttribute("id",data_Object.title);
          };

          if (data_Object.title != null) {
            element.classList = data_Object.title + ' bg_grey';
          };
                              
          if ((data_Object) != null) {
              element.innerHTML = `
                  <p class="font_size_205vw color_white">child:${data_Object.child}</p>
                  <p class="font_size_205vw color_white">time:${data_Object.time}</p>
                  <p class="font_size_205vw color_white">title:${data_Object.title}</p>
                  <p class="font_size_205vw color_white">likes:${data_Object.likes}</p>
                  <p class="font_size_205vw color_white">views:${data_Object.views}</p>
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

                history.pushState("", document.title, "/");
                window.history.pushState('', '', 'p/'+data_Object.id);
                from_index.check_url();
                /*
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = `
                  ${data_Object.id}
                `;
                state.data.routes =+ data_Object.id;
                state.data.route = data_Object.id;
                state.data.url = data_Object.id;

                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                history.replaceState({}, null, state.data.url);
                //from_index.firebase_like_Listings(data_Object.id);
                */
            });

          };

          if (data_Object.child == 'roster') {

            element.addEventListener("click", function(event) {
                alert('roster');

                history.pushState("", document.title, "/");
                window.history.pushState('', '', data_Object.username);
                from_index.check_url();
                /*
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = `
                  ${data_Object.username}
                `
                state.data.routes =+ data_Object.username;
                state.data.route = data_Object.username;
                state.data.url = data_Object.username;
                
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                history.replaceState({}, null, state.data.url);
                //from_index.firebase_like_Listings(data_Object.id);
                */
            });

          };

          /*
          element.children[1].children[3].addEventListener("click", function(event) {
              from_index.deleteWhoListings(data_Object.child, data_Object.id);
          });
          */


    return element
};


// handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

        let state = from_index.handle_ReturnState();

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

        let state = from_index.handle_ReturnState();

    let MANIPULATED = document.getElementById(id_Tag);

    if (MANIPULATED != null) {

        if (Ui_State == true) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

                // remove item after buffer
                setTimeout(function() {

                    MANIPULATED.classList.remove(addThisClass_if_state_false);
                    MANIPULATED.classList.add(addThisClass_if_state_true);

                }, 10);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 10);

                return;
            };
        };

    };
};


let Toggle_display_and_opacity_on_with_no_delay = (id) => {

        let state = from_index.handle_ReturnState();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            return;
        };
    };
};

let Toggle_display_and_opacity_off_with_delay = (id) => {

        let state = from_index.handle_ReturnState();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display')) {

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 102);

            return;
        };
    };
};

// 1000 ms delay for bg items
let Toggle_stages_display_and_opacity_on_with_no_delay = (id) => {

        let state = from_index.handle_ReturnState();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            /* remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 1);
            */

            return;
        };
    };
};

let Toggle_stages_display_and_opacity_off_with_delay = (id) => {

        let state = from_index.handle_ReturnState();

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 1000);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 1000);

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
  Toggle_stages_display_and_opacity_off_with_delay,
  Generate_new_wp_li_post
}