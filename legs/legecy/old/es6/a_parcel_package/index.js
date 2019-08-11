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
let sorting_type = 'timeup';
let user_logged = false;
let matching_categories = [{name:'cats'}]

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
	ui_components = components.ui_components();
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

let Handle_EventListeners = () => {

        // sign_in
        if (document.getElementById('element_user_sign_in') != null) {
            document.getElementById('element_user_sign_in').addEventListener('click', (event) => {
                

                for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
                    let trying_username = document.getElementById('username').value;
                    let trying_password = document.getElementById('password').value;
                    if (state.data.firebase.gnougn.roster[i].username == trying_username) {

                        let validate_username = true;
                        let validated_user = state.data.firebase.gnougn.roster[i]

                        if (validated_user.password == trying_password) {

                            let validate_password = true;
                            state.data.user = validated_user;
                            localStorage.setItem("user", state.data.user);
                            localStorage.setItem("username", state.data.user.username);
                            localStorage.setItem("password", state.data.user.password);

                            sign_in_ui();
                
                        };
                    };
                };

            });
        };


        // sign_out
        if (document.getElementById('element_user_sign_out') != null) {
            document.getElementById('element_user_sign_out').addEventListener('click', (event) => {
                
                            sign_out_ui();

            })
        };


        // filter by title
        if (document.getElementById('element_input_filter') != null) {
            document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    Handle_Firebase_Refs_and_Render();
                }, 0);

            });
        };

        // less_posts post
        if (document.getElementById('less_posts') != null) {
            document.getElementById('less_posts').addEventListener('click', (event) => {
                less_posts();
            });
        };

        // more_posts post
        if (document.getElementById('more_posts') != null) {
            document.getElementById('more_posts').addEventListener('click', (event) => {
                more_posts();
            });
        };

};

let Handle_Timers = () => {
    // start timer
    (() => {
        let int = 0;
        setInterval(function() {

            console.log(state.events.key.keys);

            // desktop
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                if (state.events.key.keys.length == 0) {
                    state.events.key.up = true;
                    state.events.key.down = false;
                };

                if (state.events.key.keys.length != 0) {
                    state.events.key.up = false;
                    state.events.key.down = true;
                };

                if (state.events.key.up == true) {
                    state.events.key.timer -= 1;
                    console.log('state.events.key.timer: ' + state.events.key.timer);

                    if ((document.getElementById('timer_key_up')) != null ) {
                        document.getElementById('timer_key_up').innerHTML = (state.events.key.timer)
                    }
                }

                if (state.events.key.up == false) {
                    state.events.key.timer += 1;
                    console.log('state.events.key.timer: ' + state.events.key.timer);

                    if ((document.getElementById('timer_key_up')) != null ) {
                        document.getElementById('timer_key_up').innerHTML = (state.events.key.timer)
                    }
                }

                if (state.events.mouse.up == true) {
                    state.events.mouse.timer -= 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.timer)
                    }
                }

                if (state.events.mouse.up == false) {
                    state.events.mouse.timer += 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.timer)
                    }
                }

                if (state.events.mouse.enter == true) {

                    state.events.mouse.leavetimer = 0;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                }

                if (state.events.mouse.enter == false) {

                    state.events.mouse.leavetimer += 1;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                    
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                }

                if (state.events.mouse.leavetimer == 5) {
                    console.log('timeout active')               
                };

            };

            // Mobile
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                if (state.events.touch.enter == true) {

                    state.events.touch.leavetimer = 0;

                    console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);

                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.touch.leavetimer)
                    }
                }

                if (state.events.touch.enter == false) {

                    state.events.touch.leavetimer += 1;

                    console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);
                    
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.touch.leavetimer)
                    }
                }

                if (state.events.touch.leavetimer == 30) {
                    console.log('timeout active')        
                };

                if (state.events.touch.leavetimer == 60) {
                    console.log('timeout active')            
                };

            };

            int += 1;
            console.log(int);
        }, 1000);
    })();

    // console.log(state.ui.interaction.dice);
    // console.log(state.ui.interaction.random);
    (() => {
        setInterval(function() {

            if ( (document.getElementById('time')) != null ) {

                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date = new Date();
                state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
                console.log(state.data.time);
                document.getElementById('time').innerText = state.data.time;

            };

        }, 1000);
    })();
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
                            if (interval == (24 * 5) ) {
                                
                                // display fold here
                                Handle_check_route('null', '');
                                check_local_user();
                                Handle_Timers();
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

                //console.clear();
                console.log('contected!');
            }, 0);


            console.log(fb_response.gnougn);

        };

    };

}, 0);

