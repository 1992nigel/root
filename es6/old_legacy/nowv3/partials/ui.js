import from_index from '../index.js';

let state = '';


// floating
let floating_right_frame = 1;
let floating_left_frame = 1;

// blinking
//??

// standing
let standing_right_frame = 1;
let standing_left_frame = 1;

//sitting
let sitting_right_frame = 1;
let sitting_left_frame = 1;

// bend
let bend_right_frame = 1;
let bend_left_frame = 1;

// prone
let prone_right_frame = 1;
let prone_left_frame = 1;

// walking
let layer_fg_2_player_svg_frame = 1;
let layer_fg_3_player_svg_frame = 1;

let attacked_right_frame = 1;
let attacked_left_frame = 1;

let jumping_right_frame = 1;
let jumping_left_frame = 1;

let punching_right_frame = 1;
let punching_left_frame = 1;

let kicking_right_frame = 1;
let kicking_left_frame = 1;

let shooting_right_frame = 1;
let shooting_left_frame = 1;

let grabing_right_frame = 1;
let grabing_left_frame = 1;

let blocking_right_frame = 1;
let blocking_left_frame = 1;

let Handle_ui = () => {

    state = from_index.Handle_return_state();

    // loaded {
    if (state.animation.instances.loaded && !state.animation.instances.start && !state.animation.instances.learn && !state.animation.instances.hide) {
        if ( document.getElementById('paint_logo') != null ) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100vh margin_auto float_left'
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_40vh margin_auto float_left'
        }
    }

    // Start
    if (state.animation.instances.loaded && state.animation.instances.start && !state.animation.instances.learn && !state.animation.instances.hide) {
        if ( document.getElementById('paint_logo') != null ) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 left_0 width_40 height_40vh margin_auto float_left'
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 left_0 width_40 height_40vh margin_auto float_left'
        }
    }

    // Learn
    if (state.animation.instances.loaded && !state.animation.instances.start && state.animation.instances.learn && !state.animation.instances.hide) {
        if ( document.getElementById('paint_logo') != null ) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 right_0 width_40 height_40vh margin_auto float_left'
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 right_0 width_40 height_40vh margin_auto float_left'
        }
    }

    // Route Hide
    if (state.animation.instances.loaded && !state.animation.instances.start && !state.animation.instances.learn && state.animation.instances.hide) {
        if ( document.getElementById('paint_logo') != null ) {
            document.getElementById('paint_logo').classList = 'position_absolute bottom_0 top_0 right_0 left_0 opacity_05 width_40 height_40vh margin_auto float_left'
            document.getElementById('logo_filler').classList = 'position_absolute bottom_0 top_0 right_0 left_0 opacity_05 width_40 height_40vh margin_auto float_left'
        }
    }

    document.getElementById('parallax_X_Layer1').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer1.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer1.clientX * (state.ux.dimensions.width8) * ( (1/8) * 1) ) + 'px';
    document.getElementById('parallax_X_Layer2').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer2.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer2.clientX * (state.ux.dimensions.width8) * ( (1/8) * 2) ) + 'px';
    document.getElementById('parallax_X_Layer3').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer3.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer3.clientX * (state.ux.dimensions.width8) * ( (1/8) * 3) ) + 'px';
    document.getElementById('parallax_X_Layer4').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer4.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer4.clientX * (state.ux.dimensions.width8) * ( (1/8) * 4) ) + 'px';
    document.getElementById('parallax_X_Layer5').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer5.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer5.clientX * (state.ux.dimensions.width8) * ( (1/8) * 5) ) + 'px';
    document.getElementById('parallax_X_Layer6').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer6.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer6.clientX * (state.ux.dimensions.width8) * ( (1/8) * 6) ) + 'px';
    document.getElementById('parallax_X_Layer7').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer7.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer5.clientX * (state.ux.dimensions.width8) * ( (1/8) * 7) ) + 'px';
    document.getElementById('parallax_X_Layer8').style = 'bottom: '+ (state.ui.interaction.parallax_x.layer8.clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.parallax_x.layer6.clientX * (state.ux.dimensions.width8) * ( (1/8) * 8) ) + 'px';

    document.getElementById('parallax_Y_Layer1').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer1.clientY * (state.ux.dimensions.height8) * ( (1/8) * 1) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer1.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer2').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer2.clientY * (state.ux.dimensions.height8) * ( (1/8) * 2) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer2.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer3').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer3.clientY * (state.ux.dimensions.height8) * ( (1/8) * 3) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer3.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer4').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer4.clientY * (state.ux.dimensions.height8) * ( (1/8) * 4) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer4.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer5').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer5.clientY * (state.ux.dimensions.height8) * ( (1/8) * 5) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer5.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer6').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer6.clientY * (state.ux.dimensions.height8) * ( (1/8) * 6) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer6.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer7').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer7.clientY * (state.ux.dimensions.height8) * ( (1/8) * 7) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer5.clientX * (state.ux.dimensions.width8)) + 'px';
    document.getElementById('parallax_Y_Layer8').style = 'bottom: '+ (state.ui.interaction.parallax_y.layer8.clientY * (state.ux.dimensions.height8) * ( (1/8) * 8) ) + 'px; left: ' + (state.ui.interaction.parallax_y.layer6.clientX * (state.ux.dimensions.width8)) + 'px';

    // empty bullets container
    document.getElementById('bullets_container').innerHTML = '';

    for (var i = 0; i < state.ui.interaction.bullets.length; i++) {
        console.log('state.ui.interaction.bullets from for loop: ' + state.ui.interaction.bullets[i]);
        document.getElementById('bullets_container').innerHTML += '<div style=" bottom: ' + (state.ui.interaction.bullets[i].clientY) + 'px; left: ' + (state.ui.interaction.bullets[i].clientX) + 'px;' + '" class="position_absolute width_1205vw height_1205vh bg_green"></div>';
        state.ui.interaction.bullets[i].clientX += 1;
        state.ui.interaction.bullets[i].clientY += 1;
    };

    // empty pen container
    document.getElementById('pen_container').innerHTML = '';

    for (var i = 0; i < state.ui.interaction.pen.length; i++) {
        console.log('state.ui.interaction.pen from for loop: ' + state.ui.interaction.pen[i]);
        document.getElementById('pen_container').innerHTML += '<div style=" top: ' + (state.ui.interaction.pen[i].clientY) + 'px; left: ' + (state.ui.interaction.pen[i].clientX) + 'px;' + '" class="position_absolute width_1vw height_1vh bg_green"></div>';
    };

    // empty pencil container
    document.getElementById('pencil_container').innerHTML = '';

    for (var i = 0; i < state.ui.interaction.pencil.length; i++) {
        console.log('state.ui.interaction.pencil from for loop: ' + state.ui.interaction.pencil[i]);
        document.getElementById('pen_container').innerHTML += '<div style=" top: ' + (state.ui.interaction.pencil[i].clientY) + 'px; left: ' + (state.ui.interaction.pencil[i].clientX) + 'px;' + '" class="position_absolute width_1vw height_1vh bg_pink"></div>';
    };

    // snake
    document.getElementById('snakes_container').innerHTML = '';
    let snakes_amount = state.ui.interaction.snake.snakes.length;

        if (state.ui.interaction.snake.direction == 'right') {

            let new_snake = {
                clientX: (state.ui.interaction.snake.snakes[0].clientX) + 1,
                clientY: (state.ui.interaction.snake.snakes[0].clientY)
            };

            state.ui.interaction.snake.snakes.unshift(new_snake);

        }

        if (state.ui.interaction.snake.direction == 'left') {
            let new_snake = {
                clientX: (state.ui.interaction.snake.snakes[0].clientX) - 1,
                clientY: (state.ui.interaction.snake.snakes[0].clientY)
            };

            state.ui.interaction.snake.snakes.unshift(new_snake);

        }

        if (state.ui.interaction.snake.direction == 'up') {

            let new_snake = {
                clientX: (state.ui.interaction.snake.snakes[0].clientX),
                clientY: (state.ui.interaction.snake.snakes[0].clientY) + 1
            };

            state.ui.interaction.snake.snakes.unshift(new_snake);

        }

        if (state.ui.interaction.snake.direction == 'down') {
            let new_snake = {
                clientX: (state.ui.interaction.snake.snakes[0].clientX),
                clientY: (state.ui.interaction.snake.snakes[0].clientY) - 1
            };

            state.ui.interaction.snake.snakes.unshift(new_snake);

        }

    if (state.ui.interaction.snake.create == false) {
        state.ui.interaction.snake.snakes.pop();
    };

    for (var i = 0; i < state.ui.interaction.snake.snakes.length; i++) {
        
        document.getElementById('snakes_container').innerHTML += '<div style=" bottom: ' + (state.ui.interaction.snake.snakes[i].clientY * (state.ux.dimensions.height8)) + 'px; left: ' + (state.ui.interaction.snake.snakes[i].clientX * (state.ux.dimensions.width8)) + 'px;' + '" class="position_absolute width_1205vw height_1205vh bg_pink"></div>';

    };


    state.ui.interaction.snake.create = false;

    //64
    if ((document.getElementById('componentCube')) != null ) {
        document.getElementById('componentCube')
        componentCube.style = 'transform: translateZ( -12.5vh ); transform: rotateY(' + (state.events.mouse.game_bit.clientX * 45) + 'deg ) rotateX( ' + (-state.events.mouse.game_bit.clientY *45) + 'deg )';
    };


    if (state.animation.instances.sixty_four == 5) {

        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.remove('pieces_office_shoplight_off_bg');
        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.add('pieces_office_shoplight_on_bg');
    };


    if (state.animation.instances.sixty_four != 5) {

        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.add('pieces_office_shoplight_off_bg');
        document.getElementById('animation_fourground_furniture_layer_8_svg').classList.remove('pieces_office_shoplight_on_bg');
    };

            
    // key hole
    if ( (state.ui.interaction.keyhole.xaxis == state.ui.interaction.key.xaxis) && (state.ui.interaction.keyhole.yaxis == state.ui.interaction.key.yaxis) ) {
        //alert('unlocked');

        state.ui.pause.display = false;

        state.ui.interaction.key.xaxis = 0;
        state.ui.interaction.key.yaxis = 0;

    };

    // set positions
    if (document.getElementById('enemy') != null) {
    document.getElementById('enemy').style =
        'height: ' + (state.ui.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
        'width: ' + (state.ui.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
        'bottom: ' + (state.ui.interaction.enemy.yaxis * (state.ux.dimensions.height8)) + 'px;' +
        'right: ' + (state.ui.interaction.enemy.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    // game events
    if (document.getElementById('layer_fg_1_man_motion') != null) {

        if (state.animation.instances.loading == true ) {
            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 16) {
                if(state.ui.interaction.player_1.action.left == true && state.ui.interaction.player_1.motion.walking == true) {
                    //state.ui.interaction.player_1.xaxis += (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis > -8) {
                if(state.ui.interaction.player_1.action.right == true && state.ui.interaction.player_1.motion.walking == true) {
                    //state.ui.interaction.player_1.xaxis -= (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis >= 16) {
                //state.ui.interaction.player_1.xaxis = 16;
                //alert('walked out left');
            };

            if (state.ui.interaction.player_1.xaxis <= -8) {
                //state.ui.interaction.player_1.xaxis = -8;
                //alert('walked out right');
            };
        };

        // reset player & control enneagon
        if (state.animation.instances.start == true) {
            
            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 16) {
                if(state.ui.interaction.player_1.action.left == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis += (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis > -8) {
                if(state.ui.interaction.player_1.action.right == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis -= (1/8);
                };
            };

            // left to center
            if (state.ui.stage.enneagon.roomed == true && state.ui.stage.enneagon.which_roomed == 'left' && state.ui.interaction.player_1.action.right == true) {
                if (state.ui.interaction.player_1.xaxis == -1) {
                    state.ui.stage.enneagon.roomed = false;
                    state.ui.stage.enneagon.which_roomed = 'center'
                    state.ui.stage.enneagon.xaxis = 0;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = 7;
                };
            }


            // right to center
            if (state.ui.stage.enneagon.roomed == true && state.ui.stage.enneagon.which_roomed == 'right' && state.ui.interaction.player_1.action.left == true) {
                if (state.ui.interaction.player_1.xaxis == 7) {
                    state.ui.stage.enneagon.roomed = false;
                    state.ui.stage.enneagon.which_roomed = 'center'
                    state.ui.stage.enneagon.xaxis = 0;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = -1;
                };
            }


            // center to left
            if (state.ui.stage.enneagon.roomed == false && state.ui.stage.enneagon.which_roomed == 'center' && state.ui.interaction.player_1.action.left == true) {
                if (state.ui.interaction.player_1.xaxis == 7) {
                    state.ui.stage.enneagon.roomed = true;
                    state.ui.stage.enneagon.which_roomed = 'left'
                    state.ui.stage.enneagon.xaxis = 1;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = -1;
                };
            }


            // center to right
            if (state.ui.stage.enneagon.roomed == false && state.ui.stage.enneagon.which_roomed == 'center' && state.ui.interaction.player_1.action.right == true) {
                if (state.ui.interaction.player_1.xaxis == -1) {
                    state.ui.stage.enneagon.roomed = true;
                    state.ui.stage.enneagon.which_roomed = 'right'
                    state.ui.stage.enneagon.xaxis = -1;
                    state.ui.stage.enneagon.yaxis = 0;
                    state.ui.interaction.player_1.xaxis = 7;
                };
            }

            // center room
            if (state.ui.stage.enneagon.roomed == false && state.ui.stage.enneagon.which_roomed == 'center') {
                if (state.ui.interaction.player_1.xaxis < 6 && state.ui.interaction.player_1.xaxis > 0) {
                    state.ui.stage.enneagon.xaxis = 0;
                    state.ui.stage.enneagon.yaxis = 0;
                };
            }
        };

        if (state.animation.instances.learn == true) {
            // player walking and pause
            if (state.ui.interaction.player_1.xaxis < 7.25) {
                if(state.ui.interaction.player_1.action.left == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis += (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis > -.25) {
                if(state.ui.interaction.player_1.action.right == true && state.ui.interaction.player_1.motion.walking == true) {
                    state.ui.interaction.player_1.xaxis -= (1/8);
                };
            };

            if (state.ui.interaction.player_1.xaxis >= 7.25) {
                state.ui.interaction.player_1.xaxis = 7.25;
                //alert('walked out left');
            };

            if (state.ui.interaction.player_1.xaxis <= -.25) {
                state.ui.interaction.player_1.xaxis = -.25;
                //alert('walked out right');
            };
        };
    
        if ( (state.animation.instances.start == true || state.animation.instances.learn == true) && (state.ui.interaction.player_1.xaxis == state.ui.interaction.enemy.xaxis)) {
            //alert('game event');
            document.getElementById('particles_health').classList = ('particles_health float_left position_absolute bottom_100 left_0 right_0 width_100 height_25 margin_auto');
            state.ui.modal.menu.bottom.display = true;
            state.ui.modal.menu.bottom.transform = false;
        };

        if ( (state.animation.instances.start == true || state.animation.instances.learn == true) && (state.ui.interaction.player_1.xaxis != state.ui.interaction.enemy.xaxis)) {
            //alert('game event');
            document.getElementById('particles_health').classList = ('float_left position_absolute bottom_100 left_0 right_0 width_100 height_25 margin_auto');
            state.ui.modal.menu.bottom.display = true;
            state.ui.modal.menu.bottom.transform = true;
        }; 

        // set style
        document.getElementById('layer_fg_1_man_motion').classList = ('position_absolute margin_auto');
        document.getElementById('layer_fg_1_man_motion').style =
            'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.player_1.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'right: ' + (state.ui.interaction.player_1.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    // floating right
    if (state.ui.interaction.player_1.idle.floating == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_'+floating_right_frame+ ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (floating_right_frame == 4) {
                    floating_right_frame = 0;
                };
                floating_right_frame += 1;
            };
    };

    // floating left
    if (state.ui.interaction.player_1.idle.floating == true && state.ui.interaction.player_1.action.left == true) {
            
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_'+floating_left_frame+ ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (floating_left_frame == 4) {
                    floating_left_frame = 0;
                };
                floating_left_frame += 1;
            };
    };

    // blinking
    // mouse around
    if (state.ui.interaction.player_1.idle.blinking == true) {

        if (document.getElementById('layer_fg_2_player_svg') != null) {
            document.getElementById('layer_fg_2_player_svg').classList = ('float_left easing_01 position_absolute bottom_0 right_0 width_100 height_100 margin_auto ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_'+state.animation.instances.sixty_four);
        };
    };

    // standing right NOT jumping (breathing loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.idle.bend == false && (state.ui.interaction.player_1.motion.walking == false) && (state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false) && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_'+standing_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (standing_right_frame == 4) {
                    standing_right_frame = 0;
                };
                standing_right_frame += 1;
            };


    };

    // standing left NOT jumping (breathing loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.idle.bend == false && (state.ui.interaction.player_1.motion.walking == false) && (state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false) && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_'+standing_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (standing_left_frame == 4) {
                    standing_left_frame = 0;
                };
                standing_left_frame += 1;
            };

    };

    // attacked right
    if (state.ui.interaction.player_1.idle.attacked == true && state.ui.interaction.player_1.idle.bend == false && (state.ui.interaction.player_1.motion.walking == false) && (state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false) && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_'+attacked_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (attacked_right_frame == 4) {
                    attacked_right_frame = 0;
                };
                attacked_right_frame += 1;
            };


    };

    // attacked left
    if (state.ui.interaction.player_1.idle.attacked == true && state.ui.interaction.player_1.idle.bend == false && (state.ui.interaction.player_1.motion.walking == false) && (state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false) && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_'+attacked_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (attacked_left_frame == 4) {
                    attacked_left_frame = 0;
                };
                attacked_left_frame += 1;
            };

    };

    // sitting right
    if (state.ui.interaction.player_1.idle.sitting == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_'+sitting_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (sitting_right_frame == 4) {
                    sitting_right_frame = 0;
                };
                sitting_right_frame += 1;
            };
    };

    // sitting left
    if (state.ui.interaction.player_1.idle.sitting == true && state.ui.interaction.player_1.action.left == true) {
            
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_'+sitting_left_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (sitting_left_frame == 4) {
                    sitting_left_frame = 0;
                };
                
                sitting_left_frame += 1;
            };
    };

    // 1
    // bend right NOT jumping (bend loop)
    if (state.ui.interaction.player_1.idle.bend == true && state.ui.interaction.player_1.idle.standing == false && (state.ui.interaction.player_1.motion.walking == false) && (state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false) && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_'+bend_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');
                
                if (bend_right_frame == 4) {
                    bend_right_frame = 0;
                };

                bend_right_frame += 1;
            };


    };

    // 1
    // bend left NOT jumping (bend loop)
    if (state.ui.interaction.player_1.idle.bend == true && state.ui.interaction.player_1.idle.standing == false && (state.ui.interaction.player_1.motion.walking == false) && (state.ui.interaction.player_1.action.jumping == false && state.ui.interaction.player_1.action.punching == false && state.ui.interaction.player_1.action.kicking == false && state.ui.interaction.player_1.action.shooting == false && state.ui.interaction.player_1.action.grabing == false && state.ui.interaction.player_1.action.blocking == false) && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_'+bend_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');
                
                if (bend_left_frame == 4) {
                    bend_left_frame = 0;
                };

                bend_left_frame += 1;
            };

    };



    // prone right
    if (state.ui.interaction.player_1.idle.prone == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_'+prone_right_frame+ ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (prone_right_frame == 4) {
                    prone_right_frame = 0;
                };
                prone_right_frame += 1;
            };
    };

    // prone left
    if (state.ui.interaction.player_1.idle.prone == true && state.ui.interaction.player_1.action.left == true) {
            
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_'+prone_left_frame+ ' pulse infinite animated1 float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (prone_left_frame == 4) {
                    prone_left_frame = 0;
                };
                prone_left_frame += 1;
            };
    };

    // actions
    
    // 1
    // jumpming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.jumping == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('animated025 infinite pulse nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_'+jumping_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (jumping_right_frame < 4) {
                    jumping_right_frame += 1;
                };
            };


    };

    // 1
    // jumpming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.jumping == true && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('animated025 infinite pulse nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_'+jumping_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (jumping_left_frame < 4) {
                jumping_left_frame += 1;
                };
            };

    };

    // 1
    // punchming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.punching == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_'+punching_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (punching_right_frame == 4) {
                    punching_right_frame = 0;
                };
                punching_right_frame += 1;
            };


    };

    // 1
    // punchming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.punching == true && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_'+punching_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (punching_left_frame == 4) {
                    punching_left_frame = 0;
                };
                punching_left_frame += 1;
            };

    };

    // 1
    // kickming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.kicking == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_'+kicking_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (kicking_right_frame == 4) {
                    kicking_right_frame = 0;
                };
                kicking_right_frame += 1;
            };


    };

    // 1
    // kickming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.kicking == true && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_'+kicking_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (kicking_left_frame == 4) {
                    kicking_left_frame = 0;
                };
                kicking_left_frame += 1;
            };

    };

    // 1
    // shootming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.shooting == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_'+shooting_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (shooting_right_frame == 4) {
                    shooting_right_frame = 0;
                };
                shooting_right_frame += 1;
            };


    };

    // 1
    // shootming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.shooting == true && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_'+shooting_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (shooting_left_frame == 4) {
                    shooting_left_frame = 0;
                };
                shooting_left_frame += 1;
            };

    };


    // 1
    // grabming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.grabing == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_'+grabing_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (grabing_right_frame == 4) {
                    grabing_right_frame = 0;
                };
                grabing_right_frame += 1;
            };


    };

    // 1
    // grabming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.grabing == true && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_'+grabing_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (grabing_left_frame == 4) {
                    grabing_left_frame = 0;
                };
                grabing_left_frame += 1;
            };

    };

    // 1
    // blockming from standing right (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.blocking == true && state.ui.interaction.player_1.action.right == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_'+blocking_right_frame+ ' float_right position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (blocking_right_frame == 4) {
                    blocking_right_frame = 0;
                };
                blocking_right_frame += 1;
            };


    };

    // 1
    // blockming from standing left (non loop)
    if (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.action.blocking == true && state.ui.interaction.player_1.action.left == true) {
        
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_'+blocking_left_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (blocking_left_frame == 4) {
                    blocking_left_frame = 0;
                };
                blocking_left_frame += 1;
            };

    };

    // 2
    // walking left (loop)
    if ( (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.motion.walking == true) && state.ui.interaction.player_1.action.left == true) {
    
            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_'+layer_fg_2_player_svg_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (layer_fg_2_player_svg_frame == 9) {
                    layer_fg_2_player_svg_frame = 0;
                };
                layer_fg_2_player_svg_frame += 1;
            };

    };

    // 3
    // walking right (loop)
    if ( (state.ui.interaction.player_1.idle.standing == true && state.ui.interaction.player_1.motion.walking == true) && state.ui.interaction.player_1.action.right == true) {

            if (document.getElementById('layer_fg_2_player_svg') != null) {
                document.getElementById('layer_fg_2_player_svg').innerHTML = '';

                    document.getElementById('layer_fg_2_player_svg').classList = ('nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_'+layer_fg_3_player_svg_frame+ ' float_left position_absolute bottom_0 right_0 width_100 height_100 margin_auto ');

                if (layer_fg_3_player_svg_frame == 9) {
                    layer_fg_3_player_svg_frame = 0;
                };
                layer_fg_3_player_svg_frame += 1;
            };

    };

    if 
        ((state.ui.interaction.player_1.xaxis > (0)) &&
        (state.ui.interaction.player_1.xaxis < (1))
        )
        {
            

            from_index.check_door();

        };

    // wheel
    if (state.animation.instances.scrolling == false && state.animation.instances.start == false && state.animation.instances.learn == false) {

        setTimeout(
        function() {

            document.getElementById('component_app_scrolling').classList.remove('overflow_y');
            document.getElementById('component_app_scrolling').classList.add('overflow_hidden');

        }, (101));
    };

    if (state.animation.instances.scrolling == true && state.animation.instances.start == false && state.animation.instances.learn == false) {

        setTimeout(
        function() {

            document.getElementById('component_app_scrolling').classList.remove('overflow_hidden');
            document.getElementById('component_app_scrolling').classList.add('overflow_y');

        }, (101));
    };

    // mouse
    if (state.events.mouse.up == true) {

        if (document.getElementById('component_app_interaction_hands') != null) {
            document.getElementById('component_app_interaction_hand').classList.add('hands');
        };
    };

    if (state.events.mouse.up == false) {

        if (document.getElementById('component_app_interaction_hands') != null) {
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

    if (document.getElementById('component_app_gui_keyhole') != null) {
        let component_app_gui_keyhole = document.getElementById('component_app_gui_keyhole');
        component_app_gui_keyhole.style =
            'height: ' + ( ((state.ui.interaction.keyhole.height) ) * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + ( ((state.ui.interaction.keyhole.width) ) * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + ( ((state.ui.interaction.keyhole.yaxis) - 1) * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + ( ((state.ui.interaction.keyhole.xaxis) - 1) * (state.ux.dimensions.width8)) + 'px;';
    };
    
    // 10 is half the size of the element_ball
    // It center the positioning point to the center of the element_ball
    if (document.getElementById('element_ball') != null) {
        document.getElementById('element_ball').style.bottom = (((state.events.mouse.gamma / 360) * 100) * 4) + "%";
        document.getElementById('element_ball').style.left = (((state.events.mouse.beta / 360) * 100) * 4) + "%";
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
            'right: ' + (state.ui.interaction.enemy.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    if (document.getElementById('bounce') != null) {
        document.getElementById('bounce').style =
            'top: ' + (state.ui.interaction.bounce.yaxis * (state.ux.dimensions.height8)) + 'px; \
            right: ' + (state.ui.interaction.bounce.xaxis * (state.ux.dimensions.width8)) + 'px ;';
    };

    //stage
    // Enneagon
    if (document.getElementById('enneagon') != null) {
        document.getElementById('enneagon').style = "transform: translate3d(" +
            (state.ui.stage.enneagon.xaxis * 100) + "%, " +
            (state.ui.stage.enneagon.yaxis * 100) + "%, 0);"
    };

    
    if (state.events.mouse != null) {

    };
    
};

export default {
    Handle_ui
}