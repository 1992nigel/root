// Rules
'use strict';

// Imports
import './style.scss'
import imported_functions from './partials/functions';
import imported_state from './partials/state';
import imported_events from './partials/events';
import imported_defaults from './partials/defaults';

// Declaration
let state;
let functions;
let defaults;

// Assignment
state = imported_state.default_state;
functions = imported_functions;
defaults = imported_defaults;

// Initialization
let config = {
	apiKey: "AIzaSyB8kwtrECmhBW10P4vaKsE9JyE5DdazI-U",
	authDomain: "nownigel-cf9da.firebaseapp.com",
	databaseURL: "https://nownigel-cf9da.firebaseio.com",
	projectId: "nownigel-cf9da",
	storageBucket: "nownigel-cf9da.appspot.com",
	messagingSenderId: "872155363769"
};

// Functions
firebase.initializeApp(config);

// init
console.log('hello world');

let first_load = true;
let sorting_type;


let Handle_render = () => {

    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')))
    };
};

let check_local_user = () => {

        // Localize data
        if (localStorage.username == null) {
            //alert('welcome first timer');

            document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
            return;
        };

        // Localize data
        if (localStorage.username == 'null') {
            //alert('welcome back, login please');

            document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
            return;
        };

        if (localStorage.username != 'null') {
            
            //alert('weolcome back: ' + localStorage.username);

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
};

let sign_in_ui = () => {

    /*
    // set user avatar
    document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'

    // set author page
    document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard(state.data.user);

    document.getElementById('icon_sign_out').classList.remove('display_none')
    document.getElementById('icon_sign_in').classList.add('display_none')
    document.getElementById('icon_sign_up').classList.add('display_none')
    */

    document.getElementById('users_username').innerHTML = 'Hello ' + `${state.data.user.username}` + '!';

    // render author data
    Handle_Firebase_Refs_and_Render();

    // gui
    state.ui.modal.pop.right.transform = true;

    setTimeout( () => {
        state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
    }, 101);

};

let sign_out_ui = () => {

    document.getElementById('users_username').innerHTML = 'See you next time, ' + `${state.data.user.username}`;
    state.data.user = default_user;
    
    localStorage.setItem("user", default_user);
    localStorage.setItem("username", default_user.username);
    localStorage.setItem("password", default_user.password);
    
    /*
    // set user avatar
    document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'

    // set author page
    document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard_not_logged();

    document.getElementById('icon_sign_out').classList.add('display_none')
    document.getElementById('icon_sign_in').classList.remove('display_none')
    document.getElementById('icon_sign_up').classList.remove('display_none')
    */

    // render author data
    Handle_Firebase_Refs_and_Render();

    // gui
    state.ui.modal.pop.left.transform = true;

    setTimeout( () => {
        state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
    }, 101);

};

let Handle_check_states = () => {
    console.log('checked ui');
};

sorting_type = 'timeup';


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

let find_limit = () => {

    if ( (document.getElementById('element_input_limit')) != null ) {
        state.data.posts_limit = document.getElementById('element_input_limit').value
    };
};

// Closures

let default_post = {
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

// Create
let addListings = (child) => {
    
    var current_second = new Date().getTime() / 1000;
    let default_item = {};

    if ((state.data.user.username) != null) {
        if (child == 'library') {
            default_item = {
                id: 0,
                time: current_second,
                title: document.getElementById('create_library_input_title').value,
                feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
                subtitle: document.getElementById('create_library_input_subtitle').value,
                paragraph: document.getElementById('create_library_input_paragraph').value,
                categories: [`'${document.getElementById('create_library_input_category').value}'`],
                subcategories: [`'${document.getElementById('create_library_input_sub_category').value}'`],
                feature_style: document.getElementById('create_library_input_feature_style').value,
                tags: [`'${document.getElementById('create_library_input_tag').value}'`],
                types: [`'${document.getElementById('create_library_input_type').value}'`],
                feature_image_src: document.getElementById('create_library_input_feature_image_src').value,
                usernames : [{"username" : state.data.user.username}],
                views: 0,
                likes: 0,
                dislikes: 0
            };
        };


        if (child == 'partners') {
            default_item = {
                id: 0,
                time: current_second,
                title: document.getElementById('create_partners_input_title').value,
                feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
                subtitle: document.getElementById('create_partners_input_subtitle').value,
                paragraph: document.getElementById('create_partners_input_paragraph').value,
                categories: [`'${document.getElementById('create_partners_input_category').value}'`],
                subcategories: [`'${document.getElementById('create_partners_input_sub_category').value}'`],
                feature_style: document.getElementById('create_partners_input_feature_style').value,
                tags: [`'${document.getElementById('create_partners_input_tag').value}'`],
                types: [`'${document.getElementById('create_partners_input_type').value}'`],
                feature_image_src: document.getElementById('create_partners_input_feature_image_src').value,
                usernames : [{"username" : state.data.user.username}],
                views: 0,
                likes: 0,
                dislikes: 0
            };
        };

        if (child == 'services') {
            default_item = {
                id: 0,
                time: current_second,
                title: document.getElementById('create_services_input_title').value,
                feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
                subtitle: document.getElementById('create_services_input_subtitle').value,
                paragraph: document.getElementById('create_services_input_paragraph').value,
                categories: [`'${document.getElementById('create_services_input_category').value}'`],
                subcategories: [`'${document.getElementById('create_services_input_sub_category').value}'`],
                feature_style: document.getElementById('create_services_input_feature_style').value,
                tags: [`'${document.getElementById('create_services_input_tag').value}'`],
                types: [`'${document.getElementById('create_services_input_type').value}'`],
                feature_image_src: document.getElementById('create_services_input_feature_image_src').value,
                usernames : [{"username" : state.data.user.username}],
                views: 0,
                likes: 0,
                dislikes: 0
            };
        };

        if (child == 'abilities') {
            default_item = {
                id: 0,
                time: current_second,
                title: document.getElementById('create_abilities_input_title').value,
                feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
                subtitle: document.getElementById('create_abilities_input_subtitle').value,
                paragraph: document.getElementById('create_abilities_input_paragraph').value,
                categories: [`'${document.getElementById('create_abilities_input_category').value}'`],
                subcategories: [`'${document.getElementById('create_abilities_input_sub_category').value}'`],
                feature_style: document.getElementById('create_abilities_input_feature_style').value,
                tags: [`'${document.getElementById('create_abilities_input_tag').value}'`],
                types: [`'${document.getElementById('create_abilities_input_type').value}'`],
                feature_image_src: document.getElementById('create_abilities_input_feature_image_src').value,
                usernames : [{"username" : state.data.user.username}],
                views: 0,
                likes: 0,
                dislikes: 0
            };
        };

        if (child == 'skills') {
            default_item = {
                id: 0,
                time: current_second,
                title: document.getElementById('create_skills_input_title').value,
                feature_image_src : "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
                subtitle: document.getElementById('create_skills_input_subtitle').value,
                paragraph: document.getElementById('create_skills_input_paragraph').value,
                categories: [`'${document.getElementById('create_skills_input_category').value}'`],
                subcategories: [`'${document.getElementById('create_skills_input_sub_category').value}'`],
                feature_style: document.getElementById('create_skills_input_feature_style').value,
                tags: [`'${document.getElementById('create_skills_input_tag').value}'`],
                types: [`'${document.getElementById('create_skills_input_type').value}'`],
                feature_image_src: document.getElementById('create_skills_input_feature_image_src').value,
                usernames : [{"username" : state.data.user.username}],
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
            dislikes: 0,
            subs : [ {
             username : "nully"
            } ],
            categories : ["null"],
            subcategories : ["null"],
            tags : ["null"],
            types : [{"title" : "null"}],
        };
    };

    document.getElementById('create_library_input_title').value = '';
    document.getElementById('create_services_input_title').value = '';
    document.getElementById('create_abilities_input_title').value = '';
    document.getElementById('create_skills_input_title').value = '';
    document.getElementById('create_partners_input_title').value = '';

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
    const roster_Ref = gnougnRef.child('roster');
    const Ref = gnougnRef.child(child);

    // updated post likes
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });
    changeThisValue.likes += 1;

    Ref.child(id).set(changeThisValue);

    // updated roster user liked
    var changeThisRoster_Value;
    roster_Ref.child(state.data.user.id).once('value', function(snap) {
        changeThisRoster_Value = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    let new_liked = [];

    // if liked post doesnt match a already liked post
    for (var i = 0; i < state.data.user.liked.length; i++) {
        if (changeThisRoster_Value.liked[i].post_id != id) {
            new_liked.push({post_id: changeThisRoster_Value.liked[i].post_id});
        };
    };

    new_liked.push({post_id: id});

    changeThisRoster_Value.liked = new_liked;

    roster_Ref.child(state.data.user.id).set(changeThisRoster_Value);

    console.log(id);
    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 101);
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

let Handle_firebase_render = () => {

    // render library
    (() => {

        setTimeout(function() {

            if ((state.data.firebase) != null) {
                

                // *********************** "Order of operations" ************************
                find_view();


                // 3.) get types
                document.getElementById('types').innerHTML = '';

                for (var i = 0; i < state.data.types.length; i++) {

                    // 3 options
                    document.getElementById('types').innerHTML += `${state.data.types[i].title}` + ' ' ;
                };

                // 1.) set array
                let array = state.data.firebase;
                let array_gnougn_library = array.gnougn.library.sort(find_sort());
                let filtered_array_gnougn_library = [];

                // 3.) filter array
                for (var i = 0; i < array_gnougn_library.length; i++) {
                    if ((array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))) {
                        filtered_array_gnougn_library.push(array_gnougn_library[i]);
                    };
                };

                // if logged in
                if ((localStorage.username != 'null') && !(localStorage.username == 'null') && !(localStorage.username == null)) {
                    if ( (document.getElementById('element_ol_firebase_user_library')) != null) {
                        
                        document.getElementById('element_ol_firebase_user_library').innerHTML = '';

                        for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                            for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                                if ( filtered_array_gnougn_library[i].usernames[usernames_index].username == state.data.user.username ) {
                                    if ( (i >= (state.data.posts_start - state.data.posts_start)) && (i < state.data.posts_limit) ) {
                                        document.getElementById('element_ol_firebase_user_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                          imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                            )
                                        )
                                    };
                                };
                            };
                        };
                    };
                };

                // library post - filtered by user subs
                // if logged in
                if ((localStorage.username != 'null') && !(localStorage.username == 'null') && !(localStorage.username == null)) {
	                if ( (document.getElementById('element_ol_firebase_user_subs_library')) != null) {
	                    
	                    document.getElementById('element_ol_firebase_user_subs_library').innerHTML = '';

                        for (var subs_index = 0; subs_index < state.data.user.subs.length; subs_index++) {
                               
                            // subs name
                            document.getElementById('element_ol_firebase_user_subs_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                    imported_functions.Generate_new_div(`<h1><u>${state.data.user.subs[subs_index].username }</u>'s post</h1>`)
                                )
                            )
 
                            for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                                for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                                    if ( filtered_array_gnougn_library[i].usernames[usernames_index].username == state.data.user.subs[subs_index].username ) {
                                        if ( (i >= (state.data.posts_start - state.data.posts_start)) && (i < state.data.posts_limit) ) {
                                            document.getElementById('element_ol_firebase_user_subs_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                              imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                                )
                                            )
                                        };
                                    };
                                };
                            };
                        };
	                };
                };

                // library post - filtered by user liked
                // if logged in
                if ((localStorage.username != 'null') && !(localStorage.username == 'null') && !(localStorage.username == null)) {
                    if ( (document.getElementById('element_ol_firebase_user_liked_library')) != null) {
                        
                        document.getElementById('element_ol_firebase_user_liked_library').innerHTML = '';

                            for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                                for (var liked_index = 0; liked_index < state.data.user.liked.length; liked_index++) {
                               
                                    if ( filtered_array_gnougn_library[i].id == state.data.user.liked[liked_index].post_id ) {
                                        document.getElementById('element_ol_firebase_user_liked_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                          imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                            )
                                        )
                                    };
                            };
                        };
                    };
                };
                // library post - filtered by authors & title
                if ( (document.getElementById('library_posts_advance_filter')) != null) {
                    
                    document.getElementById('library_posts_advance_filter').innerHTML = '';

                    for (var i = 0; i < filtered_array_gnougn_library.length; i++) {

                        // if title match
                        if (( filtered_array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value) ) ) {

                            let does_Type_Match = false;
                            let does_Username_Match = false;

                            // if any types match
                            for (var type_index = 0; type_index < state.data.types.length; type_index++) {
                               if ( state.data.types[type_index].title.toString().toLowerCase().includes(filtered_array_gnougn_library[i].type) ) {
                                    does_Type_Match = true;
                                };
                            };

                            if (state.data.types.length <= 0) {
                                does_Type_Match = true;
                            }

                            // if any usernames match
                            for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                                if ( filtered_array_gnougn_library[i].usernames[usernames_index].username.toString().toLowerCase().includes(document.getElementById('element_input_post_username').value) ) {
                                    does_Username_Match = true;
                                };
                            };

                            if (does_Type_Match == true && does_Username_Match == true) {
                                if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                                    document.getElementById('library_posts_advance_filter').appendChild(imported_functions.Generate_new_fragment.appendChild(
                                      imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                                        )
                                    )
                                };
                            };

                            does_Type_Match = false;
                            does_Username_Match = false;

                        };
                    };
                };


                // feature
                document.getElementById('element_ol_firebase_library_feature').innerHTML = '';
                
                // title filtered after feature
                for (var i = 0; i < array_gnougn_library.length; i++) {
                    if ( (i < state.data.feature_posts_limit) ) {
                        document.getElementById('element_ol_firebase_library_feature').appendChild(imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(array_gnougn_library[i])))
                    };
                };
                
                // Library after feature
                document.getElementById('element_ol_firebase_library_after_feature').innerHTML = '';
                
                // title filtered after feature
                for (var i = 0; i < array_gnougn_library.length; i++) {
                    if ( (i >= (state.data.posts_start) ) && (i < state.data.posts_limit) ) {
                        document.getElementById('element_ol_firebase_library_after_feature').appendChild(imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(array_gnougn_library[i])))
                    };
                };


                // simple searching all by title
                document.getElementById('element_ol_firebase_library').innerHTML = '';
                
                // title filtered after feature
                for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                    if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                        document.getElementById('element_ol_firebase_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                            imported_functions.Generate_new_li(filtered_array_gnougn_library[i])))
                    };
                };


                // Roster
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_roster').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {

                    if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                    // console.log(state.data.firebase.gnougn.roster[i]);
                    document.getElementById('element_ol_firebase_roster').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.roster[i])
                            )
                        )
                    };
                }

                // partners
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_partners').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.partners.length; i++) {

                    if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                    // console.log(state.data.firebase.gnougn.partners[i]);
                    document.getElementById('element_ol_firebase_partners').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.partners[i])
                            )
                        )
                    };
                }

                // Abilities
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_abilities').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.abilities.length; i++) {

                    if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                    // console.log(state.data.firebase.gnougn.abilities[i]);
                    document.getElementById('element_ol_firebase_abilities').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.abilities[i])
                            )
                        )
                    };
                }

                // services
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_services').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.services.length; i++) {

                    if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                    // console.log(state.data.firebase.gnougn.services[i]);
                    document.getElementById('element_ol_firebase_services').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.services[i])
                            )
                        )
                    };
                }

                // skills
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_skills').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < state.data.firebase.gnougn.skills.length; i++) {
                    
                    if ( (i >= (state.data.posts_start - state.data.feature_posts_limit) ) && (i < state.data.posts_limit) ) {
                    // console.log(state.data.firebase.gnougn.skills[i]);
                    document.getElementById('element_ol_firebase_skills').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(state.data.firebase.gnougn.skills[i])
                            )
                        )
                    };
                }

            };

        }, 0);

    })();

    state.data.refs = true;
};

let Handle_Repeat_Firebase_Validation = () => { setInterval(function() {

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


            // Render listtings to front_end if firebase respondes
            if ((temp.gnougn.skills) != null) {

                console.log(temp.gnougn);

                setTimeout(function() {

                    state.data.refs = true;

                    if (first_load == true) {
                        
                        first_load = false;
                        
                        //console.clear();
                        clearInterval(Handle_Repeat_Firebase_Validation());

                        // check ui state
                        setTimeout(function() {

                            alert('done firebase update');
                            //Handle_render();
                            check_local_user();
                            Handle_EventListeners();
                            Handle_Timers();

                            
                            // re_check
                            setInterval(function() {

                                Handle_check_states();

                            }, 1000);


                        }, 0);
                    };

                    Handle_firebase_render();

                }, 0);

            };

        };

    }, 0);
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

    Handle_Repeat_Firebase_Validation();

};

let Handle_return_state = () => { return state };

let Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
    //values_update();
};

let Handle_EventListeners = () => {


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
        if (document.getElementById('element_input_types') != null) {
            document.getElementById('element_input_types').addEventListener('keydown', (event) => {

                if (event.keyCode == 13) {

                    state.data.types.push({title: (document.getElementById('element_input_types').value)});

                    // filter library
                    setTimeout(function() {
                        Handle_Firebase_Refs_and_Render();
                    }, 0);
                };

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

        // sort
        if (document.getElementById('element_input_sorting_type') != null) {
            document.getElementById('element_input_sorting_type').addEventListener('keydown', (event) => {
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

        // create post
        if (document.getElementById('element_input_create_library') != null) {
            document.getElementById('element_input_create_library').addEventListener('click', (event) => {
                addListings('library');
            });
        };

        // create user
        if (document.getElementById('element_input_create_roster') != null) {
            document.getElementById('element_input_create_roster').addEventListener('click', (event) => {

                if ( (document.getElementById('new_username').value == '') ) {
                    alert('new username needed')
                };

                if ( (document.getElementById('new_password').value == '') ) {
                    alert('new password needed')
                };

                if ( (document.getElementById('new_username').value != '') && (document.getElementById('new_password').value != '') ) {
                    addListings('roster');
                    document.getElementById('new_username').value = ''
                    document.getElementById('new_password').value = ''
                };

            });

        };

        // create services
        if (document.getElementById('element_input_create_services') != null) {
            document.getElementById('element_input_create_services').addEventListener('click', (event) => {
                addListings('services');
            });
        };

        // create partners
        if (document.getElementById('element_input_create_partners') != null) {
            document.getElementById('element_input_create_partners').addEventListener('click', (event) => {
                addListings('partners');
            });
        };


        // create abilities
        if (document.getElementById('element_input_create_abilities') != null) {
            document.getElementById('element_input_create_abilities').addEventListener('click', (event) => {
                addListings('abilities');
            });
        };

        // create skills
        if (document.getElementById('element_input_create_skills') != null) {
            document.getElementById('element_input_create_skills').addEventListener('click', (event) => {
                addListings('skills');
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


        // sign_out
        if (document.getElementById('element_user_sign_out') != null) {
            document.getElementById('element_user_sign_out').addEventListener('click', (event) => {
                
                            sign_out_ui();

            })
        };

    };

let Handle_Timers = () => {
    // start timer
    (() => {
        let int = 0;
        setInterval(function() {

            console.log(state.events.key.keys);

            // desktop
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

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

                if (state.events.touch.enter == true) {

                    state.events.touch.leavetimer = 0;

                    console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);

                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.touch.leavetimer)
                    }
                }

                if (state.events.touch.enter == false) {

                    state.events.touch.leavetimer += 1;

                    console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);
                    
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.touch.leavetimer)
                    }
                }

                if (state.events.touch.leavetimer == 30) {
                    state.uipause.display = true;               
                };

                if (state.events.touch.leavetimer == 60) {
                    state.uitimeout.display = true;               
                };

            };

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

// resize
let resize = () => {
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

    HANDLE_pre_loader();
    Handle_Firebase_Refs_and_Render();

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
	Handle_get_state_from_events,
    Handle_return_state,
    addListings,
	deleteWhoListings,
	likeWhoListings,
	dislikeWhoListings,
	viewWhoListings
}