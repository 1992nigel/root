// Imports
import style from './style.scss';
import events from './imports/events';
import elements from './imports/elements';

let tiny_height = 0;
let tiny_width = 0;
let body = document.getElementById('body');


let stored_auth_user_cred = {};
let posts_guides = [];

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYCrGMkgJrj7-1dXQPEdUb0m6HOzKDObw",
    authDomain: "nownigel-67004.firebaseapp.com",
    databaseURL: "https://nownigel-67004.firebaseio.com",
    projectId: "nownigel-67004",
    storageBucket: "nownigel-67004.appspot.com",
    messagingSenderId: "974220525587",
    appId: "1:974220525587:web:26903039e32829e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth ref
const auth = firebase.auth();

// make firestore ref
const db = firebase.firestore();

// listenforauth state changes
auth.onAuthStateChanged(logged_auth_user => {
    console.log('onAuthStateChanged');

    if ( (logged_auth_user) == null) {
        get_db_guides();
        console.log('please login');
    };

    if ( (logged_auth_user) != null) {
        stored_auth_user_cred = logged_auth_user;
        get_db_guides();
        console.log('logined in: ' + stored_auth_user_cred.uid);
    };

});


let state = {
	
	data: {
        onload_url: '',
        scene: 0,
        route: 0,
        game: 0,
		time: 0,
		onload_time: 0,
		dark_mode: 0
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

        player_1: {
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

if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
    tiny_height = state.ux.dimensions.height;
};

if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
    tiny_width = state.ux.dimensions.width;
};

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

console.log('index.js from nownigel');

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

                //handle_render_data_value();

            }, (1000));
    })();
};

let handle_play_DOMContentLoaded = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval < 24) {
                
                    if (document.getElementById('shots') != null) {
                        let shots = document.getElementById('shots');
                        shots.innerHTML = ``

                        let element = document.createElement('div');

                        element.setAttribute("id", `shot_1`);
                        element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
                        element.innerHTML = `
                            <div class="width_50 height_50 gui_logo_type_1 top_0 right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_logo_type_1 top_0 left_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_logo_type_1 bottom_0  right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_logo_type_1 bottom_0 left_0 margin_auto position_absolute"></div>
                        `
                        element.addEventListener("click", function(event) {
                            alert('yup');
                        });

                        document.getElementById('shots').appendChild(
                            element
                        );

                    };

                };
                
                if ( interval == 24) {
                
                    if (document.getElementById('shots') != null) {
                        let shots = document.getElementById('shots');
                        shots.innerHTML = ``

                        let element = document.createElement('div');

                        element.setAttribute("id", `shot_1`);
                        element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
                        element.innerHTML = `
                            <div class="width_50 height_50 gui_buttons top_0 right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_buttons top_0 left_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_buttons bottom_0  right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_buttons bottom_0 left_0 margin_auto position_absolute"></div>
                        `
                        element.addEventListener("click", function(event) {
                            alert('yup');
                        });

                        document.getElementById('shots').appendChild(
                            element
                        );

                    };
                    clearInterval(play)

                };

                //console.log('handle_play_DOMContentLoaded: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_play_load = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                if (state.ux.platform.is_Desktop == true) {

                };

                // start loops
                if (document.getElementById('player_1') != null) {

                    // svg classlist
                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('player_1').classList = (' width_100 height_100 gui_character_body_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('player_1').classList = (' width_100 height_100 gui_character_body_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
                    
                    // frame reset
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                    
                    // frame increase
                    state.interaction.player_1.frame += 1;

                    // automated motion
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

                    // size & position
                    let player_1 = document.getElementById('player_1');
                    player_1.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                };

                if (document.getElementById('gui_stage_tv') != null) {

                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('gui_stage_tv').classList = (' width_100 height_100 gui_character_face_left_shadow_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('gui_stage_tv').classList = (' width_100 height_100 gui_character_face_left_shadow_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                
                    state.interaction.player_1.frame += 1;
                    let gui_stage_tv = document.getElementById('gui_stage_tv');
                    gui_stage_tv.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                };

                if (document.getElementById('gui_stage_lights') != null) {

                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('gui_stage_lights').classList = (' width_100 height_100 gui_character_face_left_shadow_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('gui_stage_lights').classList = (' width_100 height_100 gui_character_face_left_shadow_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                
                    state.interaction.player_1.frame += 1;
                    let gui_stage_lights = document.getElementById('gui_stage_lights');
                    gui_stage_lights.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                };

                if (document.getElementById('mark') != null) {

                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('mark').classList = (' width_100 height_100 gui_character_face_left_shadow_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('mark').classList = (' width_100 height_100 gui_character_face_left_shadow_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                
                    state.interaction.player_1.frame += 1;

                    let mark = document.getElementById('mark');
                    mark.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                };

                if (document.getElementById('logo') != null) {

                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('logo').classList = (' width_100 height_100 gui_logo_type_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('logo').classList = (' width_100 height_100 gui_logo_type_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };
    
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                
                    state.interaction.player_1.frame += 1;

                    let logo = document.getElementById('logo');
                    logo.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                };

                if ( (state.motion.frame) == (24 * 1)) {
                    //alert('5 seconds have passed')
                    handle_firebase_events();
                    handle_if_AUTH();
                };

                state.motion.frame += 1;
                //console.log('state.motion.frame: ' + state.motion.frame)

            }, (1000 / state.motion.framerate));
    })();
};

