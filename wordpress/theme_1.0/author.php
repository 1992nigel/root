<?php
 get_header();

 ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
<!-- This sets the $curauth variable -->

    <div class="author_bg"></div>

    <?php
    $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
    ?>

    <h1 class="page-title">@<span><?php echo $curauth->nickname; ?></span></h1>
    <p><?php echo $curauth->user_description; ?></p>

	<?php if ( $curauth->nickname == 'nownigel' ) : ?>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/ROkvOjBzLi0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		
	<?php endif; ?>

    <a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a>

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