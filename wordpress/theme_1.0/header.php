<!doctype html>
<html id="body" <?php language_attributes(); ?> class="">
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
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-169255153-2"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-169255153-2');
	</script>

	<script data-ad-client="ca-pub-8349031735725880" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	
</head>
<body <?php body_class(); ?>>

<header class="header">

	<?php if ( is_front_page() && is_home() ) : ?>
				
		<div class="searchContainer">
		    	
	    	<div class="searchPosition">

		    	<div class="searchTitle">
			    	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name">
						<h1>
							<span id="ui_1" class="brand">phlygh</span><span class="dotcom">.com</span>
						</h1>
					</a>
			    </div>

		    	
		    	<div class="searchInput">
			    	<button> + </button><input id="search" type="text" name="s" placeholder="@phlygh" autocomplete="off">
			    	<button> ? </button>
			    </div>

		    	<div class="searchButtons">
			    	<button> search </button>

			    	<button> shuffle </button>
			    </div>

	    	</div>

		</div>

	<?php else : ?>
		
	<?php endif; ?>

	<div id="searching_menu" class="searching_menu">
		<p>searching_menu<p>
	</div>

	<p class="site-tagline">

		<span class="action_hover site-tagline-catgeory">
			<a class="site-tagline-link" href="https://phlygh.com/category/bitcoin/"> development</a> 
		</span>

		<span class="comma"> , </span>


		<span class="action_hover site-tagline-catgeory">
			<a class="site-tagline-link" href="https://phlygh.com/category/bitcoin/"> design</a> 
		</span>

		<span class="comma"> , </span>


		<span class="action_hover site-tagline-catgeory">
			<a class="site-tagline-link" href="https://phlygh.com/category/bitcoin/"> motion</a> 
		</span>

		<span class="comma"> , </span>


		<span class="action_hover site-tagline-catgeory">
			<a class="site-tagline-link" href="https://phlygh.com/category/bitcoin/"> ui/ux</a> 
		</span>

		<span class="comma"> , </span>


		<span class="action_hover site-tagline-catgeory">
			<a class="site-tagline-link" href="https://phlygh.com/category/bitcoin/"> finance</a> 
		</span>

		<span class=""> & </span>


		<span class="action_hover site-tagline-catgeory">
			<a class="site-tagline-link" href="https://phlygh.com/category/bitcoin/"> other</a> 
		</span>
	</p>

    <div class="bg"></div>

</header>

<?php if ( is_front_page() && is_home() ) : ?>
	

<?php endif; ?>