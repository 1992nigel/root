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
		
			<!-- meta -->
			<div class="post-meta">

				<!-- title -->
				<h1 class="post-meta-title"><?php wp_title(''); ?> 
				</h1>

				<!-- subtitle -->
				<h2 class="post-meta-subtitle"><?php the_subtitle() ?>
					</h2>

				<!-- excerpt -->
				<h2 class="post-meta-excerpt"><?php the_excerpt() ?>
				</h2>

				<!-- post-meta-single-line -->
				<div class="post-meta-single-line">
					
					<!-- date -->
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

			<!-- info -->
			<div class="post-info">

				<div class="content">
					<?php
						the_content();
						?>
				</div>
			</div>

		</div>

	</div>

</article>