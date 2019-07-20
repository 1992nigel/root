// Imports
import from_index from '../index.js';

let state = '';
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (id_String, class_String, data_Object) => {

    let state = from_index.Handle_return_state();

    let element = document.createElement('div');

    if (id_String != null) {
      element.setAttribute("id",id_String);
    };

    if (id_String != null) {
      if (class_String) {
          element.classList = class_String;
      };
    };
                        
    if ((data_Object) != null) {
        element.innerHTML = `
            ${data_Object}
        `;
    };

    return element
};

export default {
  Generate_new_fragment,
  Generate_new_div
}