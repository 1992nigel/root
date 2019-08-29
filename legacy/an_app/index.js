
// Imports
import style from './style.scss';

import functions from './imports/functions';
import events from './imports/events';
import imported_components from './imports/components';

// Initialization
let config = {
    apiKey: "AIzaSyBYCrGMkgJrj7-1dXQPEdUb0m6HOzKDObw",
    authDomain: "nownigel-67004.firebaseapp.com",
    databaseURL: "https://nownigel-67004.firebaseio.com",
    projectId: "nownigel-67004",
    storageBucket: "nownigel-67004.appspot.com",
    messagingSenderId: "974220525587",
    appId: "1:974220525587:web:26903039e32829e1"
};

let components;
let selected_wp_id = 0;
let sound_effect_beep = document.getElementById('sound_effect_beep');
let body = document.getElementById('body');
let header = document.getElementById('header');
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');
let h5 = document.getElementById('h5');
let h6 = document.getElementById('h6');
let wp_inital_load = true;
let fb_inital_load = true;
let state = { 
    data: {
        route: 0,
        firebase: {},
        wordpress: {},
        validated_user: {},
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
            clientY: 4,
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

        player_1: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 4,
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
            clientY: 4,
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
            clientY: 4,
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
        }

    }
};

let handle_onload_time = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

    state.data.onload_time = state.data.time;
    handle_update();
};

let handle_time = () => {
    
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

                handle_update();

            }, (1000));
    })();
};

let handle_Sequence_Game_Enter = () => {

    // execute on timeout
    if (state.motion.sequence_game == 0) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            <div id="lead_scene" class="">
                <div class="position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto">
                    <div id="logo_mark" class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                </div>

                <div class="position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto">
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                </div>

            </div>
            `;
            handle_Sequence_Game_Enter();
        }, (1000));
    };


    // execute on timeout
    if (state.motion.sequence_game == 1) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            `;
            handle_Sequence_Game_Enter();
        }, (1000));
    };


    // execute on timeout
    if (state.motion.sequence_game == 2) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            <div id="lead_scene" class="">
                <div class="position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto">
                    <div id="logo_mark" class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                </div>

                <div class="position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto">
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                </div>

            </div>
            `;
            handle_Sequence_Game_Enter();
        }, (1000));
    };

    // execute on timeout
    if (state.motion.sequence_game == 3) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            `;
            handle_Sequence_Game_Enter();
        }, (1000));
    };
};

