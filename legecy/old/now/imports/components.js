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
                component_state_display: !state.ui.gui.top.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            {
                component: 'gui_bottom',
                component_state_transform: state.ui.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },

            {
                component: 'gui_left',
                component_state_transform: state.ui.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.gui.left.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'gui_right',
                component_state_transform: state.ui.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.gui.right.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // anchors
            {
                component: 'modal_nav_top',
                component_state_transform: state.ui.modal.nav.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.modal.nav.top.transform,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },

            {
                component: 'modal_nav_bottom',
                component_state_transform: state.ui.modal.nav.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.modal.nav.bottom.transform,
                // component_state_opacity:  state.ui.modal.nav.bottom.opacity
            },

            {
                component: 'modal_nav_left',
                component_state_transform: state.ui.modal.nav.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.modal.nav.left.transform,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },
            {
                component: 'modal_nav_right',
                component_state_transform: state.ui.modal.nav.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.modal.nav.right.transform,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },
            
            {
                component: 'component_app_modal_element_page_top',
                component_state_transform: state.ui.modal.page.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.page.top.display,
                // component_state_opacity:  state.ui.modal.page.top.opacity
            },
            {
                component: 'component_app_modal_element_page_bottom',
                component_state_transform: state.ui.modal.page.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.page.bottom.display,
                // component_state_opacity:  state.ui.modal.page.bottom.opacity
            },
            {
                component: 'component_app_modal_element_page_left',
                component_state_transform: state.ui.modal.page.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.page.left.display,
                // component_state_opacity:  state.ui.modal.page.left.opacity
            },
            {
                component: 'component_app_modal_element_page_right',
                component_state_transform: state.ui.modal.page.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.page.right.display,
                // component_state_opacity:  state.ui.modal.page.right.opacity
            },
            
            {
                component: 'component_app_modal_element_pop_top',
                component_state_transform: state.ui.modal.pop.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pop.top.display,
                // component_state_opacity:  state.ui.modal.pop.top.opacity
            },
            {
                component: 'component_app_modal_element_pop_bottom',
                component_state_transform: state.ui.modal.pop.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pop.bottom.display,
                // component_state_opacity:  state.ui.modal.pop.bottom.opacity
            },
            {
                component: 'component_app_modal_element_pop_left',
                component_state_transform: state.ui.modal.pop.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pop.left.display,
                // component_state_opacity:  state.ui.modal.pop.left.opacity
            },
            {
                component: 'component_app_modal_element_pop_right',
                component_state_transform: state.ui.modal.pop.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pop.right.display,
                // component_state_opacity:  state.ui.modal.pop.right.opacity
            }

        ];

        return components

    };

export default {
    get_components_handled

}
