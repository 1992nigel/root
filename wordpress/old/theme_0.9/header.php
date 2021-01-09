<!doctype html>
<html id="body" <?php language_attributes(); ?> class="front-end">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="Description" content="digital art, hardware tips, front-end development, back-end engineering, ui/ux design + tutorials">


	<?php if ( is_front_page() && is_home() ) : ?>
		<title><?php bloginfo(‘name’); ?></title>
	<?php else : ?>
		<title><?php wp_title(); ?> - <?php bloginfo(‘name’); ?></title>
	<?php endif; ?>

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


		<div class="searchContainer">	
	    	<div class="grid">

		    	<div class="Title">
			    	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name">

						<?php if ( is_front_page() && is_home() ) : ?>

							<h1>
								phlygh.com
							</h1>

						<?php else : ?>

							<h2>
								phlygh.com
							</h2>

						<?php endif; ?>

					</a>
			    </div>

		    	<div class="site-meta">

			    	<div class="site-p">
						<p>valued @ <u>.0106 <i>btc</i></u> since <b>12/01/20</b></p>
				    </div>
			    	
			    	<div class="search-input">
						<?php get_search_form(); ?>
				    </div>
				
				</div>

	    	</div>
		</div>

		<div id="searching_menu" class="searching_menu">
			search menu
		</div>
		

</header>

<?php if ( is_front_page() && is_home() ) : ?>
	

<?php endif; ?>