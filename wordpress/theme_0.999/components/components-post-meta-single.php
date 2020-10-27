
<div class="single_meta">

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

	<!-- format -->
	<div class="formats flat">
			<?php if ( has_post_format('gallery') ): ?>
				<p class="flat">gallery</p>
			<?php endif; ?>

			<?php if ( ! ((has_post_format('gallery')) && (has_post_format('aside')) ) ): ?>
				<p class="flat">standard</p>		
			<?php endif; ?>

			<?php if ( has_post_format('aside') ): ?>
				<p class="flat">aside</p>		
			<?php endif; ?>

			<?php if ( has_post_format('link') ): ?>
				<p class="flat">link</p>
			<?php endif; ?>

			<?php if ( has_post_format('image') ): ?>
				<p class="flat">image</p>
			<?php endif; ?>

			<?php if ( has_post_format('video') ): ?>
				<p class="flat">video</p>
			<?php endif; ?>

			<?php if ( has_post_format('audio') ): ?>
				<p class="flat">audio</p>
			<?php endif; ?>

			<?php if ( has_post_format('chat') ): ?>		
				<p class="flat">chat</p>
			<?php endif; ?>
	</div>

	<!-- date & views -->
	<div class="entry-date flat">
		<div class="entry-date-container">
			<span>
				<p>
					<?php echo get_the_date( 'Y-m-d' ); ?>
				</p>
			</span>
		</div>
	</div>

	<div class="entry-views flat">
		<div class="entry-views-container">
			<span>
				<p>
					<?php the_views(); ?>
				</p>
			</span>
		</div>
	</div>

</div>