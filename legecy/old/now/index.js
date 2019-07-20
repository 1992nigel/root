
// Imports
import style from './style.scss';
import imported_state from './imports/state';
import imported_functions from './imports/functions';
import imported_events from './imports/events';
import imported_components from './imports/components';


// Initalization

let root;
let state;
let config;
let functions;
let events;
let handle_Route;
let is_Desktop;
let is_Mobile;
let is_Landscape;
let is_Portrait;
let components;
let fb_writeable;
let fb_response;

// Assignment
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
 
let site_first_load = true;
let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;

root = document.getElementById('root');
state = imported_state.default_state;
functions = imported_functions;
events = imported_events;

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
is_Landscape = (window.innerHeight < window.innerWidth);
is_Portrait = (window.innerHeight > window.innerWidth);
components = imported_components;

// Functions
firebase.initializeApp(config);

let default_user = {
    "username" : "null_local_user",
    "password" : "xxx",
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg"
};

let addListings = (child) => {
    
    if (validated_user.id != null) {
        
        var current_second = new Date().getTime();
        let default_item;

        if (child == 'library') {
            default_item = {
                child : "library",
                id : 0,
                username : validated_user.id,
                password : validated_user.password,
                title : document.getElementById('create_post_title').value,
                tags : [document.getElementById('create_post_tag').value],
                time: current_second,
                authors : [ ""+`${validated_user.id}`+"" ]
            };
        };

        if (child == 'roster') {
            default_item = {
                child : "roster",
                id : 0,
                username : document.getElementById('create_user_username').value,
                password : document.getElementById('create_user_password').value,
                time: current_second,
                authors : [ ""+`${validated_user.id}`+"" ]
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

    document.getElementById('create_post_title').value = ``;
    document.getElementById('create_post_tag').value = ``;
    document.getElementById('create_user_username').value = ``;
    document.getElementById('create_user_password').value = ``;

};

let validated_user = {};
let validated_user_data = {};

let is_logged = false;
let first_time_user = true;
let is_null_user = true;

let filtered_library_by_title;

let handle_URL = () => {

    //alert('handle_URL')
    setTimeout( () => {
                
        console.log(location);
        console.log(location.pathname);
        var parts = location.pathname.split('/');

        console.log(parts);

        if (parts[1] != '' && parts[1] != 'home') {

            //alert('shouldnt be home:' +  parts[1])
            history.pushState({}, null, parts[1]);
            var parts = location.pathname.split('/');
            handle_Route('local_user_check');
            handle_Route(parts[1]);
            return
        };

        if (parts[1] == '' || parts[1] == 'home') {

            setTimeout(function() {

                handle_Route('local_user_check');
                //alert('you are already home: ' + parts[1]); // home

            }, 2500);

        };
        
        if (parts[2] != null) {
            //root.innerHTML = (parts[2]);
        };

        // back to fold for page change
        window.scrollTo(0, 0);
        console.log('done routing')


    }, 0);
}

let handle_empty_list = () => {

    filtered_library_by_title = [];

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

let sorted_library = (x) => {  return filtered_library_by_title.sort(find_sort(x)) };

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
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_post(filtered_library_by_title[i])
                            )
                        );

                };

                // filtered library
                for (var i = 0; i < filtered_library_by_title.length; i++) {

                    if (filtered_library_by_title[i].child == 'library') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_library').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_post(filtered_library_by_title[i])
                            )
                        );
                    };
                };

                // filtered roster
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {

                    if (sorted_library(state.data.sort)[i].child == 'roster') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_users').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_post(sorted_library(state.data.sort)[i])
                            )
                        );
                    };
                };

                if (validated_user.id != null) {
                    document.getElementById('element_ol_firebase_validated_user').appendChild(
                        functions.Generate_new_fragment.appendChild(
                            functions.Generate_validated_user(validated_user)
                        )
                    );
                };

                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user').innerHTML = `please sign in`
                };

                //alert('filter library')

            };

        }, 0);

    })();

};

let handle_refresh_fire_data = () => {
    
    handle_empty_list();

    let rootRef = firebase.database().ref();
    let gnougnRef = rootRef.child('gnougn');

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

                //console.clear();
                //clearInterval(handle_repeated_fire_data_validation);

                setTimeout(function() {
                    handle_firebase_render_to_view();
                    //console.clear();
                    //alert('contected!');
                }, 0);

                if (site_first_load == true) {
                    //Handle_check_route('/home');
                    site_first_load = false;
                    check_local_user();


                    //alert('first_time_user: ' + first_time_user);
                    //alert('is_logged: ' + is_logged);

                    handle_URL();
                    //handle_ID();
                };

                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);

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
        is_logged = false;
        first_time_user = true;

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

        first_time_user = false;
        //alert('welcome ' + 'returning user: ' + localStorage.username + '!');

        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

            if ((state.data.firebase.gnougn.library[i].child == "roster")) {

                // local user matched
                if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username == "null_local_user")) {
                    //alert('welcome back, create an account');
                    is_null_user = true;
                };

                // local user matched
                if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username != "null_local_user")) {
                    //alert('user matches local');

                    if (localStorage.signed_in == "true") {
                        //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');

                        if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
                            
                            validated_user = state.data.firebase.gnougn.library[i];
                            //alert('password match');
                            //alert('signing in: ' + validated_user.id + ', ' + validated_user.username);                            
                            //alert('validated_user id: ' + validated_user.id);
                            is_logged = true;
                            localStorage.signed_in = true;
                            //alert('is_logged: ' + is_logged);
                            //alert('localStorage.signed_in: ' + localStorage.signed_in);
                        }
                    };

                    if (localStorage.signed_in == "false") {
                        //alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!');
                        is_null_user = false;
                    };

                };



            };

        };

        return
    };
};

