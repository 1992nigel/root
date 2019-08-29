
import style from './style.scss';

import def from './imports/state';
import events from './imports/events';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382",
    appId: "1:415995628382:web:0295bf4137f3f5fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth ref
const auth = firebase.auth();

// make firestore ref
const db = firebase.firestore();

// listenforauth state changes
let validated_auth_user;

auth.onAuthStateChanged(auth_user => {
    console.log('onAuthStateChanged');

    if ( (auth_user) == null) {
        console.log(auth_user);
        get_db_users();
    };

    if ( (auth_user) != null) {
        validated_auth_user = auth_user;
        console.log(auth_user);
        get_db_users();
    };

});

// get
let db_users = [];
let get_db_users = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('users').get().then(snapshot => {
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        document.getElementById('db_users').innerHTML = ``;
        db_users = [];

        snapshot.docs.forEach(doc => {
            let snap_doc = doc.data();
            db_users.push(snap_doc)
        });

        db_users.forEach(post => {
            console.log(post);
            document.getElementById('db_users').innerHTML += `
                <li class="user_post">
                    <div class="post_featured_image" style="background-image: url(${(post.image)})"></div>
                    
                    <div class="user_post_title"><p>${post.id}</p></div>
                    <div class="user_post_author_image_block">
                        <div class="post_author_image" style="background-image: url(${(post.image)})"></div>
                        <div class="user_post_author_block">
                            <div class="user_post_info_1">${post.id}</div>
                            <div class="user_post_info_2">${post.id}</div>
                            <div class="user_post_stats"><div class="user_post_stat_1">${post.username}</div><div class="user_post_stat_2">${post.username}</div><div class="user_post_stat_3">${post.username}</div><div class="user_post_stat_4">${post.username}</div><div class="user_post_stat_5">${post.username}</div><div class="user_post_stat_6">${post.username}</div></div>
                        </div>
                        <div class="user_post_flag_block"></div>
                    </div>

                    <div class="user_post_hide hover_hide"><p>more info</p></div>
                    <div class="user_post_show hover_show">
                        <iframe title="${post.title}" width="100%" height="315" src="${post.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <img class="post_image" src="${(post.image)}" alt="${(post.username)}"/>
                    </div>
                </li>
            `
        });

    });
};


// intervals
let load_status = 0;
let act_after_check_url = () => {
    console.log('act_after_check_url');
    console.log(load_status);

    if (load_status == 0) {

        document.getElementById('lead').innerHTML = `
            <div id="lead_load_bar" class="width_0 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01">

            </div>
        `;

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 1) {
        document.getElementById('lead_load_bar').classList = `width_1205 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`
        
        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 2) {
        document.getElementById('lead_load_bar').classList = `width_25 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 3) {

        document.getElementById('lead_load_bar').classList = `width_3705 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 4) {

        document.getElementById('lead_load_bar').classList = `width_50 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 5) {

        document.getElementById('lead_load_bar').classList = `width_6205 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 6) {

        document.getElementById('lead_load_bar').classList = `width_75 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 7) {

        document.getElementById('lead_load_bar').classList = `width_8705 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 8) {

        document.getElementById('lead_load_bar').classList = `width_100 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 9) {

        document.getElementById('lead_load_bar').classList = `transform_translate3d_top_100 width_100 height_1205vw position_absolute top_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 10) {

        document.getElementById('lead_load_bar').classList = ``

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 11) {

        document.getElementById('lead').innerHTML = `
            <input id="input_search" type="text" class="width_100 height_1205vw position_relative bg_green overflow_hidden easing_01"/>
        `;


        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    load_status += 1;

};

let file = 'index.js';
console.log(file);

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
    events.handle_Function_Device_DOMContentLoaded(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("load", (event) => {
    events.handle_Function_Device_Load(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("resize", (event) => {
    events.handle_Function_Device_Resize(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("ondevicemotion", (event) => {
    events.handle_Function_Device_Motion(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("ondeviceorientation", (event) => {
    events.handle_Function_Device_Orientation(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("onorientationchange", (event) => {
    events.handle_Function_Device_Orientation_Change(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("onbeforeunload", (event) => {
});

export default {
    file,
    handle_ReturnState,
    act_after_check_url
}