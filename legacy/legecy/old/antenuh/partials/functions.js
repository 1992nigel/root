
import from_index from '../index.js';
import imported_elements from './elements';

let state = '';

let from_Import = () => {
};

    let get_author_info = (prop_id) => {
      for (var roster_i = 0; roster_i < state.data.firebase.gnougn.roster.length; roster_i++) {
          console.log(state.data.firebase.gnougn.roster[roster_i]);
          
          if (state.data.firebase.gnougn.roster[roster_i].id == prop_id) {
            return state.data.firebase.gnougn.roster[roster_i];
          };
          
      };
    }

// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
    let g = document.createElement('div');
    g.setAttribute("id", idString);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
    let g = document.createElement('a');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
    let g = document.createElement('span');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_li = (data, misc, classString) => {
    console.log('title:' + data.title);
    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", data.title);

    if (classString) {
        ELEMENT.classList = classString;
    };

    state = from_index.Handle_return_state();

    let post_authors = ' ';

    // post authors
    if ((data.authors) != null) {
        
        for (var i = 0; i < data.authors.length; i++) {

        };

    };

    console.log(post_authors)
                        
    if ((data) != null) {

        if (data.child == 'library') {

            ELEMENT.innerHTML = `
                <li id="post_component" class="width_100 float_left position_relative display opacity_1">
                  
                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <p class="width_100 font_size_30125vw bg_pink">id:${data.id}</p>
                    <p class="width_100 font_size_30125vw bg_pink">title:${data.title}</p>
                    <p class="width_100 font_size_30125vw bg_pink">views:${data.views}</p>
                    <p class="width_100 font_size_30125vw bg_pink">likes:${data.likes}</p>
                    <p class="width_100">child:${data.child}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </li>
            `;

            for (var roster_i = 0; roster_i < data.authors.length; roster_i++) {
                //alert(data.authors[roster_i]);

                ELEMENT.innerHTML += `
                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">`;

                ELEMENT.innerHTML += `${"author: " + data.authors[roster_i]}`;

                    for (var library_i = 0; library_i < state.data.firebase.gnougn.library.length; library_i++) {
                        ELEMENT.innerHTML += `
                        <div id="comment" class="position_relative width_100 float_left display_flex_flow">${"post: " + state.data.firebase.gnougn.library[library_i].title}</div>`;
                    };


                ELEMENT.innerHTML += `
                  </div>`;
            };

            // comments
            for (var comment_i = 0; comment_i < data.comments.length; comment_i++) {
                //alert(data.comments[comment_i]);

                let COMMENT = document.createElement('li');
                
                COMMENT.innerHTML += `
                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">`;

                COMMENT.innerHTML += `${"comment " + ": # "+ [comment_i] + " - " + data.comments[comment_i].id + ", content: " + data.comments[comment_i].content}`;

                if ( (data.comments[comment_i].replies) != null) {
                    for (var reply_i = 0; reply_i < data.comments[comment_i].replies.length; reply_i++) {
                    
                        COMMENT.innerHTML += `<div id="reply_comment" class="position_relative width_100 float_left display_flex_flow hover_show">${"reply, id: " + data.comments[comment_i].replies[reply_i].id + "content: " + data.comments[comment_i].replies[reply_i].content}</div>`;
                    
                    };

                };
                COMMENT.innerHTML += `
                  </div>`;

                ELEMENT.appendChild(COMMENT);
            };

        };

        if (data.child == 'roster') {

          let preview_tags = ``;
          let preview_data = ``;

          preview_data = `
                <li id="post_component" class="width_100 float_left position_relative display opacity_1">

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <p class="width_100 font_size_30125vw bg_pink">id:${data.id}</p>
                    <p class="width_100 font_size_30125vw bg_pink">title:${data.title}</p>
                    <p class="width_100 font_size_30125vw bg_pink">views:${data.views}</p>
                    <p class="width_100 font_size_30125vw bg_pink">likes:${data.likes}</p>
                    <p class="width_100">child:${data.child}</p>
                  </div>

                  <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
                    <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
                  </div>

                </li>
            `;

            ELEMENT.innerHTML = `${preview_data + preview_tags}`;
            

            // comments
            for (var comment_i = 0; comment_i < data.comments.length; comment_i++) {
                //alert(data.comments[comment_i]);

                ELEMENT.innerHTML += `${"comment: " + data.comments[comment_i].id + ", content: " + data.comments[comment_i].content}`;

                if ( (data.comments[comment_i].replies) != null) {
                    for (var reply_i = 0; reply_i < data.comments[comment_i].replies.length; reply_i++) {
                    
                        ELEMENT.innerHTML += `<div id="reply_comment" class="position_relative width_100 float_left display_flex_flow">${"reply, id: " + data.comments[comment_i].replies[reply_i].id + "content: " + data.comments[comment_i].replies[reply_i].content}</div>`;
                    
                    };

                };
            };
        };
    };


    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].children[1].children[0].addEventListener("click", function(event) {
        from_index.likeWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[1].children[1].addEventListener("click", function(event) {
        from_index.dislikeWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[1].children[2].addEventListener("click", function(event) {
        from_index.viewWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[1].children[3].addEventListener("click", function(event) {
        from_index.deleteWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[1].children[2].addEventListener("click", function(event) {
     

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

            }, 1);

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
            }, 101);

            return;
        };
    };
};

// 1000 ms delay for bg items
let Toggle_stages_display_and_opacity_on_with_no_delay = (id) => {

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

            }, 1);

            return;
        };
    };
};

let Toggle_stages_display_and_opacity_off_with_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 1000);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 1001);

            return;
        };
    };
};


from_Import();

export default {
  from_Import,
  Generate_new_link,
    Generate_new_fragment,
    Generate_new_div,
    Generate_new_span,
    Generate_new_li,
    Toggle_functions_IF_State,
    Toggle_classes_IF_State,
    Toggle_display_and_opacity_on_with_no_delay,
    Toggle_display_and_opacity_off_with_delay,
    Toggle_stages_display_and_opacity_on_with_no_delay,
    Toggle_stages_display_and_opacity_off_with_delay
}
