
// Imports
import style from './style.scss';
import imported_state from './imports/state';

// Initalization

let root;
let state;
let config
let fb_writeable
let fb_response

let is_Desktop;
let is_Mobile;

let is_Landscape;
let is_Portrait;

let Generate_new_fragment;
let Generate_new_div;
let Generate_new_li;
let Generate_new_post;
let Generate_validated_user;

let handle_UI
let handle_Accents;
let handle_Events;
let handle_Values;
let handle_Render;
let handle_Modals;
let handle_Time;
let handle_Function_Mouse_Move;
let handle_Function_Key_Press;
let handle_Function_Touch_Move;
let handle_Function_Scroll;
let handle_Hooks;
let handle_Motion;

let handle_Route;
let handle_URL;
let handle_ID;

// Assignment
fb_writeable = false;
fb_response = {};

// Initialization
config = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382"
};

let site_first_load = true;
let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;

is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
is_Landscape = (window.innerHeight < window.innerWidth);
is_Portrait = (window.innerHeight > window.innerWidth);
state = imported_state.default_state;

// Targets
root = document.getElementById('root');

// placeholder data
let noise_frame = 0;
let chracter_frame = 0;

// Functions
firebase.initializeApp(config);

let default_user = {
    "username" : "null_local_user",
    "password" : "xxx",
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg"
};

let validated_user = {};
let validated_user_data = {};

let is_logged = false;
let first_time_user = true;

// Create
let addListings = (child) => {
    
    if (validated_user.id != null) {
        
        var current_second = new Date().getTime() / 1000;
        let default_item;

        if (child == 'library') {
            default_item = {
                child : "library",
                id : 0,
                username : "null_post",
                password : "xxx",
                title : document.getElementById('create_post_title').value,
                tags : [document.getElementById('create_post_tag').value],
                time: current_second,
                authors : [ ""+`${validated_user.id}`+"" ]
            };
        };

        if (child == 'roster') {
            default_item = {
                child : "roster",
                id : 0,
                username : document.getElementById('create_user_username').value,
                password : document.getElementById('create_user_password').value,
                title : document.getElementById('create_post_title').value,
                tags : [document.getElementById('create_post_tag').value],
                time: current_second,
                authors : [ ""+`${validated_user.id}`+"" ]
            };
        };
        
        // Firebase References
        // Firebase Database
        const rootRef = firebase.database().ref();
        const gnougnRef = rootRef.child('gnougn');
        const Ref = gnougnRef.child('library');

        // update key of added object
        Ref.push(default_item).then((snap) => {
            const key = snap.key;
            console.log('from addListing' + key);
            // update created item with snap.key
            Ref.child(key).update({
                id: key
            });

            // Set firebase data
            setTimeout(function() {
                handle_refresh_fire_data();
            }, 0);

        });

    };

    document.getElementById('create_post_title').value = ``;
    document.getElementById('create_post_tag').value = ``;
    document.getElementById('create_user_username').value = ``;
    document.getElementById('create_user_password').value = ``;

};

let filtered_library_by_title;

// Handles

Generate_new_fragment = document.createDocumentFragment();

Generate_new_div = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('div');
    ELEMENT.setAttribute("id", id_String);

    if (class_String) {
        ELEMENT.classList = class_String;
    };

    if (class_String) {
        ELEMENT.classList = class_String;
    };
                        
    if ((data_Object) != null) {

        ELEMENT.innerHTML = `
            ${data_Object}
        `;
    };

    return ELEMENT
};

Generate_new_li = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", id_String);

    if (class_String) {
        ELEMENT.classList = class_String;
    };

    if (class_String) {
        ELEMENT.classList = class_String;
    };
                        
    if ((data_Object) != null) {

        ELEMENT.innerHTML = `
            ${data_Object}
        `;
    };

    return ELEMENT
};

Generate_new_post = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('div');
    ELEMENT.setAttribute("id", id_String);

    ELEMENT.classList = "position_relative float_left calc_2vw_width border_1vw_grey bg_white ";
                        
    if ((data_Object) != null) {

        if (data_Object.child == 'library') {

                if (data_Object.title) {
                    ELEMENT.innerHTML += `
                            
                        <div id="post_component" class="position_relative float_right height_20vw width_100 easing_01 easing_01">
                            
                            <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post stats
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_green">
                                <div class="position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey">
                                    <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                            </div>

                            <div class="hover_show position_absolute top_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post interaction
                                </div>
                            </div>

                        </div>

                    `;
                };

                if (data_Object.title) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                title: ${data_Object.title}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                time: ${data_Object.time}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                <div>Like/Dislike</div>
                                <div>Comment</div>
                                <div>Rate</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>Delete</div>
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                Post Authors:
                            </div>
                    `;
                };


                ELEMENT.addEventListener("click", function(event) {

                    document.getElementById('modal_page_left_container').innerHTML = ``;
                    document.getElementById('modal_page_left_container').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div'))
                    );

                    state.ui.modal.page.left.transform = false;
                    handle_UI();
                });

        };

        if (data_Object.child == 'roster') {

                if (data_Object.username) {
                    ELEMENT.innerHTML += `
                            
                        <div id="post_component" class="position_relative float_right height_20vw width_100 easing_01 easing_01">
                            
                            <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post stats
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_blue">
                                <div class="position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey">
                                    <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                            </div>

                            <div class="hover_show position_absolute top_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post interaction
                                </div>
                            </div>

                        </div>
                    `;
                };
                
                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Roster:
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        IDS:
                    </div>
                    `
                };

                if (data_Object.id) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        id: ${data_Object.id}
                    </div>
                    `
                };

                if (data_Object.username) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        username: ${data_Object.username}
                    </div>
                    `
                };
                    
                if (data_Object.password) {
                        ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            password: ${data_Object.password}
                        </div>
                    `
                };
                    
                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        values:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total follows:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total followers:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total retweeted:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total retweet:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total likes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total liked:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total dislikes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total disliked:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total flags:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total flagged:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total views:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total viewed:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        post count:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total comments made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total comments recieved:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total replys made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total replys recieved:
                    </div>

                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total message made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total message recieved:
                    </div>

                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total stream messages made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total stream messages recieved:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        total time logged:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        last login:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        sign up date:
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `
                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        history:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history follows:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history followers:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history flypaper:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history flyer:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history likes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history dislikes:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history flags:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history views:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of post made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of comments made:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of stream messages:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of stream mentions:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of views:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of logins:
                    </div>
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        history of logouts:
                    </div>
                    `
                };



                if (data_Object.time) {
                        ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        time: ${data_Object.time}
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Interactions:
                    </div>
                    `
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Like/Dislike</div>
                            <div>Comment</div>
                            <div>Rate</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>Delete</div>
                        </div>
                    `;
                };
                
                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Relative:
                    </div>
                    `
                };

                if (data_Object.password) {
                        ELEMENT.innerHTML += `

                    <div id="post_component" class="font_size_5vw width_100 float_left position_relative display opacity_1">
                        Similars:
                    </div>
                    `
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>by tags of your post (as a creator):</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>by tags of your views (as a viewer):</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar time logged on site:</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar followers on site:</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar comments made on site:</div>
                        </div>
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Similar comments received on site:</div>
                        </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                        <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                            <div>Post from author:</div>
                        </div>
                    `;
                };

                ELEMENT.addEventListener("click", function(event) {

                    document.getElementById('modal_page_right_container').innerHTML = ``;
                    document.getElementById('modal_page_right_container').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div'))
                    );

                    state.ui.modal.page.right.transform = false;
                    handle_UI();
                });
        };
        
    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].addEventListener("click", function(event) {
        alert(data_Object);
    });


    let CONTAINER_ELEMENT = document.createElement('li');
    CONTAINER_ELEMENT.setAttribute("id", id_String);

    CONTAINER_ELEMENT.classList = "position_relative float_left width_33flex";

    CONTAINER_ELEMENT.appendChild(Generate_new_fragment.appendChild(ELEMENT));

    return CONTAINER_ELEMENT
};

Generate_validated_user = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", id_String);

    ELEMENT.classList = "width_100 float_left position_relative";

    if ((data_Object) != null) {

            if (data_Object.username) {
                ELEMENT.innerHTML += `

                <div id="post_component" class="position_relative float_right height_10vw width_100 easing_01 easing_01">
                    
                    <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                        <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                        </div>
                    </div>

                    <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                        <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        </div>
                    </div>

                </div>

                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                    username: ${data_Object.username}
                </div>
                `
            };
                
            if (data_Object.password) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        password: ${data_Object.password}
                    </div>
                `
            };
                
            if (data_Object.time) {
                    ELEMENT.innerHTML += `
                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                    time: ${data_Object.time}
                </div>
                `
            };

                ELEMENT.appendChild(
                    Generate_new_fragment.appendChild(Generate_test())
                );
    };


    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].addEventListener("click", function(event) {
        alert(data_Object);
    });

    return ELEMENT
};

