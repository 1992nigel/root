// Imports
import from_index from '../index.js';

let state = '';
let dragging = false;

setTimeout(
    (() => {

// Desktop
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

    document.getElementById('component_app_body').addEventListener('click', (event) => {
    });

    document.getElementById('component_app_body').addEventListener('wheel', (event) => {
        
        state = from_index.Handle_return_state();

        // console.log('state in events');
        console.log('wheel');

        if (event.deltaY < 0) {
            console.log('wheel up');

            if ((document.getElementById('wheel_direction')) != null ) {
                document.getElementById('wheel_direction').innerHTML = 'up';
                console.log("instance: wheel up");
            };

            if (state.animation.instances.loaded_1 == false && state.animation.instances.loaded_2 == true && state.animation.instances.loaded_3 == true && state.animation.instances.loaded_4 == false && state.animation.instances.loaded_5 == false ) {
                state.animation.instances.loaded_1 = false;
                state.animation.instances.loaded_2 = false;
                state.animation.instances.loaded_3 = false;
                state.animation.instances.loaded_4 = true;
                state.animation.instances.loaded_5 = false;
            };

        };

        if (event.deltaY > 0) {
            console.log('wheel down');
             state.ui.root.wheels += 1;
             console.log('wheels: ' + state.ui.root.wheels);

            if ((document.getElementById('wheel_direction')) != null ) {
                document.getElementById('wheel_direction').innerHTML = 'down';
                console.log("instance: wheel down");
            };

            if (state.animation.instances.loaded_1 == false && state.animation.instances.loaded_2 == false && state.animation.instances.loaded_3 == true && state.animation.instances.loaded_4 == true && state.animation.instances.loaded_5 == false ) {
                state.animation.instances.loaded_1 = false;
                state.animation.instances.loaded_2 = false;
                state.animation.instances.loaded_3 = false;
                state.animation.instances.loaded_4 = false;
                state.animation.instances.loaded_5 = true;
            };

        };

        from_index.Handle_get_state_from_events();

    });
   document.getElementById('component_app_body').addEventListener('keydown', (event) => {
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

        if (keyCode == 13) {
            console.log('enter');
            state.ui.interaction.player_1.cycles.walking = !state.ui.interaction.player_1.cycles.walking;
        };

        if (keyCode == 16) {
            console.log('shift');
            state.ui.interaction.player_1.yaxis = 1;
        };

        if (keyCode == 27) {
            if (state.animation.instances.loaded_1 == false && state.animation.instances.loaded_2 == true && state.animation.instances.loaded_3 == false && state.animation.instances.loaded_4 == false && state.animation.instances.loaded_5 == false) {
                state.animation.instances.loaded_1 = false;
                state.animation.instances.loaded_2 = false;
                state.animation.instances.loaded_3 = true;
                state.animation.instances.loaded_4 = false;
                state.animation.instances.loaded_5 = false;
            };
        };

        if (keyCode == 192) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: true,
            };
        };
        
        if (keyCode == 49) {
            state.ui.interaction.player_1.idle = {
                floating: true,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 50) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: true,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 51) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 52) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: true,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 53) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: true,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 54) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: true,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 55) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: true,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 56) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: true,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 57) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: true,
                crawl: false,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 58) {
            state.ui.interaction.player_1.idle = {
                floating: false,
                sneak: false,
                standing: false,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: true,
                prone: false,
                dead: false,
            };
        };

        if (keyCode == 187) {
            state.ui.interaction.player_1.cycles.growth = !state.ui.interaction.player_1.cycles.growth;
            state.ui.interaction.player_1.cycles.shrink = false;
        };

        if (keyCode == 189) {
            state.ui.interaction.player_1.cycles.shrink = !state.ui.interaction.player_1.cycles.shrink;
            state.ui.interaction.player_1.cycles.growth = false;
        };

        if (keyCode == 40) {
            console.log('down');
            state.ui.interaction.player_1.stance = 1;
            state.ui.interaction.player_1.cycles.walking = true;
        };

        if (keyCode == 39) {
            console.log('right');
            state.ui.interaction.player_1.stance = 5;
            state.ui.interaction.player_1.cycles.walking = true;
        };

        if (keyCode == 38) {
            console.log('up');
            state.ui.interaction.player_1.stance = 9;
            state.ui.interaction.player_1.cycles.walking = true;
        };

        if (keyCode == 37) {
            console.log('left');
            state.ui.interaction.player_1.stance = 13;
            state.ui.interaction.player_1.cycles.walking = true;
        };

        // space
        if (keyCode == 32) {
            console.log('spacebar');
            
            if (state.ui.modal.page.left.transform == false) {
                state.ui.modal.page.left.transform = true;
                setTimeout(
                (() => {
                    state.ui.modal.page.left.display = true;
                })(), 101);
                return;
            };

            if (state.ui.modal.page.left.transform == true) {
                state.ui.modal.page.left.display = true;
                setTimeout(
                (() => {
                    state.ui.modal.page.left.transform = false;
                })(), 101);
                return;
            };


        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener('keyup', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');
        console.log('keydown');

        let keyCode = event.keyCode;
        console.log('keyCode: ' + keyCode);
        console.log('keys held: ');
        console.log(state.events.key.keys);

        if (keyCode == 16) {
            console.log('shift');
            state.ui.interaction.player_1.yaxis = 0;
        };

        if (keyCode == 40) {
            console.log('down');
            state.ui.interaction.player_1.cycles.walking = false;
        };

        if (keyCode == 39) {
        if (keyCode == 16) {
            console.log('shift');
            state.ui.interaction.player_1.yaxis = 1;
        };

            console.log('right');
            state.ui.interaction.player_1.cycles.walking = false;
        };

        if (keyCode == 38) {
            console.log('up');
            state.ui.interaction.player_1.cycles.walking = false;
        };

        if (keyCode == 37) {
            console.log('left');
            state.ui.interaction.player_1.cycles.walking = false;
        };

    });

    document.getElementById('component_app_body').addEventListener('mousemove', (event) => {
        
        state = from_index.Handle_return_state();

        if (state.animation.instances.loaded == true && state.animation.instances.loaded_1 == true && state.animation.instances.loaded_2 == false && state.animation.instances.loaded_3 == false && state.animation.instances.loaded_4 == false && state.animation.instances.loaded_5 == false) {
            state.animation.instances.loaded_1 = false;
            state.animation.instances.loaded_2 = true;
            state.animation.instances.loaded_3 = false;
            state.animation.instances.loaded_4 = false;
            state.animation.instances.loaded_5 = false;
        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener('mousedown', (event) => {
    });

    document.getElementById('component_app_body').addEventListener('mouseup', (event) => {
    });

    document.getElementById('component_app_body').addEventListener('mouseenter', (event) => {
    });

    document.getElementById('component_app_body').addEventListener('mouseleave', (event) => {
    });

};

// Mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

    document.getElementById('component_app_body').addEventListener('touchmove', (event) => {
        
        state = from_index.Handle_return_state();

        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.touch.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.touch.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };

        console.log('event.changedTouches[0].page');
        console.log(event.changedTouches[0].pageX);
        console.log(event.changedTouches[0].pageY);

        state.events.touch.enter = true;
        state.events.touch.leave = false;

        state.events.touch.clientX = event.changedTouches[0].clientX;
        state.events.touch.clientY = event.changedTouches[0].clientY;

        from_index.Handle_get_state_from_events();
    });

    document.getElementById('component_app_body').addEventListener("touchstart", function(event) {

        state = from_index.Handle_return_state();

        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.touch.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.touch.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };
        
        state.events.touch.enter = true;
        state.events.touch.leave = false;

        state.events.touch.start.clientX = event.changedTouches[0].clientX;
        state.events.touch.start.clientY = event.changedTouches[0].clientY;

        from_index.Handle_get_state_from_events();
    });

    document.getElementById('component_app_body').addEventListener("touchend", function(event) {
        

        state = from_index.Handle_return_state();

        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.touch.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.touch.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };

        state.events.touch.enter = false;
        state.events.touch.leave = true;

        state.events.touch.end.clientX = event.changedTouches[0].clientX;
        state.events.touch.end.clientY = event.changedTouches[0].clientY;

        // see index for timed events of pause/timeout
        //alert('touchend');
        console.log(event.changedTouches[0]);

        state.events.touch.dragDistanceX = (event.changedTouches[0].clientX - state.events.touch.start.clientX)
        state.events.touch.dragDistanceY = (event.changedTouches[0].clientY - state.events.touch.start.clientY)

        state.events.touch.drag.clientX = (event.changedTouches[0].clientX - state.events.touch.start.clientX)
        state.events.touch.drag.clientY = (event.changedTouches[0].clientY - state.events.touch.start.clientY)

        console.log('event.changedTouches[0].rotationAngle');
        console.log(event.changedTouches[0].rotationAngle);

        if ((document.getElementById('rotationAngle')) != null ) {
            document.getElementById('rotationAngle').innerHTML = (event.changedTouches[0].rotationAngle)
        };

        console.log('event.changedTouches[0].radius');
        console.log(event.changedTouches[0].radiusX);
        if ((document.getElementById('radiusX')) != null ) {
            document.getElementById('radiusX').innerHTML = (event.changedTouches[0].radiusX);
            state.events.touch.radiusX = (event.changedTouches[0].radiusX);
        };

        console.log(event.changedTouches[0].radiusY);
        if ((document.getElementById('radiusY')) != null ) {
            document.getElementById('radiusY').innerHTML = (event.changedTouches[0].radiusY)
            state.events.touch.radiusY = (event.changedTouches[0].radiusX);
        };

        console.log('state.events.touch.dragDistance');
        console.log(state.events.touch.dragDistanceX);
        if ((document.getElementById('dragDistanceX')) != null ) {
            document.getElementById('dragDistanceXStart').innerHTML = (state.events.touch.start.clientX)
            document.getElementById('dragDistanceX').innerHTML = (state.events.touch.dragDistanceX)
            document.getElementById('dragDistanceXEnd').innerHTML = (state.events.touch.end.clientX)
        };

        console.log(state.events.touch.dragDistanceY);
        if ((document.getElementById('dragDistanceY')) != null ) {
            document.getElementById('dragDistanceYStart').innerHTML = (state.events.touch.start.clientY)
            document.getElementById('dragDistanceY').innerHTML = (state.events.touch.dragDistanceY)
            document.getElementById('dragDistanceYEnd').innerHTML = (state.events.touch.end.clientY)
        };

        if (state.events.touch.dragDistanceX < -250) {
            alert('dragDistanceX < -250, left');

            if (state.animation.instances.loaded == true && state.animation.instances.loaded_1 == true && state.animation.instances.loaded_2 == false && state.animation.instances.loaded_3 == false && state.animation.instances.loaded_4 == false && state.animation.instances.loaded_5 == false) {
                state.animation.instances.loaded_1 = false;
                state.animation.instances.loaded_2 = true;
                state.animation.instances.loaded_3 = false;
                state.animation.instances.loaded_4 = false;
                state.animation.instances.loaded_5 = false;


                document.getElementById('component_app_body').classList.add('entered');
            };

        }

        if (state.events.touch.dragDistanceY < -250) {
            alert('dragDistanceY < -250 down');
        }

        if (state.events.touch.dragDistanceX > 250) {
            alert('dragDistanceX > 250, right');
        }

        if (state.events.touch.dragDistanceY > 250) {
            alert('dragDistanceY > 250 up');
        };

        from_index.Handle_get_state_from_events();

    });

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
            };


            if (event.accelerationIncludingGravity.x < -8) {
                document.getElementById('last_action').innerHTML = 'shook left';
                    
                // key_pressed
                //alert('shook left');
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

};

})(), 1000);

let Handle_return_state_from_events = () => {
    return state
};

export default {
    state,
    Handle_return_state_from_events
}