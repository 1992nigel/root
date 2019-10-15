// Imports
import from_index from '../index.js';


/* desmond says no


          
              <p class=" ">search</p>
              <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />
              
              <p class=" ">searched post</p>
              <div id="posts_filtered_container">
                <div id="posts_filtered"></div>
              </div>

              <p class=" ">all posts</p>
              <div id="posts_all_container">
                <div id="posts_all"></div>
              </div>

               <ul id="firebase">
                  <div id="modal-signup">
                     <form id="signup-form">
                     <p>modal-signup</p>
                        <input placeholder="email" type="email" id="signup-email" required />
                        <input placeholder="password" type="password" id="signup-password" required />
                        <div id="signup_submit" class="">sign up</div>
                     </form>
                  </div>

                  <div id="modal-signin">
                     <form id="signin-form">
                        <p>modal-signin</p>
                        <input placeholder="signin-email" type="signin-email" id="signin-email" required />
                        <input placeholder="signin-password" type="signin-password" id="signin-password" required />
                        <div id="signin" class="">sign in</div>
                     </form>
                  </div>

                  <div id="modal-account">
                     <form id="account-form">
                       <p>modal-account</p>
                       <div id="account-details" class="account-details"><p>account-details<p></div>
                       <div id="upload_form"></div>
                     </form>
                  </div>

                  <div id="modal-create">
                     <form id="create-form">
                        <p>modal-create</p>
                        
                        <input class="display_none" type="file" value="upload" id="fileButton" accept="image/*" title="&nbsp;"/>
                        <input placeholder="title" type="text" id="create_title" required />
                        <input placeholder="child" type="text" id="create_child" required />
                        <input placeholder="content" type="text" id="create_content" required />
                        <progress value="0" max="100" id="uploader">0%</progress>
                        <p id="upload_progress">images only</p>
                        <label for="fileButton">Select file</label>
                        <div id="upload_details"></div>
                        <div id="create_button" class="">create</div>
                     </form>
                  </div>

                  <div id="modal-edit">
                     <form id="edit-form">
                        <p>edit profile</p>
                        <input placeholder="title" type="text" id="title"/>
                        <div id="edit_button" class="">edit</div>

                        <div id="signout" alt="sign out">
                           sign out
                        </div>
                        <div id="delete_button" alt="sign out">
                           delete
                        </div>

                     </form>                      
                  </div>


               </ul>

          <div class="info_scroll_x">
               
               <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">

                   <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">

                      <div class="element_overflow_x_scene">

                        <div class="info_scroll_y">
                           <div class="container position_absolute bottom_0 left_0 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                              <div id="menu_buffer" class="width_100 float_left"></div>


                              <p class=" ">pages & post</p>
                              <div class="width_100 position_relative margin_auto float_left  ">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                              <div id="signal">
                                 site_routes: 
                                 <div id="site_routes"></div>
                              </div>
                              <a class="a_big" href="#">loading</a>
                              <a class="a_big" href="#">home</a>
                              <a class="a_big" href="#">latest</a>
                              <a class="a_big" href="#">start game</a>
                              <a class="a_big" href="#">learn game</a>
                              <a class="a_big" href="#">planner</a>
                              <a class="a_big" href="#">contact</a>
                              <a class="a_big" href="#">welcome</a>
                              <a class="a_big" href="#">loading</a>
                              <a class="a_big" href="#">home</a>
                              <a class="a_big" href="#">latest</a>
                              <a class="a_big" href="#">start game</a>
                              <a class="a_big" href="#">learn game</a>
                              <a class="a_big" href="#">planner</a>
                              <a class="a_big" href="#">contact</a>
                              <a class="a_big" href="#">welcome</a>
                              <a class="a_big" href="#">loading</a>
                              <a class="a_big" href="#">home</a>
                              <a class="a_big" href="#">latest</a>
                              <a class="a_big" href="#">start game</a>
                              <a class="a_big" href="#">learn game</a>
                              <a class="a_big" href="#">planner</a>
                              <a class="a_big" href="#">contact</a>
                              <a class="a_big" href="#">welcome</a>
                              <div id="signal">
                                 history_route: 
                                 <div id="history_route"></div>
                              </div>
                              <div id="signal">
                                 current_route: 
                                 <div id="current_route"></div>
                              </div>
                              <div id="signal">
                                 previous_route: 
                                 <div id="previous_route"></div>
                              </div>
                              <div id="signal">
                                 next_route: 
                                 <div id="next_route"></div>
                              </div>
                              
                           </div>
                        </div>

                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                 
                               <h3>instructions</h3>
                                <p>mouse</p>

                                <div id="signal">mousemove while up: <div id="">pencil</div></div>
                                <div id="signal">mousemove while down: <div id="">pen</div></div>
                                <div id="signal">click to: <div id="">roll dice</div></div>

                                <p>keys</p>

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

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                      
                                <h3>interaction</h3>
                                 <div id="signal">dice_history: <div id="dice_history"></div></div>                                           
                                 <div id="signal">snake_history: <div id="snake_history"></div></div>
                                 <div id="signal">bounce_history: <div id="bounce_history"></div></div>
                                 <div id="signal">pen_history: <div id="pen_history"></div></div>
                                 <div id="signal">pencil_history: <div id="pencil_history"></div></div>


                            </div>
                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                      
                            <h3>game</h3>
                             <div id="signal">screen level: <div id="level"></div></div>
                             <div id="signal">screen pause: <div id="pause"></div></div>
                             <div id="signal">screen timeout: <div id="timeout"></div></div>

                             <div id="signal">stat HP: <div id="HP"></div></div>
                             <div id="signal">stat Mana: <div id="Mana"></div></div>
                             <div id="signal">stat points: <div id="points"></div></div>
                             
                             <div id="signal">character height: <div id="interaction_character_height"></div></div>
                             <div id="signal">character width: <div id="interaction_character_width"></div></div>
                             <div id="signal">character clientX: <div id="interaction_character_clientX"></div></div>
                             <div id="signal">character clientY: <div id="interaction_character_clientY"></div></div>
                               
                             <div id="signal">vr clientX: <div id="state.interaction.vr.clientX"></div></div>
                             <div id="signal">vr clientY: <div id="state.interaction.vr.clientY"></div></div>

                            </div>
                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                      
                               <h3>latest</h3>
                               <div id="signal">latest_scroll: <div id="latest_scroll"></div></div>

                              <div id="signal">scroll_clientHeight: <div id="scroll_clientHeight">0</div></div>
                              <div id="signal">scroll_clientWidth: <div id="scroll_clientWidth">0</div></div>
                              <div id="signal">scroll_scrollHeight: <div id="scroll_scrollHeight">0</div></div>
                              <div id="signal">scroll_scrollWidth: <div id="scroll_scrollWidth">0</div></div>
                              <div id="signal">scroll_scrollTop: <div id="scroll_scrollTop">0</div></div>
                              <div id="signal">scroll_scrollLeft: <div id="scroll_scrollLeft">0</div></div>

                               <div id="signal">latest_mouse: <div id="latest_mouse"></div></div>
                               <div id="signal">latest_mouse_enter: <div id="latest_mouse_enter"></div></div>
                               <div id="signal">latest_mouse_leave: <div id="latest_mouse_leave"></div></div>
                               <div id="signal">latest_mouse_up: <div id="latest_mouse_up"></div></div>
                               <div id="signal">latest_mouse_down: <div id="latest_mouse_down"></div></div>
                               <div id="signal">latest_mouse_up_move: <div id="latest_mouse_up_move"></div></div>
                               <div id="signal">latest_mouse_down_move: <div id="latest_mouse_down_move"></div></div>
                               <div id="signal">latest_mouse_drag_drop: <div id="latest_mouse_drag_drop"></div></div>
                               <div id="signal">latest_key: <div id="latest_key"></div></div>
                               <div id="signal">latest_key_up: <div id="latest_key_up"></div></div>
                               <div id="signal">latest_touch: <div id="latest_touch"></div></div>
                               <div id="signal">latest_touch_start: <div id="latest_touch_start"></div></div>
                               <div id="signal">latest_touch_end: <div id="latest_touch_end"></div></div>
                               <div id="signal">latest_touch_drag_drop: <div id="latest_touch_drag_drop"></div></div>

                            </div>
                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                      
                               <h3>current</h3>
                               <div id="signal">current_scroll: <div id="current_scroll"></div></div>

                              <div id="signal">scroll_clientHeight: <div id="scroll_clientHeight">0</div></div>
                              <div id="signal">scroll_clientWidth: <div id="scroll_clientWidth">0</div></div>
                              <div id="signal">scroll_scrollHeight: <div id="scroll_scrollHeight">0</div></div>
                              <div id="signal">scroll_scrollWidth: <div id="scroll_scrollWidth">0</div></div>
                              <div id="signal">scroll_scrollTop: <div id="scroll_scrollTop">0</div></div>
                              <div id="signal">scroll_scrollLeft: <div id="scroll_scrollLeft">0</div></div>

                               <div id="signal">current_mouse: <div id="current_mouse"></div></div>
                               <div id="signal">current_mouse_enter: <div id="current_mouse_enter"></div></div>
                               <div id="signal">current_mouse_leave: <div id="current_mouse_leave"></div></div>
                               <div id="signal">current_mouse_up: <div id="current_mouse_up"></div></div>
                               <div id="signal">current_mouse_down: <div id="current_mouse_down"></div></div>
                               <div id="signal">current_mouse_up_move: <div id="current_mouse_up_move"></div></div>
                               <div id="signal">current_mouse_down_move: <div id="current_mouse_down_move"></div></div>
                               <div id="signal">current_mouse_drag_drop: <div id="current_mouse_drag_drop"></div></div>
                               <div id="signal">current_key: <div id="current_key"></div></div>
                               <div id="signal">current_key_up: <div id="current_key_up"></div></div>
                               <div id="signal">current_touch: <div id="current_touch"></div></div>
                               <div id="signal">current_touch_start: <div id="current_touch_start"></div></div>
                               <div id="signal">current_touch_end: <div id="current_touch_end"></div></div>
                               <div id="signal">current_touch_drag_drop: <div id="current_touch_drag_drop"></div></div>

                            </div>
                        </div>
                      </div>


                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                      
                               <h3>history</h3>
                               <div id="signal">history_scroll: <div id="history_scroll"></div></div>

                              <div id="signal">scroll_clientHeight: <div id="scroll_clientHeight">0</div></div>
                              <div id="signal">scroll_clientWidth: <div id="scroll_clientWidth">0</div></div>
                              <div id="signal">scroll_scrollHeight: <div id="scroll_scrollHeight">0</div></div>
                              <div id="signal">scroll_scrollWidth: <div id="scroll_scrollWidth">0</div></div>
                              <div id="signal">scroll_scrollTop: <div id="scroll_scrollTop">0</div></div>
                              <div id="signal">scroll_scrollLeft: <div id="scroll_scrollLeft">0</div></div>

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

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                                                     
                               <h3>Time</h3>
                              <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                    
                              <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
                              <div id="signal">current_duration: <div id="current_duration"></div></div>
                              <div id="signal">time_onload: <div id="time_onload"></div></div>
                              <div id="signal">time: <div id="time"></div></div>

                            </div>
                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                    
                             <h3>Gravity</h3>
                             <div id="signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
                             <div id="signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
                             <div id="signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

                            </div>
                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                    
                             <h3>Vr</h3>
                             <div id="signal">last_action: <div id="last_action"></div></div>

                            </div>
                        </div>
                      </div>
                      

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">
                                    
                             <h3>Positions</h3>
                             <div id="signal">event_alpha: <div id="event_alpha"></div></div>
                             <div id="signal">event_beta: <div id="event_beta"></div></div>
                             <div id="signal">event_gamma: <div id="event_gamma"></div></div>

                            </div>
                        </div>
                      </div>
                      
                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 float_left">

                             <h3>Orientation</h3>
                             <div id="signal">event_portrait: <div id="event_portrait"></div></div>
                             <div id="signal">event_landscape: <div id="event_landscape"></div></div>
                             <div id="signal">event_orientation: <div id="event_orientation"></div></div>
                            </div>

                        </div>
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

          <div id="info_scroll_mix">

            <div id="preview_info_scroll_x">

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

            <div id="preview_info_scroll_y">

                <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                    
                    
                        <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden">

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                            <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vh margin_auto float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                            </div>

                        </div>


                </div>

            </div>

            <div id="preview_info_scroll_y_2">

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
          
          <div id="info_scroll_y_text" class="">
             <div class="container scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                <p class="p_big">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>

             </div>
          </div>

          <div class="info_scroll_x">
               <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                   <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">


                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div class="position_relative float_left border_1vw_grey bg_white padding_205vw">
                              <p class="font_size_5vw line_height_5vw text_align_center float_left">Scene</p>
                            </div>

                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div class="position_relative float_left border_1vw_grey bg_white padding_205vw">
                              <p class="font_size_5vw line_height_5vw text_align_center float_left">Scene</p>
                              <p class="font_size_5vw line_height_5vw text_align_center float_left">Another</p>

                              
                            </div>

                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div class="position_relative float_left">

                               <h3>Title, Center</h3>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                              
                            </div>

                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div class="position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align">

                              <div class="position_relative float_left calc_2vw margin_1vw">

                                <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">

                                   <h3>Title, Center</h3>
                                    <p>1: title</p>
                                    <p>2: level</p>
                                    <p>3: actions</p>
                                    <p>4: reactions</p>
                                    <p>5: relation</p>
                                    <p>6: game over</p>
                                  
                                </div>
                                
                              </div>
                              
                            </div>

                            <div class="position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align">
                               
                              <div class="position_relative float_left calc_2vw margin_1vw">

                                <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">

                                   <h3>Title, Center</h3>
                                    <p>1: title</p>
                                    <p>2: level</p>
                                    <p>3: actions</p>
                                    <p>4: reactions</p>
                                    <p>5: relation</p>
                                    <p>6: game over</p>
                                  
                                </div>

                              </div>
                              
                            </div>

                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div class="position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align">

                                <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">

                                   <h3>Title, Center</h3>
                                    <p>1: title</p>
                                    <p>2: level</p>
                                    <p>3: actions</p>
                                    <p>4: reactions</p>
                                    <p>5: relation</p>
                                    <p>6: game over</p>
                                  
                              </div>
                              
                            </div>

                            <div class="position_relative float_left width_50 display_webkit_box webkit_box_pack_center webkit_box_align">
                               
                                <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">

                                   <h3>Title, Center</h3>
                                    <p>1: title</p>
                                    <p>2: level</p>
                                    <p>3: actions</p>
                                    <p>4: reactions</p>
                                    <p>5: relation</p>
                                    <p>6: game over</p>
                                  
                                </div>
                              
                            </div>

                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                            <div class="position_relative float_left width_50">

                               <h3>Title, Center</h3>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                              
                            </div>

                            <div class="position_relative float_left width_50">

                               <h3>Title, Center</h3>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                              
                            </div>

                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="position_relative width_50 height_100 overflow_y scrollbaryhidden float_left">

                              <div class="position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                                </p>

                              </div>
                                            

                            </div>
                            <div class="position_relative width_50 height_100 overflow_y scrollbaryhidden float_left">
                              
                                <div class="position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                                  </p>

                               </div>

                            </div>
                        </div>
                      </div>

                      <div class="element_overflow_x_scene">
                        <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white">
                            <div class="width_50 height_100 overflow_y scrollbaryhidden float_left">
                                 
                               <h3>Title, Left Scroll</h3>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                            

                            </div>
                            <div class="width_50 height_100 overflow_y scrollbaryhidden float_left">
                                 
                               <h3>Title, Left Scroll</h3>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                <p>1: title</p>
                                <p>2: level</p>
                                <p>3: actions</p>
                                <p>4: reactions</p>
                                <p>5: relation</p>
                                <p>6: game over</p>
                                            

                            </div>
                        </div>
                      </div>

                   </div>
               </div>
          </div>


          */

let state;

let gen = (x) => {
  
  let component = document.createElement('div');
  
  if (x == 'basics') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `
      <div id="elements_${identify}">
</div>
    `
  };

  return component

};

export default {
  gen
};