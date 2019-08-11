// Imports
import from_index from '../index.js';

let state;

let components = (x) => {
  
  let component;
  
  if (x == 'component_scroll_x') {
    component = `
        

        <div id="preview_info" class="position_relative margin_auto float_left width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

            <div id="preview_info_scroll_x" class="position_absolute top_0 right_0 margin_auto float_left width_75vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                <div class="position_relative float_left calc_2vw border_1vw_grey">
                    
                    <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                        <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarxhidden inline_flex">
                            <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>


                        </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="preview_info_scroll_y" class="position_absolute bottom_0 left_0 margin_auto float_left width_25vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                    
                    
                        <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden">

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                        </div>


                </div>

            </div>


            <div id="preview_info_scroll_y" class="position_absolute top_25vw right_0 margin_auto float_left width_1205vw calc_25vw_height webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                    
                    
                        <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden">

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                        </div>


                </div>

            </div>

        </div>

        <div id="info_scroll_x" class="position_relative margin_auto float_left width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

            <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset">
                
                <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                    <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                        

                        <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>

                        <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                            <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                        </div>


                    </div>
                    </div>
                </div>

            </div>

          </div>


        <div id="info_scroll_y" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

            <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                
                <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">


                        <div class="position_relative calc_10vw_width padding_5vw">
                
                            <h2 class="font_size_10vw line_height_10vw">Full Height</h2>
                            <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        `
  };


  if (x == 'component_tabs') {
    component = `


        <div id="controls_after_fold" class="bg_white width_100 position_relative margin_auto float_left ">

            <div id="tabs_filler" class="bg_white width_100 position_relative margin_auto float_left height_1205vw">
            </div>

            <div id="tabs" class="position_absolute bottom_0 right_0 margin_auto float_left width_100 height_1205vw webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                <div class="position_relative float_left width_100 height_100">
                    
                    <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                        <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarxhidden inline_flex">
                            <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div id="tab_1" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_2" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab_3" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab_4" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_5" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_6" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab_7" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab_8" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_9" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_10" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab_11" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab_12" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_13" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_14" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_15" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab_16" class="gui_character_left_face position_relative width_1205vw height_100 margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100 bg_grey">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                                        <div class="position_absolute bottom_0 left_0 width_100 height_100 gui_character_left_face"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
            `
  };

  if (x == 'component_values') {
    component = `

          <div id="fold_section">      
            <div id="filler_flex" class="width_100 position_relative margin_auto float_left">        
              <div id="filler_flex" class="width_100 height_100vh display_webkit_box webkit_box_pack_center webkit_box_align position_relative margin_auto float_left">
                <div id="filler_flex" class="width_100 position_relative margin_auto float_left">
                    <h2 class="font_size_10vw line_height_10vw">Value Controls:</h2>
                    <p class="font_size_705vw line_height_705vw"><u>Click</u> to <b>active</b></p>
                    <p class="font_size_5vw line_height_5vw">(display & transform)</p>
                    <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                  </div>
              </div>


                <div id="fold_section_info_scroll_x" class="position_relative margin_auto float_left width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset">
                        
                        <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                            <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                                <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                      <div class="position_relative calc_10vw padding_5vw float_left">
                                                                    
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

                                          </div>

                                      </div>

                                </div>

                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                      <div class="position_relative calc_10vw padding_5vw float_left">
                                                                    
                                          
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


                                          </div>

                                      </div>

                                </div>

                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                      <div class="position_relative calc_10vw padding_5vw float_left">
                                                                    
                                          <div class="width_50 float_left">
                <p class="font_size_5vw line_height_5vw">WP Data</p>
                <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                
                <h1>wp_library_ol</h1>
                <div id="wp_library_ol" class="width_100 position_relative margin_auto float_left"></div>

              </div>

                                          </div>

                                      </div>

                                </div>

                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                                                          
                                              <div class="width_50 float_left">
                                                <p class="font_size_5vw line_height_5vw">WP sorts</p>
                                                <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                                  
                                                <h1>wp_filtered_library_by_title_ol</h1>
                                                <div id="wp_filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                              </div>

                                          </div>

                                      </div>

                                </div>

                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                      
              <div class="width_50 float_left">
                <p class="font_size_5vw line_height_5vw">WP C.r.u.d.</p>
                <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                  
                <h1>wp_filtered_library_by_title_ol</h1>
                <div id="wp_filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

              </div>

                                          </div>

                                      </div>

                                </div>


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                                          
              <div class="width_50 float_left">
                <p class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">Firebase Data</p>
                <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw width_100 position_relative margin_auto float_left">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                
                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">element_ol_firebase_all</h1>
                <div id="element_ol_firebase_all" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

              </div>

                                          </div>

                                      </div>

                                </div>

                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
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

                                          </div>

                                      </div>

                                </div>

                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                            
                                              <div class="width_50 float_left">
                                                <p class="font_size_5vw line_height_5vw">Firebase Sorts</p>
                                                <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                                
                                                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">firebase_library_ol</h1>
                                                <div id="firebase_library_ol" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library</h1>
                                                <div id="element_ol_firebase_sorted_library" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_time_up</h1>
                                                <div id="element_ol_firebase_sorted_library_time_up" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_time_down</h1>
                                                <div id="element_ol_firebase_sorted_library_time_down" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_title_up</h1>
                                                <div id="element_ol_firebase_sorted_library_title_up" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw width_100 position_relative margin_auto float_left">element_ol_firebase_sorted_library_title_down</h1>
                                                <div id="element_ol_firebase_sorted_library_title_down" class=" font_size_2vw line_height_2vw width_100 position_relative margin_auto float_left"></div>


                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_by_title_ol (All)</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_child_library_by_title_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_child_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_child_roster_by_title_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_child_roster_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_child_messages_by_title_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_child_messages_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_child_stream_by_title_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_child_stream_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_child_interaction_by_title_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_child_interaction_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">filtered_library_child_activity_by_title_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="filtered_library_child_activity_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">sorted_library_by_time_up_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="sorted_library_by_time_up_ol" class="width_100 position_relative margin_auto float_left"></div>

                                                <h1 class="font_size_5vw line_height_5vw">sorted_library_by_time_down_ol</h1>
                                                <div class="font_size_2vw line_height_2vw" id="sorted_library_by_time_down_ol" class="width_100 position_relative margin_auto float_left"></div>

                                              </div>

                                          </div>

                                      </div>

                                </div>


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                                
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

                                          </div>

                                      </div>

                                </div>


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                                 
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

                                          </div>

                                      </div>

                                </div>


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                                 

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
   

                                          </div>

                                      </div>

                                </div>


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                              
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
      

                                          </div>

                                      </div>

                                </div>


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                             
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


                                <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                      <div class="position_relative calc_2vw border_1vw_grey float_left">
                                        
                                        <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                                    
                                                    

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
    
          `
  };

  if (x == 'component_loading_1') {
    component = `

          <div id="component_loading_1" class="">
              <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                  <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                  <div id="row-logo-mark-type_filler"></div>
                  
                  <div class="position_absolute top_100 left_0 right_0 height_100 width_100 margin_auto">
                      <div id="gui_interaction_button_1_filler"></div>
                  </div>
              </div>
          </div>
          `
  };

  if (x == 'component_loading_2') {
    component = `

          <div id="component_loading_2" class="">
              <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                  <div id="logo_mark" class="gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                  <div id="row-logo-mark-type_filler"></div>
                  
                  <div class="position_absolute top_100 left_0 right_0 height_100 width_100 margin_auto">
                      <div id="gui_interaction_button_1_filler"></div>
                  </div>
              </div>
          </div>
          `
  };

  if (x == 'component_info_1') {
    component = `

      <div id="info" class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

        <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
          <div class="position_relative float_left calc_2vw border_1vw_white bg_grey box_shadow_bottom_right_1vw_light_dark">
            
            <div class="position_relative float_left calc_25vw margin_1205vw  color_white">
              <div class="position_relative margin_auto float_left">

                <h2 class="font_size_10vw line_height_10vw">bg Scene:</h2>
                <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
              </div>

            </div>
            
          </div>

        </div>

      </div>`
  };
  if (x == 'component_info_2') {

    component = `

              <div id="info_scroll_x" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

                <div class="position_relative margin_auto float_left calc_25vw margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset">
                        
                        <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                          <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                            <div class="height_100 width_800 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>


                            </div>
                          </div>
                        </div>

                    </div>

                  </div>

                </div>

              </div>

              <div id="info_scroll_y" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

                <div class="position_relative margin_auto float_left calc_25vw margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                  <div class="position_relative calc_10vw_width padding_5vw">
                    
                            <h2 class="font_size_10vw line_height_10vw">Full Height</h2>
                            <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                      </div>

                      </div>


                  </div>

                </div>

              </div>

              <div id="info" class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

                <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative margin_auto float_left">

                    <h2 class="font_size_10vw line_height_10vw">bg Scene:</h2>
                    <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                  </div>

                </div>

              </div>`

  };
  if (x == 'component_info_3') {

    component = `
              <div id="info" class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left calc_25vw margin_1205vw bg_white">
                      <div class="position_relative margin_auto float_left">

                        <h2 class="font_size_10vw line_height_10vw">bg Scene:</h2>
                        <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                      </div>

                    </div>
                    
                  </div>

                </div>

              </div>

              <div id="info" class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

                <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white box_shadow_bottom_right_1vw_light_dark">
                    
                    <div class="position_relative float_left width_100 height_100">
                    <div class="position_relative float_left calc_25vw margin_1205vw">
                      <div class="position_relative margin_auto float_left">

                        <h2 class="font_size_10vw line_height_10vw">bg Scene:</h2>
                        <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                      </div>

                    </div>
                    </div>

                  </div>

                </div>

              </div>

              <div id="info" class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">

                <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white box_shadow_bottom_right_1vw_light_grey">
                    
                    <div class="position_relative float_left width_100 height_100">
                    <div class="position_relative float_left calc_25vw margin_1205vw">
                      <div class="position_relative margin_auto float_left">

                        <h2 class="font_size_10vw line_height_10vw">bg Scene:</h2>
                        <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                      </div>

                    </div>
                    </div>

                  </div>

                </div>

              </div>
            `

  };
  if (x == 'component_info_4') {

    component = `

              <div id="info_scroll_x" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">

                <div class="position_absolute top_0 right_0 margin_auto float_left width_50vw height_50vh webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset">
                        
                        <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                          <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                            <div class="height_100 width_800 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>


                            </div>
                          </div>
                        </div>

                    </div>

                  </div>

                </div>

                <div class="position_absolute top_0 left_0 margin_auto float_left width_50vw height_50vh webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset">
                        
                        <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                          <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                            <div class="height_100 width_800 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_1205 height_100 margin_auto"></div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_1205 height_100 margin_auto"></div>


                            </div>
                          </div>
                        </div>

                    </div>

                  </div>

                </div>

                <div class="position_absolute bottom_0 left_0 margin_auto float_left width_50vw height_50vh webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                          <div class="position_relative calc_10vw_width padding_5vw">
                    
                            <h2 class="font_size_10vw line_height_10vw">Full Height</h2>
                            <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                          </div>

                      </div>


                  </div>

                </div>

                <div class="position_absolute bottom_0 right_0 margin_auto float_left width_50vw height_50vh webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                    
                    <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                          <div class="position_relative calc_10vw_width padding_5vw">
                    
                            <h2 class="font_size_10vw line_height_10vw">Full Height</h2>
                            <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                          </div>

                      </div>


                  </div>

                </div>

              </div>
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
  element_scene_gen
};