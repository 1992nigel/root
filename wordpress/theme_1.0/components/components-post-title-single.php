
<div class="components-post-title">
	<a href="<?php the_permalink() ?>">

		<!-- title -->
		<h1 class="entry-title"><?php the_title() ?></h1>

		<!-- if sticky -->
		<?php if ( is_sticky() ) : ?>
			<a href="#"><span class="is_sticky"><?php _e( 'sticky', '' ); ?></span></a>
		<?php endif; ?>

	</a>
</div>
<!-- copy title link -->
<div class="copy_Link">
	<input type="text" value="<?php the_permalink() ?>">
	<button onclick="copy_Link()">share</button>
</div>