// null, loading, loaded, home, user, post, page
handle_Route = (x) => {

    state.app.url = x;

        if (state.app.url == '/') {

            // start asset preloader
            setTimeout( () => {
                handle_Route('loading');
            }, 0);

        };
        if (state.app.url == 'loading') {
            root.innerHTML = ('you are loading');

            // start asset preloader
            setTimeout( () => {
                handle_Route('loaded');
            }, 0);
        };
        if (state.app.url == 'loaded') {
            root.innerHTML = ('you are loaded');

            // start asset preloader
            setTimeout( () => {
                handle_Route('done');
            }, 0);
        };
        if (state.app.url == 'done') {

            root.innerHTML = ('you are done');


            // start asset preloader
            setTimeout( () => {
                handle_Route('home');
            }, 0);

        };

        if (state.app.url == 'home') {

            setTimeout( () => {
                    
                root.innerHTML = `

                    <div id="cardboard" class="width_100 height_100 position_fixed float_left">

                        <div bg="vr_bg" class="opacity_005">
                            <div id="row_accent_noise"></div>
                        </div>

                        <div id="vr_mg" class="transform_translate3d_top0  position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">
                        
                           <div id="column1" class="position_relative float_left width_100vw height_100vh ">
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing1 Left Top
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Left Center
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Left Bottom
                              </div>
                           </div>
                           <div id="column1" class="position_relative float_left width_100vw height_100vh">
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing1 Center Top
                              </div>
                              <div id="vr_mg_center" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                    <div id="container_object" class="position_absolute bottom_0 left_1205vw width_33vw height_33vh">
                                       <div id="object" class="gui_stage_tv width_100 height_100"></div>
                                    </div>
                                    <div id="container_object" class="position_absolute top_0 right_0 left_0 width_33vw height_33vh">
                                       <div id="object" class="gui_stage_lights width_100 height_100"></div>
                                    </div>
                                    <div id="container_object" class="position_absolute bottom_0 right_1205vw width_33vw height_33vh">
                                       <div id="object" class="gui_stage_desk width_100 height_100"></div>
                                    </div>
                                 </div>
                                 landing2 Center Mid
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Center Bottom
                              </div>
                           </div>
                           <div id="column1" class="position_relative float_left width_100vw height_100vh">
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing1 Right Top
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Right Mid
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Right Bottom
                              </div>
                           </div>

                        </div>

                        <div id="vr_fg" class="">

                            <div id="container_enemy" class="position_absolute">
                                <div id="enemy" class="gui_character"></div>
                            </div>

                            <div id="container_character" class="position_absolute ">
                                <div id="character" class="gui_character"></div>
                            </div>

                        </div>


                        <div id="vr_branding" class="">
                            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                                <div id="row-logo-mark-type_filler"></div>
                                
                                <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                    <div id="gui_interaction_button_1_filler"></div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div id="scrollable" class="position_relative height_100vh width_100vw margin_auto overflow_y">
                        
                        <div class="position_relative width_100vw margin_auto">
                            
                            <div id="fold" class="position_relative height_100vh width_100vw margin_auto">

                                <div id="fold_interaction" class="position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto">
                                    
                                    <div id="fold_interaction_home" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                                        <div id="row-logo-mark_filler"></div>
                                        <div id="row_logo_mark_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                                        
                                        <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                            <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div id="signal">element_ol_firebase_all: <div id="element_ol_firebase_all"></div></div>
                            <div id="signal">element_ol_firebase_all_library: <div id="element_ol_firebase_all_library"></div></div>
                            <div id="signal">element_ol_firebase_all_users: <div id="element_ol_firebase_all_users"></div></div>
                            <div id="signal">element_ol_firebase_validated_user: <div id="element_ol_firebase_validated_user"></div></div>
                            <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />

                    <h2 class="width_100 float_left">Login</h2>
                    <input id="element_login_username" type="text" placeholder="element_login_username" class="width_100 float_left" />
                    <input id="element_login_password" type="text" placeholder="element_login_password" class="width_100 float_left" />

                    <h2 class="width_100 float_left">Create User</h2>
                    <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" />
                    <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" />

                    <h2 class="width_100 float_left">Create Post</h2>
                    <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" />
                    <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" />

                    <h2 class="width_100 float_left">Buttons</h2>
                    <div id="element_refresh" class="width_100 float_left">refresh</div>
                    <div id="element_login" class="width_100 float_left">login</div>
                    <div id="element_logout" class="width_100 float_left">logout</div>
                    <div id="element_addListing" class="width_100 float_left">element_addListing</div>
                    <div id="element_addRoster" class="width_100 float_left">element_addRoster</div>

                            <div id="signal">event_route: <div id="event_route">${('you are at: ' + state.app.url)}</div></div>

                            <h1>Platform</h1>
                            <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
                            <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
                            <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
                            <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
                            <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
                            <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
                            <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
                            <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

                            <h1>Device</h1>
                            <h2>Gravity</h2>
                            <div id="signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
                            <div id="signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
                            <div id="signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

                            <h2>VR</h2>
                            <div id="signal">last_action: <div id="last_action"></div></div>

                            <h2>Positions</h2>
                            <div id="signal">event_alpha: <div id="event_alpha"></div></div>
                            <div id="signal">event_beta: <div id="event_beta"></div></div>
                            <div id="signal">event_gamma: <div id="event_gamma"></div></div>

                            <h2>Orientation</h2>
                            <div id="signal">event_portrait: <div id="event_portrait"></div></div>
                            <div id="signal">event_landscape: <div id="event_landscape"></div></div>

                            <h2>Orientations</h2>
                            <div id="signal">event_orientation: <div id="event_orientation"></div></div>

                            <h2>Events</h2>
                            <div id="signal">history_scroll: <div id="history_scroll"></div></div>
                            <div id="signal">history_mouse: <div id="history_mouse"></div></div>
                            <div id="signal">history_mouse_enter: <div id="history_mouse_enter"></div></div>
                            <div id="signal">history_mouse_leave: <div id="history_mouse_leave"></div></div>
                            <div id="signal">history_mouse_up: <div id="history_mouse_up"></div></div>
                            <div id="signal">history_mouse_down: <div id="history_mouse_down"></div></div>
                            <div id="signal">history_mouse_up_move: <div id="history_mouse_up_move"></div></div>
                            <div id="signal">history_mouse_down_move: <div id="history_mouse_down_move"></div></div>
                            <div id="signal">history_mouse_drag_drop: <div id="history_mouse_drag_drop"></div></div>
                            <div id="signal">history_key: <div id="history_key"></div></div>
                            <div id="signal">history_key_up: <div id="history_key_up"></div></div>
                            <div id="signal">history_touch: <div id="history_touch"></div></div>
                            <div id="signal">history_touch_start: <div id="history_touch_start"></div></div>
                            <div id="signal">history_touch_end: <div id="history_touch_end"></div></div>
                            <div id="signal">history_touch_drag_drop: <div id="history_touch_drag_drop"></div></div>
                            <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
                            <div id="signal">current_duration: <div id="current_duration"></div></div>
                            <div id="signal">time_onload: <div id="time_onload"></div></div>
                            <div id="signal">time: <div id="time"></div></div>

                            <h2>Game Character</h2>

                            <div id="signal">interaction_character_clientX: <div id="interaction_character_clientX"></div></div>
                            <div id="signal">interaction_character_clientY: <div id="interaction_character_clientY"></div></div>
                            
                            <h2>Game Dice</h2>

                            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
                            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
                            
                            <h2>Game Snake</h2>

                            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
                            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
                            
                            <h2>Game Bounce</h2>

                            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
                            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>

                            <h2>Game Pen & Pencils</h2>

                            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
                            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
                            
                            <h2>Game Unlock/lock</h2>

                            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
                            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>

                            <h2>Inspired By:</h2>

                            <div id="signal">my baby moms</div>
                            <div id="signal">The dude that made reddit</div>
                            <div id="signal">g4TV</div>
                            <div id="signal">Rebel Fm</div>
                            <div id="signal">Adam Sessler</div>
                            <div id="signal">CoryX</div>
                            <div id="signal">Tony Ferguson</div>
                            <div id="signal">Henry Cejudo</div>
                            <div id="signal">Plants vs Zombies</div>


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
                                                            
                        </div>

                        <div id="bg_gradient" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top"></div>
                    
                        <div id="bg" class="position_relative width_100vw height_100vh float_left margin_auto bg_white"></div>

                        <div class="position_relative height_100vh width_100vw float_left margin_auto bg_grey">
                        </div>

                    </div>

                    <div id="gui_controls">

                        <div id="gui_top" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 display_none opacity_0">
                           <div id="gui_top_container" class="">
                           </div>
                           <div id="hover_item_top" class="position_relative float_left height_100 width_6025 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
                              <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                                 <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                                    <div id="logo_type" class="">
                                    </div>
                                 </div>
                              </div>
                              <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                                 <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                                 </div>
                              </div>
                           </div>
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 ">
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
                        <div id="gui_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top0 display_none opacity_0">
                           <div id="gui_bottom_container" class="">
                           </div>
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom" class="position_relative float_left height_100 width_20 ">
                              
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
                        <div id="gui_left" class="z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left0 display_none opacity_0">
                           <div id="gui_left_container" class="">
                           </div>
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                        <div id="gui_right" class="z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left0 display_none opacity_0">
                           <div id="gui_right_container" class="">
                           </div>
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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

                    </div>

                    <div id="modals" class="">

                        <div id="modal_nav_top" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 display_none opacity_0">
                           <div id="modal_nav_top_container" class="">
                           </div>
                           <div id="hover_item_top" class="position_relative float_left height_100 width_6025 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
                              <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                                 <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                                    <div id="logo_type" class="">
                                    </div>
                                 </div>
                              </div>
                              <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                                 <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                                 </div>
                              </div>
                           </div>
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 ">
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
                           <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 ">
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
                        <div id="modal_nav_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top0 display_none opacity_0">
                           <div id="modal_nav_bottom_container" class="">
                           </div>
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 ">
                              
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
                           <div id="hover_item_bottom" class="position_relative float_left height_100 width_20 ">
                              
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
                        <div id="modal_nav_left" class="z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left0 display_none opacity_0">
                           <div id="modal_nav_left_container" class="">
                           </div>
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                        <div id="modal_nav_right" class="z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left0 display_none opacity_0">
                           <div id="modal_nav_right_container" class="">
                           </div>
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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
                           <div id="hover_item" class="position_relative float_left height_20 width_100 ">
                              
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

                        <div id="component_app_modal_element_pop_top" class="position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 ">

                            <div id="component_here" class="position_absolute bottom_0 left_0 calc_25vh margin_1205vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                                <div class="position_relative width_100 float_left">

                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>

                                </div>
                            </div>

                        </div>
                        <div id="component_app_modal_element_pop_bottom" class="position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 ">

                            <div id="component_here" class="position_absolute bottom_0 left_0 calc_25vh margin_1205vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                                <div class="position_relative width_100 float_left">

                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>

                                </div>
                            </div>

                        </div>
                        <div id="component_app_modal_element_pop_left" class="position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 ">

                            <div id="component_app_modal_element_pop_left_style" class="position_absolute bottom_0 left_0 top_0 right_0 calc_25vh margin_auto float_right display opacity_1 bg_white border_01vw_black">
                                <div id="component_app_modal_element_pop_left_component_here" class="position_absolute bottom_0 left_0 top_0 right_0 calc_02vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1 bg_white">
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 width_25 height_25">
                                <div id="bg-character" class="gui_character_1 position_relative width_100 height_100 margin_auto"></div>
                            </div>

                        </div>
                        <div id="component_app_modal_element_pop_right" class="position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0 ">

                            <div id="component_here" class="position_absolute bottom_0 left_0 calc_25vh margin_1205vh overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                                <div class="position_relative width_100 float_left">

                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>

                                </div>
                            </div>

                        </div>

                        <div id="component_app_modal_element_page_top" class="position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0">
                        </div>
                        <div id="component_app_modal_element_page_bottom" class="position_fixed transform_translate3d_top0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0">
                        </div>
                        <div id="component_app_modal_element_page_left" class="position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0">
                        </div>
                        <div id="component_app_modal_element_page_right" class="position_fixed transform_translate3d_left0 height_100vh width_100vw float_left margin_auto bg_grey display_none opacity_0 top_0 left_0">
                        </div>

                    </div>
                `

                    document.getElementById('scrollable').addEventListener('scroll', (event) => {
                        events.handle_Function_Scroll(event);
                        Handle_get_state_from_events();
                    });

                    document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                        //alert('going gui_interaction_button_1')
                        handle_Route('local_user_check');
                    });

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
                            
                            //alert('element_login');
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

                    // create
                    if (document.getElementById('element_addRoster') != null) {
                        document.getElementById('element_addRoster').addEventListener('click', (event) => {
                            addListings('roster');
                        });
                    };

                // inital firebase check
                handle_refresh_fire_data();
                handle_repeated_fire_data_validation;

                // inital gui
                Handle_ui_reset();

                setTimeout(function() {
                    state.ui.gui.top.transform = false;
                    state.ui.gui.top.display = true;
                    Handle_ui();

                }, 1000);

                setTimeout(function() {
                    state.ui.modal.nav.top.transform = false;
                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.pop.top.transform = false;
                    state.ui.modal.pop.top.display = true;
                    Handle_ui();
                }, 2000);

            }, 0);

            if ((document.getElementById('time_onload')) != null ) {
                document.getElementById('time_onload').innerHTML = state.data.time;
            };

            // functions fired at "home"
            Handle_transform();
            Handle_display_with_delay();
            functions.HANDLE_looping_logo_mark();

        };

        if (state.app.url == 'local_user_check') {

            
            if (first_time_user == true) {

                //alert('first_time_user == true');


                document.getElementById('vr_branding').innerHTML = `

                    <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                        <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                        <div id="row-logo-mark-type_filler"></div>
                        
                        <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="gui_interaction_button_1_filler"></div>
                        </div>
                    </div>
                    `


                document.getElementById('fold_interaction').innerHTML = `

                    <div id="first_time_user_true" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                        <div id="row-logo-mark_filler"></div>
                        <div id="row_logo_mark_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                        
                        <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                        </div>
                    </div>

                `

                document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                    //alert('next route from local_user_check: first_time_user == true');
                    handle_Route('local_user_check');
                });
            };

            if (first_time_user == false) {

                if (is_logged == true) {
                    //alert('is_logged == true');

                    document.getElementById('vr_branding').innerHTML = `

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div id="row-logo-mark-type_filler"></div>
                            
                            <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1_filler"></div>
                            </div>
                        </div>

                    `

                    document.getElementById('fold_interaction').innerHTML = `

                        <div id="is_logged_true">
                            <div class="position_absolute top_0 right_0 calc_25vw_height calc_25vw_width margin_auto">

                                <div class="gui_logo_mark position_relative height_50 width_100 float_left margin_auto"></div>                                
                            
                                <div class="position_relative height_50 width_100 float_left margin_auto">
                                    <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_relative float_left width_100 height_100 margin_auto"></div>
                                </div>
                            
                            </div>

                            <div id="element_scroll_y_scrollbar_styled" class="position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                                <div class="position_relative width_100 float_left">

                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>

                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow">
                                <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                                    <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    `

                    // events fro route: home
                    if (document.getElementById('gui_interaction_button_1') != null) {
                        document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                            //alert('next route from local_user_check: is_logged == true');
                        });
                    };

                };

                if (is_logged == false) {

                    //alert('is_logged == false');
                    if (localStorage.username == "null_local_user") {

                        //alert('you are null_local_user, corrent? please sign up');
                        document.getElementById('vr_branding').innerHTML = `

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div id="row-logo-mark-type_filler"></div>
                            
                            <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1_filler"></div>
                            </div>
                        </div>
                        `

                        document.getElementById('fold_interaction').innerHTML = `

                            <div id="is_logged_false" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="row-logo-mark_filler"></div>
                                <div id="row_logo_mark_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                                
                                <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                    <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                                </div>
                            </div>

                        `

                        document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                            //alert('next route from local_user_check: is_logged == true');
                        });

                    };

                    if (localStorage.username != "null_local_user") {

                        //alert('you are ' + localStorage.username + ', corrent? please sign back in.');
                        document.getElementById('vr_branding').innerHTML = `

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div id="row-logo-mark-type_filler"></div>
                            
                            <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1_filler"></div>
                            </div>
                        </div>
                        `

                        document.getElementById('fold_interaction').innerHTML = `

                            <div id="is_logged_false" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="row-logo-mark_filler"></div>
                                <div id="row_logo_mark_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                                
                                <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                    <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                                </div>
                            </div>

                        `

                        document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                            //alert('next route from local_user_check: is_logged == true');
                        });

                    };
                };
            };

            alert('local_user_check');
            window.scrollTo(0, 0);

        };

        if (state.app.url == 'users') {
        
            setTimeout( () => {
                    
                document.getElementById('fold').innerHTML = `

                    <div id="fold_interaction" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                        <div id="row-logo-mark_filler"></div>
                        <div id="row_logo_mark_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                        
                        <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                        </div>
                    </div>

                `

                document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                    handle_Route('local_user_check');
                });

            });

        };


        if (state.app.url == 'users_start') {
            
                setTimeout( () => {
                        
                    document.getElementById('fold').innerHTML = `
                    
                        <div id="vr_interaction" class="">
                            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                                <div id="row-logo-mark-type_filler"></div>
                                
                                <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                    <div id="gui_interaction_button_1_filler"></div>
                                </div>
                            </div>

                            <div id="element_scroll_y_scrollbar_styled" class="position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                                <div class="position_relative width_100 float_left">

                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>

                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow">
                                <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                                    <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    `

                    document.getElementById('vr_interaction').addEventListener('click', (event) => {
                        handle_Route('local_user_check');
                    });

            });

        };

    
    // back to fold for page change
    window.scrollTo(0, 0);


};

