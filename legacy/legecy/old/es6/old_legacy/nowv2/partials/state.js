let default_state = {

    app: {
        route: 'null'
    },

    data: {
        dev_mode: false,
        time: '',
        firebase: {},
        wordpress: {},
        feature_posts_limit: 1,
        posts_start: 1,
        posts_limit: 2,
        refs: false,
        sort: 'likes',
        view: 'grid',
        feature_style: 'all',
        type: 'all',
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
            sixty_four: 0,
            loading: false,
            loaded: false,
            cursor_moved: false,
            // This is now the "HOME" Stage
            scrolled_once: false,
            scrolling_down: false,
            start: false,
            // This is now the "Start" stage
            learn: false,
            // This is now the "Learn" stage,
            hide: false,
            // This is now the route or page state,
            outdoor1_9: 0, // see anchors
            office1_6: 0, // see anchors
            scrolled_top: false,
            scrolled_bottom: false,
            blog_scrolled_top: false,
            blog_scrolled_bottom: false,
        }
    },

    events: {

        mouse: {
            game_bit: {
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
        touch: {
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
        },
        scroll: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0
        },
        blog: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0
        },
        route: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0
        },
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
            bg_black: {
                transform: false,
                opacity:false,
                display: false,
            },
            bg_green: {
                transform: false,
                opacity:false,
                display: false,
            },
            container_8: {
                transform: false,
                opacity:false,
                display: false,
            },
            load_light_yellow_0: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            noise: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            grid_cross: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            grid_depth: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            depth_90: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            loading: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            loaded: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            begin: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            onboarding: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            introduction: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            home: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            horizontal: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            },
            verticle: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            }

        },

        stage: {
            null: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },
            loading: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },
            loaded: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            home: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            introduction: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            fold: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            enter: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            outroduction: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            onboarding: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            enneagon: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 1,
            },

        },

        particles: {
            fourground_man: {
                transform: false,
                opacity:false,
                display: true
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
                opacity:false,
                display: false,
                xaxis: 1,
                yaxis: 0,
                height: 4,
                width: 2,
                idle: {
                    floating: false,
                    standing: false,
                    blinking: true,
                    sitting: false,
                    bend: false,
                    prone: false
                },
                action: {
                    jumping: false,
                    punching: false,
                    kicking: false,
                    shooting: false,
                    grabing: false,
                    blocking: false,
                    left: true,
                    right: false
                },
                motion: {
                    walking: false
                }
            },

            enemy: {
                speed: 1,
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                xaxisascending: true,
                yaxis: .5,
                height: 4,
                width: 2,
                yaxisascending: true,
                actions: {
                    jump: false
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

            parallax_y: {
                layer1: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer2: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer3: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer4: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer5: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer6: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer7: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer8: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                }
            },

            parallax_x: {
                layer1: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer2: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer3: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer4: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer5: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer6: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer7: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                },
                layer8: {
                    clientX: 0,
                    clientY: 0,
                    clientXGrow:false,
                    clientYGrow:false
                }
            }
        },

        gui: {

            top: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            top_left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            top_right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom_left: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom_right: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            fold: {
                all: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                assets: {
                    transform: false,
                    opacity:true,
                    display: true
                },
                logo: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                helper: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                content: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                footer: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                enter: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                entered: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                learn: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                start: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                pause: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                timeout: {
                    transform: false,
                    opacity:false,
                    display: false
                },
            },
            scroll: {
                wheel: 'up',
                component_app_gui_scroll_y_position:0,
                scroll_Y_axis_Pos: 0,
                scroll_X_axis_Pos: 0,
                x: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                y: {
                    transform: false,
                    opacity:false,
                    display: false
                },
            },
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

from_Import();

export default {
    from_Import,
    default_state
}
