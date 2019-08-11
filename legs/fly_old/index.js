
// Imports
import style from './style.scss';
import events from './imports/events';
import elements from './imports/elements';
import imported_components from './imports/components';
import functions from './imports/functions';
document.title = "Google will run this JS and show the title in the search results!";
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

        key: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: 1,
            yaxis: 1,
            height: 2,
            width: 2,
            action: {
                breathing: false,
                blinking: true,
                standing: false,
                walking: false,
                sitting: false,
                left: true,
                right: false
            }
        },

        keyhole: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: 5,
            yaxis: 4,
            height: 2,
            width: 2,
            action: {
                breathing: false,
                blinking: true,
                walking: false,
                sitting: false,
                left: true,
                right: false
            }
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

            transform: false,
            opacity: false,
            display: false,
            clientX: -1,
            clientY: -1,
            height: 4,
            width: 1,
            stance: 5,
            clientX_increase: false,
            clientY_increase: false,
            clientX_auto: true,
            clientY_auto: false,
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

        bridge: {

            transform: false,
            opacity: false,
            display: false,
            xaxis: 0,
            yaxis: 0,
            height: 1,
            width: 1,
            stance: 5,
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
        logo: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: -1,
            yaxis: -4,
            height: 8,
            width: 4,
        },

        helper: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: -1,
            yaxis: -4,
            height: 8,
            width: 4,
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

    motion: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        sequence_game: 0
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
    },

};
let firebase_connected = false;
let body = document.getElementById('body');
let uploader = document.getElementById('uploader');
let upload_progress = document.getElementById('upload_progress');
let components;
let fileButton = document.getElementById('fileButton');
let user_avatar = `gui_character_right_face`
let valid_user;
let valid_user_post;
let user_logged_in = false;
let dev_mode = false;
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

			uploader.value = 0;
			upload_progress.innerHTML = ``;

			// Handle successful uploads on complete
			  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
			  task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			    console.log('File available at', downloadURL);
				document.getElementById('upload-details').innerHTML = `upload available at: ${downloadURL}`;
			  });
		}
	);

});

let stored_auth_user_cred = {};
let posts_guides = [];
let posts_users = [];

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
auth.onAuthStateChanged(logged_auth_user => {
	console.log('onAuthStateChanged');

	if ( (logged_auth_user) == null) {

        stored_auth_user_cred = logged_auth_user;
        get_db_guides();
        get_db_users();
        get_db_interactions();
        get_db_messages();
        get_db_activity();
		console.log('please login');
        document.getElementById('modal-signin').classList = ''
        document.getElementById('modal-signup').classList = ''
        document.getElementById('modal-create').classList = ' display_none '
        document.getElementById('modal-account').classList = ' display_none '
        document.getElementById('modal-edit').classList = ' display_none '

	};

	if ( (logged_auth_user) != null) {
        stored_auth_user_cred = logged_auth_user;
        get_db_guides();
        get_db_users();
        get_db_interactions();
        get_db_messages();
        get_db_activity();
        document.getElementById('modal-signin').classList = ' display_none '
        document.getElementById('modal-signup').classList = ' display_none '
        document.getElementById('modal-create').classList = ''
        document.getElementById('modal-account').classList = ''
        document.getElementById('modal-edit').classList = ' '
	};

});

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

// signout / un-auth
let signout = document.getElementById('signout');
signout.addEventListener('click', (event) => {
	event.preventDefault();
	auth.signOut().then(() => {
		console.log('logged out')
	});
});

// firestore crud
// create user
// SEE: create user after auth

// create post
let create_form = document.getElementById('create-form');
let create_title = document.getElementById('create-title');
let create_child = document.getElementById('create-child');
let create_content = document.getElementById('create-content');
let create = document.getElementById('create');
create.addEventListener('click', (event) => {
	event.preventDefault();
    
    let date = new Date();
    

    const ref = db.collection('guides').doc();
    const id = ref.id;

    db.collection('guides').doc(ref.id).set({
        title: create_title.value,
        child: create_child.value,
        content: create_content.value,
        likes: 0,
        views: 0,
        time: date.getSeconds(),
        id: ref.id,
        author_id: valid_user.id
    }).then(()=> {
        console.log('guide made');
        create_title.value = ``;
        create_content.value = ``;
    }).catch(err => {
        console.log(err.message)
    })

});

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
    handle_update();
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

