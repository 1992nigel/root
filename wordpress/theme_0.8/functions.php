<?php

add_theme_support( 'post-thumbnails' );

add_filter( 'comment_post_redirect', function ( $location ) {
    return get_permalink($_POST['comment_post_ID']);
} );

wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array ( 'jquery' ), 1.1, true);


//wp_enqueue_script('jquery');

//wp_enqueue_style( 'style', get_stylesheet_uri() );

wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css',false,'1.1','all');

wp_enqueue_style( 'reset', get_template_directory_uri() . '/css/reset.css',false,'1.1','all');

wp_enqueue_style( 'normal', get_template_directory_uri() . '/css/normal.css',false,'1.1','all');

add_theme_support( 'infinite-scroll', array(
    'type'           => 'scroll',
    'footer_widgets' => false,
    'container'      => 'main',
    'wrapper'        => true,
    'render'         => false,
    'posts_per_page' => false
) );

add_theme_support(
	'post-formats',
	array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
		'gallery',
		'standard',
		'status',
		'audio',
		'chat',
	)
);

add_filter( 'get_the_archive_title', 'my_theme_archive_title' );

function my_theme_archive_title( $title ) {
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	} elseif ( is_author() ) {
		$title = '<span class="vcard">' . get_the_author() . '</span>';
	} elseif ( is_post_type_archive() ) {
		$title = post_type_archive_title( '', false );
	} elseif ( is_tax() ) {
		$title = single_term_title( '', false );
	} elseif ( is_home() ) {
		$title = single_post_title( '', false );
	}

	return $title;
}

?>