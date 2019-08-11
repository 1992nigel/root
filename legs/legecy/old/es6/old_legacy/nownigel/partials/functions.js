
import from_index from '../index.js';

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

    if ((data.type == 'library') && (data.feature_category) == 'ux') {
      
      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">ux</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if ((data.type == 'library') && (data.feature_category) == 'code') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">code</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if ((data.type == 'library') && (data.feature_category) == 'gallery') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">gallery</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if ((data.type == 'library') && (data.feature_category) == 'video') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">video</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };      

    if ((data.type == 'library') && (data.feature_category) == 'read') {
      
      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">read</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if ((data.type == 'library') && (data.feature_category) == 'graphic') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">graphic</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if ((data.type == 'library') && (data.feature_category) == 'photo') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">photo</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if ((data.type == 'library') && (data.feature_category) == 'slider') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.feature_category}</p>
                  </div>
              </div>

              <h1 class="verticle_text position_absolute top_-1vh right_0 font_size_105vh line_height_1vh padding_05vh margin_auto border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">slider</h1>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">library</h1>


          </div>
        </div>

        <div id="wp_info_1" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="wp_info_2" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if (data.type == 'partners') {


      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
                  </div>
              </div>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">partners</h1>


          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;
    };

    if (data.type == 'services') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 display_webkit_box webkit_box_pack_center webkit_box_align ">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_black border_radius_1vh"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_black border_radius_1vh opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
                  </div>
              </div>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_relative top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow color_yellow">
                
                code goes here
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">services</h1>


          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if (data.type == 'abilities') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
                  </div>
              </div>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="gui_start_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_enter_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
                <div class="gui_learn_buttons position_relative margin_auto width_33 height_100 margin_auto float_left">
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">abilities</h1>


          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    if (data.type == 'skills') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left photo_person15"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left overflow_hidden"><div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_man_0_16_depth_200 float_left display_flex_flow"></div></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
                  </div>
              </div>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>

              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">skills</h1>


          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;
    };

    if (data.type == 'roster') {

      ELEMENT.innerHTML = `

        <div id="post_component" class="width_100 height_33vh float_left position_relative display opacity_1 display_flex_flow">
          <div class="calc_5vh margin_205vh position_relative float_left border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">

              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow"></div>
              <div class="width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 float_left bg_yellow opacity_05"></div>
              <div class="width_100 height_100 border_01vh_dark_yellow_9 border_radius_1vh position_absolute top_0 bottom_0 left_0 right_0 float_left"></div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 height_100 nownigel_gui_interaction_portfolio float_left display_flex_flow"></div>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
                  </div>
              </div>

              <div id="gui_6" class="gui_circle position_absolute bottom_-205vh left_-205vh margin_auto width_5vh height_5vh margin_auto ">

                <span class="position_absolute width_25vh right_0 left_0 bottom_50 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">abilities</p>
                        <p class="font_size_2vh line_height_205vh">author</p>
                        <p class="font_size_2vh line_height_205vh">categories</p>
                        <p class="font_size_2vh line_height_205vh">id: ${data.id}</p>
                        <p class="font_size_2vh line_height_205vh">category: ${data.category}</p>
                        <p class="font_size_2vh line_height_205vh">feature "array items for slider</p>
                        <p class="font_size_2vh line_height_205vh">title: ${data.title}</p>
                        <p class="font_size_2vh line_height_205vh">type: ${data.type}</p>
                        <p class="font_size_2vh line_height_205vh">dislikes: ${data.dislikes}</p>
                        <p class="font_size_2vh line_height_205vh">mehs: ${data.meh}</p>
                        <p class="font_size_2vh line_height_205vh">likes: ${data.likes}</p>
                        <p class="font_size_2vh line_height_205vh">paragraph: ${data.paragraph}</p>
                        <p class="font_size_2vh line_height_205vh">subtitle: ${data.subtitle}</p>
                        <p class="font_size_2vh line_height_205vh">tag: ${data.tag}</p>
                        <p class="font_size_2vh line_height_205vh">tags: array items</p>
                        <p class="font_size_2vh line_height_205vh">views: ${data.views}</p>
                      </div>
                    </div>
                  </span>
                </span>

              </div>

              <div class="position_absolute top_0 bottom_0 left_0 right_0 width_100 float_left display_flex_flow">
                <div class="position_absolute top_0 bottom_0 left_0 right_0 float_left width_100">

                  <div class="fadeIn animated1 position_relative margin_auto float_left">
                    <div class="gui_arrow_left position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>

                  <div class="fadeIn animated1 position_relative margin_auto float_right">
                    <div class="gui_arrow_right position_relative margin_auto width_5vh height_5vh margin_auto float_left"></div>
                  </div>
                  
                </div>
              </div>


              <h1 class="verticle_text position_absolute top_0 right_-205vh font_size_2vh padding_1vh margin_1vh border_01vh_dark_yellow_9 border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow">roster</h1>


          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_arrow_left position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_205vh padding_205vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_arrow_right position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

        <div id="info" class="position_relative width_100 margin_1vh_bottom float_left display_flex_flow">
          <div class="position_relative float_left display_flex_flow">
            
            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left">
                <p class="font_size_205vh line_height_5vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_left">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>

            <div class="position_relative float_left display_flex_flow">
              <div class="position_relative float_left bg_orange border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                <p class="font_size_2vh padding_1vh position_relative float_left">${data.title}</p>
              </div>
            </div>

            <div class="fadeIn animated1 position_relative margin_auto margin_auto float_right">
              <div class="gui_hand_up position_relative margin_auto width_205vh height_205vh margin_auto float_left"></div>
            </div>
            
          </div>
        </div>

      `;

    };

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))
    ELEMENT.addEventListener("click", function(event) {

        from_index.Handle_check_route('library_preview', data);

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
