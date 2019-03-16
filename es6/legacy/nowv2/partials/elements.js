import from_index from '../index.js';

let state = '';


let element_scroll_y_events = (id, info) => {
    let component = '\
    <div id="'+id+'" class="position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    '


                                setTimeout(() => {

                                    document.getElementById(id).addEventListener("scroll", (event) => {

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

                                        state.events.route.clientHeight = event.srcElement.clientHeight;
                                        state.events.route.clientWidth = event.srcElement.clientWidth;

                                        state.events.route.scrollHeight = event.srcElement.scrollHeight;
                                        state.events.route.scrollWidth = event.srcElement.scrollWidth;

                                        state.events.route.scrollTop = event.srcElement.scrollTop;
                                        state.events.route.scrollLeft = event.srcElement.scrollLeft;

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
                                            document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop)
                                        }

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
                                            console.log("instance: wheel up");
                                        }

                                        if (event.srcElement.scrollTop === 0) {
                                            console.log("instance: wheel up");
                                        }

                                        if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                                            console.log('instance: scrolling started');
                                        }

                                        if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                                            console.log('instance: inside lead');
                                        }

                                        if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                                            console.log('instance: past lead');
                                        }

                                        if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                                            console.log('instance: 100vh before bottom met');
                                        }

                                        if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                                            alert("component_app_modal_element_page_top_content: instance: footer met");
                                        }

                                        state.ui.gui.scroll.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

                                        console.log('scroll');
                                        console.log(event);

                                        from_index.Handle_get_state_from_events();

                                    }, false);

                                }, 101);

    return component
};

let menu_sub = `
  <span id="wp_component_meta" class="position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1">
    
    <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white">
        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh">

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

let element_after_menu_about = `
  <span id="wp_component_meta" class="position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show">
     <span class="position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white">
        <div class=" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none ">
           <div class="width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh">

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

        <div id="route_about_cta" class="position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark">
            <p class="font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left">team cta</p>
        </div>

    </div>

    <h1 class="verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>

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

let blog_content = () => {

    let component = `

      <div id="section_1" class="position_relative width_100 height_100vh margin_auto float_left">

        <div id="logo_filler" class="position_absolute bottom_0 top_0 left_0 right_0 width_33 height_33 margin_auto float_left">

            <div id="fold_logo" class="position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">

            </div>

            <div id="fold_buttons" class="easing_01 display_none opacity_0 position_absolute width_100 top_100 left_0 right_0 margin_auto float_left">

                <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                  
                    <div class="position_relative margin_auto float_left">

                        <div id="gui_start_buttons" class="gui_button_start position_relative width_1205vh height_1205vh float_left">
                        </div>

                        <div class="gui_or position_relative width_6025vh height_1205vh float_left">
                        </div>
                        
                        <div id="gui_learn_buttons" class="gui_button_learn position_relative width_1205vh height_1205vh float_left">
                        </div>

                    </div>

                </div>


            </div>

            <div id="fold_note" class="easing_01 display_none opacity_0 position_absolute width_100 height_100 top_100 left_0 right_0 margin_auto float_left">
                
                <div class=" position_absolute width_50 height_50 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                
                </div>
            
            </div>

            <div id="fold_continue" class="easing_01 display_none opacity_0 position_absolute width_100 height_100 top_100 left_0 right_0 margin_auto float_left">
                
                <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                    
                    <div class="display_flex_flow position_relative margin_auto float_left">
                      
                      <p class="line_height_1205vh font_size_6025vh float_left position_relative">
                        press
                      </p>
                      
                      <div class="position_relative margin_auto float_left">
                          <div class="gui_button_enter position_relative width_1205vh height_1205vh float_left">
                          </div>
                      </div>

                      <p class="line_height_1205vh font_size_6025vh float_left position_relative">
                        to continue.
                      </p>

                    </div>

                </div>
            
            </div>

        </div>

      </div>

          <div id="section_2" class="position_relative width_100 height_100vh gradient_yellow_bottom float_left display_flex_flow">
                
          </div>

          <div id="section_2" class="position_relative width_100 height_100vh bg_yellow float_left display_flex_flow">
                          
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
            
          </div>


          <div id="wp_component" class="position_relative width_100 height_100vh bg_yellow float_left display_flex_flow">
                  
                  <div class="gui_dash position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left">
                  </div>

                  <div id="wp_component" class="position_absolute top_0 left_0 width_100 height_100 gradient_yellow_left float_left display_flex_flow">
                  </div>

                  <div id="wp_component" class="position_absolute top_0 right_0 width_100 height_100 gradient_yellow_right float_left display_flex_flow">
                  </div>

          </div>


          <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">


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



      <div class="position_relative width_100 height_100vh margin_auto gui_paint_bottom float_left">
      </div>

      <div class="position_relative width_100 height_100vh margin_auto float_left">
      </div>

    `

    return component
};


