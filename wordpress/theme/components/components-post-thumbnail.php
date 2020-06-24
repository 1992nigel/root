
<div class="components-post-thumbnail">
	<!-- component/widget = "if thumbnail show full sized thumbnail as bg div" - starts here -->
	<?php
	$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

	if ( has_post_thumbnail() ) {
		echo '<div class="entry-thumbnail-bg">';
	}

	if ( has_post_thumbnail() ) {
		echo '<div class="thumbnail-bg" style="background-image: url('. $url.')"></div>';
	}?>
	
		<?php if ( has_post_thumbnail() ) : ?>
			

			<!-- title h2-->
			<div class="flat">
				<a class="bordered" href="<?php the_permalink() ?>">
					<h2><?php the_title() ?></h2>
				</a>
			</div>
					
			<div class="flat">
				<div class="author_lead bordered">
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
			</div>


	<!-- component/widget = "all category" - starts here -->
	<div class="flat">
		<div class="bordered">
			<ul class="entry-cats flat">
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
	</div>

	<!-- component/widget = "all tags" - starts here -->
	<div class="flat">
		<div class="bordered">
			<ul class="entry-tags flat">
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
	</div>


	<div class="flat">
		<div class="bordered">
			<div class="flat">
					
				<div class="entry-date">
							<?php echo get_the_date( 'Y-m-d' ); ?>
				</div>

				<div class="entry-views">
							<?php the_views(); ?>
				</div>

			</div>
		</div>
	</div>

	<!-- component/widget = "format" - starts here -->
	<div class="flat">
		<div class="bordered">
			<div class="flat">
				<div class="formats">
					<?php

					$format = get_post_format( $post->ID );
					echo '<a href="'.esc_url( $format ).'" title="'.esc_attr($format).'">'.$format.'</a>';

					?>

				</div>
			</div>
		</div>
	</div>

	<!-- component/widget = "format" - starts here -->
	<div class="flat">
		<div class="bordered">
			<div class="flat">
				
			<?php the_excerpt(); ?>
			</div>
		</div>
	</div>


	<!-- component/widget = "format" - starts here -->
	<div class="flat">
		<div class="bordered">
			<div class="flat">
				
					<?php the_subtitle(); ?>

			</div>
		</div>
	</div>


		<?php endif; ?>

	<?php
	if ( has_post_thumbnail() ) {
		echo '</div>';
	}

	?>

	<div class="flat">
	<?php
		$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

		if ( has_post_thumbnail() ) {
			echo '
			<div class="copy_Link">
				<input type="text" value="'. $url.'">
				<button onclick="copy_Link()">share</button>
			</div>';
		}
	?>
</div>

</div>