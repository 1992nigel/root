import from_index from '../index.js';

    let get_stages_handled = () => {

        let state = from_index.Handle_return_state();

        let stages;

        stages = [

            // bg
            {
                component: 'bg_texture',
                //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loading == false,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            
            // mg
            {
                component: 'mg_interactive',
                //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loading == false,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // fg
            {
                component: 'fg_effect',
                //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.animation.instances.loading == false,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // center
            // center - set 1 (before office)
            {
                component: 'bg_stage_set_1_center',
                component_state_transform: (state.ui.stage.cardboard.set == 1),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // center - set 2 (yellow office)
            {
                component: 'bg_stage_set_2_center',
                component_state_transform: (state.ui.stage.cardboard.set == 2),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // center - set 3 (white office)
            {
                component: 'bg_stage_set_3_center',
                component_state_transform: (state.ui.stage.cardboard.set == 3),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 3)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // center - set 2 (yellow office)
            {
                component: 'bg_stage_set_4_center',
                component_state_transform: (state.ui.stage.cardboard.set == 4),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 4)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // center - set 3 (white office)
            {
                component: 'bg_stage_set_5_center',
                component_state_transform: (state.ui.stage.cardboard.set == 5),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 5)
                // component_state_opacity:  state.ui.gui.top.opacity
            },


            // top
            // top - set 1 (before office)
            {
                component: 'bg_stage_set_top',
                component_state_transform: (state.ui.stage.cardboard.set == 1),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // top - set 2 (yellow office)
            {
                component: 'bg_stage_set_2_top',
                component_state_transform: (state.ui.stage.cardboard.set == 2),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2)
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // bottom
            // bottom - set 1 (before office)
            {
                component: 'bg_stage_set_bottom',
                component_state_transform: (state.ui.stage.cardboard.set == 1),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // bottom - set 2 (yellow office)
            {
                component: 'bg_stage_set_2_bottom',
                component_state_transform: (state.ui.stage.cardboard.set == 2),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2)
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            // left
            // left - set 1 (before office)
            {
                component: 'bg_stage_set_left',
                component_state_transform: (state.ui.stage.cardboard.set == 1),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // left - set 2 (yellow office)
            {
                component: 'bg_stage_set_2_left',
                component_state_transform: (state.ui.stage.cardboard.set == 2),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // left Outside
            // left Outside - set 1 (before office)
            {
                component: 'bg_stage_set_left_outside',
                component_state_transform: (state.ui.stage.cardboard.set == 1),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // left Outside - set 2 (yellow office)
            {
                component: 'bg_stage_set_2_left_outside',
                component_state_transform: (state.ui.stage.cardboard.set == 2),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2)
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // right
            // right - set 1 (before office)
            {
                component: 'bg_stage_set_right',
                component_state_transform: (state.ui.stage.cardboard.set == 1),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // right - set 2 (yellow office)
            {
                component: 'bg_stage_set_2_right',
                component_state_transform: (state.ui.stage.cardboard.set == 2),
                component_state_transform_true: 'fadeIn',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2)
                // component_state_opacity:  state.ui.gui.top.opacity
            },


        ];

        return stages

    };

export default {
    get_stages_handled

}
