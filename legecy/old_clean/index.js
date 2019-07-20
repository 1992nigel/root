

//priorities
// - user log
// - local onboarding
// - crud
// - url check
// - record all actions
// - stream (all, route & between users)


// Imports
import style from './style.scss';
import imported_state from './imports/state';
import elements from './imports/elements';
import functions from './imports/functions';
import imported_components from './imports/components';
import events from './imports/events';

let state = imported_state.default_state;

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

let root = document.getElementById('root');
let scrollable = document.getElementById('scrollable');
let status = document.getElementById('status');

let components;
let cardboard = document.getElementById('cardboard');

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
let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;
let first_firebase_check;
let newest_created_id;
let first_time_user;

let Handle_return_state
let Handle_display_with_delay
let handle_time
let handle_ui
let empty_ols
let handle_refresh_fire_data
let firebase_add_listings
let firebase_library
let find_sort
let sorted_firebase_library
let handle_firebase_render_to_view
let handle_repeated_fire_data_validation
let handle_onboarding
let handle_URL
let validated_user
let validated_user_is_logged
let check_localStorage
let firebase_login
let firebase_logout
let Handle_get_state_from_events
let handle_events
let Handle_render_data_value
let Handle_ui_reset
let Handle_model_reset

newest_created_id = 0;
first_time_user = false;
first_firebase_check = true;
firebase_library = [];
validated_user = {};
validated_user_is_logged = false;

Handle_return_state = () => { return state };

Handle_display_with_delay = () => {
    components = imported_components.get_components_handled();
    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            functions.Toggle_functions_IF_State(functions.Toggle_display_and_opacity_on_with_no_delay, functions.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

handle_time = () => {
    
    // 1/sec loop
    (() => {
        let interval = 0;
        setInterval(
            function() {
                
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date = new Date();
                state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
                state.data.onload_time = state.data.time;
                state.motion.duration ++;
                console.log('duration: ' + state.motion.duration);

            }, (1000));
    })();

};

handle_ui = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                if (document.getElementById('container_playable_character') != null) {
                    let container_playable_character = document.getElementById('container_playable_character');
                    container_playable_character.style =
                        'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.ui.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.ui.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
                };

                //stage
                // vr
                if (document.getElementById('vr_mg') != null) {
                    document.getElementById('vr_mg').style = "transform: translate3d(" +
                        (state.ui.interaction.vr.clientX * 100) + "%, " +
                        (state.ui.interaction.vr.clientY * 100) + "%, 0);"
                };

                //Handle_display_with_delay();

                state.motion.frame += 1;
                //console.log(state.motion.frame)
            }, (1000 / state.motion.framerate));
    })();

};

empty_ols = () => {

    firebase_library = [];

    if ((document.getElementById('firebase_library_ol')) != null) {
        document.getElementById('firebase_library_ol').innerHTML = '';
    };

    if ((document.getElementById('filtered_library_by_title_ol')) != null) {
        document.getElementById('filtered_library_by_title_ol').innerHTML = '';
    };

    if ((document.getElementById('sorted_library_by_time_up_ol')) != null) {
        document.getElementById('sorted_library_by_time_up_ol').innerHTML = '';
    };

    if ((document.getElementById('sorted_library_by_time_down_ol')) != null) {
        document.getElementById('sorted_library_by_time_down_ol').innerHTML = '';
    };

};

handle_refresh_fire_data = () => {
    
    empty_ols();

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

// firebase actions
firebase_add_listings = (child) => {

    let already_used = false;

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        let user_being_made = state.data.firebase.gnougn.library[i];

        if ( (user_being_made.child) == 'roster') {

            if ( (user_being_made.username) == document.getElementById('create_user_username').value) {
                already_used = true;
            };

        };
    };

    if (validated_user.id != null) {
        
        var current_second = new Date().getTime() / 1000;
        let default_item;

        // library default
        if (child == 'library') {
            default_item = {
                child : "library",
                id : 0,
                likes : 0,
                views : 0,
                username : validated_user.username,
                password : validated_user.password,
                title : document.getElementById('create_post_title').value,
                tags : [document.getElementById('create_post_tag').value],
                time: current_second,
                authors : [ ""+`${validated_user.username}`+"" ]
            };
        };
        // object
        if (child == 'library') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newest_created_id = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // roster default
        if (child == 'roster' && already_used == false) {
            alert('username not use');
            default_item = {
                child : "roster",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_user_username').value,
                tags : ['developer', 'designer', 'illustrator', 'animator', 'strategist', 'content' ],
                username : document.getElementById('create_user_username').value,
                password : document.getElementById('create_user_password').value,
                time: current_second,
                authors : [ ""+`${validated_user.username}`+"" ]
            };
        };
        // object
        if (child == 'roster' && already_used == true) {
            alert('username already in use');
        };
        // validation rejection
        if (child == 'roster' && already_used == false) {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newest_created_id = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;
        };

        // messages default
        if (child == 'messages') {
            default_item = {
                child : "messages",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_messages').value,
                username : validated_user.username,
                time: current_second,
                tags : [''],
                authors : ['']
            };
        };
        // object
        if (child == 'messages') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newest_created_id = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // stream default
        if (child == 'stream') {
            default_item = {
                child : "stream",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_stream').value,
                username : validated_user.username,
                time: current_second,
                tags : [''],
                authors : ['']
            };
        };
        // object
        if (child == 'stream') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newest_created_id = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // activity default
        if (child == 'activity') {
            default_item = {
                child : "activity",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_activity').value,
                username : validated_user.username,
                time: current_second,
                tags : [''],
                authors : ['']
            };
        };
        // object
        if (child == 'activity') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newest_created_id = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // interaction default
        if (child == 'interaction') {
            default_item = {
                child : "interaction",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_interaction').value,
                username : validated_user.username,
                time: current_second,
                tags : [''],
                authors : ['']
            };
        };
        // object
        if (child == 'interaction') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newest_created_id = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

    };

};

find_sort = (mode) => {

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
                    return a.time - b.time
                }
            };

    };

    if (mode == 'titleup') {

            if (mode == 'titleup') {
                return function(a, b) {
                    
                        var textA = a.title.toUpperCase();
                        var textB = b.title.toUpperCase();
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;

                }
            };

    };

    if (mode == 'titledown') {
            
            if (mode == 'titledown') {
                return function(a, b) {

                        var textA = a.title.toUpperCase();
                        var textB = b.title.toUpperCase();
                        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                        
                }
            };

    };
};

sorted_firebase_library = (x) => {  return firebase_library.sort(find_sort(x)) };

