import from_index from '../index.js';

    let get_components_handled = () => {

        let state = from_index.Handle_return_state();

        let components = [

            // anchors
            {
                component: 'gui_top',
                component_state_transform: state.ui.gui.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'gui_top_left',
                component_state_transform: state.ui.gui.top_left.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_left.transform,
                // component_state_opacity:  state.ui.gui.top_left.opacity
            },
            {
                component: 'gui_top_right',
                component_state_transform: state.ui.gui.top_right.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_right.transform,
                // component_state_opacity:  state.ui.gui.top_right.opacity
            },

            {
                component: 'gui_bottom',
                component_state_transform: state.ui.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            {
                component: 'gui_bottom_left',
                component_state_transform: state.ui.gui.bottom_left.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_left.transform,
                // component_state_opacity:  state.ui.gui.bottom_left.opacity
            },
            {
                component: 'gui_bottom_right',
                component_state_transform: state.ui.gui.bottom_right.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_right.transform,
                // component_state_opacity:  state.ui.gui.bottom_right.opacity
            },


            {
                component: 'gui_left',
                component_state_transform: state.ui.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.left.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'gui_right',
                component_state_transform: state.ui.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.right.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // gradient
            {
                component: 'component_app_modal_element_gradient_top',
                component_state_transform: state.ui.modal.gradient.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.gradient.top.transform,
                // component_state_opacity:  state.ui.modal.gradient.top.opacity
            },

            {
                component: 'component_app_modal_element_gradient_bottom',
                component_state_transform: state.ui.modal.gradient.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.gradient.bottom.transform,
                // component_state_opacity:  state.ui.modal.gradient.bottom.opacity
            },

            {
                component: 'component_app_modal_element_gradient_left',
                component_state_transform: state.ui.modal.gradient.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.gradient.left.transform,
                // component_state_opacity:  state.ui.modal.gradient.top.opacity
            },
            {
                component: 'component_app_modal_element_gradient_right',
                component_state_transform: state.ui.modal.gradient.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.gradient.right.transform,
                // component_state_opacity:  state.ui.modal.gradient.top.opacity
            },
            
            // morph
            {
                component: 'component_app_modal_element_morph_top',
                component_state_transform: state.ui.modal.morph.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.morph.top.transform,
                // component_state_opacity:  state.ui.modal.morph.top.opacity
            },

            {
                component: 'component_app_modal_element_morph_bottom',
                component_state_transform: state.ui.modal.morph.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.morph.bottom.transform,
                // component_state_opacity:  state.ui.modal.morph.bottom.opacity
            },

            {
                component: 'component_app_modal_element_morph_left',
                component_state_transform: state.ui.modal.morph.left.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.morph.left.transform,
                // component_state_opacity:  state.ui.modal.morph.top.opacity
            },
            {
                component: 'component_app_modal_element_morph_right',
                component_state_transform: state.ui.modal.morph.right.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.morph.right.transform,
                // component_state_opacity:  state.ui.modal.morph.top.opacity
            },
            
            // navs
            {
                component: 'modal_nav_top',
                component_state_transform: state.ui.modal.nav.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.nav.top.transform,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },

            {
                component: 'modal_nav_bottom',
                component_state_transform: state.ui.modal.nav.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.nav.bottom.transform,
                // component_state_opacity:  state.ui.modal.nav.bottom.opacity
            },

            {
                component: 'modal_nav_left',
                component_state_transform: state.ui.modal.nav.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.nav.left.transform,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },
            {
                component: 'modal_nav_right',
                component_state_transform: state.ui.modal.nav.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.nav.right.transform,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },
            // menu
            {
                component: 'component_app_modal_element_menu_top',
                component_state_transform: state.ui.modal.menu.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.menu.top.transform,
                // component_state_opacity:  state.ui.modal.menu.top.opacity
            },
            {
                component: 'component_app_modal_element_menu_bottom',
                component_state_transform: state.ui.modal.menu.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.menu.bottom.transform,
                // component_state_opacity:  state.ui.modal.menu.bottom.opacity
            },
            {
                component: 'component_app_modal_element_menu_left',
                component_state_transform: state.ui.modal.menu.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.menu.left.transform,
                // component_state_opacity:  state.ui.modal.menu.left.opacity
            },
            {
                component: 'component_app_modal_element_menu_right',
                component_state_transform: state.ui.modal.menu.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.menu.right.transform,
                // component_state_opacity:  state.ui.modal.menu.right.opacity
            },
            // page
            {
                component: 'component_app_modal_element_page_top',
                component_state_transform: state.ui.modal.page.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.page.top.transform,
                // component_state_opacity:  state.ui.modal.page.top.opacity
            },
            {
                component: 'component_app_modal_element_page_bottom',
                component_state_transform: state.ui.modal.page.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.page.bottom.transform,
                // component_state_opacity:  state.ui.modal.page.bottom.opacity
            },
            {
                component: 'component_app_modal_element_page_left',
                component_state_transform: state.ui.modal.page.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.page.left.transform,
                // component_state_opacity:  state.ui.modal.page.left.opacity
            },
            {
                component: 'component_app_modal_element_page_right',
                component_state_transform: state.ui.modal.page.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.page.right.transform,
                // component_state_opacity:  state.ui.modal.page.right.opacity
            },
            
            {
                component: 'component_app_modal_element_pop_top',
                component_state_transform: state.ui.modal.pop.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pop.top.transform,
                // component_state_opacity:  state.ui.modal.pop.top.opacity
            },
            {
                component: 'component_app_modal_element_pop_bottom',
                component_state_transform: state.ui.modal.pop.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pop.bottom.transform,
                // component_state_opacity:  state.ui.modal.pop.bottom.opacity
            },
            {
                component: 'component_app_modal_element_pop_left',
                component_state_transform: state.ui.modal.pop.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pop.left.transform,
                // component_state_opacity:  state.ui.modal.pop.left.opacity
            },
            {
                component: 'component_app_modal_element_pop_right',
                component_state_transform: state.ui.modal.pop.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pop.right.transform,
                // component_state_opacity:  state.ui.modal.pop.right.opacity
            }

        ];

        return components

    };

export default {
    get_components_handled

}
