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

        root.addEventListener('mousemove', (event) => {
            state = from_index.Handle_return_state();

            console.log('mousemove only');
            console.log(event);

            console.log('mousemove: event.clientX: ' + event.clientX);
            console.log('mousemove: event.clientY: ' + event.clientY);

            state.events.mouse.clientX = event.clientX;
            state.events.mouse.clientY = event.clientY;

        })

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

            // q
            if (keyCode == 81) {
                from_index.HANDLE_gui_hide();
            };

            // w
            if (keyCode == 87) {
                from_index.HANDLE_gui_show();
                state.ui.interaction.player_1.yaxis += (1/8);
            };
            
            //[
            if (keyCode == 219) {
                from_index.player_1_shrink();
            };

            //]
            if (keyCode == 221) {
                from_index.player_1_grow();
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

            // esc
            if (keyCode == 27) {
                from_index.addListings('library');
                from_index.addListings('roster');
                from_index.addListings('services');
                from_index.addListings('partners');
                from_index.addListings('abilities');
                from_index.addListings('skills');
            };

            // space
            if (keyCode == 32) {
                event.preventDefault();

                if (state.app.route == 'start') {
                    from_index.Handle_check_route('start_to_null', '');
                };

                if (state.app.route == 'learn') {
                    from_index.Handle_check_route('learn_to_null', '');
                };
            };

            if (keyCode == 40) {
                console.log('down');
                state.ui.stage.cardboard_color.yaxis -= 1;
                state.ui.stage.cardboard_bg.yaxis -= 1;
                state.ui.stage.cardboard_mg.yaxis -= 1;
                state.ui.stage.cardboard_fg.yaxis -= 1;
                state.ui.stage.cardboard.yaxis -= 1;
            };

            if (keyCode == 39) {
                console.log('right');
                state.ui.stage.cardboard_color.xaxis -= 1;
                state.ui.stage.cardboard_bg.xaxis -= 1;
                state.ui.stage.cardboard_mg.xaxis -= 1;
                state.ui.stage.cardboard_fg.xaxis -= 1;
                state.ui.stage.cardboard.xaxis -= 1;
            };

            if (keyCode == 38) {
                console.log('up');
                state.ui.stage.cardboard_color.yaxis += 1;
                state.ui.stage.cardboard_bg.yaxis += 1;
                state.ui.stage.cardboard_mg.yaxis += 1;
                state.ui.stage.cardboard_fg.yaxis += 1;
                state.ui.stage.cardboard.yaxis += 1;
            };

            if (keyCode == 37) {
                console.log('left');
                state.ui.stage.cardboard_color.xaxis += 1;
                state.ui.stage.cardboard_bg.xaxis += 1;
                state.ui.stage.cardboard_mg.xaxis += 1;
                state.ui.stage.cardboard_fg.xaxis += 1;
                state.ui.stage.cardboard.xaxis += 1;
            };      

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

            //state.animation.sequence = (state.animation.sequence + 1);
            //alert(state.animation.sequence);

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
                state.ui.interaction.player_1.stance = 5;
            };

            // s
            if (keyCode == 83) {
            };

            // d
            if (keyCode == 68) {
                state.ui.interaction.player_1.cycles.walking = false;
                state.ui.interaction.player_1.stance = 13;
            };
            
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