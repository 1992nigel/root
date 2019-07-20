// Rules
'use strict';

// Imports
import style from './style';
import imported_functions from './partials/functions';
import imported_components from './partials/components';
import imported_elements from './partials/elements';

// Declaration
let functions;
let ui_components;

let sorting_type = 'timeup';

let matching_categories = [{name:'cats'}]

let sorted_library;
let filtered_library;

// Assignment
functions = imported_functions;

console.log('hello world');

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
    },

    animation: {
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

            touch_8: {
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

        colors: {
            draft: {
                transform: false,
                opacity:false,
                display: false,
            },
            two_tone: {
                transform: false,
                opacity:false,
                display: false,
            },

        },

        stage: {
            cardboard_color: {
                roomed: false,
                which_roomed: 'center',
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
            },

            cardboard_bg: {
                roomed: false,
                which_roomed: 'center',
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
            },

            cardboard_mg: {
                roomed: false,
                which_roomed: 'center',
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
            },

            cardboard_fg: {
                roomed: false,
                which_roomed: 'center',
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
            },

            cardboard: {
                scene: 1,
                set: 0,
                roomed: false,
                which_roomed: 'center',
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
            },

        },
        
        blog: {
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

        route: {
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
                xaxis: 0,
                yaxis: 0,
                height: 4,
                width: 4,
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
                    walking: false,
                    running: false,
                    stunned: false,
                }
            },

            player_2: {

                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 4,
                width: 4,
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

            fold: {
                transform: true,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top: {
                transform: true,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top_left: {
                transform: true,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top_right: {
                transform: true,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom: {
                transform: true,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom_left: {
                transform: true,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom_right: {
                transform: true,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            left: {
                transform: true,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            right: {
                transform: true,
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
            pop: {
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
            },
            fade: {
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
            gradient: {
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
            morph: {
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
            menu: {
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
            overlay: {
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
            corner: {
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

        }

    }

};

let default_user = {
    "dislikes" : 0,
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
    "id" : "007",
    "likes" : 0,
    "password" : "null",
    "subs" : [ {
     "username" : "null"
    } ],
    "time" : 1.550374996382E9,
    "title" : "nigel johnson",
    "categories" : ["null"],

    "subcategories" : ["null"],

    "tags" : ["null"],

    "types" : [{"title" : "null"}],
    "username" : "null",
    "views" : 0
};

let user_logged = false;
let user_data_info = '';

let root = document.getElementById('root');
let is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
let is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))

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

let fb_writeable = false;
let fb_response = {};


/*

    video packages:

    gnougn (all)
    knewest (tops)
    genres: phukngi (graphics) colorleague (design) phlygh (dev) antenuh (motion) bognie (content) hiyr (strategy)
    specifics: phryid (video - video games) collabration (video - video games)
    product (video, song, sounds, loops, podcast, exc)
    types: rate the?, top 10, commercial break
    Lengths: 
    talent - nownigel, maisie, john

*/


// Create
let addListings = (child) => {
    
    var current_second = new Date().getTime() / 1000;
    let default_item;

    if (child == 'library') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id, time: `${state.data.time}`} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'roster') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id, time: `${state.data.time}`} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'services') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id, time: `${state.data.time}`} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'skills') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id, time: `${state.data.time}`} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'abilities') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id, time: `${state.data.time}`} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    if (child == 'partners') {
        default_item = {
            id: 0,
            categories : [ {name:'cats'} ],
            subcategories : [ {name:'cats'} ],
            tags : [ {name:'cats'} ],
            types : [ {name:'cats'} ],
            genres : [ {name:'cats'} ],
            hashtag : [ {name:'cats'} ],
            liked_by : [ {id:state.data.user.id, time: `${state.data.time}`} ],
            authors : [ {id:state.data.user.id} ],
            child: child,
            time: current_second,
            username: state.data.user.username,
            password: state.data.user.password,
            title : "nice",
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0,
            subs : [ {id:state.data.user.id} ]
        };
    };

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);

    Ref.push(default_item).then((snap) => {
        const key = snap.key;
        console.log('from addListing' + key);
        // update created item with snap.key
        Ref.child(key).update({
            id: key
        });

        // Set firebase data
        setTimeout(function() {
            Handle_Firebase_Refs_and_Render();
        }, 0);

    });
};

// Delete
let deleteWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from deleteWhoListings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
let likeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    let already_liked = false;

    // see if already liked
    for (var i = 0; i < state.data.user.liked_posts.length; i++) {
        console.log(state.data.user.liked_posts[i].id);
        if (state.data.user.liked_posts[i].id == changeThisValue.id) {
            alert('already_liked');
            already_liked = true;
        };
    };

    if (already_liked == false) {

        // update posts data
        changeThisValue.likes += 1;
        Ref.child(id).set(changeThisValue);
        console.log(id);

        // update users data
        let changeThisUsersValue;
        const user_Ref = gnougnRef.child('roster');
        user_Ref.child(state.data.user.id).once('value', function(snap) {
            changeThisUsersValue = snap.val(); // Keep the local user object synced with the Firebase userRef
        });

        changeThisUsersValue.liked_posts.push({id: id, time: `${state.data.time}`});

        for (var i = 0; i < changeThisValue.tags.length; i++) {
            console.log(changeThisValue.tags[i]);
            changeThisUsersValue.algorithm.push(changeThisValue.tags[i]);
        };

        user_Ref.child(state.data.user.id).set(changeThisUsersValue);

        // Set firebase data
        setTimeout(function() {
            Handle_Firebase_Refs_and_Render();
        }, 0);
    };

};

// Update
let dislikeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });


    let already_liked = false;

    // see if already liked
    for (var i = 0; i < state.data.user.liked_posts.length; i++) {
        console.log(state.data.user.liked_posts[i].id);
        if (state.data.user.liked_posts[i].id == changeThisValue.id) {
            alert('already_liked');
            already_liked = true;
        };
    };

    let old_liked_list = [];

    if (already_liked == true) {

        // update posts data
        changeThisValue.likes -= 1;
        Ref.child(id).set(changeThisValue);
        console.log(id);

        // update users data
        let changeThisUsersValue;
        const user_Ref = gnougnRef.child('roster');
        user_Ref.child(state.data.user.id).once('value', function(snap) {
            changeThisUsersValue = snap.val(); // Keep the local user object synced with the Firebase userRef
        });
            
        // see if already liked
        for (var i = 0; i < state.data.user.liked_posts.length; i++) {
            console.log(state.data.user.liked_posts[i].id);
            if (state.data.user.liked_posts[i].id != changeThisValue.id) {
                old_liked_list.push({id: state.data.user.liked_posts[i].id, time: `${state.data.time}`});
            };
        };

        changeThisUsersValue.liked_posts = old_liked_list;

        user_Ref.child(state.data.user.id).set(changeThisUsersValue);

        // Set firebase data
        setTimeout(function() {
            Handle_Firebase_Refs_and_Render();
        }, 0);

    };
};

