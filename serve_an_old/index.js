
/*

 *Order or operation*

1. Links
    
    '/'

    '/p/:id'
    (post.id === req.params.id)

    '/:id'
    (post.title === req.params.id)

2. onAuthStateChanged

3. DOMContentLoaded
    opening.appendChild
    sequence_Load
    get_dimensions
    handle_play_DOMContentLoaded

4. load
    auth_buffer
    check_for_auth_after_load
        handle_firebase_events
        handle_if_AUTH
            handle_ANIMATION_AUTOMATION (looping animation)
            handle_if_AUTH_checked_CLICK_SCENE_1 (clickable)

    Still has to:
        correct looping animation assets so no player_1 overlapping
        - refreash after sign in/out/register exc.
        - routes?!
        - easy asset change
        - after post/user made
        - Events
        - Modals
        - Guis
        - Game shots
        - sorts
        - filter types
        - card views
            - is_Mobile vs isDesktop
        - home page/route vs post vs users
        - image upload
        - signed in/out ui
            - user_logged_in

        - animation of assets on 24fps loop handle_ANIMATION_AUTOMATION
            player_1
            gui_stage_tv
            gui_stage_lights
            mark
            facer
            logo

5. Scene (interval controlled transition)

6. Shots (Views with events)

7. Set
    - gui_stage_tv
    - gui_stage_lights

*/

/* to dos

    check_ui_after_auth DONE!
    valid users posts!
*/

// Imports
import style from './style.scss';
import default_state from './imports/state';
import events from './imports/events';
import elements from './imports/elements';

let state = default_state.default_state;

let dev_mode = false;
let checkmark = 0;
let just_made = ``;

let tiny_height = 0;
let tiny_width = 0;
let body = document.getElementById('body');
let auth_has_been_checked = false;

let on_post_page = false;
let paginate = 0;
let paginate_limit = 1;
let paginate_start = 0

let post_id;
let author_id;
let post_views;
let view_counted = false;
let stored_auth_user_cred = {};
let posts_guides = [];
let upload_details = ``;
let upload_details_profile = ``;
let post_view = 'card';
let dark_view = false;
let filtered_posts_guides = [];
let valid_user = {};
let user_logged_in = false;
let post_up = false;

let game_start = () => {
    elements.set_stage_game();
};

let game_end = () => {
    elements.set_stage_game_end();
};

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

// listenforauth state changes
auth.onAuthStateChanged(logged_auth_user => {
    console.log('onAuthStateChanged');

    if ( (logged_auth_user) == null) {
        //alert('logged_auth_user == null');
        get_db_guides();
        console.log('please login');
        auth_has_been_checked = true;
    };

    if ( (logged_auth_user) != null) {
        //alert('logged_auth_user != null');
        stored_auth_user_cred = logged_auth_user;
        get_db_guides();
        console.log('logined in: ' + stored_auth_user_cred.uid);
        auth_has_been_checked = true;
    };

});

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

let add_events_after_shot_action_user_screen_4 = () => {

    if (document.getElementById('shot_action_user_screen_4_item_3') != null) {
        (document.getElementById('shot_action_user_screen_4_item_3')).addEventListener("click", function(event) {
            alert('you doing it nigel!: start, sequence_shot_action_user_screen_4_item_3');
            sequence_start_1();
        });
    };

    if (document.getElementById('shot_action_user_screen_4_item_1') != null) {
        (document.getElementById('shot_action_user_screen_4_item_1')).addEventListener("click", function(event) {
            alert('you doing it nigel!: start, sequence_shot_action_user_screen_4_item_1');
            sequence_start_1();
        });
    };

    if (document.getElementById('shot_action_user_screen_4_item_12') != null) {
        (document.getElementById('shot_action_user_screen_4_item_12')).addEventListener("click", function(event) {
            alert('you doing it nigel!: start, sequence_start_1');
            sequence_start_1();
        });
    };

    if (document.getElementById('shot_action_user_screen_4_item_13') != null) {
        (document.getElementById('shot_action_user_screen_4_item_13')).addEventListener("click", function(event) {
            alert('you doing it nigel!: start, sequence_start_1');
            sequence_start_1();
        });
    };

    if (document.getElementById('shot_action_user_screen_4_item_4') != null) {
        (document.getElementById('shot_action_user_screen_4_item_4')).addEventListener("click", function(event) {
            alert('you doing it nigel!: start, sequence_start_1');
            sequence_start_1();
        });
    };

    if (document.getElementById('shot_action_user_screen_4_item_6') != null) {
        (document.getElementById('shot_action_user_screen_4_item_6')).addEventListener("click", function(event) {
            alert('you doing it nigel!: learn, sequence_start_0');
            sequence_start_0();
        });
    };

    if (document.getElementById('scene_start_4_item_11') != null) {
        (document.getElementById('scene_start_4_item_11')).addEventListener("click", function(event) {
            alert('you doing it nigel!: learn, sequence_start_0');
            sequence_start_0();
        });
    };

};

let add_events_after_scene_start_1 = () => {

    if (document.getElementById('scene_start_1_item_10') != null) {
        (document.getElementById('scene_start_1_item_10')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_10 - sequence_start_2');
            sequence_start_2();
        });
        (document.getElementById('scene_start_1_item_11')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_11 - sequence_start_3');
            sequence_start_3();
        });
        (document.getElementById('scene_start_1_item_12')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_12 - sequence_start_4');
            sequence_start_4();
        });
        (document.getElementById('scene_start_1_item_13')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_13 - sequence_start_5');
            sequence_start_5();
        });
        (document.getElementById('scene_start_1_item_9')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_9 - sequence_start_6');
            sequence_start_6();
        });
        (document.getElementById('scene_start_1_item_8')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_8 - sequence_start_7');
            sequence_start_7();
        });
        (document.getElementById('scene_start_1_item_7')).addEventListener("click", function(event) {
            alert('you doing it nigel!: scene_start_1_item_7 - sequence_start_8');
            sequence_start_8();
        });
    };

};