let Generate_test = () => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", 'Generate_test');

    ELEMENT.classList = "width_100 float_left position_relative";
    
    ELEMENT.innerHTML = "test";

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.addEventListener("click", function(event) {
        alert("Generate_test");
    });

    return ELEMENT
};

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
                    return Math.abs(a.time - b.time);
                }
            };

    };

    if (mode == 'titleup') {

            if (mode == 'titleup') {
                return function(a, b) {
                    return b.title - a.title
                }
            };

    };

    if (mode == 'titledown') {
            
            if (mode == 'titledown') {
                return function(a, b) {
                    return a.title - b.title
                }
            };

    };

};

let handle_empty_list = () => {

    filtered_library_by_title = [];

    if ((document.getElementById('element_ol_firebase_all')) != null) {
        document.getElementById('element_ol_firebase_all').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_all_library')) != null) {
        document.getElementById('element_ol_firebase_all_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_all_users')) != null) {
        document.getElementById('element_ol_firebase_all_users').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_validated_user')) != null) {
        document.getElementById('element_ol_firebase_validated_user').innerHTML = '';
    };

};

let handle_refresh_fire_data = () => {
    
    handle_empty_list();

    let rootRef = firebase.database().ref();
    let gnougnRef = rootRef.child('gnougn');
    let wordpressRef = gnougnRef.child('wordpress');

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

let check_local_user = () => {

        console.log(window);
        console.log(screen);
        console.log(screen.height);
        console.log(screen.width);
        console.log(navigator);
        console.log(history);
        console.log(history.length);
        console.log(location);
        console.log(location.pathname);
        console.log(localStorage);

    if (localStorage.user == null) {

        //alert('welcome ' + 'new user!');

        localStorage.setItem("user", default_user);
        localStorage.setItem("username", default_user.username);
        localStorage.setItem("password", default_user.password);
        localStorage.setItem("signed_in", "false");
        is_logged = localStorage.signed_in;
        first_time_user = true;

        console.log(localStorage.user);
        console.log('localStorage.user.username');
        console.log(localStorage.user.username);
        console.log('localStorage.user.password');
        console.log(localStorage.user.password);

        //alert('welcome new user!');

        return
    };

    // or from login
    if (localStorage.user != null) {

        first_time_user = false;
        //alert('welcome ' + 'returning user: ' + localStorage.username + '!');

        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

            if ((state.data.firebase.gnougn.library[i].child == "roster")) {

                // local user matched
                if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username == "null_local_user")) {
                    //alert('welcome back, create an account');
                };

                // local user matched
                if ((state.data.firebase.gnougn.library[i].username ) == (localStorage.username) && (localStorage.username != "null_local_user")) {
                    //alert('user matches local');


                    //alert('is_logged: ' + is_logged);
                    //alert('localStorage.signed_in: ' + localStorage.signed_in);

                    if (localStorage.signed_in == "true") {
                        //alert(state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', sign this back in');

                        if (state.data.firebase.gnougn.library[i].password == localStorage.password) {
                            
                            validated_user = state.data.firebase.gnougn.library[i];
                            //alert('password match');
                            //alert('signing in: ' + validated_user.id + ', ' + validated_user.username);                            
                            //alert('validated_user id: ' + validated_user.id);
                            is_logged = true;
                        }
                    };

                    if (localStorage.signed_in == "false") {
                        //alert('offer to sign: ' + state.data.firebase.gnougn.library[i].username + ' or ' + localStorage.username + ', back in!')
                    };

                };



            };

        };

        return
    };

};

let sorted_library = (x) => {  return filtered_library_by_title.sort(find_sort(x)) };

