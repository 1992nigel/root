// Rules
'use strict';

// Imports
import style from './style.scss';
import imported_events from './partials/events';

// Declartaion
let events;
let state;
let Handle_return_state;
let Handle_get_state_from_events;
let config;

let fb_writeable;
let fb_response;

let root;
let is_Desktop;
let is_Mobile;

let Generate_new_fragment;
let Generate_new_div;
let Generate_new_li;
let Generate_new_post;
let Generate_validated_user;
let Generate_post_info_from_author_id;

let HANDLE_animation;
let HANDLE_adaptive;
let HANDLE_gui;
let HANDLE_events;
let HANDLE_content;
let HANDLE_modals;
let HANDLE_physical;
let Handle_check_route;

let filtered_library_by_title = [];
let sorted_library;

// Assignment
events = imported_events;
state = {

    app: {
        route: '/',
        url: '/',
        dark_mode: false,
        content: 0
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
        sort: 'timedown',
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
            mousemove: true,
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
    },

    ui: {
        modal: {
            nav: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },

            page: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            }

        }
    }
};
fb_writeable = false;
fb_response = {};

// Initialization
config = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382"
};
is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
let site_first_load = true;
let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;

let find_sort = (mode) => {

    if (mode == 'likesup') {
            
            if (mode == 'likesup') {
                return function(a, b) {
                    return a.likes - b.likes
                }
            };
    };

    if (mode == 'likesdown') {

            if (mode == 'likesdown') {
                return function(a, b) {
                    return b.likes - a.likes
                }
            };
    };

    if (mode == 'viewsup') {

            if (mode == 'viewsup') {
                return function(a, b) {
                    return a.views - b.views
                }
            };

    };

    if (mode == 'viewsdown') {

            if (mode == 'viewsdown') {
                return function(a, b) {
                    return b.views - a.views
                }
            };

    };

    if (mode == 'timeup') {

            if (mode == 'timeup') {
                return function(a, b) {
                    return b.time - a.time
                }
            };

    };

    if (mode == 'timedown') {
            
            if (mode == 'timedown') {
                return function(a, b) {
                    return Math.abs(a.time - b.time);
                }
            };

    };

    if (mode == 'titleup') {

            if (mode == 'titleup') {
                return function(a, b) {
                    return b.title - a.title
                }
            };

    };

    if (mode == 'titledown') {
            
            if (mode == 'titledown') {
                return function(a, b) {
                    return a.title - b.title
                }
            };

    };

};

let handle_empty_list = () => {

    filtered_library_by_title = [];

    if ((document.getElementById('id_fold')) != null) {
        document.getElementById('id_fold').innerHTML = '';
    };

    if ((document.getElementById('url_fold')) != null) {
        document.getElementById('url_fold').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_all')) != null) {
        document.getElementById('element_ol_firebase_all').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_all_library')) != null) {
        document.getElementById('element_ol_firebase_all_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_all_users')) != null) {
        document.getElementById('element_ol_firebase_all_users').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_validated_user')) != null) {
        document.getElementById('element_ol_firebase_validated_user').innerHTML = '';
    };

};

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

//  sort
sorted_library = (x) => {  return filtered_library_by_title.sort(find_sort(x)) };

let handle_firebase_render_to_view = () => {
    // render library
    (() => {


        setTimeout(function() {

            if ((firebase_has_responsed_with_this_updated_data) != null) {

                //  filter by title
                if ((filtered_library_by_title) != null) {
                    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
                        if ((state.data.firebase.gnougn.library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                            filtered_library_by_title.push(state.data.firebase.gnougn.library[i]);
                        };
                        console.log('filtered_library_by_title[i]');
                        console.log(filtered_library_by_title[i]);
                    };
                };

                // render sort
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    document.getElementById('element_ol_firebase_all').appendChild(
                            Generate_new_fragment.appendChild(
                            Generate_new_post(filtered_library_by_title[i])
                            )
                        );

                };

                // filtered library
                for (var i = 0; i < filtered_library_by_title.length; i++) {

                    if (filtered_library_by_title[i].child == 'library') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_library').appendChild(
                            Generate_new_fragment.appendChild(
                            Generate_new_post(filtered_library_by_title[i])
                            )
                        );
                    };
                };

                // filtered roster
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {

                    if (sorted_library(state.data.sort)[i].child == 'roster') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_users').appendChild(
                            Generate_new_fragment.appendChild(
                            Generate_new_post(sorted_library(state.data.sort)[i])
                            )
                        );
                    };
                };

                if (validated_user.id != null) {
                    document.getElementById('element_ol_firebase_validated_user').appendChild(
                        Generate_new_fragment.appendChild(
                            Generate_validated_user(validated_user)
                        )
                    );
                };

                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user').innerHTML = `please sign in`
                };

                /*
                for (var i = 0; i < filtered_library_by_title.length; i++) {

                    // pagination hack
                    if ( (i < state.data.feature_posts_limit) ) {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_feature_library').appendChild(
                            imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_library_by_title[i])
                            )
                        )
                    };
                };

                for (var i = 0; i < filtered_library_by_title.length; i++) {

                    // pagination hack
                    if ( (i >= (state.data.posts_start)) && (i < state.data.posts_limit) ) {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_after_feature_library').appendChild(
                            imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_library_by_title[i])
                            )
                        )
                    };
                };
                */

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

                setTimeout(function() {
                    handle_firebase_render_to_view();
                    //console.clear();
                    //alert('contected!');
                }, 0);

                if (site_first_load == true) {
                    //alert('site_first_load');
                    Handle_check_route('/loaded');
                    site_first_load = false;
                    HANDLE_modals();
                    HANDLE_events();
                    HANDLE_animation();
                    HANDLE_adaptive();
                    HANDLE_gui();
                    check_local_user();
                };

                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);

// Elements
root = document.getElementById('root');

// Functions
firebase.initializeApp(config);

// functions

let default_user = {
    "username" : "null_local_user",
    "password" : "xxx",
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg"
};

let validated_user = {};
let validated_user_data = {};

let is_logged = false;

// Create
let addListings = (child) => {
    
    var current_second = new Date().getTime() / 1000;
    let default_item;

    if (child == 'library') {
        default_item = {
            child : "library",
            id : 0,
            password : "xxx",
            title : document.getElementById('create_post_title').value,
            username : "null_post",
            tags : [document.getElementById('create_post_tag').value],
            time: current_second,
            authors : [ ""+`${validated_user_data.id}`+"" ]
        };
    };

    if (child == 'roster') {
        default_item = {
            child : "roster",
            id : 0,
            password : [document.getElementById('create_user_password').value],
            title : document.getElementById('create_user_username').value,
            username : document.getElementById('create_user_username').value,
            tags : [document.getElementById('create_user_password').value],
            time: current_second,
            authors : [ ""+`${validated_user_data.id}`+"" ]
        };
    };
    
    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');

    // update key of added object
    Ref.push(default_item).then((snap) => {
        const key = snap.key;
        console.log('from addListing' + key);
        // update created item with snap.key
        Ref.child(key).update({
            id: key
        });

        // Set firebase data
        setTimeout(function() {
            handle_refresh_fire_data();
        }, 0);

    });
};

