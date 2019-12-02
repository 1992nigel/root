// Imports
import from_index from '../index.js';


let handle_events = () => {

    let state = from_index.handle_ReturnState();

    // post view controls
    if (document.getElementById('modal_nav_top') != null) {
        document.getElementById('modal_nav_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.top.transform = !state.modal.page.top.transform;
                    from_index.handle_ReturnedState(state);
            }, 0);
        });
    };

};

// 0
let shot_action_nav = () => {


    let has_loaded = false;
    let play = document.getElementById('play');
    play.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `play_element`);
    element.classList = ``
    element.innerHTML = `
            <div id="nav_1" class="animated1 enterTop display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="nav_button_1_1" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_add_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_1_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_menu_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_1_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_1_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
            </div>`
    element.addEventListener("click", function(event) {
        alert('shots yup');
    });

    document.getElementById('play').appendChild(
        element
    );
};


// 0
let shot_action_single_vomit = () => {


    let has_loaded = false;
    let play = document.getElementById('play');
    play.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `play_element`);
    element.classList = ``
    element.innerHTML = `<div id="shot_vomiting_face" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto "></div>`
    element.addEventListener("click", function(event) {
        alert('shots yup');
    });

    document.getElementById('play').appendChild(
        element
    );

    // shot_vomiting_face single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_vomiting_face') != null) {

                    document.getElementById('shot_vomiting_face').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 7) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 7) {
                    clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
};

let action_preloader = () => {

    let has_loaded = false;
    let preloader = document.getElementById('preloader');
    preloader.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `preloader_element`);
    element.classList = ``
    element.innerHTML = `<div id="action_preloader" class="width_0 height_0 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>`
    element.addEventListener("click", function(event) {
        alert('shots yup');
    });

    document.getElementById('preloader').appendChild(
        element
    );

    // shots_character_1 loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('action_preloader') != null) {

                    // loading

                    if (interval == 1) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_1 position_absolute margin_auto ');
                    };

                    if (interval == 2) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_2 position_absolute margin_auto ');
                    };

                    if (interval == 3) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_3 position_absolute margin_auto ');
                    };

                    if (interval == 4) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_4 position_absolute margin_auto ');
                    };

                    // loaded

                    if (interval == 5) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_1 position_absolute margin_auto ');
                    };

                    if (interval == 6) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_2 position_absolute margin_auto ');
                    };

                    if (interval == 7) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_3 position_absolute margin_auto ');
                    };

                    if (interval == 8) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_4 position_absolute margin_auto ');
                    };

                    // face

                    if (interval == 9) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto ');
                    };

                    if (interval == 10) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_2 position_absolute margin_auto ');
                    };

                    if (interval == 11) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_3 position_absolute margin_auto ');
                    };

                    if (interval == 12) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_4 position_absolute margin_auto ');
                    };

                    // logo

                    if (interval == 13) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto ');
                    };

                    if (interval == 14) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_2 position_absolute margin_auto ');
                    };

                    if (interval == 15) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_3 position_absolute margin_auto ');
                    };

                    if (interval == 16) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_4 position_absolute margin_auto ');
                    };

                    // blink

                    if (interval == 17) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto ');
                    };

                    if (interval == 18) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_2 position_absolute margin_auto ');
                    };

                    if (interval == 19) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_3 position_absolute margin_auto ');
                    };

                    if (interval == 20) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_4 position_absolute margin_auto ');
                    };

                    // vomit

                    if (interval == 21) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto ');
                    };

                    if (interval == 22) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_2 position_absolute margin_auto ');
                    };

                    if (interval == 23) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_3 position_absolute margin_auto ');
                    };

                    if (interval == 24) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_4 position_absolute margin_auto ');
                    };

                    if (interval == 25) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_5 position_absolute margin_auto ');
                    };

                    if (interval == 26) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_6 position_absolute margin_auto ');
                    };

                    // wall

                    if (interval == 27) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_1 position_absolute margin_auto ');
                    };

                    if (interval == 28) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_2 position_absolute margin_auto ');
                    };

                    if (interval == 29) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_3 position_absolute margin_auto ');
                    };

                    if (interval == 30) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_4 position_absolute margin_auto ');
                    };
                
                    // buttons

                    if (interval == 31) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_start position_absolute margin_auto ');
                    };

                    if (interval == 32) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_or position_absolute margin_auto ');
                    };

                    if (interval == 33) {
                        document.getElementById('action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_learn position_absolute margin_auto ');
                    };

                    interval += 1;
                };

                
                if (interval == 34) {
                    document.getElementById('action_preloader').classList = (' ');
                    has_loaded = true;
                    clearInterval(play);
                };
                

            }, (1000/24));

            play;
    })();
};

export default {
  action_preloader,
  shot_action_single_vomit,
  handle_events
};