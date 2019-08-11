
import from_index from '../index.js';
import imported_elements from './elements';

let state = '';

let from_Import = () => {
};

    let get_author_info = (prop_id) => {
      for (var roster_i = 0; roster_i < state.data.firebase.gnougn.roster.length; roster_i++) {
          console.log(state.data.firebase.gnougn.roster[roster_i]);
          
          if (state.data.firebase.gnougn.roster[roster_i].id == prop_id) {
            return state.data.firebase.gnougn.roster[roster_i];
          };
          
      };
    }

// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
    let g = document.createElement('div');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
    let g = document.createElement('a');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
    let g = document.createElement('span');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_li = (data) => {
    console.log('title:' + data.title);
    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", data.title);
    ELEMENT.classList = data.title;

    state = from_index.Handle_return_state();

    let post_authors = ' ';

    // post authors
    if ((data.authors) != null) {
        
        for (var i = 0; i < data.authors.length; i++) {

        let number = Math.floor((Math.random() * 101000000000000) + 1);
        
        let current_peep = get_author_info(data.authors[i].id);

        let current_author = `post_authors_${number}`;

        console.log('author:' + data.authors[i].id);

        if (current_author != null) {

        post_authors += 
                `
                  <div id="${current_author}" class="position_relative float_left avatar_icon_maisie height_6025vh width_6025vw">

                    <div id="column" class="hover_show position_absolute bottom_100 right_0 left_0 margin_auto easing_01 text_align_center float_right">

                        <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                          <div class="position_relative display_flex_flow height_100 pseudo_arrow_bottom_left_outside_white">
                            
                            <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                        
                                <div class="position_relative float_left margin_025vh text_align_center">

                                    ${current_peep.id}
                                    
                                </div>

                            </div>

                          </div>

                        </div>

                    </div>

                    <div class="position_absolute top_50 right_50 margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box ">

                      <div id="column" class="hover_show position_absolute bottom_100 right_0 left_0 margin_auto easing_01 text_align_center float_right">

                          <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                            <div class="position_relative display_flex_flow height_100 pseudo_arrow_bottom_left_outside_white">
                              
                              <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                          
                                  <div class="position_relative float_left margin_025vh text_align_center">

                                      ${current_peep.id}

                                  </div>

                              </div>

                            </div>

                          </div>

                      </div>

                      <div class="position_relative margin_auto gui_icon_dislike height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                        ${current_peep.id}
                      </div>

                    </div>

                  </div>
                  `

            // add event listeners
            setTimeout(() => {

                if (document.getElementById(current_author) != null) {
                  document.getElementById(current_author).addEventListener("click", function(event) {
                    
                    alert(current_peep.id);

                    if ((document.getElementById('post_author_data')) != null) {

                        // user data
                        let user_subs = '';

                        console.log(current_peep)
                        for (var i = 0; i < current_peep.subs.length; i++) {
                            console.log(current_peep.subs[i]);
                            user_subs += current_peep.subs[i].id;
                        };

                        document.getElementById('post_author_data').innerHTML = `

                        <div id="fold" class="position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left">

                            <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                                <div id="x-1" class="width_100vw height_100vh float_left position_relative z_index_1">
                                        
                                    <div class="position_absolute height_100vh width_33 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">
                                        
                                        <div class="height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        <div class="position_relative bg_white height_100vh width_100">

                                            <div class="position_absolute height_100vh width_100 bottom_100 left_0 right_0 margin_auto z_index_0">
                                                
                                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100">
                                                </div>

                                            </div>

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        
                                        <div class="bg_white height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        <div class="bg_pink height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        <div class="bg_pink height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>          

                                        <div class="height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                    </div>

                                    <div class="position_absolute float_left width_100 height_33vh top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">

                                        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                        
                                            <div class="width_33vw height_33vh float_left position_relative float_left margin_auto">

                                            </div>

                                            <div class="bg_pink width_33vw height_33vh float_left position_relative float_left margin_auto">

                                                <div class="position_absolute height_100 width_100 right_100 top_0 bottom_0 margin_auto z_index_0">
                                                    
                                                    <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100">
                                                    </div>

                                                </div>

                                            </div>

                                            <div class="bg_yellow width_33vw height_33vh float_left position_relative float_left margin_auto">
                                            </div>

                                            <div class="bg_pink width_33vw height_33vh float_left position_relative float_left margin_auto">
                                            </div>

                                            <div class="bg_yellow width_33vw height_33vh float_left position_relative float_left margin_auto">
                                            </div>

                                        </div>

                                    </div>

                                    <div id="route_dashboard" class="height_67 width_67 bottom_0 right_0 position_absolute margin_auto">
                                            
                                        <div class="position_absolute height_100 width_67 top_0 right_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">

                                            <h2>identity</h2>
                                            ${current_peep.child}
                                            ${current_peep.feature_image_src}
                                            ${current_peep.id}
                                            
                                            <h2>log</h2>
                                            ${current_peep.username}
                                            ${current_peep.password}
                                            
                                            <h2>stats</h2>
                                            ${current_peep.likes}
                                            ${current_peep.dislikes}

                                            <h2>history</h2>
                                            ${current_peep.time}
                                            ${current_peep.views}

                                            <h2>career</h2>


                                            ${user_subs}

                                            <div id="japan"></div>

                                            <p>types</p>
                                            <p>tags</p>
                                            <p>categories</p>
                                            <p>sub categories</p>

                                            <h2>rating</h2>
                                            <p>liked by</p>
                                            <p>liked of (subs)</p>

                                        </div>

                                        <div class="position_absolute height_100 width_33 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">

                                            <h2>identity</h2>
                                            ${current_peep.child}
                                            ${current_peep.feature_image_src}
                                            ${current_peep.id}
                                            
                                            <h2>log</h2>
                                            ${current_peep.username}
                                            ${current_peep.password}
                                            
                                            <h2>stats</h2>
                                            ${current_peep.likes}
                                            ${current_peep.dislikes}

                                            <h2>history</h2>
                                            ${current_peep.time}
                                            ${current_peep.views}

                                            <h2>career</h2>


                                            ${user_subs}

                                            <div id="japan"></div>

                                            <p>types</p>
                                            <p>tags</p>
                                            <p>categories</p>
                                            <p>sub categories</p>

                                            <h2>rating</h2>
                                            <p>liked by</p>
                                            <p>liked of (subs)</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        `
                    };

                });

            };

          }, 1000);

        };

      };
    };

    console.log(post_authors)
                        
    if ((data) != null) {

        if (data.child == 'library') {

            ELEMENT.innerHTML = `
                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                  
                  <div id="post_block_1" style="
                   background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
                  
                    <div id="post_block_3">

                      <h1>Meta:</h1>
                      <p class="width_100 font_size_30125vw bg_pink">title:${data.title}</p>
                      <p class="width_100">title:${data.id}</p>
                      
                    </div>

                    <div class="position_absolute top_0 bottom_0 left_0 margin_auto display_grid">

                      <div id="icon" class="position_relative margin_auto float_left bg_yellow">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_like height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                      <div id="icon" class="position_relative margin_auto float_left bg_pink">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_dislike height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                      <div id="icon" class="position_relative margin_auto float_left bg_yellow">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_view height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                      <div id="icon" class="position_relative margin_auto float_left bg_pink">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_delete height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                    </div>

                    <div class="position_absolute bottom_0 right_0 float_left display_flex_flow">

                      <div id="icon" class="position_relative margin_auto float_left bg_yellow webkit_box_pack_center webkit_box_align display_webkit_box ">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_like height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                      <div id="icon" class="position_relative margin_auto float_left bg_pink webkit_box_pack_center webkit_box_align display_webkit_box ">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_dislike height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                      <div id="icon" class="position_relative margin_auto float_left bg_yellow webkit_box_pack_center webkit_box_align display_webkit_box ">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_view height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                      <div id="icon" class="position_relative margin_auto float_left bg_pink webkit_box_pack_center webkit_box_align display_webkit_box ">
                          <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            <div class="position_relative margin_auto gui_icon_delete height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                            </div>
                          </div>
                      </div>

                    </div>

                    <div id="post_authors" class="position_absolute top_0 right_0 float_left margin_auto">

                      ${post_authors}

                    </div>

                  </div>

                  <div id="post_block_2" class="hover_show" >
                      <h1>Meta:</h1>
                      <p>id:${data.id}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">

                    <div id="icon" class="position_relative margin_auto float_left width_25 bg_yellow webkit_box_pack_center webkit_box_align display_webkit_box ">
                        <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                          <div class="position_relative margin_auto gui_icon_like height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">


                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center">

                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>

                                            </div>

                                        </div>

                                      </div>

                                    </div>

                                </div>

                          </div>
                        </div>
                    </div>

                    <div id="icon" class="position_relative margin_auto float_left width_25 bg_pink webkit_box_pack_center webkit_box_align display_webkit_box ">
                        <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                          <div class="position_relative margin_auto gui_icon_dislike height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">

                          </div>

                          <div id="column" class="hover_show position_absolute bottom_100 right_0 left_0 margin_auto easing_01 text_align_center float_right">

                              <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                <div class="position_relative display_flex_flow height_100 pseudo_arrow_bottom_left_outside_white">
                                  
                                  <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                              
                                      <div class="position_relative float_left margin_025vh text_align_center">

                                          <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Just do it fam</p>

                                      </div>

                                  </div>

                                </div>

                              </div>

                          </div>

                        </div>
                    </div>

                    <div id="icon" class="position_relative margin_auto float_left width_25 bg_yellow webkit_box_pack_center webkit_box_align display_webkit_box ">
                        <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                          <div class="position_relative margin_auto gui_icon_view height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">


                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center">

                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>

                                            </div>

                                        </div>

                                      </div>

                                    </div>

                                </div>

                          </div>
                        </div>
                    </div>

                    <div id="icon" class="position_relative margin_auto float_left width_25 bg_pink webkit_box_pack_center webkit_box_align display_webkit_box ">
                        <div class="position_relative margin_auto height_6025vh width_6025vh webkit_box_pack_center webkit_box_align display_webkit_box float_left">
                          <div class="position_relative margin_auto gui_icon_delete height_50 width_50 webkit_box_pack_center webkit_box_align display_webkit_box float_left">


                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center">

                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>

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

            `;
            
        };

        if (data.child == 'roster') {

            ELEMENT.innerHTML = `
                <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
                  
                  <div id="post_block_1" style="
                   background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
                  
                    <div id="post_block_3">

                      <h1>Meta:</h1>
                      <p class="width_100">title:${data.id}</p>
                      
                    </div>

                  </div>

                  <div id="post_block_2" class="hover_show" >
                      <h1>Meta:</h1>
                      <p>id:${data.id}</p>
                      <p>id:${data.username}</p>
                      <p>id:${data.password}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </div>

            `;

        };

        if (data.child == 'skills') {

            ELEMENT.innerHTML = `
                <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
                  
                  <div id="post_block_1" style="
                   background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
                  
                    <div id="post_block_3">

                      <h1>Meta:</h1>
                      <p class="width_100">title:${data.id}</p>
                      
                    </div>

                  </div>

                  <div id="post_block_2" class="hover_show" >
                      <h1>Meta:</h1>
                      <p>id:${data.id}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </div>

            `;
            
        };

        if (data.child == 'abilities') {

            ELEMENT.innerHTML = `
                <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
                  
                  <div id="post_block_1" style="
                   background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
                  
                    <div id="post_block_3">

                      <h1>Meta:</h1>
                      <p class="width_100">title:${data.id}</p>
                      
                    </div>

                  </div>

                  <div id="post_block_2" class="hover_show" >
                      <h1>Meta:</h1>
                      <p>id:${data.id}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </div>

            `;
            
        };

        if (data.child == 'services') {

            ELEMENT.innerHTML = `
                <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
                  
                  <div id="post_block_1" style="
                   background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
                  
                    <div id="post_block_3">

                      <h1>Meta:</h1>
                      <p class="width_100">title:${data.id}</p>
                      
                    </div>

                  </div>

                  <div id="post_block_2" class="hover_show" >
                      <h1>Meta:</h1>
                      <p>id:${data.id}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </div>

            `;
            
        };

        if (data.child == 'partners') {

            ELEMENT.innerHTML = `
                <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
                  
                  <div id="post_block_1" style="
                   background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
                  
                    <div id="post_block_3">

                      <h1>Meta:</h1>
                      <p class="width_100">title:${data.id}</p>
                      
                    </div>

                  </div>

                  <div id="post_block_2" class="hover_show" >
                      <h1>Meta:</h1>
                      <p>id:${data.id}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </div>

            `;
            
        };

    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].children[2].children[0].addEventListener("click", function(event) {
        from_index.likeWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[2].children[1].addEventListener("click", function(event) {
        from_index.dislikeWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[2].children[2].addEventListener("click", function(event) {
        from_index.viewWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[2].children[3].addEventListener("click", function(event) {
        from_index.deleteWhoListings(data.child, data.id);
    });


    // view!!!
    ELEMENT.children[0].children[2].children[2].addEventListener("click", function(event) {
      //alert('viewed');

      let preview = () => {

          // function start (preview)
          let post_preview_from_li_link = '';
          let preview_content = '';
          let preview_scrolling_container = '';
          let preview_bg_container = `
              <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">
              </div>

              <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_black opacity_01 z_index_1">                
              </div>

              <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh z_index_1">
           
                  <div class="position_absolute top_0 left_0 margin_auto width_205vh height_205vh z_index_1">
                      <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_left width_50 height_50 z_index_1">
                      </div>
                  </div>

                  <div class="position_absolute top_0 right_0 margin_auto width_205vh height_205vh z_index_1">
                      <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_right width_50 height_50 z_index_1">
                      </div>
                  </div>

                  <div class="position_absolute bottom_0 left_0 margin_auto width_205vh height_205vh z_index_1">
                      <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_left width_50 height_50 z_index_1">
                      </div>
                  </div>

                  <div class="position_absolute bottom_0 right_0 margin_auto width_205vh height_205vh z_index_1">
                      <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_right width_50 height_50 z_index_1">
                      </div>
                  </div>

              </div>

              <div style="background-image: url(${data.feature_image_src}); background-size: cover;" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">
           
              </div>

              ${post_authors}
            
          `
          let preview_title_container = `
              <div class="position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 ">
                  ${data.title} ${data.type}
              </div>
          `
          let preview_control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pop_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pop_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

            preview_content = `
            <div class="position_relative float_left width_100 height_50vh bg_yellow margin_auto">
                ${data.title} ${data.type}
            </div>

            <div class="position_relative float_left width_100 height_50vh margin_auto">
                ${data.title} ${data.type}
            </div>
            
            <div class="position_relative float_left width_100 height_50vh margin_auto">
                ${data.title} ${data.type}
            </div>

            <div class="position_relative float_left width_100 height_50vh margin_auto">
                ${data.title} ${data.type}
            </div>
            
            <div class="position_relative float_left width_100 height_50vh margin_auto">
                ${data.title} ${data.type}
            </div>

            <div class="position_relative float_left width_100 height_50vh margin_auto">
                ${data.title} ${data.type}
            </div>
          `

          preview_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_pop', preview_content);
          post_preview_from_li_link = `<div class="position_absolute width_100 height_100 margin_auto">${preview_bg_container}
          <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh overflow_hidden margin_205vh z_index_1">
          ${preview_title_container}<div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh z_index_1">${preview_scrolling_container}</div></div>${preview_control_container}</div>`

          preview_container.innerHTML = post_preview_from_li_link;

          state.ui.modal.pop.top.display = true;

          setTimeout(function() {
              state.ui.modal.pop.top.transform = false;

          }, 101);

          // add event listeners
          setTimeout(() => {

              document.getElementById('component_app_modal_element_pop_top_content_close'+number+'').addEventListener('click', (event) => {
                  // function start (Preview close)
                  state.ui.modal.pop.top.display = true;
                  state.ui.modal.pop.top.transform = true;
              });

              page();

          }, 101);
      };
        
      let page = () => {
        // ON TO DETAIL
              document.getElementById('component_app_modal_element_pop_top_content_enter'+number+'').addEventListener('click', (event) => {

                  // function start (Detail)
                  let post_detail_from_li_link = '';

                  let detail_content = `
                    
                    <div class="position_relative float_left width_100 height_100vh margin_auto">
                        PAGE
                    </div>
                    
                    <div class="position_relative float_left width_100 height_100vh margin_auto">
                        ${data.title} <div class="position_relative float_left width_100 margin_auto"></div>
                    </div>
                    
              ${post_authors}

                  `;

                  let route_background = ``;

                  let foreground_content = ``;

                  let scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page',detail_content);

                  let control_container = `<div class="position_absolute bottom_0 top_0 right_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_page_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_page_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`
                  
                      post_detail_from_li_link = `
                      <div style="background-image: url(${data.feature_image_src}); background-size: cover;" id="post_detail_from_li_link" class="position_absolute width_100 height_100vh margin_auto">
                          
                          ${route_background}
                          <div id="scrolling_container">
                          ${scrolling_container}
                          </div>
                          ${control_container}
                          ${foreground_content}

                      </div>`
                  
                  page_container.innerHTML = post_detail_from_li_link;

                  state.ui.modal.page.top.display = true;

                  setTimeout(() => {
                      state.ui.modal.page.top.transform = false;

                  }, 101);

                  overlay();

              });
      };

      let overlay = () => {
        // add event listeners
                  setTimeout(() => {

                      document.getElementById('component_app_modal_element_page_top_content_close'+number+'').addEventListener('click', (event) => {    
                          // function start (Preview close)
                          state.ui.modal.page.top.display = true;
                          state.ui.modal.page.top.transform = true;
                        });

                      // ON TO overlay
                      document.getElementById('component_app_modal_element_page_top_content_enter'+number+'').addEventListener('click', (event) => {

                          // overlay 
                          state.ui.modal.overlay.top.display = true;
                          state.ui.modal.overlay.top.transform = true;

                          // function start (Detail)
                          let post_overlay_from_li_link = '';
                          let overlay_content = `
                              
                              <div class="position_relative float_left width_100 height_100vh margin_auto">
                                  overlay
                              </div>
                              
                              <div class="position_relative float_left width_100 height_100vh margin_auto">
                                  ${data.title} <div class="position_relative float_left width_100 margin_auto"></div>
                              </div>

                          `;
                          
                          let overlay_scrolling_container = '';
                          let control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_overlay_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_overlay_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

                          overlay_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_overlay',overlay_content);
                          post_overlay_from_li_link = `<div style="background-image: url(${data.feature_image_src}); background-size: cover;" id="post_overlay_from_li_link" class="position_absolute width_100 height_100vh margin_auto">${overlay_scrolling_container}${control_container}</div>`
                          
                          overlay_container.innerHTML = post_overlay_from_li_link;

                          state.ui.modal.overlay.top.display = true;

                          setTimeout(() => {
                              state.ui.modal.overlay.top.transform = false;

                          }, 101);

                          // add event listeners
                          setTimeout(() => {
                              document.getElementById('component_app_modal_element_overlay_top_content_close'+number+'').addEventListener('click', (event) => {
                                  
                                  // function start (Preview close)
                                  state.ui.modal.overlay.top.display = true;
                                  state.ui.modal.overlay.top.transform = true;
                                });

                              // ON TO pip
                              document.getElementById('component_app_modal_element_overlay_top_content_enter'+number+'').addEventListener('click', (event) => {

                                  pip();

                              });

                          }, 101);

                        });

                  }, 101);
      };

      let pip = () => {
          // pip 
          state.ui.modal.pip.bottom.display = true;
          state.ui.modal.pip.bottom.transform = true;

          // function start (Detail)
          let post_pip_from_li_link = '';
          let pip_content = `
              
              <div class="position_relative float_left width_100 height_100vh margin_auto">
                  
              </div>
              
              <div class="position_relative float_left width_100 height_100vh margin_auto">
                  ${data.title} <div class="position_relative float_left width_100 margin_auto"></div>
              </div>

          `;

          let pip_scrolling_container = '';
          let pip_control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pip_bottom_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pip_bottom_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

          pip_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_pip',pip_content);
          post_pip_from_li_link = `<div style="background-image: url(${data.feature_image_src}); background-size: cover;" id="post_pip_from_li_link" class="position_absolute width_100 height_100vh margin_auto">${pip_scrolling_container}</div>${pip_control_container}`
          
          pip_container.innerHTML = post_pip_from_li_link;

          state.ui.modal.pip.bottom.display = true;

          setTimeout(() => {
              state.ui.modal.pip.bottom.transform = false;

          }, 101);

          // add event listeners
          setTimeout(() => {
              document.getElementById('component_app_modal_element_pip_bottom_content_close'+number+'').addEventListener('click', (event) => {
                  
                  // function start (Preview close)
                  state.ui.modal.pip.bottom.display = true;
                  state.ui.modal.pip.bottom.transform = true;
                });

              // ON TO DONE
              document.getElementById('component_app_modal_element_pip_bottom_content_enter'+number+'').addEventListener('click', (event) => {

                  alert('DONE!');

                });

          }, 101);
      };

      // function start (Preview)
      let number = Math.floor((Math.random() * 101000000000000) + 1);

      let preview_container = document.getElementById('component_app_modal_element_pop_top_content');
      let page_container = document.getElementById('component_app_modal_element_page_top_content');
      let overlay_container = document.getElementById('component_app_modal_element_overlay_top_content');
      let pip_container = document.getElementById('component_app_modal_element_pip_bottom_content');

      preview();

    });

    return ELEMENT
};

// Handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

    // Function Check # 1
    (function() {
        if (Ui_State == true) {
            function_one_if_state_true(id_tag);
        }

        if (Ui_State == false) {
            function_two_if_state_false(id_tag);
        }
    })();
};

let Toggle_classes_IF_State = (addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) => {

    let MANIPULATED = document.getElementById(id_Tag);

    if (MANIPULATED != null) {

        if (Ui_State == true) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

                // remove item after buffer
                setTimeout(function() {

                    MANIPULATED.classList.remove(addThisClass_if_state_false);
                    MANIPULATED.classList.add(addThisClass_if_state_true);

                }, 0);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 0);

                return;
            };
        };

    };
};


let Toggle_display_and_opacity_on_with_no_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 1);

            return;
        };
    };
};

let Toggle_display_and_opacity_off_with_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 101);

            return;
        };
    };
};

// 1000 ms delay for bg items
let Toggle_stages_display_and_opacity_on_with_no_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 1);

            return;
        };
    };
};

let Toggle_stages_display_and_opacity_off_with_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 1000);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 1001);

            return;
        };
    };
};


from_Import();

export default {
  from_Import,
  Generate_new_link,
    Generate_new_fragment,
    Generate_new_div,
    Generate_new_span,
    Generate_new_li,
    Toggle_functions_IF_State,
    Toggle_classes_IF_State,
    Toggle_display_and_opacity_on_with_no_delay,
    Toggle_display_and_opacity_off_with_delay,
    Toggle_stages_display_and_opacity_on_with_no_delay,
    Toggle_stages_display_and_opacity_off_with_delay
}
