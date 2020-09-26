
<div class="components-post-title">
	<a href="<?php the_permalink() ?>">
		<h2><?php the_title() ?></h2>
		<!-- if sticky -->
		<?php if ( is_sticky() ) : ?>
			<a href="#"><span class="is_sticky"><?php _e( 'sticky', '' ); ?></span></a>
		<?php endif; ?>
	</a>
</div>
<!-- copy title link -->
<div class="copy_Link">
	<input onclick="copy_Link()" name="copy_Link" value="<?php the_permalink() ?>">
</div>