// Update
let viewWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
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
        // Handle_Firebase_Refs_and_Render();
    }, 0);
};

let find_sort = () => {

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
                    return a.time - b.time
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

let find_view = () => {

    if ((document.getElementById('element_input_style').value == 'grid') || (document.getElementById('element_input_style').value == '' )) {
            
        document.getElementById('root').classList.remove('grid');
        document.getElementById('root').classList.remove('list');
        document.getElementById('root').classList.remove('card');
        document.getElementById('root').classList.remove('full');
        document.getElementById('root').classList.remove('thumbs');

        document.getElementById('root').classList.add('grid');
    };

    if (document.getElementById('element_input_style').value == 'card') {

        document.getElementById('root').classList.remove('grid');
        document.getElementById('root').classList.remove('list');
        document.getElementById('root').classList.remove('card');
        document.getElementById('root').classList.remove('full');
        document.getElementById('root').classList.remove('thumbs');

        document.getElementById('root').classList.add('card');
    };

    if (document.getElementById('element_input_style').value == 'list') {

        document.getElementById('root').classList.remove('grid');
        document.getElementById('root').classList.remove('list');
        document.getElementById('root').classList.remove('card');
        document.getElementById('root').classList.remove('full');
        document.getElementById('root').classList.remove('thumbs');

        document.getElementById('root').classList.add('list');
    };

    if (document.getElementById('element_input_style').value == 'thumbs') {

        document.getElementById('root').classList.remove('grid');
        document.getElementById('root').classList.remove('list');
        document.getElementById('root').classList.remove('card');
        document.getElementById('root').classList.remove('full');
        document.getElementById('root').classList.remove('thumbs');

        document.getElementById('root').classList.add('thumbs');
    };

    if (document.getElementById('element_input_style').value == 'full') {

        document.getElementById('root').classList.remove('grid');
        document.getElementById('root').classList.remove('list');
        document.getElementById('root').classList.remove('card');
        document.getElementById('root').classList.remove('full');
        document.getElementById('root').classList.remove('thumbs');

        document.getElementById('root').classList.add('full');
    };
};

let Handle_Firebase_Refs_and_Render = () => {

    if ((document.getElementById('element_ol_firebase_library')) != null) {
        document.getElementById('element_ol_firebase_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_roster')) != null) {
        document.getElementById('element_ol_firebase_roster').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_skills')) != null) {
        document.getElementById('element_ol_firebase_skills').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_services')) != null) {
        document.getElementById('element_ol_firebase_services').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_partners')) != null) {
        document.getElementById('element_ol_firebase_partners').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_abilities')) != null) {
        document.getElementById('element_ol_firebase_abilities').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_filtered_library')) != null) {
        document.getElementById('element_ol_firebase_filtered_library').innerHTML = '';
    };

    if ((document.getElementById('library_posts_advance_filter')) != null) {
        document.getElementById('library_posts_advance_filter').innerHTML = '';
    };

    if ((document.getElementById('user_data')) != null) {
        document.getElementById('user_data').innerHTML = '';
    };

    if ((document.getElementById('post_author_data')) != null) {
        document.getElementById('post_author_data').innerHTML = '';
    };

    let rootRef = firebase.database().ref();
    let gnougnRef = rootRef.child('gnougn');
    let wordpressRef = gnougnRef.child('wordpress');

    console.log('Handle_Firebase_Refs_and_Render');

    fb_writeable = true;
    fb_response = {};

    (() => {
        rootRef.on('value', function(snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('state.data.firebase');
            console.log(state.data.firebase);
        });

    })();
};

