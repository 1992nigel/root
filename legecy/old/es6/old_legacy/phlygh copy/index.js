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
            liked_by : [ {id:state.data.user.id} ],
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
            liked_by : [ {id:state.data.user.id} ],
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
            liked_by : [ {id:state.data.user.id} ],
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
            liked_by : [ {id:state.data.user.id} ],
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
            liked_by : [ {id:state.data.user.id} ],
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
            liked_by : [ {id:state.data.user.id} ],
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

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
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

    changeThisValue.likes -= 1;

    Ref.child(id).set(changeThisValue);

    console.log(id);
    console.log(changeThisValue);

    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
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

            if (fb_writeable == false) {
                console.clear();
                //clearInterval(Handle_Repeat_Firebase_Validation);
                
                check_local_user();
                setTimeout(function() {
                    Handle_firebase_render();

                    //console.clear();
                    console.log('contected!');
                }, 0);


                console.log(fb_response.gnougn);
            };

        };

    };

}, 1000/120);

let instance = {
    mouseenter: false,
    mouseleave: false,
    pastlead: false,
    startedscrolling: false,
}

// events
setTimeout(

 (() => {

    // Desktop
    if (is_Desktop) {

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

                addListings('library');
                //addListings('roster');
                addListings('services');
                addListings('partners');
                addListings('abilities');
                addListings('skills');

            };

            // escape
            if (keyCode == 27) {

                Handle_check_route('route_home', '');
                state.ui.modal.page.top.display = false;
                state.ui.modal.page.top.transform = true;

                state.ui.modal.page.bottom.display = false;
                state.ui.modal.page.bottom.transform = true;
            };

            // 1
            if (keyCode == 49) {

                //alert(state.ui.modal.page.top.transform);
	            	
	        	//document.getElementById('action-mouse-not-moved').classList.add('opacity_1');
	        	//document.getElementById('action-mouse-not-moved').classList.remove('opacity_0');

            };

            // 2
            if (keyCode == 50) {
	            	
	        	document.getElementById('action-mousemoved').classList.add('opacity_1');
	        	document.getElementById('action-mousemoved').classList.remove('opacity_0');

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

    };

    // Mobile
    if (is_Mobile) {

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


let Handle_Timers = () => {
    // start timer
    (() => {
        let int = 0;
        setInterval(function() {

            console.log(state.events.key.keys);

            // desktop
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

            	state.events.mouse.movetimer += 1;
                console.log('state.events.mouse.timer: ' + state.events.mouse.movetimer);

                if ((document.getElementById('timer_mouse_up')) != null ) {
                    document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.movetimer)
                };

                if (state.events.mouse.up == true) {
                    state.events.mouse.uptimer -= 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);
                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.uptimer)
                    }
                };

                if (state.events.mouse.up == false) {
                    state.events.mouse.uptimer += 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);
                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.uptimer)
                    }
                };

                if (state.events.mouse.enter == true) {
                    state.events.mouse.leavetimer = 0;
                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                };

                if (state.events.mouse.enter == false) {
                    state.events.mouse.leavetimer += 1;
                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                };

                if (state.events.mouse.leavetimer == 5) {
                    console.log('timeout active')               
                };

            };

            // mobile
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                state.events.mouse.movetimer += 1;
                console.log('state.events.mouse.timer: ' + state.events.mouse.movetimer);

                if ((document.getElementById('timer_mouse_up')) != null ) {
                    document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.movetimer)
                };

                if (state.events.mouse.up == true) {
                    state.events.mouse.uptimer -= 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);
                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.uptimer)
                    }
                };

                if (state.events.mouse.up == false) {
                    state.events.mouse.uptimer += 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.uptimer);
                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.uptimer)
                    }
                };

                if (state.events.mouse.enter == true) {
                    state.events.mouse.leavetimer = 0;
                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                };

                if (state.events.mouse.enter == false) {
                    state.events.mouse.leavetimer += 1;
                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                };

                if (state.events.mouse.leavetimer == 5) {
                    console.log('timeout active');          
                };

            };

            if (state.events.mouse.movetimer == 10) {
            	console.log('10 secs')
            }

            int += 1;
            console.log(int);
        }, 1000);
    })();

    // console.log(state.ui.interaction.dice);
    // console.log(state.ui.interaction.random);
    (() => {
        setInterval(function() {

            if ( (document.getElementById('time')) != null ) {

                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date = new Date();
                state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
                console.log(state.data.time);
                document.getElementById('time').innerText = state.data.time;

            };

        }, 1000);
    })();
};

