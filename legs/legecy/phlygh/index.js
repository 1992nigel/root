
// Imports
import style from './style.scss';
import imported_state from './imports/state';
import elements from './imports/elements';
import functions from './imports/functions';
import events from './imports/events';

let state = imported_state.default_state;

let root = document.getElementById('root');
let scrollable = document.getElementById('scrollable');
let status = document.getElementById('status');

// Initialization
let config = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382"
};

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

let firebase_data_has_been_updated_and_is_now_writeable;
let firebase_has_responsed_with_this_updated_data;
let site_first_load = true;
let newly_created_ID = 0;

// Functions
firebase.initializeApp(config);

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

        }, (1000));
})();

state.data.onload_time = state.data.time;

// 24/fps loop
(() => {
    let interval = 0;
    setInterval(
        () => {

            if (document.getElementById('container_character') != null) {
                let container_character = document.getElementById('container_character');
                container_character.style =
                    'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                    'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                    'top: ' + (state.ui.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
                    'left: ' + (state.ui.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
            };

            //stage
            // vr
            if (document.getElementById('vr_mg') != null) {
                document.getElementById('vr_mg').style = "transform: translate3d(" +
                    (state.ui.interaction.vr.clientX * 100) + "%, " +
                    (state.ui.interaction.vr.clientY * 100) + "%, 0);"
            };
        	state.motion.frame += 1;
        	//console.log(state.motion.frame)
        }, (1000 / state.motion.framerate));
})();

let filtered_library_by_title = [];

let handle_URL = () => {

    //alert('handle_URL')
    setTimeout( () => {
                
        console.log(location);
        console.log(location.pathname);
        var parts = location.pathname.split('/');

        console.log(parts);

        if (parts[1] != '' && parts[1] != 'home') {
            //alert('shouldnt be home:' +  parts[1])
            history.pushState({}, null, parts[1]);
            var parts = location.pathname.split('/');
            //handle_Route('local_user_check');
            //alert(parts[1]);
            return
        };

        if (parts[1] == '' || parts[1] == 'home') {
        
            if (parts[1] == '') {
                setTimeout(function() {
                    //alert('you are "home" by default ' + parts[1]); // home
                }, 2500);
            };

            if (parts[1] == 'home') {
                setTimeout(function() {
                    //alert('you are actually home: ' + parts[1]); // home
                }, 2500);
            };

        };
            
        if (parts[2] != null) {
            //root.innerHTML = (parts[2]);
        };

        // back to fold for page change
        window.scrollTo(0, 0);
        console.log('done routing')

    }, 0);
}

let handle_refresh_fire_data = () => {

    handle_empty_list();

    let rootRef = firebase.database().ref();
    let gnougnRef = rootRef.child('gnougn');

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

let handle_empty_list = () => {

    filtered_library_by_title = [];

    if ((document.getElementById('element_ol_firebase_stream')) != null) {
        document.getElementById('element_ol_firebase_stream').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_feature')) != null) {
        document.getElementById('element_ol_firebase_feature').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_pagination')) != null) {
        document.getElementById('element_ol_firebase_pagination').innerHTML = '';
    };

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

    if ((document.getElementById('element_ol_firebase_validated_user_library')) != null) {
        document.getElementById('element_ol_firebase_validated_user_library').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_time_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_time_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_time_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_time_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_likes_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_likes_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_likes_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_likes_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_views_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_views_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_views_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_views_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_title_up')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_title_up').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_title_down')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_title_down').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_random_tags')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_random_tags').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_tags')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_tags').innerHTML = '';
    };

    if ((document.getElementById('element_ol_firebase_sorted_library_authors')) != null) {
        document.getElementById('element_ol_firebase_sorted_library_authors').innerHTML = '';
    };

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

