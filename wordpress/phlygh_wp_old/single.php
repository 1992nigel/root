<!doctype html>
<html id="body" <?php language_attributes(); ?> class="front-end">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="Description" content="phlygh: documentation">

	<title><?php wp_title(''); ?> - <?php bloginfo(‘name’); ?></title>

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

	<link rel="stylesheet" href="https://phlygh.org/wp-content/themes/phlygh_wp/css/reset.css">
	<link rel="stylesheet" href="https://phlygh.org/wp-content/themes/phlygh_wp/css/normal.css">
	<link rel="stylesheet" href="https://phlygh.org/wp-content/themes/phlygh_wp/css/style.css">

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-MN5JJHJS3K"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-MN5JJHJS3K');
	</script>

	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?> >

<header>

	<div class="nav">
		
		<h2 class="logo"><a href="https://phlygh.org"><div class="brand">phlygh</div></a>

			<span class="tiny_title">


				<!-- categories  -->
				<ul class="categories">
					<p>:</p><?php
					foreach((get_the_category()) as $category) {
					  
						$category_link = get_category_link($category->cat_ID);
						$postcat= $category->cat_ID;
						$catname =$category->cat_name;
						//echo $postcat;
						//echo $catname;
						//echo $category_link;
						echo '<li><a href="'.esc_url( $category_link ).'" title="'.esc_attr($catname).'">'.$catname.'</a></li>';
					}
					?>
				</ul>
			</b></span>

		</h2>

		<div class="bar"><a id="menu" href="#">+</a></div>

		<div class="links float_right">
			<a class="button_a" href="#">audio</a>
			<a class="button_b" href="#">video</a>
			<a class="button_c" href="#">print</a>
		</div>

	</div>
    
</header>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<?php
		// Start the loop.
		while ( have_posts() ) :
			the_post();

			// Include the single post content template.
			get_template_part( 'content', 'single' );
		endwhile;
		?>

	</main><!-- .site-main -->

</div><!-- .content-area -->

<?php

 get_footer();

?>