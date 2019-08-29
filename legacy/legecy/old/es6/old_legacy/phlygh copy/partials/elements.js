import from_index from "../index.js";

let state = "";

let route_dashboard_not_logged = () => {
  let content = `
        <div id="dashboard_posts" class="position_relative width_100 height_100vh bg_green float_left">
          please sign in
        </div>
      `

      return content;
};


let route_dashboard = (data) => {
  let content = `
      <div id="route_dashboard" class="position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left">

        <div id="post_block_1" style="
        background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100vh position_relative float_left">
        </div>

        <div id="dashboard_posts" class="position_relative width_100 height_100vh bg_green float_left">
        </div>

        <b>your library</b><br>
        <div id="element_ol_firebase_user_library" class="position_relative width_100 float_left"></div>
      
        <b>subs library</b><br>
        <div id="element_ol_firebase_user_subs_library" class="position_relative width_100 float_left"></div>

      </div>
      `

      return content;
};

let element_scroll_y_events = (id, info) => {
  let component = `
    <div id="${id}" class="position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1">
      <div class="position_relative width_100 float_left">
        ${info}
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById(id).addEventListener(
      "scroll",
      event => {
        console.log(event);
        //alert('yup');

        // scrolling
        console.log(
          "event.srcElement.clientWidth: " + event.srcElement.clientWidth
        );
        console.log(
          "event.srcElement.clientHeight: " + event.srcElement.clientHeight
        );
        console.log(
          "event.srcElement.scrollLeft: " + event.srcElement.scrollLeft
        );
        console.log(
          "event.srcElement.scrollTop: " + event.srcElement.scrollTop
        );
        console.log(
          "event.srcElement.scrollWidth: " + event.srcElement.scrollWidth
        );
        console.log(
          "event.srcElement.scrollHeight: " + event.srcElement.scrollHeight
        );

        state = from_index.Handle_return_state();

        state.ui.route.clientHeight = event.srcElement.clientHeight;
        state.ui.route.clientWidth = event.srcElement.clientWidth;

        state.ui.route.scrollHeight = event.srcElement.scrollHeight;
        state.ui.route.scrollWidth = event.srcElement.scrollWidth;

        state.ui.route.scrollTop = event.srcElement.scrollTop;
        state.ui.route.scrollLeft = event.srcElement.scrollLeft;

        if (document.getElementById("scroll_clientHeight") != null) {
          document.getElementById("scroll_clientHeight").innerHTML =
            event.srcElement.clientHeight;
        }

        if (document.getElementById("scroll_clientWidth") != null) {
          document.getElementById("scroll_clientWidth").innerHTML =
            event.srcElement.clientWidth;
        }

        if (document.getElementById("scroll_scrollHeight") != null) {
          document.getElementById("scroll_scrollHeight").innerHTML =
            event.srcElement.scrollHeight;
        }

        if (document.getElementById("scroll_scrollWidth") != null) {
          document.getElementById("scroll_scrollWidth").innerHTML =
            event.srcElement.scrollWidth;
        }

        if (document.getElementById("scroll_scrollTop") != null) {
          document.getElementById("scroll_scrollTop").innerHTML =
            event.srcElement.scrollTop;
        }

        if (document.getElementById("scroll_scrollLeft") != null) {
          document.getElementById("scroll_scrollLeft").innerHTML =
            event.srcElement.scrollLeft;
        }

        // instances
        if (
          event.srcElement.scrollTop >
          state.ui.route.component_app_gui_scroll_y_position
        ) {
          console.log(
            "state.ui.route.component_app_gui_scroll_y_position increasing"
          );
          console.log("instance: wheel up");
        }

        if (
          event.srcElement.scrollTop <
          state.ui.route.component_app_gui_scroll_y_position
        ) {
          console.log(
            "state.ui.route.component_app_gui_scroll_y_position decreasing"
          );
          console.log("instance: wheel up");
        }

        if (event.srcElement.scrollTop === 0) {
          console.log("instance: wheel up");
        }

        if (
          event.srcElement.scrollTop > 1 &&
          !(
            event.srcElement.scrollHeight <
            event.srcElement.scrollTop + event.srcElement.offsetHeight
          )
        ) {
          console.log("instance: scrolling started");
        }

        if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
          console.log("instance: inside lead");
        }

        if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
          console.log("instance: past lead");
        }

        if (
          event.srcElement.scrollHeight - event.srcElement.clientHeight <
          event.srcElement.scrollTop + event.srcElement.offsetHeight
        ) {
          console.log("instance: 100vh before bottom met");
        }

        if (
          event.srcElement.scrollHeight - event.srcElement.scrollTop ===
          event.srcElement.clientHeight
        ) {
          alert(
            "component_app_modal_element_page_top_content: instance: footer met"
          );
        }

        state.ui.route.component_app_gui_scroll_y_position =
          event.srcElement.scrollTop;

        console.log("scroll");
        console.log(event);

        from_index.Handle_get_state_from_events();
      },
      false
    );
  }, 101);

  return component;
};

let menu_sub = `
  <div id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
  </div>
`;

let element_after_sign_in = `
  <div id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;

let element_after_sign_up = `
  <div id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;


let element_after_menu_about = `
  <div id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;

let element_after_logo_menu_right = `
  <div id="wp_component_meta" class="position_absolute left_100 top_0 float_left height_1205vh width_85vw hover_show">
  </div>
`;

let element_after_social_menu_right = `
  <div id="wp_component_meta" class="position_absolute left_100 top_0 float_left height_1205vh width_3705vw hover_show">
  </div>
`;

let element_after_logo_menu_bottom = `
  <div id="wp_component_meta" class="position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;


let element_after_dots = `
    <div id="wp_component_meta" class="position_absolute width_25vh top_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;

let element_after_vert_dots = `
    <div id="wp_component_meta" class="position_absolute width_25vh bottom_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;

let element_after_social_type = `
    <div id="wp_component_meta" class="position_absolute width_25vh bottom_100 left_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;

let element_after_menu = `
  <div id="wp_component_meta" class="position_absolute left_100 top_100 float_left hover_show">
  </div>
`;


let element_after_social = `
  <div id="wp_component_meta" class="position_absolute left_0 bottom_100 float_left hover_show">
  </div>
`;

let element_after_meta = `
  <div id="wp_component_meta" class="position_absolute right_0 bottom_100 float_left hover_show">
  </div>
`;

let element_after_search = `
  <div id="wp_component_meta" class="position_absolute left_0 top_100 float_left hover_show">
  </div>
`;

let element_after_create = `
  <div id="wp_component_meta" class="position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
  </div>
`;

let element_user_info = `
<div id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">

</div>
`;

let element_after_icon_back = `
  <div id="wp_component_meta" class="position_absolute left_100 top_0 float_left hover_show">
  </div>
`;

let element_after_menu_dashboard = `
  <div id="wp_component_meta" class="position_absolute right_100 top_0 float_left hover_show">
  </div>
`;


let element_after_extra = `
  <div id="wp_component_meta" class="position_absolute right_100 top_0 bottom_0 margin_auto float_left hover_show">
  </div>
`;


let element_after_back_up = `
  <div id="wp_component_meta" class="position_absolute right_100 top_0 float_left hover_show">
  </div>
`;

let anchor_menu_left = `
  <div id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <div class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh">

              <div class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    home
                  </div>
              </div>

           </div>
        </div>
    </div>

  </div>
`;

let anchor_menu_top = `
  <div id="wp_component_meta" class="position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <div class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh">

              <div class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    home
                  </div>
              </div>

           </div>
        </div>
    </div>

  </div>
`;

let anchor_menu_bottom = `
  <div id="wp_component_meta" class="position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <div class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh">

              <div class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    home
                  </div>
              </div>

           </div>
        </div>
    </div>

  </div>
`;

let anchor_menu_right = `
  <div id="wp_component_meta" class="position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <div class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh">

              <div class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    home
                  </div>
              </div>

           </div>
        </div>
    </div>

  </div>
`;


let element_after_button_menu_left = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Product
                  </span>
              </span>

           </div>
        </div>
     </span>

     <div class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let element_after_button_menu_center = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    home
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let element_after_button_menu_right = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_-100 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_yellow">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Product
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let folds = () => {
  let content = `
      <div id="folds" class="display_none opacity_0 transform_translate3d_top0 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
      
      </div>
      `

      return content;
};

let component_app_content_root = () => {
  let component = `

      <div id="section_1" class="position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

        <div id="cardboard_fold" class="easing_01 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
          
          <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto">

          </div>
          
          <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto">

          </div>
          
          <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto">

          </div>
          
          <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto">

          </div>

          <div id="left_outside" class="easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto">

          </div>
          
          <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

            ${folds()}

          </div>

          <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto">

          </div>
          
          <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto">

          </div>
          
          <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto">

          </div>
          
          <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto">

          </div>
        
        </div>

      </div>

      <div id="transition_1" class="position_relative width_100 height_100vh top_1vh gui_paint_top float_left display_flex_flow">
            
      </div>

      <div id="section_2" class="position_relative width_100 height_100vh bg_yellow margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align ">
        <div class="position_relative max_width width_100 height_100vh margin_auto float_left">
          
          
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <!-- Responsive Pink -->
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-3909705375565088"
               data-ad-slot="6572891219"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
          </script>

        </div>
      </div>

      <div id="section_3" class="position_relative width_100 height_100vh bg_yellow margin_auto float_left display_flex_flow">
              
          <div class="gui_logo position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left">
          </div>

          <div id="wp_component" class="position_absolute top_0 left_-75 width_100 height_100 gui_paint_right float_left display_flex_flow">
          </div>

          <div id="wp_component" class="position_absolute top_0 right_-75 width_100 height_100 gui_paint_left float_left display_flex_flow">
          </div>


            <div class="easing_01 position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left">
              
              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

              <div class="easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left">
              </div>

            </div>

      </div>

      <div id="section_4" class="position_relative width_100 height_auto bg_yellow margin_auto float_left display_flex_flow">

          <div class="position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

            <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="position_relative float_left">

                  <div class="position_relative float_left width_100"><b>Action #1</b></div><br>
                  <div class="position_relative float_left width_100">Match Loggin & Local</div><br>
                  
                </div>
                
            </div>

          </div>

          <div class="position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

            <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="position_relative float_left">

                  <div class="position_relative float_left width_100"><b>Event #1</b></div><br>
                  <div class="position_relative float_left width_100">Scrolled</div><br>
                  
                </div>
                
            </div>

          </div>

          <div class="position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

            <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="position_relative float_left">

                  <div class="position_relative float_left width_100"><b>Event #1</b></div><br>
                  <div class="position_relative float_left width_100">Scrolled Bottom Blog</div><br>
                  
                </div>
                
            </div>

          </div>

          <div class="position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

            <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="position_relative float_left">

                  <div class="position_relative float_left width_100"><b>Event #1</b></div><br>
                  <div class="position_relative float_left width_100">Timed Nav vanish</div><br>
                  
                </div>
                
            </div>

          </div>

          <div class="position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

            <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="position_relative float_left">

                  <div class="position_relative float_left width_100"><b>Event #1</b></div><br>
                  <div class="position_relative float_left width_100">loaded</div><br>
                  
                </div>
                
            </div>

          </div>

          <div class="position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

            <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="position_relative float_left">

                  <div class="position_relative float_left width_100"><b>Event #1</b></div><br>
                  <div class="position_relative float_left width_100">loaded + cursor_moved</div><br>
                  
                </div>
                
            </div>

          </div>

      </div>

      <div id="section_5" class="position_relative width_100 height_100vh bg_yellow margin_auto float_left">
      
      </div>

      <div id="section_6" class="position_relative width_100 height_100vh bg_yellow margin_auto float_left">
      
      </div>

      <div id="section_7" class="position_relative width_100 height_100vh bg_yellow margin_auto float_left">
      
      </div>

      <div id="transition_2" class="position_relative width_100 height_100vh gui_paint_bottom top_-1vh margin_auto float_left">
      
      </div>

      <div id="section_8" class="position_relative width_100 height_100vh margin_auto float_left">
      
      </div>

  `;

  return component;
};

let element_guis = () => {
    
    let element = ``;

    // desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

      element = `

        <div id="component_app_gui_toast_top_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_1205vh left_6025vw margin_auto z_index_8">

          <div id="create_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_create position_relative width_50 height_50 float_left">
                ${element_after_create}
              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_toast_top_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_1205vh right_6025vw margin_auto z_index_8">

          <div id="create_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_create position_relative width_50 height_50 float_left">
                ${element_after_create}
              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_toast_bottom_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed bottom_1205vh left_6025vw margin_auto z_index_8">

          <div id="create_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_create position_relative width_50 height_50 float_left">
                ${element_after_create}
              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_toast_bottom_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed bottom_1205vh right_6025vw margin_auto z_index_8">

          <div id="create_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_create position_relative width_50 height_50 float_left">
                ${element_after_create}
              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_top_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_0 left_0 margin_auto z_index_8">

            <div id="gui_route" class=" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div id="icon_menu" class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto width_6025vw height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left">
                
                <div id="icon_logo" class="gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left">
                  ${element_after_logo_menu_right}
                  ${element_after_logo_menu_bottom}
                </div>

              </div>

            </div>

            <div id="search_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div id="icon_search" class="gui_search position_relative width_50 height_50 float_left">
                  ${element_after_search}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div id="icon_back" class="gui_arrow_left position_relative width_75 height_50 float_left">
                  ${element_after_icon_back}
                </div>

              </div>

            </div>

        </div>

        <div id="component_app_gui_top_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_50vh_width top_0 left_0 right_0 margin_auto z_index_8">

          <div class="width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>


            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_top_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_8">
          
          <div id="user_related">


            <div id="icon_dashboard" class="width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="user_thumb" class="gui_avatar width_50 height_50 float_left position_relative float_left margin_auto"></div>
                ${element_after_menu_dashboard}
                ${element_user_info}
              </div>
            </div>

            <div id="gui_route" class="position_relative width_6025vw height_1205vh float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="icon_dots" class="gui_dots position_relative width_50 height_50 float_left">
                
                </div>
                ${element_after_dots}
              </div>
            </div>

          </div>

        </div>

        <div id="component_app_gui_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 right_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align">
            
            <div class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

                <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                  <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                      ${element_after_menu}
                    </div>

                  </div>

                </div>

              </div>

              <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

                <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                  <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                      ${element_after_menu}
                    </div>

                  </div>

                </div>

              </div>

              <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

                <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                  <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                      ${element_after_menu}
                    </div>

                  </div>

                </div>

              </div>

              <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

                <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                  <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                      ${element_after_menu}
                    </div>

                  </div>

                </div>

              </div>

              <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

                <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                  <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                      ${element_after_menu}
                    </div>

                  </div>

                </div>

              </div>

              <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

                <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                  <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                      ${element_after_menu}
                    </div>

                  </div>

                </div>

              </div>


            </div>

        </div>

        <div id="component_app_gui_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 left_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align">

          <div class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

            <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                    ${element_after_menu}
                  </div>

                </div>

              </div>

            </div>

            <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                    ${element_after_menu}
                  </div>

                </div>

              </div>

            </div>

            <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                    ${element_after_menu}
                  </div>

                </div>

              </div>

            </div>

            <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                    ${element_after_menu}
                  </div>

                </div>

              </div>

            </div>

            <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                    ${element_after_menu}
                  </div>

                </div>

              </div>

            </div>

            <div id="row" class="transform_translate3d_top0 float_left position_relative width_100 margin_auto">

              <div id="gui_route" class=" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                    ${element_after_menu}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_bottom_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 left_0 margin_auto z_index_8">
          
          <div id="social_route" class="width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div class="gui_about_type width_100 height_50 float_left position_relative float_left margin_auto"></div>
                ${element_after_social_type}
                ${element_after_social_menu_right}
            </div>
          </div>

          <div id="social_route" class="width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div class="gui_vert_colon width_50 height_50 float_left position_relative float_left margin_auto">${element_after_social}</div>
            </div>
          </div>

          <div id="social_route" class="width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div id="icon_twitter" class="gui_twitter width_50 height_50 float_left position_relative float_left margin_auto">${element_after_social}</div>
            </div>
          </div>

          <div id="social_route" class="width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div id="icon_twitch" class="gui_twitch width_50 height_50 float_left position_relative float_left margin_auto">${element_after_social}</div>
            </div>
          </div>

          <div id="social_route" class="width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div id="icon_facebook" class="gui_facebook width_50 height_50 float_left position_relative float_left margin_auto">${element_after_social}</div>
            </div>
          </div>

          <div id="social_route" class="width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div id="icon_youtube" class="gui_youtube width_50 height_50 float_left position_relative float_left margin_auto">${element_after_social}</div>
            </div>
          </div>

          <div id="social_route" class="width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div id="icon_instagram" class="gui_instagram width_50 height_50 float_left position_relative float_left margin_auto">${element_after_social}</div>
            </div>
          </div>

        </div>

        <div id="component_app_gui_bottom_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed calc_50vh_width bottom_0 left_0 right_0 margin_auto z_index_8">
          
          <div class="width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>


            <div id="gui_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

              <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                
                <div class="gui_navs_bars position_relative width_50 height_50 float_left">
                  ${element_after_menu}
                </div>

              </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_bottom_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_8">

          <div id="meta_route" class=" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div id="icon_up" class="gui_arrow_top position_relative width_75 height_50 float_left">
                
              </div>
              ${element_after_back_up}

            </div>

          </div>

          <div id="gui_route" class="width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7">
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              <div id="icon_vert_dots" class="gui_vert_dots width_50 height_50 float_left position_relative float_left margin_auto">
                
              </div>
              ${element_after_vert_dots}
                ${element_after_extra}

            </div>
          </div>

        </div>

      `;

    };

    // ipad
    if (/iPad/i.test(navigator.userAgent)) {

    };

    // iphone
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

    };

  return element;
};

