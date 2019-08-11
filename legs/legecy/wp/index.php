<?php get_header(); ?>

      <div id="root" class="width_100 height_100vh overflow_y scrollbaryhidden">

        <div id="load_scene">
          <div id="load_container" class="position_relative margin_auto width_100 height_100vh float_left">
          
          </div>
        </div>

        <div id="route_scene">
          <div id="route_container" class="display_none position_relative margin_auto width_100 float_left">
          
          </div>
        </div>

        <div id="game_scene">
          <div id="game_container" class="display_none position_relative margin_auto width_100 float_left">
          
          </div>
        </div>

        <div id="lead_scene">
          <div id="lead_container" class="display_none position_relative margin_auto width_100 height_100vh float_left">
          
          </div>
        </div>
            
        <div id="content_scene">
          <div id="content_container" class="position_relative margin_auto width_100 float_left">

              <div id="ad" class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                  <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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

              <div id="youtube" class="width_100 position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">
                <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">

                  <iframe width="560" height="315" src="https://www.youtube.com/embed/UaCh0brNYJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  <div id="logo" class="position_absolute bottom_0 right_0 height_25 width_1205 margin_auto">
                    <div id="logo_mark" class="gui_logo_mark position_absolute top_0 left_0 bottom_0 right_0 height_75 width_100 margin_auto"></div>
                </div>

                </div>
              </div>

              <div id="ad" class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
                 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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

              <h1>form</h1>
              <div id="form_submit">
                 <?php 
                    echo do_shortcode('[ap-form]');
                    ?>
              </div>

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
               
            </div>

        </div>

        <div id="fold_scene">
          <div id="fold_container" class="">
            
          </div>
        </div>

        <div id="outro_scene">
          <div id="outro_container" class="">
            
          </div>
        </div>

        <div id="footer_scene">
          <div id="footer_container" class="">
            
          </div>
        </div>

      </div>
    
<?php
get_footer();
