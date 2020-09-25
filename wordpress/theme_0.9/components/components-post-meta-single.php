
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

<div class="formats">

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

		<div class="entry-views">
			<div class="entry-views-container">
				<span>
					<?php the_views(); ?>
				</span>
			</div>
		</div>

	</div>

</div>