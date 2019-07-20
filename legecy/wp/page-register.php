<?php get_header(); ?>

      <section>

        <div id="root" tabindex="1" class="width_100 height_100vh overflow_y">

          <div class="width_100 height_100vh overflow_hidden position_relative margin_auto float_left">
          </div>
          
          <a class="tumblr-share-button" href="https://www.tumblr.com/share"></a>

          <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fnownigel.com&layout=button&size=large&appId=703372606507486&width=73&height=28" width="73" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

          <a class="twitter-share-button"
          href="https://twitter.com/nownigel"
          data-size="large">
          Tweet</a>
          <a class="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=nownigel.com"
          data-size="large">
          Tweet</a>
          <a class="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Hello%20world">
        Tweet</a>
          <a class="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          data-size="large">
        Tweet</a>

          <a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456">Reply</a>
          <a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456">Retweet</a>
          <a href="https://twitter.com/intent/like?tweet_id=463440424141459456">Like</a>

          <div class="width_100 overflow_hidden position_relative margin_auto float_left">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- Responsive ad -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-3909705375565088"
                 data-ad-slot="4471920918"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>

          <div class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/arKwMqvR1RE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div class="width_100 overflow_hidden position_relative margin_auto float_left">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- Responsive ad -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-3909705375565088"
                 data-ad-slot="4471920918"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>

          <div class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/arKwMqvR1RE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div class="width_100 overflow_hidden position_relative margin_auto float_left">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- Responsive ad -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-3909705375565088"
                 data-ad-slot="4471920918"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>

        </div>
      
      </section>

      <section class="width_100 height_100vh overflow_hidden position_fixed top_0 left_0 right_0 bottom_0 margin_auto z_index_-1">

        <div class="position_absolute bottom_0 left_0 margin_auto gui_character_right_face width_1205 height_100vh"></div>
        <div class="position_absolute bottom_0 right_0 margin_auto gui_character_left_face width_1205 height_100vh"></div>

        <div class="position_absolute bottom_0 left_0 margin_auto gui_character_right_1 width_1205 height_100vh"></div>
        <div class="position_absolute bottom_0 right_0 margin_auto gui_character_left_1 width_1205 height_100vh"></div>


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

      </section>
    
<?php
get_footer();
