
// Imports
import style from './style.scss';
import functions from './imports/functions';
import elements from './imports/elements';
import events from './imports/events';
import imported_components from './imports/components';
import default_state from './imports/state';

// Initialization
let config = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382"
};
let dev_mode = false;
let state = default_state.default_state;
let handle_render_data_value;
let handle_localStorage;
let handle_ui_update;
let handle_ui_reset;
let handle_modal_reset;
let handle_add_inital_events;
let handle_get_state_from_events;
let handle_add_firebase_events;
let handle_add_gui_events;
let handle_add_shortcut_events;
let handle_add_status_events;
let handle_refresh_fire_data;
let handle_firebase_render_to_view;
let handle_repeated_fire_data_validation;
let shortcut_after_load;
let url;
let filtered_library_by_title;
let firebase_first_refresh;
let handle_WP_JSON;
let handle_URL;
let handle_return_state;
let handle_display_with_delay;
let handle_transform;
let components;
let initial_render;
let handle_time;
let handle_onload_time;
let handle_animation;
let firebase_library;
let wp_library;
let sound_1 = document.getElementById('componentSound');
let root = document.getElementById('root');
let content = document.getElementById('content');
let html_root = document.getElementById('html_root');
let fold_filler = document.getElementById('fold_filler');
let body = document.getElementById('body');
let returning_user = false;
let validated_user;
let validated_user_is_logged;
let firebase_login;
let local_login;

validated_user = {};
validated_user_is_logged = false;
firebase_first_refresh = true;
firebase_library = [];
filtered_library_by_title = [];
state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

// Functions
firebase.initializeApp(config);

firebase_login = () => {
    
    // nigel & 12345
    alert(localStorage.username);
    
    let selected_username = (document.getElementById('element_login_username').value);
    let selected_password = (document.getElementById('element_login_password').value);
    let name_does_not_exist = true;
    if (dev_mode) {
        alert('trying to log in: ' + selected_username + selected_password);
    };

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        // local user matched
        if (state.data.firebase.gnougn.library[i].child == 'roster') {
            if ((state.data.firebase.gnougn.library[i].username ) == selected_username) {
                
                name_does_not_exist = false;
                (() => {
                    if ((state.data.firebase.gnougn.library[i].password ) == selected_password) {
                            
                        if (dev_mode) {
                            alert('logging in: ' + selected_username + selected_password);
                            alert('welcome ' + selected_username);
                        };
                        localStorage.setItem("username", selected_username);
                        localStorage.setItem("password", selected_password);
                        validated_user = state.data.firebase.gnougn.library[i];
                        validated_user_is_logged = true;
                        return;
                    };

                    if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                        
                        if (dev_mode) {
                            alert('not logging in(bad pass): ' + selected_username + selected_password);
                        };
                    };
                })();
            };
        };

    };

    if (name_does_not_exist == true) {
        alert('there is no username that exist');
    }

    handle_ui_update();

};

local_login = () => {
    
    // nigel & 12345
    if (dev_mode) {
        alert(localStorage.username);
    };
    
    let selected_username = (localStorage.username);
    let selected_password = (localStorage.password);
    let name_does_not_exist = true;
    if (dev_mode) {
        alert('trying to log in: ' + selected_username + selected_password);
    };

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        // local user matched
        if (state.data.firebase.gnougn.library[i].child == 'roster') {
            if ((state.data.firebase.gnougn.library[i].username ) == selected_username) {
                
                name_does_not_exist = false;
                (() => {
                    if ((state.data.firebase.gnougn.library[i].password ) == selected_password) {
                        if (dev_mode) {
                            alert('logging in: ' + selected_username + selected_password);
                            alert(selected_username);
                        };
                        localStorage.setItem("username", selected_username);
                        localStorage.setItem("password", selected_password);
                        validated_user = state.data.firebase.gnougn.library[i];
                        validated_user_is_logged = true;
                        return;
                    };

                    if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                        
                        if (dev_mode) {
                            alert('not logging in(bad pass): ' + selected_username + selected_password);
                        };
                    };
                })();
            };
        };

    };

    if (name_does_not_exist == true) {
        alert('there is no username that exist');
    }

    handle_ui_update();

};

let firebase_logout = () => {

    alert('logging out');

    let selected_username = (document.getElementById('element_login_username').value);
    let selected_password = (document.getElementById('element_login_password').value);

    if (validated_user.username != null) {
        let local_user = {
            "username" : validated_user.username,
            "password" : "local_user",
        };
            localStorage.setItem("user", local_user);
            localStorage.setItem("username", local_user.username);
            localStorage.setItem("password", "local_user");
    };

    if (validated_user.username == null) {
        let local_user = {
            "username" : "local_user",
            "password" : "local_user",
        };
            localStorage.setItem("user", local_user);
            localStorage.setItem("username", local_user.username);
            localStorage.setItem("password", "local_user");
    };

    validated_user = {};
    validated_user_is_logged = false;

    handle_ui_update();
};