let Handle_firebase_render = () => {
    // render library
    (() => {

        setTimeout(function() {

            if ((fb_response) != null) {
                
                find_view();
                let sorted_library = fb_response.gnougn.library.sort(find_sort());
                let filtered_library = [];

                //  filter by title
                for (var i = 0; i < sorted_library.length; i++) {
                    if ((sorted_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                        filtered_library.push(sorted_library[i]);
                    };
                };

                for (var i = 0; i < filtered_library.length; i++) {

                    // pagination hack
                    if ( (i < state.data.feature_posts_limit) ) {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_feature_library').appendChild(
                            imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_library[i])
                            )
                        )
                    };
                };

                for (var i = 0; i < filtered_library.length; i++) {

                    // pagination hack
                    if ( (i >= (state.data.posts_start)) && (i < state.data.posts_limit) ) {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_after_feature_library').appendChild(
                            imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_library[i])
                            )
                        )
                    };
                };

                for (var i = 0; i < filtered_library.length; i++) {

                    let categories_matched = false;

                    for (var post_categories_index = 0; post_categories_index < filtered_library[i].categories.length; post_categories_index++) {

                        for (var matching_category_index = 0; matching_category_index < matching_categories.length; matching_category_index++) {

                            if (filtered_library[i].categories[post_categories_index].name.toString().toLowerCase().includes(matching_categories[matching_category_index].name)) {

                                categories_matched = true;
                            
                            };
                        
                        };

                    };

                    // pagination hack
                    if (categories_matched) {
                        if ( (i < state.data.posts_limit) ) {
                            // console.log(state.data.firebase.gnougn.roster[i]);
                            document.getElementById('element_ol_firebase_limited_library').appendChild(
                                imported_functions.Generate_new_fragment.appendChild(
                                imported_functions.Generate_new_li(filtered_library[i])
                                )
                            )
                        };
                    };
                };

                // uploaded by user
                if (user_logged) {

                    if (user_logged) {
                        for (var i = 0; i < filtered_library.length; i++) {

                            let uploaded_by_user_logged = false;

                            for (var post_authors_index = 0; post_authors_index < filtered_library[i].authors.length; post_authors_index++) {

                                for (var roster_match_index = 0; roster_match_index < fb_response.gnougn.roster.length; roster_match_index++) {

                                    if (filtered_library[i].authors[post_authors_index].id == fb_response.gnougn.roster[roster_match_index].id) {

                                        uploaded_by_user_logged = true;
                                    
                                    };
                                
                                };

                            };

                            if (uploaded_by_user_logged) {
                                // console.log(state.data.firebase.gnougn.roster[i]);
                                document.getElementById('element_ol_firebase_library_user_logged').appendChild(
                                    imported_functions.Generate_new_fragment.appendChild(
                                    imported_functions.Generate_new_li(filtered_library[i])
                                    )
                                )
                            };
                        };
                    };
                };

                // liked by user
                if (user_logged) {

                    if (user_logged) {
                        for (var i = 0; i < filtered_library.length; i++) {

                            let liked_by_user_logged = false;

                            for (var post_liked_by_index = 0; post_liked_by_index < filtered_library[i].liked_by.length; post_liked_by_index++) {

                                for (var roster_match_index = 0; roster_match_index < fb_response.gnougn.roster.length; roster_match_index++) {

                                    if (filtered_library[i].liked_by[post_liked_by_index].id == fb_response.gnougn.roster[roster_match_index].id) {

                                        liked_by_user_logged = true;
                                    
                                    };
                                
                                };

                            };

                            if (liked_by_user_logged) {
                                // console.log(state.data.firebase.gnougn.roster[i]);
                                document.getElementById('element_ol_firebase_library_user_liked').appendChild(
                                    imported_functions.Generate_new_fragment.appendChild(
                                    imported_functions.Generate_new_li(filtered_library[i])
                                    )
                                )
                            };
                        };
                    };
                };

                for (var i = 0; i < filtered_library.length; i++) {

                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_library').appendChild(
                            imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_library[i])
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

        }, 0);

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

    if ((document.getElementById('element_ol_firebase_feature_library')) != null) {
        document.getElementById('element_ol_firebase_feature_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_after_feature_library')) != null) {
        document.getElementById('element_ol_firebase_after_feature_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_limited_library')) != null) {
        document.getElementById('element_ol_firebase_limited_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_library_user_logged')) != null) {
        document.getElementById('element_ol_firebase_library_user_logged').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_library_user_liked')) != null) {
        document.getElementById('element_ol_firebase_library_user_liked').innerHTML = '';
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
        }, 0);
    })();
};

