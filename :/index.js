
// Imports
import style from './style.scss';
import elements from './imports/elements';
import events from './imports/events';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDE41kN8BeObYTbfb1Ymp9HrZAXD5OZqFQ",
    authDomain: "antenuh-9d2ca.firebaseapp.com",
    databaseURL: "https://antenuh-9d2ca.firebaseio.com",
    projectId: "antenuh-9d2ca",
    storageBucket: "antenuh-9d2ca.appspot.com",
    messagingSenderId: "56750865675",
    appId: "1:56750865675:web:26f53c0aa771186245b60e",
    measurementId: "G-R9DE6SKETE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// make auth ref
const auth = firebase.auth();

// make firestore ref
const db = firebase.firestore();
let post_view = `card`;
let dark_view = false;

let tiny_height = 0;
let tiny_width = 0;
let state = {

    stored_auth_user_cred: {},
    auth_has_been_checked: false,

    data: {
        url_type: '',
        url_user: '',
        url_post: '',
        upload_details_post: '',
        upload_details: '',
        upload_details_profile: '',
        user_logged_in: false,
        valid_user: {},
        posts: [],
        has_loaded: false,
        onload_url: '',
        scene: 0,
        route: 0,
        game: 0,
        time: 0,
        onload_time: 0,
        dark_mode: 0
    },
    
    interaction: {

        cardboard: {
            xaxis: 0,
            yaxis: 0
        },

        root: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0,
            component_app_gui_scroll_y_position: 0,
                wheel: 'still',
                wheels: 0,
                isWheeling: false
        },

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

        playable: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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

        gui_stage_tv: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 0,
            clientY: 0,
            height: 4,
            width: 1,
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

        player_1: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 1,
            clientY: 0,
            height: 4,
            width: 1,
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

        player_2: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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

    ux: {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth),
            post_view: 'card',
            dark_view: false,

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

    modal: {

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
        }
    },

    motion: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        sequence_game: 0
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
        keys_held: {
            history: [],
            timer: 0
        },
        motion: {
            history: [],
            event_accelerationIncludingGravity_x: 0,
            event_accelerationIncludingGravity_y: 0,
            event_accelerationIncludingGravity_z: 0,
            orientation_string: '',
            event_alpha: '',
            event_beta: '',
            event_gamma: ''
        }
    },

};

state.ux = {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth),
            post_view: post_view,
            dark_view: dark_view,

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
};

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
    tiny_height = state.ux.dimensions.height;
};

if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
    tiny_width = state.ux.dimensions.width;
};