handle_firebase_render_to_view = () => {
    // render library
    (() => {


        setTimeout(function() {

            if ((firebase_has_responsed_with_this_updated_data) != null) {

                // create array
                if ((firebase_library) != null) {
                    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
                        firebase_library.push(state.data.firebase.gnougn.library[i]);
                    };
                };

                // render array
                for (var i = 0; i < firebase_library.length; i++) {
                    document.getElementById('firebase_library_ol').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_li_post(firebase_library[i])
                        )
                    );
                };

                // create array
                let filtered_library_by_title = [];

                for (var i = 0; i < firebase_library.length; i++) {
                    if ((firebase_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                        filtered_library_by_title.push(firebase_library[i]);
                    };
                    console.log('filtered_library_by_title[i]');
                    console.log(filtered_library_by_title[i]);
                };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        document.getElementById('filtered_library_by_title_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        if (filtered_library_by_title[i].child == 'roster') {
                            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        if (filtered_library_by_title[i].child == 'interaction') {
                            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        if (filtered_library_by_title[i].child == 'activity') {
                            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        if (filtered_library_by_title[i].child == 'messages') {
                            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        if (filtered_library_by_title[i].child == 'stream') {
                            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < filtered_library_by_title.length; i++) {
                        if (filtered_library_by_title[i].child == 'library') {
                            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                // create array
                let sorted_library_by_time_up = [];
                for (var i = 0; i < sorted_firebase_library('timeup').length; i++) {
                    sorted_library_by_time_up.push(sorted_firebase_library('timeup')[i]);
                };

                    // render array
                    for (var i = 0; i < sorted_library_by_time_up.length; i++) {
                        document.getElementById('sorted_library_by_time_up_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(sorted_library_by_time_up[i])
                            )
                        );
                    };

                // create array
                let sorted_library_by_time_down = [];
                for (var i = 0; i < sorted_firebase_library('timedown').length; i++) {
                    sorted_library_by_time_down.push(sorted_firebase_library('timedown')[i]);
                };

                    // render array
                    for (var i = 0; i < sorted_library_by_time_down.length; i++) {
                        document.getElementById('sorted_library_by_time_down_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(sorted_library_by_time_down[i])
                            )
                        );
                    };

                // interaction (if person is visition your page)
                // render array
                document.getElementById('container_enemy').innerHTML = ``;

                for (var i = 0; i < filtered_library_by_title.length; i++) {
                    if (filtered_library_by_title[i].child == 'roster') {
                        document.getElementById('container_enemy').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_div('', '', `<div id="enemy" class="gui_character"></div>`)
                            )
                        );
                    };
                };

                // if new user
                if ((validated_user_is_logged == false) && (localStorage.username == "placeholder_user")) {
                    document.getElementById('validated_user_info').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_div('', '', `<div id="validated_user_info" class="">validated_user_info: please sign up </div>`)
                        )
                    );

                    document.getElementById('validated_user_info_followers').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_div('', '', `<div id="validated_user_info_followers" class="">validated_user_info_followers: please sign up </div>`)
                        )
                    );

                    document.getElementById('validated_user_info_following').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_div('', '', `<div id="validated_user_info_following" class="">validated_user_info_following: please sign up </div>`)
                        )
                    );

                    document.getElementById('validated_user_info_recents').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_div('', '', `<div id="validated_user_info_recents" class="">validated_user_info_recents: please sign up </div>`)
                        )
                    );

                };

                // if logged out
                    if ((validated_user_is_logged == false) && (localStorage.username != "placeholder_user")) {
                        document.getElementById('container_playable_character_svg').innerHTML = ``;
                    };

                    if ((validated_user_is_logged == false) && (localStorage.username != "placeholder_user")) {
                        document.getElementById('validated_user_info').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', `<div id="validated_user_info" class="">validated_user_info: please sign back in </div>`)
                                )
                            );
                    };

                // if logged in
                    if ((validated_user_is_logged == true)) {
                        document.getElementById('validated_user_info').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', `<div id="validated_user_info" class="">validated_user_info: signed in: ${validated_user.username} </div>`)
                                )
                            );
                    };
                    if ((validated_user_is_logged == true)) {
                        document.getElementById('container_playable_character_svg').innerHTML = ``;
                    };


                    if ((validated_user_is_logged == true)) {
                        document.getElementById('container_playable_character_svg').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', `<div id="character" class="gui_character_1 width_100 height_100"></div>`)
                                )
                            );
                    };

                    // user stats
                    // if logged out
                    if ((validated_user_is_logged == false)) {
                        document.getElementById('validated_user_info_y_status').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', `validated_user_info_y_status: please sign back in`)
                                )
                            );
                    };

                    if ((validated_user_is_logged == false)) {
                        document.getElementById('validated_user_info_x_status').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', `validated_user_info_x_status: please sign back in`)
                                )
                            );
                    };

                    if ((validated_user_is_logged == false)) {
                        document.getElementById('modal_nav_top_link_10').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_div('', '', `                
                                   <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                                      <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                         <div class="gui_link_sign_up_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                      </div>
                                   </div>
                                   <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                                      <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                                         inside nav 10
                                      </div>
                                   </div>
                               `)
                            )
                        );

                        if (document.getElementById('modal_nav_top_link_10') != null) {
                            document.getElementById('modal_nav_top_link_10').addEventListener('click', (event) => {
                                alert('sign in/up page');
                                state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
                            });
                        };

                    };

                    // if logged in
                    if ((validated_user_is_logged == true)) {
                        document.getElementById('validated_user_info_y_status').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', ``)
                                )
                            );
                    };

                    if ((validated_user_is_logged == true)) {
                        document.getElementById('validated_user_info_x_status').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_div('', '', ``)
                                )
                            );
                    };

                    if ((validated_user_is_logged == true)) {
                        document.getElementById('modal_nav_top_link_10').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_div('', '', `
                                    <div class="position_absolute top_0 left_0 height_100 width_100 bg_white">
                                      <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                         <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_100 height_100 margin_auto"></div>

                                         <div class="gui_character_face position_absolute top_1vh left_1vh width_1vh height_1vh bg_pink margin_auto"></div>

                                      </div>
                                   </div>
                                   <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                                      <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                                         inside nav 9 (information regarding signed_in user)
                                      </div>
                                   </div>
                               `)
                            )
                        );

                        if (document.getElementById('modal_nav_top_link_10') != null) {
                            document.getElementById('modal_nav_top_link_10').addEventListener('click', (event) => {
                                
                                alert('modal_nav_top_link_10');
                                state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;

                                // fill page container
                                document.getElementById('modal_page_right_container').innerHTML = ``;
                                document.getElementById('modal_page_right_container').appendChild(
                                    functions.Generate_new_fragment.appendChild(
                                    elements.element_lead('user info page')
                                    )
                                );

                                document.getElementById('modal_page_right_container').appendChild(
                                    functions.Generate_new_fragment.appendChild(
                                    functions.Generate_new_div('', '', `
                                        
                                            user info page


                                        `)
                                    )
                                );

                                state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;

                            });
                        };

                    };

            };

        })
    })();
};

handle_repeated_fire_data_validation = setInterval( () => {

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
                    check_localStorage();
                    handle_firebase_render_to_view();
                    //console.clear();
                    console.log('contected!');
                }, 0);

                if (first_firebase_check == true) {
                    //Handle_check_route('/home');
                    first_firebase_check = false;
                    console.log('first firebase load!!!');

                    // timeout
                    setTimeout( () => {
                        state.app.route = 'loaded'
                        handle_URL();
                    }, 1000);
                };

                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);

