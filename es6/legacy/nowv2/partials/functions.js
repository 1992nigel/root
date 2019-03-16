
import from_index from '../index.js';
import imported_elements from './elements';

let state = '';

let from_Import = () => {
    console.log('from functions');
};


function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    throw('red');
  }
}

// rest parameters
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result
}

console.log(add(1)); // returns 1
console.log(add(1,2)); // returns 3
console.log(add(1, 2, 3, 4, 5)); // returns 15

const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
console.log(newArr);

let x = 20;
x = 50;

console.log(x); // SyntaxError: identifier "x" has already been declared.

// A Common Scope Gotcha
// If stamement do not have local sc
if (true) {
  var foo = 5;
};

console.log(foo);   // 5

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

function randomFunction(){
  console.log(this);
}

let newObj = {
  description : "This is a new Object"
}

console.log(randomFunction.bind(newObj)());
console.log(randomFunction.call(newObj));
console.log(randomFunction.apply(newObj));

const drSeuss = `
  My name is Sam I Am ${1}
  I do not like green eggs and ham
  Lunchtime is here
  Come and eat
`;

console.log(drSeuss);

// filter
function fishy(colors) {
  // use Array filter to find fruits in color
  let fishes = [
    { name: 'apple', color: 'red' },
    { name: 'strawberry', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'pineapple', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'plum', color: 'purple' }   ];

  return fishes.filter(f => f.color == color);
}

// EVERY
function test(colors) {
  let fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

  // condition: short way, all fruits must be red
  let isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
};

// SOME
function emu(colors) {
  let niggas = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

  // condition: if any fruit is red
  let isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
};

// es5
var es5sayHello = function() {
  return 'hello!';
};

// es6 with explicit return
let explicitsayHello = () => {
  return 'hello!';
};

// es6 with implicit return
let implicitsayHello = () => 'hello';

// Default Parameters in ES6
var garage = function(model = 'Mustang', color = 'blue', car = 'Ford') {
  console.log(model)
  console.log(color)
  console.log(car)
}

var ninjas = {
  description : "This is a new Object",
  randomFunction(){
    var that = this;

    return function() {
      console.log(that);
    }
  }
}