let handle_update = () => {
    if (document.getElementById("scroll_clientHeight") != null) {
      document.getElementById("scroll_clientHeight").innerHTML =
        state.interaction.root.clientHeight;
    }

    if (document.getElementById("scroll_clientWidth") != null) {
      document.getElementById("scroll_clientWidth").innerHTML =
        state.interaction.root.clientWidth;
    }

    if (document.getElementById("scroll_scrollHeight") != null) {
      document.getElementById("scroll_scrollHeight").innerHTML =
        state.interaction.root.scrollHeight;
    }

    if (document.getElementById("scroll_scrollWidth") != null) {
      document.getElementById("scroll_scrollWidth").innerHTML =
        state.interaction.root.scrollWidth;
    }

    if (document.getElementById("scroll_scrollTop") != null) {
      document.getElementById("scroll_scrollTop").innerHTML =
        state.interaction.root.scrollTop;
    }

    if (document.getElementById("scroll_scrollLeft") != null) {
      document.getElementById("scroll_scrollLeft").innerHTML =
        state.interaction.root.scrollLeft;
    }

    // gui
    if ((document.getElementById('component_app_status_transform_gui_top')) != null ) {
        document.getElementById('component_app_status_transform_gui_top').innerHTML = state.modal.gui.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.modal.gui.top_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.modal.gui.top_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_left').innerHTML = state.modal.gui.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.modal.gui.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.modal.gui.bottom_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.modal.gui.bottom_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_right').innerHTML = state.modal.gui.right.transform;
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

    // modal pip
    if ((document.getElementById('component_app_status_transform_pip_top')) != null ) {
        document.getElementById('component_app_status_transform_pip_top').innerHTML = state.modal.pip.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_pip_left')) != null ) {
        document.getElementById('component_app_status_transform_pip_left').innerHTML = state.modal.pip.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_pip_bottom')) != null ) {
        document.getElementById('component_app_status_transform_pip_bottom').innerHTML = state.modal.pip.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_pip_right')) != null ) {
        document.getElementById('component_app_status_transform_pip_right').innerHTML = state.modal.pip.right.transform;
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
};

let ui_check = () => {

    if (state.ux.platform.is_Desktop) {
        state.interaction.player_1.width = 1;
        state.interaction.player_1.height = 4;
    };

    if (state.ux.platform.is_Mobile) {
        state.interaction.player_1.width = 8;
        state.interaction.player_1.height = 8;
    };

    if (state.ux.orientation.is_Landscape) {
        body.classList += " is_Landscape"
    };

    if (state.ux.orientation.is_Portrait) {
        body.classList += " is_Portrait"
    };

    if (state.interaction.cardboard.xaxis == 0 && state.interaction.cardboard.yaxis == 0) {
        body.classList += " center"
    };

    if (state.interaction.cardboard.xaxis == 0 && state.interaction.cardboard.yaxis == 1) {
        body.classList += " center_bottom"
    };

    if (state.interaction.cardboard.xaxis == 0 && state.interaction.cardboard.yaxis == -1) {
        body.classList += " center_top"
    };

    if (state.interaction.cardboard.xaxis == 1 && state.interaction.cardboard.yaxis == 0) {
        body.classList += " center_right"
    };

    if (state.interaction.cardboard.xaxis == -1 && state.interaction.cardboard.yaxis == 1) {
        body.classList += " bottom_left"
    };

    if (state.interaction.cardboard.xaxis == -1 && state.interaction.cardboard.yaxis == -1) {
        body.classList += " top_left"
    };

    if (state.interaction.cardboard.xaxis == -1 && state.interaction.cardboard.yaxis == 0) {
        body.classList += " center_left"
    };

    if (state.interaction.cardboard.xaxis == 1 && state.interaction.cardboard.yaxis == 1) {
        body.classList += " bottom_right"
    };

    if (state.interaction.cardboard.xaxis == 1 && state.interaction.cardboard.yaxis == -1) {
        body.classList += " top_right"
    };


    if (state.modal.pop.left.transform == true) {
        body.classList += " modal_pop_left"
    };

    if (state.modal.pop.right.transform == true) {
        body.classList += " modal_pop_right"
    };

    if (state.modal.pop.bottom.transform == true) {
        body.classList += " modal_pop_bottom"
    };

    if (state.modal.pop.top.transform == true) {
        body.classList += " modal_pop_top"
    };

    if (state.modal.page.top.transform == true) {
        body.classList += " modal_page_top"
    };

    if (state.modal.page.bottom.transform == true) {
        body.classList += " modal_page_bottom"
    };

    if (state.modal.page.left.transform == true) {
        body.classList += " modal_page_left"
    };

    if (state.modal.page.right.transform == true) {
        body.classList += " modal_page_right"
    };

    if (state.modal.menu.top.transform == true) {
        body.classList += " modal_menu_top"
    };

    if (state.modal.menu.bottom.transform == true) {
        body.classList += " modal_menu_bottom"
    };

    if (state.modal.menu.left.transform == true) {
        body.classList += " modal_menu_left"
    };

    if (state.modal.menu.right.transform == true) {
        body.classList += " modal_menu_right"
    };

    if (state.modal.nav.top.transform == true) {
        body.classList += " modal_nav_top"
    };

    if (state.modal.nav.bottom.transform == true) {
        body.classList += " modal_nav_bottom"
    };

    if (state.modal.nav.left.transform == true) {
        body.classList += " modal_nav_left"
    };

    if (state.modal.nav.right.transform == true) {
        body.classList += " modal_nav_right"
    };

    if (state.ux.orientation.post_view == 'card') {
        body.classList += " card"
    };

    if (state.ux.orientation.post_view == 'list') {
        body.classList += " list"
    };

    if (state.ux.orientation.post_view == 'numbered') {
        body.classList += " numbered"
    };

    if (state.ux.orientation.post_view == 'read') {
        body.classList += " read"
    };

    if (state.ux.orientation.post_view == 'fifth') {
        body.classList += " fifth"
    };

    if (state.ux.orientation.post_view == 'sixth') {
        body.classList += " sixth"
    };

    if (state.ux.orientation.post_view == 'eighth') {
        body.classList += " eighth"
    };

    if (state.ux.orientation.dark_view == true) {
        body.classList += " dark"
    };

    if (state.ux.orientation.dark_view == false) {
        body.classList += " light"
    };

    console.log('ui_check');
    console.log(state.ux);
};

let get_dimensions = () => {
    state.ux = {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth),
            post_view: post_view,
            dark_view: dark_view,
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
    };

    if (state.ux.platform.is_Desktop) {

        tiny_height = state.ux.dimensions.height;
        console.log('tiny_height: ' + tiny_height);

        tiny_width = state.ux.dimensions.width;
        console.log('tiny_width: ' + tiny_width);

        body.classList = "is_Desktop";
    };

    if (state.ux.platform.is_Mobile) {
        
        if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
            tiny_height = state.ux.dimensions.height;
            console.log('tiny_height: ' + tiny_height);
        };

        if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
            tiny_width = state.ux.dimensions.width;
            console.log('tiny_width: ' + tiny_width);
        };

        body.classList = "is_Mobile";
    };

    /*
    if (body != null) {
        body.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };
    */

    if (document.getElementById('outro') != null) {
        document.getElementById('outro').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (document.getElementById('credits') != null) {
        document.getElementById('credits').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (document.getElementById('interactions') != null) {
        document.getElementById('interactions').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };
    
    if (state.ux.platform.is_Desktop) {
        if (document.getElementById('lead') != null) {
            document.getElementById('lead').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };

        if (document.getElementById('play') != null) {
            document.getElementById('play').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };

        if (document.getElementById('scene') != null) {
            document.getElementById('scene').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };

        if (document.getElementById('set') != null) {
            document.getElementById('set').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };
    };

    if (state.ux.platform.is_Mobile) {
        if (document.getElementById('lead') != null) {
            document.getElementById('lead').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };

        if (document.getElementById('play') != null) {
            document.getElementById('play').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };

        if (document.getElementById('scene') != null) {
            document.getElementById('scene').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };

        if (document.getElementById('set') != null) {
            document.getElementById('set').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };
    };

    console.log('resize');
    console.log(state.ux);

    ui_check();
    handle_update();
};

// sorting
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

let fb_sorted_library = (the_arr, x) => {  return (the_arr).sort(find_sort(x)) };

let render_valid_user_data = () => {

    // feel in user data
    if ((document.getElementById('user_conditional')) != null) {
        document.getElementById('user_conditional').innerHTML = `
        
            <h2>Profile: ${state.data.valid_user.username}</h2>
            id: ${state.data.valid_user.id}
            username: ${state.data.valid_user.username}
            email: ${state.data.valid_user.email}
            photo: <u>${state.data.valid_user.photo}</u> <br>

            <a href="https://antenuh.com/${state.data.valid_user.id}">see profile</a>
        `
    };
};

// retrieve
let get_db_guides = () => {
    //alert('get_db_guides');

    //db.settings({timestampsInSnapshots: true});
    db.collection('users').get().then(snapshot => {
        
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        
        state.data.posts = [];
        
        /*
        filtered_posts_guides = [];
        document.getElementById('posts_all').innerHTML = ``;
        document.getElementById('posts_filtered_sorted').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_type').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_stream').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_category').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_hashtag').innerHTML = ``;
        document.getElementById('posts_filtered').innerHTML = ``;
        */

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            state.data.posts.push(items)
        });

        if ((state.stored_auth_user_cred.uid) == null) {
            console.log('you are NOT an stored_auth_user_cred');
        };

        if ((state.stored_auth_user_cred.uid) != null && (state.stored_auth_user_cred.uid) != 'xxx') {

            console.log('welcome: ' + state.stored_auth_user_cred.uid);

            console.log('state.stored_auth_user_cred.uid: ');
            console.log(state.stored_auth_user_cred.uid);

            console.log('state.data.posts:');
            console.log(state.data.posts);

            // match auth user with database collection: users
            console.log('check match from state.data.posts[i]');
            for (var i = 0; i < state.data.posts.length; i++) {
                if (state.data.posts[i].id == state.stored_auth_user_cred.uid) {
                       state.data.valid_user = state.data.posts[i];
                       state.data.user_logged_in = true;
                }
            };

            render_valid_user_data();

            if (state.data.url_type == 'user') {
                console.log('url_type user');
            };

            if (state.data.url_type == 'post') {
                console.log('url_type post');
            };
            
        };

        sort_and_create(state.data.posts);

        console.log('state.data.posts');
        console.log(state.data.posts);
    });
};