let Handle_ui_reset = () => {

    // gui
    state.ui.gui.top.transform = true;
    state.ui.gui.top.display = false;
    state.ui.gui.bottom.transform = true;
    state.ui.gui.bottom.display = false;
    state.ui.gui.left.transform = true;
    state.ui.gui.left.display = false;
    state.ui.gui.right.transform = true;
    state.ui.gui.right.display = false;

    state.ui.modal.nav.top.transform = true;
    state.ui.modal.nav.top.display = false;
    state.ui.modal.nav.bottom.transform = true;
    state.ui.modal.nav.bottom.display = false;
    state.ui.modal.nav.left.transform = true;
    state.ui.modal.nav.left.display = false;
    state.ui.modal.nav.right.transform = true;
    state.ui.modal.nav.right.display = false;

    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.top.display = false;
    state.ui.modal.page.bottom.transform = true;
    state.ui.modal.page.bottom.display = false;
    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.left.display = false;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.right.display = false;

    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.top.display = false;
    state.ui.modal.pop.bottom.transform = true;
    state.ui.modal.pop.bottom.display = false;
    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.left.display = false;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.right.display = false;

};

let Handle_data_value = () => {

    // ux
    if ((document.getElementById('is_Desktop')) != null ) {
        document.getElementById('is_Desktop').innerHTML = state.ux.platform.is_Desktop;
    };
    if ((document.getElementById('is_Mobile')) != null ) {
        document.getElementById('is_Mobile').innerHTML = state.ux.platform.is_Mobile;
    };
    if ((document.getElementById('history_scroll')) != null ) {
        document.getElementById('history_scroll').innerHTML = state.events.scroll.history;
    };
    if ((document.getElementById('history_mouse')) != null ) {
        document.getElementById('history_mouse').innerHTML = state.events.mouse.history;
    };
    if ((document.getElementById('history_mouse_enter')) != null ) {
        document.getElementById('history_mouse_enter').innerHTML = state.events.mouse_enter.history;
    };
    if ((document.getElementById('history_mouse_leave')) != null ) {
        document.getElementById('history_mouse_leave').innerHTML = state.events.mouse_leave.history;
    };
    if ((document.getElementById('history_mouse_up')) != null ) {
        document.getElementById('history_mouse_up').innerHTML = state.events.mouse_up.history;
    };
    if ((document.getElementById('history_mouse_down')) != null ) {
        document.getElementById('history_mouse_down').innerHTML = state.events.mouse_down.history;
    };
    if ((document.getElementById('history_mouse_up_move')) != null ) {
        document.getElementById('history_mouse_up_move').innerHTML = state.events.mouse_up_move.history;
    };
    if ((document.getElementById('history_mouse_down_move')) != null ) {
        document.getElementById('history_mouse_down_move').innerHTML = state.events.mouse_down_move.history;
    };
    if ((document.getElementById('history_mouse_drag_drop')) != null ) {
        document.getElementById('history_mouse_drag_drop').innerHTML = state.events.mouse_drag_drop.history;
    };
    if ((document.getElementById('history_key')) != null ) {
        document.getElementById('history_key').innerHTML = state.events.key.history;
    };
    if ((document.getElementById('history_key_up')) != null ) {
        document.getElementById('history_key_up').innerHTML = state.events.key_up.history;
    };
    if ((document.getElementById('history_touch')) != null ) {
        document.getElementById('history_touch').innerHTML = state.events.touch.history;
    };
    if ((document.getElementById('history_touch_start')) != null ) {
        document.getElementById('history_touch_start').innerHTML = state.events.touch_start.history;
    };
    if ((document.getElementById('history_touch_end')) != null ) {
        document.getElementById('history_touch_end').innerHTML = state.events.touch_end.history;
    };
    if ((document.getElementById('history_touch_drag_drop')) != null ) {
        document.getElementById('history_touch_drag_drop').innerHTML = state.events.touch_drag_drop.history;
    };
    if ((document.getElementById('current_frame_motion')) != null ) {
        document.getElementById('current_frame_motion').innerHTML = state.motion.frame;
    };
    if ((document.getElementById('current_duration')) != null ) {
        document.getElementById('current_duration').innerHTML = state.motion.duration;
    };

    if ((document.getElementById('time')) != null ) {
        document.getElementById('time').innerHTML = state.data.time;
    };

    if ((document.getElementById('ux_dimensions_height')) != null ) {
        document.getElementById('ux_dimensions_height').innerHTML = state.ux.dimensions.height;
    };
    
    if ((document.getElementById('ux_dimensions_width')) != null ) {
        document.getElementById('ux_dimensions_width').innerHTML = state.ux.dimensions.width;
    };
    
    if ((document.getElementById('ux_browser_height')) != null ) {
        document.getElementById('ux_browser_height').innerHTML = state.ux.browser.height;
    };
    
    if ((document.getElementById('ux_browser_width')) != null ) {
        document.getElementById('ux_browser_width').innerHTML = state.ux.browser.width;
    };

    if ((document.getElementById('ux_screen_height')) != null ) {
        document.getElementById('ux_screen_height').innerHTML = state.ux.screen.height;
    };
    
    if ((document.getElementById('ux_screen_width')) != null ) {
        document.getElementById('ux_screen_width').innerHTML = state.ux.screen.width;
    };

    // interaction
    if ((document.getElementById('interaction_character_clientX')) != null ) {
        document.getElementById('interaction_character_clientX').innerHTML = state.ui.interaction.player_1.clientX;
    };

    if ((document.getElementById('interaction_character_clientY')) != null ) {
        document.getElementById('interaction_character_clientY').innerHTML = state.ui.interaction.player_1.clientY;
    };

    // events
    if ((document.getElementById('event_accelerationIncludingGravity_x')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_x').innerHTML = state.events.motion.event_accelerationIncludingGravity_x;
    };

    if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_y').innerHTML = state.events.motion.event_accelerationIncludingGravity_y;
    };

    if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_z').innerHTML = state.events.motion.event_accelerationIncludingGravity_z;
    };

    if ((document.getElementById('last_action')) != null ) {
        if (state.events.motion.event_accelerationIncludingGravity_x > 8) {
            document.getElementById('last_action').innerHTML = 'shook right';
        };
        if (state.events.motion.event_accelerationIncludingGravity_x < -8) {
            document.getElementById('last_action').innerHTML = 'shook left';
        };
        if (state.events.motion.event_accelerationIncludingGravity_y > 8) {
            document.getElementById('last_action').innerHTML = 'upside down';
        };
        if (state.events.motion.event_accelerationIncludingGravity_y < -8) {
            document.getElementById('last_action').innerHTML = 'rightside up';
        };
        if (state.events.motion.event_accelerationIncludingGravity_z > 8) {
            document.getElementById('last_action').innerHTML = 'overhead';
        };
        if (state.events.motion.event_accelerationIncludingGravity_z < -8) {
            document.getElementById('last_action').innerHTML = 'laid flat';
        };
    };

    if ((document.getElementById('event_alpha')) != null ) {
        document.getElementById('event_alpha').innerHTML = state.events.motion.event_alpha;
    };
    if ((document.getElementById('event_beta')) != null ) {
        document.getElementById('event_beta').innerHTML = state.events.motion.event_beta;
    };
    if ((document.getElementById('event_gamma')) != null ) {
        document.getElementById('event_gamma').innerHTML = state.events.motion.event_gamma;
    };
    if(state.ux.orientation.is_Landscape){
        if ((document.getElementById('event_portrait')) != null ) {
            document.getElementById('event_portrait').innerHTML = `'this is not portrait.'`;
        };
        if ((document.getElementById('event_landscape')) != null ) {
            document.getElementById('event_landscape').innerHTML = `'this is landscape.'`;
        };
    };
    if(state.ux.orientation.is_Portrait){
        if ((document.getElementById('event_portrait')) != null ) {
            document.getElementById('event_portrait').innerHTML = `'this is portrait.'`;
        };
        if ((document.getElementById('event_landscape')) != null ) {
            document.getElementById('event_landscape').innerHTML = `'this is not landscape.'`;
        };
    };
    
    if ((document.getElementById('event_orientation')) != null ) {
        if ( state.events.motion.orientation_string == 0 ) {
                document.getElementById('event_orientation').innerHTML ='Portrait Mode, Home Button bottom';
        }
        else if ( state.events.motion.orientation_string == 90 ) {
                document.getElementById('event_orientation').innerHTML ='Landscape Mode, Home Button right';
        }
        else if ( state.events.motion.orientation_string == -90 ) {
                document.getElementById('event_orientation').innerHTML ='Landscape Mode, Home Button left';
        }
        else if ( state.events.motion.orientation_string == 180 ) {
                document.getElementById('event_orientation').innerHTML ='Portrait Mode, Home Button top';
        }
    };
};