let Handle_firebase_render = () => {
    // render library
    (() => {

        setTimeout(function() {

            if ((fb_response) != null) {
                
                find_view();
                sorted_library = fb_response.gnougn.library.sort(find_sort());
                filtered_library = [];

                for (var i = 0; i < fb_response.gnougn.library.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.library[i]);
                    document.getElementById('element_ol_firebase_library').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.library[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.roster.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.roster[i]);
                    document.getElementById('element_ol_firebase_roster').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.roster[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.abilities.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.abilities[i]);
                    document.getElementById('element_ol_firebase_abilities').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.abilities[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.skills.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.skills[i]);
                    document.getElementById('element_ol_firebase_skills').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.skills[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.services.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.services[i]);
                    document.getElementById('element_ol_firebase_services').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.services[i])
                        )
                    )
                };

                for (var i = 0; i < fb_response.gnougn.partners.length; i++) {
                    
                    // console.log(state.data.firebase.gnougn.partners[i]);
                    document.getElementById('element_ol_firebase_partners').appendChild(
                        imported_functions.Generate_new_fragment.appendChild(
                        imported_functions.Generate_new_li(fb_response.gnougn.partners[i])
                        )
                    )
                };

                // user data
                let user_subs = '';
                let user_algorithm = [];

                if (user_logged == true) {

                    for (var i = 0; i < state.data.user.subs.length; i++) {
                        console.log(state.data.user.subs[i]);
                        user_subs += state.data.user.subs[i].id;
                    };

                    for (var i = 0; i < state.data.user.algorithm.length; i++) {
                        console.log(state.data.user.algorithm[i]);
                        user_algorithm.push(state.data.user.algorithm[i]);
                    };

                    let tag_picked = user_algorithm[(Math.floor(Math.random() * user_algorithm.length))].name;

                    //alert(tag_picked.name);

                    for (var i = 0; i < fb_response.gnougn.library.length; i++) {
                        let matched = false

                        for (var tags_i = 0; tags_i < fb_response.gnougn.library[i].tags.length; tags_i++) {
                            
                            let particular_tag = fb_response.gnougn.library[i].tags[tags_i].name;

                            //alert(tag_picked);
                            //alert(particular_tag);

                            if (particular_tag == tag_picked) {
                                //alert('matched');
                                matched = true;
                                console.log(fb_response.gnougn.library[i]);

                            };


                            if (matched != true) {
                                //alert(fb_response.gnougn.library[i]);
                                //alert(fb_response.gnougn.library[i].tags[tags_i].name);
                            }

                            if (matched == true) {
                                //alert(fb_response.gnougn.library[i]);
                                //alert(fb_response.gnougn.library[i].tags[tags_i].name);
                            }

                        };

                        
                    };

                    user_data_info = `
                        <div id="fold" class="position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left">

                            <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                            
                                <div id="x-1" class="width_100vw height_100vh float_left position_relative z_index_1">
                                        
                                    <div class="position_absolute height_100vh width_33 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">
                                        
                                        <div class="height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        <div class="position_relative bg_white height_100vh width_100">

                                            <div class="position_absolute height_100vh width_100 bottom_100 left_0 right_0 margin_auto z_index_0">
                                                
                                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100">
                                                </div>

                                            </div>

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        
                                        <div class="bg_white height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        <div class="bg_pink height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>
                                        
                                        <div class="bg_pink height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                        <div class="bg_purple height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>          

                                        <div class="height_100vh width_100">

                                            <div class="width_100 z_index_1">
                                                YOOOOOOOOOOOO!
                                            </div>

                                        </div>

                                    </div>

                                    <div class="position_absolute float_left width_100 height_33vh top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">

                                        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                        
                                            <div class="width_33vw height_33vh float_left position_relative float_left margin_auto">

                                            </div>

                                            <div class="bg_pink width_33vw height_33vh float_left position_relative float_left margin_auto">

                                                <div class="position_absolute height_100 width_100 right_100 top_0 bottom_0 margin_auto z_index_0">
                                                    
                                                    <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100">
                                                    </div>

                                                </div>

                                            </div>

                                            <div class="bg_yellow width_33vw height_33vh float_left position_relative float_left margin_auto">
                                            </div>

                                            <div class="bg_pink width_33vw height_33vh float_left position_relative float_left margin_auto">
                                            </div>

                                            <div class="bg_yellow width_33vw height_33vh float_left position_relative float_left margin_auto">
                                            </div>

                                        </div>

                                    </div>

                                    <div id="route_dashboard" class="height_67 width_67 bottom_0 right_0 position_absolute margin_auto">
                                            
                                        <div class="position_absolute height_100 width_67 top_0 right_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">

                                            <h2>identity</h2>
                                            ${state.data.user.child}
                                            ${state.data.user.feature_image_src}
                                            ${state.data.user.id}
                                            
                                            <h2>log</h2>
                                            ${state.data.user.username}
                                            ${state.data.user.password}
                                            
                                            <h2>stats</h2>
                                            ${state.data.user.likes}
                                            ${state.data.user.dislikes}

                                            <h2>history</h2>
                                            ${state.data.user.time}
                                            ${state.data.user.views}

                                            <h2>career</h2>


                                            ${user_subs}

                                            <div id="japan"></div>

                                            <p>types</p>
                                            <p>tags</p>
                                            <p>categories</p>
                                            <p>sub categories</p>

                                            <h2>rating</h2>
                                            <p>liked by</p>
                                            <p>liked of (subs)</p>

                                        </div>

                                        <div class="position_absolute height_100 width_33 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">

                                            <h2>identity</h2>
                                            ${state.data.user.child}
                                            ${state.data.user.feature_image_src}
                                            ${state.data.user.id}
                                            
                                            <h2>log</h2>
                                            ${state.data.user.username}
                                            ${state.data.user.password}
                                            
                                            <h2>stats</h2>
                                            ${state.data.user.likes}
                                            ${state.data.user.dislikes}

                                            <h2>history</h2>
                                            ${state.data.user.time}
                                            ${state.data.user.views}

                                            <h2>career</h2>


                                            ${user_subs}

                                            <div id="japan"></div>

                                            <p>types</p>
                                            <p>tags</p>
                                            <p>categories</p>
                                            <p>sub categories</p>

                                            <h2>rating</h2>
                                            <p>liked by</p>
                                            <p>liked of (subs)</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    `

                };

                if ((document.getElementById('models')) != null) {
                    document.getElementById('models').innerHTML = `

                    ${imported_elements.element_page_bottom}
                    ${imported_elements.element_page_left}
                    ${imported_elements.element_page_right}

                    ${imported_elements.element_pop_top}
                    ${imported_elements.element_pop_left}
                    ${imported_elements.element_pop_bottom}
                    ${imported_elements.element_pop_right}

                    ${imported_elements.element_page_top}

                    ${imported_elements.element_morph_top}
                    ${imported_elements.element_morph_left}
                    ${imported_elements.element_morph_bottom}
                    ${imported_elements.element_morph_right}

                    ${imported_elements.element_fade_top}
                    ${imported_elements.element_fade_left}
                    ${imported_elements.element_fade_bottom}
                    ${imported_elements.element_fade_right}

                    ${imported_elements.element_gradient_top}
                    ${imported_elements.element_gradient_left}
                    ${imported_elements.element_gradient_bottom}
                    ${imported_elements.element_gradient_right}

                    ${imported_elements.element_corner_top}
                    ${imported_elements.element_corner_left}
                    ${imported_elements.element_corner_bottom}
                    ${imported_elements.element_corner_right}

                    ${imported_elements.element_overlay_top}
                    ${imported_elements.element_overlay_left}
                    ${imported_elements.element_overlay_bottom}
                    ${imported_elements.element_overlay_right}

                    ${imported_elements.element_pip_top}
                    ${imported_elements.element_pip_left}
                    ${imported_elements.element_pip_bottom}
                    ${imported_elements.element_pip_right}
                    `
                };

                //  filter by title
                for (var i = 0; i < sorted_library.length; i++) {
                    if ((sorted_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                        filtered_library.push(sorted_library[i]);
                    };
                };

                // render
                for (var i = 0; i < filtered_library.length; i++) {

                    // pagination hack
                    if ( (i < state.data.feature_posts_limit) ) {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_filtered_library').appendChild(
                            imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_library[i])
                            )
                        )
                    };
                };

                // library post - filtered by authors & title
                if ( (document.getElementById('library_posts_advance_filter')) != null) {
                    
                    document.getElementById('library_posts_advance_filter').innerHTML = '';

                    // render
                    for (var i = 0; i < filtered_library.length; i++) {

                        let does_Type_Match = false;
                        let does_Username_Match = false;

                        // if any types match
                        for (var type_index = 0; type_index < state.data.types.length; type_index++) {

                            //alert( state.data.types[type_index].title);

                            for (var post_index = 0; post_index < filtered_library[i].types.length; post_index++) {

                                //alert( filtered_library[i].types[post_index].title);

                               if ( filtered_library[i].types[post_index].title == state.data.types[type_index].title ) {
                                    does_Type_Match = true;
                                };

                                // pagination hack
                                if ( does_Type_Match ) {
                                    // console.log(state.data.firebase.gnougn.roster[i]);
                                    document.getElementById('library_posts_advance_filter').appendChild(
                                        imported_functions.Generate_new_fragment.appendChild(
                                        imported_functions.Generate_new_li(filtered_library[i])
                                        )
                                    )
                                };

                            };

                        };

                    };
                };

                // library post - filtered by authors & title
                if ( (document.getElementById('library_posts_logged')) != null) {
                    
                    document.getElementById('library_posts_logged').innerHTML = '';

                    // render
                    for (var i = 0; i < filtered_library.length; i++) {

                        let does_Type_Match = false;
                        let does_Username_Match = false;

                        //alert( state.data.types[type_index].title);

                        for (var post_index = 0; post_index < filtered_library[i].authors.length; post_index++) {

                            //alert( filtered_library[i].types[post_index].title);

                           if ( filtered_library[i].authors[post_index].id == state.data.user.id ) {
                                does_Username_Match = true;
                            };

                            // pagination hack
                            if ( does_Username_Match ) {
                                // console.log(state.data.firebase.gnougn.roster[i]);
                                document.getElementById('library_posts_logged').appendChild(
                                    imported_functions.Generate_new_fragment.appendChild(
                                    imported_functions.Generate_new_li(filtered_library[i])
                                    )
                                )
                            };

                        };


                    };
                };

            };

        }, 0);

    })();

};