let value_ui_controls = `


        <div class="position_relative width_100 float_left">
        <div class="position_relative calc_5vh margin_205vh float_left">

  <div class="width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh">events:</div>
            <div class="position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto">
            Usual Events
            </div>

            <div class="position_relative font_size_2vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto">
            time: <div id="time"></div>
            </div>


            <div class="position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto">
              64
            </div>

  <div class="width_100 float_left position_relative display opacity_1">ClientY: 
    <div id="component_app_status_state_events_mouse_game_bit_clientY" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">ClientX: 
    <div id="component_app_status_state_events_mouse_game_bit_clientX" class=" position_relative display opacity_1"></div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">mouse:</div>


            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_X: <div id="mouse_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_Y: <div id="mouse_client_Y"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_X: <div id="mouse_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_Y: <div id="mouse_client_Y"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_up_client_X: <div id="mouse_up_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_up_client_Y: <div id="mouse_up_client_Y"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_down_client_X: <div id="mouse_down_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_down_client_Y: <div id="mouse_down_client_Y"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_up: <div id="mouse_up"></div>
            </p>


            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            click_position: <div id="click_position"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            wheel_direction: <div id="wheel_direction"></div>
            </p>

  <div class="width_100 float_left position_relative display opacity_1">ClientX: 
  <div id="component_app_status_state_events_mouse_clientX" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">ClientY: 
  <div id="component_app_status_state_events_mouse_clientY" class=" position_relative display opacity_1"></div>
  </div>


  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">mouse down track:</div>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  mousedragDistanceXstart: <div id="mousedragDistanceXstart"></div>
  </p>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  mousedragDistanceYstart: <div id="mousedragDistanceYstart"></div>
  </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">mouse up track:</div>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  mousedragDistanceXend: <div id="mousedragDistanceXend"></div>
  </p>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  mousedragDistanceYend: <div id="mousedragDistanceYend"></div>
  </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">drag:</div>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  dragX: <div id="dragX"></div>
  </p>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  dragY: <div id="dragY"></div>
  </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">pen:</div>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  penX: <div id="penX"></div>
  </p>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  penY: <div id="penY"></div>
  </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">pencil:</div>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  pencilX: <div id="pencilX"></div>
  </p>

  <p class="position_relative width_100 display_flex_flow float_left margin_auto">
  pencilY: <div id="pencilY"></div>
  </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">drop:</div>
  <div class="width_100 float_left position_relative display opacity_1">ClientX: 
  <div id="component_app_status_state_events_mouse_drop_clientX" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">ClientY: 
  <div id="component_app_status_state_events_mouse_drop_clientY" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">drop_start:</div>
  <div class="width_100 float_left position_relative display opacity_1">ClientX: 
  <div id="component_app_status_state_events_mouse_drop_start_clientX" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">ClientY: 
  <div id="component_app_status_state_events_mouse_drop_start_clientY" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">drop_end:</div>
  <div class="width_100 float_left position_relative display opacity_1">ClientX: 
  <div id="component_app_status_state_events_mouse_drop_end_clientX" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">ClientY: 
  <div id="component_app_status_state_events_mouse_drop_end_clientY" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">ux:</div>
  <div class="width_100 float_left position_relative display opacity_1">dimensions:</div>
  <div class="width_100 float_left position_relative display opacity_1">width: 
  <div id="component_app_status_state_ux_dimensions_width" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">height: 
  <div id="component_app_status_state_ux_dimensions_height" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">browser:</div>
  <div class="width_100 float_left position_relative display opacity_1">width: 
  <div id="component_app_status_state_ux_browser_width" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">height: 
  <div id="component_app_status_state_ux_browser_height" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh">Timer:</div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            timer_mouse_leave: <div id="timer_mouse_leave"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            timer_key_up: <div id="timer_key_up"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            timer_mouse_up: <div id="timer_mouse_up"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            keys: <div id="key_keys"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            last key down: <div id="key_key_down"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            last key up: <div id="key_key_up"></div>
            </p>


  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">iPhone/iPad:</div>


  <div class="width_100 float_left position_relative display opacity_1">Oriontation.Absolute: 
  <div id="component_app_status_state_events_mouse_absolute" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">Oriontation.Alpha: 
  <div id="component_app_status_state_events_mouse_alpha" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">Oriontation.Beta: 
  <div id="component_app_status_state_events_mouse_beta" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">Oriontation.Gamma: 
  <div id="component_app_status_state_events_mouse_gamma" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">acceleration.x: 
  <div id="component_app_status_state_events_mouse_acceleration_x" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">acceleration.y: 
  <div id="component_app_status_state_events_mouse_acceleration_y" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">acceleration.z: 
  <div id="component_app_status_state_events_mouse_acceleration_z" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.x: 
  <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_x" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.y: 
  <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_y" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.z: 
  <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_z" class=" position_relative display opacity_1"></div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">rotationRate.Alpha: 
  <div id="component_app_status_state_events_mouse_rotationRate_alpha" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">rotationRate.Beta: 
  <div id="component_app_status_state_events_mouse_rotationRate_beta" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">rotationRate.Gamma: 
  <div id="component_app_status_state_events_mouse_rotationRate_gamma" class=" position_relative display opacity_1"></div>
  </div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            rotationAngle: <div id="rotationAngle"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            radiusX: <div id="radiusX"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            radiusY: <div id="radiusY"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceX: <div id="dragDistanceX"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceY: <div id="dragDistanceY"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceXStart: <div id="dragDistanceXStart"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceYStart: <div id="dragDistanceYStart"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceXEnd: <div id="dragDistanceXEnd"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceYEnd: <div id="dragDistanceYEnd"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_client_X: <div id="touch_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_client_Y: <div id="touch_client_Y"></div>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_page_X: <div id="touch_page_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_page_Y: <div id="touch_page_Y"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touches: <div id="touches"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_start_client_X: <div id="touch_start_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_start_client_Y: <div id="touch_start_client_Y"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_start_force: <div id="touch_start_force"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_end_client_X: <div id="touch_end_client_X"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_end_client_Y: <div id="touch_end_client_Y"></div>
            </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">iPhone Only:</div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_end_force: <div id="touch_end_force"></div>
            </p>


  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">iPhone/iPad VR:</div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            last_action: <div id="last_action"></div>
            </p>



  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">iPhone/iPad Oriontation:</div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_alpha: <div id="event_alpha"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_beta: <div id="event_beta"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_gamma: <div id="event_gamma"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div>
            </p>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">Component API:</div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_clientHeight (Container Height): <div id="scroll_clientHeight"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_clientWidth: <div id="scroll_clientWidth"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollHeight (Max Scroll Height): <div id="scroll_scrollHeight"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollWidth: <div id="scroll_scrollWidth"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollTop (Current Scroll): <div id="scroll_scrollTop"></div>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollLeft: <div id="scroll_scrollLeft"></div>
            </p>


        
  <div class="position_relative width_100 float_left ">
  UI state:
  </div>
  <div class="position_relative width_100 float_left">
  Route State (Onboarding, Form, Search, Interaction):
  </div>
  <div class="width_100 float_left position_relative display opacity_1">Colors:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">load:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Grid:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Depth:</div>
  <div class="width_100 float_left position_relative display opacity_1">90: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">270: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Colors:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">load:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Grid:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Depth:</div>
  <div class="width_100 float_left position_relative display opacity_1">90: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">270: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Setting:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">player_2: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Accent:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">player_2: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Effect:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">player_2: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Pieces:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">player_2: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Particles:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">player_2: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Interaction:</div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>
  <div class="width_100 float_left position_relative display opacity_1">player_1: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">player_2: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div id="" class="width_100 float_left position_relative display opacity_1">Characters:</div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">enemies: 
  <div id="" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Route:</div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Materials: 
  <div id="route" class=" position_relative display opacity_1">materials</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">Gui:</div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">logo: 
  <div id="component_app_status_display_gui_element_logo" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">arrows: 
  <div id="component_app_status_display_gui_element_arrows" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1">buttons: 
  <div id="component_app_status_display_gui_element_buttons" class=" position_relative display opacity_1">null</div>
  </div>
  <hr>
  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh">Modal:</div>


  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">pop</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pop_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pop_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pop_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pop_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pop_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pop_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pop_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pop_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pop_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pop_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pop_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pop_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">pip</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pip_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pip_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pip_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pip_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pip_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pip_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pip_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pip_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pip_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_pip_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_pip_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_pip_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>


  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">nav</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_nav_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_nav_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_nav_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_nav_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_nav_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_nav_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_nav_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_nav_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_nav_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_nav_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_nav_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_nav_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">page</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_page_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_page_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_page_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_page_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_page_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_page_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_page_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_page_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_page_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_page_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_page_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_page_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">menu</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_menu_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_menu_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_menu_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_menu_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_menu_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_menu_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_menu_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_menu_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_menu_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_menu_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_menu_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_menu_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">morph</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_morph_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_morph_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_morph_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_morph_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_morph_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_morph_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_morph_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_morph_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_morph_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_morph_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_morph_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_morph_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">corner</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_corner_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_corner_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_corner_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_corner_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_corner_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_corner_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_corner_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_corner_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_corner_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_corner_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_corner_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_corner_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">gradient</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_gradient_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_gradient_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_gradient_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_gradient_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_gradient_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_gradient_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_gradient_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_gradient_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_gradient_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_gradient_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_gradient_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_gradient_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>
  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">fade</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_fade_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_fade_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_fade_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_fade_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_fade_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_fade_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_fade_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_fade_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_fade_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_fade_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_fade_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_fade_right" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">overlay</div>

  <div class="width_100 float_left position_relative display opacity_1">top: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_overlay_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_overlay_top" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_overlay_top" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">bottom: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_overlay_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_overlay_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_overlay_bottom" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">left: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_overlay_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_overlay_left" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_overlay_left" class=" position_relative display opacity_1">null</div>
  </div>

  <hr>

  <div class="width_100 float_left position_relative display opacity_1">right: 
  </div>

  <div class="width_100 float_left position_relative display opacity_1">display: 
  <div id="component_app_status_display_overlay_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">opacity: 
  <div id="component_app_status_opacity_overlay_right" class=" position_relative display opacity_1">null</div>
  </div>

  <div class="width_100 float_left position_relative display opacity_1">transform: 
  <div id="component_app_status_transform_overlay_right" class=" position_relative display opacity_1">null</div>
  </div>

  </div>
  </div>
  `;




