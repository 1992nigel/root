// Imports
import from_index from '../index.js';

let state;

//2
let shot_action_logo_action_enter = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
            <div id="still" class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="shot_2_character_logo_action_enter" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto"></div>
                <div id="enter" class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                    <div id="shot_action_single_enter_logo" class=""></div>
                </div>
            </div>
        `
    };

    // shot_2_character_logo_action_enter single (blinking)
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_logo_action_enter') != null) {

                    document.getElementById('shot_2_character_logo_action_enter').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_single_enter_logo
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_enter_logo') != null) {

                    document.getElementById('shot_action_single_enter_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
};

//3
let shot_action_logo_action_leave = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
            <div id="still" class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="shot_2_character_logo_leave" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto"></div>
                <div id="leave" class="animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                    <div id="shot_action_single_enter_logo" class=""></div>
                </div>
            </div>
        `
    };

    // shot_2_character_logo_leave single (blinking)
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_logo_leave') != null) {

                    document.getElementById('shot_2_character_logo_leave').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_single_enter_logo
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_enter_logo') != null) {

                    document.getElementById('shot_action_single_enter_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
};

// 1
let shot_action_logo_action_blinking_only_enter = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
            <div id="still" class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="enter" class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                    <div id="shot_2_character_blinking_only_enter" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto"></div>
                </div>
            </div>
        `
    };

    // shot_2_character_blinking_only_enter single (blinking)
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_blinking_only_enter') != null) {

                    document.getElementById('shot_2_character_blinking_only_enter').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

            }, (1000 / 12));

            play;
    })();
};

// 0
let shot_action_single_vomit = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        <div id="still" class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_2_character_vomit" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto"></div>
            <div id="shot_2_wall" class=""></div>
        </div>
        `
    };

    // shot_2_character_vomit single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_vomit') != null) {

                    document.getElementById('shot_2_character_vomit').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
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

