<?php
 get_header();

 ?>
 
<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<?php
			if (have_posts()) :
				while(have_posts()) : the_post(); ?>


					<?php get_template_part( 'content', '' ); ?>
				<?php endwhile;

			else :
				echo '<p>no content found</p>';

			endif;
			?>

	</main>

</div>
<?php

 get_footer();

?>