let element_anchor_left = `
      <div id="anchor-left" class="position_fixed bottom_0 top_0 left_90375vw margin_auto width_30125vw calc_25vh_height z_index_1">
                
        <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div id="nav_item" class="position_relative float_left z_index_1">
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>

            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

            </div>

          </div>

        </div>

        <div class="position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh">
          <div class="position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
          </div>
        </div>

      </div>
`


let element_anchor_right = `

      <div id="anchor-right" class="position_fixed bottom_0 top_0 right_90375vw margin_auto width_30125vw calc_25vh_height z_index_1">
        
        <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div id="nav_item" class="position_relative float_left z_index_1">
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>

            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_1vh margin_05vh">
              </div>
            </div>

          </div>

        </div>

        <div class="position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh">
          <div class="position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
          </div>
        </div>

      </div>
`


let element_anchor_top = () => {

    let return_this = '';

      // adaptive render!
      // desktop
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

        return_this = `

          <div id="anchor-top" class="position_fixed top_1205vh left_0 right_0 margin_auto height_90375vh width_100 z_index_1">
            

            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_90375vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="hover_hide position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_show position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">
                    
                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                </div>
                
                <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

            </div>

            <div class="position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100">
              </div>
            </div>

          </div>

        `;

      };

      // ipad
      if (/iPad/i.test(navigator.userAgent)) {

        return_this = `

          <div id="anchor-top" class="position_fixed top_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1">
            

            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_imac calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_vr calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_iphone calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_tv calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_ipad calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_watch calc_1vw">
                </div>

              </div>

            </div>

            <div class="position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100">
              </div>
            </div>

          </div>

        `;

      };

      // iphone
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

        return_this = `

          <div id="anchor-top" class="position_fixed top_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1">
            

            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_imac calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_vr calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_iphone calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_tv calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_ipad calc_1vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div class="position_relative float_left margin_auto height_100 width_30125vw">

                <div class="position_relative float_left margin_05vw gui_icon_watch calc_1vw">
                </div>

              </div>

            </div>

            <div class="position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100">
              </div>
            </div>

          </div>

        `;

      };

      return return_this;

    };


