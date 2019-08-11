// Imports
import from_index from '../index.js';

let state;

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
  
          if ((data_Object.id) != null) {
              element.innerHTML += `
                  <p class="font_size_205vw color_white">id:${data_Object.id}</p>
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
              from_index.db_create_message(data_Object);
              from_index.db_create_activity(data_Object);
              from_index.db_create_interaction(data_Object);
              from_index.db_like('guides', data_Object.id);
              from_index.db_comment('guides', data_Object.id);
                alert('not roster');
                state.modal.pop.top.transform = !state.modal.pop.top.transform;

                history.pushState("", document.title, "/");
                window.history.pushState('', '', 'p/'+data_Object.id);
                //from_index.check_url();
                
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = `
                  ${data_Object.id}
                `;
                /*
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
              from_index.db_create_message(data_Object);
              from_index.db_create_activity(data_Object);
              from_index.db_create_interaction(data_Object);
              from_index.db_like('guides', data_Object.id);
              from_index.db_comment('guides', data_Object.id);
                alert('roster');
                state.modal.pop.top.transform = !state.modal.pop.top.transform;

                history.pushState("", document.title, "/");
                window.history.pushState('', '', data_Object.email);
                //from_index.check_url();
                
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
                document.getElementById('component_app_modal_element_pop_top_content').innerHTML = `
                  ${data_Object.email}
                `
                /*
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

let components = (x) => {
  
  let component = document.createElement('div');
  
  if (x == 'component_misc_xs') {
    component.setAttribute("id", 'id_component_misc_xs');
    component.classList = 'class_component_misc_xs';
    component.innerHTML = `

      <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">

        <div class="position_relative calc_2vw border_1vw_grey float_left">
          
          <div class="position_relative width_100 height_100 float_left">
                                                                                                 
                <div class="position_relative float_left width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                    
                  

                     <div class="position_relative calc_10vw_width padding_5vw">
             
                         <p class="font_size_10vw line_height_10vw">Full Height</p>
                         <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                     </div>


                </div>    

            </div>

        </div>

      </div>

      <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">

        <div class="position_relative calc_2vw border_1vw_grey float_left">
          
          <div class="position_relative calc_2vw padding_1vw float_left">
                                                                                                 
                <div class="position_relative float_left width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                    
                  

                     <div class="position_relative calc_10vw_width padding_5vw">
             
                         <p class="font_size_10vw line_height_10vw">Full Height</p>
                         <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                     </div>


                </div>    

            </div>

        </div>

      </div>

      <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">

        <div class="position_relative calc_2vw border_1vw_grey float_left">
          
          <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                 
                <div class="position_relative float_left width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                    
                  

                     <div class="position_relative calc_10vw_width padding_5vw">
             
                         <p class="font_size_10vw line_height_10vw">Full Height</p>
                         <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                     </div>


                </div>    

            </div>

        </div>

      </div>

      <div id="info_scroll_y" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">
         <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
             
             
                 <div class="position_relative float_left width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">


                     <div class="position_relative calc_10vw_width padding_5vw">
             
                         <p class="font_size_10vw line_height_10vw">Full Height</p>
                         <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                     </div>

                 </div>
         </div>
      </div>
            
    `
  };

  return component

};

let element_scene_gen = (x) => {

  state = from_index.handle_ReturnState();

  let inner_HTML;

  if (x == 'component_scroll_x') {
  inner_HTML = `
    <div id="component_scroll_x_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_scroll_x')}
    </div>`
  };

  if (x == 'component_tabs') {
  inner_HTML = `
    <div id="component_tabs_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_tabs')}
    </div>`
  };

  if (x == 'component_values') {
  inner_HTML = `
    <div id="component_values_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_values')}
    </div>`
  };

  if (x == 'loading_1') {
  inner_HTML = `
    <div id="component_loading_1_container" class="position_relative margin_auto width_100 height_100vh float_left">
      ${components('component_loading_1')}
    </div>`
  };

  if (x == 'loading_2') {
  inner_HTML = `
    <div id="component_loading_2_container" class="position_relative margin_auto width_100 height_100vh float_left">
      ${components('component_loading_2')}
    </div>`
  };

  if (x == 'component_info_1') {
  inner_HTML = `
    <div id="component_info_1_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_info_1')}
    </div>`
  };

  if (x == 'component_info_2') {
  inner_HTML = `
    <div id="component_info_2_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_info_2')}
    </div>`
  };

  if (x == 'component_info_3') {
  inner_HTML = `
    <div id="component_info_3_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_info_3')}
    </div>`
  };

  if (x == 'component_info_4') {
  inner_HTML = `
    <div id="component_info_4_container" class="position_relative margin_auto width_100 float_left">
      ${components('component_info_4')}
    </div>`
  };

  let id_String = `element_scene_gen`
  let class_String = `width_100 height_100 float_left position_relative`

  let element = document.createElement('div');
  element.setAttribute("id", id_String);
  element.classList = class_String;
  element.innerHTML = `${inner_HTML}`;

  return element

};

export default {
  element_scene_gen,
  components,
  Generate_new_li_post
};