// retrieve
let sort_and_create = (x) => {

        document.getElementById('posts').innerHTML = ``;

        // posts_title
        (()=>{
            let element = document.createElement('div');
            element.setAttribute("id", `posts_title`);
            element.classList = `width_100 margin_auto position_relative float_left text_align_center `
            element.innerHTML = `POST`
            element.addEventListener("click", function(event) {
                alert('all posts');
            });

            document.getElementById('posts').appendChild(
                element
            );
        })();

        // valid_user_posts_titleup post
            (()=>{
                let element = document.createElement('div');
                element.setAttribute("id", `posts_title`);
                element.classList = `width_100 margin_auto position_relative float_left text_align_center `
                element.innerHTML = `all valid_user_posts_titleup`
                element.addEventListener("click", function(event) {
                    alert('valid_user_posts_titleup');
                });

                document.getElementById('posts').appendChild(
                    element
                );
            })();

            (()=>{
                let element = document.createElement('div');
                element.setAttribute("id", `valid_user_posts_titleup`);
                element.classList = `width_100 margin_auto position_relative float_left text_align_center `
                element.innerHTML = ``;

                document.getElementById('posts').appendChild(
                    element
                );
            })();

            fb_sorted_library(x, 'titleup').forEach(post => {

                if ((post.child == 'post') && (post.author_id == state.data.valid_user.id)) {

                    //console.log(post);
                    let element = document.createElement('div');
                    element.setAttribute("id", `post`);
                    element.classList = `width_100 margin_auto position_relative float_left`
                    element.innerHTML = `

                        <h2>
                            post title: ${post.title}
                        </h2>

                        <div class="feat_img">
                            <div class="container"></div>
                        </div>

                        <p>
                            post id: ${post.id}
                        </p>

                        <a href="https://antenuh.com/p/${post.id}">see post</a>
                        
                        <div id="like"class="width_100 height_6025vw position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                
                            <div class="hover_show width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div class="width_100 height_100 bottom_0 right_0 gui_icon_hearts_dark position_absolute margin_auto"></div>
                            </div>
                            <div class="hover_hide width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div class="width_100 height_100 bottom_0 right_0 gui_icon_hearts position_absolute margin_auto"></div>
                            </div>
                        </div>

                        <button>subtoauthor</button>
                    `
                    element.children[3].addEventListener("click", function(event) {
                        alert('see');
                    });

                    element.children[4].addEventListener("click", function(event) {
                        alert('like');
                    });

                    element.children[5].addEventListener("click", function(event) {
                        alert('sub');
                    });

                    document.getElementById('valid_user_posts_titleup').appendChild(
                        element
                    );
                };

            });

        // posts_titleup_post
            (()=>{
                let element = document.createElement('div');
                element.setAttribute("id", `posts_title`);
                element.classList = `width_100 margin_auto position_relative float_left text_align_center `
                element.innerHTML = `posts_titleup_post`
                element.addEventListener("click", function(event) {
                    alert('posts_titleup_post');
                });

                document.getElementById('posts').appendChild(
                    element
                );
            })();

            (()=>{
                let element = document.createElement('div');
                element.setAttribute("id", `posts_titleup_post`);
                element.classList = `width_100 margin_auto position_relative float_left text_align_center `
                element.innerHTML = ``;

                document.getElementById('posts').appendChild(
                    element
                );
            })();

            // sort && create post
            // render SORTED post to view 
            fb_sorted_library(x, 'titleup').forEach(post => {

                if (post.child == 'post') {

                    //console.log(post);
                    let element = document.createElement('div');
                    element.setAttribute("id", `post`);
                    element.classList = `width_100 margin_auto position_relative float_left`
                    element.innerHTML = `

                        <h2>
                            post title: ${post.title}
                        </h2>

                        <div class="feat_img">
                            <div class="container"></div>
                        </div>

                        <p>
                            post id: ${post.id}
                        </p>

                        <a href="https://antenuh.com/p/${post.id}">see post</a>
                        
                        <div id="like"class="width_100 height_6025vw position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                
                            <div class="hover_show width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div class="width_100 height_100 bottom_0 right_0 gui_icon_hearts_dark position_absolute margin_auto"></div>
                            </div>
                            <div class="hover_hide width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div class="width_100 height_100 bottom_0 right_0 gui_icon_hearts position_absolute margin_auto"></div>
                            </div>
                        </div>

                        <button>subtoauthor</button>
                    `
                    element.children[3].addEventListener("click", function(event) {
                        alert('see');
                    });

                    element.children[4].addEventListener("click", function(event) {
                        alert('like');
                    });

                    element.children[5].addEventListener("click", function(event) {
                        alert('sub');
                    });

                    document.getElementById('posts_titleup_post').appendChild(
                        element
                    );
                };

            });

        // posts_titleup_user
            (()=>{
                let element = document.createElement('div');
                element.setAttribute("id", `posts_title`);
                element.classList = `width_100 margin_auto position_relative float_left text_align_center `
                element.innerHTML = `posts_titleup_user`
                element.addEventListener("click", function(event) {
                    alert('posts_titleup_user');
                });

                document.getElementById('posts').appendChild(
                    element
                );
            })();

            (()=>{
                let element = document.createElement('div');
                element.setAttribute("id", `posts_titleup_user`);
                element.classList = `width_100 margin_auto position_relative float_left text_align_center `
                element.innerHTML = ``;

                document.getElementById('posts').appendChild(
                    element
                );
            })();

            // sort && create post
            // render SORTED post to view 
            fb_sorted_library(x, 'titleup').forEach(post => {

                if (post.child == 'user') {

                    //console.log(post);
                    let element = document.createElement('div');
                    element.setAttribute("id", `post`);
                    element.classList = `width_100 margin_auto position_relative float_left`
                    element.innerHTML = `

                        <h2>
                            post title: ${post.title}
                        </h2>

                        <div class="feat_img">
                            <div class="container"></div>
                        </div>

                        <p>
                            post id: ${post.id}
                        </p>

                        <a href="https://antenuh.com/${post.id}">see post</a>
                        
                        <div id="like"class="width_100 height_6025vw position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                
                            <div class="hover_show width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div class="width_100 height_100 bottom_0 right_0 gui_icon_hearts_dark position_absolute margin_auto"></div>
                            </div>
                            <div class="hover_hide width_100 height_100 position_relative margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                                <div class="width_100 height_100 bottom_0 right_0 gui_icon_hearts position_absolute margin_auto"></div>
                            </div>
                        </div>

                        <button>subtoauthor</button>
                    `
                    element.children[3].addEventListener("click", function(event) {
                        alert('see');
                    });

                    element.children[4].addEventListener("click", function(event) {
                        alert('like');
                    });

                    element.children[5].addEventListener("click", function(event) {
                        alert('sub');
                    });

                    document.getElementById('posts_titleup_user').appendChild(
                        element
                    );
                };

            });
};