let Handle_Repeat_Firebase_Validation = setInterval( () => {

    //alert('Handle_Repeat_Firebase_Validation');
    if (fb_writeable == true) {

        fb_response = state.data.firebase;

        if ((fb_response.gnougn.library) != null) {
            
            // only once!
            fb_writeable = false; // once firebase server responds, instead of a clearInterval, we use -> !writable

            console.log('Handle_Repeat_Firebase_Validation');

            // arrat made from object key
            let result_library = Object.keys(fb_response.gnougn.library).map(function(key) {
                return fb_response.gnougn.library[key];
            });
            fb_response.gnougn.library = result_library;

            // arrat made from object key
            let result_abilities = Object.keys(fb_response.gnougn.abilities).map(function(key) {
                return fb_response.gnougn.abilities[key];
            });
            fb_response.gnougn.abilities = result_abilities;

            // arrat made from object key
            let result_partners = Object.keys(fb_response.gnougn.partners).map(function(key) {
                return fb_response.gnougn.partners[key];
            });
            fb_response.gnougn.partners = result_partners;

            // arrat made from object key
            let result_services = Object.keys(fb_response.gnougn.services).map(function(key) {
                return fb_response.gnougn.services[key];
            });
            fb_response.gnougn.services = result_services;

            // arrat made from object key
            let result_roster = Object.keys(fb_response.gnougn.roster).map(function(key) {
                return fb_response.gnougn.roster[key];
            });
            fb_response.gnougn.roster = result_roster;

            // arrat made from object key
            let result_skills = Object.keys(fb_response.gnougn.skills).map(function(key) {
                return fb_response.gnougn.skills[key];
            });
            fb_response.gnougn.skills = result_skills;

            // now that data has been received
            if (fb_writeable == false) {

                console.clear();
                //clearInterval(Handle_Repeat_Firebase_Validation);
                
                check_local_user();
                setTimeout(function() {
                    Handle_firebase_render();

                    //console.clear();
                    //alert('contected!');
                }, 0);


                console.log(fb_response.gnougn);
            };

        };

    };

}, 1000/120);