let sorted_library = (x) => {  return filtered_library_by_title.sort(find_sort(x)) };
let sorted_library_time_up = (x) => {  return filtered_library_by_title.sort(find_sort('timeup')) };
let sorted_library_time_down = (x) => {  return filtered_library_by_title.sort(find_sort('timedown')) };
let sorted_library_views_up = (x) => {  return filtered_library_by_title.sort(find_sort('viewsup')) };
let sorted_library_views_down = (x) => {  return filtered_library_by_title.sort(find_sort('viewsdown')) };
let sorted_library_likes_up = (x) => {  return filtered_library_by_title.sort(find_sort('likesup')) };
let sorted_library_likes_down = (x) => {  return filtered_library_by_title.sort(find_sort('likesdown')) };
let sorted_library_title_up = (x) => {  return filtered_library_by_title.sort(find_sort('titleup')) };
let sorted_library_title_down = (x) => {  return filtered_library_by_title.sort(find_sort('titledown')) };

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

                // render stream
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    if (sorted_library(state.data.sort)[i].child == 'stream') {
                        document.getElementById('element_ol_firebase_stream').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };
                };

                document.getElementById('element_ol_firebase_feature').appendChild(
                    functions.Generate_new_fragment.appendChild(
                    functions.Generate_new_div('', '', state.app.feature_posts_limit)
                    )
                );

                // render sort
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    if ((i <= state.app.feature_posts_limit)) {
                        document.getElementById('element_ol_firebase_feature').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                    };
                };

                document.getElementById('element_ol_firebase_pagination').appendChild(
                    functions.Generate_new_fragment.appendChild(
                    functions.Generate_new_div('', '', 'posts_start: ' + state.app.posts_start)
                    )
                );

                document.getElementById('element_ol_firebase_pagination').appendChild(
                    functions.Generate_new_fragment.appendChild(
                    functions.Generate_new_div('', '', 'posts_limit: ' + state.app.posts_limit)
                    )
                );

                // render pagination sort
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    if ((i >= state.app.posts_start) && (i <= state.app.posts_limit)) {
                        document.getElementById('element_ol_firebase_pagination').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                    };
                };

                // render all sort
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    document.getElementById('element_ol_firebase_all').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        functions.Generate_new_li_post(filtered_library_by_title[i])
                        )
                    );
                };

                // render sorted_library_time_up
                for (var i = 0; i < sorted_library_time_up(state.data.sort).length; i++) {
                    console.log('sorted_library_time_up(state.data.sort)[i]');
                    console.log(sorted_library_time_up(state.data.sort)[i]);

                    if (sorted_library_time_up(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_time_up').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_time_down
                for (var i = 0; i < sorted_library_time_down(state.data.sort).length; i++) {
                    console.log('sorted_library_time_down(state.data.sort)[i]');
                    console.log(sorted_library_time_down(state.data.sort)[i]);

                    if (sorted_library_time_down(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_time_down').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_likes_up
                for (var i = 0; i < sorted_library_likes_up(state.data.sort).length; i++) {
                    console.log('sorted_library_likes_up(state.data.sort)[i]');
                    console.log(sorted_library_likes_up(state.data.sort)[i]);

                    if (sorted_library_likes_up(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_likes_up').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_likes_down
                for (var i = 0; i < sorted_library_likes_down(state.data.sort).length; i++) {
                    console.log('sorted_library_likes_down(state.data.sort)[i]');
                    console.log(sorted_library_likes_down(state.data.sort)[i]);

                    if (sorted_library_likes_down(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_likes_down').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_views_up
                for (var i = 0; i < sorted_library_views_up(state.data.sort).length; i++) {
                    console.log('sorted_library_views_up(state.data.sort)[i]');
                    console.log(sorted_library_views_up(state.data.sort)[i]);

                    if (sorted_library_views_up(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_views_up').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_views_down
                for (var i = 0; i < sorted_library_views_down(state.data.sort).length; i++) {
                    console.log('sorted_library_views_down(state.data.sort)[i]');
                    console.log(sorted_library_views_down(state.data.sort)[i]);

                    if (sorted_library_views_down(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_views_down').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_title_up
                for (var i = 0; i < sorted_library_title_up(state.data.sort).length; i++) {
                    console.log('sorted_library_title_up(state.data.sort)[i]');
                    console.log(sorted_library_title_up(state.data.sort)[i]);

                    if (sorted_library_title_up(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_title_up').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                // render sorted_library_title_down
                for (var i = 0; i < sorted_library_title_down(state.data.sort).length; i++) {
                    console.log('sorted_library_title_down(state.data.sort)[i]');
                    console.log(sorted_library_title_down(state.data.sort)[i]);

                    if (sorted_library_title_down(state.data.sort)[i].child == 'library') {
                        document.getElementById('element_ol_firebase_sorted_library_title_down').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };

                };

                alert( 'tag selected from users "liked" hashtags: ' + (Math.floor(Math.random() * state.app.tags.length) + 1) );
                
                document.getElementById('element_ol_firebase_sorted_library_random_tags').appendChild(
                    functions.Generate_new_fragment.appendChild(
                    functions.Generate_new_div('', '', '<h3>element_ol_firebase_sorted_library_random_tags: every liked post enters the hashtags of those post into a lottery tags the made up your "recommendations"! Easy huh<h3>')
                    )
                );

                let shuffle_array = (array) => {
                  var currentIndex = array.length, temporaryValue, randomIndex;

                  // While there remain elements to shuffle...
                  while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                  }

                  return array;
                };

                // Used like so
                var shuffled_tags = shuffle_array(state.app.tags);
                var shuffled_library = shuffle_array(filtered_library_by_title);
                console.log(shuffled_tags);

                // render tag included
                for (var iii = 0; iii < shuffled_tags.length; iii++) {                    

                    alert(shuffled_tags[iii]);
                    // render tag included

                    (() => {
                    for (var i = 0; i < shuffled_library.length; i++) {

                        if (shuffled_library[i].child == 'library') {

                            let render_it = false;
                            let post = shuffled_library[i];

                            for (var ii = 0; ii < post.tags.length; ii++) {
                                if (shuffled_tags[iii] == post.tags[ii]) {
                                    render_it = true;
                                };
                            };

                            if (render_it == true) {
                                document.getElementById('element_ol_firebase_sorted_library_random_tags').appendChild(
                                    functions.Generate_new_fragment.appendChild(
                                    functions.Generate_new_li_post(filtered_library_by_title[i])
                                    )
                                );

                                // back to shuffled_tags
                                return

                            };


                        };

                    };

                })();


                };


                // render tag included
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    if (sorted_library(state.data.sort)[i].child == 'library') {

                        let render_it = false;
                        let post = sorted_library(state.data.sort)[i];

                        for (var ii = 0; ii < post.tags.length; ii++) {
                            if (state.app.tag == post.tags[ii]) {
                                render_it = true;
                            };
                        };

                        if (render_it == true) {
                            document.getElementById('element_ol_firebase_sorted_library_tags').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };

                    };

                };

                // render author included
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                    console.log('sorted_library(state.data.sort)[i]');
                    console.log(sorted_library(state.data.sort)[i]);

                    if (sorted_library(state.data.sort)[i].child == 'library') {

                        let render_it = false;
                        let post = sorted_library(state.data.sort)[i];

                        for (var ii = 0; ii < post.authors.length; ii++) {
                            if (state.app.author == post.authors[ii]) {
                                render_it = true;
                            };
                        };

                        if (render_it == true) {
                            document.getElementById('element_ol_firebase_sorted_library_authors').appendChild(
                                functions.Generate_new_fragment.appendChild(
                                functions.Generate_new_li_post(filtered_library_by_title[i])
                                )
                            );
                        };

                    };

                };

                // filtered library
                for (var i = 0; i < filtered_library_by_title.length; i++) {

                    if (filtered_library_by_title[i].child == 'library') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_library').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(filtered_library_by_title[i])
                            )
                        );
                    };
                };

                // filtered roster
                for (var i = 0; i < sorted_library(state.data.sort).length; i++) {

                    if (sorted_library(state.data.sort)[i].child == 'roster') {
                        // console.log(state.data.firebase.gnougn.roster[i]);
                        document.getElementById('element_ol_firebase_all_users').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(sorted_library(state.data.sort)[i])
                            )
                        );
                    };
                };

                // validated user
                if (validated_user.id != null) {
                    
                    document.getElementById('element_ol_firebase_validated_user').appendChild(
                        functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_li_post(validated_user)
                        )
                    );

                    // render author included
                    for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                        console.log('sorted_library(state.data.sort)[i]');
                        console.log(sorted_library(state.data.sort)[i]);

                        if (sorted_library(state.data.sort)[i].child == 'library') {

                            let render_it = false;
                            let post = sorted_library(state.data.sort)[i];

                            for (var ii = 0; ii < post.authors.length; ii++) {
                                if (validated_user.username == post.authors[ii]) {
                                    render_it = true;
                                };
                            };

                            if (render_it == true) {
                                document.getElementById('element_ol_firebase_validated_user_library').appendChild(
                                    functions.Generate_new_fragment.appendChild(
                                    functions.Generate_new_li_post(filtered_library_by_title[i])
                                    )
                                );
                            };

                        };

                    };

                    // render author included
                    for (var iii = 0; iii < validated_user.followers.length; iii++) {

                        document.getElementById('element_ol_firebase_validated_user_library_followers').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_div('', '', validated_user.followers[ii])
                            )
                        );

                        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                            console.log('sorted_library(state.data.sort)[i]');
                            console.log(sorted_library(state.data.sort)[i]);

                            if (sorted_library(state.data.sort)[i].child == 'library') {

                                let render_it = false;
                                let post = sorted_library(state.data.sort)[i];

                                
                                let current_follow = validated_user.followers[iii];

                                for (var ii = 0; ii < post.authors.length; ii++) {
                                    if (current_follow == post.authors[ii]) {
                                        render_it = true;
                                    };
                                };

                                if (render_it == true) {
                                    document.getElementById('element_ol_firebase_validated_user_library_followers').appendChild(
                                        functions.Generate_new_fragment.appendChild(
                                        functions.Generate_new_li_post(filtered_library_by_title[i])
                                        )
                                    );
                                };

                        };


                        };

                    };

                    // render author included
                    for (var iii = 0; iii < validated_user.follows.length; iii++) {

                        document.getElementById('element_ol_firebase_validated_user_library_follows').appendChild(
                            functions.Generate_new_fragment.appendChild(
                            functions.Generate_new_div('', '', validated_user.follows[ii])
                            )
                        );

                        for (var i = 0; i < sorted_library(state.data.sort).length; i++) {
                            console.log('sorted_library(state.data.sort)[i]');
                            console.log(sorted_library(state.data.sort)[i]);

                            if (sorted_library(state.data.sort)[i].child == 'library') {

                                let render_it = false;
                                let post = sorted_library(state.data.sort)[i];

                                
                                let current_follow = validated_user.follows[iii];

                                for (var ii = 0; ii < post.authors.length; ii++) {
                                    if (current_follow == post.authors[ii]) {
                                        render_it = true;
                                    };
                                };

                                if (render_it == true) {
                                    document.getElementById('element_ol_firebase_validated_user_library_follows').appendChild(
                                        functions.Generate_new_fragment.appendChild(
                                        functions.Generate_new_li_post(filtered_library_by_title[i])
                                        )
                                    );
                                };

                        };


                        };

                    };

                };

                // not validated
                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user').innerHTML = `please sign in`
                };

                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user_library').innerHTML = `please sign in`
                };

                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user_library_followers').innerHTML = `please sign in`
                };

                if (validated_user.id == null) {
                    document.getElementById('element_ol_firebase_validated_user_library_follows').innerHTML = `please sign in`
                };

                // newly created
                if (newly_created_ID != 0) {

                    alert('newly_created_ID: ' + newly_created_ID)
                    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

                        // local user matched
                        if ((state.data.firebase.gnougn.library[i].id ) == newly_created_ID) {
                            alert('this was just made: ' + state.data.firebase.gnougn.library[i]);
                        }

                    };
                };

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

                //console.clear();
                //clearInterval(handle_repeated_fire_data_validation);

                setTimeout(function() {
                    check_localStorage();
                    handle_firebase_render_to_view();
                    //console.clear();
                    console.log('contected!');
                }, 0);

                if (site_first_load == true) {
                    //Handle_check_route('/home');
                    site_first_load = false;
                    //alert('first firebase load');

                    //alert('first_time_user: ' + first_time_user);
                    //alert('validated_user_is_logged: ' + validated_user_is_logged);

                    handle_URL();
                    //handle_ID();
                };

                console.log(firebase_has_responsed_with_this_updated_data.gnougn);
            };

        };

    };

}, 1000/24);


