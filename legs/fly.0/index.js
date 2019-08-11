// Imports
import style from './style.scss';
import events from './imports/events';

import imported_components from './imports/components';
import functions from './imports/functions';

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
    interaction: {

        root: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0,
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

    motion: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        sequence_game_intro: 0
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
        fade: {
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
        overlay: {
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
        },
        corner: {
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
        key: {
            history: [],
            timer: 0
        },
        key_up: {
            history: [],
            timer: 0
        },
        motion: {
            event_accelerationIncludingGravity_x: 0,
            event_accelerationIncludingGravity_y: 0,
            event_accelerationIncludingGravity_z: 0,
            orientation_string: '',
            event_alpha: '',
            event_beta: '',
            event_gamma: ''
        }
    }
};

let dev_mode = false;

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));


let components;

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
let stored_auth_user_cred = {};
let valid_user;
let valid_users_posts;
let valid_signed_in;
let db_users;
let upload_details = ``;
let html = document.getElementById('html');
let body = document.getElementById('body');
let header = document.getElementById('header');

let posts_guides;

// make auth ref
const auth = firebase.auth();

// make firestore ref
const db = firebase.firestore();

// listenforauth state changes
auth.onAuthStateChanged(auth_user => {
	console.log('onAuthStateChanged');

	if ( (auth_user) == null) {
		stored_auth_user_cred = {};

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

        document.getElementById('upload_form').innerHTML = ``;
        document.getElementById('create_form').innerHTML = ``;
        document.getElementById('edit_form').innerHTML = ``;
        document.getElementById('signout_form').innerHTML = ``;

		console.log('firebase has connected');
		update_db();
	};

	if ( (auth_user) != null) {
        stored_auth_user_cred = auth_user;
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

			let edit_submit = document.getElementById('edit_submit');
			edit_submit.addEventListener('click', (event) => {
			    event.preventDefault();
			    db_edit("users", stored_auth_user_cred.uid);
			});

			// delete / un-auth
			let delete_submit = document.getElementById('delete_submit');
			delete_submit.addEventListener('click', (event) => {
			    event.preventDefault();
			    db_delete("users", stored_auth_user_cred.uid);
			});

		// signout / un-auth
        document.getElementById('signout_form').innerHTML = `
			<div>
			<h6>sign out</h6>
			<button id="signout_submit" class="">sign out</button>
			</div>
      	`;

			// signout / un-auth
			let signout_submit = document.getElementById('signout_submit');
			signout_submit.addEventListener('click', (event) => {
				event.preventDefault();
				auth.signOut().then(() => {
					console.log('logged out');
				});
			});

		console.log('firebase has connected');
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
            handle_render();
        });
    };
    if (document.getElementById('link_home_mark') != null) {
        document.getElementById('link_home_mark').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('link_home_mark');
            };
            state.modal.page.top.transform = !state.modal.page.top.transform;
            handle_render();
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
            handle_render();
        });
    };

    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top');
            };
            handle_render();
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

let handle_onload_time = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();

    state.data.onload_time = state.data.time;
    handle_render();
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

                //handle_render_data_value();

            }, (1000));
    })();
};

