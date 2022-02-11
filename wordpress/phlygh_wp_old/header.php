<!doctype html>
<html id="body" <?php language_attributes(); ?> class="front-end">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="Description" content="phlygh: documentation">

	<title><?php wp_title(''); ?> *under development* <?php bloginfo(‘name’); ?></title>

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

	<?php if ( !is_front_page() ) : ?>

		<div class="nav">
			
			<h2 class="logo"><a href="https://phlygh.org"><div class="brand">phlygh</div></a>
				
				<span class="tiny"><p class="tiny_header">:</p><p class="tiny_header"><?php wp_title(''); ?></p></span>

			</h2>

			<div class="bar"><a id="menu" href="#">+</a></div>

			<div class="links float_right">
				<a class="button_a" href="#">audio</a>
				<a class="button_b" href="#">video</a>
				<a class="button_c" href="#">print</a>
			</div>

		</div>
        
	<?php endif; ?>

</header>


    <!--
    <div class="content">

        <h1>phlygh</h1>
        <h2>phlygh</h2>
        <h3>phlygh</h3>
        <h4>phlygh</h4>
        <h5>phlygh</h5>
        <h6>phlygh</h6>
        <p>phlygh
        <a href="#">phlygh</a>
        <s>phlygh</s>
        <i>phlygh</i>
        <b>phlygh</b>
        <u>phlygh</u>
        <mark>phlygh</mark>
        </p>
        <code>phlygh</code>
        <figure>phlygh</figure>

        <span class="thin">phlygh</span>
        <span class="underlinedotted">phlygh</span>
        <span class="uppercase">phlygh</span>
        <span class="lowercase">phlygh</span>
        <span class="capitalizecase">phlygh</span>

        <address>
		  <strong>phlygh, org.</strong><br>
		  1885 Harper Drive<br>
		  Lake City, Ga 30260<br>
		  <abbr title="Phone">P:</abbr> (404) 780-0236
		</address>

		<address>
		  <strong>@username</strong><br>
		  <a href="mailto:#">nigel@phlygh.org</a>
		</address>

		<blockquote>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		</blockquote>

		<table class="table">
	      <tbody>
	        <tr>
	          <td><h1>table 1<small> - alt</small></h1></td>
	        </tr>
	        <tr>
	          <td><h2>table 2<small> - alt</small></h2></td>
	        </tr>
	        <tr>
	          <td><h3>table 3<small> - alt</small></h3></td>
	        </tr>
	        <tr>
	          <td><h4>table 4<small> - alt</small></h4></td>
	        </tr>
	        <tr>
	          <td><h5>table 5<small> - alt</small></h5></td>
	        </tr>
	        <tr>
	          <td><h6>table 6<small> - alt</small></h6></td>
	        </tr>
	      </tbody>
	    </table>

	    <table class="table">
	      <caption>Optional table caption.</caption>
	      <thead>
	        <tr>
	          <th>#</th>
	          <th>First Name</th>
	          <th>Last Name</th>
	          <th>Username</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <th scope="row">1</th>
	          <td>Mark</td>
	          <td>Otto</td>
	          <td>@mdo</td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>Jacob</td>
	          <td>Thornton</td>
	          <td>@fat</td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>Larry</td>
	          <td>the Bird</td>
	          <td>@twitter</td>
	        </tr>
	      </tbody>
	    </table>

	    <p>
		  <button type="button" class="btn btn-primary btn-lg">Large button</button>
		  <button type="button" class="btn btn-default btn-lg">Large button</button>
		</p>
		<p>
		  <button type="button" class="btn btn-primary">Default button</button>
		  <button type="button" class="btn btn-default">Default button</button>
		</p>
		<p>
		  <button type="button" class="btn btn-primary btn-sm">Small button</button>
		  <button type="button" class="btn btn-default btn-sm">Small button</button>
		</p>
		<p>
		  <button type="button" class="btn btn-primary btn-xs">Extra small button</button>
		  <button type="button" class="btn btn-default btn-xs">Extra small button</button>
		</p>

    </div>
	-->