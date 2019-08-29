// Imports
import from_index from '../index.js';
import functions from './functions';

  let lead_scene = 0;
  let fold_scene = 0;
  let bg_scene = 0;
  let info_scene = 0;
  let footer_scene = 0;
  let outro_scene = 0;
  let route_scene = 0;
  let game_scene = 0;

let element_graphic_lead = () => {

  let element;

  if (lead_scene != 0) {
    element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    ``))
  };

  if (lead_scene == 0) {
    element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    `
    <div id="filler_full" class="width_100 height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
      <div class="position_relative margin_auto float_left">

        <h2 class="font_size_10vw line_height_10vw">Lead Scene ${lead_scene}:</h2>
        <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
        <p class="font_size_5vw line_height_5vw">(display & transform)</p>
        <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

      </div>
    </div>
    `))

    // lead (element_lead) events
    element.children[0].children[0].children[0].addEventListener("click", function(event) {
        
      // timeout
      setTimeout( () => {
          
          alert('element_graphic_lead');

      }, (0));

    });
  };

  return element

};

let element_graphic_fold = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
  `
  <div id="filler_full" class="width_100 height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
    <div class="position_relative margin_auto float_left">

      <h2 class="font_size_10vw line_height_10vw">Fold Scene ${fold_scene}:</h2>
      <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
      <p class="font_size_5vw line_height_5vw">(display & transform)</p>
      <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

    </div>
  </div>
  `))
};

let element_graphic_bg = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
  `
  <div id="filler_full" class="width_100 height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
    <div class="position_relative margin_auto float_left">

      <h2 class="font_size_10vw line_height_10vw">bg Scene ${bg_scene}:</h2>
      <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
      <p class="font_size_5vw line_height_5vw">(display & transform)</p>
      <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

    </div>
  </div>
  `))
};

let element_graphic_info = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
    `
    
      <div id="filler_full" class="width_100 height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
        <div class="position_relative margin_auto float_left">

          <h2 class="font_size_10vw line_height_10vw">Info Controls: ${info_scene}</h2>
          <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
          <p class="font_size_5vw line_height_5vw">(display & transform)</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

        </div>
      </div>

  `))
};

let element_graphic_footer = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
    `
    <div id="filler_full" class="width_100 height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
    
      <div class="position_relative margin_auto float_left">

        <h2 class="font_size_10vw line_height_10vw">Footer Controls: ${footer_scene}</h2>
        <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
        <p class="font_size_5vw line_height_5vw">(display & transform)</p>
        <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

      </div>

    </div>
  `))
};

let element_graphic_outro = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
  `
    <div id="filler_full" class="width_100 height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
      <div class="position_relative margin_auto float_left">

        <h2 class="font_size_10vw line_height_10vw">Outro Controls: ${outro_scene}</h2>
        <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
        <p class="font_size_5vw line_height_5vw">(display & transform)</p>
        <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

      </div>
    </div>

  `))
};

let element_graphic_game = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
  `
    <div id="filler_full" class="width_100 min_height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
      <div class="position_relative margin_auto float_left">

        <h2 class="font_size_10vw line_height_10vw">game Controls: ${game_scene}</h2>
        <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
        <p class="font_size_5vw line_height_5vw">(display & transform)</p>
        <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

      </div>
    </div>

  `))
};

let element_graphic_route = () => { return functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
  '',
  '',
  `
    <div id="filler_full" class="width_100 min_height_100vh position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
      <div class="position_relative margin_auto float_left">

        <h2 class="font_size_10vw line_height_10vw">Route Controls: ${route_scene}</h2>
        <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
        <p class="font_size_5vw line_height_5vw">(display & transform)</p>
        <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>

      </div>
    </div>

  `))
};