let Handle_return_state = () => {
	return state
};

let Handle_return_posts = () => {
    return sorted_library(state.data.sort);
}

let Handle_get_state_from_events = () => {
    state = events.Handle_return_state_from_events();
};

let handle_render = (x) => {

	if (x == 'home') {
		if (scrollable != null) {
		    scrollable.appendChild(elements.element_lead());
		    scrollable.appendChild(elements.element_fold(`

            <h2 class="width_100 float_left">Activity(All|Followers|Following|You)</h2>
            <h2 class="width_100 float_left">Stream</h2>
            <input id="create_stream" type="text" placeholder="create_stream" class="width_100 float_left" />
            <div id="signal">element_ol_firebase_stream: <div id="element_ol_firebase_stream"></div></div>
            <div id="element_addStream" class="width_100 float_left">element_addStream</div>

            <h2 class="width_100 float_left">Login</h2>
            <input id="element_login_username" type="text" placeholder="element_login_username" class="width_100 float_left" />
            <input id="element_login_password" type="text" placeholder="element_login_password" class="width_100 float_left" />
            <div id="element_login" class="width_100 float_left">login</div>
            <div id="element_logout" class="width_100 float_left">logout</div>

            <h2 class="width_100 float_left">Create User</h2>
            <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" />
            <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" />
            <div id="element_addRoster" class="width_100 float_left">element_addRoster</div>

            <h2 class="width_100 float_left">Create Post</h2>
            <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" />
            <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" />
            <div id="element_addListing" class="width_100 float_left">element_addListing</div>

            <h2 class="width_100 float_left">filter</h2>
            <input id="element_input_filter" type="text" placeholder="element_input_filter" class="width_100 float_left" />

            <h2 class="width_100 float_left">Buttons</h2>
            <div id="element_refresh" class="width_100 float_left">refresh</div>

            <h2 class="width_100 float_left">Blogs(All|Sorted|Filtered|Type|Format?)</h2>
            <h2 class="width_100 float_left">feature post</h2>
            <div id="signal">element_ol_firebase_feature: <div id="element_ol_firebase_feature"></div></div>
            <h2 class="width_100 float_left">pagination</h2>
            <h2 class="width_100 float_left">post limit && post start</h2>
            <div id="signal">element_ol_firebase_pagination: <div id="element_ol_firebase_pagination"></div></div>
            <h2 class="width_100 float_left">all</h2>
            <div id="signal">element_ol_firebase_all: <div id="element_ol_firebase_all"></div></div>

            <h2 class="width_100 float_left">Type</h2>
            <h2 class="width_100 float_left">Blogs: Library Only</h2>
            <div id="signal">element_ol_firebase_all_library: <div id="element_ol_firebase_all_library"></div></div>
            <h2 class="width_100 float_left">Blogs: Roster Only</h2>
            <div id="signal">element_ol_firebase_all_users: <div id="element_ol_firebase_all_users"></div></div>

            <h2 class="width_100 float_left">Sorted</h2>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_time_up:
                </h2>
                <div id="element_ol_firebase_sorted_library_time_up"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_time_down:
                </h2>
                <div id="element_ol_firebase_sorted_library_time_down"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_views_up:
                </h2>
                <div id="element_ol_firebase_sorted_library_views_up"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_views_down:
                </h2>
                <div id="element_ol_firebase_sorted_library_views_down"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_likes_up:
                </h2>
                <div id="element_ol_firebase_sorted_library_likes_up"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_likes_down:
                </h2>
                <div id="element_ol_firebase_sorted_library_likes_down"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_title_up:
                </h2>
                <div id="element_ol_firebase_sorted_library_title_up"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_title_down:
                </h2>
                <div id="element_ol_firebase_sorted_library_title_down"></div></div>

            <h2 class="width_100 float_left">Format</h2>

            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_random_tags:
                </h2>
                <div id="element_ol_firebase_sorted_library_random_tags"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_tags:
                </h2>
                <div id="element_ol_firebase_sorted_library_tags"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_sorted_library_authors:
                </h2>
                <div id="element_ol_firebase_sorted_library_authors"></div></div>

            <h2 class="width_100 float_left">Validated_user</h2>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_validated_user:
                </h2>
                <div id="element_ol_firebase_validated_user"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_validated_user_library:
                </h2>
                <div id="element_ol_firebase_validated_user_library"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_validated_user_library_follows:
                </h2>
                <div id="element_ol_firebase_validated_user_library_follows"></div></div>
            <div id="signal">
                <h2 class="width_100 float_left">
                    element_ol_firebase_validated_user_library_followers:
                </h2>
                <div id="element_ol_firebase_validated_user_library_followers"></div></div>

            <div id="signal">
                <h2 class="width_100 float_left">
                    event_route:
                </h2>
                <div id="event_route">${('you are at: ' + state.app.url)}</div></div>

            <h1>Platform</h1>
            <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
            <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
            <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
            <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
            <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
            <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
            <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
            <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

            <h1>Device</h1>
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

            <h2>Orientation</h2>
            <div id="signal">event_portrait: <div id="event_portrait"></div></div>
            <div id="signal">event_landscape: <div id="event_landscape"></div></div>

            <h2>Orientations</h2>
            <div id="signal">event_orientation: <div id="event_orientation"></div></div>

            <h2>Events</h2>
            <div id="signal">history_scroll: <div id="history_scroll"></div></div>
            <div id="signal">history_mouse: <div id="history_mouse"></div></div>
            <div id="signal">history_mouse_enter: <div id="history_mouse_enter"></div></div>
            <div id="signal">history_mouse_leave: <div id="history_mouse_leave"></div></div>
            <div id="signal">history_mouse_up: <div id="history_mouse_up"></div></div>
            <div id="signal">history_mouse_down: <div id="history_mouse_down"></div></div>
            <div id="signal">history_mouse_up_move: <div id="history_mouse_up_move"></div></div>
            <div id="signal">history_mouse_down_move: <div id="history_mouse_down_move"></div></div>
            <div id="signal">history_mouse_drag_drop: <div id="history_mouse_drag_drop"></div></div>
            <div id="signal">history_key: <div id="history_key"></div></div>
            <div id="signal">history_key_up: <div id="history_key_up"></div></div>
            <div id="signal">history_touch: <div id="history_touch"></div></div>
            <div id="signal">history_touch_start: <div id="history_touch_start"></div></div>
            <div id="signal">history_touch_end: <div id="history_touch_end"></div></div>
            <div id="signal">history_touch_drag_drop: <div id="history_touch_drag_drop"></div></div>
            <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
            <div id="signal">current_duration: <div id="current_duration"></div></div>
            <div id="signal">time_onload: <div id="time_onload"></div></div>
            <div id="signal">time: <div id="time"></div></div>

            <h2>Game Character</h2>

            <div id="signal">interaction_character_clientX: <div id="interaction_character_clientX"></div></div>
            <div id="signal">interaction_character_clientY: <div id="interaction_character_clientY"></div></div>
            
            <h2>Game Dice</h2>

            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
            
            <h2>Game Snake</h2>

            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
            
            <h2>Game Bounce</h2>

            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>

            <h2>Game Pen & Pencils</h2>

            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>
            
            <h2>Game Unlock/lock</h2>

            <div id="signal">interaction_clientX: <div id="interaction_clientX"></div></div>
            <div id="signal">interaction_clientY: <div id="interaction_clientY"></div></div>

            <h2>Inspired By:</h2>

            <div id="signal">my baby moms</div>
            <div id="signal">The dude that made reddit</div>
            <div id="signal">g4TV</div>
            <div id="signal">Rebel Fm</div>
            <div id="signal">Adam Sessler</div>
            <div id="signal">CoryX</div>
            <div id="signal">Tony Ferguson</div>
            <div id="signal">Henry Cejudo</div>
            <div id="signal">Plants vs Zombies</div>

	    	`));
		};
	};

	if (x == 'back_home') {
		if (scrollable != null) {
		    //alert('back_home');
		};
	};
};

