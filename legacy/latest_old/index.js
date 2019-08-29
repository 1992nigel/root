
import style from './style.scss';
import elements from './imports/elements';
import events from './imports/events';

import functions from './imports/functions';
import imported_components from './imports/components';
let components;
let upload_details = ``;
let valid_user;
let valid_users_posts;
let valid_signed_in;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2vm9flcAdvXDiVPjGLRPf-c6-pJNsHGI",
    authDomain: "phlygh-cd16b.firebaseapp.com",
    databaseURL: "https://phlygh-cd16b.firebaseio.com",
    projectId: "phlygh-cd16b",
    storageBucket: "phlygh-cd16b.appspot.com",
    messagingSenderId: "415995628382",
    appId: "1:415995628382:web:0295bf4137f3f5fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth ref
const auth = firebase.auth();

// make firestore ref
const db = firebase.firestore();

// listenforauth state changes
let validated_auth_user;
let loaded = false;
let check_url = () => {
    load_status = 8
    // refresh library
    setTimeout(function() {
        act_after_check_url();
    }, 100);
    console.log('mr.t');
};
let check_route = () => {
    console.log('check_route');
};
let db_loaded = () => {
    check_url();
};

// authChange
auth.onAuthStateChanged(auth_user => {
    console.log('onAuthStateChanged');

    if ( (auth_user) == null) {
        console.log(auth_user);
        validated_auth_user = {};

            // valid info render
            document.getElementById('valid_user_details').innerHTML = ``;

            // sign up / auth / create user
            document.getElementById('signup_form').innerHTML = `
                <div>
                    <h6>sign up</h6>

                    <label for="signup_email">email:</label>
                    <input placeholder="signup_email" type="email" id="signup_email" required />
                    <label for="signup_password">password:</label>
                    <input placeholder="signup_password" type="password" id="signup_password" required />
                    <label for="signup_nickname">nickname:</label>
                    <input placeholder="signup_nickname" type="text" id="signup_nickname" required />
                    <label for="signup_username">username:</label>
                    <input placeholder="signup_username" type="text" id="signup_username" required />
                    <label for="signup_twitter">twitter:</label>
                    <input placeholder="signup_twitter" type="text" id="signup_twitter" required />
                    <label for="signup_video">video:</label>
                    <input placeholder="signup_video" type="text" id="signup_video" required />
                    <button id="signup_submit" class="">sign up</button>
                  </div>
              `

            // sign in / auth
            document.getElementById('signin_form').innerHTML = `

                  <div>
                  <h6>sign in</h6>
                    <label for="signin_email">email:</label>
                    <input placeholder="signin_email" type="email" id="signin_email" required />
                    <label for="signin_password">password:</label>
                    <input placeholder="signin_password" type="password" id="signin_password" required />
                    <button id="signin_submit" class="">sign in</button>
                  </div>
            `;

            document.getElementById('upload_form').innerHTML = ``;
            document.getElementById('create_form').innerHTML = ``;
            document.getElementById('edit_form').innerHTML = ``;
            document.getElementById('signout_form').innerHTML = ``;

            let signup_email = document.getElementById('signup_email');
            let signup_password = document.getElementById('signup_password');
            let signup_submit = document.getElementById('signup_submit');
            let signup_nickname = document.getElementById('signup_nickname');
            let signup_username = document.getElementById('signup_username');
            let signup_twitter = document.getElementById('signup_twitter');
            let signup_video = document.getElementById('signup_video');
            signup_submit.addEventListener('click', (event) => {
                event.preventDefault();
                auth.createUserWithEmailAndPassword(signup_email.value, signup_password.value).then(cred => {
                    db_create_user(cred);        
                });
            });

            let signin_email = document.getElementById('signin_email');
            let signin_password = document.getElementById('signin_password');
            let signin_submit = document.getElementById('signin_submit');
            signin_submit.addEventListener('click', (event) => {
                event.preventDefault();
                auth.signInWithEmailAndPassword(signin_email.value, signin_password.value).then(cred => {
                    signin_email.value = ``;
                    signin_password.value = ``;
                });
            });

        update_db();
    };

    if ( (auth_user) != null) {
        console.log(auth_user);
        validated_auth_user = auth_user;
        document.getElementById('valid_user_details').innerHTML = ``;
        document.getElementById('signup_form').innerHTML = ``;
        document.getElementById('signin_form').innerHTML = ``;

        // upload
        document.getElementById('upload_form').innerHTML = `
            <div>
            <h6>upload</h6>
            <p id="upload_progress">images only</p>
            <label id="create_upload" for="fileButton">Select file</label>
            <progress value="0" max="100" id="uploader">0%</progress>
            <input class="display_none" type="file" value="upload" id="fileButton" accept="image/*" title="&nbsp;"/>
            <div id="upload_details"></div>
            </div>
        `;

        // create post
        document.getElementById('create_form').innerHTML = `
            <div>
            <h6>create</h6>
            <input placeholder="title" type="text" id="create_title" value="post title" required />
            <input placeholder="child" type="text" id="create_child" value="roster" required />
            <input placeholder="content" type="text" id="create_content" value="???" required />
            <input placeholder="video" type="text" id="create_video" value="https://www.youtube.com/embed/jYqRiKu7gY0" required />
            <button id="create_submit" class="">create_submit</button>
            </div>
        `;

        // edit valid user
        document.getElementById('edit_form').innerHTML = `
            <div>
            <h6>edit profile</h6>
            <input placeholder="edit_username" type="text" id="edit_username"/>
            <input placeholder="edit_nickname" type="text" id="edit_nickname"/>
            <input placeholder="edit_twitter" type="text" id="edit_twitter"/>

            <button id="edit_submit" class="">edit</button>
            <h6>delete profile</h6>
            <button id="delete_submit" class="">delete</button>
            </div>
           `;

        // signout / un-auth
        document.getElementById('signout_form').innerHTML = `
            <div>
            <h6>sign out</h6>
            <button id="signout_submit" class="">sign out</button>
            </div>
          `;


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

        let create_form = document.getElementById('create_form');
        let create_title = document.getElementById('create_title');
        let create_child = document.getElementById('create_child');
        let create_content = document.getElementById('create_content');
        let create_video = document.getElementById('create_video');
        let create_submit = document.getElementById('create_submit');
        create_submit.addEventListener('click', (event) => {
            event.preventDefault();
            
            let date = new Date();
            const ref = db.collection('guides').doc();
            const id = ref.id;
            let featured_image;
            if (upload_details == ``) {
                featured_image = `https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg`
            };

            db.collection('guides').doc(ref.id).set({
                title: create_title.value,
                child: create_child.value,
                content: create_content.value,
                image: featured_image,
                video: create_video.value,
                likes: 0,
                views: 0,
                time: date.getTime(),
                id: ref.id,
                author_id: valid_user.id
            }).then(()=> {
                console.log('guide made');
                create_title.value = ``;
                create_child.value = ``;
                create_content.value = ``;
                update_db();
            }).catch(err => {
                console.log(err.message)
            })

        });

        let edit_submit = document.getElementById('edit_submit');
        edit_submit.addEventListener('click', (event) => {
            event.preventDefault();
            db_edit("users", validated_auth_user.uid);
        });

        // delete / un-auth
        let delete_submit = document.getElementById('delete_submit');
        delete_submit.addEventListener('click', (event) => {
            event.preventDefault();
            db_delete("users", validated_auth_user.uid);
        });

        // signout / un-auth
        let signout_submit = document.getElementById('signout_submit');
        signout_submit.addEventListener('click', (event) => {
            event.preventDefault();
            auth.signOut().then(() => {
                console.log('logged out');
            });
        });
        
        update_db();
    };

});