let element_anchor_bottom = () => {

    let return_this = '';

      // adaptive render!
      // desktop
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

        return_this = `

          <div id="anchor-bottom" class="position_fixed bottom_1205vh left_0 right_0 margin_auto height_90375vh width_100 z_index_1">
        

        <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_90375vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="hover_show position_relative float_left margin_025vw gui_icon_imac calc_05vw">
            </div>
            
            <div class="hover_hide position_relative float_left margin_025vw gui_logo_type calc_05vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
            </div>
            
            <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
            </div>
            
            <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
            </div>
            
            <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
            </div>
            
            <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>

          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
            </div>
            
            <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
            </div>

          </div>

        </div>

        <div class="position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100">
          <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100">
          </div>
        </div>

      </div>

        `;

      };

      // ipad
      if (/iPad/i.test(navigator.userAgent)) {

        return_this = `

          <div id="anchor-bottom" class="position_fixed bottom_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1">
        

        <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_imac calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_vr calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_iphone calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_tv calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_ipad calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>

          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_watch calc_1vw">
            </div>

          </div>

        </div>

        <div class="position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100">
          <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100">
          </div>
        </div>

      </div>

        `;

      };

      // iphone
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

        return_this = `

          <div id="anchor-bottom" class="position_fixed bottom_6025vh left_0 right_0 margin_auto height_6025vh width_100 z_index_1">
        

        <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_imac calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_vr calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_iphone calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_tv calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_ipad calc_1vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>

          <div class="position_relative float_left margin_auto height_100 width_30125vw">

            <div class="position_relative float_left margin_05vw gui_icon_watch calc_1vw">
            </div>

          </div>

        </div>

        <div class="position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100">
          <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_50 width_100">
          </div>
        </div>

      </div>

        `;

      };

      return return_this;

    };

let element_nav_bottom = () => {
  
    let return_this = '';

      // adaptive render!
      // desktop
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

        return_this = `
          <div id="nav-bottom" class="position_fixed bottom_0 left_0 right_0 margin_auto height_1205vh width_100 z_index_6">
            
            <div id="spacer" class="position_relative float_left margin_auto height_1205vh z_index_1">
              <div class="position_relative float_left margin_auto height_1205vh width_30125vw">
              </div>
              <div class="position_relative float_left margin_auto height_1205vh width_6025vw">
              </div>
            </div>


            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_1205vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">
            
                <div class="position_relative float_left margin_025vh gui_logo_type calc_05vh">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">
                
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                    </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                    </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                    </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                    </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                    </div>

              </div>

            </div>

            <div id="nav_item" class="position_relative float_right margin_auto height_1205vh z_index_1">
              
              <div id="spacer" class="position_relative float_left margin_auto height_1205vh width_6025vw">
              </div>

              <div id="spacer" class="position_relative float_left margin_auto height_1205vh width_30125vw">
              </div>

            </div>

            <div class="position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      // ipad
      if (/iPad/i.test(navigator.userAgent)) {

        return_this = `
          <div id="nav-bottom" class="position_fixed bottom_0 left_0 right_0 margin_auto height_6025vh width_100 z_index_6">
            
            <div id="nav_item" class="position_relative float_left margin_auto height_6025vh z_index_1">
              <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
              </div>
              <div class="position_relative float_left margin_auto gui_logo height_6025vh width_6025vw">
              </div>
            </div>


            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_1vw gui_icon_vr calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_1vw gui_icon_iphone calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_1vw gui_icon_tv calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>
              
              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_1vw gui_icon_ipad calc_2vw">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                </div>

              </div>

            </div>

            <div id="nav_item" class="position_relative float_right margin_auto height_6025vh z_index_1">
              
              <div class="position_relative float_left margin_auto gui_logo_type height_6025vh width_6025vw">
              </div>

              <div id="space" class="position_relative float_left margin_auto height_6025vh width_30125vw">
              </div>

            </div>

            <div class="position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      // iphone
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

        return_this = `
          <div id="nav-bottom" class="position_fixed bottom_0 left_0 right_0 margin_auto height_6025vh width_100 z_index_6">
        
        <div id="nav_item" class="position_relative float_left margin_auto height_6025vh z_index_1">
          <div class="position_relative float_left margin_auto height_6025vh width_30125vw">
          </div>
          <div class="position_relative float_left margin_auto gui_logo height_6025vh width_6025vw">
          </div>
        </div>


        <div id="nav_item" class="position_absolute bottom_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div class="position_relative float_left margin_auto height_100 width_6025vw">

            <div class="position_relative float_left margin_1vw gui_icon_imac calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_6025vw">

            <div class="position_relative float_left margin_1vw gui_icon_vr calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_6025vw">

            <div class="position_relative float_left margin_1vw gui_icon_iphone calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_6025vw">

            <div class="position_relative float_left margin_1vw gui_icon_tv calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>
          
          <div class="position_relative float_left margin_auto height_100 width_6025vw">

            <div class="position_relative float_left margin_1vw gui_icon_ipad calc_2vw">
            </div>

          </div>

          <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
            </div>
          </div>

          <div class="position_relative float_left margin_auto height_100 width_6025vw">

            <div class="position_relative float_left margin_1vw gui_icon_watch calc_2vw">
            </div>

          </div>

        </div>

        <div id="nav_item" class="position_relative float_right margin_auto height_6025vh z_index_1">
          
          <div class="position_relative float_left margin_auto gui_logo_type height_6025vh width_6025vw">
          </div>

          <div id="space" class="position_relative float_left margin_auto height_6025vh width_30125vw">
          </div>

        </div>

        <div class="position_absolute bottom_100 left_0 right_0 margin_auto height_1vh width_100">
          <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100">
          </div>
        </div>

      </div>
        `;

      };

      return return_this;

    };

let element_gui_top_left = () => {

  let return_this = '';

    // adaptive render!
    // desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

      return_this = `
        
          <div id="gui_top_left" class="position_fixed top_0 left_0 float_left margin_auto height_1205vh z_index_6">

            <div id="space" class="position_relative float_left margin_auto height_1205vh width_1vw">
            </div>

            <div id="icon_column" class="position_relative float_left margin_auto height_1205vh width_30125vw">

              <div id="button_menu" class="position_relative float_left margin_auto gui_icon_menu calc_1vw margin_05vw">

              </div>

            </div>

            <div id="space" class="position_relative float_left margin_auto height_1205vh width_1vw">
            </div>

            <div class="position_relative float_left margin_auto height_100 width_6025vw">

              <div class="position_relative float_left margin_025vh calc_05vh">

                  <div class="hover_show position_relative float_left margin_025vh gui_text_home calc_05vh">
                  </div>
                  
                  <div id="logo_column" class="hover_hide position_relative float_left margin_025vh gui_logo_type calc_05vh">
                  </div>

              </div>

            </div>

          </div>

      `;

    };

    // ipad
    if (/iPad/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

    // iphone
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

  return return_this;

};

let element_gui_top_right = () => {

  let return_this = '';

    // adaptive render!
    // desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

      return_this = `
        
          <div id="gui_top_right" class="position_fixed top_0 right_0 float_right margin_auto height_1205vh z_index_6">

            <div id="route_dashboard" class="position_relative float_left margin_auto avatar_icon_maisie height_1205vh width_6025vw">

              <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                  <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                    
                    <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                      <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                          <div id="element_user_sign_in" class="position_relative float_left margin_auto height_6025vw width_6025vw">

                            <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                            </div>

                          </div>

                          <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                            </div>
                          </div>

                          <div id="element_user_sign_out" class="position_relative float_left margin_auto height_6025vw width_6025vw">

                            <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                            </div>

                          </div>

                      </div>

                      <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white">

                        <p class="bg_yellow width_100 float_left">are you logged in?</p>
                        <div id="users_username"></div>
                        <p class="bg_yellow width_100 float_left">username?</p>
                        <input id="username" type="text" placeholder="username" class="width_100 bg_pink float_left" />
                        <p class="bg_yellow width_100 float_left">password?</p>
                        <input id="password" type="text" placeholder="password" class="width_100 bg_pink float_left" />

                      </div>

                      <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                          <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                            <div class="position_relative float_left margin_05vh gui_text_register calc_1vh">
                            </div>

                          </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div id="space" class="position_relative float_left margin_auto height_1205vh width_30125vw">
            </div>

          </div>
      `;

    };

    // ipad
    if (/iPad/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

    // iphone
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

  return return_this;

};