// create user
let db_create_user = (cred) => {

    //let username = document.getElementById('user_username').value;
    // create user after auth
    db.collection('users').doc(cred.user.uid).set({
        id: cred.user.uid,
        email: cred.user.email,
        title: cred.user.email,
        setting: {dark: state.ux.orientation.dark_view},
        child: 'user',

        tagline: '?',
        type: '?',
        category: '?',
        sticky: '?',
        hashtag: '?',
        content: '?',
        photo: cred.user.email,
        youtube: '?',
        twitch: '?',
        twitter: '?',
        spotify: '?',
        instagram: '?',
        vimeo: '?',
        comments: [],
        likes: 0,
        views: 0

    }).then(()=> {

        let signup_email = document.getElementById('signup_email');
        let signup_password = document.getElementById('signup_password');

        console.log(cred);
        console.log(cred.user.uid);
        console.log(cred.user.email);
        console.log(cred.user.metadata.creationTime);
        console.log(cred.user.metadata.lastSignInTime);
        console.log(cred.additionalUserInfo.isNewUser);
        state.stored_auth_user_cred = cred;
        signup_email.value = ``;
        signup_password.value = ``;
        get_db_guides();

        state.data.just_made = `http://antenuh.com/${ref.id}`
        alert(state.data.just_made);

    }).catch(err => {
        console.log(err.message)
    });
};

