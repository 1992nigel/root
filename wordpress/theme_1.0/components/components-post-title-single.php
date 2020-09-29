
<div class="entry-date-views flat">

	<!-- date & views -->
	<div class="entry-date-views-container">
			
		<div class="entry-date">
			<div class="entry-date-container">
				<span>
					<p>
						<?php echo get_the_date( 'Y-m-d' ); ?>
					</p>
				</span>
			</div>
		</div>

		<div class="entry-views">
			<div class="entry-views-container">
				<span>
					<p>
						<?php the_views(); ?>
					</p>
				</span>
			</div>
		</div>

	</div>

	<!-- more -->
	<span class="action_hover ui_menu_2_hover">
		<a class="ui_menu_2_link" href="https://phlygh.com/category/bitcoin/">+</a> 
		<span class="ui_menu_2">
			<a href="#">link 1</a>
			<a href="#">link 2</a>
			<a href="#">link 3</a>
		</span>
	</span>

</div>

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