let shot_action_single_vomit_and_wall = () => {

    let state = from_index.handle_ReturnState();

    //alert('shot_action_single_wall');

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
            <div id="still" class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="shot_2_character_vomit_and_wall" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto"></div>
                <div id="shot_2_wall_and_vomit" class=""></div>
            </div>
        `
    };

    // shot_2_character_vomit single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_vomit_and_wall') != null) {

                    document.getElementById('shot_2_character_vomit_and_wall').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto ');
                            
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

    // 24/fps loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_wall_and_vomit') != null) {

                    document.getElementById('shot_2_wall_and_vomit').classList = (' width_100 height_100 top_0 right_0 bottom_0 left_0 gui_wall_'+interval+ ' position_absolute margin_auto ');
                    /* if loop
                        if (interval == 5) {
                            interval = 0;
                        };
                    */

                    interval += 1;
                };

                if (interval == 6) {
                    clearInterval(play)
                };

            }, (1000 / state.motion.framerate));

            play;
    })();
}

//6
let shot_action_user_screen_4 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="still" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                
                <div id="" class="width_25 height_50 top_0 right_0 bottom_0 position_absolute margin_auto ">

                    <div id="" class="hover_show width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto ">

                        <div id="container" class="width_100 height_1205 position_relative float_left margin_auto">
                            <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>

                        <div id="container" class="width_100 height_75 position_relative float_left margin_auto">
                            <div id="shot_action_user_screen_4_item_1" class="width_100 height_100 bottom_0 right_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                        </div>

                        <div id="container" class="width_100 height_1205 position_relative float_left margin_auto">
                            <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>

                    </div>

                    <div id="" class="hover_hide width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

                        <div id="container" class="width_100 height_25 position_relative float_left margin_auto">
                        
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_arrow_right position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                </div>
                
                <div id="shot_action_user_screen_4_item_2" class="width_50 height_50 top_0 left_0 gui_logo_type_1 position_absolute margin_auto">

                    <div id="container" class="width_100 height_1205 bottom_100 right_0 left_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">
                        
                        <div id="container" class="width_50 height_100 position_relative margin_auto float_left">
                            <div id="scene_start_0_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>

                        <div id="container" class="width_25 height_100 position_relative margin_auto float_left">
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div id="" class="width_25 height_50 top_0 left_0 bottom_0 position_absolute margin_auto ">

                    <div id="" class="hover_show width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto ">

                        <div id="container" class="width_100 height_1205 position_relative float_left margin_auto">
                            <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>

                        <div id="container" class="width_100 height_75 position_relative float_left margin_auto">
                            <div id="shot_action_user_screen_4_item_3" class="width_100 height_100 bottom_0 right_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                        </div>

                        <div id="container" class="width_100 height_1205 position_relative float_left margin_auto">
                            <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>
                    </div>

                    <div id="" class="hover_hide width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

                        <div id="container" class="width_100 height_25 position_relative float_left margin_auto">
                        
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_arrow_left position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="container" class="width_33 height_25 bottom_0 right_0 left_0 position_absolute margin_auto">
                    
                    <div id="container" class="width_33 height_100 top_0 left_0 position_absolute margin_auto">
                        
                        <div id="container" class="width_100 height_1205 top_0 right_0 left_0 position_absolute margin_auto">
                            <div id="shot_action_user_screen_4_item_13" class="width_100 height_100 gui_interaction_text_for_more position_relative margin_auto float_left"></div>
                        </div>

                        <div id="container" class="width_100 height_75 top_0 bottom_0 right_0 left_0 position_absolute margin_auto">
                            <div id="shot_action_user_screen_4_item_4" class="width_100 height_100 bottom_0 right_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                        </div>

                        <div id="container" class="width_100 height_1205 bottom_0 right_0 left_0 position_absolute margin_auto">
                            <div id="shot_action_user_screen_4_item_12" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>

                    </div>

                    <div id="container" class="width_1205 height_100 bottom_0 right_0 left_0 position_absolute margin_auto">
                        <div id="shot_action_user_screen_4_item_5" class="width_100 height_100 bottom left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                    </div>

                    
                    <div id="container" class="width_33 height_100 top_0 right_0 position_absolute margin_auto">
                        
                        <div id="container" class="width_100 height_1205 top_0 right_0 left_0 position_absolute margin_auto">
                            <div id="scene_start_1_item_11" class="width_100 height_100 gui_interaction_text_for_more position_relative margin_auto float_left"></div>
                        </div>

                        <div id="container" class="width_100 height_75 top_0 bottom_0 right_0 left_0 position_absolute margin_auto">
                            <div id="shot_action_user_screen_4_item_6" class="width_100 height_100 bottom_0 right_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                        </div>

                        <div id="container" class="width_100 height_1205 bottom_0 right_0 left_0 position_absolute margin_auto">
                            <div id="scene_start_1_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>

                    </div>
                </div>

            </div>
        `
    };

    // shot_action_user_screen_4_item_1
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_user_screen_4_item_1') != null) {

                    document.getElementById('shot_action_user_screen_4_item_1').classList = (' width_100 height_100 top_0 bottom_0 right_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_user_screen_4_item_2
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_user_screen_4_item_2') != null) {

                    document.getElementById('shot_action_user_screen_4_item_2').classList = (' width_50 height_50 top_0 left_0 bottom_0 right_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_user_screen_4_item_3
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_user_screen_4_item_3') != null) {

                    document.getElementById('shot_action_user_screen_4_item_3').classList = (' width_100 height_100 top_0 bottom_0 left_0  gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_user_screen_4_item_4
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_user_screen_4_item_4') != null) {

                    document.getElementById('shot_action_user_screen_4_item_4').classList = (' width_100 height_100 left_0 bottom_0 gui_buttons_start position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_user_screen_4_item_5
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_user_screen_4_item_5') != null) {

                    document.getElementById('shot_action_user_screen_4_item_5').classList = (' width_100 height_100 left_0 bottom_0 right_0 gui_buttons_or position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // shot_action_user_screen_4_item_6
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_user_screen_4_item_6') != null) {

                    document.getElementById('shot_action_user_screen_4_item_6').classList = (' width_100 height_100 bottom_0 right_0 gui_buttons_learn position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

};


//6
let scene_start_0 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="tights" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                
                <div id="container" class="width_50 height_100 top_0 bottom_0 left_0 position_absolute margin_auto">
                    <div id="container" class="width_100 height_75 position_relative margin_auto">
                        <div id="scene_start_0_item_2" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                    </div>
                    <div id="container" class="width_100 height_25 position_relative margin_auto">
                        
                        <div id="container" class="width_33 height_100 top_0 left_0 position_absolute margin_auto">
                            
                            <div id="container" class="width_100 height_1205 top_0 right_0 left_0 position_absolute margin_auto">
                                <div id="scene_start_0_item_5" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>

                            <div id="container" class="width_100 height_75 top_0 bottom_0 right_0 left_0 position_absolute margin_auto">
                                <div id="scene_start_0_item_6" class="width_100 height_100 bottom_0 right_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                            </div>

                            <div id="container" class="width_100 height_1205 bottom_0 right_0 left_0 position_absolute margin_auto">
                                <div id="scene_start_0_item_7" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                        <div id="container" class="width_1205 height_100 bottom_0 right_0 left_0 position_absolute margin_auto">
                            <div id="scene_start_0_item_4" class="width_100 height_100 bottom left_0 gui_buttons_or position_absolute margin_auto"></div>
                        </div>

                        
                        <div id="container" class="width_33 height_100 top_0 right_0 position_absolute margin_auto">
                            
                            <div id="container" class="width_100 height_1205 top_0 right_0 left_0 position_absolute margin_auto">
                                <div id="scene_start_0_item_5" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>

                            <div id="container" class="width_100 height_75 top_0 bottom_0 right_0 left_0 position_absolute margin_auto">
                                <div id="scene_start_0_item_21" class="width_100 height_100 bottom_0 right_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
                            </div>

                            <div id="container" class="width_100 height_1205 bottom_0 right_0 left_0 position_absolute margin_auto">
                                <div id="scene_start_0_item_7" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="container" class="width_50 height_100 top_0 bottom_0 right_0 position_absolute margin_auto">
                    
                    <div id="container" class="width_100 height_50 top_0 right_0 position_absolute margin_auto">
                        
                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            <div id="scene_start_0_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>
                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                        </div>
                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                        </div>
                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                        </div>

                    </div>

                    <div id="container" class="width_100 height_50 bottom_0 right_0 position_absolute margin_auto">
                        
                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            
                            <div id="container" class="width_25 height_100 position_relative margin_auto float_left">
                                <div id="scene_start_0_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            <div id="container" class="width_75 height_100 position_relative margin_auto float_left">
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                            </div>

                        </div>

                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            
                            <div id="container" class="width_25 height_100 position_relative margin_auto float_left">
                                <div id="scene_start_0_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            <div id="container" class="width_75 height_100 position_relative margin_auto float_left">
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                            </div>

                        </div>

                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            
                            <div id="container" class="width_25 height_100 position_relative margin_auto float_left">
                                <div id="scene_start_0_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            <div id="container" class="width_75 height_100 position_relative margin_auto float_left">
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                            </div>

                        </div>

                        <div id="container" class="width_100 height_25 position_relative margin_auto">
                            
                            <div id="container" class="width_25 height_100 position_relative margin_auto float_left">
                                <div id="scene_start_0_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            <div id="container" class="width_75 height_100 position_relative margin_auto float_left">
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                                <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                    <div id="scene_start_0_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        `
    };

    // scene_start_0_item_1
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_0_item_1') != null) {

                    document.getElementById('scene_start_0_item_1').classList = (' width_25 height_25 top_0 bottom_0 right_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_0_item_2
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_0_item_2') != null) {

                    document.getElementById('scene_start_0_item_2').classList = (' width_100 height_100 top_0 left_0 bottom_0 right_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_0_item_3
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_0_item_3') != null) {

                    document.getElementById('scene_start_0_item_3').classList = (' width_25 height_25 top_0 bottom_0 left_0  gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_0_item_4
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_0_item_4') != null) {

                    document.getElementById('scene_start_0_item_4').classList = (' width_100 height_100 left_0 bottom_0 right_0 gui_buttons_or position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_0_item_6
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_0_item_6') != null) {

                    document.getElementById('scene_start_0_item_6').classList = (' width_100 height_100 bottom_0 right_0 gui_buttons_learn position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // scene_start_0_item_21
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_0_item_21') != null) {

                    document.getElementById('scene_start_0_item_21').classList = (' width_100 height_100 bottom_0 right_0 gui_buttons_learn position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

};

//6
let scene_start_1 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="still" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                
                <div id="container" class="width_50 height_50 top_0 left_0 position_absolute margin_auto">


                    <div id="container" class="width_100 height_25 position_relative margin_auto">
                        <div id="scene_start_1_item_22" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                    </div>

                    <div id="container" class="width_100 height_75 position_relative margin_auto">
                        <div id="container" class="width_50 height_50 position_relative float_left margin_auto">
                            <div id="scene_start_1_item_1" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                        </div>
                        <div id="container" class="width_50 height_50 position_relative float_left margin_auto">
                            <div id="scene_start_1_item_2" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                        </div>
                        <div id="container" class="width_50 height_50 position_relative float_left margin_auto">
                            <div id="scene_start_1_item_3" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                        </div>
                        <div id="container" class="width_50 height_50 position_relative float_left margin_auto">
                            <div id="scene_start_1_item_4" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                        </div>
                    </div>

                </div>

                <div id="container" class="width_75 height_50 bottom_0 left_0 position_absolute margin_auto">
                    
                    <div id="container" class="width_100 height_100 top_0 bottom_0 left_0 position_absolute margin_auto">
                        <div id="scene_start_1_item_7" class="width_33 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                        <div id="scene_start_1_item_8" class="width_33 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                        <div id="scene_start_1_item_9" class="width_33 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                    </div>
                </div>

                <div id="scene_start_1_item_10" class="width_25 height_50 bottom_0 right_0 position_absolute margin_auto ">

                    <div id="container" class="width_100 height_50 top_0 left_0 position_absolute margin_auto">
                        <div id="scene_start_1_item_9" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                    </div>

                    <div id="container" class="width_100 height_50 bottom_0 left_0 position_absolute margin_auto">
                        <div id="scene_start_1_item_9" class="width_100 height_100 gui_logo_type_1 position_relative margin_auto float_left"></div>
                    </div>

                </div>
                
                <div id="container" class="width_50 height_50 top_0 right_0 position_absolute margin_auto">
                    <div id="container" class="width_100 height_25 top_0 right_0 left_0 position_absolute margin_auto">
                        <div id="scene_start_1_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                    </div>
                    <div id="container" class="width_100 height_50 top_0 bottom_0 right_0 left_0 position_absolute margin_auto">
                        <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                            <div id="scene_start_1_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                        </div>
                        <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                            <div id="scene_start_1_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                        </div>
                        <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                            <div id="scene_start_1_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                        </div>
                    </div>
                    <div id="container" class="width_100 height_25 bottom_0 right_0 left_0 position_absolute margin_auto">
                        
                        <div id="container" class="width_25 height_100 position_relative margin_auto float_left">
                            <div id="scene_start_1_item_11" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                        </div>
                        <div id="container" class="width_75 height_100 position_relative margin_auto float_left">
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_1_item_12" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_1_item_13" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                            <div class="width_33 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div id="scene_start_1_item_14" class="width_50 height_50 gui_buttons_1 position_relative margin_auto float_left"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        `
    };

    // scene_start_1_item_1
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_1_item_1') != null) {

                    document.getElementById('scene_start_1_item_1').classList = (' width_100 height_100 top_0 bottom_0 right_0 gui_buttons_start position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_1_item_2
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_1_item_2') != null) {

                    document.getElementById('scene_start_1_item_2').classList = (' width_100 height_100 top_0 left_0 bottom_0 right_0 gui_buttons_start position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_1_item_3
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_1_item_3') != null) {

                    document.getElementById('scene_start_1_item_3').classList = (' width_100 height_100 top_0 bottom_0 left_0  gui_buttons_start position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_1_item_4
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_1_item_4') != null) {

                    document.getElementById('scene_start_1_item_4').classList = (' width_100 height_100 left_0 bottom_0 gui_buttons_start position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_1_item_5
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_1_item_5') != null) {

                    document.getElementById('scene_start_1_item_5').classList = (' width_33 height_100 left_0 bottom_0 right_0 gui_buttons_or position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

    // scene_start_1_item_6
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('scene_start_1_item_6') != null) {

                    document.getElementById('scene_start_1_item_6').classList = (' width_33 height_100 bottom_0 right_0 gui_buttons_learn position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();

};

//6
let scene_start_2 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="fulls" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">



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

            </div>
        `
    };

};

//6
let scene_start_3 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="slims" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">

                <div class="container position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                      <div id="menu_buffer" class="width_100 float_left"></div>

                      <p class=" ">pages & post</p>
                      
                      <div class="width_100 position_relative margin_auto float_left  ">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                      
                      <div id="signal">
                         site_routes: 
                         <div id="site_routes"></div>
                      </div>

                      <a id="a_big_loading" class="a_big" href="#">loading</a>
                      <a id="a_big_home" class="a_big" href="#">home</a>
                      <a id="a_big_latest" class="a_big" href="#">latest</a>
                      <a id="a_big_start" class="a_big" href="#">start game</a>
                      <a id="a_big_learn" class="a_big" href="#">learn game</a>
                      <a id="a_big_planner" class="a_big" href="#">planner</a>
                      <a id="a_big_contact" class="a_big" href="#">contact</a>
                      <a id="a_big_welcome" class="a_big" href="#">welcome</a>

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
        `
    };

};

//6
let scene_start_4 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="wides" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">                    
                  
                  <div id="info_scroll_y_text" class="">
                     <div class="container scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                        <p class="p_big">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                        </p>

                     </div>
                  </div>

            </div>
        `
    };

};

//6
let scene_start_5 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="fulls" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">                    
                  
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

            </div>
        `
    };

};

//6
let scene_start_6 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="fulls" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">                    
                  
                      
                <div class="info_scroll_x">
                   
                   <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">

                       <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">

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

            </div>
        `
    };

};

//6
let scene_start_7 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="full" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">

                <div class="container position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                      <div id="menu_buffer" class="width_100 float_left"></div>

                      <p class=" ">pages & post</p>
                      
                      <div class="width_100 position_relative margin_auto float_left  ">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                      
                      <div id="signal">
                         site_routes: 
                         <div id="site_routes"></div>
                      </div>

                      <a id="a_big_loading" class="a_big" href="#">loading</a>
                      <a id="a_big_home" class="a_big" href="#">home</a>
                      <a id="a_big_latest" class="a_big" href="#">latest</a>
                      <a id="a_big_start" class="a_big" href="#">start game</a>
                      <a id="a_big_learn" class="a_big" href="#">learn game</a>
                      <a id="a_big_planner" class="a_big" href="#">planner</a>
                      <a id="a_big_contact" class="a_big" href="#">contact</a>
                      <a id="a_big_welcome" class="a_big" href="#">welcome</a>

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
        `
    };

};

//6
let scene_start_8 = () => {

    let state = from_index.handle_ReturnState();

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        
            <div id="full" class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">

                <div class="width_6025vw height_50 top_0 bottom_0 left_6025vw gui_icon_set_1 position_absolute margin_auto"></div>
                <div class="width_50 height_6025vw right_0 left_0 bottom_6025vw gui_icon_set_2 position_absolute margin_auto"></div>
                <div class="width_33 height_33 top_0 right_0 bottom_0 left_0 gui_icon_set_3 position_absolute margin_auto"></div>

            </div>
        `
    };

};

let set_stage_game = () => {

    let state = from_index.handle_ReturnState();
    /*
    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = ``
    };
    */

    if (document.getElementById('set') != null) {
        let set = document.getElementById('set');
        set.innerHTML = `

              <div id="vr_bg" class="opacity_005">
                  <div id="row_accent_noise"></div>
              </div>

              <div id="vr_mg" class="transform_translate3d_top0  position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box easing_01">
              
                 <div id="column1" class="position_relative float_left width_100vw height_100vh ">
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Left Top
                    </div>
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Left Center
                    </div>
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Left Bottom
                    </div>
                 </div>
                 <div id="column1" class="position_relative float_left width_100vw height_100vh">
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Center Top
                    </div>
                    <div id="vr_mg_center" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       

                        <div id="gui_stage_tv" class=""></div>
                        <div id="gui_stage_lights" class=""></div>
                        Center

                    </div>
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Center Bottom
                    </div>
                 </div>
                 <div id="column1" class="position_relative float_left width_100vw height_100vh">
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Right Top
                    </div>
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Right Center
                    </div>
                    <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                       Right Bottom
                    </div>
                 </div>

              </div>
        `
    };

    if (document.getElementById('scene') != null) {
        let scene = document.getElementById('scene');
        scene.innerHTML = `

              <div id="vr_fg" class="">
                <div id="player_1" class=""></div>
                <div id="mark" class=""></div>
                <div id="logo" class=""></div>
              </div>

        `
    };
};

let set_stage_game_end = () => {

    let state = from_index.handle_ReturnState();

    /*
    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = ``
    };
    */

    if (document.getElementById('set') != null) {
        let set = document.getElementById('set');
        set.innerHTML = `
            <div id="vr_bg" class="opacity_005">
            </div>
            <div id="vr_mg" class="transform_translate3d_top0  position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box easing_01">
            </div>
        `
    };

    if (document.getElementById('scene') != null) {
        let scene = document.getElementById('scene');
        scene.innerHTML = `

              <div id="vr_fg" class="">
              </div>

        `
    };
};


let shot_action_single_loading = () => {
    
    let state = from_index.handle_ReturnState();

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div class=" width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="gui_text_loading" class="width_50 height_50 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        </div>
    `
    element.addEventListener("click", function(event) {
        alert('shot_1 yup');
    });

    document.getElementById('shots').appendChild(
        element
    );

    // shot_1_character_1 loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('gui_text_loading') != null) {

                    document.getElementById('gui_text_loading').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_action_single_loaded = () => {

    let state = from_index.handle_ReturnState();

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="gui_text_loaded" class="width_50 height_50 gui_text_loaded_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

    `
    element.addEventListener("click", function(event) {
        alert('shot_1 yup');
    });

    document.getElementById('shots').appendChild(
        element
    );

    // shot_1_character_1 loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('gui_text_loaded') != null) {

                    document.getElementById('gui_text_loaded').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let gen = (x) => {
  
  let component = document.createElement('div');
  
  if (x == 'page_top') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `
    <h2>sequences</h2>
    <p id="controls_sequence_back_home">controls_sequence_back_home</p>
    <p id="controls_sequence_start_0">controls_sequence_start_0</p>
    <br>
    <h2>scene</h2>
    <p id="scene_1">scene_1</p>
    `
  };

  if (x == 'page_left') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `page_left
    `
  };

  if (x == 'page_bottom') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `page_bottom
    `
  };

  if (x == 'page_right') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `page_right
    `
  };


  if (x == 'interactions') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify + ``;
    component.innerHTML = `
            <div id="nav_1" class="animated1 enterTop display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="nav_button_1_1" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_add_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_1_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_menu_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_1_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_1_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
            </div>
            <div id="nav_2" class="animated1 enterTop display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="nav_button_2_1" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_add_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_2_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_sign_in_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_2_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_2_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
            </div>

            <div id="nav_3" class="animated1 enterBottom display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="nav_button_3_1" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_add_white
                width_50 height_50 float_left"></div>

                <div id="" class="hover_show width_100 height_100 left_0 bottom_100 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align bg_grey "></div>

                </div>
                <div id="nav_button_3_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_grid_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_3_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_3_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
           </div>
            <div id="nav_4" class="animated1 enterBottom display_webkit_box webkit_box_pack_center webkit_box_align">
                <div id="nav_button_4_1" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_add_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_4_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_interaction_text_press
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_4_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
                <div id="nav_button_4_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div></div>
             </div>
            
    `
  };


  if (x == 'menu_top') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify + ` position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow`;
    component.innerHTML = `
              
              <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />

    `
  };


  if (x == 'pop_left') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify + ` position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow`;
    component.innerHTML = `

            <div class="container">
               <ul id="firebase">
                  <div id="modal-signup">
                  </div>

                  <div id="modal-signin">
                  </div>

                  <div id="modal-account">
                     <form id="account-form">
                       <p>modal-account</p>
                       <div id="account-details" class="account-details"><p>account-details<p></div>
                       
                       <p id="account-details-id"></p>
                       <p id="account-details-title"></p>
                       <p id="account-details-email"></p>
                       <div id="upload_form"></div>
                     </form>
                  </div>

                  <div id="modal-edit">                     
                  </div>


               </ul>
            </div>
    `
  };

  if (x == 'pop_right') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify + ` position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow`;
    component.innerHTML = `

            <div class="container">
              <p class=" ">searched posts_filtered</p>
              <div id="posts_filtered_container">
                <div id="posts_filtered"></div>
              </div>

              <p class=" ">posts_all</p>

              <div id="posts_all_container">
                <div id="posts_all"></div>
              </div>

              <p class=" ">user only posts</p>

              <div id="posts_all_container">
                <div id="posts_all_user_only"></div>
              </div>

              <p class=" ">posts only posts</p>

              <div id="posts_all_container">
                <div id="posts_all_posts_only"></div>
              </div>

              <p class=" ">posts only valid user posts</p>

              <div id="posts_all_container">
                <div id="posts_all_posts_only_valid_user"></div>
              </div>
            </div>
    `
  };

  if (x == 'pop_top') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `
              <div class="container">
                
                      <div id="dark_view_toggle">dark</div>
                      <div id="pop_top">pop_top</div>
                      <div id="pop_bottom">pop_bottom</div>
                      <div id="pop_left">pop_left</div>
                      <div id="pop_right">pop_right</div>

                      <div id="page_top">page_top</div>
                      <div id="page_bottom">page_bottom</div>
                      <div id="page_left">page_left</div>
                      <div id="page_right">page_right</div>

                      <div id="menu_top">menu_top</div>
                      <div id="menu_bottom">menu_bottom</div>
                      <div id="menu_left">menu_left</div>
                      <div id="menu_right">menu_right</div>

                      <div id="nav_top">nav_top</div>
                      <div id="nav_bottom">nav_bottom</div>
                      <div id="nav_left">nav_left</div>
                      <div id="nav_right">nav_right</div>

                      <div id="view_card">card</div>
                      <div id="view_list">list</div>
                      <div id="view_numbered">numbered</div>
                      <div id="view_read">read</div>
                      <div id="view_fifth">fifth</div>
                      <div id="view_sixth">sixth</div>
                      <div id="view_eighth">eighth</div>
                      
              </div>
    `
  };


  if (x == 'pop_bottom') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify + ` position_absolute bottom_0 left_0 calc_6vw padding_2vw border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow`;
    component.innerHTML = `

            <div class="container">
                  <div id="modal-create">

                  </div>
            </div>
    `
  };

  if (x == 'basics') {
    let identify = x;
    component.setAttribute("id", 'id_' + identify);
    component.classList = 'class_' + identify;
    component.innerHTML = `
      <div id="elements_${identify}">



              <p class=" ">posts_sorted</p>

              <div id="posts_sorted_container">
                <div id="posts_filtered_sorted"></div>
              </div>

              <p class=" ">posts_sorted if post stream ==</p>

              <div id="posts_sorted_container">
                <div id="posts_filtered_sorted_stream"></div>
              </div>

              <p class=" ">posts_sorted if post type ==</p>

              <div id="posts_sorted_container">
                <div id="posts_filtered_sorted_type"></div>
              </div>

              <p class=" ">posts_sorted if post category ==</p>

              <div id="posts_sorted_container">
                <div id="posts_filtered_sorted_category"></div>
              </div>

              <p class=" ">posts_sorted if post hashtag ==</p>

              <div id="posts_sorted_container">
                <div id="posts_filtered_sorted_hashtag"></div>
              </div>

                <div id="pagination_left" class=" width_6025vw height_6025vw position_relative margin_auto display_webkit_box webkit_box_pack_center webkit_box_align float_left">

                    <div class="hover_show width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

                        <div id="container" class="width_100 height_100 position_relative float_left margin_auto">
                        
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_arrow_left position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                    <div class="hover_hide width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

                        <div id="container" class="width_100 height_100 position_relative float_left margin_auto">
                        
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_arrow_left_dark position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="pagination_right" class=" width_6025vw height_6025vw position_relative margin_auto display_webkit_box webkit_box_pack_center webkit_box_align float_right">

                    <div id="" class="hover_show width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

                        <div id="container" class="width_100 height_100 position_relative float_left margin_auto">
                        
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_arrow_right position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                    <div id="" class="hover_hide width_100 height_100 top_0 left_0 bottom_0 position_absolute margin_auto display_webkit_box webkit_box_pack_center webkit_box_align">

                        <div id="container" class="width_100 height_100 position_relative float_left margin_auto">
                        
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_interaction_text_press position_relative margin_auto float_left"></div>
                            </div>
                            
                            <div id="container" class="width_100 height_50 position_relative float_left margin_auto">
                                <div id="" class="width_100 height_100 gui_arrow_right_dark position_relative margin_auto float_left"></div>
                            </div>

                        </div>

                    </div>

                </div>
          
          <!-- socials -->
</div>
    `
  };

  return component

};

export default {
  gen,
  shot_action_single_loaded,
  shot_action_single_loading,
  set_stage_game_end,
  set_stage_game,
  scene_start_0,
  scene_start_1,
  scene_start_2,
  scene_start_3,
  scene_start_4,
  scene_start_5,
  scene_start_6,
  scene_start_7,
  scene_start_8,
  shot_action_user_screen_4,
  shot_action_single_vomit_and_wall,
  shot_action_single_vomit,
  shot_action_logo_action_blinking_only_enter,
  shot_action_logo_action_enter,
  shot_action_logo_action_leave
};