let element_root = () => {
    
  let data = `

    <div id="lead" class="">
    </div>

  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_lead = () => {
  
  let state = from_index.handle_return_state();
  let lead_controls;

  if(state.ux.orientation.is_Landscape || state.ux.orientation.is_Portrait){
    
    if(state.ux.platform.is_Mobile || state.ux.platform.is_Desktop) {
      lead_controls = `

        <div id="lead_scene">
          <div id="lead_scene_container" class="width_100 height_100vh overflow_hidden position_relative margin_auto float_left">
            <div id="lead_container" class="position_absolute top_0 left_0 margin_auto width_100 height_100">
            
            </div>      

            <div id="lead_scene_controls" class="position_absolute top_0 left_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box height_10vw">
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">^</p>
              </div>
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">?</p>
              </div>
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">*</p>
              </div>
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">=</p>
              </div>
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">|\~/</p>
              </div>
            </div>

            <div id="lead_scene_controls" class="position_absolute top_0 right_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box height_10vw">
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">#</p>
              </div>
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">X</p>
              </div>
              <div class="position_relative width_10vw height_10vw float_left text_align_left">
                <p class="position_relative font_size_10vw line_height_10vw">O</p>
              </div>
            </div>

            <div id="lead_scene_controls_last" class="position_absolute bottom_10vw left_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box width_5vw height_5vw">
              <div class="position_relative width_5vw height_5vw float_left text_align_left">
                <p class="position_relative font_size_5vw line_height_5vw"><</p>
              </div>
            </div>

            <div id="lead_scene_controls_next" class="position_absolute bottom_10vw right_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box width_5vw height_5vw">
              <div class="position_relative width_5vw height_5vw float_left text_align_left">
                <p class="position_relative font_size_5vw line_height_5vw">></p>
              </div>
            </div>
            <div id="lead_scene_controls_last" class="position_absolute bottom_5vw left_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box width_5vw height_5vw">
              <div class="position_relative width_5vw height_5vw float_left text_align_left">
                <p class="position_relative font_size_5vw line_height_5vw"><</p>
              </div>
            </div>

            <div id="lead_scene_controls_next" class="position_absolute bottom_5vw right_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box width_5vw height_5vw">
              <div class="position_relative width_5vw height_5vw float_left text_align_left">
                <p class="position_relative font_size_5vw line_height_5vw">></p>
              </div>
            </div>

            <div id="lead_scene_controls_last" class="position_absolute bottom_0 left_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box width_5vw height_5vw">
              <div class="position_relative width_5vw height_5vw float_left text_align_left">
                <p class="position_relative font_size_5vw line_height_5vw"><</p>
              </div>
            </div>

            <div id="lead_scene_controls_next" class="position_absolute bottom_0 right_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box width_5vw height_5vw">
              <div class="position_relative width_5vw height_5vw float_left text_align_left">
                <p class="position_relative font_size_5vw line_height_5vw">></p>
              </div>
            </div>

          </div>
        </div>
      `;
    };

  };

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
  lead_controls))

  // inital render
  setTimeout( () => {
      document.getElementById('lead_container').innerHTML = '';
      document.getElementById('lead_container').appendChild(element_graphic_lead());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('fold_container').innerHTML = '';
      document.getElementById('fold_container').appendChild(element_graphic_fold());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('bg_container').innerHTML = '';
      document.getElementById('bg_container').appendChild(element_graphic_bg());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('info_container').innerHTML = '';
      document.getElementById('info_container').appendChild(element_graphic_info());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('footer_container').innerHTML = '';
      document.getElementById('footer_container').appendChild(element_graphic_footer());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('outro_container').innerHTML = '';
      document.getElementById('outro_container').appendChild(element_graphic_outro());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('route_scene').innerHTML = '';
      document.getElementById('route_scene').appendChild(element_graphic_route());
  }, (0));

  // inital render
  setTimeout( () => {
      document.getElementById('game_scene').innerHTML = '';
      document.getElementById('game_scene').appendChild(element_graphic_game());
  }, (0));

  // lead (element_lead) events
  element.children[0].children[0].children[3].addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        //alert('lead_scene_controls_last');
        lead_scene -= 1;
        document.getElementById('lead_container').innerHTML = '';
        document.getElementById('lead_container').appendChild(element_graphic_lead());

    }, (0));

  });

  element.children[0].children[0].children[4].addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        //alert('lead_scene_controls_next');
        lead_scene += 1;
        document.getElementById('lead_container').innerHTML = '';
        document.getElementById('lead_container').appendChild(element_graphic_lead());

    }, (0));

  });

  // fold (element_fold) events
  element.children[0].children[0].children[5].addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        //alert('fold / fold_scene_controls_last');
        fold_scene -= 1;
        document.getElementById('fold_container').innerHTML = '';
        document.getElementById('fold_container').appendChild(element_graphic_fold());

    }, (0));

  });

  element.children[0].children[0].children[6].addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        //alert('fold / fold_scene_controls_next');
        fold_scene += 1;
        document.getElementById('fold_container').innerHTML = '';
        document.getElementById('fold_container').appendChild(element_graphic_fold());

    }, (0));

  });

  // bg (element_bg) events
  element.children[0].children[0].children[7].addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        //alert('bg / bg_scene_controls_last');
        bg_scene -= 1;
        document.getElementById('bg_container').innerHTML = '';
        document.getElementById('bg_container').appendChild(element_graphic_bg());

    }, (0));

  });

  element.children[0].children[0].children[8].addEventListener("click", function(event) {
      
    // timeout
    setTimeout( () => {

        //alert('bg / bg_scene_controls_next');
        bg_scene += 1;
        document.getElementById('bg_container').innerHTML = '';
        document.getElementById('bg_container').appendChild(element_graphic_bg());

    }, (0));

  });

  return element

};

let element_fold = (x) => {
    
  let data = `
  <div id="fold_scene">
    
    <div id="fold_container">
    </div>

    <div id="fold_section">      
      <div id="filler_flex" class="width_100 position_relative margin_auto float_left">        
        <div id="filler_flex" class="width_100 position_relative margin_auto float_left">
          <h2 class="font_size_10vw line_height_10vw">Status Controls:</h2>
          <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
          <p class="font_size_5vw line_height_5vw">(display & transform)</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
        </div>
        
        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Logged User</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
          <h1 class="width_100 float_left">validated_user_info</h1>
          <div id="validated_user_info" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">validated_user_info_followers</h1>
          <div id="validated_user_info_followers" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">validated_user_info_following</h1>
          <div id="validated_user_info_following" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">validated_user_info_recents</h1>
          <div id="validated_user_info_recents" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">validated_user_info_x_algo</h1>
          <div id="validated_user_info_x_algo" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">validated_user_info_y_algo</h1>
          <div id="validated_user_info_y_algo" class="width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Local User</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
          <h1 class="width_100 float_left">local_validated_user_info</h1>
          <div id="local_validated_user_info" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">local_validated_user_info_followers</h1>
          <div id="local_validated_user_info_followers" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">local_validated_user_info_following</h1>
          <div id="local_validated_user_info_following" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">local_validated_user_info_recents</h1>
          <div id="local_validated_user_info_recents" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">local_validated_user_info_x_algo</h1>
          <div id="local_validated_user_info_x_algo" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="width_100 float_left">local_validated_user_info_y_algo</h1>
          <div id="local_validated_user_info_y_algo" class="width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">WP Data</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
          <h1>wp_library_ol</h1>
          <div id="wp_library_ol" class="width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">WP sorts</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
            
          <h1>wp_filtered_library_by_title_ol</h1>
          <div id="wp_filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">WP C.r.u.d.</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
            
          <h1>wp_filtered_library_by_title_ol</h1>
          <div id="wp_filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">Firebase Data</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw width_100 position_relative margin_auto float_left">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">element_ol_firebase_all</h1>
          <div id="element_ol_firebase_all" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">firebase_library_ol</h1>
          <div id="firebase_library_ol" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library</h1>
          <div id="element_ol_firebase_sorted_library" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_time_up</h1>
          <div id="element_ol_firebase_sorted_library_time_up" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_time_down</h1>
          <div id="element_ol_firebase_sorted_library_time_down" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_title_up</h1>
          <div id="element_ol_firebase_sorted_library_title_up" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_title_down</h1>
          <div id="element_ol_firebase_sorted_library_title_down" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">Firebase C.R.U.D.</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
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

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Firebase Sorts</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          

          <h1 class="font_size_205vw line_height_205vw">filtered_library_by_title_ol (All)</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">filtered_library_child_library_by_title_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_child_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">filtered_library_child_roster_by_title_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_child_roster_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">filtered_library_child_messages_by_title_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_child_messages_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">filtered_library_child_stream_by_title_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_child_stream_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">filtered_library_child_interaction_by_title_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_child_interaction_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">filtered_library_child_activity_by_title_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="filtered_library_child_activity_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">sorted_library_by_time_up_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="sorted_library_by_time_up_ol" class="width_100 position_relative margin_auto float_left"></div>

          <h1 class="font_size_205vw line_height_205vw">sorted_library_by_time_down_ol</h1>
          <div class="font_size_2vw line_height_2vw" id="sorted_library_by_time_down_ol" class="width_100 position_relative margin_auto float_left"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Routing</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
          <div id="signal">site_routes: <div id="site_routes"></div></div>
          <a href="#">loading</a>
          <a href="#">home</a>
          <a href="#">latest</a>
          <a href="#">start game</a>
          <a href="#">learn game</a>
          <a href="#">planner</a>
          <a href="#">contact</a>
          <a href="#">welcome</a>

          <div id="signal">history_route: <div id="history_route"></div></div>
          <div id="signal">current_route: <div id="current_route"></div></div>
          <div id="signal">previous_route: <div id="previous_route"></div></div>
          <div id="signal">next_route: <div id="next_route"></div></div>

        </div>
        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Models</p>
          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_nav_top</h6>
          <div id="component_app_status_transform_nav_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_nav_left</h6>
          <div id="component_app_status_transform_nav_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_nav_bottom</h6>
          <div id="component_app_status_transform_nav_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_nav_right</h6>
          <div id="component_app_status_transform_nav_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_page_top</h6>
          <div id="component_app_status_transform_page_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_page_left</h6>
          <div id="component_app_status_transform_page_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_page_bottom</h6>
          <div id="component_app_status_transform_page_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_page_right</h6>
          <div id="component_app_status_transform_page_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_pop_top</h6>
          <div id="component_app_status_transform_pop_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_pop_left</h6>
          <div id="component_app_status_transform_pop_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_pop_bottom</h6>
          <div id="component_app_status_transform_pop_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_pop_right</h6>
          <div id="component_app_status_transform_pop_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gradient_top</h6>
          <div id="component_app_status_transform_gradient_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gradient_left</h6>
          <div id="component_app_status_transform_gradient_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gradient_bottom</h6>
          <div id="component_app_status_transform_gradient_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gradient_right</h6>
          <div id="component_app_status_transform_gradient_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_morph_top</h6>
          <div id="component_app_status_transform_morph_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_morph_left</h6>
          <div id="component_app_status_transform_morph_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_morph_bottom</h6>
          <div id="component_app_status_transform_morph_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_morph_right</h6>
          <div id="component_app_status_transform_morph_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_menu_top</h6>
          <div id="component_app_status_transform_menu_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_menu_left</h6>
          <div id="component_app_status_transform_menu_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_menu_bottom</h6>
          <div id="component_app_status_transform_menu_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_menu_right</h6>
          <div id="component_app_status_transform_menu_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>
        </div>
        
        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Shortcuts</p>
          <h6 class="font_size_1vw line_height_1vw">shortcut_after_load</h6>
          <div id="shortcut_after_load" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw">run: shortcut_after_load</div>

          <h6 class="font_size_1vw line_height_1vw">shortcut_handle_ui_reset</h6>
          <div id="shortcut_handle_ui_reset" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw">run: shortcut_handle_ui_reset</div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Gui</p>
          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_top</h6>
          <div id="component_app_status_transform_gui_top" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_top_left</h6>
          <div id="component_app_status_transform_gui_top_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_top_right</h6>
          <div id="component_app_status_transform_gui_top_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_left</h6>
          <div id="component_app_status_transform_gui_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_bottom</h6>
          <div id="component_app_status_transform_gui_bottom" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_bottom_left</h6>
          <div id="component_app_status_transform_gui_bottom_left" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_bottom_right</h6>
          <div id="component_app_status_transform_gui_bottom_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

          <h6 class="font_size_1vw line_height_1vw">component_app_status_transform_gui_right</h6>
          <div id="component_app_status_transform_gui_right" class="width_100 position_relative margin_auto float_left font_size_205vw line_height_205vw"></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">UX State</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
            
          <h1>Platform</h1>
          <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
          <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
          <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
          <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
          <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
          <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
          <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
          <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Events</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                
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

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Game State</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          
          <h2>Game Screens</h2>
          <div id="signal">level: <div id="level"></div></div>
          <div id="signal">pause: <div id="pause"></div></div>
          <div id="signal">timeout: <div id="timeout"></div></div>

          <h2>Game Stats</h2>
          <div id="signal">HP: <div id="HP"></div></div>
          <div id="signal">Mana: <div id="Mana"></div></div>
          <div id="signal">points: <div id="points"></div></div>
          
          <h2>Game Character</h2>
          <div id="signal">interaction_character_height: <div id="interaction_character_height"></div></div>
          <div id="signal">interaction_character_width: <div id="interaction_character_width"></div></div>
          <div id="signal">interaction_character_clientX: <div id="interaction_character_clientX"></div></div>
          <div id="signal">interaction_character_clientY: <div id="interaction_character_clientY"></div></div>
            
          <h2>Game VR</h2>
          <div id="signal">interaction_vr_clientX: <div id="state.interaction.vr.clientX"></div></div>
          <div id="signal">interaction_vr_clientY: <div id="state.interaction.vr.clientY"></div></div>
          
          <h2>Dice</h2>
          <div id="signal">dice_history: <div id="dice_history"></div></div>
                     
          <h2>snake</h2>
          <div id="signal">snake_history: <div id="snake_history"></div></div>

          <h2>bounce</h2>
          <div id="signal">bounce_history: <div id="bounce_history"></div></div>

          <h2>pen</h2>
          <div id="signal">pen_history: <div id="pen_history"></div></div>

          <h2>pencil</h2>
          <div id="signal">pencil_history: <div id="pencil_history"></div></div>

        </div>

        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Game Events</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
          

          <h2>scroll</h2>
        <div id="scroll_clientHeight"></div>
        <div id="scroll_clientWidth"></div>
        <div id="scroll_scrollHeight"></div>
        <div id="scroll_scrollWidth"></div>
        <div id="scroll_scrollTop"></div>
        <div id="scroll_scrollLeft"></div>

          <h2>mouse</h2>

          <div id="signal">mousemove while up: <div id="">pencil</div></div>
          <div id="signal">mousemove while down: <div id="">pen</div></div>
          <div id="signal">click to: <div id="">roll dice</div></div>

          <h2>keys</h2>

          <div id="signal">esc key: <div id="">ui reset</div></div>
          <div id="signal">q key: <div id="">model reset</div></div>

          <div id="signal">left arrow: <div id="">increases interaction_character_clientX</div></div>
          <div id="signal">right arrow: <div id="">decreases interaction_character_clientX</div></div>
          <div id="signal">up arrow: <div id="">increases interaction_character_clientY</div></div>
          <div id="signal">down arrow: <div id="">decreases interaction_character_clientY</div></div>
          
          <div id="signal">w key: <div id="">increases vr x-axis</div></div>
          <div id="signal">a key: <div id="">decreases vr x-axis</div></div>
          <div id="signal">s key: <div id="">increases vr y-axis</div></div>
          <div id="signal">d key: <div id="">decreases vr y-axis</div></div>
          
        </div>


        <div class="width_50 float_left">
          <p class="font_size_5vw line_height_5vw">Time</p>
          <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                
                  <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
          <div id="signal">current_duration: <div id="current_duration"></div></div>
          <div id="signal">time_onload: <div id="time_onload"></div></div>
          <div id="signal">time: <div id="time"></div></div>

        </div>

      </div>
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

        //alert('fold_section');
        //document.getElementById('lead_container').innerHTML = '';
        //document.getElementById('lead_container').appendChild(element_lead_scene_1('lead_container!!!'));

    }, (2000));

  });

  return element

};

let element_bg = () => {
    
  let data = `
    <div id="bg_scene">
      <div id="bg_container" class="width_100 height_100vh overflow_hidden position_absolute top_0 left_0 right_0 bottom_0 margin_auto">

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

        //alert('bg_container');
        //document.getElementById('lead_container').innerHTML = '';
        //document.getElementById('lead_container').appendChild(element_lead_scene_1('lead_container!!!'));

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
  element_root,
  element_lead,
  element_bg,
  element_div,
  element_fold
};