firebase_login = () => {

    let selected_username = (document.getElementById('element_login_username').value);
    let selected_password = (document.getElementById('element_login_password').value);

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        // local user matched
        if (state.data.firebase.gnougn.library[i].child == 'roster') {
            if ((state.data.firebase.gnougn.library[i].username ) == selected_username) {
                
                (() => {
                    if ((state.data.firebase.gnougn.library[i].password ) == selected_password) {
                        alert('logging in: ' + selected_username + selected_password);

                        validated_user = state.data.firebase.gnougn.library[i];
                        localStorage.setItem("user", validated_user);
                        localStorage.setItem("username", selected_username);
                        localStorage.setItem("password", selected_password);
                        localStorage.setItem("signed_in", "true");
                        validated_user_is_logged = true;
                        handle_onboarding();

                        return;
                    };

                    if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                        alert('not logging in: ' + selected_username + selected_password);

                        localStorage.setItem("username", "placeholder_user");
                        localStorage.setItem("password", "1234");
                        localStorage.setItem("signed_in", "false");
                    };
                })();
            };
        };

    };

    handle_refresh_fire_data();
};

firebase_logout = () => {

    alert('logging out');

    let selected_username = (document.getElementById('element_login_username').value);
    let selected_password = (document.getElementById('element_login_password').value);

    localStorage.setItem("username", localStorage.username);
    localStorage.setItem("password", localStorage.password);
    localStorage.setItem("signed_in", "false");
    validated_user_is_logged = false;
    handle_onboarding();

    handle_refresh_fire_data();
};

let shortcut_new_user = () => {
    document.getElementById('status').innerHTML = ('onboard-new');

    // lead
    document.getElementById('lead').innerHTML = ``;
    document.getElementById('lead').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `
                <div class="position_absolute top_0 left_0 height_33vh width_33vw margin_auto">
                    <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                    <div id="logo_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>                    
                </div>
            `)
        )
    );

    // logged user
    document.getElementById('logged_user').innerHTML = ``;
    document.getElementById('logged_user').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `
                you are a new user huh!
            `)
        )
    );

    Handle_display_with_delay();
    Handle_render_data_value();

};

