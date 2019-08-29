
import functions from './functions';

let element_lead = (x) => {
    
  let data = `
  <div id="element_lead" class="position_relative width_100vw height_100vh float_left margin_auto">
      ` + x + `
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_full = (x) => {
    
  let data = `
  <div id="element_full" class="position_relative width_100vw height_100vh float_left margin_auto">
      ` + x + `
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_flex = (x) => {
    
  let data = `
  <div id="element_flex" class="position_relative width_100vw float_left margin_auto">
      ` + x + `
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
  <div id="element_fold" class="position_relative width_100vw height_100vh float_left margin_auto bg_grey color_white">
      ` + x + `
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_modal_gradient_right = () => {
    
  let data = `
  <div id="element_modal_gradient_right" class="transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto">

  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_overflow_y = () => {
    
  let data = `

    <div id="element_overflow_y" class="position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
        <div class="position_relative width_100 float_left">

          <div id="bg-character" class="gui_character position_relative width_100 height_25vw margin_auto"></div>
          <div id="bg-character" class="gui_character position_relative width_100 height_25vw margin_auto"></div>
          <div id="bg-character" class="gui_character position_relative width_100 height_25vw margin_auto"></div>

        </div>
    </div>

  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_overflow_x = () => {
    
  let data = `
    <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow">
      <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
        
        <div id="bg-character" class="gui_character position_relative width_50vw height_25vw margin_auto"></div>


        <div id="bg-character" class="gui_character position_relative width_50vw height_25vw margin_auto"></div>


        <div id="bg-character" class="gui_character position_relative width_50vw height_25vw margin_auto"></div>

        </div>
      </div>
    </div>

  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};


let lead_calc = () => {
    
  let data = `

    
                    <div id="lead_container" class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">

                        <div id="fold_top_left" class="position_absolute top_0 left_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="fold_top" class="position_absolute top_0 left_0 right_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="fold_top_right" class="position_absolute top_0 right_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="fold_center_left" class="position_absolute top_0 bottom_0 left_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>
                        
                        <div id="fold_center" class="position_absolute top_0 bottom_0 left_0 right_0 height_33 width_33 margin_auto">
                            <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            <div id="logo_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>

                        </div>

                        <div id="fold_center_right" class="position_absolute top_0 bottom_0 right_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="fold_bottom_left" class="position_absolute bottom_0 left_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="fold_bottom" class="position_absolute bottom_0 left_0 right_0 height_33 width_33 margin_auto">
                                                        
                              <div id="filler" class="position_relative height_33 width_100 margin_auto float_left">
                              </div>

                              <div class="position_relative height_33 width_100 margin_auto float_left">

                                <div class="position_absolute right_100 top_0 bottom_0 height_100 width_33flex margin_auto float_left">
                                  <div id="vr_interaction_text_press" class="gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto"></div>                                  
                                </div>

                                <div class="position_relative height_100 width_33flex margin_auto float_left">
                                    
                                    <div class="position_absolute bottom_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">
                                      <div class="position_relative height_50 width_100 margin_auto float_left">
                                          <div id="vr_interaction_text_press" class="gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto"></div>
                                      </div>
                                    </div>

                                    <div id="vr_interaction_button_start" class="gui_interaction_button_start position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>

                                    <div class="position_absolute top_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">
                                      <div class="position_relative height_50 width_100 margin_auto float_left">
                                          <div id="vr_interaction_text_press" class="gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto"></div>
                                      </div>
                                    </div>

                                </div>
                                <div class="position_relative height_100 width_33flex margin_auto float_left">
                                    <div class="gui_interaction_text_or position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                                </div>
                                <div class="position_relative height_100 width_33flex margin_auto float_left">
                                    
                                    <div class="position_absolute bottom_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">
                                      <div class="position_relative height_50 width_100 margin_auto float_left">
                                          <div id="vr_interaction_text_press" class="gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto"></div>
                                      </div>
                                    </div>

                                    <div id="vr_interaction_button_learn" class="gui_interaction_button_learn position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                                
                                    <div class="position_absolute top_100 left_0 right_0 height_50 width_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">
                                      <div class="position_relative height_50 width_100 margin_auto float_left">
                                          <div id="vr_interaction_text_press" class="gui_interaction_text_press position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto"></div>
                                      </div>
                                    </div>

                                </div>

                              </div>
                        </div>

                        <div id="fold_bottom_right" class="position_absolute bottom_0 right_0 height_33 width_33 margin_auto">
                            <div class="position_absolute top_0 left_0 right_0 height_100 width_100 margin_auto">
                                <div class="gui_interaction_button_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                            </div>
                        </div>

                    </div>

  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};


let element_nav_border = () => {
    
  let data = `
    
      <div id="modal_nav_top" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 display_none opacity_0 bg_grey">
         <div id="modal_nav_top_container" class="">
         </div>
         <div id="hover_item_top" class="position_relative float_left height_100 width_6025 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div id="bg-character" class="gui_link_menu_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 1
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_1" class="position_relative float_left height_100 width_1205 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div id="logo_type" class="">
                  </div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 2
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_2" class="position_relative float_left height_100 width_6025 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div id="bg-character" class="gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 3
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_3" class="position_relative float_left height_100 width_6025 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div id="bg-character" class="gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 4
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_4" class="position_relative float_left height_100 width_1205 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div class="gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 5
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_5" class="position_relative float_left height_100 width_1205 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div class="gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 6
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_6" class="position_relative float_left height_100 width_1205 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div class="gui_link_post_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 7
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_7" class="position_relative float_left height_100 width_1205 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div class="gui_link_sign_up_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 8
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_8" class="position_relative float_left height_100 width_1205 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 9
               </div>
            </div>
         </div>
         <div id="modal_nav_top_link_9" class="position_relative float_left height_100 width_6025 ">
            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey">
                  <div class="gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
               </div>
            </div>
            <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
               <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                inside nav 10
               </div>
            </div>
         </div>
      </div>

  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

export default {
  element_lead,
  element_full,
  element_flex,
  element_fold,
  element_modal_gradient_right,
  element_overflow_x,
  element_overflow_y,
  lead_calc
};