let handle_if_AUTH = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                
                    if (document.getElementById('shots') != null) {
                        let shots = document.getElementById('shots');
                        shots.innerHTML = ``

                        let element = document.createElement('div');

                        element.setAttribute("id", `shot_1`);
                        element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
                        element.innerHTML = `
                            <div class="width_50 height_50 gui_logo_type_1 top_0 right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_logo_type_1 top_0 left_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_logo_type_1 bottom_0  right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_logo_type_1 bottom_0 left_0 margin_auto position_absolute"></div>
                        `
                        element.addEventListener("click", function(event) {
                            alert('yup');
                        });

                        document.getElementById('shots').appendChild(
                            element
                        );

                    };

                };
                
                if (interval == 24 * 1) {

                    if (document.getElementById('shots') != null) {
                        let shots = document.getElementById('shots');
                        shots.innerHTML = ``

                        let element = document.createElement('div');

                        element.setAttribute("id", `shot_1`);
                        element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
                        element.innerHTML = `
                            <div class="width_50 height_50 gui_buttons top_0 right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_buttons top_0 left_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_buttons bottom_0  right_0 margin_auto position_absolute"></div>
                            <div class="width_50 height_50 gui_buttons bottom_0 left_0 margin_auto position_absolute"></div>
                        `
                        element.addEventListener("click", function(event) {
                            alert('yup');
                        });

                        document.getElementById('shots').appendChild(
                            element
                        );

                    };
                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
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

let filtered_posts_guides = [];

let handle_firebase_events = () => {

    // filter by title
    if (document.getElementById('element_input_filter') != null) {
        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
            // filter library
            setTimeout(function() {
                get_db_guides();
            }, 0);
        });
    };

    // sign up / auth / create user
    let signup_form = document.getElementById('signup-form');
    let signup_email = document.getElementById('signup-email');
    let signup_password = document.getElementById('signup-password');
    let signup_submit = document.getElementById('signup_submit');

    signup_submit.addEventListener('click', (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(signup_email.value, signup_password.value).then(cred => {
            db_create_user(cred);        
        });
    });

    // sign in / auth
    let signin_form = document.getElementById('signin-form');
    let signin_email = document.getElementById('signin-email');
    let signin_password = document.getElementById('signin-password');
    let signin = document.getElementById('signin');

    signin.addEventListener('click', (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(signin_email.value, signin_password.value).then(cred => {
            signin_email.value = ``;
            signin_password.value = ``;
        });
    });

    // signout / un-auth
    let signout = document.getElementById('signout');

    signout.addEventListener('click', (event) => {
        event.preventDefault();
        auth.signOut().then(() => {
            console.log('logged out')
        });
    });

    document.getElementById('edit_button').addEventListener('click', (event) => {
        event.preventDefault();
        db_update_user("users", stored_auth_user_cred.uid);
    });

    document.getElementById('delete_button').addEventListener('click', (event) => {
        event.preventDefault();
        db_delete_user("users", stored_auth_user_cred.uid);
    });

};

let valid_user = {};
let user_logged_in = false;

