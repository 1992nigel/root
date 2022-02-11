<!doctype html>
<html id="body" <?php language_attributes(); ?> class="front-end">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="Description" content="phlygh: documentation">

	<title><?php wp_title(''); ?> <?php bloginfo(‘name’); ?></title>

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

	<link rel="stylesheet" href="https://phlygh.org/wp-content/themes/phlygh_wp/css/style.css">

	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?> >

<header>

	<?php if ( !is_front_page() && !is_single() ) : ?>

		<div class="nav">
			
			<h2 class="logo"><a class="brand" href="https://phlygh.org"><div class="brand">phlygh.org</div></a>
				
			<span class="words">
				<p>/</p>
				<p><?php wp_title(''); ?></p>
			</span>

		</div>
        
	<?php endif; ?>

	<?php if ( !is_front_page() && is_single() ) : ?>

		<div class="nav">
			
			<h2 class="logo"><a class="brand" href="https://phlygh.org"><div class="brand">phlygh.org</div></a>
				
			<span class="words">
				<a href="#">/news/</a>

				<!-- categories  -->
				<ul class="categories">
					<?php
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

			</span>

		</div>


		<div class="menu">
			
			<p><?php wp_title(''); ?></p>

		</div>
        
	<?php endif; ?>

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