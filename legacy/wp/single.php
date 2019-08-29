<!DOCTYPE html>
<html>

        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <head>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143180795-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-143180795-1');
    </script>

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-3909705375565088",
              enable_page_level_ads: true
         });
    </script>

    <!--
         <meta name="viewport" content="minimal-ui width=device-width, initial-scale=1.0"/>
         <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
         -->
    <title><?php the_title(); ?></title>    <link rel="shortcut icon" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
    <link rel="apple-touch-icon image_src" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg">
    <link rel="alternate" hreflang="en" href="http://www.nownigel.com/" />

    <link rel="apple-touch-icon-precomposed" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
    <link rel="stylesheet" href="https://nownigel.com/an_app.e31bb0bc.css" />
    <audio id="sound_effect_beep" src="https://nownigel.com/beep.4d3baad8.mp3" autostart="false"></audio>
    <meta http-equiv="content-language" content="en">
    <meta name="google-site-verification" content="djx4xejxICtAbg97NEFpOFt8PI342cgRHUGR8EH8XBk" />
    <meta name="viewport" content="minimal-ui width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="IH6dRhXpRVT_g2wrr4RH0BNT6Qpe7Dvizqa_IaiAfjA" />
    <meta name="description" content="<?php the_title(); ?>, by <?php echo get_the_author_meta( 'display_name' ); ?> <?php echo esc_html( get_the_category()[0]->name ); ?> <?php echo get_the_date('Y-m-d');?> <?php the_time('H:i:s');?>" />
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
    <script src="https://www.gstatic.com/firebasejs/5.10.0/firebase.js"></script>

    <link rel="preload" rel="stylesheet" href="https://nownigel.com/an_app.e31bb0bc.css" />
    <link rel="preload" href="https://nownigel.com/an_app.e31bb0bc.js" as="script" />

</head>