let handle_play_DOMContentLoaded = () => {

    document.getElementById('opening').appendChild(
        elements.gen('basics')
    );


    document.getElementById('interactions').appendChild(
        elements.gen('interactions')
    );

    document.getElementById('modal_pop_top').appendChild(
        elements.gen('pop_top')
    );

    document.getElementById('modal_pop_right').appendChild(
        elements.gen('pop_right')
    );

    document.getElementById('modal_pop_left').appendChild(
        elements.gen('pop_left')
    );

    document.getElementById('modal_pop_bottom').appendChild(
        elements.gen('pop_bottom')
    );

    document.getElementById('modal_menu_top').appendChild(
        elements.gen('menu_top')
    );


    document.getElementById('modal_page_top').appendChild(
        elements.gen('page_top')
    );

    document.getElementById('modal_page_right').appendChild(
        elements.gen('page_right')
    );

    document.getElementById('modal_page_left').appendChild(
        elements.gen('page_left')
    );

    document.getElementById('modal_page_bottom').appendChild(
        elements.gen('page_bottom')
    );

    get_dimensions();

    // 24/fps loop
    let fps = 24;
    let loading_buffer = .5;

    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == (0)) {
                
                    if (document.getElementById('shots') != null) {
                        shot_action_preloader();

                    };
                };

                if ( interval < (fps)) {
                
                    if (document.getElementById('shots') != null) {
                        //elements.shot_action_single_loading();


                        elements.shot_action_logo_action_blinking_only_enter();
                        // to sequence_after_loads

                    };
                };
                
                if ( interval == ((fps)*(loading_buffer)) ) {
                
                    if (document.getElementById('shots') != null) {
                        elements.shot_action_logo_action_enter();
                        //elements.shot_action_single_loaded();

                    };
                    clearInterval(play)

                };

                //check "load" for next scene

                //console.log('handle_play_DOMContentLoaded: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_ANIMATION_AUTOMATION = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                if (state.ux.platform.is_Desktop == true) {
                };


                // start loops
                if (document.getElementById('gui_stage_tv') != null) {

                    // svg classlist
                    document.getElementById('gui_stage_tv').classList = (' width_100 height_100 gui_stage_tv_'+state.interaction.gui_stage_tv.frame+ ' position_absolute margin_auto ');
                        
                    // automated moving
                    // size & position
                    let gui_stage_tv = document.getElementById('gui_stage_tv');
                    gui_stage_tv.style =
                        'height: ' + (state.interaction.gui_stage_tv.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.gui_stage_tv.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.gui_stage_tv.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.gui_stage_tv.clientX * (tiny_width / 8)) + 'px;';
                

                    
                    // frame reset
                    if (state.interaction.gui_stage_tv.frame == 4) {
                        state.interaction.gui_stage_tv.frame = 0;
                    };
                    
                    // frame increase
                    state.interaction.gui_stage_tv.frame += 1;
                };

                // start loops
                if (document.getElementById('player_1') != null) {

                    // svg classlist
                    // stance == standing
                    if (state.interaction.player_1.stance == 0) {

                        // angle == left
                        if (state.interaction.player_1.angle == 0) {
                            if ( state.interaction.player_1.cycles.walking == true) {
                                document.getElementById('player_1').classList = (' width_100 height_100 gui_character_body_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                            };
                        };
                           
                        // angle == right
                        if (state.interaction.player_1.angle == 1) {
                            if ( state.interaction.player_1.cycles.walking == true) {
                                document.getElementById('player_1').classList = (' width_100 height_100 gui_character_body_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                            };
                        };
                    };

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

                    // automated moving
                    // size & position
                    let player_1 = document.getElementById('player_1');
                    player_1.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                    
                    // frame reset
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                    
                    // frame increase
                    state.interaction.player_1.frame += 1;
                };

                state.motion.frame += 1;
                //console.log('state.motion.frame: ' + state.motion.frame)

            }, (1000 / state.motion.framerate));
    })();
};

let post_data = () => {

    // filter by title
    if (document.getElementById('subtoauthor') != null && valid_user.id != null) {
        document.getElementById('subtoauthor').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                alert('sub');
                db_update_subs("users", valid_user.id, post.author_id);
            }, 0);
        });
    };

    // if on post page
    if ((document.getElementById('post_id')) != null) {

        post_id = document.getElementById('post_id').innerHTML;
        author_id = document.getElementById('post_author_id').innerHTML;
        post_views = document.getElementById('post_views').innerHTML;

        if (view_counted == false) {
            db_update_author_views("users", author_id);
            db_update_post_views("users", post_id);
            view_counted = true;

        };

        let detail;

        for (var i = 0; i < posts_guides.length; i++) {
            console.log(posts_guides[i]);
            if (posts_guides[i].id == post_id) {
                   detail = posts_guides[i]
            };
        };

        //check if you are owner of post
        if (detail.author_id == valid_user.id) {
            alert('hello owner of post')


        document.getElementById('modal-edit-post').innerHTML = `
            
                     <form id="edit-form">
                        <p>edit post</p>
                        <input id="edit_post_title" placeholder="edit_post_title" type="text"/>
                        <input id="edit_post_tagline" placeholder="edit_post_tagline" type="text"/>
                        <input id="edit_post_views" placeholder="edit_post_views" type="text"/>
                        <input id="edit_post_likes" placeholder="edit_post_likes" type="text"/>
                        <input id="edit_post_video" placeholder="edit_post_video" type="text"/>
                        <input id="edit_post_content" placeholder="edit_post_content" type="text"/>
                        
                        
                        <div id="edit_button_post" class="">edit post</div>

                        <div id="delete_button_post" alt="sign out">
                           delete post
                        </div>

                     </form> 
        `

        }

        document.getElementById('all_comments').innerHTML = ``;
        for (var i = 0; i < detail.comments.length; i++) {
            console.log(posts_guides[i]);
            document.getElementById('all_comments').innerHTML += `${detail.comments[i].content}`
        };


        document.getElementById('edit_post_title').value = post_id;
        document.getElementById('edit_post_tagline').value = post_id;
        document.getElementById('edit_post_views').value = post_views;
        document.getElementById('edit_post_likes').value = post_id;
        document.getElementById('edit_post_video').value = post_id;
        document.getElementById('edit_post_content').value = post_id;

        if ((document.getElementById('edit_button_post')) != null) {
            document.getElementById('edit_button_post').addEventListener('click', (event) => {
                //event.preventDefault();
                db_update_post("users", post_id);
            });
        };

        if ((document.getElementById('like_submit')) != null) {
            document.getElementById('like_submit').addEventListener('click', (event) => {
                //event.preventDefault();
                db_update_author_likes("users", author_id);
                db_update_post_likes("users", post_id);
            });
        };

        if ((document.getElementById('comment_submit')) != null) {
            document.getElementById('comment_submit').addEventListener('click', (event) => {
                //event.preventDefault();
                db_update_comments("users", post_id);
            });
        };

        if ((document.getElementById('delete_button_post')) != null) {
            document.getElementById('delete_button_post').addEventListener('click', (event) => {
                event.preventDefault();
                db_delete_user("users", post_id);
            });
        };

    };

};

