import from_index from '../index.js';

let state = '';
let last_set = 0;
let direction = 'down'

let standing_up_frame = 0;
let standing_down_frame = 0;
let standing_left_frame = 0;
let standing_right_frame = 0;
 
let Handle_interaction = () => {

    state = from_index.Handle_return_state();

        // y

        if (state.ui.stage.cardboard.yaxis == -1) {

            if ( ( (state.ui.interaction.player_1.yaxis) >= 0 ) && ( (state.ui.interaction.player_1.yaxis) < 1 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '0 - 1'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 1 ) && ( (state.ui.interaction.player_1.yaxis) < 2 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '1 - 2 '
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 2 ) && ( (state.ui.interaction.player_1.yaxis) < 3 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '2 - 3'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 3 ) && ( (state.ui.interaction.player_1.yaxis) < 4 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '3 - 4 '
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 4 ) && ( (state.ui.interaction.player_1.yaxis) < 5 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '4 - 5'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 5 ) && ( (state.ui.interaction.player_1.yaxis) < 6 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '5 - 6 '
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 6 ) && ( (state.ui.interaction.player_1.yaxis) < 7 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '6 - 7'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 7 ) && ( (state.ui.interaction.player_1.yaxis) < 8 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '7 - 8 '
            }
        }

        if (state.ui.stage.cardboard.yaxis == 0) {

            if ( ( (state.ui.interaction.player_1.yaxis) >= 0 ) && ( (state.ui.interaction.player_1.yaxis) < 1 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '8 - 9'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 1 ) && ( (state.ui.interaction.player_1.yaxis) < 2 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '9 - 10 '
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 2 ) && ( (state.ui.interaction.player_1.yaxis) < 3 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '10 - 11'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 3 ) && ( (state.ui.interaction.player_1.yaxis) < 4 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '11 - 12'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 4 ) && ( (state.ui.interaction.player_1.yaxis) < 5 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '12 - 13'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 5 ) && ( (state.ui.interaction.player_1.yaxis) < 6 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '13 - 14'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 6 ) && ( (state.ui.interaction.player_1.yaxis) < 7 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '14 - 15'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 7 ) && ( (state.ui.interaction.player_1.yaxis) < 8 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '15 - 16'
            }

        }

        if (state.ui.stage.cardboard.yaxis == 1) {

            if ( ( (state.ui.interaction.player_1.yaxis) >= 0 ) && ( (state.ui.interaction.player_1.yaxis) < 1 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '16 - 17'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 1 ) && ( (state.ui.interaction.player_1.yaxis) < 2 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '17 - 18'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 2 ) && ( (state.ui.interaction.player_1.yaxis) < 3 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '18 - 19'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 3 ) && ( (state.ui.interaction.player_1.yaxis) < 4 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '19 - 20'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 4 ) && ( (state.ui.interaction.player_1.yaxis) < 5 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '20 - 21'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 5 ) && ( (state.ui.interaction.player_1.yaxis) < 6 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '21 - 22'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 6 ) && ( (state.ui.interaction.player_1.yaxis) < 7 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '22 - 23'
            }

            if ( ( (state.ui.interaction.player_1.yaxis) >= 7 ) && ( (state.ui.interaction.player_1.yaxis) < 8 ) ) {
                document.getElementById('interactive_particle_dialogue_y').innerHTML = '23 - 24'
            }
        };

        // x


        if (state.ui.stage.cardboard.xaxis == 1) {

            if ( ( (state.ui.interaction.player_1.xaxis) >= 0 ) && ( (state.ui.interaction.player_1.xaxis) < 1 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '0 - 1'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 1 ) && ( (state.ui.interaction.player_1.xaxis) < 2 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '1 - 2 '
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 2 ) && ( (state.ui.interaction.player_1.xaxis) < 3 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '2 - 3'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 3 ) && ( (state.ui.interaction.player_1.xaxis) < 4 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '3 - 4 '
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 4 ) && ( (state.ui.interaction.player_1.xaxis) < 5 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '4 - 5'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 5 ) && ( (state.ui.interaction.player_1.xaxis) < 6 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '5 - 6 '
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 6 ) && ( (state.ui.interaction.player_1.xaxis) < 7 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '6 - 7'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 7 ) && ( (state.ui.interaction.player_1.xaxis) < 8 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '7 - 8 '
            }
        }

        if (state.ui.stage.cardboard.xaxis == 0) {

            if ( ( (state.ui.interaction.player_1.xaxis) >= 0 ) && ( (state.ui.interaction.player_1.xaxis) < 1 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '8 - 9'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 1 ) && ( (state.ui.interaction.player_1.xaxis) < 2 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '9 - 10 '
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 2 ) && ( (state.ui.interaction.player_1.xaxis) < 3 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '10 - 11'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 3 ) && ( (state.ui.interaction.player_1.xaxis) < 4 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '11 - 12'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 4 ) && ( (state.ui.interaction.player_1.xaxis) < 5 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '12 - 13'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 5 ) && ( (state.ui.interaction.player_1.xaxis) < 6 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '13 - 14'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 6 ) && ( (state.ui.interaction.player_1.xaxis) < 7 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '14 - 15'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 7 ) && ( (state.ui.interaction.player_1.xaxis) < 8 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '15 - 16'
            }

        }

        if (state.ui.stage.cardboard.xaxis == -1) {

            if ( ( (state.ui.interaction.player_1.xaxis) >= 0 ) && ( (state.ui.interaction.player_1.xaxis) < 1 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '16 - 17'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 1 ) && ( (state.ui.interaction.player_1.xaxis) < 2 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '17 - 18'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 2 ) && ( (state.ui.interaction.player_1.xaxis) < 3 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '18 - 19'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 3 ) && ( (state.ui.interaction.player_1.xaxis) < 4 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '19 - 20'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 4 ) && ( (state.ui.interaction.player_1.xaxis) < 5 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '20 - 21'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 5 ) && ( (state.ui.interaction.player_1.xaxis) < 6 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '21 - 22'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 6 ) && ( (state.ui.interaction.player_1.xaxis) < 7 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '22 - 23'
            }

            if ( ( (state.ui.interaction.player_1.xaxis) >= 7 ) && ( (state.ui.interaction.player_1.xaxis) < 8 ) ) {
                document.getElementById('interactive_particle_dialogue_x').innerHTML = '23 - 24'
            }
        };



        if (last_set > state.ui.stage.cardboard.set) {
            direction = 'up';
        }

        if (last_set < state.ui.stage.cardboard.set) {
            direction = 'down';
        }


        if (last_set == state.ui.stage.cardboard.set && direction == 'up') {
            last_set += 1;
        }

        if (last_set == state.ui.stage.cardboard.set && direction == 'down') {
            last_set -= 1;
        }

        last_set = state.ui.stage.cardboard.set;


};

export default {
    Handle_interaction
}