// retrieve
let get_db_guides = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('users').get().then(snapshot => {
        
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        posts_guides = [];
        filtered_posts_guides = [];
        document.getElementById('posts_all').innerHTML = ``;
        document.getElementById('posts_filtered').innerHTML = ``;

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_guides.push(items)
        });


        if ((stored_auth_user_cred.uid) != null) {

            console.log('stored_auth_user_cred.uid');
            console.log(stored_auth_user_cred.uid);
            console.log('posts_guides');
            console.log(posts_guides);

            // match auth user with database collection: users
            valid_user = {};
            //valid_user_post = [];
            user_logged_in = false;
            console.log('check match from posts_guides[i]');
            for (var i = 0; i < posts_guides.length; i++) {
               console.log(posts_guides[i]);
                if (posts_guides[i].id == stored_auth_user_cred.uid) {
                       valid_user = posts_guides[i];
                       user_logged_in = true;
                }
            };

            /*
            for (var i = 0; i < posts_guides.length; i++) {
                   console.log('posts_guides[i]');
                   console.log(posts_guides[i]);

                if (valid_user.id == posts_guides[i].author_id) {
                   alert('found post by user: ' + posts_guides[i]);
                    valid_user_post.push(posts_guides[i]);
                }
            }

            for (var i = 0; i < valid_user_post.length; i++) { 
               console.log(valid_user_post[i]);
            };

            valid_user_post.forEach(post => {
                document.getElementById('posts_users').appendChild(
                    elements.Generate_new_li_post(post)
                );
            });
            */

            if ((valid_user.id != null)) {
                document.getElementById('account-details').innerHTML = `id: ${valid_user.id}`;
                document.getElementById('account-details').innerHTML += `title: ${valid_user.title}`;
                document.getElementById('account-details').innerHTML += `email: ${valid_user.email}`;
            };

            console.log('valid_user');
            console.log(valid_user);

            // if logged
            if (user_logged_in == true) {
                //document.getElementById('modal-signup').innerHTML = ``;
                //document.getElementById('modal-signin').innerHTML = ``;
            };

            // if not logged
            if (user_logged_in == false) {
                //document.getElementById('modal-create').innerHTML = ``;
                //document.getElementById('modal-edit').innerHTML = ``;
                //document.getElementById('modal-account').innerHTML = ``;
            };
        };
        
        /*
        fb_sorted_library(posts_guides, 'timedown').forEach(post => {
            document.getElementById('posts_random').appendChild(
                elements.Generate_new_li_post(post)
            );
        });
        */

        fb_sorted_library(posts_guides, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `${post.id}
            `
            element.addEventListener("click", function(event) {
                alert('post');
            });

            document.getElementById('posts_all').appendChild(
                element
            );
        });

        //  filter by title
        if ((filtered_posts_guides) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if ((posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                    filtered_posts_guides.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides[i]');
                console.log(filtered_posts_guides[i]);
            };
        };

        fb_sorted_library(filtered_posts_guides, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `${post.id}
            `
            element.addEventListener("click", function(event) {
                alert('delete post');
                db_delete_user("users", post.id);
            });

            document.getElementById('posts_filtered').appendChild(
                element
            );
        });

        console.log('posts_guides');
        console.log(posts_guides);
    });
};

// create user
let db_create_user = (cred) => {
    // create user after auth
    db.collection('users').doc(cred.user.uid).set({
        id: cred.user.uid,
        email: cred.user.email,
        title: cred.user.email
    }).then(()=> {
        console.log(cred);
        console.log(cred.user.uid);
        console.log(cred.user.email);
        console.log(cred.user.metadata.creationTime);
        console.log(cred.user.metadata.lastSignInTime);
        console.log(cred.additionalUserInfo.isNewUser);
        stored_auth_user_cred = cred;
        signup_email.value = ``;
        signup_password.value = ``;
    }).catch(err => {
        console.log(err.message)
    })
};

// update user
let db_update_user = (collection, deletable_id) => {
    console.log(deletable_id);

    let date = new Date();

    db.collection(collection).doc(deletable_id).set({
        id: deletable_id,
        email: stored_auth_user_cred.email,
        title: document.getElementById('title').value
    }).then(function() {
        document.getElementById('title').value = ``,
        alert("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

// delete user
let db_delete_user = (collection, deletable_id) => {
    console.log(deletable_id);
    db.collection(collection).doc(deletable_id).delete().then(function() {
        console.log("Document successfully deleted!");
        get_db_guides();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        get_db_guides();
    });
};

let handle_ReturnState = () => {
    return state
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

let get_dimensions = () => {
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
        }
    };

    if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
        tiny_height = state.ux.dimensions.height;
        console.log('tiny_height: ' + tiny_height);
    };

    if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
        tiny_width = state.ux.dimensions.width;
        console.log('tiny_width: ' + tiny_width);
    };

    if (state.ux.platform.is_Desktop) {
        body.classList = "is_Desktop";
        state.interaction.player_1.width = 1;
        state.interaction.player_1.height = 4;
    };

    if (state.ux.platform.is_Mobile) {
        body.classList = "is_Mobile";
        state.interaction.player_1.width = 8;
        state.interaction.player_1.height = 8;
    };

    if (state.ux.orientation.is_Landscape) {
        body.classList += " is_Landscape"
    };

    if (state.ux.orientation.is_Portrait) {
        body.classList += " is_Portrait"
    };

    if (body != null) {
        body.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

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

        if (document.getElementById('shots') != null) {
            document.getElementById('shots').style =
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

        if (document.getElementById('shots') != null) {
            document.getElementById('shots').style =
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

};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    handle_update();
};

// inital
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded');
    document.getElementById('opening').appendChild(
        elements.gen('basics')
    );
    //console.log(auth);
    //sequence_Load();
    get_dimensions();
    handle_play_DOMContentLoaded();

});

window.addEventListener("load", (event) => {
    console.log('new');
    setTimeout(function () {
            body.scrollTo(0, 0);
        }, 0);
    handle_time();
    handle_play_load();
});

window.addEventListener("resize", (event) => {
    get_dimensions();

});

// scroll
window.addEventListener('scroll', (event) => {
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
``
window.addEventListener("devicemotion", (event) => {
    events.handle_Function_Device_Motion(event);
    handle_ReturnedState_fromEvents();
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

    state.events.motion.orientation_string = orientation;
    console.log('orientation');
    console.log(orientation);
});

window.addEventListener("beforeunload", (event) => {
});


export default {
    handle_ReturnState
}