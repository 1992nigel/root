import from_index from '../index.js';

let state = '';

let randomizer = function() {
    let number = Math.floor((Math.random() * 1000000000000000) + 1);
    return number
};

// text
let element_title = (info) => {
    let element = `<h1 id="element_title" class="position_relative margin_auto font_size_5vh line_height_10vh text_align_center width_100 float_left">` + info + `</h1>`

    return element
};

let element_input_filter = () => {
    let element = `
  `
    return element
};


/*
After Menus 
element_after_button_menu_left
element_after_button_menu_center
element_after_button_menu_right
element_after_menu
element_after_menu_about
element_after_menu_team
element_after_menu_library
element_after_menu_abilities
element_after_menu_partners
element_after_menu_services
element_after_menu_workshop
element_after_menu_register
element_after_menu_login
element_after_menu_sign_up
element_after_menu_sign_out
element_after_menu_dashboard
element_after_menu_create
element_after_menu_search

*/

let menu_sub = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Nigel
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Maisie
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let menu_sub_library_front_end = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let menu_sub_library_back_end = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let menu_sub_library_graphics = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Sketch
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Assets
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Frames
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Wireframes
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Illustration
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let menu_sub_library_ux_ui = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let menu_sub_library_content = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

let menu_sub_library_startegy = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span id="route_workshop_1" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Branding
                  </span>
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span  id="route_workshop_2" class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Material
                  </span>
              </span>

           </div>
        </div>
    </span>

  </span>
`

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

let element_after_menu = `
<span id="wp_component_meta" class="position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Home
                  </span>

              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Hire
                  </span>
                  ${menu_sub}
              </span>

           </div>
        </div>
     </span>

    <div class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let anchor_menu_left = `
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

let anchor_menu_top = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white">
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

let anchor_menu_bottom = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white">
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

let anchor_menu_right = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_right_top_outside_white">
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

let menu_1 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white_no_border">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white">

              <span id="route_about_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Brand
                  </span>

              </span>

              <span id="route_about_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Products
                  </span>
              </span>

              <span id="route_about_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Office
                  </span>
              </span>

              <span id="route_about_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Staff
                  </span>
              </span>

              <span id="route_about_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Location
                  </span>
              </span>

              <span id="route_about_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Process
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div id="route_about_all" class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let menu_2 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_team_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Developers
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_team_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Designers
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Digital Artist
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Film & Crew 
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Managers
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Content Creators
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_team_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_team_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let menu_3 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_yellow border_top_01vh_dark_yellow_9">

              <span id="route_library_1" class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Front-End & Ui
                  </span>
              </span>

              <span id="route_library_2" class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Back-End & Data
                  </span>
              </span>

              <span id="route_library_3" class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Content Creation
                  </span>
              </span>

              <span id="route_library_4" class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Graphics & Photography
                  </span>
              </span>

              <span id="route_library_5" class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Motion & Film
                  </span>
              </span>

              <span id="route_library_6" class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Audio & Equipment
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div id="route_library_all" class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let menu_4 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_top_01vh_dark_yellow_9 ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_abilities_1" class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Web Development
                  </span>
              </span>

              <span id="route_abilities_2" class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Ui Design
                  </span>
              </span>

              <span id="route_abilities_3" class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Graphic Design
                  </span>
              </span>

              <span id="route_abilities_4" class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    SFX & Editing
                  </span>
              </span>

              <span id="route_abilities_5" class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Photography
                  </span>
              </span>

              <span id="route_abilities_6" class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Content Creation
                  </span>
              </span>


           </div>
        </div>
     </span>
     
     <div id="route_abilities_all" class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let menu_5 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_top_01vh_dark_yellow_9 ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_partners_1" class="position_relative bg_white border_01vh_dark_yellow_9 border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Employers
                  </span>
              </span>

              <span id="route_partners_2" class="position_relative bg_white border_01vh_dark_yellow_9 border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Employees
                  </span>
              </span>

              <span id="route_partners_3" class="position_relative bg_white border_01vh_dark_yellow_9 border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Companies
                  </span>
              </span>

              <span id="route_partners_4" class="position_relative bg_white border_01vh_dark_yellow_9 border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Independents
                  </span>
              </span>

              <span id="route_partners_5" class="position_relative bg_white border_01vh_dark_yellow_9 border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Collaberations
                  </span>
              </span>

              <span id="route_partners_6" class="position_relative bg_white border_01vh_dark_yellow_9 border_radius_1vh margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Charity
                  </span>
              </span>


           </div>
        </div>
     </span>

    
     <div id="route_partners_all" class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let menu_6 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     

     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">


          <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>


              <span id="route_services_1" class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Development
                  </span>
              </span>

              <span id="route_services_2" class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Design
                  </span>
              </span>

              <span id="route_services_3" class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Graphics
                  </span>
              </span>

              <span id="route_services_4" class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Film & Motion
                  </span>
              </span>

              <span id="route_services_5" class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Strategy
                  </span>
              </span>

              <span id="route_services_6" class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Content
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div id="route_services_all" class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let menu_7 = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_workshop_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Resources
                  </span>
              </span>

              <span id="route_workshop_2" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Patterns
                  </span>
              </span>

              <span id="route_workshop_3" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     phase
                  </span>
              </span>

              <span id="route_workshop_4" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     phase
                  </span>
              </span>

              <span id="route_workshop_5" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Components
                  </span>
              </span>

              <span id="route_workshop_6" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Data
                  </span>
              </span>


           </div>
        </div>
     </span>

     
     <div id="route_workshop_all" class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let element_after_menu_about = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_about_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Brand
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_about_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Products
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_about_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Office
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_about_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Staff
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_about_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Locations
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_about_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Process
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_about_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_about_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_after_menu_team = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_team_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Developers
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_team_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Designers
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Digital Artist
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Film & Crew 
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Managers
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_team_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Content Creators
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_team_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_team_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_after_menu_library = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white text_shadow_01vh_dark letter-spacing_-01vh border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_library_1" class="position_relative bg_yellow_hover margin_1vh_left margin_1vh_right border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_1075vh line_height_2vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_2vh height_2vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Front-End
                  </span>
                  ${menu_sub_library_front_end}
              </span>

              <span id="route_library_3" class="position_relative bg_yellow_hover margin_1vh_left margin_1vh_right border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_1075vh line_height_2vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_2vh height_2vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Back-end & Data
                  </span>
                  ${menu_sub_library_back_end}
              </span>

              <span id="route_library_2" class="position_relative bg_yellow_hover margin_1vh_left margin_1vh_right border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_1075vh line_height_2vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_2vh height_2vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     UI/UX
                  </span>
                  ${menu_sub_library_ux_ui}
              </span>

              <span id="route_library_5" class="position_relative bg_yellow_hover margin_1vh_left margin_1vh_right border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_1075vh line_height_2vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_2vh height_2vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Graphics & Print
                  </span>
                  ${menu_sub_library_graphics}
              </span>

              <span id="route_library_4" class="position_relative bg_yellow_hover margin_1vh_left margin_1vh_right border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_1075vh line_height_2vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_2vh height_2vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Startegy
                  </span>
                  ${menu_sub_library_startegy}
              </span>

              <span id="route_library_6" class="position_relative bg_yellow_hover margin_1vh_left margin_1vh_right border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_1075vh line_height_2vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_2vh height_2vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Motion & Film
                  </span>
                  ${menu_sub_library_content}
              </span>

           </div>
        </div>
     </span>

    <div class="position_absolute top_100 left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_library_cta" class="position_relative top_-1vh float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh">
            <p class="font_size_1075vh letter-spacing_-01vh line_height_205vh padding_1vh_left padding_1vh_right position_relative float_left">Get a Quote</p>
        </div>

    </div>

    <h1 id="route_library_all" class="verticle_text letter-spacing_-01vh position_absolute top_0 right_100 font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_after_menu_abilities = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_abilities_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Web Dev
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_abilities_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Ui Design
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_abilities_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Graphic Artist
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_abilities_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    SFX & Audi Editor
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_abilities_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Eqipment & Support
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_abilities_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Content Creatoion
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_abilities_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_abilities_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_after_menu_partners = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_partners_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Employers
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_partners_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Employyes
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_partners_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Companies
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_partners_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Independents
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_partners_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Collaberation
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_partners_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Traning
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_partners_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_partners_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`


let element_after_menu_services = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_services_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Development
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_services_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Design
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_services_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Graphics
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_services_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Film & Motion 
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_services_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Stragety
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_services_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Content
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_services_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_services_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`


let element_after_menu_workshop = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_75 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_workshop_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                    <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Resources
                  </span>

                  ${menu_sub}

              </span>

              <span id="route_workshop_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Patterns
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_workshop_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Copy
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_workshop_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Materials
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_workshop_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Data
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_workshop_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Components
                  </span>
                  ${menu_sub}
              </span>


           </div>
        </div>
     </span>

    <div id="route_workshop_all" class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div id="route_workshop_cta" class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`


let element_after_menu_register = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Product
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Office
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Team
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Projects
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Equipment
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Process
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div class="gui_learn_buttons_login position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let element_after_menu_login = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Product
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Office
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Team
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Projects
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Equipment
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Process
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div class="gui_learn_buttons_login position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let element_after_menu_sign_up = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Product
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Office
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Team
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Projects
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Equipment
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Process
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div class="gui_learn_buttons_login position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let element_after_menu_sign_out = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
           <div class="width_100 position_relative float_left padding_1vh">

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Product
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Office
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Team
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Projects
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Equipment
                  </span>
              </span>

              <span id="route_meta_1" class="position_relative bg_white border_bottom_01vh_dark_yellow_9 margin_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                     Our Process
                  </span>
              </span>


           </div>
        </div>
     </span>

     <div class="gui_learn_buttons_login position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

  </span>
