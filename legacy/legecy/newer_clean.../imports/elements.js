
import functions from './functions';

let element_root_divs = () => {
    
  let data = `

            <div id="lead_section" class="width_100 height_100vh overflow_hidden position_relative margin_auto float_left">
            </div>
            <div id="dummy_content" class="bg_white width_100 position_relative margin_auto float_left">
               <h1 class="sm_text">Our socials</h1>
               <h2 class="sm_text">Be sure to follow us everywhere.</h2>
               <h3 class="sm_text">Youtbe, Twitch, Instgram, Facebook, Twitter.</h3>
               <h4 class="sm_text">Social media accounts handle by nigel himself</h4>
               <h5 class="sm_text">New orginal media (Photos, videos and Graphics) everyday</h5>
               <h6 class="sm_text">Join out social team team by visting <a href="http://antenuh.com">antenuh.com</a></h6>
               <a class="tumblr-share-button" href="https://www.tumblr.com/share"></a>
               <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fnownigel.com&layout=button&size=large&appId=703372606507486&width=73&height=28" width="73" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
               <a class="twitter-share-button"
                  href="https://twitter.com/nownigel"
                  data-size="large">
               Tweet</a>
               <a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=nownigel.com"
                  data-size="large">
               Tweet</a>
               <a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=Hello%20world">
               Tweet</a>
               <a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=Hello%20world"
                  data-size="large">
               Tweet</a>
               <a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456">Reply</a>
               <a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456">Retweet</a>
               <a href="https://twitter.com/intent/like?tweet_id=463440424141459456">Like</a>
            </div>

             <div class="width_100 overflow_hidden position_relative margin_auto float_left">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- Responsive ad -->
                <ins class="adsbygoogle"
                   style="display:block"
                   data-ad-client="ca-pub-3909705375565088"
                   data-ad-slot="4471920918"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
                <script>
                   (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
             </div>

            <div id="info_content" class="bg_white width_100 position_relative margin_auto float_left">
               <h1 class="sm_text">Our Content</h1>
               <h2 class="sm_text">updated Videos, Photos, Graphics and social highlights. </h2>
               <h3 class="sm_text">From Youtube, Twitch, Instgram, Facebook, Twitter.</h3>
               <h4 class="sm_text">currated with help from you, nigel and our team</h4>
               <h5 class="sm_text">New orginal media (Photos, videos and Graphics) everyday</h5>
               <h6 class="sm_text">Join out social team team by visting <a href="http://antenuh.com">antenuh.com</a></h6>
            </div>

             <div class="width_100 overflow_hidden position_relative margin_auto float_left">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- Responsive ad -->
                <ins class="adsbygoogle"
                   style="display:block"
                   data-ad-client="ca-pub-3909705375565088"
                   data-ad-slot="4471920918"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
                <script>
                   (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
             </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};


let element_scene_1 = () => {
    
  let data = `

        <div class="position_absolute bottom_0 left_0 margin_auto gui_character_right_face width_1205 height_100vh"></div>
        <div class="position_absolute bottom_0 right_0 margin_auto gui_character_left_face width_1205 height_100vh"></div>

        <div class="position_absolute bottom_0 left_0 margin_auto gui_character_right_1 width_1205 height_100vh"></div>
        <div class="position_absolute bottom_0 right_0 margin_auto gui_character_left_1 width_1205 height_100vh"></div>

  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};


let element_animation_bg = () => {
    
  let data = `


      <div id="bg_section" class="width_100 height_100vh overflow_hidden position_fixed top_0 left_0 right_0 bottom_0 margin_auto z_index_-1">

      </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))


  element.addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        alert('bg_section');
        //document.getElementById('lead_scene_container').innerHTML = '';
        //document.getElementById('lead_scene_container').appendChild(element_lead_scene_1('lead_scene_container!!!'));

    }, (2000));

  });


  return element

};

let element_lead_scene = () => {
    
  let data = `
    <div id="lead_scene">
     
      <div id="lead_scene_container">

      </div>

      <div id="lead_scene_controls">
        <p>last</p>
        <p>next</p>
      </div>

    </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))


      element.addEventListener("click", function(event) {
          
        // timeout
        setTimeout( () => {

            alert('lead_scene_container');
            document.getElementById('lead_scene_container').innerHTML = '';
            document.getElementById('lead_scene_container').appendChild(element_lead_scene_1('lead_scene_container!!!'));

        }, (2000));

      });


  return element

};