let handle_add_device_events = () => {

    if ( (document.getElementById('footer_tabs_1')) != null ) {
        document.getElementById('footer_tabs_1').addEventListener("click", function(event) {
            state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
        });
    };

    if ( (document.getElementById('footer_tabs_2')) != null ) {
        document.getElementById('footer_tabs_2').addEventListener("click", function(event) {
            state.modal.gradient.bottom.transform = !state.modal.gradient.bottom.transform;
        });
    };

    if ( (document.getElementById('footer_tabs_3')) != null ) {
        document.getElementById('footer_tabs_3').addEventListener("click", function(event) {
            state.modal.gradient.left.transform = !state.modal.gradient.left.transform;
        });
    };

    if ( (document.getElementById('footer_tabs_4')) != null ) {
        document.getElementById('footer_tabs_4').addEventListener("click", function(event) {
            state.modal.gradient.right.transform = !state.modal.gradient.right.transform;
        });
    };
    if ( (document.getElementById('footer_tabs_5')) != null ) {
        document.getElementById('footer_tabs_5').addEventListener("click", function(event) {
            state.modal.pop.top.transform = !state.modal.pop.top.transform;
        });
    };

    if ( (document.getElementById('footer_tabs_6')) != null ) {
        document.getElementById('footer_tabs_6').addEventListener("click", function(event) {
            state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
        });
    };

    if ( (document.getElementById('footer_tabs_7')) != null ) {
        document.getElementById('footer_tabs_7').addEventListener("click", function(event) {
            state.modal.pop.left.transform = !state.modal.pop.left.transform;
        });
    };

    if ( (document.getElementById('footer_tabs_8')) != null ) {
        document.getElementById('footer_tabs_8').addEventListener("click", function(event) {
            state.modal.pop.right.transform = !state.modal.pop.right.transform;
        });
    };

    if (document.getElementById('shortcut_after_load') != null) {
        document.getElementById('shortcut_after_load').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('shortcut_after_load');
            };
            handle_ui();
        });
    };
    if (document.getElementById('link_home_mark') != null) {
        document.getElementById('link_home_mark').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('link_home_mark');
            };
            state.modal.page.top.transform = !state.modal.page.top.transform;
            handle_ui();
        });
    };
    if (document.getElementById('header_link_1') != null) {
        document.getElementById('header_link_1').addEventListener('click', (event) => {
            state.modal.page.top.transform = !state.modal.page.top.transform;
        });
    };
    if (document.getElementById('header_link_2') != null) {
        document.getElementById('header_link_2').addEventListener('click', (event) => {
            state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
        });
    };
    if (document.getElementById('header_link_3') != null) {
        document.getElementById('header_link_3').addEventListener('click', (event) => {
            state.modal.page.left.transform = !state.modal.page.left.transform;
        });
    };
    if (document.getElementById('header_link_4') != null) {
        document.getElementById('header_link_4').addEventListener('click', (event) => {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });
    };
    if (document.getElementById('header_link_5') != null) {
        document.getElementById('header_link_5').addEventListener('click', (event) => {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });
    };
    if (document.getElementById('header_link_6') != null) {
        document.getElementById('header_link_6').addEventListener('click', (event) => {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });
    };
    if (document.getElementById('header_link_7') != null) {
        document.getElementById('header_link_7').addEventListener('click', (event) => {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });
    };
    if (document.getElementById('header_link_8') != null) {
        document.getElementById('header_link_8').addEventListener('click', (event) => {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });
    };

    if (document.getElementById('gui_top_left') != null) {
        document.getElementById('gui_top_left').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top_left');
            };
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
            state.modal.gui.top_right.transform = true;
            state.data.dark_mode = state.data.dark_mode;
            handle_ui();
        });
    };

    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top');
            };
            handle_ui();
        });
    };

    if (document.getElementById('gui_top_right') != null) {
        document.getElementById('gui_top_right').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top_right');
            };
            //modal_gui_activate_all();
        });
    };

        if (document.getElementById('user_settings') != null) {
            document.getElementById('user_settings').addEventListener("click", function(event) {
                state.modal.page.right.transform = !state.modal.page.right.transform;
            });
        };

    if (document.getElementById('gui_left') != null) {
        document.getElementById('gui_left').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_left');
            };
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
        });
    };

    if (document.getElementById('gui_right') != null) {
        document.getElementById('gui_right').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_right');
            };
            state.modal.menu.right.transform = !state.modal.menu.right.transform;
        });
    };

    if (document.getElementById('gui_bottom_left') != null) {
        document.getElementById('gui_bottom_left').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_bottom_left');
            };
        });
    };

    if (document.getElementById('gui_bottom') != null) {
        document.getElementById('gui_bottom').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_bottom');
            };
            state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
        });
    };

    if (document.getElementById('gui_bottom_right') != null) {
        document.getElementById('gui_bottom_right').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_bottom_right');
            };
        });
    };

};

let handle_add_status_events = () => {

    if ( (document.getElementById('component_app_status_transform_gui_top')) != null ) {

        // gui - top
        document.getElementById('component_app_status_transform_gui_top').addEventListener("click", function(event) {
            state.modal.gui.top.transform = !state.modal.gui.top.transform;
        });

        // gui - top_left
        document.getElementById('component_app_status_transform_gui_top_left').addEventListener("click", function(event) {
            state.modal.gui.top_left.transform = !state.modal.gui.top_left.transform;
        });

        // gui - top_right
        document.getElementById('component_app_status_transform_gui_top_right').addEventListener("click", function(event) {
            state.modal.gui.top_right.transform = !state.modal.gui.top_right.transform;
        });

        // gui - left
        document.getElementById('component_app_status_transform_gui_left').addEventListener("click", function(event) {
            state.modal.gui.left.transform = !state.modal.gui.left.transform;
        });

        // gui - bottom
        document.getElementById('component_app_status_transform_gui_bottom').addEventListener("click", function(event) {
            state.modal.gui.bottom.transform = !state.modal.gui.bottom.transform;
        });

        // gui - bottom_left
        document.getElementById('component_app_status_transform_gui_bottom_left').addEventListener("click", function(event) {
            state.modal.gui.bottom_left.transform = !state.modal.gui.bottom_left.transform;
        });

        // gui - bottom_right
        document.getElementById('component_app_status_transform_gui_bottom_right').addEventListener("click", function(event) {
            state.modal.gui.bottom_right.transform = !state.modal.gui.bottom_right.transform;
        });

        // gui - right
        document.getElementById('component_app_status_transform_gui_right').addEventListener("click", function(event) {
            state.modal.gui.right.transform = !state.modal.gui.right.transform;
        });
    };

    if ( (document.getElementById('component_app_status_transform_nav_top')) != null ) {

        // nav - top
        document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function(event) {
            state.modal.nav.top.transform = !state.modal.nav.top.transform;
        });

        // nav - left
        document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function(event) {
            state.modal.nav.left.transform = !state.modal.nav.left.transform;
        });

        // nav - bottom
        document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function(event) {
            state.modal.nav.bottom.transform = !state.modal.nav.bottom.transform;
        });

        // nav - right
        document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function(event) {
            state.modal.nav.right.transform = !state.modal.nav.right.transform;
        });

    };

    if ( (document.getElementById('component_app_status_transform_pip_top')) != null ) {

        // pip - top
        document.getElementById('component_app_status_transform_pip_top').addEventListener("click", function(event) {
            state.modal.pip.top.transform = !state.modal.pip.top.transform;
        });

        // pip - left
        document.getElementById('component_app_status_transform_pip_left').addEventListener("click", function(event) {
            state.modal.pip.left.transform = !state.modal.pip.left.transform;
        });

        // pip - bottom
        document.getElementById('component_app_status_transform_pip_bottom').addEventListener("click", function(event) {
            state.modal.pip.bottom.transform = !state.modal.pip.bottom.transform;
        });

        // pip - right
        document.getElementById('component_app_status_transform_pip_right').addEventListener("click", function(event) {
            state.modal.pip.right.transform = !state.modal.pip.right.transform;
        });

    };

    if ( (document.getElementById('component_app_status_transform_page_top')) != null ) {

        // page - top
        document.getElementById('component_app_status_transform_page_top').addEventListener("click", function(event) {
            state.modal.page.top.transform = !state.modal.page.top.transform;
        });

        // page - left
        document.getElementById('component_app_status_transform_page_left').addEventListener("click", function(event) {
            state.modal.page.left.transform = !state.modal.page.left.transform;
        });

        // page - bottom
        document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function(event) {
            state.modal.page.bottom.transform = !state.modal.page.bottom.transform;
        });

        // page - right
        document.getElementById('component_app_status_transform_page_right').addEventListener("click", function(event) {
            state.modal.page.right.transform = !state.modal.page.right.transform;
        });

    };

    // menu
    if ( (document.getElementById('component_app_status_transform_menu_top')) != null ) {

        // menu - top
        document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function(event) {
            state.modal.menu.top.transform = !state.modal.menu.top.transform;
        });

        // menu - left
        document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function(event) {
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
        });

        // menu - bottom
        document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function(event) {
            state.modal.menu.bottom.transform = !state.modal.menu.bottom.transform;
        });

        // menu - right
        document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function(event) {
            state.modal.menu.right.transform = !state.modal.menu.right.transform;
        });

    };


    // pop
    if ( (document.getElementById('component_app_status_transform_pop_top')) != null ) {

        // pop - top
        document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function(event) {
            state.modal.pop.top.transform = !state.modal.pop.top.transform;
        });

        // pop - left
        document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function(event) {
            state.modal.pop.left.transform = !state.modal.pop.left.transform;
        });

        // pop - bottom
        document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function(event) {
            state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
        });

        // pop - right
        document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function(event) {
            state.modal.pop.right.transform = !state.modal.pop.right.transform;
        });

    };

    // gradient
    if ( (document.getElementById('component_app_status_transform_gradient_top')) != null ) {

        // gradient - top
        document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function(event) {
            state.modal.gradient.top.transform = !state.modal.gradient.top.transform;
        });

        // gradient - left
        document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function(event) {
            state.modal.gradient.left.transform = !state.modal.gradient.left.transform;
        });

        // gradient - bottom
        document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function(event) {
            state.modal.gradient.bottom.transform = !state.modal.gradient.bottom.transform;
        });

        // gradient - right
        document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function(event) {
            state.modal.gradient.right.transform = !state.modal.gradient.right.transform;
        });

    };

    // morph
    if ( (document.getElementById('component_app_status_transform_morph_top')) != null ) {

        // morph - top
        document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function(event) {
            state.modal.morph.top.transform = !state.modal.morph.top.transform;
        });

        // morph - left
        document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function(event) {
            state.modal.morph.left.transform = !state.modal.morph.left.transform;
        });

        // morph - bottom
        document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function(event) {
            state.modal.morph.bottom.transform = !state.modal.morph.bottom.transform;
        });

        // morph - right
        document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function(event) {
            state.modal.morph.right.transform = !state.modal.morph.right.transform;
        });

    };

};