// create stream
let db_create_stream = () => {
    
    let date = new Date();
    const ref = db.collection('users').doc();
    const id = ref.id;

    if (state.data.upload_details_post == ``) {
        state.data.upload_details_post = `
            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1
        `
    };

    let create_stream_message = document.getElementById('create_stream_message');

    db.collection('users').doc(ref.id).set({
        stream_message: create_stream_message.value,
        id: ref.id
    }).then(()=> {
        console.log('guide made');
        stream_message: create_stream_message.value
        create_title.value = ``;

        state.data.just_made = `create_stream_message.value`
        alert(state.data.just_made);

        get_db_guides();
    }).catch(err => {
        console.log(err.message)
    })
};

// update user
let db_update_user = (collection, deletable_id) => {
    
    console.log(deletable_id);

    if (state.data.upload_details_profile == ``) {
        state.data.upload_details_profile = `
            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1
        `
    };

    let date = new Date();

    db.collection(collection).doc(deletable_id).update({
        photo: state.data.upload_details_profile
    }).then(function() {
        //document.getElementById('user_title').value = ``,
        state.data.just_made = `http://antenuh.com/${deletable_id}`
        alert('just updated: ' + state.data.just_made);
        document.getElementById('upload_details_profile').innerHTML = `profile updated!`;
        get_db_guides();
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let render_logged_data = () => {

    // render
    if ((document.getElementById('conditional')) != null) {
        document.getElementById('conditional').innerHTML = `

        <h2>Change Profile Pic</h2>
        <input class="display_none" type="file" value="upload" id="fileButton_profile" accept="image/*" title="&nbsp;"/>
        <progress value="0" max="100" id="uploader_profile">0%</progress>
        <p id="upload_progress_profile">images only</p>
        <label for="fileButton_profile">Select file</label>
        <div id="upload_details_profile"></div>

        <button id="upload_details_profile_edit_button" class="">Update Profile Pic</button>

        <form id="create_form">
            <p>modal-create</p>
            
            <input class="display_none" type="file" value="upload" id="fileButton" accept="image/*" title="&nbsp;"/>
            <input placeholder="title" type="text" id="create_title" required />
            <input placeholder="sticky" type="text" id="create_sticky" required />
            <input placeholder="tagline" type="text" id="create_tagline" required />
            <input placeholder="hashtag" type="text" id="create_hashtag" required />
            <input placeholder="type" type="text" id="create_type" required />
            <input placeholder="category" type="text" id="create_category" required />
            <input placeholder="content" type="text" id="create_content" required />
            <input placeholder="youtube" type="text" id="create_youtube" required />
            <input placeholder="instagram" type="text" id="create_instagram" required />
            <input placeholder="twitter" type="text" id="create_twitter" required />
            <input placeholder="twitch" type="text" id="create_twitch" required />
            <input placeholder="spotify" type="text" id="create_spotify" required />
            <input placeholder="vimeo" type="text" id="create_vimeo" required />

            <progress value="0" max="100" id="uploader_post">0%</progress>
            <p id="upload_progress_post">images only</p>
            <label for="fileButton">Select file</label>
            <div id="upload_details_post"></div>

            <button id="create_button" class="">create</button>
         </form>
        
        <form id="stream_form">
            <p>modal-stream</p>
            
            <input placeholder="stream_message" type="text" id="create_vimeo" required />

            <button id="stream_button" class="">stream</button>
        </form>

        <button id="signout" alt="sign out">
           sign out
        </button>

        `
    };

    // events
    if ((document.getElementById('signout')) != null) {

        // signout / un-auth
        let signout = document.getElementById('signout');

        signout.addEventListener('click', (event) => {
                state.data.user_logged_in = false;
                state.stored_auth_user_cred = {};
                //get_db_guides();
            event.preventDefault();
            auth.signOut().then(() => {
                //alert('signout');
                console.log('logged out');
            });

            state.data.user_logged_in = false;
                //state.stored_auth_user_cred.uid =
                //get_db_guides();
        });
    };

    if ((document.getElementById('stream_button')) != null) {
        document.getElementById('stream_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_create_stream();
            document.getElementById('stream_message').innerHTML = `uploaded!`;
        });
    };

    if ((document.getElementById('create_button')) != null) {
        document.getElementById('create_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_create_post("users");
            document.getElementById('upload_details_post').innerHTML = `uploaded!`;
        });
    };

    if ((document.getElementById('upload_details_profile_edit_button')) != null) {

        document.getElementById('upload_details_profile_edit_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_update_user("users", state.data.valid_user.id);
        });
    };

    if ((document.getElementById('uploader_profile')) != null) {
        // upload
        let uploader_profile = document.getElementById('uploader_profile');
        let upload_progress_profile = document.getElementById('upload_progress_profile');
        let fileButton_profile = document.getElementById('fileButton_profile');
        fileButton_profile.addEventListener('change', (event) => {

                // assign metadata
                let metadata = {
                       customMetadata: {
                    'location': 'Yosemite, CA, USA',
                    'activity': 'Hiking'
                      }
                };

                // get file
                let file = event.target.files[0];

                // create a storage ref
                let storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

                // upload file
                let task = storageRef.put(file, metadata);

                // upload progress bar
                task.on('state_changed',
                function progress(snapshot){
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');

                    uploader_profile.value = progress;
                    upload_progress_profile.innerHTML = progress;
                },
                
                function error(err) {

                },
                
                function complete(snapshot) {

                    setTimeout(function () {
                        uploader_profile.value = 0;
                        upload_progress_profile.innerHTML = ``;
                    }, 2000);
                    // Handle successful uploads on complete
                      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        state.data.upload_details_profile = downloadURL;
                        document.getElementById('upload_details_profile').innerHTML = `upload complete, available at: ${state.data.upload_details_profile}`;
                        document.getElementById('upload_details_profile').innerHTML += `
                        <div id="uploaded_image_profile" style="background-image: url(${(state.data.upload_details_profile)})">
                        </div>`;
                      });
                }
            );

        });
    };

    if ((document.getElementById('uploader_post')) != null) {
        // upload
        let uploader_post = document.getElementById('uploader_post');
        let upload_progress_post = document.getElementById('upload_progress_post');
        let fileButton_post = document.getElementById('fileButton_post');
        fileButton.addEventListener('change', (event) => {

                // assign metadata
                let metadata = {
                       customMetadata: {
                    'location': 'Yosemite, CA, USA',
                    'activity': 'Hiking'
                      }
                };

                // get file
                let file = event.target.files[0];

                // create a storage ref
                let storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

                // upload file
                let task = storageRef.put(file, metadata);

                // upload progress bar
                task.on('state_changed',
                function progress(snapshot){
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');

                    uploader_post.value = progress;
                    upload_progress_post.innerHTML = progress;
                },
                
                function error(err) {

                },
                
                function complete(snapshot) {

                    setTimeout(function () {
                        uploader_post.value = 0;
                        upload_progress_post.innerHTML = ``;
                    }, 2000);
                    // Handle successful uploads on complete
                      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        state.data.upload_details_post = downloadURL;
                        document.getElementById('upload_details_post').innerHTML = `upload complete, available at: ${state.data.upload_details_post}`;
                        document.getElementById('upload_details_post').innerHTML += `
                        <div id="uploaded_image_post" style="background-image: url(${(state.data.upload_details_post)})">
                        </div>`;
                      });
                }
            );

        });
    };

};

