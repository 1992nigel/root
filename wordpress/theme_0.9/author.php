<?php
 get_header();

 ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
<!-- This sets the $curauth variable -->

    <?php
    $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
    ?>

    <h1 class="page-title">@<span><?php echo $curauth->nickname; ?></span></h1>
    <a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a>
    <p><?php echo $curauth->user_description; ?></p>
    <p>Posts by <?php echo $curauth->nickname; ?>:</p>
		<?php
			if (have_posts()) :
				while(have_posts()) : the_post(); ?>


					<?php get_template_part( 'content', '' ); ?>
				<?php endwhile;

			else :
				echo '<p>no content found</p>';

			endif;
			?>

	</main>

</div>
<?php

 get_footer();

?>