let Handle_check_route = (route, info) => {

    state.app.route = route;

    setTimeout(() => {

        // null
        if (state.app.route == 'null') {

            // set state
            state.ui.modal.page.top.display = false;
            state.ui.modal.page.top.transform = true;

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

                ${imported_elements.element_menu_top}
                ${imported_elements.element_menu_left}
                ${imported_elements.element_menu_bottom}
                ${imported_elements.element_menu_right}

                ${imported_elements.element_anchor_top()}
                ${imported_elements.element_anchor_left}
                ${imported_elements.element_anchor_bottom()}
                ${imported_elements.element_anchor_right}

                ${imported_elements.element_nav_top()}
                ${imported_elements.element_nav_left()}
                ${imported_elements.element_nav_bottom()}
                ${imported_elements.element_nav_right()}

                ${imported_elements.element_gui_top_left()}
                ${imported_elements.element_gui_top_right()}
                ${imported_elements.element_gui_bottom_left()}
                ${imported_elements.element_gui_bottom_right()}


                `;

            // adaptive render!
            // desktop
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

                document.getElementById('fold_container').innerHTML = `

                    <div id="fold_desktop" class="height_100vh width_100vw top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        <p class="float_left position_relative width_100">fold_desktop</p>
                    </div>

                `;

            };

            // ipad
            if (/iPad/i.test(navigator.userAgent)) {
                
                document.getElementById('fold_container').innerHTML = `

                    <div id="fold_ipad" class="height_100vh width_100vw top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        <p class="float_left position_relative width_100">fold_ipad</p>
                    </div>

                `;

            };

            // iphone
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                
                document.getElementById('fold_container').innerHTML = `

                    <div id="fold_iphone" class="height_100vh width_100vw top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                        <p class="float_left position_relative width_100">fold_iphone</p>
                    </div>

                `;

            };

            // add routes events
            setTimeout(() => {

                // filter by title
                if (document.getElementById('element_input_filter') != null) {
                    document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
                        // filter library
                        setTimeout(function() {
                            Handle_Firebase_Refs_and_Render();
                        }, 0);

                    });
                };

                // button_menu post
                if (document.getElementById('button_menu') != null) {
                    document.getElementById('button_menu').addEventListener('click', (event) => {
                        
                            state.ui.modal.menu.left.display = !state.ui.modal.menu.left.display;
                            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;

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
                    })
                };


                // Gui Button Actions
                if ((document.getElementById('fold_desktop')) != null ) {
                    document.getElementById('fold_desktop').addEventListener("click", function(event) {
                        alert('fold_desktop');
                    });
                };

                // Gui Button Actions

                if ((document.getElementById('route_home')) != null ) {
                    document.getElementById('route_home').addEventListener("click", function(event) {
                        console.log('route_home');
                        Handle_check_route('route_home', '');
                    });
                };

                if ((document.getElementById('route_blog')) != null ) {
                    document.getElementById('route_blog').addEventListener("click", function(event) {
                        console.log('route_blog');
                        Handle_check_route('route_blog', '');
                    });
                };

                if ((document.getElementById('route_dashboard')) != null ) {
                    document.getElementById('route_dashboard').addEventListener("click", function(event) {
                        console.log('route_dashboard');
                        Handle_check_route('route_dashboard', '');
                    });
                };

                if ((document.getElementById('route_who')) != null ) {
                    document.getElementById('route_who').addEventListener("click", function(event) {
                        console.log('route_who');
                        Handle_check_route('route_who', '');
                    });
                };
                if ((document.getElementById('route_what')) != null ) {
                    document.getElementById('route_what').addEventListener("click", function(event) {
                        console.log('route_what');
                        Handle_check_route('route_what', '');
                    });
                };
                if ((document.getElementById('route_when')) != null ) {
                    document.getElementById('route_when').addEventListener("click", function(event) {
                        console.log('route_when');
                        Handle_check_route('route_when', '');
                    });
                };
                if ((document.getElementById('route_where')) != null ) {
                    document.getElementById('route_where').addEventListener("click", function(event) {
                        console.log('route_where');
                        Handle_check_route('route_where', '');
                    });
                };
                if ((document.getElementById('route_why')) != null ) {
                    document.getElementById('route_why').addEventListener("click", function(event) {
                        console.log('route_why');
                        Handle_check_route('route_why', '');
                    });
                };
                if ((document.getElementById('route_how')) != null ) {
                    document.getElementById('route_how').addEventListener("click", function(event) {
                        console.log('route_how');
                        Handle_check_route('route_how', '');
                    });
                };

            }, 100);
            
            // fill data
            Handle_Firebase_Refs_and_Render();

        };


        // home
        if (state.app.route == 'route_home') {

            // set state
            state.ui.modal.page.top.display = false;
            state.ui.modal.page.top.transform = true;

            // adaptive render!
            // desktop
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = ``;

            };

            // ipad
            if (/iPad/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = ``;

            };

            // iphone
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = ``;

            };

        };


        // route_who
        if (state.app.route == 'route_blog') {

            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = false;

        };

        // route_who
        if (state.app.route == 'route_who') {

            state.ui.modal.page.top.display = true;
            state.ui.modal.page.top.transform = false;

            // page
            // desktop
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                    <div id="fold" class="position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left">

                        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                        
                            <div id="x-1" class="width_100vw height_100vh float_left position_relative z_index_1">
                                    
                                <div class="position_absolute height_100vh width_100 top_0 left_0 margin_auto z_index_1 scrollbary-scrollbar-track-yellow scrollbary-scrollbar-mid scrollbary-thumb-yellow overflow_y">
                                                                        
                                    <div class="bg_white height_100vh width_100">

                                    </div>

                                    <div class="bg_purple height_100vh width_100">

                                    </div>
                                    
                                    <div class="bg_pink height_100vh width_100">

                                    </div>

                                    <div class="bg_purple height_100vh width_100">

                                    </div>
                                    
                                    <div class="bg_pink height_100vh width_100">

                                    </div>

                                    <div class="bg_purple height_100vh width_100">

                                    </div>          

                                    <div class="height_100vh width_100">

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1">

                        <div id="misc_menu" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100">

                            <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100">

                              <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                                
                                <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark">

                                    <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">who sub menu 1</p>

                                    </div>

                                </div>

                              </div>

                            </div>

                        </div>

                        <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Who Nav 1</p>

                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                        <div class="position_relative pseudo_arrow_top_left_outside_white border_radius_1vh box_shadow_hover_none box_shadow_bottom_right_1vw_dark webkit_box_pack_center webkit_box_align display_webkit_box padding_1vh bg_yellow">
                                                    
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>
                                                <div class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover</div>

                                        </div>


                                </div>

                            </div>

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Who Nav 1</p>

                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center">

                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">hover 1</p>

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
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                        <div id="route_who_ipad" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            <p>route_who_desktop</p>
                        </div>
                `;

            };

            // iphone
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                        <div id="route_who_iphone" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            <p>route_who_desktop</p>
                        </div>
                `;

            };

        };


        // route_who
        if (state.app.route == 'route_what') {

            state.ui.modal.page.top.display = true;
            state.ui.modal.page.top.transform = false;

            // page
            // desktop
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                    <div id="fold" class="position_relative width_100vw height_100vh top_0 left_0 overflow_x scrollbarxhidden inline_flex z_index_1 float_left">

                        <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                        
                            <div id="x-1" class="width_100vw height_100vh float_left position_relative z_index_1">
                                    
                                <div class="position_absolute float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">

                                    <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                        <div id="x-layer" class="width_33vw height_50vh float_left position_relative float_left margin_auto">

                                        </div>

                                        <div id="x-layer" class="bg_pink width_33vw height_50vh float_left position_relative float_left margin_auto">

                                            <div class="position_absolute height_100 width_100 right_100 top_0 bottom_0 margin_auto z_index_0">
                                                
                                                <div class="position_absolute top_0 bottom_0 left_0 right_0 margin_auto gui_logo height_33vh width_100">
                                                </div>

                                            </div>

                                        </div>

                                        <div id="x-layer" class="bg_yellow width_33vw height_50vh float_left position_relative float_left margin_auto">
                                        </div>

                                        <div id="x-layer" class="bg_pink width_33vw height_50vh float_left position_relative float_left margin_auto">
                                        </div>

                                        <div id="x-layer" class="bg_yellow width_33vw height_50vh float_left position_relative float_left margin_auto">
                                        </div>

                                    </div>

                                </div>

                                <div id="route_dashboard" class="height_50 width_50 bottom_0 right_0 position_absolute margin_auto">
                                    
                                    <div id="route_dashboard" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                                        <p>dashboard</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1">

                        <div id="misc_menu" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100">

                            <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100">

                              <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                                
                                <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark">

                                    <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">User</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">List</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Trending</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Interaction</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Upload</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>

                                    </div>

                                </div>

                              </div>

                            </div>

                        </div>

                        <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>

                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>

                                            </div>

                                        </div>

                                      </div>

                                    </div>

                                </div>

                            </div>

                            <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                            <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                            <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                            <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                            <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>

                        </div>

                    </div>

                `;

            };

            // ipad
            if (/iPad/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                        <div id="route_who_ipad" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            <p>route_who_desktop</p>
                        </div>
                `;

            };

            // iphone
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                        <div id="route_who_iphone" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            <p>route_who_desktop</p>
                        </div>
                `;

            };

        };

        // route_who
        if (state.app.route == 'route_dashboard') {

            state.ui.modal.page.top.display = true;
            state.ui.modal.page.top.transform = false;

            let user_subs = '';

            for (var i = 0; i < state.data.user.subs.length; i++) {
                console.log(state.data.user.subs[i]);
                user_subs += state.data.user.subs[i].id;
            };

            // page
            // desktop
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

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


                    <div class="position_fixed top_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1">

                        <div id="misc_menu" class="hover_show position_absolute top_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100">

                            <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100">

                              <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                                
                                <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark">

                                    <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>

                                    </div>

                                </div>

                              </div>

                            </div>

                        </div>

                        <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Home</p>

                                <div id="column" class="hover_show position_absolute top_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">User</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">List</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Trending</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Interaction</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Upload</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                            </div>

                                        </div>

                                      </div>

                                    </div>

                                </div>

                            </div>

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">User</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">List</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Trending</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Interaction</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Upload</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>

                        </div>

                    </div>

                    <div class="position_fixed bottom_0 left_0 right_0 float_left margin_auto height_1205vh width_100 bg_white z_index_1">

                        <div id="misc_menu" class="hover_show position_absolute bottom_100 left_0 right_0 margin_auto easing_01 text_align_center float_right width_100">

                            <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box width_100">

                              <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 pseudo_arrow_top_right_outside_white">
                                
                                <div class="position_relative top_0 left_0 display_flex_flow width_100 height_100 box_shadow_hover_none bg_purple box_shadow_bottom_right_1vw_dark">

                                    <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Story</p>

                                    </div>

                                </div>

                              </div>

                            </div>

                        </div>

                        <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                            <div class="position_relative float_left" >
                                <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Home</p>

                                <div id="column" class="hover_show position_absolute bottom_100 left_0 margin_auto easing_01 text_align_center float_right">

                                    <div id="spacer" class="position_relative margin_auto easing_01 text_align_center float_right webkit_box_pack_center webkit_box_align display_webkit_box">

                                      <div class="position_relative display_flex_flow width_100 height_100 pseudo_arrow_top_left_outside_white">
                                        
                                        <div class="position_relative display_flex_flow width_100 height_100 border_radius_1vh box_shadow_hover_none bg_yellow box_shadow_bottom_right_1vw_dark">
                                                    
                                            <div class="position_relative float_left margin_025vh text_align_center webkit_box_pack_center webkit_box_align display_webkit_box width_100 height_1205vh width_100">

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">User</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">List</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Trending</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Interaction</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Upload</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>
                                            </div>

                                        </div>

                                      </div>

                                    </div>

                                </div>

                            </div>

                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">User</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">List</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Trending</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Interaction</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Upload</p>
                                        <p class="position_relative line-height_30125vh font-size_30125vh margin_1vh float_left">Zoning</p>

                        </div>

                    </div>

                `;

            };

            // ipad
            if (/iPad/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                        <div id="route_who_ipad" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            <p>route_who_desktop</p>
                        </div>
                `;

            };

            // iphone
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = `

                        <div id="route_who_iphone" class=" calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto">
                            <p>route_who_desktop</p>
                        </div>
                `;

            };

            // render


                // library post - filtered by authors & title
                if ( (document.getElementById('japan')) != null) {
                    
                    document.getElementById('japan').innerHTML = '';

                    // render
                    for (var i = 0; i < filtered_library.length; i++) {

                            let does_Type_Match = false;
                            let does_Username_Match = false;

                            //alert( state.data.types[type_index].title);

                            for (var post_index = 0; post_index < filtered_library[i].authors.length; post_index++) {

                                //alert( filtered_library[i].types[post_index].title);

                               if ( filtered_library[i].authors[post_index].id == state.data.user.id ) {
                                    does_Username_Match = true;
                                    //alert('match');
                                };

                                // pagination hack
                                if ( does_Username_Match ) {
                                    // console.log(state.data.firebase.gnougn.roster[i]);
                                    document.getElementById('japan').appendChild(
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

let sign_in_ui = () => {

    //alert('you are now signed in: ' + state.data.user.username);

    user_logged = true;

    document.getElementById('users_username').innerHTML = 'Hello ' + `${state.data.user.username}` + '!';

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
    
    Handle_Firebase_Refs_and_Render();

};


// more_posts
let less_posts = () => {
    state.data.posts_start -= 1;
    state.data.posts_limit -= 1;
    // Set firebase data
    document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
    document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;

    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let more_posts = () => {
    state.data.posts_start += 1;
    state.data.posts_limit += 1;
    // Set firebase data
    document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
    document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;

    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let find_sort = () => {

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

    document.getElementById('root').classList.remove('grid');
    document.getElementById('root').classList.remove('list');
    document.getElementById('root').classList.remove('card');
    document.getElementById('root').classList.remove('full');
    document.getElementById('root').classList.remove('thumbs');

    if ((document.getElementById('element_input_style').value == 'grid') || (document.getElementById('element_input_style').value == '' )) {
        document.getElementById('root').classList.add('grid');
    };

    if (document.getElementById('element_input_style').value == 'card') {
        document.getElementById('root').classList.add('card');
    };

    if (document.getElementById('element_input_style').value == 'list') {
        document.getElementById('root').classList.add('list');
    };

    if (document.getElementById('element_input_style').value == 'thumbs') {
        document.getElementById('root').classList.add('thumbs');
    };

    if (document.getElementById('element_input_style').value == 'full') {
        document.getElementById('root').classList.add('full');
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
                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1');
                    };
                };

                if (interval == (2) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_2');
                    };
                };

                if (interval == (3) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_3');
                    };
                };

                if (interval == (4) ) {        
                    if (document.getElementById('accent') != null) {
                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_4');
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
                                gui_logo_combo_1 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box
                            `);
                    };
                };

                if (interval == (2) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                gui_logo_combo_2 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box
                            `);
                    };
                };

                if (interval == (3) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                gui_logo_combo_3 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box
                            `);
                    };
                };

                if (interval == (4) ) {        
                    if (document.getElementById('row-logo') != null) {
                            document.getElementById('row-logo').classList = (`
                                gui_logo_combo_4 position_absolute top_0 bottom_0 left_0 right_0 margin_auto height_33vh width_100 webkit_box_pack_center webkit_box_align display_webkit_box
                            `);
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
                    Handle_check_route('null', '');

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

        if ((document.getElementById('nav-top')) != null) {                

                if (state.events.mouse.movetimer >= 6) {

                    document.getElementById('pause').classList.add('display');
                    document.getElementById('pause').classList.remove('display_none');
                }

                if (state.events.mouse.movetimer < 6) {

                    document.getElementById('pause').classList.remove('display');
                    document.getElementById('pause').classList.add('display_none');
                }

                if (instance.mouseleave == true || state.events.mouse.movetimer >= 4) {

                    document.getElementById('nav-top').classList.remove('display');
                    document.getElementById('nav-top').classList.add('display_none');

                    document.getElementById('nav-bottom').classList.remove('display');
                    document.getElementById('nav-bottom').classList.add('display_none');
                }

                if (instance.mouseleave == true || state.events.mouse.movetimer >= 2) {

                    document.getElementById('nav-left').classList.remove('display');
                    document.getElementById('nav-left').classList.add('display_none');

                    document.getElementById('nav-right').classList.remove('display');
                    document.getElementById('nav-right').classList.add('display_none');

                    document.getElementById('anchor-top').classList.remove('display');
                    document.getElementById('anchor-top').classList.add('display_none');

                    document.getElementById('anchor-left').classList.remove('display');
                    document.getElementById('anchor-left').classList.add('display_none');

                    document.getElementById('anchor-right').classList.remove('display');
                    document.getElementById('anchor-right').classList.add('display_none');

                    document.getElementById('anchor-bottom').classList.remove('display');
                    document.getElementById('anchor-bottom').classList.add('display_none');
                }

                if (instance.mouseenter == true && state.events.mouse.movetimer < 2) {

                    document.getElementById('nav-top').classList.add('display');
                    document.getElementById('nav-top').classList.remove('display_none');

                    document.getElementById('nav-bottom').classList.add('display');
                    document.getElementById('nav-bottom').classList.remove('display_none');

                    document.getElementById('nav-left').classList.add('display');
                    document.getElementById('nav-left').classList.remove('display_none');

                    document.getElementById('nav-right').classList.add('display');
                    document.getElementById('nav-right').classList.remove('display_none');

                    document.getElementById('anchor-top').classList.add('display');
                    document.getElementById('anchor-top').classList.remove('display_none');

                    document.getElementById('anchor-left').classList.add('display');
                    document.getElementById('anchor-left').classList.remove('display_none');

                    document.getElementById('anchor-right').classList.add('display');
                    document.getElementById('anchor-right').classList.remove('display_none');

                    document.getElementById('anchor-bottom').classList.add('display');
                    document.getElementById('anchor-bottom').classList.remove('display_none');
                }

                if (state.ui.root.wheel == 'up') {

                    document.getElementById('nav-top_items').classList.add('display');
                    document.getElementById('nav-top_items').classList.remove('display_none');

                    document.getElementById('nav-top_items_hr').classList.add('display');
                    document.getElementById('nav-top_items_hr').classList.remove('display_none');

                    document.getElementById('anchor-top').classList.remove('display');
                    document.getElementById('anchor-top').classList.add('display_none');

                    document.getElementById('anchor-bottom').classList.add('display');
                    document.getElementById('anchor-bottom').classList.remove('display_none');

                }

                if (state.ui.root.wheel == 'down') {

                    document.getElementById('anchor-top').classList.add('display');
                    document.getElementById('anchor-top').classList.remove('display_none');

                    document.getElementById('anchor-bottom').classList.remove('display');
                    document.getElementById('anchor-bottom').classList.add('display_none');
                }

                if (state.ui.root.wheel == 'down' && instance.pastlead == true) {

                    document.getElementById('nav-top_items').classList.remove('display');
                    document.getElementById('nav-top_items').classList.add('display_none');

                    document.getElementById('nav-top_items_hr').classList.remove('display');
                    document.getElementById('nav-top_items_hr').classList.add('display_none');
                }

                if (state.ui.modal.menu.left.display == true) {

                    document.getElementById('button_menu').classList.add('gui_icon_close');
                    document.getElementById('button_menu').classList.remove('gui_icon_menu');
                }

                if (state.ui.modal.menu.left.display == false) {

                    document.getElementById('button_menu').classList.remove('gui_icon_close');
                    document.getElementById('button_menu').classList.add('gui_icon_menu');
                }

                if (instance.mouseenter == true && instance.pastlead == false) {

                    document.getElementById('logo_column').classList.add('gui_logo_type');
                    document.getElementById('logo_column').classList.remove('gui_logo_mark');
                }

                if (instance.mouseenter == true && instance.pastlead == true) {
                    


                    document.getElementById('logo_column').classList.remove('gui_logo_type');
                    document.getElementById('logo_column').classList.add('gui_logo_mark');
                }

                if (instance.mouseenter == true && instance.startedscrolling == false && state.events.mouse.movetimer < 2) {

                    document.getElementById('nav-left').classList.add('display');
                    document.getElementById('nav-left').classList.remove('display_none');

                    document.getElementById('nav-right').classList.add('display');
                    document.getElementById('nav-right').classList.remove('display_none');

                    document.getElementById('nav-bottom').classList.add('display');
                    document.getElementById('nav-bottom').classList.remove('display_none');
                }

                if (instance.mouseenter == true && instance.startedscrolling == true) {

                    document.getElementById('nav-left').classList.remove('display');
                    document.getElementById('nav-left').classList.add('display_none');

                    document.getElementById('nav-right').classList.remove('display');
                    document.getElementById('nav-right').classList.add('display_none');

                    document.getElementById('anchor-left').classList.remove('display');
                    document.getElementById('anchor-left').classList.add('display_none');

                    document.getElementById('anchor-right').classList.remove('display');
                    document.getElementById('anchor-right').classList.add('display_none');

                    document.getElementById('nav-bottom').classList.remove('display');
                    document.getElementById('nav-bottom').classList.add('display_none');
                }

                if (state.app.route == 'route_dashboard') {

                    document.getElementById('nav-left').classList.remove('display');
                    document.getElementById('nav-left').classList.add('display_none');

                    document.getElementById('nav-right').classList.remove('display');
                    document.getElementById('nav-right').classList.add('display_none');

                    document.getElementById('nav-bottom').classList.remove('display');
                    document.getElementById('nav-bottom').classList.add('display_none');
                }

                if (state.ui.modal.pop.top.display == true) {
                    document.getElementById('anchor-top').classList.remove('display');
                    document.getElementById('anchor-top').classList.add('display_none');

                    document.getElementById('anchor-bottom').classList.remove('display');
                    document.getElementById('anchor-bottom').classList.add('display_none');
                }

                // route_who
                if (state.app.route == 'route_blog') {

                    document.getElementById('nav-left').classList.remove('display');
                    document.getElementById('nav-left').classList.add('display_none');

                    document.getElementById('nav-right').classList.remove('display');
                    document.getElementById('nav-right').classList.add('display_none');

                    document.getElementById('nav-bottom').classList.remove('display');
                    document.getElementById('nav-bottom').classList.add('display_none');
                };

                if (instance.mouseenter == true && instance.startedscrolling == false) {

                    document.getElementById('anchor-top').classList.add('display');
                    document.getElementById('anchor-top').classList.remove('display_none');
                };

            }

            }, (101));
    }());
};

window.onload = () => {
	HANDLE_inital_load();
	Handle_Timers();
    HANDLE_looping_check_states();
    Handle_Repeat_Firebase_Validation;
    //Handle_Firebase_Refs_and_Render();
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