let check_local_user = () => {

        console.log(window);
        console.log(screen);
        console.log(screen.height);
        console.log(screen.width);
        console.log(navigator);
        console.log(history);
        console.log(history.length);
        console.log(location);
        console.log(location.pathname);
        console.log(localStorage);

    if (localStorage.user == null) {

        //alert('welcome ' + 'new user!');

        localStorage.setItem("user", default_user);
        localStorage.setItem("username", default_user.username);
        localStorage.setItem("password", default_user.password);
        localStorage.setItem("signed_in", "false");
        is_logged = localStorage.signed_in;

        console.log(localStorage.user);
        console.log('localStorage.user.username');
        console.log(localStorage.user.username);
        console.log('localStorage.user.password');
        console.log(localStorage.user.password);

        //alert('welcome new user!');

        return
    };

    // or from login
    if (localStorage.user != null) {

        //alert('welcome ' + 'returning user!');

        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

            if ((state.data.firebase.gnougn.library[i].child == "roster")) {

                // local user matched
                if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username == "null_local_user")) {
                    //alert('welcome back, create an account');
                };

                // local user matched
                if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username != "null_local_user")) {
                    //alert('user matches local');

                    is_logged = localStorage.signed_in;

                    //alert('is_logged: ' + is_logged);
                    //alert('localStorage.signed_in: ' + localStorage.signed_in);

                    if (localStorage.signed_in == "true") {
                        //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');

                        if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
                            
                            validated_user = state.data.firebase.gnougn.library[i];
                            //alert('password match');
                            //alert('signing in: ' + validated_user.id + ', ' + validated_user.username);                            
                            //alert('validated_user id: ' + validated_user.id);
                        }
                    };

                    if (localStorage.signed_in == "false") {
                        //alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!')
                    };

                };



            };

        };

        return
    };

};

Generate_new_fragment = document.createDocumentFragment();


let Generate_test = () => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", 'Generate_test');

    ELEMENT.classList = "width_100 float_left position_relative";
    
    ELEMENT.innerHTML = "test";

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.addEventListener("click", function(event) {
        alert("Generate_test");
    });

    return ELEMENT
};

let Generate_posts_from_roster_id = (x) => {

    let return_groups_of_elements = document.createElement('div');

    let selected_library = [];

    if ((x) != null) {
        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

            let does_this_post_authors_match_roster_id = false;
            let current_library_loop = state.data.firebase.gnougn.library[i];

            for (var ii = 0; ii < current_library_loop.authors.length; ii++) {

                if (current_library_loop.child == "library") {

                    let current_library_loop_current_author_loop = current_library_loop.authors[ii];

                    if (current_library_loop_current_author_loop == x) {
                        does_this_post_authors_match_roster_id = true;
                    };

                };

            };

            if (does_this_post_authors_match_roster_id == true) {
                selected_library.push(current_library_loop);
            };

        };
    };

    if (selected_library.length > 0) {
        console.log('selected_library');
        console.log(selected_library);
    };


    for (var ii = 0; ii < selected_library.length; ii++) {

        let this_post = selected_library[ii];

        let selected_post = document.createElement('div');
        selected_post.setAttribute("id", this_post.id);
        selected_post.classList = "width_100 float_left position_relative";
        selected_post.innerHTML = `${'title: ' + this_post.title + 'id: ' + this_post.id}`;

        selected_post.addEventListener("click", function(event) {
            alert("selected_post");
        });

        return_groups_of_elements.appendChild(
            Generate_new_fragment.appendChild(selected_post)
        );

    };

    return return_groups_of_elements
};

let Generate_authors_from_post_id = (x) => {

    let return_groups_of_elements = document.createElement('li');

    let selected_authors = [];

    if ((x) != null) {
        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

            if (state.data.firebase.gnougn.library[i].id == x) {

                let selected_library_post = state.data.firebase.gnougn.library[i];

                for (var ii = 0; ii < selected_library_post.authors.length; ii++) {

                    selected_authors.push(selected_library_post.authors[ii]);

                };

            }
        }
    }


    let selected_library = [];

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        let does_this_post_authors_match_roster_id = false;
        let current_library_loop = state.data.firebase.gnougn.library[i];

        if (current_library_loop.child == "roster") {

            for (var ii = 0; ii < selected_authors.length; ii++) {

                if (selected_authors[ii] == current_library_loop.id) {
                    does_this_post_authors_match_roster_id = true;
                };

            };

        };

        if (does_this_post_authors_match_roster_id == true) {
            selected_library.push(current_library_loop);
        };

    };



    for (var ii = 0; ii < selected_library.length; ii++) {

        let this_post = selected_library[ii];

        let selected_post = document.createElement('li');
        selected_post.setAttribute("id", this_post.id);
        selected_post.classList = "width_100 float_left position_relative";
        selected_post.innerHTML = `${'id: ' + this_post.id}`;

        selected_post.addEventListener("click", function(event) {
            alert("selected_authors_of_post");
        });

        return_groups_of_elements.appendChild(
            Generate_new_fragment.appendChild(selected_post)
        );

    };

    return return_groups_of_elements
};

