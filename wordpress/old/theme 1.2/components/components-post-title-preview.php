
<div class="components-post-title">

	<a class="article-post-title-link-h2" href="<?php the_permalink() ?>">
		<h2><span><?php the_title() ?></span></h2>
		<!-- if sticky -->
		<?php if ( is_sticky() ) : ?>
			<a href="#"><span class="is_sticky"><?php _e( 'sticky', '' ); ?></span></a>
		<?php endif; ?>
	</a>
</div>