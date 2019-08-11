
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
                    state.data.firebase.gnougn.abilities = result_abilities;
                    // console.log('abilities');
                    // console.log(state.data.firebase.gnougn.abilities);
                };

                if ((temp.gnougn.library) != null) {
                    // library
                    // set objects to array - part 1
                    let result_library = Object.keys(temp.gnougn.library).map(function(key) {
                        return temp.gnougn.library[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.library = result_library;
                    // console.log('library');
                    // console.log(state.data.firebase.gnougn.library);
                };


                if ((temp.gnougn.partners) != null) {
                    // partners
                    // set objects to array - part 1
                    let result_partners = Object.keys(temp.gnougn.partners).map(function(key) {
                        return temp.gnougn.partners[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.partners = result_partners;
                    // console.log('partners');
                    // console.log(state.data.firebase.gnougn.partners);
                };

                if ((temp.gnougn.services) != null) {
                    // services
                    // set objects to array - part 1
                    let result_services = Object.keys(temp.gnougn.services).map(function(key) {
                        return temp.gnougn.services[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.services = result_services;
                    // console.log('services');
                    // console.log(state.data.firebase.gnougn.services);
                };

                if ((temp.gnougn.roster) != null) {
                    // roster
                    // set objects to array - part 1
                    let result_roster = Object.keys(temp.gnougn.roster).map(function(key) {
                        return temp.gnougn.roster[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.roster = result_roster;
                    // console.log('roster');
                    // console.log(state.data.firebase.gnougn.roster);
                };

                if ((temp.gnougn.skills) != null) {
                    // skills
                    // set objects to array - part 1
                    let result_skills = Object.keys(temp.gnougn.skills).map(function(key) {
                        return temp.gnougn.skills[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.skills = result_skills;
                    // console.log('skills');
                    // console.log(state.data.firebase.gnougn.skills);
                };


                if ((temp.gnougn.skills) != null) {

                    console.log(state.data.firebase.gnougn);

                    // Render listtings to front_end
                    setTimeout(function() {
                        state.data.refs = true;
                        Handle_firebase_render();
                        // console.clear();

                        // check ui state
                        setTimeout(function() {

                            setInterval(function() {
                                Handle_check_states();
                            }, 1000 / 24);

                        }, 1000);
                    }, 0);

                };

            };

        }, 0);

    })();
};

let Handle_firebase_render = () => {

    // render library
    (() => {

        setTimeout(function() {

            if ( (document.getElementById('element_input_filter')) != null) {
                

                // *********************** "Order of operations" ************************

                // 1.) set array
                let array = state.data.firebase;

                // 2.) sort array
                let array_gnougn_library = array.gnougn.library.sort(find_sort());
                let filtered_array_gnougn_library = [];

                // 3.) filter array
                for (var i = 0; i < array_gnougn_library.length; i++) {
                    if (array_gnougn_library[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                        filtered_array_gnougn_library.push(array_gnougn_library[i]);
                    };
                };

                // Library
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_library').innerHTML = '';

                // 5.) fill ol element
                for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                    // console.log(filtered_array_gnougn_library[i]);
                    document.getElementById('element_ol_firebase_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                      imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                        )
                    )
                }


                // Library
                // 4.) empty ol element
                document.getElementById('element_ol_firebase_library_feature').innerHTML = '';

                // 5.) fill ol element to feature limit
                for (var i = 0; i < 7; i++) {
                    // console.log(filtered_array_gnougn_library[i]);
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


                // 6.) add events later
                find_view();
                find_type();


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

let Handle_check_route = (route, info) => {

    state.app.route = route;

    (() => {

        // null
        if (route == 'null') {

            setTimeout(function() {
				state.ui.modal.menu.left.display = true;
				state.ui.modal.menu.left.transform = true;

                state.ui.modal.nav.top.display = true;
                state.ui.modal.nav.top.opacity = true;
                state.ui.modal.nav.top.transform = true;

                state.ui.gui.top.display = false;
                state.ui.gui.top.transform = true;

                state.ui.gui.top_left.display = false;
                state.ui.gui.top_left.transform = true;

                state.ui.gui.top_right.display = false;
                state.ui.gui.top_right.transform = true;

                state.ui.gui.bottom.display = false;
                state.ui.gui.bottom.transform = true;

                state.ui.gui.bottom_right.display = false;
                state.ui.gui.bottom_right.transform = true;

                state.ui.gui.bottom_left.display = false;
                state.ui.gui.bottom_left.transform = true;
                  

            }, 0);

            /*

            setTimeout(function() {
                Instance_null_loading();
            }, 10000);

            setTimeout(function() {
                Instance_introduction();
            }, 7500);


            setTimeout(function() {
                Instance_home();
            }, 10000);

            setTimeout(function() {
                Instance_home_verticle();

            }, 12500);

            setTimeout(function() {
                Instance_home_horizontal();

            }, 15000);

            setTimeout(function() {
                Instance_home_animation();

            }, 17500);

            setTimeout(function() {
                Instance_home_fold();

            }, 20000);


            setTimeout(function() {
                Instance_home_content();


            }, 22500);


            setTimeout(function() {
                Instance_home_done();

            }, 25000);

            */

        };

        // null
        if (route == 'back_home') {

            setTimeout(function() {

                Handle_return_scene();

            }, 0);

        };

        // ON TO Preview
        if (route == 'library_preview') {

            // function start (Preview)
            let number = Math.floor((Math.random() * 1000000000000000) + 1);

            let preview_container = document.getElementById('component_app_modal_element_pop_top_content');
            let page_container = document.getElementById('component_app_modal_element_page_top_content');
            let tour_container = document.getElementById('component_app_modal_element_overlay_top_content');


                // function start (preview)
                let post_preview_from_li_link = '';
                let preview_content = '';
                let preview_scrolling_container = '';
                let preview_bg_container = `
                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">
                 
                    </div>

                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_black opacity_01 z_index_1">                
                    </div>


                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh z_index_1">
                 
                        <div class="position_absolute top_0 left_0 margin_auto width_205vh height_205vh z_index_1">
                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_left width_50 height_50 z_index_1">
                            </div>
                        </div>

                        <div class="position_absolute top_0 right_0 margin_auto width_205vh height_205vh z_index_1">
                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_right width_50 height_50 z_index_1">
                            </div>
                        </div>

                        <div class="position_absolute bottom_0 left_0 margin_auto width_205vh height_205vh z_index_1">
                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_left width_50 height_50 z_index_1">
                            </div>
                        </div>

                        <div class="position_absolute bottom_0 right_0 margin_auto width_205vh height_205vh z_index_1">
                            <div class="position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_right width_50 height_50 z_index_1">
                            </div>
                        </div>

                    </div>

                    <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">
                 
                    </div>
                `
                let preview_title_container = `
                    <div class="position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 ">
                        ${info.title} ${info.type}
                    </div>
                `
                let preview_control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pop_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pop_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

                preview_content = `
                
                <div class="position_relative float_left width_100 height_50vh margin_auto">
                    ${info.title} ${info.type}
                </div>

                <div class="position_relative float_left width_100 height_50vh margin_auto">
                    ${info.title} ${info.type}
                </div>
                
                <div class="position_relative float_left width_100 height_50vh margin_auto">
                    ${info.title} ${info.type}
                </div>

                <div class="position_relative float_left width_100 height_50vh margin_auto">
                    ${info.title} ${info.type}
                </div>
                
                <div class="position_relative float_left width_100 height_50vh margin_auto">
                    ${info.title} ${info.type}
                </div>

                <div class="position_relative float_left width_100 height_50vh margin_auto">
                    ${info.title} ${info.type}
                </div>

                `

                preview_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_pop', preview_content);
                post_preview_from_li_link = `<div class="position_absolute width_100 height_100 margin_auto">${preview_bg_container}
                <div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh overflow_hidden margin_205vh z_index_1">
                ${preview_title_container}<div class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh z_index_1">${preview_scrolling_container}</div></div>${preview_control_container}</div>`

                preview_container.innerHTML = post_preview_from_li_link;

                state.ui.modal.pop.top.display = true;

                setTimeout(function() {
                    state.ui.modal.pop.top.transform = false;

                    document.getElementById('element_scroll_y_events_pop').addEventListener("scroll", (event) => {

                        console.log(event);
                        //alert('yup');

                        // scrolling
                        console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                        console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                        console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                        console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                        console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                        console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                        state = Handle_return_state();

                        state.events.route.clientHeight = event.srcElement.clientHeight;
                        state.events.route.clientWidth = event.srcElement.clientWidth;

                        state.events.route.scrollHeight = event.srcElement.scrollHeight;
                        state.events.route.scrollWidth = event.srcElement.scrollWidth;

                        state.events.route.scrollTop = event.srcElement.scrollTop;
                        state.events.route.scrollLeft = event.srcElement.scrollLeft;

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
                            document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop)
                        }

                        if ((document.getElementById('scroll_scrollLeft')) != null) {
                            document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
                        }

                        // instances      
                        if (event.srcElement.scrollTop > state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                            console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position increasing');
                            console.log("instance: wheel up");
                        }

                        if (event.srcElement.scrollTop < state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                            console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position decreasing');
                            console.log("instance: wheel up");
                        }

                        if (event.srcElement.scrollTop === 0) {
                            console.log("instance: wheel up");
                        }

                        if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                            console.log('instance: scrolling started');
                        }

                        if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                            console.log('instance: inside lead');
                        }

                        if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                            console.log('instance: past lead');
                        }

                        if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                            console.log('instance: 100vh before bottom met');
                        }

                        if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                            alert("component_app_modal_element_page_top_content: instance: footer met");
                        }

                        state.ui.gui.scroll.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

                        console.log('scroll');
                        console.log(event);

                        Handle_get_state_from_events();

                    }, false);


                }, 300);

                // add event listeners
                setTimeout(() => {

                    document.getElementById('component_app_modal_element_pop_top_content_close'+number+'').addEventListener('click', (event) => {
                        // function start (Preview close)
                        state.ui.modal.pop.top.display = true;
                        state.ui.modal.pop.top.transform = true;
                    });

                    // ON TO DETAIL
                    document.getElementById('component_app_modal_element_pop_top_content_enter'+number+'').addEventListener('click', (event) => {

                        // function start (Detail)
                        let post_detail_from_li_link = '';
                        let detail_content = ``;

                        if (info.type == 'roster') {
                            detail_content = `${imported_elements.route_detail_content(info)}`;
                        };

                        if (info.type == 'abilities') {
                            detail_content = `${imported_elements.route_detail_content(info)}`;
                        };

                        if (info.type == 'services') {
                            detail_content = `${imported_elements.route_detail_content(info)}`;
                        };

                        if (info.type == 'partners') {
                            detail_content = `${imported_elements.route_detail_content(info)}`;
                        };

                        if (info.type == 'library') {
                            detail_content = `${imported_elements.route_detail_content_library_type_1(info)}`;
                        };

                        if (info.type == 'skills') {
                            detail_content = `${imported_elements.route_detail_content(info)}`;
                        };

                        let route_background = ``;

                        if (info.type == 'roster') {
                            route_background = `${imported_elements.route_content_roster_bg()}`
                        };

                        if (info.type == 'abilities') {
                            route_background = `${imported_elements.route_content_roster_bg()}`;
                        };

                        if (info.type == 'services') {
                            route_background = `${imported_elements.route_content_roster_bg()}`;
                        };

                        if (info.type == 'partners') {
                            route_background = `${imported_elements.route_content_roster_bg()}`;
                        };

                        if (info.type == 'library') {
                            route_background = `${imported_elements.route_content_library_type_1_bg()}`;
                        };

                        if (info.type == 'skills') {
                            route_background = `${imported_elements.route_content_roster_bg()}`;
                        };

                        let foreground_content = ``;

                        if (info.type == 'roster') {
                            foreground_content = `${imported_elements.library_foreground_section()}`
                        };

                        if (info.type == 'abilities') {
                            foreground_content = `${imported_elements.library_foreground_section()}`;
                        };

                        if (info.type == 'services') {
                            foreground_content = `${imported_elements.library_foreground_section()}`;
                        };

                        if (info.type == 'partners') {
                            foreground_content = `${imported_elements.library_foreground_section()}`;
                        };

                        if (info.type == 'library') {
                            foreground_content = `${imported_elements.library_foreground_section()}`;
                        };

                        if (info.type == 'skills') {
                            foreground_content = `${imported_elements.library_foreground_section()}`;
                        };

                        let scrolling_container = '';
                        let control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_page_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_page_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`


                        if (info.feature_category == "video") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };
                        
                        if (info.feature_category == "gallery") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };
                        
                        if (info.feature_category == "photo") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };

                        if (info.feature_category == "graphic") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };

                        if (info.feature_category == "ux") {
                            //scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };

                        if (info.feature_category == "code") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };
                        
                        if (info.feature_category == "read") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };

                        if (info.feature_category == "slider") {
                            scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page', detail_content);
                        };
                        
                        post_detail_from_li_link = `
                            <div id="post_detail_from_li_link" class="position_absolute width_100 height_100vh margin_auto photo_person1">
                                
                                ${route_background}
                                <div id="scrolling_container">
                                ${scrolling_container}
                                </div>
                                ${control_container}
                                ${foreground_content}

                            </div>`
                        
                        page_container.innerHTML = post_detail_from_li_link;

                        state.ui.modal.page.top.display = true;

                        setTimeout(() => {
                            state.ui.modal.page.top.transform = false;

                            document.getElementById('element_scroll_y_events_page').addEventListener("scroll", (event) => {

                                console.log(event);
                                //alert('yup');

                                // scrolling
                                console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                                console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                                console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                                console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                                console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                                console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                                state = Handle_return_state();

                                state.events.route.clientHeight = event.srcElement.clientHeight;
                                state.events.route.clientWidth = event.srcElement.clientWidth;

                                state.events.route.scrollHeight = event.srcElement.scrollHeight;
                                state.events.route.scrollWidth = event.srcElement.scrollWidth;

                                state.events.route.scrollTop = event.srcElement.scrollTop;
                                state.events.route.scrollLeft = event.srcElement.scrollLeft;

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
                                    document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop)
                                }

                                if ((document.getElementById('scroll_scrollLeft')) != null) {
                                    document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
                                }

                                // instances      
                                if (event.srcElement.scrollTop > state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                                    console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position increasing');
                                    console.log("instance: wheel up");
                                }

                                if (event.srcElement.scrollTop < state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                                    console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position decreasing');
                                    console.log("instance: wheel up");
                                }

                                if (event.srcElement.scrollTop === 0) {
                                    console.log("instance: wheel up");
                                }

                                if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                                    console.log('instance: scrolling started');
                                }

                                if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                                    console.log('instance: inside lead');
                                }

                                if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                                    console.log('instance: past lead');
                                }

                                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                                    console.log('instance: 100vh before bottom met');
                                }

                                if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                                    alert("component_app_modal_element_page_top_content: instance: footer met");
                                }

                                state.ui.gui.scroll.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

                                console.log('scroll');
                                console.log(event);

                                Handle_get_state_from_events();

                            }, false);


                        }, 300);


                        // add event listeners
                        setTimeout(() => {

                            document.getElementById('component_app_modal_element_page_top_content_close'+number+'').addEventListener('click', (event) => {    
                                // function start (Preview close)
                                state.ui.modal.page.top.display = true;
                                state.ui.modal.page.top.transform = true;
                              });

                            // ON TO TOUR
                            document.getElementById('component_app_modal_element_page_top_content_enter'+number+'').addEventListener('click', (event) => {

                                state.ui.modal.overlay.top.display = true;
                                state.ui.modal.overlay.top.transform = true;

                                // function start (Tour)


                                // function start (Detail)
                                let post_tour_from_li_link = '';
                                let tour_content = `
                                    
                                    <div class="position_relative float_left width_100 height_100vh bg_orange margin_auto">
                                        ${info.title} <div class="position_relative float_left width_100 margin_auto"></div>
                                    </div>
                                    
                                    <div class="position_relative float_left width_100 height_100vh bg_green margin_auto">
                                        ${info.title} <div class="position_relative float_left width_100 margin_auto"></div>
                                    </div>

                                `;
                                let tour_scrolling_container = '';
                                let control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_overlay_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_overlay_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

                                tour_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_overlay',tour_content);
                                post_tour_from_li_link = `<div id="post_tour_from_li_link" class="position_absolute width_100 height_100vh margin_auto photo_person1">${tour_scrolling_container}${control_container}</div>`
                                
                                tour_container.innerHTML = post_tour_from_li_link;

                                state.ui.modal.overlay.top.display = true;

                                setTimeout(() => {
                                    state.ui.modal.overlay.top.transform = false;

                                    document.getElementById('element_scroll_y_events_overlay').addEventListener("scroll", (event) => {

                                        console.log(event);
                                        //alert('yup');

                                        // scrolling
                                        console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                                        console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                                        console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                                        console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                                        console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                                        console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                                        state = Handle_return_state();

                                        state.events.route.clientHeight = event.srcElement.clientHeight;
                                        state.events.route.clientWidth = event.srcElement.clientWidth;

                                        state.events.route.scrollHeight = event.srcElement.scrollHeight;
                                        state.events.route.scrollWidth = event.srcElement.scrollWidth;

                                        state.events.route.scrollTop = event.srcElement.scrollTop;
                                        state.events.route.scrollLeft = event.srcElement.scrollLeft;

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
                                            document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop)
                                        }

                                        if ((document.getElementById('scroll_scrollLeft')) != null) {
                                            document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
                                        }

                                        // instances      
                                        if (event.srcElement.scrollTop > state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                                            console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position increasing');
                                            console.log("instance: wheel up");
                                        }

                                        if (event.srcElement.scrollTop < state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                                            console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position decreasing');
                                            console.log("instance: wheel up");
                                        }

                                        if (event.srcElement.scrollTop === 0) {
                                            console.log("instance: wheel up");
                                        }

                                        if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                                            console.log('instance: scrolling started');
                                        }

                                        if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                                            console.log('instance: inside lead');
                                        }

                                        if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                                            console.log('instance: past lead');
                                        }

                                        if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                                            console.log('instance: 100vh before bottom met');
                                        }

                                        if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                                            alert("component_app_modal_element_page_top_content: instance: footer met");
                                        }

                                        state.ui.gui.scroll.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

                                        console.log('scroll');
                                        console.log(event);

                                        Handle_get_state_from_events();

                                    }, false);


                                }, 300);

                                // add event listeners
                                setTimeout(() => {
                                    document.getElementById('component_app_modal_element_overlay_top_content_close'+number+'').addEventListener('click', (event) => {
                                        
                                        // function start (Preview close)
                                        state.ui.modal.overlay.top.display = true;
                                        state.ui.modal.overlay.top.transform = true;
                                      });

                                    // ON TO DONE
                                    document.getElementById('component_app_modal_element_overlay_top_content_enter'+number+'').addEventListener('click', (event) => {

                                        alert('DONE!');

                                      });

                                }, 1000);

                              });

                        }, 1000);

                });

            }, 1000);

        };

        // home
        if (route == 'home') {

            //alert('home');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            
            let route_background = `${imported_elements.route_content_bg()}`

            let route_content = `
                
                <div class="position_relative float_left width_100 height_100vh margin_auto">

                        <div id="element_scroll_y_scrollbar_styled_1/2" class="position_relative width_50 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">
                            <div class="position_relative width_100 float_left">

                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>
                                <div class="position_relative float_left width_100 height_10vh margin_auto">
                                    <div class="icon_social_team_type width_10vh height_10vh float_left position_relative float_left margin_auto"></div>
                                </div>

                            </div>
                        </div>

                        <div id="element_scroll_y_scrollbar_styled_2/2" class="position_relative width_50 height_100 margin_auto float_right display opacity_1">
                        </div>

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_bottom z_index_1">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_blue margin_auto">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_green margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_top z_index_1">

                </div>

                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        // about
        if (route == 'about') {

            //alert('about');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            let route_background = `${imported_elements.route_content_bg_about()}`

            let route_content = `${imported_elements.route_content_team_1()}`

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content + `<div class="animated1 nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-50 right_0 margin_auto width_25 height_100 margin_auto float_left easing_01"></div>` );
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        if (route == 'about_1') {

            let route_background = `
                ${imported_elements.route_content_bg_about_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'about_2') {

            let route_background = `
                ${imported_elements.route_content_bg_about_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'about_3') {

            let route_background = `
                ${imported_elements.route_content_bg_about_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'about_4') {

            let route_background = `
                ${imported_elements.route_content_bg_about_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'about_5') {

            let route_background = `
                ${imported_elements.route_content_bg_about_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'about_6') {

            let route_background = `
                ${imported_elements.route_content_bg_about_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'about_all') {

            let route_background = `
                ${imported_elements.route_content_bg_about_all()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        // abilities
        if (route == 'abilities') {

            //alert('abilities');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            
            let route_background = `${imported_elements.route_content_bg_abilities()}`

            let route_content = `
                
                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_bottom z_index_1">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_blue margin_auto">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_green margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_top z_index_1">

                </div>

                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        if (route == 'abilities_1') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'abilities_2') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'abilities_3') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'abilities_4') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'abilities_5') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'abilities_6') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'abilities_all') {

            let route_background = `
                ${imported_elements.route_content_bg_abilities_all()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        // team
        if (route == 'team') {

            //alert('team');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            
            let route_background = `${imported_elements.route_content_bg_team()}`

            let route_content = `${imported_elements.route_content_team()}`

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        if (route == 'team_1') {

            let route_background = `
                ${imported_elements.route_content_bg_team_1()}
            `

            let route_content = `
                ${imported_elements.route_content_team_1()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'team_2') {

            let route_background = `
                ${imported_elements.route_content_bg()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'team_3') {

            let route_background = `
                ${imported_elements.route_content_bg()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'team_4') {

            let route_background = `
                ${imported_elements.route_content_bg()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'team_5') {

            let route_background = `
                ${imported_elements.route_content_bg()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'team_6') {

            let route_background = `
                ${imported_elements.route_content_bg()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'team_all') {

            let route_background = `
                ${imported_elements.route_content_bg_team_all()}
            `;

            let route_content = `
                ${imported_elements.team_all_fold_content()}
            `;

            let route_foreground = `
                ${imported_elements.team_foreground_section()}
            `;

            let route_intro = `
                <div class="position_absolute float_left width_100 height_100vh margin_auto top_0 left_0 webkit_box_pack_center webkit_box_align display_webkit_box bg_orange delay1 fadeIn animated1">
                    <div class="width_100vh font_size_205vh line_height_5vh position_absolute left_100 text_align_center float_left vertical_text_left">
                        <div id="section" class="position_relative calc_02vh border_01vh_dark_yellow_9 float_left margin_auto">
                            Hello <i>username</i> welcome to <b>our space</b>. Last Logged in <u>1/11/2020</u>
                        </div>
                    </div>
                </div>
            `;

            let scrolling_content = imported_elements.element_scroll_y(route_content);
            
            setTimeout( () => {
                state.ui.modal.page.bottom.display = true;
                Handle_clear_scene();
            }, 0);

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

            setTimeout( () => {                
                document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_intro + route_background + scrolling_content + route_foreground);
            }, 1500);
        };

        if (route == 'team_cta') {

            let route_background = `
                ${imported_elements.route_content_bg_team_all()}
            `;

            let route_content = `
                ${imported_elements.team_all_fold_content()}
            `;

            let route_foreground = `
                ${imported_elements.team_foreground_section()}
            `;

            let route_intro = `
                <div class="position_absolute float_left width_100 height_100vh margin_auto top_0 left_0 webkit_box_pack_center webkit_box_align display_webkit_box bg_orange delay1 fadeIn animated1">
                    <div class="width_100vh font_size_205vh line_height_5vh position_absolute left_100 text_align_center float_left vertical_text_left">
                        <div id="section" class="position_relative calc_02vh border_01vh_dark_yellow_9 float_left margin_auto">
                            Hello <i>username</i> welcome to <b>our space</b>. Last Logged in <u>1/11/2020</u>
                        </div>
                    </div>
                </div>
            `;

            let scrolling_content = imported_elements.element_scroll_y(route_content);
            
            setTimeout( () => {
                state.ui.modal.page.bottom.display = true;
                Handle_clear_scene();
            }, 0);

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

            setTimeout( () => {                
                document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_intro + route_background + scrolling_content + route_foreground);
            }, 1500);
        };

        // services
        if (route == 'services') {

            //alert('services');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            
            let route_background = `${imported_elements.route_content_bg_services()}`

            let route_content = `
                
                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_bottom z_index_1">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_blue margin_auto">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_green margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_top z_index_1">

                </div>

                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        if (route == 'services_1') {

            let route_background = `
                ${imported_elements.route_content_bg_services_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'services_2') {

            let route_background = `
                ${imported_elements.route_content_bg_services_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'services_3') {

            let route_background = `
                ${imported_elements.route_content_bg_services_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'services_4') {

            let route_background = `
                ${imported_elements.route_content_bg_services_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'services_5') {

            let route_background = `
                ${imported_elements.route_content_bg_services_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'services_6') {

            let route_background = `
                ${imported_elements.route_content_bg_services_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'services_all') {

            let route_background = `
                ${imported_elements.route_content_bg_team_all()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        // partners
        if (route == 'partners') {

            //alert('partners');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            let route_background = `${imported_elements.route_content_bg_partners()}`

            let route_content = `
                
                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_bottom z_index_1">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_blue margin_auto">

                </div>

                <div class="position_relative float_left width_50 height_100vh bg_green margin_auto">

                </div>

                <div id="section" class="position_relative height_100vh width_100vw float_left margin_auto gradient_yellow_top z_index_1">

                </div>

                <div class="position_relative float_left width_100 height_100vh margin_auto">

                </div>

            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        if (route == 'partners_1') {

            let route_background = `
                ${imported_elements.route_content_bg_partners_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'partners_2') {

            let route_background = `
                ${imported_elements.route_content_bg_partners_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'partners_3') {

            let route_background = `
                ${imported_elements.route_content_bg_partners_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'partners_4') {

            let route_background = `
                ${imported_elements.route_content_bg_partners_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'partners_5') {

            let route_background = `
                ${imported_elements.route_content_bg_partners_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'partners_6') {

            let route_background = `
                ${imported_elements.route_content_bg_partners_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'partners_all') {

            let route_background = `
                ${imported_elements.route_content_bg_team_all()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        // workshop
        if (route == 'workshop') {

            //alert('workshop');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            let route_background = `
                ${imported_elements.route_content_bg_workshop()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_1') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop_1()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_2') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_3') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_3()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_4') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_4()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_5') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_5()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_6') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_6()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'workshop_all') {

            let route_background = `
                ${imported_elements.route_content_bg_workshop_all()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop() + imported_elements.element_extra_content()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        // library
        if (route == 'library') {

            //alert('library');

            // state.ui.gui.top_right.display = true;
            // state.ui.gui.top.display = false;
            // state.ui.gui.top_left.display = true;

            // state.ui.gui.left.display = false;
            // state.ui.gui.right.display = false;

            // state.ui.gui.bottom_right.display = true;
            // state.ui.gui.bottom.display = true;
            // state.ui.gui.bottom_left.display = true;

            // state.ui.modal.nav.bottom.transform = true;
            // state.ui.modal.nav.left.transform = true;
            // state.ui.modal.nav.top.transform = true;
            // state.ui.modal.nav.right.transform = true;

            // state.ui.modal.pop.bottom.transform = true;
            // state.ui.modal.pop.left.transform = true;
            // state.ui.modal.pop.top.transform = true;
            // state.ui.modal.pop.right.transform = true;

            // state.ui.modal.page.bottom.transform = true;
            // state.ui.modal.page.left.transform = true;
            // state.ui.modal.page.top.transform = true;
            // state.ui.modal.page.right.transform = true;

            // state.ui.gui.fold.start.display = false;
            // state.ui.gui.fold.enter.display = false;
            // state.ui.gui.fold.learn.display = false;

            
            let route_background = `${imported_elements.route_content_bg_library()}`

            let route_content = `${imported_elements.route_content_library()}`

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 1000);

        };

        if (route == 'library_1') {

            let route_background = `
                ${imported_elements.route_content_bg_library_1()}
            `

            let route_content = `
                ${imported_elements.route_content_library_1()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content + imported_elements.library_foreground_section());
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'library_2') {

            let route_background = `
                ${imported_elements.route_content_bg_library_2()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content + imported_elements.library_foreground_section());
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'library_3') {

            let route_background = `
                ${imported_elements.route_content_bg_library_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'library_4') {

            let route_background = `
                ${imported_elements.route_content_bg_library_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'library_5') {

            let route_background = `
                ${imported_elements.route_content_bg_library_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'library_6') {

            let route_background = `
                ${imported_elements.route_content_bg_library_1()}
            `

            let route_content = `
                ${imported_elements.route_content_workshop()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };

        if (route == 'library_all') {

            let route_background = `
                ${imported_elements.route_content_bg_library_all()}
            `

            let route_content = `
                ${imported_elements.library_all_fold_content()}
            `

            let scrolling_content = imported_elements.element_scroll_y(route_content);

            document.getElementById('component_app_modal_element_page_bottom_content').innerHTML = (route_background + scrolling_content);
            
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = false;
            }, 101);

        };


    })();

    setTimeout(

    () => {

        document.getElementById('component_app_modal_element_page_bottom_content').children[1].addEventListener("scroll", (event) => {

            console.log(event);
            //alert('yup');

            // scrolling
            console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
            console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
            console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
            console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
            console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
            console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

            state = Handle_return_state();

            state.events.route.clientHeight = event.srcElement.clientHeight;
            state.events.route.clientWidth = event.srcElement.clientWidth;

            state.events.route.scrollHeight = event.srcElement.scrollHeight;
            state.events.route.scrollWidth = event.srcElement.scrollWidth;

            state.events.route.scrollTop = event.srcElement.scrollTop;
            state.events.route.scrollLeft = event.srcElement.scrollLeft;

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
                document.getElementById('scroll_scrollTop').innerHTML = (event.srcElement.scrollTop)
            }

            if ((document.getElementById('scroll_scrollLeft')) != null) {
                document.getElementById('scroll_scrollLeft').innerHTML = (event.srcElement.scrollLeft)
            }

            // instances      
            if (event.srcElement.scrollTop > state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position increasing');
                console.log("instance: wheel up");
            }

            if (event.srcElement.scrollTop < state.ui.gui.scroll.component_app_gui_scroll_y_position) {
                console.log('state.ui.gui.scroll.component_app_gui_scroll_y_position decreasing');
                console.log("instance: wheel up");
            }

            if (event.srcElement.scrollTop === 0) {
                console.log("instance: wheel up");
            }

            if (event.srcElement.scrollTop > 1 && !((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight))) {
                console.log('instance: scrolling started');
            }

            if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                console.log('instance: inside lead');
            }

            if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                console.log('instance: past lead');
            }

            if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                console.log('instance: 100vh before bottom met');
            }

            if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
                alert("component_app_modal_element_page_bottom_content: instance: footer met");
            }

            state.ui.gui.scroll.component_app_gui_scroll_y_position = event.srcElement.scrollTop;

            console.log('scroll');
            console.log(event);

            Handle_get_state_from_events();

        }, false);

    }, 5000);

};

let values_update = () => {
  imported_values.values_update();
};

let Handle_EventListeners = () => {

        if (document.getElementById('element_input_filter') != null) {
	        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
	            // filter library
	            setTimeout(function() {
	                Handle_Firebase_Refs_and_Render();
	            }, 0);

	        });
	    };

	    if (document.getElementById('element_input_title') != null) {
	        document.getElementById('element_input_title').addEventListener('keydown', (event) => {
	            
	            // submit new listing
	            if (event.keyCode == 13) {
	                event.preventDefault();
	                addListings('library');
                    find_view();
                    find_type();
	            };

	            // submit new listing
	            if (event.keyCode == 32) {
	                //event.preventDefault();
	                Handle_Firebase_Refs_and_Render();
	            };

	        });
	    };

	    if (document.getElementById('element_input_sort') != null) {
	        document.getElementById('element_input_sort').addEventListener('keydown', (event) => {
	            
	            if (event.keyCode == 13) {
	                event.preventDefault();
	                Handle_Firebase_Refs_and_Render();
	            };

	        });
	    };

	    if (document.getElementById('element_input_view') != null) {
	        document.getElementById('element_input_view').addEventListener('keydown', (event) => {

	            if (event.keyCode == 13) {
	                event.preventDefault();
	                Handle_Firebase_Refs_and_Render();
	            };

	        });
	    };

	    if (document.getElementById('element_input_type') != null) {
	        document.getElementById('element_input_type').addEventListener('keydown', (event) => {

	            if (event.keyCode == 13) {
	                event.preventDefault();
	                Handle_Firebase_Refs_and_Render();
	            };

	        });
	    };

        if ((document.getElementById('hire')) != null ) {
            document.getElementById('hire').addEventListener("click", function(event) {
                
                state.ui.gui.top.display = true;
                state.ui.gui.top.transform = !state.ui.gui.top.transform;
                //  state.ui.gui.top_left.display = true;
                //  state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;
                state.ui.gui.top_right.display = true;
                state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform;

                state.ui.gui.bottom.display = true;
                state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform;
                state.ui.gui.bottom_right.display = true;
                state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;
                state.ui.gui.bottom_left.display = true;
                state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform;
                            
            });
        };

        if ((document.getElementById('nownigel_icon_logo')) != null ) {
            document.getElementById('nownigel_icon_logo').addEventListener("click", function(event) {
                Handle_check_route('back_home');
            });
        };

        if ((document.getElementById('icon_menu')) != null ) {
            document.getElementById('icon_menu').addEventListener("click", function(event) {

                if ((document.getElementById('icon_menu').classList.contains('gui_logo_navs'))) {
                    
                    document.getElementById('icon_menu').classList.remove('gui_logo_navs');
                    document.getElementById('icon_menu').classList.add('gui_close');
                    
                    state.ui.gui.top.display = true;
                    state.ui.gui.top.transform = true;

                    state.ui.gui.top_left.display = true;
                    state.ui.gui.top_left.transform = true;

                    state.ui.gui.top_right.display = true;
                    state.ui.gui.top_right.transform = true;
                    
                    state.ui.gui.right.display = true;
                    state.ui.gui.right.transform = true;

                    state.ui.gui.left.display = true;
                    state.ui.gui.left.transform = true;

                    state.ui.gui.bottom.display = true;
                    state.ui.gui.bottom.transform = true;

                    state.ui.gui.bottom_right.display = true;
                    state.ui.gui.bottom_right.transform = true;

                    state.ui.gui.bottom_left.display = true;
                    state.ui.gui.bottom_left.transform = true;

                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;

                } else {

                    document.getElementById('icon_menu').classList.remove('gui_close');
                    document.getElementById('icon_menu').classList.add('gui_logo_navs');

                    state.ui.modal.nav.top.display = true;
                    state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;

                };

            });
        };

        if ((document.getElementById('icon_logo')) != null ) {
            document.getElementById('icon_logo').addEventListener("click", function(event) {
                Handle_check_route('back_home');
            });
        };

        if ((document.getElementById('icon_home')) != null ) {
            document.getElementById('icon_home').addEventListener("click", function(event) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.element_extra_content())
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = false;
                }, 1000);

            });
        };


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
                Handle_check_route('about');
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

        if ((document.getElementById('route_team_cta')) != null ) {
            document.getElementById('route_team_cta').addEventListener("click", function(event) {
                Handle_check_route('team_cta');
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

        if ((document.getElementById('icon_search')) != null ) {
            document.getElementById('icon_search').addEventListener("click", function(event) {
                
                //alert('yup again');

                //document.getElementById('component_app_modal_element_page_left_content').innerHTML = imported_elements.element_scroll_y(imported_elements.blog_content())
                
                state.ui.modal.page.left.display = true;

                setTimeout( () => {
                    state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
                }, 1000);

            });
        };

        if ((document.getElementById('icon_create')) != null ) {
            document.getElementById('icon_create').addEventListener("click", function(event) {
                
                //alert('yup again');

                //document.getElementById('component_app_modal_element_page_left_content').innerHTML = imported_elements.element_scroll_y(imported_elements.blog_content())
                
                state.ui.modal.pop.left.display = true;

                setTimeout( () => {
                    state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
                }, 1000);

            });
        };

        if ((document.getElementById('icon_location')) != null ) {
            document.getElementById('icon_location').addEventListener("click", function(event) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.location_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });

        };

        if ((document.getElementById('icon_qr')) != null ) {
            document.getElementById('icon_qr').addEventListener("click", function(event) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.qr_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });

        };

        if ((document.getElementById('icon_hire')) != null ) {
            document.getElementById('icon_hire').addEventListener("click", function(event) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.hire_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });

        };

        if ((document.getElementById('icon_sign_in')) != null ) {
            document.getElementById('icon_sign_in').addEventListener("click", function(event) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_in_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

                if ((document.getElementById('icon_sign_in').classList.contains('display_none'))) {

                    // if logged out
                    document.getElementById('icon_sign_in').classList.add('display');
                    document.getElementById('icon_sign_in').classList.remove('display_none');

                    document.getElementById('icon_sign_up').classList.add('display');
                    document.getElementById('icon_sign_up').classList.remove('display_none');

                    document.getElementById('icon_sign_out').classList.remove('display');
                    document.getElementById('icon_sign_out').classList.add('display_none');

                    document.getElementById('gui_user').classList.remove('display');
                    document.getElementById('gui_user').classList.add('display_none');

                    document.getElementById('dashboard_filler').classList.remove('display');
                    document.getElementById('dashboard_filler').classList.add('display_none');

                    document.getElementById('dashboard_filler_2').classList.remove('display');
                    document.getElementById('dashboard_filler_2').classList.add('display_none');

                } else {

                    // if logged in
                    document.getElementById('icon_sign_in').classList.remove('display');
                    document.getElementById('icon_sign_in').classList.add('display_none');

                    document.getElementById('icon_sign_up').classList.remove('display');
                    document.getElementById('icon_sign_up').classList.add('display_none');

                    document.getElementById('icon_sign_out').classList.add('display');
                    document.getElementById('icon_sign_out').classList.remove('display_none');

                    document.getElementById('gui_user').classList.add('display');
                    document.getElementById('gui_user').classList.remove('display_none');

                    document.getElementById('dashboard_filler').classList.add('display');
                    document.getElementById('dashboard_filler').classList.remove('display_none');

                    document.getElementById('dashboard_filler_2').classList.add('display');
                    document.getElementById('dashboard_filler_2').classList.remove('display_none');
                };                

            });

        };

        if ((document.getElementById('icon_sign_up')) != null ) {
            document.getElementById('icon_sign_up').addEventListener("click", function(event) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_up_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });

        };

        if ((document.getElementById('icon_sign_out')) != null ) {
            document.getElementById('icon_sign_out').addEventListener("click", function(event) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_out_content());
                
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

                if ((document.getElementById('icon_sign_in').classList.contains('display_none'))) {

                    // if logged out
                    document.getElementById('icon_sign_in').classList.add('display');
                    document.getElementById('icon_sign_in').classList.remove('display_none');

                    document.getElementById('icon_sign_up').classList.add('display');
                    document.getElementById('icon_sign_up').classList.remove('display_none');

                    document.getElementById('icon_sign_out').classList.remove('display');
                    document.getElementById('icon_sign_out').classList.add('display_none');

                    document.getElementById('gui_user').classList.remove('display');
                    document.getElementById('gui_user').classList.add('display_none');

                    document.getElementById('dashboard_filler').classList.remove('display');
                    document.getElementById('dashboard_filler').classList.add('display_none');

                    document.getElementById('dashboard_filler_2').classList.remove('display');
                    document.getElementById('dashboard_filler_2').classList.add('display_none');

                } else {

                    // if logged in
                    document.getElementById('icon_sign_in').classList.remove('display');
                    document.getElementById('icon_sign_in').classList.add('display_none');

                    document.getElementById('icon_sign_up').classList.remove('display');
                    document.getElementById('icon_sign_up').classList.add('display_none');

                    document.getElementById('icon_sign_out').classList.add('display');
                    document.getElementById('icon_sign_out').classList.remove('display_none');

                    document.getElementById('gui_user').classList.add('display');
                    document.getElementById('gui_user').classList.remove('display_none');

                    document.getElementById('dashboard_filler').classList.add('display');
                    document.getElementById('dashboard_filler').classList.remove('display_none');

                    document.getElementById('dashboard_filler_2').classList.add('display');
                    document.getElementById('dashboard_filler_2').classList.remove('display_none');
                };

            });

        };

        if ((document.getElementById('icon_dashboard')) != null ) {
            document.getElementById('icon_dashboard').addEventListener("click", function(event) {

                alert('dashboard');

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.user_content());
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });

        };

        if ((document.getElementById('icon_help')) != null ) {
            document.getElementById('icon_help').addEventListener("click", function(event) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.user_content());
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });

        };

        if ((document.getElementById('icon_audio')) != null ) {
            document.getElementById('icon_audio').addEventListener("click", function(event) {

                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.sign_in_content());
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);
                
            });

        };

        if ((document.getElementById('icon_help')) != null ) {
            document.getElementById('icon_help').addEventListener("click", function(event) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.quote_form_content());
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });
            
        };

        if ((document.getElementById('icon_info')) != null ) {
            document.getElementById('icon_info').addEventListener("click", function(event) {
                
                document.getElementById('component_app_modal_element_page_top_content').innerHTML = imported_elements.element_scroll_y(imported_elements.pagination_form_content());
                state.ui.modal.page.top.display = true;

                setTimeout( () => {
                    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
                }, 1000);

            });
            
        };

        if ((document.getElementById('logo_buttons')) != null ) {
            document.getElementById('logo_buttons').addEventListener("click", function(event) {

                //state.ui.gui.top_left.transform = false;
                //state.ui.gui.top_left.display = true;

                //state.ui.gui.top.display = true;
                //state.ui.gui.top.transform = false;

                //state.ui.gui.top_right.display = true;
                //state.ui.gui.top_right.transform = false;

                //state.ui.gui.bottom_left.display = true;
                //state.ui.gui.bottom_left.transform = false;
                
                //state.ui.gui.bottom.transform = false;
                //state.ui.gui.bottom.display = true;
                
                //state.ui.gui.bottom_right.display = true;
                //state.ui.gui.bottom_right.transform = false;

                //state.ui.gui.right.display = true;
                //state.ui.gui.right.transform = false;

                //state.ui.gui.left.display = true;
                //state.ui.gui.left.transform = false;
                
            });

            document.getElementById('gui_1').addEventListener("click", function(event) {

                (function() {
                    let interval = 0;
                    
                    let start_animation =
                    setInterval(
                        function() {
                      
                            console.log('current frame is: ' + interval);


                            if (interval == (state.animation.framerate * 0)) {                                
                                document.getElementById('logo_container').classList.add('display');
                                document.getElementById('logo_container').classList.remove('display_none');
                            };



                            if (interval == (state.animation.framerate * 1)) {
                                document.getElementById('title_screen').classList.add('display');
                                document.getElementById('title_screen').classList.remove('display_none');
                            };

                            if (interval == (state.animation.framerate * 2)) {
                                //alert('4 seconds have passed.')
                                document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
                            };
                            
                            if (interval == (state.animation.framerate * 3)) {
                                document.getElementById('activators').classList.add('display_none');
                                document.getElementById('activators').classList.remove('display');

                                clearInterval(start_animation);
                            };
                            
                            //clearInterval(start_animation)
                            interval += 1;

                        }, (1000 / state.animation.framerate));
                }());

            });

            document.getElementById('gui_2').addEventListener("click", function(event) {

                (function() {
                    let interval = 0;
                    
                    let start_animation =
                    setInterval(
                        function() {
                      
                            console.log('current frame is: ' + interval);


                            if (interval == (state.animation.framerate * 0)) {                                
                                document.getElementById('logo_container').classList.add('display');
                                document.getElementById('logo_container').classList.remove('display_none');
                            };



                            if (interval == (state.animation.framerate * 1)) {
                                document.getElementById('title_screen').classList.add('display');
                                document.getElementById('title_screen').classList.remove('display_none');
                            };

                            if (interval == (state.animation.framerate * 2)) {
                                //alert('4 seconds have passed.')
                                document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
                            };
                            
                            if (interval == (state.animation.framerate * 3)) {
                                document.getElementById('activators').classList.add('display_none');
                                document.getElementById('activators').classList.remove('display');

                                clearInterval(start_animation);
                            };
                            
                            //clearInterval(start_animation)
                            interval += 1;

                        }, (1000 / state.animation.framerate));
                }());

            });

            document.getElementById('gui_3').addEventListener("click", function(event) {

                (function() {
                    let interval = 0;
                    
                    let start_animation =
                    setInterval(
                        function() {
                      
                            console.log('current frame is: ' + interval);


                            if (interval == (state.animation.framerate * 0)) {                                
                                document.getElementById('logo_container').classList.add('display');
                                document.getElementById('logo_container').classList.remove('display_none');
                            };



                            if (interval == (state.animation.framerate * 1)) {
                                document.getElementById('title_screen').classList.add('display');
                                document.getElementById('title_screen').classList.remove('display_none');
                            };

                            if (interval == (state.animation.framerate * 2)) {
                                //alert('4 seconds have passed.')
                                document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
                            };
                            
                            if (interval == (state.animation.framerate * 3)) {
                                document.getElementById('activators').classList.add('display_none');
                                document.getElementById('activators').classList.remove('display');

                                clearInterval(start_animation);
                            };
                            
                            //clearInterval(start_animation)
                            interval += 1;

                        }, (1000 / state.animation.framerate));
                }());

            });

            document.getElementById('gui_4').addEventListener("click", function(event) {

                (function() {
                    let interval = 0;
                    
                    let start_animation =
                    setInterval(
                        function() {
                      
                            console.log('current frame is: ' + interval);


                            if (interval == (state.animation.framerate * 0)) {                                
                                document.getElementById('logo_container').classList.add('display');
                                document.getElementById('logo_container').classList.remove('display_none');
                            };



                            if (interval == (state.animation.framerate * 1)) {
                                document.getElementById('title_screen').classList.add('display');
                                document.getElementById('title_screen').classList.remove('display_none');
                            };

                            if (interval == (state.animation.framerate * 2)) {
                                //alert('4 seconds have passed.')
                                document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
                            };
                            
                            if (interval == (state.animation.framerate * 3)) {
                                document.getElementById('activators').classList.add('display_none');
                                document.getElementById('activators').classList.remove('display');

                                clearInterval(start_animation);
                            };
                            
                            //clearInterval(start_animation)
                            interval += 1;

                        }, (1000 / state.animation.framerate));
                }());

            });

            document.getElementById('gui_5').addEventListener("click", function(event) {

                (function() {
                    let interval = 0;
                    
                    let start_animation =
                    setInterval(
                        function() {
                      
                            console.log('current frame is: ' + interval);


                            if (interval == (state.animation.framerate * 0)) {                                
                                document.getElementById('logo_container').classList.add('display');
                                document.getElementById('logo_container').classList.remove('display_none');
                            };



                            if (interval == (state.animation.framerate * 1)) {
                                document.getElementById('title_screen').classList.add('display');
                                document.getElementById('title_screen').classList.remove('display_none');
                            };

                            if (interval == (state.animation.framerate * 2)) {
                                //alert('4 seconds have passed.')
                                document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
                            };
                            
                            if (interval == (state.animation.framerate * 3)) {
                                document.getElementById('activators').classList.add('display_none');
                                document.getElementById('activators').classList.remove('display');

                                clearInterval(start_animation);
                            };
                            
                            //clearInterval(start_animation)
                            interval += 1;

                        }, (1000 / state.animation.framerate));
                }());

            });

            document.getElementById('gui_6').addEventListener("click", function(event) {

                (function() {
                    let interval = 0;
                    
                    let start_animation =
                    setInterval(
                        function() {
                      
                            console.log('current frame is: ' + interval);


                            if (interval == (state.animation.framerate * 0)) {                                
                                document.getElementById('logo_container').classList.add('display');
                                document.getElementById('logo_container').classList.remove('display_none');
                            };



                            if (interval == (state.animation.framerate * 1)) {
                                document.getElementById('title_screen').classList.add('display');
                                document.getElementById('title_screen').classList.remove('display_none');
                            };

                            if (interval == (state.animation.framerate * 2)) {
                                //alert('4 seconds have passed.')
                                document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
                                document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
                            };
                            
                            if (interval == (state.animation.framerate * 3)) {
                                document.getElementById('activators').classList.add('display_none');
                                document.getElementById('activators').classList.remove('display');

                                clearInterval(start_animation);
                            };
                            
                            //clearInterval(start_animation)
                            interval += 1;

                        }, (1000 / state.animation.framerate));
                }());

            });

            document.getElementById('logo_note').addEventListener("click", function(event) {
            
            });

            document.getElementById('gui_enter_buttons').addEventListener("click", function(event) {

                HANDLE_animations_enter();
                alert('yup');

            });

            document.getElementById('gui_start_buttons').addEventListener("click", function(event) {

                HANDLE_animations_start();

            });

            document.getElementById('gui_learn_buttons').addEventListener("click", function(event) {

                HANDLE_animations_learn();

            });

            document.getElementById('component_route_home_page_bottom_temp').addEventListener("click", function(event) {
                Handle_check_route('home');
            });

        };

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

let HANDLE_animation_null = () => {

    //alert('0 seconds have passed.')
    document.getElementById('animation_fourground_furniture_layer_1').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_2').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_3').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_4').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_5').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_6').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_7').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_8').style = 'top: ' + -100 + '%;';

    document.getElementById('animation_fourground_man_layer_1').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_2').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_3').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_4').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_5').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_6').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_7').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_8').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_2').style = 'bottom: ' + -100 + '%;' + 'right: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_2').classList.remove('display_none');
    document.getElementById('animation_fourground_man_2').classList.add('display');
    document.getElementById('animation_fourground_man_2').classList.remove('opacity_0');
    document.getElementById('animation_fourground_man_2').classList.add('opacity_1');
    document.getElementById('animation_fourground_man_3').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_man_3').classList.remove('display_none');
    document.getElementById('animation_fourground_man_3').classList.add('display');
    document.getElementById('animation_fourground_man_3').classList.remove('opacity_0');
    document.getElementById('animation_fourground_man_3').classList.add('opacity_1');
    document.getElementById('animation_fourground_machine_layer_0').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';

    document.getElementById('component_app_bg_1').classList.remove('opacity_1');
    document.getElementById('component_app_bg_1').classList.add('opacity_0');

    document.getElementById('component_app_bg_2').classList.remove('opacity_1');
    document.getElementById('component_app_bg_2').classList.add('opacity_0');

    document.getElementById('component_app_bg_3').classList.remove('opacity_1');
    document.getElementById('component_app_bg_3').classList.add('opacity_0');
    
    document.getElementById('component_app_bg_4').classList.remove('opacity_1');
    document.getElementById('component_app_bg_4').classList.add('opacity_0');
    
    document.getElementById('component_app_bg_5').classList.remove('opacity_1');
    document.getElementById('component_app_bg_5').classList.add('opacity_0');
    
    document.getElementById('component_app_bg_6').classList.remove('opacity_1');
    document.getElementById('component_app_bg_6').classList.add('opacity_0');

    document.getElementById('logo_type_and_buttons_container').classList.remove('display');
    document.getElementById('logo_type_and_buttons_container').classList.add('display_none');

    document.getElementById('title_screen').classList.remove('display');
    document.getElementById('title_screen').classList.add('display_none');

    document.getElementById('logo_container').classList.remove('display');
    document.getElementById('logo_container').classList.add('display_none');

};

let HANDLE_animation_idle = () => {

    document.getElementById('logo_type_and_buttons_container').classList.remove('display_none');
    document.getElementById('logo_type_and_buttons_container').classList.add('display');

};

let HANDLE_animation_after_move = () => {

    document.getElementById('logo_buttons').classList.add('display');
    document.getElementById('logo_buttons').classList.remove('display_none');

    document.getElementById('logo_note').classList.add('display_none');
    document.getElementById('logo_note').classList.remove('display');

};

let HANDLE_animation_before_move = () => {

    document.getElementById('logo_buttons').classList.remove('display');
    document.getElementById('logo_buttons').classList.add('display_none');

    document.getElementById('logo_note').classList.remove('display_none');
    document.getElementById('logo_note').classList.add('display');

};


let HANDLE_animation_title = () => {

    document.getElementById('title_screen').classList.remove('display_none');
    document.getElementById('title_screen').classList.add('display');

    document.getElementById('logo_container').classList.remove('display_none');
    document.getElementById('logo_container').classList.add('display');

};

let HANDLE_animation_begin = () => {

    (function() {
        let interval = 0;
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 1) ) {
                    //alert('1 seconds have passed.')
                    document.getElementById('animation_fourground_man_2').style = 'bottom: ' + 0 + '%;' + 'right: ' + 0 + '%;';
                };

                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_start_1 = () => {

    (function() {
        let interval = 0;

        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0)) {
                    //alert('2 seconds have passed.')
                    document.getElementById('animation_fourground_man_3').style = 'bottom: ' + 0 + '%';
                    clearInterval(start_animation);
                };

                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_start_2 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0)) {
                    //alert('4 seconds have passed.')
                    document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + 0 + '%';
                    document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + 0 + '%';
                    document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + 0 + '%';
                    document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + 0 + '%';
                    document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + 0 + '%';
                    document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + 0 + '%';

                    document.getElementById('activators').classList.remove('display_none');
                    document.getElementById('activators').classList.add('display');

                    clearInterval(start_animation);
                };

                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_start_3 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0)) { 
                    state.ui.gui.top_left.transform = false;
                    document.getElementById('animation_fourground_machine_layer_0').style = 'bottom: ' + 0 + '%';
                };

                if (interval == (state.animation.framerate * 1)) {                
                    document.getElementById('component_app_bg_2').classList.remove('opacity_0');
                    document.getElementById('component_app_bg_2').classList.add('opacity_1');
                };

                if (interval == (state.animation.framerate * 2)) {                
                    document.getElementById('animation_fourground_machine_0_imac').classList.remove('display_none');
                    document.getElementById('animation_fourground_machine_0_imac').classList.add('display');
                };

                if (interval == (state.animation.framerate * 3)) {                
                    document.getElementById('animation_fourground_machine_0_macbook').classList.remove('display_none');
                    document.getElementById('animation_fourground_machine_0_macbook').classList.add('display');
                };

                if (interval == (state.animation.framerate * 4)) {                
                    document.getElementById('animation_fourground_machine_0_monitor').classList.remove('display_none');
                    document.getElementById('animation_fourground_machine_0_monitor').classList.add('display');
                    clearInterval(start_animation);
                };

                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};


let HANDLE_animation_start_4 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0)) {
                    state.ui.gui.top_left.display = true;
                };

                //clearInterval(start_animation)
                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_continue_1 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);
                if (interval == (state.animation.framerate * 0)) {
                    //alert('4 seconds have passed.')
                    document.getElementById('animation_fourground_man_layer_1').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_2').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_3').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_4').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_5').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_6').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_7').style = 'bottom: ' + 0 + '%;';
                    document.getElementById('animation_fourground_man_layer_8').style = 'bottom: ' + 0 + '%;';

                    document.getElementById('animation_fourground_furniture_layer_1').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_2').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_3').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_4').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_5').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_6').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_7').style = 'top: ' + 0 + '%;';
                    document.getElementById('animation_fourground_furniture_layer_8').style = 'top: ' + 0 + '%;';
                };

                clearInterval(start_animation)
                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_continue_2 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0) ) {
                    //alert('1 seconds have passed.')

                    document.getElementById('animation_fourground_man_2').style = 'bottom: ' + -100 + '%;' + 'right: ' + -100 + '%;';
                };

                //clearInterval(start_animation)
                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_continue_3 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0) ) {
                    //alert('1 seconds have passed.')

                    document.getElementById('animation_fourground_man_layer_1').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_2').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_3').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_4').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_5').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_6').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_7').style = 'bottom: ' + -100 + '%;';
                    document.getElementById('animation_fourground_man_layer_8').style = 'bottom: ' + -100 + '%;';
                    
                };

                //clearInterval(start_animation)
                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_continue_4 = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);

                if (interval == (state.animation.framerate * 0) ) {
                    //alert('1 seconds have passed.')
                    document.getElementById('animation_fourground_man_2').style = 'bottom: ' + -100 + '%;' + 'right: ' + -100 + '%;';
                };

                //clearInterval(start_animation)
                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_enter = () => {

    (function() {
        let interval = 0;
        
        let start_animation =
        setInterval(
            function() {
          
                console.log('current frame is: ' + interval);


                if (interval == (state.animation.framerate * 0)) {                                
                    document.getElementById('logo_container').classList.remove('display');
                    document.getElementById('logo_container').classList.add('display_none');
                    document.getElementById('title_screen').classList.remove('display');
                    document.getElementById('title_screen').classList.add('display_none');
                };
                
                //clearInterval(start_animation)
                interval += 1;

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation_eyes = () => {

            // foreground man
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_1');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_2');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_3');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_4');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_5');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_6');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_7');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_8');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_9');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_10');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_11');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_12');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_13');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_14');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_15');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_16');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_17');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_18');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_19');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_20');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_21');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_22');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_23');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_24');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_25');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_26');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_27');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_28');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_29');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_30');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_31');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_32');

            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_33');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_34');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_35');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_36');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_37');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_38');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_39');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_40');

            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_41');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_42');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_43');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_44');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_45');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_46');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_47');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_48');

            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_49');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_50');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_51');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_52');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_53');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_54');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_55');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_56');

            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_57');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_58');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_59');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_60');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_61');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_62');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_63');
            document.getElementById('animation_fourground_man_2_svg').classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_64');



};


let HANDLE_animation_action = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_man_2_svg');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_0');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200_face_0');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    }
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};


let HANDLE_animation_action_layer_8_start = () => {
    //alert('yup');

     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_man_layer_1_svg');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_200');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('pulse');

                            //HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    }
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_action_layer_8_end = () => {
    //alert('yup');

     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_man_layer_1_svg');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.remove('pulse');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_200');

                            //HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    }
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_1 = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_1');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('width_50');
                            MANIPULATED.classList.remove('left_-1205');
                            MANIPULATED.classList.add('width_75');
                            MANIPULATED.classList.add('left_0');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_1_return = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_1');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                    
                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.add('width_50');
                            MANIPULATED.classList.add('left_-1205');
                            MANIPULATED.classList.remove('width_75');
                            MANIPULATED.classList.remove('left_0');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };
                        

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};


let HANDLE_animation_fold_2 = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_2');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('width_50');
                            MANIPULATED.classList.remove('left_0');
                            MANIPULATED.classList.add('width_75');
                            MANIPULATED.classList.add('left_1205');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_2_return = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_2');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                    
                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.add('width_50');
                            MANIPULATED.classList.add('left_0');
                            MANIPULATED.classList.remove('width_75');
                            MANIPULATED.classList.remove('left_1205');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };
                        

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};


let HANDLE_animation_fold_3 = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_3');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('width_50');
                            MANIPULATED.classList.remove('left_1205');
                            MANIPULATED.classList.add('width_75');
                            MANIPULATED.classList.add('left_25');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_3_return = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_3');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                    
                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.add('width_50');
                            MANIPULATED.classList.add('left_1205');
                            MANIPULATED.classList.remove('width_75');
                            MANIPULATED.classList.remove('left_25');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };
                        

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};


let HANDLE_animation_fold_4 = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_4');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('width_50');
                            MANIPULATED.classList.remove('right_1205');
                            MANIPULATED.classList.add('width_75');
                            MANIPULATED.classList.add('right_25');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_4_return = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_4');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                    
                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.add('width_50');
                            MANIPULATED.classList.add('right_1205');
                            MANIPULATED.classList.remove('width_75');
                            MANIPULATED.classList.remove('right_25');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };
                        

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};


let HANDLE_animation_fold_5 = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_5');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('width_50');
                            MANIPULATED.classList.remove('right_0');
                            MANIPULATED.classList.add('width_75');
                            MANIPULATED.classList.add('right_1205');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_5_return = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_5');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                    
                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.add('width_50');
                            MANIPULATED.classList.add('right_0');
                            MANIPULATED.classList.remove('width_75');
                            MANIPULATED.classList.remove('right_1205');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };
                        

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_6 = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_6');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';

                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.remove('width_50');
                            MANIPULATED.classList.remove('right_-1205');
                            MANIPULATED.classList.add('width_75');
                            MANIPULATED.classList.add('right_0');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};

let HANDLE_animation_fold_6_return = () => {
     (function() {
        let HANDLE_animation_action_current_frame = 0;
        let HANDLE_animation_action_starter =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('animation_fourground_machine_6');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                    
                        if (HANDLE_animation_action_current_frame == 0) {
                            MANIPULATED.classList.add('width_50');
                            MANIPULATED.classList.add('right_-1205');
                            MANIPULATED.classList.remove('width_75');
                            MANIPULATED.classList.remove('right_0');
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                        };

                        if (HANDLE_animation_action_current_frame == 1) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                        };

                        if (HANDLE_animation_action_current_frame == 2) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                        };

                        if (HANDLE_animation_action_current_frame == 3) {
                            MANIPULATED.classList.remove('piece_workspace');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('piece_workspace');

                            HANDLE_animation_action_current_frame = 0;
                            clearInterval(HANDLE_animation_action_starter)
                        };
                        

                        HANDLE_animation_action_current_frame += 1;
                    };
                
            }, (2000 / state.animation.framerate));

            HANDLE_animation_action_starter
        
    }());

};


let HANDLE_animation_loading = () => {
     (function() {
        let current_frame = 0;
        let start_animation =
        setInterval(
            function() {
                let MANIPULATED = document.getElementById('paint_animation');
                
                    if (MANIPULATED != null) {
                        MANIPULATED.innerHTML = '';
                        if (current_frame == 0) {
                            HANDLE_animation_null();
                        };

                        if (current_frame == 1) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_1');
                        };
                        if (current_frame == 2) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_2');
                        };
                        if (current_frame == 3) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_3');
                        };
                        if (current_frame == 4) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_4');
                        };

                        if (current_frame == 5) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_5');
                        };

                        if (current_frame == 6) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_6');
                        };
                        if (current_frame == 7) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_7');
                        };
                        if (current_frame == 8) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_8');
                        };
                        if (current_frame == 9) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_9');
                        };
                        if (current_frame == 10) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_10');
                        };
                        if (current_frame == 11) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_11');
                        };
                        if (current_frame == 12) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('nownigel_gui_interaction_hands_0_0_depth_200_12');
                        };
                        if (current_frame == 13) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_1');
                        };
                        if (current_frame == 14) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_2');
                        };
                        if (current_frame == 15) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_3');
                        };
                        if (current_frame == 16) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_4');
                        };
                        if (current_frame == 17) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_5');
                        };
                        if (current_frame == 18) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_6');
                        };
                        if (current_frame == 19) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_7');
                        };

                        if (current_frame == 20) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.remove('bg_yellow');
                            MANIPULATED.classList.add('gui_paint_8');
                        };


                        if (current_frame == 21) {
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_1');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_2');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_3');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_4');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_5');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_6');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_7');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_8');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_9');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_10');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_11');
                            MANIPULATED.classList.remove('nownigel_gui_interaction_hands_0_0_depth_200_12');
                            MANIPULATED.classList.remove('gui_paint_1');
                            MANIPULATED.classList.remove('gui_paint_2');
                            MANIPULATED.classList.remove('gui_paint_3');
                            MANIPULATED.classList.remove('gui_paint_4');
                            MANIPULATED.classList.remove('gui_paint_5');
                            MANIPULATED.classList.remove('gui_paint_6');
                            MANIPULATED.classList.remove('gui_paint_7');
                            MANIPULATED.classList.remove('gui_paint_8');
                            MANIPULATED.classList.add('bg_yellow');

                            current_frame = 0;
                            clearInterval(start_animation)
                        };

                        current_frame += 1;
                    }
                
            }, (2000 / state.animation.framerate));

            start_animation
        
    }());

};

let Handle_clear_scene = () => {
    document.getElementById('animation_fourground_furniture_layer_1').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_2').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_3').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_4').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_5').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_6').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_7').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_8').style = 'top: ' + -100 + '%;';

    document.getElementById('animation_fourground_man_layer_1').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_2').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_3').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_4').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_5').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_6').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_7').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_8').style = 'bottom: ' + -100 + '%;';

    document.getElementById('animation_fourground_machine_layer_0').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';
};


let Handle_return_scene = () => {
    document.getElementById('animation_fourground_furniture_layer_1').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_2').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_3').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_4').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_5').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_6').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_7').style = 'top: ' + 0 + '%;';
    document.getElementById('animation_fourground_furniture_layer_8').style = 'top: ' + 0 + '%;';

    document.getElementById('animation_fourground_man_layer_1').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_2').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_3').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_4').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_5').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_6').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_7').style = 'bottom: ' + 0 + '%;';
    document.getElementById('animation_fourground_man_layer_8').style = 'bottom: ' + 0 + '%;';

    document.getElementById('animation_fourground_machine_layer_0').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + 0 + '%';

    // page
    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.bottom.transform = true;

    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.bottom.transform = true;

    state.ui.modal.overlay.left.transform = true;
    state.ui.modal.overlay.right.transform = true;
    state.ui.modal.overlay.top.transform = true;
    state.ui.modal.overlay.bottom.transform = true;

    setTimeout( () => {                              
        state.ui.modal.page.left.display = true;
        state.ui.modal.page.right.display = true;
        state.ui.modal.page.top.display = true;
        state.ui.modal.page.bottom.display = true;

        state.ui.modal.pop.left.display = true;
        state.ui.modal.pop.right.display = true;
        state.ui.modal.pop.top.display = true;
        state.ui.modal.pop.bottom.display = true;

        state.ui.modal.overlay.left.display = true;
        state.ui.modal.overlay.right.display = true;
        state.ui.modal.overlay.top.display = true;
        state.ui.modal.overlay.bottom.display = true;
    }, 1000);


};

let Handle_beginning_scene = () => {

    document.getElementById('component_app_bg_1').classList.remove('opacity_1');
    document.getElementById('component_app_bg_1').classList.add('opacity_0');

    document.getElementById('component_app_bg_2').classList.remove('opacity_1');
    document.getElementById('component_app_bg_2').classList.add('opacity_0');

    document.getElementById('component_app_bg_3').classList.remove('opacity_1');
    document.getElementById('component_app_bg_3').classList.add('opacity_0');
    
    document.getElementById('component_app_bg_4').classList.remove('opacity_1');
    document.getElementById('component_app_bg_4').classList.add('opacity_0');
    
    document.getElementById('component_app_bg_5').classList.remove('opacity_1');
    document.getElementById('component_app_bg_5').classList.add('opacity_0');
    
    document.getElementById('component_app_bg_6').classList.remove('opacity_1');
    document.getElementById('component_app_bg_6').classList.add('opacity_0');

    document.getElementById('animation_fourground_furniture_layer_1').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_2').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_3').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_4').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_5').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_6').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_7').style = 'top: ' + -100 + '%;';
    document.getElementById('animation_fourground_furniture_layer_8').style = 'top: ' + -100 + '%;';

    document.getElementById('animation_fourground_man_layer_1').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_2').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_3').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_4').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_5').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_6').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_7').style = 'bottom: ' + -100 + '%;';
    document.getElementById('animation_fourground_man_layer_8').style = 'bottom: ' + -100 + '%;';

    document.getElementById('animation_fourground_machine_layer_0').style = 'bottom: ' + 0 + '%';
    document.getElementById('animation_fourground_machine_layer_1').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_2').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_3').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_4').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_5').style = 'bottom: ' + -100 + '%';
    document.getElementById('animation_fourground_machine_layer_6').style = 'bottom: ' + -100 + '%';

    document.getElementById('logo_type_and_buttons_container').classList.remove('display_none');
    document.getElementById('logo_type_and_buttons_container').classList.add('display');

    document.getElementById('logo_buttons').classList.remove('display_none');
    document.getElementById('logo_buttons').classList.add('display');

    document.getElementById('title_screen').classList.remove('display_none');
    document.getElementById('title_screen').classList.add('display');

    document.getElementById('logo_container').classList.remove('display_none');
    document.getElementById('logo_container').classList.add('display');

    // page
    state.ui.modal.page.left.transform = true;
    state.ui.modal.page.right.transform = true;
    state.ui.modal.page.top.transform = true;
    state.ui.modal.page.bottom.transform = true;

    state.ui.modal.pop.left.transform = true;
    state.ui.modal.pop.right.transform = true;
    state.ui.modal.pop.top.transform = true;
    state.ui.modal.pop.bottom.transform = true;

    state.ui.modal.overlay.left.transform = true;
    state.ui.modal.overlay.right.transform = true;
    state.ui.modal.overlay.top.transform = true;
    state.ui.modal.overlay.bottom.transform = true;

    setTimeout( () => {                              
        state.ui.modal.page.left.display = true;
        state.ui.modal.page.right.display = true;
        state.ui.modal.page.top.display = true;
        state.ui.modal.page.bottom.display = true;

        state.ui.modal.pop.left.display = true;
        state.ui.modal.pop.right.display = true;
        state.ui.modal.pop.top.display = true;
        state.ui.modal.pop.bottom.display = true;

        state.ui.modal.overlay.left.display = true;
        state.ui.modal.overlay.right.display = true;
        state.ui.modal.overlay.top.display = true;
        state.ui.modal.overlay.bottom.display = true;
    }, 1000);


};

let HANDLE_animations_init = () => {
     let component_animation = 0;
    // overall site frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (24 * 1) ) {
                    component_animation = (component_animation + 1);
                };

                // you do not hesitate
                if (component_animation == 1) {
                    console.log('6');
                    HANDLE_animation_start_1();
                    HANDLE_animation_after_move();
                };

                interval += 1;
                //console.log('current frame is: ' + interval);

            }, (1000 / state.animation.framerate));
    }());

};


let HANDLE_animations_start = () => {
     let component_animation = 0;
    // overall site frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (24 * 1) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 2) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 3) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 4) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 5) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 6) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 7) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 8) ) {
                    component_animation = (component_animation + 1);
                };

                // you do not hesitate
                if (component_animation == 1) {
                    console.log('6');
                    HANDLE_animation_start_4();
                };

                if (component_animation == 2) {
                    console.log('6');
                    HANDLE_animation_start_3();
                };

                if (component_animation == 3) {
                    console.log('6');
                    HANDLE_animation_enter();
                };
                // seven
                if (component_animation == 4) {
                    console.log('7');
                    HANDLE_animation_start_2();
                };

                interval += 1;
                //console.log('current frame is: ' + interval);

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animations_learn = () => {
     let component_animation = 0;
    // overall site frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (24 * 1) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 2) ) {
                    component_animation = (component_animation + 1);
                };

                // eight
                if (component_animation == 1) {
                    console.log('8');
                    HANDLE_animation_continue_1();
                };
                // nine
                if (component_animation == 2) {
                    console.log('9');
                    HANDLE_animation_continue_2();
                };

                interval += 1;
                //console.log('current frame is: ' + interval);

            }, (1000 / state.animation.framerate));
    }());

};


let HANDLE_animations_enter = () => {
     let component_animation = 0;
    // overall site frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (24 * 1) ) {
                    component_animation = (component_animation + 1);
                };

                if (interval == (24 * 2) ) {
                    component_animation = (component_animation + 1);
                };
                // nine
                if (component_animation == 1) {
                    console.log('9');
                    HANDLE_animation_continue_3();
                };
                // nine
                if (component_animation == 2) {
                    console.log('9');
                    HANDLE_animation_continue_4();
                };

                interval += 1;
                //console.log('current frame is: ' + interval);

            }, (1000 / state.animation.framerate));
    }());

};

let HANDLE_animation = () => {

        // overall site frames by 24 frames
        (function() {
            let interval = 0;
            setInterval(
                function() {

                    // After "24 frames"
                    if (interval == (24 * 1) ) {
                        HANDLE_animation_null();
                        console.log("handle animation null")
                    };

                    if (interval == (24 * 2) ) {
                        HANDLE_animation_loading();
                        console.log("handle animation loading")
                    };

                    if (interval == (24 * 3) ) {
                    };

                    if (interval == (24 * 4) ) {
                    };

                    if (interval == (24 * 5) ) {
                    };

                    if (interval == (24 * 6) ) {
                    };

                    if (interval == (24 * 7) ) {
                    };

                    if (interval == (24 * 8) ) {
                    };

                    if (interval == (24 * 9) ) {
                    };

                    if (interval == (24 * 10) ) {
                    };

                    if (interval == (24 * 11) ) {
                        //alert('all done');
                    };

                    interval += 1;
                    state.animation.scene += 1;
                    //console.log('current frame is: ' + interval);

                }, (1000 / state.animation.framerate));
        }());

        /*
        // Interaction Layer
        (function() {
            let interval = 1;
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('paint_animation');
                    
                        if (MANIPULATED != null) {
                            MANIPULATED.innerHTML = '';
                            if (interval == 1) {
                                MANIPULATED.classList.remove('bg_yellow');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('bg_yellow');
                            };
                            if (interval == 2) {
                                MANIPULATED.classList.remove('bg_yellow');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                            };
                            if (interval == 3) {
                                MANIPULATED.classList.remove('bg_yellow');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                            };
                            if (interval == 4) {
                                MANIPULATED.classList.remove('bg_yellow');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                                interval = 0;
                            };

                            interval += 1;
                        }
                    
                }, (1000 / state.animation.framerate));
        }());
        
        // Accent Layer
        (function() {
            let interval = 1;
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('component_app_accent_opacity');
                    
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
                                interval = 0;
                            };

                            interval += 1;
                        }
                    
                }, (1000 / state.animation.framerate));
        }());

        // Back Ground Layer
        (function() {
            let interval = 1;
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('animation_fourground_man_layer_1');
                    
                        if (MANIPULATED != null) {
                            MANIPULATED.innerHTML = '';
                            if (interval == 1) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_200');
                            };
                            if (interval == 2) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                            };
                            if (interval == 3) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                            };
                            if (interval == 4) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                                interval = 0;
                            };

                            interval += 1;
                        }
                    
                }, (1000 / state.animation.framerate));
        }());

        // Mid ground Layer
        (function() {
            let interval = 1;
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('animation_fourground_man_2');
                    
                        if (MANIPULATED != null) {
                            MANIPULATED.innerHTML = '';
                            if (interval == 1) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_200');
                            };
                            if (interval == 2) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                            };
                            if (interval == 3) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                            };
                            if (interval == 4) {
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_200');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                                interval = 0;
                            };

                            interval += 1;
                        }
                    
                }, (1000 / state.animation.framerate));
        }());

        // Interaction Layer
        (function() {
            let interval = 1;
            setInterval(
                function() {
                    let MANIPULATED = document.getElementById('animation_fourground_logo');
                    
                        if (MANIPULATED != null) {
                            MANIPULATED.innerHTML = '';
                            if (interval == 1) {
                                MANIPULATED.classList.remove('nownigel_gui_logo_type');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_logo_type');
                            };
                            if (interval == 2) {
                                MANIPULATED.classList.remove('nownigel_gui_logo_type');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_25');
                            };
                            if (interval == 3) {
                                MANIPULATED.classList.remove('nownigel_gui_logo_type');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_50');
                            };
                            if (interval == 4) {
                                MANIPULATED.classList.remove('nownigel_gui_logo_type');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_100');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_50');
                                MANIPULATED.classList.remove('nownigel_gui_interaction_man_0_16_depth_25');
                                MANIPULATED.classList.add('nownigel_gui_interaction_man_0_16_depth_100');
                                interval = 0;
                            };

                            interval += 1;
                        }
                    
                }, (1000 / state.animation.framerate));
        }());
        */
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


// Create
let addListings = (child) => {

    let default_item = {
        id: 0,
        title: document.getElementById('element_input_title').value,
        subtitle: document.getElementById('element_input_subtitle').value,
        paragraph: document.getElementById('element_input_paragraph').value,
        category: document.getElementById('element_input_category').value,
        tag: document.getElementById('element_input_tag').value,
        type: document.getElementById('element_input_type').value,
        feature: [{
            title: "interaction_workspace_man_standing_1"
        }, {
            title: "interaction_workspace_man_standing_2"
        }, {
            title: "interaction_workspace_man_standing_3"
        }, {
            title: "interaction_workspace_man_standing_4"
        }, {
            title: "interaction_workspace_man_standing_5"
        }, {
            title: "interaction_workspace_man_standing_6"
        }, {
            title: "interaction_workspace_man_standing_7"
        }, {
            title: "interaction_workspace_man_standing_8"
        }, {
            title: "interaction_workspace_man_standing_9"
        }, {
            title: "interaction_workspace_man_standing_10"
        }, {
            title: "interaction_workspace_man_standing_11"
        }, {
            title: "interaction_workspace_man_standing_12"
        }, {
            title: "interaction_workspace_man_standing_13"
        }, {
            title: "interaction_workspace_man_standing_14"
        }, {
            title: "interaction_workspace_man_standing_15"
        }, {
            title: "interaction_workspace_man_standing_16"
        }],
        categories: [{
            title: "developer"
        }, {
            title: "design"
        }, {
            title: "graphic"
        }, {
            title: "motion"
        }, {
            title: "strategy"
        }, {
            title: "content"
        }],
        tags: [{
            title: "developer"
        }, {
            title: "design"
        }, {
            title: "graphic"
        }, {
            title: "motion"
        }, {
            title: "strategy"
        }, {
            title: "content"
        }],
        character: "interaction_workspace_man_standing_1",
        author: {
            "profile_picture": "photo_person1",
        },

        dislikes: 0,
        likes: 0,
        views: 0,
        meh: 0,
        previews: 0,
        "abilities": [{
            "fullname": "4240",
            "id": "-LGHD8-62MwWnnPzUw7g",
            "likescount": 0,
            "title": "dummy420",
            "employers": [{
                "fullname": "4240",
                "id": "-LGHD8-62MwWnnPzUw7g",
                "likescount": 0,
                "title": "dummy420"
            }, {
                "fullname": "420",
                "id": "-LGHD8-62MwWnn23",
                "likescount": 0,
                "title": "dummy420"
            }],
        }, {
            "fullname": "420",
            "id": "-LGHD8-62MwWnn23",
            "likescount": 0,
            "title": "dummy420",
            "employers": [{
                "fullname": "4240",
                "id": "-LGHD8-62MwWnnPzUw7g",
                "likescount": 0,
                "title": "dummy420"
            }, {
                "fullname": "420",
                "id": "-LGHD8-62MwWnn23",
                "likescount": 0,
                "title": "dummy420"
            }],
        }],
        "info": {
            "subtitle": "and 3d animator",
            "summary": "If the formula doesn't work, we change the formula.",
            "testimonials": [{
                "experience": 7,
                "id": 1
            }],
        }
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

let find_sort = () => {

    if ( (document.getElementById('element_input_sort')) != null ) {
        if ((document.getElementById('element_input_sort').value) == 'likesup' || '') {
            return function(a, b) {
                return a.likes - b.likes
            }
        };
        if ((document.getElementById('element_input_sort').value) == 'likesdown') {
            return function(a, b) {
                return b.likes - a.likes
            }
        };
    };
};

let find_view = () => {

    if ( (document.getElementById('element_input_view')) != null ) {

        if ((document.getElementById('element_input_view').value == 'card') || (document.getElementById('element_input_view').value == '')) {
            document.getElementById('element_ol_firebase_library').classList.add('card');
            document.getElementById('element_ol_firebase_library').classList.remove('grid');
            document.getElementById('element_ol_firebase_library').classList.remove('list');
        };

        if ((document.getElementById('element_input_view').value) == 'grid') {
            document.getElementById('element_ol_firebase_library').classList.add('grid');
            document.getElementById('element_ol_firebase_library').classList.remove('card');
            document.getElementById('element_ol_firebase_library').classList.remove('list');
        };

        if ((document.getElementById('element_input_view').value) == 'list') {
            document.getElementById('element_ol_firebase_library').classList.add('list');
            document.getElementById('element_ol_firebase_library').classList.remove('card');
            document.getElementById('element_ol_firebase_library').classList.remove('grid');
        };
    };
};

let find_type = () => {

    if ( (document.getElementById('element_input_type')) != null ) {

        if ((document.getElementById('element_input_type').value == 'ux') || (document.getElementById('element_input_type').value == '')) {
            document.getElementById('element_ol_firebase_library').classList.add('ux');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        };

        if ((document.getElementById('element_input_type').value) == 'code') {
            document.getElementById('element_ol_firebase_library').classList.add('code');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };

        if ((document.getElementById('element_input_type').value) == 'gallery') {
            document.getElementById('element_ol_firebase_library').classList.add('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };

        if ((document.getElementById('element_input_type').value) == 'video') {
            document.getElementById('element_ol_firebase_library').classList.add('video');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };

        if ((document.getElementById('element_input_type').value) == 'read') {
            document.getElementById('element_ol_firebase_library').classList.add('read');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };

        if ((document.getElementById('element_input_type').value) == 'graphic') {
            document.getElementById('element_ol_firebase_library').classList.add('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };

        if ((document.getElementById('element_input_type').value) == 'photo') {
            document.getElementById('element_ol_firebase_library').classList.add('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };

        if ((document.getElementById('element_input_type').value) == 'slider') {
            document.getElementById('element_ol_firebase_library').classList.add('slider');
            document.getElementById('element_ol_firebase_library').classList.remove('video');
            document.getElementById('element_ol_firebase_library').classList.remove('photo');
            document.getElementById('element_ol_firebase_library').classList.remove('graphic');
            document.getElementById('element_ol_firebase_library').classList.remove('read');
            document.getElementById('element_ol_firebase_library').classList.remove('gallery');
            document.getElementById('element_ol_firebase_library').classList.remove('code');
            document.getElementById('element_ol_firebase_library').classList.remove('ux');
        };
    };
};

if ( (document.getElementById('component_app_body')) != null ) {
    console.log('component_app_body' + 'is live');
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
        console.log(localStorage.username);
        console.log(localStorage.userid);
        console.log(localStorage.userpassword);
        console.log(localStorage.useremail);
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

	    // Localize data
	    if (localStorage.userid == undefined) {
	        alert('welcome first timer');
	        localStorage.setItem("username", 'username');
	        localStorage.setItem("userid", Math.floor(Math.random() * 99999) + 1);
	        localStorage.setItem("userpassword", 'userpassword');
	        localStorage.setItem("useremail", 'useremail');
	    };

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
                
                if (state.events.mouse.enter == true) {
                    state.events.mouse.leavetimer = 0;
                    state.ui.gui.fold.timeout.display = false; 
                    state.ui.colors.grid_cross.display = true;
                    state.ui.gui.fold.pause.display = false;

                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                }

                if (state.events.mouse.enter == false) {
                    state.events.mouse.leavetimer += 1;
                    state.ui.colors.grid_cross.display = false;
                    state.ui.gui.fold.pause.display = true;
                    console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);
                    
                    if ((document.getElementById('timer_mouse_leave')) != null ) {
                        document.getElementById('timer_mouse_leave').innerHTML = (state.events.mouse.leavetimer)
                    }
                }

                if (state.events.mouse.leavetimer == 5) {
                    state.ui.gui.fold.timeout.display = true;                    
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
    Handle_return_state,
    Handle_get_state_from_events,
    Handle_check_route,
    HANDLE_animation,
    HANDLE_animations,
    HANDLE_animation_null,
    HANDLE_animation_idle,
    HANDLE_animation_loading,
    HANDLE_animation_start_1,
    HANDLE_animation_start_2,
    HANDLE_animation_start_3,
    HANDLE_animation_start_4,
    HANDLE_animation_begin,
    HANDLE_animation_enter,
    HANDLE_animation_continue_1,
    HANDLE_animation_continue_2,
    HANDLE_animation_continue_3,
    HANDLE_animation_continue_4,
    HANDLE_animation_fold_1,
    HANDLE_animation_fold_1_return,
    HANDLE_animation_fold_2,
    HANDLE_animation_fold_2_return,
    HANDLE_animation_fold_3,
    HANDLE_animation_fold_3_return,
    HANDLE_animation_fold_4,
    HANDLE_animation_fold_4_return,
    HANDLE_animation_fold_5,
    HANDLE_animation_fold_5_return,
    HANDLE_animation_fold_6,
    HANDLE_animation_fold_6_return,
    HANDLE_animation_title,
    HANDLE_animation_action,
    HANDLE_animation_action_layer_8_start,
    HANDLE_animation_action_layer_8_end,
    HANDLE_animation_eyes,
    HANDLE_animation_after_move,
HANDLE_animation_before_move,
Handle_clear_scene,
Handle_return_scene,
HANDLE_animations_init,
Handle_beginning_scene
}