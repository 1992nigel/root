<div class="components-post-title">


	<!-- title -->
	<a href="<?php the_permalink() ?>">

		<!-- title -->
		<h1 class="entry-title"><span><?php the_title() ?></span></h1>

		<!-- if sticky -->
		<?php if ( is_sticky() ) : ?>
			<a href="#"><span class="is_sticky"><?php _e( 'sticky', '' ); ?></span></a>
		<?php endif; ?>

	</a>

</div>
<!-- copy title link -->
<div class="copy_Link">
	<input name="copy_Link" type="text" value="<?php the_permalink() ?>">
</div>
