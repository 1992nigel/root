
// Imports
import style from './style.scss';

let root;
let state;

let is_Desktop;
let is_Mobile;

let is_Landscape;
let is_Portrait;

let handle_device_values;
let handle_inital_events;
let handle_time;
let handle_looping_accent;
let handle_animations;
let handle_check_route;
let handle_init;

// assignment
root = document.getElementById('root');
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
            clicks: [],
            clicked: false,
            up: {
                clientX: 0,
                clientY: 0
            },
            down: {
                clientX: 0,
                clientY: 0
            },
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
            touch_history: [],
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
            key_history: [],
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

    animation: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        scene: 0
    },

};

// functions
handle_inital_events = () => {

    if (is_Desktop) {

        window.addEventListener('scroll', (event) => {
                alert(window.scrollY);
                alert(window.scrollX);
                console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
                console.log('document.documentElement.clientHeight: ' + document.documentElement.clientHeight);
                console.log('document.documentElement.scrollLeft: ' + document.documentElement.scrollLeft);
                console.log('document.documentElement.scrollTop: ' + document.documentElement.scrollTop);
                console.log('document.documentElement.scrollWidth: ' + document.documentElement.scrollWidth);
                console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight);
                console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollTop);

            /*

                // scrolling
                console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                state.ui.root.clientHeight = event.srcElement.clientHeight;
                state.ui.root.clientWidth = event.srcElement.clientWidth;

                state.ui.root.scrollHeight = event.srcElement.scrollHeight;
                state.ui.root.scrollWidth = event.srcElement.scrollWidth;

                state.ui.root.scrollTop = event.srcElement.scrollTop;
                state.ui.root.scrollLeft = event.srcElement.scrollLeft;

                var currY = ((event.srcElement.scrollTop) / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100) ;
                console.log(currY);

                if (currY == 0) {
                    state.animation.instances.scrolled_top = true;
                    state.animation.instances.scrolled_bottom = false;

                    if (state.animation.instances.scrolled_top == true) {
                        alert('scrolled_top met');
                        HANDLE_animation_scrolled_up();
                    };

                };


                if (currY == 100) {
                    state.animation.instances.scrolled_top = false;
                    state.animation.instances.scrolled_bottom = true;

                    if (state.animation.instances.scrolled_bottom == true) {
                        alert('scrolled_bottom met')
                    };
                };

                if ((document.getElementById('scroll_clientHeight')) != null) {
                    document.getElementById('scroll_clientHeight').innerHTML = (event.srcElement.clientHeight)
                }

                if ((document.getElementById('scroll_clientWidth')) != null) {
                    document.getElementById('scroll_clientWidth').innerHTML = (event.srcElement.clientWidth)
                }

                if ((document.getElementById('scroll_scrollHeight')) != null) {
                    document.getElementById('scroll_scrollHeight').innerHTML = (event.srcElement.scrollHeight)
                }

                if ((document.getElementById('scroll_scrollWidth')) != null) {
                    document.getElementById('scroll_scrollWidth').innerHTML = (event.srcElement.scrollWidth)
                }

                if ((document.getElementById('scroll_scrollTop')) != null) {
                    document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop);
                  };

                if ((document.getElementById('scroll_scrollLeft')) != null) {
                    document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
                }

                // instances      
                if (event.srcElement.scrollTop > state.ui.root.component_app_gui_scroll_y_position) {
                    console.log('state.ui.root.component_app_gui_scroll_y_position increasing');
                    console.log("instance: wheel up");
                }

                if (event.srcElement.scrollTop < state.ui.root.component_app_gui_scroll_y_position) {
                    console.log('state.ui.root.component_app_gui_scroll_y_position decreasing');
                    console.log("instance: wheel down");
                }

                if (event.srcElement.scrollTop === 0) {
                    console.log("instance: top of page");
                    // gui change
                }

                if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                    console.log('instance: scrolling started');
                    // gui change
                }

                if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                    console.log('instance: inside lead');
                    // gui change
                };

                if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                    console.log('instance: past lead');
                    // gui change
                }

                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) > (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('instance: 100vh before bottom not met');
                    // gui change
                };

                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('instance: 100vh before bottom met');
                    // gui change
                };

                if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                    alert("instance: footer met");
                }
                */
        });

        root.addEventListener('wheel', (event) => {

            if (event.deltaY < 0) {
                console.log('wheel up');

                if ((document.getElementById('wheel_direction')) != null ) {
                    document.getElementById('wheel_direction').innerHTML = 'up';
                };

            };

            if (event.deltaY > 0) {
                console.log('wheel down');

                if ((document.getElementById('wheel_direction')) != null ) {
                    document.getElementById('wheel_direction').innerHTML = 'down';
                };

            };

        });

        root.addEventListener('mousedown', (event) => {

            state.events.mouse.clicks.push({clientX: event.clientX, clientY: event.clientX});

            if ((document.getElementById('clicks')) != null ) {
                document.getElementById('clicks').innerHTML = state.events.mouse.clicks.length;
            };

            state.events.mouse.clicked = true;
            state.events.mouse.down.clientX = event.clientX;
            state.events.mouse.down.clientY = event.clientY;
            if ((document.getElementById('mouse_client_clicked')) != null ) {
                document.getElementById('mouse_client_clicked').innerHTML = (state.events.mouse.clicked);
            }

            if ((document.getElementById('mouse_client_clicked_X')) != null ) {
                document.getElementById('mouse_client_clicked_X').innerHTML = (state.events.mouse.down.clientX);
            }

            if ((document.getElementById('mouse_client_clicked_Y')) != null ) {
                document.getElementById('mouse_client_clicked_Y').innerHTML = (state.events.mouse.down.clientY);
            }

        });

        root.addEventListener('mouseup', (event) => {
            state.events.mouse.clicked = false;
            state.events.mouse.up.clientX = event.clientX;
            state.events.mouse.up.clientY = event.clientY;
            if ((document.getElementById('mouse_client_clicked')) != null ) {
                document.getElementById('mouse_client_clicked').innerHTML = (state.events.mouse.clicked);
            }

            if ((document.getElementById('mouse_client_not_clicked_X')) != null ) {
                document.getElementById('mouse_client_not_clicked_X').innerHTML = (state.events.mouse.up.clientX);
            }

            if ((document.getElementById('mouse_client_not_clicked_Y')) != null ) {
                document.getElementById('mouse_client_not_clicked_Y').innerHTML = (state.events.mouse.up.clientY);
            }

            state.events.mouse.clicked = false;

                state.events.mouse.drag.clientX = (state.events.mouse.drop_start.clientX - state.events.mouse.drop_end.clientX);
                state.events.mouse.drag.clientY = (state.events.mouse.drop_start.clientY - state.events.mouse.drop_end.clientY);

                if ((document.getElementById('mouse_client_drag_distance_X')) != null ) {
                    document.getElementById('mouse_client_drag_distance_X').innerHTML = (state.events.mouse.drag.clientX);
                }

                if ((document.getElementById('mouse_client_drag_distance_Y')) != null ) {
                    document.getElementById('mouse_client_drag_distance_Y').innerHTML = (state.events.mouse.drag.clientY);
                }

        });

        root.addEventListener('mousemove', (event) => {
            state.events.mouse.clientX = event.clientX;
            state.events.mouse.clientY = event.clientY;

            if ((document.getElementById('mouse_client_X')) != null ) {
                document.getElementById('mouse_client_X').innerHTML = (state.events.mouse.clientX);
            }

            if ((document.getElementById('mouse_client_Y')) != null ) {
                document.getElementById('mouse_client_Y').innerHTML = (state.events.mouse.clientY);
            }

            if (state.events.mouse.clicked == true) {

                state.events.mouse.drop_start.clientX = event.clientX;
                state.events.mouse.drop_start.clientY = event.clientY;
                if ((document.getElementById('mouse_client_drag_distance_X_start')) != null ) {
                    document.getElementById('mouse_client_drag_distance_X_start').innerHTML = (state.events.mouse.drop_start.clientX);
                }

                if ((document.getElementById('mouse_client_drag_distance_Y_start')) != null ) {
                    document.getElementById('mouse_client_drag_distance_Y_start').innerHTML = (state.events.mouse.drop_start.clientY);
                }

            };

            if (state.events.mouse.clicked == false) {

                state.events.mouse.drop_end.clientX = event.clientX;
                state.events.mouse.drop_end.clientY = event.clientY;
                if ((document.getElementById('mouse_client_drag_distance_X_end')) != null ) {
                    document.getElementById('mouse_client_drag_distance_X_end').innerHTML = (state.events.mouse.drop_end.clientX);
                }

                if ((document.getElementById('mouse_client_drag_distance_Y_end')) != null ) {
                    document.getElementById('mouse_client_drag_distance_Y_end').innerHTML = (state.events.mouse.drop_end.clientY);
                }
            };

        });

        root.addEventListener('mouseenter', (event) => {
            state.events.mouse.enter = true;
            state.events.mouse.leave = false;
            
            if ((document.getElementById('mouse_enter')) != null ) {
                document.getElementById('mouse_enter').innerHTML = (state.events.mouse.enter);
            };

        });

        root.addEventListener('mouseleave', (event) => {
            state.events.mouse.enter = false;
            state.events.mouse.leave = true;

            if ((document.getElementById('mouse_enter')) != null ) {
                document.getElementById('mouse_enter').innerHTML = (state.events.mouse.enter);
            };
        });

        root.addEventListener('keydown', (event) => {

            let current_keyCode = event.keyCode;
            console.log(current_keyCode);
            console.log('keyCode: ' + current_keyCode);
            console.log('keys held: ');
            console.log(state.events.key.keys);

            let matched = false;

            for (var i = 0; i < state.events.key.keys.length; i++) {
                if (state.events.key.keys[i] == current_keyCode) {
                    matched = true;
                };
            };

            if (matched == false) {
                state.events.key.keys.push(current_keyCode);
            };

            state.events.key.key_history.push({keyCode: current_keyCode});

            if ((document.getElementById('key_history')) != null ) {
                document.getElementById('key_history').innerHTML = state.events.key.key_history.length;
            };

            console.log(state.events.key.keys);

            if ((document.getElementById('event_keydown')) != null ) {
                document.getElementById('event_keydown').innerHTML = `'yes.'`;
            };

            if ((document.getElementById('event_latest_keydown')) != null ) {
                document.getElementById('event_latest_keydown').innerHTML = current_keyCode;
            };

        });

        root.addEventListener('keyup', (event) => {

            let current_keyCode = event.keyCode;
            var index = state.events.key.keys.indexOf(current_keyCode);

            if (index > -1) {
                state.events.key.keys.splice(index, 1);
            };

            console.log(current_keyCode);
            if ((document.getElementById('event_keydown')) != null ) {

                if (state.events.key.keys.length == 0) {
                    document.getElementById('event_keydown').innerHTML = `'no.'`;
                };
            };

            if ((document.getElementById('event_latest_keyup')) != null ) {
                document.getElementById('event_latest_keyup').innerHTML = current_keyCode;
            };

        });

    };


    // Mobile
    if (is_Mobile) {

        root.addEventListener('scroll', (event) => {

            console.log(
              "event.srcElement.scrollTop: " + event.srcElement.scrollTop
            );

        });

        root.addEventListener('touchmove', (event) => {

        });

        root.addEventListener("touchstart", function(event) {


            //alert('touchstart');
            console.log(event.touches[0])

            if ((document.getElementById('total_touches')) != null ) {
                document.getElementById('total_touches').innerHTML = (event.touches.length)
                document.getElementById('touch_start_client_X').innerHTML = (event.touches[0].clientX)
                document.getElementById('dragDistanceXStart').innerHTML = (event.touches[0].clientX)
                document.getElementById('touch_start_client_Y').innerHTML = (event.touches[0].clientY)
                document.getElementById('dragDistanceYStart').innerHTML = (event.touches[0].clientY)
                document.getElementById('touch_start_force').innerHTML = (event.touches[0].force)
            }

            state.events.touch.clientX = event.touches[0].clientX;
            state.events.touch.clientY = event.touches[0].clientY;


            state.events.touch.touch_history.push({clientY: event.touches[0].clientY, clientX: event.touches[0].clientX});

            if ((document.getElementById('touch_history')) != null ) {
                document.getElementById('touch_history').innerHTML = state.events.touch.touch_history.length;
            };

        });

        root.addEventListener("touchend", function(event) {

        });

    };
};

