// Rules
'use strict';

// Imports
import style from './style.scss';
import imported_events from './partials/events';

let events;

events = imported_events;

let state = {

    app: {
        route: '/',
        dark_mode: false
    },

    data: {
        dev_mode: false,
        time: '',
        firebase: {},
        wordpress: {},
        feature_posts_limit: 1,
        posts_start: 1,
        posts_limit: 3,
        refs: false,
        sort: 'likes',
        view: 'grid',
        feature_style: 'all',
        types: [{title: 'null'}],
        category: 'all',
        sub_category: 'all',
        tag: 'all',
        content: false,
        user: {},
        score: {
            current: {
                met: 0,
                area: 0,
            },
            leaderboard: [],
        },
        local: true
    },

    events: {

        eights: {
            clientX: 0,
            clientY: 0
        },
        mouse: {
            click: {
                clientX: 0,
                clientY: 0
            },
            clientX: 0,
            clientY: 0,
            up: true,
            down: false,
            drop_start: {
                clientX: 0,
                clientY: 0
            },
            drop_end: {
                clientX: 0,
                clientY: 0
            },
            drop: {
                clientX: 0,
                clientY: 0
            },
            drag: {
                clientX: 0,
                clientY: 0
            },
            pen: {
                clientX: 0,
                clientY: 0
            },
            pencil: {
                clientX: 0,
                clientY: 0
            },
            enter: true,
            leave: false,
            entertimer: 0,
            leavetimer: 0,
            movetimer: 0,
            mousemove: false,
            uptimer: 0,
            automation: {
                increase: true,
                decrease: false,
            },
            absolute: 0,
            alpha: 0,
            beta: 0,
            gamma: 0,
            acceleration: {
                x: 0,
                y: 0,
                z: 0
            },
            accelerationIncludingGravity: {
                x: 0,
                y: 0,
                z: 0
            },
            rotationRate: {
                alpha: 0,
                beta: 0,
                gamma: 0
            },
            interval: {
                x: 0,
                y: 0,
                z: 0
            }
        },
        
        touch: {
            radiusX: 0,
            radiusY: 0,
            click: {
                clientX: 0,
                clientY: 0
            },
            start: {
                clientX: 0,
                clientY: 0
            },
            end: {
                clientX: 0,
                clientY: 0
            },
            click: {
                clientX: 0,
                clientY: 0
            },
            clientX: 0,
            clientY: 0,
            up: true,
            down: false,
            drop: {
                clientX: 0,
                clientY: 0
            },
            drag: {
                clientX: 0,
                clientY: 0
            },
            dragDistanceX: 0,
            dragDistanceY: 0,
            enter: true,
            leave: false,
            entertimer: 0,
            leavetimer: 0,
            timer: 0,
            automation: {
                increase: true,
                decrease: false,
            },
            absolute: 0,
            alpha: 0,
            beta: 0,
            gamma: 0,
            acceleration: {
                x: 0,
                y: 0,
                z: 0
            },
            accelerationIncludingGravity: {
                x: 0,
                y: 0,
                z: 0
            },
            rotationRate: {
                alpha: 0,
                beta: 0,
                gamma: 0
            },
            interval: {
                x: 0,
                y: 0,
                z: 0
            }
        },

        key: {
            keys: [],
            pressed: {
                key_tildy: false,
                key_1: false,
                key_2: false,
                key_3: false,
                key_4: false,
                key_5: false,
                key_6: false,
                key_7: false,
                key_8: false,
                key_9: false,
                key_0: false,
                key_space: false,
                key_arrow_left: false,
                key_arrow_right: false
            },
            last_key: 0,
            up: true,
            down: false,
            timer: 0,
            automation: {
                increase: true,
                decrease: false,
            },
        }
    },

    ux: {
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
    }

};

let Handle_return_state = () => { 
    return state
};

let Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
};

// Initialization
let config = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382"
};
 
// Functions
firebase.initializeApp(config);

let fb_writeable = false;
let fb_response = {};

let root = document.getElementById('root');
let is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
let is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))

let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;

let handle_refresh_fire_data = () => {

    handle_empty_list();
    
    let rootRef = firebase.database().ref();
    let gnougnRef = rootRef.child('gnougn');
    let wordpressRef = gnougnRef.child('wordpress');

    firebase_data_has_been_updated_and_is_now_writeable = true;
    firebase_has_responsed_with_this_updated_data = {};

    (() => {
        rootRef.on('value', function(snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('state.data.firebase');
            console.log(state.data.firebase);
        });

    })();
};

let handle_firebase_render_to_view = () => {
    // render library
    (() => {

        setTimeout(function() {

            if ((firebase_has_responsed_with_this_updated_data) != null) {

                alert('rendered')
            };
        }, 0);
    })();
};


