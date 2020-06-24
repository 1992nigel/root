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
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-169255153-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-169255153-1');
	</script>

	<script data-ad-client="ca-pub-8349031735725880" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	
</head>
<body <?php body_class(); ?>>

<header>

	<?php if ( is_front_page() && is_home() ) : ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name"><h1>
		<?php bloginfo( 'name' ); ?></h1>
		</a>
	<?php else : ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name"><h2>
		<?php bloginfo( 'name' ); ?></h2>
		</a>
	<?php endif; ?>

	<p class="site-tagline"><?php bloginfo( 'description' ); ?></p>

	<div class="menu">
		<?php get_search_form(); ?>
	</div>

</header>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Square Responsive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8349031735725880"
     data-ad-slot="3805155783"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<?php if ( is_front_page() && is_home() ) : ?>
	<div class="feature ">

		<div class="width_64 width_100_iphone left">

			<div id="1by1" class="margin_0">
				<div class="margin_0">
					<div class="width_64 width_100_iphone left">
						<div class="flat">

							<div class="branding">
								
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-name"><h2>
									<?php bloginfo( 'name' ); ?></h2>
									</a>

								<p class="site-tagline"><?php bloginfo( 'description' ); ?></p>

								<div class="menu">
									<?php get_search_form(); ?>
								</div>
								
							</div>

							</div>

					</div>

					<div id="feature_1by2" class="width_36 width_100_iphone left">

						<div class="flat">
							<p>Latest</p>
						</div>

						<?php

							$args = array(
							    'posts_per_page' => 2, 
							    'post__not_in' => get_option( 'sticky_posts' ),
							    //'cat' => 'ID OF THE CATEGORY',
							);
							$q = new WP_Query( $args);

							if ( $q->have_posts() ) {
							    while ( $q->have_posts() ) {
							    $q->the_post();        

									get_template_part( 'components/components-post-title-thumbnail' );

							    }
							    wp_reset_postdata();
							}

							?>
					</div>
				</div>
			</div>

			<div class="flat">
				<p>Latest</p>
			</div>

			<div id="feature_3by1" class="3by3 flat flex margin_0">
				
				<div class="margin_0">

						<div class="width_33 width_100_iphone left">
						<?php

						$args = array(
						    'posts_per_page' => 1,
						    'post__not_in' => get_option( 'sticky_posts' ), 
						    //'cat' => 'ID OF THE CATEGORY',
						);
						$q = new WP_Query( $args);

						if ( $q->have_posts() ) {
						    while ( $q->have_posts() ) {
						    $q->the_post();        

								get_template_part( 'components/components-post-title-thumbnail' );

						    }
						    wp_reset_postdata();
						}

						?>
					</div>

					<div class="width_33 width_100_iphone left">
						<?php

						$args = array(
						    'posts_per_page' => 1,
						    'post__not_in' => get_option( 'sticky_posts' ), 
						    //'cat' => 'ID OF THE CATEGORY',
						);
						$q = new WP_Query( $args);

						if ( $q->have_posts() ) {
						    while ( $q->have_posts() ) {
						    $q->the_post();        

								get_template_part( 'components/components-post-title-thumbnail' );

						    }
						    wp_reset_postdata();
						}

						?>
					</div>

					<div class="width_33 width_100_iphone left">
						<?php

						$args = array(
						    'posts_per_page' => 1,
						    'post__not_in' => get_option( 'sticky_posts' ), 
						    //'cat' => 'ID OF THE CATEGORY',
						);
						$q = new WP_Query( $args);

						if ( $q->have_posts() ) {
						    while ( $q->have_posts() ) {
						    $q->the_post();        

								get_template_part( 'components/components-post-title-thumbnail' );

						    }
						    wp_reset_postdata();
						}

						?>
					</div>
				</div>

			</div>

			<div class="flat">
				<p>Latest</p>
			</div>

			<div id="feature_1by4" class="4by1 margin_0">
				<?php

				$args = array(
				    'posts_per_page' => 4,
				    'post__not_in' => get_option( 'sticky_posts' ),
				    //'cat' => 'ID OF THE CATEGORY',
				);
				$q = new WP_Query( $args);

				if ( $q->have_posts() ) {
				    while ( $q->have_posts() ) {
				    $q->the_post();        

						get_template_part( 'components/components-post-title-thumbnail' );

				    }
				    wp_reset_postdata();
				}

				?>
			</div>

			<div id="feature_1by4" class="4by1 margin_0">
				<?php

				$args = array(
				    'posts_per_page' => 2,
				    'post__not_in' => get_option( 'sticky_posts' ),
				    //'cat' => 'ID OF THE CATEGORY',
				);
				$q = new WP_Query( $args);

				if ( $q->have_posts() ) {
				    while ( $q->have_posts() ) {
				    $q->the_post();        

						get_template_part( 'components/components-post-title-thumbnail' );

				    }
				    wp_reset_postdata();
				}

				?>
			</div>

		</div>

		<div class="width_36 width_100_iphone left">
			
			<div class="flat">
				<p>Latest</p>
			</div>

			<div id="feature_7by1" class="flat margin_0">
				<?php

				$args = array(
				    'posts_per_page' => 7, 
				    'post__not_in' => get_option( 'sticky_posts' ),
				    //'cat' => 'ID OF THE CATEGORY',
				);
				$q = new WP_Query( $args);

				if ( $q->have_posts() ) {
				    while ( $q->have_posts() ) {
				    $q->the_post();        

						get_template_part( 'components/components-post-title-thumbnail' );

				    }
				    wp_reset_postdata();
				}

				?>
			</div>

			<div class="flat">
				<p>Latest</p>
			</div>

			<div id="4by4" class="flat margin_0">

				<div class="flat">

					<div class="max-width_50 width_100_iphone left">
					<?php

					$args = array(
					    'posts_per_page' => 1,
					    'post__not_in' => get_option( 'sticky_posts' ), 
					    //'cat' => 'ID OF THE CATEGORY',
					);
					$q = new WP_Query( $args);

					if ( $q->have_posts() ) {
					    while ( $q->have_posts() ) {
					    $q->the_post();        

							get_template_part( 'components/components-post-title-thumbnail' );

					    }
					    wp_reset_postdata();
					}

					?>
				</div>

				<div class="max-width_50 width_100_iphone left">
					<?php

					$args = array(
					    'posts_per_page' => 1,
					    'post__not_in' => get_option( 'sticky_posts' ), 
					    //'cat' => 'ID OF THE CATEGORY',
					);
					$q = new WP_Query( $args);

					if ( $q->have_posts() ) {
					    while ( $q->have_posts() ) {
					    $q->the_post();        

							get_template_part( 'components/components-post-title-thumbnail' );

					    }
					    wp_reset_postdata();
					}

					?>
				</div>

				</div>



					<div class="flat">

						<div class="max-width_50 width_100_iphone left">
						<?php

						$args = array(
						    'posts_per_page' => 1,
						    'post__not_in' => get_option( 'sticky_posts' ), 
						    //'cat' => 'ID OF THE CATEGORY',
						);
						$q = new WP_Query( $args);

						if ( $q->have_posts() ) {
						    while ( $q->have_posts() ) {
						    $q->the_post();        

								get_template_part( 'components/components-post-title-thumbnail' );

						    }
						    wp_reset_postdata();
						}

						?>
					</div>

					<div class="max-width_50 width_100_iphone left">
						<?php

						$args = array(
						    'posts_per_page' => 1,
						    'post__not_in' => get_option( 'sticky_posts' ), 
						    //'cat' => 'ID OF THE CATEGORY',
						);
						$q = new WP_Query( $args);

						if ( $q->have_posts() ) {
						    while ( $q->have_posts() ) {
						    $q->the_post();        

								get_template_part( 'components/components-post-title-thumbnail' );

						    }
						    wp_reset_postdata();
						}

						?>
					</div>

				</div>

			</div>

		</div>

	</div>

<?php endif; ?>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Square Responsive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8349031735725880"
     data-ad-slot="3805155783"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

