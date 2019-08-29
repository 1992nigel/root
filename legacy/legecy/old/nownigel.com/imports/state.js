let default_state = {

    app: {
        route: 'null',
        dev_mode: true,
        time: '',
        feature_posts_limit: 1,
        posts_start: 1,
        posts_limit: 7,
        refs: false,
        sort: 'likes',
        view: 'grid',
        feature_style: 'all',
        types: [],
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
        }
    },

    data: {
        firebase: {},
        local: true
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
            history: [],
            timer: 0
        },
        touch: {
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
        motion: {
            event_accelerationIncludingGravity_x: 0,
            event_accelerationIncludingGravity_y: 0,
            event_accelerationIncludingGravity_z: 0
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
            },
            
            fold: {
                timeout: {
                    transform: false,
                    opacity:false,
                    display: false
                }
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

let from_Import = () => {
    console.log('from state');
};

export default {
    from_Import,
    default_state
}
