// Imports
import from_index from '../index.js';

let state = '';
let drag_from = {};
let drop_to = {};

let handle_Function_Scroll = (event) => {
    state = from_index.handle_ReturnState();
    if (event) {
        
        let scroll = {

            clientWidth: event.target.scrollingElement.clientWidth,
            clientHeight: event.target.scrollingElement.clientHeight,
            scrollLeft: event.target.scrollingElement.scrollLeft,
            scrollTop: event.target.scrollingElement.scrollTop,
            scrollWidth: event.target.scrollingElement.scrollWidth,
            scrollHeight: event.target.scrollingElement.scrollHeight

        };

        state.events.scroll.history.push(scroll);
            console.log('state.events.scroll.history');
            console.log(state.events.scroll.history);
            
            // scrolling
            console.log(
              "event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth
            );

            console.log('event.target.scrollingElement.clientWidth: ' + event.target.scrollingElement.clientWidth);
            console.log('event.target.scrollingElement.clientHeight: ' + event.target.scrollingElement.clientHeight);
            console.log('event.target.scrollingElement.scrollLeft: ' + event.target.scrollingElement.scrollLeft);
            console.log('event.target.scrollingElement.scrollTop: ' + event.target.scrollingElement.scrollTop);
            console.log('event.target.scrollingElement.scrollWidth: ' + event.target.scrollingElement.scrollWidth);
            console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollHeight);


            //alert('yup');

            // scrolling
            console.log(
              "event.target.scrollingElement.clientWidth: " + event.target.scrollingElement.clientWidth
            );
            console.log(
              "event.target.scrollingElement.clientHeight: " + event.target.scrollingElement.clientHeight
            );
            console.log(
              "event.target.scrollingElement.scrollLeft: " + event.target.scrollingElement.scrollLeft
            );
            console.log(
              "event.target.scrollingElement.scrollTop: " + event.target.scrollingElement.scrollTop
            );
            console.log(
              "event.target.scrollingElement.scrollWidth: " + event.target.scrollingElement.scrollWidth
            );
            console.log(
              "event.target.scrollingElement.scrollHeight: " + event.target.scrollingElement.scrollHeight
            );

        // set state
        state.interaction.root.clientHeight = state.ux.dimensions.height;
        state.interaction.root.clientWidth = state.ux.dimensions.width;

        state.interaction.root.scrollHeight = event.target.scrollingElement.scrollHeight;
        state.interaction.root.scrollWidth = event.target.scrollingElement.scrollWidth;

        state.interaction.root.scrollTop = event.target.scrollingElement.scrollTop;
        state.interaction.root.scrollLeft = event.target.scrollingElement.scrollLeft;

        // check states
        // is wheel up or down?
        if (
          state.interaction.root.scrollTop >
          state.interaction.root.component_app_gui_scroll_y_position
        ) {
          console.log(
            "state.interaction.root.component_app_gui_scroll_y_position increasing"
          );
          console.log("instance: wheel down");
          state.interaction.root.wheel_up = false;
          state.interaction.root.wheel_down = true;
        }

        if (
          state.interaction.root.scrollTop <
          state.interaction.root.component_app_gui_scroll_y_position
        ) {
          console.log(
            "state.interaction.root.component_app_gui_scroll_y_position decreasing"
          );
          console.log("instance: wheel up");
          state.interaction.root.wheel_up = true;
          state.interaction.root.wheel_down = false;
        }

        if (state.interaction.root.scrollTop === 0) {
          console.log("instance: wheel up");
          state.interaction.root.wheel_up = true;
          state.interaction.root.wheel_down = false;
        }

        // is scrolling started?
        if (state.interaction.root.scrollTop > 1) {
          console.log("instance: scrolling started");
          state.interaction.root.scrolling_started = true;
        }
        if (state.interaction.root.scrollTop == 0) {
          console.log("instance: scrolling started");
          state.interaction.root.scrolling_started = false;
        }

        // is inside lead?
        if (state.interaction.root.scrollTop < state.interaction.root.clientHeight) {
          console.log("instance: inside lead");
          state.interaction.root.inside_lead = true;
          state.interaction.root.past_lead = false;
        }

        // is past lead?
        if (state.interaction.root.scrollTop > state.interaction.root.clientHeight) {
          console.log("instance: past lead");
          state.interaction.root.inside_lead = false;
          state.interaction.root.past_lead = true;
        }

        // is at right before footer?
        if (
          state.interaction.root.clientHeight + state.interaction.root.scrollTop <
          state.interaction.root.scrollHeight - state.interaction.root.clientHeight
        ) {
          console.log("instance: 100vh before bottom met");
          state.interaction.root.before_footer = true;
        }

        if (
          state.interaction.root.clientHeight + state.interaction.root.scrollTop >
          state.interaction.root.scrollHeight - state.interaction.root.clientHeight
        ) {
          console.log("instance: 100vh before bottom met");
          state.interaction.root.before_footer = false;
        }

        // is at footer?
        if (
          state.interaction.root.scrollHeight - state.interaction.root.scrollTop >
          state.interaction.root.clientHeight
        ) {
          console.log(
            "component_app_modal_element_page_top_content: instance: footer met"
          );
          state.interaction.root.inside_footer = false;
        }
        if (
          state.interaction.root.scrollHeight - state.interaction.root.scrollTop <=
          state.interaction.root.clientHeight
        ) {
          console.log(
            "component_app_modal_element_page_top_content: instance: footer met"
          );
          state.interaction.root.inside_footer = true;
        }

        state.interaction.root.component_app_gui_scroll_y_position =
          state.interaction.root.scrollTop;

    };
};

