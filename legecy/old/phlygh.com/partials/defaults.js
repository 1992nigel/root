import imported_elements from './elements';

let state = '';

let colors = [

  {
    parent: 'component_app_animation_background',
    id: '',
    classList: '',
    innerHTML: `

        <div id="cardboard_color" class="easing_1025 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
          
          <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto bg_yellow"></div>
          
          <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto bg_yellow"></div>
          
          <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto bg_yellow"></div>
          
          <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto bg_yellow"></div>

          <div id="left_outside" class="easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto bg_yellow"></div>
          
          <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto bg_white">
            
            <div id="paint_animation_paint_can_svg" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            </div>
            <div id="paint_animation_paint_can_hand_svg" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            </div>
            <div id="paint_animation_svg_4" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            </div>

          </div>

          <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto bg_yellow"></div>
          
          <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto bg_yellow"></div>
          
          <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto bg_yellow"></div>
          
          <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto bg_yellow"></div>
        
        </div>

        <div id="cardboard_bg" class="easing_1 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
          
          <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto">

          </div>
          
          <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto">

          </div>
          
          <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto">

              <div id="bg_stage_set_top" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
              </div>

              <div id="bg_stage_set_2_top" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
               
                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

                <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            
                  <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                        <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                      </div>

                  </div>

                </div>
                
              </div>

          </div>
          
          <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto">

              <div id="bg_stage_set_left" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
              </div>


            <div id="bg_stage_set_2_left" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

              <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
             
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

              <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                          
                <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                      <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                        <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      </div>

                    </div>

                </div>

              </div>
              
            </div>

          </div>

          <div id="left_outside" class="easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto">

              <div id="bg_stage_set_left_outside" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
              </div>

              <div id="bg_stage_set_2_left_outside" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
               
                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

                <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            
                  <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                        <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                      </div>

                  </div>

                </div>
                
              </div>

          </div>
          
          <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

            <div id="bg_stage_set_1_center" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
            
              <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
             
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
            </div>

            <div id="bg_stage_set_2_center" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

              <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
             
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

              <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                          
                <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                      <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                        <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      </div>

                    </div>

                </div>

              </div>
              
            </div>

            <div id="bg_stage_set_3_center" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

              <div class="bg_light_yellow_1 easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_ceiling_90_light_yellow_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_floor_90_light_yellow_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_90_light_yellow_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
             
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

              <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                          
                <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                      <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                        <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      </div>

                    </div>

                </div>

              </div>
              
            </div>

            <div id="bg_stage_set_4_center" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

              <div class="bg_dark_yellow_1 easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_ceiling_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_floor_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
             
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

              <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                          
                <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                      <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                        <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      </div>

                    </div>

                </div>

              </div>
              
            </div>

            <div id="bg_stage_set_5_center" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

              <div class="bg_dark_pink_7 easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_left width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_wall_right width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_ceiling_90_dark_yellow_9 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              <div class="stage_floor_90_dark_yellow_9 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
              
              <div class="stage_wall_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
             
              <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

              <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                          
                <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                      <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                        <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                      </div>

                    </div>

                </div>

              </div>
              
            </div>

            <div id="bg_outside" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_05">
                <div class="outside_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

            <div id="bg_sky" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_05">
                <div class="sky_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

            <div id="bg_city" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_05">
                <div class="city_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>
            
            <div id="bg_building" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_05">
                <div class="building_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

            <div id="bg_park" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_05">
                <div class="park_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

            <div id="bg_cliff" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_09">
                <div class="cliff_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

            <div id="bg_indoor" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_09">
                <div class="indoor_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

            <div id="bg_basement" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              <div id="set" class="opacity_09">
                <div class="basement_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
              </div>
            </div>

          </div>

          <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto">

              <div id="bg_stage_set_right" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
              </div>

              <div id="bg_stage_set_2_right" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
               
                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

                <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            
                  <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                        <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                      </div>

                  </div>

                </div>
                
              </div>

          </div>
          
          <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto">

              <div id="bg_stage_set_bottom" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
              </div>

              <div id="bg_stage_set_2_bottom" class="easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                <div class="bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                <div class="stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                
                <div class="stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
               
                <div class="stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>

                <div id="wall_logo" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            
                  <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                        <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                      </div>

                  </div>

                </div>
                
              </div>

          </div>
          
          <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto">

          </div>
          
          <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto">

          </div>
        
        </div>
    
        <div id="bg_texture" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
          <div class="opacity_01">
            <div class="accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
          </div>
        </div>

    `,
  },

  {

    parent: 'component_app_animation_midground',
    id: '',
    classList: '',
    innerHTML: `

        <div id="cardboard_mg" class="easing_075 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
          
          <div id="top_left" class="easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto"></div>
          
          <div id="top_right" class="easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto"></div>
          
          <div id="top" class="easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto">

              <div id="mg_stage_set_1_top" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                

                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>

              </div>
          </div>
          
          <div id="left" class="easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto">


              <div id="mg_stage_set_1_left" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                

                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>

              </div>

          </div>

          <div id="left_outside" class="easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto">

              <div id="mg_stage_set_1_left_outside" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                

                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>

              </div>
            </div>
          
          <div id="center" class="easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

              <div id="mg_stage_set_1_center" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                
              </div>

              <div id="mg_stage_set_2_center" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_0 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay2 height_3705 width_3705 position_absolute top_0 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay3 height_50 width_50 position_absolute top_0 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_0 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay5 height_3705 width_3705 position_absolute top_0 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay6 height_50 width_50 position_absolute top_0 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_0 left_6205 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay8 height_3705 width_3705 position_absolute top_0 left_75 margin_auto"></div>
                    <div id="npc" class="turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay9 height_50 width_50 position_absolute top_0 left_8705 margin_auto"></div>

                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto"></div>

              </div>


              <div id="mg_stage_set_2_interactive_center" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">

                    <div class="animated1 enterTopBounce delay2 stage_workspace width_75 height_75 position_absolute top_50 left_0 right_0 margin_auto"></div>

                </div>

          </div>

          <div id="right" class="easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto">

              <div id="mg_stage_set_1_right" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                

                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>

              </div>
          </div>
          
          <div id="bottom" class="easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto">

              <div id="mg_stage_set_1_bottom" class="easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                

                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_0 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_1205 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_25 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_3705 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_50 margin_auto"></div>
                    <div id="npc" class="turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_6205 margin_auto"></div>

              </div>
          </div>
          
          <div id="bottom_left" class="easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto"></div>
          
          <div id="bottom_right" class="easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto"></div>
        
        </div>

        <div id="mg_interactive" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
          <div id="interactive_player" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto easing_01 display_none opacity_0">
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

    `,

  },

  {
    parent: 'component_app_animation_foreground',
    id: '',
    classList: '',
    innerHTML: `

        <div id="cardboard_fg" class="easing_05 width_100 height_100 bottom_0 right_0 position_absolute margin_auto">
          
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
           
            <div id="fg_office" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
              
              <div id="fg_office_set" class="easing_01 animated1 fadeOut width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none">
                
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

              </div>
              
              </div>

            </div>

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

        <div id="draw_hand" class="display_none gui_draw_hand_1 infinite hand_move animated2 width_25 height_25 top_0 left_0 position_absolute margin_auto">
        </div>

        <div id="fg_effect" class="transform_translate3d_top0 easing_025 display_none opacity_0 ">
          <div class="effect_vignette width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0"></div>
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
      ${imported_elements.element_page_bottom}
      ${imported_elements.element_page_right}

      ${imported_elements.element_pop_top}
      ${imported_elements.element_pop_left}
      ${imported_elements.element_pop_bottom}
      ${imported_elements.element_pop_right}

      ${imported_elements.element_page_top}

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


        ${imported_elements.element_guis()}

        
          <div id="anchor_right" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed top_0 bottom_0 right_6025vw margin_auto float_left width_6025vw height_40vh">
       
            <a href="#1" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>

            <a href="#2" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#3" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#4" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#5" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#6" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#7" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            <a href="#8" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_right}
            </a>
            
          </div>

          <div id="anchor_bottom" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed bottom_1205vh left_0 right_0 margin_auto float_left width_40vw height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align ">
       
            <a href="#1" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#2" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#3" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#4" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#5" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#6" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#7" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            <a href="#8" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_top}
            </a>
            
          </div>

          <div id="anchor_top" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed top_1205vh left_0 right_0 margin_auto float_left width_40vw height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align ">
       
            <a href="#1" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#2" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#3" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#4" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#5" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#6" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#7" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            <a href="#8" class="gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left">
              ${imported_elements.anchor_menu_bottom}
            </a>
            
          </div>

          <div id="anchor_left" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed top_0 bottom_0 left_6025vw margin_auto float_left width_6025vw height_40vh">
       
            <a href="#section_1" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_2" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_3" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_4" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_5" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_6" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_7" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            <a href="#section_8" class="gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left">
              ${imported_elements.anchor_menu_left}
            </a>
            
          </div>

        <div id="component_app_gui_arrows">

          <div id="component_app_gui_arrows_top" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute top_1205 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_top_right" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute top_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_top_left" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute top_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_top_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_right" class="transform_translate3d_left0 easing_025 display_none opacity_0 position_absolute top_0 bottom_0 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_left" class="transform_translate3d_left0 easing_025 display_none opacity_0 position_absolute top_0 bottom_0 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute bottom_1205 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom_right" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute bottom_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom_right position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

          <div id="component_app_gui_arrows_bottom_left" class="transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute bottom_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align ">

            <div class="gui_arrow_bottom_left position_relative width_50 height_50 margin_auto float_left"></div>

          </div>

        </div>
        
    `,
  }
];
export default {
  colors
}
