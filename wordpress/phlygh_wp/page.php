<?php
 get_header();

 ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) :
			the_post();

			the_content();

			// End the loop.
		endwhile;
		?>

	</main>

</div>
<?php

 get_footer();

?>