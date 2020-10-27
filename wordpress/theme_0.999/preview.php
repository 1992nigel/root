<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


	<a href="<?php the_permalink() ?>">
		<?php the_title() ?>
	</a>
	
	<?php 
	if ( has_post_thumbnail() ) {
		the_post_thumbnail();
	} ?>
	<!-- component/widget = "if featured" - starts here -->
	<?php if ( is_sticky() ) : ?>
		<a href="#"><span class="entry-featured"><?php _e( 'Featured', 'twentysixteen' ); ?></span></a>
	<?php endif; ?>
	<!-- component/widget = "if featured" - ends here -->

	<!-- component/widget = "if author" - starts here -->
	<div class="entry-author flatten">

		<div class="entry-author-container">

			<div class="entry-author-background-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID'), array("size"=>450)); ?>');">
			</div>

			<span class="author_lead">
				<?php 
				$user_info = get_userdata(get_the_author_meta( 'ID' ));
				$user_name = $user_info->display_name;
				$user_email = $user_info->user_email;
				$user_first_name = $user_info->first_name;
				$user_last_name = $user_info->last_name;
				$user_link = $user_info->user_link;
				$user_registered_date = $user_info->user_registered;
				$user_nickname = $user_info->nickname;
				$user_url = $user_info->user_url;
				$user_description = $user_info->description;
				$user_locale = $user_info->user_locale;
				$user_meta = $user_info->user_meta;
				echo "username:, ". $user_name;
				echo "<br>email:, ". $user_email;
				echo "<br>first_name:, ". $user_first_name;
				echo "<br>last_name:, ". $user_last_name;
				echo "<br>nickname:, ". $user_nickname;
				echo "<br>locale:, ". $user_locale;
				echo "<br>url:, ". $user_url;
				echo "<br>link:, ";
				echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) );
				echo "<br>registered_date:, ". $user_registered_date;
				echo "<br>description:, ". $user_description;

				?>
			</span>

			<div class="entry-views">
				<div class="entry-views-container">
					<span>
						<?php the_views(); ?>
					</span>
				</div>
			</div>

		</div>

	</div>
	<!-- component/widget = "if author" - ends here -->

	<!-- component/widget = "if author" - starts here -->
	<div class="entry-time">
		<div class="entry-time-container">
			<span>read time: 
				<?php do_shortcode('[rt_reading_time]') ?>
			</span>
		</div>
	</div>
	<!-- component/widget = "if author" - ends here -->

	<!-- component/widget = "if thumbnail show full sized thumbnail as bg div" - starts here -->
	<?php
	$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

	if ( has_post_thumbnail() ) {
		echo '<div class="entry-thumbnail-bg" style="background-image: url('. $url.')"></div>';
		echo '<img src="'. $url.'" alt="Girl in a jacket" width="500" height="600">';
	}

	?>
	<!-- component/widget = "if thumbnail show full sized thumbnail as bg div" - ends here -->


	<!-- component/widget = "sponsored" - starts here -->
	<?php if (in_category('sponsored')){
			echo '<a href="#"><div class="entry-sponsored">sponsored</div></a>';
		}
	?>
	<!-- component/widget = "sponsored" - ends here -->
	
	<!-- component/widget = "sponsored" - starts here -->
	<?php if (has_tag('js')){
			echo '<a href="#"><div class="entry-js">js</div></a>';
		}
	?>
	<!-- component/widget = "sponsored" - ends here -->

	<!-- component/widget = "all category" - starts here -->
	<div class="entry-cats flatten">
		<ul class="entry-cats-container">
			<?php
			foreach((get_the_category()) as $category) {
			  
				$category_link = get_category_link($category->cat_ID);
				$postcat= $category->cat_ID;
				$catname =$category->cat_name;
				//echo $postcat;
				//echo $catname;
				//echo $category_link;
				echo '<li><a href="'.esc_url( $category_link ).'" title="'.esc_attr($catname).'">'.$catname.'</a></li>';
			}
			?>
		</ul>
	</div>

	<!-- component/widget = "all tags" - starts here -->
	<div class="entry-tags flatten">
		<ul class="entry-tags-container">
			<?php
			global $post;
			if ( get_the_tags($post->ID) ){
			foreach(get_the_tags($post->ID) as $tag)
			{
			echo '<li><a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a></li>';
			}
			}?>

		</ul>
	</div>

	<!-- component/widget = "if author" - starts here -->
	<div class="entry-date-views flatten">

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

	</div>
	<!-- component/widget = "if author" - ends here -->

	<!-- component/widget = "format" - starts here -->
		<div class="entry-formats">
			<div class="entry-formats-container">
				<?php

				$format = get_post_format( $post->ID );
				echo '<a href="'.esc_url( $format ).'" title="'.esc_attr($format).'">'.$format.'</a>';

				?>

			</div>
		</div>
	<!-- component/widget = "format" - ends here -->

	<!-- component/widget = "read more" - starts here -->
	<?php echo '<a href="'.get_permalink().'" title="'.get_permalink().'">'.'more'.'</a>'; ?>
	<!-- component/widget = "read more" - ends here -->

	<!-- component/widget = "subtitle" - starts here -->
		<div class="entry-subtitle">
			<div class="entry-subtitle-container">
				<span>
					<span>"</span><?php the_subtitle(); ?><span>"</span>
				</span>
			</div>
		</div>
	<!-- component/widget = "subtitle" - ends here -->

	<!-- component/widget = "excerpt" - starts here -->
	<div class="entry-summary">
		<div class="entry-summary-container">
			<?php the_excerpt(); ?>
		</div>
	</div>
	<!-- component/widget = "excerpt" - ends here -->
	
	<?php
		edit_post_link()
		?>

</article>