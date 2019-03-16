import imported_elements from './elements';

let state = '';

let colors = [

  {
    parent: 'component_app_animation_background',
    id: '',
    classList: '',
    innerHTML: `
        
      <div id="animation_layer_bg">

        <div id="paint_animation" class="display_none opacity_0 easing_01 position_absolute bottom_0 right_0 margin_auto width_100 height_100">
          
          <div id="paint_animation_svg" class="position_absolute bottom_0 right_0 margin_auto width_100 height_100">
          </div>

        </div>

        <div id="color_layer" class="display_none opacity_0 easing_01 bg_yellow position_absolute bottom_0 right_0 margin_auto width_100 height_100"></div>

        <div id="set_layer_1" class="display_none opacity_0 easing_01 gui_stage_floor position_absolute top_0 left_0 margin_auto width_100 height_100">
          
          <div class="gui_stage_floor position_absolute top_0 left_0 margin_auto width_100 height_100"></div>        
          
          <div class="gui_stage_wall position_absolute top_0 left_0 margin_auto width_100 height_100"></div>        
          
          <div class="gui_stage_lines position_absolute top_0 left_0 margin_auto width_100 height_100"></div>        

          <div class="gui_stage_door_closed position_absolute top_0 left_0 margin_auto width_100 height_100"></div>

        </div>

        <div id="set_layer_2" class="display_none opacity_0 easing_01 position_absolute top_0 left_0 margin_auto width_100 height_100">

          <div id="enneagon" class="easing_01 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
            <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto bg_pink"></div>
            <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto bg_pink"></div>
            <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto bg_pink"></div>
            <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto bg_yellow"></div>
            <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto bg_yellow"></div>
            <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto bg_yellow"></div>
            <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto bg_green"></div>
            <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto bg_green"></div>
            <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto bg_green"></div>
          </div>

          <div class="stage_workspace position_absolute bottom_0 right_0 left_0 margin_auto width_50 height_50"></div> 

        </div>        
        
        <div id="set_layer_3" class="display_none opacity_0 easing_01 bg_pink position_absolute top_0 left_0 margin_auto width_100 height_100"></div>        

        <div id="set_layer_4" class="display_none opacity_0 easing_01 bg_pink position_absolute top_0 left_0 margin_auto width_100 height_100"></div>        
        
        <div id="layer_bg_1_pieces" class="display_none opacity_0 easing_01 position_absolute top_-205vh right_25 margin_auto width_40vh height_40vh">
          <div id="animation_fourground_furniture_layer_8_svg" class="pieces_office_shoplight_on_bg position_absolute top_0 left_0 margin_auto width_100 height_100"></div>
        </div>

        <div id="layer_bg_2_pieces" class="display_none opacity_0 easing_01 piece_desk_bg position_absolute bottom_1205 left_0 right_0 margin_auto width_25vh height_25vh"></div>

        <div id="enemy" class="display_none opacity_0 easing_01 piece_desk_mg position_absolute margin_auto"></div>

        <div id="opacity" class="opacity_01">
          <div id="texture_layer" class="display_none opacity_0 easing_01 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto accent_noise_1 opacity_01"></div>
        </div>

      </div>

    `,
  },

  {

    parent: 'component_app_animation_midground',
    id: '',
    classList: '',
    innerHTML: `
   
      <div id="layer_fg_1_logo" class="display_none position_absolute bottom_0 top_0 left_0 right_0 width_33 height_33 margin_auto float_left">

      </div>

    `,

  },

  {
    parent: 'component_app_animation_foreground',
    id: '',
    classList: '',
    innerHTML: `

      <div id="animation_layer_fg">

      <div id="bullets_container" class="display_none opacity_0 easing_01 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
                </div> 

      <div id="pen_container" class="display_none opacity_0 easing_01 position_absolute width_100vw height_100vh margin_auto">
                </div> 

      <div id="pencil_container" class="display_none opacity_0 easing_01 position_absolute width_100vw height_100vh margin_auto">
                </div> 

      <div id="snakes_container" class="display_none opacity_0 easing_01 position_absolute width_100vw height_100vh margin_auto">
                </div> 

        <div id="layer_fg_1" class="display_none opacity_0 easing_01 position_absolute bottom_0 top_0 left_0 right_0 width_33 height_33 margin_auto float_left">

          <div id="gui_logo_load" class="gui_dash position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
          </div>

        </div>

        <div id="layer_fg_2" class="display_none opacity_0 easing_01 position_absolute bottom_0 top_0 left_0 right_0 width_100 max_width height_100 margin_auto float_left">

          <div id="layer_fg_2_motion" class="position_absolute bottom_0 top_0 left_0 right_0 width_33 height_33 margin_auto float_left">

            <div id="gui_logo_type" class="easing_01 position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
              <div id="gui_logo_type_svg" class="nownigel_gui_logo_type_1 position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
              </div>
            </div>

            <div id="gui_logo_mark" class="easing_01 nownigel_gui_logo_mark position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
            </div>

          </div>

        </div>

        <div id="layer_fg_1_man_motion" class="">


          <div id="layer_fg_2_man" class="display_none opacity_0 float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ">
            
            <div id="particles_health" class=" float_left position_absolute bottom_100 left_0 right_0 width_25 height_100 margin_auto ">
            </div>

            <div id="layer_fg_2_player_svg" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ">
            </div>

          </div>

        </div>

        <div id="opacity" class="opacity_05">
          <div id="effect_layer" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto effect_vignette"></div>
        </div>

      </div>

    `,
  },
  {
    parent: 'component_app_content',
    id: '',
    classList: '',
    innerHTML: `

    ${imported_elements.blog_content()}



    `,
  },
  {
    parent: 'component_app_modals',
    id: '',
    classList: '',
    innerHTML: `
    <div id="layer_modals">
      ${imported_elements.element_page_left}
      
      ${imported_elements.element_pop_top}
      ${imported_elements.element_pop_left}
      ${imported_elements.element_pop_bottom}
      ${imported_elements.element_pop_right}

      ${imported_elements.element_page_top}
      ${imported_elements.element_page_bottom}
      ${imported_elements.element_page_right}

      ${imported_elements.element_morph_top}
      ${imported_elements.element_morph_left}
      ${imported_elements.element_morph_bottom}
      ${imported_elements.element_morph_right}

      ${imported_elements.element_fade_top}
      ${imported_elements.element_fade_left}
      ${imported_elements.element_fade_bottom}
      ${imported_elements.element_fade_right}

      ${imported_elements.element_gradient_top}
      ${imported_elements.element_gradient_left}
      ${imported_elements.element_gradient_bottom}
      ${imported_elements.element_gradient_right}

      ${imported_elements.element_corner_top}
      ${imported_elements.element_corner_left}
      ${imported_elements.element_corner_bottom}
      ${imported_elements.element_corner_right}

      ${imported_elements.element_overlay_top}
      ${imported_elements.element_overlay_left}
      ${imported_elements.element_overlay_bottom}
      ${imported_elements.element_overlay_right}

      ${imported_elements.element_pip_top}
      ${imported_elements.element_pip_left}
      ${imported_elements.element_pip_bottom}
      ${imported_elements.element_pip_right}

      ${imported_elements.element_menu_top}
      ${imported_elements.element_menu_left}
      ${imported_elements.element_menu_bottom}
      ${imported_elements.element_menu_right}

      ${imported_elements.element_nav_top}
      ${imported_elements.element_nav_left}
      ${imported_elements.element_nav_bottom}
      ${imported_elements.element_nav_right}
    </div>

    `
  },


  {
    parent: 'component_app_guis',
    id: '',
    classList: '',
    innerHTML: `

      <div id="layer_guis">
        <div id="preloader"></div>
      </div>


        ${imported_elements.element_guis()}

        <div id="component_app_gui_arrows" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto float_left width_100 height_100">

          <div id="component_app_gui_arrows_top" class="easing_01 display_none opacity_0 position_absolute top_0 left_0 right_0 margin_auto margin_auto float_left width_1205vh height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_top_right" class="easing_01 display_none opacity_0 position_absolute top_0 right_0 margin_auto margin_auto float_left width_1205vh height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_top_left" class="easing_01 display_none opacity_0 position_absolute top_0 left_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_right" class="easing_01 display_none opacity_0 position_absolute top_0 bottom_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_left" class="easing_01 display_none opacity_0 position_absolute top_0 bottom_0 left_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom" class="easing_01 display_none opacity_0 position_absolute bottom_0 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom_right" class="easing_01 display_none opacity_0 position_absolute bottom_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom_left" class="easing_01 display_none opacity_0 position_absolute bottom_0 left_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

        </div>


          <div id="anchor_right" class="display_none opacity_0 easing_01 position_fixed top_0 bottom_0 right_5vh margin_auto float_left width_5vh height_40vh">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>

            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            
          </div>

          <div id="anchor_bottom" class="display_none opacity_0 easing_01 position_fixed bottom_5vh left_0 right_0 margin_auto float_left width_40vh height_5vh">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            
          </div>

          <div id="anchor_top" class="display_none opacity_0 easing_01 position_fixed top_1205vh left_0 right_0 margin_auto float_left width_40vh height_5vh">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            
          </div>

          <div id="anchor_left" class="display_none opacity_0 easing_01 position_fixed top_0 bottom_0 left_5vh margin_auto float_left width_5vh height_40vh z_index_10">
       
            <a href="#section_1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            
          </div>


            <div id="component_app_interaction_hands" class="easing_01 width_205vh height_205vh position_absolute margin_auto">
              <div id="component_app_interaction_hand" class="easing_01 bottom_50 right_50 hands width_100 height_100 position_absolute margin_auto"></div>
            </div>

          <div id="track_y" class="easing_01 gui_dash width_205vh height_205vh position_absolute margin_auto"></div>
            <div id="track_x" class="easing_01 gui_dash width_205vh height_205vh position_absolute margin_auto"></div>
            

        <div id="fold_pause" class="easing_01 display_none opacity_0 height_100vh width_100 float_left position_fixed top_0 left_0 margin_auto z_index_10 ">
          
          <div class="easing_01 opacity_1 height_100 width_100 float_left position_absolute top_0 left_0 margin_auto z_index_10 bg_pink ">


        <div id="parallax_X_Layer1" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer2" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer3" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer4" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer5" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer6" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer7" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_X_Layer8" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div>

        <div id="parallax_Y_Layer1" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer2" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer3" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer4" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer5" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer6" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer7" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
                
        <div id="parallax_Y_Layer8" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
        </div> 
        
        
            <div class="enterLeftLeaveRight infinite animated8 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated8 delay4 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated7 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated7 delay35 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated6 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated6 delay3 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated5 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated5 delay25 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated4 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated4 delay2 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated3 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated3 delay15 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated2 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated2 delay1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div class="enterLeftLeaveRight infinite animated1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 
            <div class="enterLeftLeaveRight infinite animated1 delay05 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute top_0 bottom_0 left_0 right_0 width_100vw height_100vh margin_auto">
            </div> 

            <div id="element_ball" class="easing_01 width_100 height_100 position_absolute margin_auto">

              <div id="ball" class="easing_01 circle width_10vh height_10vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>  
            
            </div>  
        

            <div id="component_app_gui_key" class="easing_01 position_absolute margin_auto">
              <div class="easing_01 gui_dash width_100 height_100 bottom_0 right_0 position_absolute margin_auto"></div>
            </div>

            <div id="component_app_gui_keyhole" class="easing_01 position_absolute margin_auto">
              <div class="easing_01 gui_dash width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
                <div class="easing_01 gui_button_enter width_100 height_100 bottom_0 right_100 position_absolute margin_auto"></div>
              </div>
            </div>

          </div>

          <div id="fold_timeout" class="easing_01 display_none opacity_0 height_100vh width_100 float_left position_fixed top_0 left_0 margin_auto z_index_10 ">
            <div class="easing_01 opacity_05 height_100 width_100 float_left position_absolute top_0 left_0 margin_auto z_index_10 bg_green ">
            </div>
          </div>

        </div>

    `,
  }
];
export default {
  colors
}