let handle_Function_Device_Orientation_Change = (event) => {
    state = from_index.handle_ReturnState();
    state.events.motion.orientation_string = orientation;

    state.events.motion.orientation_string_history.push({event});
    console.log('state.events.motion.orientation_string_history');
    console.log(state.events.motion.orientation_string_history);
    console.log('handle_Function_Device_Orientation_Change');
};

let handle_Function_Device_DOMContentLoaded = (event) => {
    
    window.scrollTo(0, 0);
    state = from_index.handle_ReturnState();

    state.ux = {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth)
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        }
    };

    from_index.act_after_check_url();
    console.log('handle_Function_Device_DOMContentLoaded');
};

let handle_Function_Device_Resize = (event) => {
    state = from_index.handle_ReturnState();

    state.ux = {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth)
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        }
    };

    if (document.getElementById('lead') != null) {
        document.getElementById('lead').style =
        'height: ' + (state.ux.dimensions.height) + 'px;' +
        'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    console.log('handle_Function_Device_Resize');
};

let handle_Function_Device_Orientation = (event) => {
    state = from_index.handle_ReturnState();
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;

    state.events.motion.orientation_history.push({event});
    console.log('state.events.motion.orientation_history');
    console.log(state.events.motion.orientation_history);
    console.log('handle_Function_Device_Orientation');
};

let handle_Function_Device_Load = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Device_Load');
};

let handle_Function_Mouse_Move = (event) => {
    state = from_index.handle_ReturnState();
    let mouse = {clientX: event.clientX, clientY: event.clientY};
    state.events.mouse.status.enter = true;
    state.events.mouse.status.leave = false;

    if (event) {
        state.events.mouse.current.clientX = event.clientX;
        state.events.mouse.current.clientY = event.clientY;

        state.events.mouse.history.push(mouse);

        if (state.events.mouse.status.up == true) {
            state.events.mouse_up_move.history.push(mouse);
        };

        if (state.events.mouse.status.down == true) {
            state.events.mouse_down_move.history.push(mouse);
        };
        
        console.log('state.events.mouse.history');
        console.log(state.events.mouse.history);
    };
    console.log('handle_Function_Mouse_Move');
};

let handle_Function_Mouse_Enter = (event) => {
    state = from_index.handle_ReturnState();
    state.events.mouse.status.enter = true;
    state.events.mouse.status.leave = false;
    if (event) {
        state.events.mouse_enter.history.push([{clientX: event.clientX, clientY: event.clientY}]);
        console.log('state.events.mouse_enter.history');
        console.log(state.events.mouse_enter.history);
    };
    console.log('handle_Function_Mouse_Enter');
};