let wp_content = () => {
    let element = `

    
        <div id="component_app_scrolling_content" class="position_relative width_100 height_100vh overflow_y scrollbary  scrollbary-scrollbar-light-yellow-9 scrollbary-yellow bg_yellow float_left">
          

          <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
              
              <div class="position_relative width_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

                <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow">

                    <br>
                    <b>Create new library post</b><br>
                    <input type="text" id="element_input_title" placeholder="new title" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_type" placeholder="new type" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_subtitle" placeholder="new subtitle" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_paragraph" placeholder="new paragraph" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_category" placeholder="new category" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_sub_category" placeholder="new sub category" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_feature_style" placeholder="new feature_style" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="element_input_tag" placeholder="new tag" class="position_relative width_100 float_left" /><br>
                    
                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_create">create post</button>
                    </div>

                </div>

              </div>

              <div class="position_relative width_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow">

                <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow">

                    <br>
                    <b>Filter post</b><br>
                    <input type="text" id="element_input_filter" placeholder="by title" class="position_relative width_100 float_left" /><br>
                    
                    <br>
                    <b>Limit post</b><br>
                    <input type="text" id="element_input_limit" placeholder="how many post would you like to see" value="6" class="position_relative width_100 float_left" /><br>
                    
                    <br>  
                    <b>Sort post</b><br>
                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_sorting_type_viewsup">views up</button>
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_sorting_type_viewsdown">views down</button>
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_sorting_type_likesup">likes up</button>
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_sorting_type_likesdown">likes down</button>
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_sorting_type_timeup">time up</button>
                      <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_sorting_type_timedown">time down</button>
                    </div>

                    <br>
                    <b>Change view</b><br>
                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_view_grid">grid</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_view_card">card</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_view_list">list</button><br>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_view_thumbs">thumbs</button><br>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_view_full">full</button><br>
                    </div>

                    <b>Change type</b><br>
                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_abilities">abilities</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_skills">skills</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_services">services</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_roster">roster</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_partners">partners</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_library">library</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_type_all">all</button>
                    </div>

                    <b>Change category</b><br>
                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_development">development</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_design">design</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_graphics">graphics</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_motion">motion</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_strategy">strategy</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_content">content</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_category_all">all</button>
                    </div>

                    <b>Change style</b><br>
                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_all">all</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_ux">ux</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_video">video</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_code">code</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_read">read</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_graphic">graphic</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_photo">photo</button>
                    <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="element_input_feature_style_gallery">gallery</button>
                    </div>

                </div>

              </div>

          </div>

          <div id="wp_component_feature_posts" class="position_relative width_100 bg_white float_left">
              
              <div id="element_ol_firebase_library_feature" class="position_relative width_100 float_left"></div>

          </div>

          <div id="wp_component_posts" class="position_relative width_100 bg_white float_left">
                  
              <div class="position_relative width_100 float_left display_flex_flow">
                
                  <div id="wp_component_blog" class="position_relative float_left display_flex_flow">

                      <div id="element_ol_firebase_library" class="position_relative width_100 float_left"></div>

                      <b>roster</b><br>

                      <div id="element_ol_firebase_roster" class="position_relative width_100 float_left"></div>

                      <div id="element_ol_firebase_partners" class="position_relative width_100 float_left"></div>

                      <div id="element_ol_firebase_abilities" class="position_relative width_100 float_left"></div>

                      <div id="element_ol_firebase_skills" class="position_relative width_100 float_left"></div>

                      <div id="element_ol_firebase_services" class="position_relative width_100 float_left"></div>

                  </div>

                  <div id="wp_component_sidebar" class="position_relative width_100 height_100vh float_left display_flex_flow bg_white">
                    <div class="position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left">
                      ${value_ui_controls}

                    </div>
                  </div>

              </div>

          </div>

        </div>
    `

    return element
};

