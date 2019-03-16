// Rules
'use strict';

// Imports
import './style.scss'
import imported_functions from './partials/functions';
import imported_state from './partials/state';
import imported_events from './partials/events';
import imported_defaults from './partials/defaults';
import imported_components from './partials/components';
import imported_ui from './partials/ui';
import imported_folds from './partials/folds';
import imported_interaction from './partials/interaction';
import imported_animation from './partials/animation';
import imported_stages from './partials/stages';
import imported_pieces from './partials/pieces';
import imported_sets from './partials/sets';

// Declaration
let state;
let functions;
let defaults;
let components;
let stages;
let pieces;
let sets;

// Assignment
state = imported_state.default_state;
functions = imported_functions;
defaults = imported_defaults;
components = imported_components;
stages = imported_stages
pieces = imported_pieces
sets = imported_sets

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

let check_local_user = () => {

        // Localize data
        if (localStorage.username == null) {
            console.log('welcome first timer');

            document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
            return;
        };

        // Localize data
        if (localStorage.username == 'null') {
            console.log('welcome back, login please');

            document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
            return;
        };

        if (localStorage.username != 'null') {
            
            console.log('weolcome back: ' + localStorage.username);

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


let Handle_render = () => {

    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).innerHTML = '';
        document.getElementById(defaults.colors[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')))
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

    for (var i = 0; i < stages.length; i++) {
        // console.log(stages[i].component);
        // console.log(stages[i].component_state);

        // colors
        if ((document.getElementById(stages[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_stages_display_and_opacity_on_with_no_delay, imported_functions.Toggle_stages_display_and_opacity_off_with_delay, stages[i].component, stages[i].component_state_display);
        };
    };

    for (var i = 0; i < sets.length; i++) {
        // console.log(sets[i].component);
        // console.log(sets[i].component_state);

        // colors
        if ((document.getElementById(sets[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_sets_display_and_opacity_on_with_no_delay, imported_functions.Toggle_sets_display_and_opacity_off_with_delay, sets[i].component, sets[i].component_state_display);
        };
    };

    for (var i = 0; i < pieces.length; i++) {
        // console.log(pieces[i].component);
        // console.log(pieces[i].component_state);

        // colors
        if ((document.getElementById(pieces[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_pieces_display_and_opacity_on_with_no_delay, imported_functions.Toggle_pieces_display_and_opacity_off_with_delay, pieces[i].component, pieces[i].component_state_display);
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

    for (var i = 0; i < stages.length; i++) {
        // console.log(stages[i].component);
        // console.log(stages[i].component_state);

        // colors
        if ((document.getElementById(stages[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(stages[i].component_state_transform_false, stages[i].component_state_transform_true, stages[i].component, stages[i].component_state_transform);
        };
    };

    for (var i = 0; i < sets.length; i++) {
        // console.log(sets[i].component);
        // console.log(sets[i].component_state);

        // colors
        if ((document.getElementById(sets[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(sets[i].component_state_transform_false, sets[i].component_state_transform_true, sets[i].component, sets[i].component_state_transform);
        };
    };

    for (var i = 0; i < pieces.length; i++) {
        // console.log(pieces[i].component);
        // console.log(pieces[i].component_state);

        // colors
        if ((document.getElementById(pieces[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(pieces[i].component_state_transform_false, pieces[i].component_state_transform_true, pieces[i].component, pieces[i].component_state_transform);
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

};

let Handle_check_states = () => {
    console.log('checked ui');

  //console.log('Handle_check_states');
  components = imported_components.get_components_handled();
  stages = imported_stages.get_stages_handled();
  pieces = imported_pieces.get_pieces_handled();
  sets = imported_sets.get_sets_handled();

  imported_ui.Handle_ui();
  imported_folds.Handle_folds();
  imported_interaction.Handle_interaction();
  imported_animation.Handle_animation();

  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
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
                        
                        console.clear();
                        clearInterval(Handle_Repeat_Firebase_Validation());

                        // check ui state
                        setTimeout(function() {

                            console.log('done firebase update');
                            Handle_load_animation();
                            
                            // re_check
                            setInterval(function() {

                                Handle_check_states();

                            }, 1000/ state.animation.framerate);
                        }, 0);

                        // check ui state
                        setTimeout(function() {

                            Handle_firebase_render();
                            HANDLE_animation_gui_hide();
                            Handle_EventListeners();

                        }, 100);

                    };

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

        // defaults
        if ( (document.getElementById('component_app_content')) != null ) {
            document.getElementById('component_app_content').addEventListener("scroll", (event) => {

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

        // Gui Button Actions
        if ((document.getElementById('icon_logo')) != null ) {
            document.getElementById('icon_logo').addEventListener("click", function(event) {

                state.ui.stage.cardboard.set = 0;

            });
        };

        // Gui Button Actions
        if ((document.getElementById('search_route')) != null ) {
            document.getElementById('search_route').addEventListener("click", function(event) {

                alert('yo');
                if ((document.getElementById('icon_search').classList.contains('gui_search'))) {
                    
                    // style
                    document.getElementById('icon_search').classList.remove('gui_search');
                    document.getElementById('icon_search').classList.add('gui_close');
                    
                    // model
                    //pages
                    state.ui.modal.page.right.display = true;
                    state.ui.modal.page.right.transform = false;

                } else {

                    // search closed
                    // style
                    document.getElementById('icon_search').classList.remove('gui_close');
                    document.getElementById('icon_search').classList.add('gui_search');

                    // nav
                    state.ui.modal.page.right.display = true;
                    state.ui.modal.page.right.transform = true;

                };

            });
        };


        // Gui Button Actions
        if ((document.getElementById('icon_menu')) != null ) {
            document.getElementById('icon_menu').addEventListener("click", function(event) {

                if ((document.getElementById('icon_menu').classList.contains('gui_navs_bars'))) {
                    
                    // style
                    document.getElementById('icon_menu').classList.remove('gui_navs_bars');
                    document.getElementById('icon_menu').classList.add('gui_close');
                    
                    // navs
                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.nav.top.transform = true;

                } else {

                    // menu closed
                    // style
                    document.getElementById('icon_menu').classList.remove('gui_close');
                    document.getElementById('icon_menu').classList.add('gui_navs_bars');

                    // nav
                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.nav.top.transform = false;

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
                    console.log('new username needed')
                };

                if ( (document.getElementById('new_password').value == '') ) {
                    console.log('new password needed')
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

                if (state.events.mouse.leavetimer == 5) {
                    console.log('timeout active')               
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
                    console.log('timeout active')        
                };

                if (state.events.touch.leavetimer == 60) {
                    console.log('timeout active')            
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
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_1');
                        };

                        if (current_frame == 2) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_2');
                        };

                        if (current_frame == 3) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_3');
                        };

                        if (current_frame == 4) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_4');
                        };

                        if (current_frame == 5) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_5');
                        };

                        if (current_frame == 6) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_6');
                        };

                        if (current_frame == 7) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_7');
                        };

                        if (current_frame == 8) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_8');
                        };

                        if (current_frame == 9) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_9');
                        };

                        if (current_frame == 10) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_10');
                        };

                        if (current_frame == 11) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_11');
                        };

                        if (current_frame == 12) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_12');
                        };

                        if (current_frame == 13) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_13');
                        };

                        if (current_frame == 14) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_14');
                        };

                        if (current_frame == 15) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_15');
                        };

                        if (current_frame == 16) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_16');
                        };

                        if (current_frame == 17) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_17');
                        };

                        if (current_frame == 18) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_18');
                        };

                        if (current_frame == 19) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_19');
                        };

                        if (current_frame == 20) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_20');
                        };

                        if (current_frame == 21) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_21');
                        };

                        if (current_frame == 22) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_22');
                        };

                        if (current_frame == 23) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_23');
                        };

                        if (current_frame == 24) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_24');
                        };

                        if (current_frame == 25) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_1');
                        };

                        if (current_frame == 26) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_2');
                        };

                        if (current_frame == 27) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_3');
                        };

                        if (current_frame == 28) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_4');
                        };

                        if (current_frame == 29) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_5');
                        };

                        if (current_frame == 30) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_6');
                        };

                        if (current_frame == 31) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_7');
                        };

                        if (current_frame == 32) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_8');
                        };

                        if (current_frame == 33) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_9');
                        };

                        if (current_frame == 34) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_10');
                        };

                        if (current_frame == 35) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_11');
                        };

                        if (current_frame == 36) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_12');
                        };

                        if (current_frame == 37) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_13');
                        };

                        if (current_frame == 38) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_14');
                        };

                        if (current_frame == 39) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_15');
                        };

                        if (current_frame == 40) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_16');
                        };

                        if (current_frame == 41) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_17');
                        };

                        if (current_frame == 42) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_18');
                        };

                        if (current_frame == 43) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_19');
                        };

                        if (current_frame == 44) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_20');
                        };

                        if (current_frame == 45) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_21');
                        };

                        if (current_frame == 46) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_22');
                        };

                        if (current_frame == 47) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_23');
                        };

                        if (current_frame == 48) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_24');
                        };

                        if (current_frame == 49) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_1');
                        };

                        if (current_frame == 50) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_2');
                        };

                        if (current_frame == 51) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_3');
                        };

                        if (current_frame == 52) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_4');
                        };

                        if (current_frame == 53) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_5');
                        };

                        if (current_frame == 54) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_6');
                        };

                        if (current_frame == 55) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_7');
                        };

                        if (current_frame == 56) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_8');
                        };

                        if (current_frame == 57) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_9');
                        };

                        if (current_frame == 58) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_10');
                        };

                        if (current_frame == 59) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_11');
                        };

                        if (current_frame == 60) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_12');
                        };

                        if (current_frame == 61) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1');
                        };

                        if (current_frame == 62) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2');
                        };

                        if (current_frame == 63) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3');
                        };

                        if (current_frame == 64) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4');
                        };

                        if (current_frame == 65) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5');
                        };

                        if (current_frame == 66) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6');
                        };

                        if (current_frame == 67) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7');
                        };

                        if (current_frame == 68) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8');
                        };

                        if (current_frame == 69) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9');
                        };

                        if (current_frame == 70) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1');
                        };

                        if (current_frame == 71) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2');
                        };

                        if (current_frame == 72) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3');
                        };

                        if (current_frame == 73) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4');
                        };

                        if (current_frame == 74) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5');
                        };

                        if (current_frame == 75) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6');
                        };

                        if (current_frame == 76) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7');
                        };

                        if (current_frame == 77) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8');
                        };

                        if (current_frame == 78) {
                            MANIPULATED.classList = (' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9');
                        };



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