Generate_new_div = (data_Object, id_String, class_String) => {

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

Generate_new_li = (data_Object, id_String, class_String) => {

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
            ${data_Object}
        `;
    };

    return ELEMENT
};

Generate_new_post = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('div');
    ELEMENT.setAttribute("id", id_String);

    ELEMENT.classList = "position_relative float_left calc_2vw_width border_1vw_grey bg_white ";
                        
    if ((data_Object) != null) {

        if (data_Object.child == 'library') {

                if (data_Object.title) {
                    ELEMENT.innerHTML += `
                            
                        <div id="post_component" class="position_relative float_right height_20vw width_100 easing_01 easing_01">
                            
                            <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post stats
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_green">
                                <div class="position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey">
                                    <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                            </div>

                            <div class="hover_show position_absolute top_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post interaction
                                </div>
                            </div>

                        </div>

                    `;
                };

                if (data_Object.title) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                title: ${data_Object.title}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                time: ${data_Object.time}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                <div>Like/Dislike</div>
                                <div>Comment</div>
                                <div>Rate</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>Delete</div>
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                Post Authors:
                            </div>
                    `;
                };

                ELEMENT.appendChild(
                    Generate_new_fragment.appendChild(Generate_authors_from_post_id(data_Object.id))
                );

        };

        if (data_Object.child == 'roster') {

                if (data_Object.username) {
                    ELEMENT.innerHTML += `
                            
                        <div id="post_component" class="position_relative float_right height_20vw width_100 easing_01 easing_01">
                            
                            <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post stats
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_blue">
                                <div class="position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey">
                                    <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                            </div>

                            <div class="hover_show position_absolute top_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post interaction
                                </div>
                            </div>

                        </div>
                    `;
                };
                
                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Roster:
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        IDS:
                    </div>
                    `
                };

                if (data_Object.id) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        id: ${data_Object.id}
                    </div>
                    `
                };

                if (data_Object.username) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        username: ${data_Object.username}
                    </div>
                    `
                };
                    
                if (data_Object.password) {
                        ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            password: ${data_Object.password}
                        </div>
                    `
                };
                    
                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        values:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total follows:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total followers:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total retweeted:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total retweet:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total likes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total liked:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total dislikes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total disliked:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total flags:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total flagged:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total views:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total viewed:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        post count:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total comments made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total comments recieved:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total replys made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total replys recieved:
                    </div>

                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total message made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total message recieved:
                    </div>

                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total stream messages made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total stream messages recieved:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total time logged:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        last login:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        sign up date:
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `
                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        history:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history follows:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history followers:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history flypaper:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history flyer:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history likes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history dislikes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history flags:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history views:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of post made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of comments made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of stream messages:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of stream mentions:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of views:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of logins:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of logouts:
                    </div>
                    `
                };



                if (data_Object.time) {
                        ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        time: ${data_Object.time}
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Interactions:
                    </div>
                    `
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Like/Dislike</div>
                            <div>Comment</div>
                            <div>Rate</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>Delete</div>
                        </div>
                    `;
                };
                
                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Relative:
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Similars:
                    </div>
                    `
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>by tags of your post (as a creator):</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>by tags of your views (as a viewer):</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar time logged on site:</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar followers on site:</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar comments made on site:</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar comments received on site:</div>
                        </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Post from author:</div>
                        </div>
                    `;
                };

                ELEMENT.appendChild(
                    Generate_new_fragment.appendChild(Generate_posts_from_roster_id(data_Object.id))
                );

                ELEMENT.appendChild(
                    Generate_new_fragment.appendChild(Generate_test())
                );

                ELEMENT.addEventListener("click", function(event) {

                    document.getElementById('modal_page_right_container').innerHTML = ``;
                    document.getElementById('modal_page_right_container').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div'))
                    );

                    state.ui.modal.page.right.transform = false;
                    HANDLE_gui();
                });
        };
        
    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].addEventListener("click", function(event) {
        alert(data_Object);
    });


    let CONTAINER_ELEMENT = document.createElement('li');
    CONTAINER_ELEMENT.setAttribute("id", id_String);

    CONTAINER_ELEMENT.classList = "position_relative float_left width_33flex";

    CONTAINER_ELEMENT.appendChild(Generate_new_fragment.appendChild(ELEMENT));

    return CONTAINER_ELEMENT
};

Generate_validated_user = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", id_String);

    ELEMENT.classList = "width_100 float_left position_relative";

    if ((data_Object) != null) {

            if (data_Object.username) {
                ELEMENT.innerHTML += `

                <div id="post_component" class="position_relative float_right height_10vw width_100 easing_01 easing_01">
                    
                    <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                        <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                        </div>
                    </div>

                    <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                        <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        </div>
                    </div>

                </div>

                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                    username: ${data_Object.username}
                </div>
                `
            };
                
            if (data_Object.password) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        password: ${data_Object.password}
                    </div>
                `
            };
                
            if (data_Object.time) {
                    ELEMENT.innerHTML += `
                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                    time: ${data_Object.time}
                </div>
                `
            };

                ELEMENT.appendChild(
                    Generate_new_fragment.appendChild(Generate_test())
                );
    };


    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].addEventListener("click", function(event) {
        alert(data_Object);
    });

    return ELEMENT
};

// Handling
HANDLE_events = () => {
    // reacting to a combination of physical & events

    // filter by title
    if (document.getElementById('element_input_sort') != null) {
        document.getElementById('element_input_sort').addEventListener('keydown', (event) => {
            // filter library
            setTimeout(function() {
                state.data.sort = document.getElementById('element_input_sort').value
            }, 0);

        });
    };

    // filter by title
    if (document.getElementById('element_input_filter') != null) {
        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
            // filter library
            setTimeout(function() {
                handle_refresh_fire_data();
            }, 0);

        });
    };


        // filter by title
        if (document.getElementById('element_refresh') != null) {
            document.getElementById('element_refresh').addEventListener('click', (event) => {
                // filter library
                setTimeout(function() {
                    handle_refresh_fire_data();
                }, 0);

            });
        };


        // filter by title
        if (document.getElementById('element_login') != null) {
            document.getElementById('element_login').addEventListener('click', (event) => {
                
                let selected_username = (document.getElementById('element_login_username').value);
                let selected_password = (document.getElementById('element_login_password').value);


                for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

                    // local user matched
                    if ((state.data.firebase.gnougn.library[i].username ) == selected_username) {
                        
                        if ((state.data.firebase.gnougn.library[i].password ) == selected_password) {
                            //alert('logging in: ' + selected_username + selected_password);

                            localStorage.setItem("username", selected_username);
                            localStorage.setItem("password", selected_password);

                            localStorage.setItem("signed_in", "true");
                        };

                        if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                            //alert('not logging in: ' + selected_username + selected_password);

                            localStorage.setItem("username", "null_local_user");
                            localStorage.setItem("password", "xxx");

                            localStorage.setItem("signed_in", "false");
                        };

                    };

                };

                check_local_user();



            });
        };

        // filter by title
        if (document.getElementById('element_logout') != null) {
            document.getElementById('element_logout').addEventListener('click', (event) => {
                
                //alert('logging out');

                let selected_username = (document.getElementById('element_login_username').value);
                let selected_password = (document.getElementById('element_login_password').value);

                localStorage.setItem("username", localStorage.username);
                localStorage.setItem("password", "xxx");

                localStorage.setItem("signed_in", "false");
                validated_user = {};

                check_local_user();

            });
        };

        // filter by title
        if (document.getElementById('element_addListing') != null) {
            document.getElementById('element_addListing').addEventListener('click', (event) => {
                addListings('library');
            });
        };

};

HANDLE_animation = () => {
    // loops and darkmode exc.

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

    let HANDLE_looping_logo_mark_type = () => {

        // overall site frames by 24 frames
        (function() {
            let interval = 0;
            setInterval(
                function() {

                    if (state.app.dark_mode == false) {
                        if (interval == (1) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };
                        };

                        if (interval == (2) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };
                        };

                        if (interval == (3) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };
                        };

                        if (interval == (4) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };

                            interval = 0;
                        };
                    };

                    if (state.app.dark_mode == true) {
                        if (interval == (1) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };
                        };

                        if (interval == (2) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };
                        };

                        if (interval == (3) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                            };
                        };

                        if (interval == (4) ) {        
                            if (document.getElementById('row-logo-mark-type') != null) {
                                    document.getElementById('row-logo-mark-type').classList = (`
                                        gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
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
                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };
                        };

                        if (interval == (2) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };
                        };

                        if (interval == (3) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };
                        };

                        if (interval == (4) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };

                            interval = 0;
                        };
                    };

                    if (state.app.dark_mode == true) {
                        if (interval == (1) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };
                        };

                        if (interval == (2) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };
                        };

                        if (interval == (3) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };
                        };

                        if (interval == (4) ) {        
                            if (document.getElementById('row-logo-type') != null) {
                                    document.getElementById('row-logo-type').classList = (`
                                        gui_nav_logo_white_type position_relative float_left calc_1vw margin_05vw
                                    `);
                            };

                            interval = 0;
                        };
                    };

                    interval += 1;

                }, (1000 / 12));
        }());

    };

    HANDLE_looping_accent();
    HANDLE_looping_logo_mark();
    HANDLE_looping_logo_mark_type();
    HANDLE_looping_logo_type();

};

