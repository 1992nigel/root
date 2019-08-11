
// Imports
import style from './style.scss';
import functions from './imports/functions';
import elements from './imports/elements';
import events from './imports/events';
import imported_components from './imports/components';

let sound_1 = document.getElementById('componentSound');
let root = document.getElementById('root');
let Handle_render_data_value;
let Handle_get_state_from_events;
let handle_events;
let find_sort;
let sorted_firebase_library;
let handle_firebase_render_to_view;
let Handle_display_with_delay;
let Handle_ui_update;
let Handle_transform;
let handle_firebase_events;
let Handle_ui_reset;
let firebase_library = [];
let wp_library = [];
let components;

let state = {
    data: {
        firebase: {

        },
        wordpress: {

        }
    },

    motion: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        scene: 0,
        instances: {
            grid_64: 0,
            loading: false,
            sequence: 0,
            fold: 0,
            start: false,
            // This is now the "Start" stage
            learn: false,
            // This is now the "Learn" stage,
            scrolling: false,
            scrolled_top: false,
            scrolled_bottom: false,
            blog_scrolled_top: false,
            blog_scrolled_bottom: false,
            // This is now the "Scrolling" stage,
            hide: false,
            // This is now the route or page state,
        }
    },

    events: {
        mouse: {
            current: {
                clientX: 0,
                clientY: 0
            },
            status: {
                enter: true,
                leave: false,
                up: true,
                down: false
            },
            history: [],
            timer: 0
        },
        mouse_enter: {
            history: [],
            timer: 0
        },
        mouse_leave: {
            history: [],
            timer: 0
        },
        mouse_up: {
            history: [],
            timer: 0
        },
        mouse_down: {
            history: [],
            timer: 0
        },
        mouse_up_move: {
            history: [],
            timer: 0
        },
        mouse_down_move: {
            history: [],
            timer: 0
        },
        mouse_drag_drop: {
            history: [],
            timer: 0
        },
        touch: {
            history: [],
            timer: 0
        },
        touch_start: {
            history: [],
            timer: 0
        },
        touch_end: {
            history: [],
            timer: 0
        },
        touch_drag_drop: {
            history: [],
            timer: 0
        },
        scroll: {
            history: [],
            timer: 0
        },
        key: {
            history: [],
            timer: 0
        },
        key_up: {
            history: [],
            timer: 0
        },
        motion: {
            event_accelerationIncludingGravity_x: 0,
            event_accelerationIncludingGravity_y: 0,
            event_accelerationIncludingGravity_z: 0,
            orientation_string: '',
            event_alpha: '',
            event_beta: '',
            event_gamma: ''
        }
    },

    ux: {
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
        platform: {
            is_Desktop: false,
            is_Mobile: false
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
        }
    },

    interaction: {

        key: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: 1,
            yaxis: 1,
            height: 2,
            width: 2,
            action: {
                breathing: false,
                blinking: true,
                standing: false,
                walking: false,
                sitting: false,
                left: true,
                right: false
            }
        },

        keyhole: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: 5,
            yaxis: 4,
            height: 2,
            width: 2,
            action: {
                breathing: false,
                blinking: true,
                walking: false,
                sitting: false,
                left: true,
                right: false
            }
        },

        player_1: {

            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 4,
            height: 4,
            width: 1,
            stance: 5,
            angle: 'left',
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: false,
                running: false,
                stunned: false,
            }
        },

        player_2: {

            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 4,
            height: 4,
            width: 1,
            stance: 5,
            clientX_increase: false,
            clientY_increase: false,
            clientX_auto: true,
            clientY_auto: false,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: false,
                running: false,
                stunned: false,
            }
        },

        vr: {

            transform: false,
            opacity: false,
            display: false,
            clientX: -1,
            clientY: -1,
            height: 4,
            width: 1,
            stance: 5,
            clientX_increase: false,
            clientY_increase: false,
            clientX_auto: true,
            clientY_auto: false,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: false,
                running: false,
                stunned: false,
            }
        },

        bridge: {

            transform: false,
            opacity: false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 1,
            width: 1,
            stance: 5,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },
        enemy: {

            transform: false,
            opacity: false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 1,
            width: 1,
            stance: 5,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },
        logo: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: -1,
            yaxis: -4,
            height: 8,
            width: 4,
        },

        helper: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: -1,
            yaxis: -4,
            height: 8,
            width: 4,
        },

        pen: [],
        pencil: [],

        dice: (Math.floor(Math.random() * 6) + 1),

        random: (Math.floor(Math.random() * 100) + 1),

        bullets: [
        ],

        hands: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        track_x: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        track_y: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        ball: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        bounce: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        snake: {
            create: false,
            direction: 'up',
            snakes: [{
                clientX: 0,
                clientY: 0,
                clientXGrow:false,
                clientYGrow:false
            }
            ],
        },

        parallax: {
            xaxis: 0,
            yaxis: 0,
        },
    },

    gui: {

        top: {
            transform: false,
            opacity:false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        top_left: {
            transform: false,
            opacity:false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        top_right: {
            transform: false,
            opacity:false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        bottom: {
            transform: false,
            opacity: false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        bottom_left: {
            transform: false,
            opacity: false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        bottom_right: {
            transform: false,
            opacity: false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        left: {
            transform: false,
            opacity:false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        },
        right: {
            transform: false,
            opacity:false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 0,
            width: 0
        }
    },

    modal: {
        pip: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        pop: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        page: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        fade: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        gradient: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        morph: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        menu: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        overlay: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        nav: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        corner: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },

    }
};

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

let url = '';

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
let getJSON = function(url, callback) {
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
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

firebase.initializeApp(config);
let firebase_data_has_been_updated_and_is_now_writeable = false;
let firebase_has_responsed_with_this_updated_data = {};

let handle_refresh_fire_data = () => {
    
    firebase_library = [];
    wp_library = [];

    if ((document.getElementById('wp_library_ol')) != null) {
        document.getElementById('wp_library_ol').innerHTML = '';
    };

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

    let rootRef = firebase.database().ref();

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

                console.log('contected!');

                root.appendChild(
                    functions.Generate_new_fragment.appendChild(
                    elements.element_div('firebase_has_responsed_with_this_updated_data: WHAT IT DO BABY!')
                    )
                );

                setTimeout(function() {
                    check_localStorage();
                    handle_firebase_render_to_view();
                    console.log('contected!');
                }, 0);

            };

        };

    };
    
    if ((document.getElementById('wp_library_ol')) != null) {
        if (document.getElementById('wp_library_ol').innerHTML == '') {
            handle_refresh_fire_data();
        };
    };

}, 1000/24);

Handle_ui_update = () => {
    Handle_display_with_delay();
    Handle_transform();
    Handle_render_data_value();
};

Handle_get_state_from_events = () => {
    state = events.Handle_return_state_from_events();
    //alert('state.modal.nav.left.transform: ' + state.modal.nav.left.transform);
    Handle_ui_update();
};


handle_events = () => {

    if (root != null) {

        // scroll
        root.addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            Handle_get_state_from_events();
        });

        // events
        root.addEventListener('keydown', (event) => {
            events.handle_Function_Key_Down(event);
            Handle_get_state_from_events();
            //sound_1.play();
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
            //events.handle_Function_Mouse_Down(event);
            //Handle_get_state_from_events();
        });

        root.addEventListener('click', (event) => {
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


Handle_transform = () => {
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


handle_firebase_render_to_view = () => {
    // render library
    (() => {


        setTimeout(function() {

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

            };

        })
    })();
};

handle_firebase_events = () => {

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

let handle_gui_events = () => {

    if (document.getElementById('gui_top_left') != null) {
        document.getElementById('gui_top_left').addEventListener('click', (event) => {
            //alert('gui_top_left');
            state.gui.top_right.transform = !state.gui.top_right.transform;
            Handle_ui_update();
        });
    };
    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            //alert('gui_top');
            state.modal.page.top.transform = !state.modal.page.top.transform;
            Handle_ui_update();
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
            Handle_ui_update();
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


let handle_gui_status_events = () => {

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

Handle_render_data_value = () => {

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
};

let animation_bg = () => {

    // timeout
    setTimeout( () => {

        root.appendChild(
            functions.Generate_new_fragment.appendChild(
            elements.element_animation_bg()
            )
        );

    }, (1000));

    // timeout
    setTimeout( () => {

        document.getElementById('bg_section').appendChild(
            functions.Generate_new_fragment.appendChild(
            elements.element_scene_1()
            )
        );

    }, (2000));


    // timeout
    setTimeout( () => {

        document.getElementById('bg_section').innerHTML = '';

    }, (3000));

    // timeout
    setTimeout( () => {

        document.getElementById('bg_section').appendChild(
            functions.Generate_new_fragment.appendChild(
            elements.element_scene_1()
            )
        );

    }, (4000));


    // timeout
    setTimeout( () => {

        document.getElementById('bg_section').innerHTML = '';

    }, (5000));

};

let animation_lead = () => {

    if ((document.getElementById('lead_section')) != null ) {
        // timeout
        setTimeout( () => {

            document.getElementById('lead_section').innerHTML = '';
            document.getElementById('lead_section').appendChild(
                functions.Generate_new_fragment.appendChild(
                elements.element_lead_scene('element_lead!!!')
                )
            );

        }, (0));

    };
};

let animation_fold = () => {


    if ((document.getElementById('fold_section')) != null ) {
        // timeout
        setTimeout( () => {

            document.getElementById('fold_section').innerHTML = '';
            document.getElementById('fold_section').appendChild(
                functions.Generate_new_fragment.appendChild(
                elements.element_fold()
                )
            );

        }, (0));


    };

};

let Handle_return_state = () => { return state };

let handle_URL = () => {

    setTimeout( () => {

        var parts = location.pathname.split('/');
        window.scrollTo(0, 0);

        if (url == '') {

            root.appendChild(
                functions.Generate_new_fragment.appendChild(
                elements.element_root_divs('home!!!')
                )
            );

            // timeout
            setTimeout( () => {
                console.log('handle_URL: welcome to the site');
                url = 'loading'
                handle_URL();
            }, (1000));

        };

        if (url == 'loading') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: now site loading');
                url = 'loaded'
                handle_URL();
            }, (1000));

        };

        if (url == 'loaded') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: site loaded');
                url = 'done'
                handle_URL();
            }, (1000));

        };

        if (url == 'done') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: site done loading');
                url = 'welcome'
                handle_URL();
            }, (1000));

        };

        if (url == 'welcome') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: welcome');
                url = 'redirect'
                handle_URL();
            }, (1000));

        };

        if (url == 'redirect') {

            console.log('handle_URL: redirect');

            if (parts[1] != null) {

                if ((parts[1] == '')) {
                    console.log('just stay at the home page');
                    //url = parts[1];
                    //console.log('url: ' + url );

                    animation_bg();

                    animation_lead();

                    animation_fold();

                    handle_refresh_fire_data();

                };

                if (parts[1] == 'p') {
                    console.log('going to post page');

                    if (parts[2] != null) {
                        console.log('post id: ' + parts[2]);
                    };

                };

                if ((parts[1] != 'p') && (parts[1] != '')) {
                    console.log('going to user page');

                    if (parts[1] != null) {
                        console.log('user id: ' + parts[1]);
                    };

                };

            };

            setTimeout( () => {

                handle_events();
                handle_gui_events();
                handle_gui_status_events();
                handle_firebase_events();

            }, (1000));

        };

    }, 0);

};