let update_db = () => {
	get_db_guides();
	get_db_users();
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
		stored_auth_user_cred = cred;
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

let handle_render_data_value = () => {
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
                    check_state();
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

			                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
                            <p class="">photo bg:<a href="${data_Object.username}">${data_Object.username}</a></p>

							</div>

							<div class="post_edit">

				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
				                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>

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
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
		                <button><div class="gui_logo_mark position_relative height_100 width_100 margin_auto"></div></button>
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
                    check_state();
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
let get_db_guides = () => {
	//db.settings({timestampsInSnapshots: true});
	db.collection('guides').get().then(snapshot => {
		
		console.log('snapshot.docs: ');
		console.log(snapshot.docs);
		posts_guides = [];
        document.getElementById('posts_random').innerHTML = ``;

		snapshot.docs.forEach(doc => {
			let items = doc.data();
			posts_guides.push(items)
		});
        
        fb_sorted_library(posts_guides, 'timedown').forEach(post => {
            document.getElementById('posts_random').appendChild(
                Generate_new_li_post(post)
            );
        });

		console.log('posts_guides');
		console.log(posts_guides);
	});
};

// get
let get_db_users = () => {
	//db.settings({timestampsInSnapshots: true});
	db.collection('users').get().then(snapshot => {
		console.log('snapshot.docs: ');
		console.log(snapshot.docs);
        document.getElementById('db_all_users').innerHTML = ``;
		db_users = [];

		snapshot.docs.forEach(doc => {
			let items = doc.data();
			db_users.push(items)
		});

        db_users.forEach(post => {
            document.getElementById('db_all_users').appendChild(
                Generate_new_li_post(post)
            );
        });

        if ((stored_auth_user_cred.uid) != null) {

        	console.log('stored_auth_user_cred.uid: ' + stored_auth_user_cred.uid);

            // match auth user with database collection: users
            valid_user = {};
            valid_users_posts = [];
            valid_signed_in = false;

            // match auth and valid user
            for (var i = 0; i < db_users.length; i++) {
				if (db_users[i].id == stored_auth_user_cred.uid) {
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

        check_url();

	});
};

// play
let play_lead = () => {

    if (state.data.scene == 0) {
        clear_scene_Interval();
        document.getElementById('lead_content').innerHTML = `
     	<div id="logo_mark" class="leaveBottomvh animated025 gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto"></div> 
        `
        document.getElementById('lead_control').innerHTML = `
                <div id="next" class="position_absolute top_0 bottom_0 right_0 bg_grey color_white height_1205vw line_height_1205vw font_size_1205vw margin_auto">next</div>
                <div id="last" class="position_absolute top_0 bottom_0 left_0 bg_grey color_white height_1205vw line_height_1205vw font_size_1205vw margin_auto">last</div>
        `
    };

    if (state.data.scene == 1) {
        sequence_game_intro();
    };

    if (state.data.scene == 2) {
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

// intervals
let act_after_check_url = () => {

    state.data.route += 1;

    console.log(state.data.route);
    if (state.data.route == 1) {

        console.log('db loaded, url checked, local?, url: ' + state.data.onload_url);
        console.log('posts_guides');
        console.log(fb_sorted_library(posts_guides, 'timedown'));
        console.log('db_users');
        console.log(fb_sorted_library(db_users, 'timedown'));
    	document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_1205 height_100 float_left`
		
        // refresh library
        setTimeout(function() {
			handle_onload_time();
			handle_time();
			handle_add_device_events();
			handle_add_status_events();
            act_after_check_url();
        }, 250);
    };

    if (state.data.route == 2) {
        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_25 height_100 float_left`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 500);
    };

    if (state.data.route == 3) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_3705 height_100 float_left`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1);
    };

    if (state.data.route == 4) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_50 height_100 float_left`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1);
    };

    if (state.data.route == 5) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_6205 height_100 float_left`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1);
    };

    if (state.data.route == 6) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_75 height_100 float_left`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1);
    };

    if (state.data.route == 7) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_8705 height_100 float_left`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 250);
    };

    if (state.data.route == 8) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_absolute bottom_0 left_0 margin_auto width_100 height_100 float_left`

        console.log('done loading');
        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1000);
    };

    if (state.data.route == 9) {
        
        document.getElementById('load_bar_container').classList = `animated1 leaveBottomvh position_fixed bottom_0 left_0 margin_auto width_100 height_1vh float_left z_index_1`

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1000);
    };

    if (state.data.route == 10) {
        
        document.getElementById('logo_mark').classList = `gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_50 width_50 margin_auto`;
        document.getElementById('load_bar_container').classList = `display_none bottom_0 left_0 margin_auto width_100 height_1vh float_left z_index_1`;

        if(state.ux.platform.is_Desktop == true) {
            modal_reset();
        };

        if(state.ux.platform.is_Mobile == true) {
            modal_mobile_home();
        };

	    handle_render();

        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 1000);
    };

    if (state.data.route == 11) {

        play_lead();
    	/*
        if (state.data.onload_url == 'home') {
            sound_effect_beep.play();
            setTimeout(function() {
                state.modal.pop.top.transform = true;
            }, 5000);
        };

        if (state.data.onload_url == 'post') {
            sound_effect_beep.play();
            setTimeout(function() {
                state.modal.pop.top.transform = true;
            }, 5000);
        };

        if (state.data.onload_url == 'user') {
            sound_effect_beep.play();
            setTimeout(function() {
                state.modal.pop.top.transform = true;
            }, 5000);
        };
		*/

        sound_effect_beep.play();
        // refresh library
        setTimeout(function() {
            act_after_check_url();
        }, 100);
    };
};