let Handle_check_route = (route, info) => {

    state.app.route = route;

    setTimeout(() => {

        // home
        if (state.app.route == 'route_home') {

            // set state
            state.ui.modal.page.top.display = false;
            state.ui.modal.page.top.transform = true;


            let element_bgs = `
                <div class="position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 blinking_fix">
                    
                    <div id="accent" class="position_absolute height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1">
                    </div>

                    <div id="bg" class="position_absolute height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0">
                        
                        <div id="row-logo" class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                        </div>

                    </div>

                </div>
            `

            setTimeout(() => {
                // adaptive render!
                // desktop
                if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
                    document.getElementById('root').innerHTML = ``;
                };

                // ipad
                if (/iPad/i.test(navigator.userAgent)) {
                    document.getElementById('root').innerHTML = ``;
                };

                // iphone
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    document.getElementById('root').innerHTML = ``;
                };
            }, 0);

            setTimeout(() => {
                // adaptive render!
                // desktop
                if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
                    document.getElementById('root').innerHTML = `${element_bgs}`;
                };

                // ipad
                if (/iPad/i.test(navigator.userAgent)) {
                    document.getElementById('root').innerHTML = `${element_bgs}`;
                };

                // iphone
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    document.getElementById('root').innerHTML = `${element_bgs}`;
                };
            }, 1);

            setTimeout(() => {
                // adaptive render!
                // desktop
                if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
                    document.getElementById('root').innerHTML = `

                        ${element_bgs}

                        <div class="position_relative float_left height_100vh width_100">
                        </div>

                        <div class="position_relative gui_gradient_purple_top height_100vh width_100 float_left z_index_1">
                        </div>

                        <div class="position_relative float_left bg_purple width_100">

                        <div class="position_relative float_left bg_purple width_100">
                            
                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                        </div>

                        <div class="position_relative float_left bg_purple height_100 width_1205vw">
                            
                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_maisie height_1205vw width_1205vw"></div>
                            </div>

                            <div class="position_relative float_left margin_auto height_1205vw width_1205vw">
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto border_radius_circle bg_yellow height_8705 width_8705"></div>
                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto avatar_icon_nigel height_1205vw width_1205vw"></div>
                            </div>

                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Sections</h1>
                              </div>
                           </div>
                        </div>

                        <div class="bg_yellow width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 
                                 <h1 class="width_100 font_size_205vh float_left position_relative">home</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">continue</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">recommended</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">live</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">similar [post (tags), users (follows), creators(stats)]</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">live</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">latest</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">popular</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">trending</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">choice</h1>
                                 <br/>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">library</h1>
                                 <br/>
                              </div>
                           </div>
                        </div>


                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Styling The Blog</h1>
                              </div>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">

                                 <h1 class="width_100 font_size_205vh float_left position_relative">layout style</h1>
                                 <input id="element_input_style" class="width_100" placeholder="element_input_style" type="text" name=""/>
                                 <br/>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Sorts</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by Time Spent</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by Comments</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by replies</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by Follows from</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by Likes</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by Views</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Sort by Re-views</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Filter by combos</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">View + (-Time Spent) = Leaver/Misclick/Unknown</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">View + (+Time Spent) = Viewer</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">View + Like  = Potiental Supporter</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative"> View + Like + Comment = Potiental Contributor</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Subscriber + View = Supporter</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Subscriber + View + Like = Fan</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Subscriber + View + Like + Comment = Contributor</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative"> View + Comment = SPAM or Upset viewer/arguer</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Filter by Text</h1>
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Filter by catgory?</h1>
                                 <input id="element_input_filter_catgory" type="text" placeholder="element_input_filter_catgory" class="width_100 bg_pink float_left" />
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Filter by tag?</h1>
                                 <input id="element_input_filter_tag" type="text" placeholder="element_input_filter_tag" class="width_100 bg_pink float_left" />
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Filter by keywords?</h1>
                                 <input id="element_input_filter_keywords" type="text" placeholder="element_input_filter_keywords" class="width_100 bg_pink float_left" />
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Filter by author?</h1>
                                 <input id="element_input_filter_author" type="text" placeholder="element_input_filter_author" class="width_100 bg_pink float_left" />
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">Filter by title?</h1>
                                 <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 bg_pink float_left" />
                              </div>
                           </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                            <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                
                                 <h1 class="width_100 font_size_205vh float_left position_relative">filter by type?</h1>
                                 <input id="element_input_sorting_type" type="text" placeholder="element_input_sorting_type" class="width_100 bg_pink float_left" />
                                </div>
                            </div>
                        </div>

                        <div class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Pagination</h1>
                              </div>
                           </div>
                        </div>

                        <div id="blog_controls" class="position_relative width_100 z_index_1 float_left bg_purple">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_205vh float_left position_relative">less_posts_value?</h1>
                                 <button id="less_posts" class="width_100 float_left">less_posts</button>
                                 <div id="less_posts_value"></div>
                                 <h1 class="width_100 font_size_205vh float_left position_relative">more_posts_value?</h1>
                                 <button id="more_posts" class="width_100 float_left">more_posts</button>
                                 <div id="more_posts_value"></div>
                              </div>
                           </div>
                        </div>

                        <div class="width_100 position_relative float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                           <div class="width_33vw position_relative float_left">
                              <h1>element_ol_firebase_filtered_library</h1>
                              <ol id="element_ol_firebase_filtered_library"></ol>
                              <h1>library_posts_logged</h1>
                              <ol id="library_posts_logged"></ol>
                              <h1>library_posts_advance_filter</h1>
                              <ol id="library_posts_advance_filter"></ol>
                              <h2>element_ol_firebase_library</h2>
                              <ol id="element_ol_firebase_library"></ol>
                              <h2>element_ol_firebase_library</h2>
                              <ol id="element_ol_firebase_roster"></ol>
                              <h2>element_ol_firebase_abilities</h2>
                              <ol id="element_ol_firebase_abilities"></ol>
                              <h2>element_ol_firebase_partners</h2>
                              <ol id="element_ol_firebase_partners"></ol>
                              <h2>element_ol_firebase_services</h2>
                              <ol id="element_ol_firebase_services"></ol>
                              <h2>element_ol_firebase_skills</h2>
                              <ol id="element_ol_firebase_skills"></ol>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Library inputs</h1>
                                 <input id="create_library_input_title" class="width_100" placeholder="create_library_input_title" type="text" name=""/>
                                 <br/>
                                 <input id="create_library_input_subtitle" class="width_100" placeholder="create_library_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
                                 <br/>
                                 <input id="create_library_input_paragraph" class="width_100" placeholder="create_library_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
                                 <br/>
                                 <input id="create_library_input_category" class="width_100" placeholder="create_library_input_category" type="text" value="a placeholder category" name=""/>
                                 <br/>
                                 <input id="create_library_input_sub_category" class="width_100" placeholder="create_library_input_sub_category" type="text" value="a placeholder sub category" name=""/>
                                 <br/>
                                 <input id="create_library_input_feature_style" class="width_100" placeholder="create_library_input_feature_style" type="text" value="a placeholder feature style" name=""/>
                                 <br/>
                                 <input id="create_library_input_tag" class="width_100" placeholder="create_library_input_tag" type="text" value="a placeholder tag"name=""/>
                                 <br/>
                                 <input id="create_library_input_type" class="width_100" placeholder="create_library_input_type" type="text" value="a placeholder type"name=""/>
                                 <br/>
                                 <input id="create_library_input_feature_image_src" class="width_100" placeholder="create_library_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
                                 <br/>
                                 <div id="element_input_create_library" class="width_100 bg_white color_yellow float_left text_align_center">create library post</div>
                              </div>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">Create Roster</h1>
                                 <input id="new_username" class="width_100" placeholder="username" type="text" name=""/>
                                 <br/>
                                 <input id="new_password" class="width_100" placeholder="password" type="text" name=""/>
                                 <br/>
                                 <div id="element_input_create_roster" class="width_100 bg_white color_yellow float_left text_align_center">create roster user</div>
                              </div>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">services inputs</h1>
                                 <input id="create_services_input_title" class="width_100" placeholder="create_services_input_title" type="text" name=""/>
                                 <br/>
                                 <input id="create_services_input_subtitle" class="width_100" placeholder="create_services_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
                                 <br/>
                                 <input id="create_services_input_paragraph" class="width_100" placeholder="create_services_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
                                 <br/>
                                 <input id="create_services_input_category" class="width_100" placeholder="create_services_input_category" type="text" value="a placeholder category" name=""/>
                                 <br/>
                                 <input id="create_services_input_sub_category" class="width_100" placeholder="create_services_input_sub_category" type="text" value="a placeholder sub category" name=""/>
                                 <br/>
                                 <input id="create_services_input_feature_style" class="width_100" placeholder="create_services_input_feature_style" type="text" value="a placeholder feature style" name=""/>
                                 <br/>
                                 <input id="create_services_input_tag" class="width_100" placeholder="create_services_input_tag" type="text" value="a placeholder tag"name=""/>
                                 <br/>
                                 <input id="create_services_input_type" class="width_100" placeholder="create_services_input_type" type="text" value="a placeholder type"name=""/>
                                 <br/>
                                 <input id="create_services_input_feature_image_src" class="width_100" placeholder="create_services_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
                                 <br/>
                                 <div id="element_input_create_services" class="width_100 bg_white color_yellow float_left text_align_center">create service post</div>
                              </div>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">abilities inputs</h1>
                                 <input id="create_abilities_input_title" class="width_100" placeholder="create_abilities_input_title" type="text" name=""/>
                                 <br/>
                                 <input id="create_abilities_input_subtitle" class="width_100" placeholder="create_abilities_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
                                 <br/>
                                 <input id="create_abilities_input_paragraph" class="width_100" placeholder="create_abilities_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
                                 <br/>
                                 <input id="create_abilities_input_category" class="width_100" placeholder="create_abilities_input_category" type="text" value="a placeholder category" name=""/>
                                 <br/>
                                 <input id="create_abilities_input_sub_category" class="width_100" placeholder="create_abilities_input_sub_category" type="text" value="a placeholder sub category" name=""/>
                                 <br/>
                                 <input id="create_abilities_input_feature_style" class="width_100" placeholder="create_abilities_input_feature_style" type="text" value="a placeholder feature style" name=""/>
                                 <br/>
                                 <input id="create_abilities_input_tag" class="width_100" placeholder="create_abilities_input_tag" type="text" value="a placeholder tag"name=""/>
                                 <br/>
                                 <input id="create_abilities_input_type" class="width_100" placeholder="create_abilities_input_type" type="text" value="a placeholder type"name=""/>
                                 <br/>
                                 <input id="create_abilities_input_feature_image_src" class="width_100" placeholder="create_abilities_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
                                 <br/>
                                 <div id="element_input_create_abilities" class="width_100 bg_white color_yellow float_left text_align_center">create abilities post</div>
                              </div>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">skills inputs</h1>
                                 <input id="create_skills_input_title" class="width_100" placeholder="create_skills_input_title" type="text" name=""/>
                                 <br/>
                                 <input id="create_skills_input_subtitle" class="width_100" placeholder="create_skills_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
                                 <br/>
                                 <input id="create_skills_input_paragraph" class="width_100" placeholder="create_skills_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
                                 <br/>
                                 <input id="create_skills_input_category" class="width_100" placeholder="create_skills_input_category" type="text" value="a placeholder category" name=""/>
                                 <br/>
                                 <input id="create_skills_input_sub_category" class="width_100" placeholder="create_skills_input_sub_category" type="text" value="a placeholder sub category" name=""/>
                                 <br/>
                                 <input id="create_skills_input_feature_style" class="width_100" placeholder="create_skills_input_feature_style" type="text" value="a placeholder feature style" name=""/>
                                 <br/>
                                 <input id="create_skills_input_tag" class="width_100" placeholder="create_skills_input_tag" type="text" value="a placeholder tag"name=""/>
                                 <br/>
                                 <input id="create_skills_input_type" class="width_100" placeholder="create_skills_input_type" type="text" value="a placeholder type"name=""/>
                                 <br/>
                                 <input id="create_skills_input_feature_image_src" class="width_100" placeholder="create_skills_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
                                 <br/>
                                 <div id="element_input_create_skills" class="width_100 bg_white color_yellow float_left text_align_center">create skills post</div>
                              </div>
                           </div>
                        </div>

                        <div class="bg_purple width_100">
                           <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                              <div id="spacer" class="position_relative margin_auto easing_01 calc_5vw_width margin_205vw border_radius_1vh text_align_center float_right bg_white">
                                 <h1 class="width_100 font_size_5vh float_left position_relative">partners inputs</h1>
                                 <input id="create_partners_input_title" class="width_100" placeholder="create_partners_input_title" type="text" name=""/>
                                 <br/>
                                 <input id="create_partners_input_subtitle" class="width_100" placeholder="create_partners_input_subtitle" type="text" value="a placeholder subtitle" name=""/>
                                 <br/>
                                 <input id="create_partners_input_paragraph" class="width_100" placeholder="create_partners_input_paragraph" type="text" value="a placeholder paragraph" name=""/>
                                 <br/>
                                 <input id="create_partners_input_category" class="width_100" placeholder="create_partners_input_category" type="text" value="a placeholder category" name=""/>
                                 <br/>
                                 <input id="create_partners_input_sub_category" class="width_100" placeholder="create_partners_input_sub_category" type="text" value="a placeholder sub category" name=""/>
                                 <br/>
                                 <input id="create_partners_input_feature_style" class="width_100" placeholder="create_partners_input_feature_style" type="text" value="a placeholder feature style" name=""/>
                                 <br/>
                                 <input id="create_partners_input_tag" class="width_100" placeholder="create_partners_input_tag" type="text" value="a placeholder tag"name=""/>
                                 <br/>
                                 <input id="create_partners_input_type" class="width_100" placeholder="create_partners_input_type" type="text" value="a placeholder type"name=""/>
                                 <br/>
                                 <input id="create_partners_input_feature_image_src" class="width_100" placeholder="create_partners_input_feature_image_src" type="text" value="https://tinyurl.com/y2j3t4v9" name=""/>
                                 <br/>
                                 <div id="element_input_create_partners" class="width_100 bg_white color_yellow float_left text_align_center">create partners post</div>
                              </div>
                           </div>
                        </div>

                        <div class="width_100 position_relative float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                           <div class="width_100 position_relative float_left">
                              <h2>element_ol_firebase_logs</h2>
                              <ol id="element_ol_firebase_logs"></ol>
                           </div>
                        </div>

                        <div id="user_data">

                        </div>

                        <div id="post_author_data">

                        </div>

                        <div id="models">

                        </div>

                      <div id="logged_user" class="position_fixed top_0 right_0 float_left margin_auto avatar_icon_maisie height_6025vh width_6025vw">

                        <div id="column" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right">

                          <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                            <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                              
                              <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_black box_shadow_bottom_right_1vw_dark">

                                <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                                    <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                      <div id="element_user_sign_in" class="position_relative float_left margin_05vh gui_text_login calc_1vh">
                                      </div>

                                    </div>

                                    <div id="hr" class="position_relative float_left margin_auto height_6025vw width_30125vw">
                                      <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_hr_vert_1 calc_205vw">
                                      </div>
                                    </div>

                                    <div id="element_user_sign_out" class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                      <div class="position_relative float_left margin_05vh gui_text_logout calc_1vh">
                                      </div>

                                    </div>

                                </div>

                                <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right bg_white">

                                  <p class="bg_yellow width_100 float_left">are you logged in?</p>
                                  <div id="users_username"></div>
                                  <p class="bg_yellow width_100 float_left">username?</p>
                                  <input id="username" type="text" placeholder="username" class="width_100 bg_pink float_left" />
                                  <p class="bg_yellow width_100 float_left">password?</p>
                                  <input id="password" type="text" placeholder="password" class="width_100 bg_pink float_left" />

                                </div>

                                <div id="spacer" class="position_relative margin_auto easing_01 calc_2vw_width margin_1vw border_radius_1vh text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box bg_white">

                                    <div class="position_relative float_left margin_auto height_6025vw width_6025vw">

                                      <div class="position_relative float_left margin_05vh gui_text_register calc_1vh">
                                      </div>

                                    </div>

                                </div>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                  
                  </div>


                    `;
                };

                // ipad
                if (/iPad/i.test(navigator.userAgent)) {
                    document.getElementById('root').innerHTML = `${element_bgs}`;
                };

                // iphone
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    document.getElementById('root').innerHTML = `${element_bgs}`;
                };

                Handle_Firebase_Refs_and_Render();

                // add event listeners
                setTimeout(() => {

                    if (document.getElementById('element_input_create_library') != null) {
                        document.getElementById('element_input_create_library').addEventListener('click', (event) => {

                        addListings('library');
                        //addListings('roster');
                        addListings('services');
                        addListings('partners');
                        addListings('abilities');
                        addListings('skills');

                    });

                    };

                    // filter by title
                    if (document.getElementById('element_input_filter') != null) {
                        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
                            // filter library
                            setTimeout(function() {
                                Handle_Firebase_Refs_and_Render();
                            }, 0);

                        });
                    };

                    // less_posts post
                    if (document.getElementById('less_posts') != null) {
                        document.getElementById('less_posts').addEventListener('click', (event) => {
                            less_posts();
                        });
                    };

                    // more_posts post
                    if (document.getElementById('more_posts') != null) {
                        document.getElementById('more_posts').addEventListener('click', (event) => {
                            more_posts();
                        });
                    };

                    // Gui Button Actions
                    if ((document.getElementById('element_input_sorting_type')) != null ) {
                        document.getElementById('element_input_sorting_type').addEventListener("keydown", function(event) {
                            //alert('element_input_sorting_type');
                            find_sort();
                        });
                    };

                    // Gui Button Actions
                    if ((document.getElementById('element_input_style')) != null ) {
                        document.getElementById('element_input_style').addEventListener("keyup", function(event) {
                            //alert('element_input_style');
                            find_view();
                        });
                    };



                // sign_in
                if (document.getElementById('element_user_sign_in') != null) {
                    document.getElementById('element_user_sign_in').addEventListener('click', (event) => {                        
                        sign_in();
                    });
                };


                // sign_out
                if (document.getElementById('element_user_sign_out') != null) {
                    document.getElementById('element_user_sign_out').addEventListener('click', (event) => {
                        sign_out_ui();
                    });
                };


                if ((document.getElementById('user_data')) != null) {

                        document.getElementById('logged_user').addEventListener("click", function(event) {

                    if (user_logged == true) {
                            document.getElementById('user_data').innerHTML = user_data_info;
                    };
                        });

                };

            }, 1000);

            }, 1000);

            var pathArray = window.location.pathname.split('/');
            var secondLevelLocation = pathArray[1];
            var newPathname = "";
            for (let i = 0; i < pathArray.length; i++) {
              newPathname += "/";
              newPathname += pathArray[i];
            }

            //alert(window.location.pathname);
            //alert(pathArray);
            //alert(secondLevelLocation);
            //alert(newPathname);


        };

    }, 0);

};
let local_checked = false;