let handle_Function_Mouse_Leave = (event) => {
    state = from_index.handle_ReturnState();
    state.events.mouse.status.enter = false;
    state.events.mouse.status.leave = true;
    if (event) {
        state.events.mouse_leave.history.push([{clientX: event.clientX, clientY: event.clientY}]);
        console.log('state.events.mouse_leave.history');
        console.log(state.events.mouse_leave.history);
    };
    console.log('handle_Function_Mouse_Leave');
};

let handle_Function_Mouse_Up = (event) => {
    state = from_index.handle_ReturnState();
    state.events.mouse.status.up = true;
    state.events.mouse.status.down = false;
    if (event) {
        state.events.mouse_up.history.push([{clientX: event.clientX, clientY: event.clientY}]);
        console.log('state.events.mouse_up.history');
        console.log(state.events.mouse_up.history);

        drag_from = {clientX: event.clientX, clientY: event.clientY};
        state.events.mouse_drag_drop.history.push([ 
            {
                drag:{drag_from},
                drop:{drop_to}
            }
        ]);

        console.log('state.events.mouse_drag_drop.history');
        console.log(state.events.mouse_drag_drop.history);
    };
    console.log('handle_Function_Mouse_Up');
};

let handle_Function_Mouse_Down = (event) => {
    state = from_index.handle_ReturnState();
    state.events.mouse.status.up = false;
    state.events.mouse.status.down = true;
    if (event) {
        state.events.mouse_down.history.push([{clientX: event.clientX, clientY: event.clientY}]);

        drop_to = {clientX: event.clientX, clientY: event.clientY};

        console.log('state.events.mouse_down.history');
        console.log(state.events.mouse_down.history);
    };
    console.log('handle_Function_Mouse_Down');
};

let handle_Function_Key_Down = (event) => {
    state = from_index.handle_ReturnState();

        // console.log('state in events');
        console.log('keydown');

        let keyCode = event.keyCode;
        console.log('keyCode: ' + keyCode);
        console.log('keys held: ');
        console.log(state.events.keys_held.history);

        let matched = false;

        for (var i = 0; i < state.events.keys_held.history.length; i++) {
            if (state.events.keys_held.history[i] == event.keyCode) {
                matched = true;
            };
        };

        if (matched == false) {
            state.events.keys_held.history.push(event.keyCode);
        };

        state.events.key.history.push([{keyCode: event.keyCode}]);
        console.log('state.events.key.history');
        console.log(state.events.key.history);


    if (event.keyCode == 81) {
        //state.modal.pop.top.transform = !state.modal.pop.top.transform;
        state.modal.nav.top.transform = !state.modal.nav.top.transform;
        from_index.game_start();
    };

    if (event.keyCode == 27) {
        setTimeout(function () {
            //window.scrollTo(0, 0);
        }, 0);
        from_index.modal_reset();
    };

    if (event.keyCode == 32) {
        state.interaction.player_1.cycles.walking = !state.interaction.player_1.cycles.walking;
    };

    if (event.keyCode == 13) {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
        state.data.dark_mode = !state.data.dark_mode;
        state.modal.gui.top_right.transform = !state.modal.gui.top_right.transform;
        state.modal.nav.top.transform = !state.modal.nav.top.transform;
        state.modal.menu.right.transform = !state.modal.menu.right.transform;
        from_index.game_end();
    };

    if (event.keyCode == 37) {
        //alert('shift');
        state.interaction.player_1.angle = 0;
        state.interaction.player_1.clientX -= (1/8);
        state.interaction.cardboard.xaxis -= 1;
        event.preventDefault();
    };

    if (event.keyCode == 38) {
        //alert('shift');
        state.interaction.player_1.stance = 1;
        state.interaction.player_1.clientY -= (1/8);
        state.interaction.cardboard.yaxis -= 1;
        event.preventDefault();
    };

    if (event.keyCode == 39) {
        //alert('shift');
        state.interaction.player_1.angle = 1;
        state.interaction.player_1.clientX += (1/8);
        state.interaction.cardboard.xaxis += 1;
        event.preventDefault();
    };

    if (event.keyCode == 40) {
        //alert('shift');
        state.interaction.player_1.stance = 0;
        state.interaction.player_1.clientY += (1/8);
        state.interaction.cardboard.yaxis += 1;
        event.preventDefault();
    };

    if (event.keyCode == 192) {
        from_index.get_db_guides();
    };

    if (event.keyCode == 87) {
        //alert('w');
        state.interaction.vr.clientY += 1;
    };

    if (event.keyCode == 83) {
        //alert('s');
        state.interaction.vr.clientY -= 1;
    };

    if (event.keyCode == 68) {
        //alert('d');
        state.interaction.vr.clientX += 1;
    };

    if (event.keyCode == 65) {
        //alert('a');
        state.interaction.vr.clientX -= 1;
    };

    console.log('handle_Function_Key_Down');
};

