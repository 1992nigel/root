<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="post-container">

		<div class="post-single">

			<!-- date & views -->
			<div class="post-thumbnail">
				<?php
				$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
				if ( has_post_thumbnail() ) {
					echo '<img src="'. $url.'" alt="'. $url.'" width="500" height="600">';
				}?>
			</div>
		
			<!-- info -->
			<div class="post-info">

				<!-- date & views -->
				<div class="post-title">

					<!-- subtitle replaces the title -->
					<h1 class="subtitle"><?php the_subtitle() ?>
						</h1>

				</div>


				<!-- date & views -->
				<h2 class="excerpt"><?php the_excerpt() ?>
				</h2>

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

				<div class="content">
					<?php
						the_content();
						?>
				</div><!-- .entry-content -->
			</div>
		</div>

	</div>

</article>