let shortcut_new_user_still_unlogged = () => {
    // o.o.o. status
    document.getElementById('status').innerHTML = ('onboard-please-sign-up');

    // lead
    document.getElementById('lead').innerHTML = ``;
    document.getElementById('lead').appendChild(
        functions.Generate_new_fragment.appendChild(
        elements.lead_calc()
        )
    );

    // logged user
    document.getElementById('logged_user').innerHTML = ``;
    document.getElementById('logged_user').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `
            
                welcome back new user, please sign up?


            `)
        )
    );

    // set state
        state.ui.gui.top_left.transform = true;
        // state.ui.gui.top_right.transform = true;
        // state.ui.gui.bottom_left.transform = true;
        // state.ui.gui.bottom_right.transform = true;

    // timed events
        setTimeout( () => {
            state.ui.modal.pop.top.transform = true;
            Handle_display_with_delay();
            Handle_render_data_value();
        }, 1000);


        // events added after render
        if (document.getElementById('vr_interaction_button_start') != null) {
            document.getElementById('vr_interaction_button_start').addEventListener('click', (event) => {
                ('vr_interaction_button_start');

                document.getElementById('lead').innerHTML = ``;
                //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            });
        };

        if (document.getElementById('vr_interaction_button_learn') != null) {
            document.getElementById('vr_interaction_button_learn').addEventListener('click', (event) => {
                ('vr_interaction_button_learn');

                document.getElementById('lead').innerHTML = ``;
                //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            });
        };

        if (document.getElementById('fold_top_left') != null) {
            document.getElementById('fold_top_left').addEventListener('click', (event) => {
                alert('fold_top_left');
            });
        };

        if (document.getElementById('fold_top') != null) {
            document.getElementById('fold_top').addEventListener('click', (event) => {
                alert('fold_top');
            });
        };

        if (document.getElementById('fold_top_right') != null) {
            document.getElementById('fold_top_right').addEventListener('click', (event) => {
                alert('fold_top_right');
            });
        };

        if (document.getElementById('fold_center_left') != null) {
            document.getElementById('fold_center_left').addEventListener('click', (event) => {
                alert('fold_center_left');
                state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
            });
        };

        if (document.getElementById('fold_center') != null) {
            document.getElementById('fold_center').addEventListener('click', (event) => {
                alert('fold_center');
            });
        };

        if (document.getElementById('fold_center_right') != null) {
            document.getElementById('fold_center_right').addEventListener('click', (event) => {
                alert('fold_center_right');
                state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
            });
        };

        if (document.getElementById('fold_bottom_left') != null) {
            document.getElementById('fold_bottom_left').addEventListener('click', (event) => {
                alert('fold_bottom_left');
                state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
            });
        };

        if (document.getElementById('fold_bottom') != null) {
            document.getElementById('fold_bottom').addEventListener('click', (event) => {
                alert('fold_bottom');
            });
        };

        if (document.getElementById('fold_bottom_right') != null) {
            document.getElementById('fold_bottom_right').addEventListener('click', (event) => {
                alert('fold_bottom_right');
                state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
            });
        };

        Handle_display_with_delay();
        Handle_render_data_value();

};

let shortcut_old_user_still_unlogged = () => {
    // o.o.o. status
    document.getElementById('status').innerHTML = ('onboard-unlogged');

    // lead
    document.getElementById('lead').innerHTML = ``;
    document.getElementById('lead').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `
            <div class="position_absolute top_0 left_0 height_50vh width_50vw margin_auto">
                <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                <div id="logo_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>                
            </div>
        `)
        )
    );

    // logged user
    document.getElementById('logged_user').innerHTML = ``;
    document.getElementById('logged_user').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `
            
                you are not logged in!


            `)
        )
    );


        // events added after render
        if (document.getElementById('vr_interaction_button') != null) {
            document.getElementById('vr_interaction_button').addEventListener('click', (event) => {
                //alert('vr_interaction_button');

                document.getElementById('lead').innerHTML = ``;
                //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            });
        };

        Handle_display_with_delay();
        Handle_render_data_value();

};

let shortcut_old_user_logged = () => {
    // o.o.o. status
    document.getElementById('status').innerHTML = ('onboard-logged');

    // lead
    document.getElementById('lead').innerHTML = ``;
    document.getElementById('lead').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `      
            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                <div id="row-logo-mark_filler"></div>
                <div id="row-logo-mark-type" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
            </div>
            `)
        )
    );

    document.getElementById('lead').appendChild(elements.element_overflow_y());
    document.getElementById('lead').appendChild(elements.element_overflow_x());

    // logged user
    document.getElementById('logged_user').innerHTML = ``;
    document.getElementById('logged_user').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `
                you are logged in!
            `)
        )
    );

    // interaction (if person is visition your page)
    document.getElementById('vr_mg_center').innerHTML = ``;
    // render array of user room items
    let vr_mg_center_loading_scene = `
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
    `

    document.getElementById('vr_mg_center').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `${vr_mg_center_loading_scene}`)
        )
    );

    // interaction (if person is visiting your page)
    document.getElementById('vr_branding').innerHTML = ``;
    // render scene
    let vr_branding_loading_scene = `
                    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">
                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                              <div id="logo_mark" class="gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                              <div id="row-logo-mark-type_filler"></div>
                              
                              <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                  <div id="gui_interaction_button_1_filler"></div>
                              </div>
                          </div>
                      </div>
    `

    document.getElementById('vr_branding').appendChild(
        functions.Generate_new_fragment.appendChild(
        functions.Generate_new_div('', '', `${vr_branding_loading_scene}`)
        )
    ); 


        // events added after render
        if (document.getElementById('vr_interaction_button') != null) {
            document.getElementById('vr_interaction_button').addEventListener('click', (event) => {
                //alert('vr_interaction_button');

                document.getElementById('lead').innerHTML = ``;
                //state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            });
        };

        Handle_display_with_delay();
        Handle_render_data_value();

};

// handles
handle_onboarding = () => {

    //alert('onboard');

    // if new user
    if ((first_time_user == true) && (validated_user_is_logged == false) && (localStorage.username == "placeholder_user")) {
        shortcut_new_user();
    };

    // if new user - still unlogged
    if ((first_time_user == false) && (validated_user_is_logged == false) && (localStorage.username == "placeholder_user")) {
        shortcut_new_user_still_unlogged();
    };

    // if logged out
    if ((first_time_user == false) && (validated_user_is_logged == false) && (localStorage.username != "placeholder_user")) {
        shortcut_old_user_still_unlogged();
    };

    // if logged in
    if ((first_time_user == false) && (validated_user_is_logged == true) && (localStorage.username != "placeholder_user")) {
        shortcut_old_user_logged();
    };

};

handle_URL = () => {

    //alert('handle_URL')
    setTimeout( () => {
                
        // console.log(location);
        // console.log(location.pathname);
        var parts = location.pathname.split('/');

        // console.log(parts);
        // back to fold for page change
        window.scrollTo(0, 0);
        console.log('done routing');

        if (parts[1] != null) {
            //alert(parts[1]);

            if ((parts[1] == '')) {
                //alert('going to just home');
                state.app.url = parts[1];
                console.log('state.app.url: ' + state.app.url );
            };

            if ((parts[1] != 'p') && (parts[1] != '')) {
                //alert('going to user');
                state.app.url = parts[1];
                console.log('state.app.url: ' + state.app.url );
            };

            if (parts[1] == 'p') {
                //alert('going to post');
            };
        };

        if (parts[2] != null) {
            console.log(parts[2]);
        };

        if (state.app.route == '') {
                        
            let yup = `
              <div id="vr_bg" class="opacity_005">
                  <div id="row_accent_noise"></div>
              </div>

              <div id="vr_mg" class="transform_translate3d_top0  position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box easing_01">
              
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
                      
                  </div>

                  <div id="container_playable_character" class="position_absolute ">

                      <div class="gui_character_message_box position_absolute bottom_100 left_0 right_0 height_100 width_100 margin_auto">
                      </div>

                      <div id="container_playable_character_svg" class="position_absolute width_100 height_100 ">
                      </div>

                  </div>

              </div>

              <div id="vr_branding" class="">
                  
              </div>
              `

            cardboard.innerHTML = yup;

            document.getElementById('status').innerHTML = ('blank, check localStorage!');
        
            // interaction (if person is visition your page)
            // render scene
            let vr_branding_loading_scene = `
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">
                    <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                      <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                      <div id="row-logo-mark-type_filler"></div>
                      
                      <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                          <div id="gui_interaction_button_1_filler"></div>
                      </div>
                  </div>
              </div>
            `

            document.getElementById('vr_branding').innerHTML = ``;

            document.getElementById('vr_branding').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `${vr_branding_loading_scene}`)
                )
            );

            // timeout
            setTimeout( () => {
                state.app.route = 'loading'
                handle_URL();
            }, 1000);

        };

        if (state.app.route == 'loading') {
            document.getElementById('status').innerHTML = ('loading');

            // interaction (if person is visition your page)
            // render scene
            let vr_branding_loading_scene = `
                    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">
            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                  <div id="logo_mark" class="gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                  <div id="row-logo-mark-type_filler"></div>
                  
                  <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                      <div id="gui_interaction_button_1_filler"></div>
                  </div>
              </div>
              </div>
            `

            document.getElementById('vr_branding').innerHTML = ``;

            document.getElementById('vr_branding').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `${vr_branding_loading_scene}`)
                )
            );

            handle_repeated_fire_data_validation;

            /*
                setTimeout( () => {
                    state.app.route = 'loaded'
                    handle_URL();
                }, 1000);
            */

        };

        if (state.app.route == 'loaded') {
            document.getElementById('status').innerHTML = ('loaded');


            // interaction (if person is visition your page)
            // render scene
            let vr_branding_loading_scene = `
                    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">
            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                  <div id="logo_mark" class="gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                  <div id="row-logo-mark-type_filler"></div>
                  
                  <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                      <div id="gui_interaction_button_1_filler"></div>
                  </div>
              </div>
              </div>
            `

            document.getElementById('vr_branding').innerHTML = ``;

            document.getElementById('vr_branding').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `${vr_branding_loading_scene}`)
                )
            );

            // timeout
            setTimeout( () => {
                state.app.route = 'done'
                handle_URL();
            }, 1000);
        };

        if (state.app.route == 'done') {
            document.getElementById('status').innerHTML = ('done');

            // interaction (if person is visition your page)
            // render scene
            let vr_branding_loading_scene = `
                    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">
            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                  <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                  <div id="row-logo-mark-type_filler"></div>
                  
                  <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                      <div id="gui_interaction_button_1_filler"></div>
                  </div>
              </div>
              </div>
            `

            document.getElementById('vr_branding').innerHTML = ``;

            document.getElementById('vr_branding').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `${vr_branding_loading_scene}`)
                )
            );

            // timeout
            setTimeout( () => {
                state.app.route = 'home'
                handle_URL();
            }, 1000);
        };

        if (state.app.route == 'home') {
            document.getElementById('status').innerHTML = ('home');

            // interaction (if person is visition your page)
            // render scene
            let vr_branding_loading_scene = `
                    <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1205vw max_width margin_auto">
            <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33 width_33 margin_auto">
                  <div id="logo_mark" class="gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                  <div id="row-logo-mark-type_filler"></div>
                  
                  <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                      <div id="gui_interaction_button_1_filler"></div>
                  </div>
              </div>
              </div>
            `

            document.getElementById('vr_branding').innerHTML = ``;

            document.getElementById('vr_branding').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `${vr_branding_loading_scene}`)
                )
            );

            if (scrollable != null) {
                scrollable.appendChild(elements.element_lead(
                `
                <div id="lead" class="position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto">
                    
                </div>

                `));

                scrollable.appendChild(elements.element_fold(`

                <div id="element_full" class="position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto">
                        
                    <h2>Featured</h2>

                    <h2>Summary</h2>

                </div>

                `));

                scrollable.appendChild(elements.element_full(
                `
                <div id="element_full" class="position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto">
                                  
                    <div id="logged_user" class="position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto">
                            
                    </div>
                    
                </div>

                `));

                scrollable.appendChild(elements.element_full(
                `
                <div id="element_full" class="position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto">
                                            
                    <h2>who</h2>

                    modal_nav_top_link_9: menu right
                    
                    <h2>what</h2>
                    
                    <h2>when</h2>
                    
                    <h2>where</h2>

                    <h2>why</h2>
                    
                    <h2>how</h2>

                </div>

                `));

                scrollable.appendChild(elements.element_full(
                `
                <div id="element_full" class="position_absolute top_0 left_0 bottom_0 right_0 height_100vh width_100vw margin_auto">
                        
                    <h2>Summary</h2>

                    <h2>Credits</h2>
                                               
                    <div id="signal">my baby moms</div>
                    <div id="signal">The dude that made reddit</div>
                    <div id="signal">g4TV</div>
                    <div id="signal">Rebel Fm</div>
                    <div id="signal">Adam Sessler</div>
                    <div id="signal">CoryX</div>
                    <div id="signal">Tony Ferguson</div>
                    <div id="signal">Henry Cejudo</div>
                    <div id="signal">Plants vs Zombies</div>

                </div>

                `));

            };


            if (document.getElementById('modal_menu_right_container') != null) {
                document.getElementById('modal_menu_right_container').appendChild(elements.element_flex(`

                <h2>Controls:</h2>
                <div id="signal">page_top: all info</div>
                <div id="signal">page_bottom: see post</div>
                <div id="signal">pop_top: create post</div>
                <div id="signal">pop_bottom: create user</div>

                <h6>component_app_status_transform_nav_top</h6>
                <div id="component_app_status_transform_nav_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_nav_left</h6>
                <div id="component_app_status_transform_nav_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_nav_bottom</h6>
                <div id="component_app_status_transform_nav_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_nav_right</h6>
                <div id="component_app_status_transform_nav_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_page_top</h6>
                <div id="component_app_status_transform_page_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_page_left</h6>
                <div id="component_app_status_transform_page_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_page_bottom</h6>
                <div id="component_app_status_transform_page_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_page_right</h6>
                <div id="component_app_status_transform_page_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_pop_top</h6>
                <div id="component_app_status_transform_pop_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_pop_left</h6>
                <div id="component_app_status_transform_pop_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_pop_bottom</h6>
                <div id="component_app_status_transform_pop_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_pop_right</h6>
                <div id="component_app_status_transform_pop_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gradient_top</h6>
                <div id="component_app_status_transform_gradient_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gradient_left</h6>
                <div id="component_app_status_transform_gradient_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gradient_bottom</h6>
                <div id="component_app_status_transform_gradient_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gradient_right</h6>
                <div id="component_app_status_transform_gradient_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_morph_top</h6>
                <div id="component_app_status_transform_morph_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_morph_left</h6>
                <div id="component_app_status_transform_morph_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_morph_bottom</h6>
                <div id="component_app_status_transform_morph_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_morph_right</h6>
                <div id="component_app_status_transform_morph_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_menu_top</h6>
                <div id="component_app_status_transform_menu_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_menu_left</h6>
                <div id="component_app_status_transform_menu_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_menu_bottom</h6>
                <div id="component_app_status_transform_menu_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_menu_right</h6>
                <div id="component_app_status_transform_menu_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_top</h6>
                <div id="component_app_status_transform_gui_top" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_top_left</h6>
                <div id="component_app_status_transform_gui_top_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_top_right</h6>
                <div id="component_app_status_transform_gui_top_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_left</h6>
                <div id="component_app_status_transform_gui_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_bottom</h6>
                <div id="component_app_status_transform_gui_bottom" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_bottom_left</h6>
                <div id="component_app_status_transform_gui_bottom_left" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_bottom_right</h6>
                <div id="component_app_status_transform_gui_bottom_right" class="width_100 position_relative margin_auto float_left"></div>

                <h6>component_app_status_transform_gui_right</h6>
                <div id="component_app_status_transform_gui_right" class="width_100 position_relative margin_auto float_left"></div>


                `));
            };

            if (document.getElementById('modal_page_top_container') != null) {
                document.getElementById('modal_page_top_container').innerHTML = `

                    <h1 class="width_100 float_left">validated_user_info</h1>
                    <div id="validated_user_info" class="width_100 position_relative margin_auto float_left"></div>

                    <h1 class="width_100 float_left">validated_user_info_followers</h1>
                    <div id="validated_user_info_followers" class="width_100 position_relative margin_auto float_left"></div>

                    <h1 class="width_100 float_left">validated_user_info_following</h1>
                    <div id="validated_user_info_following" class="width_100 position_relative margin_auto float_left"></div>

                    <h1 class="width_100 float_left">validated_user_info_recents</h1>
                    <div id="validated_user_info_recents" class="width_100 position_relative margin_auto float_left"></div>

                    <h1 class="width_100 float_left">validated_user_info_x_status</h1>
                    <div id="validated_user_info_x_status" class="width_100 position_relative margin_auto float_left"></div>

                    <h1 class="width_100 float_left">validated_user_info_y_status</h1>
                    <div id="validated_user_info_y_status" class="width_100 position_relative margin_auto float_left"></div>

                    <h2 class="width_100 float_left">Login</h2>
                    <input id="element_login_username" type="text" placeholder="element_login_username" class="width_100 float_left" />
                    <input id="element_login_password" type="text" placeholder="element_login_password" class="width_100 float_left" />
                    <div id="element_login" class="width_100 float_left">login</div>
                    <div id="element_logout" class="width_100 float_left">logout</div>

                    <h2 class="width_100 float_left">Create User</h2>
                    <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" />
                    <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" />
                    <div id="element_addRoster" class="width_100 float_left">element_addRoster</div>

                    <h2 class="width_100 float_left">Create Post</h2>
                    <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" />
                    <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" />
                    <div id="element_addListing" class="width_100 float_left">element_addListing</div>

                    <h2 class="width_100 float_left">Activity(All|Followers|Following|You)</h2>

                    <h2 class="width_100 float_left">Activity</h2>
                    <input id="create_activity" type="text" placeholder="create_Activity" class="width_100 float_left" />

                    <div id="element_addActivity" class="width_100 float_left">element_addActivity</div>

                    <h2 class="width_100 float_left">Interaction</h2>
                    <input id="create_interaction" type="text" placeholder="create_interaction" class="width_100 float_left" />

                    <div id="element_addInteraction" class="width_100 float_left">element_addInteraction</div>

                    <h2 class="width_100 float_left">Messages</h2>
                    <input id="create_messages" type="text" placeholder="create_messages" class="width_100 float_left" />

                    <div id="element_addMessages" class="width_100 float_left">element_addMessages</div>

                    <h2 class="width_100 float_left">Stream</h2>
                    <input id="create_stream" type="text" placeholder="create_stream" class="width_100 float_left" />

                    <div id="element_addStream" class="width_100 float_left">element_addStream</div>


                    <h1>filter by title</h1>
                    <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />

                    <h1>firebase_library_ol</h1>
                    <div id="firebase_library_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_by_title_ol</h1>
                    <div id="filtered_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_child_library_by_title_ol</h1>
                    <div id="filtered_library_child_library_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_child_roster_by_title_ol</h1>
                    <div id="filtered_library_child_roster_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_child_messages_by_title_ol</h1>
                    <div id="filtered_library_child_messages_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_child_stream_by_title_ol</h1>
                    <div id="filtered_library_child_stream_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_child_interaction_by_title_ol</h1>
                    <div id="filtered_library_child_interaction_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>filtered_library_child_activity_by_title_ol</h1>
                    <div id="filtered_library_child_activity_by_title_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>sorted_library_by_time_up_ol</h1>
                    <div id="sorted_library_by_time_up_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <h1>sorted_library_by_time_down_ol</h1>
                    <div id="sorted_library_by_time_down_ol" class="width_100 position_relative margin_auto float_left"></div>

                    <div id="signal">
                        <h2 class="width_100 float_left">
                            event_route:
                        </h2>
                        <div id="event_route">${('you are at: ' + state.app.url)}</div></div>

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
                `
            };



                handle_refresh_fire_data();
                handle_events();

            // timeout
            setTimeout( () => {
                state.app.route = 'onboard'
                handle_URL();
            }, 1000);

        };

        if (state.app.route == 'onboard') {

            handle_onboarding();

        };

    }, 0);
};

