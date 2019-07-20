
'use strict';

// Imports
import style from './style';
import imported_functions from './partials/functions';

let local_checked = false;
let user_logged = false;
let first_load = true;

let sorting_type = 'timeup';
let sorted_library;
let filtered_library;

let state = {

    app: {
        route: '/'
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
    }

};

// Declaration
let functions;

// Assignment
functions = imported_functions;

let default_user = {
    "username" : "null_local_user",
    "password" : "xxx",
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg"
};

let validated_user = {};
let validated_user_data = {};

let is_logged = false;

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

        alert('welcome new user!');
        return
    };

    if (localStorage.user != null) {

        //alert('welcome ' + 'returning user!');

        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {


            // local user matched
            if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username == "null_local_user")) {
                //alert('create an account');
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
                        //alert('password match');

                        alert('signing in: ' + state.data.firebase.gnougn.library[i].id + ', ' + state.data.firebase.gnougn.library[i].username);

                        validated_user = state.data.firebase.gnougn.library[i];
                    }
                };

                if (localStorage.signed_in == "false") {
                    alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!')
                };

            };
        };

        return
    };

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
let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;

firebase.initializeApp(config);
let find_sort = (mode) => {

    if (mode == null) {

        if ((document.getElementById('element_input_sorting_type')) == null) {
            sorting_type = 'likesup';
        }

        if ((document.getElementById('element_input_sorting_type')) != null) {
            if (document.getElementById('element_input_sorting_type').value == 'likesup' || '') {
                sorting_type = 'likesup';
            }

            if (document.getElementById('element_input_sorting_type').value == 'likesdown') {
                sorting_type = 'likesdown';
            }

            if (document.getElementById('element_input_sorting_type').value == 'viewsup') {
                sorting_type = 'viewsup';
            }

            if (document.getElementById('element_input_sorting_type').value == 'viewsdown') {
                sorting_type = 'viewsdown';
            }

            if (document.getElementById('element_input_sorting_type').value == 'timeup') {
                sorting_type = 'timeup';
            }

            if (document.getElementById('element_input_sorting_type').value == 'timedown') {
                sorting_type = 'timedown';
            }

            if (document.getElementById('element_input_sorting_type').value == 'titleup') {
                sorting_type = 'titleup';
            }

            if (document.getElementById('element_input_sorting_type').value == 'titledown') {
                sorting_type = 'titledown';
            }

        };

    };


    if (mode != null) {

        sorting_type = mode;

    };

    if (sorting_type == 'likesup') {
            
            if (sorting_type == 'likesup') {
                return function(a, b) {
                    return a.likes - b.likes
                }
            };
    };

    if (sorting_type == 'likesdown') {

            if (sorting_type == 'likesdown') {
                return function(a, b) {
                    return b.likes - a.likes
                }
            };
    };

    if (sorting_type == 'viewsup') {

            if (sorting_type == 'viewsup') {
                return function(a, b) {
                    return a.views - b.views
                }
            };

    };

    if (sorting_type == 'viewsdown') {

            if (sorting_type == 'viewsdown') {
                return function(a, b) {
                    return b.views - a.views
                }
            };

    };

    if (sorting_type == 'timeup') {

            if (sorting_type == 'timeup') {
                return function(a, b) {
                    return b.time - a.time
                }
            };

    };

    if (sorting_type == 'timedown') {
            
            if (sorting_type == 'timedown') {
                return function(a, b) {
                    return Math.abs(a.time - b.time);
                }
            };

    };

    if (sorting_type == 'titleup') {

            if (sorting_type == 'titleup') {
                return function(a, b) {
                    return b.title - a.title
                }
            };

    };

    if (sorting_type == 'titledown') {
            
            if (sorting_type == 'titledown') {
                return function(a, b) {
                    return a.title - b.title
                }
            };

    };

};