let handle_events = () => {

	if (scrollable != null) {

		// scroll
	    scrollable.addEventListener('scroll', (event) => {
	        events.handle_Function_Scroll(event);
	        Handle_get_state_from_events();
	        Handle_render_data_value();
	    });

	    // events
		root.addEventListener('keydown', (event) => {
		    events.handle_Function_Key_Down(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('keyup', (event) => {
		    events.handle_Function_Key_Up(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('mousemove', (event) => {
		    events.handle_Function_Mouse_Move(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('mouseenter', (event) => {
		    events.handle_Function_Mouse_Enter(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('mouseleave', (event) => {
		    events.handle_Function_Mouse_Leave(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('mouseup', (event) => {
		    events.handle_Function_Mouse_Up(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('mousedown', (event) => {
		    events.handle_Function_Mouse_Down(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('touchmove', (event) => {
		    events.handle_Function_Touch_Move(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('touchstart', (event) => {
		    events.handle_Function_Touch_Start(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

		root.addEventListener('touchend', (event) => {
		    events.handle_Function_Touch_End(event);
		    Handle_get_state_from_events();
	        Handle_render_data_value();
		});

	};
};

let Handle_render_data_value = () => {

    // ux
    if ((document.getElementById('is_Desktop')) != null ) {
        document.getElementById('is_Desktop').innerHTML = state.ux.platform.is_Desktop;
    };
    if ((document.getElementById('is_Mobile')) != null ) {
        document.getElementById('is_Mobile').innerHTML = state.ux.platform.is_Mobile;
    };
    if ((document.getElementById('history_scroll')) != null ) {
        document.getElementById('history_scroll').innerHTML = state.events.scroll.history;
    };
    if ((document.getElementById('history_mouse')) != null ) {
        document.getElementById('history_mouse').innerHTML = state.events.mouse.history;
    };
    if ((document.getElementById('history_mouse_enter')) != null ) {
        document.getElementById('history_mouse_enter').innerHTML = state.events.mouse_enter.history;
    };
    if ((document.getElementById('history_mouse_leave')) != null ) {
        document.getElementById('history_mouse_leave').innerHTML = state.events.mouse_leave.history;
    };
    if ((document.getElementById('history_mouse_up')) != null ) {
        document.getElementById('history_mouse_up').innerHTML = state.events.mouse_up.history;
    };
    if ((document.getElementById('history_mouse_down')) != null ) {
        document.getElementById('history_mouse_down').innerHTML = state.events.mouse_down.history;
    };
    if ((document.getElementById('history_mouse_up_move')) != null ) {
        document.getElementById('history_mouse_up_move').innerHTML = state.events.mouse_up_move.history;
    };
    if ((document.getElementById('history_mouse_down_move')) != null ) {
        document.getElementById('history_mouse_down_move').innerHTML = state.events.mouse_down_move.history;
    };
    if ((document.getElementById('history_mouse_drag_drop')) != null ) {
        document.getElementById('history_mouse_drag_drop').innerHTML = state.events.mouse_drag_drop.history;
    };
    if ((document.getElementById('history_key')) != null ) {
        document.getElementById('history_key').innerHTML = state.events.key.history;
    };
    if ((document.getElementById('history_key_up')) != null ) {
        document.getElementById('history_key_up').innerHTML = state.events.key_up.history;
    };
    if ((document.getElementById('history_touch')) != null ) {
        document.getElementById('history_touch').innerHTML = state.events.touch.history;
    };
    if ((document.getElementById('history_touch_start')) != null ) {
        document.getElementById('history_touch_start').innerHTML = state.events.touch_start.history;
    };
    if ((document.getElementById('history_touch_end')) != null ) {
        document.getElementById('history_touch_end').innerHTML = state.events.touch_end.history;
    };
    if ((document.getElementById('history_touch_drag_drop')) != null ) {
        document.getElementById('history_touch_drag_drop').innerHTML = state.events.touch_drag_drop.history;
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

    // interaction
    if ((document.getElementById('interaction_character_clientX')) != null ) {
        document.getElementById('interaction_character_clientX').innerHTML = state.ui.interaction.player_1.clientX;
    };

    if ((document.getElementById('interaction_character_clientY')) != null ) {
        document.getElementById('interaction_character_clientY').innerHTML = state.ui.interaction.player_1.clientY;
    };

    // events
    if ((document.getElementById('event_accelerationIncludingGravity_x')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_x').innerHTML = state.events.motion.event_accelerationIncludingGravity_x;
    };

    if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_y').innerHTML = state.events.motion.event_accelerationIncludingGravity_y;
    };

    if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {
        document.getElementById('event_accelerationIncludingGravity_z').innerHTML = state.events.motion.event_accelerationIncludingGravity_z;
    };

    if ((document.getElementById('last_action')) != null ) {
        if (state.events.motion.event_accelerationIncludingGravity_x > 8) {
            document.getElementById('last_action').innerHTML = 'shook right';
        };
        if (state.events.motion.event_accelerationIncludingGravity_x < -8) {
            document.getElementById('last_action').innerHTML = 'shook left';
        };
        if (state.events.motion.event_accelerationIncludingGravity_y > 8) {
            document.getElementById('last_action').innerHTML = 'upside down';
        };
        if (state.events.motion.event_accelerationIncludingGravity_y < -8) {
            document.getElementById('last_action').innerHTML = 'rightside up';
        };
        if (state.events.motion.event_accelerationIncludingGravity_z > 8) {
            document.getElementById('last_action').innerHTML = 'overhead';
        };
        if (state.events.motion.event_accelerationIncludingGravity_z < -8) {
            document.getElementById('last_action').innerHTML = 'laid flat';
        };
    };

    if ((document.getElementById('event_alpha')) != null ) {
        document.getElementById('event_alpha').innerHTML = state.events.motion.event_alpha;
    };
    if ((document.getElementById('event_beta')) != null ) {
        document.getElementById('event_beta').innerHTML = state.events.motion.event_beta;
    };
    if ((document.getElementById('event_gamma')) != null ) {
        document.getElementById('event_gamma').innerHTML = state.events.motion.event_gamma;
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
    
    if ((document.getElementById('event_orientation')) != null ) {
        if ( state.events.motion.orientation_string == 0 ) {
                document.getElementById('event_orientation').innerHTML ='Portrait Mode, Home Button bottom';
        }
        else if ( state.events.motion.orientation_string == 90 ) {
                document.getElementById('event_orientation').innerHTML ='Landscape Mode, Home Button right';
        }
        else if ( state.events.motion.orientation_string == -90 ) {
                document.getElementById('event_orientation').innerHTML ='Landscape Mode, Home Button left';
        }
        else if ( state.events.motion.orientation_string == 180 ) {
                document.getElementById('event_orientation').innerHTML ='Portrait Mode, Home Button top';
        }
    };
};

let null_user = {
    "username" : "null_user",
    "password" : "1234",
    "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
};

let validated_user = {};
let validated_user_is_logged = false;

let check_localStorage = () => {

    if (localStorage.user == null) {
        localStorage.setItem("user", null_user);
        localStorage.setItem("username", null_user.username);
        localStorage.setItem("password", null_user.password);
        localStorage.setItem("signed_in", "false");
        //alert('welcome first timer')
        return
    };

    if (localStorage.user != null) {
        //alert('welcome back');

        //first_time_user = false;
        //alert('welcome ' + 'returning user: ' + localStorage.username + '!');

        let roster_library = state.data.firebase.gnougn.library;
        for (var i = 0; i < roster_library.length; i++) {

            if ((roster_library[i].child == "roster")) {

                // local user matched but is just a null user returning, offer user to create account
                if ((roster_library[i].username ) == (localStorage.username) && (localStorage.username == "null_user")) {
                    //alert('welcome back, create an account');
                };

                // local user matched and is an ACTUAL user
                if ((roster_library[i].username ) == (localStorage.username) && (localStorage.username != "null_user")) {
                    //alert('user matches local');

                    if (localStorage.signed_in == "true") {

                        //alert(roster_library[i].username + ' or ' + localStorage.username + ', sign this back in');

                        if (roster_library[i].password == localStorage.password) {
                            
                            validated_user = roster_library[i];                        
                            //alert('password matched! ' + 'signing in: ' + validated_user.id + ', ' + validated_user.username + '! validated_user id: ' + validated_user.id + '!');
                            
                            validated_user_is_logged = true;
                            localStorage.signed_in = true;
                            //alert('validated_user_is_logged: ' + validated_user_is_logged);
                            //alert('localStorage.signed_in: ' + localStorage.signed_in);
                        }
                    };

                    if (localStorage.signed_in == "false") {
                        //alert('offer to sign: ' + roster_library[i].username + ' or ' + localStorage.username + ', back in!');
                    };

                };



            };

        };

        return
    };
};

let handle_firebase_events = () => {

    // filter by title
    if (document.getElementById('element_input_filter') != null) {
        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
            // filter library
            setTimeout(function() {
                handle_refresh_fire_data();
            }, 0);
        });
    };

    // empty and render
    if (document.getElementById('element_refresh') != null) {
        document.getElementById('element_refresh').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                handle_refresh_fire_data();
            }, 0);
        });
    };

    // login
    if (document.getElementById('element_login') != null) {
        document.getElementById('element_login').addEventListener('click', (event) => {
            
            firebase_login();

        });
    };

    // logout
    if (document.getElementById('element_logout') != null) {
        document.getElementById('element_logout').addEventListener('click', (event) => {
            
            firebase_logout();

        });
    };

    // sort by input field
    if (document.getElementById('element_input_sort') != null) {
        document.getElementById('element_input_sort').addEventListener('keydown', (event) => {
            firebase_sort();
        });
    };

    // filter by title
    if (document.getElementById('element_addListing') != null) {
        document.getElementById('element_addListing').addEventListener('click', (event) => {
            firebase_add_listings('library');
        });
    };

    // create
    if (document.getElementById('element_addRoster') != null) {
        document.getElementById('element_addRoster').addEventListener('click', (event) => {
            firebase_add_listings('roster');
        });
    };

    if (document.getElementById('element_addStream') != null) {
        document.getElementById('element_addStream').addEventListener('click', (event) => {
            firebase_add_listings('stream');
        });
    };

};

let firebase_login = () => {

    let selected_username = (document.getElementById('element_login_username').value);
    let selected_password = (document.getElementById('element_login_password').value);

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        // local user matched
        if ((state.data.firebase.gnougn.library[i].username ) == selected_username) {
            
            if ((state.data.firebase.gnougn.library[i].password ) == selected_password) {
                alert('logging in: ' + selected_username + selected_password);

                localStorage.setItem("username", selected_username);
                localStorage.setItem("password", selected_password);

                localStorage.setItem("signed_in", "true");
            };

            if ((state.data.firebase.gnougn.library[i].password ) != selected_password) {
                alert('not logging in: ' + selected_username + selected_password);

                localStorage.setItem("username", "null_user");
                localStorage.setItem("password", "xxx");

                localStorage.setItem("signed_in", "false");
            };

        };

    };
};

let firebase_logout = () => {

    alert('logging out');

    let selected_username = (document.getElementById('element_login_username').value);
    let selected_password = (document.getElementById('element_login_password').value);

    localStorage.setItem("username", localStorage.username);
    localStorage.setItem("password", "xxx");

    localStorage.setItem("signed_in", "false");
    validated_user = {};
};

let firebase_sort = () => {

    // filter library
    setTimeout(function() {
        state.data.sort = document.getElementById('element_input_sort').value
    }, 0);
};

let firebase_add_listings = (child) => {

    let already_used = false;

    for (var i = 0; i < state.data.firebase.gnougn.library.length; i++) {

        let user_being_made = state.data.firebase.gnougn.library[i];

        if ( (user_being_made.child) == 'roster') {

            if ( (user_being_made.username) == document.getElementById('create_user_username').value) {
                already_used = true;
            };

        };
    };

    if (validated_user.id != null) {
        
        var current_second = new Date().getTime() / 1000;
        let default_item;

        // library
        if (child == 'library') {
            default_item = {
                child : "library",
                id : 0,
                likes : 0,
                views : 0,
                username : validated_user.username,
                password : validated_user.password,
                title : document.getElementById('create_post_title').value,
                tags : [document.getElementById('create_post_tag').value],
                time: current_second,
                authors : [ ""+`${validated_user.username}`+"" ]
            };
        };
        
        if (child == 'library') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newly_created_ID = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // roster
        if (child == 'roster' && already_used == false) {
            default_item = {
                child : "roster",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_user_username').value,
                tags : ['developer', 'designer', 'illustrator', 'animator', 'strategist', 'content' ],
                username : document.getElementById('create_user_username').value,
                password : document.getElementById('create_user_password').value,
                time: current_second,
                authors : [ ""+`${validated_user.username}`+"" ]
            };
        };

        if (child == 'roster' && already_used == true) {
            alert('username already in use');
        };
        

        if (child == 'roster' && already_used == true) {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newly_created_ID = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

        // stream chat
        if (child == 'stream') {
            default_item = {
                child : "stream",
                id : 0,
                likes : 0,
                views : 0,
                title : document.getElementById('create_stream').value,
                username : validated_user.username,
                time: current_second,
                tags : [''],
                authors : ['']
            };

        };

        if (child == 'stream') {
            // Firebase References
            // Firebase Database
            const rootRef = firebase.database().ref();
            const gnougnRef = rootRef.child('gnougn');
            const Ref = gnougnRef.child('library');

            // update key of added object
            Ref.push(default_item).then((snap) => {
                const key = snap.key;
                newly_created_ID = key;
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

            document.getElementById('create_post_title').value = ``;
            document.getElementById('create_post_tag').value = ``;
            document.getElementById('create_user_username').value = ``;
            document.getElementById('create_user_password').value = ``;

        };

    };

};


// Delete
let firebase_delete_Listings = (id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from delete_Listings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};

// Update
let firebase_like_Listings = (id) => {

    alert(id);
    alert('firebase_like_Listings');
    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');

    console.log(id, 'from like_Listings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};

// Update
let firebase_dislike_Listings = (id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from like_Listings service');
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
        handle_refresh_fire_data();
    }, 0);
};

// Update
let firebase_view_Listings = (id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child('library');
    console.log(id, 'from view_Listings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.views += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);

    // Set firebase data
    setTimeout(function() {
        handle_refresh_fire_data();
    }, 0);
};


// null, loading, loaded, home, user, post, page
let handle_Route = (x) => {

    state.app.url = x;
    let load_time = 0;

        if (state.app.url == '/') {

            // start asset preloader
            setTimeout( () => {
                handle_Route('loading');
            }, load_time);

        };
        if (state.app.url == 'loading') {
            status.innerHTML = ('you are loading');

            // start asset preloader
            setTimeout( () => {
                handle_Route('loaded');
            }, load_time);
        };
        if (state.app.url == 'loaded') {
            status.innerHTML = ('you are loaded');

            // start asset preloader
            setTimeout( () => {
                handle_Route('done');
            }, load_time);
        };
        if (state.app.url == 'done') {

            status.innerHTML = ('you are done');

            // start asset preloader
            setTimeout( () => {
                handle_Route('home');
            }, load_time);

        };

        if (state.app.url == 'home') {

            setTimeout( () => {
                status.innerHTML = ('you are home');
                handle_render('home');
                handle_events();

                handle_firebase_events();

            }, 0);

        };


        if (state.app.url == 'back_home') {

            setTimeout( () => {
                status.innerHTML = ('you are back home');
                handle_render('back_home');
            }, 0);

        };
};

window.onload = () => {
    handle_refresh_fire_data();
	console.log('onload: ' + 'done');
	console.log(style);
    //check_localStorage();
    handle_repeated_fire_data_validation
    handle_Route('/');
    events.handle_Function_Device_Resize(event);
};

window.onresize = () => {
    events.handle_Function_Device_Resize(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.ondevicemotion = function(event) {
    events.handle_Function_Device_Motion(event);
    console.log('Handle_get_state_from_events');
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.ondeviceorientation = function(event) {
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.onorientationchange = () => {
    state.events.motion.orientation_string = orientation;
    Handle_get_state_from_events();
    Handle_render_data_value();
};

window.onbeforeunload = function(){
    //alert('leaving');
};

export default {
    Handle_return_posts,
	Handle_return_state,
	handle_Route,
    firebase_delete_Listings,
firebase_like_Listings,
firebase_dislike_Listings,
firebase_view_Listings,
}