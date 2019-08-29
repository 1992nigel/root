
// Imports
'use strict';

// Imports
import imported_state from './partials/state';
import imported_functions from './partials/functions';
import imported_events from './partials/events';
import imported_defaults from './partials/defaults';
import imported_components from './partials/components';
// import imported_generators from './partials/generators';
import imported_elements from './partials/elements';
import imported_values from './partials/values';
import imported_ui from './partials/ui';

// Declaration
let state;
let functions;
let defaults;
let components;
let first_load = true;
let sound1 = document.getElementById('componentSound');

// Assignment
state = imported_state.default_state;
functions = imported_functions;
defaults = imported_defaults;
components = imported_components;

// Initialization
let config = {
    apiKey: "AIzaSyDXIXMGC_38yav7wo7E5A8ZwGK7vNavpxk",
    authDomain: "gnougn-efdc5.firebaseapp.com",
    databaseURL: "https://gnougn-efdc5.firebaseio.com",
    projectId: "gnougn-efdc5",
    storageBucket: "gnougn-efdc5.appspot.com",
    messagingSenderId: "668732840020"
};

// Functions
firebase.initializeApp(config);

// Closures

// Create
let addListings = (child) => {
    
    var current_second = new Date().getTime() / 1000;
    let default_item = {};

    if ((state.data.user.username) != null) {
        if (child == 'library') {
            default_item = {
                id: 0,
                time: current_second,
                title: document.getElementById('element_input_title').value,
                feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
                subtitle: document.getElementById('element_input_subtitle').value,
                paragraph: document.getElementById('element_input_paragraph').value,
                categories: [`'${document.getElementById('element_input_category').value}'`],
                subcategories: [`'${document.getElementById('element_input_sub_category').value}'`],
                feature_style: document.getElementById('element_input_feature_style').value,
                tags: [`'${document.getElementById('element_input_tag').value}'`],
                types: [`'${document.getElementById('element_input_type').value}'`],
                feature_image_src: document.getElementById('element_input_feature_image_src').value,
                username: state.data.user.username,
                views: 0,
                likes: 0,
                dislikes: 0
            };
        };
    };

    if (child == 'roster') {
        default_item = {
            id: 0,
            time: current_second,
            username: document.getElementById('new_username').value,
            password: document.getElementById('new_password').value,
            feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
            views: 0,
            likes: 0,
            dislikes: 0
        };
    };

    document.getElementById('element_input_title').value = '';

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
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let sorting_type = 'likesup';

let find_sorting_type = () => {

    if ( (document.getElementById('element_input_sorting_type_views')) != null ) {


        if (document.getElementById('element_input_sorting_type_likesup').checked == true) {
            sorting_type = 'likesup'
        };

        if (document.getElementById('element_input_sorting_type_likesdown').checked == true) {
            sorting_type = 'likesdown'
        };

        if (document.getElementById('element_input_sorting_type_timeup').checked == true) {
            sorting_type = 'timeup'
        };

        if (document.getElementById('element_input_sorting_type_timedown').checked == true) {
            sorting_type = 'timedown'
        };

        if (document.getElementById('element_input_sorting_type_viewsup').checked == true) {
            sorting_type = 'viewsup'
        };

        if (document.getElementById('element_input_sorting_type_viewsdown').checked == true) {
            sorting_type = 'viewsdown'
        };

    };
};

let find_sort = () => {

    if (sorting_type == 'likesup' || '') {
        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {
            
            if (sorting_type == 'likesup') {
                return function(a, b) {
                    return a.likes - b.likes
                }
            };

        };
    };

    if (sorting_type == 'likesdown' || '') {
        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {

            if (sorting_type == 'likesdown') {
                return function(a, b) {
                    return b.likes - a.likes
                }
            };

        };
    };

    if (sorting_type == 'viewsup') {
        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {

            if (sorting_type == 'viewsup' || '') {
                return function(a, b) {
                    return a.views - b.views
                }
            };

        };
    };

    if (sorting_type == 'viewsdown') {
        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {

            if (sorting_type == 'viewsdown') {
                return function(a, b) {
                    return b.views - a.views
                }
            };

        };
    };

    if (sorting_type == 'timeup') {
        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {

            if (sorting_type == 'timeup') {
                return function(a, b) {
                    return b.time - a.time
                }
            };

        };
    };

    if (sorting_type == 'timedown') {
        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {
            
            if (sorting_type == 'timedown' || '') {
                return function(a, b) {
                    return a.time - b.time
                }
            };

        };
    };

};

let find_view = () => {

    if (state.data.view == '' ) {
        state.data.view = 'grid';
    };

    document.getElementById('wp_component_blog').classList.remove('grid');
    document.getElementById('wp_component_blog').classList.remove('list');
    document.getElementById('wp_component_blog').classList.remove('card');
    document.getElementById('wp_component_blog').classList.remove('full');
    document.getElementById('wp_component_blog').classList.remove('thumbs');

    if (state.data.view == 'grid') {
        document.getElementById('wp_component_blog').classList.add('grid');
    };

    if (state.data.view == 'card') {
        document.getElementById('wp_component_blog').classList.add('card');
    };

    if (state.data.view == 'list') {
        document.getElementById('wp_component_blog').classList.add('list');
    };

    if (state.data.view == 'thumbs') {
        document.getElementById('wp_component_blog').classList.add('thumbs');
    };

    if (state.data.view == 'full') {
        document.getElementById('wp_component_blog').classList.add('full');
    };
};

let find_limit = () => {

    if ( (document.getElementById('element_input_limit')) != null ) {
        state.data.posts_limit = document.getElementById('element_input_limit').value
    };
};

let find_type = () => {

    if (state.data.type == '' ) {
        state.data.type = 'all';
    };

    document.getElementById('wp_component_feature_posts').classList.remove('type_skills');
    document.getElementById('wp_component_feature_posts').classList.remove('type_services');
    document.getElementById('wp_component_feature_posts').classList.remove('type_partner');
    document.getElementById('wp_component_feature_posts').classList.remove('type_abilities');
    document.getElementById('wp_component_feature_posts').classList.remove('type_roster');
    document.getElementById('wp_component_feature_posts').classList.remove('type_library');

    if (state.data.type == 'library' ) {
        document.getElementById('wp_component_feature_posts').classList.add('type_library');
    };

    if (state.data.type == 'skills' ) {
        document.getElementById('wp_component_feature_posts').classList.add('type_skills');
    };

    if (state.data.type == 'services' ) {
        document.getElementById('wp_component_feature_posts').classList.add('type_services');
    };

    if (state.data.type == 'partners' ) {
        document.getElementById('wp_component_feature_posts').classList.add('type_partners');
    };

    if (state.data.type == 'abilities' ) {
        document.getElementById('wp_component_feature_posts').classList.add('type_abilities');
    };

    if (state.data.type == 'roster' ) {
        document.getElementById('wp_component_feature_posts').classList.add('type_roster');
    };

};

let sign_in_ui = () => {
    // set user avatar
    document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'

    // set author page
    document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard(state.data.user);

    document.getElementById('icon_sign_out').classList.remove('display_none')
    document.getElementById('icon_sign_in').classList.add('display_none')
    document.getElementById('icon_sign_up').classList.add('display_none')

    // render author data
    Handle_Firebase_Refs_and_Render();

    // gui
    state.ui.modal.pop.right.transform = true;

    setTimeout( () => {
        state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
    }, 101);

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

let sign_out_ui = () => {

    state.data.user = default_user;
    
    localStorage.setItem("user", default_user);
    localStorage.setItem("username", default_user.username);
    localStorage.setItem("password", default_user.password);
    
    // set user avatar
    document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'

    // set author page
    document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard_not_logged();

    document.getElementById('icon_sign_out').classList.add('display_none')
    document.getElementById('icon_sign_in').classList.remove('display_none')
    document.getElementById('icon_sign_up').classList.remove('display_none')

    // render author data
    Handle_Firebase_Refs_and_Render();

    // gui
    state.ui.modal.pop.left.transform = true;

    setTimeout( () => {
        state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
    }, 101);

};

if ( (document.getElementById('component_app_body')) != null ) {
    console.log('component_app_body' + 'is live');
};

let Handle_Firebase_Refs_and_Render = () => {
    console.log('Handle_Firebase_Refs');
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const wordpressRef = gnougnRef.child('wordpress');
    console.log('Handle_Firebase_Refs');

    (() => {
        rootRef.on('value', function(snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('state.data.firebase');
            console.log(state.data.firebase);
        });

        state.data.refs = false;
    })();

    // set firebase data
    (() => {

        var Handle_Repeat_Firebase_Validation = setInterval(function() {

            // repeat until refs are set
            if (state.data.refs == false) {

                let temp = state.data.firebase;
                // console.log('firbase objects -> firbase array');

                if ((temp.gnougn.abilities) != null) {
                    // abilities
                    // set objects to array - part 1

                    let result_abilities = Object.keys(temp.gnougn.abilities).map(function(key) {
                        return temp.gnougn.abilities[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.abilities = result_abilities;
                    // console.log('abilities');
                    // console.log(temp.gnougn.abilities);
                };

                if ((temp.gnougn.library) != null) {
                    // library
                    // set objects to array - part 1
                    let result_library = Object.keys(temp.gnougn.library).map(function(key) {
                        return temp.gnougn.library[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.library = result_library;
                    // console.log('library');
                    // console.log(temp.gnougn.library);
                };


                if ((temp.gnougn.partners) != null) {
                    // partners
                    // set objects to array - part 1
                    let result_partners = Object.keys(temp.gnougn.partners).map(function(key) {
                        return temp.gnougn.partners[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.partners = result_partners;
                    // console.log('partners');
                    // console.log(temp.gnougn.partners);
                };

                if ((temp.gnougn.services) != null) {
                    // services
                    // set objects to array - part 1
                    let result_services = Object.keys(temp.gnougn.services).map(function(key) {
                        return temp.gnougn.services[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.services = result_services;
                    // console.log('services');
                    // console.log(temp.gnougn.services);
                };

                if ((temp.gnougn.roster) != null) {
                    // roster
                    // set objects to array - part 1
                    let result_roster = Object.keys(temp.gnougn.roster).map(function(key) {
                        return temp.gnougn.roster[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.roster = result_roster;
                    // console.log('roster');
                    // console.log(temp.gnougn.roster);
                };

                if ((temp.gnougn.skills) != null) {
                    // skills
                    // set objects to array - part 1
                    let result_skills = Object.keys(temp.gnougn.skills).map(function(key) {
                        return temp.gnougn.skills[key];
                    });

                    // set objects to array - part 2
                    temp.gnougn.skills = result_skills;
                    // console.log('skills');
                    // console.log(temp.gnougn.skills);
                };


                if ((temp.gnougn.skills) != null) {

                    console.log(temp.gnougn);

                    // Render listtings to front_end
                    setTimeout(function() {

                        state.data.refs = true;

                        if (first_load == true) {
                            
                            first_load = false;
                            
                            //console.clear();

                            // check ui state
                            setTimeout(function() {
                            check_local_user();

                                // re-INIT
                                HANDLE_animation();

                                // re_check
                                setInterval(function() {
                                    Handle_check_states();
                                    document.firstElementChild.style.zoom = "reset";

                                }, 1000/state.animation.framerate);
                            }, 1);
                        };

                        // check ui state
                        setTimeout(function() {
                            Handle_firebase_render();
                            //console.clear();
                        }, 2);

                    }, 0);

                };

            };

        }, 0);

    })();
};

let check_local_user = () => {

        // Localize data
        if (localStorage.username == null) {
            alert('welcome first timer');
            sign_out_ui();
            return;
        };

        // Localize data
        if (localStorage.username == 'null') {
            alert('welcome back, login please');
            sign_out_ui();
            return;
        };

        if (localStorage.username != 'null') {
            
            alert('weolcome back: ' + localStorage.username);

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

                        sign_in_ui();
            
                    };
                };
            };

        };
}

let Handle_firebase_render = () => {

    // render library
    (() => {

        setTimeout(function() {

            if (
            (document.getElementById('element_input_filter') != null)
            &&
            (document.getElementById('element_input_post_username') != null)
            &&
            (document.getElementById('element_input_post_types') != null)
            ) {
                

                // *********************** "Order of operations" ************************

                // 1.) set array
                let array = state.data.firebase;

                // 2.) sort array
                find_sorting_type();
                find_view();
                find_type();
                find_limit();

                let array_gnougn_library = array.gnougn.library.sort(find_sort());
                let filtered_array_gnougn_library = [];

                // 3.) filter array
                for (var i = 0; i < array_gnougn_library.length; i++) {

                    // 3 options
                    if ((array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                        filtered_array_gnougn_library.push(array_gnougn_library[i]);
                    };

                };

                // user Library
                if ( (document.getElementById('element_ol_firebase_user_library')) != null) {
                    
                    document.getElementById('element_ol_firebase_user_library').innerHTML = '';

                    for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                        if ( filtered_array_gnougn_library[i].username == state.data.user.username ) {
                            document.getElementById('element_ol_firebase_user_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                              imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                )
                            )
                        };
                    }
                };

                if ( (document.getElementById('element_ol_firebase_user_subs_library')) != null) {
                    
                    document.getElementById('element_ol_firebase_user_subs_library').innerHTML = '';

                    for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                        for (var subs_index = 0; subs_index < state.data.user.subs.length; subs_index++) {
                                
                            // subs name
                            document.getElementById('element_ol_firebase_user_subs_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                    imported_functions.Generate_new_div(`<h1><u>${state.data.user.subs[subs_index].username }</u>'s post</h1>`)
                                )
                            )

                            // subs posts
                            if ( filtered_array_gnougn_library[i].username == state.data.user.subs[subs_index].username ) {

                                document.getElementById('element_ol_firebase_user_subs_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                  imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                    )
                                )

                            };

                        };
                    }
                };

                // post username Library
                if ( (document.getElementById('element_ol_firebase_post_username_library')) != null) {
                    
                    document.getElementById('element_ol_firebase_post_username_library').innerHTML = '';

                    for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                        if ( filtered_array_gnougn_library[i].username.toString().toLowerCase().includes(document.getElementById('element_input_post_username').value) ) {
                            document.getElementById('element_ol_firebase_post_username_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                              imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                )
                            )
                        };
                    }
                };
                
                // Library
                document.getElementById('element_ol_firebase_library').innerHTML = '';

                // 5.) fill ol element
                let new_filter_array = [];


                // filter types & add to new array
                for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                    if (state.data.types.length != 0) {

                        for (var filter_index = 0; filter_index < state.data.types.length; filter_index++) {
                                
                            for (var post_index = 0; post_index < filtered_array_gnougn_library[i].types.length; post_index++) {
                                
                                if (state.data.types[filter_index].title == filtered_array_gnougn_library[i].types[post_index].title) {

                                    new_filter_array.push(filtered_array_gnougn_library[i]);

                                };

                            };

                        };

                    };

                };


                for (var i = 0; i < new_filter_array.length; i++) {

                    if ( (i >= state.data.posts_start) && (i < state.data.posts_limit) ) {
                        document.getElementById('element_ol_firebase_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(new_filter_array[i])))
                    };

                };


                // Library Featured
                document.getElementById('element_ol_firebase_library_feature').innerHTML = '';

                // 5.) fill ol element to feature limit
                for (var i = 0; i < state.data.feature_posts_limit; i++) {
                    document.getElementById('element_ol_firebase_library_feature').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                        )
                    )
                }

                // Roster
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_roster').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
                    // console.log(state.data.firebase.gnougn.roster[i]);
                    document.getElementById('element_ol_firebase_roster').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.roster[i])
                        )
                    )
                }

                // partners
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_partners').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.partners.length; i++) {
                    // console.log(state.data.firebase.gnougn.partners[i]);
                    document.getElementById('element_ol_firebase_partners').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.partners[i])
                        )
                    )
                }

                // Abilities
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_abilities').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.abilities.length; i++) {
                    // console.log(state.data.firebase.gnougn.abilities[i]);
                    document.getElementById('element_ol_firebase_abilities').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.abilities[i])
                        )
                    )
                }

                // services
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_services').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.services.length; i++) {
                    // console.log(state.data.firebase.gnougn.services[i]);
                    document.getElementById('element_ol_firebase_services').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.services[i])
                        )
                    )
                }

                // skills
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_skills').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.skills.length; i++) {
                    // console.log(state.data.firebase.gnougn.skills[i]);
                    document.getElementById('element_ol_firebase_skills').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.skills[i])
                        )
                    )
                }

            };

        }, 0);

    })();

    state.data.refs = true;
};

let Handle_render = () => {

    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')))
    };
};

let Handle_check_route = (route) => {
    state.app.route = route

    if (route == 'home') {

        let intro_container = ``;
        let route_background = ``;
        let detail_content = ``;
        let foreground_content = ``;

        document.getElementById('component_app_modal_element_page_top_content').innerHTML = (intro_container + route_background + detail_content + foreground_content);
        
        Handle_Firebase_Refs_and_Render();

    }

    if (route == 'about') {

        let intro_container = ``;
        let route_background = ``;
        let detail_content = imported_elements.element_scroll_y_events('element_scroll_y_events_route', 
                `
                    <div id="about_posts" class="position_relative width_100 float_left"></div>
                    <div class="position_relative width_100 height_100vh bg_white float_left margin_auto">about page</div>
                    <div class="position_relative width_100 height_100vh bg_white float_left margin_auto">about page</div>
                `);
        let foreground_content = ``;

        document.getElementById('component_app_modal_element_page_top_content').innerHTML = (intro_container + route_background + detail_content + foreground_content);
        
        Handle_Firebase_Refs_and_Render();

    }
};

let values_update = () => {
  imported_values.values_update();
};

let Handle_EventListeners = () => {

        // defaults
        if ( (document.getElementById('component_app_scrolling')) != null ) {
            document.getElementById('component_app_scrolling').addEventListener("scroll", (event) => {

                console.log(event);
                //alert('yup');

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

                state.ui.root.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

            }, false);
        }


        // bottomblog
        if ( (document.getElementById('component_app_content_blog')) != null ) {
            document.getElementById('component_app_content_blog').addEventListener("scroll", (event) => {

                console.log(event);
                //alert('yup');

                // scrolling
                console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                state.ui.blog.clientHeight = event.srcElement.clientHeight;
                state.ui.blog.clientWidth = event.srcElement.clientWidth;

                state.ui.blog.scrollHeight = event.srcElement.scrollHeight;
                state.ui.blog.scrollWidth = event.srcElement.scrollWidth;

                state.ui.blog.scrollTop = event.srcElement.scrollTop;
                state.ui.blog.scrollLeft = event.srcElement.scrollLeft;

                var currY = ((event.srcElement.scrollTop) / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100) ;
                console.log(currY);

                if (currY == 0) {

                    if (state.animation.instances.scrolled_top == true) {
                        alert('scrolled_top met')
                    };

                };


                if (currY == 100) {

                    if (state.animation.instances.scrolled_bottom == true) {
                        alert('scrolled_bottom met')
                    };
                };

                /*

                Value update

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
                */

                // instances      
                if (event.srcElement.scrollTop > state.ui.blog.component_app_gui_scroll_y_position) {
                    console.log('state.ui.blog.component_app_gui_scroll_y_position increasing');
                    console.log("instance: wheel up");
                }

                if (event.srcElement.scrollTop < state.ui.blog.component_app_gui_scroll_y_position) {
                    console.log('state.ui.blog.component_app_gui_scroll_y_position decreasing');
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

                state.ui.blog.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

            }, false);
        }


        // gui
        if ( (document.getElementById('gui_start_buttons')) != null ) {
            document.getElementById('gui_start_buttons').addEventListener("click", function(event) {

                HANDLE_animation_start();

            });
        };

        if ( (document.getElementById('gui_learn_buttons')) != null ) {
            document.getElementById('gui_learn_buttons').addEventListener("click", function(event) {

                HANDLE_animation_learn();
            });
        };

        // Blog Actions

        let event_style = () => {

            if (sorting_type == 'viewsup') {
                document.getElementById('element_input_sorting_type_viewsup').classList.add('bg_pink');
                document.getElementById('element_input_sorting_type_viewsup').classList.remove('bg_yellow');
            };

            if (sorting_type != 'viewsup') {
                document.getElementById('element_input_sorting_type_viewsup').classList.remove('bg_pink');
                document.getElementById('element_input_sorting_type_viewsup').classList.add('bg_yellow');
            };

            if (sorting_type == 'viewsdown') {
                document.getElementById('element_input_sorting_type_viewsdown').classList.add('bg_pink');
                document.getElementById('element_input_sorting_type_viewsdown').classList.remove('bg_yellow');
            };

            if (sorting_type != 'viewsdown') {
                document.getElementById('element_input_sorting_type_viewsdown').classList.remove('bg_pink');
                document.getElementById('element_input_sorting_type_viewsdown').classList.add('bg_yellow');
            };

            if (sorting_type == 'timeup') {
                document.getElementById('element_input_sorting_type_timeup').classList.add('bg_pink');
                document.getElementById('element_input_sorting_type_timeup').classList.remove('bg_yellow');
            };

            if (sorting_type != 'timeup') {
                document.getElementById('element_input_sorting_type_timeup').classList.remove('bg_pink');
                document.getElementById('element_input_sorting_type_timeup').classList.add('bg_yellow');
            };

            if (sorting_type == 'timedown') {
                document.getElementById('element_input_sorting_type_timedown').classList.add('bg_pink');
                document.getElementById('element_input_sorting_type_timedown').classList.remove('bg_yellow');
            };

            if (sorting_type != 'timedown') {
                document.getElementById('element_input_sorting_type_timedown').classList.remove('bg_pink');
                document.getElementById('element_input_sorting_type_timedown').classList.add('bg_yellow');
            };

            if (sorting_type == 'likesup') {
                document.getElementById('element_input_sorting_type_likesup').classList.add('bg_pink');
                document.getElementById('element_input_sorting_type_likesup').classList.remove('bg_yellow');
            };

            if (sorting_type != 'likesup') {
                document.getElementById('element_input_sorting_type_likesup').classList.remove('bg_pink');
                document.getElementById('element_input_sorting_type_likesup').classList.add('bg_yellow');
            };

            if (sorting_type == 'likesdown') {
                document.getElementById('element_input_sorting_type_likesdown').classList.add('bg_pink');
                document.getElementById('element_input_sorting_type_likesdown').classList.remove('bg_yellow');
            };

            if (sorting_type != 'likesdown') {
                document.getElementById('element_input_sorting_type_likesdown').classList.remove('bg_pink');
                document.getElementById('element_input_sorting_type_likesdown').classList.add('bg_yellow');
            };

            if (state.data.type == 'all') {
                document.getElementById('element_input_type_all').classList.add('bg_pink');
                document.getElementById('element_input_type_all').classList.remove('bg_yellow');
            };

            if (state.data.type != 'all') {
                document.getElementById('element_input_type_all').classList.remove('bg_pink');
                document.getElementById('element_input_type_all').classList.add('bg_yellow');
            };

            if (state.data.type == 'abilities') {
                document.getElementById('element_input_type_abilities').classList.add('bg_pink');
                document.getElementById('element_input_type_abilities').classList.remove('bg_yellow');
            };

            if (state.data.type != 'abilities') {
                document.getElementById('element_input_type_abilities').classList.remove('bg_pink');
                document.getElementById('element_input_type_abilities').classList.add('bg_yellow');
            };

            if (state.data.type == 'library') {
                document.getElementById('element_input_type_library').classList.add('bg_pink');
                document.getElementById('element_input_type_library').classList.remove('bg_yellow');
            };

            if (state.data.type != 'library') {
                document.getElementById('element_input_type_library').classList.remove('bg_pink');
                document.getElementById('element_input_type_library').classList.add('bg_yellow');
            };

            if (state.data.type == 'roster') {
                document.getElementById('element_input_type_roster').classList.add('bg_pink');
                document.getElementById('element_input_type_roster').classList.remove('bg_yellow');
            };

            if (state.data.type != 'roster') {
                document.getElementById('element_input_type_roster').classList.remove('bg_pink');
                document.getElementById('element_input_type_roster').classList.add('bg_yellow');
            };

            if (state.data.type == 'partners') {
                document.getElementById('element_input_type_partners').classList.add('bg_pink');
                document.getElementById('element_input_type_partners').classList.remove('bg_yellow');
            };

            if (state.data.type != 'partners') {
                document.getElementById('element_input_type_partners').classList.remove('bg_pink');
                document.getElementById('element_input_type_partners').classList.add('bg_yellow');
            };

            if (state.data.type == 'services') {
                document.getElementById('element_input_type_services').classList.add('bg_pink');
                document.getElementById('element_input_type_services').classList.remove('bg_yellow');
            };

            if (state.data.type != 'services') {
                document.getElementById('element_input_type_services').classList.remove('bg_pink');
                document.getElementById('element_input_type_services').classList.add('bg_yellow');
            };

            if (state.data.type == 'skills') {
                document.getElementById('element_input_type_skills').classList.add('bg_pink');
                document.getElementById('element_input_type_skills').classList.remove('bg_yellow');
            };

            if (state.data.type != 'skills') {
                document.getElementById('element_input_type_skills').classList.remove('bg_pink');
                document.getElementById('element_input_type_skills').classList.add('bg_yellow');
            };

            // category
            if (state.data.category == 'all') {
                document.getElementById('element_input_category_all').classList.add('bg_pink');
                document.getElementById('element_input_category_all').classList.remove('bg_yellow');
            };

            if (state.data.category != 'all') {
                document.getElementById('element_input_category_all').classList.remove('bg_pink');
                document.getElementById('element_input_category_all').classList.add('bg_yellow');
            };

            if (state.data.category == 'development') {
                document.getElementById('element_input_category_development').classList.add('bg_pink');
                document.getElementById('element_input_category_development').classList.remove('bg_yellow');
            };

            if (state.data.category != 'development') {
                document.getElementById('element_input_category_development').classList.remove('bg_pink');
                document.getElementById('element_input_category_development').classList.add('bg_yellow');
            };

            if (state.data.category == 'design') {
                document.getElementById('element_input_category_design').classList.add('bg_pink');
                document.getElementById('element_input_category_design').classList.remove('bg_yellow');
            };

            if (state.data.category != 'design') {
                document.getElementById('element_input_category_design').classList.remove('bg_pink');
                document.getElementById('element_input_category_design').classList.add('bg_yellow');
            };

            if (state.data.category == 'graphics') {
                document.getElementById('element_input_category_graphics').classList.add('bg_pink');
                document.getElementById('element_input_category_graphics').classList.remove('bg_yellow');
            };

            if (state.data.category != 'graphics') {
                document.getElementById('element_input_category_graphics').classList.remove('bg_pink');
                document.getElementById('element_input_category_graphics').classList.add('bg_yellow');
            };

            if (state.data.category == 'motion') {
                document.getElementById('element_input_category_motion').classList.add('bg_pink');
                document.getElementById('element_input_category_motion').classList.remove('bg_yellow');
            };

            if (state.data.category != 'motion') {
                document.getElementById('element_input_category_motion').classList.remove('bg_pink');
                document.getElementById('element_input_category_motion').classList.add('bg_yellow');
            };

            if (state.data.category == 'strategy') {
                document.getElementById('element_input_category_strategy').classList.add('bg_pink');
                document.getElementById('element_input_category_strategy').classList.remove('bg_yellow');
            };

            if (state.data.category != 'strategy') {
                document.getElementById('element_input_category_strategy').classList.remove('bg_pink');
                document.getElementById('element_input_category_strategy').classList.add('bg_yellow');
            };

            if (state.data.category == 'content') {
                document.getElementById('element_input_category_content').classList.add('bg_pink');
                document.getElementById('element_input_category_content').classList.remove('bg_yellow');
            };

            if (state.data.category != 'content') {
                document.getElementById('element_input_category_content').classList.remove('bg_pink');
                document.getElementById('element_input_category_content').classList.add('bg_yellow');
            };

            // views
            if (state.data.view == 'full') {
                document.getElementById('element_input_view_full').classList.add('bg_pink');
                document.getElementById('element_input_view_full').classList.remove('bg_yellow');
            };

            if (state.data.view != 'full') {
                document.getElementById('element_input_view_full').classList.remove('bg_pink');
                document.getElementById('element_input_view_full').classList.add('bg_yellow');
            };

            if (state.data.view == 'thumbs') {
                document.getElementById('element_input_view_thumbs').classList.add('bg_pink');
                document.getElementById('element_input_view_thumbs').classList.remove('bg_yellow');
            };

            if (state.data.view != 'thumbs') {
                document.getElementById('element_input_view_thumbs').classList.remove('bg_pink');
                document.getElementById('element_input_view_thumbs').classList.add('bg_yellow');
            };

            if (state.data.view == 'list') {
                document.getElementById('element_input_view_list').classList.add('bg_pink');
                document.getElementById('element_input_view_list').classList.remove('bg_yellow');
            };

            if (state.data.view != 'list') {
                document.getElementById('element_input_view_list').classList.remove('bg_pink');
                document.getElementById('element_input_view_list').classList.add('bg_yellow');
            };
            
            if (state.data.view == 'grid') {
                document.getElementById('element_input_view_grid').classList.add('bg_pink');
                document.getElementById('element_input_view_grid').classList.remove('bg_yellow');
            };

            if (state.data.view != 'grid') {
                document.getElementById('element_input_view_grid').classList.remove('bg_pink');
                document.getElementById('element_input_view_grid').classList.add('bg_yellow');
            };

            if (state.data.view == 'card') {
                document.getElementById('element_input_view_card').classList.add('bg_pink');
                document.getElementById('element_input_view_card').classList.remove('bg_yellow');
            };

            if (state.data.view != 'card') {
                document.getElementById('element_input_view_card').classList.remove('bg_pink');
                document.getElementById('element_input_view_card').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'all') {
                document.getElementById('element_input_feature_style_all').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_all').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'all') {
                document.getElementById('element_input_feature_style_all').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_all').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'ux') {
                document.getElementById('element_input_feature_style_ux').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_ux').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'ux') {
                document.getElementById('element_input_feature_style_ux').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_ux').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'video') {
                document.getElementById('element_input_feature_style_video').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_video').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'video') {
                document.getElementById('element_input_feature_style_video').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_video').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'read') {
                document.getElementById('element_input_feature_style_read').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_read').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'read') {
                document.getElementById('element_input_feature_style_read').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_read').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'code') {
                document.getElementById('element_input_feature_style_code').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_code').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'code') {
                document.getElementById('element_input_feature_style_code').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_code').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'graphic') {
                document.getElementById('element_input_feature_style_graphic').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_graphic').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'graphic') {
                document.getElementById('element_input_feature_style_graphic').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_graphic').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'photo') {
                document.getElementById('element_input_feature_style_photo').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_photo').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'photo') {
                document.getElementById('element_input_feature_style_photo').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_photo').classList.add('bg_yellow');
            };

            if (state.data.feature_style == 'gallery') {
                document.getElementById('element_input_feature_style_gallery').classList.add('bg_pink');
                document.getElementById('element_input_feature_style_gallery').classList.remove('bg_yellow');
            };

            if (state.data.feature_style != 'gallery') {
                document.getElementById('element_input_feature_style_gallery').classList.remove('bg_pink');
                document.getElementById('element_input_feature_style_gallery').classList.add('bg_yellow');
            };

        };

        // type
        if ( (document.getElementById('element_input_type_all')) != null ) {
            document.getElementById('element_input_type_all').addEventListener("click", function(event) {
                state.data.type = 'all';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_type_library')) != null ) {
            document.getElementById('element_input_type_library').addEventListener("click", function(event) {
                state.data.type = 'library';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_type_services')) != null ) {
            document.getElementById('element_input_type_services').addEventListener("click", function(event) {
                state.data.type = 'services';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_type_roster')) != null ) {
            document.getElementById('element_input_type_roster').addEventListener("click", function(event) {
                state.data.type = 'roster';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_type_skills')) != null ) {
            document.getElementById('element_input_type_skills').addEventListener("click", function(event) {
                state.data.type = 'skills';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_type_abilities')) != null ) {
            document.getElementById('element_input_type_abilities').addEventListener("click", function(event) {
                state.data.type = 'abilities';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_type_partners')) != null ) {
            document.getElementById('element_input_type_partners').addEventListener("click", function(event) {
                state.data.type = 'partners';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        // categories

        if ( (document.getElementById('element_input_category_development')) != null ) {
            document.getElementById('element_input_category_development').addEventListener("click", function(event) {
                state.data.category = 'development';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_category_design')) != null ) {
            document.getElementById('element_input_category_design').addEventListener("click", function(event) {
                state.data.category = 'design';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_category_graphics')) != null ) {
            document.getElementById('element_input_category_graphics').addEventListener("click", function(event) {
                state.data.category = 'graphics';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_category_motion')) != null ) {
            document.getElementById('element_input_category_motion').addEventListener("click", function(event) {
                state.data.category = 'motion';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_category_strategy')) != null ) {
            document.getElementById('element_input_category_strategy').addEventListener("click", function(event) {
                state.data.category = 'strategy';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_category_content')) != null ) {
            document.getElementById('element_input_category_content').addEventListener("click", function(event) {
                state.data.category = 'content';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        // sort
        if ( (document.getElementById('element_input_sorting_type_viewsup')) != null ) {
            document.getElementById('element_input_sorting_type_viewsup').addEventListener("click", function(event) {
                sorting_type = 'viewsup';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_sorting_type_viewsdown')) != null ) {
            document.getElementById('element_input_sorting_type_viewsdown').addEventListener("click", function(event) {
                sorting_type = 'viewsdown';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_sorting_type_likesup')) != null ) {
            document.getElementById('element_input_sorting_type_likesup').addEventListener("click", function(event) {
                sorting_type = 'likesup';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_sorting_type_likesdown')) != null ) {
            document.getElementById('element_input_sorting_type_likesdown').addEventListener("click", function(event) {
                sorting_type = 'likesdown';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_sorting_type_timeup')) != null ) {
            document.getElementById('element_input_sorting_type_timeup').addEventListener("click", function(event) {
                sorting_type = 'timeup';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_sorting_type_timedown')) != null ) {
            document.getElementById('element_input_sorting_type_timedown').addEventListener("click", function(event) {
                sorting_type = 'timedown';
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        // limit
        if ( (document.getElementById('element_input_limit')) != null ) {
            document.getElementById('element_input_limit').addEventListener("keyup", function(event) {
                Handle_Firebase_Refs_and_Render();
            });
        };

        // post type
        if ( (document.getElementById('element_input_feature_style_all')) != null ) {
            document.getElementById('element_input_feature_style_all').addEventListener("click", function(event) {
                state.data.feature_style = 'all'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };

        if ( (document.getElementById('element_input_feature_style_ux')) != null ) {
            document.getElementById('element_input_feature_style_ux').addEventListener("click", function(event) {
                state.data.feature_style = 'ux'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };
        if ( (document.getElementById('element_input_feature_style_video')) != null ) {
            document.getElementById('element_input_feature_style_video').addEventListener("click", function(event) {
                state.data.feature_style = 'video'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };
        if ( (document.getElementById('element_input_feature_style_code')) != null ) {
            document.getElementById('element_input_feature_style_code').addEventListener("click", function(event) {
                state.data.feature_style = 'code'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };
        if ( (document.getElementById('element_input_feature_style_read')) != null ) {
            document.getElementById('element_input_feature_style_read').addEventListener("click", function(event) {
                state.data.feature_style = 'read'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };
        if ( (document.getElementById('element_input_feature_style_graphic')) != null ) {
            document.getElementById('element_input_feature_style_graphic').addEventListener("click", function(event) {
                state.data.feature_style = 'graphic'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };
        if ( (document.getElementById('element_input_feature_style_photo')) != null ) {
            document.getElementById('element_input_feature_style_photo').addEventListener("click", function(event) {
                state.data.feature_style = 'photo'
                event_style();
                Handle_Firebase_Refs_and_Render();
            });
        };
        if ( (document.getElementById('element_input_feature_style_gallery')) != null ) {
            document.getElementById('element_input_feature_style_gallery').addEventListener("click", function(event) {
                state.data.feature_style = 'gallery'
                event_style();
                Handle_Firebase_Refs_and_Render();
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

        // filter by title
        if (document.getElementById('element_input_post_username') != null) {
            document.getElementById('element_input_post_username').addEventListener('keydown', (event) => {
                // filter library
                setTimeout(function() {
                    Handle_Firebase_Refs_and_Render();
                }, 0);

            });
        };


        // filter by type
        if (document.getElementById('element_input_post_types') != null) {
            document.getElementById('element_input_post_types').addEventListener('keydown', (event) => {

                if (event.keyCode == 13) {

                    let info = document.getElementById('element_input_post_types').value
                    state.data.types.push({'title': info});
                    
                    // filter library
                    setTimeout(function() {
                        Handle_Firebase_Refs_and_Render();
                    }, 101);

                    document.getElementById('element_input_post_types').value = '';
                };

            });
        };

        // filter by tags
        if (document.getElementById('element_input_post_tags') != null) {
            document.getElementById('element_input_post_tags').addEventListener('keydown', (event) => {

                if (event.keyCode == 13) {

                    let info = document.getElementById('element_input_post_tags').value
                    state.data.tags.push({'title': info});
                    
                    // filter library
                    setTimeout(function() {
                        Handle_Firebase_Refs_and_Render();
                    }, 101);

                    document.getElementById('element_input_post_tags').value = '';
                };

            });
        };


        // filter by categories
        if (document.getElementById('element_input_post_categories') != null) {
            document.getElementById('element_input_post_categories').addEventListener('keydown', (event) => {

                if (event.keyCode == 13) {

                    let info = document.getElementById('element_input_post_categories').value
                    state.data.categories.push({'title': info});
                    
                    // filter library
                    setTimeout(function() {
                        Handle_Firebase_Refs_and_Render();
                    }, 101);

                    document.getElementById('element_input_post_categories').value = '';
                };

            });
        };

        // filter by subcategories
        if (document.getElementById('element_input_post_subcategories') != null) {
            document.getElementById('element_input_post_subcategories').addEventListener('keydown', (event) => {

                if (event.keyCode == 13) {

                    let info = document.getElementById('element_input_post_subcategories').value
                    state.data.subcategories.push({'title': info});
                    
                    // filter library
                    setTimeout(function() {
                        Handle_Firebase_Refs_and_Render();
                    }, 101);

                    document.getElementById('element_input_post_subcategories').value = '';
                };

            });
        };

        // create post
	    if (document.getElementById('element_input_create') != null) {
	        document.getElementById('element_input_create').addEventListener('click', (event) => {
                addListings('library');
	        });
	    };

        // create user
        if (document.getElementById('element_create_user') != null) {
            document.getElementById('element_create_user').addEventListener('click', (event) => {
                addListings('roster');
            });
        };

        // sign_in
        if (document.getElementById('element_user_sign_in') != null) {
            document.getElementById('element_user_sign_in').addEventListener('click', (event) => {
                

                for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
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

            });
        };

        /*

            element_input_title
            element_input_subtitle
            element_input_paragraph
            element_input_category
            element_input_sub_category
            element_input_feature_style
            element_input_tag
            element_input_type

        */

        if (document.getElementById('element_input_type') != null) {
            document.getElementById('element_input_type').addEventListener('keydown', (event) => {

            });
        };

        // change view
	    if (document.getElementById('element_input_view_grid') != null) {
	        document.getElementById('element_input_view_grid').addEventListener('click', (event) => {
            event_style();
	           state.data.view = 'grid';
               event_style();
               Handle_Firebase_Refs_and_Render();

	        });
	    };

        if (document.getElementById('element_input_view_card') != null) {
            document.getElementById('element_input_view_card').addEventListener('click', (event) => {

               state.data.view = 'card';
               event_style();
               Handle_Firebase_Refs_and_Render();

            });
        };

        if (document.getElementById('element_input_view_list') != null) {
            document.getElementById('element_input_view_list').addEventListener('click', (event) => {

               state.data.view = 'list';
               event_style();
               Handle_Firebase_Refs_and_Render();

            });
        };

        if (document.getElementById('element_input_view_thumbs') != null) {
            document.getElementById('element_input_view_thumbs').addEventListener('click', (event) => {

               state.data.view = 'thumbs';
               event_style();
               Handle_Firebase_Refs_and_Render();

            });
        };

        if (document.getElementById('element_input_view_full') != null) {
            document.getElementById('element_input_view_full').addEventListener('click', (event) => {

               state.data.view = 'full';
               event_style();
               Handle_Firebase_Refs_and_Render();

            });
        };

        // Gui Actions
        
        if ((document.getElementById('component_app_gui_top_left')) != null ) {
            document.getElementById('component_app_gui_top_left').addEventListener("mouseenter", function(event) {
                state.ui.gui.top_left.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_top')) != null ) {
            document.getElementById('component_app_gui_top').addEventListener("mouseenter", function(event) {
                state.ui.gui.top.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_top_right')) != null ) {
            document.getElementById('component_app_gui_top_right').addEventListener("mouseenter", function(event) {
                state.ui.gui.top_right.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_left')) != null ) {
            document.getElementById('component_app_gui_left').addEventListener("mouseenter", function(event) {
                state.ui.gui.left.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_right')) != null ) {
            document.getElementById('component_app_gui_right').addEventListener("mouseenter", function(event) {
                state.ui.gui.right.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_bottom_left')) != null ) {
            document.getElementById('component_app_gui_bottom_left').addEventListener("mouseenter", function(event) {
                state.ui.gui.bottom_left.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_bottom')) != null ) {
            document.getElementById('component_app_gui_bottom').addEventListener("mouseenter", function(event) {
                state.ui.gui.bottom.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_bottom_right')) != null ) {
            document.getElementById('component_app_gui_bottom_right').addEventListener("mouseenter", function(event) {
                state.ui.gui.bottom_right.transform = false;
            });
        };

        if ((document.getElementById('component_app_gui_top_left')) != null ) {
            document.getElementById('component_app_gui_top_left').addEventListener("mouseleave", function(event) {
                state.ui.gui.top_left.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_top')) != null ) {
            document.getElementById('component_app_gui_top').addEventListener("mouseleave", function(event) {
                state.ui.gui.top.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_top_right')) != null ) {
            document.getElementById('component_app_gui_top_right').addEventListener("mouseleave", function(event) {
                state.ui.gui.top_right.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_left')) != null ) {
            document.getElementById('component_app_gui_left').addEventListener("mouseleave", function(event) {
                state.ui.gui.left.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_right')) != null ) {
            document.getElementById('component_app_gui_right').addEventListener("mouseleave", function(event) {
                state.ui.gui.right.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_bottom_left')) != null ) {
            document.getElementById('component_app_gui_bottom_left').addEventListener("mouseleave", function(event) {
                state.ui.gui.bottom_left.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_bottom')) != null ) {
            document.getElementById('component_app_gui_bottom').addEventListener("mouseleave", function(event) {
                state.ui.gui.bottom.transform = true;
            });
        };

        if ((document.getElementById('component_app_gui_bottom_right')) != null ) {
            document.getElementById('component_app_gui_bottom_right').addEventListener("mouseleave", function(event) {
                state.ui.gui.bottom_right.transform = true;
            });
        };

        // Route Actions
        
        if ((document.getElementById('route_home')) != null ) {
            document.getElementById('route_home').addEventListener("click", function(event) {
                Handle_check_route('home');
            });
        };

        if ((document.getElementById('route_team')) != null ) {
            document.getElementById('route_team').addEventListener("click", function(event) {
                Handle_check_route('team');
            });
        };

        if ((document.getElementById('route_team_1')) != null ) {
            document.getElementById('route_team_1').addEventListener("click", function(event) {
                Handle_check_route('team_1');
            });
        };

        if ((document.getElementById('route_team_2')) != null ) {
            document.getElementById('route_team_2').addEventListener("click", function(event) {
                Handle_check_route('team_2');
            });
        };

        if ((document.getElementById('route_team_3')) != null ) {
            document.getElementById('route_team_3').addEventListener("click", function(event) {
                Handle_check_route('team_3');
            });
        };

        if ((document.getElementById('route_team_4')) != null ) {
            document.getElementById('route_team_4').addEventListener("click", function(event) {
                Handle_check_route('team_4');
            });
        };

        if ((document.getElementById('route_team_5')) != null ) {
            document.getElementById('route_team_5').addEventListener("click", function(event) {
                Handle_check_route('team_5');
            });
        };

        if ((document.getElementById('route_team_6')) != null ) {
            document.getElementById('route_team_6').addEventListener("click", function(event) {
                Handle_check_route('team_6');
            });
        };

        if ((document.getElementById('route_library')) != null ) {
            document.getElementById('route_library').addEventListener("click", function(event) {
                Handle_check_route('library');
            });
        };

        if ((document.getElementById('route_library_1')) != null ) {
            document.getElementById('route_library_1').addEventListener("click", function(event) {
                Handle_check_route('library_1');
            });
        };

        if ((document.getElementById('route_library_2')) != null ) {
            document.getElementById('route_library_2').addEventListener("click", function(event) {
                Handle_check_route('library_2');
            });
        };

        if ((document.getElementById('route_library_3')) != null ) {
            document.getElementById('route_library_3').addEventListener("click", function(event) {
                Handle_check_route('library_3');
            });
        };

        if ((document.getElementById('route_library_4')) != null ) {
            document.getElementById('route_library_4').addEventListener("click", function(event) {
                Handle_check_route('library_4');
            });
        };

        if ((document.getElementById('route_library_5')) != null ) {
            document.getElementById('route_library_5').addEventListener("click", function(event) {
                Handle_check_route('library_5');
            });
        };

        if ((document.getElementById('route_library_6')) != null ) {
            document.getElementById('route_library_6').addEventListener("click", function(event) {
                Handle_check_route('library_6');
            });
        };

        if ((document.getElementById('route_abilities')) != null ) {
            document.getElementById('route_abilities').addEventListener("click", function(event) {
                Handle_check_route('abilities');
            });
        };

        if ((document.getElementById('route_abilities_1')) != null ) {
            document.getElementById('route_abilities_1').addEventListener("click", function(event) {
                Handle_check_route('abilities_1');
            });
        };

        if ((document.getElementById('route_abilities_2')) != null ) {
            document.getElementById('route_abilities_2').addEventListener("click", function(event) {
                Handle_check_route('abilities_2');
            });
        };

        if ((document.getElementById('route_abilities_3')) != null ) {
            document.getElementById('route_abilities_3').addEventListener("click", function(event) {
                Handle_check_route('abilities_3');
            });
        };

        if ((document.getElementById('route_abilities_4')) != null ) {
            document.getElementById('route_abilities_4').addEventListener("click", function(event) {
                Handle_check_route('abilities_4');
            });
        };

        if ((document.getElementById('route_abilities_5')) != null ) {
            document.getElementById('route_abilities_5').addEventListener("click", function(event) {
                Handle_check_route('abilities_5');
            });
        };

        if ((document.getElementById('route_abilities_6')) != null ) {
            document.getElementById('route_abilities_6').addEventListener("click", function(event) {
                Handle_check_route('abilities_6');
            });
        };

        if ((document.getElementById('route_services')) != null ) {
            document.getElementById('route_services').addEventListener("click", function(event) {
                Handle_check_route('services');
            });
        };

        if ((document.getElementById('route_services_1')) != null ) {
            document.getElementById('route_services_1').addEventListener("click", function(event) {
                Handle_check_route('services_1');
            });
        };

        if ((document.getElementById('route_services_2')) != null ) {
            document.getElementById('route_services_2').addEventListener("click", function(event) {
                Handle_check_route('services_2');
            });
        };

        if ((document.getElementById('route_services_3')) != null ) {
            document.getElementById('route_services_3').addEventListener("click", function(event) {
                Handle_check_route('services_3');
            });
        };

        if ((document.getElementById('route_services_4')) != null ) {
            document.getElementById('route_services_4').addEventListener("click", function(event) {
                Handle_check_route('services_4');
            });
        };

        if ((document.getElementById('route_services_5')) != null ) {
            document.getElementById('route_services_5').addEventListener("click", function(event) {
                Handle_check_route('services_5');
            });
        };

        if ((document.getElementById('route_services_6')) != null ) {
            document.getElementById('route_services_6').addEventListener("click", function(event) {
                Handle_check_route('services_6');
            });
        };

        if ((document.getElementById('route_workshop')) != null ) {
            document.getElementById('route_workshop').addEventListener("click", function(event) {
                Handle_check_route('workshop');
            });
        };

        if ((document.getElementById('route_workshop_1')) != null ) {
            document.getElementById('route_workshop_1').addEventListener("click", function(event) {
                Handle_check_route('workshop_1');
            });
        };

        if ((document.getElementById('route_workshop_2')) != null ) {
            document.getElementById('route_workshop_2').addEventListener("click", function(event) {
                Handle_check_route('workshop_2');
            });
        };

        if ((document.getElementById('route_workshop_3')) != null ) {
            document.getElementById('route_workshop_3').addEventListener("click", function(event) {
                Handle_check_route('workshop_3');
            });
        };

        if ((document.getElementById('route_workshop_4')) != null ) {
            document.getElementById('route_workshop_4').addEventListener("click", function(event) {
                Handle_check_route('workshop_4');
            });
        };

        if ((document.getElementById('route_workshop_5')) != null ) {
            document.getElementById('route_workshop_5').addEventListener("click", function(event) {
                Handle_check_route('workshop_5');
            });
        };

        if ((document.getElementById('route_workshop_6')) != null ) {
            document.getElementById('route_workshop_6').addEventListener("click", function(event) {
                Handle_check_route('workshop_6');
            });
        };

        if ((document.getElementById('route_partners')) != null ) {
            document.getElementById('route_partners').addEventListener("click", function(event) {
                Handle_check_route('partners');
            });
        };

        if ((document.getElementById('route_partners_1')) != null ) {
            document.getElementById('route_partners_1').addEventListener("click", function(event) {
                Handle_check_route('partners_1');
            });
        };

        if ((document.getElementById('route_partners_2')) != null ) {
            document.getElementById('route_partners_2').addEventListener("click", function(event) {
                Handle_check_route('partners_2');
            });
        };

        if ((document.getElementById('route_partners_3')) != null ) {
            document.getElementById('route_partners_3').addEventListener("click", function(event) {
                Handle_check_route('partners_3');
            });
        };

        if ((document.getElementById('route_partners_4')) != null ) {
            document.getElementById('route_partners_4').addEventListener("click", function(event) {
                Handle_check_route('partners_4');
            });
        };

        if ((document.getElementById('route_partners_5')) != null ) {
            document.getElementById('route_partners_5').addEventListener("click", function(event) {
                Handle_check_route('partners_5');
            });
        };

        if ((document.getElementById('route_partners_6')) != null ) {
            document.getElementById('route_partners_6').addEventListener("click", function(event) {
                Handle_check_route('partners_6');
            });
        };

        if ((document.getElementById('route_about')) != null ) {
            document.getElementById('route_about').addEventListener("click", function(event) {

                if (state.app.route != 'about') {
                    
                    Handle_check_route('about');
                    
                    document.getElementById('route_about_icon').classList.remove('circle');
                    document.getElementById('route_about_icon').classList.add('gui_close');

                    HANDLE_animation_hide();

                    state.ui.modal.page.top.display = true;

                    setTimeout(function() {
                        state.ui.modal.page.top.transform = false;
                    }, 101);

                    return;
                }

                if (state.app.route == 'about') {
                    
                    Handle_check_route('home');
                    
                    document.getElementById('route_about_icon').classList.add('circle');
                    document.getElementById('route_about_icon').classList.remove('gui_close');

                    Handle_Firebase_Refs_and_Render();

                    HANDLE_animation_unhide();

                    state.ui.modal.page.top.transform = true;

                    setTimeout(function() {
                        state.ui.modal.page.top.display = false;
                    }, 101);

                    return;
                }

            });
        };

        if ((document.getElementById('route_about_1')) != null ) {
            document.getElementById('route_about_1').addEventListener("click", function(event) {
                Handle_check_route('about_1');
            });
        };

        if ((document.getElementById('route_about_2')) != null ) {
            document.getElementById('route_about_2').addEventListener("click", function(event) {
                Handle_check_route('about_2');
            });
        };

        if ((document.getElementById('route_about_3')) != null ) {
            document.getElementById('route_about_3').addEventListener("click", function(event) {
                Handle_check_route('about_3');
            });
        };

        if ((document.getElementById('route_about_4')) != null ) {
            document.getElementById('route_about_4').addEventListener("click", function(event) {
                Handle_check_route('about_4');
            });
        };

        if ((document.getElementById('route_about_5')) != null ) {
            document.getElementById('route_about_5').addEventListener("click", function(event) {
                Handle_check_route('about_5');
            });
        };

        if ((document.getElementById('route_about_6')) != null ) {
            document.getElementById('route_about_6').addEventListener("click", function(event) {
                Handle_check_route('about_6');
            });
        };

        if ((document.getElementById('route_about_all')) != null ) {
            document.getElementById('route_about_all').addEventListener("click", function(event) {
                Handle_check_route('about_all');
            });
        };

        if ((document.getElementById('route_team_all')) != null ) {
            document.getElementById('route_team_all').addEventListener("click", function(event) {
                Handle_check_route('team_all');
            });
        };

        if ((document.getElementById('route_library_all')) != null ) {
            document.getElementById('route_library_all').addEventListener("click", function(event) {
                Handle_check_route('library_all');
            });
        };

        if ((document.getElementById('route_abilities_all')) != null ) {
            document.getElementById('route_abilities_all').addEventListener("click", function(event) {
                Handle_check_route('abilities_all');
            });
        };

        if ((document.getElementById('route_partners_all')) != null ) {
            document.getElementById('route_partners_all').addEventListener("click", function(event) {
                Handle_check_route('partners_all');
            });
        };

        if ((document.getElementById('route_services_all')) != null ) {
            document.getElementById('route_services_all').addEventListener("click", function(event) {
                Handle_check_route('services_all');
            });
        };

        if ((document.getElementById('route_workshop_all')) != null ) {
            document.getElementById('route_workshop_all').addEventListener("click", function(event) {
                Handle_check_route('workshop_all');
            });
        };

        if ((document.getElementById('route_about_cta')) != null ) {
            document.getElementById('route_about_cta').addEventListener("click", function(event) {
                Handle_check_route('about_cta');
            });
        };

        if ((document.getElementById('route_services_cta')) != null ) {
            document.getElementById('route_services_cta').addEventListener("click", function(event) {
                Handle_check_route('services_cta');
            });
        };

        if ((document.getElementById('route_partners_cta')) != null ) {
            document.getElementById('route_partners_cta').addEventListener("click", function(event) {
                Handle_check_route('partners_cta');
            });
        };

        if ((document.getElementById('route_abilities_cta')) != null ) {
            document.getElementById('route_abilities_cta').addEventListener("click", function(event) {
                Handle_check_route('abilities_cta');
            });
        };

        if ((document.getElementById('route_library_cta')) != null ) {
            document.getElementById('route_library_cta').addEventListener("click", function(event) {
                Handle_check_route('library_cta');
            });
        };

        if ((document.getElementById('route_workshop_cta')) != null ) {
            document.getElementById('route_workshop_cta').addEventListener("click", function(event) {
                Handle_check_route('workshop_cta');
            });
        };

        if ((document.getElementById('route_team_cta')) != null ) {
            document.getElementById('route_team_cta').addEventListener("click", function(event) {
                Handle_check_route('team_cta');
            });
        };


        // Gui Button Actions
        if ((document.getElementById('icon_menu')) != null ) {
            document.getElementById('icon_menu').addEventListener("click", function(event) {

                if ((document.getElementById('icon_menu').classList.contains('gui_logo_navs'))) {
                    
                    // style
                    document.getElementById('icon_menu').classList.remove('gui_logo_navs');
                    document.getElementById('icon_menu').classList.add('gui_close');
                    
                    // navs
                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.nav.top.transform = true;
                        
                    // menu
                    state.ui.modal.menu.left.display = true;

                    setTimeout( () => {
                        state.ui.modal.menu.left.transform = false;

                    }, 101);

                } else {

                    // menu closed
                    // style
                    document.getElementById('icon_menu').classList.remove('gui_close');
                    document.getElementById('icon_menu').classList.add('gui_logo_navs');

                    // nav
                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.nav.top.transform = false;
                        
                    // menu
                    state.ui.modal.menu.left.transform = true;

                    setTimeout( () => {
                        state.ui.modal.menu.left.display = false;

                    }, 101);

                };

            });
        };

        if ((document.getElementById('icon_dots')) != null ) {
            document.getElementById('icon_dots').addEventListener("click", function(event) {

                if ((document.getElementById('icon_dots').classList.contains('gui_dots'))) {
                    
                    // style
                    document.getElementById('icon_dots').classList.remove('gui_dots');
                    document.getElementById('icon_dots').classList.add('gui_close');
                        
                    // menu
                    state.ui.modal.menu.right.display = true;

                    setTimeout( () => {
                        state.ui.modal.menu.right.transform = false;

                    }, 101);

                } else {

                    // menu closed
                    // style
                    document.getElementById('icon_dots').classList.remove('gui_close');
                    document.getElementById('icon_dots').classList.add('gui_dots');
                        
                    // menu
                    state.ui.modal.menu.right.transform = true;

                    setTimeout( () => {
                        state.ui.modal.menu.right.display = false;

                    }, 101);

                };

            });
        };

        if ((document.getElementById('icon_vert_dots')) != null ) {
            document.getElementById('icon_vert_dots').addEventListener("click", function(event) {

                if ((document.getElementById('icon_vert_dots').classList.contains('gui_vert_dots'))) {
                    
                    // style
                    document.getElementById('icon_vert_dots').classList.remove('gui_vert_dots');
                    document.getElementById('icon_vert_dots').classList.add('gui_close');
                        
                    // menu
                    state.ui.modal.menu.right.display = true;

                    setTimeout( () => {
                        state.ui.modal.menu.right.transform = false;

                    }, 101);

                } else {

                    // menu closed
                    // style
                    document.getElementById('icon_vert_dots').classList.remove('gui_close');
                    document.getElementById('icon_vert_dots').classList.add('gui_vert_dots');
                        
                    // menu
                    state.ui.modal.menu.right.transform = true;

                    setTimeout( () => {
                        state.ui.modal.menu.right.display = false;

                    }, 101);

                };

            });
        };


        if ((document.getElementById('icon_logo')) != null ) {
            document.getElementById('icon_logo').addEventListener("click", function(event) {

                HANDLE_animation_null();
                HANDLE_animation_gui_default();
                HANDLE_animation_modals_default();

            });
        };

        if ((document.getElementById('icon_back')) != null ) {
            document.getElementById('icon_back').addEventListener("click", function(event) {

                HANDLE_animation_back_to_key_pressed();

            });
        };

        if ((document.getElementById('icon_up')) != null ) {
            document.getElementById('icon_up').addEventListener("click", function(event) {

                HANDLE_animation_back_to_up();

            });
        };

        if ((document.getElementById('icon_search')) != null ) {
            document.getElementById('icon_search').addEventListener("click", function(event) {
                
                //document.getElementById('component_app_modal_element_page_left_content').innerHTML = imported_elements.component_app_content_blog();
                
                state.ui.modal.menu.top.display = true;

                setTimeout( () => {
                    state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
                }, 101);

                state.ui.modal.page.left.display = true;

                setTimeout( () => {
                    state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
                }, 101);

            });
        };

        if ((document.getElementById('icon_create')) != null ) {
            document.getElementById('icon_create').addEventListener("click", function(event) {
                
                //alert('yup again');

                if (state.ui.modal.pop.bottom.transform == true) {
                    //document.getElementById('component_app_modal_element_pop_bottom_content').innerHTML = imported_elements.route_components();
                };

                state.ui.modal.pop.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
                }, 101);

            });
        };
        
        if ((document.getElementById('icon_sign_in')) != null ) {
            document.getElementById('icon_sign_in').addEventListener("click", function(event) {             

            });
        };

        if ((document.getElementById('icon_sign_up')) != null ) {
            document.getElementById('icon_sign_up').addEventListener("click", function(event) {

            });
        };

        if ((document.getElementById('icon_sign_out')) != null ) {
            document.getElementById('icon_sign_out').addEventListener("click", function(event) {

                sign_out_ui();

            });
        };

        if ((document.getElementById('icon_dashboard')) != null ) {
            document.getElementById('icon_dashboard').addEventListener("click", function(event) {
                
                HANDLE_animation_hide();

                state.ui.modal.page.right.display = true;

                setTimeout( () => {
                    state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
                }, 101);

                Handle_Firebase_Refs_and_Render();

            });
        };

        if ((document.getElementById('icon_location')) != null ) {
            document.getElementById('icon_location').addEventListener("click", function(event) {
                
                //document.getElementById('component_app_modal_element_page_top_content').innerHTML = <div id="dashboard_posts"></div>;
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 101);

            });
        };

        if ((document.getElementById('icon_qr')) != null ) {
            document.getElementById('icon_qr').addEventListener("click", function(event) {
                
                //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.qr_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 101);

            });
        };

        if ((document.getElementById('icon_hire')) != null ) {
            document.getElementById('icon_hire').addEventListener("click", function(event) {

                //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.hire_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 101);

            });
        };

        if ((document.getElementById('icon_help')) != null ) {
            document.getElementById('icon_help').addEventListener("click", function(event) {

                //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.user_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 101);

            });
        };

        if ((document.getElementById('icon_audio')) != null ) {
            document.getElementById('icon_audio').addEventListener("click", function(event) {

                //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_in_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 101);
                
            });
        };

        if ((document.getElementById('icon_info')) != null ) {
            document.getElementById('icon_info').addEventListener("click", function(event) {
                //document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.pagination_form_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 101);
            }); 
        };

        // dev mode actions
        if ((document.getElementById('component_route_roster_page_bottom_temp')) != null ) {

            document.getElementById('component_route_roster_page_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = true;
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            });

            document.getElementById('component_route_services_page_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = true;
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            });

            document.getElementById('component_route_library_page_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = true;
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            });

            document.getElementById('component_route_partners_page_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = true;
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            });

            document.getElementById('component_route_abilities_page_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = true;
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            });
        };

        if ( (document.getElementById('component_gradient_top_temp')) != null ) {
        
            document.getElementById('component_gradient_top_temp').addEventListener("click", function(event) {
                state.ui.modal.gradient.top.display = true;

                setTimeout( () => {
                    state.ui.modal.gradient.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_gradient_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.gradient.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.gradient.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_gradient_right_temp').addEventListener("click", function(event) {
                state.ui.modal.gradient.right.display = true;

                setTimeout( () => {
                    state.ui.modal.gradient.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_gradient_left_temp').addEventListener("click", function(event) {
                state.ui.modal.gradient.left.display = true;

                setTimeout( () => {
                    state.ui.modal.gradient.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_menu_top_temp').addEventListener("click", function(event) {
                state.ui.modal.menu.top.display = true;

                setTimeout( () => {
                    state.ui.modal.menu.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_menu_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.menu.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.menu.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_menu_right_temp').addEventListener("click", function(event) {
                state.ui.modal.menu.right.display = true;

                setTimeout( () => {
                    state.ui.modal.menu.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_menu_left_temp').addEventListener("click", function(event) {
                state.ui.modal.menu.left.display = true;

                setTimeout( () => {
                    state.ui.modal.menu.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_fade_top_temp').addEventListener("click", function(event) {
                state.ui.modal.fade.top.display = true;

                setTimeout( () => {
                    state.ui.modal.fade.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_fade_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.fade.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.fade.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_fade_right_temp').addEventListener("click", function(event) {
                state.ui.modal.fade.right.display = true;

                setTimeout( () => {
                    state.ui.modal.fade.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_fade_left_temp').addEventListener("click", function(event) {
                state.ui.modal.fade.left.display = true;

                setTimeout( () => {
                    state.ui.modal.fade.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_corner_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.corner.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.corner.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_corner_right_temp').addEventListener("click", function(event) {
                state.ui.modal.corner.right.display = true;

                setTimeout( () => {
                    state.ui.modal.corner.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_corner_left_temp').addEventListener("click", function(event) {
                state.ui.modal.corner.left.display = true;

                setTimeout( () => {
                    state.ui.modal.corner.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_morph_top_temp').addEventListener("click", function(event) {
                state.ui.modal.morph.top.display = true;

                setTimeout( () => {
                    state.ui.modal.morph.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_morph_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.morph.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.morph.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_morph_right_temp').addEventListener("click", function(event) {
                state.ui.modal.morph.right.display = true;

                setTimeout( () => {
                    state.ui.modal.morph.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_morph_left_temp').addEventListener("click", function(event) {
                state.ui.modal.morph.left.display = true;

                setTimeout( () => {
                    state.ui.modal.morph.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_nav_top_temp').addEventListener("click", function(event) {
                state.ui.modal.nav.top.display = true;

                setTimeout( () => {
                    state.ui.modal.nav.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_nav_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.nav.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.nav.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_nav_right_temp').addEventListener("click", function(event) {
                state.ui.modal.nav.right.display = true;

                setTimeout( () => {
                    state.ui.modal.nav.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_nav_left_temp').addEventListener("click", function(event) {
                state.ui.modal.nav.left.display = true;

                setTimeout( () => {
                    state.ui.modal.nav.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_overlay_top_temp').addEventListener("click", function(event) {
                state.ui.modal.overlay.top.display = true;

                setTimeout( () => {
                    state.ui.modal.overlay.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_overlay_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.overlay.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.overlay.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_overlay_right_temp').addEventListener("click", function(event) {
                state.ui.modal.overlay.right.display = true;

                setTimeout( () => {
                    state.ui.modal.overlay.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_overlay_left_temp').addEventListener("click", function(event) {
                state.ui.modal.overlay.left.display = true;

                setTimeout( () => {
                    state.ui.modal.overlay.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_pop_top_temp').addEventListener("click", function(event) {
                state.ui.modal.pop.top.display = true;

                setTimeout( () => {
                    state.ui.modal.pop.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_pop_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.pop.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.pop.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_pop_right_temp').addEventListener("click", function(event) {
                state.ui.modal.pop.right.display = true;

                setTimeout( () => {
                    state.ui.modal.pop.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_pop_left_temp').addEventListener("click", function(event) {
                state.ui.modal.pop.left.display = true;

                setTimeout( () => {
                    state.ui.modal.pop.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_page_top_temp').addEventListener("click", function(event) {
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = false;
                }, 1000);
            });

            document.getElementById('component_page_bottom_temp').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = true;

                setTimeout( () => {
                    state.ui.modal.page.bottom.transform = false;
                }, 1000);
            });

            document.getElementById('component_page_right_temp').addEventListener("click", function(event) {
                state.ui.modal.page.right.display = true;

                setTimeout( () => {
                    state.ui.modal.page.right.transform = false;
                }, 1000);
            });

            document.getElementById('component_page_left_temp').addEventListener("click", function(event) {
                state.ui.modal.page.left.display = true;

                setTimeout( () => {
                    state.ui.modal.page.left.transform = false;
                }, 1000);
            });

            document.getElementById('component_app_gui_top_left').addEventListener("click", function(event) {

            });

            document.getElementById('component_app_gui_top_right').addEventListener("click", function(event) {

            });

            document.getElementById('component_app_gui_top_center').addEventListener("click", function(event) {

            });

            document.getElementById('component_app_gui_left').addEventListener("click", function(event) {
                state.ui.modal.pop.left.display = true;
                state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
            });

            document.getElementById('component_app_gui_right').addEventListener("click", function(event) {
                state.ui.modal.pop.right.display = true;
                state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
            });

            document.getElementById('component_app_gui_bottom_center').addEventListener("click", function(event) {
                state.ui.modal.pop.bottom.display = true;
                state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
            });

            document.getElementById('component_app_gui_bottom_left').addEventListener("click", function(event) {
                state.ui.modal.pop.top.display = true;
                state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
            });

            document.getElementById('component_app_gui_bottom_right').addEventListener("click", function(event) {
                state.ui.modal.pop.top.display = true;
                state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
            });

        };

        if ( (document.getElementById('component_app_status_display_nav_top')) != null ) {

            document.getElementById('component_app_status_display_nav_top').addEventListener("click", function(event) {
                state.ui.modal.nav.top.display = !state.ui.modal.nav.top.display;
            });

            document.getElementById('component_app_status_opacity_nav_top').addEventListener("click", function(event) {
                state.ui.modal.nav.top.opacity = !state.ui.modal.nav.top.opacity;
            });

            document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function(event) {
                state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
            });

            // nav - left
            document.getElementById('component_app_status_display_nav_left').addEventListener("click", function(event) {
                state.ui.modal.nav.left.display = !state.ui.modal.nav.left.display;
            });

            document.getElementById('component_app_status_opacity_nav_left').addEventListener("click", function(event) {
                state.ui.modal.nav.left.opacity = !state.ui.modal.nav.left.opacity;
            });

            document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function(event) {
                state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
            });

            // nav - bottom
            document.getElementById('component_app_status_display_nav_bottom').addEventListener("click", function(event) {
                state.ui.modal.nav.bottom.display = !state.ui.modal.nav.bottom.display;
            });

            document.getElementById('component_app_status_opacity_nav_bottom').addEventListener("click", function(event) {
                state.ui.modal.nav.bottom.opacity = !state.ui.modal.nav.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function(event) {
                state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
            });

            // nav - right
            document.getElementById('component_app_status_display_nav_right').addEventListener("click", function(event) {
                state.ui.modal.nav.right.display = !state.ui.modal.nav.right.display;
            });

            document.getElementById('component_app_status_opacity_nav_right').addEventListener("click", function(event) {
                state.ui.modal.nav.right.opacity = !state.ui.modal.nav.right.opacity;
            });

            document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function(event) {
                state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
            });


            // pop - top
            document.getElementById('component_app_status_display_pop_top').addEventListener("click", function(event) {
                state.ui.modal.pop.top.display = !state.ui.modal.pop.top.display;
            });

            document.getElementById('component_app_status_opacity_pop_top').addEventListener("click", function(event) {
                state.ui.modal.pop.top.opacity = !state.ui.modal.pop.top.opacity;
            });

            document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function(event) {
                state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
            });

            // pop - left
            document.getElementById('component_app_status_display_pop_left').addEventListener("click", function(event) {
                state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
            });

            document.getElementById('component_app_status_opacity_pop_left').addEventListener("click", function(event) {
                state.ui.modal.pop.left.opacity = !state.ui.modal.pop.left.opacity;
            });

            document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function(event) {
                state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
            });

            // pop - bottom
            document.getElementById('component_app_status_display_pop_bottom').addEventListener("click", function(event) {
                state.ui.modal.pop.bottom.display = !state.ui.modal.pop.bottom.display;
            });

            document.getElementById('component_app_status_opacity_pop_bottom').addEventListener("click", function(event) {
                state.ui.modal.pop.bottom.opacity = !state.ui.modal.pop.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function(event) {
                state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
            });

            // pop - right
            document.getElementById('component_app_status_display_pop_right').addEventListener("click", function(event) {
                state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
            });

            document.getElementById('component_app_status_opacity_pop_right').addEventListener("click", function(event) {
                state.ui.modal.pop.right.opacity = !state.ui.modal.pop.right.opacity;
            });

            document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function(event) {
                state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
            });

            // pip - top
            document.getElementById('component_app_status_display_pip_top').addEventListener("click", function(event) {
                state.ui.modal.pip.top.display = !state.ui.modal.pip.top.display;
            });

            document.getElementById('component_app_status_opacity_pip_top').addEventListener("click", function(event) {
                state.ui.modal.pip.top.opacity = !state.ui.modal.pip.top.opacity;
            });

            document.getElementById('component_app_status_transform_pip_top').addEventListener("click", function(event) {
                state.ui.modal.pip.top.transform = !state.ui.modal.pip.top.transform;
            });

            // pip - left
            document.getElementById('component_app_status_display_pip_left').addEventListener("click", function(event) {
                state.ui.modal.pip.left.display = !state.ui.modal.pip.left.display;
            });

            document.getElementById('component_app_status_opacity_pip_left').addEventListener("click", function(event) {
                state.ui.modal.pip.left.opacity = !state.ui.modal.pip.left.opacity;
            });

            document.getElementById('component_app_status_transform_pip_left').addEventListener("click", function(event) {
                state.ui.modal.pip.left.transform = !state.ui.modal.pip.left.transform;
            });

            // pip - bottom
            document.getElementById('component_app_status_display_pip_bottom').addEventListener("click", function(event) {
                state.ui.modal.pip.bottom.display = !state.ui.modal.pip.bottom.display;
            });

            document.getElementById('component_app_status_opacity_pip_bottom').addEventListener("click", function(event) {
                state.ui.modal.pip.bottom.opacity = !state.ui.modal.pip.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_pip_bottom').addEventListener("click", function(event) {
                state.ui.modal.pip.bottom.transform = !state.ui.modal.pip.bottom.transform;
            });

            // pip - right
            document.getElementById('component_app_status_display_pip_right').addEventListener("click", function(event) {
                state.ui.modal.pip.right.display = !state.ui.modal.pip.right.display;
            });

            document.getElementById('component_app_status_opacity_pip_right').addEventListener("click", function(event) {
                state.ui.modal.pip.right.opacity = !state.ui.modal.pip.right.opacity;
            });

            document.getElementById('component_app_status_transform_pip_right').addEventListener("click", function(event) {
                state.ui.modal.pip.right.transform = !state.ui.modal.pip.right.transform;
            });


            // page - top
            document.getElementById('component_app_status_display_page_top').addEventListener("click", function(event) {
                state.ui.modal.page.top.display = !state.ui.modal.page.top.display;
            });

            document.getElementById('component_app_status_opacity_page_top').addEventListener("click", function(event) {
                state.ui.modal.page.top.opacity = !state.ui.modal.page.top.opacity;
            });

            document.getElementById('component_app_status_transform_page_top').addEventListener("click", function(event) {
                state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
            });

            // page - left
            document.getElementById('component_app_status_display_page_left').addEventListener("click", function(event) {
                state.ui.modal.page.left.display = !state.ui.modal.page.left.display;
            });

            document.getElementById('component_app_status_opacity_page_left').addEventListener("click", function(event) {
                state.ui.modal.page.left.opacity = !state.ui.modal.page.left.opacity;
            });

            document.getElementById('component_app_status_transform_page_left').addEventListener("click", function(event) {
                state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
            });

            // page - bottom
            document.getElementById('component_app_status_display_page_bottom').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.display = !state.ui.modal.page.bottom.display;
            });

            document.getElementById('component_app_status_opacity_page_bottom').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.opacity = !state.ui.modal.page.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function(event) {
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            });

            // page - right
            document.getElementById('component_app_status_display_page_right').addEventListener("click", function(event) {
                state.ui.modal.page.right.display = !state.ui.modal.page.right.display;
            });

            document.getElementById('component_app_status_opacity_page_right').addEventListener("click", function(event) {
                state.ui.modal.page.right.opacity = !state.ui.modal.page.right.opacity;
            });

            document.getElementById('component_app_status_transform_page_right').addEventListener("click", function(event) {
                state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
            });


            // morph - top
            document.getElementById('component_app_status_display_morph_top').addEventListener("click", function(event) {
                state.ui.modal.morph.top.display = !state.ui.modal.morph.top.display;
            });

            document.getElementById('component_app_status_opacity_morph_top').addEventListener("click", function(event) {
                state.ui.modal.morph.top.opacity = !state.ui.modal.morph.top.opacity;
            });

            document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function(event) {
                state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
            });

            // morph - left
            document.getElementById('component_app_status_display_morph_left').addEventListener("click", function(event) {
                state.ui.modal.morph.left.display = !state.ui.modal.morph.left.display;
            });

            document.getElementById('component_app_status_opacity_morph_left').addEventListener("click", function(event) {
                state.ui.modal.morph.left.opacity = !state.ui.modal.morph.left.opacity;
            });

            document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function(event) {
                state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
            });

            // morph - bottom
            document.getElementById('component_app_status_display_morph_bottom').addEventListener("click", function(event) {
                state.ui.modal.morph.bottom.display = !state.ui.modal.morph.bottom.display;
            });

            document.getElementById('component_app_status_opacity_morph_bottom').addEventListener("click", function(event) {
                state.ui.modal.morph.bottom.opacity = !state.ui.modal.morph.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function(event) {
                state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
            });

            // morph - right
            document.getElementById('component_app_status_display_morph_right').addEventListener("click", function(event) {
                state.ui.modal.morph.right.display = !state.ui.modal.morph.right.display;
            });

            document.getElementById('component_app_status_opacity_morph_right').addEventListener("click", function(event) {
                state.ui.modal.morph.right.opacity = !state.ui.modal.morph.right.opacity;
            });

            document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function(event) {
                state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
            });


            // corner - top
            document.getElementById('component_app_status_display_corner_top').addEventListener("click", function(event) {
                state.ui.modal.corner.top.display = !state.ui.modal.corner.top.display;
            });

            document.getElementById('component_app_status_opacity_corner_top').addEventListener("click", function(event) {
                state.ui.modal.corner.top.opacity = !state.ui.modal.corner.top.opacity;
            });

            document.getElementById('component_app_status_transform_corner_top').addEventListener("click", function(event) {
                state.ui.modal.corner.top.transform = !state.ui.modal.corner.top.transform;
            });

            // corner - left
            document.getElementById('component_app_status_display_corner_left').addEventListener("click", function(event) {
                state.ui.modal.corner.left.display = !state.ui.modal.corner.left.display;
            });

            document.getElementById('component_app_status_opacity_corner_left').addEventListener("click", function(event) {
                state.ui.modal.corner.left.opacity = !state.ui.modal.corner.left.opacity;
            });

            document.getElementById('component_app_status_transform_corner_left').addEventListener("click", function(event) {
                state.ui.modal.corner.left.transform = !state.ui.modal.corner.left.transform;
            });

            // corner - bottom
            document.getElementById('component_app_status_display_corner_bottom').addEventListener("click", function(event) {
                state.ui.modal.corner.bottom.display = !state.ui.modal.corner.bottom.display;
            });

            document.getElementById('component_app_status_opacity_corner_bottom').addEventListener("click", function(event) {
                state.ui.modal.corner.bottom.opacity = !state.ui.modal.corner.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_corner_bottom').addEventListener("click", function(event) {
                state.ui.modal.corner.bottom.transform = !state.ui.modal.corner.bottom.transform;
            });

            // corner - right
            document.getElementById('component_app_status_display_corner_right').addEventListener("click", function(event) {
                state.ui.modal.corner.right.display = !state.ui.modal.corner.right.display;
            });

            document.getElementById('component_app_status_opacity_corner_right').addEventListener("click", function(event) {
                state.ui.modal.corner.right.opacity = !state.ui.modal.corner.right.opacity;
            });

            document.getElementById('component_app_status_transform_corner_right').addEventListener("click", function(event) {
                state.ui.modal.corner.right.transform = !state.ui.modal.corner.right.transform;
            });


            // fade - top
            document.getElementById('component_app_status_display_fade_top').addEventListener("click", function(event) {
                state.ui.modal.fade.top.display = !state.ui.modal.fade.top.display;
            });

            document.getElementById('component_app_status_opacity_fade_top').addEventListener("click", function(event) {
                state.ui.modal.fade.top.opacity = !state.ui.modal.fade.top.opacity;
            });

            document.getElementById('component_app_status_transform_fade_top').addEventListener("click", function(event) {
                state.ui.modal.fade.top.transform = !state.ui.modal.fade.top.transform;
                alert('component_app_status_transform_fade_top:' + state.ui.modal.fade.top.transform);
            });

            // fade - left
            document.getElementById('component_app_status_display_fade_left').addEventListener("click", function(event) {
                state.ui.modal.fade.left.display = !state.ui.modal.fade.left.display;
            });

            document.getElementById('component_app_status_opacity_fade_left').addEventListener("click", function(event) {
                state.ui.modal.fade.left.opacity = !state.ui.modal.fade.left.opacity;
            });

            document.getElementById('component_app_status_transform_fade_left').addEventListener("click", function(event) {
                state.ui.modal.fade.left.transform = !state.ui.modal.fade.left.transform;
            });

            // fade - bottom
            document.getElementById('component_app_status_display_fade_bottom').addEventListener("click", function(event) {
                state.ui.modal.fade.bottom.display = !state.ui.modal.fade.bottom.display;
            });

            document.getElementById('component_app_status_opacity_fade_bottom').addEventListener("click", function(event) {
                state.ui.modal.fade.bottom.opacity = !state.ui.modal.fade.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_fade_bottom').addEventListener("click", function(event) {
                state.ui.modal.fade.bottom.transform = !state.ui.modal.fade.bottom.transform;
            });

            // fade - right
            document.getElementById('component_app_status_display_fade_right').addEventListener("click", function(event) {
                state.ui.modal.fade.right.display = !state.ui.modal.fade.right.display;
            });

            document.getElementById('component_app_status_opacity_fade_right').addEventListener("click", function(event) {
                state.ui.modal.fade.right.opacity = !state.ui.modal.fade.right.opacity;
            });

            document.getElementById('component_app_status_transform_fade_right').addEventListener("click", function(event) {
                state.ui.modal.fade.right.transform = !state.ui.modal.fade.right.transform;
            });


            // gradient - top
            document.getElementById('component_app_status_display_gradient_top').addEventListener("click", function(event) {
                state.ui.modal.gradient.top.display = !state.ui.modal.gradient.top.display;
            });

            document.getElementById('component_app_status_opacity_gradient_top').addEventListener("click", function(event) {
                state.ui.modal.gradient.top.opacity = !state.ui.modal.gradient.top.opacity;
            });

            document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function(event) {
                state.ui.modal.gradient.top.transform = !state.ui.modal.gradient.top.transform;
            });

            // gradient - left
            document.getElementById('component_app_status_display_gradient_left').addEventListener("click", function(event) {
                state.ui.modal.gradient.left.display = !state.ui.modal.gradient.left.display;
            });

            document.getElementById('component_app_status_opacity_gradient_left').addEventListener("click", function(event) {
                state.ui.modal.gradient.left.opacity = !state.ui.modal.gradient.left.opacity;
            });

            document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function(event) {
                state.ui.modal.gradient.left.transform = !state.ui.modal.gradient.left.transform;
            });

            // gradient - bottom
            document.getElementById('component_app_status_display_gradient_bottom').addEventListener("click", function(event) {
                state.ui.modal.gradient.bottom.display = !state.ui.modal.gradient.bottom.display;
            });

            document.getElementById('component_app_status_opacity_gradient_bottom').addEventListener("click", function(event) {
                state.ui.modal.gradient.bottom.opacity = !state.ui.modal.gradient.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function(event) {
                state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
            });

            // gradient - right
            document.getElementById('component_app_status_display_gradient_right').addEventListener("click", function(event) {
                state.ui.modal.gradient.right.display = !state.ui.modal.gradient.right.display;
            });

            document.getElementById('component_app_status_opacity_gradient_right').addEventListener("click", function(event) {
                state.ui.modal.gradient.right.opacity = !state.ui.modal.gradient.right.opacity;
            });

            document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function(event) {
                state.ui.modal.gradient.right.transform = !state.ui.modal.gradient.right.transform;
            });


            // menu - top
            document.getElementById('component_app_status_display_menu_top').addEventListener("click", function(event) {
                state.ui.modal.menu.top.display = !state.ui.modal.menu.top.display;
            });

            document.getElementById('component_app_status_opacity_menu_top').addEventListener("click", function(event) {
                state.ui.modal.menu.top.opacity = !state.ui.modal.menu.top.opacity;
            });

            document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function(event) {
                state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
            });

            // menu - left
            document.getElementById('component_app_status_display_menu_left').addEventListener("click", function(event) {
                state.ui.modal.menu.left.display = !state.ui.modal.menu.left.display;
            });

            document.getElementById('component_app_status_opacity_menu_left').addEventListener("click", function(event) {
                state.ui.modal.menu.left.opacity = !state.ui.modal.menu.left.opacity;
            });

            document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function(event) {
                state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
            });

            // menu - bottom
            document.getElementById('component_app_status_display_menu_bottom').addEventListener("click", function(event) {
                state.ui.modal.menu.bottom.display = !state.ui.modal.menu.bottom.display;
            });

            document.getElementById('component_app_status_opacity_menu_bottom').addEventListener("click", function(event) {
                state.ui.modal.menu.bottom.opacity = !state.ui.modal.menu.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function(event) {
                state.ui.modal.menu.bottom.transform = !state.ui.modal.menu.bottom.transform;
            });

            // menu - right
            document.getElementById('component_app_status_display_menu_right').addEventListener("click", function(event) {
                state.ui.modal.menu.right.display = !state.ui.modal.menu.right.display;
            });

            document.getElementById('component_app_status_opacity_menu_right').addEventListener("click", function(event) {
                state.ui.modal.menu.right.opacity = !state.ui.modal.menu.right.opacity;
            });

            document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function(event) {
                state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
            });


            // overlay - top
            document.getElementById('component_app_status_display_overlay_top').addEventListener("click", function(event) {
                state.ui.modal.overlay.top.display = !state.ui.modal.overlay.top.display;
            });

            document.getElementById('component_app_status_opacity_overlay_top').addEventListener("click", function(event) {
                state.ui.modal.overlay.top.opacity = !state.ui.modal.overlay.top.opacity;
            });

            document.getElementById('component_app_status_transform_overlay_top').addEventListener("click", function(event) {
                state.ui.modal.overlay.top.transform = !state.ui.modal.overlay.top.transform;
            });

            // overlay - left
            document.getElementById('component_app_status_display_overlay_left').addEventListener("click", function(event) {
                state.ui.modal.overlay.left.display = !state.ui.modal.overlay.left.display;
            });

            document.getElementById('component_app_status_opacity_overlay_left').addEventListener("click", function(event) {
                state.ui.modal.overlay.left.opacity = !state.ui.modal.overlay.left.opacity;
            });

            document.getElementById('component_app_status_transform_overlay_left').addEventListener("click", function(event) {
                state.ui.modal.overlay.left.transform = !state.ui.modal.overlay.left.transform;
            });

            // overlay - bottom
            document.getElementById('component_app_status_display_overlay_bottom').addEventListener("click", function(event) {
                state.ui.modal.overlay.bottom.display = !state.ui.modal.overlay.bottom.display;
            });

            document.getElementById('component_app_status_opacity_overlay_bottom').addEventListener("click", function(event) {
                state.ui.modal.overlay.bottom.opacity = !state.ui.modal.overlay.bottom.opacity;
            });

            document.getElementById('component_app_status_transform_overlay_bottom').addEventListener("click", function(event) {
                state.ui.modal.overlay.bottom.transform = !state.ui.modal.overlay.bottom.transform;
            });

            // overlay - right
            document.getElementById('component_app_status_display_overlay_right').addEventListener("click", function(event) {
                state.ui.modal.overlay.right.display = !state.ui.modal.overlay.right.display;
            });

            document.getElementById('component_app_status_opacity_overlay_right').addEventListener("click", function(event) {
                state.ui.modal.overlay.right.opacity = !state.ui.modal.overlay.right.opacity;
            });

            document.getElementById('component_app_status_transform_overlay_right').addEventListener("click", function(event) {
                state.ui.modal.overlay.right.transform = !state.ui.modal.overlay.right.transform;
            });
    };
};

let Handle_display_with_delay = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_display_and_opacity_on_with_no_delay, imported_functions.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

let Handle_transform = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

let Handle_opacity = () => {

    for (var i = 0; i < components.length; i++) {

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
        };
    };
};

let Handle_init = () => {
  //console.log('Handle_init');
};

let HANDLE_animation_resize = () => {

    if ((document.getElementById('component_app_animation').classList.contains('calc_25vh'))) {

        document.getElementById('component_app_animation').classList.remove('calc_25vh');
        document.getElementById('component_app_animation').classList.remove('border_radius_1vh');
        document.getElementById('component_app_animation').classList.remove('box_shadow_bottom_left_1vh_dark');
        document.getElementById('component_app_animation').classList.remove('border_01vh_dark_yellow_9');
        document.getElementById('component_app_animation').classList.add('width_100');
        document.getElementById('component_app_animation').classList.add('height_100');
        return
    };

    if ((document.getElementById('component_app_animation').classList.contains('width_100'))) {

        document.getElementById('component_app_animation').classList.add('calc_25vh');
        document.getElementById('component_app_animation').classList.add('border_radius_1vh');
        document.getElementById('component_app_animation').classList.add('box_shadow_bottom_left_1vh_dark');
        document.getElementById('component_app_animation').classList.add('border_01vh_dark_yellow_9');
        document.getElementById('component_app_animation').classList.remove('width_100');
        document.getElementById('component_app_animation').classList.remove('height_100');
        return
    };
};

let HANDLE_animation_gui_default = () => {


    // desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // modals
        state.ui.gui.top_left.display = true;
        state.ui.gui.top.display = false;
        state.ui.gui.top_right.display = true;
        state.ui.gui.bottom_left.display = true;
        state.ui.gui.bottom.display = false;
        state.ui.gui.bottom_right.display = true;
        state.ui.gui.right.display = false;
        state.ui.gui.left.display = false;

        // modals
        setTimeout( () => {  
            state.ui.gui.top_left.tranform = false;
            state.ui.gui.top.tranform = true;
            state.ui.gui.top_right.tranform = false;
            state.ui.gui.bottom_left.tranform = false;
            state.ui.gui.bottom.tranform = true;
            state.ui.gui.bottom_right.tranform = false;
            state.ui.gui.right.tranform = true;
            state.ui.gui.left.tranform = true;

        }, 101);

    };



    // mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // modals
        state.ui.gui.top_left.display = true;
        state.ui.gui.top.display = false;
        state.ui.gui.top_right.display = true;
        state.ui.gui.bottom_left.display = true;
        state.ui.gui.bottom.display = false;
        state.ui.gui.bottom_right.display = true;
        state.ui.gui.right.display = true;
        state.ui.gui.left.display = true;

        // modals
        setTimeout( () => {  
            state.ui.gui.top_left.tranform = false;
            state.ui.gui.top.tranform = true;
            state.ui.gui.top_right.tranform = false;
            state.ui.gui.bottom_left.tranform = false;
            state.ui.gui.bottom.tranform = true;
            state.ui.gui.bottom_right.tranform = false;
            state.ui.gui.right.tranform = false;
            state.ui.gui.left.tranform = false;

        }, 101);

    };
};

let HANDLE_animation_gui_start = () => {

    // modals
    state.ui.gui.top_left.display = true;

    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = true;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = true;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;

    // modals
    setTimeout( () => {  
        state.ui.gui.top_left.tranform = false;

        state.ui.gui.top.tranform = true;
        state.ui.gui.top_right.tranform = false;
        state.ui.gui.bottom_left.tranform = false;
        state.ui.gui.bottom.tranform = true;
        state.ui.gui.bottom_right.tranform = false;
        state.ui.gui.right.tranform = true;
        state.ui.gui.left.tranform = true;

    }, 101);

};

let HANDLE_animation_gui_learn = () => {

    // modals
    state.ui.gui.top_left.display = false;

    state.ui.gui.top.display = true;
    state.ui.gui.top_right.display = false;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = true;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = true;
    state.ui.gui.left.display = true;

    // modals
    setTimeout( () => {  
        state.ui.gui.top_left.tranform = true;

        state.ui.gui.top.tranform = false;
        state.ui.gui.top_right.tranform = true;
        state.ui.gui.bottom_left.tranform = true;
        state.ui.gui.bottom.tranform = false;
        state.ui.gui.bottom_right.tranform = true;
        state.ui.gui.right.tranform = false;
        state.ui.gui.left.tranform = false;

    }, 101);

};

let HANDLE_animation_modals_default = () => {

    state.ui.modal.nav.left.transform = true;
    state.ui.modal.nav.right.transform = true;
    state.ui.modal.nav.top.transform = true;
    state.ui.modal.nav.bottom.transform = true;

    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.bottom.transform = true;

    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.bottom.transform = true;

    state.ui.modal.pip.left.transform = true;
    state.ui.modal.pip.right.transform = true;
    state.ui.modal.pip.top.transform = true;
    state.ui.modal.pip.bottom.transform = true;

    state.ui.modal.morph.left.transform = true;
    state.ui.modal.morph.right.transform = true;
    state.ui.modal.morph.top.transform = true;
    state.ui.modal.morph.bottom.transform = true;

    state.ui.modal.corner.left.transform = true;
    state.ui.modal.corner.right.transform = true;
    state.ui.modal.corner.top.transform = true;
    state.ui.modal.corner.bottom.transform = true;

    state.ui.modal.fade.left.transform = true;
    state.ui.modal.fade.right.transform = true;
    state.ui.modal.fade.top.transform = true;
    state.ui.modal.fade.bottom.transform = true;

    state.ui.modal.gradient.left.transform = true;
    state.ui.modal.gradient.right.transform = true;
    state.ui.modal.gradient.top.transform = true;
    state.ui.modal.gradient.bottom.transform = true;

    state.ui.modal.overlay.left.transform = true;
    state.ui.modal.overlay.right.transform = true;
    state.ui.modal.overlay.top.transform = true;
    state.ui.modal.overlay.bottom.transform = true;

    setTimeout( () => {          

        state.ui.modal.nav.left.display = false;
        state.ui.modal.nav.right.display = false;
        state.ui.modal.nav.top.display = false;
        state.ui.modal.nav.bottom.display = false;

        state.ui.modal.page.left.display = false;
        state.ui.modal.page.right.display = false;
        state.ui.modal.page.top.display = false;
        state.ui.modal.page.bottom.display = false;

        state.ui.modal.pop.left.display = false;
        state.ui.modal.pop.right.display = false;
        state.ui.modal.pop.top.display = false;
        state.ui.modal.pop.bottom.display = false;

        state.ui.modal.pip.left.display = false;
        state.ui.modal.pip.right.display = false;
        state.ui.modal.pip.top.display = false;
        state.ui.modal.pip.bottom.display = false;

        state.ui.modal.morph.left.display = false;
        state.ui.modal.morph.right.display = false;
        state.ui.modal.morph.top.display = false;
        state.ui.modal.morph.bottom.display = false;

        state.ui.modal.corner.left.display = false;
        state.ui.modal.corner.right.display = false;
        state.ui.modal.corner.top.display = false;
        state.ui.modal.corner.bottom.display = false;

        state.ui.modal.fade.left.display = false;
        state.ui.modal.fade.right.display = false;
        state.ui.modal.fade.top.display = false;
        state.ui.modal.fade.bottom.display = false;

        state.ui.modal.gradient.left.display = false;
        state.ui.modal.gradient.right.display = false;
        state.ui.modal.gradient.top.display = false;
        state.ui.modal.gradient.bottom.display = false;

        state.ui.modal.overlay.left.display = false;
        state.ui.modal.overlay.right.display = false;
        state.ui.modal.overlay.top.display = false;
        state.ui.modal.overlay.bottom.display = false;

    }, 101);
};


let HANDLE_animation_modals_hide = () => {

    state.ui.modal.nav.left.transform = true;
    state.ui.modal.nav.right.transform = true;
    state.ui.modal.nav.top.transform = true;
    state.ui.modal.nav.bottom.transform = true;

    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.bottom.transform = true;

    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.bottom.transform = true;

    state.ui.modal.pip.left.transform = true;
    state.ui.modal.pip.right.transform = true;
    state.ui.modal.pip.top.transform = true;
    state.ui.modal.pip.bottom.transform = true;

    state.ui.modal.morph.left.transform = true;
    state.ui.modal.morph.right.transform = true;
    state.ui.modal.morph.top.transform = true;
    state.ui.modal.morph.bottom.transform = true;

    state.ui.modal.corner.left.transform = true;
    state.ui.modal.corner.right.transform = true;
    state.ui.modal.corner.top.transform = true;
    state.ui.modal.corner.bottom.transform = true;

    state.ui.modal.fade.left.transform = true;
    state.ui.modal.fade.right.transform = true;
    state.ui.modal.fade.top.transform = true;
    state.ui.modal.fade.bottom.transform = true;

    state.ui.modal.gradient.left.transform = true;
    state.ui.modal.gradient.right.transform = true;
    state.ui.modal.gradient.top.transform = true;
    state.ui.modal.gradient.bottom.transform = true;

    state.ui.modal.overlay.left.transform = true;
    state.ui.modal.overlay.right.transform = true;
    state.ui.modal.overlay.top.transform = true;
    state.ui.modal.overlay.bottom.transform = true;

    state.ui.modal.menu.left.transform = true;
    state.ui.modal.menu.right.transform = true;
    state.ui.modal.menu.top.transform = true;
    state.ui.modal.menu.bottom.transform = true;
     

        state.ui.modal.nav.left.display = false;
        state.ui.modal.nav.right.display = false;
        state.ui.modal.nav.top.display = false;
        state.ui.modal.nav.bottom.display = false;

        state.ui.modal.page.left.display = false;
        state.ui.modal.page.right.display = false;
        state.ui.modal.page.top.display = false;
        state.ui.modal.page.bottom.display = false;

        state.ui.modal.pop.left.display = false;
        state.ui.modal.pop.right.display = false;
        state.ui.modal.pop.top.display = false;
        state.ui.modal.pop.bottom.display = false;

        state.ui.modal.pip.left.display = false;
        state.ui.modal.pip.right.display = false;
        state.ui.modal.pip.top.display = false;
        state.ui.modal.pip.bottom.display = false;

        state.ui.modal.morph.left.display = false;
        state.ui.modal.morph.right.display = false;
        state.ui.modal.morph.top.display = false;
        state.ui.modal.morph.bottom.display = false;

        state.ui.modal.corner.left.display = false;
        state.ui.modal.corner.right.display = false;
        state.ui.modal.corner.top.display = false;
        state.ui.modal.corner.bottom.display = false;

        state.ui.modal.fade.left.display = false;
        state.ui.modal.fade.right.display = false;
        state.ui.modal.fade.top.display = false;
        state.ui.modal.fade.bottom.display = false;

        state.ui.modal.gradient.left.display = false;
        state.ui.modal.gradient.right.display = false;
        state.ui.modal.gradient.top.display = false;
        state.ui.modal.gradient.bottom.display = false;

        state.ui.modal.overlay.left.display = false;
        state.ui.modal.overlay.right.display = false;
        state.ui.modal.overlay.top.display = false;
        state.ui.modal.overlay.bottom.display = false;

        state.ui.modal.menu.left.display = false;
        state.ui.modal.menu.right.display = false;
        state.ui.modal.menu.top.display = false;
        state.ui.modal.menu.bottom.display = false;

};

let HANDLE_animation_gui_hide = () => {

    // modals
    state.ui.gui.top_left.display = false;
    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = false;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;
};

let HANDLE_animation_gui_show = () => {

    // modals
    state.ui.gui.top_left.display = true;
    state.ui.gui.top.display = true;
    state.ui.gui.top_right.display = true;
    state.ui.gui.bottom_left.display = true;
    state.ui.gui.bottom.display = true;
    state.ui.gui.bottom_right.display = true;
    state.ui.gui.right.display = true;
    state.ui.gui.left.display = true;
};

let HANDLE_animation_gui_tranform = () => {

    // modals
    state.ui.gui.top_left.tranform = true;
    state.ui.gui.top.tranform = true;
    state.ui.gui.top_right.tranform = true;
    state.ui.gui.bottom_left.tranform = true;
    state.ui.gui.bottom.tranform = true;
    state.ui.gui.bottom_right.tranform = true;
    state.ui.gui.right.tranform = true;
    state.ui.gui.left.tranform = true;
};

let HANDLE_animation_gui_untranform = () => {

    // modals
    state.ui.gui.top_left.tranform = false;
    state.ui.gui.top.tranform = false;
    state.ui.gui.top_right.tranform = false;
    state.ui.gui.bottom_left.tranform = false;
    state.ui.gui.bottom.tranform = false;
    state.ui.gui.bottom_right.tranform = false;
    state.ui.gui.right.tranform = false;
    state.ui.gui.left.tranform = false;
};

let HANDLE_animation_null = () => {
};

let HANDLE_animation_loading = () => {
    state.animation.instances.loading = true;
    state.animation.instances.loaded = false;

    document.getElementById('component_app_body').scrollTop = 0;
    document.getElementById('component_app_body').classList.add('overflow_hidden');
    document.getElementById('component_app_body').classList.remove('overflow_y');
};

let HANDLE_animation_loaded = () => {
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;
    HANDLE_animation_gui_default();

    document.getElementById('component_app_body').scrollTop = 0;
    document.getElementById('component_app_body').classList.remove('overflow_hidden');
    document.getElementById('component_app_body').classList.add('overflow_y');
};

let HANDLE_animation_loading_logo = () => {

    (function() {
        let loop = true;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('loading_logo_scene');
                
                    if (MANIPULATED != null) {
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_7';
                        };
                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_8';
                        };
                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_9';
                        };
                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_10';
                        };
                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_11';
                        };
                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_12';
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_13';
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_14';
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_15';
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_16';
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_17';
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_18';
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_19';
                        };
                        if (current_frame == 20) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_20';
                        };
                        if (current_frame == 21) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_21';
                        };
                        if (current_frame == 22) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_22';
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_23';
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_23';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_24';
                        };
                        if (current_frame == 25) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_25';
                        };
                        if (current_frame == 26) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_26';
                        };
                        if (current_frame == 27) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_27';
                        };
                        if (current_frame == 28) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' load_letters_n_28';

                            if ( (loop == true) ) {
                                current_frame = 24;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let paint_animation_hand_drops_paint_can = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_hand_holding_paint');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_7';
                        };
                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_8';
                        };
                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_9';
                        };
                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_10';
                        };
                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_11';
                        };
                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_12';
                            
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_24';
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_23';
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_22';
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_21';
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_20';
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_19';
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_18';
                        };
                        if (current_frame == 20) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_17';
                        };
                        if (current_frame == 21) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_16';
                        };
                        if (current_frame == 22) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_15';
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_14';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_13';
                        };
                        if (current_frame == 25) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' ';

                            if ( (loop == true) ) {
                                current_frame = 0;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let HANDLE_animation_paint_drop_and_splash = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_hand_holding_paint');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_7';
                        };
                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_8';
                        };
                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_9';
                        };
                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_10';
                        };
                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_11';
                        };
                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_12';
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_13';
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_14';
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_15';
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_16';
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_17';
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_18';
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_19';
                        };
                        if (current_frame == 20) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_20';
                        };
                        if (current_frame == 21) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_21';
                        };
                        if (current_frame == 22) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_22';
                            
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_23';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_24';

                            if ( (loop == true) ) {
                                current_frame = 0;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let HANDLE_animation_painting_wall = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('painting_wall');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        
                        if (current_frame == 1) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_1';
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_2';
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_3';
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_4';
                        };
                        if (current_frame == 5) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_5';
                        };
                        if (current_frame == 6) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_6';
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_7';
                        };

                        if (current_frame == 8) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_8';
                        };

                        if (current_frame == 9) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_9';
                        };

                        if (current_frame == 10) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_10';
                        };

                        if (current_frame == 11) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_11';
                        };

                        if (current_frame == 12) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_12';

                            if ( (loop == true) ) {
                                current_frame = 0;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let HANDLE_animation_hide = () => {

    // animation bg
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;
    state.animation.instances.cursor_moved = true;
    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;
    state.animation.instances.hide = true; // mulzi
};

let HANDLE_animation_unhide = () => {

    // animation bg
    state.animation.instances.loading = false;
    state.animation.instances.loaded = true;
    state.animation.instances.cursor_moved = true;
    state.animation.instances.start = false;
    state.animation.instances.learn = false;
    state.animation.instances.scrolled_once = false;
    state.animation.instances.scrolling = false;
    state.animation.instances.hide = false; // mulzi
};

let HANDLE_animation_accent = () => {
        // Accent Layer
        (function() {
            let loop = true;
            let interval = 1;
            let start_animation =
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('texture_layer');
                    
                        if (MANIPULATED != null) {
                            MANIPULATED.innerHTML = '';
                            if (interval == 1) {
                                MANIPULATED.classList.remove('accent_noise_1');
                                MANIPULATED.classList.remove('accent_noise_2');
                                MANIPULATED.classList.remove('accent_noise_3');
                                MANIPULATED.classList.remove('accent_noise_4');
                                MANIPULATED.classList.add('accent_noise_1');
                            };
                            if (interval == 2) {
                                MANIPULATED.classList.remove('accent_noise_1');
                                MANIPULATED.classList.remove('accent_noise_2');
                                MANIPULATED.classList.remove('accent_noise_3');
                                MANIPULATED.classList.remove('accent_noise_4');
                                MANIPULATED.classList.add('accent_noise_4');
                            };
                            if (interval == 3) {
                                MANIPULATED.classList.remove('accent_noise_1');
                                MANIPULATED.classList.remove('accent_noise_2');
                                MANIPULATED.classList.remove('accent_noise_3');
                                MANIPULATED.classList.remove('accent_noise_4');
                                MANIPULATED.classList.add('accent_noise_3');
                            };
                            if (interval == 4) {
                                MANIPULATED.classList.remove('accent_noise_1');
                                MANIPULATED.classList.remove('accent_noise_2');
                                MANIPULATED.classList.remove('accent_noise_3');
                                MANIPULATED.classList.remove('accent_noise_4');
                                MANIPULATED.classList.add('accent_noise_2');

                                if ( (loop == true) ) {
                                    interval = 0;
                                };

                                if ( (loop == false) ) {
                                    clearInterval(start_animation);
                                };

                            };

                            interval += 1;
                        }
                    
                }, (1000 / state.animation.framerate));

        }());
};


let HANDLE_animation_hand_pencil_center = () => {
        // Accent Layer
        (function() {
            let loop = true;
            let interval = 1;
            let start_animation =
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('hand_pencil_center');
                    
                        if (MANIPULATED != null) {
                            MANIPULATED.innerHTML = '';
                            if (interval == 1) {
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_left');
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_right');
                                MANIPULATED.classList.remove('hand_pencil_center_top_left');
                                MANIPULATED.classList.remove('hand_pencil_center_top_right');
                                MANIPULATED.classList.add('hand_pencil_center_bottom_left');
                            };
                            if (interval == 2) {
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_left');
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_right');
                                MANIPULATED.classList.remove('hand_pencil_center_top_left');
                                MANIPULATED.classList.remove('hand_pencil_center_top_right');
                                MANIPULATED.classList.add('hand_pencil_center_top_left');
                            };
                            if (interval == 3) {
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_left');
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_right');
                                MANIPULATED.classList.remove('hand_pencil_center_top_left');
                                MANIPULATED.classList.remove('hand_pencil_center_top_right');
                                MANIPULATED.classList.add('hand_pencil_center_top_right');
                            };
                            if (interval == 4) {
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_left');
                                MANIPULATED.classList.remove('hand_pencil_center_bottom_right');
                                MANIPULATED.classList.remove('hand_pencil_center_top_left');
                                MANIPULATED.classList.remove('hand_pencil_center_top_right');
                                MANIPULATED.classList.add('hand_pencil_center_bottom_right');

                                if ( (loop == true) ) {
                                    interval = 0;
                                };

                                if ( (loop == false) ) {
                                    clearInterval(start_animation);
                                };

                            };

                            interval += 1;
                        }
                    
                }, (1000));

        }());
};

let HANDLE_animation = () => {

        // overall site frames by 24 frames
        (function() {
            let interval = -96;
            setInterval(
                function() {

                    // before "96 frames (4 seconds)"
                    if (interval == -96 ) {
                        HANDLE_pre_loader();
                    };

                    // After "48 frames" exc..
                    if (interval == 0 ) {
                        HANDLE_animation_loading();
                        //HANDLE_animation_hand_pencil_center();
                        //HANDLE_animation_accent();
                    };

                    // 5 seconds of loading for preloading images
                    if (interval == (24 * 1) ) {
                        HANDLE_animation_loading_logo();
                    };

                    if (interval == (24 * 2) ) {
                        HANDLE_animation_loaded();
                    };

                    if (interval == (24 * 3) ) {
                        paint_animation_hand_drops_paint_can();
                    };

                    if (interval == (24 * 4) ) {
                        HANDLE_animation_paint_drop_and_splash();
                    };

                    if (interval == (24 * 5) ) {
                        HANDLE_animation_painting_wall();
                    };

                    if (interval == (24 * 6) ) {
                        state.animation.instances.loaded_1 = true;
                    };

                    if (interval == (24 * 7) ) {
                    };

                    if (interval == (24 * 8) ) {
                    };

                    if (interval == (24 * 9) ) {
                    };

                    if (interval == (24 * 10) ) {
                    };

                    // 5 seconds of loading for preloading images
                    if (interval == (24 * 11) ) {
                    };
                    if (interval == (24 * 12) ) {
                    };
                    interval += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / state.animation.framerate));
        }());

};

let HANDLE_pre_loader = () => {
    
    (function() {
        let loop = false;
        let loops = 0;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('preloader');
                
                    if (MANIPULATED != null) {

                        if (current_frame == 1) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_1');
                        };

                        if (current_frame == 2) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_2');
                        };

                        if (current_frame == 3) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_3');
                        };

                        if (current_frame == 4) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_4');
                        };

                        if (current_frame == 5) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_5');
                        };

                        if (current_frame == 6) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_6');
                        };

                        if (current_frame == 7) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_7');
                        };

                        if (current_frame == 8) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_8');
                        };

                        if (current_frame == 9) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_9');
                        };

                        if (current_frame == 10) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_10');
                        };

                        if (current_frame == 11) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_11');
                        };

                        if (current_frame == 12) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_12');
                        };

                        if (current_frame == 13) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_13');
                        };

                        if (current_frame == 14) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_14');
                        };

                        if (current_frame == 15) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_15');
                        };

                        if (current_frame == 16) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_16');
                        };

                        if (current_frame == 17) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_17');
                        };

                        if (current_frame == 18) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_18');
                        };

                        if (current_frame == 19) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_19');
                        };

                        if (current_frame == 20) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_20');
                        };

                        if (current_frame == 21) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_21');
                        };

                        if (current_frame == 22) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_22');
                        };

                        if (current_frame == 23) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_23');
                        };

                        if (current_frame == 24) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_24');
                        };

                        if (current_frame == 25) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_25');
                        };

                        if (current_frame == 26) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_26');
                        };

                        if (current_frame == 27) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_27');
                        };

                        if (current_frame == 28) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_28');
                        };

                        if (current_frame == 29) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_29');
                        };

                        if (current_frame == 30) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_30');
                        };

                        if (current_frame == 31) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_31');
                        };

                        if (current_frame == 32) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_32');
                        };

                        if (current_frame == 33) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_33');
                        };

                        if (current_frame == 34) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_34');
                        };

                        if (current_frame == 35) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_35');
                        };

                        if (current_frame == 36) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_36');
                        };

                        if (current_frame == 37) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_37');
                        };

                        if (current_frame == 38) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_38');
                        };

                        if (current_frame == 39) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_39');
                        };

                        if (current_frame == 40) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_40');
                        };

                        if (current_frame == 41) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_41');
                        };

                        if (current_frame == 42) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_42');
                        };

                        if (current_frame == 43) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_43');
                        };

                        if (current_frame == 44) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_44');
                        };

                        if (current_frame == 45) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_45');
                        };

                        if (current_frame == 46) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_46');
                        };

                        if (current_frame == 47) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_47');
                        };

                        if (current_frame == 48) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_48');
                        };

                        if (current_frame == 49) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_49');
                        };

                        if (current_frame == 50) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_50');
                        };

                        if (current_frame == 51) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_51');
                        };

                        if (current_frame == 52) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_52');
                        };

                        if (current_frame == 53) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_53');
                        };

                        if (current_frame == 54) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_54');
                        };

                        if (current_frame == 55) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_55');
                        };

                        if (current_frame == 56) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_56');
                        };

                        if (current_frame == 57) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_57');
                        };

                        if (current_frame == 58) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_58');
                        };

                        if (current_frame == 59) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_59');
                        };

                        if (current_frame == 60) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_60');
                        };

                        if (current_frame == 61) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_61');
                        };

                        if (current_frame == 62) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_62');
                        };

                        if (current_frame == 63) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_63');
                        };

                        if (current_frame == 64) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_64');
                        };

                        if (current_frame == 65) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_1');
                        };

                        if (current_frame == 66) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_2');
                        };

                        if (current_frame == 67) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_3');
                        };

                        if (current_frame == 68) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_logo_type_4');
                        };

                        if (current_frame == 69) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1');
                        };

                        if (current_frame == 70) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2');
                        };

                        if (current_frame == 71) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3');
                        };

                        if (current_frame == 72) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4');
                        };

                        if (current_frame == 73) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5');
                        };

                        if (current_frame == 74) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6');
                        };

                        if (current_frame == 75) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7');
                        };

                        if (current_frame == 76) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8');
                        };

                        if (current_frame == 77) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9');
                        };

                        if (current_frame == 78) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
                        };

                        if (current_frame == 79) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
                        };

                        if (current_frame == 80) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
                        };

                        if (current_frame == 81) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4');
                        };

                        if (current_frame == 82) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5');
                        };

                        if (current_frame == 83) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6');
                        };

                        if (current_frame == 84) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7');
                        };

                        if (current_frame == 85) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8');
                        };

                        if (current_frame == 86) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9');
                        };

                        /*
                        if (current_frame == 87) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
                        };

                        if (current_frame == 88) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
                        };

                        if (current_frame == 89) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
                        };
                        */

                        if (current_frame == 86) {

                            if ( (loop == true) ) {
                                current_frame = 0;
                                loops += 1;
                            };

                            if ( (loop == false) ) {
                                clearInterval(start_animation);
                            };
                        };

                        current_frame += 1;
                    }
                
            }, (1000 / state.animation.framerate));

    }());
};

let Handle_check_states = () => {
  //console.log('Handle_check_states');
  components = imported_components.get_components_handled();
  imported_ui.Handle_ui();
  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
  Handle_init();
};

let Handle_return_state = () => { return state };

let Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
    values_update();
    console.log('state in index from events');
    // console.log(state);
};

// resize
let resize = () => {

    // alert('onresize');

    console.log('yup');

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
    
    Handle_get_state_from_events();
};

// Lifecycle hooks
let onload = () => {
        
        // garage('monster', 'monster');
        console.log(localStorage);
        console.log(localStorage.user);
        console.log(window);
        console.log(screen);
        console.log(screen.height);
        console.log(screen.width);
        console.log(navigator);
        console.log(history);
        console.log(history.length);
        console.log(location);
        console.log(location.pathname);

        // render view
        Handle_render();

        // render firebase data
        Handle_Firebase_Refs_and_Render();

        // render route: null
        Handle_check_route(state.app.route);

        // add events
        Handle_EventListeners();

        // start animations
        //HANDLE_animation();

        // start timer
        (() => {
            let int = 0;
            setInterval(function() {

                console.log(state.events.key.keys);

                if (state.events.key.keys.length == 0) {
                    state.events.key.up = true;
                    state.events.key.down = false;
                };

                if (state.events.key.keys.length != 0) {
                    state.events.key.up = false;
                    state.events.key.down = true;
                };

                if (state.events.key.up == true) {
                    state.events.key.timer -= 1;
                    console.log('state.events.key.timer: ' + state.events.key.timer);

                    if ((document.getElementById('timer_key_up')) != null ) {
                        document.getElementById('timer_key_up').innerHTML = (state.events.key.timer)
                    }
                }

                if (state.events.key.up == false) {
                    state.events.key.timer += 1;
                    console.log('state.events.key.timer: ' + state.events.key.timer);

                    if ((document.getElementById('timer_key_up')) != null ) {
                        document.getElementById('timer_key_up').innerHTML = (state.events.key.timer)
                    }
                }

                if (state.events.mouse.up == true) {
                    state.events.mouse.timer -= 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.timer)
                    }
                }

                if (state.events.mouse.up == false) {
                    state.events.mouse.timer += 1;
                    console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

                    if ((document.getElementById('timer_mouse_up')) != null ) {
                        document.getElementById('timer_mouse_up').innerHTML = (state.events.mouse.timer)
                    }
                }
                
                // desktop
                if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                    if (state.events.mouse.enter == true) {

                        state.events.mouse.leavetimer = 0;
                        state.ui.timeout.display = false;

                        console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                        if ((document.getElementById('timer_mouse_leave')) != null ) {
                            document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                        }
                    }

                    if (state.events.mouse.enter == false) {

                        state.events.mouse.leavetimer += 1;
                        state.ui.pause.display = true;

                        console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                        
                        if ((document.getElementById('timer_mouse_leave')) != null ) {
                            document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                        }
                    }

                    if (state.events.mouse.leavetimer == 5) {
                        state.ui.timeout.display = true;               
                    };

                };

                // Mobile
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                    if (state.events.mouse.enter == true) {

                        state.events.mouse.leavetimer = 0;

                        console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                        if ((document.getElementById('timer_mouse_leave')) != null ) {
                            document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                        }
                    }

                    if (state.events.mouse.enter == false) {

                        state.events.mouse.leavetimer += 1;

                        console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                        
                        if ((document.getElementById('timer_mouse_leave')) != null ) {
                            document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                        }
                    }

                    if (state.events.mouse.leavetimer == 30) {
                        state.uipause.display = true;               
                    };

                    if (state.events.mouse.leavetimer == 60) {
                        state.uitimeout.display = true;               
                    };

                };

                int += 1;
                console.log(int);
            }, 1000);
        })();

        // alert(state.ui.interaction.dice);
        // alert(state.ui.interaction.random);
        // get date
        // get date
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

        /* 500 ms */
        // wheels
        (function () {
            let frame = 1;
            setInterval(

                function () {
                    
                    (function () {
                        state.ui.root.wheels = 0;
                        state.ui.root.wheel = 'still';
                    }());

                }, 100);
        }());

        // check local data
        //Handle_logged();
};

window.onload = () => {        
    console.log('onload');
    onload();
};

window.onresize = () => {
    console.log('resize');
    resize();
};

// Exports
export default {
    Handle_firebase_render,
    Handle_Firebase_Refs_and_Render,
    Handle_return_state,
    Handle_get_state_from_events,
    Handle_check_route,
    deleteWhoListings,
    likeWhoListings,
    dislikeWhoListings,
    viewWhoListings,
    HANDLE_animation,
    HANDLE_animation_null,
    HANDLE_animation_gui_default,
    HANDLE_animation_modals_default,
    HANDLE_animation_modals_hide,
    HANDLE_animation_gui_hide,
    HANDLE_animation_gui_show,
    HANDLE_animation_gui_tranform,
    HANDLE_animation_gui_untranform,
    sound1,
}