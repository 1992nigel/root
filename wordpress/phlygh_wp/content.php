<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="post-container">
	
		<div class="post-preview">
			
			<!-- date & views -->
			<a class="post-thumbnail" href="<?php the_permalink() ?>">
				<?php
				$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
				if ( has_post_thumbnail() ) {
					echo '<img src="'. $url.'" alt="'. $url.'" width="500" height="600">';
				}?>
			</a>

			<!-- info -->
			<div class="post-preview-info">
			
				<!-- date & views -->
				<div class="post-title">

					<a class="" href="<?php the_permalink() ?>">
						<h2><span><?php the_title() ?></span></h2>
						<!-- if sticky -->
						<?php if ( is_sticky() ) : ?>
							<a href="#"><span class="is_sticky"><?php _e( 'sticky', '' ); ?></span></a>
						<?php endif; ?>
					</a>
				</div>

				<!-- date & views -->
				<div class="subtitle">
					<p><span><?php the_subtitle() ?></span></p>
				</div>
		
				<!-- date & views -->
				<div class="excerpt"><?php the_excerpt() ?>
				</div>

				<!-- date & views -->
				<div class="date">
					<p><span><?php echo get_the_date( 'Y-m-d' ); ?></span></p>
				</div>

				<!-- categories  -->
				<ul class="categories">
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

				<!-- tags  -->
				<ul class="tags">
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

	</div>
	
</article>