// placeholder data
let noise_frame = 0;
let chracter_frame = 0;

let handle_Motion = () => {

    // framerate loop
    (function() {
        let interval = 0;
        setInterval(
            function() {
                
                state.motion.frame += 1;
                Handle_data_value();

                if (document.getElementById('row_accent_noise') != null) {
                    document.getElementById('row_accent_noise').innerHTML = '';
                    document.getElementById('row_accent_noise').classList = ('accent_noise_'+noise_frame+ ' position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 ');
                    if (noise_frame == 4) {
                        noise_frame = 0;
                    };
                    noise_frame += 1;
                };

                if (document.getElementById('character') != null) {
                    document.getElementById('character').innerHTML = '';

                    if (state.ui.interaction.player_1.angle == 'left') {
                        document.getElementById('character').classList = ('gui_character_left_'+chracter_frame+ ' position_absolute margin_auto width_100 height_100 ');
                    };

                    if (state.ui.interaction.player_1.angle == 'right') {
                        document.getElementById('character').classList = ('gui_character_right_'+chracter_frame+ ' position_absolute margin_auto width_100 height_100 ');
                    };

                    if (chracter_frame == 4) {
                        chracter_frame = 0;
                    };

                    chracter_frame += 1;
                };

                if (document.getElementById('enemy') != null) {
                    document.getElementById('enemy').innerHTML = '';
                    document.getElementById('enemy').classList = ('gui_character_'+chracter_frame+ ' position_absolute margin_auto width_100 height_100 ');

                    if (chracter_frame == 4) {
                        chracter_frame = 0;
                    };

                    chracter_frame += 1;
                };

                // set positions
                // character
                if (document.getElementById('container_character') != null) {
                    let container_character = document.getElementById('container_character');
                    container_character.style =
                        'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.ui.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.ui.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
                };
                
                // enemy
                if (document.getElementById('container_enemy') != null) {
                    let container_enemy = document.getElementById('container_enemy');
                    container_enemy.style =
                        'height: ' + (state.ui.interaction.player_2.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.ui.interaction.player_2.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.ui.interaction.player_2.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.ui.interaction.player_2.clientX * (state.ux.dimensions.width8)) + 'px;';
                };
                // vr
                if (document.getElementById('vr_mg') != null) {
                    document.getElementById('vr_mg').style = "transform: translate3d(" +
                        (state.ui.interaction.vr.clientX * 100) + "%, " +
                        (state.ui.interaction.vr.clientY * 100) + "%, 0);"
                };

            }, (1000 / state.motion.framerate));
    }());


    // 1 sec loop
    (function() {
        let interval = 0;
        setInterval(
            function() {
                
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date = new Date();
                state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

                state.motion.duration ++;
                console.log('duration: ' + state.motion.duration);

                // automation
                if (state.ui.interaction.player_2.clientX == 0) {
                    state.ui.interaction.player_2.clientX_auto = true;
                };

                if (state.ui.interaction.player_2.clientX == 7) {
                    state.ui.interaction.player_2.clientX_auto = false;
                };
                
                if (state.ui.interaction.player_2.clientY == 0) {
                    state.ui.interaction.player_2.clientY_auto = true;
                };

                if (state.ui.interaction.player_2.clientY == 7) {
                    state.ui.interaction.player_2.clientY_auto = false;
                };

                // motion
                if (state.ui.interaction.player_2.clientX_auto == true) {
                    state.ui.interaction.player_2.clientX += 1;
                };

                if (state.ui.interaction.player_2.clientX_auto == false) {
                    state.ui.interaction.player_2.clientX -= 1;
                };

                if (state.ui.interaction.player_2.clientY_auto == true) {
                    state.ui.interaction.player_2.clientY += 1;
                };

                if (state.ui.interaction.player_2.clientY_auto == false) {
                    state.ui.interaction.player_2.clientY -= 1;
                };

            }, (1000));
    }());

};