let handle_ui = () => {
	if(state.data.dark_mode == true) {
		if (body != null) {
			body.classList = `color_white`
		};
	    if (document.getElementById('scene') != null) {
			document.getElementById('scene').classList = `bg_grey width_100 height_100vh position_fixed top_0 left_0 right_0 float_left z_index_-1`
		};
	};

	if(state.data.dark_mode == false) {
		if (body != null) {
			body.classList = `color_grey`
		};
		if (document.getElementById('scene') != null) {
			document.getElementById('scene').classList = `bg_white width_100 height_100vh position_fixed top_0 left_0 right_0 float_left z_index_-1`
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

let handle_add_device_events = () => {

    if (document.getElementById('shortcut_after_load') != null) {
        document.getElementById('shortcut_after_load').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('shortcut_after_load');
            };
            handle_update();
        });
    };
    if (document.getElementById('link_home_mark') != null) {
        document.getElementById('link_home_mark').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('link_home_mark');
            };
            handle_update();
        });
    };

    if (document.getElementById('gui_top_left') != null) {
        document.getElementById('gui_top_left').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top_left');
            };
            state.modal.menu.left.transform = !state.modal.menu.left.transform;
            state.modal.gui.top_right.transform = true;

            handle_update();
        });
    };

    if (document.getElementById('gui_top') != null) {
        document.getElementById('gui_top').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top');
            };
            handle_update();
        });
    };

    if (document.getElementById('gui_top_right') != null) {
        document.getElementById('gui_top_right').addEventListener('click', (event) => {
            if (dev_mode == true) {
            alert('gui_top_right');
            };
            modal_gui_activate_all();
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

let handle_animation = () => {

    
    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                if (document.getElementById('body') != null) {
                    document.getElementById('body').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('lead') != null) {
                    document.getElementById('lead').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('cardboard') != null) {
                    document.getElementById('cardboard').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('interaction') != null) {
                    document.getElementById('interaction').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('fold') != null) {
                    document.getElementById('fold').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('scene') != null) {
                    document.getElementById('scene').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('game') != null) {
                    document.getElementById('game').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('out') != null) {
                    document.getElementById('out').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
                };

                if (document.getElementById('footer') != null) {
                    document.getElementById('footer').style =
                        'height: ' + (state.ux.dimensions.height) + 'px;' +
                        'width: ' + (state.ux.dimensions.width) + 'px;';
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

                // vr
                    if (document.getElementById('vr_mg') != null) {
                        document.getElementById('vr_mg').style = "transform: translate3d(" +
                            (state.interaction.vr.clientX * 100) + "%, " +
                            (state.interaction.vr.clientY * 100) + "%, 0);"
                    };


                // check game state
                    if ( (state.interaction.playable.clientX == state.interaction.enemy.clientX) ) {
                        console.log('lost')
                    };

                state.motion.frame += 1;
                //handle_update();

            }, (1000 / state.motion.framerate));
    })();

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

let get_db_guides = () => {
	//db.settings({timestampsInSnapshots: true});
	db.collection('guides').get().then(snapshot => {
		
		if (firebase_connected == false) {
			firebase_connected = true;
            sequence_Load();
		};

		console.log('snapshot.docs: ');
		console.log(snapshot.docs);
		posts_guides = [];
        document.getElementById('posts_random').innerHTML = ``;
        document.getElementById('posts_all').innerHTML = ``;
		document.getElementById('posts_recommended').innerHTML = ``;
		document.getElementById('posts_hashtags').innerHTML = ``;
		document.getElementById('posts_latest').innerHTML = ``;
		document.getElementById('posts_trending').innerHTML = ``;
		document.getElementById('posts_popular').innerHTML = ``;

		snapshot.docs.forEach(doc => {
			let items = doc.data();
			posts_guides.push(items)
		});
        
        fb_sorted_library(posts_guides, 'timedown').forEach(post => {
            document.getElementById('posts_random').appendChild(
                elements.Generate_new_li_post(post)
            );
        });

        posts_guides.forEach(post => {
            document.getElementById('posts_all').appendChild(
                elements.Generate_new_li_post(post)
            );
        });

		posts_guides.forEach(post => {
			document.getElementById('posts_recommended').innerHTML += `
			<li>
				<ul>
					<li>title: ${post.title}</li>
					<li>content: ${post.content}</li>
				</ul>
			</li>
			`;
		});

		posts_guides.forEach(post => {
			document.getElementById('posts_hashtags').innerHTML += `
			<li>
				<ul>
					<li>title: ${post.title}</li>
					<li>content: ${post.content}</li>
				</ul>
			</li>
			`;
		});
		
		posts_guides.forEach(post => {
			document.getElementById('posts_latest').innerHTML += `
			<li>
				<ul>
					<li>title: ${post.title}</li>
					<li>content: ${post.content}</li>
				</ul>
			</li>
			`;
		});
		
		posts_guides.forEach(post => {
			document.getElementById('posts_trending').innerHTML += `
			<li>
				<ul>
					<li>title: ${post.title}</li>
					<li>content: ${post.content}</li>
				</ul>
			</li>
			`;
		});
		
		posts_guides.forEach(post => {
			document.getElementById('posts_popular').innerHTML += `
			<li>
				<ul>
					<li>title: ${post.title}</li>
					<li>content: ${post.content}</li>
				</ul>
			</li>
			`;
		});

		console.log('posts_guides');
		console.log(posts_guides);
	});
};

let get_db_users = () => {
	//db.settings({timestampsInSnapshots: true});
	db.collection('users').get().then(snapshot => {
		console.log('snapshot.docs: ');
		console.log(snapshot.docs);
        document.getElementById('posts_users').innerHTML = ``;
		posts_users = [];

		snapshot.docs.forEach(doc => {
			let items = doc.data();
			posts_users.push(items)
		});


        posts_users.forEach(post => {
            document.getElementById('users_all').innerHTML += `
            <li>
                <ul>
                    <li>email: ${post.email}</li>
                    <li>id: ${post.id}</li>
                </ul>
            </li>
            `;
        });

        if ((stored_auth_user_cred.uid) != null) {

            console.log('stored_auth_user_cred.uid');
            console.log(stored_auth_user_cred.uid);
    		console.log('posts_users');
    		console.log(posts_users);

            // match auth user with database collection: users
            valid_user = {};
            valid_user_post = [];
            user_logged_in = false;
            console.log('check match from posts_users[i]');
            for (var i = 0; i < posts_users.length; i++) {
               console.log(posts_users[i]);
                if (posts_users[i].id == stored_auth_user_cred.uid) {
                       valid_user = posts_users[i];
                       user_logged_in = true;
                }
            };

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

            if ((valid_user.id != null)) {
                document.getElementById('account-details').innerHTML = `id: ${valid_user.id}`;
                document.getElementById('account-details').innerHTML += `twitter: ${valid_user.twitter}`;
                document.getElementById('account-details').innerHTML += `username: ${valid_user.username}`;
                document.getElementById('account-details').innerHTML += `nickname: ${valid_user.nickname}`;
                document.getElementById('account-details').innerHTML += `last_update: ${valid_user.last_update}`;
                document.getElementById('is_user_logged').innerHTML = `
                <div id="bg-character" class="${user_avatar} position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                `;
                alert('welcome: ' + valid_user.id);
                document.getElementById('validated_user_playable_character').innerHTML = `
                    <div id="playable_character" class="position_absolute animated1 delay2 enterTopBounce">
                        <div id="playable_character_svg" class="gui_character_1 width_100 height_100"></div>
                    </div>
                `
                document.getElementById('validated_user_enemy_character').innerHTML = `
                    
                        <div id="enemy_character" class="position_absolute animated1 delay2 enterTopBounce">
                            <div id="enemy_character_svg" class="gui_character_1 width_100 height_100"></div>
                        </div>
                `

                document.getElementById('player_1_playable_character').innerHTML = `
                    
                        <div id="player_1_character" class="position_absolute animated1 delay2 enterTopBounce">
                            <div id="player_1_character_svg" class="gui_character_1 width_100 height_100"></div>
                        </div>
                ` 
                document.getElementById('player_2_playable_character').innerHTML = `
                    
                        <div id="player_2_character" class="position_absolute animated1 delay2 enterTopBounce">
                            <div id="player_2_character_svg" class="gui_character_1 width_100 height_100"></div>
                        </div>
                ` 
            }

            console.log('valid_user');
            console.log(valid_user);
        };
        check_url();

	});

};

let posts_interactions;

let get_db_interactions = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('interactions').get().then(snapshot => {
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        document.getElementById('posts_interactions').innerHTML = ``;
        posts_interactions = [];

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_interactions.push(items)
        });


        posts_interactions.forEach(post => {
            document.getElementById('posts_interactions').innerHTML += `
            <li>
                <ul>
                    <li>email: ${post.title}</li>
                    <li>id: ${post.id}</li>
                </ul>
            </li>
            `;
        });

    });

};