let sequence_after_loads = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {

                    post_data();

                    elements.shot_action_logo_action_leave();
                };

                if ( interval == (24 * 1)) {
                    elements.shot_action_single_vomit();
                };

                if ( interval == (24 * 2)) {
                    elements.shot_action_single_vomit_and_wall();
                };

                if ( interval == (24 * 3)) {
                    sequence_back_home();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_back_home = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                if ( interval == (24 * 0)) {
                    elements.shot_action_user_screen_4();
                };

                if ( interval == (24 * 1)) {
                    add_events_after_shot_action_user_screen_4();
                };

                if ( interval == (24 * 2)) {
                    game_start();
                };

                if ( interval == (24 * 3)) {
                    game_end();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_0 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_0();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_1 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_1();
                };

                // user specific
                if ( interval == (24 * 1)) {
                    add_events_after_scene_start_1();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_2 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_2();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_3 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_3();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_4 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_4();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_5 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_5();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_6 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_6();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_7 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_7();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let sequence_start_8 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // user specific
                if ( interval == (24 * 0)) {
                    elements.scene_start_8();
                };

                // user specific
                if ( interval == (24 * 1)) {
                    //add_events_after_scene_start_1();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let act_3 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                if ( interval == (24 * 0)) {
                    sequence_after_loads();
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let handle_INITIAL_LOOP = () => {

    if (dev_mode) {
        checkmark += 1;
        alert(checkmark + '/6 (handle_INITIAL_LOOP) Begin after handle_firebase_events, handle_ANIMATION_AUTOMATION');
    };

    check_local_user();
    act_3();

};

// after DOM, LOAD, AUTH (handle_if_AUTH_ACT_1)
let handle_if_AUTH_ACT_2 = () => {

    // add single events
    handle_firebase_events();

    // crank up the 24fps machine
    handle_ANIMATION_AUTOMATION();


    if (dev_mode) {
        checkmark += 1;
        alert(checkmark + '/6 ( after dom, load, auth_has_been_checked, handle_firebase_events && handle_ANIMATION_AUTOMATION)');
    };

    // start sequence of scenes for localStorage.user!!!

    // localStorage.user new_unlogged vs returning_unlogged 
    handle_INITIAL_LOOP();

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

    // nav controls
    if (document.getElementById('nav_button_1_1') != null) {
        document.getElementById('nav_button_1_1').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.top.transform = !state.modal.nav.top.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_1_2') != null) {
        document.getElementById('nav_button_1_2').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.left.transform = !state.modal.nav.left.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_1_3') != null) {
        document.getElementById('nav_button_1_3').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.right.transform = !state.modal.nav.right.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_1_4') != null) {
        document.getElementById('nav_button_1_4').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    // pop controls
    if (document.getElementById('nav_button_2_1') != null) {
        document.getElementById('nav_button_2_1').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('nav_button_2_2') != null) {
        document.getElementById('nav_button_2_2').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.right.transform = !state.modal.pop.right.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('nav_button_2_3') != null) {
        document.getElementById('nav_button_2_3').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.left.transform = !state.modal.pop.left.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('nav_button_2_4') != null) {
        document.getElementById('nav_button_2_4').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    // pages controls
    if (document.getElementById('nav_button_3_1') != null) {
        document.getElementById('nav_button_3_1').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.top.transform = !state.modal.page.top.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_3_2') != null) {
        document.getElementById('nav_button_3_2').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.left.transform = !state.modal.page.left.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_3_3') != null) {
        document.getElementById('nav_button_3_3').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.right.transform = !state.modal.page.right.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_3_4') != null) {
        document.getElementById('nav_button_3_4').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    // menu controls
    if (document.getElementById('nav_button_4_1') != null) {
        document.getElementById('nav_button_4_1').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.top.transform = !state.modal.menu.top.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_4_2') != null) {
        document.getElementById('nav_button_4_2').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.left.transform = !state.modal.menu.left.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_4_3') != null) {
        document.getElementById('nav_button_4_3').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.right.transform = !state.modal.menu.right.transform;
                get_dimensions();
            }, 0);
        });
    };
    if (document.getElementById('nav_button_4_4') != null) {
        document.getElementById('nav_button_4_4').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.bottom.transform = !state.modal.menu.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };


    // post view controls
    if (document.getElementById('pagination_left') != null) {
        document.getElementById('pagination_left').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                paginate_limit -= 1;
                paginate_start -= 1;
                alert('paginate_start: ' + paginate_start + ', paginate_limit: ' + paginate_limit);
                get_db_guides();
                get_dimensions();
            }, 0);
        });
    };

    
    // post view controls
    if (document.getElementById('pagination_right') != null) {
        document.getElementById('pagination_right').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                paginate_limit += 1;
                paginate_start += 1;
                alert('paginate_start: ' + paginate_start + ', paginate_limit: ' + paginate_limit);
                get_db_guides();
                get_dimensions();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('modal_nav_top') != null) {
        document.getElementById('modal_nav_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    // nav
    if (document.getElementById('nav_bottom') != null) {
        document.getElementById('nav_bottom').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('nav_top') != null) {
        document.getElementById('nav_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.top.transform = !state.modal.nav.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('nav_left') != null) {
        document.getElementById('nav_left').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.left.transform = !state.modal.nav.left.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('nav_right') != null) {
        document.getElementById('nav_right').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.nav.right.transform = !state.modal.nav.right.transform;
                get_dimensions();
            }, 0);
        });
    };
    

    // menu
    if (document.getElementById('menu_bottom') != null) {
        document.getElementById('menu_bottom').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.bottom.transform = !state.modal.menu.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('menu_top') != null) {
        document.getElementById('menu_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.top.transform = !state.modal.menu.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('menu_left') != null) {
        document.getElementById('menu_left').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.left.transform = !state.modal.menu.left.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('menu_right') != null) {
        document.getElementById('menu_right').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.menu.right.transform = !state.modal.menu.right.transform;
                get_dimensions();
            }, 0);
        });
    };

    // page
    if (document.getElementById('page_bottom') != null) {
        document.getElementById('page_bottom').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('page_top') != null) {
        document.getElementById('page_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.top.transform = !state.modal.page.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('page_left') != null) {
        document.getElementById('page_left').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.left.transform = !state.modal.page.left.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('page_right') != null) {
        document.getElementById('page_right').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.page.right.transform = !state.modal.page.right.transform;
                get_dimensions();
            }, 0);
        });
    };


    // pop
    if (document.getElementById('pop_bottom') != null) {
        document.getElementById('pop_bottom').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('pop_top') != null) {
        document.getElementById('pop_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('pop_left') != null) {
        document.getElementById('pop_left').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.left.transform = !state.modal.pop.left.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('pop_right') != null) {
        document.getElementById('pop_right').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.right.transform = !state.modal.pop.right.transform;
                get_dimensions();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('view_card') != null) {
        document.getElementById('view_card').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'card';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_list') != null) {
        document.getElementById('view_list').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'list';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_numbered') != null) {
        document.getElementById('view_numbered').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'numbered';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_read') != null) {
        document.getElementById('view_read').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'read';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_fifth') != null) {
        document.getElementById('view_fifth').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'fifth';
                get_dimensions();
            }, 0);
        });
    };
    
    if (document.getElementById('view_sixth') != null) {
        document.getElementById('view_sixth').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'sixth';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_eighth') != null) {
        document.getElementById('view_eighth').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'eighth';
                get_dimensions();
            }, 0);
        });
    };
    
    if (document.getElementById('controls_sequence_back_home') != null) {
        document.getElementById('controls_sequence_back_home').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                sequence_back_home();
                get_dimensions();
            }, 0);
        });
    };
    
    if (document.getElementById('controls_sequence_start_0') != null) {
        document.getElementById('controls_sequence_start_0').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                sequence_start_0();
                get_dimensions();
            }, 0);
        });
    };
    
    if (document.getElementById('dark_view_toggle') != null) {
        document.getElementById('dark_view_toggle').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.ux.orientation.dark_view = !state.ux.orientation.dark_view;

                db_update_dark_mode("users", valid_user.id);
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_1') != null) {
        document.getElementById('interactions_button_1').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                //dark_view = !dark_view;
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_2') != null) {
        document.getElementById('interactions_button_2').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                modal_reset();
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_3') != null) {
        document.getElementById('interactions_button_3').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                modal_reset();
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_4') != null) {
        document.getElementById('interactions_button_4').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                modal_reset();
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_loading') != null) {
        document.getElementById('a_big_loading').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_home') != null) {
        document.getElementById('a_big_home').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_latest') != null) {
        document.getElementById('a_big_latest').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_start') != null) {
        document.getElementById('a_big_start').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_learn') != null) {
        document.getElementById('a_big_learn').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_planner') != null) {
        document.getElementById('a_big_planner').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_contact') != null) {
        document.getElementById('a_big_contact').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_welcome') != null) {
        document.getElementById('a_big_welcome').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };
};