let Handle_return_state = () => { return state };

let Handle_display_with_delay = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_display_and_opacity_on_with_no_delay, imported_functions.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

let Handle_transform = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

let Handle_get_state_from_events = () => {
    components = imported_components.get_components_handled();
    state = events.Handle_return_state_from_events();
    console.log(state);
    console.log(components);
    Handle_transform();
    Handle_display_with_delay();
};

let Handle_ui_from_functions = () => {
    components = imported_components.get_components_handled();
    state = functions.Handle_return_state_from_functions();
    Handle_transform();
    Handle_display_with_delay();
};

let Handle_ui = () => {
    components = imported_components.get_components_handled();
    state = functions.Handle_return_state_from_functions();
    Handle_transform();
    Handle_display_with_delay();
};

// events
root.addEventListener('keydown', (event) => {
    events.handle_Function_Key_Press(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
});

root.addEventListener('keyup', (event) => {
    events.handle_Function_Key_Up(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
});

root.addEventListener('mousemove', (event) => {
    events.handle_Function_Mouse_Move(event);
    Handle_get_state_from_events();
});

root.addEventListener('mouseenter', (event) => {
    events.handle_Function_Mouse_Enter(event);
    Handle_get_state_from_events();
});

root.addEventListener('mouseleave', (event) => {
    events.handle_Function_Mouse_Leave(event);
    Handle_get_state_from_events();
});

root.addEventListener('mouseup', (event) => {
    events.handle_Function_Mouse_Up(event);
    Handle_get_state_from_events();
});

root.addEventListener('mousedown', (event) => {
    events.handle_Function_Mouse_Down(event);
    Handle_get_state_from_events();
});

root.addEventListener('touchmove', (event) => {
    events.handle_Function_Touch_Move(event);
    Handle_get_state_from_events();
});

root.addEventListener('touchstart', (event) => {
    events.handle_Function_Touch_Start(event);
    Handle_get_state_from_events();
});

root.addEventListener('touchend', (event) => {
    events.handle_Function_Touch_End(event);
    Handle_get_state_from_events();
});

window.onload = () => {

	state.app.url = '/';
    handle_Route('/');

    handle_Motion();
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

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

};

window.onresize = () => {
    events.handle_Function_Device_Resize(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
};

window.ondevicemotion = function(event) {
    events.handle_Function_Device_Motion(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
};

window.ondeviceorientation = function(event) {
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;

};

window.onorientationchange = () => {

    state.events.motion.orientation_string = orientation;
};

window.onbeforeunload = function(){
    alert('leaving');
};

console.log(state);
imported_state.from_Import();

export default {
    Handle_return_state,
    handle_Route,
    Handle_ui_from_functions,
    Handle_ui_reset
};