`

let element_after_menu_dashboard = `
<span id="wp_component_meta" class="position_absolute width_25vh right_100 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span id="route_dashboard_1" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Post
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_dashboard_2" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Video
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_dashboard_3" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Image
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_dashboard_4" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Gallery
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_dashboard_5" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Audio
                  </span>
                  ${menu_sub}
              </span>

              <span id="route_dashboard_6" class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Audio
                  </span>
                  ${menu_sub}
              </span>

           </div>
        </div>
     </span>

    <div class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_after_menu_create = `
<span id="wp_component_meta" class="position_absolute width_25vh right_75 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Post
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Video
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Image
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Gallery
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    Audio
                  </span>
                  ${menu_sub}
              </span>

           </div>
        </div>
     </span>

    <div class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_after_menu_search = `
<span id="wp_component_meta" class="position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh">

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    date
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    type
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    tags
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    categories
                  </span>
                  ${menu_sub}
              </span>

              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                    author
                  </span>
                  ${menu_sub}
              </span>

           </div>
        </div>
     </span>

    <div class="gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

    <div class="position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

        <div class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

  </span>
`

let element_sidebar_1 = () => {
    let element = `
          <h1 class="font_size_5vh width_100 text_align_center">Search</h1>

          <h1 class="font_size_5vh width_100 text_align_center">filter by: title</h1>

          <div class="position_relative width_100 float_left display_flex_flow">
            <div class="position_relative float_left display_flex_flow">
              <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
                <div class="gui_enter_buttons position_relative margin_auto width_10vh height_10vh margin_auto float_left"></div>
              </div>

              <div class="position_relative float_left margin_auto">
                <input id="element_input_filter" placeholder="element_input_filter" class="font_gaegu position_relative height_5vh line_height_205vw font_size_1vw text_align_center float_left margin_auto "type="text"/>
              </div>
            </div>
          </div>

          <h1 class="font_size_3vh width_100 text_align_center">filter by: type?</h1>

          <div class="position_relative width_100 float_left display_flex_flow">
            <div class="position_relative float_left display_flex_flow">
              <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
                <div class="gui_enter_buttons position_relative margin_auto width_10vh height_10vh margin_auto float_left"></div>
              </div>

              <div class="position_relative float_left margin_auto">
                <input id="element_input_type" placeholder="element_input_type" value="code" class="font_gaegu position_relative height_5vh line_height_205vw font_size_1vw text_align_center float_left margin_auto "type="text"/>
              </div>
            </div>
          </div>

          <h1 class="font_size_205vh width_100 text_align_center">sort by: alphabet, views, comments, rating, date?</h1>

          <div class="position_relative width_100 float_left display_flex_flow">
            <div class="position_relative float_left display_flex_flow">
              <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
                <div class="gui_enter_buttons position_relative margin_auto width_10vh height_10vh margin_auto float_left"></div>
              </div>

              <div class="position_relative float_left margin_auto">
                <input id="element_input_sort" placeholder="element_input_sort" class="font_gaegu position_relative height_5vh line_height_205vw font_size_1vw text_align_center float_left margin_auto "type="text"/>
              </div>
            </div>
          </div>


          <h1 class="font_size_205vh width_100 text_align_center">sort by: Latest, Recommeneded, Subscribed, What your friends like, Original, Sponsored, Community</h1>

          <div class="position_relative width_100 float_left display_flex_flow">
            <div class="position_relative float_left display_flex_flow">
              <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
                <div class="gui_enter_buttons position_relative margin_auto width_10vh height_10vh margin_auto float_left"></div>
              </div>

              <div class="position_relative float_left margin_auto">
                <input id="element_input_sort" placeholder="element_input_sort" class="font_gaegu position_relative height_5vh line_height_205vw font_size_1vw text_align_center float_left margin_auto "type="text"/>
              </div>
            </div>
          </div>

          <h1 class="font_size_5vh width_100 text_align_center">sort up or down?</h1>

          <div class="position_relative width_100 float_left display_flex_flow">
            <div class="position_relative float_left display_flex_flow">
              <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
                <div class="gui_enter_buttons position_relative margin_auto width_10vh height_10vh margin_auto float_left"></div>
              </div>

              <div class="position_relative float_left margin_auto">
                <input id="element_input_sort" placeholder="element_input_sort" class="font_gaegu position_relative height_5vh line_height_205vw font_size_1vw text_align_center float_left margin_auto "type="text"/>
              </div>
            </div>
          </div>

          <h1 class="font_size_5vh width_100 text_align_center">change view to: grid?</h1>

          <div class="position_relative width_100 float_left display_flex_flow">
            <div class="position_relative float_left display_flex_flow">
              <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
                <div class="gui_enter_buttons position_relative margin_auto width_10vh height_10vh margin_auto float_left"></div>
              </div>

              <div class="position_relative float_left margin_auto">
                <input id="element_input_view" placeholder="element_input_view" value="card" class="font_gaegu position_relative height_5vh line_height_205vw font_size_1vw text_align_center float_left margin_auto "type="text"/>
              </div>
            </div>
          </div>

          <div class="width_100 position_relative float_left display_flex_flow ">

              <div class="fadeIn animated1 position_relative margin_auto float_left">

                <div class="gui_enter_buttons position_relative width_10vh height_10vh margin_auto float_left"></div>

              </div>

              <div class="fadeIn animated1 position_relative margin_auto float_left">

                <div class="gui_enter_buttons position_relative width_10vh height_10vh margin_auto float_left"></div>

              </div>


              <div class="fadeIn animated1 position_relative margin_auto float_left">

                <div class="gui_enter_buttons position_relative width_10vh height_10vh margin_auto float_left"></div>

              </div>


              <div class="fadeIn animated1 position_relative margin_auto float_left">

                <div class="gui_enter_buttons position_relative width_10vh height_10vh margin_auto float_left"></div>

              </div>

              <div class="fadeIn animated1 position_relative margin_auto float_left">

                <div class="gui_enter_buttons position_relative width_10vh height_10vh margin_auto float_left"></div>

              </div>


              <div class="fadeIn animated1 position_relative margin_auto float_left">

                <div class="gui_enter_buttons position_relative width_10vh height_10vh margin_auto float_left"></div>

              </div>

            </div>

    
    `

    return element
};

let element_blog_filters = () => {

    let element = `

        <span id="wp_component_meta" class="position_relative width_100 float_left display_flex_flow">
         
            <span class="position_relative width_100 float_left max_width">
                     
               <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
                  <div class="width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh ">
                     <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow display_flex_flow">

                      <span class="position_relative width_16flex float_left">
                        <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                              Limit blog posts to <u> state.data.posts_limit </u>
                            </span>
                        </span>
                      </span>

                      <span class="position_relative width_16flex float_left">
                        <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                               Our Office
                            </span>
                        </span>
                      </span>

                      <span class="position_relative width_16flex float_left">

                        <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                               Our Team
                            </span>
                        </span>
                      </span>

                      <span class="position_relative width_16flex float_left">

                        <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                               Our Projects
                            </span>
                        </span>
                      </span>

                      <span class="position_relative width_16flex float_left">

                        <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                               Our Equipment
                            </span>
                        </span>
                      </span>

                      <span class="position_relative width_16flex float_left">

                        <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                               Our Process
                            </span>
                        </span>
                      </span>



                     </div>
                  </div>
               </span>

               <div class="gui_learn_buttons_login position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

            </span>

        </span>

    
    `

    return element
};

let blog_content = () => {

    let component = `

        <div id="component_app_scrolling_content" class="position_relative width_100 height_100vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow bg_yellow float_left">

          <h1 class="font_size_5vh width_100 text_align_center">blog_content: listed below if internet connected</h1>

          <span id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
              
              <span class="position_relative max_width float_left display_flex_flow">
                  ${element_title('element_ol_firebase_library_feature')}
                  <div id="element_ol_firebase_library_feature" class="position_relative width_100 float_left"></div>
              </span>

          </span>

          ${element_blog_filters()}

          <span id="wp_component_posts" class="position_relative width_100 bg_white float_left display_flex_flow">
                  
              <span class="position_relative max_width width_100 float_left display_flex_flow">
                
                  <span id="wp_component_blog" class="position_relative float_left display_flex_flow">

                      ${element_blog_filters()}

                      ${element_title('element_ol_firebase_library')}
                      <div id="element_ol_firebase_library" class="position_relative width_100 float_left"></div>

                      ${element_title('element_ol_firebase_roster')}
                      <div id="element_ol_firebase_roster" class="position_relative width_100 float_left"></div>

                      ${element_title('element_ol_firebase_partners')}
                      <div id="element_ol_firebase_partners" class="position_relative width_100 float_left"></div>

                      ${element_title('element_ol_firebase_abilities')}
                      <div id="element_ol_firebase_abilities" class="position_relative width_100 float_left"></div>

                      ${element_title('element_ol_firebase_skills')}
                      <div id="element_ol_firebase_skills" class="position_relative width_100 float_left"></div>

                      ${element_title('element_ol_firebase_services')}
                      <div id="element_ol_firebase_services" class="position_relative width_100 float_left"></div>

                  </span>

                  <span id="wp_component_sidebar" class="position_relative width_100 height_100vh float_left display_flex_flow bg_white">


                        <span class="position_relative width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            

                            <span class="position_relative border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                                <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                                <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                                  Motion & Film
                                </span>
                            </span>

                        </span>
                      ${element_sidebar_1()}
                  </span>

              </span>

          </span>

        </div>

    `

    return component
};

let element_scroll_y = (info) => {
    let component = `
    <div id="element_scroll_y" class="position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1">
      <div class="position_relative width_100 float_left">
      ${info}
      </div>
    </div>
    `

    return component
};

let element_scroll_y_events = (id, info) => {
    let component = '\
    <div id="'+id+'" class="position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    '
    return component
};

let route_bg = () => {
    let component = `
        <div class="position_absolute float_left calc_20vh margin_auto top_0 left_0 right_0 bottom_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

            <div class="position_relative width_100 max_width height_100 margin_auto top_0 left_0 right_0 bottom_0 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                <div id="post_component" class="delay1 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute left_0 top_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay11 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute left_0 top_0 right_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay12 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute top_0 right_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay13 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute left_0 top_0 bottom_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay14 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute left_0 top_0 bottom_0 right_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left">

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_logo_combo float_left display_flex_flow"></div>

                  </div>
                </div>

                <div id="post_component" class="delay15 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute top_0 bottom_0 right_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay16 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute left_0 bottom_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay17 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute left_0 bottom_0 right_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>

                <div id="post_component" class="delay18 fadeIn animated1 width_33 height_33vh margin_auto float_left position_absolute bottom_0 right_0 display opacity_1 display_flex_flow">
                  <div class="calc_10vh margin_5vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
                      <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
                      <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

                      <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                          <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                              <p class="font_size_205vh padding_205vh position_relative float_left">data.title</p>
                          </div>
                      </div>

                      <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                        <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                          <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                            <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                              <div class="calc_2vh_width margin_1vh position_relative float_left">
                                <p class="font_size_2vh line_height_205vh">abilities</p>
                                <p class="font_size_2vh line_height_205vh">author</p>
                                <p class="font_size_2vh line_height_205vh">categories</p>
                                <p class="font_size_2vh line_height_205vh">id: data.id</p>
                                <p class="font_size_2vh line_height_205vh">category: data.category</p>
                                <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                                <p class="font_size_2vh line_height_205vh">title: data.title</p>
                                <p class="font_size_2vh line_height_205vh">type: data.type</p>
                                <p class="font_size_2vh line_height_205vh">dislikes: data.dislikes</p>
                                <p class="font_size_2vh line_height_205vh">mehs: data.meh</p>
                                <p class="font_size_2vh line_height_205vh">likes: data.likes</p>
                                <p class="font_size_2vh line_height_205vh">paragraph: data.paragraph</p>
                                <p class="font_size_2vh line_height_205vh">subtitle: data.subtitle</p>
                                <p class="font_size_2vh line_height_205vh">tag: data.tag</p>
                                <p class="font_size_2vh line_height_205vh">tags: array items</p>
                                <p class="font_size_2vh line_height_205vh">views: data.views</p>
                              </div>
                            </div>
                          </span>
                        </span>

                      </div>

                      <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                        <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                          <div class="fadeIn animated1 position_relative margin_auto float_left">
                            <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>

                          <div class="fadeIn animated1 position_relative margin_auto float_right">
                            <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                          </div>
                          
                        </div>
                      </div>


                      <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


                  </div>
                </div>
            
            </div>
        
        </div>
      `

    return component
};

let route_content = () => {
    let component =

        (`

        <div id="component_app_body_inside" class="position_relative width_100 height_100vh float_left top_0 left_0 display opacity_1 overflow_hidden">

        </div>

        <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_bottom "></div>

        <div id="go" class="position_relative width_100 bg_yellow float_left overflow_hidden ">


            <div id="1" class="position_relative margin_auto width_100 height_50vh margin_auto bg_yellow float_left overflow_hidden">
            </div>

            <div class="position_relative margin_auto width_50 height_50vh margin_auto float_left overflow_hidden">
                
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto calc_01vh margin_auto border_bottom_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 float_left overflow_hidden">
                </div>


                      <div class="position_absolute top_0 left_100 float_left display_flex_flow">
                        <div class="position_relative float_left bg_pink border_01vh_dark_yellow_9 border_radius_1vh_bottom_right box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_205vh padding_205vh position_relative float_left">Nigel Johnson</p>
                        </div>
                      </div>

                      <div class="position_absolute bottom_0 left_100 float_left display_flex_flow">
                        <div class="position_relative float_left bg_pink border_01vh_dark_yellow_9 border_radius_1vh_top_right box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_205vh padding_205vh position_relative float_left">Nigel Johnson</p>
                        </div>
                      </div>


            </div>

            <div class="position_relative margin_auto width_50 height_50vh margin_auto bg_white float_left overflow_hidden">
    
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto calc_01vh margin_auto border_top_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 float_left overflow_hidden">
                </div>

            </div>

            <div class="position_relative margin_auto width_100 height_50vh margin_auto bg_yellow float_left overflow_hidden">                

              <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_0 bottom_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1">
                
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto calc_02vh_height calc_01vh_width margin_auto border_left_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_top_01vh_dark_yellow_9 float_left overflow_hidden">
                </div>

              </span>

              <span id="wp_component_meta" class="position_absolute calc_25vh_width height_100 right_0 top_0 bottom_0 left_0 float_left line_height_5vh font_size_205vh bg_white">                   

              </span>

            </div>

            <div id="2" class="position_relative margin_auto width_100 height_50vh margin_auto bg_white float_left overflow_hidden">
            </div>

            <div class="position_relative margin_auto width_50 height_50vh margin_auto float_left bg_white overflow_hidden">
                
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto calc_01vh_height width_100 margin_auto border_bottom_01vh_dark_yellow_9 margin_auto float_left overflow_hidden">
                </div>

            </div>

            <div class="position_relative margin_auto width_50 height_50vh margin_auto bg_yellow float_left overflow_hidden">
    
                
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto calc_01vh_height calc_01vh_width margin_auto border_top_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 float_left overflow_hidden">
                </div>
            </div>

            <div class="position_relative margin_auto width_100 height_50vh margin_auto bg_white float_left overflow_hidden">                


              <span id="wp_component_meta" class="position_absolute calc_25vh_width height_100 right_0 top_0 bottom_0 left_0 float_left line_height_5vh font_size_205vh bg_yellow">                   


                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_100 width_100 margin_auto float_left overflow_hidden">
                </div>

              </span>

              <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_0 bottom_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 bg_white">
                
                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto calc_02vh_height calc_01vh_width margin_auto border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 float_left overflow_hidden">
                </div>

              </span>

            </div>
            
      </div>

    <div id="outro_section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_top "></div>

      <div class="position_relative width_100 height_100vh float_left">

        <div class="position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_33 height_33 margin_auto float_left">
          
          <div class="display opacity_1 animated01 fadeIn delay1 position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_100 height_100 margin_auto float_left">

            <div class="display opacity_1 animated1 animated1 enterBottom position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_100 height_100 margin_auto float_left">

              <div class=" nownigel_gui_logo_type position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_100 height_100 margin_auto float_left">

              </div>

              <div class="nownigel_gui_logo_mark  position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_100 height_100 margin_auto float_left">

              </div>

              <div class="opacity_1 easing_01 position_absolute width_100 top_100 left_0 right_0 margin_auto float_left">

                <div class="display_flex_flow opacity_1 easing_01 position_relative width_100 margin_auto float_left">
                  <div class="opacity_1 easing_01 position_relative margin_auto float_left">

                    <div class="position_relative margin_auto height_10vh margin_auto float_left">
                      
                        <span class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh padding_1vh height_3vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            
                            <span class="font_gaegu font_size_2vh line_height_3vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_3vh float_left position_relative margin_auto"></div>
                                Contact Us
                            </span>

                            <div class="position_absolute top_100 left_0 right_0 float_left">
                                <p class="font_size_205vh padding_205vh position_relative float_left">Call (404) 444 - 4444</p>
                            </div>

                        </span>

                    </div>

                    <div class="position_relative margin_auto line_height_5vh padding_205vh font_size_205vh margin_auto float_left"> or 
                    </div>

                    <div class="position_relative margin_auto height_10vh margin_auto float_left">
                      
                        <span class="position_relative bg_white border_01vh_dark_yellow_9 pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh padding_1vh height_3vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                            
                            <span class="font_gaegu font_size_2vh line_height_3vh position_relative float_left">
                            <div class="z_index_1 gui_arrow_left width_205vh height_3vh float_left position_relative margin_auto"></div>
                                Contact Us
                            </span>

                            <div class="position_absolute top_100 left_0 right_0 float_left">
                                <p class="font_size_205vh padding_205vh position_relative float_left">Call (404) 444 - 4444</p>
                            </div>

                        </span>

                    </div>

                  </div>

                </div>

              </div>
        
            </div>
      
          </div>

        </div>

      </div>

      `)

    return component
};

let route_fg = () => {
    let component = `
        <span class="delay2 enterBottom animated1 margin_auto position_absolute bottom_0 left_0 right_0 float_left z_index_1 width_100 display_flex_flow ">

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 width_100 float_left margin_auto bg_white"></div>
            
            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Team cta
              </span>
            </span>

          </div>


          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_04"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_2vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Developers
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_05"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_2vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                Designers
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_06"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_2vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                Artist
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_07"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_2vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                Strategist
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_08"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_2vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Managers
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class=" width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_09"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_2vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                Creators
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

        </span>

        <div class="enterBottom animated1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-50 right_0 margin_auto width_25 height_100 margin_auto float_left easing_01">

            <div class="position_absolute bottom_100 left_0 float_left display_flex_flow">
                <div class="position_relative float_left bg_yellow border_01vh_dark_yellow_9 border_radius_1vh_bottom_right box_shadow_bottom_left_1vh_dark pseudo_arrow_bottom_right_outside_light_yellow_0">
                    <p class="font_size_205vh padding_205vh position_relative float_left">All Bout Our team</p>
                </div>
            </div>

        </div>
      `

    return component
};

let route_components = () => {

    let component = () => {

        state = from_index.Handle_return_state();

        let route_background = `
            ${route_bg()}
        `;

        let route_details = `
            ${route_content()}
        `;

        let route_foreground = `
            ${route_fg()}
        `;

        let route_intro = `
            <div class="position_absolute float_left width_100 height_100vh margin_auto top_0 left_0 webkit_box_pack_center webkit_box_align display_webkit_box bg_orange delay1 fadeIn animated1">
                <div class="width_100vh font_size_205vh line_height_5vh position_absolute left_100 text_align_center float_left vertical_text_left">
                    <div id="section" class="position_relative calc_02vh border_01vh_dark_yellow_9 float_left margin_auto">
                        Hello <i>username</i> welcome to <b>our space</b>. Last Logged in <u>1/11/2020</u>
                    </div>
                </div>
            </div>
        `;

        let scrolling_content = element_scroll_y(route_details);
        
        return (route_intro + route_background + scrolling_content + route_foreground);
    };

    return component();
};

// pages

let route_library_content_1 = (info) => {
    let component = `
                                <div id="route_detail_content" class="position_relative float_left width_100 height_100vh margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                                    <div class="position_absolute top_0 left_0 right_0 width_100 margin_auto float_left">
                                        
                                      <span class="position_relative margin_auto bg_yellow float_left webkit_box_pack_center webkit_box_align display_webkit_box pseudo_arrow_bottom_right_outside_light_yellow_0 width_100">
                                          <span class="padding_1vh font_size_5vh line_height_10vh position_relative float_left">
                                          <div class="z_index_1 gui_arrow_left width_205vh height_10vh float_left position_relative margin_auto"></div>
                                             Library Type 1
                                          </span>
                                      </span>

                                    </div>

                                    <div class="position_relative margin_auto float_left">
                                        
                                      <span class="position_relative margin_auto bg_yellow float_left webkit_box_pack_center webkit_box_align display_webkit_box pseudo_arrow_bottom_right_outside_light_yellow_0">
                                          <span class="padding_1vh font_size_5vh line_height_10vh position_relative float_left">
                                          <div class="z_index_1 gui_arrow_left width_205vh height_10vh float_left position_relative margin_auto"></div>
                                             Let's build some assets.
                                          </span>
                                      </span>

                                      <div class="opacity_1 easing_01 height_10vh width_100 position_absolute top_100 left_0 right_0 margin_auto float_left">

                                      </div>

                                    </div>

                                </div>

                                <div id="route_detail_content" class="position_relative float_left width_100 height_100vh margin_auto">

                                  <div id="header_component" class="width_50 height_100 float_left position_relative margin_auto overflow_hidden display_flex_flow ">
                                  </div>

                                </div>

                                <div class="position_relative float_left width_100 height_100vh bg_orange margin_auto">
                                                
                                    <div class="position_relative float_left width_100 height_1205 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                    </div>

                                    <div class="position_relative float_left width_100 height_1205 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_5vh line_height_10vh">
                                        ${info.title} / ${info.title} / ${info.title}
                                    </div>

                                    <div class="position_relative float_left width_100 height_25 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                        ${info.title} / ${info.title} / ${info.title}
                                    </div>

                                    <div class="position_relative float_left width_100 height_25 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                        
                                        <div class="position_relative float_left width_25 height_100 bg_green margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                            <div class="overflow_hidden nownigel_gui_interaction_portfolio position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_8705 height_8705 float_left"></div>
                                        </div>

                                        <div class="position_relative float_left width_75 height_100 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                            
                                            <div class="position_relative float_left width_50 height_50 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                                ${info.title} / ${info.title} / ${info.title}
                                            </div>
                                            <div class="position_relative float_left width_50 height_50 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                                ${info.title} / ${info.title} / ${info.title}
                                            </div>
                                            <div class="position_relative float_left width_50 height_50 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                                ${info.title} / ${info.title} / ${info.title}
                                            </div>
                                            <div class="position_relative float_left width_50 height_50 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                                ${info.title} / ${info.title} / ${info.title}
                                            </div>

                                        </div>

                                    </div>

                                    <div class="position_relative float_left width_100 height_1205 bg_orange margin_auto webkit_box_pack_center webkit_box_align display_webkit_box font_size_10vh line_height_10vh">
                                        ${info.title} / ${info.title} / ${info.title}
                                    </div>

                                </div>

                                <div class="width_100 position_relative float_left display_flex_flow ">

                                    <div class="position_relative float_left margin_auto max_width">   
                                      <div class="fadeIn animated1 position_relative margin_auto float_left">

                                        <div class="gui_learn_buttons_login position_relative width_10vh height_10vh margin_auto float_left"></div>

                                      </div>

                                      <div class="fadeIn animated1 position_relative margin_auto float_left">

                                        <div class="gui_learn_buttons_sign_up position_relative width_10vh height_10vh margin_auto float_left"></div>

                                      </div>


                                      <div class="fadeIn animated1 position_relative margin_auto float_left">

                                        <div class="gui_learn_buttons_sign_out position_relative width_10vh height_10vh margin_auto float_left"></div>

                                      </div>


                                      <div class="fadeIn animated1 position_relative margin_auto float_left">

                                        <div class="gui_learn_buttons_login position_relative width_10vh height_10vh margin_auto float_left"></div>

                                      </div>

                                      <div class="fadeIn animated1 position_relative margin_auto float_left">

                                        <div class="gui_learn_buttons_sign_up position_relative width_10vh height_10vh margin_auto float_left"></div>

                                      </div>


                                      <div class="fadeIn animated1 position_relative margin_auto float_left">

                                        <div class="gui_learn_buttons_sign_out position_relative width_10vh height_10vh margin_auto float_left"></div>

                                      </div>

                                    </div>

                                </div>

                                <div class="position_relative float_left width_100 bg_white margin_auto display_flex_flow">

                                    <div class="position_relative float_left margin_auto max_width">   
                                        <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_5vh line_height_5vh">
                                            Used in casting shadows off block-level elements (like divs).
                                        </div>
                                    </div>

                                </div>


                                <div class="position_relative float_left width_100 bg_white margin_auto display_flex_flow">

                                    <div class="position_relative float_left margin_auto max_width">   

                                        <div class="position_relative float_left calc_10vh margin_205vh padding_205vh font_size_205vh line_height_5vh bg_black color_white">
                                            Used in casting shadows off block-level elements (like divs).
                                        </div>

                                    </div>
                                </div>
                                
                                <div class="position_relative float_left width_100 bg_white margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                                    <div class="position_relative float_left margin_auto max_width">     

                                        <div class="position_relative float_left width_50 bg_white margin_auto">

                                            <div class="position_relative float_left width_100 bg_white margin_auto">

                                                <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_4vh line_height_5vh">
                                                    Related:
                                                </div>

                                            </div>

                                            <ul class="position_relative float_left width_100 bg_white margin_auto">

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                            </ul>

                                        </div>


                                        <div class="position_relative float_left width_50 bg_white margin_auto">

                                            <div class="position_relative float_left width_100 bg_white margin_auto">

                                                <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_4vh line_height_5vh">
                                                    Latest:
                                                </div>

                                            </div>

                                            <ol class="position_relative float_left width_100 bg_white margin_auto">

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>
                                                
                                                <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                    The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                </li>

                                            </ol>

                                        </div>

                                    </div>

                                </div>


                                <div class="position_relative float_left width_100 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                                        <div class="position_relative float_left width_50 bg_green margin_auto">

                                            <div class="position_relative float_right margin_auto max_width_500px">    

                                                <div class="position_relative float_left width_100 bg_white margin_auto">

                                                    <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_4vh line_height_5vh">
                                                        not relatest:
                                                    </div>

                                                </div>

                                                <ul class="position_relative float_left width_100 bg_white margin_auto">

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                        <div class="position_relative float_left width_50 bg_blue margin_auto">

                                            <div class="position_relative float_left margin_auto max_width_500px">    

                                                <div class="position_relative float_left width_100 margin_auto">

                                                    <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_4vh line_height_5vh">
                                                        Related:
                                                    </div>

                                                </div>

                                                <ul class="position_relative float_left width_100 margin_auto">

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                </div>

                                <div class="position_relative float_left width_100 margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                                        <div class="position_relative float_left width_50 bg_white margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                                            <div class="position_relative float_right margin_auto max_width_500px">    

                                                <div class="position_relative float_left width_100 bg_white margin_auto">

                                                    <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_4vh line_height_5vh">
                                                        not relatest:
                                                    </div>

                                                </div>

                                                <ul class="position_relative float_left width_100 bg_white margin_auto">

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                        <div class="position_relative float_left width_50 bg_white margin_auto webkit_box_pack_center webkit_box_align display_webkit_box">

                                            <div class="position_relative float_left margin_auto max_width_500px">    

                                                <div class="position_relative float_left width_100 margin_auto">

                                                    <div class="position_relative float_left width_100 margin_auto padding_205vh font_size_4vh line_height_5vh">
                                                        Related:
                                                    </div>

                                                </div>

                                                <ul class="position_relative float_left width_100 margin_auto">

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                    <li class="position_relative float_left width_100 margin_auto padding_205vh font_size_2vh line_height_205vh">
                                                        The horizontal offset of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                </div>

                              `

    return component
};

let route_library_bg_1 = () => {
    let component = `
        <div class="position_absolute float_left width_100 height_100vh margin_auto top_0 left_0 webkit_box_pack_center webkit_box_align display_webkit_box">

          <div id="loading_machine_container" class="animated1 delay1 enterBottom width_100 height_100 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto display opacity_1 overflow_hidden">
              
              <div id="loaded_machine_container_1" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto height_100 width_100 animated1 delay6 fadeOut bg_white">
             
                  <div id="machine_container" class="height_54vw width_100">

                      <div id="inside_imac" class="background-image-div">

                          <div id="inside_container_content">

                            <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto photo_person1"></div>

                            <div id="right_machine_walls" class="position_absolute margin_auto height_100 left_100 width_205vh margin_auto float_left bg_white">
                            
                            </div>

                            <div id="left_machine_walls" class="position_absolute margin_auto height_100 right_100 width_205vh margin_auto float_left bg_white">
                            
                            </div>

                            <div id="bottom_machine_walls" class="position_absolute margin_auto height_5vh bottom_100 width_100 margin_auto float_left bg_white">
                            
                            </div>

                            <div id="top_machine_walls" class="position_absolute margin_auto height_5vh top_100 width_100 margin_auto float_left bg_white">
                            
                            </div>

                          </div>

                          <div id="machine_border_container" class="width_100 height_100 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto display opacity_1 overflow_hidden">

                            <div id="gui_particles_computer_corner_closeup" class="gui_particles_computer_corner_closeup_white position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_100 height_100 margin_auto float_left">

                            </div>

                          </div>
                      
                      </div>

                  </div>

              </div>

              <div id="loaded_machine_container_2" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto height_100 width_100 animated1 delay6 fadeIn bg_white">
             
                  <div id="machine_container" class="height_54vw width_100">

                      <div id="inside_imac" class="background-image-div">

                          <div id="inside_container_content">

                            <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto photo_person1">

                              <div class="position_absolute float_left width_100 height_100 margin_auto top_0 left_0">

                                <div class="width_100 height_100 float_left position_relative float_left margin_auto photo_person1 webkit_box_pack_center webkit_box_align display_webkit_box">
                              
                                  <div class="icon_social_workshop_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>

                                  <div class=" easing_01 position_absolute margin_auto width_100 height_100vh margin_auto float_left">
                                    <div class="animated1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-125 right_-75 margin_auto width_200 height_200 margin_auto float_left easing_01"></div>
                                  </div>

                                </div>

                                <div class="gui_arrow_top  width_10vh height_10vh float_left position_absolute top_10vh left_10vh float_left margin_auto z_index_6"></div>                  

                              </div>

                            </div>

                            <div id="right_machine_walls" class="position_absolute margin_auto height_100 left_100 width_205vh margin_auto float_left bg_white">
                            
                            </div>

                            <div id="left_machine_walls" class="position_absolute margin_auto height_100 right_100 width_205vh margin_auto float_left bg_white">
                            
                            </div>

                            <div id="bottom_machine_walls" class="position_absolute margin_auto height_5vh bottom_100 width_100 margin_auto float_left bg_white">
                            
                            </div>

                            <div id="top_machine_walls" class="position_absolute margin_auto height_5vh top_100 width_100 margin_auto float_left bg_white">
                            
                            </div>

                          </div>

                          <div id="machine_border_container" class="width_100 height_100 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto display opacity_1 overflow_hidden">

                            <div id="gui_particles_computer_corner_closeup" class="gui_particles_computer_corner_closeup_white position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_100 height_100 margin_auto float_left">

                            </div>

                          </div>
                      
                      </div>

                  </div>

              </div>

          </div>


          <div class="gui_machines  position_absolute top_0 left_0 margin_auto width_50 height_50 float_left"></div>
                      
          <div class="position_absolute top_0 left_100 float_left display_flex_flow">
            <div class="position_relative float_left background_light_yellow_0 border_01vh_dark_yellow_9 border_radius_1vh_bottom_right box_shadow_bottom_left_1vh_dark_yellow_9">
              <p class="font_size_205vh padding_205vh position_relative float_left">Nigel Johnson</p>
            </div>
          </div>

          <div class="position_absolute bottom_0 left_100 float_left display_flex_flow">
            <div class="position_relative float_left background_light_yellow_0 border_01vh_dark_yellow_9 border_radius_1vh_top_right box_shadow_bottom_left_1vh_dark_yellow_9">
              <p class="font_size_205vh padding_205vh position_relative float_left">Nigel Johnson</p>
            </div>
          </div>
               
          <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_0 bottom_0 left_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1">
       
            <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right">
              <div class="width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh ">
                 <div class="width_100 position_relative float_left padding_1vh bg_white border_right_01vh_dark_yellow_9">




                    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>


                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>

                    <span class="position_relative bg_yellow border_01vh_dark_yellow_9 margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                        <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                        <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                           On the fence
                        </span>
                    </span>


                 </div>
              </div>
            </span>

            <div class="gui_learn_buttons_login position_absolute bottom_0 left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

          </span>

            <h1 class="verticle_text position_absolute top_5vh right_5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>


            <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">route_content_bg_library</h1>

          <div class=" easing_01 position_absolute margin_auto width_100 height_100vh margin_auto float_left">
            <div class="animated1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-125 right_-8205 margin_auto width_200 height_200 margin_auto float_left easing_01"></div>
          </div>

          <span class="position_absolute top_1205vh right_1205vh margin_auto bg_yellow border_bottom_01vh_dark_yellow_9 margin_1vh float_left webkit_box_pack_center webkit_box_align display_webkit_box pseudo_arrow_bottom_right_outside_light_yellow_0">
              <span class="padding_1vh font_size_5vh line_height_10vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_10vh float_left position_relative margin_auto"></div>
                 Let's build some assets.
              </span>
          </span>

          <span class="position_relative margin_auto bg_yellow border_01vh_dark_yellow_9 margin_1vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End <u>Development</u>
              </span>

              <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>


              <div class="position_absolute top_100 left_0 float_left  webkit_box_pack_center webkit_box_align display_webkit_box bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">Web Apps</h1>
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">UI</h1>
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">UX</h1>
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">Components</h1>

                <div class="position_absolute top_100 left_0 float_left display_flex_flow">
                  <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>
                </div>

              </div>
 
          </span>

          <span class="position_absolute bottom_15vh right_5vh margin_auto bg_yellow border_01vh_dark_yellow_9 margin_1vh float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 - Nigel Johnson <u>Development</u>
              </span>

              <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>


              <div class="position_absolute top_100 left_0 float_left  webkit_box_pack_center webkit_box_align display_webkit_box bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9"><b>10</b> Projects</h1>
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">UI</h1>
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">UX</h1>
                <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9">Components</h1>

                <div class="position_absolute top_100 left_0 float_left display_flex_flow">
                  <h1 class="position_relative font_size_2vh padding_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>
                </div>

              </div>
 
          </span>

        </div>
      `

    return component
};

let route_library_fg_1 = () => {
    let component = `
        <span class="delay5 fadeIn animated1 margin_auto position_absolute bottom_0 left_0 right_0 float_left z_index_1 width_100 display_flex_flow ">

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_03"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 width_100 float_left margin_auto gradient_yellow_bottom"></div>
            
            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_04"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_05"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_06"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_07"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class="width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_08"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

          <div class=" width_14flex height_10vh mouseover_height_50vh float_left position_relative float_left margin_auto z_index_7">

            <div class="position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white opacity_09"></div>
            <div class="position_absolute top_0 left_0 border_01vh_dark_yellow_9 height_100 calc_02vh float_left margin_auto gradient_yellow_bottom"></div>

            <span class="position_relative margin_auto height_100 width_100 float_left webkit_box_pack_center webkit_box_align display_webkit_box">
              <span class="padding_1vh font_size_205vh line_height_5vh position_relative float_left">
              <div class="z_index_1 gui_arrow_left width_205vh height_5vh float_left position_relative margin_auto"></div>
                 Front-End
              </span>
            </span>

            <h1 class="position_absolute top_-205vh left_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">now</h1>

          </div>

        </span>

        <div class="delay5 fadeIn animated1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-50 right_0 margin_auto width_25 height_100 margin_auto float_left easing_01"></div>
      `

    return component
};

// guis

let fold_content = () => {
    let component =

        // Components included:
        //fold_content_bg
        //fold_header
        //component_app_body_inside

        (`

          <div id="fold_content_bg" class="position_absolute width_100 float_left top_0 left_0 display opacity_1 overflow_hidden z_index_1">

              <div id="bg_section_1" class="position_relative height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_2" class="position_relative height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden gradient_yellow_bottom">

              </div>

              <div id="bg_section_3" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_4" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_5" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_6" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_7" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_8" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_9" class="position_relative bg_yellow height_100vh width_100 float_left top_0 left_0 display opacity_1 overflow_hidden">

              </div>

              <div id="bg_section_10" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_top">

              </div>

          </div>

          <div id="layer_gui_man" class="display_none nownigel_gui_interaction_man_0_16_depth_200_face_0 position_fixed bottom_-50 right_0 width_20 height_100 margin_auto float_left easing_01 z_index_2"></div>

          <div id="layer_gui_man_2" class="display_none nownigel_gui_interaction_man_0_16_depth_200_face_0 position_fixed bottom_0 right_0 width_20 height_100 margin_auto float_left easing_01 z_index_2"></div>

          <div id="anchor_right" class="position_fixed top_0 bottom_0 right_5vh margin_auto float_left width_5vh height_40vh">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>

            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_right}
            </a>
            
          </div>

          <div id="anchor_bottom" class="position_fixed bottom_5vh left_0 right_0 margin_auto float_left width_40vh height_5vh">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_top}
            </a>
            
          </div>

          <div id="anchor_top" class="position_fixed top_1205vh left_0 right_0 margin_auto float_left width_40vh height_5vh">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_bottom}
            </a>
            
          </div>

          <div id="anchor_left" class="position_fixed top_0 bottom_0 left_5vh margin_auto float_left width_5vh height_40vh z_index_10">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${anchor_menu_left}
            </a>
            
          </div>

          <div class="position_relative width_100 float_left top_0 left_0 display opacity_1 overflow_hidden z_index_3">
              
              <header id="fold" class="position_relative top_0 left_0 height_100vh width_100 float_left">

                  <div id="title_container" class="position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_100 height_100vh">

                      <div id="logo_container" class="position_absolute bottom_0 top_0 left_0 right_0 margin_auto width_33 height_33 float_left">

                          <div id="fold_logo" class="display_none position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">

                              <div class="nownigel_gui_logo_type position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
                              </div>

                              <div class="nownigel_gui_logo_mark position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
                              </div>

                          </div>

                          <div id="fold_buttons" class="display_none position_absolute width_100 top_100 left_0 right_0 margin_auto float_left">

                              <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                
                                  <div class="position_relative margin_auto float_left">

                                      <div id="gui_start_buttons" class="gui_start_buttons position_relative  width_1205vh height_10vh float_left">
                                        ${element_after_button_menu_left}
                                      </div>

                                      <div class="gui_or position_relative width_205vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left">
                                      </div>
                                      
                                      <div id="gui_learn_buttons" class="gui_learn_buttons position_relative  width_1205vh height_10vh float_left">
                                        ${element_after_button_menu_right}
                                      </div>

                                  </div>

                              </div>

                          </div>

                          <div id="fold_note" class="display_none position_absolute width_100 height_100 top_100 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_50 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                      </div>

                  </div>

              </header>

              <div id="component_app_body_inside" class="display_none position_relative width_100 float_left top_0 left_0 overflow_hidden">

                  <div id="go" class="position_relative width_100 height_100vh float_left margin_auto">

                  </div>

                  <div id="section_1" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_1</h1>

                  </div>

                  <div id="section_2" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_2</h1>

                  </div>

                  <div id="section_3" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_3</h1>

                  </div>

                  <div id="section_4" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_4</h1>

                  </div>

                  <div id="section_5" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_5</h1>

                  </div>

                  <div id="section_6" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_6</h1>

                  </div>

                  <div id="section_7" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_7</h1>

                  </div>

                  <div id="section_8" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_8</h1>

                  </div>

                  <div id="section_9" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_9</h1>

                  </div>

                  <div id="section_10" class="position_relative height_100vh width_100vw float_left margin_auto ">

                      <h1 class="font_size_25vh line_height_25vh ">Hello Fam, This is section_10</h1>

                  </div>

                  <div id="section_outro" class="position_relative width_100 height_100vh float_left">

                      <footer id="footer" class="position_absolute bottom_0 left_0 right_0 box_shadow_top_1vh_dark margin_auto width_100 height_5vh float_right easing_01 transform_translate3d_top0 text_align_center display_flex_flow ">

                              <p class="position_relative border_radius_1vh padding_1vh bg_yellow float_left margin_auto">
                                © Nownigel, LLC - Making wild shit since 1992. All-Original Materials made in-house by Gnougn
                              </p>

                      </footer>

                  </div>

              </div>

          </div>

        `)

    setTimeout(

        () => {

            document.getElementById('component_app_scrolling').addEventListener("scroll", (event) => {

                console.log(event);
                //alert('yup');

                // scrolling
                console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                state = from_index.Handle_return_state();

                state.events.scroll.clientHeight = event.srcElement.clientHeight;
                state.events.scroll.clientWidth = event.srcElement.clientWidth;

                state.events.scroll.scrollHeight = event.srcElement.scrollHeight;
                state.events.scroll.scrollWidth = event.srcElement.scrollWidth;

                state.events.scroll.scrollTop = event.srcElement.scrollTop;
                state.events.scroll.scrollLeft = event.srcElement.scrollLeft;

                var currY = ((event.srcElement.scrollTop) / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100) ;
                console.log(currY);

                    document.getElementById('layer_gui_man').style =
                    'right: ' + currY + '%;';

                    document.getElementById('layer_gui_man_2').style =
                    'bottom: ' + currY + '%;';

                    document.getElementById('progress_bar_status').style =
                    'width: ' + currY + '%;';

                if (currY == 0) {
                    from_index.HANDLE_animation_plus();
                };


                if (currY == 100) {
                    from_index.HANDLE_animation_delete();
                };

                if ((document.getElementById('scroll_clientHeight')) != null) {
                    document.getElementById('scroll_clientHeight').innerHTML = (event.srcElement.clientHeight)
                }

                if ((document.getElementById('scroll_clientWidth')) != null) {
                    document.getElementById('scroll_clientWidth').innerHTML = (event.srcElement.clientWidth)
                }

                if ((document.getElementById('scroll_scrollHeight')) != null) {
                    document.getElementById('scroll_scrollHeight').innerHTML = (event.srcElement.scrollHeight)
                }

                if ((document.getElementById('scroll_scrollWidth')) != null) {
                    document.getElementById('scroll_scrollWidth').innerHTML = (event.srcElement.scrollWidth)
                }

                if ((document.getElementById('scroll_scrollTop')) != null) {
                    document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop);
                  };

                if ((document.getElementById('scroll_scrollLeft')) != null) {
                    document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
                }

                // instances      
                if (event.srcElement.scrollTop > state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                    console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position increasing');
                    console.log("instance: wheel up");
                }

                if (event.srcElement.scrollTop < state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                    console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position decreasing');
                    console.log("instance: wheel down");
                }

                if (event.srcElement.scrollTop === 0) {
                    console.log("instance: top of page");
                    // gui change
                }

                if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                    console.log('instance: scrolling started');
                    // gui change
                }

                if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                    console.log('instance: inside lead');
                    // gui change
                };

                if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                    console.log('instance: past lead');
                    // gui change
                }

                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) > (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('instance: 100vh before bottom not met');
                    // gui change
                };

                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('instance: 100vh before bottom met');
                    // gui change
                    from_index.HANDLE_animation_delete();
                };

                if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                    //alert("instance: footer met");
                }

                state.ui.gui.scroll.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

                console.log('scroll');
                console.log(event);

                from_index.Handle_get_state_from_events();

            }, false);

        }, 5000);

    return component
};

let element_guis = () => {
    let element = `

        <div id="component_app_gui_top_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed top_0 left_0 margin_auto z_index_10">
          
          <div class="height_10vh float_left position_absolute top_100 left_0 margin_auto display_flex_flow z_index_10">

            <div class="position_relative margin_auto float_left transform_translate3d_top0 easing_01">

              <div class="position_relative width_4vh height_10vh margin_205vh_left float_left"></div>

            </div>

            <div class="position_relative margin_auto float_left transform_translate3d_left0 easing_01">

              <div class="position_relative width_10vh height_1205vh margin_auto float_left"></div>

            </div>

            <div class="position_relative margin_auto float_left transform_translate3d_left0 easing_01">

              <div class="position_relative width_1250vh height_1205vh margin_auto float_left"></div>

            </div>

            <div id="icon_search" class="position_relative margin_auto float_left">

              <div class="gui_search position_relative width_5vh height_5vh margin_205vh float_left"></div>

              ${element_after_menu_search}

            </div>

          </div>

          <div class="height_10vh float_left position_relative margin_auto display_flex_flow z_index_10">

            <div class="position_relative margin_auto float_left">

              <div class="position_relative width_10vh height_10vh margin_auto float_left"></div>

            </div>

            <div class="position_relative margin_auto float_left">

              <div class="position_relative width_10vh height_10vh margin_auto float_left"></div>

            </div>

            <div class="position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align width_10vh height_10vh">

              <div class="gui_button_hire position_relative calc_2vh margin_auto float_left"></div>

            </div>

            <div class="position_relative margin_auto float_left">

              <div class="position_relative width_10vh height_10vh margin_auto float_left"></div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_top_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_25vh_width top_0 left_0 right_0 margin_auto z_index_10">

            <div class="position_absolute left_0 right_0 bottom_0 top_0  margin_auto width_10vh height_10vh float_left"></div>

        </div>

        <div id="component_app_gui_top_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_10vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_10">
            
            <div class="height_10vh float_left position_absolute top_100 right_0 margin_auto display_flex_flow z_index_10">

                <div id="icon_create" class="position_relative margin_auto float_left">

                  <div class="gui_create position_relative width_5vh height_5vh margin_1vh_bottom margin_1vh_left float_left"></div>

                  ${element_after_menu_create}

                </div>

                <div id="filler" class="position_relative margin_auto float_left width_1vh height_10vh">

                </div>

                <div class="fadeIn animated1 position_relative margin_auto float_left">

                  <div id="icon_sign_in" class="display gui_learn_buttons_login position_relative width_10vh height_10vh margin_auto float_left"></div>

                </div>

                <div class="fadeIn animated1 position_relative margin_auto float_left">

                  <div id="icon_sign_up" class="display gui_learn_buttons_sign_up position_relative width_10vh height_10vh margin_auto float_left"></div>

                </div>

                <div class="fadeIn animated1 position_relative margin_auto float_left">

                  <div id="icon_sign_out" class="display_none gui_learn_buttons_sign_out position_relative width_10vh height_10vh margin_auto float_left"></div>

                </div>

                <div id="dashboard_filler" class="display_none position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align width_10vh height_10vh">

                </div>

            </div>
            
            <div class="height_10vh float_left position_relative margin_auto display_flex_flow z_index_10">
                
                <div id="filler" class="position_relative margin_auto float_left width_10vh height_10vh">

                </div>

                <div id="icon_help" class="fadeIn animated1 position_relative width_10vh height_10vh margin_auto margin_auto float_left">
                  <div class="gui_button_help position_relative width_10vh height_10vh margin_auto float_left"></div>
                </div>

                <div id="filler" class="position_relative margin_auto float_left width_205vh height_10vh">

                </div>

                <div id="icon_hire" class="fadeIn animated1 position_relative width_10vh height_10vh margin_auto margin_auto float_left">
                  <div class="gui_button_hire position_relative width_10vh height_10vh margin_auto float_left"></div>
                </div>

                <div id="dashboard_filler_2" class="display_none position_relative margin_auto float_left width_10vh height_10vh">

                </div>

            </div>

        </div>

        <div id="component_app_gui_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_5vh right_0 margin_auto z_index_10">

            <div class="position_absolute left_0 right_0 bottom_0 top_0  margin_auto width_10vh height_10vh margin_auto float_left"></div>

        </div>

        <div id="component_app_gui_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_5vh left_0 margin_auto z_index_10">

            <div class="position_absolute left_0 right_0 bottom_0 top_0 margin_auto width_10vh height_10vh margin_auto float_left"></div>

        </div>

        <div id="component_app_gui_bottom_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_5vh float_left position_fixed bottom_0 left_0 margin_auto z_index_10">
          
          <div class="position_absolute bottom_100 right_0 display_flex_flow z_index_1 float_right">

            <span class="margin_auto position_relative float_left z_index_1 ">

              <div class="gui_logo_social_twitch position_relative width_205vh height_205vh margin_1025vh float_left"></div>

              <div class="gui_logo_social_twitter position_relative width_205vh height_205vh margin_1025vh float_left"></div>

              <div class="gui_logo_social_youtube position_relative width_205vh height_205vh margin_1025vh float_left"></div>

              <div class="gui_logo_social_facebook position_relative width_205vh height_205vh margin_1025vh float_left"></div>

              <div class="gui_logo_social_instagram position_relative width_205vh height_205vh margin_1025vh float_left"></div>

            </span>

          </div>

          <div class="position_relative margin_auto float_left">
       
            <div id="icon_help" class="gui_circle position_relative width_205vh height_205vh margin_1025vh float_left"></div>

            <div id="icon_info" class="gui_circle position_relative width_205vh height_205vh margin_1025vh float_left"></div>

            <div id="icon_location" class="gui_circle position_relative width_205vh height_205vh margin_1025vh float_left"></div>

            <div id="icon_qr" class="gui_circle position_relative width_205vh height_205vh margin_1025vh float_left"></div>

            <div id="" class="gui_i position_relative width_205vh height_205vh margin_1025vh float_left"></div>

          </div>

        </div>

        <div id="component_app_gui_bottom_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_5vh float_left position_fixed calc_25vh_width bottom_5vh left_0 right_0 margin_auto z_index_10">

          <div id="logo_scroll" class="display_webkit_box webkit_box_pack_center webkit_box_align opacity_1 easing_01 position_absolute width_100 bottom_100 left_0 right_0 margin_auto float_left">

            <a id="go_link" href="#go" class="animated1 pulse infinite position_relative margin_auto width_10vh height_10vh bottom_10vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

                <div class="gui_scroll position_relative width_75 height_75 margin_auto float_left"></div>

            </a>
        
          </div>

        </div>

        <div id="component_app_gui_bottom_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_10vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_10">

          <div class="position_relative display_flex_flow z_index_1 float_right"> 

                <span class="margin_auto position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <span class="position_relative easing_01 text_align_center float_right display_flex_flow pseudo_hover">

                        <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow">

                        </span>

                        <div class=" width_10vh height_10vh float_left position_relative float_left margin_auto display_flex_flow">
                          <div class="gui_i width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                          </div>
                        </div>

                        <span id="" class="position_relative text_align_center font_size_205vh line_height_10vh padding_1vh_right padding_1vh_top padding_1vh_bottom float_right">
                          Play Song
                        </span>

                        <div class=" width_10vh height_10vh float_left position_relative float_left margin_auto display_flex_flow">
                          <div class="gui_audio_on width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                          </div>
                        </div>

                        <div class=" width_10vh height_10vh float_left position_relative float_left margin_auto display_flex_flow">
                          <div class="gui_audio_on width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                          </div>
                        </div>

                      </span>

                    </span>

                </span>

          </div>

          <div class="position_absolute bottom_100 right_0 display_flex_flow z_index_1 float_right">  

                <span class="margin_auto position_relative float_left z_index_1 ">

                      <span class="margin_auto position_relative float_left top_0">

                        <span class="position_relative easing_01 width_100 text_align_center float_right">


                          <div id="route_workshop" class=" width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">
                            <div class="icon_social_workshop_type width_100 height_100 float_left position_relative float_left margin_auto"></div>
                          </div>

                          <div class=" width_10vh height_10vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align ">
                            <div class="gui_audio_on width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                            </div>
                          </div>

                          ${element_after_menu_workshop}

                        </span>

                      </span>

                </span>

          </div>

        </div>

        <div id="component_app_gui_arrows" class="display_none opacity_0 easing_01 transform_translate3d_top100 fadeIn animated1 position_fixed top_0 left_0 right_0 margin_auto margin_auto float_left width_100 height_100">

          <div class="position_absolute top_0 left_0 right_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_top position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute top_0 right_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_top_right position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute top_0 left_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_top_left position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute top_0 bottom_0 right_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_right position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute top_0 bottom_0 left_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_left position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute bottom_0 left_0 right_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_down position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute bottom_0 right_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_down_right position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

          <div class="position_absolute bottom_0 left_0 margin_auto margin_auto float_left width_10vh height_10vh display_flex_flow z_index_10 ">

            <div class="gui_arrow_down_left position_relative width_10vh height_10vh margin_auto float_left"></div>

          </div>

        </div>

        <div id="gui_controls" class="display_none height_10vh float_left position_fixed top_0 left_0 margin_auto z_index_10">

            <div class="enterTop animated1 position_relative margin_auto float_left transform_translate3d_top0 easing_01">

              <div id="icon_menu" class="gui_logo_navs position_relative width_4vh height_10vh margin_205vh_left float_left"></div>

              ${element_after_menu}

            </div>

            <div class="enterTop animated1 position_relative margin_auto margin_auto float_left transform_translate3d_left0 easing_01">

              <div id="icon_logo" class="gui_logo position_relative width_1205vh height_1205vh margin_auto top_-05vh float_left"></div>

            </div>

        </div>

        <div id="gui_user" class="display_none position_fixed top_0 right_0 margin_auto float_left width_10vh height_10vh z_index_10">

          <div id="icon_dashboard" class="enterTop animated1 nownigel_gui_interaction_portfolio position_relative calc_205vh margin_auto float_left"></div>

          ${element_after_menu_dashboard}

        </div>

        <div id="progress_bar" class="display_none position_absolute bottom_0 left_0 margin_auto width_100 height_1vh margin_auto float_left">
            <div id="progress_bar_border" class="position_absolute bottom_0 left_0 margin_auto calc_02vh border_01vh_dark_yellow_9 float_left overflow_hidden">
                <div id="progress_bar_status" class=" position_absolute bottom_0 left_0 margin_auto bg_white height_100 overflow_hidden float_left">
                </div>
            </div>
        </div>

        <div id="fold_pause" class="easing_01 display_none opacity_0 height_100vh width_100 float_left position_fixed top_0 left_0 margin_auto z_index_10 ">
          <div class="easing_01 opacity_05 height_100 width_100 float_left position_absolute top_0 left_0 margin_auto z_index_10 bg_pink ">
          </div>
        </div>

        <div id="fold_timeout" class="easing_01 display_none opacity_0 height_100vh width_100 float_left position_fixed top_0 left_0 margin_auto z_index_10 ">
          <div class="easing_01 opacity_05 height_100 width_100 float_left position_absolute top_0 left_0 margin_auto z_index_10 bg_green ">
          </div>
        </div>
        

    `

    return element
};

let value_ui_controls = `
  <div class="position_relative width_100 float_left font_size_4vh line_height_5vh">
  UI state:
  </div>
  <div class="position_relative width_100 float_left font_size_2vh line_height_3vh">
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

  <hr>

  <div class="width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh">events:</div>
  <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">mouse:</div>
  <div class="width_100 float_left position_relative display opacity_1">ClientX: 
  <div id="component_app_status_state_events_mouse_clientX" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">ClientY: 
  <div id="component_app_status_state_events_mouse_clientY" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">AxisX: 
  <div id="component_app_status_state_events_mouse_x_axis" class=" position_relative display opacity_1"></div>
  </div>
  <div class="width_100 float_left position_relative display opacity_1">AxisY: 
  <div id="component_app_status_state_events_mouse_y_axis" class=" position_relative display opacity_1"></div>
  </div>
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
  `;

let element_nav_top = `
    <div id="component_app_modal_element_nav_top" class="easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 margin_auto height_10vh calc_20vh_width z_index_6 webkit_box_pack_center webkit_box_align display_webkit_box ">
      
      <div class="position_relative display_flex_flow z_index_1 float_left">
          
        <span class="margin_auto position_relative float_left z_index_1 ">

          <span id="routes" class="margin_auto position_relative float_left z_index_1 ">

              <div class="width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">

                <div id="route_about" class="icon_social_about_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_about}

              </div>

              <div class="width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">

                <div id="route_team" class="icon_social_team_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_team}

              </div>

              <div class="width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">

                <div id="route_library" class="icon_social_library_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_library}

              </div>

              <div class="width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">

                <div id="route_abilities" class="icon_social_abilities_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_abilities}
                
              </div>

              <div class="width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">

                <div id="route_partners" class="icon_social_partners_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_partners}
                
              </div>

              <div class="width_10vh height_10vh float_left position_relative float_left margin_auto z_index_7">

                <div id="route_services" class="icon_social_services_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_services}

              </div>

          </span>

        </span>

      </div>

    </div>
    `

let element_nav_left = `
    <div id="component_app_modal_element_nav_left" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto">
      
      <div class="position_absolute bottom_0 left_0 right_0 float_left calc_02vh display_flex_flow border_01vh_dark_yellow_9">
      </div>
      
    </div>
    `

let element_nav_bottom = `
    <div id="component_app_modal_element_nav_bottom" class="easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_6 display_flex_flow margin_auto">
      
    </div>
    `

let element_nav_right = `
    <div id="component_app_modal_element_nav_right" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_6 margin_auto">
      
    </div>
    `

let element_page_top = `
    <div id="component_app_modal_element_page_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_6 margin_auto">
      <div id="component_app_modal_element_page_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto">
        
        <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
        </div>

      </div>

    </div>
    `

let element_page_left = `
    <div id="component_app_modal_element_page_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_6 margin_auto">
      <div id="component_app_modal_element_page_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">
      
        ${blog_content()}

      </div>
    </div>
    `

let element_page_bottom = `
    <div id="component_app_modal_element_page_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6">
      <div id="component_app_modal_element_page_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
        

      </div>
    </div>
    `

let element_page_right = `
    <div id="component_app_modal_element_page_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6">
      <div id="component_app_modal_element_page_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_pop_top = `
    <div id="component_app_modal_element_pop_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6">
      <div id="component_app_modal_element_pop_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width_500px border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
    </div>
    `

let element_pop_left = `
  <div id="component_app_modal_element_pop_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width_500px ">
        

    </div>
  </div>
  `

let element_pop_bottom = `
    <div id="component_app_modal_element_pop_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">
        
        <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
        </div>

      </div>
    </div>
  `

let element_pop_right = `
  <div id="component_app_modal_element_pop_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">
      
      <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
      </div>

    </div>
  </div>
  `

let element_morph_top =`
    <div id="component_app_modal_element_morph_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_morph_left =`
    <div id="component_app_modal_element_morph_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_morph_bottom =`
    <div id="component_app_modal_element_morph_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_morph_right =`
    <div id="component_app_modal_element_morph_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_corner_top =`
    <div id="component_app_modal_element_corner_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_corner_left =`
    <div id="component_app_modal_element_corner_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_corner_bottom =`
    <div id="component_app_modal_element_corner_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_corner_right =`
    <div id="component_app_modal_element_corner_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_menu_top =`
    <div id="component_app_modal_element_menu_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
   `

let element_menu_left = `
    <div id="component_app_modal_element_menu_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_25vh height_100vh margin_auto z_index_6">\
      
      <div class="position_absolute top_0 left_0 bg_yellow width_100 height_100 overflow_y scrollbaryhidden float_left">

        <div class="position_relative width_100 float_left">
           ${value_ui_controls}
        </div>

        <div class="position_relative width_100 float_left">


            <div id="component_route_home_page_bottom_temp" class="float_left position_relative float_left margin_auto z_index_7">
              component_route_home_page_bottom_temp
            </div>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            time: <span id="time"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_up: <span id="mouse_up"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mousedragDistanceXstart: <span id="mousedragDistanceXstart"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mousedragDistanceYstart: <span id="mousedragDistanceYstart"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mousedragDistanceXend: <span id="mousedragDistanceXend"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mousedragDistanceYend: <span id="mousedragDistanceYend"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            timer_mouse_leave: <span id="timer_mouse_leave"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            timer_key_up: <span id="timer_key_up"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            timer_mouse_up: <span id="timer_mouse_up"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            keys: <span id="key_keys"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            last key down: <span id="key_key_down"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            last key up: <span id="key_key_up"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            click_position: <span id="click_position"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            wheel_direction: <span id="wheel_direction"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            rotationAngle: <span id="rotationAngle"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            radiusX: <span id="radiusX"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            radiusY: <span id="radiusY"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceX: <span id="dragDistanceX"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceY: <span id="dragDistanceY"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceXStart: <span id="dragDistanceXStart"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceYStart: <span id="dragDistanceYStart"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceXEnd: <span id="dragDistanceXEnd"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            dragDistanceYEnd: <span id="dragDistanceYEnd"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_client_X: <span id="touch_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_client_Y: <span id="touch_client_Y"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_page_X: <span id="touch_page_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_page_Y: <span id="touch_page_Y"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_X: <span id="mouse_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_Y: <span id="mouse_client_Y"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_X: <span id="mouse_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_client_Y: <span id="mouse_client_Y"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_up_client_X: <span id="mouse_up_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_up_client_Y: <span id="mouse_up_client_Y"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_down_client_X: <span id="mouse_down_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            mouse_down_client_Y: <span id="mouse_down_client_Y"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touches: <span id="touches"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_start_client_X: <span id="touch_start_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_start_client_Y: <span id="touch_start_client_Y"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_start_force: <span id="touch_start_force"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_end_client_X: <span id="touch_end_client_X"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_end_client_Y: <span id="touch_end_client_Y"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            touch_end_force: <span id="touch_end_force"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            last_action: <span id="last_action"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_clientHeight (Container Height): <span id="scroll_clientHeight"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_clientWidth: <span id="scroll_clientWidth"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollHeight (Max Scroll Height): <span id="scroll_scrollHeight"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollWidth: <span id="scroll_scrollWidth"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollTop (Current Scroll): <span id="scroll_scrollTop"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            scroll_scrollLeft: <span id="scroll_scrollLeft"></span>
            </p>

            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_alpha: <span id="event_alpha"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_beta: <span id="event_beta"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_gamma: <span id="event_gamma"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_accelerationIncludingGravity_x: <span id="event_accelerationIncludingGravity_x"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_accelerationIncludingGravity_y: <span id="event_accelerationIncludingGravity_y"></span>
            </p>
            <p class="position_relative width_100 display_flex_flow float_left margin_auto">
            event_accelerationIncludingGravity_z: <span id="event_accelerationIncludingGravity_z"></span>
            </p>

        </div>

      </div>

    </div>`;

let element_menu_bottom = `
    <div id="component_app_modal_element_menu_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
    `

let element_menu_right = `
    <div id="component_app_modal_element_menu_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
    `

let element_fade_top = `
    <div id="component_app_modal_element_fade_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
    `

let element_fade_left = `
    <div id="component_app_modal_element_fade_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">
    </div>
    `

let element_fade_bottom = `
    <div id="component_app_modal_element_fade_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
    `

let element_fade_right = `
    <div id="component_app_modal_element_fade_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">
    </div>
    `

let element_overlay_top = `
    <div id="component_app_modal_element_overlay_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_overlay_left = `
    <div id="component_app_modal_element_overlay_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_overlay_bottom = `
    <div id="component_app_modal_element_overlay_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_overlay_right = `
    <div id="component_app_modal_element_overlay_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_gradient_top = `
    <div id="component_app_modal_element_gradient_top" class="bg_yellow easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6">

      <div class="position_absolute top_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_bottom"></div>

    </div>
    `

let element_gradient_left = `
    <div id="component_app_modal_element_gradient_left" class="bg_yellow easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100vw height_100vh margin_auto z_index_6">
    
      <div class="position_absolute left_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_right"></div>

</div>
    `

let element_gradient_bottom = `
    <div id="component_app_modal_element_gradient_bottom" class="bg_yellow easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6">
    
      <div class="position_absolute bottom_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_top"></div>

    </div>
    `

let element_gradient_right = `
    <div id="component_app_modal_element_gradient_right" class="bg_yellow easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto z_index_6">
    
      <div class="position_absolute right_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_left"></div>
    
    </div>
    `


export default {

    // defaults
    fold_content,
    element_guis,

    // components
    element_scroll_y_events,

    // routes components
    route_bg,
    route_content,
    route_fg,
    route_components,

    // post components
    route_library_content_1,
    route_library_bg_1,
    route_library_fg_1,

    // modals
    element_nav_top,
    element_nav_left,
    element_nav_bottom,
    element_nav_right,
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

}