let check_ui_after_auth = () => {

    //alert('user_logged_in: ' + user_logged_in)

    // if logged
    if (user_logged_in == true) {
        //alert('user_logged_in == true, : ' + valid_user.id);

        localStorage.setItem("user", "logged_user");
        localStorage.setItem("user_id", valid_user.id);

        if (valid_user.setting != null) {
            if (valid_user.setting.dark == false) {
                dark_view = false;
            };

            if (valid_user.setting.dark == true) {
                dark_view = true;
            };

            //alert('state.ux.orientation.dark_view: ' + state.ux.orientation.dark_view + 'valid_user.setting.dark: ' +valid_user.setting.dark);
        
        };

        get_dimensions();

        document.getElementById('account-details').innerHTML = `
            id: ${valid_user.id}
            title: ${valid_user.title}
            email: ${valid_user.email}
        `;

        document.getElementById('account-details-id').innerHTML = `
            id: ${valid_user.id}
        `;

        document.getElementById('account-details-title').innerHTML = `
            title: ${valid_user.title}
        `;

        document.getElementById('account-details-email').innerHTML = `
            email: ${valid_user.email}
        `;

        document.getElementById('nav_button_2_1').innerHTML = `
        <div class="position_relative gui_link_settings_white
                width_50 height_50 float_left"></div>
        `;

        document.getElementById('modal-edit').innerHTML = `
            
                     <form id="edit-form">

                        <h1>stream</h1>
                        <input placeholder="stream message" type="text" id="user_stream"/>

                        <div id="send_stream" class="">send stream</div>

                        <p>edit profile</p>
                        <input placeholder="user_title" type="text" id="user_title"/>
                        <input placeholder="user_youtube" type="text" id="user_youtube"/>
                        <input placeholder="user_twitch" type="text" id="user_twitch"/>
                        <input placeholder="user_spotify" type="text" id="user_spotify"/>
                        <input placeholder="user_instagram" type="text" id="user_instagram"/>
                        <input placeholder="user_twitter" type="text" id="user_twitter"/>
                        <input placeholder="user_vimeo" type="text" id="user_vimeo"/>
                        
                        <input class="display_none" type="file" value="upload" id="fileButton_profile" accept="image/*" title="&nbsp;"/>
                        <progress value="0" max="100" id="uploader_profile">0%</progress>
                        <p id="upload_progress_profile">images only</p>
                        <label for="fileButton_profile">Select file</label>
                        <div id="upload_details_profile"></div>

                        <div id="edit_button" class="">edit</div>

                        <div id="signout" alt="sign out">
                           sign out
                        </div>
                        <div id="delete_button" alt="sign out">
                           delete
                        </div>

                     </form> 
        `

        document.getElementById('modal-create').innerHTML = `
            <form id="create-form">
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

                <progress value="0" max="100" id="uploader">0%</progress>
                <p id="upload_progress">images only</p>
                <label for="fileButton">Select file</label>
                <div id="upload_details"></div>
                <div id="create_button" class="">create</div>
             </form>
        `

        document.getElementById('modal-signup').innerHTML = ``;
        document.getElementById('modal-signin').innerHTML = ``;
    };

    // if not logged
    if (user_logged_in == false) {
        //alert('user_logged_in == false');


        localStorage.setItem("user", "unlogged_user");
        localStorage.setItem("user_id", valid_user.id);

        document.getElementById('account-details').innerHTML = `please log in`;

        document.getElementById('account-details-id').innerHTML = `
            id: please log in
        `;

        document.getElementById('account-details-title').innerHTML = `
            title: please log in
        `;

        document.getElementById('account-details-email').innerHTML = `
            email: please log in
        `;


        document.getElementById('nav_button_2_1').innerHTML = `
        <div class="position_relative gui_link_add_white
                width_50 height_50 float_left"></div>
        `;

        document.getElementById('modal-edit').innerHTML = ``;

        if (document.getElementById('modal-edit-post') != null) {
            document.getElementById('modal-edit-post').innerHTML = ``;
        };
        document.getElementById('modal-create').innerHTML = ``;

        document.getElementById('modal-signup').innerHTML = `

         <form id="signup-form">
         <p>modal-signup</p>
            <input placeholder="username" type="type" id="user_username" required />
            <input placeholder="email" type="email" id="signup-email" required />
            <input placeholder="password" type="password" id="signup-password" required />
            <div id="signup_submit" class="">sign up</div>
         </form>

        `

        document.getElementById('modal-signin').innerHTML = `
            
            <form id="signin-form">
                <p>modal-signin</p>
                <input placeholder="signin-email" type="signin-email" id="signin-email" required />
                <input placeholder="signin-password" type="signin-password" id="signin-password" required />
                <div id="signin" class="">sign in</div>
            </form>
        `

    };

    if ((document.getElementById('signup-form')) != null) {

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
    };

    if ((document.getElementById('signin-form')) != null) {
    
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
    };

    if ((document.getElementById('uploader')) != null) {
        // upload
        let uploader = document.getElementById('uploader');
        let upload_progress = document.getElementById('upload_progress');
        let fileButton = document.getElementById('fileButton');
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

                    uploader.value = progress;
                    upload_progress.innerHTML = progress;
                },
                
                function error(err) {

                },
                
                function complete(snapshot) {

                    setTimeout(function () {
                        uploader.value = 0;
                        upload_progress.innerHTML = ``;
                    }, 2000);
                    // Handle successful uploads on complete
                      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        upload_details = downloadURL;
                        document.getElementById('upload_details').innerHTML = `upload complete, available at: ${upload_details}`;
                        document.getElementById('upload_details').innerHTML += `
                        <div id="uploaded_image" style="background-image: url(${(upload_details)})">
                        </div>`;
                      });
                }
            );

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
                        upload_details_profile = downloadURL;
                        document.getElementById('upload_details_profile').innerHTML = `upload complete, available at: ${upload_details_profile}`;
                        document.getElementById('upload_details_profile').innerHTML += `
                        <div id="uploaded_image_profile" style="background-image: url(${(upload_details_profile)})">
                        </div>`;
                      });
                }
            );

        });
    };

    if ((document.getElementById('signout')) != null) {

        // signout / un-auth
        let signout = document.getElementById('signout');

        signout.addEventListener('click', (event) => {
                user_logged_in = false;
                stored_auth_user_cred = {};
                //get_db_guides();
            event.preventDefault();
            auth.signOut().then(() => {
                //alert('signout');
                console.log('logged out');
            });

            user_logged_in = false;
                //stored_auth_user_cred.uid =
                //get_db_guides();
        });
    };

    if ((document.getElementById('edit_button')) != null) {

        document.getElementById('send_stream').addEventListener('click', (event) => {
            event.preventDefault();
            db_create_stream(valid_user.id);
        });

        document.getElementById('edit_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_update_user("users", valid_user.id);
        });

        document.getElementById('delete_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_delete_user("users", valid_user.id);
        });

        document.getElementById('create_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_create_post("users");
        });
    };

    if (dev_mode) {
        checkmark += 1;
        alert(checkmark + '/6 (check_ui_after_auth -> FB CRUD, AUTH, AUTO SIGNED, DATA RENDERED)');
    };
};

