<?php
function my_theme_scripts_function() {

	wp_enqueue_script( 'fb_script', 'https://www.gstatic.com/firebasejs/5.10.0/firebase.js');
	wp_enqueue_script( 'myscript', get_template_directory_uri() . '/dist/phlygh.com.e31bb0bc.js');
	wp_enqueue_style('main-styles', get_template_directory_uri() . '/dist/phlygh.com.e31bb0bc.css', array(), filemtime(get_template_directory() . '/dist/phlygh.com.e31bb0bc.css'), false);

}


add_action('wp_enqueue_scripts','my_theme_scripts_function');

?>