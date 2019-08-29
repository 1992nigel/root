<?php get_header(); ?>

        <!-- rendering wordpress post here -->
        <ol id="wp_component_post-home_content" class="">
           <?php
              if (have_posts()) :
                  while (have_posts()) : 
                      the_post(); ?>
           <?php get_template_part( './partials/wp/posts', 'home' ); ?>
           <?php endwhile;
              else:
                  echo '<p>NoContent Found</p>';
              ?>
           <?php endif; ?>
        </ol>
    
<?php
get_footer();