let check_localStorage = () => {

    let placeholder_user = {
        "username" : "placeholder_user",
        "password" : "1234",
        "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
        "signed_in" : "false",
    };

    if (localStorage.user == null) {
        localStorage.setItem("user", placeholder_user);
        localStorage.setItem("username", placeholder_user.username);
        localStorage.setItem("password", placeholder_user.password);
        localStorage.setItem("signed_in", "false");
        console.log('welcome first timer');
        return
    };

    if (localStorage.user != null) {
        console.log('welcome bax')
    };
};

Handle_ui_reset = () => {

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
};

// hooks
window.onload = () => {
    alert('crud, components, shortcuts, sort, previews, page, pop');
    console.log('nownigel');
    check_localStorage();
    handle_refresh_fire_data();
    handle_repeated_fire_data_validation;
    handle_URL();
    //sound_1.play();


    getJSON('https://antenuh.com/feed/json',
    function(err, data) {
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
        console.log('getJSON');
      if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
        console.log('wp count: ' + data.items);
        state.data.wordpress = data.items;

        for (var i = 0; i < state.data.wordpress.length; i++) {
            let wp_post = state.data.wordpress[i];
            console.log('wp_post new');
            console.log(wp_post);
        };

      };

    });


    if (document.getElementById('form_submit') != null) {

        // Set firebase data
        setTimeout(function() {
            document.getElementById('form_submit').children[0].children[0].children[3].addEventListener('click', (event) => {
                alert('form_submit');
            });
        }, 5000);

    };

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
    Handle_ui_reset
};