let handle_firebase_render_to_view = () => {
    // render library
    (() => {


        setTimeout(function() {

            if ((firebase_has_responsed_with_this_updated_data) != null) {

                //  filter by title
                if ((filtered_library_by_title) != null) {
                    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
                        if ((state.data.firebase.gnougn.library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                            filtered_library_by_title.push(state.data.firebase.gnougn.library[i]);
                        };
                        console.log('filtered_library_by_title[i]');
                        console.log(filtered_library_by_title[i]);
                    };
                };

                // render sort
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    document.getElementById('element_ol_firebase_all').appendChild(
                            Generate_new_fragment.appendChild(
                            Generate_new_post(filtered_library_by_title[i])
                            )
                        );

                };

                // filtered library
                for (var i = 0; i < filtered_library_by_title.length; i++) {

                    if (filtered_library_by_title[i].child == 'library') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_library').appendChild(
                            Generate_new_fragment.appendChild(
                            Generate_new_post(filtered_library_by_title[i])
                            )
                        );
                    };
                };

                // filtered roster
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {

                    if (sorted_library(state.data.sort)[i].child == 'roster') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_users').appendChild(
                            Generate_new_fragment.appendChild(
                            Generate_new_post(sorted_library(state.data.sort)[i])
                            )
                        );
                    };
                };

                if (validated_user.id != null) {
                    document.getElementById('element_ol_firebase_validated_user').appendChild(
                        Generate_new_fragment.appendChild(
                            Generate_validated_user(validated_user)
                        )
                    );
                };

                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user').innerHTML = `please sign in`
                };

                //alert('filter library')

            };

        }, 0);

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

                console.clear();
                //clearInterval(handle_repeated_fire_data_validation);

                setTimeout(function() {
                    handle_firebase_render_to_view();
                    //console.clear();
                    //alert('contected!');
                }, 0);

                if (site_first_load == true) {
                    //Handle_check_route('/home');
                    site_first_load = false;
                    check_local_user();


                    alert('first_time_user: ' + first_time_user);
                    alert('is_logged: ' + is_logged);

                    handle_URL();
                    handle_ID();
                };

                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);

let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

    // Function Check # 1
    (function() {
        if (Ui_State == true) {
            function_one_if_state_true(id_tag);
        }

        if (Ui_State == false) {
            function_two_if_state_false(id_tag);
        }
    })();
};

let Toggle_classes_IF_State = (addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) => {

    let MANIPULATED = document.getElementById(id_Tag);

    if (MANIPULATED != null) {

        if (Ui_State == true) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

                // remove item after buffer
                setTimeout(function() {

                    MANIPULATED.classList.remove(addThisClass_if_state_false);
                    MANIPULATED.classList.add(addThisClass_if_state_true);

                }, 1);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 1);

                return;
            };
        };

    };
};

let Toggle_display_and_opacity_on_with_no_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 100);

            return;
        };
    };
};

let Toggle_display_and_opacity_off_with_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 100);

            return;
        };
    };
};

let Handle_display_with_delay = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            Toggle_functions_IF_State(Toggle_display_and_opacity_on_with_no_delay, Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

let Handle_transform = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

let components;

handle_UI = () => {

	components = [

	    {
	        component: 'fold_timeout',
	        component_state_transform: state.ui.gui.fold.timeout.transform,
	        component_state_transform_true: 'transform_translate3d_top_100',
	        component_state_transform_false: 'transform_translate3d_top0',
	        component_state_display: state.ui.gui.fold.timeout.display,
	        // component_state_opacity:  state.ui.gui.fold.timeout.opacity
	    },

        {
            component: 'modal_nav_top',
            component_state_transform: state.ui.modal.nav.top.transform,
            component_state_transform_true: 'transform_translate3d_top_100',
            component_state_transform_false: 'transform_translate3d_top0',
            component_state_display: state.ui.modal.nav.top.display,
            // component_state_opacity:  state.ui.modal.nav.top.opacity
        },
        {
            component: 'modal_nav_left',
            component_state_transform: state.ui.modal.nav.left.transform,
            component_state_transform_true: 'transform_translate3d_left_100',
            component_state_transform_false: 'transform_translate3d_left0',
            component_state_display: state.ui.modal.nav.left.display,
            // component_state_opacity:  state.ui.modal.nav.left.opacity
        },
        {
            component: 'modal_nav_bottom',
            component_state_transform: state.ui.modal.nav.bottom.transform,
            component_state_transform_true: 'transform_translate3d_top100',
            component_state_transform_false: 'transform_translate3d_top0',
            component_state_display: state.ui.modal.nav.bottom.display,
            // component_state_opacity:  state.ui.modal.nav.bottom.opacity
        },
        {
            component: 'modal_nav_right',
            component_state_transform: state.ui.modal.nav.right.transform,
            component_state_transform_true: 'transform_translate3d_left100',
            component_state_transform_false: 'transform_translate3d_left0',
            component_state_display: state.ui.modal.nav.right.display,
            // component_state_opacity:  state.ui.modal.nav.right.opacity
        },
        {
            component: 'modal_page_top',
            component_state_transform: state.ui.modal.page.top.transform,
            component_state_transform_true: 'transform_translate3d_top_100',
            component_state_transform_false: 'transform_translate3d_top0',
            component_state_display: state.ui.modal.page.top.display,
            // component_state_opacity:  state.ui.modal.page.top.opacity
        },
        {
            component: 'modal_page_left',
            component_state_transform: state.ui.modal.page.left.transform,
            component_state_transform_true: 'transform_translate3d_left_100',
            component_state_transform_false: 'transform_translate3d_left0',
            component_state_display: state.ui.modal.page.left.display,
            // component_state_opacity:  state.ui.modal.page.left.opacity
        },
        {
            component: 'modal_page_bottom',
            component_state_transform: state.ui.modal.page.bottom.transform,
            component_state_transform_true: 'transform_translate3d_top100',
            component_state_transform_false: 'transform_translate3d_top0',
            component_state_display: state.ui.modal.page.bottom.display,
            // component_state_opacity:  state.ui.modal.page.bottom.opacity
        },
        {
            component: 'modal_page_right',
            component_state_transform: state.ui.modal.page.right.transform,
            component_state_transform_true: 'transform_translate3d_left100',
            component_state_transform_false: 'transform_translate3d_left0',
            component_state_display: state.ui.modal.page.right.display,
            // component_state_opacity:  state.ui.modal.page.right.opacity
        }
	];

	Handle_display_with_delay();
	Handle_transform();

	if (document.getElementById('character') != null) {
	    document.getElementById('character').innerHTML = '';

        if (state.ui.interaction.player_1.angle == 'left') {
    		document.getElementById('character').classList = ('gui_character_left_'+chracter_frame+ ' position_absolute margin_auto width_100 height_100 ');
        };

        if (state.ui.interaction.player_1.angle == 'right') {
            document.getElementById('character').classList = ('gui_character_right_'+chracter_frame+ ' position_absolute margin_auto width_100 height_100 ');
        };

	    if (chracter_frame == 4) {
	        chracter_frame = 0;
	    };

	    chracter_frame += 1;
	};

	if (document.getElementById('enemy') != null) {
	    document.getElementById('enemy').innerHTML = '';
		document.getElementById('enemy').classList = ('gui_character_'+chracter_frame+ ' position_absolute margin_auto width_100 height_100 ');

	    if (chracter_frame == 4) {
	        chracter_frame = 0;
	    };

	    chracter_frame += 1;
	};

    if (document.getElementById('container_character') != null) {
        let container_character = document.getElementById('container_character');
        container_character.style =
            'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.ui.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
    };
    
    // enemy
    if (document.getElementById('container_enemy') != null) {
        let container_enemy = document.getElementById('container_enemy');
        container_enemy.style =
            'height: ' + (state.ui.interaction.player_2.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.player_2.width * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.ui.interaction.player_2.clientY * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.player_2.clientX * (state.ux.dimensions.width8)) + 'px;';
    };
        //stage
        // vr
        if (document.getElementById('vr_mg') != null) {
            document.getElementById('vr_mg').style = "transform: translate3d(" +
                (state.ui.interaction.vr.clientX * 100) + "%, " +
                (state.ui.interaction.vr.clientY * 100) + "%, 0);"
        };

        // gui
        if (document.getElementById('component_app_interaction_hands') != null) {
            let component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
            component_app_interaction_hands.style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;' +
                'bottom: ' + 0 + 'px;' +
                'left: ' + (state.events.mouse.drop.clientX) + 'px;';
        };

        if (document.getElementById('bounce') != null) {
            document.getElementById('bounce').style =
                'top: ' + (state.ui.interaction.bounce.yaxis * (state.ux.dimensions.height8)) + 'px; \
            left: ' + (state.ui.interaction.bounce.xaxis * (state.ux.dimensions.width8)) + 'px ;';
        };
        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.mouse.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.mouse.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };
        


};