handle_time = () => {

    setInterval(function() {

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date();
        state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
        //console.log(state.data.time);

        if (state.events.mouse.enter == true) {
            state.events.mouse.movetimer += 1;
        };

        if (state.events.mouse.enter == false) {
            state.events.mouse.movetimer -= 1;
        };

        if (state.events.mouse.movetimer == 10) {
            //alert('too long');
        };

        console.log('state.events.key.timer: ' + state.events.key.timer);
        if ((document.getElementById('touch_timer')) != null ) {
            document.getElementById('touch_timer').innerHTML = state.events.key.timer;
        };

        console.log('state.events.key.timer: ' + state.events.key.timer);
        if ((document.getElementById('key_pressedtimer')) != null ) {
            document.getElementById('key_pressedtimer').innerHTML = state.events.key.timer;
        };

        console.log('state.events.key.timer: ' + state.events.key.timer);
        if ((document.getElementById('key_heldtimer')) != null ) {
            document.getElementById('key_heldtimer').innerHTML = state.events.key.timer;
        };

        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('mouse_dragtimer')) != null ) {
            document.getElementById('mouse_dragtimer').innerHTML = state.events.mouse.movetimer;
        };
        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('mouse_clicktimer')) != null ) {
            document.getElementById('mouse_clicktimer').innerHTML = state.events.mouse.movetimer;
        };

        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('mouse_entertimer')) != null ) {
            document.getElementById('mouse_entertimer').innerHTML = state.events.mouse.movetimer;
        };

        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('mouse_movetimer')) != null ) {
            document.getElementById('mouse_movetimer').innerHTML = state.events.mouse.movetimer;
        };

        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('touch_timer')) != null ) {
            document.getElementById('touch_timer').innerHTML = state.events.mouse.movetimer;
        };

        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('key_pressedtimer')) != null ) {
            document.getElementById('key_pressedtimer').innerHTML = state.events.mouse.movetimer;
        };

        console.log('state.events.mouse.movetimer: ' + state.events.mouse.movetimer);
        if ((document.getElementById('key_heldtimer')) != null ) {
            document.getElementById('key_heldtimer').innerHTML = state.events.mouse.movetimer;
        };
        

    }, 1000);
};