let default_user = {
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

let check_local_user = () => {

        // Localize data
        if (localStorage.username == null) {
            console.log('welcome first timer');
            user_logged = false;
            document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
            return;
        };

        // Localize data
        if (localStorage.username == 'null') {
            console.log('welcome back, login please');
            user_logged = false;
            document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
            return;
        };

        if (localStorage.username != 'null') {
            
            console.log('weolcome back: ' + localStorage.username);
            user_logged = true;
            for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
                let trying_username = localStorage.username;
                let trying_password = localStorage.password;
                if (state.data.firebase.gnougn.roster[i].username == trying_username) {

                    let validate_username = true;
                    let validated_user = state.data.firebase.gnougn.roster[i]

                    if (validated_user.password == trying_password) {

                        let validate_password = true;
                        state.data.user = validated_user;
                        localStorage.setItem("user", state.data.user);
                        localStorage.setItem("username", state.data.user.username);
                        localStorage.setItem("password", state.data.user.password);

                        sign_in_ui();
            
                    };
                };
            };

        };
};

let sign_in_ui = () => {

    user_logged = true;
    /*
    // set user avatar
    document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'

    // set author page
    document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard(state.data.user);

    document.getElementById('icon_sign_out').classList.remove('display_none')
    document.getElementById('icon_sign_in').classList.add('display_none')
    document.getElementById('icon_sign_up').classList.add('display_none')
    */

    document.getElementById('users_username').innerHTML = 'Hello ' + `${state.data.user.username}` + '!';

    // render author data
    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);

};

let sign_out_ui = () => {

    document.getElementById('users_username').innerHTML = 'See you next time, ' + `${state.data.user.username}`;
    state.data.user = default_user;
    user_logged = false;
    localStorage.setItem("user", default_user);
    localStorage.setItem("username", default_user.username);
    localStorage.setItem("password", default_user.password);
    
    /*
    // set user avatar
    document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'

    // set author page
    document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard_not_logged();

    document.getElementById('icon_sign_out').classList.add('display_none')
    document.getElementById('icon_sign_in').classList.remove('display_none')
    document.getElementById('icon_sign_up').classList.remove('display_none')
    */

    // render author data
    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);

};

