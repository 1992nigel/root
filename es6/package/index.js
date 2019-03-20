// Rules
'use strict';

// Imports
import style from './style';
import fb from './fb';
import imported_state from './partials/state';
import imported_functions from './partials/functions';
import imported_defaults from './partials/defaults';
import imported_events from './partials/events';
import imported_components from './partials/components';
import imported_ui from './partials/ui';

import imported_interaction from './partials/interaction';
import imported_animation from './partials/animation';

// Declaration
let state;
let functions;
let defaults;
let events;
let components;
let ui_components;
let stage_components;

let rootRef;
let gnougnRef;
let wordpressRef;
let fb_response;
let fb_writeable;
let first_load;

// Assignment
state = imported_state.default_state;
defaults = imported_defaults;
events = imported_events;
functions = imported_functions;
components = imported_components;
fb_writeable = true;
first_load = true;

let Handle_render_view = () => {
    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).innerHTML = '';
        document.getElementById(defaults.colors[i].parent).appendChild(
        	functions.Generate_new_fragment.appendChild(
        		functions.Generate_new_div(
        			defaults.colors[i].innerHTML,
        			defaults.colors[i].classList,
        			defaults.colors[i].id,
        			''
    			)
    		)
    	)
    };
};

let Handle_transform = () => {
    for (var i = 0; i < ui_components.length; i++) {
        if ((document.getElementById(ui_components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(ui_components[i].component_state_transform_false, ui_components[i].component_state_transform_true, ui_components[i].component, ui_components[i].component_state_transform);
        };
    };

    for (var i = 0; i < stage_components.length; i++) {
        if ((document.getElementById(stage_components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(stage_components[i].component_state_transform_false, stage_components[i].component_state_transform_true, stage_components[i].component, stage_components[i].component_state_transform);
        };
    };
};

let Handle_display_with_delay = () => {
    for (var i = 0; i < ui_components.length; i++) {
        if ((document.getElementById(ui_components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_display_and_opacity_on_with_no_delay, imported_functions.Toggle_display_and_opacity_off_with_delay, ui_components[i].component, ui_components[i].component_state_display);
        };
    };

    for (var i = 0; i < stage_components.length; i++) {
        if ((document.getElementById(stage_components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_stages_display_and_opacity_on_with_no_delay, imported_functions.Toggle_stages_display_and_opacity_off_with_delay, stage_components[i].component, stage_components[i].component_state_display);
        };
    };
};

let Handle_check_states = () => {
    console.log('checked ui_components');
	ui_components = components.ui_components();
    console.log('checked stage_components');
    stage_components = components.stage_components();
	Handle_display_with_delay();
    Handle_transform();
    imported_ui.Handle_ui();
    imported_interaction.Handle_interaction();
    imported_animation.Handle_animation();

};

let Handle_return_state = () => { 
    return state
};

let Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
};


let HANDLE_animation_paint_hand = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_paint_can_hand_svg');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_7';
                        };
                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_8';
                        };
                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_9';
                        };
                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_10';
                        };
                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_11';
                        };
                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_12';
                            HANDLE_animation_paint_drop();
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_13';
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_14';
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_15';
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_16';
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_17';
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_18';
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_19';
                        };
                        if (current_frame == 20) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_20';
                        };
                        if (current_frame == 21) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_21';
                        };
                        if (current_frame == 22) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_22';
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_23';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_24';
                        };
                        if (current_frame == 25) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' ';

                            if ( (loop == true) ) {
                                current_frame = 0;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let HANDLE_animation_paint_drop = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_paint_can_svg');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_7';
                        };
                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_8';
                        };
                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_9';
                        };
                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_10';
                        };
                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_11';
                        };
                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_12';
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_13';
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_14';
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_15';
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_16';
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_17';
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_18';
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_19';
                        };
                        if (current_frame == 20) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_20';
                        };
                        if (current_frame == 21) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_21';
                        };
                        if (current_frame == 22) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_22';  
                            HANDLE_animation_paint_wall();
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_23';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_24';
                        };
                        if (current_frame == 25) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' ';

                            if ( (loop == true) ) {
                                current_frame = 0;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let HANDLE_animation_paint_wall = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_svg_4');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_7';
                        };

                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_8';
                        };

                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_9';
                        };

                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_10';
                        };

                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_11';
                        };

                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_12';
                        };


                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' bg_yellow';

                            if ( (loop == true) ) {
                                current_frame = 0;
                            };

                            if ( (loop == false) ) {

                                setTimeout(function() {

                                    state.ui.gui.fold.transform = !state.ui.gui.fold.transform;
                                    state.ui.gui.fold.display = !state.ui.gui.fold.display;

                                }, 1000);

                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};