ninjas.randomFunction()();

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
                        
    if ((data.feature_style) == 'ux') {
      
      ELEMENT.innerHTML = `
        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if ((data.feature_style) == 'code') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if ((data.feature_style) == 'gallery') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if ((data.feature_style) == 'video') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };      

    if ((data.feature_style) == 'read') {
      
      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if ((data.feature_style) == 'graphic') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if ((data.feature_style) == 'photo') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if ((data.feature_style) == 'slider') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if (data.type == 'partners') {


      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if (data.type == 'services') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if (data.type == 'abilities') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;
    };

    if (data.type == 'skills') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    if (data.type == 'roster') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1">
          
          <div id="post_block_1" style="
           background-image: url(${data.feature_image_src}); background-size: cover;" class="width_100 height_100 position_relative float_left">
          
            <div id="post_block_3">
              <p>title:${data.title}</p>
              <p>likes:${data.likes}</p>
              <p>dislikes:${data.dislikes}</p>
            </div>

          </div>

          <div id="post_block_2">
            <p>title:${data.title}</p>
            <p>likes:${data.likes}</p>
            <p>dislikes:${data.dislikes}</p>
          </div>

          <div id="post_block_4" class="position_relative width_100 bg_white float_left display_flex_flow">
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">like</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">dislike</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">view</button>
            <button class="font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh" id="">delete</button>
          </div>

        </div>

      `;

    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

    ELEMENT.children[0].children[2].children[0].addEventListener("click", function(event) {
        from_index.likeWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[1].addEventListener("click", function(event) {
        from_index.dislikeWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[2].addEventListener("click", function(event) {
        from_index.viewWhoListings('library', data.id);
    });

    ELEMENT.children[0].children[2].children[3].addEventListener("click", function(event) {
        from_index.deleteWhoListings('library', data.id);
    });

     ELEMENT.children[0].children[2].children[2].addEventListener("click", function(event) {

            let preview = () => {

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

                    <div style="background-image: url(${data.feature_image_src}); background-size: cover;" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1">
                 
                    </div>
                  
                `
                let preview_title_container = `
                    <div class="position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 ">
                        ${data.title} ${data.type}
                    </div>
                `
                let preview_control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pop_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pop_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

                preview_content = `
                  <div class="position_relative float_left width_100 height_50vh margin_auto">
                      ${data.title} ${data.type}
                  </div>

                  <div class="position_relative float_left width_100 height_50vh margin_auto">
                      ${data.title} ${data.type}
                  </div>
                  
                  <div class="position_relative float_left width_100 height_50vh margin_auto">
                      ${data.title} ${data.type}
                  </div>

                  <div class="position_relative float_left width_100 height_50vh margin_auto">
                      ${data.title} ${data.type}
                  </div>
                  
                  <div class="position_relative float_left width_100 height_50vh margin_auto">
                      ${data.title} ${data.type}
                  </div>

                  <div class="position_relative float_left width_100 height_50vh margin_auto">
                      ${data.title} ${data.type}
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

                }, 101);

                // add event listeners
                setTimeout(() => {

                    document.getElementById('component_app_modal_element_pop_top_content_close'+number+'').addEventListener('click', (event) => {
                        // function start (Preview close)
                        state.ui.modal.pop.top.display = true;
                        state.ui.modal.pop.top.transform = true;
                    });

                    page();

                }, 101);
            };
              
            let page = () => {
              // ON TO DETAIL
                    document.getElementById('component_app_modal_element_pop_top_content_enter'+number+'').addEventListener('click', (event) => {

                        // function start (Detail)
                        let post_detail_from_li_link = '';

                        let detail_content = `
                          
                          <div class="position_relative float_left width_100 height_100vh margin_auto">
                              PAGE
                          </div>
                          
                          <div class="position_relative float_left width_100 height_100vh margin_auto">
                              ${data.title} <div class="position_relative float_left width_100 margin_auto"></div>
                          </div>

                        `;

                        let route_background = ``;

                        let foreground_content = ``;

                        let scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_page',detail_content);

                        let control_container = `<div class="position_absolute bottom_0 top_0 right_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_page_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_page_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`
                        
                            post_detail_from_li_link = `
                            <div style="background-image: url(${data.feature_image_src}); background-size: cover;" id="post_detail_from_li_link" class="position_absolute width_100 height_100vh margin_auto">
                                
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

                        }, 101);

                        overlay();

                    });
            };

            let overlay = () => {
              // add event listeners
                        setTimeout(() => {

                            document.getElementById('component_app_modal_element_page_top_content_close'+number+'').addEventListener('click', (event) => {    
                                // function start (Preview close)
                                state.ui.modal.page.top.display = true;
                                state.ui.modal.page.top.transform = true;
                              });

                            // ON TO overlay
                            document.getElementById('component_app_modal_element_page_top_content_enter'+number+'').addEventListener('click', (event) => {

                                // overlay 
                                state.ui.modal.overlay.top.display = true;
                                state.ui.modal.overlay.top.transform = true;

                                // function start (Detail)
                                let post_overlay_from_li_link = '';
                                let overlay_content = `
                                    
                                    <div class="position_relative float_left width_100 height_100vh margin_auto">
                                        overlay
                                    </div>
                                    
                                    <div class="position_relative float_left width_100 height_100vh margin_auto">
                                        ${data.title} <div class="position_relative float_left width_100 margin_auto"></div>
                                    </div>

                                `;
                                
                                let overlay_scrolling_container = '';
                                let control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_overlay_top_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_overlay_top_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

                                overlay_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_overlay',overlay_content);
                                post_overlay_from_li_link = `<div style="background-image: url(${data.feature_image_src}); background-size: cover;" id="post_overlay_from_li_link" class="position_absolute width_100 height_100vh margin_auto">${overlay_scrolling_container}${control_container}</div>`
                                
                                overlay_container.innerHTML = post_overlay_from_li_link;

                                state.ui.modal.overlay.top.display = true;

                                setTimeout(() => {
                                    state.ui.modal.overlay.top.transform = false;

                                }, 101);

                                // add event listeners
                                setTimeout(() => {
                                    document.getElementById('component_app_modal_element_overlay_top_content_close'+number+'').addEventListener('click', (event) => {
                                        
                                        // function start (Preview close)
                                        state.ui.modal.overlay.top.display = true;
                                        state.ui.modal.overlay.top.transform = true;
                                      });

                                    // ON TO pip
                                    document.getElementById('component_app_modal_element_overlay_top_content_enter'+number+'').addEventListener('click', (event) => {

                                        pip();

                                    });

                                }, 101);

                              });

                        }, 101);
            };

            let pip = () => {
                // pip 
                state.ui.modal.pip.bottom.display = true;
                state.ui.modal.pip.bottom.transform = true;

                // function start (Detail)
                let post_pip_from_li_link = '';
                let pip_content = `
                    
                    <div class="position_relative float_left width_100 height_100vh margin_auto">
                        
                    </div>
                    
                    <div class="position_relative float_left width_100 height_100vh margin_auto">
                        ${data.title} <div class="position_relative float_left width_100 margin_auto"></div>
                    </div>

                `;

                let pip_scrolling_container = '';
                let pip_control_container = `<div class="position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1"><div id="component_app_modal_element_pip_bottom_content_close${number}" class="gui_close width_50 height_100 float_left position_relative"></div><div id="component_app_modal_element_pip_bottom_content_enter${number}" class="gui_arrow_left width_50 height_100 float_left position_relative"></div></div>`

                pip_scrolling_container = imported_elements.element_scroll_y_events('element_scroll_y_events_pip',pip_content);
                post_pip_from_li_link = `<div style="background-image: url(${data.feature_image_src}); background-size: cover;" id="post_pip_from_li_link" class="position_absolute width_100 height_100vh margin_auto">${pip_scrolling_container}</div>${pip_control_container}`
                
                pip_container.innerHTML = post_pip_from_li_link;

                state.ui.modal.pip.bottom.display = true;

                setTimeout(() => {
                    state.ui.modal.pip.bottom.transform = false;

                }, 101);

                // add event listeners
                setTimeout(() => {
                    document.getElementById('component_app_modal_element_pip_bottom_content_close'+number+'').addEventListener('click', (event) => {
                        
                        // function start (Preview close)
                        state.ui.modal.pip.bottom.display = true;
                        state.ui.modal.pip.bottom.transform = true;
                      });

                    // ON TO DONE
                    document.getElementById('component_app_modal_element_pip_bottom_content_enter'+number+'').addEventListener('click', (event) => {

                        alert('DONE!');

                      });

                }, 101);
            };

            // function start (Preview)
            let number = Math.floor((Math.random() * 101000000000000) + 1);

            let preview_container = document.getElementById('component_app_modal_element_pop_top_content');
            let page_container = document.getElementById('component_app_modal_element_page_top_content');
            let overlay_container = document.getElementById('component_app_modal_element_overlay_top_content');
            let pip_container = document.getElementById('component_app_modal_element_pip_bottom_content');

            preview();

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

                }, 1);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 1);

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

            }, 100);

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
            }, 100);

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
}
