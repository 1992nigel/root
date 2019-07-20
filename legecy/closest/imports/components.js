import from_index from '../index.js';

    let get_components_handled = () => {

        let state = from_index.handle_return_state();

        let components = [

            // anchors
            {
                component: 'gui_top',
                component_state_transform: !state.gui.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.gui.top.transform,
                // component_state_opacity:  state.gui.top.opacity
            },
            {
                component: 'gui_top_left',
                component_state_transform: !state.gui.top_left.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.gui.top_left.transform,
                // component_state_opacity:  state.gui.top_left.opacity
            },
            {
                component: 'gui_top_right',
                component_state_transform: !state.gui.top_right.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.gui.top_right.transform,
                // component_state_opacity:  state.gui.top_right.opacity
            },

            {
                component: 'gui_bottom',
                component_state_transform: !state.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.gui.bottom.transform,
                // component_state_opacity:  state.gui.bottom.opacity
            },
            {
                component: 'gui_bottom_left',
                component_state_transform: !state.gui.bottom_left.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.gui.bottom_left.transform,
                // component_state_opacity:  state.gui.bottom_left.opacity
            },
            {
                component: 'gui_bottom_right',
                component_state_transform: !state.gui.bottom_right.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.gui.bottom_right.transform,
                // component_state_opacity:  state.gui.bottom_right.opacity
            },


            {
                component: 'gui_left',
                component_state_transform: !state.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.gui.left.transform,
                // component_state_opacity:  state.gui.top.opacity
            },
            {
                component: 'gui_right',
                component_state_transform: !state.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.gui.right.transform,
                // component_state_opacity:  state.gui.top.opacity
            },

            // gradient
            {
                component: 'component_app_modal_element_gradient_top',
                component_state_transform: !state.modal.gradient.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.gradient.top.transform,
                // component_state_opacity:  state.modal.gradient.top.opacity
            },

            {
                component: 'component_app_modal_element_gradient_bottom',
                component_state_transform: !state.modal.gradient.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.gradient.bottom.transform,
                // component_state_opacity:  state.modal.gradient.bottom.opacity
            },

            {
                component: 'component_app_modal_element_gradient_left',
                component_state_transform: !state.modal.gradient.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.gradient.left.transform,
                // component_state_opacity:  state.modal.gradient.top.opacity
            },
            {
                component: 'component_app_modal_element_gradient_right',
                component_state_transform: !state.modal.gradient.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.gradient.right.transform,
                // component_state_opacity:  state.modal.gradient.top.opacity
            },
            
            // morph
            {
                component: 'component_app_modal_element_morph_top',
                component_state_transform: !state.modal.morph.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.morph.top.transform,
                // component_state_opacity:  state.modal.morph.top.opacity
            },

            {
                component: 'component_app_modal_element_morph_bottom',
                component_state_transform: !state.modal.morph.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.morph.bottom.transform,
                // component_state_opacity:  state.modal.morph.bottom.opacity
            },

            {
                component: 'component_app_modal_element_morph_left',
                component_state_transform: !state.modal.morph.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.morph.left.transform,
                // component_state_opacity:  state.modal.morph.top.opacity
            },
            {
                component: 'component_app_modal_element_morph_right',
                component_state_transform: !state.modal.morph.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.morph.right.transform,
                // component_state_opacity:  state.modal.morph.top.opacity
            },
            
            // navs
            {
                component: 'modal_nav_top',
                component_state_transform: !state.modal.nav.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.nav.top.transform,
                // component_state_opacity:  state.modal.nav.top.opacity
            },

            {
                component: 'modal_nav_bottom',
                component_state_transform: !state.modal.nav.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.nav.bottom.transform,
                // component_state_opacity:  state.modal.nav.bottom.opacity
            },

            {
                component: 'modal_nav_left',
                component_state_transform: !state.modal.nav.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.nav.left.transform,
                // component_state_opacity:  state.modal.nav.top.opacity
            },
            {
                component: 'modal_nav_right',
                component_state_transform: !state.modal.nav.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.nav.right.transform,
                // component_state_opacity:  state.modal.nav.top.opacity
            },
            // menu
            {
                component: 'component_app_modal_element_menu_top',
                component_state_transform: !state.modal.menu.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.menu.top.transform,
                // component_state_opacity:  state.modal.menu.top.opacity
            },
            {
                component: 'component_app_modal_element_menu_bottom',
                component_state_transform: !state.modal.menu.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.menu.bottom.transform,
                // component_state_opacity:  state.modal.menu.bottom.opacity
            },
            {
                component: 'component_app_modal_element_menu_left',
                component_state_transform: !state.modal.menu.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.menu.left.transform,
                // component_state_opacity:  state.modal.menu.left.opacity
            },
            {
                component: 'component_app_modal_element_menu_right',
                component_state_transform: !state.modal.menu.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.menu.right.transform,
                // component_state_opacity:  state.modal.menu.right.opacity
            },
            // page
            {
                component: 'component_app_modal_element_page_top',
                component_state_transform: !state.modal.page.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.page.top.transform,
                // component_state_opacity:  state.modal.page.top.opacity
            },
            {
                component: 'component_app_modal_element_page_bottom',
                component_state_transform: !state.modal.page.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.page.bottom.transform,
                // component_state_opacity:  state.modal.page.bottom.opacity
            },
            {
                component: 'component_app_modal_element_page_left',
                component_state_transform: !state.modal.page.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.page.left.transform,
                // component_state_opacity:  state.modal.page.left.opacity
            },
            {
                component: 'component_app_modal_element_page_right',
                component_state_transform: !state.modal.page.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.page.right.transform,
                // component_state_opacity:  state.modal.page.right.opacity
            },
            
            {
                component: 'component_app_modal_element_pop_top',
                component_state_transform: !state.modal.pop.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.pop.top.transform,
                // component_state_opacity:  state.modal.pop.top.opacity
            },
            {
                component: 'component_app_modal_element_pop_bottom',
                component_state_transform: !state.modal.pop.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.modal.pop.bottom.transform,
                // component_state_opacity:  state.modal.pop.bottom.opacity
            },
            {
                component: 'component_app_modal_element_pop_left',
                component_state_transform: !state.modal.pop.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.pop.left.transform,
                // component_state_opacity:  state.modal.pop.left.opacity
            },
            {
                component: 'component_app_modal_element_pop_right',
                component_state_transform: !state.modal.pop.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.modal.pop.right.transform,
                // component_state_opacity:  state.modal.pop.right.opacity
            }

        ];

        return components

    };

export default {
    get_components_handled

}
