import from_index from '../index.js';

let state = '';
let last_set = 0;
let direction = 'down'

let standing_up_frame = 0;
let standing_down_frame = 0;

let standing_left_frame = 0;
let standing_right_frame = 0;

let walking_left_frame = 0;
let walking_right_frame = 0;
 
let Handle_animation = () => {

    state = from_index.Handle_return_state();

        // stance: up
        if ( state.ui.interaction.player_1.stance == 13 ) {

            // standing up loop
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_left_frame+ ' position_absolute margin_auto ');

                        if (standing_left_frame == 4) {
                            standing_left_frame = 0;
                        };
                        standing_left_frame += 1;
                    };
            };

        };

        // stance: down
        if ( state.ui.interaction.player_1.stance == 5 ) {

            // standing down loop 
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_right_frame+ ' position_absolute margin_auto ');

                        if (standing_right_frame == 4) {
                            standing_right_frame = 0;
                        };
                        standing_right_frame += 1;
                    };

            };

        };

        // walking: left
        if ( state.ui.interaction.player_1.stance == 13 ) {

            // standing walking loop
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_'+walking_left_frame+ ' position_absolute margin_auto ');

                        if (walking_left_frame == 9) {
                            walking_left_frame = 0;
                        };
                        walking_left_frame += 1;
                    };

                    state.ui.interaction.player_1.xaxis += (1/8);
            };

        };

        // walking: right
        if ( state.ui.interaction.player_1.stance == 5 ) {

            // standing walking loop 
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_'+walking_right_frame+ ' position_absolute margin_auto ');

                        if (walking_right_frame == 9) {
                            walking_right_frame = 0;
                        };
                        walking_right_frame += 1;

                    state.ui.interaction.player_1.xaxis -= (1/8);
                };

            };

        };


        // center of set 3 ie: office room
        if ( (state.ui.interaction.player_1.xaxis < 5 && state.ui.interaction.player_1.xaxis > 4) && state.ui.stage.cardboard.set == 3 && state.ui.stage.cardboard_fg.yaxis == 0 && state.ui.stage.cardboard_fg.xaxis == 0) {
            console.log('door');
        };

        if ( (state.ui.interaction.player_1.xaxis < 4 && state.ui.interaction.player_1.xaxis > 2) && state.ui.stage.cardboard.set == 3 && state.ui.stage.cardboard_fg.yaxis == 0 && state.ui.stage.cardboard_fg.xaxis == 0) {
            console.log('main desk');
        };

        // interaction
        // - game
        // - player_1
        if (document.getElementById('player') != null) {
            document.getElementById('player').style =
                'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                'bottom: ' + (state.ui.interaction.player_1.yaxis * (state.ux.dimensions.height8)) + 'px;' +
                'left: ' + (state.ui.interaction.player_1.xaxis * (state.ux.dimensions.width8)) + 'px;';
        };

        // player 1


        // skrink (drawn in size)
        if ( state.ui.interaction.player_1.cycles.shrink == true) {
            
            state.ui.interaction.player_1.stance = 5;

            if (state.ui.interaction.player_1.width > 1) {
                state.ui.interaction.player_1.width -= (1/8);
            };
            
            if (state.ui.interaction.player_1.height > 1) {
                state.ui.interaction.player_1.height -= (1/8);
            };

            if (state.ui.interaction.player_1.yaxis < (8/8)) {
                state.ui.interaction.player_1.yaxis += (1/8);
            };

            if (state.ui.interaction.player_1.xaxis < 0) {
                state.ui.interaction.player_1.xaxis = 0;
            };

            state.ui.interaction.player_1.cycles.walking = true;

            if (
            state.ui.interaction.player_1.cycles.shrink == true &&
            state.ui.interaction.player_1.width == 1 &&
            state.ui.interaction.player_1.height == 1 &&
            state.ui.interaction.player_1.yaxis == (8/8) &&
            state.ui.interaction.player_1.xaxis == 0) {

                state.ui.interaction.player_1.stance = 13;

                state.ui.interaction.player_1.cycles.walking = false;
                state.ui.interaction.player_1.cycles.shrink = false;
            };
        };

        /* skrink to 2
        if ( state.ui.interaction.player_1.cycles.shrink == true) {
            
            if (state.ui.interaction.player_1.width > 2) {
                state.ui.interaction.player_1.width -= (1/8);
            };
            
            if (state.ui.interaction.player_1.height > 2) {
                state.ui.interaction.player_1.height -= (1/8);
            };

            if (state.ui.interaction.player_1.yaxis < (3/8)) {
                state.ui.interaction.player_1.yaxis += (1/8);
            };

            if (state.ui.interaction.player_1.xaxis > -1) {
                state.ui.interaction.player_1.xaxis -= (1/8);
            };

            if (
            state.ui.interaction.player_1.cycles.shrink == true &&
            state.ui.interaction.player_1.width == 2 &&
            state.ui.interaction.player_1.height == 2 &&
            state.ui.interaction.player_1.yaxis == (3/8) &&
            state.ui.interaction.player_1.xaxis == -1) {
                state.ui.interaction.player_1.cycles.shrink = false;
            };
        };
        */

        /* skrink to 4
        if ( state.ui.interaction.player_1.cycles.shrink == true) {
            
            if (state.ui.interaction.player_1.width > 4) {
                state.ui.interaction.player_1.width -= (1/8);
            };
            
            if (state.ui.interaction.player_1.height > 4) {
                state.ui.interaction.player_1.height -= (1/8);
            };

            if (state.ui.interaction.player_1.yaxis < (3/8)) {
                state.ui.interaction.player_1.yaxis += (1/8);
            };

            if (state.ui.interaction.player_1.xaxis > -1) {
                state.ui.interaction.player_1.xaxis -= (1/8);
            };

            if (
            state.ui.interaction.player_1.cycles.shrink == true &&
            state.ui.interaction.player_1.width == 4 &&
            state.ui.interaction.player_1.height == 4 &&
            state.ui.interaction.player_1.yaxis == (3/8) &&
            state.ui.interaction.player_1.xaxis == -1) {
                state.ui.interaction.player_1.cycles.shrink = false;
            };
        };
        */

        // growth (walk into focus)
        if ( state.ui.interaction.player_1.cycles.growth == true) {
            
            state.ui.interaction.player_1.stance = 13;

            if (state.ui.interaction.player_1.width < 8) {
                state.ui.interaction.player_1.width += (1/8);
            };
            
            if (state.ui.interaction.player_1.height < 8) {
                state.ui.interaction.player_1.height += (1/8);
            };

            if (state.ui.interaction.player_1.yaxis > -4) {
                state.ui.interaction.player_1.yaxis -= (1/8);
            };

            if (state.ui.interaction.player_1.xaxis > 3) {
                state.ui.interaction.player_1.xaxis = 3;
            };

            state.ui.interaction.player_1.cycles.walking = true;

            if (
            state.ui.interaction.player_1.cycles.growth == true &&
            state.ui.interaction.player_1.width == 8 &&
            state.ui.interaction.player_1.height == 8 &&
            state.ui.interaction.player_1.yaxis == -4 &&
            state.ui.interaction.player_1.xaxis == 3) {

                state.ui.interaction.player_1.stance = 5;

                state.ui.interaction.player_1.cycles.walking = false;
                state.ui.interaction.player_1.cycles.growth = false;
            };

        };

        /*
        if ( state.ui.interaction.player_1.cycles.growth == true) {
            
            if (state.ui.interaction.player_1.width < 8) {
                state.ui.interaction.player_1.width += (1/8);
            };
            
            if (state.ui.interaction.player_1.height < 8) {
                state.ui.interaction.player_1.height += (1/8);
            };

            if (state.ui.interaction.player_1.yaxis > -4) {
                state.ui.interaction.player_1.yaxis -= (1/8);
            };

            if (state.ui.interaction.player_1.xaxis < 3) {
                state.ui.interaction.player_1.xaxis += (1/8);
            };

            if (
            state.ui.interaction.player_1.cycles.growth == true &&
            state.ui.interaction.player_1.width == 8 &&
            state.ui.interaction.player_1.height == 8 &&
            state.ui.interaction.player_1.yaxis == -4 &&
            state.ui.interaction.player_1.xaxis == 3) {
                state.ui.interaction.player_1.cycles.growth = false;
            };

        };
        */



};

export default {
    Handle_animation
}