let check_local_user = () => {

    // Localize data
    if (localStorage.username == null) {
        //alert('welcome first timer');
        user_logged = false;
        document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
        return;
    };


    // Localize data
    if (localStorage.username == 'null') {
        //alert('welcome back, login please');
        user_logged = false;
        document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
        return;
    };

    if (localStorage.username != 'null') {
        
        //alert('welcome back: ' + localStorage.username);
        user_logged = true;
        for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
            let trying_username = localStorage.username;
            let trying_password = localStorage.password;
            if (state.data.firebase.gnougn.roster[i].username == trying_username) {

                let validate_username = true;
                let validated_user = state.data.firebase.gnougn.roster[i]

                if (validated_user.password == trying_password) {

                    let validate_password = true;
                    state.data.user = validated_user;
                    localStorage.setItem("user", state.data.user);
                    localStorage.setItem("username", state.data.user.username);
                    localStorage.setItem("password", state.data.user.password);

                    if (local_checked == false) {
                        sign_in_ui();
                    };

                    local_checked = true;
        
                };
            };
        };
    };
};

let sign_in_ui = () => {

    //alert('you are now signed in: ' + state.data.user.username);

    user_logged = true;

    if (document.getElementById('users_username') != null) {
        document.getElementById('users_username').innerHTML = 'Hello ' + `${state.data.user.username}` + '!';
    };

    Handle_Firebase_Refs_and_Render();

};

