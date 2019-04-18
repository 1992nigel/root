// Imports
import from_index from '../index.js';

let state = '';
let dragging = false;
let root = document.getElementById('root');
let is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
let is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
setTimeout(
    (() => {

        // Desktop
        if (is_Desktop) {


            root.addEventListener('wheel', (event) => {
                state = from_index.Handle_return_state();

                // console.log('state in events');
                console.log('wheel');

                if (event.deltaY < 0) {
                    console.log('wheel up');

                    if ((document.getElementById('wheel_direction')) != null ) {
                        document.getElementById('wheel_direction').innerHTML = 'up';
                        console.log("instance: wheel up");
                        from_index.event_wheel_up();
                    };

                };

                if (event.deltaY > 0) {
                    console.log('wheel down');
                     state.ui.root.wheels += 1;
                     console.log('wheels: ' + state.ui.root.wheels);

                    from_index.Handle_get_state_from_events();
                };

            });


            root.addEventListener('mousemove', (event) => {
                state = from_index.Handle_return_state();

                console.log('mousemove only');
                console.log(event);

                console.log('mousemove: event.clientX: ' + event.clientX);
                console.log('mousemove: event.clientY: ' + event.clientY);

                state.events.mouse.clientX = event.clientX;
                state.events.mouse.clientY = event.clientY;

                if (state.animation.instances.loaded_12 == true) {

                    state.ui.stage.cardboard_fold.fold = 2;
                    state.ui.stage.cardboard_fold.set = 2;
                    state.animation.instances.loaded_1 = true;
                    state.animation.instances.loaded_12 = false;

                }

                // x axis: 1
                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:1 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 1;
                    

                    state.animation.instances.grid_64 = 1;

                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:2 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 9;
                    
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:3 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 17;
                    
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:4 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 25;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:5 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 5;
                    
                    state.animation.instances.grid_64 = 33;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:6 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 6;
                    
                    state.animation.instances.grid_64 = 41;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:7 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 7;
                    
                    state.animation.instances.grid_64 = 49;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:1 x clientY:8 grid');
                    state.events.touch_8.clientX = 1;
                    state.events.touch_8.clientY = 8;
                    
                    state.animation.instances.grid_64 = 57;
                };

                // x axis: 2

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 1)))) {
                    console.log('mouse is in clientX:2 x clientY:1 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 2;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:2 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 10;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:3 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 18;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:4 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 26;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:5 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 34;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:6 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 42;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:7 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 50;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:2 x clientY:8 grid');
                    state.events.touch_8.clientX = 2;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 58;
                };

                // x axis: 3
                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:1 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 3;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:2 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 11;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:3 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 19;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:4 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 27;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:5 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 35;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:6 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 43;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:7 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 51;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:3 x clientY:8 grid');
                    state.events.touch_8.clientX = 3;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 59;
                };

                // x axis: 4
                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:1 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 4;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:2 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 12;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:3 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 20;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:4 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 28;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:5 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 36;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:6 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 44;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:7 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 52;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:4 x clientY:8 grid');
                    state.events.touch_8.clientX = 4;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 60;
                };

                // x axis: 5
                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:1 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 5;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:2 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 13;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:3 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 21;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:4 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 29;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:5 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 37;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:6 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 45;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:7 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 53;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:5 x clientY:8 grid');
                    state.events.touch_8.clientX = 5;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 61;
                };

                // x axis: 6

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:1 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 6;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:2 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 14;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:3 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 22;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:4 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 30;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:5 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 38;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:6 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 46;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:7 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 54;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:6 x clientY:8 grid');
                    state.events.touch_8.clientX = 6;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 62;
                };

                // x axis: 7
                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:1 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 7;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:2 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 15;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:3 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 23;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:4 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 31;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:5 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 39;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:6 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 47;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:7 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 55;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:7 x clientY:8 grid');
                    state.events.touch_8.clientX = 7;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 63;
                };

                // x axis: 8
                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:1 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 1;

                    state.animation.instances.grid_64 = 8;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:2 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 2;

                    state.animation.instances.grid_64 = 16;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:3 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 3;

                    state.animation.instances.grid_64 = 24;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:4 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 4;

                    state.animation.instances.grid_64 = 32;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:5 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 5;

                    state.animation.instances.grid_64 = 40;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:6 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 6;

                    state.animation.instances.grid_64 = 48;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:7 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 7;

                    state.animation.instances.grid_64 = 56;
                };

                if (
                    ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
                    ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
                ) {
                    console.log('mouse is in clientX:8 x clientY:8 grid');
                    state.events.touch_8.clientX = 8;
                    state.events.touch_8.clientY = 8;

                    state.animation.instances.grid_64 = 64;
                };

                if ((document.getElementById('click_position')) != null ) {
                    document.getElementById('click_position').innerHTML = `mouse is in clientX: ${state.events.touch_8.clientX} & clientY:${state.events.touch_8.clientY}`;
                };

                from_index.Handle_get_state_from_events();
            });

            root.addEventListener('mousedown', (event) => {
                state = from_index.Handle_return_state();


                from_index.Handle_get_state_from_events();
            });

            root.addEventListener('mouseup', (event) => {
                state = from_index.Handle_return_state();


                from_index.Handle_get_state_from_events();
            });

            root.addEventListener('mouseenter', (event) => {
                state = from_index.Handle_return_state();


                from_index.Handle_get_state_from_events();
            });

            root.addEventListener('mouseleave', (event) => {
                state = from_index.Handle_return_state();


                from_index.Handle_get_state_from_events();
            });

            root.addEventListener('keydown', (event) => {
                state = from_index.Handle_return_state();
                // console.log('state in events');
                console.log('keydown');

                let keyCode = event.keyCode;
                console.log('keyCode: ' + keyCode);
                console.log('keys held: ');
                console.log(state.events.key.keys);

                let matched = false;

                for (var i = 0; i < state.events.key.keys.length; i++) {
                    if (state.events.key.keys[i] == event.keyCode) {
                        matched = true;
                    };
                };

                if (matched == false) {
                    state.events.key.keys.push(event.keyCode);
                };

                // esc
                if (keyCode == 27) {
                    from_index.Handle_load_animation();
                };

                // NEXT LINE
                // `
                if (keyCode == 192) {
                    console.log('tildy');
                    state.animation.instances.loaded_0 = !state.animation.instances.loaded_0;
                };

                // one
                if (keyCode == 49) {
                    console.log('1');

                        state.animation.instances.loaded_1 = true;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // two
                if (keyCode == 50) {
                    console.log('2');

                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = true;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // three
                if (keyCode == 51) {
                    console.log('3');

                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = true;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // four
                if (keyCode == 52) {
                    console.log('4');

                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = true;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // five
                if (keyCode == 53) {
                    console.log('5');
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = true;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // six
                if (keyCode == 54) {
                    console.log('6');
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = true;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // seven
                if (keyCode == 55) {
                    console.log('7');
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = true;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };
                // eight
                if (keyCode == 56) {
                    console.log('8');
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = true;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };

                // nine
                if (keyCode == 57) {
                    console.log('9');
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = true;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };


                // zero
                if (keyCode == 48) {
                    console.log('0');
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = true;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = false;
                };

                // -
                if (keyCode == 189) {
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = true;
                        state.animation.instances.loaded_12 = false;


                };

                // =
                if (keyCode == 187) {
                        state.animation.instances.loaded_1 = false;
                        state.animation.instances.loaded_2 = false;
                        state.animation.instances.loaded_3 = false;
                        state.animation.instances.loaded_4 = false;
                        state.animation.instances.loaded_5 = false;
                        state.animation.instances.loaded_6 = false;
                        state.animation.instances.loaded_7 = false;
                        state.animation.instances.loaded_8 = false;
                        state.animation.instances.loaded_9 = false;
                        state.animation.instances.loaded_10 = false;
                        state.animation.instances.loaded_11 = false;
                        state.animation.instances.loaded_12 = true;

                };

                // delete
                if (keyCode == 8) {
                        state.ui.stage.cardboard_fold.fold -= 1;
                        state.ui.stage.cardboard_fold.set -= 1;
                };

                // NEXT LINE
                // tab
                if (keyCode == 9) {
                    state.animation.instances.loaded_0 = false;
                };

                // q
                if (keyCode == 81) {
                    from_index.HANDLE_animation_gui_hide();
                };
                
                // w
                if (keyCode == 87) {
                    state.ui.interaction.player_1.yaxis += (1/8);
                };

                //e
                if (keyCode == 69) {
                };
                
                //r
                if (keyCode == 82) {
                };

                //t
                if (keyCode == 84) {
                };
                
                //y
                if (keyCode == 89) {
                };
                        
                // u
                if (keyCode == 85) {
                };

                //i
                if (keyCode == 73) {
                };
                
                //o
                if (keyCode == 79) {
                };

                //p
                if (keyCode == 80) {
                };
                
                //[
                if (keyCode == 219) {
                    from_index.player_1_shrink();
                };

                //]
                if (keyCode == 221) {
                    from_index.player_1_grow();
                };

                //\
                if (keyCode == 220) {
                };

                // NEXT LINE

                // caps lock
                if (keyCode == 220) {
                };

                // a
                if (keyCode == 65) {
                    state.ui.interaction.player_1.stance = 5;
                    state.ui.interaction.player_1.cycles.walking = true;
                };

                // s
                if (keyCode == 83) {
                    state.ui.interaction.player_1.yaxis -= (1/8);
                };

                // d
                if (keyCode == 68) {
                    state.ui.interaction.player_1.stance = 13;
                    state.ui.interaction.player_1.cycles.walking = true;
                };

                // f
                if (keyCode == 70) {
                };

                // g
                if (keyCode == 71) {
                };

                // h
                if (keyCode == 72) {
                };

                // j
                if (keyCode == 74) {
                };

                // k
                if (keyCode == 75) {
                };

                // l
                if (keyCode == 76) {
                };

                // ;
                if (keyCode == 186) {
                };

                // '
                if (keyCode == 222) {
                };

                // enter
                if (keyCode == 13) {

                    from_index.check_local_user();

                    state.ui.stage.cardboard_fold.fold += 1;
                    state.ui.stage.cardboard_fold.set += 1;

                    if (state.ui.stage.cardboard_fold.fold == 7) {
                        state.ui.stage.cardboard_fold.fold = 1;
                    };

                    if (state.ui.stage.cardboard_fold.set == 13) {
                        state.ui.stage.cardboard_fold.set = 1;
                    };
                };

                // NEXTLINE

                // shift left
                if (event.code == 'ShiftLeft') {
                };

                // shift right
                if (event.code == 'ShiftRight') {
                };

                // shift
                if (keyCode == 16) {
                    from_index.HANDLE_animation_gui_show();

                };

                // z
                if (keyCode == 90) {
                };

                // x
                if (keyCode == 88) {
                };

                // c
                if (keyCode == 67) {
                };

                // v
                if (keyCode == 86) {
                };

                // b
                if (keyCode == 66) {
                };

                // n
                if (keyCode == 78) {
                };

                // m
                if (keyCode == 77) {
                };

                // ,
                if (keyCode == 188) {
                };

                // .
                if (keyCode == 190) {
                };

                // /
                if (keyCode == 191) {
                };
                
                // NEXT LINE

                // control
                if (keyCode == 17) {
                };

                // alt
                if (keyCode == 18) {
                };

                // command
                if (keyCode == 91) {
                };

                // command right
                if (keyCode == 93) {
                };

                // space
                if (keyCode == 32) {
                    event.preventDefault();
                };

                if (keyCode == 40) {
                    console.log('down');
                    state.ui.stage.cardboard_color.yaxis -= 1;
                    state.ui.stage.cardboard_bg.yaxis -= 1;
                    state.ui.stage.cardboard_mg.yaxis -= 1;
                    state.ui.stage.cardboard_fg.yaxis -= 1;
                    state.ui.stage.cardboard_fold.yaxis -= 1;
                };

                if (keyCode == 39) {
                    console.log('right');
                    state.ui.stage.cardboard_color.xaxis += 1;
                    state.ui.stage.cardboard_bg.xaxis += 1;
                    state.ui.stage.cardboard_mg.xaxis += 1;
                    state.ui.stage.cardboard_fg.xaxis += 1;
                    state.ui.stage.cardboard_fold.xaxis += 1;
                };

                if (keyCode == 38) {
                    console.log('up');
                    state.ui.stage.cardboard_color.yaxis += 1;
                    state.ui.stage.cardboard_bg.yaxis += 1;
                    state.ui.stage.cardboard_mg.yaxis += 1;
                    state.ui.stage.cardboard_fg.yaxis += 1;
                    state.ui.stage.cardboard_fold.yaxis += 1;
                };

                if (keyCode == 37) {
                    console.log('left');
                    state.ui.stage.cardboard_color.xaxis -= 1;
                    state.ui.stage.cardboard_bg.xaxis -= 1;
                    state.ui.stage.cardboard_mg.xaxis -= 1;
                    state.ui.stage.cardboard_fg.xaxis -= 1;
                    state.ui.stage.cardboard_fold.xaxis -= 1;
                };      
                
                if ((document.getElementById('key_keys')) != null ) {
                    document.getElementById('key_keys').innerHTML = (state.events.key.keys)
                }

                if ((document.getElementById('key_key_down')) != null ) {
                    document.getElementById('key_key_down').innerHTML = (event.keyCode)
                }

                from_index.Handle_get_state_from_events();

            });

            root.addEventListener('keyup', (event) => {
                        
                state = from_index.Handle_return_state();
                
                // console.log('state in events');
                console.log('keyup');

                state = from_index.Handle_return_state();
                let keyCode = event.keyCode;
                console.log('event: keyup');
                console.log(event);
                var index = state.events.key.keys.indexOf(event.keyCode);

                //state.animation.scene = (state.animation.scene + 1);
                //alert(state.animation.scene);

                if (index > -1) {
                    state.events.key.keys.splice(index, 1);
                };
                
                if ((document.getElementById('key_keys')) != null ) {
                    document.getElementById('key_keys').innerHTML = (state.events.key.keys)
                }

                if ((document.getElementById('key_key_up')) != null ) {
                    document.getElementById('key_key_up').innerHTML = (event.keyCode)
                }

                // a
                if (keyCode == 65) {
                    state.ui.interaction.player_1.cycles.walking = false;
                };

                // s
                if (keyCode == 83) {
                };

                // d
                if (keyCode == 68) {
                    state.ui.interaction.player_1.cycles.walking = false;
                };
                
                from_index.Handle_get_state_from_events();
                
            });

        };

        // Mobile
        if (is_Mobile) {

            root.addEventListener('touchmove', (event) => {
                state = from_index.Handle_return_state();
                
                    console.log('event.changedTouches[0].page');
                    console.log(event.changedTouches[0].pageX);
                    console.log(event.changedTouches[0].pageY);

                    state.events.touch.enter = true;
                    state.events.touch.leave = false;

                    state.events.touch.clientX = event.changedTouches[0].clientX;
                    state.events.touch.clientY = event.changedTouches[0].clientY;

                    //alert('touchmove');

                    console.log('event.changedTouches[0].page');
                    console.log(event.changedTouches[0].pageX);
                    console.log(event.changedTouches[0].pageY);

                    if ((document.getElementById('touch_page_X')) != null ) {
                        document.getElementById('touch_page_Y').innerHTML = (event.changedTouches[0].pageY)
                        document.getElementById('touch_page_X').innerHTML = (event.changedTouches[0].pageX)
                    };

                    console.log('event.changedTouches[0].client');
                    console.log(event.changedTouches[0].clientX);
                    console.log(event.changedTouches[0].clientY);

                    if ((document.getElementById('touch_client_Y')) != null ) {
                        document.getElementById('touch_client_Y').innerHTML = (event.changedTouches[0].clientY)
                        document.getElementById('touch_client_X').innerHTML = (event.changedTouches[0].clientX)
                    };

                    //64

                    // x axis: 1
                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:1 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 1;

                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:2 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 9;
                        
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:3 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 17;
                        
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:4 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 4;
                        
                        state.animation.instances.grid_64 = 25;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:5 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 5;
                        
                        state.animation.instances.grid_64 = 33;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:6 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 6;
                        
                        state.animation.instances.grid_64 = 41;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:7 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 7;
                        
                        state.animation.instances.grid_64 = 49;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:1 x clientY:8 grid');
                        state.events.touch_8.clientX = 1;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 57;
                    };

                    // x axis: 2

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))) {
                        console.log('mouse is in clientX:2 x clientY:1 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 2;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:2 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 10;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:3 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 18;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:4 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 26;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:5 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 34;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:6 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 42;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:7 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 50;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:2 x clientY:8 grid');
                        state.events.touch_8.clientX = 2;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 58;
                    };

                    // x axis: 3
                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:1 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 3;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:2 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 11;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:3 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 19;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:4 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 27;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:5 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 35;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:6 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 43;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:7 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 51;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:3 x clientY:8 grid');
                        state.events.touch_8.clientX = 3;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 59;
                    };

                    // x axis: 4
                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:1 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 4;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:2 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 12;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:3 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 20;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:4 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 28;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:5 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 36;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:6 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 44;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:7 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 52;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:4 x clientY:8 grid');
                        state.events.touch_8.clientX = 4;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 60;
                    };

                    // x axis: 5
                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:1 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 1;

                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:2 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 13;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:3 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 21;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:4 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 29;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:5 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 37;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:6 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 45;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:7 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 53;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:5 x clientY:8 grid');
                        state.events.touch_8.clientX = 5;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 61;
                    };

                    // x axis: 6

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:1 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 6;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:2 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 14;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:3 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 22;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:4 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 30;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:5 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 38;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:6 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 46;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:7 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 54;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:6 x clientY:8 grid');
                        state.events.touch_8.clientX = 6;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 62;
                    };

                    // x axis: 7
                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:1 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 7;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:2 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 15;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:3 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 23;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:4 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 31;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:5 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 39;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:6 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 47;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:7 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 55;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:7 x clientY:8 grid');
                        state.events.touch_8.clientX = 7;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 63;
                    };

                    // x axis: 8
                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:1 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 1;

                        state.animation.instances.grid_64 = 8;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:2 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 2;

                        state.animation.instances.grid_64 = 16;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:3 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 3;

                        state.animation.instances.grid_64 = 24;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:4 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 4;

                        state.animation.instances.grid_64 = 32;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:5 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 5;

                        state.animation.instances.grid_64 = 40;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:6 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 6;

                        state.animation.instances.grid_64 = 48;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:7 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 7;

                        state.animation.instances.grid_64 = 56;
                    };

                    if (
                        ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
                        ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
                    ) {
                        console.log('mouse is in clientX:8 x clientY:8 grid');
                        state.events.touch_8.clientX = 8;
                        state.events.touch_8.clientY = 8;

                        state.animation.instances.grid_64 = 64;
                    };

                from_index.Handle_get_state_from_events();
            });

            root.addEventListener("touchstart", function(event) {
                state = from_index.Handle_return_state();
                            
                    state.events.touch.enter = true;
                    state.events.touch.leave = false;

                    state.events.touch.start.clientX = event.changedTouches[0].clientX;
                    state.events.touch.start.clientY = event.changedTouches[0].clientY;

                from_index.Handle_get_state_from_events();
            });

            root.addEventListener("touchend", function(event) {
                state = from_index.Handle_return_state();

                    state.events.touch.enter = false;
                    state.events.touch.leave = true;

                    state.events.touch.end.clientX = event.changedTouches[0].clientX;
                    state.events.touch.end.clientY = event.changedTouches[0].clientY;

                    state.events.touch.dragDistanceX = (event.changedTouches[0].clientX - state.events.touch.start.clientX)
                    state.events.touch.dragDistanceY = (event.changedTouches[0].clientY - state.events.touch.start.clientY)

                    state.events.touch.drag.clientX = (event.changedTouches[0].clientX - state.events.touch.start.clientX)
                    state.events.touch.drag.clientY = (event.changedTouches[0].clientY - state.events.touch.start.clientY)

                    if ((document.getElementById('rotationAngle')) != null ) {
                        console.log('event.changedTouches[0].rotationAngle');
                        console.log(event.changedTouches[0].rotationAngle);
                        document.getElementById('rotationAngle').innerHTML = (event.changedTouches[0].rotationAngle)
                    };

                    if ((document.getElementById('radiusX')) != null ) {

                        console.log('event.changedTouches[0].radius');
                        console.log(event.changedTouches[0].radiusX);
                        document.getElementById('radiusX').innerHTML = (event.changedTouches[0].radiusX);
                        state.events.touch.radiusX = (event.changedTouches[0].radiusX);
                    };

                    if ((document.getElementById('radiusY')) != null ) {
                        console.log('event.changedTouches[0].radius');
                        console.log(event.changedTouches[0].radiusY);
                        document.getElementById('radiusY').innerHTML = (event.changedTouches[0].radiusY)
                        state.events.touch.radiusY = (event.changedTouches[0].radiusX);
                    };

                    if ((document.getElementById('dragDistanceX')) != null ) {
                        console.log('state.events.touch.dragDistanceX');
                        console.log(state.events.touch.dragDistanceX);
                        document.getElementById('dragDistanceXStart').innerHTML = (state.events.touch.start.clientX)
                        document.getElementById('dragDistanceX').innerHTML = (state.events.touch.dragDistanceX)
                        document.getElementById('dragDistanceXEnd').innerHTML = (state.events.touch.end.clientX)
                    };

                    if ((document.getElementById('dragDistanceY')) != null ) {
                        console.log('state.events.touch.dragDistanceY');
                        console.log(state.events.touch.dragDistanceY);
                        document.getElementById('dragDistanceYStart').innerHTML = (state.events.touch.start.clientY)
                        document.getElementById('dragDistanceY').innerHTML = (state.events.touch.dragDistanceY)
                        document.getElementById('dragDistanceYEnd').innerHTML = (state.events.touch.end.clientY)
                    };

                    if (state.events.touch.dragDistanceX < -250) {
                        alert('dragDistanceX < -250, from right to left / gui');

                        // gui
                        // top
                        state.ui.gui.top.display = true;
                        state.ui.gui.top.transform = !state.ui.gui.top.transform;

                        // top right
                        state.ui.gui.top_right.display = true;
                        state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform;

                        // top left
                        state.ui.gui.top_left.display = true;
                        state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;
                        // bottom
                        state.ui.gui.bottom.display = true;
                        state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform;

                        // bottom right
                        state.ui.gui.bottom_right.display = true;
                        state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;

                        // bottom left
                        state.ui.gui.bottom_left.display = true;
                        state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform;

                        // right
                        state.ui.gui.right.display = true;
                        state.ui.gui.right.transform = !state.ui.gui.right.transform;

                        // left
                        state.ui.gui.left.display = true;
                        state.ui.gui.left.transform = !state.ui.gui.left.transform;

                    }

                    if (state.events.touch.dragDistanceY < -250) {
                        alert('dragDistanceY < -250 from up to down');
                    }

                    if (state.events.touch.dragDistanceX > 250) {
                        alert('dragDistanceX > 250, from left to right / pages');

                        // model
                        //pages
                        state.ui.modal.page.right.display = true;
                        state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;

                    }

                    if (state.events.touch.dragDistanceY > 250) {
                        alert('dragDistanceY > 250 from down to up');
                    };

                from_index.Handle_get_state_from_events();
            });

        };

    window.ondevicemotion = function(event) {


        state = from_index.Handle_return_state();

        // event.accelerationIncludingGravity.x
        // event.accelerationIncludingGravity.y
        // event.accelerationIncludingGravity.z
        ///alert('event.accelerationIncludingGravity.x: ' + event.accelerationIncludingGravity.x);
        ///alert('event.accelerationIncludingGravity.y: ' + event.accelerationIncludingGravity.y);
        ///alert('event.accelerationIncludingGravity.z: ' + event.accelerationIncludingGravity.z);

        let event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
        let event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
        let event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

        if ((document.getElementById('event_accelerationIncludingGravity_x')) != null ) {
            document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;
        
            if (event.accelerationIncludingGravity.x > 8) {
                document.getElementById('last_action').innerHTML = 'shook right';

                // key_pressed
                alert('shook right/ vr mode');
                    from_index.HANDLE_animation_gui_show();

            };


            if (event.accelerationIncludingGravity.x < -8) {
                document.getElementById('last_action').innerHTML = 'shook left';
                    
                // key_pressed
                alert('shook left/ vr mode');
                    from_index.HANDLE_animation_gui_hide();
            };

        };

        if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {
            document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;

            if (event.accelerationIncludingGravity.y > 8) {
                document.getElementById('last_action').innerHTML = 'upside down';
            };


            if (event.accelerationIncludingGravity.y < -8) {
                document.getElementById('last_action').innerHTML = 'rightside up';
            };

        };

        if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {
            document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;

            if (event.accelerationIncludingGravity.z > 8) {
                document.getElementById('last_action').innerHTML = 'overhead';
            };


            if (event.accelerationIncludingGravity.z < -8) {
                document.getElementById('last_action').innerHTML = 'laid flat';
            };

        };

        from_index.Handle_get_state_from_events();

    };

    window.ondeviceorientation = function(event) {

        state = from_index.Handle_return_state();

        // event.alpha
        // event.beta
        // event.gamma
        ///alert('event.alpha: ' + event.alpha);
        ///alert('event.beta: ' + event.beta);
        ///alert('event.gamma: ' + event.gamma);

        let event_alpha = event.alpha;
        let event_beta = event.beta;
        let event_gamma = event.gamma;

        if ((document.getElementById('event_alpha')) != null ) {
            document.getElementById('event_alpha').innerHTML = event_alpha;
            state.events.touch.alpha = event_alpha;
        };

        if ((document.getElementById('event_beta')) != null ) {
            document.getElementById('event_beta').innerHTML = event_beta;
            state.events.touch.beta = event_beta;
        };

        if ((document.getElementById('event_gamma')) != null ) {
            document.getElementById('event_gamma').innerHTML = event_gamma;
            state.events.touch.gamma = event_gamma;
        };
        
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        let success = (pos) => {
            let crd = pos.coords;

            if ((document.getElementById('location')) != null ) {
                document.getElementById('location').innerHTML = (`Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`);
            };

        };

        let error = (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);

        from_index.Handle_get_state_from_events();

    };

    })(), 1000);

let Handle_return_state_from_events = () => {
    return state
};

export default {
    state,
    Handle_return_state_from_events
}