let handle_repeated_fire_data_validation = setInterval( () => {

    /*
    
        This is a fail safe that updates the view with the latest firebase data so long
        as the toggle *firebase_data_has_been_updated_and_is_now_writeable* has been activated.
        It will deactive once rendering to the view has been completed!

        - See *handle_refresh_fire_data* for additional infromation on the rules of our fail
        safe that simulates an "open stream of data."
        
        - *handle_refresh_fire_data* will be called in for ocassons:
        1) on load
        2) after any C.R.U.D. actions
        3) every second for notification
        4) every 60 fps for game actions
    
    */

    if (firebase_data_has_been_updated_and_is_now_writeable == true) {

        firebase_has_responsed_with_this_updated_data = state.data.firebase;

        if ((firebase_has_responsed_with_this_updated_data.gnougn.library) != null) {
            
            // only once!
            firebase_data_has_been_updated_and_is_now_writeable = false; // once firebase server responds, instead of a clearInterval, we use -> !writable

            console.log('handle_repeated_fire_data_validation');

            // arrat made from object key
            let result_library = Object.keys(firebase_has_responsed_with_this_updated_data.gnougn.library).map(function(key) {
                return firebase_has_responsed_with_this_updated_data.gnougn.library[key];
            });
            firebase_has_responsed_with_this_updated_data.gnougn.library = result_library;

            // now that data has been received
            if (firebase_data_has_been_updated_and_is_now_writeable == false) {

                console.clear();
                //clearInterval(handle_repeated_fire_data_validation);
                
                if (first_load == true) {
                    alert('first_load');
                    first_load = false;
                };

                setTimeout(function() {
                    //handle_firebase_render_to_view();
                    //console.clear();
                    alert('contected!');
                }, 0);


                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);

let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('div');
    ELEMENT.setAttribute("id", id_String);

    if (class_String) {
        ELEMENT.classList = class_String;
    };

    if (class_String) {
        ELEMENT.classList = class_String;
    };
                        
    if ((data_Object) != null) {

        ELEMENT.innerHTML = `
            ${data_Object}
        `;
    };

    return ELEMENT
};

let Generate_new_li = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", id_String);

    if (class_String) {
        ELEMENT.classList = class_String;
    };

    if (class_String) {
        ELEMENT.classList = class_String;
    };
                        
    if ((data_Object) != null) {

    	ELEMENT.innerHTML = `
            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
              ${data_Object}
            </div>
        `;
    };

    return ELEMENT
};

console.log('hello world');

let HANDLE_looping_accent = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        let loop = true;

        let animation =
        setInterval(
            function() {

                    if (interval == (1) ) {        
                        if (document.getElementById('row_accent_noise') != null) {
                                document.getElementById('row_accent_noise').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1');
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row_accent_noise') != null) {
                                document.getElementById('row_accent_noise').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_2');
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row_accent_noise') != null) {
                                document.getElementById('row_accent_noise').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_3');
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row_accent_noise') != null) {
                                document.getElementById('row_accent_noise').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_4');
                        };

                        if (loop == false) {
                            clearInterval(animation);
                        };

                        if (loop == true) {
                            interval = 0;
                        };
                    };

                    if (interval == (1) ) {        
                        if (document.getElementById('row_accent_noise_white') != null) {
                                document.getElementById('row_accent_noise_white').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_1');
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row_accent_noise_white') != null) {
                                document.getElementById('row_accent_noise_white').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_2');
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row_accent_noise_white') != null) {
                                document.getElementById('row_accent_noise_white').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_3');
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row_accent_noise_white') != null) {
                                document.getElementById('row_accent_noise_white').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_white_4');
                        };

                        if (loop == false) {
                            clearInterval(animation);
                        };

                        if (loop == true) {
                            interval = 0;
                        };
                    };

                interval += 1;

            }, (1000 / 12));
    }());

};

let HANDLE_looping_logo_mark = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (state.app.dark_mode == false) {
                    if (interval == (1) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };

                        interval = 0;
                    };
                };

                if (state.app.dark_mode == true) {
                    if (interval == (1) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_white_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_white_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_white_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_white_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };

                        interval = 0;
                    };
                };

                interval += 1;

            }, (1000 / 12));
    }());

};