let Handle_Repeat_Firebase_Validation = setInterval( () => {

    if (fb_writeable) {

        fb_response = state.data.firebase;

        if ((fb_response.gnougn.library) != null) {
            
            // only once! after firebase responds
            if (first_load == true) {
                first_load = false;

                // overall site frames by 24 frames
                (function() {
                    let interval = (24 * -3);
                    setInterval(
                        function() {

                                
                            if (interval == (24 * -2) ) {
                                if ((document.getElementById('bar')) != null ) {
                                    document.getElementById('bar').classList.remove('width_8705');
                                    document.getElementById('bar').classList.add('width_100');

                                    document.getElementById('root_loading').classList.remove('fadeIn');
                                    document.getElementById('root_loading').classList.add('fadeOut');
                                };
                            };

                            if (interval == (24 * -1) ) {
                                if ((document.getElementById('bar_container')) != null ) {
                                    document.getElementById('bar_container').classList.remove('enterBottom');
                                    document.getElementById('bar_container').classList.add('fadeOut');
                                    HANDLE_animation_paint_hand();
                                };
                            };

                            // After "48 frames" exc..
                            if (interval == (24 * 0) ) {
                                if ((document.getElementById('bar_container')) != null ) {
                                    document.getElementById('bar_container').classList.add('display_none');

                                    document.getElementById('root_loading').classList.add('display_none');
                                };
                            };

                            // After "48 frames" exc..
                            if (interval == (24 * 1) ) {
                                
                                // display fold here
                            };

                            interval += 1;
                            //console.log('current frame is: ' + interval);

                        }, (1000 / 24));
                }());


            };

            fb_writeable = false; // once firebase server responds, instead of a clearInterval, we use -> !writable

            console.log('Handle_Repeat_Firebase_Validation');

            // arrat made from object key
            let result_library = Object.keys(fb_response.gnougn.library).map(function(key) {
                return fb_response.gnougn.library[key];
            });
            fb_response.gnougn.library = result_library;

            // arrat made from object key
            let result_abilities = Object.keys(fb_response.gnougn.abilities).map(function(key) {
                return fb_response.gnougn.abilities[key];
            });
            fb_response.gnougn.abilities = result_abilities;

            // arrat made from object key
            let result_partners = Object.keys(fb_response.gnougn.partners).map(function(key) {
                return fb_response.gnougn.partners[key];
            });
            fb_response.gnougn.partners = result_partners;

            // arrat made from object key
            let result_services = Object.keys(fb_response.gnougn.services).map(function(key) {
                return fb_response.gnougn.services[key];
            });
            fb_response.gnougn.services = result_services;

            // arrat made from object key
            let result_roster = Object.keys(fb_response.gnougn.roster).map(function(key) {
                return fb_response.gnougn.roster[key];
            });
            fb_response.gnougn.roster = result_roster;

            // arrat made from object key
            let result_skills = Object.keys(fb_response.gnougn.skills).map(function(key) {
                return fb_response.gnougn.skills[key];
            });
            fb_response.gnougn.skills = result_skills;


            setTimeout(function() {
                Handle_firebase_render();
                console.log('contected!');
            }, 4000);


            console.log(fb_response.gnougn);

        };

    };

}, 0);

let Handle_firebase_render = () => {
    // render library
    (() => {

        setTimeout(function() {

            if ((fb_response) != null) {
                
                for (var i = 0; i < fb_response.gnougn.library.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.roster[i]);
                    document.getElementById('element_ol_firebase_library').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.library[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.roster.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.roster[i]);
                    document.getElementById('element_ol_firebase_roster').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.roster[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.abilities.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.abilities[i]);
                    document.getElementById('element_ol_firebase_abilities').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.abilities[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.skills.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.skills[i]);
                    document.getElementById('element_ol_firebase_skills').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.skills[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.services.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.services[i]);
                    document.getElementById('element_ol_firebase_services').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.services[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.partners.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.partners[i]);
                    document.getElementById('element_ol_firebase_partners').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.partners[i])
                        )
                    )
                };

            };

        }, 1);

    })();

};