check_localStorage = () => {

    let placeholder_user = {
        "username" : "placeholder_user",
        "password" : "1234",
        "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
        "signed_in" : "false",
    };

    if (localStorage.user == null) {
        first_time_user = true;
        localStorage.setItem("user", placeholder_user);
        localStorage.setItem("username", placeholder_user.username);
        localStorage.setItem("password", placeholder_user.password);
        localStorage.setItem("signed_in", "false");
        //alert('welcome first timer');
        return
    };

    if (localStorage.user != null) {
        //alert('welcome back');

        //alert('welcome ' + 'returning user: ' + localStorage.username + '!');

        let roster_library = state.data.firebase.gnougn.library;
        for (var i = 0; i < roster_library.length; i++) {

            if ((roster_library[i].child == "roster")) {

                // local user matched but is just a null user returning, offer user to create account
                if ((roster_library[i].username ) == (localStorage.username) && (localStorage.username == "placeholder_user")) {
                    //alert('welcome back, create an account');
                };

                // local user matched and is an ACTUAL user
                if ((roster_library[i].username ) == (localStorage.username) && (localStorage.username != "placeholder_user")) {
                    //alert('user matches local');

                    if (localStorage.signed_in == "true") {

                        //alert(roster_library[i].username + ' or ' + localStorage.username + ', sign this back in');

                        if (roster_library[i].password == localStorage.password) {
                            
                            validated_user = roster_library[i];                        
                            //alert('password matched! ' + 'signing in: ' + validated_user.id + ', ' + validated_user.username + '! validated_user id: ' + validated_user.id + '!');
                            
                            validated_user_is_logged = true;
                            localStorage.signed_in = true;
                            //alert('validated_user_is_logged: ' + validated_user_is_logged);
                            //alert('localStorage.signed_in: ' + localStorage.signed_in);
                        }
                    };

                    if (localStorage.signed_in == "false") {
                        //alert('offer to sign: ' + roster_library[i].username + ' or ' + localStorage.username + ', back in!');
                    };

                };



            };

        };

        return
    };
};