let render_unlogged_data = () => {

    // render
    if ((document.getElementById('conditional')) != null) {
        document.getElementById('conditional').innerHTML = `

            <p>sign up</p>
            <input type="text" id="signup_email" placeholder="signup_email" />
            <input type="text" id="signup_password" placeholder="signup_password" />
            <button id="signup_submit" class="">signup_submit
            </button>


            <p>sign in</p>
            <input placeholder="signin_email" type="signin_email" id="signin_email" required />
            <input placeholder="signin_password" type="signin_password" id="signin_password" required />
            <button id="signin" class="">sign in</button>

        `
    };

    // events
    if ((document.getElementById('signup_email')) != null) {

        // sign up / auth / create user
        let signup_email = document.getElementById('signup_email');
        let signup_password = document.getElementById('signup_password');
        let signup_submit = document.getElementById('signup_submit');

        signup_submit.addEventListener('click', (event) => {
            event.preventDefault();
            auth.createUserWithEmailAndPassword(signup_email.value, signup_password.value).then(cred => {
                db_create_user(cred);        
            });
        });
    };


    if ((document.getElementById('signin_email')) != null) {
    
        // sign in / auth
        let signin_email = document.getElementById('signin_email');
        let signin_password = document.getElementById('signin_password');
        let signin = document.getElementById('signin');

        signin.addEventListener('click', (event) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(signin_email.value, signin_password.value).then(cred => {
                signin_email.value = ``;
                signin_password.value = ``;
            });
        });
    };

};

