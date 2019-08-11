// Imports
import from_index from '../index.js';

let state = '';
let handle_Function_Scroll = (event) => {
    state = from_index.handle_ReturnState();
    if (event) {

        //state.events.scroll.history.push({event});
        //console.log('state.events.scroll.history');
        //console.log(state.events.scroll.history);
        
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
        console.log('event.target.scrollingElement.scrollHeight: ' + event.target.scrollingElement.scrollTop);


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
    };
};

let handle_Function_Device_Load = (event) => {
    state = from_index.handle_ReturnState();
    console.log('handle_Function_Device_Load');
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
        state.modal.gui.top_right.transform = !state.modal.gui.top_right.transform;
        state.modal.nav.top.transform = !state.modal.nav.top.transform;
        state.modal.menu.right.transform = !state.modal.menu.right.transform;
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
    handle_Function_Device_Load
}