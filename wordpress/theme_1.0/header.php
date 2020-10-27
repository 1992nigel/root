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
							<span class="stamp"><span class="stamp_1">valued <i><b>on</b> 10/26/20</i> of </span><span class="stamp_2"><u>60.06</u></span></span>
							<span id="ui_1" class="brand">phlygh</span><span class="dotcom">.com</span>
						</h1>
					</a>
			    </div>
		    	
		    	<div class="searchInput">
					<?php get_search_form(); ?>
			    </div>

		    	<div class="searchButtons">
			    	<button><a href="https://open.spotify.com/show/0Jqq0tTOW0U7fTekJpAjtj"> listen</a> </button>

			    	<button><a href="https://www.youtube.com/channel/UCWpCyRc6ncLA471WJkCWEnA"> watch</a> </button>
			    </div>


		    	<div class="searchMessage">
			    	<p>our <a href="https://www.twitch.tv/phlygh">24-hour channel</a> everyday.</p>
			    </div>

	    	</div>

		</div>

	<?php else : ?>

		<div class="site-links">
			<div class="width_max">
				<span class="action_hover site-link-catgeory-left site-logo">
					<a class="site-link-left" href="https://phlygh.com"> @phlygh.com</a> 
				</span>

		    	<div class="searchInput">
					<?php get_search_form(); ?>
			    </div>

				<span class="action_hover site-link-catgeory-right hide-on-mobile">
					<a class="site-link-right" href="https://phlygh.com/about/"> about</a> 
				</span>

			</div>
		</div>

		<div class="search_video">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/4zq1SVnQe2I?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>

		<div class="search_video">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/4zq1SVnQe2I?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>

		<div class="search_video">

			<div class="width_max">
				<div class="whole">
					<div class="half">

						<iframe width="560" height="315" src="https://www.youtube.com/embed/4zq1SVnQe2I?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

					</div>

					<div class="half">

						<iframe width="560" height="315" src="https://www.youtube.com/embed/4zq1SVnQe2I?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

					</div>
				</div>
			</div>

		</div>

		<div id="searching_menu" class="searching_menu">
			<div class="site-links">
				<div class="width_max">

					<span class="action_hover site-link-catgeory-left">
						<a class="site-link-left" href="https://phlygh.com/about"> 
							<b>Pages:</b>
							</a> 
					</span>

					<span class="action_hover site-link-catgeory-left">
						<a class="site-link-left" href="https://phlygh.com/about"> about
							</a> 
					</span>
					<span class="action_hover site-link-catgeory-left">
						<a class="site-link-left" href="https://phlygh.com/jobs"> 
					jobs
							</a> 
					</span>
					<span class="action_hover site-link-catgeory-left">
						<a class="site-link-left" href="https://phlygh.com/team"> 
					team
							</a> 
					</span>
					<span class="action_hover site-link-catgeory-left">
						<a class="site-link-left" href="https://phlygh.com/donate"> 
					donate
							</a> 
					</span>
				</div>
			</div>

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
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> all Tags</a> 
					</span>
				</div>
			</div>

			<div class="site-links">
				<div class="width_max">

					<span class="action_hover site-link-catgeory-left">
						<a class="site-link-left" href="https://phlygh.com/category/bitcoin/"> 
							<b>Categories:</b>
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
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> all categories</a> 
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
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> spotify </a> 
					</span>

					<span class="action_hover site-link-catgeory-right">
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> snapchat </a> 
					</span>

					<span class="action_hover site-link-catgeory-right">
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> facebook </a> 
					</span>

					<span class="action_hover site-link-catgeory-right">
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> reddit </a> 
					</span>
					
					<span class="action_hover site-link-catgeory-right">
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> youtube </a> 
					</span>

					<span class="action_hover site-link-catgeory-right">
						<a class="site-link-right" href="https://phlygh.com/category/bitcoin/"> apple podcasts </a> 
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

	<?php endif; ?>

</header>

<?php if ( is_front_page() && is_home() ) : ?>
	

<?php endif; ?>