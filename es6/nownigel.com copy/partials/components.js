import from_index from '../index.js';

    let get_components_handled = () => {

        let state = from_index.Handle_return_state();

        let components = [

            // bg texture
            {
                component: 'bg_texture',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded_0,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'draw_hand',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded_0,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // bg (cardboard center)
            {
                component: 'bg_office',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 3 || state.ui.stage.cardboard_fold.set == 4 || state.ui.stage.cardboard_fold.set == 5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_cliff',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_park',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_outside',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_indoor',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_sky',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_city',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_building',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'bg_basement',
                //component_state_transform: state.ui.stage.cardboard_fold.set == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // mg_interactive
            
            {
                component: 'mg_interactive',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded_0,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // mg
            
            {
                component: 'mg_office',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // fg texture

            {
                component: 'fg_effect',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loaded_0,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // fg
            
            {
                component: 'fg_office',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == 3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // folds

            {
                component: 'fold_1',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loading',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: (state.ui.stage.cardboard_fold.fold == 1) && !state.animation.instances.loaded_0,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_0',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded && state.animation.instances.loaded_0 && (!state.animation.instances.loaded_1 && !state.animation.instances.loaded_2 && !state.animation.instances.loaded_3 && !state.animation.instances.loaded_4 && !state.animation.instances.loaded_5 && !state.animation.instances.loaded_6 && !state.animation.instances.loaded_7 && !state.animation.instances.loaded_8 && !state.animation.instances.loaded_9 && !state.animation.instances.loaded_10 && !state.animation.instances.loaded_11 && !state.animation.instances.loaded_12),
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_1',
                //component_state_transform: !state.animation.instances.loaded_1,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded && state.animation.instances.loaded_1,
                //component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_2',
                //component_state_transform: !state.animation.instances.loaded_2,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_3',
                //component_state_transform: state.animation.instances.loaded_3,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_4',
                //component_state_transform: state.animation.instances.loaded_4,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_5',
                //component_state_transform: state.animation.instances.loaded_5,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_6',
                //component_state_transform: state.animation.instances.loaded_6,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_7',
                //component_state_transform: state.animation.instances.loaded_7,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_8',
                //component_state_transform: state.animation.instances.loaded_8,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_9',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_10',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_11',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_1_loaded_12',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 1 && state.animation.instances.loaded_12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // fold 2
            {
                component: 'fold_2',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 2.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_1',
                //component_state_transform: !state.animation.instances.loaded_1,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded && state.animation.instances.loaded_1,
                //component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_2',
                //component_state_transform: !state.animation.instances.loaded_2,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_3',
                //component_state_transform: state.animation.instances.loaded_3,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_4',
                //component_state_transform: state.animation.instances.loaded_4,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_5',
                //component_state_transform: state.animation.instances.loaded_5,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_6',
                //component_state_transform: state.animation.instances.loaded_6,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_7',
                //component_state_transform: state.animation.instances.loaded_7,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_8',
                //component_state_transform: state.animation.instances.loaded_8,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_9',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_10',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_11',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_2_loaded_12',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 2 && state.animation.instances.loaded_12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // fold 3
            {
                component: 'fold_3',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 3.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_1',
                //component_state_transform: !state.animation.instances.loaded_1,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded && state.animation.instances.loaded_1,
                //component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_2',
                //component_state_transform: !state.animation.instances.loaded_2,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_3',
                //component_state_transform: state.animation.instances.loaded_3,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_4',
                //component_state_transform: state.animation.instances.loaded_4,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_5',
                //component_state_transform: state.animation.instances.loaded_5,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_6',
                //component_state_transform: state.animation.instances.loaded_6,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_7',
                //component_state_transform: state.animation.instances.loaded_7,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_8',
                //component_state_transform: state.animation.instances.loaded_8,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_9',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_10',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.set == state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_11',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_3_loaded_12',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 3 && state.animation.instances.loaded_12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // fold 4
            {
                component: 'fold_4',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 3.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_1',
                //component_state_transform: !state.animation.instances.loaded_1,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded && state.animation.instances.loaded_1,
                //component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_2',
                //component_state_transform: !state.animation.instances.loaded_2,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_3',
                //component_state_transform: state.animation.instances.loaded_3,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_4',
                //component_state_transform: state.animation.instances.loaded_4,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_5',
                //component_state_transform: state.animation.instances.loaded_5,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_6',
                //component_state_transform: state.animation.instances.loaded_6,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_7',
                //component_state_transform: state.animation.instances.loaded_7,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_8',
                //component_state_transform: state.animation.instances.loaded_8,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_9',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_10',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_11',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_4_loaded_12',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 4 && state.animation.instances.loaded_12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // fold 5
            {
                component: 'fold_5',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 5.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_1',
                //component_state_transform: !state.animation.instances.loaded_1,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded && state.animation.instances.loaded_1,
                //component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_2',
                //component_state_transform: !state.animation.instances.loaded_2,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_3',
                //component_state_transform: state.animation.instances.loaded_3,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_4',
                //component_state_transform: state.animation.instances.loaded_4,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_5',
                //component_state_transform: state.animation.instances.loaded_5,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_6',
                //component_state_transform: state.animation.instances.loaded_6,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_7',
                //component_state_transform: state.animation.instances.loaded_7,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_8',
                //component_state_transform: state.animation.instances.loaded_8,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_9',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_10',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_11',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_5_loaded_12',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 5 && state.animation.instances.loaded_12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // fold 6
            {
                component: 'fold_6',
                //component_state_transform: state.ui.stage.cardboard_fold.fold == 6.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_1',
                //component_state_transform: !state.animation.instances.loaded_1,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded && state.animation.instances.loaded_1,
                //component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_2',
                //component_state_transform: !state.animation.instances.loaded_2,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_3',
                //component_state_transform: state.animation.instances.loaded_3,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_3,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_4',
                //component_state_transform: state.animation.instances.loaded_4,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_4,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_5',
                //component_state_transform: state.animation.instances.loaded_5,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_5,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_6',
                //component_state_transform: state.animation.instances.loaded_6,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_6,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_7',
                //component_state_transform: state.animation.instances.loaded_7,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_7,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_8',
                //component_state_transform: state.animation.instances.loaded_8,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_8,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_9',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_9,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_10',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_10,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_11',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_11,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'fold_6_loaded_12',
                //component_state_transform: state.animation.instances.loaded_9,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard_fold.fold == 6 && state.animation.instances.loaded_12,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // anchors
            {
                component: 'anchor_top',
                component_state_transform: state.ui.gui.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.top.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            {
                component: 'anchor_bottom',
                component_state_transform: state.ui.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },

            {
                component: 'anchor_left',
                component_state_transform: state.ui.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.gui.left.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'anchor_right',
                component_state_transform: state.ui.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.gui.right.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // toast
            {
                component: 'component_app_gui_toast_top_left',
                component_state_transform: state.ui.gui.top_left.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.top_left.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_toast_top_right',
                component_state_transform: state.ui.gui.top_right.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.top_right.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            {
                component: 'component_app_gui_toast_bottom_left',
                component_state_transform: state.ui.gui.bottom_left.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom_left.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            {
                component: 'component_app_gui_toast_bottom_right',
                component_state_transform: state.ui.gui.bottom_right.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom_right.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },

            // GUIS
            {
                component: 'component_app_gui_arrows_top',
                component_state_transform: state.ui.gui.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.top.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_top_left',
                component_state_transform: state.ui.gui.top_left.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.top_left.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_top_right',
                component_state_transform: state.ui.gui.top_right.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.top_right.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_bottom',
                component_state_transform: state.ui.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            {
                component: 'component_app_gui_arrows_bottom_left',
                component_state_transform: state.ui.gui.bottom_left.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom_left.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            {
                component: 'component_app_gui_arrows_bottom_right',
                component_state_transform: state.ui.gui.bottom_right.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: !state.ui.gui.bottom_right.transform,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            {
                component: 'component_app_gui_arrows_left',
                component_state_transform: state.ui.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.gui.left.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_arrows_right',
                component_state_transform: state.ui.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: !state.ui.gui.right.transform,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'component_app_gui_bottom_center',
                component_state_transform: state.ui.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom.display,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            
            {
                component: 'component_app_gui_bottom_left',
                component_state_transform: state.ui.gui.bottom_left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.bottom_left.display,
                // component_state_opacity:  state.ui.gui.bottom_left.opacity
            },
            
            {
                component: 'component_app_gui_bottom_right',
                component_state_transform: state.ui.gui.bottom_right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.bottom_right.display,
                // component_state_opacity:  state.ui.gui.bottom_right.opacity
            },
            
            {
                component: 'component_app_gui_top_center',
                component_state_transform: state.ui.gui.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            
            {
                component: 'component_app_gui_top_left',
                component_state_transform: state.ui.gui.top_left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.top_left.display,
                // component_state_opacity:  state.ui.gui.top_left.opacity
            },
            
            {
                component: 'component_app_gui_top_right',
                component_state_transform: state.ui.gui.top_right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.top_right.display,
                // component_state_opacity:  state.ui.gui.top_right.opacity
            },

            {
                component: 'component_app_gui_left',
                component_state_transform: state.ui.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.left.display,
                // component_state_opacity:  state.ui.gui.left.opacity
            },
            
            {
                component: 'component_app_gui_right',
                component_state_transform: state.ui.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.right.display,
                // component_state_opacity:  state.ui.gui.right.opacity
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