handle_Accents = () => {
	if (document.getElementById('row_accent_noise') != null) {
	    document.getElementById('row_accent_noise').innerHTML = '';
		document.getElementById('row_accent_noise').classList = ('accent_noise_'+noise_frame+ ' position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 ');
	    if (noise_frame == 4) {
	        noise_frame = 0;
	    };
	    noise_frame += 1;
	};
};

handle_Function_Scroll = (event) => {
	if (event) {

	    state.events.scroll.history.push({event});
	    console.log('state.events.scroll.history');
	    console.log(state.events.scroll.history);

	    //alert(window.scrollY);
        //alert(window.scrollX);
        console.log('window.scrollY: ' + window.scrollY);
        console.log('window.scrollX: ' + window.scrollX);
        console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
        console.log('document.documentElement.clientHeight: ' + document.documentElement.clientHeight);
        console.log('document.documentElement.scrollLeft: ' + document.documentElement.scrollLeft);
        console.log('document.documentElement.scrollTop: ' + document.documentElement.scrollTop);
        console.log('document.documentElement.scrollWidth: ' + document.documentElement.scrollWidth);
        console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight);
        console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollTop);
	};
    handle_Values();
    handle_Render();
};

handle_Function_Mouse_Move = (event) => {
	if (event) {
	    console.log(event.clientX);
	    console.log(event.clientY);
	    state.events.mouse.history.push([{clientX: event.clientX, clientY: event.clientY}]);
	    console.log('state.events.mouse.history');
	    console.log(state.events.mouse.history);
	};
    handle_Values();
    handle_Render();
};

handle_Function_Key_Press = (event) => {
	if (event) {
	    //alert(event.keyCode);
	    state.events.key.history.push([{keyCode: event.keyCode}]);
	    console.log('state.events.key.history');
	    console.log(state.events.key.history);

        if (event.keyCode == 13) {
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
        };

        if (event.keyCode == 16) {
            //alert('shift');
            state.ui.interaction.player_1.clientX += 1;
            state.ui.interaction.player_1.clientY += 1;
            state.ui.gui.fold.timeout.transform = !state.ui.gui.fold.timeout.transform;
            state.ui.gui.fold.timeout.display = !state.ui.gui.fold.timeout.display;

            state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
            state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;

            state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
            state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
            state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        };

        if (event.keyCode == 27) {

            alert('state.app.url: about -> back_home' + state.app.url);
            state.app.url = 'back_home';
            alert('state.app.url: about -> back_home' + state.app.url);
            handle_Route();

            state.ui.gui.fold.timeout.transform = true;
            state.ui.gui.fold.timeout.display = false;

            state.ui.modal.nav.right.transform = true;
            state.ui.modal.nav.left.transform = true;
            state.ui.modal.nav.top.transform = true;
            state.ui.modal.nav.bottom.transform = true;

            state.ui.modal.page.right.transform = true;
            state.ui.modal.page.left.transform = true;
            state.ui.modal.page.top.transform = true;
            state.ui.modal.page.bottom.transform = true;
        };

        if (event.keyCode == 37) {
            //alert('shift');
            state.ui.interaction.player_1.angle = 'left'
            state.ui.interaction.player_1.clientX -= (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 38) {
            //alert('shift');
            state.ui.interaction.player_1.clientY -= (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 39) {
            //alert('shift');
            state.ui.interaction.player_1.angle = 'right'
            state.ui.interaction.player_1.clientX += (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 40) {
            //alert('shift');
            state.ui.interaction.player_1.clientY += (1/8);
            event.preventDefault();
        };

        if (event.keyCode == 87) {
            //alert('shift');
            state.ui.interaction.vr.clientY += 1;
        };

        if (event.keyCode == 83) {
            //alert('shift');
            state.ui.interaction.vr.clientY -= 1;
        };

        if (event.keyCode == 68) {
            //alert('shift');
            state.ui.interaction.vr.clientX += 1;
        };

        if (event.keyCode == 65) {
            //alert('shift');
            state.ui.interaction.vr.clientX -= 1;
        };

        //command
        if (event.keyCode == 91) {

        };

        //space
        if (event.keyCode == 32) {

        };

        //command
        if (event.keyCode == 93) {

        };

        //option
        if (event.keyCode == 18) {

        };

	};

    handle_UI();
    handle_Values();
    handle_Render();
};

handle_Function_Touch_Move = (event) => {
	if (event) {
	    console.log(event.touches[0].clientX);
	    console.log(event.touches[0].clientY);
        state.events.touch.history.push({force: event.touches[0].force, clientY: event.touches[0].clientY, clientX: event.touches[0].clientX});
        state.events.touch.touches = event.touches.length;
	    console.log('state.events.touch.history');
	    console.log(state.events.touch.history);
	};
    handle_Values();
    handle_Render();
};

handle_Time = () => {
    setInterval(function() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date();
        state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
	    if ((document.getElementById('time')) != null ) {
	        document.getElementById('time').innerHTML = state.data.time;
	    };
    }, 1000);
};

// adding events
handle_Events = () => {
	// Desktop
    if (is_Desktop) {
        window.addEventListener('scroll', (event) => {
        	handle_Function_Scroll(event);
        });
		root.addEventListener('mousemove', (event) => {
		    handle_Function_Mouse_Move(event);
		});
		/*
		root.addEventListener('keypress', (event) => {
		    handle_Function_Key_Press(event);
		});
		*/
		root.addEventListener('keydown', (event) => {
		    handle_Function_Key_Press(event);
		});
	};
	// Mobile
    if (is_Mobile) {
        window.addEventListener('scroll', (event) => {
        	handle_Function_Scroll(event);
        });
        root.addEventListener('touchmove', (event) => {
		    handle_Function_Touch_Move(event);
        });
    };
};

// get platform values
handle_Values = () => {
    is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
    is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
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

handle_Modals = () => {
    // setting divs

    if (document.getElementById('component_app_modals') != null) {
        document.getElementById('component_app_modals').innerHTML = ``;
        
        let content;

        content = `

            <div id="modal_page_top" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_top0 easing_01">
               <div id="modal_page_top_container" class="width_100 height_100 float_left position_relative bg_white">
               </div>
            </div>
            <div id="modal_page_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_top0 easing_01">
               <div id="modal_page_bottom_container" class="width_100 height_100 float_left position_relative bg_white">
               </div>
            </div>
            <div id="modal_page_left" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_left0 easing_01">
               <div id="modal_page_left_container" class="width_100 height_100 float_left position_relative bg_white">
               </div>
            </div>
            <div id="modal_page_right" class="z_index_6 width_100vw float_left position_fixed bottom_0 left_0 right_0 height_100vh transform_translate3d_left0 easing_01">
               <div id="modal_page_right_container" class="width_100 height_100 float_left position_relative bg_white">
               </div>
            </div>

            <div id="modal_nav_top" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top0 easing_01">
               <div id="modal_nav_top_container" class="">
               </div>
               <div id="hover_item_top" class="position_relative float_left height_100 width_6025 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="row-logo-type" class="">
                        </div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_house_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div class="gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div class="gui_link_home_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_1205 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
               <div id="hover_item_top_0" class="position_relative float_left height_100 width_6025 easing_01">
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div class="gui_link_dots_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>
                  <div class="hover_show position_fixed top_6025vw left_0 height_1205vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey bg_pink">
                     </div>
                  </div>
               </div>
            </div>
            <div id="modal_nav_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top0 easing_01">
               <div id="modal_nav_bottom_container" class="">
               </div>
               <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_close_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_min_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item_bottom_0" class="position_relative float_left height_100 width_20 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item_bottom" class="position_relative float_left height_100 width_20 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_fixed bottom_6025vw left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
            </div>
            <div id="modal_nav_left" class="z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left0 easing_01">
               <div id="modal_nav_left_container" class="">
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
            </div>
            <div id="modal_nav_right" class="z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left0 easing_01">
               <div id="modal_nav_right_container" class="">
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
               <div id="hover_item" class="position_relative float_left height_20 width_100 easing_01">
                  
                  <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        <div id="bg-character" class="gui_link_max_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                     </div>
                  </div>

                  <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100vw">
                     <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                     </div>
                  </div>
               </div>
            </div>

        `

        document.getElementById('component_app_modals').appendChild(
            Generate_new_fragment.appendChild(Generate_new_div(content, "modal_nav", "position_fixed top_0 left_0"))
        );

        // filter by title
        setTimeout(function() {
            if (document.getElementById('hover_item_top') != null) {
                document.getElementById('hover_item_top').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.app.dark_mode = !state.app.dark_mode;
                        alert(state.app.dark_mode);
                        handle_UI();
                    }, 0);

                });
            };

            if (document.getElementById('hover_item_bottom') != null) {
                document.getElementById('hover_item_bottom').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.app.dark_mode = !state.app.dark_mode;
                        alert(state.app.dark_mode);
                        handle_UI();
                    }, 0);

                });
            };
            

            if (document.getElementById('row-logo-type') != null) {
                document.getElementById('row-logo-type').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.app.dark_mode = !state.app.dark_mode;
                        console.log(state.app.dark_mode);
                        handle_UI();
                    }, 0);

                });
            };

            if (document.getElementById('row-toggle') != null) {
                document.getElementById('row-toggle').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
                        handle_UI();
                    }, 0);

                });
            };
        }, 101);


    };

};

