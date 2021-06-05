<?php
 get_header();

 ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

        <div class="search-page-title">
        	<div class="search-info"><?php printf( esc_html__( 'Search Results for: %s', stackstar ), '<div class="phrase">' . get_search_query() . '</div>' ); ?>
        		
        	</div>
		</div>

		<?php
			if (have_posts()) :
				while(have_posts()) : the_post(); ?>


					<?php get_template_part( 'content', '' ); ?>
				<?php endwhile;

			else :
				echo '<p class="no_content_found">no content found</p>';

			endif;
			?>

	</main>

</div>
<?php

 get_footer();

?>