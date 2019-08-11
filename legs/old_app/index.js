
// Imports
import style from './style.scss';
import default_state from './imports/state';
import functions from './imports/functions';
import events from './imports/events';

// Initialization
let config = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382"
};

let gen_Div = (id, classname, data) => {

    let element = document.createElement('div');

    if (id != null) {
      element.setAttribute("id",id);
    };

    if (id != null) {
      if (classname) {
          element.classList = classname;
      };
    };
                        
    if ((data) != null) {
        element.innerHTML = `
            ${data}
        `;
    };

    return element
};

let state;
let dev;
let buffer;
let load_buffer;
let root;
let header;
let footer;
let ui;
let sequence_Load;
let handle_add_element_events;
let handle_add_platform_events;
let handle_ReturnedState_fromEvents;

let fb_writable;
let fb_response;
let fb_refresh;
let fb_validation;
let fb_inital_load;
let fb_render;

let wp_writable;
let wp_json;
let wp_refresh;

let fb_library = [];
let wp_library = [];

let wp_filtered_library_by_title = [];

let firebase_filtered_library_by_title = [];
let sorted_library_by_time_up = [];

let load_bar_container = document.getElementById('load_bar_container');
let load_bar_container_border = document.getElementById('load_bar_container_border');
let load_bar_container_size = document.getElementById('load_bar_container_size');
let footer_top = document.getElementById('footer_top');
let footer_bottom = document.getElementById('footer_bottom');
let footer_left = document.getElementById('footer_left');
let footer_right = document.getElementById('footer_right');

