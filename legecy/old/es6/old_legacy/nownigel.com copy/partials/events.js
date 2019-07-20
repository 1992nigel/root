// Imports
import from_index from '../index.js';

let state = '';
let dragging = false;
let root = document.getElementById('root');
setTimeout(
    (() => {

        // Desktop
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

            root.addEventListener('mousemove', (event) => {
                state = from_index.Handle_return_state();


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


                from_index.Handle_get_state_from_events();
            });

            root.addEventListener('keyup', (event) => {
                state = from_index.Handle_return_state();


                from_index.Handle_get_state_from_events();
            });

        };

        // Mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

            document.getElementById('component_app_body').addEventListener('touchmove', (event) => {
                state = from_index.Handle_return_state();
                
                from_index.Handle_get_state_from_events();
            });

            document.getElementById('component_app_body').addEventListener("touchstart", function(event) {
                state = from_index.Handle_return_state();
                
                from_index.Handle_get_state_from_events();
            });

            document.getElementById('component_app_body').addEventListener("touchend", function(event) {
                state = from_index.Handle_return_state();

                from_index.Handle_get_state_from_events();
            });

        };

    })(), 1000);

let Handle_return_state_from_events = () => {
    return state
};

export default {
    state,
    Handle_return_state_from_events
}