// retrieve
let get_db_guides = () => {
    //alert('get_db_guides');

    //db.settings({timestampsInSnapshots: true});
    db.collection('users').get().then(snapshot => {
        
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        posts_guides = [];
        filtered_posts_guides = [];
        document.getElementById('posts_all').innerHTML = ``;
        document.getElementById('posts_filtered_sorted').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_type').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_stream').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_category').innerHTML = ``;
        document.getElementById('posts_filtered_sorted_hashtag').innerHTML = ``;
        document.getElementById('posts_filtered').innerHTML = ``;

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_guides.push(items)
        });

        if ((stored_auth_user_cred.uid) != null && (stored_auth_user_cred.uid) != 'xxx') {

            console.log('stored_auth_user_cred.uid');
            console.log(stored_auth_user_cred.uid);
            console.log('posts_guides');
            console.log(posts_guides);

            // match auth user with database collection: users

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

            console.log('valid_user');
            console.log(valid_user);

        };

        // set ui depending on user log status
        check_ui_after_auth();
        
        /*
        fb_sorted_library(posts_guides, 'timedown').forEach(post => {
            document.getElementById('posts_random').appendChild(
                elements.Generate_new_li_post(post)
            );
        });
        */

        // render SORTED post to view 
        fb_sorted_library(posts_guides, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');
            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `
                <div class="feat_img">
                    <div class="container"></div>
                </div>
                <h2>
                    post title: ${post.title}
                </h2>
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
                post_up = !post_up;
                get_classes();
            });

            element.children[4].addEventListener("click", function(event) {
                alert('like');
                db_update_post_likes("users", post.id);
                db_update_author_likes("users", post.author_id);

            });

            element.children[5].addEventListener("click", function(event) {
                alert('sub');
                db_update_subs("users", valid_user.id, post.author_id);
            });

            document.getElementById('posts_all').appendChild(
                element
            );
        });

        //  FILTERED BY TITLE
        if ((filtered_posts_guides) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    // title filter
                    (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                    ||
                    // if filter
                    (posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value))

                    ) {
                    filtered_posts_guides.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides[i]');
                console.log(filtered_posts_guides[i]);
            };
        };

        // render SORTED && FILTERED BY TITLE post to view 
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

        //  FILTERED BY TITLE *sorted*
        let sorted_filtered_posts_guides = [];
        if ((sorted_filtered_posts_guides) != null) {
            for (var i = 0; i < posts_guides.length; i++) {

                if ( i >= 0 && i <= 3) {
                    if (
                        // title filter
                        (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                        ||
                        // if filter
                        (posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value))

                        ) {
                        sorted_filtered_posts_guides.push(posts_guides[i]);
                    };
                };

                console.log('sorted_filtered_posts_guides[i]');
                console.log(sorted_filtered_posts_guides[i]);
            };
        };


        //  FILTERED BY TITLE *sorted* stream
        let sorted_filtered_posts_guides_stream = [];
        if ((sorted_filtered_posts_guides_stream) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                    //if ( i >= 0 && i <= 3) {
                        if ( ((posts_guides[i].child) != null) && (posts_guides[i].child.toString() == 'stream')) {
                            if (
                                // title filter
                                (posts_guides[i].content.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                                ) {
                                sorted_filtered_posts_guides_stream.push(posts_guides[i]);
                            };
                        };
                    //};

                console.log('sorted_filtered_posts_guides_stream[i]');
                console.log(sorted_filtered_posts_guides_stream[i]);
            };
        };

        //  FILTERED BY TITLE *sorted* type
        let sorted_filtered_posts_guides_type = [];
        paginate = 0;
        if ((sorted_filtered_posts_guides_type) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    (paginate < (paginate_limit)
                        )
                    ) {
                    //if ( i >= 0 && i <= 3) {
                        if ((posts_guides[i].type) != null) {
                            if (
                                // title filter
                                (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                                ||
                                // if filter
                                (posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value))
                                &&
                                // if filter
                                (posts_guides[i].type.toString() == 'type')

                                ) {
                                sorted_filtered_posts_guides_type.push(posts_guides[i]);
                                paginate += 1;
                            };
                        };
                    //};
                };

                console.log('sorted_filtered_posts_guides_type[i]');
                console.log(sorted_filtered_posts_guides_type[i]);
            };
        };

        //  FILTERED BY TITLE *sorted* category
        let sorted_filtered_posts_guides_category = [];
        if ((sorted_filtered_posts_guides_category) != null) {
            for (var i = 0; i < posts_guides.length; i++) {

                if ( i >= 0 && i <= 3) {
                    if (
                        // title filter
                        (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                        ||
                        // if filter
                        (posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value))
                        &&
                        // if filter
                        (posts_guides[i].category.toString().includes('category'))

                        ) {
                        sorted_filtered_posts_guides_category.push(posts_guides[i]);
                    };
                };

                console.log('sorted_filtered_posts_guides_category[i]');
                console.log(sorted_filtered_posts_guides_category[i]);
            };
        };

        //  FILTERED BY TITLE *sorted*
        let sorted_filtered_posts_guides_hashtag = [];
        if ((sorted_filtered_posts_guides_hashtag) != null) {
            for (var i = 0; i < posts_guides.length; i++) {

                if ( i >= 0 && i <= 3) {
                    if (
                        // title filter
                        (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                        ||
                        // if filter
                        (posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value))
                        &&
                        // if filter
                        (posts_guides[i].hashtag.toString().includes('hashtag'))

                        ) {
                        sorted_filtered_posts_guides_hashtag.push(posts_guides[i]);
                    };
                };

                console.log('sorted_filtered_posts_guides_hashtag[i]');
                console.log(sorted_filtered_posts_guides_hashtag[i]);
            };
        };

        // render SORTED && FILTERED BY TITLE *sorted* post to view 
        fb_sorted_library(sorted_filtered_posts_guides, 'titledown').forEach(post => {
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

            document.getElementById('posts_filtered_sorted').appendChild(
                element
            );
        });

        // render SORTED && FILTERED BY TITLE *sorted* post to view 
        fb_sorted_library(sorted_filtered_posts_guides_stream, 'titledown').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left ${post.child}`
            element.innerHTML = `${post.id}${post.child}
            `
            element.addEventListener("click", function(event) {
                alert('posts_filtered_sorted_stream');
                //db_delete_user("users", post.id);
            });

            document.getElementById('posts_filtered_sorted_stream').appendChild(
                element
            );
        });

        // render SORTED && FILTERED BY TITLE *sorted* post to view 
        fb_sorted_library(sorted_filtered_posts_guides_type, 'titledown').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left ${post.sticky}`
            element.innerHTML = `${post.id}${post.type}
            `
            element.addEventListener("click", function(event) {
                alert('sorted_filtered_posts_guides_type');
                //db_delete_user("users", post.id);
            });

            document.getElementById('posts_filtered_sorted_type').appendChild(
                element
            );
        });

        // render SORTED && FILTERED BY TITLE *sorted* post to view 
        fb_sorted_library(sorted_filtered_posts_guides_category, 'titledown').forEach(post => {
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

            document.getElementById('posts_filtered_sorted_category').appendChild(
                element
            );
        });

        // render SORTED && FILTERED BY TITLE *sorted* post to view 
        fb_sorted_library(sorted_filtered_posts_guides_hashtag, 'titledown').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left ${post.sticky}`
            element.innerHTML = `${post.id}
            `
            element.addEventListener("click", function(event) {
                alert('delete post');
                db_delete_user("users", post.id);
            });

            document.getElementById('posts_filtered_sorted_hashtag').appendChild(
                element
            );
        });

        //  FILTERED BY TITLE *USER ONLY*
        let filtered_posts_guides_user_only = [];
        if ((filtered_posts_guides_user_only) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    // title filter
                    (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                    &&
                    // if filter
                    (posts_guides[i].child == 'user')

                    ) {
                    filtered_posts_guides_user_only.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides_user_only[i]');
                console.log(filtered_posts_guides_user_only[i]);
            };
        };


        //  FILTERED BY TITLE *USER ONLY*
        let filtered_posts_guides_posts_only = [];
        if ((filtered_posts_guides_posts_only) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    // title filter
                    (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                    &&
                    // if filter
                    (posts_guides[i].child == 'post')

                    ) {
                    filtered_posts_guides_posts_only.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides_posts_only[i]');
                console.log(filtered_posts_guides_posts_only[i]);
            };
        };


        //  FILTERED BY TITLE *USER ONLY*
        let filtered_posts_guides_posts_only_valid_user = [];
        if ((filtered_posts_guides_posts_only_valid_user) != null && valid_user.id != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    // title filter
                    (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                    &&
                    // if filter
                    (posts_guides[i].child == 'post')
                    &&
                    // if from valid user
                    (posts_guides[i].author_id == valid_user.id)

                    ) {
                    filtered_posts_guides_posts_only_valid_user.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides_posts_only_valid_user[i]');
                console.log(filtered_posts_guides_posts_only_valid_user[i]);
            };
        };


        // render SORTED post "user" to view 
        document.getElementById('posts_all_user_only').innerHTML = ``;
        fb_sorted_library(filtered_posts_guides_user_only, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `
                <div class="feat_img">
                    <div class="container"></div>
                </div>
                <h2>
                    user title: ${post.title}
                </h2>
                <p>
                    user id: ${post.id}
                </p>
                <p>
                    author_id: ${post.author_id}
                </p>
                <a href="https://antenuh.com/p/${post.id}">see post</a>
            `
            element.addEventListener("click", function(event) {
                //alert('view post');
                post_up = !post_up;
                get_classes();
            });

            document.getElementById('posts_all_user_only').appendChild(
                element
            );
        });


        // render SORTED post "post" to view 
        document.getElementById('posts_all_posts_only').innerHTML = ``;
        fb_sorted_library(filtered_posts_guides_posts_only, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `
                <div class="feat_img">
                    <div class="container"></div>
                </div>
                <h2>
                    posts title: ${post.title}
                </h2>
                <p>
                    posts id: ${post.id}
                </p>
                <p>
                    author_id: ${post.author_id}
                </p>
                <a href="https://antenuh.com/p/${post.id}">see post</a>
            `
            element.addEventListener("click", function(event) {
                //alert('view post');
                post_up = !post_up;
                get_classes();
            });

            document.getElementById('posts_all_posts_only').appendChild(
                element
            );
        });


        // render SORTED post "post" to view 
        document.getElementById('posts_all_posts_only_valid_user').innerHTML = ``;
        fb_sorted_library(filtered_posts_guides_posts_only_valid_user, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `
                <div class="feat_img">
                    <div class="container"></div>
                </div>
                <h2>
                    posts title: ${post.title}
                </h2>
                <p>
                    posts id: ${post.id}
                </p>
                <p>
                    author_id: ${post.author_id}
                </p>
                <a href="https://antenuh.com/p/${post.id}">see post</a>
            `
            element.addEventListener("click", function(event) {
                //alert('view post');
                post_up = !post_up;
                get_classes();
            });

            document.getElementById('posts_all_posts_only_valid_user').appendChild(
                element
            );
        });


        console.log('posts_guides');
        console.log(posts_guides);
    });
};

