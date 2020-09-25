
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

		<div class="single_line">
			<a href="<?php the_permalink() ?>">
				<h2 class="entry-title"><?php the_title() ?></h2>
			</a>
		</div>

		<div class="single_line">
			<p class="entry-subtitle"><?php the_subtitle() ?></p>
		</div>

		<div class="single_line">
			<span class="entry-excerpt"><?php the_excerpt() ?></span>
		</div>

		<div class="single_line">
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

			<a class="nickname" href="<?php echo $user_url ?>"><span class="author"><?php echo $user_nickname ?></span></a>
		</div>

		<div class="single_line">
			<a class="entry-format" href="<?php the_permalink() ?>">

				<?php if ( has_post_format('gallery') ): ?>
					<p>gallery</p>
				<?php endif; ?>

				<?php if ( ! ((has_post_format('gallery')) && (has_post_format('aside')) ) ): ?>
					<p>standard</p>		
				<?php endif; ?>

				<?php if ( has_post_format('aside') ): ?>
					<p>aside</p>		
				<?php endif; ?>

				<?php if ( has_post_format('link') ): ?>
					<p>link</p>
				<?php endif; ?>

				<?php if ( has_post_format('image') ): ?>
					<p>image</p>
				<?php endif; ?>

				<?php if ( has_post_format('video') ): ?>
					<p>video</p>
				<?php endif; ?>

				<?php if ( has_post_format('audio') ): ?>
					<p>audio</p>
				<?php endif; ?>

				<?php if ( has_post_format('chat') ): ?>		
					<p>chat</p>
				<?php endif; ?>

			</a>
		</div>

		<!-- categories  -->
		<div class="entry-cats flat">
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

		<!-- tags -->
		<div class="entry-tags flat">
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

		<div class="single_line">
			<p class="entry-date"><?php echo get_the_date( 'Y-m-d' ); ?> <?php the_views(); ?></p>
		</div>
		
	</div>

</div>
	
<div class="components-post-thumbnail-share">
	<?php
		$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

		if ( has_post_thumbnail() ) {
			echo '
			<div class="copy_Link">
				<input onclick="copy_Link()" name="copy_Link" type="text" value="'. $url.'">
			</div>';
		}
	?>
</div>