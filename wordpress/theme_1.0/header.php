<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


	<?php if ( is_front_page() && is_home() ) : ?>
		<title><?php bloginfo(‘name’); ?></title>
	<?php else : ?>
		<title><?php wp_title(); ?> - <?php bloginfo(‘name’); ?></title>
	<?php endif; ?>

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

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

<header>

	<?php if ( is_front_page() && is_home() ) : ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name"><h1>
		<?php bloginfo( 'name' ); ?><span>.com</span></h1>
		</a>
	<?php else : ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name"><h2>
		<?php bloginfo( 'name' ); ?><span>.com</span></h2>
		</a>
	<?php endif; ?>

	<p class="site-tagline"><a href="#">digital art, </a> <a href="#">hardware, </a><a href="#"> front-end,</a><a href="#">backend </a><a href="#"> ui/ux</a> <a href="#"> + tech "infotainment"</a></p>

	<div class="menu">
		<?php get_search_form(); ?>
	</div>

</header>

<?php if ( is_front_page() && is_home() ) : ?>
	

<?php endif; ?>