// create post
let db_create_post = () => {
    
    let date = new Date();
    const ref = db.collection('users').doc();
    const id = ref.id;
    if (upload_details == ``) {
        upload_details = `
            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1
        `
    };

    let create_title = document.getElementById('create_title');
    let create_tagline = document.getElementById('create_tagline');
    let create_content = document.getElementById('create_content');
    let create_youtube = document.getElementById('create_youtube');
    let create_twitch = document.getElementById('create_twitch');
    let create_twitter = document.getElementById('create_twitter');
    let create_spotify = document.getElementById('create_spotify');
    let create_instagram = document.getElementById('create_instagram');
    let create_vimeo = document.getElementById('create_vimeo');

    db.collection('users').doc(ref.id).set({
        title: create_title.value,
        tagline: create_tagline.value,
        type: create_type.value,
        category: create_category.value,
        sticky: create_sticky.value,
        hashtag: create_hashtag.value,
        child: 'post',
        content: create_content.value,
        photo: upload_details,
        youtube: create_youtube.value,
        twitch: create_twitch.value,
        twitter: create_twitter.value,
        spotify: create_spotify.value,
        instagram: create_instagram.value,
        vimeo: create_vimeo.value,
        comments: [],
        likes: 0,
        views: 0,
        time: date.getTime(),
        id: ref.id,
        author_id: stored_auth_user_cred.uid,
        email: stored_auth_user_cred.email,
    }).then(()=> {
        console.log('guide made');
        create_title.value = ``;
        create_tagline.value = ``;
        create_hashtag.value = ``;
        create_type.value = ``;
        create_category.value = ``;
        create_sticky.value = ``;
        create_content.value = ``;
        create_youtube.value = ``;
        create_vimeo.value = ``;
        create_twitch.value = ``;
        create_twitter.value = ``;
        create_instagram.value = ``;
        create_spotify.value = ``;

        just_made = `http://antenuh.com/p/${ref.id}`
        alert(just_made);

        get_db_guides();
    }).catch(err => {
        console.log(err.message)
    })
};

// create user
let db_create_user = (cred) => {

    let username = document.getElementById('user_username').value;
    // create user after auth
    db.collection('users').doc(cred.user.uid).set({
        id: cred.user.uid,
        email: cred.user.email,
        title: username,
        setting: {dark: state.ux.orientation.dark_view},
        child: 'user',

        tagline: '?',
        type: '?',
        category: '?',
        sticky: '?',
        hashtag: '?',
        content: '?',
        photo: upload_details_profile,
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
        console.log(cred);
        console.log(cred.user.uid);
        console.log(cred.user.email);
        console.log(cred.user.metadata.creationTime);
        console.log(cred.user.metadata.lastSignInTime);
        console.log(cred.additionalUserInfo.isNewUser);
        stored_auth_user_cred = cred;
        signup_email.value = ``;
        signup_password.value = ``;
        get_db_guides();

        just_made = `http://antenuh.com/${username}`
        alert(just_made);
    }).catch(err => {
        console.log(err.message)
    });
};