let handle_Sequence_Game_Exit = () => {

    // execute on timeout
    if (state.motion.sequence_game == 0) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            `;
            handle_Sequence_Game_Exit();
        }, (1000));
    };


    // execute on timeout
    if (state.motion.sequence_game == 1) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            <div id="lead_scene" class="">
                <div class="position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto">
                    <div id="logo_mark" class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                </div>

                <div class="position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto">
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                </div>

            </div>
            `;
            handle_Sequence_Game_Exit();
        }, (1000));
    };


    // execute on timeout
    if (state.motion.sequence_game == 2) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            `;
            handle_Sequence_Game_Exit();
        }, (1000));
    };

    // execute on timeout
    if (state.motion.sequence_game == 3) {
        setTimeout( () => {
            state.motion.sequence_game += 1;
            document.getElementById('lead').innerHTML = `

            <div id="lead_scene" class="">
                <div class="position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto">
                    <div id="logo_mark" class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                </div>

                <div class="position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto">
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                </div>

            </div>
            `;
            handle_Sequence_Game_Exit();
        }, (1000));
    };
};


// Add
let firebase_add_Listings = (child) => {

    // if create_user_username.value "username" is already used
    let already_used = false;

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        let user_being_made = state.data.firebase.gnougn.library[i];

        if ( (user_being_made.child) == 'roster') {

            if ( (user_being_made.username) == document.getElementById('create_user_username').value) {
                already_used = true;
            };

        };
    };

    // if user is logged in
    if (state.data.validated_user.id != null) {
        
        var current_second = new Date().getTime() / 1000;
        let default_item;

        // wp_to_fb_posts
        if (child == 'wp_to_fb_posts') {
            default_item = {
                child : "library",
                wp_to_fb_posts : document.getElementById('form_submit').children[0].children[0].children[5].children[1].children[0].value,
                id : 0,
                likes : 0,
                views : 0,
                username : state.data.validated_user.username,
                password : state.data.validated_user.password,
                title : document.getElementById('form_submit').children[0].children[0].children[0].children[1].children[0].value,
                tags : [document.getElementById('form_submit').children[0].children[0].children[0].children[1].children[0].value],
                time: current_second,
                authors : [ ""+`${state.data.validated_user.username}`+"" ]
            };
        };
        
        if (child == 'wp_to_fb_posts') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                state.data.newly_created_ID = key;
                console.log('from addListing' + key);
                // update created item with snap.key
                Ref.child(key).update({
                    id: key
                });


                // Set firebase data
                setTimeout(function() {
                    fb_refresh();
                }, 0);


            });

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // library
        if (child == 'library') {
            default_item = {
                child : "library",
                id : 0,
                likes : 0,
                views : 0,
                username : state.data.validated_user.username,
                password : state.data.validated_user.password,
                title : document.getElementById('create_post_title').value,
                tags : [document.getElementById('create_post_tag').value],
                time: current_second,
                authors : [ ""+`${state.data.validated_user.username}`+"" ]
            };
        };

        if (child == 'library') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                state.data.newly_created_ID = key;
                console.log('from addListing' + key);
                // update created item with snap.key
                Ref.child(key).update({
                    id: key
                });


                // Set firebase data
                setTimeout(function() {
                    fb_refresh();
                }, 0);


            });

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // roster
        if (child == 'roster' && already_used == false) {
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
                authors : [ ""+`${state.data.validated_user.username}`+"" ]
            };
        };

        if (child == 'roster' && already_used == false) {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                state.data.newly_created_ID = key;
                console.log('from addListing' + key);
                // update created item with snap.key
                Ref.child(key).update({
                    id: key
                });


                // Set firebase data
                setTimeout(function() {
                    fb_refresh();
                }, 0);


            });

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        if (child == 'roster' && already_used == true) {
            alert('username already in use');
        };
        
        // stream chat
        if (child == 'stream') {
            default_item = {
                child : "stream",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_stream').value,
                username : state.data.validated_user.username,
                time: current_second,
                tags : [''],
                authors : ['']
            };

        };

        if (child == 'stream') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                state.data.newly_created_ID = key;
                console.log('from addListing' + key);
                // update created item with snap.key
                Ref.child(key).update({
                    id: key
                });


                // Set firebase data
                setTimeout(function() {
                    fb_refresh();
                }, 0);


            });

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

    };
};

// Delete
let firebase_delete_Listings = (id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from delete_Listings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function() {
        fb_refresh();
    }, 0);
};

// Update Like
let firebase_like_Listings = (id) => {

    alert(id);
    alert('firebase_like_Listings');
    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');

    console.log(id, 'from like_Listings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);

    // Set firebase data
    setTimeout(function() {
        fb_refresh();
    }, 0);
};

// Update Dislike
let firebase_dislike_Listings = (id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from like_Listings service');
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
        fb_refresh();
    }, 0);
};

// Update View
let firebase_view_Listings = (id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from view_Listings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.views += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);

    // Set firebase data
    setTimeout(function() {
        fb_refresh();
    }, 0);
};

let handle_display_with_delay = () => {
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

let handle_transform = () => {
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

let handle_ui = () => {
    if (localStorage.post_made == true) {
        alert('show recently made post from wp');
    };

    //lead animation dependent
    //document.getElementById('vr_mg_Left_Top').innerHTML = ``;
    //document.getElementById('vr_mg_Left_Center').innerHTML = ``;
    //document.getElementById('vr_mg_Left_Bottom').innerHTML = ``;
    //document.getElementById('vr_mg_Center_Top').innerHTML = ``;
    //document.getElementById('vr_mg_Center_Mid').innerHTML = ``;
    //document.getElementById('vr_mg_Center_Bottom').innerHTML = ``;
    //document.getElementById('vr_mg_Right_Top').innerHTML = ``;
    //document.getElementById('vr_mg_Right_Mid').innerHTML = ``;
    //document.getElementById('vr_mg_Right_Bottom').innerHTML = ``;
    //document.getElementById('bg_scene').innerHTML = ``;
    //document.getElementById('lead_scene').innerHTML = ``;
    //document.getElementById('vr_fg').innerHTML = ``;
};

let handle_update = () => {

    handle_display_with_delay();
    handle_transform();
    handle_ui();
    handle_render_data_value();

};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    handle_update();
};


let handle_render_data_value = () => {

    // gui
    if (state.data.validated_user_is_logged) {
        if ((document.getElementById('local_validated_user_info')) != null ) {
            document.getElementById('local_validated_user_info').innerHTML = state.data.validated_user.username;
        };
    };

    if (state.data.validated_user_is_logged == false) {
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
        document.getElementById('interaction_character_clientX').innerHTML = state.interaction.playable.clientX;
    };

    if ((document.getElementById('interaction_character_clientY')) != null ) {
        document.getElementById('interaction_character_clientY').innerHTML = state.interaction.playable.clientY;
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

let handle_add_status_events = () => {

    if (document.getElementById('tab_1') != null) {
        document.getElementById('tab_1').addEventListener('click', (event) => {
            alert('tab_1');
            handle_update();
        });
    };

    if (document.getElementById('tab_2') != null) {
        document.getElementById('tab_2').addEventListener('click', (event) => {
            alert('tab_2');
            handle_update();
        });
    };

    if (document.getElementById('tab_3') != null) {
        document.getElementById('tab_3').addEventListener('click', (event) => {
            alert('tab_3');
            handle_update();
        });
    };

    if (document.getElementById('tab_4') != null) {
        document.getElementById('tab_4').addEventListener('click', (event) => {
            alert('tab_4');
            handle_update();
        });
    };

    if (document.getElementById('tab_5') != null) {
        document.getElementById('tab_5').addEventListener('click', (event) => {
            alert('tab_5');
            handle_update();
        });
    };

    if (document.getElementById('tab_6') != null) {
        document.getElementById('tab_6').addEventListener('click', (event) => {
            alert('tab_6');
            handle_update();
        });
    };

    if (document.getElementById('tab_7') != null) {
        document.getElementById('tab_7').addEventListener('click', (event) => {
            alert('tab_7');
            handle_update();
        });
    };

    if (document.getElementById('tab_8') != null) {
        document.getElementById('tab_8').addEventListener('click', (event) => {
            alert('tab_8');
            handle_update();
        });
    };

    if (document.getElementById('tab_9') != null) {
        document.getElementById('tab_9').addEventListener('click', (event) => {
            alert('tab_9');
            handle_update();
        });
    };

    if (document.getElementById('tab_10') != null) {
        document.getElementById('tab_10').addEventListener('click', (event) => {
            alert('tab_10');
            handle_update();
        });
    };

    if (document.getElementById('tab_11') != null) {
        document.getElementById('tab_11').addEventListener('click', (event) => {
            alert('tab_11');
            handle_update();
        });
    };

    if (document.getElementById('tab_12') != null) {
        document.getElementById('tab_12').addEventListener('click', (event) => {
            alert('tab_12');
            handle_update();
        });
    };

    if (document.getElementById('tab_13') != null) {
        document.getElementById('tab_13').addEventListener('click', (event) => {
            alert('tab_13');
            handle_update();
        });
    };

    if (document.getElementById('tab_14') != null) {
        document.getElementById('tab_14').addEventListener('click', (event) => {
            alert('tab_14');
            handle_update();
        });
    };

    if (document.getElementById('tab_15') != null) {
        document.getElementById('tab_15').addEventListener('click', (event) => {
            alert('tab_15');
            handle_update();
        });
    };

    if (document.getElementById('tab_16') != null) {
        document.getElementById('tab_16').addEventListener('click', (event) => {
            alert('tab_16');
            handle_update();
        });
    };

    if (document.getElementById('tab_9') != null) {
        document.getElementById('tab_9').addEventListener('click', (event) => {
            alert('tab_9');
            handle_update();
        });
    };
    if (document.getElementById('gui_top_left') != null) {
        document.getElementById('gui_top_left').addEventListener('click', (event) => {
            //alert('gui_top_left');
            state.gui.top_right.transform = !state.gui.top_right.transform;
            state.modal.nav.top.transform = !state.modal.nav.top.transform;
            state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
            handle_update();
        });
    };

    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            //alert('gui_top');
            state.modal.page.top.transform = !state.modal.page.top.transform;
            handle_update();
        });
    };

    if (document.getElementById('gui_top_right') != null) {
        document.getElementById('gui_top_right').addEventListener('click', (event) => {
            //alert('gui_top_right');
            handle_gui_all();
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

let handle_animation = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                // 10 is half the size of the element_ball
                // It center the positioning point to the center of the element_ball
                if (document.getElementById('element_ball') != null) {
                    document.getElementById('element_ball').style.top = ((state.events.motion.event_gamma / state.ux.dimensions.height) * 100) + "%";
                    document.getElementById('element_ball').style.left = ((state.events.motion.event_beta / state.ux.dimensions.width) * 100) + "%";
                };

                if (document.getElementById('bounce') != null) {
                    document.getElementById('bounce').style =
                        'top: ' + (state.interaction.bounce.yaxis * (state.ux.dimensions.height8)) + 'px; \
                    left: ' + (state.interaction.bounce.xaxis * (state.ux.dimensions.width8)) + 'px ;';
                };
                if (document.getElementById('track_x') != null) {
                    document.getElementById('track_x').style =
                        'top: ' + (0) + 'px; \
                    left: ' + (state.events.mouse.current.clientX) + 'px ;';
                };
                if (document.getElementById('track_y') != null) {
                    document.getElementById('track_y').style =
                        'top: ' + (state.events.mouse.current.clientY) + 'px; \
                    left: ' + (0) + 'px ;';
                };

                // check game state
                if ( (state.interaction.playable.clientX == state.interaction.enemy.clientX) ) {
                    console.log('lost')
                };

                // player 1
                if (document.getElementById('playable_character_svg') != null) {

                    if (state.interaction.playable.stance == 0) {
                        if (state.interaction.playable.angle == 0) {
                        document.getElementById('playable_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.playable.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.playable.angle == 1) {
                        document.getElementById('playable_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.playable.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.playable.frame == 4) {
                        state.interaction.playable.frame = 0;
                    };
                
                    state.interaction.playable.frame += 1;
                };

                if (document.getElementById('playable_character') != null) {
                    let playable_character = document.getElementById('playable_character');
                    playable_character.style =
                        'height: ' + (state.interaction.playable.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.interaction.playable.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.interaction.playable.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.interaction.playable.clientX * (state.ux.dimensions.width8)) + 'px;';
                };

                // player_1
                // motion & stop
                if ( state.interaction.player_1.cycles.walking == true) {

                    // stance: up
                    if ( state.interaction.player_1.stance == 3 ) {

                        
                        // player walking and pause
                        if (state.interaction.player_1.clientY < 3) {
                            state.interaction.player_1.clientY += (1/32);
                        };
                    };

                    // stance: down
                    if ( state.interaction.player_1.stance == 2 ) {

                        // player walking and pause
                        if (state.interaction.player_1.clientY > -4) {
                            state.interaction.player_1.clientY -= (1/32);
                        };
                    };

                    // stance: right
                    if ( state.interaction.player_1.stance == 1 ) {
                        // player walking and pause
                        if (state.interaction.player_1.clientX < 8) {
                            state.interaction.player_1.clientX += (1/32);
                        };
                    };

                    // stance: left
                    if ( state.interaction.player_1.stance == 0 ) {

                        // player walking and pause
                        if (state.interaction.player_1.clientX > 0) {
                            state.interaction.player_1.clientX -= (1/32);
                        };
                    };
                };

                // left
                if ( state.interaction.player_1.clientX <= 0 && state.interaction.player_1.cycles.walking == true ) {
                    state.interaction.player_1.clientX = 0;
                    //state.interaction.player_1.cycles.walking = false;

                    // reset face
                    state.interaction.player_1.stance = 1;

                    // auto walk
                    state.interaction.player_1.clientX += (1/32);
                };

                // right
                if ( state.interaction.player_1.clientX >= 7 && state.interaction.player_1.cycles.walking == true ) {
                    state.interaction.player_1.clientX = 7;
                    //state.interaction.player_1.cycles.walking = false;

                    // reset face
                    state.interaction.player_1.stance = 0;

                    // auto walk
                    state.interaction.player_1.clientX -= (1/32);
                };

                if (document.getElementById('player_1_character_svg') != null) {

                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('player_1_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('player_1_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                
                    state.interaction.player_1.frame += 1;
                };

                if (document.getElementById('player_1_character') != null) {
                    let player_1_character = document.getElementById('player_1_character');
                    player_1_character.style =
                        'height: ' + (state.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
                };


                // player_2
                // motion & stop
                if ( state.interaction.player_2.cycles.walking == true) {

                    // stance: up
                    if ( state.interaction.player_2.stance == 3 ) {

                        
                        // player walking and pause
                        if (state.interaction.player_2.clientY < 3) {
                            state.interaction.player_2.clientY += (1/16);
                        };
                    };

                    // stance: down
                    if ( state.interaction.player_2.stance == 2 ) {

                        // player walking and pause
                        if (state.interaction.player_2.clientY > -4) {
                            state.interaction.player_2.clientY -= (1/16);
                        };
                    };

                    // stance: right
                    if ( state.interaction.player_2.stance == 1 ) {
                        // player walking and pause
                        if (state.interaction.player_2.clientX < 8) {
                            state.interaction.player_2.clientX += (1/16);
                        };
                    };

                    // stance: left
                    if ( state.interaction.player_2.stance == 0 ) {

                        // player walking and pause
                        if (state.interaction.player_2.clientX > 0) {
                            state.interaction.player_2.clientX -= (1/16);
                        };
                    };
                };

                // left
                if ( state.interaction.player_2.clientX <= 0 && state.interaction.player_2.cycles.walking == true ) {
                    state.interaction.player_2.clientX = 0;
                    //state.interaction.player_2.cycles.walking = false;

                    // reset face
                    state.interaction.player_2.stance = 1;

                    // auto walk
                    state.interaction.player_2.clientX += (1/16);
                };

                // right
                if ( state.interaction.player_2.clientX >= 7 && state.interaction.player_2.cycles.walking == true ) {
                    state.interaction.player_2.clientX = 7;
                    //state.interaction.player_2.cycles.walking = false;

                    // reset face
                    state.interaction.player_2.stance = 0;

                    // auto walk
                    state.interaction.player_2.clientX -= (1/16);
                };

                if (document.getElementById('player_2_character_svg') != null) {

                    if (state.interaction.player_2.stance == 0) {
                        if (state.interaction.player_2.angle == 0) {
                        document.getElementById('player_2_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.player_2.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_2.angle == 1) {
                        document.getElementById('player_2_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.player_2.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_2.frame == 4) {
                        state.interaction.player_2.frame = 0;
                    };
                
                    state.interaction.player_2.frame += 1;
                };

                if (document.getElementById('player_2_character') != null) {
                    let player_2_character = document.getElementById('player_2_character');
                    player_2_character.style =
                        'height: ' + (state.interaction.player_2.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.interaction.player_2.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.interaction.player_2.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.interaction.player_2.clientX * (state.ux.dimensions.width8)) + 'px;';
                };

                // enemy
                // motion & stop
                if ( state.interaction.enemy.cycles.walking == true) {

                    // stance: up
                    if ( state.interaction.enemy.stance == 3 ) {

                        
                        // player walking and pause
                        if (state.interaction.enemy.clientY < 3) {
                            state.interaction.enemy.clientY += (1/8);
                        };
                    };

                    // stance: down
                    if ( state.interaction.enemy.stance == 2 ) {

                        // player walking and pause
                        if (state.interaction.enemy.clientY > -4) {
                            state.interaction.enemy.clientY -= (1/8);
                        };
                    };

                    // stance: right
                    if ( state.interaction.enemy.stance == 1 ) {
                        // player walking and pause
                        if (state.interaction.enemy.clientX < 8) {
                            state.interaction.enemy.clientX += (1/8);
                        };
                    };

                    // stance: left
                    if ( state.interaction.enemy.stance == 0 ) {

                        // player walking and pause
                        if (state.interaction.enemy.clientX > 0) {
                            state.interaction.enemy.clientX -= (1/8);
                        };
                    };
                };

                // left
                if ( state.interaction.enemy.clientX <= 0 && state.interaction.enemy.cycles.walking == true ) {
                    state.interaction.enemy.clientX = 0;
                    //state.interaction.enemy.cycles.walking = false;

                    // reset face
                    state.interaction.enemy.stance = 1;

                    // auto walk
                    state.interaction.enemy.clientX += (1/8);
                };

                // right
                if ( state.interaction.enemy.clientX >= 7 && state.interaction.enemy.cycles.walking == true ) {
                    state.interaction.enemy.clientX = 7;
                    //state.interaction.enemy.cycles.walking = false;

                    // reset face
                    state.interaction.enemy.stance = 0;

                    // auto walk
                    state.interaction.enemy.clientX -= (1/8);
                };

                if (document.getElementById('enemy_character_svg') != null) {

                    if (state.interaction.enemy.stance == 0) {
                        if (state.interaction.enemy.angle == 0) {
                        document.getElementById('enemy_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.enemy.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.enemy.angle == 1) {
                        document.getElementById('enemy_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.enemy.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.enemy.frame == 4) {
                        state.interaction.enemy.frame = 0;
                    };
                
                    state.interaction.enemy.frame += 1;
                };

                if (document.getElementById('enemy_character') != null) {
                    let enemy_character = document.getElementById('enemy_character');
                    enemy_character.style =
                        'height: ' + (state.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
                        'width: ' + (state.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
                        'top: ' + (state.interaction.enemy.clientY * (state.ux.dimensions.height8)) + 'px;' +
                        'left: ' + (state.interaction.enemy.clientX * (state.ux.dimensions.width8)) + 'px;';
                };

                // bounce

                if ( state.interaction.bounce.yaxis == 0 ) {
                        state.interaction.bounce.yaxisascending = true;
                };

                // yaxisascending: down
                if ( state.interaction.bounce.yaxis == 8 ) {
                        state.interaction.bounce.yaxisascending = false;
                };

                // xaxisascending: right
                if ( state.interaction.bounce.xaxis == 0 ) {
                        state.interaction.bounce.xaxisascending = true;
                };

                // xaxisascending: left
                if ( state.interaction.bounce.xaxis == 8 ) {
                        state.interaction.bounce.xaxisascending = false;
                };


                // yaxisascending: up
                if ( state.interaction.bounce.yaxisascending == true ) {

                    
                        state.interaction.bounce.yaxis += (1/8);
                };

                // yaxisascending: down
                if ( state.interaction.bounce.yaxisascending == false ) {

                        state.interaction.bounce.yaxis -= (1/8);
                };

                // xaxisascending: right
                if ( state.interaction.bounce.xaxisascending == true ) {
                        state.interaction.bounce.xaxis += (1/8);
                };

                // xaxisascending: left
                if ( state.interaction.bounce.xaxisascending == false ) {

                        state.interaction.bounce.xaxis -= (1/8);
                };

                //stage
                // vr
                if (document.getElementById('vr_mg') != null) {
                    document.getElementById('vr_mg').style = "transform: translate3d(" +
                        (state.interaction.vr.clientX * 100) + "%, " +
                        (state.interaction.vr.clientY * 100) + "%, 0);"
                };

                state.motion.frame += 1;
                handle_update();

            }, (1000 / state.motion.framerate));
    })();
};

let handle_events = () => {

    if (body != null) {

        if (document.getElementById('form_submit') != null) {
            // Set firebase data
            setTimeout(function() {

                // wp
                if (document.getElementById('form_login').children[0].children[0] != null) {

                    // username
                    document.getElementById('form_login').children[0].children[0].children[0].children[1].addEventListener('click', (event) => {
                        //alert(document.getElementById('form_login').children[0].children[0].children[0].children[1].value);
                    });

                    // password
                    document.getElementById('form_login').children[0].children[0].children[1].children[1].addEventListener('click', (event) => {
                        //alert(document.getElementById('form_login').children[0].children[0].children[1].children[1].value);
                    });

                    // password
                    document.getElementById('form_login').children[0].children[0].children[3].children[0].addEventListener('click', (event) => {
                        alert(document.getElementById('form_login').children[0].children[0].children[0].children[1].value);
                        alert(document.getElementById('form_login').children[0].children[0].children[1].children[1].value);
                    });
                };

                // wp register
                // admin
                if (document.getElementById('form_register').children[0] != null) {

                    // username
                    document.getElementById('form_register').children[0].children[0].children[1].children[1].addEventListener('click', (event) => {
                        alert(document.getElementById('form_register').children[0].children[0].children[1].children[1].value);
                    });

                };

                // wp edit
                // admin
                if (document.getElementById('form_edit').children[1] != null) {

                    // username
                    document.getElementById('form_edit').children[1].children[0].children[1].children[1].addEventListener('click', (event) => {
                        alert(document.getElementById('form_edit').children[1].children[0].children[1].children[1].value);
                    });

                };
                // admin
                if (document.getElementById('form_edit').children[0] != null) {

                    // username
                    document.getElementById('form_edit').children[0].children[0].children[1].children[1].addEventListener('click', (event) => {
                        alert(document.getElementById('form_edit').children[0].children[0].children[1].children[1].value);
                    });

                };

                // before post was made
                if (document.getElementById('form_submit').children[0].children[1] != null) {

                    document.getElementById('form_submit').children[0].children[1].children[6].addEventListener('click', (event) => {
                        localStorage.setItem("post_made", "true");
                        localStorage.setItem("last_post_made", random_id);
                        firebase_add_Listings('wp_to_fb_posts');
                        alert('form_submit');
                    });

                    document.getElementById('form_submit').children[0].children[1].children[5].children[1].children[0].value = `${random_id}`
                };

                // after post was made
                if (document.getElementById('form_submit').children[0].children[1] == null) {

                    document.getElementById('form_submit').children[0].children[0].children[6].addEventListener('click', (event) => {
                        localStorage.setItem("post_made", "true");
                        localStorage.setItem("last_post_made", random_id);
                        firebase_add_Listings('wp_to_fb_posts');
                        alert('form_submit');
                    });

                    document.getElementById('form_submit').children[0].children[0].children[5].children[1].children[0].value = `${random_id}`
                };

            }, 5000);

        };

        // filter by title
        if (document.getElementById('element_addListing') != null) {
            document.getElementById('element_addListing').addEventListener('click', (event) => {
                firebase_add_Listings('library');
            });
        };
        // create
        if (document.getElementById('element_addRoster') != null) {
            document.getElementById('element_addRoster').addEventListener('click', (event) => {
                firebase_add_Listings('roster');
            });
        };

        if (document.getElementById('element_addMessages') != null) {
            document.getElementById('element_addMessages').addEventListener('click', (event) => {
                firebase_add_Listings('messages');
            });
        };
        if (document.getElementById('element_addStream') != null) {
            document.getElementById('element_addStream').addEventListener('click', (event) => {
                firebase_add_Listings('stream');
            });
        };
        if (document.getElementById('element_addActivity') != null) {
            document.getElementById('element_addActivity').addEventListener('click', (event) => {
                firebase_add_Listings('activity');
            });
        };
        if (document.getElementById('element_addInteraction') != null) {
            document.getElementById('element_addInteraction').addEventListener('click', (event) => {
                firebase_add_Listings('interaction');
            });
        };

        if (document.getElementById('login_submit') != null) {
            document.getElementById('login_submit').addEventListener('click', (event) => {
                // filter library
                setTimeout(function() {
                    check_login();                                  
                    check_user_input_login();
                }, 0);
            });
        };

        if (document.getElementById('logout_submit') != null) {
            document.getElementById('logout_submit').addEventListener('click', (event) => {
                // filter library
                setTimeout(function() {                                    
                    check_user_input_logout();
                }, 0);
            });
        };

        if (document.getElementById('wp_input_author_name_filter') != null) {
            document.getElementById('wp_input_author_name_filter').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    wp_render();
                }, 0);
            });
        };

        if (document.getElementById('wp_input_title_filter') != null) {
            document.getElementById('wp_input_title_filter').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    wp_render();
                }, 0);
            });
        };

        if (document.getElementById('fb_input_author_name_filter') != null) {
            document.getElementById('fb_input_author_name_filter').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    fb_render();
                }, 0);
            });
        };

        if (document.getElementById('fb_input_title_filter') != null) {
            document.getElementById('fb_input_title_filter').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    fb_render();
                }, 0);
            });
        };

        // scroll
        body.addEventListener('scroll', (event) => {
        });

        // events
        body.addEventListener('keydown', (event) => {
            
            if (event.keyCode == 27) {
                wp_refresh();
                history.pushState("", document.title, "/");
            };

            if (event.keyCode == 13) {
                state.modal.nav.top.transform = !state.modal.nav.top.transform;
                //state.modal.pip.top.transform = !state.modal.pip.top.transform;
                //state.modal.pip.bottom.transform = !state.modal.pip.bottom.transform;
                //state.modal.pip.left.transform = !state.modal.pip.left.transform;
                //state.modal.pip.right.transform = !state.modal.pip.right.transform;
                //state.modal.page.top.transform = !state.modal.page.top.transform;
                //state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
                //state.modal.morph.top.transform = !state.modal.morph.top.transform;
                //state.modal.pop.top.transform = !state.modal.pop.top.transform;
                state.modal.menu.left.transform = !state.modal.menu.left.transform;

                //state.gui.top.transform = !state.gui.top.transform;
                state.gui.top_left.transform = !state.gui.top_left.transform;
                //state.gui.top_right.transform = !state.gui.top_right.transform;

                //state.gui.left.transform = !state.gui.left.transform;
                //state.gui.right.transform = !state.gui.right.transform;

                //state.gui.bottom.transform = !state.gui.bottom.transform;
                //state.gui.bottom_left.transform = !state.gui.bottom_left.transform;
                //state.gui.bottom_right.transform = !state.gui.bottom_right.transform;
                handle_update();
                // filter by title
                if (document.getElementById('element_addListing') != null) {
                    document.getElementById('element_addListing').addEventListener('click', (event) => {
                        firebase_add_listings('library');
                    });
                };

            };

            if (event.keyCode == 37) {
                pagination_start += 1;
                check_user_input_login();
            };

            if (event.keyCode == 38) {
                pagination_end += 1;
                check_user_input_login();
            };

            if (event.keyCode == 39) {
                pagination_start -= 1;
                check_user_input_login();
            };

            if (event.keyCode == 40) {
                pagination_end -= 1;
                check_user_input_login();
            };

        });


        /* scroll
        document.getElementById('scrollable_x').addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            handle_ReturnedState_fromEvents();
        });

        document.getElementById('scrollable_y').addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            handle_ReturnedState_fromEvents();
        });
        */

        // events
        body.addEventListener('keydown', (event) => {
            events.handle_Function_Key_Down(event);
            handle_ReturnedState_fromEvents();
            //sound_1.play();
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
            //events.handle_Function_Mouse_Down(event);
            //handle_ReturnedState_fromEvents();
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

    };
};

let sequence_Load = () => {

    state.data.route += 1;


    console.log(state.data.route);
    if (state.data.route == 1) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_1205 height_1vw float_left`

        check_localStorage();
        fb_validation;
        wp_validation;

        /* after fb_validation
        setTimeout(function() {
            sequence_Load();
        }, 0);
        */

    };

    if (state.data.route == 2) {

        if (selected_wp_id != 0) {
            
            for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
                if (state.data.firebase.gnougn.library[i].wp_id != null) {
                    if (state.data.firebase.gnougn.library[i].wp_id == selected_wp_id) {
                        alert('post found');
                    };
                };
            };
        };

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_25 height_1vw float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 3) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_3705 height_1vw float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 4) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_50 height_1vw float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 5) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_6205 height_1vw float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 6) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_75 height_1vw float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 7) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_8705 height_1vw float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 8) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_100 height_1vw float_left`

        document.getElementById('logo_mark').classList = `enterBottomvh animated1 delay1 gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto`

        document.getElementById('lead').innerHTML = ``

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 9) {

        
        document.getElementById('load_bar_container').classList = `animated1 leaveBottom position_fixed bottom_0 margin_auto width_100 height_1vw float_left z_index_1`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 1000);
    };

    if (state.data.route == 10) {

        document.getElementById('buffer').classList = `display_none position_relative float_left width_100vw height_100 bg_white`
        document.getElementById('cardboard').classList = `width_100 height_100vh position_fixed top_0 left_0 right_0 float_left z_index_-1`
        
        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 11) {

        sound_effect_beep.play();

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };
};

let wp_json = function(url, callback) {
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

let dev = true;
firebase.initializeApp(config);

// firebase libraris
let fb_writable = false;
let fb_response = {};
let fb_library = [];
let fb_filtered_library_by_title = [];
let fb_refresh = () => {

    let rootRef = firebase.database().ref();

    fb_writable = true;
    fb_response = {};

    (() => {
        rootRef.on('value', function(snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('fb_refresh(): has updated -> state.data.firebase');
            console.log(state.data.firebase);
        });

    })();
};
let fb_render = () => {
    // render library
    (() => {

        setTimeout(function() {

            //handle_empty_list();
            //document.getElementById('wp_library_ol').innerHTML = ``;
            document.getElementById('fb_sorted_library_by_time_up_ol').innerHTML = ``;
            document.getElementById('fb_sorted_library_by_time_down_ol').innerHTML = ``;
            document.getElementById('fb_library_ol').innerHTML = ``;
            document.getElementById('filtered_library_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_library_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_roster_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_interaction_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_activity_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_messages_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_stream_by_title_ol').innerHTML = ``;
            /*
            document.getElementById('sorted_library_by_time_up_ol').innerHTML = ``;
            document.getElementById('filtered_wp_library_by_title_ol').innerHTML = ``;
            */
            //wp_library = [];
            fb_library = [];
            //wp_filtered_library_by_title = [];
            fb_filtered_library_by_title = [];
            //sorted_library_by_time_up = [];

            if ((fb_response) != null) {

                // create array
                if ((document.getElementById('fb_library_ol')) != null) {
                    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
                        fb_library.push(state.data.firebase.gnougn.library[i]);
                    };

                    // render array
                    for (var i = 0; i < fb_library.length; i++) {
                        document.getElementById('fb_library_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                    };
                };


                // create array
                if ((document.getElementById('filtered_library_by_title_ol')) != null) {

                    for (var i = 0; i < fb_library.length; i++) {
                        if (
                            (fb_library[i].title.toString().toLowerCase().includes(document.getElementById('fb_input_title_filter').value.toString().toLowerCase()))
                            &&
                            (fb_library[i].username.toString().toLowerCase().includes(document.getElementById('fb_input_author_name_filter').value.toString().toLowerCase()))
                            ) {
                            fb_filtered_library_by_title.push(fb_library[i]);
                        };
                        console.log('fb_filtered_library_by_title[i]');
                        console.log(fb_filtered_library_by_title[i]);
                    };
                };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        document.getElementById('filtered_library_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                    };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        if (fb_filtered_library_by_title[i].child == 'roster') {
                            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                        };
                    };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        if (fb_filtered_library_by_title[i].child == 'interaction') {
                            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                        };
                    };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        if (fb_filtered_library_by_title[i].child == 'activity') {
                            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                        };
                    };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        if (fb_filtered_library_by_title[i].child == 'messages') {
                            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                        };
                    };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        if (fb_filtered_library_by_title[i].child == 'stream') {
                            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                        };
                    };

                    // render array
                    for (var i = 0; i < fb_filtered_library_by_title.length; i++) {
                        if (fb_filtered_library_by_title[i].child == 'library') {
                            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(
                            functions.Generate_new_li_post(fb_library[i])
                        );
                        };
                    };

                    // render array
                    for (var i = 0; i < fb_sorted_library('timeup').length; i++) {
                        document.getElementById('fb_sorted_library_by_time_up_ol').appendChild(
                            functions.Generate_new_li_post(fb_sorted_library('timeup')[i])
                        );
                    };

                    // render array
                    for (var i = 0; i < fb_sorted_library('timedown').length; i++) {
                        document.getElementById('fb_sorted_library_by_time_down_ol').appendChild(
                            functions.Generate_new_li_post(fb_sorted_library('timedown')[i])
                        );
                    };

                        // refresh library
                        check_login();                
                        check_user_input_login();

            };

        }, 0);

    })();
};
let fb_validation = setInterval( () => {

    if (fb_writable == true) {

        fb_response = state.data.firebase;

        // target "gnougn" library
        if ((fb_response.gnougn.library) != null) {
            
            // "stops" setInterval
            fb_writable = false;
            let result_library = Object.keys(
                fb_response.gnougn.library).map(
                function(key) {
                    return fb_response.gnougn.library[key];
                }
            );
            
            // we got an array from fb data
            fb_response.gnougn.library = result_library;
            console.log('fb_validation(): has updated -> fb_response.gnougn.library');
            console.log(fb_response.gnougn.library);

            if (fb_writable == false) {

                setTimeout(function() {
                    //handle_localStorage();
                    fb_render();
                    //console.clear();
                    if (dev) {
                        //alert('connected!');
                    };

                }, 0);

                if(localStorage.username == 'local_user') {
                    if (dev) {
                        //alert('this is a new local user: ' + localStorage.username);
                    };
                };

                if(localStorage.username != 'local_user') {
                    if (dev) {
                        //alert('this is a not new local user: ' + localStorage.username);
                    };
                    //local_login();
                };

                if (fb_inital_load == true) {
                    fb_inital_load = false;
                    if (dev) {
                        //alert('first firebase load');

                        // refresh library
                        setTimeout(function() {
                            sequence_Load();
                        }, 0);

                    };
                    return;
                };

                if (fb_inital_load == false) {
                    if (dev) {
                        //alert('not first firebase load');
                    };
                    return;
                };

            };

        };

    };
    

    /*

    if (fb_writable == true) {

        fb_response = state.data.firebase;

        // target "gnougn" library
        if ((fb_response.gnougn.library) != null) {
            
            // "stops" setInterval
            fb_writable = false;
            let result_library = Object.keys(
                fb_response.gnougn.library).map(
                function(key) {
                    return fb_response.gnougn.library[key];
                }
            );
            
            // we got an array from fb data
            fb_response.gnougn.library = result_library;
            console.log('fb_validation(): has updated -> fb_response.gnougn.library');
            console.log(fb_response.gnougn.library);

            if (fb_writable == false) {

                setTimeout(function() {
                    //handle_localStorage();
                    fb_render();
                    //console.clear();
                    if (dev) {
                        alert('connected!');
                    };

                    setTimeout(() => {
                        sequence_Load();
                    }, 1000);

                }, 0);

                if(localStorage.username == 'local_user') {
                    if (dev) {
                        alert('this is a new local user: ' + localStorage.username);
                    };
                };

                if(localStorage.username != 'local_user') {
                    if (dev) {
                        alert('this is a not new local user: ' + localStorage.username);
                    };
                    //local_login();
                };

                if (fb_inital_load == true) {
                    fb_inital_load = false;
                    if (dev) {
                        alert('first firebase load');
                    };
                    return;
                };

                if (fb_inital_load == false) {
                    if (dev) {
                        alert('not first firebase load');
                    };
                    return;
                };

            };

        };

    };
    */
}, 1000/24);

// wp libraris
let wp_library = [];
let wp_filtered_library_by_title = [];
let wp_refresh = () => {
    wp_json('https://antenuh.com/feed/json',
    function(err, data) {
        console.log('wp_json');
      if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
        console.log('wp count: ' + data.items);
        state.data.wordpress = data.items;

        for (var i = 0; i < state.data.wordpress.length; i++) {
            let wp_post = state.data.wordpress[i];
            console.log(wp_post);
        };

        wp_writable = true;
      };
    });
};
let wp_render = () => {
    // render library
    (() => {

        setTimeout(function() {

            //handle_empty_list();
            document.getElementById('wp_library_ol').innerHTML = ``;
            document.getElementById('filtered_wp_library_by_title_ol').innerHTML = ``;
            
            wp_library = [];
            wp_filtered_library_by_title = [];

            if ((state.data.wordpress) != null) {

                // create array
                if ((document.getElementById('wp_library_ol')) != null) {
                    for (var i = 0; i < state.data.wordpress.length; i++) {
                        wp_library.push(state.data.wordpress[i]);
                    };
                    // render array
                    for (var i = 0; i < wp_library.length; i++) {
                        document.getElementById('wp_library_ol').appendChild(
                            functions.Generate_new_wp_li_post(wp_library[i])
                        ); 
                    };
                };


                // create array
                if ((document.getElementById('filtered_wp_library_by_title_ol')) != null) {

                    for (var i = 0; i < wp_library.length; i++) {
                        if (
                            (wp_library[i].title.toString().toLowerCase().includes(document.getElementById('wp_input_title_filter').value.toString().toLowerCase()))
                            &&
                            (wp_library[i].author.name.toString().toLowerCase().includes(document.getElementById('wp_input_author_name_filter').value.toString().toLowerCase()))
                            ) {
                            wp_filtered_library_by_title.push(wp_library[i]);
                            console.log('wp_library[i] pushed to wp_filtered_library_by_title');
                            console.log(wp_library[i]);
                        };
                    };
                };

                    // render array
                    for (var i = 0; i < wp_filtered_library_by_title.length; i++) {
                        document.getElementById('filtered_wp_library_by_title_ol').appendChild(
                            functions.Generate_new_wp_li_post(wp_library[i])
                        ); 
                    };
            };

        }, 0);

    })();
};
let wp_writable = false;
let wp_validation = setInterval( () => {

    if (wp_writable == true) {

        // target "gnougn" library
        if ((state.data.wordpress) != null) {
            
            // "stops" setInterval
            wp_writable = false;
            let result_library = Object.keys(
                state.data.wordpress).map(
                function(key) {
                    return state.data.wordpress[key];
                }
            );
            
            // we got an array from fb data
            state.data.wordpress = result_library;
            console.log('wp_validation(): has updated -> state.data.wordpress');
            console.log(state.data.wordpress);

            // now that wp has been updated
            if (wp_writable == false) {

                setTimeout(function() {
                    //handle_localStorage();
                    wp_render();
                    //console.clear();
                    if (dev) {
                        //alert('connected!');
                    };

                }, 0);

                if(localStorage.username == 'local_user') {
                    if (dev) {
                        //alert('this is a new local user: ' + localStorage.username);
                    };
                };

                if(localStorage.username != 'local_user') {
                    if (dev) {
                        //alert('this is a not new local user: ' + localStorage.username);
                    };
                    //local_login();
                };

                if (wp_inital_load == true) {
                    wp_inital_load = false;
                    if (dev) {
                        //alert('first firebase load');
                    };
                    return;
                };

                if (wp_inital_load == false) {
                    if (dev) {
                        //alert('not first firebase load');
                    };
                    return;
                };

            };

        };

    };
}, 1000/24);

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
let fb_sorted_library = (x) => {  return fb_filtered_library_by_title.sort(find_sort(x)) };
let wp_sorted_library = (x) => {  return wp_filtered_library_by_title.sort(find_sort(x)) };

let check_localStorage = () => {
    if (localStorage.user == null) {
        let placeholder_user = {
            "username" : "local_user",
            "password" : "xxx",
            "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
            "post_made" : "false",
        };
        localStorage.setItem("user", placeholder_user);
        localStorage.setItem("username", placeholder_user.username);
        localStorage.setItem("password", placeholder_user.password);
        localStorage.setItem("post_made", "false");
        //alert('welcome first timer');
        return
    };
    if (localStorage.user != null && localStorage.username == 'local_user') {
        //alert('welcome bax new user');
        return
    };
    if (localStorage.user != null && localStorage.username != 'local_user') {
        document.getElementById('login_username_input').value = localStorage.username;
        document.getElementById('login_password_input').value = localStorage.password;
        //alert('welcome bax, username: ' + localStorage.username + '. password: ' + localStorage.password);
        return
    };
};

let validated_user = {};
let pagination_start = 0;
let pagination_end = 12;

let check_login = () => {

        localStorage.setItem("username", document.getElementById('login_username_input').value);
        localStorage.setItem("password", document.getElementById('login_password_input').value);
};

let check_user_input_login = () => {

    //alert('check_user_input_login: ' + localStorage.username);

    // render array
    if (localStorage.username != 'local_user') {
        //alert('logging on');
        for (var i = 0; i < fb_library.length; i++) {
            if (fb_library[i].child == 'roster') {
                if (fb_library[i].username == localStorage.username) {
                    //alert('username found');
                    if (localStorage.password != fb_library[i].password) {
                        //alert(localStorage.username + ' your password: ' + localStorage.username + 'is not correct');

                            // password does not match
                            localStorage.setItem("username", 'local_user');
                            localStorage.setItem("password", "xxx");
                            localStorage.setItem("post_made", "false");
                            document.getElementById('login_user_info').innerHTML = `please retry password: ${localStorage.username}`;
                    };
                    if (localStorage.password == fb_library[i].password) {
                        //alert(localStorage.username + ' your password: ' + localStorage.username + 'is correct');
                        state.data.validated_user = fb_library[i];
                        // password match
                        localStorage.setItem("user", state.data.validated_user);
                        localStorage.setItem("username", state.data.validated_user.username);
                        localStorage.setItem("password", state.data.validated_user.password);
                        localStorage.setItem("post_made", "false");
                        document.getElementById('login_user_info').innerHTML = `welcome back: ${state.data.validated_user.username}</br>`;
                        document.getElementById('validated_user').innerHTML = `username: ${state.data.validated_user.username}</br>`;
                        document.getElementById('validated_user').innerHTML += `password: ${state.data.validated_user.password}</br>`;
                        document.getElementById('validated_user').innerHTML += `avatar: ${state.data.validated_user.avatar}</br>`;
                        document.getElementById('validated_user').innerHTML += `shares: ${state.data.validated_user.shares}</br>`;
                        document.getElementById('validated_user').innerHTML += `shared: ${state.data.validated_user.shared}</br>`;
                        document.getElementById('validated_user').innerHTML += `likes: ${state.data.validated_user.likes}</br>`;
                        document.getElementById('validated_user').innerHTML += `liked: ${state.data.validated_user.liked}</br>`;
                        document.getElementById('validated_user').innerHTML += `time: ${state.data.validated_user.time}</br>`;
                        document.getElementById('validated_user').innerHTML += `lastlog: ${state.data.validated_user.lastlog}</br>`;
                        document.getElementById('validated_user').innerHTML += `views: ${state.data.validated_user.views}</br>`;
                        document.getElementById('validated_user').innerHTML += `viewed: ${state.data.validated_user.viewed}</br>`;
                        document.getElementById('validated_user').innerHTML += `commented: ${state.data.validated_user.commented}</br>`;
                        document.getElementById('validated_user').innerHTML += `comments: ${state.data.validated_user.comments.length}</br>`;
                        document.getElementById('validated_user').innerHTML += `followers: ${state.data.validated_user.followers.length}</br>`;
                        document.getElementById('validated_user').innerHTML += `follows: ${state.data.validated_user.follows.length}</br>`;

                        for (var i = 0; i < state.data.validated_user.tags.length; i++) {
                            document.getElementById('validated_user').innerHTML += `tag: ${state.data.validated_user.tags[i]}</br>`;
                        };

                        let random_tag = () => { let tag = (Math.floor(Math.random() * state.data.validated_user.tags.length) + 0)
                            return tag };

                        for (var i = 0; i < pagination_end; i++) {

                            if ( i > pagination_start) {
                                document.getElementById('validated_user').innerHTML += `random tag: ${state.data.validated_user.tags[random_tag()]}</br>`;
                            };
                        };
                        

                        document.getElementById('validated_user').innerHTML += `views: ${state.data.validated_user.views}</br>`;

                        // render array
                        document.getElementById('validated_user_posts').innerHTML = ``;
                        for (var i = 0; i < fb_library.length; i++) {
                            if (fb_library[i].child == 'library') {
                                if (fb_library[i].username == state.data.validated_user.username) {
                                    document.getElementById('validated_user_posts').innerHTML += `
                                <li class="bg_grey">
                                    <p class="font_size_205vw color_white">title:${fb_library[i].title}</p>
                                    <p class="font_size_205vw color_white">time:${fb_library[i].time}</p>
                                </li>`
                                };
                            };
                        };

                    };   
                };      
            };                
        };
    };

    if (localStorage.username == 'local_user') {
        document.getElementById('login_user_info').innerHTML = `please create an account or login`;
    };
};

let check_user_input_logout = () => {

        let placeholder_user = {
            "username" : "local_user",
            "password" : "xxx",
            "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
            "post_made" : "false",
        };

        localStorage.setItem("user", placeholder_user);
        localStorage.setItem("username", placeholder_user.username);
        localStorage.setItem("password", placeholder_user.password);
        localStorage.setItem("post_made", "false");

        document.getElementById('login_user_info').innerHTML = `please log back in: ${state.data.validated_user.username}`;
        document.getElementById('validated_user').innerHTML = ``;
};

let randomize_id = () => { let id = (Math.floor(Math.random()*999999) + 1)
    return id
};

let random_id = randomize_id();

let check_url = () => {


    var parts = location.pathname.split('/');
    window.scrollTo(0, 0);
    console.log(parts[1]);
    if (parts[1] != null) {

        if ((parts[1] == '')) {

            console.log('just stay at the home page');
            //h1.innerHTML = `<a href="https://www.nownigel.com">nownigel</a>`
            //h2.innerHTML = `UI / UX engineer, motion artist and graphic designer`
            //h3.innerHTML = `Videos, Graphics and Interactables`
            //h4.innerHTML = `Desktop, Mobile & VR`
            //h5.innerHTML = `Made with Javascript, HTML & CSS`
            //h6.innerHTML = `New all original content everyday`
        };

        if (parts[1] == 'p') {
            console.log('going to post page');
            if (parts[2] != null) {
                console.log('post id: ' + parts[2]);
            };

            //document.getElementsByTagName('meta')["keywords"].content = "fortnite";
            document.getElementsByTagName('meta')["description"].content = "fortnite description";
            document.title = "fortnite is here!";

            h1.innerHTML = `<a href="https://www.nownigel.com">fortnite</a>`
            h2.innerHTML = `UI / UX engineer, motion artist and graphic designer`
            h3.innerHTML = `Videos, Graphics and Interactables`
            h4.innerHTML = `Desktop, Mobile & VR`
            h5.innerHTML = `Made with Javascript, HTML & CSS`
            h6.innerHTML = `New all original content everyday`
        };


        if (parts[1] == 'x') {
            console.log('going to post page');
            if (parts[2] != null) {
                console.log('post id: ' + parts[2]);
            };

            //document.getElementsByTagName('meta')["keywords"].content = "taylor";
            document.getElementsByTagName('meta')["description"].content = "taylor description";
            document.title = "taylor is here!";

            h1.innerHTML = `<a href="https://www.nownigel.com">taylor</a>`
            h2.innerHTML = `UI / UX engineer, motion artist and graphic designer`
            h3.innerHTML = `Videos, Graphics and Interactables`
            h4.innerHTML = `Desktop, Mobile & VR`
            h5.innerHTML = `Made with Javascript, HTML & CSS`
            h6.innerHTML = `New all original content everyday`
        };

        if ((parts[1] != 'p') && (parts[1] != '')) {
            console.log('going to user page');
            if (parts[1] != null) {
                console.log('user id: ' + parts[1]);
            };
        };
    };
};

let handle_ReturnState = () => {
    return state
};

document.addEventListener("DOMContentLoaded", function(){

    //document.getElementById('cardboard').classList = `width_100 height_100vh position_fixed top_0 left_0 right_0 float_left z_index_-1`
    document.getElementById('bg_scene').classList = `width_100 height_100 position_fixed top_0 left_0 right_0 float_left z_index_-1`
    document.getElementById('load_bar_container').classList = `position_fixed bottom_0 margin_auto width_100 height_1vw float_left z_index_1`

    check_url();
    fb_refresh();
    wp_refresh();

});

window.addEventListener("load", () => {
    
    //alert('2.0');
    handle_update();
    handle_events();
    handle_add_status_events();
    handle_animation();
    handle_onload_time();
    handle_time();

    var parts = location.pathname.split('/');
    window.scrollTo(0, 0);
    console.log(parts[1]);

    if (parts[1] != null) {

        alert('localStorage.last_post_made' + localStorage.last_post_made);

        if ((parts[1] == '')) {
            console.log('just stay at the home page');
        };

        if (parts[1] == 'w') {
            console.log('going to post page');
            alert(document.getElementById('wp_to_fb_posts_id').children[0].children[0].innerHTML);
            selected_wp_id = document.getElementById('wp_to_fb_posts_id').children[0].children[0].innerHTML;
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

    sequence_Load();
});

window.onresize = () => {

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
    };

    console.log('resize');
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
    handle_ReturnState,
    check_url,
    handle_Sequence_Game_Enter,
    handle_Sequence_Game_Exit
}