// render values to route div
handle_Render = () => {

    if ((document.getElementById('is_Desktop')) != null ) {
        document.getElementById('is_Desktop').innerHTML = is_Desktop;
    };
    if ((document.getElementById('is_Mobile')) != null ) {
        document.getElementById('is_Mobile').innerHTML = is_Mobile;
    };
    if ((document.getElementById('history_scroll')) != null ) {
        document.getElementById('history_scroll').innerHTML = state.events.scroll.history;
   	};
    if ((document.getElementById('history_mouse')) != null ) {
        document.getElementById('history_mouse').innerHTML = state.events.mouse.history;
   	};
    if ((document.getElementById('history_key')) != null ) {
        document.getElementById('history_key').innerHTML = state.events.key.history;
   	};
    if ((document.getElementById('history_touch')) != null ) {
        document.getElementById('history_touch').innerHTML = state.events.touch.history;
   	};
    if ((document.getElementById('current_frame_motion')) != null ) {
        document.getElementById('current_frame_motion').innerHTML = state.motion.frame;
   	};
    if ((document.getElementById('current_duration')) != null ) {
        document.getElementById('current_duration').innerHTML = state.motion.duration;
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

    if ((document.getElementById('interaction_character_clientX')) != null ) {
        document.getElementById('interaction_character_clientX').innerHTML = state.ui.interaction.player_1.clientX;
   	};

    if ((document.getElementById('interaction_character_clientY')) != null ) {
        document.getElementById('interaction_character_clientY').innerHTML = state.ui.interaction.player_1.clientY;
   	};

};

// home, user or post/page
handle_URL = () => {
    console.log(location);
    console.log(location.pathname);
    var parts = location.pathname.split('/');

    //alert(parts[1]);
    //alert(parts[2]);

    // if no url
    if (parts[1] == '' || parts[1] == null ) {
        state.app.url = '/';
        //alert('url == /');
    };

    // if any url besides read or about -- assume this is a user page
    if (parts[1] != '' && parts[1] != '/' && (parts[1] != 'read' || parts[1] != 'about') ) {
        state.app.url = parts[1];
        //alert('url != read');

        for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
            if ((state.data.firebase.gnougn.library[i].username ) == parts[1]) {
                alert('user: ' + parts[1]);

                //fill div with user data
                if ( (parts[1] != ('read')) || (parts[1] != ('about')) ) {
                    alert('user page: ' + state.app.url);
                    document.getElementById('fold_user_page').innerHTML = `
                        <div id="fold_user_page_link">${state.app.url}</div>
                    `
                    document.getElementById('fold_user_page_link').addEventListener("click", function(event) {
                        alert("fold_user_page_link");
                    });
                };

            };
        };

    };

    // if url read
    if (parts[1] == 'read' ) {
        state.app.url = 'read';
        //alert('url == read');
    };

    // if url about
    if (parts[1] == 'about' ) {
        state.app.url = 'about';
        //alert('url == read');
    };
};