// create stream
let db_create_stream = (cred) => {

    const ref = db.collection('users').doc();
    const new_id = ref.id;

    let user_stream = document.getElementById('user_stream').value;
    // create user after auth
    db.collection('users').doc(new_id).set({
        id: new_id,
        author_id: cred,
        email: valid_user.email,
        child: 'stream',
        content: user_stream,
        title: user_stream

    }).then(()=> {
        get_db_guides();
        alert(user_stream);
    }).catch(err => {
        console.log(err.message)
    });
};

// update user
let db_update_user = (collection, deletable_id) => {
    
    console.log(deletable_id);

    if (upload_details_profile == ``) {
        upload_details_profile = `
            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1
        `
    };

    let date = new Date();

    db.collection(collection).doc(deletable_id).update({
        id: deletable_id,
        email: stored_auth_user_cred.email,
        photo: upload_details_profile,
        title: document.getElementById('user_title').value,
        youtube: document.getElementById('user_youtube').value,
        twitch: document.getElementById('user_twitch').value,
        twitter: document.getElementById('user_twitter').value,
        spotify: document.getElementById('user_spotify').value,
        instagram: document.getElementById('user_instagram').value,
        vimeo: document.getElementById('user_vimeo').value
    }).then(function() {
        document.getElementById('user_title').value = ``,
        document.getElementById('user_youtube').value = ``,
        document.getElementById('user_twitch').value = ``,
        document.getElementById('user_twitter').value = ``,
        document.getElementById('user_spotify').value = ``,
        document.getElementById('user_instagram').value = ``,
        document.getElementById('user_vimeo').value = ``,
        alert("Document successfully written!");
        get_db_guides();
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_post = (collection, deletable_id) => {
    
    //alert(db.collection(collection).doc(deletable_id).email);
    //alert(deletable_id);

    if (upload_details == ``) {
        upload_details = `
            https://firebasestorage.googleapis.com/v0/b/antenuh-9d2ca.appspot.com/o/sweet_gifs%2Fdownload.jpg?alt=media&token=4af1439e-7b46-4c97-8fae-3b10f6c0a8e1
        `
    };

    let date = new Date();
    let new_title = document.getElementById('edit_post_title').value;
    let new_tagline = document.getElementById('edit_post_tagline').value;
    let new_content = document.getElementById('edit_post_content').value;
    let new_video = document.getElementById('edit_post_video').value;
    let new_likes = document.getElementById('edit_post_likes').value;
    let new_views = document.getElementById('edit_post_views').value;
    
    //alert('post: ' + detail.id);
    //alert('new_title: ' + new_title);
    //alert('new_tagline: ' + new_tagline);

    db.collection(collection).doc(deletable_id).set({
        id: deletable_id,
        email: valid_user.email,
        title: new_title,
        tagline: new_tagline,
        child: 'post',
        content: new_content,
        photo: upload_details,
        video: new_video,
        likes: new_likes,
        views: new_views,
        time: date.getTime(),
        author_id: valid_user.id,

    }).then(function() {
        document.getElementById('edit_post_title').value = ``,
        document.getElementById('edit_post_tagline').value = ``,
        document.getElementById('edit_post_content').value = ``,
        document.getElementById('edit_post_likes').value = ``,
        document.getElementById('edit_post_views').value = ``,
        document.getElementById('edit_post_video').value = ``,
        //alert("db_update_post Document successfully written!, post");
        get_db_guides();
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_dark_mode = (collection, deletable_id) => {

    db.collection("users").doc(deletable_id).update({setting: {dark:state.ux.orientation.dark_view} }).then(function() {
        //alert("db_update_post_views Document successfully written!, post");

        get_db_guides();
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_post_views = (collection, deletable_id) => {

    let detail;
    for (var i = 0; i < posts_guides.length; i++) {
       
       console.log(posts_guides[i]);

        if (posts_guides[i].id == deletable_id) {
               detail = posts_guides[i]
        };

    };

    let increaseThis = detail.views;
    //parseInt(post_views);
    increaseThis += 1;

    db.collection("users").doc(deletable_id).update({views: increaseThis}).then(function() {
        //alert("db_update_post_views Document successfully written!, post");

        get_db_guides();
        document.getElementById('post_views').innerHTML = increaseThis;
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_author_views = (collection, deletable_id) => {

    let detail;
    for (var i = 0; i < posts_guides.length; i++) {
       
       console.log(posts_guides[i]);

        if (posts_guides[i].id == deletable_id) {
               detail = posts_guides[i]
        };

    };

    let increaseThis = detail.views;
    //parseInt(post_views);
    increaseThis += 1;

    db.collection("users").doc(deletable_id).update({views: increaseThis}).then(function() {
        //alert("db_update_post_views Document successfully written!, post");

        //get_db_guides();
        //document.getElementById('post_views').innerHTML = increaseThis;
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_post_likes = (collection, deletable_id) => {

    let detail;
    for (var i = 0; i < posts_guides.length; i++) {
       
       console.log(posts_guides[i]);

        if (posts_guides[i].id == deletable_id) {
               detail = posts_guides[i]
        };

    };

    let increaseThis = detail.likes;
    //parseInt(post_views);
    increaseThis += 1;

    db.collection("users").doc(deletable_id).update({likes: increaseThis}).then(function() {
        //alert("increaseThis");
        get_db_guides();
        document.getElementById('post_likes').innerHTML = increaseThis;
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_author_likes = (collection, deletable_id) => {

    let detail;
    for (var i = 0; i < posts_guides.length; i++) {
       
       console.log(posts_guides[i]);

        if (posts_guides[i].id == deletable_id) {
               detail = posts_guides[i]
        };

    };

    let increaseThis = detail.likes;
    //parseInt(post_views);
    increaseThis += 1;

    db.collection("users").doc(deletable_id).update({likes: increaseThis}).then(function() {
        //alert("increaseThis");
        //get_db_guides();
        //document.getElementById('post_likes').innerHTML = increaseThis;
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_comments = (collection, deletable_id) => {

    let detail;

    for (var i = 0; i < posts_guides.length; i++) {
        console.log(posts_guides[i]);
        if (posts_guides[i].id == deletable_id) {
               detail = posts_guides[i]
        };
    };

    let comments = detail.comments;
    let new_comment = {
        content: document.getElementById('comment_input').value
    };

    comments.push(new_comment);

    db.collection("users").doc(deletable_id).update({comments: comments}).then(function() {
        document.getElementById('comment_input').value = '';
        get_db_guides();

    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_update_subs = (collection, deletable_id, subingto) => {

    let detail;

    for (var i = 0; i < posts_guides.length; i++) {
        console.log(posts_guides[i]);
        if (posts_guides[i].id == deletable_id) {
               detail = posts_guides[i]
        };
    };

    let subs = detail.subs;
    let new_sub = {
        subingto
    };

    subs.push(new_sub);

    db.collection("users").doc(deletable_id).update({subs: subs}).then(function() {
        document.getElementById('sub_input').value = '';
        get_db_guides();

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

let get_classes = () => {
    let class_this = document.getElementById('root');
    if (post_up == true) {
        class_this.classList += " post_up"
    };

    if (post_up == false) {
        class_this.classList -= " post_up"
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
    console.log('resize');
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

    ui_check();
};

let shot_action_preloader = () => {

    let preloader = document.getElementById('preloader');
    preloader.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `preloader_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div class=" width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_preloader" class="width_0 height_0 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        </div>
    `
    element.addEventListener("click", function(event) {
        alert('shots yup');
    });

    document.getElementById('preloader').appendChild(
        element
    );

    // shots_character_1 loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_preloader') != null) {

                    // loading

                    if (interval == 1) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_1 position_absolute margin_auto ');
                    };

                    if (interval == 2) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_2 position_absolute margin_auto ');
                    };

                    if (interval == 3) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_3 position_absolute margin_auto ');
                    };

                    if (interval == 4) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loading_4 position_absolute margin_auto ');
                    };

                    // loaded

                    if (interval == 5) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_1 position_absolute margin_auto ');
                    };

                    if (interval == 6) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_2 position_absolute margin_auto ');
                    };

                    if (interval == 7) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_3 position_absolute margin_auto ');
                    };

                    if (interval == 8) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_text_loaded_4 position_absolute margin_auto ');
                    };

                    // face

                    if (interval == 9) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto ');
                    };

                    if (interval == 10) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_2 position_absolute margin_auto ');
                    };

                    if (interval == 11) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_3 position_absolute margin_auto ');
                    };

                    if (interval == 12) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_4 position_absolute margin_auto ');
                    };

                    // logo

                    if (interval == 13) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto ');
                    };

                    if (interval == 14) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_2 position_absolute margin_auto ');
                    };

                    if (interval == 15) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_3 position_absolute margin_auto ');
                    };

                    if (interval == 16) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_logo_type_4 position_absolute margin_auto ');
                    };

                    // blink

                    if (interval == 17) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto ');
                    };

                    if (interval == 18) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_2 position_absolute margin_auto ');
                    };

                    if (interval == 19) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_3 position_absolute margin_auto ');
                    };

                    if (interval == 20) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_4 position_absolute margin_auto ');
                    };

                    // vomit

                    if (interval == 21) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto ');
                    };

                    if (interval == 22) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_2 position_absolute margin_auto ');
                    };

                    if (interval == 23) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_3 position_absolute margin_auto ');
                    };

                    if (interval == 24) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_4 position_absolute margin_auto ');
                    };

                    if (interval == 25) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_5 position_absolute margin_auto ');
                    };

                    if (interval == 26) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_6 position_absolute margin_auto ');
                    };

                    // wall

                    if (interval == 27) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_1 position_absolute margin_auto ');
                    };

                    if (interval == 28) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_2 position_absolute margin_auto ');
                    };

                    if (interval == 29) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_3 position_absolute margin_auto ');
                    };

                    if (interval == 30) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_wall_4 position_absolute margin_auto ');
                    };
                
                    // buttons

                    if (interval == 31) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_start position_absolute margin_auto ');
                    };

                    if (interval == 32) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_or position_absolute margin_auto ');
                    };

                    if (interval == 33) {
                        document.getElementById('shot_action_preloader').classList = (' width_0 height_0 top_0 right_0 bottom_0 left_0 gui_buttons_learn position_absolute margin_auto ');
                    };

                    interval += 1;
                };

                
                if (interval == 34) {
                    document.getElementById('shot_action_preloader').classList = (' ');
                    state.data.has_loaded = true;
                    clearInterval(play);
                };
                

            }, (1000 / 12));

            play;
    })();
};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    get_dimensions();
    handle_update();
};