handle_animation = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                if (document.getElementById('playable_character_svg') != null) {

                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('playable_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('playable_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                
                    state.interaction.player_1.frame += 1;
                };

                if (document.getElementById('playable_character') != null) {
                    let playable_character = document.getElementById('playable_character');
                    playable_character.style =
                        'height: ' + (state.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
                };

                //stage
                // vr
                if (document.getElementById('vr_mg') != null) {
                    document.getElementById('vr_mg').style = "transform: translate3d(" +
                        (state.interaction.vr.clientX * 100) + "%, " +
                        (state.interaction.vr.clientY * 100) + "%, 0);"
                };

                state.motion.frame += 1;
                handle_ui_update();

            }, (1000 / state.motion.framerate));
    })();

};

handle_onload_time = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

    state.data.onload_time = state.data.time;
    handle_ui_update();

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
                state.motion.duration ++;
                console.log('duration: ' + state.motion.duration);

                handle_ui_update();

            }, (1000));
    })();

};

initial_render = () => {

    document.getElementById('lead').innerHTML = ``;
    document.getElementById('lead').appendChild(
        functions.Generate_new_fragment.appendChild(
        elements.element_lead()
        )
    );

    document.getElementById('fold').innerHTML = ``;
    document.getElementById('fold').appendChild(
        functions.Generate_new_fragment.appendChild(
        elements.element_fold()
        )
    );

    document.getElementById('bg').innerHTML = ``;
    document.getElementById('bg').appendChild(
        functions.Generate_new_fragment.appendChild(
        elements.element_bg()
        )
    );

};

// Functions
handle_return_state = () => {
    return state
};

handle_WP_JSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