let posts_activity;

let get_db_activity = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('activity').get().then(snapshot => {
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        document.getElementById('posts_activity').innerHTML = ``;
        posts_activity = [];

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_activity.push(items)
        });

        posts_activity.forEach(post => {
            document.getElementById('posts_activity').innerHTML += `
            <li>
                <ul>
                    <li>to: ${post.time}</li>
                    <li>from: ${post.action}</li>
                </ul>
            </li>
            `;
        });

    });

};

let posts_messages;

let get_db_messages = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('messages').get().then(snapshot => {
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        document.getElementById('posts_messages').innerHTML = ``;
        posts_messages = [];

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_messages.push(items)
        });


        posts_messages.forEach(post => {
            document.getElementById('posts_messages').innerHTML += `
            <li>
                <ul>
                    <li>to: ${post.to}</li>
                    <li>from: ${post.from}</li>
                </ul>
            </li>
            `;
        });

    });

};
// create message

let db_create_message = (post) => {
    let date = new Date();
    

    const ref = db.collection('messages').doc();
    const id = ref.id;

    db.collection('messages').doc(ref.id).set({
        title: `${valid_user.username} viewed: ${post.id}`,
        child: 'messages',
        content: `${valid_user.username} viewed: ${post.id}`,
        likes: 0,
        views: 0,
        time: date.getSeconds(),
        id: ref.id,
        author_id: valid_user.id,
        to: valid_user.id,
        from: valid_user.id
    }).then(()=> {
        console.log('guide made');
    }).catch(err => {
        console.log(err.message)
    })
};

