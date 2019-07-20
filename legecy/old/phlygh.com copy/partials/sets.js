import from_index from '../index.js';

    let get_sets_handled = () => {

        let state = from_index.Handle_return_state();

        let sets;

        sets = [

            // interactive
            // interactive - set 1 (before office)
            {
                component: 'mg_stage_set_1_left_outside',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 2 && state.ui.stage.cardboard_mg.yaxis == 0)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // interactive
            // interactive - set 1 (before office)
            {
                component: 'mg_stage_set_1_left',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            // interactive
            // interactive - set 1 (before office)
            {
                component: 'mg_stage_set_1_center',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == 0)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'mg_stage_set_1_right',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == -1 && state.ui.stage.cardboard_mg.yaxis == 0)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'mg_stage_set_1_top',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == 1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            {
                component: 'mg_stage_set_1_bottom',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == -1)
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // set 2


            // interactive
            // interactive - set 1 (before office)
            {
                component: 'mg_stage_set_2_center',
                // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
                // component_state_transform_true: 'enterTopBounce',
                // component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.stage.cardboard.set == 2 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == 0)
                // component_state_opacity:  state.ui.gui.top.opacity
            },
        ];

        return sets

    };

export default {
    get_sets_handled

}