// more_posts
let less_posts = () => {
    state.data.posts_start -= 1;
    state.data.posts_limit -= 1;
    // Set firebase data
    document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
    document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;

    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let more_posts = () => {
    state.data.posts_start += 1;
    state.data.posts_limit += 1;
    // Set firebase data
    document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
    document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;

    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let find_sort = () => {

    if (document.getElementById('element_input_sorting_type').value == 'likesup' || '') {
        sorting_type = 'likesup';
    }

    if (document.getElementById('element_input_sorting_type').value == 'likesdown') {
        sorting_type = 'likesdown';
    }


    if (document.getElementById('element_input_sorting_type').value == 'viewsup') {
        sorting_type = 'viewsup';
    }

    if (document.getElementById('element_input_sorting_type').value == 'viewsdown') {
        sorting_type = 'viewsdown';
    }


    if (document.getElementById('element_input_sorting_type').value == 'timeup') {
        sorting_type = 'timeup';
    }

    if (document.getElementById('element_input_sorting_type').value == 'timedown') {
        sorting_type = 'timedown';
    }


    if (document.getElementById('element_input_sorting_type').value == 'titleup') {
        sorting_type = 'titleup';
    }

    if (document.getElementById('element_input_sorting_type').value == 'titledown') {
        sorting_type = 'titledown';
    }

    if (sorting_type == 'likesup') {
            
            if (sorting_type == 'likesup') {
                return function(a, b) {
                    return a.likes - b.likes
                }
            };
    };

    if (sorting_type == 'likesdown') {

            if (sorting_type == 'likesdown') {
                return function(a, b) {
                    return b.likes - a.likes
                }
            };
    };

    if (sorting_type == 'viewsup') {

            if (sorting_type == 'viewsup') {
                return function(a, b) {
                    return a.views - b.views
                }
            };

    };

    if (sorting_type == 'viewsdown') {

            if (sorting_type == 'viewsdown') {
                return function(a, b) {
                    return b.views - a.views
                }
            };

    };

    if (sorting_type == 'timeup') {

            if (sorting_type == 'timeup') {
                return function(a, b) {
                    return b.time - a.time
                }
            };

    };

    if (sorting_type == 'timedown') {
            
            if (sorting_type == 'timedown') {
                return function(a, b) {
                    return a.time - b.time
                }
            };

    };

    if (sorting_type == 'titleup') {

            if (sorting_type == 'titleup') {
                return function(a, b) {
                    return b.title - a.title
                }
            };

    };

    if (sorting_type == 'titledown') {
            
            if (sorting_type == 'titledown') {
                return function(a, b) {
                    return a.title - b.title
                }
            };

    };

};

let find_view = () => {

    document.getElementById('root').classList.remove('grid');
    document.getElementById('root').classList.remove('list');
    document.getElementById('root').classList.remove('card');
    document.getElementById('root').classList.remove('full');
    document.getElementById('root').classList.remove('thumbs');

    if ((document.getElementById('element_input_style').value == 'grid') || (document.getElementById('element_input_style').value == '' )) {
        document.getElementById('root').classList.add('grid');
    };

    if (document.getElementById('element_input_style').value == 'card') {
        document.getElementById('root').classList.add('card');
    };

    if (document.getElementById('element_input_style').value == 'list') {
        document.getElementById('root').classList.add('list');
    };

    if (document.getElementById('element_input_style').value == 'thumbs') {
        document.getElementById('root').classList.add('thumbs');
    };

    if (document.getElementById('element_input_style').value == 'full') {
        document.getElementById('root').classList.add('full');
    };
};

// Create
let addListings = (child) => {
    
    var current_second = new Date().getTime() / 1000;
let default_item;

    if (child == 'library') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'roster') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'services') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'skills') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'abilities') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'partners') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
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

// Update
let likeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
let dislikeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes -= 1;

    Ref.child(id).set(changeThisValue);

    console.log(id);
    console.log(changeThisValue);

    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
let viewWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from viewWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.views += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
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
                        Handle_EventListeners();
                    };

                    interval += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / 24));
        }());

};

let HANDLE_gui_hide = () => {
    state.ui.gui.top_left.transform = true;
    state.ui.gui.top.transform = true;
    state.ui.gui.top_right.transform = true;
    state.ui.gui.bottom_left.transform = true;
    state.ui.gui.bottom.transform = true;
    state.ui.gui.bottom_right.transform = true;
    state.ui.gui.right.transform = true;
    state.ui.gui.left.transform = true;

    setTimeout( () => {  
        state.ui.gui.top_left.display = false;
        state.ui.gui.top.display = false;
        state.ui.gui.top_right.display = false;
        state.ui.gui.bottom_left.display = false;
        state.ui.gui.bottom.display = false;
        state.ui.gui.bottom_right.display = false;
        state.ui.gui.right.display = false;
        state.ui.gui.left.display = false;

    }, 101);

};

let HANDLE_gui_show = () => {
    state.ui.gui.top_left.display = true;
    state.ui.gui.top.display = true;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = true;
    state.ui.gui.bottom.display = true;
    state.ui.gui.bottom_right.display = true;
    state.ui.gui.right.display = true;
    state.ui.gui.left.display = true;

    setTimeout( () => {  
        state.ui.gui.top_left.transform = false;
        state.ui.gui.top.transform = false;
        state.ui.gui.top_right.transform = false;
        state.ui.gui.bottom_left.transform = false;
        state.ui.gui.bottom.transform = false;
        state.ui.gui.bottom_right.transform = false;
        state.ui.gui.right.transform = false;
        state.ui.gui.left.transform = false;
            
    }, 101);

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

let Handle_check_route = (route, info) => {

    state.app.route = route;
    setTimeout(() => {


    // null
    if (state.app.route == 'null') {

        setTimeout(() => {

            // Gui Button Actions
            if ((document.getElementById('fold_desktop')) != null ) {
                document.getElementById('fold_desktop').addEventListener("click", function(event) {
                    alert('null');
                    Handle_check_route('null', '');
                });
            };

            // Gui Button Actions
            if ((document.getElementById('route_about')) != null ) {
                document.getElementById('route_about').addEventListener("click", function(event) {
                    alert('route_about');
                    Handle_check_route('route_about', '');
                });
            };

        }, 1);

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_desktop" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    </div>
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_ipad" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    </div>
            `;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_iphone" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                    </div>
            `;

        };

    };

    }, 0);

};

