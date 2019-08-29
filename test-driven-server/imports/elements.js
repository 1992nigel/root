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
  
  if (x == 'main') {
    component.setAttribute("id", 'id_main');
    component.classList = 'class_main';
    component.innerHTML = `
      <div id="lead_nav" class="position_fixed top_0 left_0 right_0 width_100vw height_1205vw bg_white z_index_0 easing_01"></div>

      <div class="position_relative width_100 bg_white z_index_0">

          <h2>user_settings</h2>
          <div id="user_settings"></div>
          <h2>valid_user_details</h2>
          <div id="valid_user_details"></div>
          <h2>valid_user_posts</h2>
          <ul id="valid_user_posts"></ul>
          <h2>valid_user_follows</h2>
          <ul id="valid_user_follows"></ul>
          <h2>valid_user_followers</h2>
          <ul id="valid_user_followers"></ul>

          <div id="signup_form"></div>
          <div id="signin_form"></div>
          <div id="upload_form"></div>
          <div id="create_form"></div>
          <div id="edit_form"></div>
          <div id="signout_form"></div>

          <h2>local</h2>
          <p>info goes here</p>
          <h2>logged</h2>
          <p>info goes here</p>

          <h2>user</h2>
          <p>info goes here</p>
          <h2>post</h2>
          <p>info goes here</p>

          <h2>Interactions</h2>
          <h3>pen</h3>
          <h3>pencil</h3>
          <h3>dice</h3>
          <h3>random</h3>
          <h3>bullets</h3>
          <h3>snake</h3>
          <h3>parallax</h3>
          <h3>vr_mg</h3>
          <h3>element_ball</h3>
          <h3>bounce</h3>
          <h3>track_x</h3>
          <h3>track_y</h3>
          <h3>enemy_character</h3>
          <h3>playable_character</h3>
          <h3>player_1_character</h3>
          <h3>player_2_character</h3>

          <h2>Events</h2>
          <h3>time</h3>

          <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
          <div id="signal">current_duration: <div id="current_duration"></div></div>
          <div id="signal">time_onload: <div id="time_onload"></div></div>
          <div id="signal">time: <div id="time"></div></div></div>

          <h3>Device</h3>

          <div id="signal_scroll_clientHeight">scroll_clientHeight: <div id="scroll_clientHeight"></div></div>
          <div id="signal_scroll_clientWidth">scroll_clientWidth: <div id="scroll_clientWidth"></div></div>
          <div id="signal_scroll_scrollHeight">scroll_scrollHeight: <div id="scroll_scrollHeight"></div></div>
          <div id="signal_scroll_scrollWidth">scroll_scrollWidth: <div id="scroll_scrollWidth"></div></div>
          <div id="signal_scroll_scrollTop">scroll_scrollTop: <div id="scroll_scrollTop"></div></div>
          <div id="signal_scroll_scrollLeft">scroll_scrollLeft: <div id="scroll_scrollLeft"></div></div>

          <div id="signal_wheel_up">wheel_up: <div id="wheel_up"></div></div>
          <div id="signal_wheel_down">wheel_down: <div id="wheel_down"></div></div>
          <div id="signal_scrolling_started">scrolling_started: <div id="scrolling_started"></div></div>
          <div id="signal_inside_lead">inside_lead: <div id="inside_lead"></div></div>
          <div id="signal_past_lead">past_lead: <div id="past_lead"></div></div>
          <div id="signal_before_footer">before_footer: <div id="before_footer"></div></div>
          <div id="signal_inside_footer">inside_footer: <div id="inside_footer"></div></div>

          <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
          <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
          <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
          <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
          <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
          <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
          <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
          <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

          <h3>Gravity</h3>
          <div id="signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
          <div id="signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
          <div id="signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

          <h3>VR</h3>
          <div id="signal">history_last_action: <div id="history_last_action"></div></div>
          <div id="signal">last_action: <div id="last_action"></div></div>

          <h3>Positions</h3>
          <div id="signal">event_alpha: <div id="event_alpha"></div></div>
          <div id="signal">event_beta: <div id="event_beta"></div></div>
          <div id="signal">event_gamma: <div id="event_gamma"></div></div>

          <h3>Orientation</h3>
          <div id="signal">event_portrait: <div id="event_portrait"></div></div>
          <div id="signal">event_landscape: <div id="event_landscape"></div></div>

          <h3>Orientations</h3>
          <div id="signal">event_orientation_history: <div id="event_orientation_history"></div></div>
          <div id="signal">event_orientation: <div id="event_orientation"></div></div>

          <h3>Events</h3>
          <h4>Scroll</h4>
          <div id="signal"><b>current_scroll</b>: <div id="current_scroll"></div></div>
          <div id="signal">history_scroll: <div id="history_scroll"></div></div>
          <h4>Mouse</h4>
          <div id="signal"><b>current_mouse</b>: <div id="current_mouse"></div></div>
          <div id="signal">history_mouse: <div id="history_mouse"></div></div>
          <div id="signal">history_mouse_enter: <div id="history_mouse_enter"></div></div>
          <div id="signal">history_mouse_leave: <div id="history_mouse_leave"></div></div>
          <div id="signal">history_mouse_up: <div id="history_mouse_up"></div></div>
          <div id="signal">history_mouse_down: <div id="history_mouse_down"></div></div>
          <div id="signal">history_mouse_up_move: <div id="history_mouse_up_move"></div></div>
          <div id="signal">history_mouse_down_move: <div id="history_mouse_down_move"></div></div>
          <div id="signal">history_mouse_drag_drop: <div id="history_mouse_drag_drop"></div></div>

          <h4>Keys</h4>
          <div id="signal">keys_held: <div id="keys_held"></div></div>
          <div id="signal">history_key: <div id="history_key"></div></div>
          <div id="signal">history_key_up: <div id="history_key_up"></div></div>

          <h4>Touch</h4>
          <div id="signal"><b>current_touch</b>: <div id="current_touch"></div></div>
          <div id="signal">history_touch: <div id="history_touch"></div></div>
          <div id="signal">history_touch_start: <div id="history_touch_start"></div></div>
          <div id="signal">history_touch_end: <div id="history_touch_end"></div></div>
          <div id="signal">history_touch_drag_drop: <div id="history_touch_drag_drop"></div></div>
      </div>

      <div class="position_relative width_100 height_100vh bg_grey z_index_0"></div>
      <div class="position_relative width_100 height_100vh bg_white z_index_0"></div>
      <div class="position_relative width_100 height_100vh bg_grey z_index_0"></div>
      <div class="position_relative width_100 height_100vh bg_white z_index_0"></div>
      <div class="position_relative width_100 height_100vh bg_grey z_index_0"></div>
      
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