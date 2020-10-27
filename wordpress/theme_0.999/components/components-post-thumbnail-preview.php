
<div class="components-post-thumbnail">

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
		
	<div class="components-post-thumbnail-share">
		<?php
			$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

			if ( has_post_thumbnail() ) {
				echo '
				<div class="copy_Link">
					<input onclick="copy_Link()" name="copy_Link" type="text" value="'. $url.'">
				</div>';
			}
		?>
	</div>

<!-- end of entry-thumbnail-bg -->
</div>