let adaptive_render = () => {

    // null
    if (state.app.route == 'null') {

        setTimeout(() => {

            // Gui Button Actions
            if ((document.getElementById('gui_button_start')) != null ) {
                document.getElementById('gui_button_start').addEventListener("click", function(event) {
                    //alert('gui_button_start');
                    Handle_check_route('null_to_start', '');
                });
            };

            // Gui Button Actions
            if ((document.getElementById('gui_button_learn')) != null ) {
                document.getElementById('gui_button_learn').addEventListener("click", function(event) {
                    //alert('gui_button_learn');
                    Handle_check_route('null_to_learn', '');
                });
            };

            // Gui Button Actions
            if ((document.getElementById('element_input_sorting_type')) != null ) {
                document.getElementById('element_input_sorting_type').addEventListener("keydown", function(event) {
                    //alert('element_input_sorting_type');
                    find_sort();
                });
            };

            // Gui Button Actions
            if ((document.getElementById('element_input_style')) != null ) {
                document.getElementById('element_input_style').addEventListener("keydown", function(event) {
                    //alert('element_input_style');
                    find_view();
                });
            };

        }, 1);

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_desktop" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="animated1 fadeIn width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                          
                        <div id="logo_left_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                            <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_center_container" class="animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
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

                        <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                        </div>

                        <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                            <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                          <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                          </div>

                                          <div class="gui_or position_relative width_1205 height_100 float_left">
                                          </div>
                                          
                                          <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                          </div>

                                      </div>

                                  </div>

                            </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_ipad" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="animated1 fadeIn width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                        
                        <div id="logo_left_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto">
                            <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_center_container" class="animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_right_container" class="animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto">
                          <div id="logo" class="gui_move_note width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                        </div>

                        <div id="logo_bottom_container" class="animated1 fadeIn width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                            <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                          <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                          </div>

                                          <div class="gui_or position_relative width_1205 height_100 float_left">
                                          </div>
                                          
                                          <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                          </div>

                                      </div>

                                  </div>

                            </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_iphone" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="animated1 fadeIn width_8705 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                        
                        <div id="logo_bottom_container" class="animated1 fadeIn width_100 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                            <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                
                                <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                
                                </div>
                            
                            </div>

                          </div>

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                    <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                      
                                        <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                            <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                            </div>

                                            <div class="gui_or position_relative width_1205 height_100 float_left">
                                            </div>
                                            
                                            <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                            </div>

                                        </div>

                                    </div>

                              </div>

                          </div>

                        </div>

                        <div id="logo_center_container" class="animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="animated1 fadeIn width_100 position_absolute top_100 left_0 right_0 margin_auto">

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                    <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                      
                                        <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                            <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                            </div>

                                            <div class="gui_or position_relative width_1205 height_100 float_left">
                                            </div>
                                            
                                            <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                            </div>

                                        </div>

                                    </div>

                              </div>

                          </div>

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                            <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                
                                <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                
                                </div>
                            
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
            `;

        };

    };

    // null
    if (state.app.route == 'null_to_start') {

        setTimeout(() => {

        }, 1);

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_desktop" class="fadeOut animated1 calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

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
                          <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                            <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                          <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                          </div>

                                          <div class="gui_or position_relative width_1205 height_100 float_left">
                                          </div>
                                          
                                          <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                          </div>

                                      </div>

                                  </div>

                            </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_ipad" class="fadeOut animated1 calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

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
                          <div id="logo" class="gui_move_note width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                            <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                          <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                          </div>

                                          <div class="gui_or position_relative width_1205 height_100 float_left">
                                          </div>
                                          
                                          <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                          </div>

                                      </div>

                                  </div>

                            </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_iphone" class="fadeOut animated1 calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="width_8705 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                        
                        <div id="logo_bottom_container" class="width_100 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                            <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                
                                <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                
                                </div>
                            
                            </div>

                          </div>

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                    <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                      
                                        <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                            <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                            </div>

                                            <div class="gui_or position_relative width_1205 height_100 float_left">
                                            </div>
                                            
                                            <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                            </div>

                                        </div>

                                    </div>

                              </div>

                          </div>

                        </div>

                        <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="width_100 position_absolute top_100 left_0 right_0 margin_auto">

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                    <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                      
                                        <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                            <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                            </div>

                                            <div class="gui_or position_relative width_1205 height_100 float_left">
                                            </div>
                                            
                                            <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                            </div>

                                        </div>

                                    </div>

                              </div>

                          </div>

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                            <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                
                                <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                
                                </div>
                            
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        setTimeout(() => {
            Handle_check_route('start', '');
        }, 1000);

    };

    // null
    if (state.app.route == 'start') {

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

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
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

    };

    // null
    if (state.app.route == 'start_to_null') {

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

                <div id="folds_16" class="fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                    
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
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

        setTimeout(() => {
            Handle_check_route('null', '');
        }, 1000);

    };

    // null
    if (state.app.route == 'null_to_learn') {

        setTimeout(() => {

        }, 1);

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_desktop" class="fadeOut animated1 calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

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
                          <div id="logo" class="gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                            <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                          <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                          </div>

                                          <div class="gui_or position_relative width_1205 height_100 float_left">
                                          </div>
                                          
                                          <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                          </div>

                                      </div>

                                  </div>

                            </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_ipad" class="fadeOut animated1 calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

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
                          <div id="logo" class="gui_move_note width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                              
                              <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                              
                              </div>
                          
                          </div>

                        </div>

                        <div id="logo_bottom_container" class="width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto">

                            <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                  <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                    
                                      <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                          <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                          </div>

                                          <div class="gui_or position_relative width_1205 height_100 float_left">
                                          </div>
                                          
                                          <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                          </div>

                                      </div>

                                  </div>

                            </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = `

                    <div id="fold_iphone" class="fadeOut animated1 calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">

                      <div id="logo_motion" class="width_8705 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto">
                        
                        <div id="logo_bottom_container" class="width_100 position_absolute bottom_100 left_0 right_0 margin_auto">

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                            <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                
                                <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                
                                </div>
                            
                            </div>

                          </div>

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                    <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                      
                                        <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                            <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                            </div>

                                            <div class="gui_or position_relative width_1205 height_100 float_left">
                                            </div>
                                            
                                            <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                            </div>

                                        </div>

                                    </div>

                              </div>

                          </div>

                        </div>

                        <div id="logo_center_container" class="width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto">
                          <div id="logo" class="gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                          <div id="logo" class="gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto"></div>
                        </div>

                        <div id="logo_bottom_container" class="width_100 position_absolute top_100 left_0 right_0 margin_auto">

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                              <div id="fold_buttons" class="position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left">

                                    <div class="display_flex_flow position_relative width_100 margin_auto float_left">
                                      
                                        <div class="position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align">

                                            <div id="gui_button_start" class="gui_button_start position_relative width_33 height_100 float_left">
                                            </div>

                                            <div class="gui_or position_relative width_1205 height_100 float_left">
                                            </div>
                                            
                                            <div id="gui_button_learn" class="gui_button_learn position_relative width_33 height_100 float_left">
                                            </div>

                                        </div>

                                    </div>

                              </div>

                          </div>

                          <div id="logo_bottom_container" class="width_100 height_1205vh position_relative margin_auto">

                            <div id="fold_note" class="position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left">
                                
                                <div class="easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note">
                                
                                </div>
                            
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
            `;

        };

        setTimeout(() => {
            Handle_check_route('learn', '');
        }, 1000);

    };

    // null
    if (state.app.route == 'learn') {

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

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
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

    };

    // null
    if (state.app.route == 'learn_to_null') {

        // desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            document.getElementById('fold_container').innerHTML = `

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
            `;

        };

        // ipad
        if (/iPad/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

        // iphone
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            
            document.getElementById('fold_container').innerHTML = ``;

        };

        setTimeout(() => {
            Handle_check_route('null', '');
        }, 1000);

    };

};

window.onresize = () => {

    adaptive_render();

};

window.onload = () => {        
    console.log('onload');
    onload();
};

// Exports
export default {
    Handle_return_state,
    Handle_Firebase_Refs_and_Render,
    Handle_get_state_from_events,
    Handle_check_route,
    HANDLE_gui_hide,
    HANDLE_gui_show,

    addListings,
    deleteWhoListings,
    likeWhoListings,
    dislikeWhoListings,
    viewWhoListings,

    player_1_grow,
    player_1_shrink,
};