HANDLE_adaptive = () => {
    if (is_Desktop) {
        document.getElementById('modal_nav_top_left').classList = ('width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 easing_01');
        document.getElementById('modal_nav_bottom_left').classList = ('width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0 easing_01');
        document.getElementById('modal_nav_left').classList = ('width_1205vh height_100 float_left position_fixed left_0 bottom_0 transform_translate3d_left_0 easing_01');
        document.getElementById('modal_nav_right').classList = ('width_1205vh height_100 float_left position_fixed right_0 bottom_0 transform_translate3d_left_0 easing_01');
        document.getElementById('modal_page_top').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01');
        document.getElementById('modal_page_bottom').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01');
        document.getElementById('modal_page_left').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01');
        document.getElementById('modal_page_right').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01');
    };
    if (is_Mobile) {
        document.getElementById('modal_nav_top_left').classList = ('width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 easing_01');
        document.getElementById('modal_nav_bottom_left').classList = ('width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0 easing_01');
        document.getElementById('modal_nav_left').classList = ('width_1205vh height_100 float_left position_fixed left_0 bottom_0 transform_translate3d_left_0 easing_01');
        document.getElementById('modal_nav_right').classList = ('width_1205vh height_100 float_left position_fixed right_0 bottom_0 transform_translate3d_left_0 easing_01');
        document.getElementById('modal_page_top').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01');
        document.getElementById('modal_page_bottom').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_top_0 easing_01');
        document.getElementById('modal_page_left').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01');
        document.getElementById('modal_page_right').classList = ('width_100vw float_left position_fixed bottom_0 height_100vh transform_translate3d_left_0 easing_01');
    
    }; 
};