// user id or page id
handle_ID = () => {
    console.log(location);
    console.log(location.pathname);
    var parts = location.pathname.split('/');
    if (parts[1] != null) {
        if (parts[1] != null) {
            //state.app.url = parts[1];
            //alert('url:' + parts[1]);
            if (parts[2] != null) {
                //alert('id: ' + parts[2])
                state.app.id = parts[2];

			    if (parts[1] == ('read') ) {
	                state.app.id = parts[2];
	                //alert('read id: ' + state.app.id);
			    };

                for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {
                    if ((state.data.firebase.gnougn.library[i].id ) == parts[2]) {
                        alert('post page: ' + state.app.id);
                        document.getElementById('fold_post_page').innerHTML = `
                            <div id="fold_post_page_link">${state.app.id}</div>
                        `
                        document.getElementById('fold_post_page_link').addEventListener("click", function(event) {
                            alert("fold_post_page_link");
                        });

                    };
                };			    
            };

            if (parts[2] == null) {
			    if (parts[1] == ('read') ) {
	                alert('no read id');
			    };
            };
        };
    };
};

// adding events
handle_Hooks = () => {
	window.onresize = () => {
		handle_Values();
	};
};

handle_Motion = () => {

	// framerate loop
    (function() {
        let interval = 0;
        setInterval(
            function() {
          		
          		handle_UI();

                console.log('current frame is: ' + interval);

                if (interval == (state.motion.framerate * 0) ) {
                    console.log('0 seconds have passed.')
                };

                if (interval == (state.motion.framerate * 10) ) {
                    console.log('10 seconds have passed.')
                };

                if 	(
                	(state.ui.interaction.player_1.clientX == state.ui.interaction.player_2.clientX)
                	&&
                	(state.ui.interaction.player_1.clientY == state.ui.interaction.player_2.clientY)
                	) {
                	//alert('game over');
                };

                interval += 1;

                state.motion.frame = interval;
                console.log('state.motion.frame: ' + state.motion.frame);

            }, (1000 / state.motion.framerate));
    }());

    // 12 fps
    (function() {
        let interval = 0;
        setInterval(
            function() {

          		handle_Accents();

            }, (1000 / 12));
    }());

    // 1 sec loop
    (function() {
        let interval = 0;
        setInterval(
            function() {

                state.motion.duration ++;
                console.log('duration: ' + state.motion.duration);

                // automation
                if (state.ui.interaction.player_2.clientX == 0) {
	                state.ui.interaction.player_2.clientX_auto = true;
		        };

                if (state.ui.interaction.player_2.clientX == 7) {
	                state.ui.interaction.player_2.clientX_auto = false;
		        };
		        
                if (state.ui.interaction.player_2.clientY == 0) {
	                state.ui.interaction.player_2.clientY_auto = true;
		        };

                if (state.ui.interaction.player_2.clientY == 7) {
	                state.ui.interaction.player_2.clientY_auto = false;
		        };

		        // motion
                if (state.ui.interaction.player_2.clientX_auto == true) {
	                state.ui.interaction.player_2.clientX += 1;
		        };

                if (state.ui.interaction.player_2.clientX_auto == false) {
	                state.ui.interaction.player_2.clientX -= 1;
		        };

                if (state.ui.interaction.player_2.clientY_auto == true) {
	                state.ui.interaction.player_2.clientY += 1;
		        };

                if (state.ui.interaction.player_2.clientY_auto == false) {
	                state.ui.interaction.player_2.clientY -= 1;
		        };

            }, (1000));
    }());

};

let HANDLE_looping_logo_mark = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (1) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };

                        interval = 0;
                    };

                interval += 1;

            }, (1000 / 12));
    }());

};

let HANDLE_looping_logo_mark_type = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {
                    if (interval == (1) ) {        
                        if (document.getElementById('row_logo_mark_type') != null) {
                                document.getElementById('row_logo_mark_type').classList = (`
                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row_logo_mark_type') != null) {
                                document.getElementById('row_logo_mark_type').classList = (`
                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row_logo_mark_type') != null) {
                                document.getElementById('row_logo_mark_type').classList = (`
                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row_logo_mark_type') != null) {
                                document.getElementById('row_logo_mark_type').classList = (`
                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };

                        interval = 0;
                    };

                interval += 1;

            }, (1000 / 12));
    }());

};

let HANDLE_looping_logo_type = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {
                    if (interval == (1) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-type') != null) {
                                document.getElementById('row-logo-type').classList = (`
                                    gui_logo_white_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto `);
                        };

                        interval = 0;
                    };

                interval += 1;

            }, (1000 / 12));
    }());

};

