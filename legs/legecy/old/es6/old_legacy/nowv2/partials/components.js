import from_index from '../index.js';

    let get_components_handled = () => {

        let state = from_index.Handle_return_state();

        let components = [
            // dev mode
            
            {
                component: 'bullets_container',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.data.dev_mode,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'pen_container',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.data.dev_mode,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'pencil_container',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.data.dev_mode,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'snakes_container',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.data.dev_mode,
                // component_state_opacity:  state.animation.instances.loading
            },
            //dev modes end
            {
                component: 'icon_dashboard',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: localStorage.user != 'null',
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'icon_sign_in',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: localStorage.user == 'null',
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'icon_sign_up',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: localStorage.user == 'null',
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'icon_sign_out',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: localStorage.user != 'null',
                // component_state_opacity:  state.animation.instances.loading
            },
            // instance: loading
            {
                component: 'layer_fg_1',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loading,
                // component_state_opacity:  state.animation.instances.loading
            },

            // loading or loaded
            {
                component: 'paint_animation',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loading || state.animation.instances.loaded,
                // component_state_opacity:  state.animation.instances.loading
            },

            // instamce: after load and stay

            {
                component: 'color_layer',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'texture_layer',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded,
                // component_state_opacity:  state.animation.instances.loading
            },

            // loaded, but hide on hide AND Start or Learn
            {
                component: 'layer_fg_2',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded,
                // component_state_opacity:  state.animation.instances.loading
            },

            // loaded, but hide on hide ??
            // loaded, but hide on start or learn ??

            // loaded, hide until start or learn
            // stand right
            // stand left
            // walking right
            // walking left
            {
                component: 'layer_fg_2_man',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded && !state.animation.instances.hide,
                // component_state_opacity:  state.animation.instances.loading
            },
            //sitting right
            {
                component: 'layer_man_right_sitting',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                //component_state_display: state.animation.instances.loaded && !state.animation.instances.hide && state.ui.interaction.player_1.action.right && !state.ui.interaction.player_1.action.walking && state.ui.interaction.player_1.action.sitting,
                // component_state_opacity:  state.animation.instances.loading
            },
            //sitting left
            {
                component: 'layer_man_left_sitting',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                //component_state_display: state.animation.instances.loaded && !state.animation.instances.hide && state.ui.interaction.player_1.action.left && !state.ui.interaction.player_1.action.walking && state.ui.interaction.player_1.action.sitting,
                // component_state_opacity:  state.animation.instances.loading
            },

            // instance: after load, before cursor move, but hide on hide
            {
                component: 'fold_note',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded && !state.animation.instances.cursor_moved && !state.animation.instances.hide,
                // component_state_opacity:  state.animation.instances.loading
            },
            
            // instance: before start or learn, but hide on hide
            {
                component: 'fold_buttons',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded && state.animation.instances.cursor_moved && !state.animation.instances.start && !state.animation.instances.learn && !state.animation.instances.scrolling_down && !state.animation.instances.hide,
                // component_state_opacity:  state.animation.instances.loading
            },

            // instance: start
            {
                component: 'set_layer_1',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.office1_6 == 1,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'set_layer_2',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.office1_6 == 2,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'set_layer_3',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.office1_6 == 3,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'set_layer_4',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.office1_6 == 4,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'layer_bg_1_pieces',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.start && state.animation.instances.office1_6 == 1,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'layer_bg_2_pieces',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.start && state.animation.instances.office1_6 == 1,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'enemy',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.start && state.animation.instances.office1_6 == 1,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'anchor_right',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.start,
                // component_state_opacity:  state.animation.instances.loading
            },

            // instamce: learn
            {
                component: 'anchor_bottom',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.learn,
                // component_state_opacity:  state.animation.instances.loading
            },


            // instamce: after scrolling down
            {
                component: 'fold_continue',
                //component_state_transform: state.animation.instances.loading,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.scrolling_down,
                // component_state_opacity:  state.animation.instances.loading
            },
            
            {
                component: 'anchor_top',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.start,
                // component_state_opacity:  state.animation.instances.loading
            },
            {
                component: 'anchor_left',
                //component_state_transform: state.animation.instances.loading,
                // component_state_transform_true: 'transform_translate3d_top_100',
                // component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.scrolling_down,
                // component_state_opacity:  state.animation.instances.loading
            },

            // GUIS
            {
                component: 'component_app_gui_arrows_top',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_top_left',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_left.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_top_right',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_right.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_bottom',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_bottom_left',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_left.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_bottom_right',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_right.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_left',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.left.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_right',
                //component_state_transform: !state.ui.gui.top_left.display,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.right.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            {
                component: 'fold_pause',
                component_state_transform: state.ui.gui.fold.pause.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.fold.pause.display,
                // component_state_opacity:  state.ui.gui.fold.pause.opacity
            },
            {
                component: 'fold_timeout',
                component_state_transform: state.ui.gui.fold.timeout.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.fold.timeout.display,
                // component_state_opacity:  state.ui.gui.fold.timeout.opacity
            },
            {
                component: 'component_app_gui_bottom_center',
                //component_state_transform: state.ui.gui.bottom.transform,
                //component_state_transform_true: 'transform_translate3d_top100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom.display,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            
            {
                component: 'component_app_gui_bottom_left',
                //component_state_transform: state.ui.gui.bottom_left.transform,
                //component_state_transform_true: 'transform_translate3d_top100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_left.display,
                // component_state_opacity:  state.ui.gui.bottom_left.opacity
            },
            
            {
                component: 'component_app_gui_bottom_right',
                //component_state_transform: state.ui.gui.bottom_right.transform,
                //component_state_transform_true: 'transform_translate3d_top100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_right.display,
                // component_state_opacity:  state.ui.gui.bottom_right.opacity
            },
            
            {
                component: 'component_app_gui_top_center',
                //component_state_transform: state.ui.gui.top.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            
            {
                component: 'component_app_gui_top_left',
                //component_state_transform: state.ui.gui.top_left.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_left.display,
                // component_state_opacity:  state.ui.gui.top_left.opacity
            },
            
            {
                component: 'component_app_gui_top_right',
                //component_state_transform: state.ui.gui.top_right.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_right.display,
                // component_state_opacity:  state.ui.gui.top_right.opacity
            },

            {
                component: 'component_app_gui_left',
                //component_state_transform: state.ui.gui.left.transform,
                //component_state_transform_true: 'transform_translate3d_left_100',
                //component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.left.display,
                // component_state_opacity:  state.ui.gui.left.opacity
            },
            
            {
                component: 'component_app_gui_right',
                //component_state_transform: state.ui.gui.right.transform,
                //component_state_transform_true: 'transform_translate3d_left100',
                //component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.right.display,
                // component_state_opacity:  state.ui.gui.right.opacity
            },

            // structures
        	{
                component: 'grid_cross',
                component_state_transform: state.ui.colors.grid_cross.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_cross.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },
            {
                component: 'grid_depth',
                component_state_transform: state.ui.colors.grid_depth.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_depth.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },
            {
                component: 'grid_depth_360',
                component_state_transform: state.ui.colors.grid_cross.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_cross.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },
            {
                component: 'grid_depth_720',
                component_state_transform: state.ui.colors.grid_depth.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_depth.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },

            // background pieces
            {
                component: 'grid_depth_90_floor',
                component_state_transform: state.ui.colors.grid_cross.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_cross.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },
            {
                component: 'grid_depth_630_floor',
                component_state_transform: state.ui.colors.grid_cross.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_cross.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },
            {
                component: 'grid_depth_720_floor',
                component_state_transform: state.ui.colors.grid_cross.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.grid_cross.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },

            // midground pieces

            // foreground pieces
            {
                component: 'fourground_man',
                component_state_transform: state.ui.particles.fourground_man.transform,
                component_state_transform_true: 'fadeOut',
                component_state_transform_false: 'fadeIn',
                component_state_display: state.ui.particles.fourground_man.display,
                // component_state_opacity:  state.ui.colors.colors.load_light_yellow_0.opacity
            },

            // modal
            {
                component: 'component_app_modal_element_nav_top',
                component_state_transform: state.ui.modal.nav.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.nav.top.display,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },
            {
                component: 'component_app_modal_element_nav_bottom',
                component_state_transform: state.ui.modal.nav.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.nav.bottom.display,
                // component_state_opacity:  state.ui.modal.nav.bottom.opacity
            },
            {
                component: 'component_app_modal_element_nav_left',
                component_state_transform: state.ui.modal.nav.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.nav.left.display,
                // component_state_opacity:  state.ui.modal.nav.left.opacity
            },
            {
                component: 'component_app_modal_element_nav_right',
                component_state_transform: state.ui.modal.nav.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.nav.right.display,
                // component_state_opacity:  state.ui.modal.nav.right.opacity
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
            },
            {
                component: 'component_app_modal_element_pip_top',
                component_state_transform: state.ui.modal.pip.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pip.top.display,
                // component_state_opacity:  state.ui.modal.pip.top.opacity
            },
            {
                component: 'component_app_modal_element_pip_bottom',
                component_state_transform: state.ui.modal.pip.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pip.bottom.display,
                // component_state_opacity:  state.ui.modal.pip.bottom.opacity
            },
            {
                component: 'component_app_modal_element_pip_left',
                component_state_transform: state.ui.modal.pip.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pip.left.display,
                // component_state_opacity:  state.ui.modal.pip.left.opacity
            },
            {
                component: 'component_app_modal_element_pip_right',
                component_state_transform: state.ui.modal.pip.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pip.right.display,
                // component_state_opacity:  state.ui.modal.pip.right.opacity
            },
            {
                component: 'component_app_modal_element_overlay_top',
                component_state_transform: state.ui.modal.overlay.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.overlay.top.display,
                // component_state_opacity:  state.ui.modal.overlay.top.opacity
            },
            {
                component: 'component_app_modal_element_overlay_bottom',
                component_state_transform: state.ui.modal.overlay.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.overlay.bottom.display,
                // component_state_opacity:  state.ui.modal.overlay.bottom.opacity
            },
            {
                component: 'component_app_modal_element_overlay_left',
                component_state_transform: state.ui.modal.overlay.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.overlay.left.display,
                // component_state_opacity:  state.ui.modal.overlay.left.opacity
            },
            {
                component: 'component_app_modal_element_overlay_right',
                component_state_transform: state.ui.modal.overlay.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.overlay.right.display,
                // component_state_opacity:  state.ui.modal.overlay.right.opacity
            },
            {
                component: 'component_app_modal_element_gradient_top',
                component_state_transform: state.ui.modal.gradient.top.transform,
                component_state_transform_true: 'transform_translate3d_top_200',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.gradient.top.display,
                // component_state_opacity:  state.ui.modal.gradient.top.opacity
            },
            {
                component: 'component_app_modal_element_gradient_bottom',
                component_state_transform: state.ui.modal.gradient.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top200',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.gradient.bottom.display,
                // component_state_opacity:  state.ui.modal.gradient.bottom.opacity
            },
            {
                component: 'component_app_modal_element_gradient_left',
                component_state_transform: state.ui.modal.gradient.left.transform,
                component_state_transform_true: 'transform_translate3d_left_200',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.gradient.left.display,
                // component_state_opacity:  state.ui.modal.gradient.left.opacity
            },
            {
                component: 'component_app_modal_element_gradient_right',
                component_state_transform: state.ui.modal.gradient.right.transform,
                component_state_transform_true: 'transform_translate3d_left200',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.gradient.right.display,
                // component_state_opacity:  state.ui.modal.gradient.right.opacity
            },
            {
                component: 'component_app_modal_element_menu_top',
                component_state_transform: state.ui.modal.menu.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.menu.top.display,
                // component_state_opacity:  state.ui.modal.menu.top.opacity
            },
            {
                component: 'component_app_modal_element_menu_bottom',
                component_state_transform: state.ui.modal.menu.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.menu.bottom.display,
                // component_state_opacity:  state.ui.modal.menu.bottom.opacity
            },
            {
                component: 'component_app_modal_element_menu_left',
                component_state_transform: state.ui.modal.menu.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.menu.left.display,
                // component_state_opacity:  state.ui.modal.menu.left.opacity
            },
            {
                component: 'component_app_modal_element_menu_right',
                component_state_transform: state.ui.modal.menu.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.menu.right.display,
                // component_state_opacity:  state.ui.modal.menu.right.opacity
            },
            {
                component: 'component_app_modal_element_fade_top',
                component_state_transform: state.ui.modal.fade.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.fade.top.display,
                // component_state_opacity:  state.ui.modal.fade.top.opacity
            },
            {
                component: 'component_app_modal_element_fade_bottom',
                component_state_transform: state.ui.modal.fade.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.fade.bottom.display,
                // component_state_opacity:  state.ui.modal.fade.bottom.opacity
            },
            {
                component: 'component_app_modal_element_fade_left',
                component_state_transform: state.ui.modal.fade.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.fade.left.display,
                // component_state_opacity:  state.ui.modal.fade.left.opacity
            },
            {
                component: 'component_app_modal_element_fade_right',
                component_state_transform: state.ui.modal.fade.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.fade.right.display,
                // component_state_opacity:  state.ui.modal.fade.right.opacity
            },
            {
                component: 'component_app_modal_element_morph_top',
                component_state_transform: state.ui.modal.morph.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.morph.top.display,
                // component_state_opacity:  state.ui.modal.morph.top.opacity
            },
            {
                component: 'component_app_modal_element_morph_bottom',
                component_state_transform: state.ui.modal.morph.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.morph.bottom.display,
                // component_state_opacity:  state.ui.modal.morph.bottom.opacity
            },
            {
                component: 'component_app_modal_element_morph_left',
                component_state_transform: state.ui.modal.morph.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.morph.left.display,
                // component_state_opacity:  state.ui.modal.morph.left.opacity
            },
            {
                component: 'component_app_modal_element_morph_right',
                component_state_transform: state.ui.modal.morph.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.morph.right.display,
                // component_state_opacity:  state.ui.modal.morph.right.opacity
            },
            {
                component: 'component_app_modal_element_corner_top',
                component_state_transform: state.ui.modal.corner.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.corner.top.display,
                // component_state_opacity:  state.ui.modal.corner.top.opacity
            },
            {
                component: 'component_app_modal_element_corner_bottom',
                component_state_transform: state.ui.modal.corner.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.corner.bottom.display,
                // component_state_opacity:  state.ui.modal.corner.bottom.opacity
            },
            {
                component: 'component_app_modal_element_corner_left',
                component_state_transform: state.ui.modal.corner.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.corner.left.display,
                // component_state_opacity:  state.ui.modal.corner.left.opacity
            },
            {
                component: 'component_app_modal_element_corner_right',
                component_state_transform: state.ui.modal.corner.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.corner.right.display,
                // component_state_opacity:  state.ui.modal.corner.right.opacity
            }
        ];

        return components

    };

export default {
    get_components_handled

}