let handle_display_with_delay = () => {
    components = imported_components.get_components_handled();
    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            functions.Toggle_functions_IF_State(functions.Toggle_display_and_opacity_on_with_no_delay, functions.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

let handle_transform = () => {
    components = imported_components.get_components_handled();
    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            functions.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

let update_db = () => {
    get_db_users();
    get_db_guides();
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

// sort
let fb_sorted_library = (the_arr, x) => {  return (the_arr).sort(find_sort(x)) };

// get
let posts_guides = [];
let get_db_guides = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('guides').get().then(snapshot => {
        
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        posts_guides = [];
        document.getElementById('db_posts').innerHTML = ``;

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_guides.push(items)
        });
        
        fb_sorted_library(posts_guides, 'timedown').forEach(post => {
            document.getElementById('db_posts').appendChild(
                Generate_new_li_post(post)
            );
        });

        console.log('posts_guides');
        console.log(posts_guides);
    });
};

let db_create_user = (cred) => {

    let date = new Date();

    let featured_image;
    if (upload_details == ``) {
        featured_image = `https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg`
    };

    // create user after auth
    db.collection('users').doc(cred.user.uid).set({
        id: cred.user.uid,
        email: cred.user.email,
        child: 'user',
        username: signup_username.value,
        nickname: signup_nickname.value,
        twitter: signup_twitter.value,
        created: date.getTime(),
        image: featured_image,
        video: signup_video.value,
        follows: [{id:cred.user.uid}],
        followers: [{id:cred.user.uid}],
    }).then(()=> {
        validated_auth_user = cred;
        signup_email.value = ``;
        signup_password.value = ``;
        signup_twitter.value = ``;
        signup_video.value = ``;
        signup_username.value = ``;
        signup_nickname.value = ``;
    }).catch(err => {
        console.log(err.message)
    })
};

// edit
let db_edit = (collection, deletable_id) => {
    console.log(deletable_id);

    let date = new Date();

    db.collection(collection).doc(deletable_id).update({
        id: deletable_id,
        email: valid_user.email,
        //child: document.getElementById('child').value,
        username: document.getElementById('edit_username').value,
        nickname: document.getElementById('edit_nickname').value,
        twitter: document.getElementById('edit_twitter').value,
    }).then(function() {
        //document.getElementById('child').value = ``,
        document.getElementById('edit_username').value = ``,
        document.getElementById('edit_nickname').value = ``,
        document.getElementById('edit_twitter').value = ``,
        alert("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

// delete user
let db_delete = (collection, deletable_id) => {
    console.log(deletable_id);
    db.collection(collection).doc(deletable_id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};

// get uers
let db_users = [];
let get_db_users = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('users').get().then(snapshot => {
        if (loaded == false) {
            console.log('firebase has loaded');
            loaded = true;
            db_loaded();
        };
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        document.getElementById('db_users').innerHTML = ``;
        db_users = [];

        snapshot.docs.forEach(doc => {
            let snap_doc = doc.data();
            db_users.push(snap_doc)
        });

        db_users.forEach(post => {
            console.log(post);
            document.getElementById('db_users').appendChild(
                Generate_new_li_post(post)
            );
        });


        if ((validated_auth_user.uid) != null) {

            console.log('validated_auth_user.uid: ' + validated_auth_user.uid);

            // match auth user with database collection: users
            valid_user = {};
            valid_users_posts = [];
            valid_signed_in = false;

            // match auth and valid user
            for (var i = 0; i < db_users.length; i++) {
                if (db_users[i].id == validated_auth_user.uid) {
                    console.log('check match from db_users[i]');
                    console.log(db_users[i]);
                    valid_user = db_users[i];
                    valid_signed_in = true;
                }
            };

            // match post by valid user
            for (var i = 0; i < posts_guides.length; i++) {
                if (valid_user.id == posts_guides[i].author_id) {
                       //alert('found post by user: ' + posts_guides[i]);
                    valid_users_posts.push(posts_guides[i]);
                }
            }

            // match followers
            let valid_users_followers = [];
            for (var i = 0; i < db_users.length; i++) {
                for (var x = 0; x < valid_user.followers.length; x++) {
                    console.log('does: ' + db_users[i].id + ' and ' + valid_user.followers[x].id)
                    if (db_users[i].id == valid_user.followers[x].id) {
                        valid_users_followers.push(db_users[i]);
                    };
                };
            };

            // match follows
            let valid_users_follows = [];
            for (var i = 0; i < db_users.length; i++) {
                for (var x = 0; x < valid_user.follows.length; x++) {console.log('does: ' + db_users[i].id + ' and ' + valid_user.follows[x].id)
                    if (db_users[i].id == valid_user.follows[x].id) {
                        valid_users_follows.push(db_users[i]);
                    };
                };
            };

            if ((valid_signed_in)) {
                    document.getElementById('user_settings').style = `background-image: url(${valid_user.image})`

                document.getElementById('valid_user_details').innerHTML = `<h6>valid_user_details</h6>`;
                document.getElementById('valid_user_details').innerHTML += `<p>id: ${valid_user.id}</p>`;
                document.getElementById('valid_user_details').innerHTML += `<p>email: ${valid_user.email}</p>`;
                document.getElementById('valid_user_details').innerHTML += `<p>nickname: ${valid_user.nickname}</p>`;
                document.getElementById('valid_user_details').innerHTML += `<p>twitter: ${valid_user.twitter}</p>`;
                document.getElementById('valid_user_details').innerHTML += `<p>username: ${valid_user.username}</p>`;

                // render matched post
                document.getElementById('valid_user_posts_title').innerHTML = `<h6>valid user's posts</h6>`;
                valid_users_posts.forEach(post => {
                    document.getElementById('valid_user_posts').appendChild(
                        Generate_new_li_post(post)
                    );
                });

                // follows
                document.getElementById('valid_user_follows').innerHTML = `<h6>valid user's follows</h6>`;
                valid_users_follows.forEach(post => {
                    document.getElementById('valid_user_follows').appendChild(
                        Generate_new_li_post(post)
                    );
                });

                // followers
                document.getElementById('valid_user_followers').innerHTML = `<h6>valid user's followers</h6>`;
                valid_users_followers.forEach(post => {
                    document.getElementById('valid_user_followers').appendChild(
                        Generate_new_li_post(post)
                    );
                });

                console.log('valid_user');
                console.log(valid_user);

            };
        };

    });
};

// generate
let Generate_new_li_post = (data_Object) => {

    let element = document.createElement('li');

              if (data_Object.child != 'user') {

              if (data_Object.title != null) {
                element.setAttribute("id",data_Object.title);
              };

              if (data_Object.title != null) {
                element.classList = data_Object.title + ' post bg_grey';
              };
                                  
              if ((data_Object) != null) {
                          element.innerHTML += `
                        
                        <div id="post_actions" class="position_absolute top_0 left_0 height_5vw width_5vw">
                            <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                            </div>
                        </div>

                          <p class="title">${data_Object.title}: ${data_Object.child}</p>

                        <img class="post_image" src="${(data_Object.image)}" alt="${(data_Object.username)}"/>

                          <div class="post_image" style="background-image: url(${(data_Object.image)})">
                        
                            <button>edit</button>

                            <p class="">photo bg:<a href="${data_Object.author_id}">${data_Object.author_id}</a></p>
                        </div>

                        <div class="post_edit">

                            <button>save</button>
                            <button>edit</button>
                            <button>edit</button>
                            <button>edit</button>
                            <button>edit</button>
                            <button>edit</button>
                            <button>edit</button>
                            <button>edit</button>

                        </div>

                        <iframe title="${data_Object.title}" width="100%" height="315" src="${data_Object.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       
                        <p class="">info:</p>

                        <div class="post_hover_info hover_show position_relative float_left width_100">
                
                            <p class="">video:<a href="${data_Object.video}">${data_Object.video}</a></p>
                            <p class="">child: <a href="${data_Object.title}">${data_Object.child}</a></p>
                            <p class="">time: <a href="${data_Object.title}">${data_Object.time}</a></p>
                            <p class="">title: <a href="${data_Object.title}">${data_Object.title}</a></p>
                            <p class="">likes: <a href="${data_Object.title}">${data_Object.likes}</a></p>
                            <p class="">views: <a href="${data_Object.title}">${data_Object.views}</a></p>
                            <p class="">author_id: <a href="${data_Object.author_id}">${data_Object.author_id}</a></p>

                       </div>

                  `;
              };
      
              if ((data_Object.id) != null) {
                  element.innerHTML += `
                      <p class="">id:${data_Object.id}</p>
                  `;
              };

              if ((data_Object) != null) {
                  element.innerHTML += `
                    <div class="post_crud">
                        <button>like?</button>
                        <button>dislike?</button>
                        <button>rate 1- 3?</button>
                        <button>re"tweet"?</button>
                        <button>share</button>
                        <button>open</button>
                        <button>edit</button>
                        <button>save</button>
                    </div>
                  `;
              };


              // Objects: Firebase Library Items
              // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

                element.addEventListener("click", function(event) {
                    alert('not user');

                    // from posts to pop
                    history.pushState("", document.title, "/");
                    window.history.pushState('', '', 'p/'+data_Object.id);
                    check_route();
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>author_id: ${data_Object.author_id}</p>`;
                    
                    state.modal.pop.top.transform = true;

                        // from pop to page
                        document.getElementById('component_app_modal_element_pop_top_content').addEventListener("click", function(event) {
                              
                            state.modal.pop.top.transform = false;
                            state.modal.page.top.transform = true;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML = '';
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>author_id: ${data_Object.author_id}</p>`;

                                // from page to pip
                                document.getElementById('component_app_modal_element_page_top_content').addEventListener("click", function(event) {
                                      
                                    state.modal.page.top.transform = false;
                                    state.modal.pip.top.transform = true;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML = '';
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>author_id: ${data_Object.author_id}</p>`;

                                    
                                    // from pip to gradient
                                    document.getElementById('component_app_modal_element_pip_top_content').addEventListener("click", function(event) {
                                          
                                        state.modal.pip.top.transform = false;
                                        state.modal.gradient.top.transform = true;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML = '';
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>author_id: ${data_Object.author_id}</p>`;

                                                
                                        // from gradient to morph
                                        document.getElementById('component_app_modal_element_gradient_top_content').addEventListener("click", function(event) {
                                              
                                            state.modal.gradient.top.transform = false;
                                            state.modal.morph.top.transform = true;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML = '';
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>title: ${data_Object.title}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>author_id: ${data_Object.author_id}</p>`;

                                            
                                            // from morph to ?
                                            document.getElementById('component_app_modal_element_morph_top_content').addEventListener("click", function(event) {
                                                  
                                                state.modal.morph.top.transform = false;
                                                    alert('morph clicked');

                                            });

                                        });

                                    });

                                });

                        });

                });

              };

              if (data_Object.child == 'user') {

              if (data_Object.id != null) {
                element.setAttribute("id",data_Object.id);
              };

              if (data_Object.id != null) {
                element.classList = data_Object.id + ' user bg_grey';
              };
                                  
              if ((data_Object) != null) {
                          element.innerHTML += `
                        
                        <div id="post_actions" class="position_absolute top_0 left_0 height_5vw width_5vw">
                            <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                            </div>
                        </div>
                        
                        <p class="title">${data_Object.username}: ${data_Object.child}</p>

                            <iframe title="${data_Object.title}" width="100%" height="315" src="${data_Object.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            
                        <img class="post_image" src="${(data_Object.image)}" alt="${(data_Object.username)}"/>

                          <div class="post_image" style="background-image: url(${(data_Object.image)})">

                            <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                            <p class="">photo bg:<a href="${data_Object.username}">${data_Object.username}</a></p>

                            </div>

                            <div class="post_edit">

                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                                <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>

                            </div>

                      <p class="">info:</p>

             <div class="post_hover_info hover_show position_relative float_left width_100">
                
                      <p class="">username: <a href="${data_Object.video}">${data_Object.username}</a></p>
                   <p class="">video:<a href="${data_Object.video}">${data_Object.video}</a></p>
                            <p class="">child: <a href="${data_Object.title}">${data_Object.child}</a></p>
                            <p class="">time: <a href="${data_Object.title}">${data_Object.time}</a></p>
                            <p class="">title: <a href="${data_Object.title}">${data_Object.title}</a></p>
                            <p class="">likes: <a href="${data_Object.title}">${data_Object.likes}</a></p>
                            <p class="">views: <a href="${data_Object.title}">${data_Object.views}</a></p>
                            <p class="">author_id: <a href="${data_Object.author_id}">${data_Object.author_id}</a></p>

                      <p class="">video:<a href="${data_Object.video}">${data_Object.video}</a></p>
                      <p class="">child: <a href="${data_Object.video}">${data_Object.child}</a></p>
                      <p class="">created: <a href="${data_Object.video}">${data_Object.created}</a></p>
                      <p class="">twitter: <a href="${data_Object.video}">${data_Object.twitter}</a></p>
                      <p class="">nickname: <a href="${data_Object.video}">${data_Object.nickname}</a></p>

             </div>

                  `;
              };
      
              if ((data_Object.id) != null) {
                  element.innerHTML += `
                      <p class="">id:${data_Object.id}</p>
                  `;
              };

              if ((data_Object) != null) {
                  element.innerHTML += `
                    <div class="post_crud">
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                        <button><div class="gui_logo_mark position_relative height_205vw width_100 margin_auto"></div></button>
                    </div>
                  `;
              };

              // Objects: Firebase Library Items
              // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

                element.addEventListener("click", function(event) {
                    alert('user');
                    
                    // from posts to pop
                    history.pushState("", document.title, "/");
                    window.history.pushState('', '', data_Object.username);
                    check_route();
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>email: ${data_Object.email}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>nickname: ${data_Object.nickname}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>twitter: ${data_Object.twitter}</p>`;
                    document.getElementById('component_app_modal_element_pop_top_content').innerHTML += `<p>username: ${data_Object.username}</p>`;
                    
                    state.modal.pop.top.transform = true;

                        // from pop to page
                        document.getElementById('component_app_modal_element_pop_top_content').addEventListener("click", function(event) {
                              
                            state.modal.pop.top.transform = false;
                            state.modal.page.top.transform = true;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML = '';
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>email: ${data_Object.email}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>nickname: ${data_Object.nickname}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>twitter: ${data_Object.twitter}</p>`;
                            document.getElementById('component_app_modal_element_page_top_content').innerHTML += `<p>username: ${data_Object.username}</p>`;

                                // from page to pip
                                document.getElementById('component_app_modal_element_page_top_content').addEventListener("click", function(event) {
                                      
                                    state.modal.page.top.transform = false;
                                    state.modal.pip.top.transform = true;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML = '';
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>email: ${data_Object.email}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>nickname: ${data_Object.nickname}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>twitter: ${data_Object.twitter}</p>`;
                                    document.getElementById('component_app_modal_element_pip_top_content').innerHTML += `<p>username: ${data_Object.username}</p>`;

                                    
                                    // from pip to gradient
                                    document.getElementById('component_app_modal_element_pip_top_content').addEventListener("click", function(event) {
                                          
                                        state.modal.pip.top.transform = false;
                                        state.modal.gradient.top.transform = true;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML = '';
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>email: ${data_Object.email}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>nickname: ${data_Object.nickname}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>twitter: ${data_Object.twitter}</p>`;
                                        document.getElementById('component_app_modal_element_gradient_top_content').innerHTML += `<p>username: ${data_Object.username}</p>`;

                                                
                                        // from gradient to morph
                                        document.getElementById('component_app_modal_element_gradient_top_content').addEventListener("click", function(event) {
                                              
                                            state.modal.gradient.top.transform = false;
                                            state.modal.morph.top.transform = true;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML = '';
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>id: ${data_Object.id}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>email: ${data_Object.email}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>nickname: ${data_Object.nickname}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>twitter: ${data_Object.twitter}</p>`;
                                            document.getElementById('component_app_modal_element_morph_top_content').innerHTML += `<p>username: ${data_Object.username}</p>`;

                                            
                                            // from morph to ?
                                            document.getElementById('component_app_modal_element_morph_top_content').addEventListener("click", function(event) {
                                                  
                                                state.modal.morph.top.transform = false;
                                                    alert('morph clicked');

                                            });

                                        });

                                    });

                                });

                        });

                });

              };

          /*
          element.children[1].children[3].addEventListener("click", function(event) {
          });
          */


    return element
};

// go nigel!
let dev_mode = false;
let user_logged_in = true;
let state = {

    data: {
        onload_url: '',
        scene: 0,
        route: 0,
        game: 0,
        time: 0,
        onload_time: 0,
        dark_mode: 0
    },
    motion: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        sequence_game: 0
    },
    interaction: {

        root: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0,
            wheel_up: false,
            wheel_down: true,
            scrolling_started: false,
            inside_lead: true,
            past_lead: false,
            before_footer: true,
            inside_footer: false,
            component_app_gui_scroll_y_position: 0,
                wheel: 'still',
                wheels: 0,
                isWheeling: false
        },

        playable: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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

        player_1: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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

        player_2: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
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

        vr: {
            clientX: -1,
            clientY: -1
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
    events: {
        mouse: {
            current: {
                clientX: 0,
                clientY: 0
            },
            status: {
                enter: true,
                leave: false,
                up: true,
                down: false
            },
            history: [],
            timer: 0
        },
        mouse_enter: {
            history: [],
            timer: 0
        },
        mouse_leave: {
            history: [],
            timer: 0
        },
        mouse_up: {
            history: [],
            timer: 0
        },
        mouse_down: {
            history: [],
            timer: 0
        },
        mouse_up_move: {
            history: [],
            timer: 0
        },
        mouse_down_move: {
            history: [],
            timer: 0
        },
        mouse_drag_drop: {
            history: [],
            timer: 0
        },
        touch: {
            history: [],
            timer: 0
        },
        touch_start: {
            history: [],
            timer: 0
        },
        touch_end: {
            history: [],
            timer: 0
        },
        touch_drag_drop: {
            history: [],
            timer: 0
        },
        scroll: {
            history: [],
            timer: 0
        },
        keys_held: {
            history: [],
            timer: 0
        },
        key: {
            history: [],
            timer: 0
        },
        key_up: {
            history: [],
            timer: 0
        },
        motion: {
            history: [],
            event_accelerationIncludingGravity_x: 0,
            event_accelerationIncludingGravity_y: 0,
            event_accelerationIncludingGravity_z: 0,
            orientation_string: '',
            orientation_string_history: [],
            event_alpha: '',
            event_beta: '',
            event_gamma: '',
            orientation_history: []
        }
    },
    modal: {
        gui: {

            top: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top_left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top_right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom_left: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom_right: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            }
        },
        pip: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        pop: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        page: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        gradient: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        morph: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        menu: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        nav: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        }

    }
};

let body = document.getElementById('body');

let handle_onload_time = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

    state.data.onload_time = state.data.time;
    handle_render_data_value();
};

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
                handle_render_data_value();

            }, (1000));
    })();
};

