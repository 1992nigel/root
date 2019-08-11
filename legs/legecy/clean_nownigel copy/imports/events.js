// Imports
import from_index from '../index.js';

let state = '';

let drag_from = {};
let drop_to = {};

let handle_Function_Scroll = (event) => {
    state = from_index.handle_ReturnState();
    if (event) {

        state.events.scroll.history.push({event});
        console.log('state.events.scroll.history');
        console.log(state.events.scroll.history);
        
        console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
        console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
        console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
        console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
        console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
        console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);
        console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollTop);

        console.log(event);

        //alert('yup');

        // scrolling
        console.log(
          "event.srcElement.clientWidth: " + event.srcElement.clientWidth
        );
        console.log(
          "event.srcElement.clientHeight: " + event.srcElement.clientHeight
        );
        console.log(
          "event.srcElement.scrollLeft: " + event.srcElement.scrollLeft
        );
        console.log(
          "event.srcElement.scrollTop: " + event.srcElement.scrollTop
        );
        console.log(
          "event.srcElement.scrollWidth: " + event.srcElement.scrollWidth
        );
        console.log(
          "event.srcElement.scrollHeight: " + event.srcElement.scrollHeight
        );

        state.interaction.root.clientHeight = event.srcElement.clientHeight;
        state.interaction.root.clientWidth = event.srcElement.clientWidth;

        state.interaction.root.scrollHeight = event.srcElement.scrollHeight;
        state.interaction.root.scrollWidth = event.srcElement.scrollWidth;

        state.interaction.root.scrollTop = event.srcElement.scrollTop;
        state.interaction.root.scrollLeft = event.srcElement.scrollLeft;

        if (document.getElementById("scroll_clientHeight") != null) {
          document.getElementById("scroll_clientHeight").innerHTML =
            event.srcElement.clientHeight;
        }

        if (document.getElementById("scroll_clientWidth") != null) {
          document.getElementById("scroll_clientWidth").innerHTML =
            event.srcElement.clientWidth;
        }

        if (document.getElementById("scroll_scrollHeight") != null) {
          document.getElementById("scroll_scrollHeight").innerHTML =
            event.srcElement.scrollHeight;
        }

        if (document.getElementById("scroll_scrollWidth") != null) {
          document.getElementById("scroll_scrollWidth").innerHTML =
            event.srcElement.scrollWidth;
        }

        if (document.getElementById("scroll_scrollTop") != null) {
          document.getElementById("scroll_scrollTop").innerHTML =
            event.srcElement.scrollTop;
        }

        if (document.getElementById("scroll_scrollLeft") != null) {
          document.getElementById("scroll_scrollLeft").innerHTML =
            event.srcElement.scrollLeft;
        }

        // instances
        if (
          event.srcElement.scrollTop >
          state.interaction.root.component_app_gui_scroll_y_position
        ) {
          console.log(
            "state.interaction.root.component_app_gui_scroll_y_position increasing"
          );
          console.log("instance: wheel up");
        }

        if (
          event.srcElement.scrollTop <
          state.interaction.root.component_app_gui_scroll_y_position
        ) {
          console.log(
            "state.interaction.root.component_app_gui_scroll_y_position decreasing"
          );
          console.log("instance: wheel up");
        }

        if (event.srcElement.scrollTop === 0) {
          console.log("instance: wheel up");
        }

        if (
          event.srcElement.scrollTop > 1 &&
          !(
            event.srcElement.scrollHeight <
            event.srcElement.scrollTop + event.srcElement.offsetHeight
          )
        ) {
          console.log("instance: scrolling started");
        }

        if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
          console.log("instance: inside lead");
        }

        if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
          console.log("instance: past lead");
        }

        if (
          event.srcElement.scrollHeight - event.srcElement.clientHeight <
          event.srcElement.scrollTop + event.srcElement.offsetHeight
        ) {
          console.log("instance: 100vh before bottom met");
        }

        if (
          event.srcElement.scrollHeight - event.srcElement.scrollTop ===
          event.srcElement.clientHeight
        ) {
          console.log(
            "component_app_modal_element_page_top_content: instance: footer met"
          );
        }

        state.interaction.root.component_app_gui_scroll_y_position =
          event.srcElement.scrollTop;


    };
};

let handle_Function_Mouse_Move = (event) => {
    state = from_index.handle_ReturnState();
    state.events.mouse.status.enter = true;
    state.events.mouse.status.leave = false;

    if (event) {
        state.events.mouse.current.clientX = event.clientX;
        state.events.mouse.current.clientY = event.clientY;

        state.events.mouse.history.push([{clientX: event.clientX, clientY: event.clientY}]);

        if (state.events.mouse.status.up == true) {
            state.events.mouse_up_move.history.push([{clientX: event.clientX, clientY: event.clientY}]);
        };

        if (state.events.mouse.status.down == true) {
            state.events.mouse_down_move.history.push([{clientX: event.clientX, clientY: event.clientY}]);
        };
        
        console.log('state.events.mouse.history');
        console.log(state.events.mouse.history);
    };
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
};

let handle_Function_Key_Down = (event) => {
    state = from_index.handle_ReturnState();

    if (event) {
        state.events.key.history.push([{keyCode: event.keyCode}]);
        console.log('state.events.key.history');
        console.log(state.events.key.history);

        if (event.keyCode == 13) {
            state.motion.sequence_game = 0;
            from_index.handle_Sequence_Game_Enter();
        };


        if (event.keyCode == 32) {
            state.motion.sequence_game = 0;
            from_index.handle_Sequence_Game_Exit();
        };

        if (event.keyCode == 27) {
            //alert('handle_ui_reset');
            from_index.handle_ui_reset();
        };

        if (event.keyCode == 81) {
            from_index.handle_modal_reset();
        };

        if (event.keyCode == 37) {
            //alert('left');
            state.data.route += 1;
            state.interaction.playable.angle = 0;
            state.interaction.playable.clientX -= (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 38) {
            //alert('up');
            state.data.route -= 1;
            state.interaction.playable.stance = 1;
            state.interaction.playable.clientY -= (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 39) {
            //alert('right');
            state.data.route -= 1;
            state.interaction.playable.angle = 1;
            state.interaction.playable.clientX += (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 40) {
            //alert('down');
            state.data.route += 1;
            state.interaction.playable.stance = 0;
            state.interaction.playable.clientY += (1/8);
            event.preventDefault();
        };


        if (event.keyCode == 51) {
            //state.ui.modal.pop.top.transform = true;
            //state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        };

        if (event.keyCode == 87) {
            //alert('shift');
            state.interaction.vr.clientY += 1;
        };

        if (event.keyCode == 83) {
            //alert('shift');
            state.interaction.vr.clientY -= 1;
        };

        if (event.keyCode == 68) {
            //alert('shift');
            state.interaction.vr.clientX += 1;
        };

        if (event.keyCode == 65) {
            //alert('shift');
            state.interaction.vr.clientX -= 1;
        };
    };
};

let handle_Function_Key_Up = (event) => {
    state = from_index.handle_ReturnState();

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
    };
};

let handle_Function_Device_Motion = (event) => {
    state = from_index.handle_ReturnState();

    state.events.motion.event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
    state.events.motion.event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
    state.events.motion.event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;
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
}