let element_lead_scene_1 = (x) => {
    
  let data = `
  <div id="lead_scene_1">
     <section>
       <h1>Nownigel</h1> ${x}
       <h2>Nigel is an engineer, digital artist and content creator</h2>
       <h3>Last updated: 2019</h3>
       <h4>Youtube, Twitch, Twitter, Instagram, Facebook, Spotify</h4>
       <h5>Users & Creators</h5>
       <h6>all the content</h6>
       <p>Every <u>site feature</u> is voted on at the <b>end of <i>each</i> week</b></p>
    </section>

    <section>
      <h1>Search</h1>
      <input id="username_here_please" type="text" placeholder="username_here_please" class="width_100 float_left" />
      <button>search</button>
    </section>
    </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_fold = (x) => {
    
  let data = `
  <div id="fold_section">
    <h2>Status Controls:</h2>

    <h6>component_app_status_transform_nav_top</h6>
    <div id="component_app_status_transform_nav_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_nav_left</h6>
    <div id="component_app_status_transform_nav_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_nav_bottom</h6>
    <div id="component_app_status_transform_nav_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_nav_right</h6>
    <div id="component_app_status_transform_nav_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_page_top</h6>
    <div id="component_app_status_transform_page_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_page_left</h6>
    <div id="component_app_status_transform_page_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_page_bottom</h6>
    <div id="component_app_status_transform_page_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_page_right</h6>
    <div id="component_app_status_transform_page_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_pop_top</h6>
    <div id="component_app_status_transform_pop_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_pop_left</h6>
    <div id="component_app_status_transform_pop_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_pop_bottom</h6>
    <div id="component_app_status_transform_pop_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_pop_right</h6>
    <div id="component_app_status_transform_pop_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gradient_top</h6>
    <div id="component_app_status_transform_gradient_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gradient_left</h6>
    <div id="component_app_status_transform_gradient_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gradient_bottom</h6>
    <div id="component_app_status_transform_gradient_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gradient_right</h6>
    <div id="component_app_status_transform_gradient_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_morph_top</h6>
    <div id="component_app_status_transform_morph_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_morph_left</h6>
    <div id="component_app_status_transform_morph_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_morph_bottom</h6>
    <div id="component_app_status_transform_morph_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_morph_right</h6>
    <div id="component_app_status_transform_morph_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_menu_top</h6>
    <div id="component_app_status_transform_menu_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_menu_left</h6>
    <div id="component_app_status_transform_menu_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_menu_bottom</h6>
    <div id="component_app_status_transform_menu_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_menu_right</h6>
    <div id="component_app_status_transform_menu_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_top</h6>
    <div id="component_app_status_transform_gui_top" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_top_left</h6>
    <div id="component_app_status_transform_gui_top_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_top_right</h6>
    <div id="component_app_status_transform_gui_top_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_left</h6>
    <div id="component_app_status_transform_gui_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_bottom</h6>
    <div id="component_app_status_transform_gui_bottom" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_bottom_left</h6>
    <div id="component_app_status_transform_gui_bottom_left" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_bottom_right</h6>
    <div id="component_app_status_transform_gui_bottom_right" class="width_100 position_relative margin_auto float_left"></div>

    <h6>component_app_status_transform_gui_right</h6>
    <div id="component_app_status_transform_gui_right" class="width_100 position_relative margin_auto float_left"></div>


        <h1 class="width_100 float_left">validated_user_info</h1>
        <div id="validated_user_info" class="width_100 position_relative margin_auto float_left"></div>

        <h1 class="width_100 float_left">validated_user_info_followers</h1>
        <div id="validated_user_info_followers" class="width_100 position_relative margin_auto float_left"></div>

        <h1 class="width_100 float_left">validated_user_info_following</h1>
        <div id="validated_user_info_following" class="width_100 position_relative margin_auto float_left"></div>

        <h1 class="width_100 float_left">validated_user_info_recents</h1>
        <div id="validated_user_info_recents" class="width_100 position_relative margin_auto float_left"></div>

        <h1 class="width_100 float_left">validated_user_info_x_status</h1>
        <div id="validated_user_info_x_status" class="width_100 position_relative margin_auto float_left"></div>

        <h1 class="width_100 float_left">validated_user_info_y_status</h1>
        <div id="validated_user_info_y_status" class="width_100 position_relative margin_auto float_left"></div>

        <h2 class="width_100 float_left">Login</h2>
        <input id="element_login_username" type="text" placeholder="element_login_username" class="width_100 float_left" />
        <input id="element_login_password" type="text" placeholder="element_login_password" class="width_100 float_left" />
        <div id="element_login" class="width_100 float_left">login</div>
        <div id="element_logout" class="width_100 float_left">logout</div>

        <h2 class="width_100 float_left">Create User</h2>
        <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" />
        <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" />
        <div id="element_addRoster" class="width_100 float_left">element_addRoster</div>

        <h2 class="width_100 float_left">Create Post</h2>
        <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" />
        <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" />
        <div id="element_addListing" class="width_100 float_left">element_addListing</div>

        <h2 class="width_100 float_left">Activity(All|Followers|Following|You)</h2>

        <h2 class="width_100 float_left">Activity</h2>
        <input id="create_activity" type="text" placeholder="create_Activity" class="width_100 float_left" />

        <div id="element_addActivity" class="width_100 float_left">element_addActivity</div>

        <h2 class="width_100 float_left">Interaction</h2>
        <input id="create_interaction" type="text" placeholder="create_interaction" class="width_100 float_left" />

        <div id="element_addInteraction" class="width_100 float_left">element_addInteraction</div>

        <h2 class="width_100 float_left">Messages</h2>
        <input id="create_messages" type="text" placeholder="create_messages" class="width_100 float_left" />

        <div id="element_addMessages" class="width_100 float_left">element_addMessages</div>

        <h2 class="width_100 float_left">Stream</h2>
        <input id="create_stream" type="text" placeholder="create_stream" class="width_100 float_left" />

        <div id="element_addStream" class="width_100 float_left">element_addStream</div>


        <h1>filter by title</h1>
        <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />

        <h1>wp_library_ol</h1>
        <div id="wp_library_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>firebase_library_ol</h1>
        <div id="firebase_library_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_by_title_ol</h1>
        <div id="filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_child_library_by_title_ol</h1>
        <div id="filtered_library_child_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_child_roster_by_title_ol</h1>
        <div id="filtered_library_child_roster_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_child_messages_by_title_ol</h1>
        <div id="filtered_library_child_messages_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_child_stream_by_title_ol</h1>
        <div id="filtered_library_child_stream_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_child_interaction_by_title_ol</h1>
        <div id="filtered_library_child_interaction_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>filtered_library_child_activity_by_title_ol</h1>
        <div id="filtered_library_child_activity_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>sorted_library_by_time_up_ol</h1>
        <div id="sorted_library_by_time_up_ol" class="width_100 position_relative margin_auto float_left"></div>

        <h1>sorted_library_by_time_down_ol</h1>
        <div id="sorted_library_by_time_down_ol" class="width_100 position_relative margin_auto float_left"></div>

        <div id="signal">
            <h2 class="width_100 float_left">
                event_route:
            </h2>
            <div id="event_route"></div>
          </div>

        <h1>Platform</h1>
        <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
        <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
        <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
        <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
        <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
        <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
        <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
        <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

        <h1>Device</h1>
        <h2>Gravity</h2>
        <div id="signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
        <div id="signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
        <div id="signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

        <h2>VR</h2>
        <div id="signal">last_action: <div id="last_action"></div></div>

        <h2>Positions</h2>
        <div id="signal">event_alpha: <div id="event_alpha"></div></div>
        <div id="signal">event_beta: <div id="event_beta"></div></div>
        <div id="signal">event_gamma: <div id="event_gamma"></div></div>

        <h2>Orientation</h2>
        <div id="signal">event_portrait: <div id="event_portrait"></div></div>
        <div id="signal">event_landscape: <div id="event_landscape"></div></div>

        <h2>Orientations</h2>
        <div id="signal">event_orientation: <div id="event_orientation"></div></div>

        <h2>Events</h2>
        <h3>Scroll</h3>
        <div id="signal">history_scroll: <div id="history_scroll"></div></div>
        <h3>Mouse</h3>
        <div id="signal">current_mouse: <div id="current_mouse"></div></div>
        <div id="signal">history_mouse: <div id="history_mouse"></div></div>
        <div id="signal">history_mouse_enter: <div id="history_mouse_enter"></div></div>
        <div id="signal">history_mouse_leave: <div id="history_mouse_leave"></div></div>
        <div id="signal">history_mouse_up: <div id="history_mouse_up"></div></div>
        <div id="signal">history_mouse_down: <div id="history_mouse_down"></div></div>
        <div id="signal">history_mouse_up_move: <div id="history_mouse_up_move"></div></div>
        <div id="signal">history_mouse_down_move: <div id="history_mouse_down_move"></div></div>
        <div id="signal">history_mouse_drag_drop: <div id="history_mouse_drag_drop"></div></div>
        <div id="signal">history_key: <div id="history_key"></div></div>
        <div id="signal">history_key_up: <div id="history_key_up"></div></div>
        <div id="signal">history_touch: <div id="history_touch"></div></div>
        <div id="signal">history_touch_start: <div id="history_touch_start"></div></div>
        <div id="signal">history_touch_end: <div id="history_touch_end"></div></div>
        <div id="signal">history_touch_drag_drop: <div id="history_touch_drag_drop"></div></div>
        <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
        <div id="signal">current_duration: <div id="current_duration"></div></div>
        <div id="signal">time_onload: <div id="time_onload"></div></div>
        <div id="signal">time: <div id="time"></div></div>

        <h2>Game Character</h2>

        <div id="signal">interaction_character_clientX: <div id="interaction_character_clientX"></div></div>
        <div id="signal">interaction_character_clientY: <div id="interaction_character_clientY"></div></div>
        
        <h2>Game Dice</h2>

        <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
        <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
        
        <h2>Game Snake</h2>

        <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
        <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
        
        <h2>Game Bounce</h2>

        <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
        <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>

        <h2>Game Pen & Pencils</h2>

        <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
        <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
        
        <h2>Game Unlock/lock</h2>

        <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
        <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))


  element.addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        alert('fold_section');
        //document.getElementById('lead_scene_container').innerHTML = '';
        //document.getElementById('lead_scene_container').appendChild(element_lead_scene_1('lead_scene_container!!!'));

    }, (2000));

  });

  return element

};

let element_div = (x) => {
    
  let data = `
  <div id="element_div" class="position_relative width_100 float_left margin_auto">
      ` + x + `
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

export default {
  element_lead_scene,
  element_lead_scene_1,
  element_animation_bg,
  element_scene_1,  
  element_fold,
  element_div,
  element_root_divs
};