let element_guis = () => {
    let element = `


        <div id="component_app_gui_top_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed top_0 left_0 margin_auto z_index_10">

          <div id="gui_controls" class="height_10vh float_left position_fixed top_0 left_0 margin_auto z_index_10">

              <div class="enterTop animated1 position_relative margin_auto float_left width_6025vh height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div id="icon_menu" class="gui_logo_navs position_relative width_50 height_50 float_left">
                    ${element_after_menu_about}
                  </div>

                </div>

              </div>

              <div class="enterTop animated1 position_relative margin_auto width_6025vh height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left">
                  
                  <div id="icon_logo" class="gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left"></div>

                </div>

              </div>

              <div class="enterTop animated1 position_relative margin_auto float_left width_6025vh height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div id="icon_back" class="gui_arrow_left position_relative width_50 height_50 float_left">
                  </div>

                </div>

              </div>

              <div class="enterTop animated1 position_relative margin_auto float_left width_6025vh height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div id="icon_search" class="gui_search position_relative width_50 height_50 float_left">
                  </div>

                </div>

              </div>

          </div>

        </div>

        <div id="component_app_gui_top_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_25vh_width top_0 left_0 right_0 margin_auto z_index_10">

        </div>

        <div id="component_app_gui_top_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_10vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_10">

          <div id="icon_dashboard" class="display_none opacity_0 width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div id="user_thumb" class="gui_dash width_8705 height_8705 float_left position_relative float_left margin_auto"></div>

              ${element_after_menu_about}

            </div>

          </div>

          <div id="icon_sign_out" class="display_none opacity_0 width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">
          
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_button_signout width_8705 height_8705 float_left position_relative float_left margin_auto"></div>

              ${element_after_menu_about}

            </div>

          </div>

          <div id="icon_sign_in" class="display_none opacity_0 width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">
          
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_button_signin width_8705 height_8705 float_left position_relative float_left margin_auto"></div>

              ${element_after_menu_about}

            </div>

          </div>

          <div id="icon_sign_up" class="display_none opacity_0 width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">
          
            <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
              
              <div class="gui_button_signup width_8705 height_8705 float_left position_relative float_left margin_auto"></div>

              ${element_after_menu_about}

            </div>

          </div>
          
        </div>

        <div id="component_app_gui_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_5vh right_0 margin_auto z_index_10">

        </div>

        <div id="component_app_gui_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_5vh left_0 margin_auto z_index_10">

        </div>

        <div id="component_app_gui_bottom_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_5vh float_left position_fixed bottom_0 left_0 margin_auto z_index_10">
          

        </div>

        <div id="component_app_gui_bottom_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_5vh float_left position_fixed calc_25vh_width bottom_5vh left_0 right_0 margin_auto z_index_10">

        </div>

        <div id="component_app_gui_bottom_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 height_10vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_10">


        </div>

    `

    return element
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

let element_nav_top = `
    <div id="component_app_modal_element_nav_top" class="easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 margin_auto height_1205vh calc_20vh_width z_index_6 ">
      
      <div class="position_relative webkit_box_pack_center webkit_box_align display_webkit_box width_100 z_index_1 float_left">
          
        <span class="margin_auto position_relative float_left z_index_1 ">

          <span id="routes" class="margin_auto position_relative float_left z_index_1 ">

              <div class="width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                  <div id="route_about" class="gui_about_type width_100 height_100 float_left position_relative float_left margin_auto">

                    <div id="route_about_icon" class="circle position_absolute right_100 top_0 bottom_0 width_10 height_100 margin_1025vh float_left">
                      ${anchor_menu_right}
                    </div>

                  </div>

                  ${element_after_menu_about}

                </div>

              </div>

              <div class="width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                <div id="route_team" class="gui_about_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_about}

                </div>
              </div>

              <div class="width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                <div id="route_library" class="gui_about_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_about}

                </div>
              </div>

              <div class="width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                <div id="route_abilities" class="gui_about_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_about}
                
                </div>
              </div>

              <div class="width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                <div id="route_partners" class="gui_about_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_about}
                
                </div>
              </div>

              <div class="width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7">

                <div class="calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                  
                <div id="route_services" class="gui_about_type width_100 height_100 float_left position_relative float_left margin_auto"></div>

                ${element_after_menu_about}

                </div>
              </div>

          </span>

        </span>

      </div>

    </div>
    `

let element_nav_left = `
    <div id="component_app_modal_element_nav_left" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto">
      
      <div class="position_absolute bottom_0 left_0 right_0 float_left calc_02vh display_flex_flow border_01vh_black">
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
      <div id="component_app_modal_element_page_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto">
        ${wp_content()}
      </div>
    </div>
    `

let element_page_bottom = `
    <div id="component_app_modal_element_page_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6">
      <div id="component_app_modal_element_page_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
        

      </div>
    </div>
    `

let element_page_right = `
    <div id="component_app_modal_element_page_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6">
      <div id="component_app_modal_element_page_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
        <div id="dashboard_posts" class="position_relative width_100 float_left"></div>
      </div>
    </div>
    `

let element_pop_top = `
    <div id="component_app_modal_element_pop_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6">
      <div id="component_app_modal_element_pop_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width_500px border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
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
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_6 margin_auto">
        
        <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
        </div>

      </div>
    </div>
  `

let element_pop_right = `
  <div id="component_app_modal_element_pop_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_6 margin_auto">
      
                <div class="position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow">

                    <br>
                    <b>Create new user</b><br>
                    <input type="text" id="new_username" placeholder="new username" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="new_password" placeholder="new password" class="position_relative width_100 float_left" /><br>

                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                      <button id="element_create_user" class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh">create user</button>
                    </div>

                    <br>
                    <b>Login user</b><br>
                    <input type="text" id="username" placeholder="username" class="position_relative width_100 float_left" /><br>

                    <input type="text" id="password" placeholder="password" class="position_relative width_100 float_left" /><br>

                    <div id="wp_component_feature" class="position_relative width_100 bg_white float_left display_flex_flow">
                      <button id="element_user_login" class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh">login user</button>
                    </div>

                </div>

    </div>
  </div>
  `

let element_pip_top = `
    <div id="component_app_modal_element_pip_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6">
      <div id="component_app_modal_element_pip_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
    </div>
    `

let element_pip_left = `
  <div id="component_app_modal_element_pip_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
    <div id="component_app_modal_element_pip_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
  </div>
  `

let element_pip_bottom = `
    <div id="component_app_modal_element_pip_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div id="component_app_modal_element_pip_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
          <div class="width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8">
            
          </div>

      </div>
    </div>
  `

let element_pip_right = `
  <div id="component_app_modal_element_pip_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
    <div id="component_app_modal_element_pip_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">
          
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
      

    </div>`;

let element_menu_bottom = `
    <div id="component_app_modal_element_menu_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_6">

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
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_overlay_left = `
    <div id="component_app_modal_element_overlay_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_overlay_bottom = `
    <div id="component_app_modal_element_overlay_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_overlay_right = `
    <div id="component_app_modal_element_overlay_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_6">
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
      <div id="component_app_modal_element_overlay_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto">
      
      </div>
    </div>
    `

let element_gradient_top = `
    <div id="component_app_modal_element_gradient_top" class="bg_yellow easing_1 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6">

      <div class="position_absolute top_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto">
        <div class="position_absolute top_-1vh left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_bottom"></div>
      </div>

    </div>
    `

let element_gradient_left = `
    <div id="component_app_modal_element_gradient_left" class="bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100vw height_100vh margin_auto z_index_6">
    
      <div class="position_absolute left_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_right"></div>

</div>
    `

let element_gradient_bottom = `
    <div id="component_app_modal_element_gradient_bottom" class="bg_yellow easing_1 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6">
    
      <div class="position_absolute bottom_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_top"></div>

    </div>
    `

let element_gradient_right = `
    <div id="component_app_modal_element_gradient_right" class="bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto z_index_6">
    
      <div class="position_absolute right_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_left"></div>
    
    </div>
    `


export default { 
    blog_content,
    element_guis,
    value_ui_controls,

    // modals
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
    anchor_menu_right

}