Handle_get_state_from_events = () => {
    state = events.Handle_return_state_from_events();
    //alert('state.ui.modal.nav.left.transform: ' + state.ui.modal.nav.left.transform);
    Handle_display_with_delay();
    Handle_render_data_value();
};

handle_events = () => {

    if (scrollable != null) {

        // scroll
        scrollable.addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            Handle_get_state_from_events();
        });

        // events
        root.addEventListener('keydown', (event) => {
            events.handle_Function_Key_Down(event);
            Handle_get_state_from_events();
        });

        root.addEventListener('keyup', (event) => {
            events.handle_Function_Key_Up(event);
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

        root.addEventListener('click', (event) => {
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

    };

    // login
    if (document.getElementById('element_login') != null) {
        document.getElementById('element_login').addEventListener('click', (event) => {
            
            firebase_login();

        });
    };

    if (document.getElementById('element_login_username') != null) {
        document.getElementById('element_login_username').addEventListener('keydown', (event) => {
            
            if (event.keyCode == 13) {
                firebase_login();
            };

        });
    };

    if (document.getElementById('element_login_password') != null) {
        document.getElementById('element_login_password').addEventListener('keydown', (event) => {
            
            if (event.keyCode == 13) {
                firebase_login();
            };

        });
    };

    // logout
    if (document.getElementById('element_logout') != null) {
        document.getElementById('element_logout').addEventListener('click', (event) => {
            
            firebase_logout();

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
    if (document.getElementById('element_addListing') != null) {
        document.getElementById('element_addListing').addEventListener('click', (event) => {
            firebase_add_listings('library');
        });
    };

    // create
    if (document.getElementById('element_addRoster') != null) {
        document.getElementById('element_addRoster').addEventListener('click', (event) => {
            firebase_add_listings('roster');
        });
    };

    if (document.getElementById('element_addMessages') != null) {
        document.getElementById('element_addMessages').addEventListener('click', (event) => {
            firebase_add_listings('messages');
        });
    };
    if (document.getElementById('element_addStream') != null) {
        document.getElementById('element_addStream').addEventListener('click', (event) => {
            firebase_add_listings('stream');
        });
    };
    if (document.getElementById('element_addActivity') != null) {
        document.getElementById('element_addActivity').addEventListener('click', (event) => {
            firebase_add_listings('activity');
        });
    };
    if (document.getElementById('element_addInteraction') != null) {
        document.getElementById('element_addInteraction').addEventListener('click', (event) => {
            firebase_add_listings('interaction');
        });
    };
    if (document.getElementById('gui_top_left') != null) {
        document.getElementById('gui_top_left').addEventListener('click', (event) => {
            alert('gui_top_left');
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
        });
    };
    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            alert('gui_top');
            state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
        });
    };
    if (document.getElementById('gui_top_right') != null) {
        document.getElementById('gui_top_right').addEventListener('click', (event) => {
            alert('gui_top_right');

            state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;
            state.ui.gui.top.transform = !state.ui.gui.top.transform;
            state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform;

            state.ui.gui.left.transform = !state.ui.gui.left.transform;
            state.ui.gui.right.transform = !state.ui.gui.right.transform;

            state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform;
            state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform;
            state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;
        });
    };
    if (document.getElementById('gui_left') != null) {
        document.getElementById('gui_left').addEventListener('click', (event) => {
            alert('gui_left');
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
        });
    };
    if (document.getElementById('gui_right') != null) {
        document.getElementById('gui_right').addEventListener('click', (event) => {
            alert('gui_right');
            state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
        });
    };
    if (document.getElementById('gui_bottom_left') != null) {
        document.getElementById('gui_bottom_left').addEventListener('click', (event) => {
            alert('gui_bottom_left');
        });
    };
    if (document.getElementById('gui_bottom') != null) {
        document.getElementById('gui_bottom').addEventListener('click', (event) => {
            alert('gui_bottom');
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });
    };
    if (document.getElementById('gui_bottom_right') != null) {
        document.getElementById('gui_bottom_right').addEventListener('click', (event) => {
            alert('gui_bottom_right');
        });
    };

    if ( (document.getElementById('component_app_status_transform_gui_top')) != null ) {

        // gui - top
        document.getElementById('component_app_status_transform_gui_top').addEventListener("click", function(event) {
            state.ui.gui.top.transform = !state.ui.gui.top.transform;
        });

        // gui - top_left
        document.getElementById('component_app_status_transform_gui_top_left').addEventListener("click", function(event) {
            state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;
        });

        // gui - top_right
        document.getElementById('component_app_status_transform_gui_top_right').addEventListener("click", function(event) {
            state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform;
        });

        // gui - left
        document.getElementById('component_app_status_transform_gui_left').addEventListener("click", function(event) {
            state.ui.gui.left.transform = !state.ui.gui.left.transform;
        });

        // gui - bottom
        document.getElementById('component_app_status_transform_gui_bottom').addEventListener("click", function(event) {
            state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform;
        });

        // gui - bottom_left
        document.getElementById('component_app_status_transform_gui_bottom_left').addEventListener("click", function(event) {
            state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform;
        });

        // gui - bottom_right
        document.getElementById('component_app_status_transform_gui_bottom_right').addEventListener("click", function(event) {
            state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;
        });

        // gui - right
        document.getElementById('component_app_status_transform_gui_right').addEventListener("click", function(event) {
            state.ui.gui.right.transform = !state.ui.gui.right.transform;
        });
    };

    if ( (document.getElementById('component_app_status_transform_nav_top')) != null ) {

        // nav - top
        document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function(event) {
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
        });

        // nav - left
        document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function(event) {
            state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
        });

        // nav - bottom
        document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function(event) {
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
        });

        // nav - right
        document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function(event) {
            state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
        });

    };

    if ( (document.getElementById('component_app_status_transform_page_top')) != null ) {

        // page - top
        document.getElementById('component_app_status_transform_page_top').addEventListener("click", function(event) {
            state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
        });

        // page - left
        document.getElementById('component_app_status_transform_page_left').addEventListener("click", function(event) {
            state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
        });

        // page - bottom
        document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function(event) {
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        // page - right
        document.getElementById('component_app_status_transform_page_right').addEventListener("click", function(event) {
            state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
        });

    };

    // menu
    if ( (document.getElementById('component_app_status_transform_menu_top')) != null ) {

        // menu - top
        document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function(event) {
            state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
        });

        // menu - left
        document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function(event) {
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
        });

        // menu - bottom
        document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function(event) {
            state.ui.modal.menu.bottom.transform = !state.ui.modal.menu.bottom.transform;
        });

        // menu - right
        document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function(event) {
            state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
        });

    };

    // pop
    if ( (document.getElementById('component_app_status_transform_pop_top')) != null ) {

        // pop - top
        document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function(event) {
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });

        // pop - left
        document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function(event) {
            state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
        });

        // pop - bottom
        document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function(event) {
            state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
        });

        // pop - right
        document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function(event) {
            state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
        });

    };

    // gradient
    if ( (document.getElementById('component_app_status_transform_gradient_top')) != null ) {

        // gradient - top
        document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function(event) {
            state.ui.modal.gradient.top.transform = !state.ui.modal.gradient.top.transform;
        });

        // gradient - left
        document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function(event) {
            state.ui.modal.gradient.left.transform = !state.ui.modal.gradient.left.transform;
        });

        // gradient - bottom
        document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function(event) {
            state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
        });

        // gradient - right
        document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function(event) {
            state.ui.modal.gradient.right.transform = !state.ui.modal.gradient.right.transform;
        });

    };

    // morph
    if ( (document.getElementById('component_app_status_transform_morph_top')) != null ) {

        // morph - top
        document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function(event) {
            state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
        });

        // morph - left
        document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function(event) {
            state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
        });

        // morph - bottom
        document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function(event) {
            state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
        });

        // morph - right
        document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function(event) {
            state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
        });

    };

    // nav
    if (document.getElementById('modal_nav_top_link_1') != null) {
        document.getElementById('modal_nav_top_link_1').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_1');
            handle_onboarding();
            handle_refresh_fire_data();
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;


        });
    };
    if (document.getElementById('modal_nav_top_link_2') != null) {
        document.getElementById('modal_nav_top_link_2').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_2');
            state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;

        });
    };
    if (document.getElementById('modal_nav_top_link_3') != null) {
        document.getElementById('modal_nav_top_link_3').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_3');
            state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;

        });
    };

    // route: about
    if (document.getElementById('modal_nav_top_link_4') != null) {
        document.getElementById('modal_nav_top_link_4').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_4');
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;

            // fill page container
            document.getElementById('modal_page_bottom_container').innerHTML = ``;
            document.getElementById('modal_page_bottom_container').appendChild(
                functions.Generate_new_fragment.appendChild(
                elements.element_lead(
                    `
                        <div id="about_character" class="gui_character_1 width_100 height_100 float_left"></div>
                    `)
                )
            );

            document.getElementById('modal_page_bottom_container').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `
                    
                        about page

                        <div id="about_character" class="gui_character_1 width_25 height_25vh float_left"></div>
                        <div id="about_character" class="gui_character_1 width_25 height_25vh float_left"></div>
                        <div id="about_character" class="gui_character_1 width_25 height_25vh float_left"></div>
                        <div id="about_character" class="gui_character_1 width_25 height_25vh float_left"></div>


                    `)
                )
            );

        });
    };
    if (document.getElementById('modal_nav_top_link_5') != null) {
        document.getElementById('modal_nav_top_link_5').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_5');

        });
    };
    if (document.getElementById('modal_nav_top_link_6') != null) {
        document.getElementById('modal_nav_top_link_6').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_6');
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;

        });
    };

    // user logged info
    if (document.getElementById('modal_nav_top_link_7') != null) {
        document.getElementById('modal_nav_top_link_7').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_7');
            //state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;

        });
    };
    if (document.getElementById('modal_nav_top_link_8') != null) {
        document.getElementById('modal_nav_top_link_8').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_8');
            state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;


        });
    };
    if (document.getElementById('modal_nav_top_link_9') != null) {
        document.getElementById('modal_nav_top_link_9').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_9');
            state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;

        });
    };

    /*
    if (document.getElementById('modal_nav_top_link_10') != null) {
        document.getElementById('modal_nav_top_link_10').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_10');
            state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;

            // fill page container
            document.getElementById('modal_page_right_container').innerHTML = ``;
            document.getElementById('modal_page_right_container').appendChild(
                functions.Generate_new_fragment.appendChild(
                elements.element_lead('user info page')
                )
            );

            document.getElementById('modal_page_right_container').appendChild(
                functions.Generate_new_fragment.appendChild(
                functions.Generate_new_div('', '', `
                    
                        user info page


                    `)
                )
            );

            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;

        });
    };
    */

    if (document.getElementById('modal_nav_top_link_11') != null) {
        document.getElementById('modal_nav_top_link_11').addEventListener('click', (event) => {
            
            alert('modal_nav_top_link_11');
            state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;

        });
    };

    // page events
    if (document.getElementById('modal_page_top_close') != null) {
        document.getElementById('modal_page_top_close').addEventListener('click', (event) => {
            
            alert('modal_page_top_close');

        });
    };

    // menu events
    if (document.getElementById('modal_menu_top_close') != null) {
        document.getElementById('modal_menu_top_close').addEventListener('click', (event) => {
            
            alert('modal_menu_top_close');

        });
    };

    // pop events
    if (document.getElementById('modal_pop_top_close') != null) {
        document.getElementById('modal_pop_top_close').addEventListener('click', (event) => {
            
            alert('modal_pop_top_close');
            state.ui.modal.pop.top.transform = false;

        });
    };
};