let HANDLE_animation_paint_hand = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_paint_can_hand_svg');
                
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
                            HANDLE_animation_paint_drop();
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_13';
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_14';
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_15';
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_16';
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_17';
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_18';
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_19';
                        };
                        if (current_frame == 20) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_20';
                        };
                        if (current_frame == 21) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_21';
                        };
                        if (current_frame == 22) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_22';
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_23';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_24';
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

let HANDLE_animation_paint_drop = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_paint_can_svg');
                
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
                            HANDLE_animation_paint_wall();
                        };
                        if (current_frame == 23) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_23';
                        };
                        if (current_frame == 24) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_24';
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


let HANDLE_animation_paint_wall = () => {

    (function() {
        let loop = false;
        let current_frame = 1;

        let start_animation =

        setInterval(
            
            function() {

                    let MANIPULATED = document.getElementById('paint_animation_svg_4');
                
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
                        };


                        if (current_frame == 13) {
                            MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' bg_yellow';

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

let player_1_grow = () => {
    state.ui.interaction.player_1.cycles.growth = !state.ui.interaction.player_1.cycles.growth;
    state.ui.interaction.player_1.cycles.shrink = false;
}

let player_1_shrink = () => {
    state.ui.interaction.player_1.cycles.shrink = !state.ui.interaction.player_1.cycles.shrink;
    state.ui.interaction.player_1.cycles.growth = false;
}

let HANDLE_load_order = () => {

        state.animation.instances.loading = true;
        state.animation.instances.sequence = 0;

        state.ui.stage.cardboard.scene = 1;

        // overall site frames by 24 frames
        (function() {
            let interval = (24 * -3);
            setInterval(
                function() {

                    // before "96 frames (4 seconds)"
                    if (interval == (24 * -3) ) {
                        HANDLE_pre_loader();
                    };

                    // After "48 frames" exc..
                    if (interval == 0 ) {
                        Handle_Firebase_Refs_and_Render();
                    };

                    interval += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / state.animation.framerate));
        }());

};

let Handle_load_animation = () => {

        Handle_render();
        check_local_user();
        Handle_Timers();

        state.animation.instances.loading = true;
        state.animation.instances.sequence = 0;

        // overall site frames by 24 frames
        (function() {
            let interval = (24 * -3);
            setInterval(
                function() {

                    // before "96 frames (4 seconds)"
                    if (interval == (24 * -3) ) {
                        state.animation.instances.loading = true;
                        state.ui.stage.cardboard.scene = 1
                        state.animation.instances.sequence = 0;

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

                                }, 50);
                        }());
                    };

                    if (interval == (24 * -2) ) {
                        if ((document.getElementById('bar')) != null ) {
                            document.getElementById('bar').classList.remove('width_8705');
                            document.getElementById('bar').classList.add('width_100');
                        };
                    };

                    if (interval == (24 * -1) ) {
                        if ((document.getElementById('bar_container')) != null ) {
                            document.getElementById('bar_container').classList.remove('enterBottom');
                            document.getElementById('bar_container').classList.add('fadeOut');
                        };
                    };

                    // After "48 frames" exc..
                    if (interval == (24 * 0) ) {
                        if ((document.getElementById('bar_container')) != null ) {
                            document.getElementById('bar_container').classList.add('display_none');
                        };

                        state.animation.instances.loading = false;
                        HANDLE_animation_paint_hand();
                        Handle_loading_sequence();
                    };

                    interval += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / state.animation.framerate));
        }());

};

let Handle_loading_sequence = () => {

        // overall site frames by 24 frames
        (function() {
            let interval = (24 * -2);
            setInterval(
                function() {

                    // After "48 frames" exc..
                    if (interval == (24 * 0) ) {
                        state.animation.instances.sequence = 0;
                    };

                    // 5 seconds of loading for preloading images
                    if (interval == (24 * 1) ) {
                        state.animation.instances.sequence = 1;

                    };

                    // 5 seconds of loading for preloading images
                    if (interval == (24 * 2) ) {
                        state.animation.instances.sequence = 2;

                    };

                    // 5 seconds of loading for preloading images
                    if (interval == (24 * 3) ) {
                        state.animation.instances.sequence = 3;

                    };

                    // 5 seconds of loading for preloading images
                    if (interval == (24 * 4) ) {
                        state.animation.instances.sequence = 4;
                        state.ui.interaction.player_1.display = true;

                    };

                    if (interval == (24 * 5) ) {
                        state.animation.instances.sequence = 5;
                    };

                    if (interval == (24 * 6) ) {
                        state.animation.instances.sequence = 6;
                        if ((document.getElementById('draw_hand')) != null ) {document.getElementById('draw_hand').classList.remove('display_none')};
                    };

                    if (interval == (24 * 7) ) {
                        state.animation.instances.sequence = 7;
                    };

                    if (interval == (24 * 8) ) {
                        state.animation.instances.sequence = 8;
                        state.ui.stage.cardboard.set = 1;
                    };

                    if (interval == (24 * 9) ) {
                        state.animation.instances.sequence = 9;
                            if ((document.getElementById('draw_hand')) != null ) {document.getElementById('draw_hand').classList.add('display_none')};
                    
                    };

                    if (interval == (24 * 10) ) {
                        state.animation.instances.sequence = 10;
                        player_1_grow();
                    };
                    if (interval == (24 * 11) ) {
                        state.animation.instances.sequence = 11;
                    };

                    if (interval == (24 * 12) ) {
                        state.animation.instances.sequence = 12;
                    };

                    if (interval == (24 * 13) ) {
                        state.animation.instances.sequence = 13;
                    };

                    interval += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / state.animation.framerate));
        }());

};

let HANDLE_animation_gui_hide = () => {


    // modals
    state.ui.gui.top_left.transform = true;
    state.ui.gui.top.transform = true;
    state.ui.gui.top_right.transform = true;
    state.ui.gui.bottom_left.transform = true;
    state.ui.gui.bottom.transform = true;
    state.ui.gui.bottom_right.transform = true;
    state.ui.gui.right.transform = true;
    state.ui.gui.left.transform = true;

    setTimeout( () => {  


        // modals
        state.ui.gui.top_left.display = false;
        state.ui.gui.top.display = false;
        state.ui.gui.top_right.display = false;
        state.ui.gui.bottom_left.display = false;
        state.ui.gui.bottom.display = false;
        state.ui.gui.bottom_right.display = false;
        state.ui.gui.right.display = false;
        state.ui.gui.left.display = false;

    }, 101);
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


    setTimeout( () => {  

        state.ui.gui.top_left.transform = false;
        state.ui.gui.top.transform = false;
        state.ui.gui.top_right.transform = false;
        state.ui.gui.bottom_left.transform = false;
        state.ui.gui.bottom.transform = false;
        state.ui.gui.bottom_right.transform = false;
        state.ui.gui.right.transform = false;
        state.ui.gui.left.transform = false;
            
    }, 101);
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

    HANDLE_load_order();

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
	viewWhoListings,
    check_local_user,
    HANDLE_animation_gui_hide,
    HANDLE_animation_gui_show,
    Handle_load_animation,
    player_1_grow,
    player_1_shrink
}