HANDLE_gui = () => {

    if (state.app.dark_mode == false) {

        if ((document.getElementById('bg-noise')) != null) {
            document.getElementById('bg-noise').classList = ('position_relative height_100vh width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_white');
        };

        if (root != null) {
            root.classList = ('position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_white');
        };

        if (document.getElementById('row-noise') != null) {
            document.getElementById('row-noise').innerHTML = `
                <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
            `
        };

        if (document.getElementById('after_fold_1') != null) {
            document.getElementById('after_fold_1').classList = ('position_relative width_100vw height_100vh float_left margin_auto gradient_white_top');
        };
        if (document.getElementById('after_fold_2') != null) {
            document.getElementById('after_fold_2').classList = ('position_relative width_100vw height_100vh float_left margin_auto bg_white');
        };

        if (document.getElementById('content') != null) {
            document.getElementById('content').classList = ('position_relative width_100vw float_left margin_auto bg_white');
        };

        if (document.getElementById('element_ol_firebase_all') != null) {
            document.getElementById('element_ol_firebase_all').classList = ('position_relative width_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('element_ol_firebase_all_library') != null) {
            document.getElementById('element_ol_firebase_all_library').classList = ('position_relative width_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('element_ol_firebase_all_users') != null) {
            document.getElementById('element_ol_firebase_all_users').classList = ('position_relative width_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('element_ol_firebase_validated_user') != null) {
            document.getElementById('element_ol_firebase_validated_user').classList = ('position_relative width_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('wp_content') != null) {
            document.getElementById('wp_content').classList = ('position_relative width_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_nav_top_left_container') != null) {
            document.getElementById('modal_nav_top_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_nav_bottom_left_container') != null) {
            document.getElementById('modal_nav_bottom_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_nav_left_container') != null) {
            document.getElementById('modal_nav_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_nav_right_container') != null) {
            document.getElementById('modal_nav_right_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_page_top_container') != null) {
            document.getElementById('modal_page_top_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_page_bottom_container') != null) {
            document.getElementById('modal_page_bottom_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_page_left_container') != null) {
            document.getElementById('modal_page_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_page_right_container') != null) {
            document.getElementById('modal_page_right_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

    };

    if (state.app.dark_mode == true) {
        
        if ((document.getElementById('bg-noise')) != null) {
            document.getElementById('bg-noise').classList = ('position_relative height_100vh width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_grey');
        };

        if (root != null) {
            root.classList = ('position_relative width_100vw float_left margin_auto overflow_y scrollbaryhidden bg_grey');
        };

        if (document.getElementById('row-noise') != null) {
            document.getElementById('row-noise').innerHTML = `
                <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
            `
        };
        
        if (document.getElementById('after_fold_1') != null) {
        document.getElementById('after_fold_1').classList = ('position_relative width_100vw height_100vh float_left margin_auto gradient_grey_top');
        };

        if (document.getElementById('after_fold_2') != null) {
            document.getElementById('after_fold_2').classList = ('position_relative width_100vw height_100vh float_left margin_auto bg_grey');
        };

        if (document.getElementById('content') != null) {
            document.getElementById('content').classList = ('position_relative width_100vw float_left margin_auto bg_grey');
        };

        if (document.getElementById('element_ol_firebase_all') != null) {
            document.getElementById('element_ol_firebase_all').classList = ('position_relative width_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('element_ol_firebase_all_library') != null) {
            document.getElementById('element_ol_firebase_all_library').classList = ('position_relative width_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('element_ol_firebase_all_users') != null) {
            document.getElementById('element_ol_firebase_all_users').classList = ('position_relative width_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('element_ol_firebase_validated_user') != null) {
            document.getElementById('element_ol_firebase_validated_user').classList = ('position_relative width_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('wp_content') != null) {
            document.getElementById('wp_content').classList = ('position_relative width_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_nav_top_left_container') != null) {
            document.getElementById('modal_nav_top_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_nav_bottom_left_container') != null) {
            document.getElementById('modal_nav_bottom_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };
        if (document.getElementById('modal_nav_left_container') != null) {
            document.getElementById('modal_nav_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_grey');
        };

        if (document.getElementById('modal_nav_right_container') != null) {
            document.getElementById('modal_nav_right_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_page_top_container') != null) {
            document.getElementById('modal_page_top_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_page_bottom_container') != null) {
            document.getElementById('modal_page_bottom_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_page_left_container') != null) {
            document.getElementById('modal_page_left_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };

        if (document.getElementById('modal_page_right_container') != null) {
            document.getElementById('modal_page_right_container').classList = ('position_absolute top_0 left_0 width_100 height_100 float_left margin_auto bg_white');
        };
        
    };


    if (is_Desktop) {
    };
    if (is_Mobile) {
    };

    if (state.ui.modal.nav.top.transform == true) {
        if (document.getElementById('modal_nav_top_left') != null) {
            document.getElementById('modal_nav_top_left').classList.remove('transform_translate3d_top_0');
            document.getElementById('modal_nav_top_left').classList.add('transform_translate3d_top_100');
        };
    };

    if (state.ui.modal.nav.top.transform == false) {
        if (document.getElementById('modal_nav_top_left') != null) {
            document.getElementById('modal_nav_top_left').classList.remove('transform_translate3d_top_100');
            document.getElementById('modal_nav_top_left').classList.add('transform_translate3d_top_0');
        };
    };

    if (state.ui.modal.nav.bottom.transform == true) {
        if (document.getElementById('modal_nav_bottom_left') != null) {
            document.getElementById('modal_nav_bottom_left').classList.remove('transform_translate3d_top_0');
            document.getElementById('modal_nav_bottom_left').classList.add('transform_translate3d_top100');
        };
    };

    if (state.ui.modal.nav.bottom.transform == false) {
        if (document.getElementById('modal_nav_bottom_left') != null) {
            document.getElementById('modal_nav_bottom_left').classList.remove('transform_translate3d_top100');
            document.getElementById('modal_nav_bottom_left').classList.add('transform_translate3d_top_0');
        };
    };

    if (state.ui.modal.nav.left.transform == false) {
        if (document.getElementById('modal_nav_right') != null) {
            document.getElementById('modal_nav_right').classList.remove('transform_translate3d_left100');
            document.getElementById('modal_nav_right').classList.add('transform_translate3d_left_0');
        };
    };

    if (state.ui.modal.nav.left.transform == true) {
        if (document.getElementById('modal_nav_right') != null) {
            document.getElementById('modal_nav_right').classList.remove('transform_translate3d_left_0');
            document.getElementById('modal_nav_right').classList.add('transform_translate3d_left100');
        };
    };

    if (state.ui.modal.nav.right.transform == false) {
        if (document.getElementById('modal_nav_left') != null) {
            document.getElementById('modal_nav_left').classList.remove('transform_translate3d_left_100');
            document.getElementById('modal_nav_left').classList.add('transform_translate3d_left_0');
        };
    };

    if (state.ui.modal.nav.right.transform == true) {
        if (document.getElementById('modal_nav_left') != null) {
            document.getElementById('modal_nav_left').classList.remove('transform_translate3d_left_0');
            document.getElementById('modal_nav_left').classList.add('transform_translate3d_left_100');
        };
    };

    if (state.ui.modal.page.top.transform == true) {
        if (document.getElementById('modal_page_top') != null) {
            document.getElementById('modal_page_top').classList.remove('transform_translate3d_top_0');
            document.getElementById('modal_page_top').classList.add('transform_translate3d_top_100');
        };
    };

    if (state.ui.modal.page.top.transform == false) {
        if (document.getElementById('modal_page_top') != null) {
            document.getElementById('modal_page_top').classList.remove('transform_translate3d_top_100');
            document.getElementById('modal_page_top').classList.add('transform_translate3d_top_0');
        };
    };

    if (state.ui.modal.page.bottom.transform == true) {
        if (document.getElementById('modal_page_bottom') != null) {
            document.getElementById('modal_page_bottom').classList.remove('transform_translate3d_top_0');
            document.getElementById('modal_page_bottom').classList.add('transform_translate3d_top100');
        };
    };

    if (state.ui.modal.page.bottom.transform == false) {
        if (document.getElementById('modal_page_bottom') != null) {
            document.getElementById('modal_page_bottom').classList.remove('transform_translate3d_top100');
            document.getElementById('modal_page_bottom').classList.add('transform_translate3d_top_0');
        };
    };

    if (state.ui.modal.page.left.transform == true) {
        if (document.getElementById('modal_page_left') != null) {
            document.getElementById('modal_page_left').classList.remove('transform_translate3d_left_0');
            document.getElementById('modal_page_left').classList.add('transform_translate3d_left100');
        };
    };

    if (state.ui.modal.page.left.transform == false) {
        if (document.getElementById('modal_page_left') != null) {
            document.getElementById('modal_page_left').classList.remove('transform_translate3d_left100');
            document.getElementById('modal_page_left').classList.add('transform_translate3d_left_0');
        };
    };

    if (state.ui.modal.page.right.transform == true) {
        if (document.getElementById('modal_page_right') != null) {
            document.getElementById('modal_page_right').classList.remove('transform_translate3d_left_0');
            document.getElementById('modal_page_right').classList.add('transform_translate3d_left_100');
        };
    };

    if (state.ui.modal.page.right.transform == false) {
        if (document.getElementById('modal_page_right') != null) {
            document.getElementById('modal_page_right').classList.remove('transform_translate3d_left_100');
            document.getElementById('modal_page_right').classList.add('transform_translate3d_left_0');
        };
    };
};

HANDLE_content = () => {

    if (state.app.content == 0) {
        if (document.getElementById('root') != null) {
            document.getElementById('root').innerHTML +=

           `
                <div id="route_bg" class="position_fixed top_0 left_0 width_100vw height_100vh float_left margin_auto z_index_-1">
                </div>
                <!-- wp content -->
                <div id="front_layer" class="position_relative width_100vw float_left margin_auto z_index_0">
                <!-- lead -->
                <div id="url_fold" class="position_relative width_100vw float_left margin_auto">
                </div>
                <!-- lead end -->
                <!-- lead -->
                <div id="id_fold" class="position_relative width_100vw float_left margin_auto">
                </div>
                <!-- lead end -->
                <!-- lead -->
                <div id="route_fold" class="position_relative width_100vw float_left margin_auto">
                   <!--
                      <div id="bg_filler" class="position_relative width_100vw height_100vh float_left margin_auto">
                      
                          <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                      
                              <div id="row-logo-mark_filler" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                      
                              <div id="row-logo-text_filler" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                      
                              <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                  <input id="gui_input_1" type="text" placeholder="hello" class="gui_input_1 position_absolute top_0 left_0 right_0 height_33vh width_33vw margin_auto"/>
                      
                                  <div class="position_absolute top_100 right_0 left_0 height_100 width_100 margin_auto">
                                      <div id="gui_input_2" class="gui_input_2 position_absolute top_0 right_0 left_0 height_50 width_50 margin_auto"></div>
                                  </div>
                              </div>
                      
                          </div>
                      
                      </div>
                      -->
                </div>
                <!-- lead end -->
                <!-- after lead -->
                <!-- after lead end -->
                <div id="content" class="position_relative width_100vw float_left margin_auto"></div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            <div class="position_relative width_100 float_left margin_auto bg_white">
                               element_ol_firebase_all
                            </div>
                            <div class="position_relative width_100 float_left margin_auto">
                               <div id="element_ol_firebase_all" class="position_relative width_100 float_left margin_auto"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            <div class="position_relative width_100 float_left margin_auto bg_white">
                               element_ol_firebase_all_library
                            </div>
                            <div class="position_relative width_100 float_left margin_auto">
                               <div id="element_ol_firebase_all_library" class="position_relative width_100 float_left margin_auto"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            <div class="position_relative width_100 float_left margin_auto bg_white">
                               element_ol_firebase_all_users
                            </div>
                            <div class="position_relative width_100 float_left margin_auto">
                               <div id="element_ol_firebase_all_users" class="position_relative width_100 float_left margin_auto"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            <div class="position_relative width_100 float_left margin_auto bg_white">
                               element_ol_firebase_validated_user
                            </div>
                            <div class="position_relative width_100 float_left margin_auto">
                               <div id="element_ol_firebase_validated_user" class="position_relative width_100 float_left margin_auto"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            Sort
                            <div class="position_relative width_100 float_left margin_auto">
                               <input id="element_input_sort" type="text" placeholder="element_input_sort" class="width_100 float_left" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            <div class="position_relative width_100 float_left margin_auto bg_white">
                               Filtering
                            </div>
                            <div class="position_relative width_100 float_left margin_auto">
                               <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />
                               <input id="element_login_username" type="text" placeholder="element_login_username" class="width_100 float_left" />
                               <input id="element_login_password" type="text" placeholder="element_login_password" class="width_100 float_left" />
                               <div id="element_refresh">refresh</div>
                               <div id="element_login">login</div>
                               <div id="element_logout">logout</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="position_relative width_100 float_left margin_auto bg_white">
                   <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                      <div class="position_relative float_left calc_10vw_width margin_5vw">
                         <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                            <div class="position_relative width_100 float_left margin_auto bg_white">
                               create post
                            </div>
                            <div class="position_relative width_100 float_left margin_auto">
                               <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" />
                               <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" />
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="position_relative width_100 float_left margin_auto bg_white">
                      <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                         <div class="position_relative float_left calc_10vw_width margin_5vw">
                            <div class="position_relative float_left calc_2vw_width border_1vw_grey">
                               <div class="position_relative width_100 float_left margin_auto">
                                  create user
                               </div>
                               <div class="position_relative width_100 float_left margin_auto">
                                  <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" />
                                  <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" />
                               </div>
                               <div class="position_relative width_100 float_left margin_auto">
                                  <div id="element_addListing">add listing</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div id="footer" class="position_relative height_100vh width_100vw float_left margin_auto"></div>
                </div>
                <div id="component_app_modals" class="">
                </div>
                <div id="loading" class="position_fixed top_0 left_0 height_100vh width_100vw float_left margin_auto bg bg_white">
                </div>

            `
        };

    };

    if (state.app.content == 1) {

        if (document.getElementById('route_fold') != null) {
            document.getElementById('route_fold').innerHTML = ``
        };

        if (document.getElementById('route_bg_content') != null) {
            document.getElementById('route_bg_content').innerHTML = ``
        };

        if (document.getElementById('fold_content') != null) {
            document.getElementById('fold_content').innerHTML = ``
        };

    };

};

HANDLE_modals = () => {
    // setting divs

    if (document.getElementById('component_app_modals') != null) {
        document.getElementById('component_app_modals').innerHTML = ``;
        
        let content;

        if (is_Desktop) {

            content = `

                <div id="modal_page_top" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0">
                   <div id="modal_page_top_container" class="">
                   </div>
                </div>
                <div id="modal_page_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0">
                   <div id="modal_page_bottom_container" class="">
                   </div>
                </div>
                <div id="modal_page_left" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_left_0">
                   <div id="modal_page_left_container" class="">
                   </div>
                </div>
                <div id="modal_page_right" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_left_0">
                   <div id="modal_page_right_container" class="">
                   </div>
                </div>
                <div id="modal_nav_top_left" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 easing_01">
                   <div id="modal_nav_top_left_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_6025 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_1205 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="row-logo-type" class="">
                            </div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_6025 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_6025 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_1205 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div class="gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_1205 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div class="gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_1205 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_1205 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_1205 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_6025 easing_01">
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div class="gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                         </div>
                      </div>
                   </div>
                </div>
                <div id="modal_nav_bottom_left" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0">
                   <div id="modal_nav_bottom_left_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_close_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_min_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                </div>
                <div id="modal_nav_left" class="z_index_6 width_1205vh float_left position_fixed top_0 height_100 transform_translate3d_left_0 easing_01">
                   <div id="modal_nav_left_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                </div>
                <div id="modal_nav_right" class="z_index_6 width_1205vh float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left_0">
                   <div id="modal_nav_right_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                      
                      <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                         </div>
                      </div>

                      <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                         <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                         </div>
                      </div>
                   </div>
                </div>

            `
        };

        if (is_Mobile) {

            content = `

                <div id="modal_page_top" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0">
                   <div id="modal_page_top_container" class="">
                   </div>
                </div>
                <div id="modal_page_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0">
                   <div id="modal_page_bottom_container" class="">
                   </div>
                </div>
                <div id="modal_page_left" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0">
                   <div id="modal_page_left_container" class="">
                   </div>
                </div>
                <div id="modal_page_right" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vw transform_translate3d_top_0">
                   <div id="modal_page_right_container" class="">
                   </div>
                </div>
                <div id="modal_nav_top_left" class="z_index_6 width_100vw float_left position_fixed top_0 height_1205vw transform_translate3d_top_0 easing_01">
                   <div id="modal_nav_top_left_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_705 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_1205 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">                              
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">                              
                           
                      </div>
                        <div id="row-logo-type" class="">
                        </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_blue">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_purple">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple">
                         <div id="row-toggle" class="float_right">
                            toggle
                         </div>
                      </div>
                   </div>
                </div>
                <div id="modal_nav_bottom_left" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0">
                   <div id="modal_nav_bottom_left_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_pink">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_pink">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_green">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_blue">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_orange">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_orange">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_purple">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple">
                      </div>
                   </div>
                </div>
                <div id="modal_nav_left" class="width_1205vh height_100 z_index_6 float_left position_fixed top_0 transform_translate3d_left_0 easing_01">
                   <div id="modal_nav_left_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_705 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_1205 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">                              
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">                              
                           
                      </div>
                        <div id="row-logo-type" class="">
                        </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_green">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_blue">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_right height_100 width_20 easing_01 bg_purple">
                      <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple">
                         <div id="row-toggle" class="float_right">
                            toggle
                         </div>
                      </div>
                   </div>
                </div>
                <div id="modal_nav_right" class="z_index_6 width_100vw float_left position_fixed right_0 bottom_0 height_6025vw transform_translate3d_left_0">
                   <div id="modal_nav_right_container" class="">
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_pink">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_pink">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_green">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_green">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_blue">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_blue">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_orange">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_orange">
                      </div>
                   </div>
                   <div id="hover_item" class="position_relative float_left height_100 width_20 easing_01 bg_purple">
                      <div class="hover_show position_fixed bottom_6025vw left_0 height_1205vw width_100vw easing_01 bg_purple">
                      </div>
                   </div>
                </div>

            `
        };

        document.getElementById('component_app_modals').appendChild(
            Generate_new_fragment.appendChild(Generate_new_div(content, "modal_nav", "position_fixed top_0 left_0"))
        );


        // filter by title
        setTimeout(function() {
            if (document.getElementById('row-logo-type') != null) {
                document.getElementById('row-logo-type').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.app.dark_mode = !state.app.dark_mode;
                        HANDLE_gui();
                    }, 0);

                });
            };

            if (document.getElementById('row-toggle') != null) {
                document.getElementById('row-toggle').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
                        HANDLE_gui();
                    }, 0);

                });
            };
        }, 101);


    };

};

HANDLE_physical = () => {
    // set dimensions based on resize
};

// order or operations
Handle_check_route = (route) => {

    (() => {

        if (route == '/') {

            if (document.getElementById('route_fold') != null) {

            };

            // console.log(state.data.firebase.gnougn.roster[i]);
            if (document.getElementById('route_bg') != null) {
            };

            setTimeout( () => {
            }, 101);

        };

        if (route == '/loaded') {

            setTimeout( () => {
                

                // determined by route
                if (document.getElementById('loading') != null) {
                    document.getElementById('loading').classList = "";
                };

                // determined by route
                if (document.getElementById('route_fold') != null) {
                    document.getElementById('route_fold').innerHTML = ``;

                    let route_background;

                    if (is_Desktop) {

                            route_background = `

                                <div id="fold" class="position_relative width_100vw height_100vh float_left margin_auto">
                                </div>
                                <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                                </div>
                                <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                                </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">
                                        Dane Cook
                                    </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">
                                        Dane Cook
                                    </div>

                                <div class="position_relative width_100vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">A Favor</div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">A Favor</div>

                                </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">
                                        Dane Cook
                                    </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">
                                        Dane Cook
                                    </div>

                                <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">A Favor</div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">A Favor</div>

                                </div>

                                <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">A Favor</div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">A Favor</div>
                                    
                                </div>
                                
                            `
                    };

                    if (is_Mobile) {

                            route_background = `

                                <div id="fold" class="position_relative width_100vw height_100vh float_left margin_auto">
                                </div>
                                <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                                </div>
                                <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                                </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">
                                        Dane Cook
                                    </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">
                                        Dane Cook
                                    </div>

                                <div class="position_relative width_100vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">A Favor</div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">A Favor</div>

                                </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">
                                        Dane Cook
                                    </div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">
                                        Dane Cook
                                    </div>

                                <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">A Favor</div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">A Favor</div>

                                </div>

                                <div class="position_relative width_50vw height_100vh float_left margin_auto overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">A Favor</div>

                                    <div id="compontent" class="position_relative height_100vh width_100vw float_left margin_auto bg_white">A Favor</div>
                                    
                                </div>
                                
                            `
                    };
                    
                    document.getElementById('route_fold').innerHTML += (route_background);

                };

                // determined by route
                if (document.getElementById('route_bg') != null) {
                    document.getElementById('route_bg').innerHTML = ``;

                    let content = `

                        <div id="bg-noise" class="position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>

                        <div id="row-noise" class="opacity_005">
                            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                        </div>

                        <div id="" class="gui_stage_tv position_fixed bottom_0 left_0 width_33vw height_33vh margin_auto"></div>
                        <div id="" class="gui_stage_lights position_fixed top_0 right_0 left_0 width_33vw height_33vh margin_auto"></div>
                        <div id="" class="gui_stage_desk position_fixed bottom_0 right_0 left_0 width_50vw height_50vh margin_auto"></div>

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div id="row-logo-mark-type_filler"></div>
                            
                            <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1_filler"></div>
                            </div>
                        </div>

                        <div id="bg-character" class="gui_character position_fixed bottom_0 right_0 width_50vw height_50vh margin_auto"></div>

                    `

                    document.getElementById('route_bg').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(content, "route_bg_content", "position_absolute top_0 left_0 width_100vw height_100vh"))
                    );
                };

                // determined by route
                if (document.getElementById('fold') != null) {
                    document.getElementById('fold').innerHTML = ``;

                    let content = `

                        
                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark_filler"></div>
                            <div id="row-logo-mark-type" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="bg-character" class="gui_character position_fixed bottom_0 left_0 width_50vw height_50vh margin_auto"></div>


                        <div id="element_scroll_y_scrollbar_styled" class="position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                            <div class="position_relative width_100 float_left">

                                <div id="bg-character" class="gui_character position_relative width_100 height_25vw margin_auto"></div>


                                <div id="bg-character" class="gui_character position_relative width_100 height_25vw margin_auto"></div>


                                <div id="bg-character" class="gui_character position_relative width_100 height_25vw margin_auto"></div>

                            </div>
                        </div>

                        <div class="position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow">
                            <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                                <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                
                                <div id="bg-character" class="gui_character position_relative width_50vw height_25vw margin_auto"></div>


                                <div id="bg-character" class="gui_character position_relative width_50vw height_25vw margin_auto"></div>


                                <div id="bg-character" class="gui_character position_relative width_50vw height_25vw margin_auto"></div>

                                </div>
                            </div>
                          </div>


                    `

                    document.getElementById('fold').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(content, "fold_content", "position_absolute top_0 left_0 width_100vw height_100vh"))
                    );

                    // filter by title
                    if (document.getElementById('gui_interaction_button_1') != null) {
                        document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {

                            state.app.content = 1;

                            HANDLE_content();

                        });
                    };

                };

            }, 0);

            setTimeout( () => {
                if (state.app.url != null) {
                    //alert('/loaded url: ' + state.app.url);
                    document.getElementById('url_fold').innerHTML += `
                        ${state.app.url}
                    `

                    if (state.app.id != null) {
                        //alert('/loaded user id: ' + state.app.id);
                        document.getElementById('id_fold').innerHTML += `
                            ${state.app.id}
                        `
                    };

                };
            }, 0);

            window.scrollTo(0, 0);
        };

        if (route == '/home') {

            setTimeout( () => {
                
                if (document.getElementById('route_fold') != null) {
                    document.getElementById('route_fold').innerHTML = `

                        <div id="fold" class="position_relative width_100vw height_100vh float_left margin_auto">
                        </div>
                        <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                        </div>
                        <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                        </div>

                    `;

                };

                // console.log(state.data.firebase.gnougn.roster[i]);
                if (document.getElementById('route_bg') != null) {
                    document.getElementById('route_bg').innerHTML = `

                        <div id="bg-noise" class="position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>

                        <div id="row-noise" class="opacity_005">
                            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                        </div>

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            </div>
                        </div>

                    `;
                };

            }, 0);

            setTimeout( () => {
                
                if (document.getElementById('route_fold') != null) {
                    document.getElementById('route_fold').innerHTML = `

                        <div id="fold" class="position_relative width_100vw height_100vh float_left margin_auto">
                        </div>
                        <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                        </div>
                        <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                        </div>

                    `;

                };

                // console.log(state.data.firebase.gnougn.roster[i]);
                if (document.getElementById('route_bg') != null) {
                    document.getElementById('route_bg').innerHTML = `

                        <div id="bg-noise" class="position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>

                        <div id="row-noise" class="opacity_005">
                            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                        </div>

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            </div>
                        </div>

                        <div id="" class="gui_stage_tv position_fixed bottom_0 left_0 width_33vw height_33vh margin_auto"></div>
                        <div id="" class="gui_stage_lights position_fixed top_0 right_0 left_0 width_33vw height_33vh margin_auto"></div>
                        <div id="" class="gui_stage_desk position_fixed bottom_0 right_0 left_0 width_50vw height_50vh margin_auto"></div>

                        <div id="bg-character" class="gui_character position_fixed bottom_0 right_0 width_50vw height_50vh margin_auto"></div>


                    `;
                };

            }, 2000);

            setTimeout( () => {
                
                if (document.getElementById('route_fold') != null) {
                    document.getElementById('route_fold').innerHTML = `

                        <div id="fold" class="position_relative width_100vw height_100vh float_left margin_auto">
                        </div>
                        <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                        </div>
                        <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                        </div>

                    `;

                };

                // console.log(state.data.firebase.gnougn.roster[i]);
                if (document.getElementById('route_bg') != null) {
                    document.getElementById('route_bg').innerHTML = `

                        <div id="bg-noise" class="position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>

                        <div id="row-noise" class="opacity_005">
                            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                        </div>

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            </div>
                        </div>

                    `;
                };

            }, 4000);

            setTimeout( () => {
                
                if (document.getElementById('route_fold') != null) {
                    document.getElementById('route_fold').innerHTML = `

                        <div id="fold" class="position_relative width_100vw height_100vh float_left margin_auto">
                        </div>
                        <div id="after_fold_1" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top">
                        </div>
                        <div id="after_fold_2" class="position_relative width_100vw height_100vh float_left margin_auto bg_white">
                        </div>

                    `;

                };

                // console.log(state.data.firebase.gnougn.roster[i]);
                if (document.getElementById('route_bg') != null) {
                    document.getElementById('route_bg').innerHTML = `

                        <div id="bg-noise" class="position_fixed top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>

                        <div id="row-noise" class="opacity_005">
                            <div id="row_accent_noise" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                            <div id="row_accent_noise_white" class="accent_noise_1 position_absolute top_0 left_0 bottom_0 right_0 width_100vw height_100vh margin_auto"></div>
                        </div>

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            </div>
                        </div>

                        <div id="" class="gui_stage_tv position_fixed bottom_0 left_0 width_33vw height_33vh margin_auto"></div>
                        <div id="" class="gui_stage_lights position_fixed top_0 right_0 left_0 width_33vw height_33vh margin_auto"></div>
                        <div id="" class="gui_stage_desk position_fixed bottom_0 right_0 left_0 width_50vw height_50vh margin_auto"></div>

                        <div id="bg-character" class="gui_character position_fixed bottom_0 right_0 width_50vw height_50vh margin_auto"></div>


                    `;
                };

                // determined by route
                if (document.getElementById('fold') != null) {
                    document.getElementById('fold').innerHTML = ``;

                    let content = `

                        
                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark_filler"></div>
                            <div id="row-logo-mark-type" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="bg-character" class="gui_character position_fixed bottom_0 left_0 width_50vw height_50vh margin_auto"></div>


                    `

                    document.getElementById('fold').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(content, "fold_content", "position_absolute top_0 left_0 width_100vw height_100vh"))
                    );

                    // filter by title
                    if (document.getElementById('gui_interaction_button_1') != null) {
                        document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {

                            state.app.content = 1;

                            HANDLE_content();

                        });
                    };

                };

            }, 6000);


            setTimeout( () => {
            }, 8000);

        };

})()};

