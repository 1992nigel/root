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

        if (root != null) {
        if (is_Desktop) {

            root.addEventListener('wheel', (event) => {
            });

            root.addEventListener('mousemove', (event) => {

                state = from_index.Handle_return_state();

                // console.log('mousemove only');
                // console.log(event);

                console.log('mousemove: event.clientX: ' + event.clientX);
                console.log('mousemove: event.clientY: ' + event.clientY);

                state.events.mouse.clientX = event.clientX;
                state.events.mouse.clientY = event.clientY;
                state.events.mouse.movetimer = 0;

            });

            root.addEventListener('mousedown', (event) => {
            });

            root.addEventListener('mouseup', (event) => {
            });

            root.addEventListener('mouseenter', (event) => {
            });

            root.addEventListener('mouseleave', (event) => {
            });

            root.addEventListener('keydown', (event) => {

                state = from_index.Handle_return_state();
                console.log(event.keyCode);
                //event.preventDefault();

            });

            root.addEventListener('keyup', (event) => {
                
                state = from_index.Handle_return_state();
                console.log(event.keyCode);
                //event.preventDefault();

                if (event.keyCode == 27) {
                    from_index.Handle_check_route('/home');
                };

                if (event.keyCode == 13) {
                    state.app.dark_mode = !state.app.dark_mode;
                    from_index.HANDLE_gui();
                };

            });

        };

        // Mobile
        if (is_Mobile) {

            root.addEventListener('touchmove', (event) => {

                state = from_index.Handle_return_state();

            });

            root.addEventListener("touchstart", function(event) {

                state = from_index.Handle_return_state();

            });

            root.addEventListener("touchend", function(event) {

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

            };

            if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {

            };

            if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {

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

            // get new state from events and sent it to index
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