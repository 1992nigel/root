

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="post-container">
		
		<div class="components-post-thumbnail">

			<a href="<?php the_permalink() ?>">
				<?php
				$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );

				if ( has_post_thumbnail() ) {
					echo '<div class="post-thumbnail-bg">';
				}

				if ( has_post_thumbnail() ) {

					echo '<img src="'. $url.'" alt="'. $url.'" width="500" height="600">';
				}?>
					
					<!-- * fix question marks * < ? php get_template_part( 'components/components-post-thumbnail-bg-info' ); ? >-->

				</div>
			</a>

		<!-- end of post-thumbnail-bg -->
		</div>

		<!-- date & views -->
		<div class="subtitle">
			<p><span><?php the_subtitle() ?></span></p>
		</div>

		<!-- date & views -->
		<div class="entry-date-views flat">

			<div class="entry-date-views-container">
					
				<div class="entry-date">
					<div class="entry-date-container">
						<span>
							<?php echo get_the_date( 'Y-m-d' ); ?>
						</span>
					</div>
				</div>
				
			</div>

		</div>

		<!-- categories  -->
		<div class="entry-cat-tag-container flat">
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
		</div>

		<div class="image-container">
			<?php 
			if ( has_post_thumbnail() ) {
				the_post_thumbnail();
			} ?>
		</div>


		<!-- article meta -->
		<div class="components-post-details">
			
			<!-- article title -->
			<div class="components-post-title">

				<!-- title -->
				<a class="article-post-title-link-h2" href="<?php the_permalink() ?>">
					<h2>
						<span>
							<?php the_title() ?>
						</span>
					</h2>
					
				</a>

				<!-- if sticky -->
				<?php if ( is_sticky() ) : ?>
					<a href="#">
						<span class="is_sticky">
							<?php _e( 'sticky', '' ); ?>
						</span>
					</a>
				<?php endif; ?>
			</div>

		</div>
		
		<div class="excerpt">
			<?php the_excerpt() ?>
		</div>

		<div class="entry-content">
			<?php
				the_content();
				?>
		</div><!-- .entry-content -->

		<!-- article -->
		<div class="components-post-author">

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

			<a aria-label="<?php echo $user_nickname ?>" href="<?php echo $user_link ?>" class="author-details-background-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID') , array(
			"size" => 450
			)); ?>');">

			</a>
			<a class="nickname" href="<?php echo $user_link ?>"><span class="author"><?php echo $user_nickname ?></span></a>
			<a class="url" href="<?php echo $user_url ?>"><span class="author">tweet</span></a>
			<a class="email" href="mailto:<?php echo $user_email ?>"><span class="author">email</span></a>

		</div>

	</div>

</article>