import from_index from '../index.js';

  let values_update = () => {

      let state = from_index.Handle_return_state();

      if (document.getElementById('score_current_area') != null) {
          document.getElementById('score_current_area').innerText = `area: ${state.data.score.current.area}`;
          document.getElementById('score_current_met').innerText = `met: ${state.data.score.current.met}`;
          document.getElementById('score_current_user').innerText = `user: ${state.data.score.current.met}`;
          document.getElementById('score_current_fans').innerText = `fans: ${state.data.score.current.met}`;
          document.getElementById('score_current_messages').innerText = `messages: ${state.data.score.current.met}`;
          document.getElementById('score_current_likes').innerText = `data: ${state.data.score.current.met}`;
          document.getElementById('score_current_data').innerText = `data: ${state.data.score.current.met}`;
      };
      
      if (document.getElementById('component_app_status_state_events_mouse_game_bit_clientX') != null) {
          document.getElementById('component_app_status_state_events_mouse_game_bit_clientX').innerText = state.events.mouse.game_bit.clientX;
      };

      if (document.getElementById('component_app_status_state_events_mouse_game_bit_clientY') != null) {
          document.getElementById('component_app_status_state_events_mouse_game_bit_clientY').innerText = state.events.mouse.game_bit.clientY;
      };

      // page
      if (document.getElementById('component_app_status_display_page_top') != null) {
          document.getElementById('component_app_status_display_page_top').innerText = state.ui.modal.page.top.display;
      };

      if (document.getElementById('component_app_status_opacity_page_top') != null) {
          document.getElementById('component_app_status_opacity_page_top').innerText = state.ui.modal.page.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_page_top') != null) {
          document.getElementById('component_app_status_transform_page_top').innerText = state.ui.modal.page.top.transform;
      };

      if (document.getElementById('component_app_status_display_page_bottom') != null) {
          document.getElementById('component_app_status_display_page_bottom').innerText = state.ui.modal.page.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_page_bottom') != null) {
          document.getElementById('component_app_status_opacity_page_bottom').innerText = state.ui.modal.page.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_page_bottom') != null) {
          document.getElementById('component_app_status_transform_page_bottom').innerText = state.ui.modal.page.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_page_left') != null) {
          document.getElementById('component_app_status_display_page_left').innerText = state.ui.modal.page.left.display;
      };

      if (document.getElementById('component_app_status_opacity_page_left') != null) {
          document.getElementById('component_app_status_opacity_page_left').innerText = state.ui.modal.page.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_page_left') != null) {
          document.getElementById('component_app_status_transform_page_left').innerText = state.ui.modal.page.left.transform;
      };

      if (document.getElementById('component_app_status_display_page_right') != null) {
          document.getElementById('component_app_status_display_page_right').innerText = state.ui.modal.page.right.display;
      };

      if (document.getElementById('component_app_status_opacity_page_right') != null) {
          document.getElementById('component_app_status_opacity_page_right').innerText = state.ui.modal.page.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_page_right') != null) {
          document.getElementById('component_app_status_transform_page_right').innerText = state.ui.modal.page.right.transform;
      };


      // pop

      if (document.getElementById('component_app_status_display_pop_top') != null) {
          document.getElementById('component_app_status_display_pop_top').innerText = state.ui.modal.pop.top.display;
      };

      if (document.getElementById('component_app_status_opacity_pop_top') != null) {
          document.getElementById('component_app_status_opacity_pop_top').innerText = state.ui.modal.pop.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_pop_top') != null) {
          document.getElementById('component_app_status_transform_pop_top').innerText = state.ui.modal.pop.top.transform;
      };

      if (document.getElementById('component_app_status_display_pop_bottom') != null) {
          document.getElementById('component_app_status_display_pop_bottom').innerText = state.ui.modal.pop.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_pop_bottom') != null) {
          document.getElementById('component_app_status_opacity_pop_bottom').innerText = state.ui.modal.pop.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_pop_bottom') != null) {
          document.getElementById('component_app_status_transform_pop_bottom').innerText = state.ui.modal.pop.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_pop_left') != null) {
          document.getElementById('component_app_status_display_pop_left').innerText = state.ui.modal.pop.left.display;
      };

      if (document.getElementById('component_app_status_opacity_pop_left') != null) {
          document.getElementById('component_app_status_opacity_pop_left').innerText = state.ui.modal.pop.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_pop_left') != null) {
          document.getElementById('component_app_status_transform_pop_left').innerText = state.ui.modal.pop.left.transform;
      };

      if (document.getElementById('component_app_status_display_pop_right') != null) {
          document.getElementById('component_app_status_display_pop_right').innerText = state.ui.modal.pop.right.display;
      };

      if (document.getElementById('component_app_status_opacity_pop_right') != null) {
          document.getElementById('component_app_status_opacity_pop_right').innerText = state.ui.modal.pop.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_pop_right') != null) {
          document.getElementById('component_app_status_transform_pop_right').innerText = state.ui.modal.pop.right.transform;
      };
      
      // pip

      if (document.getElementById('component_app_status_display_pip_top') != null) {
          document.getElementById('component_app_status_display_pip_top').innerText = state.ui.modal.pip.top.display;
      };

      if (document.getElementById('component_app_status_opacity_pip_top') != null) {
          document.getElementById('component_app_status_opacity_pip_top').innerText = state.ui.modal.pip.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_pip_top') != null) {
          document.getElementById('component_app_status_transform_pip_top').innerText = state.ui.modal.pip.top.transform;
      };

      if (document.getElementById('component_app_status_display_pip_bottom') != null) {
          document.getElementById('component_app_status_display_pip_bottom').innerText = state.ui.modal.pip.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_pip_bottom') != null) {
          document.getElementById('component_app_status_opacity_pip_bottom').innerText = state.ui.modal.pip.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_pip_bottom') != null) {
          document.getElementById('component_app_status_transform_pip_bottom').innerText = state.ui.modal.pip.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_pip_left') != null) {
          document.getElementById('component_app_status_display_pip_left').innerText = state.ui.modal.pip.left.display;
      };

      if (document.getElementById('component_app_status_opacity_pip_left') != null) {
          document.getElementById('component_app_status_opacity_pip_left').innerText = state.ui.modal.pip.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_pip_left') != null) {
          document.getElementById('component_app_status_transform_pip_left').innerText = state.ui.modal.pip.left.transform;
      };

      if (document.getElementById('component_app_status_display_pip_right') != null) {
          document.getElementById('component_app_status_display_pip_right').innerText = state.ui.modal.pip.right.display;
      };

      if (document.getElementById('component_app_status_opacity_pip_right') != null) {
          document.getElementById('component_app_status_opacity_pip_right').innerText = state.ui.modal.pip.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_pip_right') != null) {
          document.getElementById('component_app_status_transform_pip_right').innerText = state.ui.modal.pip.right.transform;
      };

      // overlay

      if (document.getElementById('component_app_status_display_overlay_top') != null) {
          document.getElementById('component_app_status_display_overlay_top').innerText = state.ui.modal.overlay.top.display;
      };

      if (document.getElementById('component_app_status_opacity_overlay_top') != null) {
          document.getElementById('component_app_status_opacity_overlay_top').innerText = state.ui.modal.overlay.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_overlay_top') != null) {
          document.getElementById('component_app_status_transform_overlay_top').innerText = state.ui.modal.overlay.top.transform;
      };

      if (document.getElementById('component_app_status_display_overlay_bottom') != null) {
          document.getElementById('component_app_status_display_overlay_bottom').innerText = state.ui.modal.overlay.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_overlay_bottom') != null) {
          document.getElementById('component_app_status_opacity_overlay_bottom').innerText = state.ui.modal.overlay.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_overlay_bottom') != null) {
          document.getElementById('component_app_status_transform_overlay_bottom').innerText = state.ui.modal.overlay.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_overlay_left') != null) {
          document.getElementById('component_app_status_display_overlay_left').innerText = state.ui.modal.overlay.left.display;
      };

      if (document.getElementById('component_app_status_opacity_overlay_left') != null) {
          document.getElementById('component_app_status_opacity_overlay_left').innerText = state.ui.modal.overlay.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_overlay_left') != null) {
          document.getElementById('component_app_status_transform_overlay_left').innerText = state.ui.modal.overlay.left.transform;
      };

      if (document.getElementById('component_app_status_display_overlay_right') != null) {
          document.getElementById('component_app_status_display_overlay_right').innerText = state.ui.modal.overlay.right.display;
      };

      if (document.getElementById('component_app_status_opacity_overlay_right') != null) {
          document.getElementById('component_app_status_opacity_overlay_right').innerText = state.ui.modal.overlay.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_overlay_right') != null) {
          document.getElementById('component_app_status_transform_overlay_right').innerText = state.ui.modal.overlay.right.transform;
      };

      // menu

      if (document.getElementById('component_app_status_display_menu_top') != null) {
          document.getElementById('component_app_status_display_menu_top').innerText = state.ui.modal.menu.top.display;
      };

      if (document.getElementById('component_app_status_opacity_menu_top') != null) {
          document.getElementById('component_app_status_opacity_menu_top').innerText = state.ui.modal.menu.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_menu_top') != null) {
          document.getElementById('component_app_status_transform_menu_top').innerText = state.ui.modal.menu.top.transform;
      };

      if (document.getElementById('component_app_status_display_menu_bottom') != null) {
          document.getElementById('component_app_status_display_menu_bottom').innerText = state.ui.modal.menu.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_menu_bottom') != null) {
          document.getElementById('component_app_status_opacity_menu_bottom').innerText = state.ui.modal.menu.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_menu_bottom') != null) {
          document.getElementById('component_app_status_transform_menu_bottom').innerText = state.ui.modal.menu.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_menu_left') != null) {
          document.getElementById('component_app_status_display_menu_left').innerText = state.ui.modal.menu.left.display;
      };

      if (document.getElementById('component_app_status_opacity_menu_left') != null) {
          document.getElementById('component_app_status_opacity_menu_left').innerText = state.ui.modal.menu.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_menu_left') != null) {
          document.getElementById('component_app_status_transform_menu_left').innerText = state.ui.modal.menu.left.transform;
      };

      if (document.getElementById('component_app_status_display_menu_right') != null) {
          document.getElementById('component_app_status_display_menu_right').innerText = state.ui.modal.menu.right.display;
      };

      if (document.getElementById('component_app_status_opacity_menu_right') != null) {
          document.getElementById('component_app_status_opacity_menu_right').innerText = state.ui.modal.menu.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_menu_right') != null) {
          document.getElementById('component_app_status_transform_menu_right').innerText = state.ui.modal.menu.right.transform;
      };

      // fade

      if (document.getElementById('component_app_status_display_fade_top') != null) {
          document.getElementById('component_app_status_display_fade_top').innerText = state.ui.modal.fade.top.display;
      };

      if (document.getElementById('component_app_status_opacity_fade_top') != null) {
          document.getElementById('component_app_status_opacity_fade_top').innerText = state.ui.modal.fade.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_fade_top') != null) {
          document.getElementById('component_app_status_transform_fade_top').innerText = state.ui.modal.fade.top.transform;
      };

      if (document.getElementById('component_app_status_display_fade_bottom') != null) {
          document.getElementById('component_app_status_display_fade_bottom').innerText = state.ui.modal.fade.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_fade_bottom') != null) {
          document.getElementById('component_app_status_opacity_fade_bottom').innerText = state.ui.modal.fade.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_fade_bottom') != null) {
          document.getElementById('component_app_status_transform_fade_bottom').innerText = state.ui.modal.fade.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_fade_left') != null) {
          document.getElementById('component_app_status_display_fade_left').innerText = state.ui.modal.fade.left.display;
      };

      if (document.getElementById('component_app_status_opacity_fade_left') != null) {
          document.getElementById('component_app_status_opacity_fade_left').innerText = state.ui.modal.fade.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_fade_left') != null) {
          document.getElementById('component_app_status_transform_fade_left').innerText = state.ui.modal.fade.left.transform;
      };

      if (document.getElementById('component_app_status_display_fade_right') != null) {
          document.getElementById('component_app_status_display_fade_right').innerText = state.ui.modal.fade.right.display;
      };

      if (document.getElementById('component_app_status_opacity_fade_right') != null) {
          document.getElementById('component_app_status_opacity_fade_right').innerText = state.ui.modal.fade.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_fade_right') != null) {
          document.getElementById('component_app_status_transform_fade_right').innerText = state.ui.modal.fade.right.transform;
      };

      // corner

      if (document.getElementById('component_app_status_display_corner_top') != null) {
          document.getElementById('component_app_status_display_corner_top').innerText = state.ui.modal.corner.top.display;
      };

      if (document.getElementById('component_app_status_opacity_corner_top') != null) {
          document.getElementById('component_app_status_opacity_corner_top').innerText = state.ui.modal.corner.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_corner_top') != null) {
          document.getElementById('component_app_status_transform_corner_top').innerText = state.ui.modal.corner.top.transform;
      };

      if (document.getElementById('component_app_status_display_corner_bottom') != null) {
          document.getElementById('component_app_status_display_corner_bottom').innerText = state.ui.modal.corner.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_corner_bottom') != null) {
          document.getElementById('component_app_status_opacity_corner_bottom').innerText = state.ui.modal.corner.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_corner_bottom') != null) {
          document.getElementById('component_app_status_transform_corner_bottom').innerText = state.ui.modal.corner.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_corner_left') != null) {
          document.getElementById('component_app_status_display_corner_left').innerText = state.ui.modal.corner.left.display;
      };

      if (document.getElementById('component_app_status_opacity_corner_left') != null) {
          document.getElementById('component_app_status_opacity_corner_left').innerText = state.ui.modal.corner.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_corner_left') != null) {
          document.getElementById('component_app_status_transform_corner_left').innerText = state.ui.modal.corner.left.transform;
      };

      if (document.getElementById('component_app_status_display_corner_right') != null) {
          document.getElementById('component_app_status_display_corner_right').innerText = state.ui.modal.corner.right.display;
      };

      if (document.getElementById('component_app_status_opacity_corner_right') != null) {
          document.getElementById('component_app_status_opacity_corner_right').innerText = state.ui.modal.corner.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_corner_right') != null) {
          document.getElementById('component_app_status_transform_corner_right').innerText = state.ui.modal.corner.right.transform;
      };

      // morph

      if (document.getElementById('component_app_status_display_morph_top') != null) {
          document.getElementById('component_app_status_display_morph_top').innerText = state.ui.modal.morph.top.display;
      };

      if (document.getElementById('component_app_status_opacity_morph_top') != null) {
          document.getElementById('component_app_status_opacity_morph_top').innerText = state.ui.modal.morph.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_morph_top') != null) {
          document.getElementById('component_app_status_transform_morph_top').innerText = state.ui.modal.morph.top.transform;
      };

      if (document.getElementById('component_app_status_display_morph_bottom') != null) {
          document.getElementById('component_app_status_display_morph_bottom').innerText = state.ui.modal.morph.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_morph_bottom') != null) {
          document.getElementById('component_app_status_opacity_morph_bottom').innerText = state.ui.modal.morph.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_morph_bottom') != null) {
          document.getElementById('component_app_status_transform_morph_bottom').innerText = state.ui.modal.morph.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_morph_left') != null) {
          document.getElementById('component_app_status_display_morph_left').innerText = state.ui.modal.morph.left.display;
      };

      if (document.getElementById('component_app_status_opacity_morph_left') != null) {
          document.getElementById('component_app_status_opacity_morph_left').innerText = state.ui.modal.morph.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_morph_left') != null) {
          document.getElementById('component_app_status_transform_morph_left').innerText = state.ui.modal.morph.left.transform;
      };

      if (document.getElementById('component_app_status_display_morph_right') != null) {
          document.getElementById('component_app_status_display_morph_right').innerText = state.ui.modal.morph.right.display;
      };

      if (document.getElementById('component_app_status_opacity_morph_right') != null) {
          document.getElementById('component_app_status_opacity_morph_right').innerText = state.ui.modal.morph.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_morph_right') != null) {
          document.getElementById('component_app_status_transform_morph_right').innerText = state.ui.modal.morph.right.transform;
      };

      // gradient

      if (document.getElementById('component_app_status_display_gradient_top') != null) {
          document.getElementById('component_app_status_display_gradient_top').innerText = state.ui.modal.gradient.top.display;
      };

      if (document.getElementById('component_app_status_opacity_gradient_top') != null) {
          document.getElementById('component_app_status_opacity_gradient_top').innerText = state.ui.modal.gradient.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_gradient_top') != null) {
          document.getElementById('component_app_status_transform_gradient_top').innerText = state.ui.modal.gradient.top.transform;
      };

      if (document.getElementById('component_app_status_display_gradient_bottom') != null) {
          document.getElementById('component_app_status_display_gradient_bottom').innerText = state.ui.modal.gradient.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_gradient_bottom') != null) {
          document.getElementById('component_app_status_opacity_gradient_bottom').innerText = state.ui.modal.gradient.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_gradient_bottom') != null) {
          document.getElementById('component_app_status_transform_gradient_bottom').innerText = state.ui.modal.gradient.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_gradient_left') != null) {
          document.getElementById('component_app_status_display_gradient_left').innerText = state.ui.modal.gradient.left.display;
      };

      if (document.getElementById('component_app_status_opacity_gradient_left') != null) {
          document.getElementById('component_app_status_opacity_gradient_left').innerText = state.ui.modal.gradient.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_gradient_left') != null) {
          document.getElementById('component_app_status_transform_gradient_left').innerText = state.ui.modal.gradient.left.transform;
      };

      if (document.getElementById('component_app_status_display_gradient_right') != null) {
          document.getElementById('component_app_status_display_gradient_right').innerText = state.ui.modal.gradient.right.display;
      };

      if (document.getElementById('component_app_status_opacity_gradient_right') != null) {
          document.getElementById('component_app_status_opacity_gradient_right').innerText = state.ui.modal.gradient.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_gradient_right') != null) {
          document.getElementById('component_app_status_transform_gradient_right').innerText = state.ui.modal.gradient.right.transform;
      };

      // nav

      if (document.getElementById('component_app_status_display_nav_top') != null) {
          document.getElementById('component_app_status_display_nav_top').innerText = state.ui.modal.nav.top.display;
      };

      if (document.getElementById('component_app_status_opacity_nav_top') != null) {
          document.getElementById('component_app_status_opacity_nav_top').innerText = state.ui.modal.nav.top.opacity;
      };

      if (document.getElementById('component_app_status_transform_nav_top') != null) {
          document.getElementById('component_app_status_transform_nav_top').innerText = state.ui.modal.nav.top.transform;
      };

      if (document.getElementById('component_app_status_display_nav_bottom') != null) {
          document.getElementById('component_app_status_display_nav_bottom').innerText = state.ui.modal.nav.bottom.display;
      };

      if (document.getElementById('component_app_status_opacity_nav_bottom') != null) {
          document.getElementById('component_app_status_opacity_nav_bottom').innerText = state.ui.modal.nav.bottom.opacity;
      };

      if (document.getElementById('component_app_status_transform_nav_bottom') != null) {
          document.getElementById('component_app_status_transform_nav_bottom').innerText = state.ui.modal.nav.bottom.transform;
      };

      if (document.getElementById('component_app_status_display_nav_left') != null) {
          document.getElementById('component_app_status_display_nav_left').innerText = state.ui.modal.nav.left.display;
      };

      if (document.getElementById('component_app_status_opacity_nav_left') != null) {
          document.getElementById('component_app_status_opacity_nav_left').innerText = state.ui.modal.nav.left.opacity;
      };

      if (document.getElementById('component_app_status_transform_nav_left') != null) {
          document.getElementById('component_app_status_transform_nav_left').innerText = state.ui.modal.nav.left.transform;
      };

      if (document.getElementById('component_app_status_display_nav_right') != null) {
          document.getElementById('component_app_status_display_nav_right').innerText = state.ui.modal.nav.right.display;
      };

      if (document.getElementById('component_app_status_opacity_nav_right') != null) {
          document.getElementById('component_app_status_opacity_nav_right').innerText = state.ui.modal.nav.right.opacity;
      };

      if (document.getElementById('component_app_status_transform_nav_right') != null) {
          document.getElementById('component_app_status_transform_nav_right').innerText = state.ui.modal.nav.right.transform;
      };

      // browser

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_ux_browser_height').innerText = state.ux.browser.height;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_ux_browser_width').innerText = state.ux.browser.width;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_ux_dimensions_height').innerText = state.ux.dimensions.height;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_ux_dimensions_width').innerText = state.ux.dimensions.width;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_clientX').innerHTML = state.events.mouse.clientX;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_clientY').innerHTML = state.events.mouse.clientY;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_drop_start_clientX').innerHTML = state.events.mouse.drop_start.clientX;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_drop_start_clientY').innerHTML = state.events.mouse.drop_start.clientY;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_drop_end_clientX').innerHTML = state.events.mouse.drop_end.clientX;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_drop_end_clientY').innerHTML = state.events.mouse.drop_end.clientY;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_drop_clientX').innerHTML = state.events.mouse.drop.clientX;
      };

      if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
          document.getElementById('component_app_status_state_events_mouse_drop_clientY').innerHTML = state.events.mouse.drop.clientY;
      };

      if (document.getElementById('dragX') != null) {
          document.getElementById('dragX').innerHTML = state.events.mouse.drag.clientX;
      };

      if (document.getElementById('dragY') != null) {
          document.getElementById('dragY').innerHTML = state.events.mouse.drag.clientY;
      };

      if (document.getElementById('penX') != null) {
          document.getElementById('penX').innerHTML = state.events.mouse.pen.clientX;
      };

      if (document.getElementById('penY') != null) {
          document.getElementById('penY').innerHTML = state.events.mouse.pen.clientY;
      };

      if (document.getElementById('pencilX') != null) {
          document.getElementById('pencilX').innerHTML = state.events.mouse.pencil.clientX;
      };

      if (document.getElementById('pencilY') != null) {
          document.getElementById('pencilY').innerHTML = state.events.mouse.pencil.clientY;
      };


      if (document.getElementById('component_app_status_state_events_mouse_x_axis') != null) {
          document.getElementById('component_app_status_state_events_mouse_x_axis').innerHTML = state.events.mouse.x_axis;
      };

      if (document.getElementById('component_app_status_state_events_mouse_y_axis') != null) {
          document.getElementById('component_app_status_state_events_mouse_y_axis').innerHTML = state.events.mouse.y_axis;
      };

      if (document.getElementById('component_app_status_state_events_mouse_absolute') != null) {
          document.getElementById('component_app_status_state_events_mouse_absolute').innerHTML = state.events.mouse.absolute;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x').innerHTML = state.events.mouse.accelerationIncludingGravity.x;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_y').innerHTML = state.events.mouse.accelerationIncludingGravity.y;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_z').innerHTML = state.events.mouse.accelerationIncludingGravity.z;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_acceleration_x').innerHTML = state.events.mouse.acceleration.x;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_acceleration_y').innerHTML = state.events.mouse.acceleration.y;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_acceleration_z').innerHTML = state.events.mouse.acceleration.z;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_rotationRate_alpha').innerHTML = state.events.mouse.rotationRate.alpha;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_rotationRate_beta').innerHTML = state.events.mouse.rotationRate.beta;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_rotationRate_gamma').innerHTML = state.events.mouse.rotationRate.gamma;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_alpha').innerHTML = state.events.mouse.alpha;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_beta').innerHTML = state.events.mouse.beta;
      };

      if (document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x') != null) {
          document.getElementById('component_app_status_state_events_mouse_gamma').innerHTML = state.events.mouse.gamma;
      };

  };

  let from_Import = () => {
      let a = 'from_Import'
      return a
  };

export default {
    values_update,
    from_Import
}
