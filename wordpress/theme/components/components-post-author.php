
<div class="components-post-author">
	<!-- component/widget = "if thumbnail show full sized thumbnail as bg div" - ends here -->

	<!-- copy feature image link -->

	<div class="flat">
	<div class="split">

		<div class="author-details-background-image outside-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID'), array("size"=>450)); ?>');">
		</div>

	</div>


	<div class="split">
	<div class="flat">

	<!-- component/widget = "if author" - starts here -->	
	<div class="author_lead">
		<?php
		$user_info = get_userdata(get_the_author_meta('ID'));
		$user_name = $user_info->display_name;
		$user_email = $user_info->user_email;
		$user_first_name = $user_info->first_name;
		$user_last_name = $user_info->last_name;
		$user_link = esc_url(get_author_posts_url(get_the_author_meta('ID')));
		$user_registered_date = $user_info->user_registered;
		$user_nickname = $user_info->nickname;
		$user_url = $user_info->user_url;
		$user_description = $user_info->description;
		$user_locale = $user_info->user_locale;
		$user_meta = $user_info->user_meta;

		?>

		<div class="flat">
			<div class="author-details-background-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID') , array(
				    "size" => 450
				)); ?>');">
			</div>
			<a href="<?php echo $user_url ?>"><span class="author-details"><?php echo $user_nickname ?></span></a>
			<a href="<?php echo $user_description ?>"><span class="author-details"><?php echo $user_description ?></span></a>
		</div>

		<div class="flat">
			<a href="<?php echo $user_url ?>"><span class="entry-featured"><?php echo $user_nickname ?></span></a>
			<a href="<?php echo $user_description ?>"><span class="entry-featured"><?php echo $user_description ?></span></a>
		</div>

		<div class="flat">
			<a href="<?php echo $user_link ?>"><span class="entry-featured"><?php echo $user_name ?></span></a>
			<a href="<?php echo $user_link ?>"><span class="entry-featured">></span></a>
			<a href="mailto:<?php echo $user_email ?>"><span class="entry-featured"><?php echo $user_email ?></span></a>
		</div>

	</div>

	<!-- component/widget = "if author" - ends here -->

	<!-- component/widget = "if author" - starts here -->
	<div class="flat">
			
		<div class="entry-date-views">
			<div class="entry-date">
						<?php echo get_the_date( 'Y-m-d' ); ?>
			</div>

			<div class="entry-views">
						<?php the_views(); ?>
			</div>
		</div>

	</div>

	<!-- component/widget = "if author" - ends here -->

	<!-- component/widget = "format" - starts here -->
		<div class="flat">
			<div class="formats">
				<?php

				$format = get_post_format( $post->ID );
				echo '<a href="'.esc_url( $format ).'" title="'.esc_attr($format).'">'.$format.'</a>';

				?>

			</div>
		</div>
	<!-- component/widget = "format" - ends here -->

	<!-- component/widget = "read more" - starts here -->
	<?php echo '
	<div class="flat">
		<div class="more"><a href="'.get_permalink().'" title="'.get_permalink().'">'.'more'.'</a></div></div>'; ?>
	<!-- component/widget = "read more" - ends here -->

	<!-- component/widget = "subtitle" - starts here -->
		<div class="flat">
			<div class="subtitle">
				<span>
					<?php the_subtitle(); ?>
				</span>
			</div>
		</div>
	<!-- component/widget = "subtitle" - ends here -->

	<!-- component/widget = "excerpt" - starts here -->
	<div class="flat">
		<div class="summary">
			<?php the_excerpt(); ?>
		</div>
	</div>
</div>
</div>

</div>

</div>