let handle_empty_list = () => {

    if ((document.getElementById('element_ol_firebase_all')) != null) {
        document.getElementById('element_ol_firebase_all').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_library')) != null) {
        document.getElementById('element_ol_firebase_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_library_roster')) != null) {
        document.getElementById('element_ol_firebase_library_roster').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_filtered_library')) != null) {
        document.getElementById('element_ol_firebase_filtered_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library')) != null) {
        document.getElementById('element_ol_firebase_sorted_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_logged_user')) != null) {
        document.getElementById('element_ol_firebase_logged_user').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_logged_user_follows_user_library')) != null) {
        document.getElementById('element_ol_firebase_logged_user_follows_user_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_logged_user_followers_user_library')) != null) {
        document.getElementById('element_ol_firebase_logged_user_followers_user_library').innerHTML = '';
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

let handle_firebase_render_to_view = () => {
    // render library
    (() => {

        setTimeout(function() {

            if ((firebase_has_responsed_with_this_updated_data) != null) {
                
                //  sort
                sorted_library = firebase_has_responsed_with_this_updated_data.gnougn.library.sort(find_sort());

                // render sort
                for (var i = 0; i < sorted_library.length; i++) {

                    console.log('sorted_library[i]');
                    
                    console.log(sorted_library[i]);

                };

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
                    check_local_user();
                    first_load = false;
                };

                setTimeout(function() {
                    handle_firebase_render_to_view();

                    //console.clear();
                    //alert('contected!');
                }, 0);


                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);

let device_equals_desktop = () => {
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
        return true
    } else {
        return false
    };
};

let device_equals_mobile = () => {
if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
        return true
    } else {
        return false
    };
};

let device_equals_ipad = () => {
if (/iPad/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    };
};

let device_equals_iphone = () => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    };
};


let handle_dice_roll = (max_dice_number) => {
        return (Math.floor(Math.random() * max_dice_number) + 1)
};


let root = document.getElementById('root');

let handle_time = () => {
    (() => {
        setInterval( () => {

            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date();

            /*
            let date_sentence_date = days[date.getDay()];
            let date_sentence_month = days[date.getMonth()];
            let date_sentence_day = days(date.getDay());
            let date_sentence_year = days(date.getYear());
            let date_sentence_hours = days(date.getHours());
            let date_sentence_minutes = days(date.getMinutes());
            let date_sentence_seconds = days(date.getSeconds());
            let date_sentence_milliseconds = days(date.getMilliseconds());
            */

            let date_sentence = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
            
            let date_sentence_date = ((days[date.getDay()]));
            let date_sentence_month = ((months[date.getMonth()]));
            let date_sentence_day = ((date.getDay()));
            let date_sentence_year = (date.getFullYear());
            let date_sentence_hours = (date.getHours());
            let date_sentence_minutes = (date.getMinutes());
            let date_sentence_seconds = (date.getSeconds());
            let date_sentence_milliseconds = (date.getMilliseconds());

            console.log('date_sentence_date: ' + date_sentence_date);
            console.log('date_sentence_month: ' + date_sentence_month);
            console.log('date_sentence_day: ' + date_sentence_day);
            console.log('date_sentence_year: ' + date_sentence_year);
            console.log('date_sentence_hours: ' + date_sentence_hours);
            console.log('date_sentence_minutes: ' + date_sentence_minutes);
            console.log('date_sentence_seconds: ' + date_sentence_seconds);
            console.log('date_sentence_milliseconds: ' + date_sentence_milliseconds);

            console.log(date_sentence);

            console.log('handle_dice_roll: ' + handle_dice_roll(6))

        }, 1000);
    })();
};

console.log(style);

console.log(device_equals_desktop());

console.log(device_equals_ipad());

console.log(device_equals_iphone());

let delay = (URL) => {
    setTimeout( () => { window.location = URL }, 2500 );
};



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

// Delete
let deleteWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from deleteWhoListings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};

// Update
let likeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};

// Update
let dislikeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes -= 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
    console.log(changeThisValue);

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};

// Update
let viewWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from viewWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.views += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};