let sign_out_ui = () => {
    
    //alert('see you next time: ' + localStorage.username);
    document.getElementById('users_username').innerHTML = 'See you next time, ' + `${state.data.user.username}`;
    
    state.data.user = default_user;
    
    user_logged = false;
    
    localStorage.setItem("user", default_user);
    localStorage.setItem("username", default_user.username);
    localStorage.setItem("password", default_user.password);
    
    document.getElementById('user_data').innerHTML = ``;

    Handle_Firebase_Refs_and_Render();

};

let sign_in = () => {
    for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
        console.log(state.data.firebase.gnougn.roster[i]);
        
        let trying_username = document.getElementById('username').value;
        let trying_password = document.getElementById('password').value;

        if (state.data.firebase.gnougn.roster[i].username == trying_username) {

            let validate_username = true;
            let validated_user = state.data.firebase.gnougn.roster[i]

            if (validated_user.password == trying_password) {

                let validate_password = true;
                state.data.user = validated_user;
                localStorage.setItem("user", state.data.user);
                localStorage.setItem("username", state.data.user.username);
                localStorage.setItem("password", state.data.user.password);

                sign_in_ui();

            };
        };
    };
};


let HANDLE_looping_accent = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        let loop = true;

        let animation =
        setInterval(
            function() {

                if (interval == (1) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('blinking_fix position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1');
                    };
                };

                if (interval == (2) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('blinking_fix position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_2');
                    };
                };

                if (interval == (3) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('blinking_fix position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_3');
                    };
                };

                if (interval == (4) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('blinking_fix position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_4');
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


let HANDLE_looping_svg = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (1) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                blinking_fix gui_logo_combo_1 z_index_0 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 `);
                    };
                };

                if (interval == (2) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                blinking_fix gui_logo_combo_2 z_index_0 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 `);
                    };
                };

                if (interval == (3) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                blinking_fix gui_logo_combo_3 z_index_0 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 `);
                    };
                };

                if (interval == (4) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                blinking_fix gui_logo_combo_4 z_index_0 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 `);
                    };

                    interval = 0;
                };

                interval += 1;

            }, (1000 / 12));
    }());

};