let check_for_auth_after_load = () => {

    console.log('load');
    //state.data.has_loaded = true;

    let auth_buffer = .5;
    setTimeout(function () {
        body.scrollTo(0, 0);
    }, 0);
    handle_time();

    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                
                if (interval > (24 * auth_buffer) ) {

                    // proceed after firebase auth check && state.data.has_loaded
                    if ((auth_has_been_checked == true) && (state.data.has_loaded == true)) {
                        handle_if_AUTH_ACT_2();
                        clearInterval(play)
                    };
                };

                console.log('check_for_auth_after_load: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let modal_reset = () => {
    state.modal.pop.top.transform = false;
    state.modal.pop.left.transform = false;
    state.modal.pop.right.transform = false;
    state.modal.pop.bottom.transform = false;
        
    set.innerHTML = `
    `
    scene.innerHTML = `
    `

    sequence_back_home();
};

let check_local_user = () => {

    // if returning user
    if (localStorage.user == 'new_unlogged' && localStorage.user_id == 'xxx') {
        
        if (dev_mode) {
        checkmark += 1;
            alert(checkmark + '/6) welcome back new user, handle_INITIAL_LOOP, if returning user');
        };

        //act_3();
    };

    // if returning new unlogged user
    if (localStorage.user == 'new_unlogged' && localStorage.user_id == 'xxx') {
        
        if (dev_mode) {
        checkmark += 1;
            alert(checkmark + '/6) welcome: ' + localStorage.user + ' , handle_INITIAL_LOOP, if returning new unlogged user');
        };

        //act_3();
    };

    // if returning unlogged user
    if (localStorage.user == 'unlogged_user' && localStorage.user_id != 'xxx') {
        
        if (dev_mode) {
        checkmark += 1;
            alert(checkmark + '/6) welcome: ' + localStorage.user + ' , handle_INITIAL_LOOP, if returning unlogged user');
        };

        //act_3();
    };

    // if returning logged user
    if (localStorage.user == 'logged_user' && localStorage.user_id != 'xxx') {
        
        if (dev_mode) {
        checkmark += 1;
            alert(checkmark + '/6) welcome: ' + localStorage.user + ' , handle_INITIAL_LOOP, if returning logged user');
        };

        //act_3();
    };

    // if first timer
    if (localStorage.user == null) {
        
        if (dev_mode) {
            alert(checkmark + '/6) welcome first timer, handle_INITIAL_LOOP, if first timer');
        };

        localStorage.setItem("user", "new_unlogged");
        localStorage.setItem("user_id", "xxx");
        
        //act_3();
    };


    state.data.onload_time = state.data.time;
};

// inital
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded');
    handle_play_DOMContentLoaded();

    if (dev_mode) {
        checkmark += 1;
        alert(checkmark + '/6 (handle_play_DOMContentLoaded)');
    };
});

window.addEventListener("load", (event) => {
    check_for_auth_after_load();

    if (dev_mode) {
        checkmark += 1;
        alert(checkmark + '/6 (window.addEventListener("load")');
    };
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

    state.events.motion.orientation_string = state.ux.screen.orientation;
    console.log('state.ux.screen.orientation');
    console.log(state.ux.screen.orientation);
});

window.addEventListener("beforeunload", (event) => {
});

export default {
    handle_ReturnState,
    modal_reset,
    check_ui_after_auth,
    get_db_guides,
    game_start,
    game_end
}