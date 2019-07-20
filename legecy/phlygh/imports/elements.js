
import functions from './functions';

let element_lead = (x) => {
    
  let data = `
  <div id="element_lead" class="position_relative width_100vw height_100vh margin_auto">
      ` + x + `
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_fold = (x) => {
    
  let data = `
  <div id="element_fold" class="position_relative width_100vw margin_auto bg_grey color_white">
      ` + x + `
  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

let element_modal_gradient_right = () => {
    
  let data = `
  <div id="element_modal_gradient_right" class="transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto">

  </div>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};

export default {
  element_lead,
  element_fold,
  element_modal_gradient_right
};