// sequence
let sequence_game_intro = () => {

    // execute on timeout
    if (state.data.game == 0) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_content').innerHTML = `

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
            document.getElementById('lead_content').innerHTML = `

            `;
            sequence_game_intro();
        }, (1000));
    };


    // execute on timeout
    if (state.data.game == 2) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_content').innerHTML = `

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
	document.getElementById('lead_content').innerHTML = `            
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

            state.motion.frame += 1;
            console.log(state.motion.frame);

    }, (1000 / state.motion.framerate));
};

// after db user
let check_url = () => {

    var parts = location.pathname.split('/');
    setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);

    if (parts[1] != null) {

        if ((parts[1] == '')) {
            console.log('just stay at the home page');
            state.data.onload_url = 'home';
            document.title = "home??";
        };

        if (parts[1] == 'p') {
            console.log('going to post page');
            if (parts[2] != null) {
                console.log('post id: ' + parts[2]);

                for (var i = 0; i < posts_guides.length; i++) {
                   console.log(posts_guides[i]);
                    if (posts_guides[i].id == parts[2]) {
                        console.log('post found: ' + posts_guides[i]);
                        state.data.onload_url = 'post';
                        document.title = posts_guides[i].title;
                    }
                };

            };
        };

        if ((parts[1] != 'p') && (parts[1] != '')) {
            console.log('going to user page');
            if (parts[1] != null) {
                console.log('user id: ' + parts[1]);

                for (var i = 0; i < db_users.length; i++) {
                   console.log(db_users[i]);
                    if (db_users[i].nickname == parts[1]) {
                        console.log('user found: ' + db_users[i]);
                        state.data.onload_url = 'user';
                        document.title = db_users[i].email;
                    }
                };

            };
        };
    };
    act_after_check_url();
};

let check_state = () => {

    var parts = location.pathname.split('/');
    setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);

    if (parts[1] != null) {

        if ((parts[1] == '')) {
            console.log('just stay at the home page');
            state.data.onload_url = 'home';
            document.title = "home??";
        };

        if (parts[1] == 'p') {
            console.log('going to post page');
            if (parts[2] != null) {
                console.log('post id: ' + parts[2]);

                for (var i = 0; i < posts_guides.length; i++) {
                   console.log(posts_guides[i]);
                    if (posts_guides[i].id == parts[2]) {
                        console.log('post found: ' + posts_guides[i]);
                        state.data.onload_url = 'post';
                        document.title = posts_guides[i].title;
                    }
                };

            };
        };

        if ((parts[1] != 'p') && (parts[1] != '')) {
            console.log('going to user page');
            if (parts[1] != null) {
                console.log('user id: ' + parts[1]);

                for (var i = 0; i < db_users.length; i++) {
                   console.log(db_users[i]);
                    if (db_users[i].nickname == parts[1]) {
                        console.log('user found: ' + db_users[i]);
                        state.data.onload_url = 'user';
                        document.title = db_users[i].email;
                    }
                };

            };
        };
    };
};

let handle_ui = () => {

    if(state.data.onload_url == 'home') {
    };

    // handle_ui
    if ((valid_signed_in == true)) {

        document.getElementById('signup_form').classList = `display_none`;
        document.getElementById('signin_form').classList = `display_none`;
        document.getElementById('upload_form').classList = ``;
        document.getElementById('create_form').classList = ``;
        document.getElementById('edit_form').classList = ``;
        document.getElementById('signout_form').classList = ``;

    };
    // handle_ui
    if ((valid_signed_in == false)) {

        document.getElementById('signup_form').classList = ``;
        document.getElementById('signin_form').classList = ``;
        document.getElementById('upload_form').classList = `display_none`;
        document.getElementById('create_form').classList = `display_none`;
        document.getElementById('edit_form').classList = `display_none`;
        document.getElementById('signout_form').classList = `display_none`;

    };

    if(state.modal.menu.left.transform == true) {
        if (document.getElementById('gui_top_left_icon') != null) {
            document.getElementById('gui_top_left_icon').classList = `gui_link_menu_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto`
        };
    };

    if(state.modal.menu.left.transform == false) {
        if (document.getElementById('gui_top_left_icon') != null) {
            document.getElementById('gui_top_left_icon').classList = `position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto`
        };
    };

    if (document.getElementById('lead_container') != null) {
        document.getElementById('lead_container').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

	if(state.data.dark_mode == true) {
		if (body != null) {
			body.classList = `easing_01 color_white bg_grey`
		};
	    if (document.getElementById('scene') != null) {
			document.getElementById('scene').classList = `bg_grey width_100 height_100 position_fixed top_0 left_0 right_0 float_left z_index_-1`
		};
	};

	if(state.data.dark_mode == false) {
		if (body != null) {
			body.classList = `easing_01 color_grey bg_white`
		};
		if (document.getElementById('scene') != null) {
			document.getElementById('scene').classList = `bg_white width_100 height_100 position_fixed top_0 left_0 right_0 float_left z_index_-1`
		};
	};

    if(
    state.modal.menu.left.transform != false
    || state.modal.menu.right.transform != false
    || state.modal.menu.top.transform != false
    || state.modal.menu.bottom.transform != false
    ) {
        if (html != null) {
            html.classList = `overflow_hidden`
        };
    };

    if (state.modal.page.top.transform == true) {
        if ((document.getElementById('link_home_mark')) != null ) {
            document.getElementById('link_home_mark').classList = `position_relative height_100 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.top.transform == false) {
        if ((document.getElementById('link_home_mark')) != null ) {
            document.getElementById('link_home_mark').classList = `position_relative height_100 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.page.top.transform == true) {
        if ((document.getElementById('header_link_1')) != null ) {
            document.getElementById('header_link_1').classList = `position_relative height_100 width_1205 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.top.transform == false) {
        if ((document.getElementById('header_link_1')) != null ) {
            document.getElementById('header_link_1').classList = `position_relative height_100 width_1205 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.page.bottom.transform == true) {
        if ((document.getElementById('header_link_2')) != null ) {
            document.getElementById('header_link_2').classList = `position_relative height_100 width_1205 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.bottom.transform == false) {
        if ((document.getElementById('header_link_2')) != null ) {
            document.getElementById('header_link_2').classList = `position_relative height_100 width_1205 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.page.left.transform == true) {
        if ((document.getElementById('header_link_3')) != null ) {
            document.getElementById('header_link_3').classList = `position_relative height_100 width_1205 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.left.transform == false) {
        if ((document.getElementById('header_link_3')) != null ) {
            document.getElementById('header_link_3').classList = `position_relative height_100 width_1205 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.page.right.transform == true) {
        if ((document.getElementById('header_link_4')) != null ) {
            document.getElementById('header_link_4').classList = `position_relative height_100 width_6025 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.right.transform == false) {
        if ((document.getElementById('header_link_4')) != null ) {
            document.getElementById('header_link_4').classList = `position_relative height_100 width_6025 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.page.right.transform == true) {
        if ((document.getElementById('header_link_5')) != null ) {
            document.getElementById('header_link_5').classList = `position_relative height_100 width_6025 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.right.transform == false) {
        if ((document.getElementById('header_link_5')) != null ) {
            document.getElementById('header_link_5').classList = `position_relative height_100 width_6025 margin_auto float_left bg_grey`
        }
    };
        
        if (state.modal.page.right.transform == true) {
            if ((document.getElementById('header_link_6')) != null ) {
                document.getElementById('header_link_6').classList = `position_relative height_100 width_6025 margin_auto float_left bg_white`
            }
        };

        if (state.modal.page.right.transform == false) {
            if ((document.getElementById('header_link_6')) != null ) {
                document.getElementById('header_link_6').classList = `position_relative height_100 width_6025 margin_auto float_left bg_grey`
            }
        };

    if (state.modal.page.right.transform == true) {
        if ((document.getElementById('header_link_7')) != null ) {
            document.getElementById('header_link_7').classList = `position_relative height_100 width_6025 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.right.transform == false) {
        if ((document.getElementById('header_link_7')) != null ) {
            document.getElementById('header_link_7').classList = `position_relative height_100 width_6025 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.page.right.transform == true) {
        if ((document.getElementById('header_link_8')) != null ) {
            document.getElementById('header_link_8').classList = `position_relative height_100 width_6025 margin_auto float_left bg_white`
        }
    };

    if (state.modal.page.right.transform == false) {
        if ((document.getElementById('header_link_8')) != null ) {
            document.getElementById('header_link_8').classList = `position_relative height_100 width_6025 margin_auto float_left bg_grey`
        }
    };

    if (state.modal.gradient.top.transform == true) {
        if ((document.getElementById('footer_tabs_1')) != null ) {
            document.getElementById('footer_tabs_1').classList = `footer_link bg_white`
        }
    };

    if (state.modal.gradient.top.transform == false) {
        if ((document.getElementById('footer_tabs_1')) != null ) {
            document.getElementById('footer_tabs_1').classList = `footer_link bg_grey`
        }
    };

    if (state.modal.gradient.bottom.transform == true) {
        if ((document.getElementById('footer_tabs_2')) != null ) {
            document.getElementById('footer_tabs_2').classList = `footer_link bg_white`
        }
    };

    if (state.modal.gradient.bottom.transform == false) {
        if ((document.getElementById('footer_tabs_2')) != null ) {
            document.getElementById('footer_tabs_2').classList = `footer_link bg_grey`
        }
    };

    if (state.modal.gradient.left.transform == true) {
        if ((document.getElementById('footer_tabs_3')) != null ) {
            document.getElementById('footer_tabs_3').classList = `footer_link bg_white`
        }
    };

    if (state.modal.gradient.left.transform == false) {
        if ((document.getElementById('footer_tabs_3')) != null ) {
            document.getElementById('footer_tabs_3').classList = `footer_link bg_grey`
        }
    };

    if (state.modal.gradient.right.transform == true) {
        if ((document.getElementById('footer_tabs_4')) != null ) {
            document.getElementById('footer_tabs_4').classList = `footer_link bg_white`
        }
    };

    if (state.modal.gradient.right.transform == false) {
        if ((document.getElementById('footer_tabs_4')) != null ) {
            document.getElementById('footer_tabs_4').classList = `footer_link bg_grey`
        }
    };
    if (state.modal.pop.top.transform == true) {
        if ((document.getElementById('footer_tabs_5')) != null ) {
            document.getElementById('footer_tabs_5').classList = `footer_link bg_white`
        }
    };

    if (state.modal.pop.top.transform == false) {
        if ((document.getElementById('footer_tabs_5')) != null ) {
            document.getElementById('footer_tabs_5').classList = `footer_link bg_grey`
        }
    };
    
    if (state.modal.pop.bottom.transform == true) {
        if ((document.getElementById('footer_tabs_6')) != null ) {
            document.getElementById('footer_tabs_6').classList = `footer_link bg_white`
        }
    };

    if (state.modal.pop.bottom.transform == false) {
        if ((document.getElementById('footer_tabs_6')) != null ) {
            document.getElementById('footer_tabs_6').classList = `footer_link bg_grey`
        }
    };

    if (state.modal.pop.left.transform == true) {
        if ((document.getElementById('footer_tabs_7')) != null ) {
            document.getElementById('footer_tabs_7').classList = `footer_link bg_white`
        }
    };

    if (state.modal.pop.left.transform == false) {
        if ((document.getElementById('footer_tabs_7')) != null ) {
            document.getElementById('footer_tabs_7').classList = `footer_link bg_grey`
        }
    };

    if (state.modal.pop.right.transform == true) {
        if ((document.getElementById('footer_tabs_8')) != null ) {
            document.getElementById('footer_tabs_8').classList = `footer_link bg_white`
        }
    };

    if (state.modal.pop.right.transform == false) {
        if ((document.getElementById('footer_tabs_8')) != null ) {
            document.getElementById('footer_tabs_8').classList = `footer_link bg_grey`
        }
    };

    if(state.modal.menu.right.transform == false) {
        if (html != null) {
            html.classList = ``
        };
    };

    if(state.ux.orientation.is_Landscape == true) {
        if (body != null) {
            //body.classList += ``
        }; 
        if (header != null) {
            //header.classList += ``
        };        
    };

    if(state.ux.orientation.is_Landscape == false) {
        if (body != null) {
            //body.classList += ``
        };
        if (header != null) {
            //header.classList += ``
        };        
    };	
};

let handle_render = () => {

    handle_ui();    
    handle_display_with_delay();
    handle_transform();
    handle_render_data_value();
};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    console.log('handle_ReturnedState_fromEvents');
    handle_render();
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

    handle_render();
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

    handle_render();
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

    handle_render();
};

let handle_ReturnState = () => {
    return state
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

// inital
document.addEventListener("DOMContentLoaded", (event) => {
    window.scrollTo(0, 0);
	
});

window.addEventListener("load", (event) => {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 0);
});

window.addEventListener("resize", (event) => {
    
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
    console.log(state.ux);
});

window.addEventListener("ondevicemotion", (event) => {
    events.handle_Function_Device_Motion(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("ondeviceorientation", (event) => {
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;
});

window.addEventListener("onorientationchange", (event) => {

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

    state.events.motion.orientation_string = orientation;
    console.log('orientation');
    console.log(orientation);
});

window.addEventListener("onbeforeunload", (event) => {
});

export default {
    handle_ReturnState,
    modal_reset
}