let HANDLE_inital_load = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        let loop = false;

        let animation =
        setInterval(
            function() {

                if (interval == (0) ) {        
                    HANDLE_looping_svg();
                };

                if (interval == (1) ) {        
                    HANDLE_looping_accent();
                };

                if (interval == (2) ) {
                    Handle_check_route('route_home', '');

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

let Handle_transform = () => {
    // console.log('Handle_transform');
    for (var i = 0; i < ui_components.length; i++) {
        // console.log('ui_components.length: ' + ui_components.length );

        if ((document.getElementById(ui_components[i].component)) != null) {
            // console.log('ui_components[i].component: ' + ui_components[i].component );
            imported_functions.Toggle_classes_IF_State(ui_components[i].component_state_transform_false, ui_components[i].component_state_transform_true, ui_components[i].component, ui_components[i].component_state_transform);
        };

    };
};

let Handle_display_with_delay = () => {
    // console.log('Handle_display_with_delay');
    for (var i = 0; i < ui_components.length; i++) {
        if ((document.getElementById(ui_components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_display_and_opacity_on_with_no_delay, imported_functions.Toggle_display_and_opacity_off_with_delay, ui_components[i].component, ui_components[i].component_state_display);
        };
    };
};

let HANDLE_looping_check_states = () => {
    (function() {
        setInterval(
            function() {
                ui_components = imported_components.ui_components();
                Handle_display_with_delay();
                Handle_transform();
            }, (101));
    }());
};

let Handle_Dice = () => {
        return (Math.floor(Math.random() * 6) + 1)
};

let Handle_Random = () => {
        return (Math.floor(Math.random() * 100) + 1)
};

let Handle_Time = () => {
    (() => {
        setInterval( () => {


                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date = new Date();
                state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
                console.log(state.data.time);
                
            if ( (document.getElementById('time')) != null ) {
                document.getElementById('time').innerText = state.data.time;

            };

        }, 1000);
    })();
};

let Handle_Timers = () => {
    // start timer
    (() => {
        let int = 0;
        setInterval( () => {

            console.log(state.events.key.keys);
                state.events.mouse.movetimer += 1;
        }, 1000);
    })();

    console.log(Handle_Dice())
    console.log(Handle_Random())
    Handle_Time();
};

window.onload = () => {
	HANDLE_inital_load();
	Handle_Timers();
    HANDLE_looping_check_states();
    Handle_Firebase_Refs_and_Render();
    Handle_Repeat_Firebase_Validation;
    //check_local_user();
}


let Handle_return_state = () => { return state };


// Exports
export default {
    likeWhoListings,
    dislikeWhoListings,
    viewWhoListings,
    deleteWhoListings,
    Handle_return_state
}