// null, loading, loaded, home, user, post, page
handle_Route = () => {
    (() => {
        if (state.app.url == '/') {
            root.innerHTML = `
                /
            `
            setTimeout( () => {
                state.app.url = '/loading';
                handle_Route(state.app.url);
            }, 0);
		    handle_Hooks();
		    handle_Events();
		    handle_Motion();	    

        };
        if (state.app.url == '/loading') {

            root.innerHTML = `

                <div id="cardboard" class="width_100 height_100 position_fixed float_left">

	                <div class="position_absolute width_100 height_100 top_0 left_0">
		                <div id="loading_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_33 height_33"></div>
	                </div>
	                loading
                </div>
            `
            setTimeout( () => {
                state.app.url = '/loaded';
                handle_Route(state.app.url);
            }, 1000);
        };
        if (state.app.url == '/loaded') {
            root.innerHTML = `
                
                <div id="cardboard" class="width_100 height_100 position_fixed float_left">

	                <div class="position_absolute width_100 height_100 top_0 left_0">
		                <div id="loading_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 margin_auto width_33 height_33"></div>
	                </div>
	                loaded
                </div>
            `
            setTimeout( () => {
                state.app.url = '/home';
                handle_Route(state.app.url);
            }, 1000);
        };
        if (state.app.url == '/home') {
			
            alert('home')
            // inital firebase check
            handle_refresh_fire_data();
            handle_repeated_fire_data_validation;

            root.innerHTML = `

                <div id="cardboard" class="width_100 height_100 position_fixed float_left">

	                <div bg="vr_bg" class="opacity_005">
                        <div id="row_accent_noise"></div>
                    </div>

                    <div id="vr_mg" class="transform_translate3d_top0 easing_01 position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">
                    </div>

                    <div id="vr_fg" class="">

                    </div>

                    <div id="vr_interaction" class="">
                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div id="row-logo-mark-type_filler"></div>
                            
                            <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1_filler"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="scrollable" class="width_100 position_relative float_left">

	                <div id="fold" class="width_100 height_100 position_relative float_left">

                        <div id="fold_timeout" class="width_100 height_100 position_absolute transform_translate3d_top0 float_left">
                        </div>

                        <div id="fold_routing" class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark_filler"></div>
                            <div id="row_logo_mark_type" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            
                            <div class=" position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1" class="gui_interaction_button_1 position_absolute bottom_0 left_0 width_100 height_100 margin_auto"></div>
                            </div>
                        </div>

                        <div id="fold_interaction" class="">
                        </div>

                        <div id="fold_user_page">
                        </div>

                        <div id="fold_post_page">
                        </div>

	                </div>
	             
	                <h1>Platform</h1>
	                <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
	                <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
	                <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
	                <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
	                <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
	                <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
	                <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
	                <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

	                <h1>Game State</h1>
	                <div id="signal">interaction_character_clientX: <div id="interaction_character_clientX"></div></div>
	                <div id="signal">interaction_character_clientY: <div id="interaction_character_clientY"></div></div>

	                <h1>UI State</h1>
	                <div id="signal">nav_top: <div id="nav_top"></div></div>

	                <h1>Route</h1>
	                <div id="home">home</div>

	                <h1>Time</h1>
	                <div id="signal">time: <div id="time"></div></div>
	                <div id="signal">time_onload: <div id="time_onload"></div></div>

	                <h1>motion</h1>
	                <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
	                <div id="signal">current_duration: <div id="current_duration"></div></div>

	                <h1>Scroll</h1>
	                <h2>Scrolling root</h2>
	                <div id="signal">history_scroll: <div id="history_scroll"></div></div>

	                <h1>Mouse</h1>
	                <h2>Mousemove</h2>
	                <div id="signal">history_mouse: <div id="history_mouse"></div></div>

	                <h1>Key</h1>
	                <h2>Keypress</h2>
	                <div id="signal">history_key: <div id="history_key"></div></div>

	                <h1>Touch</h1>
	                <h2>Touches</h2>
	                <div id="signal">history_touch: <div id="history_touch"></div></div>

	                <h1>Orientation</h1>
	                <h2>Gravity</h2>
	                <div id="signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
	                <div id="signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
	                <div id="signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

	                <h2>VR</h2>
	                <div id="signal">last_action: <div id="last_action"></div></div>

	                <h2>Positions</h2>
	                <div id="signal">event_alpha: <div id="event_alpha"></div></div>
	                <div id="signal">event_beta: <div id="event_beta"></div></div>
	                <div id="signal">event_gamma: <div id="event_gamma"></div></div>

	                <h2>Pos of device</h2>
	                <div id="signal">event_portrait: <div id="event_portrait"></div></div>
	                <div id="signal">event_landscape: <div id="event_landscape"></div></div>

	                <h2>Orientations</h2>
	                <div id="signal">event_orientation: <div id="event_orientation"></div></div>
                    <div id="bg_gradient" class="position_relative width_100vw height_100vh float_left margin_auto gradient_white_top"></div>
                    <div id="bg" class="position_relative width_100vw height_100vh float_left margin_auto bg_white"></div>

                    <h1>Blog</h1>

                    <h2>Filtering</h2>
                    <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />

                    <h2>Login</h2>
                    <input id="element_login_username" type="text" placeholder="element_login_username" class="width_100 float_left" />
                    <input id="element_login_password" type="text" placeholder="element_login_password" class="width_100 float_left" />

                    <h2>Create User</h2>
                    <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" />
                    <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" />

                    <h2>Create Post</h2>
                    <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" />
                    <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" />

                    <h2>Buttons</h2>
                    <div id="element_refresh">refresh</div>
                    <div id="element_login">login</div>
                    <div id="element_logout">logout</div>
                    <div id="element_addListing">element_addListing</div>
                    <div id="element_addRoster">element_addRoster</div>

                    <h2>Post: All</h2>
                    <div id="element_ol_firebase_all" class="position_relative width_100vw float_left margin_auto bg_white"></div>
                    <h2>Post: Library</h2>
                    <div id="element_ol_firebase_all_library" class="position_relative width_100vw float_left margin_auto bg_white"></div>
                    <h2>Post: Roster</h2>
                    <div id="element_ol_firebase_all_users" class="position_relative width_100vw float_left margin_auto bg_white"></div>
                    <h2>Post: Logged In User</h2>
                    <div id="element_ol_firebase_validated_user" class="position_relative width_100vw float_left margin_auto bg_white"></div>
        
                </div>

                <div id="component_app_modals"></div>
            `

            // add events
            // clickable
            if (document.getElementById('home') != null) {
                document.getElementById('home').addEventListener("click", function(event) {
                    alert("home");
                });
            };

            // control fold & vr
            if (document.getElementById('gui_interaction_button_1') != null) {
                document.getElementById('gui_interaction_button_1').addEventListener('click', (event) => {
                    alert("gui_interaction_button_1");
                    state.app.url = 'about';
                    handle_Route();
                });
            };

            // filter by title
            if (document.getElementById('element_input_sort') != null) {
                document.getElementById('element_input_sort').addEventListener('keydown', (event) => {
                    // filter library
                    setTimeout(function() {
                        state.data.sort = document.getElementById('element_input_sort').value
                    }, 0);
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
            if (document.getElementById('element_refresh') != null) {
                document.getElementById('element_refresh').addEventListener('click', (event) => {
                    // filter library
                    setTimeout(function() {
                        handle_refresh_fire_data();
                    }, 0);
                });
            };

            // filter by title
            if (document.getElementById('element_login') != null) {
                document.getElementById('element_login').addEventListener('click', (event) => {
                    
                    let selected_username = (document.getElementById('element_login_username').value);
                    let selected_password = (document.getElementById('element_login_password').value);


                    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

                        // local user matched
                        if ((state.data.firebase.gnougn.library[i].username ) == selected_username) {
                            
                            if ((state.data.firebase.gnougn.library[i].password ) == selected_password) {
                                //alert('logging in: ' + selected_username + selected_password);

                                localStorage.setItem("username", selected_username);
                                localStorage.setItem("password", selected_password);

                                localStorage.setItem("signed_in", "true");
                            };

                            if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                                //alert('not logging in: ' + selected_username + selected_password);

                                localStorage.setItem("username", "null_local_user");
                                localStorage.setItem("password", "xxx");

                                localStorage.setItem("signed_in", "false");
                            };

                        };

                    };

                    check_local_user();

                });
            };

            // filter by title
            if (document.getElementById('element_logout') != null) {
                document.getElementById('element_logout').addEventListener('click', (event) => {
                    
                    //alert('logging out');

                    let selected_username = (document.getElementById('element_login_username').value);
                    let selected_password = (document.getElementById('element_login_password').value);

                    localStorage.setItem("username", localStorage.username);
                    localStorage.setItem("password", "xxx");

                    localStorage.setItem("signed_in", "false");
                    validated_user = {};

                    check_local_user();

                });
            };

            // filter by title
            if (document.getElementById('element_addListing') != null) {
                document.getElementById('element_addListing').addEventListener('click', (event) => {
                    addListings('library');
                });
            };

            // create
            if (document.getElementById('element_addRoster') != null) {
                document.getElementById('element_addRoster').addEventListener('click', (event) => {
                    addListings('roster');
                });
            };

            // fill in modals
            handle_Modals();

            // start animations
            HANDLE_looping_logo_type();
            HANDLE_looping_logo_mark();
            HANDLE_looping_logo_mark_type();
        };

        if (state.app.url == 'about') {
			alert('about');

                    if (document.getElementById('fold_routing') != null) {
                        document.getElementById('fold_routing').innerHTML = ``
                    };

                    if (document.getElementById('vr_bg') != null) {
                        document.getElementById('vr_bg').innerHTML = ``
                    };

                    if (document.getElementById('vr_mg_center') != null) {
                        document.getElementById('vr_mg_center').innerHTML = ``
                    };

                    if (document.getElementById('vr_fg') != null) {
                        document.getElementById('vr_fg').innerHTML = `

                            <div id="container_enemy" class="position_absolute">
                                <div id="enemy" class="gui_character"></div>
                            </div>

                            <div id="container_character" class="position_absolute easing_01">
                                <div id="character" class="gui_character"></div>
                            </div>
                        `
                    };

                    if (document.getElementById('vr_mg') != null) {
                        document.getElementById('vr_mg').innerHTML = `

                           <div id="column1" class="position_relative float_left width_100vw height_100vh easing_01">
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing1 Left Top
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Left Center
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Left Bottom
                              </div>
                           </div>
                           <div id="column1" class="position_relative float_left width_100vw height_100vh">
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing1 Center Top
                              </div>
                              <div id="vr_mg_center" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                    <div id="container_object" class="position_absolute bottom_0 left_1205vw width_33vw height_33vh">
                                       <div id="object" class="gui_stage_tv width_100 height_100"></div>
                                    </div>
                                    <div id="container_object" class="position_absolute top_0 right_0 left_0 width_33vw height_33vh">
                                       <div id="object" class="gui_stage_lights width_100 height_100"></div>
                                    </div>
                                    <div id="container_object" class="position_absolute bottom_0 right_1205vw width_33vw height_33vh">
                                       <div id="object" class="gui_stage_desk width_100 height_100"></div>
                                    </div>
                                 </div>
                                 landing2 Center Mid
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Center Bottom
                              </div>
                           </div>
                           <div id="column1" class="position_relative float_left width_100vw height_100vh">
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing1 Right Top
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Right Mid
                              </div>
                              <div class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                                 <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                                 </div>
                                 landing2 Right Bottom
                              </div>
                           </div>

                        `
                    };

                    if (document.getElementById('vr_interaction') != null) {
                        document.getElementById('vr_interaction').innerHTML = `

                        <div class="position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto">
                            <div id="row-logo-mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto"></div>
                            <div id="row-logo-mark-type_filler"></div>
                            
                            <div class="position_absolute top_100 left_0 right_0 height_33vh width_33vw margin_auto">
                                <div id="gui_interaction_button_1_filler"></div>
                            </div>
                        </div>
                    `
                    };

                    if (document.getElementById('fold_interaction') != null) {
                        document.getElementById('fold_interaction').innerHTML = `

                            <div id="element_scroll_y_scrollbar_styled" class="position_absolute bottom_0 left_0 width_25vw height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                                <div class="position_relative width_100 float_left">

                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_100 height_25vw margin_auto"></div>

                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 float_left width_100 height_25vw display_flex_flow">
                                <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                                    <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                    
                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>


                                    <div id="bg-character" class="gui_character_1 position_relative width_50vw height_25vw margin_auto"></div>

                                    </div>
                                </div>
                            </div>
                        `
                    };
        };
        
        if (state.app.url == 'back_home') {
                    alert('back_home');

                    if (document.getElementById('fold_routing') != null) {
                        document.getElementById('fold_routing').innerHTML = ``
                    };

                    if (document.getElementById('vr_bg') != null) {
                        document.getElementById('vr_bg').innerHTML = ``
                    };

                    if (document.getElementById('vr_mg_center') != null) {
                        document.getElementById('vr_mg_center').innerHTML = ``
                    };

                    if (document.getElementById('vr_fg') != null) {
                        document.getElementById('vr_fg').innerHTML = ``
                    };

                    if (document.getElementById('vr_mg') != null) {
                        document.getElementById('vr_mg').innerHTML = ``
                    };

                    if (document.getElementById('vr_interaction') != null) {
                        document.getElementById('vr_interaction').innerHTML = ``
                    };

                    if (document.getElementById('fold_interaction') != null) {
                        document.getElementById('fold_interaction').innerHTML = ``
                    };
        };

    })();
    handle_Values();
    handle_Render();

	if ((document.getElementById('time_onload')) != null ) {
        document.getElementById('time_onload').innerHTML = state.data.time;
    };
    
    // back to fold for page change
    window.scrollTo(0, 0);


};

window.onload = () => {
    alert('sword');
	handle_Time();
	state.app.url = '/';
    handle_Route();
};

window.onresize = () => {
    console.log('state.ux.dimensions.width: ' + state.ux.dimensions.width);
    console.log('state.ux.dimensions.height: ' + state.ux.dimensions.height);
    console.log('state.ux.dimensions.width8: ' + state.ux.dimensions.width8);
    console.log('state.ux.dimensions.height8: ' + state.ux.dimensions.height8);
};

window.ondevicemotion = function(event) {
    let event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
    let event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
    let event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;
    if ((document.getElementById('event_accelerationIncludingGravity_x')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;
        if (event.accelerationIncludingGravity.x > 8) {
            document.getElementById('last_action').innerHTML = 'shook right';
        };
        if (event.accelerationIncludingGravity.x < -8) {
            document.getElementById('last_action').innerHTML = 'shook left';
        };
    };

    if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;
        if (event.accelerationIncludingGravity.y > 8) {
            document.getElementById('last_action').innerHTML = 'upside down';
        };
        if (event.accelerationIncludingGravity.y < -8) {
            document.getElementById('last_action').innerHTML = 'rightside up';
        };
    };

    if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;
        if (event.accelerationIncludingGravity.z > 8) {
            document.getElementById('last_action').innerHTML = 'overhead';
        };
        if (event.accelerationIncludingGravity.z < -8) {
            document.getElementById('last_action').innerHTML = 'laid flat';
        };
    };
};

window.ondeviceorientation = function(event) {
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

console.log(state);
imported_state.from_Import();