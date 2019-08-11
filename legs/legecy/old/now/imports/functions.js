import from_index from '../index.js';

let state = '';

let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('div');
    ELEMENT.setAttribute("id", id_String);

    if (class_String) {
        ELEMENT.classList = class_String;
    };

    if (class_String) {
        ELEMENT.classList = class_String;
    };
                        
    if ((data_Object) != null) {

        ELEMENT.innerHTML = `
            ${data_Object}
        `;
    };

    return ELEMENT
};

let Generate_new_li = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", id_String);

    if (class_String) {
        ELEMENT.classList = class_String;
    };

    if (class_String) {
        ELEMENT.classList = class_String;
    };
                        
    if ((data_Object) != null) {

        ELEMENT.innerHTML = `
            ${data_Object}
        `;
    };

    return ELEMENT
};

let Generate_new_post = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('div');
    ELEMENT.setAttribute("id", id_String);

    ELEMENT.classList = "position_relative float_left calc_2vw_width border_1vw_grey bg_white ";
                        
    if ((data_Object) != null) {

        if (data_Object.child == 'library') {

                if (data_Object.title) {
                    ELEMENT.innerHTML += `
                            
                        <div id="post_component" class="position_relative float_right height_20vw width_100">
                            
                            <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post stats
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_green">
                                <div class="position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey">
                                    <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                            </div>

                            <div class="hover_show position_absolute top_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post interaction
                                </div>
                            </div>

                        </div>

                    `;
                };

                if (data_Object.title) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                title: ${data_Object.title}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                time: ${data_Object.time}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                <div>Like/Dislike</div>
                                <div>Comment</div>
                                <div>Rate</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>Delete</div>
                            </div>
                    `;
                };


                ELEMENT.addEventListener("click", function(event) {

                    state = from_index.Handle_return_state();

                    document.getElementById('component_app_modal_element_pop_left_component_here').innerHTML = ``;
                    document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div'))
                    );
                    document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(`<div class=" width_100 height_100vh float_left position_relative"></div>`, 'Generate_new_div'))
                    );

                    state.ui.modal.pop.left.transform = false;
                    state.ui.modal.pop.left.display = true;
                    from_index.Handle_ui_from_functions();
                });

        };

        if (data_Object.child == 'roster') {

                if (data_Object.username) {
                    ELEMENT.innerHTML += `
                            
                        <div id="post_component" class="position_relative float_right height_20vw width_100">
                            
                            <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post stats
                                </div>
                            </div>

                            <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_green">
                                <div class="position_absolute bottom_0 left_0 calc_1vw_height width_100 border_bottom_1vw_grey">
                                    <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                            </div>

                            <div class="hover_show position_absolute top_100 left_0 height_6025vw width_100">
                                <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey color_white bg_grey">
                                    Post interaction
                                </div>
                            </div>

                        </div>

                    `;
                };

                if (data_Object.username) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                username: ${data_Object.username}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                time: ${data_Object.time}
                            </div>
                    `;
                };

                if (data_Object.time) {
                    ELEMENT.innerHTML += `
                            <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                                <div>Like/Dislike</div>
                                <div>Comment</div>
                                <div>Rate</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>Delete</div>
                            </div>
                    `;
                };


                ELEMENT.addEventListener("click", function(event) {

                    state = from_index.Handle_return_state();

                    document.getElementById('component_app_modal_element_pop_left_component_here').innerHTML = ``;
                    document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(data_Object.id, 'Generate_new_div'))
                    );
                    document.getElementById('component_app_modal_element_pop_left_component_here').appendChild(
                        Generate_new_fragment.appendChild(Generate_new_div(`<div class=" width_100 height_100vh float_left position_relative"></div>`, 'Generate_new_div'))
                    );

                    state.ui.modal.pop.left.transform = false;
                    state.ui.modal.pop.left.display = true;
                    from_index.Handle_ui_from_functions();
                });
        };
        
    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].addEventListener("click", function(event) {
        //alert(data_Object);
    });


    let CONTAINER_ELEMENT = document.createElement('li');
    CONTAINER_ELEMENT.setAttribute("id", id_String);

    CONTAINER_ELEMENT.classList = "position_relative float_left width_33flex";

    CONTAINER_ELEMENT.appendChild(Generate_new_fragment.appendChild(ELEMENT));

    return CONTAINER_ELEMENT
};