// create activity

let db_create_activity = (post) => {
    let date = new Date();
    

    const ref = db.collection('activity').doc();
    const id = ref.id;

    db.collection('activity').doc(ref.id).set({
        title: `${valid_user.username} viewed: ${post.id}`,
        child: 'activity',
        content: `${valid_user.username} viewed: ${post.id}`,
        likes: 0,
        views: 0,
        time: date.getSeconds(),
        id: ref.id,
        author_id: valid_user.id,
        action: 'clicked post',
        from: valid_user.id
    }).then(()=> {
        console.log('guide made');
    }).catch(err => {
        console.log(err.message)
    })
};

// create interaction

let db_create_interaction = (post) => {
    let date = new Date();
    

    const ref = db.collection('interactions').doc();
    const id = ref.id;

    db.collection('interactions').doc(ref.id).set({
        title: `${valid_user.username} viewed: ${post.id}`,
        child: 'interactions',
        content: `${valid_user.username} viewed: ${post.id}`,
        likes: 0,
        views: 0,
        time: date.getSeconds(),
        id: ref.id,
        author_id: valid_user.id
    }).then(()=> {
        console.log('guide made');
    }).catch(err => {
        console.log(err.message)
    })
};

// create user
let db_create_user = (cred) => {
	// create user after auth
	db.collection('users').doc(cred.user.uid).set({
		id: cred.user.uid,
		email: cred.user.email,
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
	}).catch(err => {
		console.log(err.message)
	})
};

