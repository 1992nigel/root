
<div class="components-post-title-thumbnail">

	<div class="flat flex">
		
		<div class="split">

			<div class="author-details-background-image outside-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID'), array("size"=>450)); ?>');">
			</div>

		</div>


		<div class="split">
			<div class="flat">


					<div class="flat flex">
						<div class="split">
							<div class="author-details-background-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID'), array("size"=>450)); ?>');">
							</div>
						</div>

						<div class="split">
							<!-- title h2-->
							<a href="<?php the_permalink() ?>">
								<h2><?php the_title() ?></h2>
							</a>
						</div>
					</div>	

					<!-- if sticky -->
					<?php if ( is_sticky() ) : ?>
						<a href="#"><span class="is_sticky"><?php _e( 'sticky', '' ); ?></span></a>
					<?php endif; ?>


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
					<div class="flat">
						<div class="entry-cats">
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
						<div class="entry-tags">
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



					<div id="author_info" class="flat flex">

						<div class="split">
							<!-- title h2-->
							<a href="<?php the_permalink() ?>">


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

								<a href="<?php echo $user_link ?>"><span class="entry-featured"><?php echo $user_name ?></span></a>
								<a href="<?php echo $user_link ?>"><span class="entry-featured">></span></a>
								<a href="mailto:<?php echo $user_email ?>"><span class="entry-featured"><?php echo $user_email ?></span></a>

							</a>
						</div>
						
						<div class="split">
							<div class="author-details-background-image" style = "background-image: url('<?php echo get_avatar_url(get_the_author_meta('ID'), array("size"=>450)); ?>');">
							</div>
						</div>

					</div>
			</div>

		</div>

	</div>

</div>