let Generate_test = () => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", 'Generate_test');

    ELEMENT.classList = "width_100 float_left position_relative";
    
    ELEMENT.innerHTML = "test";

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.addEventListener("click", function(event) {
        //alert("Generate_test");
    });

    return ELEMENT
};

let Generate_validated_user = (data_Object, id_String, class_String) => {

    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", id_String);

    ELEMENT.classList = "width_100 float_left position_relative";

    if ((data_Object) != null) {

            if (data_Object.username) {
                ELEMENT.innerHTML += `

                <div id="post_component" class="position_relative float_right height_10vw width_100">
                    
                    <div class="position_absolute bottom_0 left_0 height_100 width_100 bg_white">
                        <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                            <div id="bg-character" class="gui_character_face position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                        </div>
                    </div>

                    <div class="hover_show position_absolute bottom_100 left_0 height_6025vw width_100">
                        <div class="position_absolute bottom_0 left_0 calc_2vh border_1vh_grey">
                        </div>
                    </div>

                </div>

                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                    username: ${data_Object.username}
                </div>
                `
            };
                
            if (data_Object.password) {
                    ELEMENT.innerHTML += `
                    <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                        password: ${data_Object.password}
                    </div>
                `
            };
                
            if (data_Object.time) {
                    ELEMENT.innerHTML += `
                <div id="post_component" class="width_100 float_left position_relative display opacity_1">
                    time: ${data_Object.time}
                </div>
                `
            };

                ELEMENT.appendChild(
                    Generate_new_fragment.appendChild(Generate_test())
                );
    };


    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].addEventListener("click", function(event) {
        //alert(data_Object);
    });

    return ELEMENT
};

// Handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

    // Function Check # 1
    (function() {
        if (Ui_State == true) {
            function_one_if_state_true(id_tag);
        }

        if (Ui_State == false) {
            function_two_if_state_false(id_tag);
        }
    })();
};

let Toggle_classes_IF_State = (addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) => {

    let MANIPULATED = document.getElementById(id_Tag);

    if (MANIPULATED != null) {

        if (Ui_State == true) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

                // remove item after buffer
                setTimeout(function() {

                    MANIPULATED.classList.remove(addThisClass_if_state_false);
                    MANIPULATED.classList.add(addThisClass_if_state_true);

                }, 0);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 0);

                return;
            };
        };

    };
};

let Toggle_display_and_opacity_on_with_no_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 0);

            return;
        };
    };
};

let Toggle_display_and_opacity_off_with_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 0);

            return;
        };
    };
};

let HANDLE_looping_logo_mark = () => {

    state = from_index.Handle_return_state();
    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (1) ) {        
                        if (document.getElementById('logo_mark') != null) {
                                document.getElementById('logo_mark').classList = (`
                                    gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('logo_mark') != null) {
                                document.getElementById('logo_mark').classList = (`
                                    gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('logo_mark') != null) {
                                document.getElementById('logo_mark').classList = (`
                                    gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('logo_mark') != null) {
                                document.getElementById('logo_mark').classList = (`
                                    gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };

                        interval = 0;
                    };

                interval += 1;

            }, (1000 / 12));
    }());

};


let Handle_return_state_from_functions = () => {
    return state
};

export default {
    Handle_return_state_from_functions,
    HANDLE_looping_logo_mark,
    Toggle_functions_IF_State,
    Toggle_classes_IF_State,
    Toggle_display_and_opacity_on_with_no_delay,
    Toggle_display_and_opacity_off_with_delay,
    Generate_new_fragment,
    Generate_new_div,
    Generate_new_li,
    Generate_new_post,
    Generate_validated_user,
    Generate_test
}
