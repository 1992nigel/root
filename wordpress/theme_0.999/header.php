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
					<?php get_search_form(); ?>
			    </div>

		    	<div class="searchButtons">
			    	<button><a href="https://www.youtube.com/channel/UCWpCyRc6ncLA471WJkCWEnA"> listen</a> </button>

			    	<button><a href="https://www.youtube.com/channel/UCWpCyRc6ncLA471WJkCWEnA"> watch</a> </button>
			    </div>


		    	<div class="searchMessage">
			    	<p>our <a href="https://www.twitch.tv/phlygh">24-hour channel</a> everyday.</p>
			    </div>

	    	</div>

		</div>

		<p class="site-tagline">

			<span class="action_hover site-tagline-catgeory">
				<a class="site-tagline-link" href="https://phlygh.com/category/crypto/"> crypto</a> 
			</span>

			<span class="comma"> , </span>

			<span class="action_hover site-tagline-catgeory">
				<a class="site-tagline-link" href="https://phlygh.com/category/investing/"> investing</a> 
			</span>

			<span class="comma"> & </span>

			<span class="action_hover site-tagline-catgeory">
				<a class="site-tagline-link" href="https://phlygh.com/category/taxes/"> taxes</a> 
			</span>
		</p>

	<?php else : ?>

		<div class="site-links">
			<div class="width_max">
				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com"> @phlygh.com</a> 
				</span>

		    	<div class="searchInput">
					<?php get_search_form(); ?>
			    </div>

				<span class="action_hover site-link-catgeory-right">
					<a class="site-link-right" href="https://phlygh.com/about/"> about</a> 
				</span>

			</div>
		</div>

	<?php endif; ?>

	<div id="searching_menu" class="searching_menu">
		<p>searching_menu<p>


		<span class="action_hover site-link-catgeory-right">
			<a class="site-link-right" href="https://phlygh.com/about/"> about</a> 
		</span>

		<span class="action_hover site-link-catgeory-right">
			<a class="site-link-right" href="https://phlygh.com/jobs/"> jobs</a> 
		</span>

		<span class="action_hover site-link-catgeory-right">
			<a class="site-link-right" href="https://phlygh.com/team/"> team</a> 
		</span>

		<span class="action_hover site-link-catgeory-right">
			<a class="site-link-right" href="https://phlygh.com/donate"> donate</a> 
		</span>

		<div class="site-links">
			<div class="width_max">

				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
						<b>Trending:</b>
						</a> 
				</span>

				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
				#Bitcoin
						</a> 
				</span>
				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
				#Patrice
						</a> 
				</span>
				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
				#Photoshop
						</a> 
				</span>
				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
				#Javascript
						</a> 
				</span>
				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
				#AfterEffects
						</a> 
				</span>
				<span class="action_hover site-link-catgeory-right">
					<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> more</a> 
				</span>
			</div>
		</div>

		<div class="site-links">
			<div class="width_max">

				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
						Stay informed with @phlygh.
						</a> 
				</span>

				<span class="action_hover site-link-catgeory-right">
					<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> twitter</a> 
				</span>

				<span class="action_hover site-link-catgeory-right">
					<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> instagram </a> 
				</span>

				<span class="action_hover site-link-catgeory-right">
					<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> youtube </a> 
				</span>
			</div>
		</div>

		<div class="site-links">

			<div class="width_max">

				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> Privacy Policy</a> 
				</span>

				<span class="action_hover site-link-catgeory-left">
					<a class="site-link-left" href="https://phlygh.com/category/bitcoin/">Terms of Service</a> 
				</span>

				<span class="action_hover site-link-catgeory-right">
					<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> ©2020 Phlygh All Rights Reserved Made in Atlanta, Ga</a> 
				</span>

			</div>
		</div>

	</div>

    <div class="bg"></div>

</header>

<?php if ( is_front_page() && is_home() ) : ?>
	

<?php endif; ?>