let handle_Function_Key_Up = (event) => {
    state = from_index.handle_ReturnState();
        
        // console.log('state in events');
        console.log('keyup');
        console.log('event: keyup');
        console.log(event);
        var index = state.events.keys_held.history.indexOf(event.keyCode);

        //state.animation.scene = (state.animation.scene + 1);
        //alert(state.animation.scene);

        if (index > -1) {
            state.events.keys_held.history.splice(index, 1);
        };

    if (event) {
        state.events.key_up.history.push([{keyCode: event.keyCode}]);
        console.log('state.events.key_up.history');
        console.log(state.events.key_up.history);

        if (event.keyCode == 27) {
            
        };
    };
};

let handle_Function_Touch_Move = (event) => {
    state = from_index.handle_ReturnState();
    if (event) {
        state.events.touch.history.push({force: event.touches[0].force, clientY: event.touches[0].clientY, clientX: event.touches[0].clientX});
        state.events.touch.touches = event.touches.length;
        console.log('state.events.touch.history');
        console.log(state.events.touch.history);
    };
};

let handle_Function_Touch_Start = (event) => {
    state = from_index.handle_ReturnState();
    if (event) {
        state.events.touch_start.history.push({force: event.touches[0].force, clientY: event.touches[0].clientY, clientX: event.touches[0].clientX});

        drag_from = {clientX: event.clientX, clientY: event.clientY};
        console.log('state.events.touch_start.history');
        console.log(state.events.touch_start.history);
    };
};

let handle_Function_Touch_End = (event) => {
    state = from_index.handle_ReturnState();
    if (event) {
        state.events.touch_end.history.push({force: event.changedTouches[0].force, clientY: event.changedTouches[0].clientY, clientX: event.changedTouches[0].clientX});

        drop_to = {clientX: event.clientX, clientY: event.clientY};
        state.events.touch_drag_drop.history.push([ 
            {
                drag:{drag_from},
                drop:{drop_to}
            }
        ]);

        console.log('state.events.touch_end.history');
        console.log(state.events.touch_end.history);
       };
};

let handle_Function_Device_Motion = (event) => {
    state = from_index.handle_ReturnState();
    state.ux = {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth)
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        }
    };

    state.events.motion.history.push([ 
        {
            event_accelerationIncludingGravity_x: event.accelerationIncludingGravity.x,
            event_accelerationIncludingGravity_y: event.accelerationIncludingGravity.y,
            event_accelerationIncludingGravity_z: event.accelerationIncludingGravity.z

        }
    ]);

    state.events.motion.event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
    state.events.motion.event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
    state.events.motion.event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

    console.log('handle_Function_Device_Motion');
};

let handle_ReturnState_fromEvents = () => {
    return state
};

export default {
    state,
    handle_ReturnState_fromEvents,
    handle_Function_Key_Down,
    handle_Function_Key_Up,
    handle_Function_Mouse_Move,
    handle_Function_Touch_Move,
    handle_Function_Touch_Start,
    handle_Function_Touch_End,
    handle_Function_Scroll,
    handle_Function_Device_Resize,
    handle_Function_Device_Motion,
    handle_Function_Mouse_Enter,
    handle_Function_Mouse_Leave,
    handle_Function_Mouse_Up,
    handle_Function_Mouse_Down,
    handle_Function_Device_Load,
    handle_Function_Device_DOMContentLoaded,
    handle_Function_Device_Orientation,
    handle_Function_Device_Orientation_Change
}