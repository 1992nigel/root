import from_index from '../index.js';

let state = '';

// standing
let standing_right_frame = 1;
let standing_left_frame = 1;

// walking
let layer_fg_2_player_svg_frame = 1;
let layer_fg_3_player_svg_frame = 1;

let Handle_ui = () => {

    state = from_index.Handle_return_state();

    // set positions
    if (document.getElementById('layer_bg_3_pieces') != null) {
    document.getElementById('layer_bg_3_pieces').style =
        'height: ' + (state.ui.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
        'width: ' + (state.ui.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
        'bottom: ' + (state.ui.interaction.enemy.yaxis * (state.ux.dimensions.height8)) + 'px;' +
        'right: ' + (state.ui.interaction.enemy.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };


        if (document.getElementById('layer_fg_1_man_motion') != null) {
            document.getElementById('layer_fg_1_man_motion').classList = ('float_left easing_01 position_absolute margin_auto');

            document.getElementById('layer_fg_1_man_motion').style =
                'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                'bottom: ' + (state.ui.interaction.player_1.yaxis * (state.ux.dimensions.height8)) + 'px;' +
                'right: ' + (state.ui.interaction.player_1.xaxis * (state.ux.dimensions.width8)) + 'px;';
        };

    // game events
    if ( (state.animation.instances.start == true || state.animation.instances.learn == true) && (state.ui.interaction.player_1.xaxis == state.ui.interaction.enemy.xaxis)) {
        //alert('game event');
        state.ui.interaction.player_1.action.sitting = true;
        state.ui.modal.menu.bottom.display = true;
        state.ui.modal.menu.bottom.transform = false;
    };

    if ( (state.animation.instances.start == true || state.animation.instances.learn == true) && (state.ui.interaction.player_1.xaxis != state.ui.interaction.enemy.xaxis)) {
        //alert('game event');
        state.ui.interaction.player_1.action.sitting = false;
        state.ui.modal.menu.bottom.display = true;
        state.ui.modal.menu.bottom.transform = true;
    };

    if ( (state.ui.interaction.keyhole.xaxis == state.ui.interaction.key.xaxis) && (state.ui.interaction.keyhole.yaxis == state.ui.interaction.key.yaxis) ) {
        alert('unlocked');
    }
    
    // 1
    // standing right (breathing loop)
    if (!state.ui.interaction.player_1.action.walking && state.ui.interaction.player_1.action.right == true) {
        
        document.getElementById('standing_right').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1');
        document.getElementById('standing_right').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2');
        document.getElementById('standing_right').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3');
        document.getElementById('standing_right').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4');

            if (document.getElementById('standing_right') != null) {
                document.getElementById('standing_right').innerHTML = '';
                if (standing_right_frame == 1) {
                    document.getElementById('standing_right').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1');
                };
                if (standing_right_frame == 2) {
                    document.getElementById('standing_right').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2');
                };
                if (standing_right_frame == 3) {
                    document.getElementById('standing_right').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3');
                };
                if (standing_right_frame == 4) {
                    document.getElementById('standing_right').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4');
                    standing_right_frame = 0;
                };

                standing_right_frame += 1;
            };

    };

    // 1
    // standing left (breathing loop)
    if (!state.ui.interaction.player_1.action.walking && state.ui.interaction.player_1.action.left == true) {
        
        document.getElementById('standing_left_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1');
        document.getElementById('standing_left_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2');
        document.getElementById('standing_left_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3');
        document.getElementById('standing_left_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4');

            if (document.getElementById('standing_left_svg') != null) {
                document.getElementById('standing_left_svg').innerHTML = '';
                if (standing_left_frame == 1) {
                    document.getElementById('standing_left_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1');
                };
                if (standing_left_frame == 2) {
                    document.getElementById('standing_left_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2');
                };
                if (standing_left_frame == 3) {
                    document.getElementById('standing_left_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3');
                };
                if (standing_left_frame == 4) {
                    document.getElementById('standing_left_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4');
                    standing_left_frame = 0;
                };

                standing_left_frame += 1;
            };

    };

    // 2
    // walking left (loop)
    if (state.ui.interaction.player_1.action.walking && state.ui.interaction.player_1.action.left == true) {
        
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8');
        document.getElementById('layer_fg_2_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9');

        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';
                if (layer_fg_2_player_svg_frame == 1) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1');
                };
                if (layer_fg_2_player_svg_frame == 2) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2');
                };
                if (layer_fg_2_player_svg_frame == 3) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3');
                };
                if (layer_fg_2_player_svg_frame == 4) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4');
                };
                if (layer_fg_2_player_svg_frame == 5) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5');
                };
                if (layer_fg_2_player_svg_frame == 6) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6');
                };
                if (layer_fg_2_player_svg_frame == 7) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7');
                };
                if (layer_fg_2_player_svg_frame == 8) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8');
                };
                if (layer_fg_2_player_svg_frame == 9) {
                    document.getElementById('layer_fg_2_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9');
                    layer_fg_2_player_svg_frame = 0;
                };

                layer_fg_2_player_svg_frame += 1;
            };

    };

    // 3
    // walking right (loop)
    if (state.ui.interaction.player_1.action.walking && state.ui.interaction.player_1.action.right == true) {

        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8');
        document.getElementById('layer_fg_3_player_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9');

            if (document.getElementById('layer_fg_3_player_svg') != null) {
                document.getElementById('layer_fg_3_player_svg').innerHTML = '';
                if (layer_fg_3_player_svg_frame == 1) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
                };
                if (layer_fg_3_player_svg_frame == 2) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
                };
                if (layer_fg_3_player_svg_frame == 3) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
                };
                if (layer_fg_3_player_svg_frame == 4) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4');
                };
                if (layer_fg_3_player_svg_frame == 5) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5');
                };
                if (layer_fg_3_player_svg_frame == 6) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6');
                };
                if (layer_fg_3_player_svg_frame == 7) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7');
                };
                if (layer_fg_3_player_svg_frame == 8) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8');
                };
                if (layer_fg_3_player_svg_frame == 9) {
                    document.getElementById('layer_fg_3_player_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9');
                    layer_fg_3_player_svg_frame = 0;
                };
                layer_fg_3_player_svg_frame += 1;
            };

    };

    // not scrolled
    if (state.animation.instances.scrolled_once == false) {

        state.ui.interaction.player_1.yaxis = -10;

    };

    if (state.animation.instances.scrolled_once == false && state.animation.instances.cursor_moved == true) {

        state.ui.interaction.player_1.yaxis = 0;

    };

    // not scrolled + start
    if (state.animation.instances.scrolled_once == false && state.animation.instances.start == true) {

        state.ui.interaction.player_1.yaxis = 0;
    };

    // not scrolled + learn

    if (state.animation.instances.scrolled_once == false && state.animation.instances.learn == true) {

        state.ui.interaction.player_1.yaxis = 0;
    };

    // scrolled
    if (state.animation.instances.scrolled_once == true) {

        state.ui.interaction.player_1.yaxis = -16;
    };

    // mouse around
    if (document.getElementById('layer_blinking_eyes') != null) {
        document.getElementById('layer_blinking_eyes').classList = ('float_left easing_01 position_absolute bottom_0 right_0 width_100 height_100 margin_auto ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_'+state.animation.instances.sixty_four);
    };

    // misc

    if (state.events.mouse.up == true) {

        if (document.getElementById('component_app_interaction_hands') != null) {
            document.getElementById('component_app_interaction_hand').classList.add('hands');
        };
    };

    if (state.events.mouse.up == false) {

        if (document.getElementById('component_app_interaction_hands') != null) {
            document.getElementById('component_app_interaction_hand').classList.remove('hands');
        };
    };

    // gui
    if (document.getElementById('component_app_pieces_office_shoplights') != null) {
        let component_app_pieces_office_shoplights = document.getElementById('component_app_pieces_office_shoplights');
        component_app_pieces_office_shoplights.style =
            'height: ' + (state.ui.stage.shoplight.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.stage.shoplight.width * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.ui.stage.shoplight.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.stage.shoplight.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    if (document.getElementById('component_app_gui_key') != null) {
        let component_app_gui_key = document.getElementById('component_app_gui_key');
        component_app_gui_key.style =
            'height: ' + ( ((state.ui.interaction.key.height) - 1) * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + ( ((state.ui.interaction.key.width) - 1) * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + ( ((state.ui.interaction.key.yaxis) - 1) * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + ( ((state.ui.interaction.key.xaxis) - 1) * (state.ux.dimensions.width8)) + 'px;';
    };

    if (document.getElementById('component_app_gui_keyhole') != null) {
        let component_app_gui_keyhole = document.getElementById('component_app_gui_keyhole');
        component_app_gui_keyhole.style =
            'height: ' + ( ((state.ui.interaction.keyhole.height) - 1) * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + ( ((state.ui.interaction.keyhole.width) - 1) * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + ( ((state.ui.interaction.keyhole.yaxis) - 1) * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + ( ((state.ui.interaction.keyhole.xaxis) - 1) * (state.ux.dimensions.width8)) + 'px;';
    };
    
    // 10 is half the size of the element_ball
    // It center the positioning point to the center of the element_ball
    if (document.getElementById('element_ball') != null) {
        document.getElementById('element_ball').style.top = ((state.events.mouse.gamma / state.ux.dimensions.height) * 100) + "%";
        document.getElementById('element_ball').style.left = ((state.events.mouse.beta / state.ux.dimensions.width) * 100) + "%";
    };

    // interaction
    // - game
    // - player_1

    // Enemy
    if (document.getElementById('component_app_interaction_enemy') != null) {
        document.getElementById('component_app_interaction_enemy').style =
            'height: ' + (state.ui.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.enemy.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.enemy.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    if (document.getElementById('bounce') != null) {
        document.getElementById('bounce').style =
            'top: ' + (state.ui.interaction.bounce.yaxis * (state.ux.dimensions.height8)) + 'px; \
        left: ' + (state.ui.interaction.bounce.xaxis * (state.ux.dimensions.width8)) + 'px ;';
    };
    if (document.getElementById('track_x') != null) {
        document.getElementById('track_x').style =
            'top: ' + (0) + 'px; \
        left: ' + (state.events.mouse.cursor.clientX) + 'px ;';
    };
    if (document.getElementById('track_y') != null) {
        document.getElementById('track_y').style =
            'top: ' + (state.events.mouse.cursor.clientY) + 'px; \
        left: ' + (0) + 'px ;';
    };
    
    //stage
    // Enneagon
    if (document.getElementById('enneagon') != null) {
        document.getElementById('enneagon').style = "transform: translate3d(" +
            (state.ui.stage.enneagon.xaxis * 100) + "%, " +
            (state.ui.stage.enneagon.yaxis * 100) + "%, 0);"
    };

    // gui
    if (document.getElementById('component_app_interaction_hands') != null) {
        let component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
        component_app_interaction_hands.style =
            'height: ' + (state.ux.dimensions.height/8) + 'px;' +
            'width: ' + (state.ux.dimensions.width/8) + 'px;' +
            'top: ' + (state.events.mouse.drop.clientY) + 'px;' +
            'left: ' + (state.events.mouse.drop.clientX) + 'px;';
    };

    if (document.getElementById('component_app_interaction_helper_body') != null) {
        document.getElementById('component_app_interaction_helper_body').style =
            'height: ' + (state.ui.interaction.helper.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.helper.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.helper.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.helper.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };
    
    if (state.events.mouse != null) {

    };
    
};

export default {
    Handle_ui
}