import from_index from '../index.js';

let state = '';
let last_set = 0;
let direction = 'down'

let standing_up_frame = 0;
let standing_down_frame = 0;
let standing_left_frame = 0;
let standing_right_frame = 0;
 
let Handle_folds = () => {

    state = from_index.Handle_return_state();


        if ((document.getElementById('fold_1')) != null ) {

            if (state.animation.instances.sequence == 0) {
                
                console.log('sequence next 1');
                document.getElementById('fold_1').innerHTML = ``

                document.getElementById('root_loading').classList.remove('fadeIn')
                document.getElementById('root_loading').classList.add('fadeOut')

                // stops the redraw
                state.animation.instances.sequence = .1;
            };

            if (state.animation.instances.sequence == 1) {

                document.getElementById('root_loading').classList.add('display_none');
                
                console.log('sequence next 1');
                document.getElementById('fold_1').innerHTML = `

                    <div id="fold_1_loading" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                        <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                            <div id="fold_1_loading_motion" class="width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_1_loading_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                                    
                                    <div id="fold_1_loading_svg" class="gui_made_by width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                                
                                </div>

                            </div>

                        </div>

                    </div>

                `
                // stops the redraw
                state.animation.instances.sequence = 1.1;
            };

            if (state.animation.instances.sequence == 2) {
                console.log('sequence next 2');
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="fold_1_loading" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                        <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                            <div id="fold_1_loading_motion" class="width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_1_loading_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                                    
                                    <div id="fold_1_loading_svg" class="gui_original width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                                
                                </div>

                            </div>

                        </div>

                    </div>

                `
                // stops the redraw
                state.animation.instances.sequence = 2.1;
            };

            if (state.animation.instances.sequence == 3) {
                console.log('sequence next 3');
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="fold_1_loading" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                        <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                            <div id="fold_1_loading_motion" class="width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_1_loading_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                                    
                                    <div id="fold_1_loading_svg" class="gui_based width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                                
                                </div>

                            </div>

                        </div>

                    </div>

                `
                // stops the redraw
                state.animation.instances.sequence = 3.1;
            };

            if (state.animation.instances.sequence == 4) {
                console.log('sequence next 4');
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="fold_1_loading" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                        <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                            <div id="fold_1_loading_motion" class="width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_1_loading_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                                    
                                    <div id="fold_1_loading_svg" class="gui_handcrafted width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                                
                                </div>

                            </div>

                        </div>

                    </div>

                `
                // stops the redraw
                state.animation.instances.sequence = 4.1;
            };

            if (state.animation.instances.sequence == 5) {
                console.log('sequence next 5');
                
                document.getElementById('fold_1').innerHTML = `

                `
                // stops the redraw
                state.animation.instances.sequence = 5.1;
            };

            if (state.animation.instances.sequence == 6) {
                
                document.getElementById('fold_1').innerHTML = `

                `
                // stops the redraw
                state.animation.instances.sequence = 6.1;
            };

            if (state.animation.instances.sequence == 7) {
                
                document.getElementById('fold_1').innerHTML = `

                `

                // stops the redraw
                state.animation.instances.sequence = 7.1;
            };

            if (state.animation.instances.sequence == 8) {
                
                document.getElementById('fold_1').innerHTML = `

                `

                // stops the redraw
                state.animation.instances.sequence = 8.1;
            };

            if (state.animation.instances.sequence == 9) {
                
                document.getElementById('fold_1').innerHTML = `

                `

                // stops the redraw
                state.animation.instances.sequence = 9.1;
            };

            if (state.animation.instances.sequence == 10) {
                
                document.getElementById('fold_1').innerHTML = `

                `
                // stops the redraw
                state.animation.instances.sequence = 10.1;
            };

            if (state.animation.instances.sequence == 11) {
                
                document.getElementById('fold_1').innerHTML = `

                `
                // stops the redraw
                state.animation.instances.sequence = 11.1;
            };

            if (state.animation.instances.sequence == 12) {
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="fold_1_loading" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                            
                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                                <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                                <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                                <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                          </div>

                      </div>

                    </div>

                `
                // stops the redraw
                state.animation.instances.sequence = 12.1;

            };

            if (state.animation.instances.sequence == 13) {
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="fold_1_loading" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                            
                            <div id="logo_left_container" class="width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                            <div id="logo_right_container" class="width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                            </div>

                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto">

                              <div id="fold_note" class="position_absolute width_100 height_50 top_0 left_0 right_0 margin_auto float_left">
                                  
                                  <div class="animated1 pulse infinite easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                  
                                  </div>
                              
                              </div>

                            </div>

                          </div>

                      </div>

                    </div>

                `
                // stops the redraw
                state.animation.instances.sequence = 13.1;

            };
            
            if (state.animation.instances.sequence == 14) {
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="folds_14" class="width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                            
                            <div id="logo_left_container" class="animated1 fadeOut width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                                <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                            <div id="logo_center_container" class="animated1 fadeOut width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
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

                            <div id="logo_bottom_container" class="animated1 fadeOut width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto">

                              <div id="fold_note" class="position_absolute width_100 height_50 top_0 left_0 right_0 margin_auto float_left">
                                  
                                  <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                  
                                  </div>
                              
                              </div>

                            </div>

                            <div id="logo_bottom_container" class="animated1 delay1 fadeIn width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto">

                                <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                      <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                        
                                          <div class="position_relative margin_auto float_left">

                                              <div id="gui_start" class="gui_button_start position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                              <div class="gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left">
                                              </div>
                                              
                                              <div id="gui_learn" class="gui_button_learn position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                          </div>

                                      </div>

                                </div>

                            </div>

                          </div>

                      </div>

                    </div>

                `

                // stops the redraw
                state.animation.instances.sequence = 14.1;
            };

            // fading from cursor moved to start
            if (state.animation.instances.sequence == 15) {
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="folds_15" class="fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                            
                            <div id="logo_left_container" class="width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                            </div>

                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                            </div>

                            <div id="logo_right_container" class="width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto">

                                <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                      <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                        
                                          <div class="position_relative margin_auto float_left">

                                              <div id="gui_start" class="gui_button_start position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                              <div class="gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left">
                                              </div>
                                              
                                              <div id="gui_learn" class="gui_button_learn position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                          </div>

                                      </div>

                                </div>

                            </div>

                          </div>

                      </div>

                    </div>

                `

                setTimeout(function() {
                    state.animation.instances.sequence = 16;
                }, 2000);

                // stops the redraw
                state.animation.instances.sequence = 15.1;
            };

            if (state.animation.instances.sequence == 16) {
                
                document.getElementById('fold_1').innerHTML = `
                    <div id="folds_16" class="fadeIn animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            
                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                            
                            <div id="logo_right_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>


                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                            
                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 left_0 margin_auto">
                            
                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left">

                                          <div id="gui_back" class="gui_button_back position_relative  width_1205vh height_10vh float_left">
                                          </div>
                                          <div id="gui_enter" class="gui_button_enter position_relative  width_1205vh height_10vh float_left">
                                          </div>

                                      </div>

                                  </div>

                              </div>

                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_100 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                          </div>
                    </div>
                </div>

                `

                setTimeout(function() {

                    // stops the redraw
                    //state.animation.instances.sequence = 16;

                }, 1000);

                // stops the redraw
                state.animation.instances.sequence = 16.1;
            };

            // fading start back to cursor moved
            if (state.animation.instances.sequence == 17) {
                
                document.getElementById('fold_1').innerHTML = `
                    <div id="folds_17" class="fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            
                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                            
                            <div id="logo_right_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>


                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                            
                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 left_0 margin_auto">
                            
                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left">

                                          <div id="gui_back" class="gui_button_back position_relative  width_1205vh height_10vh float_left">
                                          </div>
                                          <div id="gui_enter" class="gui_button_enter position_relative  width_1205vh height_10vh float_left">
                                          </div>

                                      </div>

                                  </div>

                              </div>

                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_100 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                          </div>
                    </div>
                </div>

                `

                setTimeout(function() {

                    // stops the redraw
                        state.animation.instances.sequence = 18;

                }, 1000);

                // stops the redraw
                state.animation.instances.sequence = 17.1;
            };

            if (state.animation.instances.sequence == 18) {
                
                document.getElementById('fold_1').innerHTML = `

                    <div id="folds_18" class="animated1 fadeIn width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                            
                            <div id="logo_left_container" class="width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                            </div>

                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                            </div>

                            <div id="logo_right_container" class="width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto">

                                <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                      <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                        
                                          <div class="position_relative margin_auto float_left">

                                              <div id="gui_start" class="gui_button_start position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                              <div class="gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left">
                                              </div>
                                              
                                              <div id="gui_learn" class="gui_button_learn position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                          </div>

                                      </div>

                                </div>

                            </div>

                          </div>

                      </div>

                    </div>

                `

                // stops the redraw
                state.animation.instances.sequence = 18.1;
            };

            // fading start to enter game "empty"
            if (state.animation.instances.sequence == 19) {
                
                document.getElementById('fold_1').innerHTML = `
                    <div id="folds_19" class="fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            
                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                            
                            <div id="logo_right_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>


                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                            
                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 left_0 margin_auto">
                            
                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left">

                                          <div id="gui_back" class="gui_button_back position_relative  width_1205vh height_10vh float_left">
                                          </div>
                                          <div id="gui_enter" class="gui_button_enter position_relative  width_1205vh height_10vh float_left">
                                          </div>

                                      </div>

                                  </div>

                              </div>

                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_100 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                          </div>
                    </div>
                </div>

                `

                setTimeout(function() {

                    // stops the redraw
                    //state.animation.instances.sequence = 18;

                }, 1000);

                // stops the redraw
                state.animation.instances.sequence = 19.1;
            };

            // fading from cursor moved to start
            if (state.animation.instances.sequence == 20) {
                
                document.getElementById('fold_1').innerHTML = `


                    <div id="folds_20" class="fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                          <div id="logo_motion" class="width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                            
                            <div id="logo_left_container" class="width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                            </div>

                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                            </div>

                            <div id="logo_right_container" class="width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto">

                                <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                      <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                        
                                          <div class="position_relative margin_auto float_left">

                                              <div id="gui_start" class="gui_button_start position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                              <div class="gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left">
                                              </div>
                                              
                                              <div id="gui_learn" class="gui_button_learn position_relative  width_1205vh height_10vh float_left">
                                              </div>

                                          </div>

                                      </div>

                                </div>

                            </div>

                          </div>

                      </div>

                    </div>

                `

                setTimeout(function() {
                    state.animation.instances.sequence = 21;
                }, 2000);

                // stops the redraw
                state.animation.instances.sequence = 20.1;
            };

            if (state.animation.instances.sequence == 21) {
                
                document.getElementById('fold_1').innerHTML = `
                    <div id="folds_21" class="fadeIn animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            
                          <div id="logo_motion" class="width_25 height_50 position_absolute top_0 left_0 margin_auto">
                            
                            <div id="logo_right_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>


                          </div>

                          <div id="logo_motion" class="width_75 height_50 position_absolute top_0 right_0 margin_auto">
                            
                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 left_0 margin_auto">
                            
                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left">

                                          <div id="gui_back_from_learn" class="gui_button_back position_relative  width_1205vh height_10vh float_left">
                                          </div>
                                          <div id="gui_enter" class="gui_button_enter position_relative  width_1205vh height_10vh float_left">
                                          </div>

                                      </div>

                                  </div>

                              </div>

                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_100 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                          </div>
                    </div>
                </div>

                `

                setTimeout(function() {

                    // stops the redraw
                    //state.animation.instances.sequence = 16;

                }, 1000);

                // stops the redraw
                state.animation.instances.sequence = 21.1;
            };

            // from learn back to home
            if (state.animation.instances.sequence == 22) {
                
                document.getElementById('fold_1').innerHTML = `
                    <div id="folds_21" class="fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        
                      <div class="calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
            
                          <div id="logo_motion" class="width_25 height_50 position_absolute top_0 left_0 margin_auto">
                            
                            <div id="logo_right_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>


                          </div>

                          <div id="logo_motion" class="width_75 height_50 position_absolute top_0 right_0 margin_auto">
                            
                            <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                              <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                              <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 left_0 margin_auto">
                            
                            <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left">

                                          <div id="gui_back_from_learn" class="gui_button_back position_relative  width_1205vh height_10vh float_left">
                                          </div>
                                          <div id="gui_enter" class="gui_button_enter position_relative  width_1205vh height_10vh float_left">
                                          </div>

                                      </div>

                                  </div>

                              </div>

                            </div>

                          </div>

                          <div id="logo_motion" class="width_50 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_50 height_50 position_absolute top_0 left_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                            <div id="logo_motion" class="width_100 height_50 position_absolute bottom_0 right_0 margin_auto">
                              
                              <div id="logo_bottom_container" class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">

                                <div id="fold_scroll" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                    
                                    <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel">
                                    
                                    </div>
                                
                                </div>

                              </div>

                            </div>

                          </div>
                    </div>
                </div>

                `

                setTimeout(function() {

                    // stops the redraw
                    state.animation.instances.sequence = 18;

                }, 1000);

                // stops the redraw
                state.animation.instances.sequence = 22.1;
            };

            setTimeout(function() {

                // gui
                if ( (document.getElementById('gui_back')) != null ) {
                    document.getElementById('gui_back').addEventListener("click", function(event) {
                        from_index.player_1_grow();
                        state.animation.instances.start = false;
                        state.animation.instances.learn = false;

                        setTimeout(function() {
                            state.animation.instances.sequence = 17; // fad out && back to cursor moved
                        }, 1000);


                    });
                };

                // gui
                if ( (document.getElementById('gui_back_from_learn')) != null ) {
                    document.getElementById('gui_back_from_learn').addEventListener("click", function(event) {
                        from_index.player_1_grow();
                        state.animation.instances.start = false;
                        state.animation.instances.learn = false;

                        setTimeout(function() {
                            state.animation.instances.sequence = 22; // fad out && back to cursor moved
                        }, 1000);


                    });
                };

                // gui
                if ( (document.getElementById('gui_enter')) != null ) {
                    document.getElementById('gui_enter').addEventListener("click", function(event) {
                        from_index.player_1_grow();
                        state.animation.instances.start = false;
                        state.animation.instances.learn = false;

                        setTimeout(function() {
                            state.animation.instances.sequence = 19; // enter game // fade out
                        }, 1000);


                    });
                };

                // gui
                if ( (document.getElementById('gui_start')) != null ) {
                    document.getElementById('gui_start').addEventListener("click", function(event) {
                        from_index.player_1_grow();
                        state.animation.instances.start = true;
                        state.animation.instances.learn = false;

                        setTimeout(function() {
                            state.animation.instances.sequence = 15;
                        }, 1000);


                    });
                };

                if ( (document.getElementById('gui_learn')) != null ) {
                    document.getElementById('gui_learn').addEventListener("click", function(event) {
                        from_index.player_1_shrink();
                        state.animation.instances.start = false;
                        state.animation.instances.learn = true;

                        setTimeout(function() {
                            state.animation.instances.sequence = 20;
                        }, 1000);

                    });
                };

            }, 100);


        };


};

export default {
    Handle_folds
}