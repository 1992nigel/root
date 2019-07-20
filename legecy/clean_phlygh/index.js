
// Imports
import style from './style.scss';
import functions from './imports/functions';
import elements from './imports/elements';

let state = {
    data: {
        firebase: {

        }
    }
};

let url = '';

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
let firebase_data_has_been_updated_and_is_now_writeable = false;
let firebase_has_responsed_with_this_updated_data = {};

let handle_refresh_fire_data = () => {
    
    let rootRef = firebase.database().ref();

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

                console.log('contected!');
                console.log(firebase_has_responsed_with_this_updated_data.gnougn);

                document.getElementById('root').appendChild(
                    functions.Generate_new_fragment.appendChild(
                    elements.element_lead('firebase_has_responsed_with_this_updated_data')
                    )
                );

            };

        };

    };
}, 1000/24);

let Handle_return_state = () => { return state };

let handle_URL = () => {

    setTimeout( () => {

        var parts = location.pathname.split('/');
        window.scrollTo(0, 0);

        if (url == '') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: welcome to the site');
                url = 'loading'
                handle_URL();
            }, (1000/6));

        };

        if (url == 'loading') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: now site loading');
                url = 'loaded'
                handle_URL();
            }, (1000/6));

        };

        if (url == 'loaded') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: site loaded');
                url = 'done'
                handle_URL();
            }, (1000/6));

        };

        if (url == 'done') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: site done loading');
                url = 'welcome'
                handle_URL();
            }, (1000/6));

        };

        if (url == 'welcome') {

            // timeout
            setTimeout( () => {
                console.log('handle_URL: welcome');
                url = 'redirect'
                handle_URL();
            }, (1000/6));

        };

        if (url == 'redirect') {

            console.log('handle_URL: redirect');

            if (parts[1] != null) {

                if ((parts[1] == '')) {
                    console.log('just stay at the home page');
                    //url = parts[1];
                    //console.log('url: ' + url );

                    document.getElementById('root').appendChild(
                        functions.Generate_new_fragment.appendChild(
                        elements.element_lead('home!!!')
                        )
                    );

                };

                if (parts[1] == 'p') {
                    console.log('going to post page');

                    if (parts[2] != null) {
                        console.log('post id: ' + parts[2]);
                    };

                };

                if ((parts[1] != 'p') && (parts[1] != '')) {
                    console.log('going to user page');

                    if (parts[1] != null) {
                        console.log('user id: ' + parts[1]);
                    };

                };

            };

        };

    }, 0);

};

let check_localStorage = () => {

    let placeholder_user = {
        "username" : "placeholder_user",
        "password" : "1234",
        "feature_image_src" : "http://nownigel.com/photos/gui_user_blank.svg",
        "signed_in" : "false",
    };

    if (localStorage.user == null) {
        localStorage.setItem("user", placeholder_user);
        localStorage.setItem("username", placeholder_user.username);
        localStorage.setItem("password", placeholder_user.password);
        localStorage.setItem("signed_in", "false");
        //alert('welcome first timer');
        return
    };

    if (localStorage.user != null) {
        //alert('welcome bax')
    };
};


// hooks
window.onload = () => {
    alert('onload new');
    check_localStorage();
    handle_refresh_fire_data();
    handle_repeated_fire_data_validation;
    handle_URL();
};

export default {
    Handle_return_state
};