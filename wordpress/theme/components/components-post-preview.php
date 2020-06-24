
	<?php 
			get_template_part( 'components/components', 'post-title' ); ?>
	
	
	<?php 
			get_template_part( 'components/components', 'post-thumbnail' ); ?>
	
	<?php 
			get_template_part( 'components/components', 'post-author' ); ?>

<div class="components-post-edit">
	<!-- component/widget = "excerpt" - ends here -->
	<div class="flat">
		<div class="edit">
			<?php
			edit_post_link()
			?>
		</div>
	</div>
</div>