let handle_ReturnState = () => {
    return state
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

let sorted_library = (x) => {  return firebase_filtered_library_by_title.sort(find_sort(x)) };

// assignment
state = default_state.default_state;
dev = false;
buffer = document.getElementById('buffer');
load_buffer = document.getElementById('load_buffer');
root = document.getElementById('root');
header = document.getElementById('header');
footer = document.getElementById('footer');

// Functions
firebase.initializeApp(config);
fb_writable = false;
fb_response = {};
fb_refresh = () => {

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
fb_render = () => {
    // render library
    (() => {

        setTimeout(function() {

            //handle_empty_list();
            document.getElementById('wp_library_ol').innerHTML = ``;
            document.getElementById('fb_library_ol').innerHTML = ``;
            document.getElementById('filtered_library_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_library_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_roster_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_interaction_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_activity_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_messages_by_title_ol').innerHTML = ``;
            document.getElementById('filtered_library_child_stream_by_title_ol').innerHTML = ``;
            document.getElementById('sorted_library_by_time_up_ol').innerHTML = ``;
            document.getElementById('filtered_wp_library_by_title_ol').innerHTML = ``;

            wp_library = [];
            fb_library = [];
            wp_filtered_library_by_title = [];
            firebase_filtered_library_by_title = [];
            sorted_library_by_time_up = [];

            if ((fb_response) != null) {

                // create array
                if ((document.getElementById('wp_library_ol')) != null) {
                    for (var i = 0; i < state.data.wordpress.length; i++) {
                        wp_library.push(state.data.wordpress[i]);
                    };
                    // render array
                    for (var i = 0; i < wp_library.length; i++) {
                        document.getElementById('wp_library_ol').appendChild(functions.Generate_new_wp_li_post(wp_library[i])
                        );
                    };
                };

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
                if ((document.getElementById('filtered_wp_library_by_title_ol')) != null) {

                    for (var i = 0; i < wp_library.length; i++) {
                        if ((wp_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                            wp_filtered_library_by_title.push(wp_library[i]);
                        };
                        console.log('wp_filtered_library_by_title[i]');
                        console.log(wp_filtered_library_by_title[i]);
                    };
                };

                    // render array
                    for (var i = 0; i < wp_filtered_library_by_title.length; i++) {
                        document.getElementById('filtered_wp_library_by_title_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(wp_filtered_library_by_title[i])
                            )
                        );
                    };

                // create array
                if ((document.getElementById('filtered_library_by_title_ol')) != null) {

                    for (var i = 0; i < fb_library.length; i++) {
                        if ((fb_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                            firebase_filtered_library_by_title.push(fb_library[i]);
                        };
                        console.log('firebase_filtered_library_by_title[i]');
                        console.log(firebase_filtered_library_by_title[i]);
                    };
                };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        document.getElementById('filtered_library_by_title_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                            )
                        );
                    };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        if (firebase_filtered_library_by_title[i].child == 'roster') {
                            document.getElementById('filtered_library_child_roster_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        if (firebase_filtered_library_by_title[i].child == 'interaction') {
                            document.getElementById('filtered_library_child_interaction_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        if (firebase_filtered_library_by_title[i].child == 'activity') {
                            document.getElementById('filtered_library_child_activity_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        if (firebase_filtered_library_by_title[i].child == 'messages') {
                            document.getElementById('filtered_library_child_messages_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        if (firebase_filtered_library_by_title[i].child == 'stream') {
                            document.getElementById('filtered_library_child_stream_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                    // render array
                    for (var i = 0; i < firebase_filtered_library_by_title.length; i++) {
                        if (firebase_filtered_library_by_title[i].child == 'library') {
                            document.getElementById('filtered_library_child_library_by_title_ol').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(firebase_filtered_library_by_title[i])
                                )
                            );
                        };
                    };

                // create array
                for (var i = 0; i < sorted_library('timeup').length; i++) {
                    sorted_library_by_time_up.push(sorted_library('timeup')[i]);
                };

                    // render array
                    for (var i = 0; i < sorted_library_by_time_up.length; i++) {
                        document.getElementById('sorted_library_by_time_up_ol').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(sorted_library_by_time_up[i])
                            )
                        );
                    };

            };

        }, 0);

    })();
};
fb_validation = setInterval( () => {

    if (fb_writable == true && wp_writable == true) {

        fb_response = state.data.firebase;

        // target "gnougn" library
        if ((fb_response.gnougn.library) != null) {
            
            // "stops" setInterval
            fb_writable = false;
            wp_writable = false;
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
fb_inital_load = true;

wp_writable = false;
wp_json = function(url, callback) {
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
wp_refresh = () => {
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

ui = () => {

    if (load_buffer != null) {
        load_buffer.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (buffer != null) {
        buffer.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (root != null) {
        root.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (footer != null) {
        footer.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

};

if (dev) {
    console.log('index.js');
};

sequence_Load = () => {

    state.data.route += 1;

    console.log(state.data.route);
    if (state.data.route == 1) {
        
        // fill with firebase data
        fb_refresh();
        wp_refresh();
        fb_validation;
        ui();

        console.log('1) preload fb');
        console.log('2) fb validated');
        console.log('3) preload login check');
        console.log('4) set modals to validated user data');
        console.log('8) add events');
        console.log('9) load bar leaves');

        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_1205 height_1vw float_left easing_1`
        
        /* see "fb_validation"
        setTimeout(() => {
            sequence_Load();
        }, 1000);
        */
    };

    if (state.data.route == 2) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_25 height_1vw float_left easing_1`
        
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 3) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_3705 height_1vw float_left easing_1`
        
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 4) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_50 height_1vw float_left easing_1`
        
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 5) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_6205 height_1vw float_left easing_1`
        
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 6) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_75 height_1vw float_left easing_1`
        
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 7) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_8705 height_1vw float_left easing_1`
        
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 8) {
        load_bar_container_border.classList = `easing_01 position_relative margin_auto width_100 height_1vw float_left easing_1`
        
        // add events
        handle_add_element_events();
        handle_add_platform_events();

        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

    if (state.data.route == 9) {
        load_bar_container.classList = `animated1 leaveBottom position_fixed bottom_0 margin_auto width_100 height_1vw float_left z_index_1`

        setTimeout(() => {
            sequence_Load();
        }, 1000);
    };

    if (state.data.route == 10) {
        //buffer.classList = `display_none position_relative float_left width_100vw height_100 bg_white`

        load_buffer.classList = `display_none position_relative float_left width_100vw height_100 bg_white`

        setTimeout(() => {
            sequence_Load();
        }, 1000);
    };

    if (state.data.route == 11) {
        //footer_top.classList = `position_absolute bg_grey float_left height_1vw width_100 top_0 left_0 right_0 margin_auto z_index_2`
        //footer_bottom.classList = `position_absolute bg_grey float_left height_1vw width_100 bottom_0 left_0 right_0 margin_auto z_index_2`
        //footer_left.classList = `position_absolute bg_grey float_left width_1vw height_100 top_0 left_0 margin_auto z_index_2`
        //footer_right.classList = `position_absolute bg_grey float_left width_1vw height_100 bottom_0 right_0 margin_auto z_index_2`
        
        //load_bar_container_size.classList = `position_relative margin_auto width_100 height_1vh float_left easing_1`
        setTimeout(() => {
            sequence_Load();
        }, 1);
    };

};

handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    //handle_update();
};

handle_add_element_events = () => {

    if (root != null) {

        if (document.getElementById('element_input_filter') != null) {
            document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    fb_render();
                }, 0);
            });
        };

        if (document.getElementById('element_input_refresh') != null) {
            document.getElementById('element_input_refresh').addEventListener('click', (event) => {
                // refresh library
                setTimeout(function() {
                    fb_refresh();
                    wp_refresh();
                }, 0);
            });
        };
       
    };
}; 

handle_add_platform_events = () => {

    if (root != null) {

        // scroll
        document.getElementById('scrollable_x').addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            handle_ReturnedState_fromEvents();
        });

        document.getElementById('scrollable_y').addEventListener('scroll', (event) => {
            events.handle_Function_Scroll(event);
            handle_ReturnedState_fromEvents();
        });

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

        root.addEventListener('mousemove', (event) => {
            events.handle_Function_Mouse_Move(event);
            handle_ReturnedState_fromEvents();
        });

        root.addEventListener('mouseenter', (event) => {
            events.handle_Function_Mouse_Enter(event);
            handle_ReturnedState_fromEvents();
        });

        root.addEventListener('mouseleave', (event) => {
            events.handle_Function_Mouse_Leave(event);
            handle_ReturnedState_fromEvents();
        });

        root.addEventListener('mouseup', (event) => {
            events.handle_Function_Mouse_Up(event);
            handle_ReturnedState_fromEvents();
        });

        root.addEventListener('mousedown', (event) => {
            //events.handle_Function_Mouse_Down(event);
            //handle_ReturnedState_fromEvents();
        });

        root.addEventListener('click', (event) => {
            events.handle_Function_Mouse_Down(event);
            handle_ReturnedState_fromEvents();

        });

        root.addEventListener('touchmove', (event) => {
            events.handle_Function_Touch_Move(event);
            handle_ReturnedState_fromEvents();
        });

        root.addEventListener('touchstart', (event) => {
            events.handle_Function_Touch_Start(event);
            handle_ReturnedState_fromEvents();
        });

        root.addEventListener('touchend', (event) => {
            events.handle_Function_Touch_End(event);
            handle_ReturnedState_fromEvents();
        });

    };
};


window.onload = () => {
    


    sequence_Load();

    let element = `
        `
    //root.appendChild(gen_Div('root_id', 'root_class', element));

};

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
    ui();
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
    handle_ReturnState
};