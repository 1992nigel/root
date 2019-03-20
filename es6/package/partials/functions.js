
import from_index from '../index.js';

let state = '';

let from_Import = () => {
};

// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
    let g = document.createElement('div');
    g.setAttribute("id", idString + index);
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

let Generate_new_li = (data) => {
    console.log(data.title);
    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", data.title);
    ELEMENT.classList = data.title;

    state = from_index.Handle_return_state();
                        
    if ((data) != null) {

      ELEMENT.innerHTML = `
        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_25vh position_relative float_left">
          
            <div id="post_block_3">

              <h1>Meta:</h1>
              <p class="width_100">title:${data.id}</p>
              
            </div>

          </div>

          <div id="post_block_2" class="hover_show" >
              <h1>Meta:</h1>
              <p>id:${data.id}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">like</button>
            <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">view</button>
            <button class="font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left" id="">delete</button>
          </div>

        </div>

      `;

    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].children[2].children[0].addEventListener("click", function(event) {
        //from_index.likeWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[2].children[1].addEventListener("click", function(event) {
        //from_index.dislikeWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[2].children[2].addEventListener("click", function(event) {
        //from_index.viewWhoListings(data.child, data.id);
    });

    ELEMENT.children[0].children[2].children[3].addEventListener("click", function(event) {
        from_index.deleteWhoListings(data.child, data.id);
    });

    // view!!!
    ELEMENT.children[0].children[2].children[2].addEventListener("click", function(event) {
      alert('viewed')
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