Handle_render_data_value = () => {

    // gui
    if ((document.getElementById('component_app_status_transform_gui_top')) != null ) {
        document.getElementById('component_app_status_transform_gui_top').innerHTML = state.ui.gui.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.ui.gui.top_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.ui.gui.top_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_left').innerHTML = state.ui.gui.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.ui.gui.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.ui.gui.bottom_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.ui.gui.bottom_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_right').innerHTML = state.ui.gui.right.transform;
    };

    // modal nav
    if ((document.getElementById('component_app_status_transform_nav_top')) != null ) {
        document.getElementById('component_app_status_transform_nav_top').innerHTML = state.ui.modal.nav.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_left')) != null ) {
        document.getElementById('component_app_status_transform_nav_left').innerHTML = state.ui.modal.nav.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_bottom')) != null ) {
        document.getElementById('component_app_status_transform_nav_bottom').innerHTML = state.ui.modal.nav.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_right')) != null ) {
        document.getElementById('component_app_status_transform_nav_right').innerHTML = state.ui.modal.nav.right.transform;
    };

    // modal page
    if ((document.getElementById('component_app_status_transform_page_top')) != null ) {
        document.getElementById('component_app_status_transform_page_top').innerHTML = state.ui.modal.page.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_left')) != null ) {
        document.getElementById('component_app_status_transform_page_left').innerHTML = state.ui.modal.page.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_bottom')) != null ) {
        document.getElementById('component_app_status_transform_page_bottom').innerHTML = state.ui.modal.page.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_right')) != null ) {
        document.getElementById('component_app_status_transform_page_right').innerHTML = state.ui.modal.page.right.transform;
    };

    // modal menu
    if ((document.getElementById('component_app_status_transform_menu_top')) != null ) {
        document.getElementById('component_app_status_transform_menu_top').innerHTML = state.ui.modal.menu.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_left')) != null ) {
        document.getElementById('component_app_status_transform_menu_left').innerHTML = state.ui.modal.menu.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_bottom')) != null ) {
        document.getElementById('component_app_status_transform_menu_bottom').innerHTML = state.ui.modal.menu.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_right')) != null ) {
        document.getElementById('component_app_status_transform_menu_right').innerHTML = state.ui.modal.menu.right.transform;
    };

    // modal morph
    if ((document.getElementById('component_app_status_transform_morph_top')) != null ) {
        document.getElementById('component_app_status_transform_morph_top').innerHTML = state.ui.modal.morph.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_left')) != null ) {
        document.getElementById('component_app_status_transform_morph_left').innerHTML = state.ui.modal.morph.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_bottom')) != null ) {
        document.getElementById('component_app_status_transform_morph_bottom').innerHTML = state.ui.modal.morph.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_right')) != null ) {
        document.getElementById('component_app_status_transform_morph_right').innerHTML = state.ui.modal.morph.right.transform;
    };

    // modal gradient
    if ((document.getElementById('component_app_status_transform_gradient_top')) != null ) {
        document.getElementById('component_app_status_transform_gradient_top').innerHTML = state.ui.modal.gradient.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_left')) != null ) {
        document.getElementById('component_app_status_transform_gradient_left').innerHTML = state.ui.modal.gradient.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gradient_bottom').innerHTML = state.ui.modal.gradient.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_right')) != null ) {
        document.getElementById('component_app_status_transform_gradient_right').innerHTML = state.ui.modal.gradient.right.transform;
    };

    // modal pop
    if ((document.getElementById('component_app_status_transform_pop_top')) != null ) {
        document.getElementById('component_app_status_transform_pop_top').innerHTML = state.ui.modal.pop.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_left')) != null ) {
        document.getElementById('component_app_status_transform_pop_left').innerHTML = state.ui.modal.pop.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_bottom')) != null ) {
        document.getElementById('component_app_status_transform_pop_bottom').innerHTML = state.ui.modal.pop.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_right')) != null ) {
        document.getElementById('component_app_status_transform_pop_right').innerHTML = state.ui.modal.pop.right.transform;
    };

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

    if ((document.getElementById('time_onload')) != null ) {
        document.getElementById('time_onload').innerHTML = state.data.onload_time;
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

Handle_model_reset = () => {
    state.ui.modal.gradient.top.transform = false;
    state.ui.modal.gradient.left.transform = false;
    state.ui.modal.gradient.bottom.transform = false;
    state.ui.modal.gradient.right.transform = false;

    state.ui.modal.morph.top.transform = false;
    state.ui.modal.morph.left.transform = false;
    state.ui.modal.morph.bottom.transform = false;
    state.ui.modal.morph.right.transform = false;

    state.ui.modal.pop.top.transform = false;
    state.ui.modal.pop.left.transform = false;
    state.ui.modal.pop.bottom.transform = false;
    state.ui.modal.pop.right.transform = false;

    state.ui.modal.page.top.transform = false;
    state.ui.modal.page.left.transform = false;
    state.ui.modal.page.bottom.transform = false;
    state.ui.modal.page.right.transform = false;
    
    state.ui.modal.menu.top.transform = false;
    state.ui.modal.menu.left.transform = false;
    state.ui.modal.menu.bottom.transform = false;
    state.ui.modal.menu.right.transform = false;
    
    state.ui.modal.nav.top.transform = false;
    state.ui.modal.nav.left.transform = false;
    state.ui.modal.nav.bottom.transform = false;
    state.ui.modal.nav.right.transform = false;
};

Handle_ui_reset = () => {
    state.ui.modal.gradient.top.transform = false;
    state.ui.modal.gradient.left.transform = false;
    state.ui.modal.gradient.bottom.transform = false;
    state.ui.modal.gradient.right.transform = false;

    state.ui.modal.morph.top.transform = false;
    state.ui.modal.morph.left.transform = false;
    state.ui.modal.morph.bottom.transform = false;
    state.ui.modal.morph.right.transform = false;

    state.ui.modal.pop.top.transform = false;
    state.ui.modal.pop.left.transform = false;
    state.ui.modal.pop.bottom.transform = false;
    state.ui.modal.pop.right.transform = false;

    state.ui.modal.page.top.transform = false;
    state.ui.modal.page.left.transform = false;
    state.ui.modal.page.bottom.transform = false;
    state.ui.modal.page.right.transform = false;
    
    state.ui.modal.menu.top.transform = false;
    state.ui.modal.menu.left.transform = false;
    state.ui.modal.menu.bottom.transform = false;
    state.ui.modal.menu.right.transform = false;
    
    state.ui.modal.nav.top.transform = false;
    state.ui.modal.nav.left.transform = false;
    state.ui.modal.nav.bottom.transform = false;
    state.ui.modal.nav.right.transform = false;
    
    state.ui.gui.top.transform = false;
    state.ui.gui.top_left.transform = true;
    state.ui.gui.top_right.transform = false;

    state.ui.gui.bottom.transform = false;
    state.ui.gui.bottom_left.transform = false;
    state.ui.gui.bottom_right.transform = false;

    state.ui.gui.left.transform = false;
    state.ui.gui.right.transform = false;
};

// hooks
window.onload = () => {
    handle_time();
    handle_ui();
    handle_refresh_fire_data();
    handle_URL();
    events.handle_Function_Device_Resize(event);
};

window.onresize = () => {
    events.handle_Function_Device_Resize(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.ondevicemotion = function(event) {
    events.handle_Function_Device_Motion(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.ondeviceorientation = function(event) {
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.onorientationchange = () => {
    state.events.motion.orientation_string = orientation;
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.onbeforeunload = function(){
    //alert('leaving');
};

export default {
    Handle_return_state,
    Handle_ui_reset,
    Handle_model_reset
};