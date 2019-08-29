import from_index from '../index.js';

let state = '';
 
let Handle_ui = () => {

    state = from_index.Handle_return_state();

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
                (state.ui.stage.cardboard.xaxis * 100) + "%, " +
                (state.ui.stage.cardboard.yaxis * 100) + "%, 0);"
        };


        // y 1 x axis 1
        if (state.animation.instances.grid_64 === 1) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = -4;
        }

        // y 1 x axis 2
        if (state.animation.instances.grid_64 === 2) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = -3;
        }

        // y 1 x axis 3
        if (state.animation.instances.grid_64 === 3) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = -2;
        }

        // y 1 x axis 4
        if (state.animation.instances.grid_64 === 4) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = -1;
        }

        // y 1 x axis 5
        if (state.animation.instances.grid_64 === 5) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = 1;
        }

        // y 1 x axis 6
        if (state.animation.instances.grid_64 === 6) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = 2;
        }

        // y 1 x axis 7
        if (state.animation.instances.grid_64 === 7) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = 3;
        }

        // y 1 x axis 8
        if (state.animation.instances.grid_64 === 8) {
            state.ui.interaction.parallax.yaxis = -4;
            state.ui.interaction.parallax.xaxis = 4;
        }

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 9) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 10) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 11) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = -2;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 12) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 13) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 14) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 15) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 2 x axis 1
        if (state.animation.instances.grid_64 == 16) {
            state.ui.interaction.parallax.yaxis = -3;
            state.ui.interaction.parallax.xaxis = 4;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 17) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 18) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 19) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = -2;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 20) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 21) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 22) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 23) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 3 x axis 1
        if (state.animation.instances.grid_64 == 24) {
            state.ui.interaction.parallax.yaxis = -2;
            state.ui.interaction.parallax.xaxis = 4;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 25) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 26) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 27) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = -2;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 28) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 29) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 30) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 31) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 4 x axis 1
        if (state.animation.instances.grid_64 == 32) {
            state.ui.interaction.parallax.yaxis = -1;
            state.ui.interaction.parallax.xaxis = 4;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 34) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 34) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 35) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = -2;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 36) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 37) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 38) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 39) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 5 x axis 1
        if (state.animation.instances.grid_64 == 40) {
            state.ui.interaction.parallax.yaxis = 1;
            state.ui.interaction.parallax.xaxis = 4;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 41) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 42) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 43) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = -2;
        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 44) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 45) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 46) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 47) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 6 x axis 1
        if (state.animation.instances.grid_64 == 48) {
            state.ui.interaction.parallax.yaxis = 2;
            state.ui.interaction.parallax.xaxis = 4;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 49) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 50) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 51) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = -2;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 52) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 53) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 54) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 55) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 7 x axis 1
        if (state.animation.instances.grid_64 == 56) {
            state.ui.interaction.parallax.yaxis = 3;
            state.ui.interaction.parallax.xaxis = 4;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 57) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = -4;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 58) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = -3;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 59) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = -2;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 60) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = -1;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 61) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = 1;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 62) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = 2;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 63) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = 3;

        };

        // y 8 x axis 1
        if (state.animation.instances.grid_64 == 64) {
            state.ui.interaction.parallax.yaxis = 4;
            state.ui.interaction.parallax.xaxis = 4;

        };

        if (document.getElementById('bg_room_set') != null) {
            document.getElementById('bg_room_set').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * 1.2) + "%, " +
                (state.ui.interaction.parallax.yaxis * 1.2) + "%, 0);"
        };

        if (document.getElementById('bg_office_set') != null) {
            document.getElementById('bg_office_set').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * 1) + "%, " +
                (state.ui.interaction.parallax.yaxis * 1) + "%, 0);"
        };

        if (document.getElementById('npm_set') != null) {
            document.getElementById('npm_set').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * .8) + "%, " +
                (state.ui.interaction.parallax.yaxis * .8) + "%, 0);"
        };

        if (document.getElementById('npc_set') != null) {
            document.getElementById('npc_set').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * .6) + "%, " +
                (state.ui.interaction.parallax.yaxis * .6) + "%, 0);"
        };

        if (document.getElementById('mg_set') != null) {
            document.getElementById('mg_set').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * .4) + "%, " +
                (state.ui.interaction.parallax.yaxis * .4) + "%, 0);"
        };

        if (document.getElementById('fg_set') != null) {
            document.getElementById('fg_set').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * .2) + "%, " +
                (state.ui.interaction.parallax.yaxis * .2) + "%, 0);"
        };

        if (document.getElementById('interactive') != null) {
            document.getElementById('interactive').style = "transform: translate3d(" +
                (state.ui.interaction.parallax.xaxis * 0) + "%, " +
                (state.ui.interaction.parallax.yaxis * 0) + "%, 0);"
        };

};

export default {
    Handle_ui
}