Handle_return_state = () => { 
    return state
};

Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
};

window.onresize = () => {
    //alert('yup')
    HANDLE_gui();
    //HANDLE_modals();
    HANDLE_adaptive();
};

window.onload = () => {

    HANDLE_content();

    console.log(location);
    console.log(location.pathname);
    var parts = location.pathname.split('/');

    if (parts[1] == null) {
        state.app.url = '/';
    };

    if (parts[1] != null) {
        if (parts[1] != null) {
            state.app.url = parts[1];
            //alert('url:' + parts[1]);
            if (parts[2] != null) {
                //alert('id: ' + parts[2])
                state.app.id = parts[2];
            }
        }
    };


    Handle_check_route(state.app.route);

    handle_refresh_fire_data();
    handle_repeated_fire_data_validation;
    
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
                console.log(state.events.mouse.movetimer);
            };

            if (state.events.mouse.movetimer == 10) {
                //alert('too long');
            };

            console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer)

        }, 1000);
    })();

    //console.log(window);
    //console.log(screen);
    //console.log(screen.height);
    //console.log(screen.width);
    //console.log(navigator);
    //console.log(history);
    //console.log(history.length);
    //console.log(location);
    //console.log(location.pathname);
    //console.log(localStorage);

    localStorage.setItem("state", JSON.stringify(state));
    //console.log(localStorage.state);

    let local = JSON.parse(localStorage.state);
    console.log(local.app);


};

// Exports
export default {
    Handle_return_state,
    Handle_get_state_from_events,
    Handle_check_route,
    HANDLE_gui
}