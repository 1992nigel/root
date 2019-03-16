import imported_elements from './elements';

let state = '';

let colors = [

  {
    parent: 'component_app_bg',
    id: '',
    classList: '',
    innerHTML: `

    
      <div id="animation_fourground_hands" class="easing_1 position_absolute bottom_0 right_0 margin_auto width_100 height_100 margin_auto float_left">
        <div id="animation_fourground_hands_1" class="nownigel_gui_interaction_hands_0_0_depth_200_1 position_absolute bottom_0 right_0 margin_auto width_100 height_100 margin_auto float_left"></div>
      </div>

      <div id="component_app_bg_1" class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_0 overflow_hidden easing_01 bg_yellow">
      </div>

      <div id="component_app_bg_2" class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_0 overflow_hidden easing_01">
        ${imported_elements.element_particles()}
        ${imported_elements.element_effect()}
        ${imported_elements.parallax_verticle_infinite()}
      </div>

      <div id="component_app_bg_3" class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_0 overflow_hidden easing_01">
        space
      </div>

      <div id="component_app_bg_4" class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_0 overflow_hidden easing_01">
        sky
      </div>

      <div id="component_app_bg_5" class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_0 overflow_hidden easing_01">
        city
      </div>

      <div id="component_app_bg_6" class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_0 overflow_hidden easing_01">
        outfront
      </div>

      <div class="width_100vh font_size_205vh line_height_5vh position_absolute top_-100 left_100 text_align_center float_left vertical_text_left">
        <div id="section" class="position_relative calc_02vh border_01vh_dark_yellow_9 float_left margin_auto">
          Hello <i>username</i> welcome to <b>our space</b>. Last Logged in <u>1/11/2020</u>
        </div>
      </div>

    `,
  },
  {
    parent: 'component_app_mg',
    id: '',
    classList: '',
    innerHTML: `
      <div class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_1 overflow_hidden">
        ${imported_elements.fourground_man()}
      </div>
    `,
  },
  {
    parent: 'component_app_fg',
    id: '',
    classList: '',
    innerHTML: `
      <div class="position_absolute width_100 height_100vh float_left top_0 left_0 display opacity_1 overflow_hidden">                
        ${imported_elements.load_imac_content_animated_hands()}
        ${imported_elements.parallax_verticle_scene_1()}
        ${imported_elements.element_stage_introduction()}
      </div>
    `,
  },
  {
    parent: 'component_app_content',
    id: '',
    classList: '',
    innerHTML: `
      ${imported_elements.fold_content()}
    `,
  },
  {
    parent: 'component_app_modals',
    id: '',
    classList: '',
    innerHTML: `
    <div id="modal_component">
      ${imported_elements.element_page_left}
      
      ${imported_elements.element_pop_top}
      ${imported_elements.element_pop_left}
      ${imported_elements.element_pop_bottom}
      ${imported_elements.element_pop_right}

      ${imported_elements.element_page_top}
      ${imported_elements.element_page_bottom}
      ${imported_elements.element_page_right}

      ${imported_elements.element_menu_top}
      ${imported_elements.element_menu_left}
      ${imported_elements.element_menu_bottom}
      ${imported_elements.element_menu_right}

      ${imported_elements.element_morph_top}
      ${imported_elements.element_morph_left}
      ${imported_elements.element_morph_bottom}
      ${imported_elements.element_morph_right}

      ${imported_elements.element_fade_top}
      ${imported_elements.element_fade_left}
      ${imported_elements.element_fade_bottom}
      ${imported_elements.element_fade_right}

      ${imported_elements.element_gradient_top}
      ${imported_elements.element_gradient_left}
      ${imported_elements.element_gradient_bottom}
      ${imported_elements.element_gradient_right}

      ${imported_elements.element_corner_top}
      ${imported_elements.element_corner_left}
      ${imported_elements.element_corner_bottom}
      ${imported_elements.element_corner_right}

      ${imported_elements.element_overlay_top}
      ${imported_elements.element_overlay_left}
      ${imported_elements.element_overlay_bottom}
      ${imported_elements.element_overlay_right}

      ${imported_elements.element_nav_top}
      ${imported_elements.element_nav_left}
      ${imported_elements.element_nav_bottom}
      ${imported_elements.element_nav_right}
    </div>

    `,
  },

  {
    parent: 'component_app_guis',
    id: '',
    classList: '',
    innerHTML: `
      ${imported_elements.element_guis()}
    `,
  }
];
export default {
  colors
}
