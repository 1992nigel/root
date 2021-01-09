
<div class="components-post-thumbnail">

	<a href="<?php the_permalink() ?>">
		<?php
		$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

		if ( has_post_thumbnail() ) {
			echo '<div class="entry-thumbnail-bg">';
		}

		if ( has_post_thumbnail() ) {

			echo '<img src="'. $url.'" alt="'. $url.'" width="500" height="600">';
		}?>
			
			<!-- * fix question marks * < ? php get_template_part( 'components/components-entry-thumbnail-bg-info' ); ? >-->

		</div>
	</a>

<!-- end of entry-thumbnail-bg -->
</div>