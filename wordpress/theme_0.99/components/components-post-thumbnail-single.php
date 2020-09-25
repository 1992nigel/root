
<div class="components-post-thumbnail">

	<?php

		echo '<img src="'. $url.'" alt="'. $url.'" width="500" height="600">';
	?>

</div>
	
<div class="components-post-thumbnail-share">
	<?php
		$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

		if ( has_post_thumbnail() ) {
			echo '
			<div class="copy_Link">
				<input name="copy_Link" type="text" value="'. $url.'">\
			</div>';
		}
	?>
</div>