// intervals
let load_status = 0;
let act_after_check_url = () => {
    console.log('act_after_check_url');
    console.log(load_status);

    if (load_status == 0) {
        window.scrollTo(0, 0);
        handle_ui();

        document.getElementById('lead').innerHTML = `
            <div id="logo_mark" class="enterBottomvh animated025 gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto"></div> 
        
            <div id="lead_load_bar" class="width_0 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01">

            </div>
        `;

        document.getElementById('main').appendChild(elements.components('main'))

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 1) {
        document.getElementById('lead_load_bar').classList = `width_1205 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`
        
        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 2) {
        document.getElementById('lead_load_bar').classList = `width_25 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);

    };

    if (load_status == 3) {

        document.getElementById('lead_load_bar').classList = `width_3705 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);

    };

    if (load_status == 4) {

        document.getElementById('lead_load_bar').classList = `width_50 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);

    };

    if (load_status == 5) {

        document.getElementById('lead_load_bar').classList = `width_6205 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);

    };

    if (load_status == 6) {

        document.getElementById('lead_load_bar').classList = `width_75 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);

    };

    if (load_status == 7) {

        document.getElementById('lead_load_bar').classList = `width_8705 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

    };

    if (load_status == 8) {

        document.getElementById('lead_load_bar').classList = `width_100 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 9) {

        document.getElementById('lead').innerHTML = `
            <div id="logo_mark" class="gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto"></div> 
        
            <div id="lead_load_bar" class="transform_translate3d_top100 width_100 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01">

            </div>
        `;

        document.getElementById('lead_load_bar').classList = `transform_translate3d_top100 width_100 height_1205vw position_absolute bottom_0 left_0 bg_white overflow_hidden easing_01`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1000);
    };

    if (load_status == 10) {

        document.getElementById('lead_load_bar').classList = ``;

        document.getElementById('lead').innerHTML = `
            <div id="lead_container">
                <div id="logo_mark" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto"></div> 
            </div>
            <div id="lead_control"></div>
        `;

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };

    if (load_status == 11) {

        modal_mobile_home();

        // refresh library
        setTimeout(function() {
            play_lead();
            act_after_check_url();
            handle_ui();
            handle_add_device_events();
            handle_add_status_events();
        }, 100);
    };

    load_status += 1;

};


let clear_scene_Interval = () => {
    if (dev_mode) {
        alert('clear_scene_Interval');
    };
    clearInterval(run_scene_Interval);
    state.motion.frame = 0;
};

let run_scene_Interval;

// scene
let scene_cardboard = () => {

    // execute on timeout
    document.getElementById('lead_container').innerHTML = `            
          <div id="cardboard" class="position_relative float_left width_100vw height_100 overflow_hidden">
             
             <div bg="vr_bg" class="transform_translate3d_top0 position_absolute top_0 left_0 right_0 width_100 height_100 opacity_005">
                <div id="row_accent_noise"></div>
             </div>

             <div id="vr_mg" class="transform_translate3d_top0 position_absolute top_0 left_0 right_0 width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box easing_01">
                <div id="column1" class="position_relative float_left width_100 height_100 ">
                   <div id="vr_mg_Left_Top" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Left Top
                   </div>
                   <div id="vr_mg_Left_Center" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Left Center
                   </div>
                   <div id="vr_mg_Left_Bottom" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Left Bottom
                   </div>
                </div>
                <div id="column2" class="position_relative float_left width_100 height_100">
                   <div id="vr_mg_Center_Top" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Center Top
                   </div>
                   <div id="vr_mg_Center_Mid" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      <div id="vr_mg_Center_Mid_scene" class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">
                         <div id="container_object" class="animated1 delay2 enterTopBounce position_absolute bottom_0 left_1205vw width_33vw height_33vw">
                            <div id="object" class="gui_stage_tv width_100 height_100"></div>
                         </div>
                         <div id="container_object" class="animated1 delay2 enterTopBounce position_absolute top_0 right_0 left_0 width_33vw height_33vw">
                            <div id="object" class="gui_stage_lights width_100 height_100"></div>
                         </div>
                         <div id="container_object" class="animated1 delay2 enterTopBounce position_absolute bottom_0 right_1205vw width_33vw height_33vw">
                            <div id="object" class="gui_stage_desk width_100 height_100"></div>
                         </div>
                      </div>
                      vr_mg Center Mid
                   </div>
                   <div id="vr_mg_Center_Bottom" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Center Bottom
                   </div>
                </div>
                <div id="column3" class="position_relative float_left width_100 height_100">
                   <div id="vr_mg_Right_Top" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Right Top
                   </div>
                   <div id="vr_mg_Right_Mid" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Right Mid
                   </div>
                   <div id="vr_mg_Right_Bottom" class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">
                      vr_mg Right Bottom
                   </div>
                </div>
             </div>

             <div id="vr_fg" class="transform_translate3d_top0 position_absolute top_0 left_0 right_0 width_100 height_100">
                  

            <div id="element_ball" class="position_absolute height_10vh width_10vh bg_grey"></div>
            <div id="bounce" class="position_absolute height_1vh width_1vh bg_grey"></div>
            <div id="track_x" class="position_absolute height_1vh width_1vh bg_grey"></div>
            <div id="track_y" class="position_absolute height_1vh width_1vh bg_grey"></div>

                <div id="validated_user_enemy_character">
                      
                  <div id="enemy_character" class="position_absolute animated1 delay2 enterTopBounce">
                      <div id="enemy_character_svg" class="gui_character_1 width_100 height_100"></div>
                  </div>

                </div>

                <div id="validated_user_playable_character">
                      
                  <div id="playable_character" class="position_absolute animated1 delay2 enterTopBounce">
                      <div id="playable_character_svg" class="gui_character_1 width_100 height_100"></div>
                  </div>

                </div>

                <div id="player_1_playable_character">
                      
                  <div id="player_1_character" class="position_absolute animated1 delay2 enterTopBounce">
                      <div id="player_1_character_svg" class="gui_character_1 width_100 height_100"></div>
                  </div>

                </div>

                <div id="player_2_playable_character">
                  
                  <div id="player_2_character" class="position_absolute animated1 delay2 enterTopBounce">
                      <div id="player_2_character_svg" class="gui_character_1 width_100 height_100"></div>
                  </div>

                </div>
                
             </div>

          </div>
    `;
    
    run_scene_Interval = setInterval(
        () => {

            if (document.getElementById('cardboard') != null) {
                document.getElementById('cardboard').style =
                    'height: ' + (state.ux.dimensions.height) + 'px;' +
                    'width: ' + (state.ux.dimensions.width) + 'px;';
            };

                // vr
                if (document.getElementById('vr_mg') != null) {
                    document.getElementById('vr_mg').style = "transform: translate3d(" +
                        (state.interaction.vr.clientX * 100) + "%, " +
                        (state.interaction.vr.clientY * 100) + "%, 0);"
                };


                // ball
                    // 10 is half the size of the element_ball
                    // It center the positioning point to the center of the element_ball
                    if (document.getElementById('element_ball') != null) {
                        document.getElementById('element_ball').style.top = ((state.events.motion.event_gamma / state.ux.dimensions.height) * 100) + "%";
                        document.getElementById('element_ball').style.left = ((state.events.motion.event_beta / state.ux.dimensions.width) * 100) + "%";
                    };

                // bounce
                    if (document.getElementById('bounce') != null) {
                        document.getElementById('bounce').style =
                            'top: ' + (state.interaction.bounce.yaxis * (state.ux.dimensions.height8)) + 'px; \
                        left: ' + (state.interaction.bounce.xaxis * (state.ux.dimensions.width8)) + 'px ;';
                    };

                // track x
                    if (document.getElementById('track_x') != null) {
                        document.getElementById('track_x').style =
                            'top: ' + (0) + 'px; \
                        left: ' + (state.events.mouse.current.clientX) + 'px ;';
                    };

                // track y
                    if (document.getElementById('track_y') != null) {
                        document.getElementById('track_y').style =
                            'top: ' + (state.events.mouse.current.clientY) + 'px; \
                        left: ' + (0) + 'px ;';
                    };

                // playerable / validated
                    if ((user_logged_in == true)) {
                        if (document.getElementById('playable_character_svg') != null) {

                            if (state.interaction.playable.stance == 0) {
                                if (state.interaction.playable.angle == 0) {
                                document.getElementById('playable_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.playable.frame+ ' position_absolute margin_auto ');
                                
                                };
                           
                                if (state.interaction.playable.angle == 1) {
                                document.getElementById('playable_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.playable.frame+ ' position_absolute margin_auto ');
                                
                                };
                            };
            
                            if (state.interaction.playable.frame == 4) {
                                state.interaction.playable.frame = 0;
                            };
                        
                            state.interaction.playable.frame += 1;
                        };

                        if (document.getElementById('playable_character') != null) {
                            let playable_character = document.getElementById('playable_character');
                            playable_character.style =
                                'height: ' + (state.interaction.playable.height * (state.ux.dimensions.height8)) + 'px;' +
                                'width: ' + (state.interaction.playable.width * (state.ux.dimensions.width8)) + 'px;' +
                                'bottom: ' + (state.interaction.playable.clientY * (state.ux.dimensions.height8)) + 'px;' +
                                'left: ' + (state.interaction.playable.clientX * (state.ux.dimensions.width8)) + 'px;';
                        };
                    };

                //player 1
                    // motion & stop
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

                    if (document.getElementById('player_1_character_svg') != null) {

                        if (state.interaction.player_1.stance == 0) {
                            if (state.interaction.player_1.angle == 0) {
                            document.getElementById('player_1_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                            
                            };
                       
                            if (state.interaction.player_1.angle == 1) {
                            document.getElementById('player_1_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                            
                            };
                        };
        
                        if (state.interaction.player_1.frame == 4) {
                            state.interaction.player_1.frame = 0;
                        };
                    
                        state.interaction.player_1.frame += 1;
                    };

                    if (document.getElementById('player_1_character') != null) {
                        let player_1_character = document.getElementById('player_1_character');
                        player_1_character.style =
                            'height: ' + (state.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
                            'width: ' + (state.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
                            'bottom: ' + (state.interaction.player_1.clientY * (state.ux.dimensions.height8)) + 'px;' +
                            'left: ' + (state.interaction.player_1.clientX * (state.ux.dimensions.width8)) + 'px;';
                    };


                // player_2
                    // motion & stop
                    if ( state.interaction.player_2.cycles.walking == true) {

                        // stance: up
                        if ( state.interaction.player_2.stance == 3 ) {

                            
                            // player walking and pause
                            if (state.interaction.player_2.clientY < 3) {
                                state.interaction.player_2.clientY += (1/16);
                            };
                        };

                        // stance: down
                        if ( state.interaction.player_2.stance == 2 ) {

                            // player walking and pause
                            if (state.interaction.player_2.clientY > -4) {
                                state.interaction.player_2.clientY -= (1/16);
                            };
                        };

                        // stance: right
                        if ( state.interaction.player_2.stance == 1 ) {
                            // player walking and pause
                            if (state.interaction.player_2.clientX < 8) {
                                state.interaction.player_2.clientX += (1/16);
                            };
                        };

                        // stance: left
                        if ( state.interaction.player_2.stance == 0 ) {

                            // player walking and pause
                            if (state.interaction.player_2.clientX > 0) {
                                state.interaction.player_2.clientX -= (1/16);
                            };
                        };
                    };

                    // left
                    if ( state.interaction.player_2.clientX <= 0 && state.interaction.player_2.cycles.walking == true ) {
                        state.interaction.player_2.clientX = 0;
                        //state.interaction.player_2.cycles.walking = false;

                        // reset face
                        state.interaction.player_2.stance = 1;

                        // auto walk
                        state.interaction.player_2.clientX += (1/16);
                    };

                    // right
                    if ( state.interaction.player_2.clientX >= 7 && state.interaction.player_2.cycles.walking == true ) {
                        state.interaction.player_2.clientX = 7;
                        //state.interaction.player_2.cycles.walking = false;

                        // reset face
                        state.interaction.player_2.stance = 0;

                        // auto walk
                        state.interaction.player_2.clientX -= (1/16);
                    };

                    if (document.getElementById('player_2_character_svg') != null) {

                        if (state.interaction.player_2.stance == 0) {
                            if (state.interaction.player_2.angle == 0) {
                            document.getElementById('player_2_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.player_2.frame+ ' position_absolute margin_auto ');
                            
                            };
                       
                            if (state.interaction.player_2.angle == 1) {
                            document.getElementById('player_2_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.player_2.frame+ ' position_absolute margin_auto ');
                            
                            };
                        };
        
                        if (state.interaction.player_2.frame == 4) {
                            state.interaction.player_2.frame = 0;
                        };
                    
                        state.interaction.player_2.frame += 1;
                    };

                    if (document.getElementById('player_2_character') != null) {
                        let player_2_character = document.getElementById('player_2_character');
                        player_2_character.style =
                            'height: ' + (state.interaction.player_2.height * (state.ux.dimensions.height8)) + 'px;' +
                            'width: ' + (state.interaction.player_2.width * (state.ux.dimensions.width8)) + 'px;' +
                            'bottom: ' + (state.interaction.player_2.clientY * (state.ux.dimensions.height8)) + 'px;' +
                            'left: ' + (state.interaction.player_2.clientX * (state.ux.dimensions.width8)) + 'px;';
                    };

                // enemy
                    // motion & stop
                    if ( state.interaction.enemy.cycles.walking == true) {

                        // stance: up
                        if ( state.interaction.enemy.stance == 3 ) {

                            
                            // player walking and pause
                            if (state.interaction.enemy.clientY < 3) {
                                state.interaction.enemy.clientY += (1/8);
                            };
                        };

                        // stance: down
                        if ( state.interaction.enemy.stance == 2 ) {

                            // player walking and pause
                            if (state.interaction.enemy.clientY > -4) {
                                state.interaction.enemy.clientY -= (1/8);
                            };
                        };

                        // stance: right
                        if ( state.interaction.enemy.stance == 1 ) {
                            // player walking and pause
                            if (state.interaction.enemy.clientX < 8) {
                                state.interaction.enemy.clientX += (1/8);
                            };
                        };

                        // stance: left
                        if ( state.interaction.enemy.stance == 0 ) {

                            // player walking and pause
                            if (state.interaction.enemy.clientX > 0) {
                                state.interaction.enemy.clientX -= (1/8);
                            };
                        };
                    };

                    // left
                    if ( state.interaction.enemy.clientX <= 0 && state.interaction.enemy.cycles.walking == true ) {
                        state.interaction.enemy.clientX = 0;
                        //state.interaction.enemy.cycles.walking = false;

                        // reset face
                        state.interaction.enemy.stance = 1;

                        // auto walk
                        state.interaction.enemy.clientX += (1/8);
                    };

                    // right
                    if ( state.interaction.enemy.clientX >= 7 && state.interaction.enemy.cycles.walking == true ) {
                        state.interaction.enemy.clientX = 7;
                        //state.interaction.enemy.cycles.walking = false;

                        // reset face
                        state.interaction.enemy.stance = 0;

                        // auto walk
                        state.interaction.enemy.clientX -= (1/8);
                    };

                    if (document.getElementById('enemy_character_svg') != null) {

                        if (state.interaction.enemy.stance == 0) {
                            if (state.interaction.enemy.angle == 0) {
                            document.getElementById('enemy_character_svg').classList = (' width_100 height_100 gui_character_left_'+state.interaction.enemy.frame+ ' position_absolute margin_auto ');
                            
                            };
                       
                            if (state.interaction.enemy.angle == 1) {
                            document.getElementById('enemy_character_svg').classList = (' width_100 height_100 gui_character_right_'+state.interaction.enemy.frame+ ' position_absolute margin_auto ');
                            
                            };
                        };
        
                        if (state.interaction.enemy.frame == 4) {
                            state.interaction.enemy.frame = 0;
                        };
                    
                        state.interaction.enemy.frame += 1;
                    };

                    if (document.getElementById('enemy_character') != null) {
                        let enemy_character = document.getElementById('enemy_character');
                        enemy_character.style =
                            'height: ' + (state.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
                            'width: ' + (state.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
                            'bottom: ' + (state.interaction.enemy.clientY * (state.ux.dimensions.height8)) + 'px;' +
                            'left: ' + (state.interaction.enemy.clientX * (state.ux.dimensions.width8)) + 'px;';
                    };

                // bounce
                    if ( state.interaction.bounce.yaxis == 0 ) {
                            state.interaction.bounce.yaxisascending = true;
                    };

                    // yaxisascending: down
                    if ( state.interaction.bounce.yaxis == 8 ) {
                            state.interaction.bounce.yaxisascending = false;
                    };

                    // xaxisascending: right
                    if ( state.interaction.bounce.xaxis == 0 ) {
                            state.interaction.bounce.xaxisascending = true;
                    };

                    // xaxisascending: left
                    if ( state.interaction.bounce.xaxis == 8 ) {
                            state.interaction.bounce.xaxisascending = false;
                    };


                    // yaxisascending: up
                    if ( state.interaction.bounce.yaxisascending == true ) {

                        
                            state.interaction.bounce.yaxis += (1/8);
                    };

                    // yaxisascending: down
                    if ( state.interaction.bounce.yaxisascending == false ) {

                            state.interaction.bounce.yaxis -= (1/8);
                    };

                    // xaxisascending: right
                    if ( state.interaction.bounce.xaxisascending == true ) {
                            state.interaction.bounce.xaxis += (1/8);
                    };

                    // xaxisascending: left
                    if ( state.interaction.bounce.xaxisascending == false ) {

                            state.interaction.bounce.xaxis -= (1/8);
                    };

                // check game state
                    if ( (state.interaction.playable.clientX == state.interaction.enemy.clientX) ) {
                        console.log('lost')
                    };

            state.motion.frame += 1;
            console.log(state.motion.frame);

    }, (1000 / state.motion.framerate));
};

// sequence
let sequence_game_intro = () => {

    // execute on timeout
    if (state.data.game == 0) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_container').innerHTML = `

            <div id="lead_scene" class="">
                <div class="position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto">
                    <div id="logo_mark" class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                </div>

                <div class="position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto">
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                </div>

            </div>
            `;
            sequence_game_intro();
        }, (1000));
    };


    // execute on timeout
    if (state.data.game == 1) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_container').innerHTML = `

            `;
            sequence_game_intro();
        }, (1000));
    };


    // execute on timeout
    if (state.data.game == 2) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_container').innerHTML = `

            <div id="lead_scene" class="">
                <div class="position_absolute top_0 left_0 bottom_0 right_0 height_50vh width_50vw margin_auto">
                    <div id="logo_mark" class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                </div>

                <div class="position_absolute left_0 bottom_0 right_0 height_1205vh width_100 margin_auto">
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                    <div class="position_relative height_100 width_1205 margin_auto float_left">
                        <div class="gui_wit_logo_dark position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto"></div>
                    </div>
                </div>

            </div>
            `;
            sequence_game_intro();
        }, (1000));
    };

    // execute on timeout
    if (state.data.game == 3) {
        setTimeout( () => {
            scene_cardboard();
            state.data.game = 0;
        }, (1000));
    };
};

// play
let play_lead = () => {

    if (state.data.scene == 0) {
        clear_scene_Interval();
        document.getElementById('lead_container').innerHTML = `
         <div id="logo_mark" class="gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto"></div> 
        `
        document.getElementById('lead_control').innerHTML = `
                <div id="next" class="position_absolute top_0 bottom_0 right_0 bg_grey color_white height_1205vw width_1205vw line_height_1205vw font_size_1205vw margin_auto"><div></div></div>
                <div id="last" class="position_absolute top_0 bottom_0 left_0 bg_grey color_white height_1205vw width_1205vw line_height_1205vw font_size_1205vw margin_auto"><div></div></div>
        `
    };

    if (state.data.scene == 1) {
        sequence_game_intro();
    };

    // events
    if (state.data.scene == 0) {

        if (document.getElementById('next') != null) {
            document.getElementById('next').addEventListener('click', (event) => {
                //alert('next');
                state.data.scene += 1;
                play_lead();
            });
        };

        if (document.getElementById('last') != null) {
            document.getElementById('last').addEventListener('click', (event) => {
                //alert('last');
                state.data.scene -= 1;
                play_lead();
            });
        };

    };
};

let modal_reset = () => {

    state.modal.nav.top.transform = false;
    state.modal.nav.bottom.transform = false;
    state.modal.nav.left.transform = false;
    state.modal.nav.right.transform = false;

    state.modal.pip.top.transform = false;
    state.modal.pip.bottom.transform = false;
    state.modal.pip.left.transform = false;
    state.modal.pip.right.transform = false;

    state.modal.page.top.transform = false;
    state.modal.page.bottom.transform = false;
    state.modal.page.left.transform = false;
    state.modal.page.right.transform = false;

    state.modal.gradient.top.transform = false;
    state.modal.gradient.bottom.transform = false;
    state.modal.gradient.left.transform = false;
    state.modal.gradient.right.transform = false;

    state.modal.morph.top.transform = false;
    state.modal.morph.bottom.transform = false;
    state.modal.morph.left.transform = false;
    state.modal.morph.right.transform = false;

    state.modal.pop.top.transform = false;
    state.modal.pop.bottom.transform = false;
    state.modal.pop.left.transform = false;
    state.modal.pop.right.transform = false;

    state.modal.menu.top.transform = false;
    state.modal.menu.bottom.transform = false;
    state.modal.menu.left.transform = false;
    state.modal.menu.right.transform = false;

    state.modal.gui.top.transform = false;
    state.modal.gui.top_left.transform = true;
    state.modal.gui.top_right.transform = false;

    state.modal.gui.left.transform = false;
    state.modal.gui.right.transform = false;

    state.modal.gui.bottom.transform = false;
    state.modal.gui.bottom_left.transform = false;
    state.modal.gui.bottom_right.transform = false;

    handle_ui();
};

let modal_mobile_home = () => {

    state.modal.nav.top.transform = true;
    state.modal.nav.bottom.transform = true;
    state.modal.nav.left.transform = false;
    state.modal.nav.right.transform = false;

    state.modal.pip.top.transform = false;
    state.modal.pip.bottom.transform = false;
    state.modal.pip.left.transform = false;
    state.modal.pip.right.transform = false;

    state.modal.page.top.transform = false;
    state.modal.page.bottom.transform = false;
    state.modal.page.left.transform = false;
    state.modal.page.right.transform = false;

    state.modal.gradient.top.transform = false;
    state.modal.gradient.bottom.transform = false;
    state.modal.gradient.left.transform = false;
    state.modal.gradient.right.transform = false;

    state.modal.morph.top.transform = false;
    state.modal.morph.bottom.transform = false;
    state.modal.morph.left.transform = false;
    state.modal.morph.right.transform = false;

    state.modal.pop.top.transform = false;
    state.modal.pop.bottom.transform = false;
    state.modal.pop.left.transform = false;
    state.modal.pop.right.transform = false;

    state.modal.menu.top.transform = false;
    state.modal.menu.bottom.transform = false;
    state.modal.menu.left.transform = false;
    state.modal.menu.right.transform = false;

    state.modal.gui.top.transform = false;
    state.modal.gui.top_left.transform = true;
    state.modal.gui.top_right.transform = false;

    state.modal.gui.left.transform = false;
    state.modal.gui.right.transform = false;

    state.modal.gui.bottom.transform = false;
    state.modal.gui.bottom_left.transform = false;
    state.modal.gui.bottom_right.transform = false;

    handle_ui();
};

let modal_gui_activate_all = () => {

    state.modal.gui.top.transform = true;
    state.modal.gui.top_left.transform = true;
    state.modal.gui.top_right.transform = true;
    state.modal.gui.bottom.transform = true;
    state.modal.gui.bottom_left.transform = true;
    state.modal.gui.bottom_right.transform = true;
    state.modal.gui.left.transform = true;
    state.modal.gui.right.transform = true;

    handle_ui();
};

let handle_ReturnState = () => {
    return state
};

let handle_ui = () => {

    handle_display_with_delay();
    handle_transform();
    handle_render_data_value();

    // before any scrolling
    if (state.interaction.root.scrolling_started == false && state.interaction.root.inside_footer == false && state.interaction.root.before_footer == true) {
        if (document.getElementById('lead_nav') != null) {
            document.getElementById('lead_nav').classList = `position_fixed top_0 left_0 right_0 width_100 z_index_1 margin_auto easing_01`
        };
    };

    if (state.interaction.root.scrolling_started == true && state.interaction.root.past_lead == false && state.interaction.root.inside_footer == false) {
        if (document.getElementById('lead_nav') != null) {
            document.getElementById('lead_nav').classList = `position_fixed top_0 left_0 right_0 width_100 bg_green z_index_1 margin_auto easing_01`
        };
    };

    if (state.interaction.root.scrolling_started == true && state.interaction.root.past_lead == true && state.interaction.root.inside_footer == false) {
        if (document.getElementById('lead_nav') != null) {
            document.getElementById('lead_nav').classList = `position_fixed top_0 left_0 right_0 width_100 bg_orange z_index_1 margin_auto easing_01`
        };
    };

    // inside footer
    if (state.interaction.root.scrolling_started == true && state.interaction.root.inside_footer == false && state.interaction.root.before_footer == false) {
        if (document.getElementById('lead_nav') != null) {
            document.getElementById('lead_nav').classList = `position_fixed top_0 left_0 right_0 width_100 bg_pink z_index_1 margin_auto easing_01`
        };
    };

    // at bottom
    if (state.interaction.root.inside_footer == true && state.interaction.root.before_footer == false) {
        if (document.getElementById('lead_nav') != null) {
            document.getElementById('lead_nav').classList = ``
        };
    };
    
};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();

    handle_ui();
};

let handle_render_data_value = () => {

    //modals

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


    // interaction
    if ((document.getElementById('interaction_character_clientX')) != null ) {
        document.getElementById('interaction_character_clientX').innerHTML = state.interaction.player_1.clientX;
    };

    if ((document.getElementById('interaction_character_clientY')) != null ) {
        document.getElementById('interaction_character_clientY').innerHTML = state.interaction.player_1.clientY;
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
    if ((document.getElementById('current_scroll') != null) && state.events.scroll.history.length > 0 ) {
        console.log('state.events.scroll.history[state.events.scroll.history.length - 1]');
        console.log(state.events.scroll.history[state.events.scroll.history.length - 1])
        document.getElementById('current_scroll').innerHTML = 'scrollTop: ' + state.events.scroll.history[state.events.scroll.history.length - 1].scrollTop + '. scrollHeight: ' + state.events.scroll.history[state.events.scroll.history.length - 1].scrollHeight +'.';
    };

    if ((document.getElementById('history_scroll')) != null ) {
        document.getElementById('history_scroll').innerHTML = state.events.scroll.history;
    };

    if ((document.getElementById('current_mouse') != null) && state.events.mouse.history.length > 0) {
        document.getElementById('current_mouse').innerHTML = 'clientX: ' + state.events.mouse.history[state.events.mouse.history.length - 1].clientX + '. clientY: ' + state.events.mouse.history[state.events.mouse.history.length - 1].clientY +'.';
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

    if ((document.getElementById('keys_held')) != null ) {
        (document.getElementById('keys_held')).innerHTML = ``;

        state.events.keys_held.history.forEach(doc => {
            (document.getElementById('keys_held')).innerHTML += `
            keys_held keyCode: ${state.events.keys_held.history[state.events.keys_held.history.length - 1]}.
            `
        });
    };

    if ((document.getElementById('history_key')) != null ) {
        document.getElementById('history_key').innerHTML = state.events.key.history;
    };
    if ((document.getElementById('history_key_up')) != null ) {
        document.getElementById('history_key_up').innerHTML = state.events.key_up.history;
    };

    if ((document.getElementById('current_touch') != null) && state.events.touch.history.length > 0) {
        document.getElementById('current_touch').innerHTML = 'clientX: ' + state.events.touch.history[state.events.touch.history.length - 1].clientX + '. clientY: ' + state.events.touch.history[state.events.touch.history.length - 1].clientY +'.';
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


    if ((document.getElementById('history_last_action')) != null ) {
        document.getElementById('history_last_action').innerHTML = state.events.motion.history;
    };

    if ((document.getElementById('event_orientation_history')) != null ) {
        document.getElementById('event_orientation_history').innerHTML = state.events.motion.orientation_history;
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

    // value states
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

    if (document.getElementById("wheel_up") != null) {
      document.getElementById("wheel_up").innerHTML =
        state.interaction.root.wheel_up;
    }

    if (document.getElementById("wheel_down") != null) {
      document.getElementById("wheel_down").innerHTML =
        state.interaction.root.wheel_down;
    }

    if (document.getElementById("scrolling_started") != null) {
      document.getElementById("scrolling_started").innerHTML =
        state.interaction.root.scrolling_started;
    }

    if (document.getElementById("inside_lead") != null) {
      document.getElementById("inside_lead").innerHTML =
        state.interaction.root.inside_lead;
    }

    if (document.getElementById("past_lead") != null) {
      document.getElementById("past_lead").innerHTML =
        state.interaction.root.past_lead;
    }

    if (document.getElementById("before_footer") != null) {
      document.getElementById("before_footer").innerHTML =
        state.interaction.root.before_footer;
    }

    if (document.getElementById("inside_footer") != null) {
      document.getElementById("inside_footer").innerHTML =
        state.interaction.root.inside_footer;
    }

};

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

document.addEventListener("DOMContentLoaded", (event) => {
    events.handle_Function_Device_DOMContentLoaded(event);
    handle_onload_time();
    handle_time();

    if (document.getElementById('lead') != null) {
        document.getElementById('lead').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    handle_ReturnedState_fromEvents();
});

window.addEventListener("load", (event) => {
    events.handle_Function_Device_Load(event);

    handle_ReturnedState_fromEvents();
});

window.addEventListener("resize", (event) => {
    events.handle_Function_Device_Resize(event);
    handle_ReturnedState_fromEvents();
});

window.ondevicemotion = ((event) => {
    events.handle_Function_Device_Motion(event);
    console.log('Handle_get_state_from_events');
    handle_ReturnedState_fromEvents();
});

window.ondeviceorientation = ((event) => {
    events.handle_Function_Device_Orientation(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("onorientationchange", (event) => {
    events.handle_Function_Device_Orientation_Change(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("onbeforeunload", (event) => {
});

export default {
    handle_ReturnState,
    act_after_check_url,
    modal_reset
}