let element_gui_bottom_left = () => {

  let return_this = '';

    // adaptive render!
    // desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

      return_this = `
        
          <div id="gui_bottom_left" class="position_fixed bottom_0 left_0 float_left margin_auto height_1205vh z_index_6">

            <div id="space" class="position_relative float_left margin_auto height_1205vh width_1vw">
            </div>

            <div class="position_relative float_left margin_auto height_100 width_6025vw">

              <div class="position_relative float_left margin_025vh calc_05vh">

                  <div class="hover_show position_relative float_left margin_025vh gui_text_home calc_05vh">
                  </div>
                  
                  <div class="hover_hide position_relative float_left margin_025vh gui_logo_type calc_05vh">
                  </div>

              </div>

            </div>


            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_social_facebook calc_1vw margin_05vw">

              </div>

            </div>


            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_social_youtube calc_1vw margin_05vw">

              </div>

            </div>


            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_social_instagram calc_1vw margin_05vw">

              </div>

            </div>


            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_social_twitter calc_1vw margin_05vw">

              </div>

            </div>


            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_social_twitch calc_1vw margin_05vw">

              </div>

            </div>


            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_social_instagram calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_audio calc_1vw margin_05vw">

              </div>

            </div>
            
            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_audio_on calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_audio_off calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_dots calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_vert_dots calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_vert_colon calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_search calc_1vw margin_05vw">

              </div>

            </div>

            <div id="social" class="hover_show position_relative float_left margin_auto height_1205vh width_30125vw">

              <div class="position_relative float_left margin_auto gui_circle calc_1vw margin_05vw">

              </div>

            </div>

          </div>

      `;

    };

    // ipad
    if (/iPad/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

    // iphone
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

  return return_this;

};

let element_gui_bottom_right = () => {

  let return_this = '';

    // adaptive render!
    // desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

      return_this = `
        
          <div id="gui_bottom_right" class="position_fixed bottom_0 right_0 float_right margin_auto height_1205vh z_index_6">

            <div id="route_dashboard" class="position_relative float_left margin_auto avatar_icon_maisie height_1205vh width_6025vw">

              <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                  <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                    
                    <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                      <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                          <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                            <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                            </div>

                          </div>

                          <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                            <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                            </div>
                          </div>

                          <div id="element_user_sign_out" class="position_relative float_left margin_auto height_6025vw width_6025vw">

                            <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                            </div>

                          </div>

                      </div>

                      <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white">

                        <p class="bg_yellow width_100 float_left">are you logged in?</p>
                        <div id="users_username"></div>
                        <p class="bg_yellow width_100 float_left">username?</p>
                        <input id="username" type="text" placeholder="username" class="width_100 bg_pink float_left" />
                        <p class="bg_yellow width_100 float_left">password?</p>
                        <input id="password" type="text" placeholder="password" class="width_100 bg_pink float_left" />

                      </div>

                      <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                          <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                            <div class="position_relative float_left margin_05vh gui_text_register calc_1vh">
                            </div>

                          </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div id="space" class="position_relative float_left margin_auto height_1205vh width_30125vw">
            </div>

          </div>
      `;

    };

    // ipad
    if (/iPad/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

    // iphone
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

      return_this = `
      `;

    };

  return return_this;

};