handle_looping_accent = () => {

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

handle_animations = () => {

    (function() {
        let interval = 0;
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0) ) {
                    console.log('0 seconds have passed.')
                    handle_time();
                };

                if (interval == (state.animation.framerate * 1) ) {
                    console.log('1 seconds have passed.');
                };


                if (interval == (state.animation.framerate * 10) ) {
                    console.log('10 seconds have passed.')
                };

                if (interval == (state.animation.framerate * 30) ) {
                    console.log('30 seconds have passed.')
                };

                if (interval == (state.animation.framerate * 60) ) {
                    console.log('10 seconds have passed.')
                };

                interval += 1;

            }, (1000 / state.animation.framerate));
    }());
};

handle_check_route = (route) => {

    (() => {

        if (route == '/') {
            alert('/');
            setTimeout( () => {
                state.app.route = '/loading';
                handle_check_route(state.app.route);
            }, 2000);

        };

        if (route == '/loading') {

            root.innerHTML = `
                loading
            `

            setTimeout( () => {
                state.app.route = '/loaded';
                handle_check_route(state.app.route);
            }, 2000);

        };

        if (route == '/loaded') {

            root.innerHTML = `
                loaded
            `

            setTimeout( () => {

                state.app.route = '/home';
                handle_check_route(state.app.route);

            }, 2000);

        };

        if (route == '/home') {

            root.innerHTML = `
                <div id="row_accent_noise"></div>
                <div id="home">home</div>

                <div id="event_orientation_signal">is_Desktop: <div id="is_Desktop"></div></div>
                <div id="event_orientation_signal">is_Mobile: <div id="is_Mobile"></div></div>

                <div id="event_orientation_signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
                <div id="event_orientation_signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
                <div id="event_orientation_signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

                <div id="event_orientation_signal">event_alpha: <div id="event_alpha"></div></div>
                <div id="event_orientation_signal">event_beta: <div id="event_beta"></div></div>
                <div id="event_orientation_signal">event_gamma: <div id="event_gamma"></div></div>
                <div id="event_orientation_signal">event_landscape: <div id="event_landscape"></div></div>
                <div id="event_orientation_signal">event_portrait: <div id="event_portrait"></div></div>
                <div id="event_orientation_signal">event_orientation: <div id="event_orientation"></div></div>

                <div id="total_touches_signal">total_touches: <div id="total_touches"></div></div>
                <div id="touch_history_signal">touch_history: <div id="touch_history"></div></div>
                <div id="touch_start_client_X_signal">touch_start_client_X: <div id="touch_start_client_X"></div></div>
                <div id="dragDistanceXStart_signal">dragDistanceXStart: <div id="dragDistanceXStart"></div></div>
                <div id="touch_start_client_Y_signal">touch_start_client_Y: <div id="touch_start_client_Y"></div></div>
                <div id="dragDistanceYStart_signal">dragDistanceYStart: <div id="dragDistanceYStart"></div></div>
                <div id="touch_start_force_signal">touch_start_force: <div id="touch_start_force"></div></div>

                <div id="event_keydown_signal">event keydown: <div id="event_keydown"></div></div>
                <div id="event_latest_keyup_signal">event keyup: <div id="event_latest_keyup"></div></div>
                <div id="event_latest_keydown_signal">event keydown: <div id="event_latest_keydown"></div></div>

                <div id="wheel_direction_signal">event wheel_direction: <div id="wheel_direction"></div></div>
                <div id="clicks_signal">event clicks: <div id="clicks"></div></div>
                <div id="key_history_signal">event key_history: <div id="key_history"></div></div>

                <div id="mouse_enter_signal">event mouse_enter: <div id="mouse_enter"></div></div>
                <div id="mouse_movetimer_signal">event mouse_movetimer: <div id="mouse_movetimer"></div></div>
                <div id="mouse_entertimer_signal">event mouse_entertimer: <div id="mouse_entertimer"></div></div>
                <div id="mouse_dragtimer_signal">event mouse_dragtimer: <div id="mouse_dragtimer"></div></div>
                <div id="mouse_clicktimer_signal">event mouse_clicktimer: <div id="mouse_clicktimer"></div></div>
                
                <div id="touch_timer_signal">event touch_timer: <div id="touch_timer"></div></div>
                <div id="key_pressedtimer_signal">event key_pressedtimer: <div id="key_pressedtimer"></div></div>
                <div id="key_heldtimer_signal">event key_heldtimer: <div id="key_heldtimer"></div></div>
                <div id="mouse_client_clicked_signal">event mouse_client_clicked: <div id="mouse_client_clicked"></div></div>

                <div id="mouse_client_clicked_X_signal">event mouse_client_clicked_X: <div id="mouse_client_clicked_X"></div></div>
                <div id="mouse_client_clicked_Y_signal">event mouse_client_clicked_Y: <div id="mouse_client_clicked_Y"></div></div>

                <div id="mouse_client_not_clicked_X_signal">event mouse_client_not_clicked_X: <div id="mouse_client_not_clicked_X"></div></div>
                <div id="mouse_client_not_clicked_Y_signal">event mouse_client_not_clicked_Y: <div id="mouse_client_not_clicked_Y"></div></div>

                <div id="mouse_client_X_signal">event mouse_client_X: <div id="mouse_client_X"></div></div>
                <div id="mouse_client_Y_signal">event mouse_client_Y: <div id="mouse_client_Y"></div></div>

                <div id="mouse_client_drag_distance_X_start_signal">event mouse_client_drag_distance_X_start: <div id="mouse_client_drag_distance_X_start"></div></div>
                <div id="mouse_client_drag_distance_Y_start_signal">event mouse_client_drag_distance_Y_start: <div id="mouse_client_drag_distance_Y_start"></div></div>

                <div id="mouse_client_drag_distance_X_end_signal">event mouse_client_drag_distance_X_end: <div id="mouse_client_drag_distance_X_end"></div></div>
                <div id="mouse_client_drag_distance_Y_end_signal">event mouse_client_drag_distance_Y_end: <div id="mouse_client_drag_distance_Y_end"></div></div>

                <div id="mouse_client_drag_distance_X_signal">event mouse_client_drag_distance_X: <div id="mouse_client_drag_distance_X"></div></div>
                <div id="mouse_client_drag_distance_Y_signal">event mouse_client_drag_distance_Y: <div id="mouse_client_drag_distance_Y"></div></div>

            `

            document.getElementById('home').addEventListener("click", function(event) {
                alert("home");
            });

        };

    })();

    handle_device_values();
    window.scrollTo(0, 0);
};

