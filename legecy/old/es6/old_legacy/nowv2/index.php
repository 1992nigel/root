<?php get_header(); ?>


        <!-- rendering wordpress post here -->
        <ol id="wp_component_post-home_content" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 position_relative margin_auto float_left bg_green">
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
