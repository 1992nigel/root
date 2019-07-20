import from_index from '../index.js';

let state = '';

let standing_up_frame = 0;
let standing_down_frame = 0;
let standing_left_frame = 0;
let standing_right_frame = 0;

let walking_up_frame = 0;
let walking_down_frame = 0;
let walking_left_frame = 0;
let walking_right_frame = 0;

            
let Handle_ui = () => {

    state = from_index.Handle_return_state();

    // bridge
    // motion & stop
    if ( state.ui.interaction.bridge.cycles.walking == true) {

        // stance: up
        if ( state.ui.interaction.bridge.stance == 9 ) {

            
            // player walking and pause
            if (state.ui.interaction.bridge.yaxis < 3) {
                state.ui.interaction.bridge.yaxis += (1/8);
            };
        };

        // stance: down
        if ( state.ui.interaction.bridge.stance == 1 ) {

            // player walking and pause
            if (state.ui.interaction.bridge.yaxis > -4) {
                state.ui.interaction.bridge.yaxis -= (1/8);
            };
        };

        // stance: right
        if ( state.ui.interaction.bridge.stance == 5 ) {
            // player walking and pause
            if (state.ui.interaction.bridge.xaxis < 8) {
                state.ui.interaction.bridge.xaxis += (1/8);
            };
        };

        // stance: left
        if ( state.ui.interaction.bridge.stance == 13 ) {

            // player walking and pause
            if (state.ui.interaction.bridge.xaxis > 0) {
                state.ui.interaction.bridge.xaxis -= (1/8);
            };
        };
    };

    // left
    if ( state.ui.interaction.bridge.xaxis <= 0 && state.ui.interaction.bridge.cycles.walking == true ) {
        state.ui.interaction.bridge.xaxis = 0;
        //state.ui.interaction.bridge.cycles.walking = false;

        // reset face
        state.ui.interaction.bridge.stance = 5;

        // auto walk
        state.ui.interaction.bridge.xaxis += (1/8);
    };

    // right
    if ( state.ui.interaction.bridge.xaxis >= 7 && state.ui.interaction.bridge.cycles.walking == true ) {
        state.ui.interaction.bridge.xaxis = 7;
        //state.ui.interaction.bridge.cycles.walking = false;

        // reset face
        state.ui.interaction.bridge.stance = 13;

        // auto walk
        state.ui.interaction.bridge.xaxis -= (1/8);
    };

    if (document.getElementById('bridge') != null) {
    document.getElementById('bridge').style =
        'height: ' + (state.ui.interaction.bridge.height * (state.ux.dimensions.height8)) + 'px;' +
        'width: ' + (state.ui.interaction.bridge.width * (state.ux.dimensions.width8)) + 'px;' +
        'bottom: ' + (state.ui.interaction.bridge.yaxis * (state.ux.dimensions.height8)) + 'px;' +
        'left: ' + (state.ui.interaction.bridge.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

        // enemy
    // motion & stop
    if ( state.ui.interaction.enemy.cycles.walking == true) {

        // stance: up
        if ( state.ui.interaction.enemy.stance == 9 ) {

            
            // player walking and pause
            if (state.ui.interaction.enemy.yaxis < 3) {
                state.ui.interaction.enemy.yaxis += (1/8);
            };
        };

        // stance: down
        if ( state.ui.interaction.enemy.stance == 1 ) {

            // player walking and pause
            if (state.ui.interaction.enemy.yaxis > -4) {
                state.ui.interaction.enemy.yaxis -= (1/8);
            };
        };

        // stance: right
        if ( state.ui.interaction.enemy.stance == 5 ) {
            // player walking and pause
            if (state.ui.interaction.enemy.xaxis < 8) {
                state.ui.interaction.enemy.xaxis += (1/8);
            };
        };

        // stance: left
        if ( state.ui.interaction.enemy.stance == 13 ) {

            // player walking and pause
            if (state.ui.interaction.enemy.xaxis > 0) {
                state.ui.interaction.enemy.xaxis -= (1/8);
            };
        };
    };

    // left
    if ( state.ui.interaction.enemy.xaxis <= 0 && state.ui.interaction.enemy.cycles.walking == true ) {
        state.ui.interaction.enemy.xaxis = 0;
        //state.ui.interaction.enemy.cycles.walking = false;

        // reset face
        state.ui.interaction.enemy.stance = 5;

        // auto walk
        state.ui.interaction.enemy.xaxis += (1/8);
    };

    // right
    if ( state.ui.interaction.enemy.xaxis >= 7 && state.ui.interaction.enemy.cycles.walking == true ) {
        state.ui.interaction.enemy.xaxis = 7;
        //state.ui.interaction.enemy.cycles.walking = false;

        // reset face
        state.ui.interaction.enemy.stance = 13;

        // auto walk
        state.ui.interaction.enemy.xaxis -= (1/8);
    };

    if (document.getElementById('enemy') != null) {
    document.getElementById('enemy').style =
        'height: ' + (state.ui.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
        'width: ' + (state.ui.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
        'bottom: ' + (state.ui.interaction.enemy.yaxis * (state.ux.dimensions.height8)) + 'px;' +
        'left: ' + (state.ui.interaction.enemy.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };


    // player 1

    // skrink
    if ( state.ui.interaction.player_1.cycles.shrink == true) {
        
        if (state.ui.interaction.player_1.width > 0) {
            state.ui.interaction.player_1.width -= (1/8);
        };
        
        if (state.ui.interaction.player_1.height > 0) {
            state.ui.interaction.player_1.height -= (1/8);
        };

        //state.ui.interaction.player_1.yaxis -= (1/8);
        //state.ui.interaction.player_1.xaxis -= (1/8);
    };

    // growth
    if ( state.ui.interaction.player_1.cycles.growth == true) {
        
        if (state.ui.interaction.player_1.width < 16) {
            state.ui.interaction.player_1.width += (1/8);
        };
        
        if (state.ui.interaction.player_1.height < 16) {
            state.ui.interaction.player_1.height += (1/8);
        };

        //state.ui.interaction.player_1.yaxis += (1/8);
        //state.ui.interaction.player_1.xaxis += (1/8);
    };

    // motion & stop
    if ( state.ui.interaction.player_1.cycles.walking == true) {

        // stance: up
        if ( state.ui.interaction.player_1.stance == 9 ) {

            
            // player walking and pause
            if (state.ui.interaction.player_1.yaxis < 3) {
                state.ui.interaction.player_1.yaxis += (1/8);
            };
        };

        // stance: down
        if ( state.ui.interaction.player_1.stance == 1 ) {

            // player walking and pause
            if (state.ui.interaction.player_1.yaxis > -4) {
                state.ui.interaction.player_1.yaxis -= (1/8);
            };
        };

        // stance: right
        if ( state.ui.interaction.player_1.stance == 5 ) {
            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 8) {
                state.ui.interaction.player_1.xaxis += (1/8);
            };
        };

        // stance: left
        if ( state.ui.interaction.player_1.stance == 13 ) {

            // player walking and pause
            if (state.ui.interaction.player_1.xaxis > -4) {
                state.ui.interaction.player_1.xaxis -= (1/8);
            };
        };
    };


    // reactions
        // stance: up
        if ( state.ui.interaction.player_1.stance == 9 ) {

            // standing up loop
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_up_frame+ ' position_absolute margin_auto ');

                        if (standing_up_frame == 4) {
                            standing_up_frame = 0;
                        };
                        standing_up_frame += 1;
                    };
            };

            // walking up loop
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {

                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_'+walking_up_frame+ ' position_absolute margin_auto ');

                        if (walking_up_frame == 9) {
                            walking_up_frame = 0;
                        };
                        walking_up_frame += 1;
                    };
            };
        };

        // stance: down
        if ( state.ui.interaction.player_1.stance == 1 ) {

            // standing down loop 
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_down_frame+ ' position_absolute margin_auto ');

                        if (standing_down_frame == 4) {
                            standing_down_frame = 0;
                        };
                        standing_down_frame += 1;
                    };

            };

            // walking down loop
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {

                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_'+walking_down_frame+ ' position_absolute margin_auto ');

                        if (walking_down_frame == 9) {
                            walking_down_frame = 0;
                        };
                        walking_down_frame += 1;
                    };

            };
        };

        // stance: right
        if ( state.ui.interaction.player_1.stance == 5 ) {

            // standing right loop
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_right_frame+ ' position_absolute margin_auto ');

                        if (standing_right_frame == 4) {
                            standing_right_frame = 0;
                        };
                        standing_right_frame += 1;
                    };

            };

            // walking right loop
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {

                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_'+walking_right_frame+ ' position_absolute margin_auto ');

                        if (walking_right_frame == 9) {
                            walking_right_frame = 0;
                        };
                        walking_right_frame += 1;
                    };

            };
        };

        // stance: left
        if ( state.ui.interaction.player_1.stance == 13 ) {

            // standing left loop 
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_left_frame+ ' position_absolute margin_auto ');

                        if (standing_left_frame == 4) {
                            standing_left_frame = 0;
                        };
                        standing_left_frame += 1;
                    };

            };

            // walking left loop
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {

                    if (document.getElementById('player_1_svg') != null) {
                        document.getElementById('player_1_svg').innerHTML = '';

                            document.getElementById('player_1_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_'+walking_left_frame+ ' position_absolute margin_auto ');

                        if (walking_left_frame == 9) {
                            walking_left_frame = 0;
                        };
                        walking_left_frame += 1;
                    };

            };
        };

    // player: 1
    if (document.getElementById('player_1_svg') != null) {
    document.getElementById('player_1_svg').style =
        'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
        'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
        'bottom: ' + (state.ui.interaction.player_1.yaxis * (state.ux.dimensions.height8)) + 'px;' +
        'left: ' + (state.ui.interaction.player_1.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };


    // player 2

    // skrink
    if ( state.ui.interaction.player_2.cycles.shrink == true) {
        
        if (state.ui.interaction.player_2.width > 0) {
            state.ui.interaction.player_2.width -= (1/8);
        };
        
        if (state.ui.interaction.player_2.height > 0) {
            state.ui.interaction.player_2.height -= (1/8);
        };

        //state.ui.interaction.player_2.yaxis -= (1/8);
        //state.ui.interaction.player_2.xaxis -= (1/8);
    };

    // growth
    if ( state.ui.interaction.player_2.cycles.growth == true) {
        
        if (state.ui.interaction.player_2.width < 16) {
            state.ui.interaction.player_2.width += (1/8);
        };
        
        if (state.ui.interaction.player_2.height < 16) {
            state.ui.interaction.player_2.height += (1/8);
        };

        //state.ui.interaction.player_2.yaxis += (1/8);
        //state.ui.interaction.player_2.xaxis += (1/8);
    };

    // motion & stop
    if ( state.ui.interaction.player_2.cycles.walking == true) {

        // stance: up
        if ( state.ui.interaction.player_2.stance == 9 ) {

            
            // player walking and pause
            if (state.ui.interaction.player_2.yaxis < 3) {
                state.ui.interaction.player_2.yaxis += (1/8);
            };
        };

        // stance: down
        if ( state.ui.interaction.player_2.stance == 1 ) {

            // player walking and pause
            if (state.ui.interaction.player_2.yaxis > -4) {
                state.ui.interaction.player_2.yaxis -= (1/8);
            };
        };

        // stance: right
        if ( state.ui.interaction.player_2.stance == 5 ) {
            // player walking and pause
            if (state.ui.interaction.player_2.xaxis < 8) {
                state.ui.interaction.player_2.xaxis += (1/8);
            };
        };

        // stance: left
        if ( state.ui.interaction.player_2.stance == 13 ) {

            // player walking and pause
            if (state.ui.interaction.player_2.xaxis > -4) {
                state.ui.interaction.player_2.xaxis -= (1/8);
            };
        };
    };


    // reactions
        // stance: up
        if ( state.ui.interaction.player_2.stance == 9 ) {

            // standing up loop
            if ( state.ui.interaction.player_2.idle.standing
                && !state.ui.interaction.player_2.cycles.walking ) {
                    
                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_up_frame+ ' position_absolute margin_auto ');

                        if (standing_up_frame == 4) {
                            standing_up_frame = 0;
                        };
                        standing_up_frame += 1;
                    };
            };

            // walking up loop
            if ( state.ui.interaction.player_2.idle.standing
                && state.ui.interaction.player_2.cycles.walking ) {

                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_'+walking_up_frame+ ' position_absolute margin_auto ');

                        if (walking_up_frame == 9) {
                            walking_up_frame = 0;
                        };
                        walking_up_frame += 1;
                    };
            };
        };

        // stance: down
        if ( state.ui.interaction.player_2.stance == 1 ) {

            // standing down loop 
            if ( state.ui.interaction.player_2.idle.standing
                && !state.ui.interaction.player_2.cycles.walking ) {
                    
                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_down_frame+ ' position_absolute margin_auto ');

                        if (standing_down_frame == 4) {
                            standing_down_frame = 0;
                        };
                        standing_down_frame += 1;
                    };

            };

            // walking down loop
            if ( state.ui.interaction.player_2.idle.standing
                && state.ui.interaction.player_2.cycles.walking ) {

                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_'+walking_down_frame+ ' position_absolute margin_auto ');

                        if (walking_down_frame == 9) {
                            walking_down_frame = 0;
                        };
                        walking_down_frame += 1;
                    };

            };
        };

        // stance: right
        if ( state.ui.interaction.player_2.stance == 5 ) {

            // standing right loop
            if ( state.ui.interaction.player_2.idle.standing
                && !state.ui.interaction.player_2.cycles.walking ) {
                    
                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_right_frame+ ' position_absolute margin_auto ');

                        if (standing_right_frame == 4) {
                            standing_right_frame = 0;
                        };
                        standing_right_frame += 1;
                    };

            };

            // walking right loop
            if ( state.ui.interaction.player_2.idle.standing
                && state.ui.interaction.player_2.cycles.walking ) {

                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_'+walking_right_frame+ ' position_absolute margin_auto ');

                        if (walking_right_frame == 9) {
                            walking_right_frame = 0;
                        };
                        walking_right_frame += 1;
                    };

            };
        };

        // stance: left
        if ( state.ui.interaction.player_2.stance == 13 ) {

            // standing left loop 
            if ( state.ui.interaction.player_2.idle.standing
                && !state.ui.interaction.player_2.cycles.walking ) {
                    
                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_left_frame+ ' position_absolute margin_auto ');

                        if (standing_left_frame == 4) {
                            standing_left_frame = 0;
                        };
                        standing_left_frame += 1;
                    };

            };

            // walking left loop
            if ( state.ui.interaction.player_2.idle.standing
                && state.ui.interaction.player_2.cycles.walking ) {

                    if (document.getElementById('player_2_svg') != null) {
                        document.getElementById('player_2_svg').innerHTML = '';

                            document.getElementById('player_2_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_'+walking_left_frame+ ' position_absolute margin_auto ');

                        if (walking_left_frame == 9) {
                            walking_left_frame = 0;
                        };
                        walking_left_frame += 1;
                    };

            };
        };

    // player: 2
    if (document.getElementById('player_2_svg') != null) {
    document.getElementById('player_2_svg').style =
        'height: ' + (state.ui.interaction.player_2.height * (state.ux.dimensions.height8)) + 'px;' +
        'width: ' + (state.ui.interaction.player_2.width * (state.ux.dimensions.width8)) + 'px;' +
        'bottom: ' + (state.ui.interaction.player_2.yaxis * (state.ux.dimensions.height8)) + 'px;' +
        'left: ' + (state.ui.interaction.player_2.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };
    
    // check game state
        
        if ( (state.ui.interaction.player_1.xaxis <= state.ui.interaction.enemy.xaxis) && (state.ui.interaction.player_1.width >= state.ui.interaction.enemy.xaxis) ) {
            console.log('lost')
        };

        if ( (state.ui.interaction.player_1.xaxis <= state.ui.interaction.enemy.xaxis) && (state.ui.interaction.player_1.width >= state.ui.interaction.enemy.xaxis) ) {
            state.ui.interaction.player_1.yaxis = 1;
        };

        if ( (state.ui.interaction.player_1.xaxis >= state.ui.interaction.enemy.xaxis) || (state.ui.interaction.player_1.width <= state.ui.interaction.enemy.xaxis) ) {
            state.ui.interaction.player_1.yaxis = 0;
        };
        
        // up
        if ( state.ui.interaction.player_1.yaxis == 4 && state.ui.interaction.player_1.cycles.walking == true ) {
            console.log('top met')
        };

        // down
        if ( state.ui.interaction.player_1.yaxis == 0 && state.ui.interaction.player_1.cycles.walking == true ) {
            console.log('bottom met')
        };

        // left
        if ( state.ui.interaction.player_1.xaxis <= -1 && state.ui.interaction.player_1.cycles.walking == true ) {
            state.ui.interaction.player_1.xaxis = -1;
            //state.ui.interaction.player_1.cycles.walking = false;

            // reset face
            //state.ui.interaction.player_1.stance = 5;

            // auto walk
            //state.ui.interaction.player_1.xaxis += (1/8);
        };

        // right
        if ( state.ui.interaction.player_1.xaxis >= 5 && state.ui.interaction.player_1.cycles.walking == true ) {
            state.ui.interaction.player_1.xaxis = 5;
            //state.ui.interaction.player_1.cycles.walking = false;

            // reset face
            //state.ui.interaction.player_1.stance = 13;

            // auto walk
            //state.ui.interaction.player_1.xaxis -= (1/8);
        };



        // left
        if ( state.ui.interaction.player_2.xaxis <= -1 && state.ui.interaction.player_2.cycles.walking == true ) {
            state.ui.interaction.player_2.xaxis = -1;
            //state.ui.interaction.player_2.cycles.walking = false;

            // reset face
            state.ui.interaction.player_2.stance = 5;

            // auto walk
            state.ui.interaction.player_2.xaxis += (1/8);
        };

        // right
        if ( state.ui.interaction.player_2.xaxis >= 5 && state.ui.interaction.player_2.cycles.walking == true ) {
            state.ui.interaction.player_2.xaxis = 5;
            //state.ui.interaction.player_2.cycles.walking = false;

            // reset face
            state.ui.interaction.player_2.stance = 13;

            // auto walk
            state.ui.interaction.player_2.xaxis -= (1/8);
        };
};

export default {
    Handle_ui
}