let Handle_Firebase_Refs_and_Render = () => {
    
    if ((document.getElementById('element_ol_firebase_skills')) != null) {
        document.getElementById('element_ol_firebase_skills').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_services')) != null) {
        document.getElementById('element_ol_firebase_services').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_partners')) != null) {
        document.getElementById('element_ol_firebase_partners').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_abilities')) != null) {
        document.getElementById('element_ol_firebase_abilities').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_library')) != null) {
        document.getElementById('element_ol_firebase_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_roster')) != null) {
        document.getElementById('element_ol_firebase_roster').innerHTML = '';
    };
    fb_writeable = true;

    rootRef = firebase.database().ref();
    gnougnRef = rootRef.child('gnougn');
    wordpressRef = gnougnRef.child('wordpress');
    fb_response = {};

    (() => {
        rootRef.on('value', function(snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('state.data.firebase');
            console.log(state.data.firebase);
        });

    })();

    (() => {
        setTimeout(() => {
            Handle_Repeat_Firebase_Validation;
        }, 100);
    })();

};


// Closures

let default_post = {
    "dislikes" : 0,
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
    "id" : "007",
    "likes" : 0,
    "password" : "null",
    "subs" : [ {
     "username" : "null"
    } ],
    "time" : 1.550374996382E9,
    "title" : "nigel johnson",
    "categories" : ["null"],

    "subcategories" : ["null"],

    "tags" : ["null"],

    "types" : [{"title" : "null"}],
    "username" : "null",
    "views" : 0
};


// Create
let addListings = (child) => {
    
    var current_second = new Date().getTime() / 1000;

    let default_item = {
            id: 0,
            child: child,
            time: current_second,
            username: 'xxx',
            password: 'xxx',
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {
             username : "nully"
            } ],
            categories : ["null"],
            subcategories : ["null"],
            tags : ["null"],
            types : [{"title" : "null"}],
        };

    if (child == 'roster') {
    };

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);

    Ref.push(default_item).then((snap) => {
        const key = snap.key;
        console.log('from addListing' + key);
        // update created item with snap.key
        Ref.child(key).update({
            id: key
        });

        // Set firebase data
        setTimeout(function() {
            Handle_Firebase_Refs_and_Render();
        }, 0);

    });
};

// Delete
let deleteWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from deleteWhoListings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let player_1_grow = () => {
    state.ui.interaction.player_1.cycles.growth = !state.ui.interaction.player_1.cycles.growth;
    state.ui.interaction.player_1.cycles.shrink = false;
};

let player_1_shrink = () => {
    state.ui.interaction.player_1.cycles.shrink = !state.ui.interaction.player_1.cycles.shrink;
    state.ui.interaction.player_1.cycles.growth = false;
};

