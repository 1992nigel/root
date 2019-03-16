import imported_elements from './elements';

let state = '';

let colors = [

  {
    parent: 'component_app_animation_background',
    id: '',
    classList: '',
    innerHTML: `

    <div class="display_none bg_yellow width_100 height_100vh position_absolute top_0 left_0 bottom_0 right_0 margin_auto">
      <div class="bg_yellow calc_1205vh position_absolute top_0 left_0 bottom_0 right_0 margin_auto">
        <div class="bg_light_yellow_9 calc_1205vh_width calc_25vh_height position_absolute top_0 left_0 bottom_0 right_0 margin_auto box_shadow_bottom_right_1vh_dark_inset overflow_hidden border_radius_1vh ">
          
        </div>
      </div>
    </div>

    <div class="width_100 height_100vh position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
      <div id="stage_layer" class="animated1 fadeIn easing_01 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">

          <div id="enneagon" class="easing_1 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
            
            <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto bg_pink"></div>
            <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto bg_pink"></div>
            <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto bg_pink"></div>
            <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto bg_pink"></div>
            
            <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
              
              <div id="grids" class="opacity_01">
                <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_grid"></div>
                <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_perspective"></div>
              </div>

              <div id="loading_wall" class="opacity_01">
                <div id="paint_animation_hand_holding_paint" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_1"></div>
                <div id="paint_animation_paint_can_svg" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_1"></div>
                <div id="painting_wall" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_1"></div>
              </div>

              <div id="office_room" class="opacity_0 display_none easing_01">
                <div id="floor" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_3"></div>
                <div id="floor_lines" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines"></div>
                <div id="wall_lines_left" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_1"></div>
                <div id="wall_lines_right" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_2"></div>
                <div id="wall_grow" class="grow_seven_eights animated1 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_stage_lines_wall"></div>
                <div id="wall_door" class="gui_stage_door_closed position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_100 height_100"></div>

              </div>
            
            </div>

            <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto bg_green"></div>
            <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto bg_green"></div>
            <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto bg_green"></div>
            <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto bg_green"></div>
          
          </div>

      </div>

      <div id="touch_move_ctas" class="easing_01 display_none opacity_0 position_absolute bottom_0 top_0 right_0 width_100 height_100 margin_auto float_left">
        
        <div id="logo_filler" class="position_absolute bottom_0 top_0 left_0 right_0 width_25 height_20vh margin_auto float_left">

            <div id="logo_links_left" class="width_100 height_100 float_left position_absolute top_0 bottom_0 right_100 margin_auto">
              <div class="gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto"></div>
            </div>

            <div id="fold_logo" class="gui_logo_full position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left opacity_02">
            </div>

            <div id="fold_stamp" class="gui_logo_stamp position_absolute bottom_100 right_25 width_100 height_100 margin_auto float_left">
            </div>

            <div id="logo_links_right" class="width_100 height_100 float_left position_absolute top_0 bottom_0 left_100 margin_auto">
              <div class="gui_logo_links width_100 height_100 float_left position_relative float_left margin_auto"></div>
            </div>

            <div id="fold_note" class="position_absolute width_100 height_100 top_100 left_0 right_0 margin_auto float_left">
                <div class=" position_absolute width_75 height_50 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                </div>
            </div>

        </div>
      </div>

      <div id="loading_logo_scene">

        <div id="stand_in" class="opacity_01">

          <div class="width_100 height_100 float_left position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
            
            <div class="gui_logo_stand_in width_100 height_100 float_left position_relative float_left margin_auto opacity_01"></div>
            <div id="cta_left" class="desktop_cta_buttons width_1205 height_50 position_absolute top_0 bottom_0 left_0 margin_auto"></div>
            <div id="cta_right" class="desktop_cta_lined_buttons width_1205 height_50 position_absolute top_0 bottom_0 right_0 margin_auto"></div>
            <div id="cta_bottom" class="desktop_cta_horizontal_lined_buttons width_50 height_1205 position_absolute bottom_0 left_0 right_0 margin_auto"></div>
            <div id="cta_top" class="desktop_cta_horizontal_lined_bottom_buttons width_50 height_1205 position_absolute top_0 right_0 left_0 margin_auto"></div>
            <div id="fold_icons" class="desktop_cta_horizontal_buttons width_50 height_1205 position_absolute top_1205 right_0 left_0 margin_auto"></div>

          </div>

        </div>
      </div>

      <div id="game" class="opacity_0 display_none easing_01">
        <div id="enemy" class="bg_pink position_absolute">
        </div>

        <div id="bridge" class="bg_green position_absolute">
        </div>

        <div id="player_1_svg">
        </div>

        <div id="player_2_svg">
        </div>
      </div>

      <div id="foreground_layers">

        <div id="foreground_layers" class="opacity_01">

          <div id="foreground_lights" class="easing_01 position_absolute top_-205vh right_25 margin_auto width_40vh height_40vh">
            <div id="animation_fourground_furniture_layer_8_svg" class="pieces_office_shoplight_on_bg position_absolute top_0 left_0 margin_auto width_100 height_100"></div>
          </div>

          <div id="hands">

            <div id="hand_draw" class="delay3 animated4 pulse_around_full infinite delay1 position_absolute top_0 left_0 margin_auto width_100 height_100">
              <div id="hand_pencil_center" class="infinite animated1 pulse_around position_absolute hand_pencil_center top_0 left_0 margin_auto width_100 height_100">
              </div>
            </div>

            <div id="hand_draw" class="delay3 animated4 enterRightLeaveLeft delay1 position_absolute bottom_1205 left_0 margin_auto width_100 height_100">
              <div class="infinite animated1 pulse_around hand_pencil_bottom_left position_absolute bottom_0 left_0 margin_auto width_100 height_100">
              </div>
            </div>

            <div id="hand_draw" class="delay3 animated4 enterLeftLeaveRight delay1 position_absolute top_1205 left_0 margin_auto width_100 height_100">
              <div class="infinite animated1 pulse_around hand_pencil_top_right position_absolute bottom_0 left_0 margin_auto width_100 height_100">
              </div>
            </div>

            <div id="hand_draw" class="delay3 animated4 enterBottomLeaveTop delay1 position_absolute top_0 left_1205 margin_auto width_100 height_100">
              <div class="infinite animated1 pulse_around hand_pencil_top_left position_absolute bottom_0 left_0 margin_auto width_100 height_100">
              </div>
            </div>

            <div id="hand_draw" class="delay3 animated4 enterTopLeaveBottom delay1 position_absolute bottom_0 right_1205 margin_auto width_100 height_100">
              <div class="infinite animated1 pulse_around hand_pencil_bottom_right position_absolute bottom_0 left_0 margin_auto width_100 height_100">
              </div>
            </div>

            <div id="two_hands" class="animated4 pulse_around infinite nownigel_gui_interaction_hands_0_0_depth_200 position_absolute bottom_-205vh left_0 right_0 margin_auto width_100 height_50">
            </div>
          </div>

          <div id="opacity" class="opacity_05">
            <div id="effect_layer" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto effect_vignette"></div>
          </div>

          <div id="opacity" class="opacity_01">
            <div id="texture_layer" class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_100 height_100"></div>
          </div>


          <div id="anchor_right" class="position_fixed top_0 bottom_0 right_1205vh margin_auto float_left width_6025vh height_40vh z_index_10">
       
            <a href="#1" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>

            <a href="#2" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#3" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#4" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#5" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#6" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#7" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#8" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            
          </div>

          <div id="anchor_bottom" class="position_fixed bottom_1205vh left_0 right_0 margin_auto float_left width_40vh height_6025vh z_index_10">
       
            <a href="#1" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#2" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#3" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#4" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#5" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#6" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#7" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#8" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            
          </div>

          <div id="anchor_top" class="position_fixed top_1205vh left_0 right_0 margin_auto float_left width_40vh height_6025vh z_index_10">
       
            <a href="#1" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#2" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#3" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#4" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#5" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#6" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#7" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#8" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            
          </div>

          <div id="anchor_left" class="position_fixed top_0 bottom_0 left_1205vh margin_auto float_left width_6025vh height_40vh z_index_10">
       
            <a href="#section_1" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_2" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_3" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_4" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_5" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_6" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_7" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_8" class="gui_circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            
          </div>
    
        </div>
      </div>
    
    </div>

    `,
  },

  {

    parent: 'component_app_animation_midground',
    id: '',
    classList: '',
    innerHTML: `
      <div id="animation_layer_fg">

      </div>
    `,

  },

  {
    parent: 'component_app_animation_foreground',
    id: '',
    classList: '',
    innerHTML: `
      <div id="animation_layer_fg">

      </div>
    `,
  },
  {
    parent: 'component_app_content',
    id: '',
    classList: '',
    innerHTML: `

      ${imported_elements.component_app_content_root()}

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

          <div id="component_app_gui_arrows_top" class="easing_01 display_none opacity_0 position_absolute top_6025 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_top_right" class="easing_01 display_none opacity_0 position_absolute top_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_top_left" class="easing_01 display_none opacity_0 position_absolute top_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_right" class="easing_01 display_none opacity_0 position_absolute top_0 bottom_0 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_left" class="easing_01 display_none opacity_0 position_absolute top_0 bottom_0 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom" class="easing_01 display_none opacity_0 position_absolute bottom_6025 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom_right" class="easing_01 display_none opacity_0 position_absolute bottom_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom_left" class="easing_01 display_none opacity_0 position_absolute bottom_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

        </div>

          <div id="anchor_right" class="display_none opacity_0 easing_01 position_fixed top_0 bottom_0 right_6025vh margin_auto float_left width_6025vh height_40vh z_index_10">
       
            <a href="#1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>

            <a href="#2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            
          </div>

          <div id="anchor_bottom" class="display_none opacity_0 easing_01 position_fixed bottom_3vh left_0 right_0 margin_auto float_left width_40vh height_6025vh z_index_10">
       
            <a href="#1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            
          </div>

          <div id="anchor_top" class="display_none opacity_0 easing_01 position_fixed top_3vh left_0 right_0 margin_auto float_left width_40vh height_6025vh z_index_10">
       
            <a href="#1" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#2" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#3" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#4" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#5" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#6" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#7" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#8" class="circle gui_close_on_hover position_relative width_205vh height_205vh margin_1025vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            
          </div>

          <div id="anchor_left" class="display_none opacity_0 easing_01 position_fixed top_0 bottom_0 left_6025vh margin_auto float_left width_6025vh height_40vh z_index_10">
       
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

              <div id="componentShape" class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_100vh width_100">
                  <div id="componentCube" class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                      <figure class="front bg_yellow">
                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>
                      </figure>
                      <figure class="back bg_pink">
                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>
                      </figure>
                      <figure class="right bg_green">
                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>
                      </figure>
                      <figure class="left bg_yellow">
                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>
                      </figure>
                      <figure class="top bg_yellow">
                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>
                      </figure>
                      <figure class="bottom bg2-5">
                          <div class="calc_02vh position_absolute top_0 bottom_0 left_0 right_0 margin_auto float_left"></div>
                      </figure>
                  </div>
              </div>

              <div id="bounce" class="easing_01 gui_dash width_205vh height_205vh position_absolute margin_auto"></div>
                  
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