// events
setTimeout(

 (() => {

    // Desktop
    if (device_equals_desktop) {

        root.addEventListener('mousemove', (event) => {
            state.events.mouse.movetimer = 0;
        });

        root.addEventListener('mouseleave', (event) => {
            instance.mouseleave = true;
            instance.mouseenter = false;
        });

        root.addEventListener('mouseenter', (event) => {
            instance.mouseenter = true;
            instance.mouseleave = false;
        });

        root.addEventListener('mousedown', (event) => {
            state.events.mouse.movetimer = 0;

        });

        root.addEventListener('mouseup', (event) => {

        });

        window.addEventListener('scroll', (event) => {
            state.events.mouse.movetimer = 0;

            console.log(event);
            //alert('yup');

            // scrolling
            console.log('document.body.clientWidth: ' + document.body.clientWidth);
            console.log('document.body.clientHeight: ' + document.body.clientHeight);
            console.log('document.body.scrollLeft: ' + document.body.scrollLeft);
            console.log('document.body.scrollTop: ' + document.body.scrollTop);
            console.log('document.body.scrollWidth: ' + document.body.scrollWidth);
            console.log('document.body.scrollHeight: ' + document.body.scrollHeight);

            state.ui.root.clientHeight = document.body.clientHeight;
            state.ui.root.clientWidth = document.body.clientWidth;

            state.ui.root.scrollHeight = document.body.scrollHeight;
            state.ui.root.scrollWidth = document.body.scrollWidth;

            state.ui.root.scrollTop = document.body.scrollTop;
            state.ui.root.scrollLeft = document.body.scrollLeft;

            // instances      
            if (document.body.scrollTop > state.ui.root.component_app_gui_scroll_y_position) {
                console.log('state.ui.root.component_app_gui_scroll_y_position increasing');
                console.log("instance: wheel up");
            }

            if (document.body.scrollTop < state.ui.root.component_app_gui_scroll_y_position) {
                console.log('state.ui.root.component_app_gui_scroll_y_position decreasing');
                console.log("instance: wheel down");
            }

            if (document.body.scrollTop === 0) {
                //alert("instance: top");
                instance.startedscrolling = false;
            }

            if (document.body.scrollTop > 0) {
                //alert("instance: top");
                instance.startedscrolling = true;
            }

            if (document.body.scrollTop < document.body.clientHeight) {
                console.log('instance: inside lead');
            }

            if (document.body.scrollTop > document.body.clientHeight) {
                console.log('instance: past lead');
                instance.pastlead = true;
            }
            if (!(document.body.scrollTop > document.body.clientHeight)) {
                console.log('instance: not past lead');
                instance.pastlead = false;
            }

            if (((document.body.scrollHeight) - document.body.clientHeight) < (document.body.scrollTop + document.body.offsetHeight)) {
                console.log('instance: 100vh before bottom met');
            }

            if (document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
                alert("component_app_modal_element_page_top_content: instance: footer met");
            }

            state.ui.root.component_app_gui_scroll_y_position = document.body.scrollTop;

        });

        root.addEventListener('wheel', (event) => {
            state.events.mouse.movetimer = 0;

            console.log('wheel');

            if (event.deltaY < 0) {
                console.log('wheel up');
                state.ui.root.wheel = 'up';
            };

            if (event.deltaY > 0) {
                console.log('wheel down');
                state.ui.root.wheel = 'down';
            };

        });

        root.addEventListener('keydown', (event) => {
            
            let keyCode = event.keyCode;

            
            // space
            if (keyCode == 32) {

                localStorage.setItem("signed_in", "false");
                check_local_user();

            };

            // escape
            if (keyCode == 27) {

                localStorage.setItem("signed_in", "true");
                check_local_user();

            };

            // 1
            if (keyCode == 49) {

                localStorage.setItem("username", "nigel");
                localStorage.setItem("password", "1234");

            };

            // 2
            if (keyCode == 50) {
                    
                localStorage.setItem("username", "null_local_user");
                localStorage.setItem("password", "xxx");

            };

            // 3
            if (keyCode == 51) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 4
            if (keyCode == 52) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 5
            if (keyCode == 53) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 6
            if (keyCode == 54) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 7
            if (keyCode == 55) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 8
            if (keyCode == 56) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 9
            if (keyCode == 57) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 0
            if (keyCode == 48) {
                    
                document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // q
            if (keyCode == 81) {
                    
                document.getElementById('action-mouse-not-moved').classList.remove('opacity_1');
                document.getElementById('action-mouse-not-moved').classList.add('opacity_0');

                document.getElementById('action-mousemoved').classList.remove('opacity_1');
                document.getElementById('action-mousemoved').classList.add('opacity_0');

                document.getElementById('action-not-entered').classList.remove('opacity_1');
                document.getElementById('action-not-entered').classList.add('opacity_0');

                document.getElementById('action-not-keyed').classList.remove('opacity_1');
                document.getElementById('action-not-keyed').classList.add('opacity_0');

                document.getElementById('action-not-scrolled').classList.remove('opacity_1');
                document.getElementById('action-not-scrolled').classList.add('opacity_0');

            };

        });

        root.addEventListener('keyup', (event) => {

        });

        // filter by title
        if (document.getElementById('element_create_post') != null) {
            document.getElementById('element_create_post').addEventListener('click', (event) => {
                
                addListings('library');

            })
        };

        // filter by title
        if (document.getElementById('element_create_user') != null) {
            document.getElementById('element_create_user').addEventListener('click', (event) => {
                
                addListings('roster');

            })
        };

        // filter by title
        if (document.getElementById('element_login') != null) {
            document.getElementById('element_login').addEventListener('click', (event) => {
                
                let selected_username = (document.getElementById('element_login_username').value);
                let selected_password = (document.getElementById('element_login_password').value);

                })
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
                            alert('logging in: ' + selected_username + selected_password);

                            localStorage.setItem("username", selected_username);
                            localStorage.setItem("password", selected_password);

                            localStorage.setItem("signed_in", "true");
                        };

                        if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                            alert('not logging in: ' + selected_username + selected_password);

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
                
                alert('logging out');

                let selected_username = (document.getElementById('element_login_username').value);
                let selected_password = (document.getElementById('element_login_password').value);

                localStorage.setItem("username", localStorage.username);
                localStorage.setItem("password", "xxx");

                localStorage.setItem("signed_in", "false");
                check_local_user();

            });
        };


        // filter by title
        if (document.getElementById('element_null_user') != null) {
            document.getElementById('element_null_user').addEventListener('click', (event) => {
                
                alert('logging out to null_local_user');

                document.getElementById('element_login_username').value = "null_local_user";
                document.getElementById('element_login_password').value = "xxx";

                localStorage.setItem("username", "null_local_user");
                localStorage.setItem("password", "xxx");

                localStorage.setItem("signed_in", "false");
                check_local_user();

            });
        };

    };

    // Mobile
    if (device_equals_mobile) {

        root.addEventListener('touchmove', (event) => {
            state.events.mouse.movetimer = 0;
        });

        root.addEventListener("touchstart", (event) => {
            state.events.mouse.movetimer = 0;
            instance.mouseleave = false;
            instance.mouseenter = true;

        });

        root.addEventListener("touchend", (event) => {
            state.events.mouse.movetimer = 0;
            instance.mouseleave = true;
            instance.mouseenter = false;
        
        });

    };

    window.ondevicemotion = function(event) {

    };

    window.ondeviceorientation = function(event) {

    };

}));

