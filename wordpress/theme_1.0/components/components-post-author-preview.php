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

	<a aria-label="<?php echo $user_nickname ?>" href="<?php echo $user_link ?>" class="author-details-background-image">

	<?php
		echo '<img src="'. get_avatar_url(get_the_author_meta('ID')) .'" alt="Girl in a jacket" width="500" height="600">';
	?>

	</a>

	<a class="nickname" href="<?php echo $user_link ?>"><span class="author"><?php echo $user_nickname ?></span></a>
	<a class="url" href="<?php echo $user_url ?>"><span class="author">tweet</span></a>
	<a class="email" href="mailto:<?php echo $user_email ?>"><span class="author">email</span></a>

</div>