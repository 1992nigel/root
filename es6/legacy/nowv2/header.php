<!DOCTYPE html>
<html>
      <head>
    <?php wp_head(); ?>
         <title>Gnougn: handmade everything</title>
         <meta name="viewport" content="minimal-ui width=device-width, initial-scale=1.0"/>
         <link rel="stylesheet" type="text/css" href="http://nownigel.com/dist/style.516ce11a.css">
         </link>
         <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
         <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
         <link href="https://fonts.googleapis.com/css?family=Gaegu:300,400,700&amp;subset=korean" rel="stylesheet">
         </link>
         <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
         <audio id="componentSound" src="http://gnougn.com/audio/mike.mp3" autostart="false"></audio>
         <audio id="componentSound1" src="http://gnougn.com/audio/squish1.mp3" autostart="false"></audio>
         <audio id="componentSound2" src="http://gnougn.com/audio/squish2.mp3" autostart="false"></audio>
         <!-- firebase -->
         <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
      </head>

  <!-- capture all events -->
  <body tabindex="1" id="component_app_body" class="position_relative overflow_hidden height_100vh width_100vw float_left top_0 left_0 scrollbaryhidden bg_white">

        <!-- rendering default interactive here -->
        <div id="component_app_animation" class="position_fixed calc_02vh border_01vh_dark_yellow_9 box_shadow_top_1vh_dark float_left top_0 left_0 right_0 bottom_0 margin_auto display opacity_1 overflow_hidden easing_025">

          <div id="component_app_animation_background" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto width_100 height_100vh float_left display opacity_1 overflow_hidden">
          </div>

          <!-- rendering default interactive here -->
          <div id="component_app_animation_midground" class="position_absolute top_0 left_0 right_0 bottom_0 margin_auto width_100 height_100vh float_left display opacity_1 overflow_hidden">
          </div>

        </div>

        <!-- rendering default interactive here -->
        <div id="component_app_animation_foreground" class="position_fixed top_0 left_0 right_0 bottom_0 margin_auto width_100 height_100vh float_left display opacity_1 overflow_hidden">
        </div>

        <!-- rendering default interactive here -->
        <div id="component_app_guis" class=" top_0 left_0 width_100 height_100vh float_left top_0 left_0 display opacity_1 overflow_hidden">
        </div>

        <!-- capture scroll event -->
        <div id="component_app_scrolling" class="position_fixed top_0 left_0 width_100 height_100vh overflow_y scrollbaryhidden float_left">

          <!-- rendering default content here -->
          <div id="component_app_content" class="position_relative width_100 float_left">
          </div>
          
          <!-- rendering default wordpress here -->
          <div id="wp" class="position_relative width_100vw float_left margin_auto bg_green">
