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
    console.log('handle_Function_Mouse_Move');
};

let handle_Function_Mouse_Enter = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Mouse_Enter');
};

let handle_Function_Mouse_Leave = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Mouse_Leave');
};

let handle_Function_Mouse_Up = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Mouse_Up');
};

let handle_Function_Mouse_Down = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Mouse_Down');
};

let handle_Function_Key_Down = (event) => {
    state = from_index.handle_ReturnState();

    if (event.keyCode == 27) {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
        from_index.modal_reset();
    };

    if (event.keyCode == 13) {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
        state.data.dark_mode = !state.data.dark_mode;
    };

    if (event.keyCode == 37) {
        //alert('shift');
        state.interaction.playable.angle = 0;
        state.interaction.playable.clientX -= (1/8);
        event.preventDefault();
    };

    if (event.keyCode == 38) {
        //alert('shift');
        state.interaction.playable.stance = 1;
        state.interaction.playable.clientY -= (1/8);
        event.preventDefault();
    };

    if (event.keyCode == 39) {
        //alert('shift');
        state.interaction.playable.angle = 1;
        state.interaction.playable.clientX += (1/8);
        event.preventDefault();
    };

    if (event.keyCode == 40) {
        //alert('shift');
        state.interaction.playable.stance = 0;
        state.interaction.playable.clientY += (1/8);
        event.preventDefault();
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
    console.log('handle_Function_Key_Up');
};

let handle_Function_Touch_Move = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Touch_Move');
};

let handle_Function_Touch_Start = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Touch_Start');
};

let handle_Function_Touch_End = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Touch_End');
};

let handle_Function_Device_Resize = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Device_Resize');
};

let handle_Function_Device_Motion = (event) => {
    state = from_index.handle_ReturnState();
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
}