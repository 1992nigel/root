<!DOCTYPE html>
<html>

<head>
    <?php wp_head(); ?>
    <title>Gnougn: handmade everything</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Gaegu:300,400,700&amp;subset=korean" rel="stylesheet">
    </link>
    <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
    <audio id="componentSound" src="http://gnougn.com/audio/mike.mp3" autostart="false"></audio>
    <!-- firebase -->
    <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
</head>

<body id="component_app_body" class="position_relative width_100vw float_left overflow_hidden scrollbaryhidden background_black">


    <section
    tabindex="1"
    id="component_app"
    class="position_relative width_100 height_100vh min_height_100vh float_left overflow_y easing_1 scrollbaryhidden z_index_0">

        <div
        id="component_app_staging"
        class="position_relative top_0 left_0 height_100vh width_100 float_left">
        </div>