handle_init = () => {

    (function() {
        let interval = 0;
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0) ) {
                    console.log('0 seconds have passed.')
                    handle_animations();
                };

                if (interval == (state.animation.framerate * 1) ) {
                    console.log('1 seconds have passed.')
                };


                if (interval == (state.animation.framerate * 10) ) {
                    console.log('10 seconds have passed.')
                };

                if (interval == (state.animation.framerate * 30) ) {
                    console.log('30 seconds have passed.')
                };

                if (interval == (state.animation.framerate * 60) ) {
                    console.log('10 seconds have passed.')
                };

                interval += 1;

            }, (1000 / state.animation.framerate));
    }());
};

handle_device_values = () => {

    is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
    is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

    if ((document.getElementById('is_Desktop')) != null ) {
        document.getElementById('is_Desktop').innerHTML = is_Desktop;
    };

    if ((document.getElementById('is_Mobile')) != null ) {
        document.getElementById('is_Mobile').innerHTML = is_Mobile;
    };

    is_Landscape = (window.innerHeight < window.innerWidth);
    is_Portrait = (window.innerHeight > window.innerWidth);

    state.ux = {
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
};

// init
window.onload = () => {

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

    handle_check_route(state.app.route);

    handle_device_values();
    handle_inital_events();
    handle_init();
};

window.onresize = () => {
    handle_device_values();
    console.log('state.ux.dimensions.width: ' + state.ux.dimensions.width);
    console.log('state.ux.dimensions.height: ' + state.ux.dimensions.height);
    console.log('state.ux.dimensions.width8: ' + state.ux.dimensions.width8);
    console.log('state.ux.dimensions.height8: ' + state.ux.dimensions.height8);
};

window.ondevicemotion = function(event) {

    handle_device_values();

    let event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
    let event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
    let event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

    if ((document.getElementById('event_accelerationIncludingGravity_x')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;

    };

    if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;

    };

    if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;

    };
};

