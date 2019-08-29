let file = 'index.js';
console.log(file);

import def from './imports/state';
import events from './imports/events';
let state = def.default_state;
let body = document.getElementById('body');
let handle_ReturnState = () => {
    return state
};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    console.log('event!')
};

// scroll
body.addEventListener('scroll', (event) => {
    events.handle_Function_Scroll(event);
    handle_ReturnedState_fromEvents();
});

// events
body.addEventListener('keydown', (event) => {
    events.handle_Function_Key_Down(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('keyup', (event) => {
    events.handle_Function_Key_Up(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mousemove', (event) => {
    events.handle_Function_Mouse_Move(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mouseenter', (event) => {
    events.handle_Function_Mouse_Enter(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mouseleave', (event) => {
    events.handle_Function_Mouse_Leave(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mouseup', (event) => {
    events.handle_Function_Mouse_Up(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mousedown', (event) => {
    events.handle_Function_Mouse_Down(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('click', (event) => {
    events.handle_Function_Mouse_Down(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('touchmove', (event) => {
    events.handle_Function_Touch_Move(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('touchstart', (event) => {
    events.handle_Function_Touch_Start(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('touchend', (event) => {
    events.handle_Function_Touch_End(event);
    handle_ReturnedState_fromEvents();
});

document.addEventListener("DOMContentLoaded", (event) => {
    events.handle_Function_Device_Load(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("load", (event) => {
    events.handle_Function_Device_Load(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("resize", (event) => {
    events.handle_Function_Device_Load(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("ondevicemotion", (event) => {
    events.handle_Function_Device_Motion(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("ondeviceorientation", (event) => {
    events.handle_Function_Device_Load(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("onorientationchange", (event) => {
    events.handle_Function_Device_Load(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("onbeforeunload", (event) => {
});

export default {
    file,
    handle_ReturnState
}