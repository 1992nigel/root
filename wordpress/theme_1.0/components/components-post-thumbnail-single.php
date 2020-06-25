
<div class="components-post-thumbnail">

	<?php
	$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

	if ( has_post_thumbnail() ) {
		echo '<div class="entry-thumbnail-bg">';
	}

	if ( has_post_thumbnail() ) {
		echo '<div class="thumbnail-bg" style="background-image: url('. $url.')"></div>';
	}?>

</div>
	
<div class="components-post-thumbnail-share">
	<?php
		$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

		if ( has_post_thumbnail() ) {
			echo '
			<div class="copy_Link">
				
				<label for="copy_Link">share gif</label>
				<input name="copy_Link" type="text" value="'. $url.'">
				<button onclick="copy_Link()">share</button>
			</div>';
		}
	?>
</div>