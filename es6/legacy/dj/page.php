

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

          <span id="wrapper" class="page">

            <div
              class="position_relative width_100 height_100vh float_left">
            </div>

            <main
              class="position_relative width_100 height_100vh float_left">
            </main>

          </span>

        <?php
        endwhile; // End of the loop.
        ?>
<?php get_footer(); ?>
