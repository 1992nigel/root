<?php

function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');

function my_theme_scripts_function() {

	//wp_enqueue_script( 'fb_script', 'https://www.gstatic.com/firebasejs/5.10.0/firebase.js');
	//wp_enqueue_script( 'myscript', 'http://phlygh.com/wp-content/themes/phlygh_wp/dist/wp.18c4783b.js');
	//wp_enqueue_style('main-styles', 'http://phlygh.com/wp-content/themes/phlygh_wp/dist/wp.cfc9600e.css', array(), filemtime('http://phlygh.com/wp-content/themes/phlygh_wp/dist/wp.cfc9600e.css'), false);

}


add_action('wp_enqueue_scripts','my_theme_scripts_function');

?>