// update user
let db_update_user = (collection, deletable_id) => {
	console.log(deletable_id);

    let date = new Date();

	db.collection(collection).doc(deletable_id).set({
		id: deletable_id,
		email: stored_auth_user_cred.email,
        username: document.getElementById('username').value,
		nickname: document.getElementById('nickname').value,
        twitter: document.getElementById('twitter').value,
        last_update: date.getSeconds(),
	}).then(function() {
        document.getElementById('username').value = ``,
        document.getElementById('nickname').value = ``,
        document.getElementById('twitter').value = ``,
	    alert("Document successfully written!");
	}).catch(function(error) {
	    console.error("Error writing document: ", error);
	});
};

let db_comment = (collection, deletable_id) => {
    console.log(deletable_id);

    let date = new Date();
    let new_comments = [];

    posts_guides.forEach(post => {
        if (post.id == deletable_id) {
            new_comments = post.comments;
        };
    });

    let new_comment = {
        id: valid_user.id,
        comment: valid_user.id,
    };

    new_comments.push(new_comment);
    
    db.collection(collection).doc(deletable_id).update({comments:new_comments}).then(function() {
        alert("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_like = (collection, deletable_id) => {
    console.log(deletable_id);

    let date = new Date();

    db.collection(collection).doc(deletable_id).update({
        views: firebase.firestore.FieldValue.increment(1)
    }).then(function() {
        alert("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

let db_dislike = (collection, deletable_id) => {
    console.log(deletable_id);

    let date = new Date();

    db.collection(collection).doc(deletable_id).update({
        views: firebase.firestore.FieldValue.increment(-1)
    }).then(function() {
        alert("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

// delete user
let db_delete_user = (collection, deletable_id) => {
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

let handle_update = () => {
    console.log('handle_update');
	handle_ui();
    handle_display_with_delay();
    handle_transform();
    handle_render_data_value();
};

let sequence_Load = () => {

    state.data.route += 1;

    console.log(state.data.route);
    if (state.data.route == 1) {
		handle_onload_time();
		handle_time();
		handle_animation();
        handle_add_device_events();
		handle_add_status_events();
        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_1205 height_100 float_left`
		
		// continues after firebase_connected
		// continues after auth.onAuthStateChanged
        // continues after get_db_guides();

    };

    if (state.data.route == 2) {
        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_25 height_100 float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 3) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_3705 height_100 float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 4) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_50 height_100 float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 5) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_6205 height_100 float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 6) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_75 height_100 float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 7) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_8705 height_100 float_left`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 8) {

        document.getElementById('load_bar_container_border').classList = `easing_01 position_relative margin_auto width_100 height_100 float_left`

        console.log('done loading');
        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 1000);
    };

    if (state.data.route == 9) {
        
        document.getElementById('load_bar_container').classList = `animated01 leaveBottom position_fixed bottom_0 margin_auto width_100 height_100 float_left z_index_1`

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 10) {
        
        document.getElementById('logo_mark').classList = `gui_logo_type position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto`;
        document.getElementById('load_bar_container').classList = `display_none bottom_0 margin_auto width_100 height_100 float_left z_index_1`;

        /*
        document.getElementById('content_info').appendChild(
            //elements.components('component_misc_xs')
        );
        */

        state.modal.gui.top_left.transform = true;
        lead_checker();
	    handle_update();

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };

    if (state.data.route == 11) {

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

        // refresh library
        setTimeout(function() {
            sequence_Load();
        }, 100);
    };
};

let sequence_Game = () => {

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
            sequence_Game();
        }, (1000));
    };


    // execute on timeout
    if (state.data.game == 1) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_container').innerHTML = `

            `;
            sequence_Game();
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
            sequence_Game();
        }, (1000));
    };

    // execute on timeout
    if (state.data.game == 3) {
        setTimeout( () => {
            state.data.game += 1;
            document.getElementById('lead_container').innerHTML = `

            `;
            state.data.game = 0;
        }, (1000));
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

    handle_update();
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

    handle_update();
};

let lead_checker = () => {
    if (dev_mode == true) {
        alert('state.data.scene: ' + state.data.scene);
    };
    if (state.data.scene == 0) {
        document.getElementById('lead').innerHTML = `

            <div id="lead_section" class="position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 overflow_hidden margin_auto">
                   
                <div id="lead_container" class="position_absolute top_0 left_0 bottom_0 right_0 height_100 width_100 margin_auto">    
                </div>

                <div id="next" class="position_fixed bottom_0 right_0 bg_grey color_white font_size_1205vw">next</div>
                <div id="last" class="position_fixed bottom_0 left_0 bg_grey color_white font_size_1205vw">last</div>

            </div>
        `

        document.getElementById('footer_top').classList = `position_fixed bg_grey float_left height_1vw width_100 top_0 left_0 right_0 margin_auto z_index_2`
        document.getElementById('footer_bottom').classList = `position_fixed bg_grey float_left height_1vw width_100 bottom_0 left_0 right_0 margin_auto z_index_2`
        document.getElementById('footer_left').classList = `position_fixed bg_grey float_left width_1vw height_100 top_0 left_0 margin_auto z_index_2`
        document.getElementById('footer_right').classList = `position_fixed bg_grey float_left width_1vw height_100 bottom_0 right_0 margin_auto z_index_2`

        if (document.getElementById('next') != null) {
            document.getElementById('next').addEventListener('click', (event) => {
                //alert('next');
                state.data.scene += 1;
                lead_checker();
            });
        };

        if (document.getElementById('last') != null) {
            document.getElementById('last').addEventListener('click', (event) => {
                //alert('last');
                state.data.scene -= 1;
                lead_checker();
            });
        };

    };

    if (state.data.scene == 0) {
        document.getElementById('lead_container').innerHTML = `
            <div class="enterBottomvh animated1 delay1 gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_50vw width_50vw margin_auto"></div>    
        `
    };

    if (state.data.scene == 1) {
        sequence_Game();
    };

    if (state.data.scene == 2) {
        sequence_Game();
    };

};

let handle_ReturnState = () => {
    return state
};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    handle_update();
};

let check_url = () => {

    var parts = location.pathname.split('/');
    setTimeout(function () {
            body.scrollTo(0, 0);
        }, 0);

    if (parts[1] != null) {

        if ((parts[1] == '')) {
            alert('just stay at the home page');
            state.data.onload_url = 'home';
        };

        if (parts[1] == 'p') {
            console.log('going to post page');
            if (parts[2] != null) {
                console.log('post id: ' + parts[2]);
                state.data.onload_url = 'post';

                for (var i = 0; i < posts_guides.length; i++) {
                   console.log(posts_guides[i]);
                    if (posts_guides[i] == parts[2]) {
                        alert('post found: ' + posts_guides[i]);
                    }
                };

            };
        };

        if ((parts[1] != 'p') && (parts[1] != '')) {
            console.log('going to user page');
            if (parts[1] != null) {
                console.log('user id: ' + parts[1]);
                state.data.onload_url = 'user';

                for (var i = 0; i < posts_users.length; i++) {
                   console.log(posts_users[i]);
                    if (posts_users[i].nickname == parts[1]) {
                        alert('user found: ' + posts_users[i]);
                    }
                };

            };
        };
    };
};

// scroll
body.addEventListener('scroll', (event) => {
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

document.getElementById('edit_button').addEventListener('click', (event) => {
	event.preventDefault();
	db_update_user("users", stored_auth_user_cred.uid);
	//db_delete_user("users", stored_auth_user_cred.uid);
});

document.getElementById('delete_button').addEventListener('click', (event) => {
    event.preventDefault();
    db_delete_user("users", stored_auth_user_cred.uid);
});

// inital
document.addEventListener("DOMContentLoaded", (event) => {
	console.log('DOMContentLoaded');
	//console.log(auth);

	sequence_Load();

});

window.addEventListener("load", (event) => {
    alert('new');
    setTimeout(function () {
            body.scrollTo(0, 0);
        }, 0);
});

window.addEventListener("resize", (event) => {
    setTimeout(function () {
        body.scrollTo(0, 0);
    }, 0);
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
    setTimeout(function () {
        body.scrollTo(0, 0);
    }, 0);
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
    db_create_interaction,
    db_create_message,
    db_create_activity,
    db_like,
    db_comment,
    modal_reset
}