// listenforauth state changes
auth.onAuthStateChanged( (logged_auth_user) => {
    get_db_guides();

    console.log('onAuthStateChanged: ' + logged_auth_user);
    console.log('auth checked');

    if ( (logged_auth_user) == null) {
        //alert('logged_auth_user == null');
        console.log('please login');
        state.auth_has_been_checked = true;
        render_unlogged_data();
    };

    if ( (logged_auth_user) != null) {
        //alert('logged_auth_user != null');
        state.stored_auth_user_cred = logged_auth_user;
        console.log('logined in: ' + state.stored_auth_user_cred.uid);
        state.auth_has_been_checked = true;
        render_logged_data();
    };

});

let handle_ReturnState = () => {
    return state
};


let handle_ReturnedState = (x) => {
    state = x;
    get_dimensions();
};

// inital
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded');
    let url_split = window.location.href.split('/');
    console.log(url_split[2]);
    console.log(url_split[3]);

    // if a user page
    if ( (url_split[3] == 'p') && (url_split[4] != null) && (url_split[5] == null) ) {
        console.log('at post page');
        state.data.url_type = 'post'
        state.data.url_post = url_split[4];
    };
    
    // if a user page
    if ( (url_split[3] != '') && (url_split[4] == null) ) {
        console.log('at userpage!');
        state.data.url_type = 'user';
        state.data.url_user = url_split[3];
    };

    // if a home page
    if ( (url_split[3] == '') ) {
        console.log('at homepage!');
        state.data.url_type = 'home'
    };

    elements.action_preloader();
});

