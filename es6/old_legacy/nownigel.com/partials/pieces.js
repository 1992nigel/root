import from_index from '../index.js';

    let get_pieces_handled = () => {

        let state = from_index.Handle_return_state();

        let pieces;

        pieces = [

            // interactive
            // interactive - set 1 (before office)
            {
                component: 'interactive_player',
                component_state_transform: (state.ui.interaction.player_1.transform == true),
                component_state_transform_true: 'enterTopBounce',
                component_state_transform_false: 'fadeOut',
                component_state_display: (state.ui.interaction.player_1.display == true)
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // interactive
            // interactive - set 2
            {
                component: 'mg_stage_set_2_interactive_center',
                //component_state_transform: (state.animation.instances.start == true),
                //component_state_transform_true: 'enterTopBounce',
                //component_state_transform_false: 'fadeOut',
                component_state_display: state.animation.instances.start == true && state.ui.stage.cardboard.set == 2,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

            // folds

            {
                component: 'fold_1',
                //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.cardboard.scene >= 0,
                // component_state_opacity:  state.ui.gui.top.opacity
            },

        ];

        return pieces

    };

export default {
    get_pieces_handled

}
