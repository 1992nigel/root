<?php get_header(); ?>

<h1>category</h1>
<li id="post-home-container" <?php post_class(); ?>>

  <?php the_title(); ?>
  <p>Category: <?php single_cat_title(); ?></p>
  
</li>

<?php
get_footer();
