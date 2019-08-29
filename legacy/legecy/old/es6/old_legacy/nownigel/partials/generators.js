// 1. Imports
import from_index from '../index.js';
import imported_features from './features';
import imported_elements from './elements';

let state = '';

let generate = (type, data) => {

    state = from_index.Handle_return_state();

    console.log('index.js type from components partial: ' + type);
    console.log('index.js state from components partial: ' + state);
    console.log('index.js data from components partial: ' + data);

    // *********************** Generate components for modals ************************
    // *********************** examples of use ************************

    // single array item
    if (data.length == 0) {
        alert('data.length == 0');
    };

    // array items
    if (data.length > 0) {
        alert('data.length > 0');
    };

    // designated item
    if (data != '') {
        alert('data_item is not empty');
    };

    // designated item
    if (data == '') {
        alert('data_item is empty');
    };

    // static data
    if (type == 'about_page') {
        alert('type == about_page');

        let anchor = 0;

        let check_element = () => {
          
          document.getElementById('anchor').innerHTML = anchor;

          if (anchor == 0) {
            // document.getElementById('about_page_scroll_y_fold_content').innerHTML = '0';
            // document.getElementById('about_page_scroll_y_content').innerHTML = ''
          };

        };

        let random_int = Math.floor((Math.random() * 1000000000000000) + 1);
        let component = '\
            <div id="about_page" class="width_100 height_100 float_left position_relative overflow_hidden">\
                \
                <div id="component_modal_scroll_fixed_feature_1" class="width_100 height_100vh background_dark_yellow_3 float_left position_absolute bottom_0 left_0 display_none opacity_0 overflow_hidden">\
                </div>\
                \
                <div id="component_modal_scroll_fixed_feature_2" class="width_100 height_100vh background_dark_yellow_2 float_left position_absolute bottom_0 left_0 display_none opacity_0 overflow_hidden">\
                </div>\
                \
                <div id="bottom_anchors" class="width_100 float_left position_absolute bottom_0 right_0 margin_auto overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align z_index_1">\
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                    <div class="position_relative easing_01 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_border_01">\
                      <div class="position_relative float_left width_100 height_100 display_webkit_box webkit_box_pack_center webkit_box_align">\
                        <div class="width_100 height_100 position_relative float_left top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">\
                          <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">\
                            \
                            <span id="pages'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'pages' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="folds'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'folds' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="grids'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'grids' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="photos'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'photos' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="buttons'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'buttons' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="list'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'list' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="sliders'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'sliders' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="forms'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'forms' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="inputs'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'inputs' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="hides'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'hides' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="transforms'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'transforms' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="calcs'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'calcs' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="containers'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'containers' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="grows'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'grows' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="elements'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'elements' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                            <span id="structures'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                              <span class="margin_auto position_relative float_left top_0">\
                              <span class="margin_auto position_relative float_left top_1vh">\
                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                              \
                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                              \
                              </span>\
                              \
                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                              ' + 'structures' + '\
                              </span>\
                              \
                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                      <p class="font_size_2vh line_height_205vh">\
                                      ' + 'native' + '\
                                      </p>\
                                    </div>\
                                  </div>\
                                </span>\
                              </span>\
                              \
                              </span>\
                              </span>\
                              </span>\
                            </span>\
                            \
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                  \
                </div>\
                \
                <div id="about_page_scroll_y" tabindex="1" class="calc_02vh border_01vh_dark_yellow_9 float_left position_relative text_align_center overflow_y scrollbaryhidden easing_01">\
                    \
                    <div id="about_page_scroll_y_fold" class="width_100 height_100vh float_left position_relative overflow_hidden">\
                        \
                        <div id="about_page_scroll_y_fold_content" class="width_100 height_100 float_left position_relative scrollbaryhidden overflow_y">\
                            \
                            <div id="bottom_anchors" class="width_100 float_left position_absolute bottom_0 right_0 margin_auto overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align z_index_1">\
                                <div class="width_100 float_left position_absolute bottom_0 right_0 margin_auto overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align z_index_1">\
                                  \
                                  <div class="margin_auto position_relative float_left width_100">\
                                    <div class="position_relative easing_01 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_border_01">\
                                      <div class="position_relative float_left width_100 height_100 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                        <div class="width_100 height_100 position_relative float_left top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">\
                                          <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">\
                                            \
                                            <span id="anchorUp'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'anchorUp' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="anchorDown'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'anchorDown' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="pages'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'pages' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="folds'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'folds' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="grids'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'grids' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="photos'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'photos' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="buttons'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'buttons' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="list'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'list' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="sliders'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'sliders' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="forms'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'forms' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="inputs'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'inputs' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="hides'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'hides' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="transforms'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'transforms' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="calcs'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'calcs' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="containers'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'containers' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="grows'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'grows' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="elements'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'elements' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                            <span id="structures'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
                                              <span class="margin_auto position_relative float_left top_0">\
                                              <span class="margin_auto position_relative float_left top_1vh">\
                                              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                                              \
                                              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                                              \
                                              </span>\
                                              \
                                              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                                              ' + 'structures' + '\
                                              </span>\
                                              \
                                              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                                                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                                                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
                                                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                                                      <p class="font_size_2vh line_height_205vh">\
                                                      ' + 'native' + '\
                                                      </p>\
                                                    </div>\
                                                  </div>\
                                                </span>\
                                              </span>\
                                              \
                                              </span>\
                                              </span>\
                                              </span>\
                                            </span>\
                                            \
                                          </div>\
                                        </div>\
                                      </div>\
                                    </div>\
                                  </div>\
                                  \
                                </div>\
                            </div>\
                        </div>\
                        \
                    </div>\
                    \
                    <div id="about_page_scroll_y_content" class="width_100 float_left position_relative">\
                        \
                        yo yo ' + imported_elements.element_title('feature: element_slider_3') + '\
                        \
                    </div>\
                    \
                </div>\
              \
            </div>\
        ';

        // add event listeners
        setTimeout(() => {

          (() => {

            document.getElementById('about_page_scroll_y').addEventListener('click', (event) => {
              console.log('click from about_page_scroll_y');
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('wheel', (event) => {
              console.log('wheel from about_page_scroll_y');
            });

            document.getElementById('about_page_scroll_y_fold_content').addEventListener('scroll', (event) => {
              console.log('scroll from about_page_scroll_y_fold_content');
                if (document.getElementById('about_page_scroll_y_fold_content') != null) {
                    
                    // scrolling
                    let about_page_scroll_y_fold_content_position = 0;
                    
                    console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                    console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                    console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                    console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                    console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                    console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                    if (event.srcElement.scrollTop > about_page_scroll_y_fold_content_position) {
                        console.log('about_page_scroll_y_fold_content_position increasing');
                    }

                    if (event.srcElement.scrollTop < about_page_scroll_y_fold_content_position) {
                        console.log('about_page_scroll_y_fold_content_position decreasing');
                    }

                    if (event.srcElement.scrollTop == 0) {
                        alert('top met');
                    }

                    if (event.srcElement.scrollTop > 1) {
                        console.log('scrolling started');
                    }

                    if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                        console.log('inside lead');
                    }

                    if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                        console.log('past lead')
                    }

                    if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                        console.log('100vh before bottom met')
                    }

                    if ((event.srcElement.scrollHeight) == (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                        console.log('bottom met')
                    }

                    console.log('scroll');
                    from_index.Handle_get_state_from_events();
                    from_index.values_update();

                };
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('scroll', (event) => {
              console.log('scroll from about_page_scroll_y');
                if (document.getElementById('about_page_scroll_y') != null) {
                    
                    // scrolling
                    let about_page_scroll_y_position = 0;
                    
                    
                    console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                    console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                    console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                    console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                    console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                    console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                    if (event.srcElement.scrollTop > about_page_scroll_y_position) {
                        console.log('about_page_scroll_y_position increasing');
                        about_page_scroll_y_position = event.srcElement.scrollTop;
                    }

                    if (event.srcElement.scrollTop < about_page_scroll_y_position) {
                        console.log('about_page_scroll_y_position decreasing');
                        about_page_scroll_y_position = event.srcElement.scrollTop;
                    }

                    if (event.srcElement.scrollTop == 0) {
                        alert('top met');
                        document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
                    }

                    if (event.srcElement.scrollTop > 1) {
                        console.log('scrolling started');
                        document.getElementById('component_app_modal_element_nav_top').classList.add('background_dark_yellow_0');
                    }

                    if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                        console.log('inside lead');
                        document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display');
                        document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display_none');
                        document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display_none');
                        document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display');
                    }

                    if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                        console.log('past lead')
                        document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display_none');
                        document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display');
                        document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display');
                        document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display_none');
                    }

                    if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                        console.log('100vh before bottom met')
                    }

                    if ((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                        document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
                        console.log('bottom met')
                    }

                    console.log('scroll');
                    from_index.Handle_get_state_from_events();
                    from_index.values_update();

                };
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('mousemove', (event) => {
              console.log('mousemove from about_page_scroll_y');
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('mouseup', (event) => {
              console.log('mouseup from about_page_scroll_y');
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('mousedown', (event) => {
              console.log('mousedown from about_page_scroll_y');
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('mouseenter', (event) => {
              console.log('mouseenter from about_page_scroll_y');
            });
            
            document.getElementById('about_page_scroll_y').addEventListener('mouseleave', (event) => {
              console.log('mouseleave from about_page_scroll_y');
            });

            document.getElementById('about_page_scroll_y').addEventListener('keyup', (event) => {
              console.log('keyup from about_page_scroll_y');
            });

            document.getElementById('about_page_scroll_y').addEventListener("keydown", function(event) {

              console.log('keydown from about_page_scroll_y');

              if(event.keyCode == 37) {
                alert('immortal');
                check_element();
              };

              if(event.keyCode == 39) {
                alert('immortal');
                check_element();
              };

            });

            document.getElementById('folds'+random_int+'').addEventListener('click', (event) => {
              anchor = 3;
              check_element();
            });

            document.getElementById('anchorUp'+random_int+'').addEventListener('click', (event) => {
              anchor += 1;
              check_element();
            });

            document.getElementById('anchorDown'+random_int+'').addEventListener('click', (event) => {
              if (anchor > 0) {
                anchor -= 1;
                check_element();
              };
            });

          check_element();

          })();

        }, 1000);

        return component
    };

};

export default {
    generate
}