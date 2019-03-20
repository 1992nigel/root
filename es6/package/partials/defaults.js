import imported_elements from './elements';

let state = '';

let colors = [

  {
    parent: 'component_app_animation_background',
    id: '',
    classList: 'position_fixed top_0 left_0 width_100vw height_100vh',
    innerHTML: `
  
      <div id="paint_animation_paint_can_svg" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
      </div>
      <div id="paint_animation_paint_can_hand_svg" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
      </div>
      <div id="paint_animation_svg_4" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
      </div>

      <div id="cardboard_bg" class="display_none opacity_0 easing_1 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
        
        <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto">

        </div>
        
        <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto">

        </div>
        
        <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto">

        </div>
        
        <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto">
            
            <div id="left_texture" class="opacity_01">
              <div class="accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
            </div>

            <div id="left_stage" class="display_none opacity_0 easing_1">
              
              <div id="bg_items" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto"></div>
              </div>

            </div>

            <div id="left_static" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
              <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
              <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay9 height_25 width_25 position_absolute top_6205 left_8705  margin_auto"></div>
            </div>

        </div>

        <div id="left_outside" class="easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto">

        </div>
        
        <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            
            <div id="center_texture" class="opacity_01">
              <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_ceiling_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_floor_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
            </div>

            <div id="center_stage" class="display_none opacity_0 easing_1">
            
              <div id="bg_items" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto"></div>
                
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_0 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay2 height_3705 width_3705 position_absolute top_0 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay3 height_50 width_50 position_absolute top_0 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_0 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay5 height_3705 width_3705 position_absolute top_0 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay6 height_50 width_50 position_absolute top_0 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_0 left_6205 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay8 height_3705 width_3705 position_absolute top_0 left_75 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay9 height_50 width_50 position_absolute top_0 left_8705 margin_auto"></div>

              </div>

            </div>

            <div id="center_static" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
              <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
              <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay9 height_25 width_25 position_absolute top_6205 left_8705  margin_auto"></div>
            </div>

            <div id="focus" class="animated1 enterTopBounce delay2 width_100 height_100 position_absolute top_0 left_0 right_0 margin_auto">
              <div id="double_focus" class="animated1 enterTopBounce delay2 width_100 height_100 position_absolute top_0 left_0 right_0 margin_auto">
              <div id="fg_set" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                
                <div id="fg_item" class="stage_ladder height_100 width_25 position_absolute top_1205 left_-1205 margin_auto"></div>
                  
                <div id="light_container" class="width_50 height_25 position_absolute top_0 left_0 margin_auto">
                  <div id="light" class="pieces_office_shoplight_on width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                </div>

                <div id="light_container" class="width_50 height_25 position_absolute top_0 left_50 margin_auto">
                  <div id="light" class="pieces_office_shoplight_on width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                </div>

                <div id="fg_item" class="stage_ladder height_100 width_25 position_absolute top_1205 right_-1205 margin_auto"></div>
                 
              </div>
            </div>
            
            <div class="animated1 enterTopBounce delay2 stage_workspace width_75 height_75 position_absolute top_50 left_0 right_0 margin_auto"></div>

            <div id="mg_interactive" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="interactive_player" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                <div id="interactive_player_motion" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto enterTopBounce animated1 delay1">
                <div id="player" class="frames_turnaround_nigel_full_body_standing_y_1_x_1 width_50 height_50 position_absolute margin_auto">

                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_auto">
                     
                     <span class="position_relative top_0vh left_0vh easing_01 width_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white">
                        <div class="overflow_hidden width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
                           <div class="width_100 position_relative float_left padding_1vh bg_white border_01vh_dark_yellow_9 border_radius_1vh">

                              <span class="position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                                  <span class="font_gaegu font_size_2vh line_height_5vh position_relative float_left">
                                  <div class="z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto"></div>
                                    <div class="webkit_box_pack_center webkit_box_align display_webkit_box width_100 float_left"><b class="float_left position_relative">y_axis: </b><div id="interactive_particle_dialogue_y" class="float_left position_relative">null</div></div>
                                    <div class="webkit_box_pack_center webkit_box_align display_webkit_box width_100 float_left"><b class="float_left position_relative">x_axis: </b><div id="interactive_particle_dialogue_x" class="float_left position_relative">null</div></div>
                                  </span>
                              </span>

                           </div>
                        </div>
                     </span>

                     <div class="gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left"></div>

                    </span>

                </div>
              </div>
              </div>
            </div>

        </div>

        <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto">
          
            <div id="right_texture" class="opacity_01">
              <div class="accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
            </div>

            <div id="right_stage" class="display_none opacity_0 easing_1">
              
              <div id="bg_items" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>
                <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto"></div>
              </div>

            </div>

            <div id="right_static" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
              <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
              <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay9 height_25 width_25 position_absolute top_6205 left_8705  margin_auto"></div>
            </div>

        </div>
        
        <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto">

        </div>
        
        <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto">

        </div>
        
        <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto">

        </div>
      
      </div>

    `,
  },
  {
    parent: 'component_app_animation_midground',
    id: '',
    classList: 'position_fixed top_0 left_0 width_100vw height_100vh',
    innerHTML: `
      

    `,
  },
  {
    parent: 'component_app_animation_foreground',
    id: '',
    classList: '',
    innerHTML: `

    `,
  },
  {
    parent: 'component_app_content',
    id: '',
    classList: '',
    innerHTML: `

      <div class="position_relative width_100 height_100 overflow_y float_left">
        
        <div id="fold_filler" class="position_relative width_100 height_100vh margin_auto float_left">
          
          <div id="fold" class="position_relative width_100 height_100vh margin_auto float_left display_none opacity_0 easing_01 transform_translate3d_left0 ">
            <div class="position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align ">

              <div class="responsive_desktop_only calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                  <div id="logo_motion" class="animated1 fadeIn width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                      
                    <div id="logo_left_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                        <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_center_container" class="animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                      <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_right_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                      <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                      <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                          
                          <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                          
                          </div>
                      
                      </div>

                    </div>

                    <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                        <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                              <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                
                                  <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                      <div id="gui_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                      </div>

                                      <div class="gui_or position_relative width_1205 height_100 float_left">
                                      </div>
                                      
                                      <div id="gui_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                      </div>

                                  </div>

                              </div>

                        </div>

                    </div>

                  </div>

              </div>

              <div class="responsive_ipad_only calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                  <div id="logo_motion" class="animated1 fadeIn width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                    
                    <div id="logo_left_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                        <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_center_container" class="animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                      <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_right_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                      <div id="logo" class="gui_move_note width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                      <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                          
                          <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                          
                          </div>
                      
                      </div>

                    </div>

                    <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                        <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                              <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                
                                  <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                      <div id="gui_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                      </div>

                                      <div class="gui_or position_relative width_1205 height_100 float_left">
                                      </div>
                                      
                                      <div id="gui_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                      </div>

                                  </div>

                              </div>

                        </div>

                    </div>

                  </div>

              </div>

              <div class="responsive_iphone_only calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                  <div id="logo_motion" class="animated1 fadeIn width_8705 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                    
                    <div id="logo_bottom_container" class="animated1 fadeIn width_100 position_absolute bottom_100 left_0 right_0 margin_auto">

                      <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                        <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                            
                            <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                            
                            </div>
                        
                        </div>

                      </div>

                      <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                          <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                  
                                    <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                        <div id="gui_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                        </div>

                                        <div class="gui_or position_relative width_1205 height_100 float_left">
                                        </div>
                                        
                                        <div id="gui_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                        </div>

                                    </div>

                                </div>

                          </div>

                      </div>

                    </div>

                    <div id="logo_center_container" class="animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                      <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                    </div>

                    <div id="logo_bottom_container" class="animated1 fadeIn width_100 position_absolute top_100 left_0 right_0 margin_auto">

                      <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                          <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                  
                                    <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                        <div id="gui_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                        </div>

                                        <div class="gui_or position_relative width_1205 height_100 float_left">
                                        </div>
                                        
                                        <div id="gui_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                        </div>

                                    </div>

                                </div>

                          </div>

                      </div>

                      <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                        <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                            
                            <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                            
                            </div>
                        
                        </div>

                      </div>

                    </div>

                  </div>

              </div>

            </div>
          </div>

        </div>

        <div class="position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left">

          <h2 id="">element_ol_firebase_skills</h2>
          <ol id="element_ol_firebase_skills"></ol>
          <h2 id="">element_ol_firebase_services</h2>
          <ol id="element_ol_firebase_services"></ol>
          <h2 id="">element_ol_firebase_partners</h2>
          <ol id="element_ol_firebase_partners"></ol>
          <h2 id="">element_ol_firebase_abilities</h2>
          <ol id="element_ol_firebase_abilities"></ol>
          <h2 id="">element_ol_firebase_library</h2>
          <ol id="element_ol_firebase_library"></ol>
          <h2 id="">element_ol_firebase_roster</h2>
          <ol id="element_ol_firebase_roster"></ol>

        </div>

      </div>

    `,
  },
  {
    parent: 'component_app_modals',
    id: '',
    classList: '',
    innerHTML: `000`
  },
  {
    parent: 'component_app_guis',
    id: '',
    classList: '',
    innerHTML: `${imported_elements.element_guis()}`,
  }
];
export default {
  colors
}