window.addEventListener("load", (event) => {

    // add buffer for "WAIT TILL FB RES with data/ offline mode"
    elements.shot_action_single_vomit();
    elements.handle_events();
});

window.addEventListener("resize", (event) => {
    get_dimensions();
});

// scroll
window.addEventListener('scroll', (event) => {
    events.handle_Function_Scroll(event);
});

// keys
body.addEventListener('keydown', (event) => {
    events.handle_Function_Key_Down(event);
});

body.addEventListener('keyup', (event) => {
    events.handle_Function_Key_Up(event);
});

body.addEventListener('mousemove', (event) => {
    events.handle_Function_Mouse_Move(event);
});

body.addEventListener('mouseenter', (event) => {
    events.handle_Function_Mouse_Enter(event);
});

body.addEventListener('mouseleave', (event) => {
    events.handle_Function_Mouse_Leave(event);
});

body.addEventListener('mouseup', (event) => {
    events.handle_Function_Mouse_Up(event);
});

body.addEventListener('mousedown', (event) => {
    events.handle_Function_Mouse_Down(event);
});

body.addEventListener('click', (event) => {
    events.handle_Function_Mouse_Down(event);
});

body.addEventListener('touchmove', (event) => {
    events.handle_Function_Touch_Move(event);
});

body.addEventListener('touchstart', (event) => {
    events.handle_Function_Touch_Start(event);
});

body.addEventListener('touchend', (event) => {
    events.handle_Function_Touch_End(event);
});
``
window.addEventListener("devicemotion", (event) => {
    events.handle_Function_Device_Motion(event);
});

window.addEventListener("deviceorientation", (event) => {
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;
    //alert('change');
});

window.addEventListener("orientationchange", (event) => {
    tiny_height = 0;
    tiny_width = 0;
    alert('orientationchange');
    get_dimensions();

    state.events.motion.orientation_string = state.ux.screen.orientation;
    console.log('state.ux.screen.orientation');
    console.log(state.ux.screen.orientation);
});

/*

window.addEventListener('scroll', (event) => {
    get_dimensions();
});

// events
body.addEventListener('keydown', (event) => {
    get_dimensions();
});

body.addEventListener('keyup', (event) => {
    get_dimensions();
});

body.addEventListener('mousemove', (event) => {
    get_dimensions();
});

body.addEventListener('mouseenter', (event) => {
    get_dimensions();
});

body.addEventListener('mouseleave', (event) => {
    get_dimensions();
});

body.addEventListener('mouseup', (event) => {
    get_dimensions();
});

body.addEventListener('mousedown', (event) => {
    get_dimensions();
});

body.addEventListener('click', (event) => {
    get_dimensions();
});

body.addEventListener('touchmove', (event) => {
    get_dimensions();
});

body.addEventListener('touchstart', (event) => {
    get_dimensions();
});

body.addEventListener('touchend', (event) => {
    get_dimensions();
});
``
window.addEventListener("devicemotion", (event) => {
    get_dimensions();
});

*/

window.addEventListener("deviceorientation", (event) => {
    //get_dimensions();
});

window.addEventListener("orientationchange", (event) => {
    tiny_height = 0;
    tiny_width = 0;
    get_dimensions();
});

window.addEventListener("beforeunload", (event) => {
});

export default {
    handle_ReturnState,
    handle_ReturnedState,
    get_dimensions,
    db_create_post
}