url = '';
handle_URL = () => {

    setTimeout( () => {

        var parts = location.pathname.split('/');
        console.log(parts);

        window.scrollTo(0, 0);

        if (url == '') {

            // execute on route
            console.log('1. current url: blank');
            content.innerHTML = ``;
            content.appendChild(
                functions.Generate_new_fragment.appendChild(
                elements.element_root()
                )
            );

            // execute on timeout
            setTimeout( () => {
                console.log('to url: load');
                url = 'load';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'load') {

            // execute on route
            console.log('2. current url: load');

            // execute on timeout
            setTimeout( () => {
                console.log('to url: loading');
                url = 'loading';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'loading') {

            // execute on route
            console.log('3. current url: loading');

            // execute on timeout
            setTimeout( () => {
                console.log('to url: loaded');
                url = 'loaded';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'loaded') {

            // execute on route
            console.log('4. current url: loaded');

            // execute on timeout
            setTimeout( () => {
                console.log('to url: clear');
                url = 'clear';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'clear') {

            // execute on route
            console.log('5. current url: clear');

            // execute on timeout
            setTimeout( () => {
                console.log('to url: local');
                url = 'local';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'local') {

            // execute on route
            console.log('6. current url: local');

            // execute on timeout
            setTimeout( () => {
                console.log('to url: adapt_local');
                url = 'adapt_local';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'adapt_local') {

            // execute on route
            console.log('7. current url: adapt_local');

            // execute on timeout
            setTimeout( () => {
                console.log('to url: complete');
                url = 'complete';
                state.data.routes += (url + ', ');
                state.data.route = url;
                handle_URL();
            }, (100));

        };

        if (url == 'complete') {

            // execute on route
            console.log('8. current url: complete');

            initial_render();

            // order of after load
            setTimeout( () => {
                
                shortcut_after_load();

                if (parts[1] != '' && parts[1] != 'home') {
                    alert('shouldnt be home:' +  parts[1])
                };

                if (parts[1] == '' || parts[1] == 'home') {
                    alert('should be home or blank:' +  parts[1])
                };

            }, 1000);

        };

    }, 0);
};

let firebase_data_has_been_updated_and_is_now_writeable = false;
let firebase_has_responsed_with_this_updated_data = {};


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

let handle_empty_list = () => {

    // all
    if ((document.getElementById('wp_library_ol')) != null) {
        document.getElementById('wp_library_ol').innerHTML = '';
    };

    // all
    if ((document.getElementById('firebase_library_ol')) != null) {
        document.getElementById('firebase_library_ol').innerHTML = '';
    };
    
    // all
    if ((document.getElementById('sorted_library_by_time_down_ol')) != null) {
        document.getElementById('sorted_library_by_time_down_ol').innerHTML = '';
    };

    // all
    if ((document.getElementById('sorted_library_by_time_up_ol')) != null) {
        document.getElementById('sorted_library_by_time_up_ol').innerHTML = '';
    };

    // all
    if ((document.getElementById('element_ol_firebase_all')) != null) {
        document.getElementById('element_ol_firebase_all').innerHTML = '';
    };

    // specials
    if ((document.getElementById('element_ol_firebase_all_library')) != null) {
        document.getElementById('element_ol_firebase_all_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_all_users')) != null) {
        document.getElementById('element_ol_firebase_all_users').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_stream')) != null) {
        document.getElementById('element_ol_firebase_stream').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_feature')) != null) {
        document.getElementById('element_ol_firebase_feature').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_pagination')) != null) {
        document.getElementById('element_ol_firebase_pagination').innerHTML = '';
    };

    // filtered (all)
    if ((document.getElementById('filtered_library_by_title_ol')) != null) {
        document.getElementById('filtered_library_by_title_ol').innerHTML = '';
    };

    // children filtered
    if ((document.getElementById('filtered_library_child_library_by_title_ol')) != null) {
        document.getElementById('filtered_library_child_library_by_title_ol').innerHTML = '';
    };

    if ((document.getElementById('filtered_library_child_roster_by_title_ol')) != null) {
        document.getElementById('filtered_library_child_roster_by_title_ol').innerHTML = '';
    };

    if ((document.getElementById('filtered_library_child_interaction_by_title_ol')) != null) {
        document.getElementById('filtered_library_child_interaction_by_title_ol').innerHTML = '';
    };

    if ((document.getElementById('filtered_library_child_activity_by_title_ol')) != null) {
        document.getElementById('filtered_library_child_activity_by_title_ol').innerHTML = '';
    };

    if ((document.getElementById('filtered_library_child_messages_by_title_ol')) != null) {
        document.getElementById('filtered_library_child_messages_by_title_ol').innerHTML = '';
    };

    if ((document.getElementById('filtered_library_child_stream_by_title_ol')) != null) {
        document.getElementById('filtered_library_child_stream_by_title_ol').innerHTML = '';
    };

    // valid user 
    if ((document.getElementById('element_ol_firebase_validated_user')) != null) {
        document.getElementById('element_ol_firebase_validated_user').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_validated_user_library')) != null) {
        document.getElementById('element_ol_firebase_validated_user_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library')) != null) {
        document.getElementById('element_ol_firebase_sorted_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_time_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_time_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_time_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_time_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_likes_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_likes_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_likes_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_likes_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_views_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_views_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_views_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_views_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_title_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_title_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_title_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_title_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_random_tags')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_random_tags').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_tags')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_tags').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_authors')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_authors').innerHTML = '';
    };

};

let sorted_library = (x) => {  return filtered_library_by_title.sort(find_sort(x)) };
let sorted_library_time_up = (x) => {  return filtered_library_by_title.sort(find_sort('timeup')) };
let sorted_library_time_down = (x) => {  return filtered_library_by_title.sort(find_sort('timedown')) };
let sorted_library_views_up = (x) => {  return filtered_library_by_title.sort(find_sort('viewsup')) };
let sorted_library_views_down = (x) => {  return filtered_library_by_title.sort(find_sort('viewsdown')) };
let sorted_library_likes_up = (x) => {  return filtered_library_by_title.sort(find_sort('likesup')) };
let sorted_library_likes_down = (x) => {  return filtered_library_by_title.sort(find_sort('likesdown')) };
let sorted_library_title_up = (x) => {  return filtered_library_by_title.sort(find_sort('titleup')) };
let sorted_library_title_down = (x) => {  return filtered_library_by_title.sort(find_sort('titledown')) };

handle_refresh_fire_data = () => {

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

handle_firebase_render_to_view = () => {
    // render library
    (() => {

        setTimeout(function() {
            wp_library = [];
            firebase_library = [];
            if ((firebase_has_responsed_with_this_updated_data) != null) {

                // create array
                if ((wp_library) != null) {
                    for (var i = 0; i < state.data.wordpress.length; i++) {
                        wp_library.push(state.data.wordpress[i]);
                    };
                };

                    // render array
                    for (var i = 0; i < wp_library.length; i++) {
                        document.getElementById('wp_library_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_wp_li_post(wp_library[i])
                            )
                        );
                    };

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
                filtered_library_by_title = [];

                for (var i = 0; i < firebase_library.length; i++) {
                    if ((firebase_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                        filtered_library_by_title.push(firebase_library[i]);
                    };
                    console.log('filtered_library_by_title[i]');
                    console.log(filtered_library_by_title[i]);
                };

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

                for (var i = 0; i < sorted_library('timeup').length; i++) {
                    sorted_library_by_time_up.push(sorted_library('timeup')[i]);
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
                for (var i = 0; i < sorted_library('timedown').length; i++) {
                    sorted_library_by_time_down.push(sorted_library('timedown')[i]);
                };

                    // render array
                    for (var i = 0; i < sorted_library_by_time_down.length; i++) {
                        document.getElementById('sorted_library_by_time_down_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(sorted_library_by_time_down[i])
                            )
                        );
                    };

                // render all sort
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    document.getElementById('element_ol_firebase_all').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_li_post(filtered_library_by_title[i])
                        )
                    );
                };

                // render sorted_library_time_up
                for (var i = 0; i < sorted_library('timeup').length; i++) {
                    console.log('sorted_library(timeup)[i]');
                    console.log(sorted_library('timeup')[i]);

                    if (sorted_library('timeup')[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_time_up
                for (var i = 0; i < sorted_library('timeup').length; i++) {
                    console.log('sorted_library(timeup)[i]');
                    console.log(sorted_library('timeup')[i]);

                    if (sorted_library('timeup')[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_time_up').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_time_down
                for (var i = 0; i < sorted_library('timedown').length; i++) {
                    console.log('sorted_library(timedown)[i]');
                    console.log(sorted_library('timedown')[i]);

                    if (sorted_library('timedown')[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_time_down').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_title_up
                for (var i = 0; i < sorted_library_title_up(state.data.sort).length; i++) {
                    console.log('sorted_library_title_up(state.data.sort)[i]');
                    console.log(sorted_library_title_up(state.data.sort)[i]);

                    if (sorted_library_title_up(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_title_up').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_title_down
                for (var i = 0; i < sorted_library_title_down(state.data.sort).length; i++) {
                    console.log('sorted_library_title_down(state.data.sort)[i]');
                    console.log(sorted_library_title_down(state.data.sort)[i]);

                    if (sorted_library_title_down(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_title_down').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // validated user post
                // local user post

            };

        }, 0);

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

        // target "gnougn" library
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
                    handle_localStorage();
                    handle_firebase_render_to_view();
                    console.clear();
                    if (dev_mode) {
                        alert('connected!');
                    };
                }, 0);

                if(localStorage.username == 'local_user') {
                    if (dev_mode) {
                        alert('there is a local user: ' + localStorage.username);
                    };
                };

                if(localStorage.username != 'local_user') {
                    if (dev_mode) {
                        alert('there is not a local user: ' + localStorage.username);
                    };
                    local_login();
                };

                if (firebase_first_refresh == true) {
                    firebase_first_refresh = false;
                    if (dev_mode) {
                        alert('first firebase load');
                    };
                    console.log(firebase_has_responsed_with_this_updated_data.gnougn);
                    return;
                };

                if (firebase_first_refresh == false) {
                    if (dev_mode) {
                        alert('not first firebase load');
                    };
                    console.log(firebase_has_responsed_with_this_updated_data.gnougn);
                    return;
                };

            };

        };

    };

}, 1000/24);


shortcut_after_load = () => {
    //alert('shortcut_after_load: begin loading animation now that assets have loaded');

    //document.getElementById('wp_root').classList = ``;
    //document.getElementById('html_root').classList = ``;
    document.getElementById('fold_filler').classList = `display_none`;
    document.getElementById('controls_after_fold').classList = `bg_white width_100 position_relative margin_auto float_left `;

    if (returning_user == false) {
        //alert('welcome new boi');
        //alert(localStorage.username);
    };

    if (returning_user == true) {
        //alert('welcome back');
        //alert(localStorage.username);
    };

    setTimeout(function() {
        state.modal.menu.top.transform = true;
    }, 1000);

    // fill with firebase data
    handle_refresh_fire_data();
    handle_repeated_fire_data_validation;

    // add defulat events
    handle_add_firebase_events();
    handle_add_inital_events();
    handle_add_gui_events();
    handle_add_shortcut_events();
    handle_add_status_events();

    handle_ui_update();
};

handle_render_data_value = () => {

    // gui
    if (validated_user_is_logged) {
        if ((document.getElementById('local_validated_user_info')) != null ) {
            document.getElementById('local_validated_user_info').innerHTML = validated_user.username;
        };
    };

    if (validated_user_is_logged == false) {
        if ((document.getElementById('local_validated_user_info')) != null ) {
            document.getElementById('local_validated_user_info').innerHTML = 'please login: ' + localStorage.username;
        };
    };

    // gui
    if ((document.getElementById('component_app_status_transform_gui_top')) != null ) {
        document.getElementById('component_app_status_transform_gui_top').innerHTML = state.gui.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.gui.top_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.gui.top_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_left').innerHTML = state.gui.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.gui.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.gui.bottom_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.gui.bottom_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_right').innerHTML = state.gui.right.transform;
    };

    // modal nav
    if ((document.getElementById('component_app_status_transform_nav_top')) != null ) {
        document.getElementById('component_app_status_transform_nav_top').innerHTML = state.modal.nav.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_left')) != null ) {
        document.getElementById('component_app_status_transform_nav_left').innerHTML = state.modal.nav.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_bottom')) != null ) {
        document.getElementById('component_app_status_transform_nav_bottom').innerHTML = state.modal.nav.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_right')) != null ) {
        document.getElementById('component_app_status_transform_nav_right').innerHTML = state.modal.nav.right.transform;
    };

    // modal page
    if ((document.getElementById('component_app_status_transform_page_top')) != null ) {
        document.getElementById('component_app_status_transform_page_top').innerHTML = state.modal.page.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_left')) != null ) {
        document.getElementById('component_app_status_transform_page_left').innerHTML = state.modal.page.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_bottom')) != null ) {
        document.getElementById('component_app_status_transform_page_bottom').innerHTML = state.modal.page.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_right')) != null ) {
        document.getElementById('component_app_status_transform_page_right').innerHTML = state.modal.page.right.transform;
    };

    // modal menu
    if ((document.getElementById('component_app_status_transform_menu_top')) != null ) {
        document.getElementById('component_app_status_transform_menu_top').innerHTML = state.modal.menu.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_left')) != null ) {
        document.getElementById('component_app_status_transform_menu_left').innerHTML = state.modal.menu.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_bottom')) != null ) {
        document.getElementById('component_app_status_transform_menu_bottom').innerHTML = state.modal.menu.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_right')) != null ) {
        document.getElementById('component_app_status_transform_menu_right').innerHTML = state.modal.menu.right.transform;
    };

    // modal morph
    if ((document.getElementById('component_app_status_transform_morph_top')) != null ) {
        document.getElementById('component_app_status_transform_morph_top').innerHTML = state.modal.morph.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_left')) != null ) {
        document.getElementById('component_app_status_transform_morph_left').innerHTML = state.modal.morph.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_bottom')) != null ) {
        document.getElementById('component_app_status_transform_morph_bottom').innerHTML = state.modal.morph.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_right')) != null ) {
        document.getElementById('component_app_status_transform_morph_right').innerHTML = state.modal.morph.right.transform;
    };

    // modal gradient
    if ((document.getElementById('component_app_status_transform_gradient_top')) != null ) {
        document.getElementById('component_app_status_transform_gradient_top').innerHTML = state.modal.gradient.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_left')) != null ) {
        document.getElementById('component_app_status_transform_gradient_left').innerHTML = state.modal.gradient.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gradient_bottom').innerHTML = state.modal.gradient.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_right')) != null ) {
        document.getElementById('component_app_status_transform_gradient_right').innerHTML = state.modal.gradient.right.transform;
    };

    // modal pop
    if ((document.getElementById('component_app_status_transform_pop_top')) != null ) {
        document.getElementById('component_app_status_transform_pop_top').innerHTML = state.modal.pop.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_left')) != null ) {
        document.getElementById('component_app_status_transform_pop_left').innerHTML = state.modal.pop.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_bottom')) != null ) {
        document.getElementById('component_app_status_transform_pop_bottom').innerHTML = state.modal.pop.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_right')) != null ) {
        document.getElementById('component_app_status_transform_pop_right').innerHTML = state.modal.pop.right.transform;
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
    if ((document.getElementById('current_mouse')) != null ) {
        document.getElementById('current_mouse').innerHTML = 'clientX: ' + state.events.mouse.current.clientX + '. clientY: ' + state.events.mouse.current.clientY +'.';
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
        document.getElementById('interaction_character_clientX').innerHTML = state.interaction.player_1.clientX;
    };

    if ((document.getElementById('interaction_character_clientY')) != null ) {
        document.getElementById('interaction_character_clientY').innerHTML = state.interaction.player_1.clientY;
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

    if ((document.getElementById('history_route')) != null ) {
        document.getElementById('history_route').innerHTML = state.data.routes;
    };

    if ((document.getElementById('current_route')) != null ) {
        document.getElementById('current_route').innerHTML = state.data.route;
    };

};

handle_localStorage = () => {

    let local_user = {
        "username" : "local_user",
        "password" : "local_user",
    };

    if (localStorage.user == null) {
        localStorage.setItem("user", local_user);
        localStorage.setItem("username", local_user.username);
        localStorage.setItem("return_viewer", "false");
        returning_user = false;
        console.log('welcome first timer');
        return
    };

    if (localStorage.user != null) {
        localStorage.setItem("return_viewer", "true");
        returning_user = true;
        console.log('welcome back');
    };
};

handle_ui_update = () => {
    handle_display_with_delay();
    handle_transform();
    handle_render_data_value();
};

handle_modal_reset = () => {
    if (dev_mode) {
        alert('handle_modal_reset');
    };
    // disactives
    state.modal.gradient.top.transform = false;
    state.modal.gradient.left.transform = false;
    state.modal.gradient.bottom.transform = false;
    state.modal.gradient.right.transform = false;

    state.modal.morph.top.transform = false;
    state.modal.morph.left.transform = false;
    state.modal.morph.bottom.transform = false;
    state.modal.morph.right.transform = false;

    state.modal.pop.top.transform = false;
    state.modal.pop.left.transform = false;
    state.modal.pop.bottom.transform = false;
    state.modal.pop.right.transform = false;

    state.modal.page.top.transform = false;
    state.modal.page.left.transform = false;
    state.modal.page.bottom.transform = false;
    state.modal.page.right.transform = false;
    
    state.modal.menu.top.transform = false;
    state.modal.menu.left.transform = false;
    state.modal.menu.bottom.transform = false;
    state.modal.menu.right.transform = false;
    
    handle_ui_update();
};

handle_ui_reset = () => {

    if (dev_mode) {
        alert('handle_ui_reset');
    };
    // disactives
    state.modal.gradient.top.transform = false;
    state.modal.gradient.left.transform = false;
    state.modal.gradient.bottom.transform = false;
    state.modal.gradient.right.transform = false;

    state.modal.morph.top.transform = false;
    state.modal.morph.left.transform = false;
    state.modal.morph.bottom.transform = false;
    state.modal.morph.right.transform = false;

    state.modal.pop.top.transform = false;
    state.modal.pop.left.transform = false;
    state.modal.pop.bottom.transform = false;
    state.modal.pop.right.transform = false;

    state.modal.page.top.transform = false;
    state.modal.page.left.transform = false;
    state.modal.page.bottom.transform = false;
    state.modal.page.right.transform = false;
    
    state.modal.menu.top.transform = false;
    state.modal.menu.left.transform = false;
    state.modal.menu.bottom.transform = false;
    state.modal.menu.right.transform = false;
    
    state.modal.nav.top.transform = false;
    state.modal.nav.left.transform = false;
    state.modal.nav.bottom.transform = false;
    state.modal.nav.right.transform = false;
    
    state.gui.top.transform = false;
    state.gui.top_left.transform = false;
    state.gui.top_right.transform = false;
    state.gui.bottom.transform = false;
    state.gui.bottom_left.transform = false;
    state.gui.bottom_right.transform = false;
    state.gui.left.transform = false;
    state.gui.right.transform = false;

    // active
    state.gui.top_left.transform = true;
    handle_ui_update();
};

handle_add_firebase_events = () => {

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
};

handle_add_shortcut_events = () => {

    if (document.getElementById('shortcut_after_load') != null) {
        document.getElementById('shortcut_after_load').addEventListener('click', (event) => {
            shortcut_after_load();
        });
    };

    if (document.getElementById('shortcut_handle_ui_reset') != null) {
        document.getElementById('shortcut_handle_ui_reset').addEventListener('click', (event) => {
            handle_ui_reset();
        });
    };

};


handle_add_gui_events = () => {

    if (document.getElementById('tab_1') != null) {
        document.getElementById('tab_1').addEventListener('click', (event) => {
            alert('tab_1');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_2') != null) {
        document.getElementById('tab_2').addEventListener('click', (event) => {
            alert('tab_2');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_3') != null) {
        document.getElementById('tab_3').addEventListener('click', (event) => {
            alert('tab_3');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_4') != null) {
        document.getElementById('tab_4').addEventListener('click', (event) => {
            alert('tab_4');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_5') != null) {
        document.getElementById('tab_5').addEventListener('click', (event) => {
            alert('tab_5');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_6') != null) {
        document.getElementById('tab_6').addEventListener('click', (event) => {
            alert('tab_6');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_7') != null) {
        document.getElementById('tab_7').addEventListener('click', (event) => {
            alert('tab_7');
            handle_ui_update();
        });
    };

    if (document.getElementById('tab_8') != null) {
        document.getElementById('tab_8').addEventListener('click', (event) => {
            alert('tab_8');
            handle_ui_update();
        });
    };

    if (document.getElementById('gui_top_left') != null) {
        document.getElementById('gui_top_left').addEventListener('click', (event) => {
            //alert('gui_top_left');
            state.gui.top_right.transform = !state.gui.top_right.transform;
            handle_ui_update();
        });
    };
    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            //alert('gui_top');
            state.modal.page.top.transform = !state.modal.page.top.transform;
            handle_ui_update();
        });
    };
    if (document.getElementById('gui_top_right') != null) {
        document.getElementById('gui_top_right').addEventListener('click', (event) => {
            //alert('gui_top_right');

            state.gui.top_left.transform = !state.gui.top_left.transform;
            state.gui.top.transform = !state.gui.top.transform;
            state.gui.top_right.transform = !state.gui.top_right.transform;

            state.gui.left.transform = !state.gui.left.transform;
            state.gui.right.transform = !state.gui.right.transform;

            state.gui.bottom_left.transform = !state.gui.bottom_left.transform;
            state.gui.bottom.transform = !state.gui.bottom.transform;
            state.gui.bottom_right.transform = !state.gui.bottom_right.transform;
            handle_ui_update();
        });
    };
    if (document.getElementById('gui_left') != null) {
        document.getElementById('gui_left').addEventListener('click', (event) => {
            alert('gui_left');
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
        });
    };
    if (document.getElementById('gui_right') != null) {
        document.getElementById('gui_right').addEventListener('click', (event) => {
            alert('gui_right');
            state.modal.menu.right.transform = !state.modal.menu.right.transform;
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
            state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
        });
    };
    if (document.getElementById('gui_bottom_right') != null) {
        document.getElementById('gui_bottom_right').addEventListener('click', (event) => {
            alert('gui_bottom_right');
        });
    };
};

handle_add_status_events = () => {

    if ( (document.getElementById('component_app_status_transform_gui_top')) != null ) {

        // gui - top
        document.getElementById('component_app_status_transform_gui_top').addEventListener("click", function(event) {
            state.gui.top.transform = !state.gui.top.transform;
        });

        // gui - top_left
        document.getElementById('component_app_status_transform_gui_top_left').addEventListener("click", function(event) {
            state.gui.top_left.transform = !state.gui.top_left.transform;
        });

        // gui - top_right
        document.getElementById('component_app_status_transform_gui_top_right').addEventListener("click", function(event) {
            state.gui.top_right.transform = !state.gui.top_right.transform;
        });

        // gui - left
        document.getElementById('component_app_status_transform_gui_left').addEventListener("click", function(event) {
            state.gui.left.transform = !state.gui.left.transform;
        });

        // gui - bottom
        document.getElementById('component_app_status_transform_gui_bottom').addEventListener("click", function(event) {
            state.gui.bottom.transform = !state.gui.bottom.transform;
        });

        // gui - bottom_left
        document.getElementById('component_app_status_transform_gui_bottom_left').addEventListener("click", function(event) {
            state.gui.bottom_left.transform = !state.gui.bottom_left.transform;
        });

        // gui - bottom_right
        document.getElementById('component_app_status_transform_gui_bottom_right').addEventListener("click", function(event) {
            state.gui.bottom_right.transform = !state.gui.bottom_right.transform;
        });

        // gui - right
        document.getElementById('component_app_status_transform_gui_right').addEventListener("click", function(event) {
            state.gui.right.transform = !state.gui.right.transform;
        });
    };

    if ( (document.getElementById('component_app_status_transform_nav_top')) != null ) {

        // nav - top
        document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function(event) {
            state.modal.nav.top.transform = !state.modal.nav.top.transform;
        });

        // nav - left
        document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function(event) {
            state.modal.nav.left.transform = !state.modal.nav.left.transform;
        });

        // nav - bottom
        document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function(event) {
            state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
        });

        // nav - right
        document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function(event) {
            state.modal.nav.right.transform = !state.modal.nav.right.transform;
        });

    };

    if ( (document.getElementById('component_app_status_transform_page_top')) != null ) {

        // page - top
        document.getElementById('component_app_status_transform_page_top').addEventListener("click", function(event) {
            state.modal.page.top.transform = !state.modal.page.top.transform;
        });

        // page - left
        document.getElementById('component_app_status_transform_page_left').addEventListener("click", function(event) {
            state.modal.page.left.transform = !state.modal.page.left.transform;
        });

        // page - bottom
        document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function(event) {
            state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
        });

        // page - right
        document.getElementById('component_app_status_transform_page_right').addEventListener("click", function(event) {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });

    };

    // menu
    if ( (document.getElementById('component_app_status_transform_menu_top')) != null ) {

        // menu - top
        document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function(event) {
            state.modal.menu.top.transform = !state.modal.menu.top.transform;
        });

        // menu - left
        document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function(event) {
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
        });

        // menu - bottom
        document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function(event) {
            state.modal.menu.bottom.transform = !state.modal.menu.bottom.transform;
        });

        // menu - right
        document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function(event) {
            state.modal.menu.right.transform = !state.modal.menu.right.transform;
        });

    };


    // pop
    if ( (document.getElementById('component_app_status_transform_pop_top')) != null ) {

        // pop - top
        document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function(event) {
            state.modal.pop.top.transform = !state.modal.pop.top.transform;
        });

        // pop - left
        document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function(event) {
            state.modal.pop.left.transform = !state.modal.pop.left.transform;
        });

        // pop - bottom
        document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function(event) {
            state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
        });

        // pop - right
        document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function(event) {
            state.modal.pop.right.transform = !state.modal.pop.right.transform;
        });

    };

    // gradient
    if ( (document.getElementById('component_app_status_transform_gradient_top')) != null ) {

        // gradient - top
        document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function(event) {
            state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
        });

        // gradient - left
        document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function(event) {
            state.modal.gradient.left.transform = !state.modal.gradient.left.transform;
        });

        // gradient - bottom
        document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function(event) {
            state.modal.gradient.bottom.transform = !state.modal.gradient.bottom.transform;
        });

        // gradient - right
        document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function(event) {
            state.modal.gradient.right.transform = !state.modal.gradient.right.transform;
        });

    };

    // morph
    if ( (document.getElementById('component_app_status_transform_morph_top')) != null ) {

        // morph - top
        document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function(event) {
            state.modal.morph.top.transform = !state.modal.morph.top.transform;
        });

        // morph - left
        document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function(event) {
            state.modal.morph.left.transform = !state.modal.morph.left.transform;
        });

        // morph - bottom
        document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function(event) {
            state.modal.morph.bottom.transform = !state.modal.morph.bottom.transform;
        });

        // morph - right
        document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function(event) {
            state.modal.morph.right.transform = !state.modal.morph.right.transform;
        });

    };
};

handle_get_state_from_events = () => {
    state = events.handle_return_state_from_events();
    //alert('state.modal.nav.left.transform: ' + state.modal.nav.left.transform);
    handle_ui_update();
};

handle_add_inital_events = () => {

    if (root != null) {

        // scroll
        root.addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            handle_get_state_from_events();
        });

        // events
        body.addEventListener('keydown', (event) => {
            events.handle_Function_Key_Down(event);
            handle_get_state_from_events();
            //sound_1.play();
        });

        body.addEventListener('keyup', (event) => {
            events.handle_Function_Key_Up(event);
            handle_get_state_from_events();
        });

        root.addEventListener('mousemove', (event) => {
            events.handle_Function_Mouse_Move(event);
            handle_get_state_from_events();
        });

        root.addEventListener('mouseenter', (event) => {
            events.handle_Function_Mouse_Enter(event);
            handle_get_state_from_events();
        });

        root.addEventListener('mouseleave', (event) => {
            events.handle_Function_Mouse_Leave(event);
            handle_get_state_from_events();
        });

        root.addEventListener('mouseup', (event) => {
            events.handle_Function_Mouse_Up(event);
            handle_get_state_from_events();
        });

        root.addEventListener('mousedown', (event) => {
            //events.handle_Function_Mouse_Down(event);
            //handle_get_state_from_events();
        });

        root.addEventListener('click', (event) => {
            events.handle_Function_Mouse_Down(event);
            handle_get_state_from_events();

        });

        root.addEventListener('touchmove', (event) => {
            events.handle_Function_Touch_Move(event);
            handle_get_state_from_events();
        });

        root.addEventListener('touchstart', (event) => {
            events.handle_Function_Touch_Start(event);
            handle_get_state_from_events();
        });

        root.addEventListener('touchend', (event) => {
            events.handle_Function_Touch_End(event);
            handle_get_state_from_events();
        });

    };
};

handle_display_with_delay = () => {
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


handle_transform = () => {
    components = imported_components.get_components_handled();
    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            functions.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

// hooks
window.onload = () => {
    handle_onload_time();
    handle_time();
    handle_animation();
    handle_localStorage();
    sound_1.play();

    handle_WP_JSON('https://antenuh.com/feed/json',
    function(err, data) {
        console.log('handle_WP_JSON');
      if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
        console.log('wp count: ' + data.items);
        state.data.wordpress = data.items;

        for (var i = 0; i < state.data.wordpress.length; i++) {
            let wp_post = state.data.wordpress[i];
            console.log(wp_post);
        };

      };

    });

    // wordpress
    if (document.getElementById('form_submit') != null) {
        // Set firebase data
        setTimeout(function() {
            document.getElementById('form_submit').children[0].children[0].children[3].addEventListener('click', (event) => {
                alert('form_submit');
            });
        }, 5000);
    };

    handle_URL();
};

window.onresize = () => {

    state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
    state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

    events.handle_Function_Device_Resize(event);
    initial_render();
    handle_ui_update();
};

window.ondevicemotion = function(event) {
};

window.ondeviceorientation = function(event) {
};

window.onorientationchange = () => {
};

window.onbeforeunload = function(){
};

export default {
    handle_return_state,
    handle_ui_reset,
    handle_modal_reset
};