<body id="body" tabindex="1">

    <header id="header" class="transform_translate3d_top0 height_1205vh width_100 position_absolute top_0 left_0 right_0 float_left bg_white z_index_1 overflow_hidden easing_01 display_none easing_01">
        <nav>
            <a href="https://www.nownigel.com"><u>nownigel</u></a>
            <a href="https://www.nownigel.com">topics</a>
            <a href="https://www.nownigel.com">hashtags</a>
            <a href="https://www.nownigel.com">roster</a>
            <a href="https://www.nownigel.com">library</a>
            <a href="https://www.nownigel.com">search</a>
        </nav>
    </header>
    
  <main id="root" class="width_100">
        
        <article id="post-home-container" <?php post_class(); ?>>
						
			<section class="position_relative margin_auto float_left width_100">

                <?php if ( has_post_thumbnail() ) : ?>
                    <a id="wp_feature_img" href="<?php the_permalink(); ?>" alt="<?php echo the_title(); ?>" title="<?php the_title_attribute(); ?>" class="position_relative margin_auto float_left width_100">
                        <?php the_post_thumbnail(); ?>
                    </a>
                <?php endif; ?>

                <h1 class="position_relative margin_auto float_left width_100"><?php the_title(); ?></h1>
                <p>Written by: <?php the_author_link(); ?></p>
                <p>Email the author: <a href="mailto:<?php echo get_the_author_meta( 'user_email'); ?>"><?php
                the_author_meta( 'display_name'); ?></a></p>
                <p>Email the author: <?php echo get_the_author_meta( 'user_email'); ?></p>
                <p class="icon-date position_relative margin_auto float_left width_100"><?php echo get_the_date('Y-m-d');?></p>
                <p class="icon-time position_relative margin_auto float_left width_100"><?php the_time('H:i:s');?></p>
                <p class="position_relative margin_auto float_left width_100"><?php the_content(); ?></p>
                <i class="position_relative margin_auto float_left width_100"><?php the_excerpt(); ?></i>
                <div id="pagine" class="position_relative margin_auto float_left width_100"><?php echo get_the_category_list(); ?></div>
                <?php
                if(get_the_tag_list()) {
                    echo get_the_tag_list('<ul id="wp_to_fb_posts_id" class="position_relative margin_auto float_left width_100"><li class="position_relative margin_auto float_left width_100">','</li><li class="position_relative margin_auto float_left width_100">','</li></ul>');
                }
                ?>

                 <div id="social" class="width_100 float_left position_relative">
                    <a class="tumblr-share-button" href="https://www.tumblr.com/share"></a>
                    <iframe src="https://www.facebook.com/plugins/share_button.php?href=<?php echo get_post_permalink(); ?>&layout=button&size=large&appId=703372606507486&width=73&height=28" width="73" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    <a class="twitter-share-button" href="<?php echo get_post_permalink(); ?>" data-size="large">
                    Tweet</a>
                    <a class="twitter-share-button" href="<?php echo get_post_permalink(); ?>" data-size="large">
                    Tweet</a>
                    <a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456">Reply</a>
                    <a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456">Retweet</a>
                    <a href="https://twitter.com/intent/like?tweet_id=463440424141459456">Like</a>
                 </div>

                <?php edit_post_link('edit', '<p>', '</p>'); ?>
                <?php wp_delete_post_link('Delete This'); ?>
                <?php previous_post_link(); ?>
                <?php next_post_link(); ?>
                <!--
                <p>This post was written by <?php the_author(); ?></p>
                <p>Written by: 
                <?php the_author_link(); ?></p>
                <p>Written by: 
                <?php echo get_the_author_link(); ?></p>
                <p>Email the author: <a href="mailto:<?php echo get_the_author_meta( 'user_email', 25 ); ?>"><?php
    the_author_meta( 'display_name', 25 ); ?></a></p>
    <p>Email the author: <?php echo get_the_author_meta( 'user_email', 25 ); ?></p>
                <li class="entry-date"><?php echo get_the_date(); ?></li>
              -->

			</section>

		</article>
        <?php endwhile; ?>
        <?php endif; ?>

          <div id="fold_meet" class="position_relative float_left width_100vw height_100vh bg_grey">
         </div>
        <!-- indexish -->

          <div id="buffer" class="position_relative float_left width_100vw height_100vh">
         </div>
         <div id="lead" class="position_relative float_left width_100vw height_100vh">
         </div>

         <div id="fold" class="position_relative float_left width_100vw height_100vh">
            <div class="position_relative float_left width_25 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">


               <div class="position_relative calc_10vw_width padding_5vw">
       
                   <h2 class="font_size_10vw line_height_10vw">Full Height</h2>
                   <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
               </div>

            </div>
           
            <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_1205 display_flex_flow">
               <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                  <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                    
                    <div id="element_overflow_x_scene" class=" position_relative width_50vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                     
                       <div class="position_relative calc_2vw border_1vw_grey float_left">
                          <div class="position_relative calc_2vw padding_1vw float_left">

                           </div>

                       </div>

                    </div>

                    <div id="element_overflow_x_scene" class=" position_relative width_50vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                     
                       <div class="position_relative calc_2vw border_1vw_grey float_left">
                          <div class="position_relative calc_2vw padding_1vw float_left">

                           </div>

                       </div>

                    </div>

                    <div id="element_overflow_x_scene" class=" position_relative width_50vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                     
                       <div class="position_relative calc_2vw border_1vw_grey float_left">
                          <div class="position_relative calc_2vw padding_1vw float_left">

                           </div>

                       </div>

                    </div>

                    <div id="element_overflow_x_scene" class=" position_relative width_50vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">
                     
                       <div class="position_relative calc_2vw border_1vw_grey float_left">
                          <div class="position_relative calc_2vw padding_1vw float_left">

                           </div>

                       </div>

                    </div>

                 </div>

              </div>

            </div>
         </div>

         <div id="fold" class="position_relative float_left width_100vw height_100vh">


                <div id="preview_info_scroll_x" class="position_absolute top_0 right_0 margin_auto float_left width_75vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                    <div class="position_relative float_left calc_2vw border_1vw_grey">
                        
                        <div id="element_overflow_x"  class="position_absolute bottom_0 left_0 float_left width_100 height_100 display_flex_flow">
                            <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarxhidden inline_flex">
                                <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">
                                
                                <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>


                            </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div id="preview_info_scroll_y" class="position_absolute bottom_0 left_0 margin_auto float_left width_25vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                    <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                        
                        
                            <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden">

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                            </div>


                    </div>

                </div>

                <div id="preview_info_scroll_y" class="position_absolute top_25vw right_0 margin_auto float_left width_1205vw calc_25vw_height webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">

                    <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                        
                        
                            <div class="position_relative float_left width_100 height_100 box_shadow_1vw_dark_inset overflow_y scrollbaryhidden">

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_right_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                                <div id="bg-character" class="gui_character_left_face position_relative width_100 height_1205vw margin_auto float_left">
                                    <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                                </div>

                            </div>


                    </div>

                </div>

         </div>

         <div id="info_scroll_x"  class="position_relative float_left width_100 height_100vh display_flex_flow">
              <div class="position_relative float_left width_100 height_100 top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">
                  <div class="height_100 float_left position_relative display_webkit_box webkit_box_pack_center webkit_box_align">

                     <div id="element_overflow_x_scene" class=" position_relative width_100vw height_100 margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align">

                       <div class="position_relative calc_2vw border_1vw_grey float_left">
                         
                         <div class="position_relative calc_10vw padding_5vw float_left">
                                                                                     
                                                                 
                               <div class="width_50 float_left">
                                 <p class="font_size_5vw line_height_5vw">UX State</p>
                                 <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                   
                                 <h2>Platform</h2>
                                 <div id="signal">is_Desktop: <div id="is_Desktop"></div></div>
                                 <div id="signal">is_Mobile: <div id="is_Mobile"></div></div>
                                 <div id="signal">ux_dimensions_height: <div id="ux_dimensions_height"></div></div>
                                 <div id="signal">ux_dimensions_width: <div id="ux_dimensions_width"></div></div>
                                 <div id="signal">ux_browser_height: <div id="ux_browser_height"></div></div>
                                 <div id="signal">ux_browser_width: <div id="ux_browser_width"></div></div>
                                 <div id="signal">ux_screen_height: <div id="ux_screen_height"></div></div>
                                 <div id="signal">ux_screen_width: <div id="ux_screen_width"></div></div>

                                 <p class="font_size_5vw line_height_5vw">Events</p>
                                  <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                        
                                  <h2>Device</h2>
                                  <h2>Gravity</h2>
                                  <div id="signal">event_accelerationIncludingGravity_x: <div id="event_accelerationIncludingGravity_x"></div></div>
                                  <div id="signal">event_accelerationIncludingGravity_y: <div id="event_accelerationIncludingGravity_y"></div></div>
                                  <div id="signal">event_accelerationIncludingGravity_z: <div id="event_accelerationIncludingGravity_z"></div></div>

                                  <h2>VR</h2>
                                  <div id="signal">last_action: <div id="last_action"></div></div>

                                  <h2>Positions</h2>
                                  <div id="signal">event_alpha: <div id="event_alpha"></div></div>
                                  <div id="signal">event_beta: <div id="event_beta"></div></div>
                                  <div id="signal">event_gamma: <div id="event_gamma"></div></div>

                                  <h2>Orientation</h2>
                                  <div id="signal">event_portrait: <div id="event_portrait"></div></div>
                                  <div id="signal">event_landscape: <div id="event_landscape"></div></div>

                                  <h2>Orientations</h2>
                                  <div id="signal">event_orientation: <div id="event_orientation"></div></div>

                                  <h2>Events</h2>
                                  <h3>Scroll</h3>
                                  <div id="signal">history_scroll: <div id="history_scroll"></div></div>

                                  <h3>Mouse</h3>
                                  <div id="signal">current_mouse: <div id="current_mouse"></div></div>
                                  <div id="signal">history_mouse: <div id="history_mouse"></div></div>
                                  <div id="signal">history_mouse_enter: <div id="history_mouse_enter"></div></div>
                                  <div id="signal">history_mouse_leave: <div id="history_mouse_leave"></div></div>
                                  <div id="signal">history_mouse_up: <div id="history_mouse_up"></div></div>
                                  <div id="signal">history_mouse_down: <div id="history_mouse_down"></div></div>
                                  <div id="signal">history_mouse_up_move: <div id="history_mouse_up_move"></div></div>
                                  <div id="signal">history_mouse_down_move: <div id="history_mouse_down_move"></div></div>
                                  <div id="signal">history_mouse_drag_drop: <div id="history_mouse_drag_drop"></div></div>
                                  <div id="signal">history_key: <div id="history_key"></div></div>
                                  <div id="signal">history_key_up: <div id="history_key_up"></div></div>
                                  <div id="signal">history_touch: <div id="history_touch"></div></div>
                                  <div id="signal">history_touch_start: <div id="history_touch_start"></div></div>
                                  <div id="signal">history_touch_end: <div id="history_touch_end"></div></div>
                                  <div id="signal">history_touch_drag_drop: <div id="history_touch_drag_drop"></div></div>

                                  <p class="font_size_5vw line_height_5vw">Game State</p>
                                  <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                  
                                  <h2>Game Screens</h2>
                                  <div id="signal">level: <div id="level"></div></div>
                                  <div id="signal">pause: <div id="pause"></div></div>
                                  <div id="signal">timeout: <div id="timeout"></div></div>

                                  <h2>Game Stats</h2>
                                  <div id="signal">HP: <div id="HP"></div></div>
                                  <div id="signal">Mana: <div id="Mana"></div></div>
                                  <div id="signal">points: <div id="points"></div></div>
                                  
                                  <h2>Game Character</h2>
                                  <div id="signal">interaction_character_height: <div id="interaction_character_height"></div></div>
                                  <div id="signal">interaction_character_width: <div id="interaction_character_width"></div></div>
                                  <div id="signal">interaction_character_clientX: <div id="interaction_character_clientX"></div></div>
                                  <div id="signal">interaction_character_clientY: <div id="interaction_character_clientY"></div></div>
                                    
                                  <h2>Game VR</h2>
                                  <div id="signal">interaction_vr_clientX: <div id="state.interaction.vr.clientX"></div></div>
                                  <div id="signal">interaction_vr_clientY: <div id="state.interaction.vr.clientY"></div></div>
                                  
                                  <h2>Dice</h2>
                                  <div id="signal">dice_history: <div id="dice_history"></div></div>
                                             
                                  <h2>snake</h2>
                                  <div id="signal">snake_history: <div id="snake_history"></div></div>

                                  <h2>bounce</h2>
                                  <div id="signal">bounce_history: <div id="bounce_history"></div></div>

                                  <h2>pen</h2>
                                  <div id="signal">pen_history: <div id="pen_history"></div></div>

                                  <h2>pencil</h2>
                                  <div id="signal">pencil_history: <div id="pencil_history"></div></div>

                                  <p class="font_size_5vw line_height_5vw">Game Events</p>
                                  <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                  

                                  <h2>scroll</h2>
                                   <div id="scroll_clientHeight"></div>
                                   <div id="scroll_clientWidth"></div>
                                   <div id="scroll_scrollHeight"></div>
                                   <div id="scroll_scrollWidth"></div>
                                   <div id="scroll_scrollTop"></div>
                                   <div id="scroll_scrollLeft"></div>

                                     <h2>mouse</h2>

                                     <div id="signal">mousemove while up: <div id="">pencil</div></div>
                                     <div id="signal">mousemove while down: <div id="">pen</div></div>
                                     <div id="signal">click to: <div id="">roll dice</div></div>

                                     <h2>keys</h2>

                                     <div id="signal">esc key: <div id="">ui reset</div></div>
                                     <div id="signal">q key: <div id="">model reset</div></div>

                                     <div id="signal">left arrow: <div id="">increases interaction_character_clientX</div></div>
                                     <div id="signal">right arrow: <div id="">decreases interaction_character_clientX</div></div>
                                     <div id="signal">up arrow: <div id="">increases interaction_character_clientY</div></div>
                                     <div id="signal">down arrow: <div id="">decreases interaction_character_clientY</div></div>
                                     
                                     <div id="signal">w key: <div id="">increases vr x-axis</div></div>
                                     <div id="signal">a key: <div id="">decreases vr x-axis</div></div>
                                     <div id="signal">s key: <div id="">increases vr y-axis</div></div>
                                     <div id="signal">d key: <div id="">decreases vr y-axis</div></div>
                                     

                                     <p class="font_size_5vw line_height_5vw">Time</p>
                                     <div class="width_100 position_relative margin_auto float_left font_size_1vw line_height_1vw">(json data recieved from wordpress app) Use this to create <a href="#">data sorts</a>, <a href="#">data from logged user</a> and <a href="#">data based on location</a> </div>
                                           
                                     <div id="signal">current_frame_motion: <div id="current_frame_motion"></div></div>
                                     <div id="signal">current_duration: <div id="current_duration"></div></div>
                                     <div id="signal">time_onload: <div id="time_onload"></div></div>
                                     <div id="signal">time: <div id="time"></div></div>

                               </div>    

                           </div>

                       </div>

                     </div>

                      <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                      <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                      <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                      <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                      <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                      <div id="bg-character" class="gui_character_left_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                      <div id="bg-character" class="gui_character_right_face position_relative width_100vw height_100 margin_auto float_left">
                          <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_white"></div>
                      </div>
                  </div>
              </div>
         </div>

         <div id="info_scroll_y" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">
            <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                
                
                    <div class="position_relative float_left width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">


                        <div class="position_relative calc_10vw_width padding_5vw">
                
                            <h2 class="font_size_10vw line_height_10vw">Full Height</h2>
                            <p class="font_size_5vw line_height_5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p class="font_size_5vw line_height_5vw"><u>Click</u> to <b>active</b></p><p class="font_size_205vw line_height_205vw"><u>Click</u> to <b>active</b></p>
                        </div>

                    </div>
            </div>
         </div>

         <div id="info_scroll_y" class="position_relative margin_auto float_left width_100 height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">
            <div class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                
                
                    <div class="position_relative float_left width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">


                                       
                        <section id="filler_full" class="width_100 position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
                           <div class="position_relative margin_auto float_left">
                              <p class="font_size_5vw line_height_5vw">current events</p>
                              <p class="font_size_30125vw line_height_30125vw">scroll</p>
                              <p class="font_size_30125vw line_height_30125vw">click</p>
                              <p class="font_size_30125vw line_height_30125vw">mousemove</p>
                              <p class="font_size_30125vw line_height_30125vw">mouseenter</p>
                              <p class="font_size_30125vw line_height_30125vw">mouseleave</p>
                              <p class="font_size_30125vw line_height_30125vw">mouseup</p>
                              <p class="font_size_30125vw line_height_30125vw">mousedown</p>
                              <p class="font_size_30125vw line_height_30125vw">keyups</p>
                              <p class="font_size_30125vw line_height_30125vw">keydowns</p>
                              <p class="font_size_30125vw line_height_30125vw">touchmove</p>
                              <p class="font_size_30125vw line_height_30125vw">touchstart</p>
                              <p class="font_size_30125vw line_height_30125vw">touchend</p>
                           </div>
                        </section>
                        <section id="filler_full" class="width_100 position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
                           <div class="position_relative margin_auto float_left">
                              <p class="font_size_5vw line_height_5vw">history events</p>
                              <p class="font_size_30125vw line_height_30125vw">scroll</p>
                              <p class="font_size_30125vw line_height_30125vw">click</p>
                              <p class="font_size_30125vw line_height_30125vw">mousemove</p>
                              <p class="font_size_30125vw line_height_30125vw">mouseenter</p>
                              <p class="font_size_30125vw line_height_30125vw">mouseleave</p>
                              <p class="font_size_30125vw line_height_30125vw">mouseup</p>
                              <p class="font_size_30125vw line_height_30125vw">mousedown</p>
                              <p class="font_size_30125vw line_height_30125vw">keyups</p>
                              <p class="font_size_30125vw line_height_30125vw">keydowns</p>
                              <p class="font_size_30125vw line_height_30125vw">touchmove</p>
                              <p class="font_size_30125vw line_height_30125vw">touchstart</p>
                              <p class="font_size_30125vw line_height_30125vw">touchend</p>
                           </div>
                        </section>
                        <section id="filler_full" class="width_100 position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
                           <div class="position_relative margin_auto float_left">
                              <p class="font_size_5vw line_height_5vw">interaction</p>
                              <p class="font_size_30125vw line_height_30125vw">bounce</p>
                              <p class="font_size_30125vw line_height_30125vw">snake</p>
                              <p class="font_size_30125vw line_height_30125vw">ball</p>
                           </div>
                        </section>
                    </div>
            </div>
         </div>