window.ondeviceorientation = function(event) {

    handle_device_values();

    let event_alpha = event.alpha;
    let event_beta = event.beta;
    let event_gamma = event.gamma;

    if ((document.getElementById('event_alpha')) != null ) {
        document.getElementById('event_alpha').innerHTML = event_alpha;
    };

    if ((document.getElementById('event_beta')) != null ) {
        document.getElementById('event_beta').innerHTML = event_beta;
    };

    if ((document.getElementById('event_gamma')) != null ) {
        document.getElementById('event_gamma').innerHTML = event_gamma;
    };

    if(is_Landscape){
        if ((document.getElementById('event_portrait')) != null ) {
            document.getElementById('event_portrait').innerHTML = `'this is not portrait.'`;
        };
        if ((document.getElementById('event_landscape')) != null ) {
            document.getElementById('event_landscape').innerHTML = `'this is landscape.'`;
        };
    };

    if(is_Portrait){
        if ((document.getElementById('event_portrait')) != null ) {
            document.getElementById('event_portrait').innerHTML = `'this is portrait.'`;
        };
        if ((document.getElementById('event_landscape')) != null ) {
            document.getElementById('event_landscape').innerHTML = `'this is not landscape.'`;
        };
    };
};

window.onorientationchange = () => {

    let orientation_string = 'n/a';
    if ( orientation == 0 ) {
     orientation_string = 'Portrait Mode, Home Button bottom';
    }
    else if ( orientation == 90 ) {
     orientation_string = 'Landscape Mode, Home Button right';
    }
    else if ( orientation == -90 ) {
     orientation_string = 'Landscape Mode, Home Button left';
    }
    else if ( orientation == 180 ) {
     orientation_string = 'Portrait Mode, Home Button top';
    }

    if ((document.getElementById('event_orientation')) != null ) {
        document.getElementById('event_orientation').innerHTML = orientation_string;
    };
};