let Handle_check_route = (route, info) => {

    state.app.route = route;
    let route_info = info;

    // (/ aka home)
    if (state.app.route == '/') {
        alert('you are home');
    };

};

let handle_inital_load = () => {

    // overall site frames by 24 frames
    ( function() {

        let interval = 0;
        let loop = false;
        let automation =

        setInterval(
            function() {
                if (interval == (0) ) {
                    handle_time();
                    console.log('interval 0');
                };
                if (interval == (1) ) {        
                    console.log('interval 1');
                };
                if (interval == (2) ) {
                    console.log('interval 2');
                    if (loop == false) {
                        clearInterval(automation);
                    };
                    if (loop == true) {
                        interval = 0;
                    };
                };
                interval += 1;
            }, (1000)
        );
    }());

};

window.onload = () => {
    handle_inital_load();
    //check_local_user();
    handle_refresh_fire_data();
    handle_repeated_fire_data_validation;
    Handle_check_route('/', '');

    alert(localStorage.username);
    alert(localStorage.password);
    alert(localStorage.signed_in);

};

let Handle_return_state = () => { return state };

// Exports
export default {
    likeWhoListings,
    dislikeWhoListings,
    viewWhoListings,
    deleteWhoListings,
    Handle_return_state,
    handle_dice_roll,
}