<!--
         <img src="./assets/img/clem.png" alt="nownigel" width="100%" height="100vh">
         <hr>
         <section id="filler_full" class="width_100 position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box ">
            <div class="position_relative margin_auto float_left">
               <h1 id="h1" class="font_size_1205vw line_height_1205vw"><a href="https://www.nownigel.com">nownigel or nigel</a></h1>
               <h2 id="h2" class="font_size_9035vw line_height_9035vw">UI / UX engineer, motion artist and graphic designer</h2>
               <h3 id="h3" class="font_size_6025vw line_height_6025vw">Videos, Graphics and Interactables</h3>
               <h4 id="h4" class="font_size_30125vw line_height_30125vw">Desktop, Mobile & VR</h4>
               <h5 id="h5" class="font_size_30125vw line_height_30125vw">Made with Javascript, HTML & CSS</h5>
               <h6 id="h6" class="font_size_30125vw line_height_30125vw">New all original content everyday</h6>
            </div>
         </section>
         <hr>
     -->
         <section id="ad" class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
            <div class="position_relative float_left calc_2vw border_1vw_grey bg_grey">
               <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
               <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3909705375565088" data-ad-slot="4471920918" data-ad-format="auto" data-full-width-responsive="true"></ins>
               <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
               </script>
            </div>
         </section>
         <hr>
         <section id="ad" class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3909705375565088" data-ad-slot="4471920918" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
         </section>
         <section id="dev_stuff" class="width_100 overflow_hidden position_relative margin_auto float_left">
            <hr>
            <p>Log user</p>
            <ol>
               <input id="login_username_input" type="text" placeholder="login_username_input" class="width_100" /></br>
               <input id="login_password_input" type="text" placeholder="login_password_input" class="width_100" /></br>
               <button id="login_submit">login</button></br>
               <button id="logout_submit">logout</button></br>
               <p id="login_user_info">please create an account.</p>
            </ol>
            <hr>
            <p>Validated user</p>
            <ol>
               <p id="validated_user">n/a</p>
               <ol id="validated_user_posts">n/a</ol>
            </ol>
            <hr>
            <p class="font_size_5vw line_height_5vw">Create post/user</p>
            <input id="create_user_username" type="text" placeholder="create_user_username" class="width_100 float_left" /></br>
            <input id="create_user_password" type="text" placeholder="create_user_password" class="width_100 float_left" /></br>
            <button id="element_addRoster" class="width_100 float_left">add to roster</button></br>
            <input id="create_post_title" type="text" placeholder="create_post_title" class="width_100 float_left" /></br>
            <input id="create_post_tag" type="text" placeholder="create_post_tag" class="width_100 float_left" /></br>
            <button id="element_addListing" class="width_100 float_left">add to listing</button></br>
            <input id="create_user_activity_tag" type="text" placeholder="create_user_activity_tag" class="width_100 float_left" /></br>
            <button id="element_addActivity" class="width_100 float_left">add to activity</button></br>
            <input id="create_leaderboard_stat" type="text" placeholder="create_leaderboard_stat" class="width_100 float_left" /></br>
            <button id="element_addInteraction" class="width_100 float_left">add to interaction</button></br>
            <input id="create_line_that_includes_ref_ids" type="text" placeholder="create_line_that_includes_ref_ids" class="width_100 float_left" /></br>
            <button id="element_addMessages" class="width_100 float_left">add to messages</button></br>
            <input id="create_line_to_url" type="text" placeholder="create_line_to_url" class="width_100 float_left" /></br>
            <button id="element_addStream" class="width_100 float_left">add to stream</button></br>
            <hr>
            <p>fb_library_ol</p>
            <ol id="fb_library_ol">
            </ol>
            <hr>
            <p>fb_input_title_filter</p>
            <input id="fb_input_title_filter" type="text" placeholder="fb_input_title_filter" class="width_100" />
            <p>fb_input_author_name_filter</p>
            <input id="fb_input_author_name_filter" type="text" placeholder="fb_input_author_name_filter" class="width_100" />
            <p class="font_size_5vw line_height_5vw">filtered all - title</p>
            <ol id="filtered_library_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">filtered library - title</p>
            <ol id="filtered_library_child_library_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">filtered roster - title</p>
            <ol id="filtered_library_child_roster_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">filtered interaction - title</p>
            <ol id="filtered_library_child_interaction_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">filtered activity - title</p>
            <ol id="filtered_library_child_activity_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">filtered messages - title</p>
            <ol id="filtered_library_child_messages_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">filtered stream - title</p>
            <ol id="filtered_library_child_stream_by_title_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">sorted filtered: time up</p>
            <ol id="fb_sorted_library_by_time_up_ol" class="width_100"></ol>
            <p class="font_size_5vw line_height_5vw">sorted filtered: time down</p>
            <ol id="fb_sorted_library_by_time_down_ol" class="width_100"></ol>
            <hr>
            <p>wp_library_ol</p>
            <ol id="wp_library_ol">
            </ol>
            <hr>
            <p>wp_input_title_filter</p>
            <input id="wp_input_title_filter" type="text" placeholder="wp_input_title_filter" class="width_100" />
            <p>wp_input_author_name_filter</p>
            <input id="wp_input_author_name_filter" type="text" placeholder="wp_input_author_name_filter" class="width_100" />
            <p>filtered_wp_library_by_title_ol</p>
            <ol id="filtered_wp_library_by_title_ol">
            </ol>
            <hr>
         </section>
         <section id="ad" class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3909705375565088" data-ad-slot="4471920918" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
         </section>
         <section id="button" class="width_100 overflow_hidden position_relative margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box">
            <p>Load more post</p>
         </section>
         <!-- index ish-->

        <section id="dev_stuff" class="width_100 overflow_hidden position_relative margin_auto float_left">
        <hr>
            <
              <?php
                  if ( !is_user_logged_in() ) {
                      echo do_shortcode('[wppb-login]');
                  }
              ?>
              <?php
                  if ( !is_user_logged_in() ) {
                      echo do_shortcode('[wppb-register]');
                  }
              ?>

              <?php
                  if ( is_user_logged_in() ) {
                      echo do_shortcode('[wppb-edit-profile]');
                  }
              ?>
                  
            <p>submit a post to form</p>
              <p>ap-form</p>
            <div id="form_submit">
                  <?php 
                  echo do_shortcode('[ap-form]');
                  ?>
            </div>
            
        </section>

  </main>
    

<?php
get_footer();