let HANDLE_looping_logo_type = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (state.app.dark_mode == false) {
                    if (interval == (1) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };

                        interval = 0;
                    };
                };

                if (state.app.dark_mode == true) {
                    if (interval == (1) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_nav_logo_white_type position_relative calc_5vw_height width_25 margin_205vw
                                `);
                        };

                        interval = 0;
                    };
                };

                interval += 1;

            }, (1000 / 12));
    }());

};

let Handle_check_route = (route) => {

    route =  state.app.route;

    (() => {

        if (route == '/') {

            if (document.getElementById('content') != null) {
                document.getElementById('content').innerHTML = ``;

                if (is_Desktop) {

                    let route_background;

                        route_background = `

                            <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                            </div>
                            <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                            </div>

                            <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey"></div>

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white"></div>

                            </div>

                            <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey"></div>

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white"></div>
                                
                            </div>
                            
                        `

                    let route_content = `route_content`

                    let scrolling_content = `scrolling_content`;

                    document.getElementById('content').innerHTML += (route_background + scrolling_content);
                };


                if (is_Mobile) {

                    let route_background;

                        route_background = `

                            <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                            </div>
                            <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                            </div>

                            <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey"></div>

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white"></div>

                            </div>

                            <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey"></div>

                                <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white"></div>
                                
                            </div>
                            
                        `

                    let route_content = `route_content`

                    let scrolling_content = `scrolling_content`;

                    document.getElementById('content').innerHTML += (route_background + scrolling_content);
                };

            };

            // console.log(state.data.firebase.gnougn.roster[i]);
            if (document.getElementById('bg') != null) {
                document.getElementById('bg').innerHTML = ``;

                let content = `

                    <div id="row-noise" class="opacity_005">
                        <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                        <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                    </div>

                    <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                        <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                        <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                        </div>
                    </div>

                `

                document.getElementById('bg').appendChild(
                    Generate_new_fragment.appendChild(Generate_new_div(content, "iding the content", "position_absolute top_0 left_0 width_100vw height_100vh"))
                );
            };

            if (document.getElementById('component_app_modals') != null) {
                document.getElementById('component_app_modals').innerHTML = ``;
                
                let content;

                if (is_Desktop) {

                    content = `

                        <div id="modal_nav_top_left" class="width_100vw float_left position_absolute top_0 height_1205vw">
                            <div id="row-logo-type" class="">
                            </div>
                        </div>

                    `
                };

                if (is_Mobile) {

                    content = `

                        <div id="modal_nav_top_left" class="width_100vw float_left position_absolute top_0 bg_white height_1205vw">
                            <div id="row-logo-type" class="">
                            </div>
                        </div>

                    `
                };

                document.getElementById('component_app_modals').appendChild(
                    Generate_new_fragment.appendChild(Generate_new_div(content, "modal_nav", "position_fixed top_0 left_0"))
                );
            };

            setTimeout( () => {
            }, 101);

        };

})()};

let ui_check = () => {
        
    if (state.app.dark_mode == false) {

        document.getElementById('row-noise').innerHTML = `
            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
        `
        document.getElementById('after_fold_1').classList = ('position_relative width_100vw height_100vh float_left margin_auto gradient_white_top');
        document.getElementById('after_fold_2').classList = ('position_relative width_100vw height_100vh float_left margin_auto bg_white');
        root.classList = ('position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_white');

        if (is_Desktop) {
            document.getElementById('modal_nav_top_left').classList = ('width_100vw float_left position_absolute top_0 height_1205vw');
        };
        if (is_Mobile) {
            document.getElementById('modal_nav_top_left').classList = ('width_100vw float_left position_absolute top_0 bg_white height_1205vw');
        }; 
        
    };

    if (state.app.dark_mode == true) {
        
        document.getElementById('row-noise').innerHTML = `
            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
        `
        document.getElementById('after_fold_1').classList = ('position_relative width_100vw height_100vh float_left margin_auto gradient_grey_top');
        document.getElementById('after_fold_2').classList = ('position_relative width_100vw height_100vh float_left margin_auto bg_grey');
        root.classList = ('position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_grey');

        if (is_Desktop) {
            document.getElementById('modal_nav_top_left').classList = ('width_100vw float_left position_absolute top_0 height_1205vw');
        };
        if (is_Mobile) {
            document.getElementById('modal_nav_top_left').classList = ('width_100vw float_left position_absolute top_0 bg_grey height_1205vw');
        }; 
        
    };
  
};

let addEvents = () => {

    if (document.getElementById('gui_input_2') != null) {
        document.getElementById('gui_input_2').addEventListener('click', (event) => {
            let name = (document.getElementById('gui_input_1').value);
            alert("Welcome" + name + ", thanks for stoping by, you're early. Thanks for the support. Come back next week. Nigel's got an update coming up.");
        })
    };

};

window.onload = () => {

    handle_refresh_fire_data();
    handle_repeated_fire_data_validation;
    
    HANDLE_looping_accent();
    HANDLE_looping_logo_mark();
    HANDLE_looping_logo_type();

    // console.log(state.data.firebase.gnougn.roster[i]);
    if (document.getElementById('wp_content') != null) {
        document.getElementById('wp_content').appendChild(
            Generate_new_fragment.appendChild(Generate_new_li("wp_content from wp_content", "iding the content", "classing the content"))
        );
    };

    //console.log(state.ui.interaction.dice);
    //console.log(state.ui.interaction.random);

    (() => {
        setInterval(function() {

            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date();
            state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
            //console.log(state.data.time);

            if (state.events.mouse.mousemove == true) {
                state.events.mouse.movetimer += 1;
            };

            if (state.events.mouse.movetimer == 10) {
                //alert('too long');
            };

            console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer)

        }, 1000);
    })();

    Handle_check_route();
    ui_check();
    addEvents();

};


// Exports
export default {
    Handle_return_state,
    Handle_get_state_from_events,
    ui_check,
    Handle_check_route
}