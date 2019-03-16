import imported_elements from './elements';

let state = '';

let colors = [

  {
    parent: 'component_app_animation_background',
    id: '',
    classList: '',
    innerHTML: `
        
      <div id="animation_layer_bg">
        
        <div id="color_layer" class="display_none position_absolute bottom_0 right_0 margin_auto width_100 height_100 margin_auto float_left"></div>

        <div id="paint_animation" class="display_none position_absolute bottom_0 right_0 margin_auto width_100 height_100 margin_auto float_left"></div>
        
        <div id="set_layer_1" class="display_none gui_stage_floor position_absolute top_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>        
        
        <div id="set_layer_2" class="display_none gui_stage_wall position_absolute top_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>        
        
        <div id="set_layer_3" class="display_none gui_stage_lines position_absolute top_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>        

        <div id="set_layer_4" class="display_none gui_stage_door_closed position_absolute top_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>        
        
        <div id="layer_bg_1_pieces" class="display_none position_absolute top_-205vh right_25 margin_auto width_40vh height_40vh margin_auto float_left">
          <div id="animation_fourground_furniture_layer_8_svg" class="pieces_office_shoplight_on_bg position_absolute top_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>
        </div>

        <div id="layer_bg_2_pieces" class="display_none piece_desk_bg position_absolute bottom_1205 left_0 right_0 margin_auto width_25 height_25 margin_auto float_left"></div>

        <div id="texture_layer" class="display_none width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto accent_noise_1 opacity_01">
        </div>

      </div>

    `,
  },

  {

    parent: 'component_app_animation_midground',
    id: '',
    classList: '',
    innerHTML: `
   

        <div id="layer_fg_1_logo" class="display_none position_absolute bottom_0 top_0 left_0 right_0 width_33 height_33 margin_auto float_left">

          <div class="nownigel_gui_logo_type position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
          </div>

          <div class="nownigel_gui_logo_mark position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left">
          </div>

        </div>
        
      <div id="animation_layer_mg">

          <div id="layer_mg_8_pieces" class="display_none piece_desk_mg position_absolute bottom_1205vh left_3705 margin_auto width_1205 height_1205 margin_auto float_left"></div>

          <div id="layer_mg_7_pieces" class="display_none piece_desk_mg position_absolute bottom_1205vh right_3705 margin_auto width_1205 height_1205 margin_auto float_left"></div>

          <div id="layer_mg_6_pieces" class="display_none piece_desk_mg position_absolute bottom_0 left_25 margin_auto width_25 height_25 margin_auto float_left"></div>

          <div id="layer_mg_5_pieces" class="display_none piece_desk_mg position_absolute bottom_0 right_25 margin_auto width_25 height_25 margin_auto float_left"></div>

          <div id="layer_mg_4_pieces" class="display_none piece_desk_mg position_absolute bottom_-1205vh left_1205 margin_auto width_3705 height_3705 margin_auto float_left"></div>

          <div id="layer_mg_3_pieces" class="display_none piece_desk_mg position_absolute bottom_-1205vh right_1205 margin_auto width_3705 height_3705 margin_auto float_left"></div>

          <div id="layer_mg_2_pieces" class="display_none piece_desk_mg position_absolute bottom_-25vh left_0 margin_auto width_50 height_50 margin_auto float_left"></div>

          <div id="layer_mg_1_pieces" class="display_none piece_desk_mg position_absolute bottom_-25vh right_0 margin_auto width_50 height_50 margin_auto float_left"></div>

      </div>

    `,

  },

  {
    parent: 'component_app_animation_foreground',
    id: '',
    classList: '',
    innerHTML: `

      <div id="animation_layer_fg">

        <div id="layer_gui_pixel_man" class="display_none nownigel_gui_interaction_man_0_16_depth_200_face_0 position_fixed margin_auto float_left easing_01 z_index_2"></div>


        <div id="layer_fg_1_pieces" class="display_none position_absolute bottom_0 right_0 left_0 width_100 height_100vh margin_auto float_left">
          <div id="layer_fg_1_pieces_machines" class="display_none easing_01 position_absolute bottom_-3705 right_0 left_0 width_90 height_90 margin_auto float_left">

              <div id="animation_fourground_machine_0_desk" class="display_none animated1 enterBottom piece_workspace_desk position_absolute bottom_0 right_0 left_0 width_100 height_100 margin_auto float_left"></div>
              <div id="animation_fourground_machine_0_imac" class="display_none animated1 enterTopBounce easing_01 piece_workspace_imac position_absolute bottom_0 right_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>
              <div id="animation_fourground_machine_0_monitor" class="display_none animated1 enterTopBounce easing_01 piece_workspace_monitor position_absolute bottom_0 right_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>
              <div id="animation_fourground_machine_0_macbook" class="display_none animated1 enterTopBounce easing_01 piece_workspace_macbook position_absolute bottom_0 right_0 left_0 margin_auto width_100 height_100 margin_auto float_left"></div>

          </div>
        </div>    

        <div id="animation_fourground_furniture_layer_1" class="display_none position_absolute top_-205vh right_1205 width_50vh height_50vh margin_auto float_left">
          <div id="animation_fourground_furniture_layer_1_svg" class="pieces_office_shoplight_on position_absolute top_0 left_0 width_100 height_100 margin_auto float_left"></div>
        </div>

        <div id="layer_fg_1_man" class="display_none nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-125 right_-75 width_200 height_200 margin_auto float_left easing_01"></div>

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
    <div id="layer_modals">
      ${imported_elements.element_page_left}
      
      ${imported_elements.element_pop_top}
      ${imported_elements.element_pop_left}
      ${imported_elements.element_pop_bottom}
      ${imported_elements.element_pop_right}

      ${imported_elements.element_page_top}
      ${imported_elements.element_page_bottom}
      ${imported_elements.element_page_right}

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

      ${imported_elements.element_menu_top}
      ${imported_elements.element_menu_left}
      ${imported_elements.element_menu_bottom}
      ${imported_elements.element_menu_right}

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

      <div id="layer_guis">  
        ${imported_elements.element_guis()}
        <div id="preloader" class="nownigel_gui_interaction_man_0_16_depth_200_face_0 position_absolute bottom_-1005 right_-100 width_5vh height_5vh margin_auto float_left"></div>

      </div>

    `,
  }
];
export default {
  colors
}