let HANDLE_pre_loader = () => {

    (function() {
        let loop = false;
        let loops = 0;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('preloader');
                
                    if (MANIPULATED != null) {

                        if (current_frame == 1) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_1');
                        };

                        if (current_frame == 2) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_2');
                        };

                        if (current_frame == 3) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_3');
                        };

                        if (current_frame == 4) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_4');
                        };

                        if (current_frame == 5) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_5');
                        };

                        if (current_frame == 6) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_6');
                        };

                        if (current_frame == 7) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_7');
                        };

                        if (current_frame == 8) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_8');
                        };

                        if (current_frame == 9) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_9');
                        };

                        if (current_frame == 10) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_10');
                        };

                        if (current_frame == 11) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_11');
                        };

                        if (current_frame == 12) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_12');
                        };

                        if (current_frame == 13) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_13');
                        };

                        if (current_frame == 14) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_14');
                        };

                        if (current_frame == 15) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_15');
                        };

                        if (current_frame == 16) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_16');
                        };

                        if (current_frame == 17) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_17');
                        };

                        if (current_frame == 18) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_18');
                        };

                        if (current_frame == 19) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_19');
                        };

                        if (current_frame == 20) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_20');
                        };

                        if (current_frame == 21) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_21');
                        };

                        if (current_frame == 22) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_22');
                        };

                        if (current_frame == 23) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_23');
                        };

                        if (current_frame == 24) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_24');
                        };

                        if (current_frame == 25) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_1');
                        };

                        if (current_frame == 26) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_2');
                        };

                        if (current_frame == 27) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_3');
                        };

                        if (current_frame == 28) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_4');
                        };

                        if (current_frame == 29) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_5');
                        };

                        if (current_frame == 30) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_6');
                        };

                        if (current_frame == 31) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_7');
                        };

                        if (current_frame == 32) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_8');
                        };

                        if (current_frame == 33) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_9');
                        };

                        if (current_frame == 34) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_10');
                        };

                        if (current_frame == 35) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_11');
                        };

                        if (current_frame == 36) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_12');
                        };

                        if (current_frame == 37) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_13');
                        };

                        if (current_frame == 38) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_14');
                        };

                        if (current_frame == 39) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_15');
                        };

                        if (current_frame == 40) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_16');
                        };

                        if (current_frame == 41) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_17');
                        };

                        if (current_frame == 42) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_18');
                        };

                        if (current_frame == 43) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_19');
                        };

                        if (current_frame == 44) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_20');
                        };

                        if (current_frame == 45) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_21');
                        };

                        if (current_frame == 46) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_22');
                        };

                        if (current_frame == 47) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_23');
                        };

                        if (current_frame == 48) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_24');
                        };

                        if (current_frame == 49) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_1');
                        };

                        if (current_frame == 50) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_2');
                        };

                        if (current_frame == 51) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_3');
                        };

                        if (current_frame == 52) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_4');
                        };

                        if (current_frame == 53) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_5');
                        };

                        if (current_frame == 54) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_6');
                        };

                        if (current_frame == 55) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_7');
                        };

                        if (current_frame == 56) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_8');
                        };

                        if (current_frame == 57) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_9');
                        };

                        if (current_frame == 58) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_10');
                        };

                        if (current_frame == 59) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_11');
                        };

                        if (current_frame == 60) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_12');
                        };

                        if (current_frame == 61) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1');
                        };

                        if (current_frame == 62) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2');
                        };

                        if (current_frame == 63) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3');
                        };

                        if (current_frame == 64) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4');
                        };

                        if (current_frame == 65) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5');
                        };

                        if (current_frame == 66) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6');
                        };

                        if (current_frame == 67) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7');
                        };

                        if (current_frame == 68) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8');
                        };

                        if (current_frame == 69) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9');
                        };

                        if (current_frame == 70) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
                        };

                        if (current_frame == 71) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
                        };

                        if (current_frame == 72) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
                        };

                        if (current_frame == 73) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4');
                        };

                        if (current_frame == 74) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5');
                        };

                        if (current_frame == 75) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6');
                        };

                        if (current_frame == 76) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7');
                        };

                        if (current_frame == 77) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8');
                        };

                        if (current_frame == 78) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9');
                        };

                        if (current_frame == 86) {

                            if ( (loop == true) ) {
                                current_frame = 0;
                                loops += 1;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let HANDLE_inital_load = () => {

        // overall site frames by 24 frames
        (function() {
            let interval = (24 * -3);
            setInterval(
                function() {

                    // before "72 frames (3 seconds)"
                    if (interval == (24 * -3) ) {
                        HANDLE_pre_loader();
                    };

                    // After "48 frames" exc..
                    if (interval == 0 ) {
                        Handle_render_view();
                        Handle_Firebase_Refs_and_Render();
                    };

                    interval += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / 24));
        }());

};

let onload = () => {
        
    style();

    // garage('monster', 'monster');
    console.log(localStorage);
    console.log(localStorage.user);
    console.log(window);
    console.log(screen);
    console.log(screen.height);
    console.log(screen.width);
    console.log(navigator);
    console.log(history);
    console.log(history.length);
    console.log(location);
    console.log(location.pathname);

    HANDLE_inital_load();

    (() => {
        setInterval(() => {
        	Handle_check_states();

        }, 1000/24);
    })();
};

window.onload = () => {        
    console.log('onload');
    onload();
};

// Exports
export default {
    Handle_return_state,
    Handle_Firebase_Refs_and_Render,
    addListings,
    deleteWhoListings,
    player_1_grow,
    player_1_shrink
};