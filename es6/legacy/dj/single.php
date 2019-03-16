

  <?php
  /**
   * The template for displaying all single posts and attachments
   *
   * @package WordPress
   * @subpackage Twenty_Fifteen
   * @since Twenty Fifteen 1.0
   */

  get_header(); ?>

         <?php
         /* Start the Loop */
         while ( have_posts() ) :
            the_post(); ?>

         <li id="post-home-container" <?php post_class(); ?>>

          <span id="wrapper" class="single">

            <div
              class="position_relative width_100 height_100vh float_left">
            </div>

            <main
              class="position_relative width_100 height_100vh float_left">
            </main>

            <a id="title" class="position_relative width_100 font_size_205vh line_height_5vh float_left" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

          </span>

         </li>

        <?php
        endwhile; // End of the loop.
        ?>
<?php get_footer(); ?>
