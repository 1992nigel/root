import from_index from '../index.js';

let state = '';
           
let standing_up_frame = 0;
let standing_down_frame = 0;
let standing_left_frame = 0;
let standing_right_frame = 0;
 
let Handle_ui = () => {

    state = from_index.Handle_return_state();

        // stance: up
        if ( state.ui.interaction.player_1.stance == 13 ) {

            // standing up loop
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_up_frame+ ' position_absolute margin_auto ');

                        if (standing_up_frame == 4) {
                            standing_up_frame = 0;
                        };
                        standing_up_frame += 1;
                    };
            };

        };

        // stance: down
        if ( state.ui.interaction.player_1.stance == 5 ) {

            // standing down loop 
            if ( state.ui.interaction.player_1.idle.standing
                && !state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_down_frame+ ' position_absolute margin_auto ');

                        if (standing_down_frame == 4) {
                            standing_down_frame = 0;
                        };
                        standing_down_frame += 1;
                    };

            };

        };

        // walking: left
        if ( state.ui.interaction.player_1.stance == 13 ) {

            // standing walking loop
            if ( state.ui.interaction.player_1.idle.standing
                && state.ui.interaction.player_1.cycles.walking ) {
                    
                    if (document.getElementById('player') != null) {

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_up_frame+ ' position_absolute margin_auto ');

                        if (standing_up_frame == 4) {
                            standing_up_frame = 0;
                        };
                        standing_up_frame += 1;
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

                            document.getElementById('player').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_down_frame+ ' position_absolute margin_auto ');

                        if (standing_down_frame == 4) {
                            standing_down_frame = 0;
                        };
                        standing_down_frame += 1;

                    state.ui.interaction.player_1.xaxis -= (1/8);
                    };

            };

        };


        // center of set 3 ie: office room
        if ( (state.ui.interaction.player_1.xaxis < 5 && state.ui.interaction.player_1.xaxis > 4) && state.ui.stage.cardboard_fold.set == 3 && state.ui.stage.cardboard_fg.yaxis == 0 && state.ui.stage.cardboard_fg.xaxis == 0) {
            console.log('door');
        };

        if ( (state.ui.interaction.player_1.xaxis < 4 && state.ui.interaction.player_1.xaxis > 2) && state.ui.stage.cardboard_fold.set == 3 && state.ui.stage.cardboard_fg.yaxis == 0 && state.ui.stage.cardboard_fg.xaxis == 0) {
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
            
            if (state.ui.interaction.player_1.width > 4) {
                state.ui.interaction.player_1.width -= (1/8);
            };
            
            if (state.ui.interaction.player_1.height > 4) {
                state.ui.interaction.player_1.height -= (1/8);
            };

            if (state.ui.interaction.player_1.yaxis < 1) {
                state.ui.interaction.player_1.yaxis += (1/8);
            };

            if (state.ui.interaction.player_1.xaxis > -1) {
                state.ui.interaction.player_1.xaxis -= (1/8);
            };

            if (
            state.ui.interaction.player_1.cycles.shrink == true &&
            state.ui.interaction.player_1.width == 4 &&
            state.ui.interaction.player_1.height == 4 &&
            state.ui.interaction.player_1.yaxis == 1 &&
            state.ui.interaction.player_1.xaxis == -1) {
                state.ui.interaction.player_1.cycles.shrink = false;
            };
        };

        // growth (walk into focus)
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

        if (state.ui.stage.cardboard_fold.set == 3 && (state.ui.stage.cardboard_fold.fold == 3 || state.ui.stage.cardboard_fold.fold == 4) && state.animation.instances.loaded_1) {
            document.getElementById('bg_office_set').classList.add('fadeIn');
            document.getElementById('bg_office_set').classList.remove('fadeOut');
            document.getElementById('npm_set').classList.add('fadeIn');
            document.getElementById('npm_set').classList.remove('fadeOut');
            document.getElementById('npc_set').classList.add('fadeIn');
            document.getElementById('npc_set').classList.remove('fadeOut');
            document.getElementById('fg_set').classList.add('fadeIn');
            document.getElementById('fg_set').classList.remove('fadeOut');
        }

        if (state.ui.stage.cardboard_fold.set == 3 && (state.ui.stage.cardboard_fold.fold == 3 || state.ui.stage.cardboard_fold.fold == 4) && state.animation.instances.loaded_2) {
            document.getElementById('mg_set').classList.add('fadeIn');
            document.getElementById('mg_set').classList.remove('fadeOut');
        }


        if (state.ui.stage.cardboard_fold.set == 3 && (state.ui.stage.cardboard_fold.fold == 3 || state.ui.stage.cardboard_fold.fold == 4) && state.animation.instances.loaded_2 == false) {
            document.getElementById('mg_set').classList.remove('fadeIn');
            document.getElementById('mg_set').classList.add('fadeOut');
        }
        
        if (state.ui.stage.cardboard_fold.set == 3 && (state.ui.stage.cardboard_fold.fold == 3 || state.ui.stage.cardboard_fold.fold == 4) && state.animation.instances.loaded_12) {
            document.getElementById('bg_office_set').classList.remove('fadeIn');
            document.getElementById('bg_office_set').classList.add('fadeOut');
            document.getElementById('npm_set').classList.remove('fadeIn');
            document.getElementById('npm_set').classList.add('fadeOut');
            document.getElementById('npc_set').classList.remove('fadeIn');
            document.getElementById('npc_set').classList.add('fadeOut');
            document.getElementById('fg_set').classList.remove('fadeIn');
            document.getElementById('fg_set').classList.add('fadeOut');
        }

        //stage
        // Enneagon
        if (document.getElementById('cardboard_color') != null) {
            document.getElementById('cardboard_color').style = "transform: translate3d(" +
                (state.ui.stage.cardboard_color.xaxis * 100) + "%, " +
                (state.ui.stage.cardboard_color.yaxis * 100) + "%, 0);"
        };
        if (document.getElementById('cardboard_bg') != null) {
            document.getElementById('cardboard_bg').style = "transform: translate3d(" +
                (state.ui.stage.cardboard_bg.xaxis * 100) + "%, " +
                (state.ui.stage.cardboard_bg.yaxis * 100) + "%, 0);"
        };

        if (document.getElementById('cardboard_mg') != null) {
            document.getElementById('cardboard_mg').style = "transform: translate3d(" +
                (state.ui.stage.cardboard_mg.xaxis * 100) + "%, " +
                (state.ui.stage.cardboard_mg.yaxis * 100) + "%, 0);"
        };

        if (document.getElementById('cardboard_fg') != null) {
            document.getElementById('cardboard_fg').style = "transform: translate3d(" +
                (state.ui.stage.cardboard_fg.xaxis * 100) + "%, " +
                (state.ui.stage.cardboard_fg.yaxis * 100) + "%, 0);"
        };

        if (document.getElementById('cardboard_fold') != null) {
            document.getElementById('cardboard_fold').style = "transform: translate3d(" +
                (state.ui.stage.cardboard_fold.xaxis * 100) + "%, " +
                (state.ui.stage.cardboard_fold.yaxis * 100) + "%, 0);"
        };

};

export default {
    Handle_ui
}