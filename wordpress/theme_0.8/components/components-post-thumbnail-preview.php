
<div class="components-post-thumbnail">

	<?php
	$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

	if ( has_post_thumbnail() ) {
		echo '<div class="entry-thumbnail-bg">';
	}

	if ( has_post_thumbnail() ) {
		echo '<div class="thumbnail-bg" style="background-image: url('. $url.')"></div>';
	}?>

	<div class="entry-thumbnail-bg-info">

		<a href="<?php the_permalink() ?>">
			<h2 class="entry-title"><?php the_title() ?></h2>
		</a>
		<a href="<?php the_permalink() ?>">
			<h3 class="entry-title"><?php the_title() ?></h3>
		</a>
		<a href="<?php the_permalink() ?>">
			<h3 class="entry-title"><?php the_title() ?></h3>
		</a>
		<a href="<?php the_permalink() ?>">
			<h3 class="entry-title"><?php the_title() ?></h3>
		</a>
		<a href="<?php the_permalink() ?>">
			<h3 class="entry-title"><?php the_title() ?></h3>
		</a>
		<a href="<?php the_permalink() ?>">
			<h3 class="entry-title"><?php the_title() ?></h3>
		</a>
		<a href="<?php the_permalink() ?>">
			<h3 class="entry-title"><?php the_title() ?></h3>
		</a>
		
	</div>

</div>
	
<div class="components-post-thumbnail-share">
	<?php
		$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

		if ( has_post_thumbnail() ) {
			echo '
			<div class="copy_Link">
				<input name="copy_Link" type="text" value="'. $url.'">
				<button onclick="copy_Link()">share gif</button>
			</div>';
		}
	?>
</div>