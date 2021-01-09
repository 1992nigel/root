<!doctype html>
<html id="body" <?php language_attributes(); ?> class="front-end">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="Description" content="phlygh: documentation">

	<title><?php the_title() ?></title>

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

	<?php wp_head(); ?>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-179605046-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-179605046-1');
	</script>

	<!-- ads -->
	<script data-ad-client="ca-pub-3909705375565088" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

</head>
<body <?php body_class(); ?>>

<header class="header">

	<div class="brand display-webkit-box">

    	<div class="site-title">
	    	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name">

					<h2>
						phlygh
					</h2>

			</a>
	    </div>

		<div class="search-input">
			<?php get_search_form(); ?>
		</div>

	</div>

	<div class="site-search display-webkit-box">

		search state goes here

    	<div class="site-meta">
			<div id="ui_switch_1">ui_switch_1</div>
			<div id="ui_switch_2">ui_switch_2</div>
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
			the_post_navigation();
			// End the loop.
		endwhile;
		?>

	</main><!-- .site-main -->

</div><!-- .content-area -->

<?php

 get_footer();

?>