let element_nav_top = () => {
  
    let return_this = '';

      // adaptive render!
      // desktop
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

        return_this = `
          <div id="nav-top" class="position_fixed top_0 left_0 right_0 margin_auto height_1205vh width_100 z_index_1">
            
            <div id="nav_item" class="position_relative float_left margin_auto height_1205vh z_index_1">

              <div class="position_relative float_left margin_auto height_1205vh width_1vw">
              </div>

              <div class="position_relative float_left margin_auto height_1205vh width_30125vw">

                <div class="position_relative float_left margin_auto calc_1vw margin_05vw">

                </div>

              </div>

              <div id="space" class="position_relative float_left margin_auto height_1205vh width_1vw">
              </div>

              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh calc_05vh">

                    <div class="hover_show position_relative float_left margin_025vh calc_05vh">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_025vh calc_05vh">
                    </div>

                </div>

              </div>

            </div>

            <div class="position_absolute bottom_0 left_0 right_0 margin_auto height_1205vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">

              <div id="route_blog" class="position_relative float_left margin_auto">

                <div class="hover_hide position_relative float_left margin_auto height_1205vh width_6025vw">

                  <div class="position_relative float_left margin_auto gui_text_blog calc_2vw margin_1vw">
                  </div>

                </div>
                
                <div class="hover_show position_relative float_left margin_auto height_100 width_6025vw">

                  <div class="position_relative float_left margin_025vh gui_logo_mark calc_05vh">
                  </div>

                </div>

              </div>

              <div id="nav-top_items">

                <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                  </div>
                </div>

                <div id="route_who" class="position_relative float_left margin_auto height_100 width_90375vw">

                  <div class="position_relative float_left margin_025vh gui_text_about calc_05vh">

                    <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                      <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                          
                          <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div id="route_what" class="position_relative float_left margin_auto height_100 width_90375vw">

                  <div class="position_relative float_left margin_025vh gui_text_services calc_05vh">

                    <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                      <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                          
                          <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                            

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
                
                <div id="route_when" class="position_relative float_left margin_auto height_100 width_90375vw">

                  <div class="position_relative float_left margin_025vh gui_text_library calc_05vh">


                    <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                      <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                          
                          <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                            <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                                <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                  </div>
                                </div>

                                <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                  <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                  </div>

                                </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
                
                <div id="route_where" class="position_relative float_left margin_auto height_100 width_90375vw">

                  <div class="position_relative float_left margin_025vh gui_text_skills calc_05vh">
                  </div>

                </div>

                <div id="route_why" class="position_relative float_left margin_auto height_100 width_90375vw">

                  <div class="position_relative float_left margin_025vh gui_text_abilities calc_05vh">
                  </div>

                </div>
                
                <div id="route_how" class="position_relative float_left margin_auto height_100 width_90375vw">

                  <div class="position_relative float_left margin_025vh gui_text_workshop calc_05vh">
                  </div>

                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div id="" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">

                  <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                              <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                                </div>

                              </div>

                              <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div id="nav_item" class="position_relative float_right margin_auto height_1205vh">

              <div class="position_relative float_left margin_auto height_1205vh width_6025vw">
              </div>

              <div class="position_relative float_left margin_auto height_1205vh width_30125vw">
              </div>

            </div>

            <div id="nav-top_items_hr" class="position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      // ipad
      if (/iPad/i.test(navigator.userAgent)) {

        return_this = `
          <div id="nav-top" class="position_fixed top_0 left_0 right_0 margin_auto height_1205vh width_100 z_index_6 bg_white">
            
            <div id="nav_item" class="position_relative float_left margin_auto height_1205vh z_index_1">

              <div class="position_relative float_left margin_auto height_1205vh width_1vw">
              </div>

              <div id="column" class="position_relative float_left margin_auto height_1205vh width_30125vw">

                <div id="button_menu" class="position_relative float_left margin_auto gui_icon_menu calc_1vw margin_05vw">

                </div>

              </div>

              <div class="position_relative float_left margin_auto height_1205vh width_1vw">
              </div>

              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div id="column" class="position_relative float_left margin_025vh gui_logo_type calc_05vh">

                </div>

                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                  <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                    <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white">
                      
                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                              </div>

                            </div>

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                              </div>

                            </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div id="column" class="hover_show position_absolute left_100 top_0 bottom_0 float_left margin_auto height_1205vh width_6025vw">

                  <div class="position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw">
                  </div>

                </div>

              </div>

            </div>

            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_1205vh calc_3705vh_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">


              <div id="route_home" class="position_relative float_left margin_auto">

                <div class="hover_hide position_relative float_left margin_auto height_1205vh width_6025vw">

                  <div class="position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw">
                  </div>

                </div>
                
                <div class="hover_show position_relative float_left margin_auto height_100 width_6025vw">

                  <div class="position_relative float_left margin_025vh gui_text_home calc_05vh">
                  </div>

                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div id="route_who" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_about calc_05vh">

                  <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div id="route_what" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_services calc_05vh">

                  <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
              
              <div id="route_when" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_library calc_05vh">


                  <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
              
              <div id="route_where" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_skills calc_05vh">
                </div>

              </div>

              
              <div id="route_why" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_abilities calc_05vh">
                </div>

              </div>
              
              <div id="route_how" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_workshop calc_05vh">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div id="" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">

                  <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                              <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                                </div>

                              </div>

                              <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div id="nav_item" class="position_relative float_right margin_auto height_1205vh z_index_1">

              <div id="route_dashboard" class="position_relative float_left margin_auto avatar_icon_maisie height_1205vh width_6025vw">

                <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                  <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                    <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                      
                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                              </div>

                            </div>

                            <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                              </div>
                            </div>

                            <div id="element_user_sign_out" class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                              </div>

                            </div>

                        </div>

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white">

                          <p class="bg_yellow width_100 float_left">are you logged in?</p>
                          <div id="users_username"></div>
                          <p class="bg_yellow width_100 float_left">username?</p>
                          <input id="username" type="text" placeholder="username" class="width_100 bg_pink float_left" />
                          <p class="bg_yellow width_100 float_left">password?</p>
                          <input id="password" type="text" placeholder="password" class="width_100 bg_pink float_left" />

                        </div>

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_register calc_1vh">
                              </div>

                            </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div id="space" class="position_relative float_left margin_auto height_1205vh width_30125vw">
              </div>

            </div>

            <div class="position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      // iphone
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

        return_this = `
          <div id="nav-top" class="position_fixed top_0 left_0 right_0 margin_auto height_6025vh width_100 z_index_6 bg_white">
            
            <div id="nav_item" class="position_relative float_left margin_auto height_6025vh z_index_1">

              <div class="position_relative float_left margin_auto height_6025vh width_1vw">
              </div>

              <div id="column" class="position_relative float_left margin_auto height_6025vh width_30125vw">

                <div id="button_menu" class="position_relative float_left margin_auto gui_icon_menu calc_1vw margin_05vw">

                </div>

              </div>

              <div class="position_relative float_left margin_auto height_6025vh width_1vw">
              </div>

              <div class="position_relative float_left margin_auto height_100 width_6025vw">

                <div id="column" class="position_relative float_left margin_025vh gui_logo_type calc_05vh">

                </div>

                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                  <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                    <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white">
                      
                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                              </div>

                            </div>

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                              </div>

                            </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div id="column" class="hover_show position_absolute left_100 top_0 bottom_0 float_left margin_auto height_6025vh width_6025vw">

                  <div class="position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw">
                  </div>

                </div>

              </div>

            </div>

            <div id="nav_item" class="position_absolute bottom_0 left_0 right_0 margin_auto height_6025vh calc_90375vw_width webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">


              <div id="route_home" class="position_relative float_left margin_auto">

                <div class="hover_hide position_relative float_left margin_auto height_6025vh width_6025vw">

                  <div class="position_relative float_left margin_auto gui_logo_mark calc_2vw margin_1vw">
                  </div>

                </div>
                
                <div class="hover_show position_relative float_left margin_auto height_100 width_6025vw">

                  <div class="position_relative float_left margin_025vh gui_text_home calc_05vh">
                  </div>

                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div id="route_who" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_auto height_100 width_6025vw">
                  
                      <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                      </div>
                      
                      <div class="hover_hide position_relative float_left margin_1vw gui_icon_imac calc_2vw">
                      </div>

                      <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                        <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                          <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                            
                            <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                              <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                    <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                    </div>

                                  </div>

                              </div>

                              <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                    <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                    </div>

                                  </div>

                              </div>

                              <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                    <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                    </div>

                                  </div>

                              </div>

                              <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                    <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                    </div>

                                  </div>

                                  <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                    <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                    </div>
                                  </div>

                                  <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                    <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                    </div>

                                  </div>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                </div>

              </div>

              <div id="route_what" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_services calc_05vh">

                  <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
              
              <div id="route_when" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_library calc_05vh">


                  <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                              <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                </div>
                              </div>

                              <div class="position_relative float_left margin_auto height_30125vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
              
              <div id="route_where" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_skills calc_05vh">
                </div>

              </div>

              
              <div id="route_why" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_abilities calc_05vh">
                </div>

              </div>
              
              <div id="route_how" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_025vh gui_text_workshop calc_05vh">
                </div>

              </div>

              <div id="hr" class="position_relative float_left margin_auto height_100 width_30125vw">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                </div>
              </div>

              <div id="" class="position_relative float_left margin_auto height_100 width_6025vw">

                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">

                  <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                        
                        <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                          <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw margin_205vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                              <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                                </div>

                              </div>

                              <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                </div>

                              </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div id="nav_item" class="position_relative float_right margin_auto height_6025vh z_index_1">

              <div id="route_dashboard" class="position_relative float_left margin_auto avatar_icon_maisie height_6025vh width_6025vw">

                <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                  <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                    <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                      
                      <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                              </div>

                            </div>

                            <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                              </div>
                            </div>

                            <div id="element_user_sign_out" class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                              </div>

                            </div>

                        </div>

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white">

                          <p class="bg_yellow width_100 float_left">are you logged in?</p>
                          <div id="users_username"></div>
                          <p class="bg_yellow width_100 float_left">username?</p>
                          <input id="username" type="text" placeholder="username" class="width_100 bg_pink float_left" />
                          <p class="bg_yellow width_100 float_left">password?</p>
                          <input id="password" type="text" placeholder="password" class="width_100 bg_pink float_left" />

                        </div>

                        <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                            <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                              <div class="position_relative float_left margin_05vh gui_text_register calc_1vh">
                              </div>

                            </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div id="space" class="position_relative float_left margin_auto height_6025vh width_30125vw">
              </div>

            </div>

            <div class="position_absolute top_100 left_0 right_0 margin_auto height_1vh width_100">
              <div class="position_absolute bottom_0 left_0 right_0 margin_auto gui_hr_hori height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

    return return_this;

  };

let element_nav_left = () => {

    let return_this = '';
      
      // adaptive render!
      // desktop
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

        return_this = `
          <div id="nav-left" class="position_fixed bottom_0 top_0 left_0 margin_auto width_6025vw calc_25vh_height z_index_6">

            <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div id="nav_item" class="position_relative float_left z_index_1">
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_icon_watch calc_2vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_logo_type calc_05vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>

                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

              </div>

            </div>

            <div class="position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh">
              <div class="position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      // ipad
      if (/iPad/i.test(navigator.userAgent)) {

        return_this = `
          <div id="nav-left" class="position_fixed bottom_0 top_0 left_0 margin_auto width_6025vw calc_25vh_height z_index_6">

            <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div id="nav_item" class="position_relative float_left z_index_1">
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_icon_watch calc_2vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_logo_type calc_05vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>

                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

              </div>

            </div>

            <div class="position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh">
              <div class="position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      // iphone
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

        return_this = `
          <div id="nav-left" class="position_fixed bottom_0 top_0 left_0 margin_auto width_6025vw calc_25vh_height z_index_6">

            <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
              
              <div id="nav_item" class="position_relative float_left z_index_1">
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_icon_watch calc_2vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_logo_type calc_05vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>

                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

                <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
                  <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
                  </div>
                </div>
                
                <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
                  
                    <div class="hover_show position_relative float_left margin_025vw gui_logo_type calc_05vw">
                    </div>
                    
                    <div class="hover_hide position_relative float_left margin_1vw gui_icon_watch calc_2vw">
                    </div>

                </div>

              </div>

            </div>

            <div class="position_absolute top_0 bottom_0 left_100 margin_auto height_100 width_1vh">
              <div class="position_absolute bottom_0 left_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
              </div>
            </div>

          </div>
        `;

      };

      return return_this;

    };
;

let element_nav_right = () => {

    let return_this = '';
      
      // adaptive render!
      // desktop
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

        return_this = `

        <div id="nav-right" class="position_fixed bottom_0 top_0 right_0 margin_auto width_6025vw calc_25vh_height z_index_6">
        
        <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div id="nav_item" class="position_relative float_left z_index_1">
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>

            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

          </div>

        </div>

        <div class="position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh">
          <div class="position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
          </div>
        </div>
      </div>

        `;

      };

      // ipad
      if (/iPad/i.test(navigator.userAgent)) {

        return_this = `

        <div id="nav-right" class="position_fixed bottom_0 top_0 right_0 margin_auto width_6025vw calc_25vh_height z_index_6">
        
        <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div id="nav_item" class="position_relative float_left z_index_1">
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>

            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

          </div>

        </div>

        <div class="position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh">
          <div class="position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
          </div>
        </div>
      </div>

        `;

      };

      // iphone
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

        return_this = `

        <div id="nav-right" class="position_fixed bottom_0 top_0 right_0 margin_auto width_6025vw calc_25vh_height z_index_6">
        
        <div id="nav_item" class="position_absolute bottom_0 top_0 right_0 margin_auto width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box z_index_1">
          
          <div id="nav_item" class="position_relative float_left z_index_1">
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>

            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

            <div id="hr" class="position_relative float_left margin_auto height_1vh width_100">
              <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_hori_1 width_100 height_100">
              </div>
            </div>
            
            <div class="position_relative float_left margin_auto height_90375vh width_6025vw">
              <div class="position_relative float_left margin_auto gui_icon_imac calc_5vh margin_205vh">
              </div>
            </div>

          </div>

        </div>

        <div class="position_absolute top_0 bottom_0 right_100 margin_auto height_100 width_1vh">
          <div class="position_absolute bottom_0 right_100 right_0 margin_auto gui_hr_vert_1 height_100 width_100">
          </div>
        </div>
      </div>

        `;

      };

      return return_this;
      
    };

let element_page_top = `
    <div id="component_app_modal_element_page_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_5 margin_auto bg_white">
      <div id="component_app_modal_element_page_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto">
        
      </div>

    </div>
    `;

let element_page_left = `
    <div id="component_app_modal_element_page_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_1 margin_auto">
      <div id="component_app_modal_element_page_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_1 margin_auto">
      
      </div>
    </div>
    `;

let element_page_bottom = `
    <div id="component_app_modal_element_page_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_5">
      <div id="component_app_modal_element_page_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto"> 

                    <div id="fold" class="position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left">

                        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                        
                            <div id="x-1" class="width_100vw height_100vh float_left position_relative z_index_1">
                                    
                                <div class="position_absolute height_100vh width_100 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">
                                                                        
                                      <div id="page_right_nav_filler" class="width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative">
                                      </div>

                                      <div id="blog_controls" class="position_relative width_100 z_index_1 float_left bg_purple">

                                                <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">

                                                  <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">

                                                <p class="bg_yellow width_100 float_left">less_posts_value?</p>
                                                <button id="less_posts" class="width_100 float_left">less_posts</button>
                                                <div id="less_posts_value"></div>
                                                <p class="bg_yellow width_100 float_left">more_posts_value?</p>
                                                <button id="more_posts" class="width_100 float_left">more_posts</button>
                                                <div id="more_posts_value"></div>

                                                <p class="bg_yellow width_100 float_left">sort by type?</p>
                                                <input id="element_input_sorting_type" type="text" placeholder="element_input_sorting_type" class="width_100 bg_pink float_left" />
                                                <p class="bg_yellow width_100 float_left">blog style?</p>
                                                <input id="element_input_style" type="text" placeholder="element_input_style" class="width_100 bg_pink float_left" />

                                                <p class="bg_yellow width_100 float_left">element_input_filter?</p>
                                                <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 bg_pink float_left" />

                                                  </div>

                                              </div>

                                      </div>

                                      <div id="blog" class="position_relative width_100 z_index_1 float_left bg_purple overflow_x_hidden">

                                                <div id="spacer" class="position_relative margin_auto easing_01 calc_10vw_width margin_5vw border_radius_1vh text_align_center float_right bg_white">

                                                  <div id="spacer" class="position_relative margin_auto easing_01 calc_10vw_width margin_5vw border_radius_1vh text_align_center float_right bg_white">

                                                  <h1>element_ol_firebase_filtered_library</h1>
                                                  <ol id="element_ol_firebase_filtered_library"></ol>
                                                  
                                                  <h1>library_posts_logged</h1>
                                                  <ol id="library_posts_logged"></ol>

                                                  <h1>library_posts_advance_filter</h1>
                                                  <ol id="library_posts_advance_filter"></ol>

                                                  <h2>element_ol_firebase_library</h2>
                                                  <ol id="element_ol_firebase_library"></ol>

                                                  <h2>element_ol_firebase_library</h2>
                                                  <ol id="element_ol_firebase_roster"></ol>

                                                  <h2>element_ol_firebase_library</h2>
                                                  <ol id="element_ol_firebase_abilities"></ol>

                                                  <h2>element_ol_firebase_library</h2>
                                                  <ol id="element_ol_firebase_partners"></ol>

                                                  <h2>element_ol_firebase_library</h2>
                                                  <ol id="element_ol_firebase_services"></ol>

                                                  <h2>element_ol_firebase_library</h2>
                                                  <ol id="element_ol_firebase_skills"></ol>
                                                </div>

                                        </div>

                                      </div>


                                    <div class="bg_purple width_100">


            <div id="page_right_nav_filler" class="width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative">
            </div>

            <h1 class="width_100 font_size_5vh float_left position_relative">choose title</h1>
            <input id="element_input_filter" class="width_100" placeholder="filter by: title" type="text" name=""/>
            <br/>

            <h1 class="width_100 font_size_5vh float_left position_relative">choose types</h1>
            <input id="element_input_types" class="width_100" placeholder="adds types" type="text" name=""/>
            <div id="types"></div>
            <br/>

            <h1 class="width_100 font_size_5vh float_left position_relative">choose username for post</h1>
            <input id="element_input_post_username" class="width_100" placeholder="element_input_post_username" type="text" name=""/>
            <br/>

            <h1 class="width_100 font_size_5vh float_left position_relative">choose blog post style</h1>
            <input id="element_input_style" class="width_100" placeholder="element_input_style" type="text" name=""/>
            <br/>

            <h1 class="width_100 font_size_5vh float_left position_relative">Library inputs</h1>
            <input id="create_library_input_title" class="width_100" placeholder="create_library_input_title" type="text" name=""/>
            <br/>
            <input id="create_library_input_subtitle" class="width_100" placeholder="create_library_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
            <br/>
            <input id="create_library_input_paragraph" class="width_100" placeholder="create_library_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
            <br/>
            <input id="create_library_input_category" class="width_100" placeholder="create_library_input_category" type="text" value="a placeholder category" name=""/>
            <br/>
            <input id="create_library_input_sub_category" class="width_100" placeholder="create_library_input_sub_category" type="text" value="a placeholder sub category" name=""/>
            <br/>
            <input id="create_library_input_feature_style" class="width_100" placeholder="create_library_input_feature_style" type="text" value="a placeholder feature style" name=""/>
            <br/>
            <input id="create_library_input_tag" class="width_100" placeholder="create_library_input_tag" type="text" value="a placeholder tag"name=""/>
            <br/>
            <input id="create_library_input_type" class="width_100" placeholder="create_library_input_type" type="text" value="a placeholder type"name=""/>
            <br/>
            <input id="create_library_input_feature_image_src" class="width_100" placeholder="create_library_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
            <br/>

            <div id="element_input_create_library" class="width_100 bg_white color_yellow float_left text_align_center">create library post</div>

            <h1 class="width_100 font_size_5vh float_left position_relative">Create Roster</h1>
            <input id="new_username" class="width_100" placeholder="username" type="text" name=""/>
            <br/>
            <input id="new_password" class="width_100" placeholder="password" type="text" name=""/>
            <br/>
            <div id="element_input_create_roster" class="width_100 bg_white color_yellow float_left text_align_center">create roster user</div>


            <h1 class="width_100 font_size_5vh float_left position_relative">services inputs</h1>
            <input id="create_services_input_title" class="width_100" placeholder="create_services_input_title" type="text" name=""/>
            <br/>
            <input id="create_services_input_subtitle" class="width_100" placeholder="create_services_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
            <br/>
            <input id="create_services_input_paragraph" class="width_100" placeholder="create_services_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
            <br/>
            <input id="create_services_input_category" class="width_100" placeholder="create_services_input_category" type="text" value="a placeholder category" name=""/>
            <br/>
            <input id="create_services_input_sub_category" class="width_100" placeholder="create_services_input_sub_category" type="text" value="a placeholder sub category" name=""/>
            <br/>
            <input id="create_services_input_feature_style" class="width_100" placeholder="create_services_input_feature_style" type="text" value="a placeholder feature style" name=""/>
            <br/>
            <input id="create_services_input_tag" class="width_100" placeholder="create_services_input_tag" type="text" value="a placeholder tag"name=""/>
            <br/>
            <input id="create_services_input_type" class="width_100" placeholder="create_services_input_type" type="text" value="a placeholder type"name=""/>
            <br/>
            <input id="create_services_input_feature_image_src" class="width_100" placeholder="create_services_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
            <br/>
            <div id="element_input_create_services" class="width_100 bg_white color_yellow float_left text_align_center">create service post</div>


            <h1 class="width_100 font_size_5vh float_left position_relative">abilities inputs</h1>
            <input id="create_abilities_input_title" class="width_100" placeholder="create_abilities_input_title" type="text" name=""/>
            <br/>
            <input id="create_abilities_input_subtitle" class="width_100" placeholder="create_abilities_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
            <br/>
            <input id="create_abilities_input_paragraph" class="width_100" placeholder="create_abilities_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
            <br/>
            <input id="create_abilities_input_category" class="width_100" placeholder="create_abilities_input_category" type="text" value="a placeholder category" name=""/>
            <br/>
            <input id="create_abilities_input_sub_category" class="width_100" placeholder="create_abilities_input_sub_category" type="text" value="a placeholder sub category" name=""/>
            <br/>
            <input id="create_abilities_input_feature_style" class="width_100" placeholder="create_abilities_input_feature_style" type="text" value="a placeholder feature style" name=""/>
            <br/>
            <input id="create_abilities_input_tag" class="width_100" placeholder="create_abilities_input_tag" type="text" value="a placeholder tag"name=""/>
            <br/>
            <input id="create_abilities_input_type" class="width_100" placeholder="create_abilities_input_type" type="text" value="a placeholder type"name=""/>
            <br/>
            <input id="create_abilities_input_feature_image_src" class="width_100" placeholder="create_abilities_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
            <br/>
            <div id="element_input_create_abilities" class="width_100 bg_white color_yellow float_left text_align_center">create abilities post</div>


            <h1 class="width_100 font_size_5vh float_left position_relative">skills inputs</h1>
            <input id="create_skills_input_title" class="width_100" placeholder="create_skills_input_title" type="text" name=""/>
            <br/>
            <input id="create_skills_input_subtitle" class="width_100" placeholder="create_skills_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
            <br/>
            <input id="create_skills_input_paragraph" class="width_100" placeholder="create_skills_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
            <br/>
            <input id="create_skills_input_category" class="width_100" placeholder="create_skills_input_category" type="text" value="a placeholder category" name=""/>
            <br/>
            <input id="create_skills_input_sub_category" class="width_100" placeholder="create_skills_input_sub_category" type="text" value="a placeholder sub category" name=""/>
            <br/>
            <input id="create_skills_input_feature_style" class="width_100" placeholder="create_skills_input_feature_style" type="text" value="a placeholder feature style" name=""/>
            <br/>
            <input id="create_skills_input_tag" class="width_100" placeholder="create_skills_input_tag" type="text" value="a placeholder tag"name=""/>
            <br/>
            <input id="create_skills_input_type" class="width_100" placeholder="create_skills_input_type" type="text" value="a placeholder type"name=""/>
            <br/>
            <input id="create_skills_input_feature_image_src" class="width_100" placeholder="create_skills_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
            <br/>
            <div id="element_input_create_skills" class="width_100 bg_white color_yellow float_left text_align_center">create skills post</div>


            <h1 class="width_100 font_size_5vh float_left position_relative">partners inputs</h1>
            <input id="create_partners_input_title" class="width_100" placeholder="create_partners_input_title" type="text" name=""/>
            <br/>
            <input id="create_partners_input_subtitle" class="width_100" placeholder="create_partners_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
            <br/>
            <input id="create_partners_input_paragraph" class="width_100" placeholder="create_partners_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
            <br/>
            <input id="create_partners_input_category" class="width_100" placeholder="create_partners_input_category" type="text" value="a placeholder category" name=""/>
            <br/>
            <input id="create_partners_input_sub_category" class="width_100" placeholder="create_partners_input_sub_category" type="text" value="a placeholder sub category" name=""/>
            <br/>
            <input id="create_partners_input_feature_style" class="width_100" placeholder="create_partners_input_feature_style" type="text" value="a placeholder feature style" name=""/>
            <br/>
            <input id="create_partners_input_tag" class="width_100" placeholder="create_partners_input_tag" type="text" value="a placeholder tag"name=""/>
            <br/>
            <input id="create_partners_input_type" class="width_100" placeholder="create_partners_input_type" type="text" value="a placeholder type"name=""/>
            <br/>
            <input id="create_partners_input_feature_image_src" class="width_100" placeholder="create_partners_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
            <br/>
            <div id="element_input_create_partners" class="width_100 bg_white color_yellow float_left text_align_center">create partners post</div>


                                    </div>
                                    
                                    <div class="bg_pink height_100vh width_100">

                                    </div>

                                    <div class="bg_purple height_100vh width_100">

                                    </div>
                                    
                                    <div class="bg_pink height_100vh width_100">

                                    </div>

                                    <div class="bg_purple height_100vh width_100">

                                    </div>          

                                    <div class="height_100vh width_100">

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1">

                        <div id="misc_menu" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100">

                            <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100">

                              <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                                
                                <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark">

                                    <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>

                                    </div>

                                </div>

                              </div>

                            </div>

                        </div>

                        <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Who Nav 1</p>

                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                        <div class="position_relative pseudo_arrow_top_left_outside_white border_radius_1vh box_shadow_hover_none box_shadow_bottom_right_1vw_dark webkit_box_pack_center webkit_box_align display_webkit_box padding_1vh bg_yellow">
                                                    
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>

                                        </div>


                                </div>

                            </div>

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Who Nav 1</p>

                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center">

                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>

                                            </div>

                                        </div>

                                      </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


      </div>
    </div>
    `;

let element_page_right = `
    <div id="component_app_modal_element_page_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_1">
      <div id="component_app_modal_element_page_right_content" class="position_relative width_100 height_100 bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left z_index_0 ">

      </div>
    </div>
    `;

let element_pop_top = `
    <div id="component_app_modal_element_pop_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_5">
      <div id="component_app_modal_element_pop_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
      </div>
    </div>
    `;

let element_pop_left = `
  <div id="component_app_modal_element_pop_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
    <div id="component_app_modal_element_pop_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width ">
        


    </div>
  </div>
  `;

let element_pop_bottom = `
    <div id="component_app_modal_element_pop_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
      <div id="component_app_modal_element_pop_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto bg_white">
            

      </div>
    </div>
  `;

let element_pop_right = `
  <div id="component_app_modal_element_pop_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
    <div id="component_app_modal_element_pop_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_1 margin_auto">
      

    </div>
  </div>
  `;

let element_pip_top = `
    <div id="component_app_modal_element_pip_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_5">
      <div id="component_app_modal_element_pip_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
    </div>
    `;

let element_pip_left = `
  <div id="component_app_modal_element_pip_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
    <div id="component_app_modal_element_pip_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
  </div>
  `;

let element_pip_bottom = `
    <div id="component_app_modal_element_pip_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
      <div id="component_app_modal_element_pip_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
    </div>
  `;

let element_pip_right = `
  <div id="component_app_modal_element_pip_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
    <div id="component_app_modal_element_pip_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
  </div>
  `;

let element_morph_top = `
    <div id="component_app_modal_element_morph_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_morph_left = `
    <div id="component_app_modal_element_morph_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_morph_bottom = `
    <div id="component_app_modal_element_morph_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_morph_right = `
    <div id="component_app_modal_element_morph_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_corner_top = `
    <div id="component_app_modal_element_corner_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_corner_left = `
    <div id="component_app_modal_element_corner_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_corner_bottom = `
    <div id="component_app_modal_element_corner_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_corner_right = `
    <div id="component_app_modal_element_corner_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
   `;

let element_menu_top = `
    <div id="component_app_modal_element_menu_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_25vh margin_auto z_index_1 bg_white">

    </div>
   `;

let element_menu_left = `
    <div id="component_app_modal_element_menu_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh_height width_25vw margin_auto z_index_1 bg_white">\
      
        <div class="position_absolute top_0 bottom_0 right_0 calc_6025vw margin_auto float_left">
          <div class="position_relative calc_2vw border_1vw_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left">
            <div class="position_relative calc_5vw padding_205vw float_left">
              <div class="font_size_5vw line_height_10vw width_100"><b class="color_yellow">Nigel:</b> Yo fam</div>
              <div class="font_size_5vw line_height_10vw width_100">Yo fam<b class="color_yellow">:Nigel</b></div>
              <div class="font_size_5vw line_height_10vw width_100"><b class="color_yellow">Nigel:</b> Yo fam</div>
              <div class="font_size_5vw line_height_10vw width_100">Yo fam<b class="color_yellow">:Nigel</b></div>
              <div class="font_size_5vw line_height_10vw width_100"><b class="color_yellow">Nigel:</b> Yo fam</div>
              <div class="font_size_5vw line_height_10vw width_100">Yo fam<b class="color_yellow">:Nigel</b></div>
            </div>
          </div>
        </div>

    </div>`;

let element_menu_bottom = `
    <div id="component_app_modal_element_menu_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_1">

        <div class="position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left">
          <div class="position_relative calc_5vh padding_205vh float_left">
            <div class="font_size_5vh line_height_10vh width_100"><b class="color_yellow">Nigel:</b> Yo fam</div>
            <div class="font_size_5vh line_height_10vh width_100">Yo fam<b class="color_yellow">:Nigel</b></div>
            <div class="font_size_5vh line_height_10vh width_100"><b class="color_yellow">Nigel:</b> Yo fam</div>
            <div class="font_size_5vh line_height_10vh width_100">Yo fam<b class="color_yellow">:Nigel</b></div>
            <div class="font_size_5vh line_height_10vh width_100"><b class="color_yellow">Nigel:</b> Yo fam</div>
            <div class="font_size_5vh line_height_10vh width_100">Yo fam<b class="color_yellow">:Nigel</b></div>
          </div>
        </div>

    </div>
    `;

let element_menu_right = `
    <div id="component_app_modal_element_menu_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh_height width_25vw margin_auto z_index_1">
       
        <div class="position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left">
          <div class="position_relative calc_5vh padding_205vh float_left">
            ${value_ui_controls}
          </div>
        </div>

    </div>
    `;

let element_fade_top = `
    <div id="component_app_modal_element_fade_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
    `;

let element_fade_left = `
    <div id="component_app_modal_element_fade_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_1">
    </div>
    `;

let element_fade_bottom = `
    <div id="component_app_modal_element_fade_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
    `;

let element_fade_right = `
    <div id="component_app_modal_element_fade_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_1">
    </div>
    `;

let element_overlay_top = `
    <div id="component_app_modal_element_overlay_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `;

let element_overlay_left = `
    <div id="component_app_modal_element_overlay_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_5">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `;

let element_overlay_bottom = `
    <div id="component_app_modal_element_overlay_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_5">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `;

let element_overlay_right = `
    <div id="component_app_modal_element_overlay_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_5">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `;

let element_gradient_top = `
    <div id="component_app_modal_element_gradient_top" class="bg_yellow easing_1 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_1">

      <div class="position_absolute top_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto">
        <div class="position_absolute top_-1vh left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_bottom"></div>
      </div>

    </div>
    `;

let element_gradient_left = `
    <div id="component_app_modal_element_gradient_left" class="bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100vw height_100vh margin_auto z_index_1">
    
      <div class="position_absolute left_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_right"></div>

</div>
    `;

let element_gradient_bottom = `
    <div id="component_app_modal_element_gradient_bottom" class="bg_yellow easing_1 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_1">
    
      <div class="position_absolute bottom_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_top"></div>

    </div>
    `;

let element_gradient_right = `
    <div id="component_app_modal_element_gradient_right" class="bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto z_index_1">
    
      <div class="position_absolute right_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_left"></div>
    
    </div>
    `;

export default {
  component_app_content_root,
  element_guis,
  value_ui_controls,

  // routes
  route_dashboard,

  // modals
  element_anchor_left,
  element_anchor_right,
  element_anchor_top,
  element_anchor_bottom,

  element_nav_top,
  element_nav_left,
  element_nav_bottom,
  element_nav_right,
  element_pip_top,
  element_pip_left,
  element_pip_bottom,
  element_pip_right,
  element_pop_top,
  element_pop_left,
  element_pop_bottom,
  element_pop_right,
  element_page_top,
  element_page_left,
  element_page_bottom,
  element_page_right,
  element_menu_top,
  element_menu_left,
  element_menu_bottom,
  element_menu_right,
  element_morph_top,
  element_morph_left,
  element_morph_bottom,
  element_morph_right,
  element_fade_top,
  element_fade_left,
  element_fade_bottom,
  element_fade_right,
  element_gradient_top,
  element_gradient_left,
  element_gradient_bottom,
  element_gradient_right,
  element_corner_top,
  element_corner_left,
  element_corner_bottom,
  element_corner_right,
  element_overlay_top,
  element_overlay_left,
  element_overlay_bottom,
  element_overlay_right,

  element_scroll_y_events,
  element_after_menu_about,

  anchor_menu_left,
  anchor_menu_top,
  anchor_menu_bottom,
  anchor_menu_right,

  element_gui_top_left,
  element_gui_top_right,
  element_gui_bottom_left,
  element_gui_bottom_right
};
