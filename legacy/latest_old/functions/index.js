const functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

// express
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

var posts = [];
var detail = {};

// def route
app.get('/', (req, res) => {

    db.collection("users").get().then(snapshot => {

        snapshot.forEach(doc => {
            let items = doc.data();
            posts.push(items)
        });
        const date = new Date();
        const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
        let boy = 0;
        let posts_guides = [];

        res.send(`
            <!doctype html lang="en">
            <head>

              <meta name="theme-color" content="#317EFB"/>
              <meta http-equiv="content-language" content="en">
              <meta name="google-site-verification" content="djx4xejxICtAbg97NEFpOFt8PI342cgRHUGR8EH8XBk" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="google-site-verification" content="IH6dRhXpRVT_g2wrr4RH0BNT6Qpe7Dvizqa_IaiAfjA" />
              <meta name="description" content="p.h.l.y.g.h. / phlygh - ${posts[0].id}" />
              <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />

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

              <title>${posts[0].id}</title>
              <link rel="manifest" href="."https://www.phlygh.com/manifest.json">
              <link rel="shortcut icon" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon image_src" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg">
              <link rel="alternate" hreflang="en" href="https://www.phlygh.com/" />
              <link rel="apple-touch-icon-precomposed" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="stylesheet" href="https://phlygh.com/fly.e31bb0bc.css">
            </head>

            <header id="header" class="transform_translate3d_top_100 easing_01 display_none">
                 <nav>

                    <div id="header_link_1" alt="phlygh" class="position_relative height_100 margin_auto">
                       <div></div>
                    </div>
                    <div id="header_link_2" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_3" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_4" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_5" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_6" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_7" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_8" class="header_link">
                       <div></div>
                    </div>

                 </nav>
            </header>

            <body id="body" tabindex="0">
    
              <div class="position_relative width_100 height_100vh z_index_0">
                <div id="lead" class="bg_blue position_absolute top_0 left_0 easing_01"></div>
              </div>
               
                <h1>Phlygh, content</h1>

                  <!-- tab -->
                  <a class="tab" href="1">tab: ${posts[0].id}</a>
                  <a class="tab" href="2">tab: ${posts[0].id}</a>
                  <a class="tab" href="3">tab: ${posts[0].id}</a>
                  <a class="tab" href="4">tab: ${posts[0].id}</a>
                  <a class="tab" href="5">tab: ${posts[0].id}</a>
                  <a class="tab" href="6">tab: ${posts[0].id}</a>
                  <a class="tab" href="7">tab: ${posts[0].id}</a>
                  <a class="tab" href="8">tab: ${posts[0].id}</a>

                  <!-- seo -->
                  <p>id: ${posts[0].id}, query: ${posts[0].id}</p>

                  <!-- seo basics -->
                  <div id="who" class="width_100 float_left bg_grey"></div>
                  <h2>Who is <u>phlygh</u></h2>
                  <p>A bunch of devs, designer and content creators.</p>

                  <div id="what" class="width_100 float_left bg_grey"></div>
                  <h2>What is <u>phlygh</u></h2>
                  <p>A platform for original content creators, basically</p>

                  <div id="when" class="width_100 float_left bg_grey"></div>
                  <h2>When is <u>phlygh</u></h2>
                  <p>Every minute content is shuffled and re currated to users</p>

                  <div id="where" class="width_100 float_left bg_grey"></div>
                  <h2>Where is <u>phlygh</u></h2>
                  <p>presenting new likable and interesting content to users</p>

                  <div id="why" class="width_100 float_left bg_grey"></div>
                  <h2>Why is <u>phlygh</u></h2>
                  <p>To safeguard ANY influence, your content and viewship is respected by our algorithem</p>

                  <div id="how" class="width_100 float_left bg_grey"></div>
                  <h2>How is <u>phlygh</u></h2>
                  <p>Every month user submit upgrades/deprications to our open source application are voted on, discussed and re-vote on before implementations</p>

                  <!-- server seo / outro -->
                  <div id="outro" class="width_100 float_left bg_grey"></div>
                  <h2>your content, yours!</h2>
                    <p>more info</p>

                    <h3>development maintained by users</h3>
                      <p>more info</p>
                    <h3>Currating our users original media</h3>
                      <p>more info</p>
                    <h3>User suggested upgrades every month</h3>
                      <p>more info</p>
                    <h3>Available Site, Content & Live</h3>
                      <p>more info</p>
                    <h3>Giving the content, viewership a safe space</h3>
                      <p>more info</p>
                    <h3>Made with google firebase tools</h3>
                      <p>more info</p>

                  <h4>Users uploading content every second</h4>
                    <p>more info</p>
                  <h5>Your content is given a fair chance</h5>
                    <p>more info</p>
                  <h6>Highlighting the most original content</h6>
                    <p>more info</p>

              <div id="main">

              </div>
              
              <!--js generated content goes here -->
              <div id="db">
                <h2>users</h2>
                <ul id="db_users"></ul>
                <h2>posts</h2>
                <ul id="db_posts"></ul>
              </div>

              <!-- out -->
              <div class="position_relative width_100 height_100vh z_index_0">
                <div id="out" class="bg_blue position_absolute right_0 top_0 left_0 margin_auto"></div>
              </div>

              <!-- bg -->
              <div id="bg" class="width_100 height_100vh bg_white position_fixed top_0 left_0 z_index_-1"></div>
               
              <!-- modals -->
              <div id="modals" class="">

                    <!-- already used
                       <div id="modal_nav_top" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 display_none easing_01 bg_grey">
                       </div>
                       <div id="modal_nav_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0 display_none easing_01">
                       </div>
                       -->
                    <div id="modal_nav_left" class="z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left_0 display_none easing_01">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="modal_nav_right" class="z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left_0 display_none easing_01">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_top" class="position_fixed transform_translate3d_top_100 width_100vw float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_top_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_bottom" class="position_fixed transform_translate3d_top100 width_100vw float_left margin_auto display_none easing_01 bottom_0 left_0 ">
                       <div class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_bottom_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_left" class="position_fixed transform_translate3d_left_0 height_100vh float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div class="position_relative margin_auto float_left height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_left_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_right" class="position_fixed transform_translate3d_left_0 height_100vh float_left margin_auto display_none easing_01 top_0 right_0 ">
                       <div class="position_relative margin_auto float_left height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_right_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_top" class="position_fixed transform_translate3d_top_100 height_100vh width_100vw float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div id="info" class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">
                          <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pop_top_content" class="position_relative float_left calc_25vw margin_1205vw bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_bottom" class="position_fixed transform_translate3d_top100 height_100vh width_100vw float_left margin_auto display_none easing_01 bottom_0 left_0 ">
                       <div id="component_app_modal_element_pop_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_left" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_pop_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_right" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto display_none easing_01 top_0 right_0 ">
                       <div id="component_app_modal_element_pop_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_top" class="position_fixed transform_translate3d_top_100 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_gradient_top_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">

                        <h2 href="https://www.phlygh.com">Latest phlygh posts</h2>

                        <h6>fb_sorted_library - timedown - posts_users</h6>
                        <ul id="db_all_users"></ul>
                        <h6>fb_sorted_library - timedown - posts_guides</h6>
                        <ul id="posts_random"></ul>

                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_bottom" class="position_fixed transform_translate3d_top100 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 bottom_0 left_0 ">
                       <div id="component_app_modal_element_gradient_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_left" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_gradient_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_right" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0 ">
                       <div id="component_app_modal_element_gradient_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_top" class="position_fixed transform_translate3d_top_100 height_50vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_morph_top_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_bottom" class="position_fixed transform_translate3d_top100 height_50vh width_100vw float_left margin_auto bg_grey display_none easing_01 bottom_0 left_0 ">
                       <div id="component_app_modal_element_morph_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_left" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_morph_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_right" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0 ">
                       <div id="component_app_modal_element_morph_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_top" class="position_fixed transform_translate3d_top_100 height_50vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_bottom" class="position_fixed transform_translate3d_top100 height_50vh width_100vw float_left margin_auto display_none easing_01 bottom_0 left_0">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_left" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                          <div id="menu_left_buffer" class="width_100 float_left"></div>
                          <a href="#">loading</a>
                          <a href="#">home</a>
                          <a href="#">latest</a>
                          <a href="#">start game</a>
                          <a href="#">learn game</a>
                          <a href="#">planner</a>
                          <a href="#">contact</a>
                          <a href="#">welcome</a>
                          <div class="signal">
                             history_route: 
                             <div id="history_route"></div>
                          </div>
                          <div class="signal">
                             current_route: 
                             <div id="current_route"></div>
                          </div>
                          <div class="signal">
                             previous_route: 
                             <div id="previous_route"></div>
                          </div>
                          <div class="signal">
                             next_route: 
                             <div id="next_route"></div>
                          </div>


                          <h6 class="font_size_5vw line_height_5vw">Shortcuts</h6>
                          <h6 class="activator">shortcut_after_load</h6>
                          <a id="shortcut_after_load" class="status">run: shortcut_after_load</a>
                          <h6 class="activator">shortcut_handle_ui_reset</h6>
                          <div id="shortcut_handle_ui_reset" class="status">run: shortcut_handle_ui_reset</div>
                          <p class="font_size_5vw line_height_5vw">Gui</p>
                          <h6 class="activator">gui_top</h6>
                          <div id="component_app_status_transform_gui_top" class="status"></div>
                          <h6 class="activator">gui_top_left</h6>
                          <div id="component_app_status_transform_gui_top_left" class="status"></div>
                          <h6 class="activator">gui_top_right</h6>
                          <div id="component_app_status_transform_gui_top_right" class="status"></div>
                          <h6 class="activator">gui_left</h6>
                          <div id="component_app_status_transform_gui_left" class="status"></div>
                          <h6 class="activator">gui_bottom</h6>
                          <div id="component_app_status_transform_gui_bottom" class="status"></div>
                          <h6 class="activator">gui_bottom_left</h6>
                          <div id="component_app_status_transform_gui_bottom_left" class="status"></div>
                          <h6 class="activator">gui_bottom_right</h6>
                          <div id="component_app_status_transform_gui_bottom_right" class="status"></div>
                          <h6 class="activator">gui_right</h6>
                          <div id="component_app_status_transform_gui_right" class="status"></div>

                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_right" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0">
                       
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                          <div id="menu_right_buffer" class="width_100 float_left"></div>
                          <p class="font_size_1205vw line_height_1205vw">Switches</p>
                          <p class="font_size_5vw line_height_5vw">Models</p>
                          <h6 class="activator">nav_top</h6>
                          <div id="component_app_status_transform_nav_top" class="status"></div>
                          <h6 class="activator">nav_left</h6>
                          <div id="component_app_status_transform_nav_left" class="status"></div>
                          <h6 class="activator">nav_bottom</h6>
                          <div id="component_app_status_transform_nav_bottom" class="status"></div>
                          <h6 class="activator">nav_right</h6>
                          <div id="component_app_status_transform_nav_right" class="status"></div>
                          <h6 class="activator">pip_top</h6>
                          <div id="component_app_status_transform_pip_top" class="status"></div>
                          <h6 class="activator">pip_left</h6>
                          <div id="component_app_status_transform_pip_left" class="status"></div>
                          <h6 class="activator">pip_bottom</h6>
                          <div id="component_app_status_transform_pip_bottom" class="status"></div>
                          <h6 class="activator">pip_right</h6>
                          <div id="component_app_status_transform_pip_right" class="status"></div>
                          <h6 class="activator">page_top</h6>
                          <div id="component_app_status_transform_page_top" class="status"></div>
                          <h6 class="activator">page_left</h6>
                          <div id="component_app_status_transform_page_left" class="status"></div>
                          <h6 class="activator">page_bottom</h6>
                          <div id="component_app_status_transform_page_bottom" class="status"></div>
                          <h6 class="activator">page_right</h6>
                          <div id="component_app_status_transform_page_right" class="status"></div>
                          <h6 class="activator">pop_top</h6>
                          <div id="component_app_status_transform_pop_top" class="status"></div>
                          <h6 class="activator">pop_left</h6>
                          <div id="component_app_status_transform_pop_left" class="status"></div>
                          <h6 class="activator">pop_bottom</h6>
                          <div id="component_app_status_transform_pop_bottom" class="status"></div>
                          <h6 class="activator">pop_right</h6>
                          <div id="component_app_status_transform_pop_right" class="status"></div>
                          <h6 class="activator">gradient_top</h6>
                          <div id="component_app_status_transform_gradient_top" class="status"></div>
                          <h6 class="activator">gradient_left</h6>
                          <div id="component_app_status_transform_gradient_left" class="status"></div>
                          <h6 class="activator">gradient_bottom</h6>
                          <div id="component_app_status_transform_gradient_bottom" class="status"></div>
                          <h6 class="activator">gradient_right</h6>
                          <div id="component_app_status_transform_gradient_right" class="status"></div>
                          <h6 class="activator">morph_top</h6>
                          <div id="component_app_status_transform_morph_top" class="status"></div>
                          <h6 class="activator">morph_left</h6>
                          <div id="component_app_status_transform_morph_left" class="status"></div>
                          <h6 class="activator">morph_bottom</h6>
                          <div id="component_app_status_transform_morph_bottom" class="status"></div>
                          <h6 class="activator">morph_right</h6>
                          <div id="component_app_status_transform_morph_right" class="status"></div>
                          <h6 class="activator">menu_top</h6>
                          <div id="component_app_status_transform_menu_top" class="status"></div>
                          <h6 class="activator">menu_left</h6>
                          <div id="component_app_status_transform_menu_left" class="status"></div>
                          <h6 class="activator">menu_bottom</h6>
                          <div id="component_app_status_transform_menu_bottom" class="status"></div>
                          <h6 class="activator">menu_right</h6>
                          <div id="component_app_status_transform_menu_right" class="status"></div>
                       </div>

                    </div>
                    <div id="component_app_modal_element_page_top" class="position_fixed transform_translate3d_top_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">

                       <div id="component_app_modal_element_page_top_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>

                    </div>
                    <div id="component_app_modal_element_page_bottom" class="position_fixed transform_translate3d_top_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 bottom_0 left_0">
                       <div id="component_app_modal_element_page_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                        
                        <h2 href="https://www.phlygh.com">Create a phlygh post</h2>

                        <div id="upload_form">
                        </div>

                        <div id="create_form">
                        </div>

                       </div>
                    </div>
                    <div id="component_app_modal_element_page_left" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">
                       <div id="component_app_modal_element_page_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_page_right" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0">

                       <div id="component_app_modal_element_page_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow bg_grey">

                              <ul id="valid_user_details"></ul>
                              <h3 id="valid_user_posts_title"></h3>
                              <ul id="valid_user_posts"></ul>
                              <ul id="valid_user_follows"></ul>
                              <ul id="valid_user_followers"></ul>

                              <div id="signup_form">
                              </div>

                              <div id="signin_form">
                              </div>


                              <div id="edit_form">        
                              </div>

                              <div id="signout_form">
                              </div>

                       </div>
                    </div>
                    <div id="gui_top" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_top_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute top_100 left_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_top_left" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_top_left_container" class="">
                       </div>
                       <div id="" class="position_relative float_left height_100 width_100">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="gui_top_left_icon" class="gui_link_menu_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute top_100 left_0 height_100 width_100vw pseudo_arrow_top_left_outside_white_border_grey bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                       <!--
                          <div id="" class="position_absolute top_100 left_0 width_100">
                             
                             <div id="" class="position_relative height_6025vw width_100 float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                   <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_6025vw width_100 float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                   <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                          </div>
                          
                          <div id="" class="position_absolute top_0 left_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                             
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                          </div>
                          -->
                    </div>
                    <div id="gui_top_right" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       
                       <div id="gui_top_right_container" class="">
                       </div>

                       <div id="" class="position_relative float_right height_100 width_100">
                          <div id="user_icon" class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div id="is_user_logged" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="user_settings" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>

                          <div id="" class="hover_show position_absolute top_100 right_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>

                       <div id="" class="position_absolute top_100 left_0 width_100">
                          <div id="" class="position_relative height_6025vw width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_6025vw width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>

                       <div id="" class="position_absolute top_0 right_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_bottom" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_bottom_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute bottom_100 left_0 height_1205vw width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_bottom_left" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_bottom_left_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute bottom_100 left_0 height_1205vw width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_100 left_0 width_100">
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_0 left_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_bottom_right" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_bottom_right_container" class="">
                       </div>
                       <div id="" class="position_relative float_right height_100 width_100 ">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute bottom_100 right_0 height_1205vw width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_100 left_0 width_100">
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_0 right_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_left" class="transform_translate3d_left_0 display_none easing_01 bg_grey">
                       <div id="gui_left_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_fixed top_100 left_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_right" class="transform_translate3d_left_0 display_none easing_01 bg_grey">
                       <div id="gui_right_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute top_100 right_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>

              </div>

              <!-- hidden -->
              <div id="assets">
                <audio id="sound_effect_beep" src="https://phlygh.com/beep.4d3baad8.mp3" autostart="false"></audio>
                <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase.js"></script>
                <script src="https://phlygh.com/fly.e31bb0bc.js"></script>
              </div>

            </body>
            
            
  <footer id="footer" class="transform_translate3d_top100 easing_01 display_none">

     
     <nav>
        <div id="footer_tabs_1" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_2" class="active">
           <div class=""></div>
        </div>

        <div id="footer_tabs_3" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_4" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_5" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_6" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_7" class="">
           <div class=""></div>
        </div>
        
        <div id="footer_tabs_8" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_bottom" class="">
           <div class=""></div>
        </div>

     </nav>
     
  </footer>

          </html>
        `);

        return
    }).catch(reason => {
        console.log(reason)
    })
});

// post route
app.get('/p/:id', function(req, res) {

    db.collection("users").get().then(snapshot => {

        snapshot.forEach(doc => {
            let items = doc.data();
            posts.push(items)
        });

        posts.forEach(post => {
            if (post.id === req.params.id) {
              detail = post
            }
        });

        const date = new Date();
        const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
        let boy = 0;
        let posts_guides = [];

        res.send(`
            <!doctype html lang="en">
            <head>
              <meta name="theme-color" content="#317EFB"/>
              <meta http-equiv="content-language" content="en">
              <meta name="google-site-verification" content="djx4xejxICtAbg97NEFpOFt8PI342cgRHUGR8EH8XBk" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="google-site-verification" content="IH6dRhXpRVT_g2wrr4RH0BNT6Qpe7Dvizqa_IaiAfjA" />
              <meta name="description" content="${detail.id}" />
              <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
              
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

              <title>${detail.id}</title>
              <link rel="manifest" href="."https://www.phlygh.com/manifest.json">
              <link rel="shortcut icon" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon image_src" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg">
              <link rel="alternate" hreflang="en" href="https://www.phlygh.com/" />
              <link rel="apple-touch-icon-precomposed" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="stylesheet" href="https://phlygh.com/fly.e31bb0bc.css">
            </head>
            
            <header id="header" class="transform_translate3d_top_100 easing_01 display_none">
                 <nav>

                    <div id="header_link_1" alt="phlygh" class="position_relative height_100 margin_auto">
                       <div></div>
                    </div>
                    <div id="header_link_2" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_3" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_4" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_5" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_6" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_7" class="header_link">
                       <div></div>
                    </div>

                    <div id="header_link_8" class="header_link">
                       <div></div>
                    </div>

                 </nav>
            </header>
            
            <body id="body" tabindex="0">
    
              <div class="position_relative width_100 height_100vh z_index_0">
                <div id="lead" class="bg_blue position_absolute top_0 left_0 easing_01"></div>
              </div>
               
              <h1>Phlygh, content</h1>

                  <!-- tab -->
                  <a class="tab" href="1">tab 1:${detail.id}</a>
                  <a class="tab" href="2">tab 1:${detail.id}</a>
                  <a class="tab" href="3">tab 1:${detail.id}</a>
                  <a class="tab" href="4">tab 1:${detail.id}</a>
                  <a class="tab" href="5">tab 1:${detail.id}</a>
                  <a class="tab" href="6">tab 1:${detail.id}</a>
                  <a class="tab" href="7">tab 1:${detail.id}</a>
                  <a class="tab" href="8">tab 1:${detail.id}</a>

                  <!-- seo -->
                  <p>id: ${detail.id}, query: ${detail.id}</p>

                  <!-- seo basics -->
                  <div id="who" class="width_100 float_left bg_grey"></div>
                  <h2>Who is <u>phlygh</u></h2>
                  <p>A bunch of devs, designer and content creators.</p>

                  <div id="what" class="width_100 float_left bg_grey"></div>
                  <h2>What is <u>phlygh</u></h2>
                  <p>A platform for original content creators, basically</p>

                  <div id="when" class="width_100 float_left bg_grey"></div>
                  <h2>When is <u>phlygh</u></h2>
                  <p>Every minute content is shuffled and re currated to users</p>

                  <div id="where" class="width_100 float_left bg_grey"></div>
                  <h2>Where is <u>phlygh</u></h2>
                  <p>presenting new likable and interesting content to users</p>

                  <div id="why" class="width_100 float_left bg_grey"></div>
                  <h2>Why is <u>phlygh</u></h2>
                  <p>To safeguard ANY influence, your content and viewship is respected by our algorithem</p>

                  <div id="how" class="width_100 float_left bg_grey"></div>
                  <h2>How is <u>phlygh</u></h2>
                  <p>Every month user submit upgrades/deprications to our open source application are voted on, discussed and re-vote on before implementations</p>

                  <!-- server seo / outro -->
                  <div id="outro" class="width_100 float_left bg_grey"></div>
                  <h2>your content, yours!</h2>
                    <p>more info</p>

                    <h3>development maintained by users</h3>
                      <p>more info</p>
                    <h3>Currating our users original media</h3>
                      <p>more info</p>
                    <h3>User suggested upgrades every month</h3>
                      <p>more info</p>
                    <h3>Available Site, Content & Live</h3>
                      <p>more info</p>
                    <h3>Giving the content, viewership a safe space</h3>
                      <p>more info</p>
                    <h3>Made with google firebase tools</h3>
                      <p>more info</p>

                  <h4>Users uploading content every second</h4>
                    <p>more info</p>
                  <h5>Your content is given a fair chance</h5>
                    <p>more info</p>
                  <h6>Highlighting the most original content</h6>
                    <p>more info</p>

              <div id="main">

              </div>
              
              <!--js generated content goes here -->
              <div id="db">
                <h2>users</h2>
                <ul id="db_users"></ul>
                <h2>posts</h2>
                <ul id="db_posts"></ul>
              </div>

              <!-- out -->
              <div class="position_relative width_100 height_100vh z_index_0">
                <div id="out" class="bg_blue position_absolute right_0 top_0 left_0 margin_auto"></div>
              </div>

              <!-- bg -->
              <div id="bg" class="width_100 height_100vh bg_white position_fixed top_0 left_0 z_index_-1"></div>
              
             
              <!-- modals -->
              <div id="modals" class="">

                    <!-- already used
                       <div id="modal_nav_top" class="z_index_6 width_100vw float_left position_fixed top_0 height_6025vw transform_translate3d_top_0 display_none easing_01 bg_grey">
                       </div>
                       <div id="modal_nav_bottom" class="z_index_6 width_100vw float_left position_fixed bottom_0 height_6025vw transform_translate3d_top_0 display_none easing_01">
                       </div>
                       -->
                    <div id="modal_nav_left" class="z_index_6 width_6025vw float_left position_fixed top_0 height_100 transform_translate3d_left_0 display_none easing_01">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="modal_nav_right" class="z_index_6 width_6025vw float_left position_fixed right_0 bottom_0 height_100 transform_translate3d_left_0 display_none easing_01">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_top" class="position_fixed transform_translate3d_top_100 width_100vw float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_top_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_bottom" class="position_fixed transform_translate3d_top100 width_100vw float_left margin_auto display_none easing_01 bottom_0 left_0 ">
                       <div class="position_relative margin_auto float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_bottom_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_left" class="position_fixed transform_translate3d_left_0 height_100vh float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div class="position_relative margin_auto float_left height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_left_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pip_right" class="position_fixed transform_translate3d_left_0 height_100vh float_left margin_auto display_none easing_01 top_0 right_0 ">
                       <div class="position_relative margin_auto float_left height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div class="position_relative margin_auto float_left width_25vw height_25vw webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pip_right_content" class="position_relative float_left width_100 height_100 bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_top" class="position_fixed transform_translate3d_top_100 height_100vh width_100vw float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div id="info" class="position_relative margin_auto float_left width_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box bg_grey">
                          <div class="position_relative margin_auto float_left calc_25vw_width margin_1205vw max_width_1000px webkit_box_pack_center webkit_box_align display_webkit_box">
                             <div class="position_relative float_left calc_2vw border_1vw_grey bg_white">
                                <div id="component_app_modal_element_pop_top_content" class="position_relative float_left calc_25vw margin_1205vw bg_white">
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_bottom" class="position_fixed transform_translate3d_top100 height_100vh width_100vw float_left margin_auto display_none easing_01 bottom_0 left_0 ">
                       <div id="component_app_modal_element_pop_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_left" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_pop_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_pop_right" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto display_none easing_01 top_0 right_0 ">
                       <div id="component_app_modal_element_pop_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_top" class="position_fixed transform_translate3d_top_100 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_gradient_top_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">

                        <h2 href="https://www.phlygh.com">Latest phlygh posts</h2>

                        <h6>fb_sorted_library - timedown - posts_users</h6>
                        <ul id="db_all_users"></ul>
                        <h6>fb_sorted_library - timedown - posts_guides</h6>
                        <ul id="posts_random"></ul>

                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_bottom" class="position_fixed transform_translate3d_top100 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 bottom_0 left_0 ">
                       <div id="component_app_modal_element_gradient_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_left" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_gradient_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_gradient_right" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0 ">
                       <div id="component_app_modal_element_gradient_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_top" class="position_fixed transform_translate3d_top_100 height_50vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_morph_top_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_bottom" class="position_fixed transform_translate3d_top100 height_50vh width_100vw float_left margin_auto bg_grey display_none easing_01 bottom_0 left_0 ">
                       <div id="component_app_modal_element_morph_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_left" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0 ">
                       <div id="component_app_modal_element_morph_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_morph_right" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0 ">
                       <div id="component_app_modal_element_morph_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_top" class="position_fixed transform_translate3d_top_100 height_50vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_bottom" class="position_fixed transform_translate3d_top100 height_50vh width_100vw float_left margin_auto display_none easing_01 bottom_0 left_0">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_left" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                          <div id="menu_left_buffer" class="width_100 float_left"></div>
                          <a href="#">loading</a>
                          <a href="#">home</a>
                          <a href="#">latest</a>
                          <a href="#">start game</a>
                          <a href="#">learn game</a>
                          <a href="#">planner</a>
                          <a href="#">contact</a>
                          <a href="#">welcome</a>
                          <div class="signal">
                             history_route: 
                             <div id="history_route"></div>
                          </div>
                          <div class="signal">
                             current_route: 
                             <div id="current_route"></div>
                          </div>
                          <div class="signal">
                             previous_route: 
                             <div id="previous_route"></div>
                          </div>
                          <div class="signal">
                             next_route: 
                             <div id="next_route"></div>
                          </div>


                          <h6 class="font_size_5vw line_height_5vw">Shortcuts</h6>
                          <h6 class="activator">shortcut_after_load</h6>
                          <a id="shortcut_after_load" class="status">run: shortcut_after_load</a>
                          <h6 class="activator">shortcut_handle_ui_reset</h6>
                          <div id="shortcut_handle_ui_reset" class="status">run: shortcut_handle_ui_reset</div>
                          <p class="font_size_5vw line_height_5vw">Gui</p>
                          <h6 class="activator">gui_top</h6>
                          <div id="component_app_status_transform_gui_top" class="status"></div>
                          <h6 class="activator">gui_top_left</h6>
                          <div id="component_app_status_transform_gui_top_left" class="status"></div>
                          <h6 class="activator">gui_top_right</h6>
                          <div id="component_app_status_transform_gui_top_right" class="status"></div>
                          <h6 class="activator">gui_left</h6>
                          <div id="component_app_status_transform_gui_left" class="status"></div>
                          <h6 class="activator">gui_bottom</h6>
                          <div id="component_app_status_transform_gui_bottom" class="status"></div>
                          <h6 class="activator">gui_bottom_left</h6>
                          <div id="component_app_status_transform_gui_bottom_left" class="status"></div>
                          <h6 class="activator">gui_bottom_right</h6>
                          <div id="component_app_status_transform_gui_bottom_right" class="status"></div>
                          <h6 class="activator">gui_right</h6>
                          <div id="component_app_status_transform_gui_right" class="status"></div>

                       </div>
                    </div>
                    <div id="component_app_modal_element_menu_right" class="position_fixed transform_translate3d_left_0 height_100vh width_50vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0">
                       
                       <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow">
                          <div id="menu_right_buffer" class="width_100 float_left"></div>
                          <p class="font_size_1205vw line_height_1205vw">Switches</p>
                          <p class="font_size_5vw line_height_5vw">Models</p>
                          <h6 class="activator">nav_top</h6>
                          <div id="component_app_status_transform_nav_top" class="status"></div>
                          <h6 class="activator">nav_left</h6>
                          <div id="component_app_status_transform_nav_left" class="status"></div>
                          <h6 class="activator">nav_bottom</h6>
                          <div id="component_app_status_transform_nav_bottom" class="status"></div>
                          <h6 class="activator">nav_right</h6>
                          <div id="component_app_status_transform_nav_right" class="status"></div>
                          <h6 class="activator">pip_top</h6>
                          <div id="component_app_status_transform_pip_top" class="status"></div>
                          <h6 class="activator">pip_left</h6>
                          <div id="component_app_status_transform_pip_left" class="status"></div>
                          <h6 class="activator">pip_bottom</h6>
                          <div id="component_app_status_transform_pip_bottom" class="status"></div>
                          <h6 class="activator">pip_right</h6>
                          <div id="component_app_status_transform_pip_right" class="status"></div>
                          <h6 class="activator">page_top</h6>
                          <div id="component_app_status_transform_page_top" class="status"></div>
                          <h6 class="activator">page_left</h6>
                          <div id="component_app_status_transform_page_left" class="status"></div>
                          <h6 class="activator">page_bottom</h6>
                          <div id="component_app_status_transform_page_bottom" class="status"></div>
                          <h6 class="activator">page_right</h6>
                          <div id="component_app_status_transform_page_right" class="status"></div>
                          <h6 class="activator">pop_top</h6>
                          <div id="component_app_status_transform_pop_top" class="status"></div>
                          <h6 class="activator">pop_left</h6>
                          <div id="component_app_status_transform_pop_left" class="status"></div>
                          <h6 class="activator">pop_bottom</h6>
                          <div id="component_app_status_transform_pop_bottom" class="status"></div>
                          <h6 class="activator">pop_right</h6>
                          <div id="component_app_status_transform_pop_right" class="status"></div>
                          <h6 class="activator">gradient_top</h6>
                          <div id="component_app_status_transform_gradient_top" class="status"></div>
                          <h6 class="activator">gradient_left</h6>
                          <div id="component_app_status_transform_gradient_left" class="status"></div>
                          <h6 class="activator">gradient_bottom</h6>
                          <div id="component_app_status_transform_gradient_bottom" class="status"></div>
                          <h6 class="activator">gradient_right</h6>
                          <div id="component_app_status_transform_gradient_right" class="status"></div>
                          <h6 class="activator">morph_top</h6>
                          <div id="component_app_status_transform_morph_top" class="status"></div>
                          <h6 class="activator">morph_left</h6>
                          <div id="component_app_status_transform_morph_left" class="status"></div>
                          <h6 class="activator">morph_bottom</h6>
                          <div id="component_app_status_transform_morph_bottom" class="status"></div>
                          <h6 class="activator">morph_right</h6>
                          <div id="component_app_status_transform_morph_right" class="status"></div>
                          <h6 class="activator">menu_top</h6>
                          <div id="component_app_status_transform_menu_top" class="status"></div>
                          <h6 class="activator">menu_left</h6>
                          <div id="component_app_status_transform_menu_left" class="status"></div>
                          <h6 class="activator">menu_bottom</h6>
                          <div id="component_app_status_transform_menu_bottom" class="status"></div>
                          <h6 class="activator">menu_right</h6>
                          <div id="component_app_status_transform_menu_right" class="status"></div>
                       </div>

                    </div>
                    <div id="component_app_modal_element_page_top" class="position_fixed transform_translate3d_top_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">

                       <div id="component_app_modal_element_page_top_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>

                    </div>
                    <div id="component_app_modal_element_page_bottom" class="position_fixed transform_translate3d_top_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 bottom_0 left_0">
                       <div id="component_app_modal_element_page_bottom_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                        
                        <h2 href="https://www.phlygh.com">Create a phlygh post</h2>

                        <div id="upload_form">
                        </div>

                        <div id="create_form">
                        </div>

                       </div>
                    </div>
                    <div id="component_app_modal_element_page_left" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 left_0">
                       <div id="component_app_modal_element_page_left_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                       </div>
                    </div>
                    <div id="component_app_modal_element_page_right" class="position_fixed transform_translate3d_left_0 height_100vh width_100vw float_left margin_auto bg_grey display_none easing_01 top_0 right_0">

                       <div id="component_app_modal_element_page_right_content" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow bg_grey">

                              <ul id="valid_user_details"></ul>
                              <h3 id="valid_user_posts_title"></h3>
                              <ul id="valid_user_posts"></ul>
                              <ul id="valid_user_follows"></ul>
                              <ul id="valid_user_followers"></ul>

                              <div id="signup_form">
                              </div>

                              <div id="signin_form">
                              </div>


                              <div id="edit_form">        
                              </div>

                              <div id="signout_form">
                              </div>

                       </div>
                    </div>
                    <div id="gui_top" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_top_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute top_100 left_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_top_left" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_top_left_container" class="">
                       </div>
                       <div id="" class="position_relative float_left height_100 width_100">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="gui_top_left_icon" class="gui_link_menu_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute top_100 left_0 height_100 width_100vw pseudo_arrow_top_left_outside_white_border_grey bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                       <!--
                          <div id="" class="position_absolute top_100 left_0 width_100">
                             
                             <div id="" class="position_relative height_6025vw width_100 float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                   <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_6025vw width_100 float_left">
                                <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                   <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                          </div>
                          
                          <div id="" class="position_absolute top_0 left_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                             
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                             <div id="" class="position_relative height_100 width_30125vw float_left">
                                <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                   <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                                </div>
                             </div>
                          
                          </div>
                          -->
                    </div>
                    <div id="gui_top_right" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       
                       <div id="gui_top_right_container" class="">
                       </div>

                       <div id="" class="position_relative float_right height_100 width_100">
                          <div id="user_icon" class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div id="is_user_logged" class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="user_settings" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>

                          <div id="" class="hover_show position_absolute top_100 right_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>

                       <div id="" class="position_absolute top_100 left_0 width_100">
                          <div id="" class="position_relative height_6025vw width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_6025vw width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>

                       <div id="" class="position_absolute top_0 right_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_bottom" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_bottom_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute bottom_100 left_0 height_1205vw width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_bottom_left" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_bottom_left_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute bottom_100 left_0 height_1205vw width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_100 left_0 width_100">
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_0 left_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_bottom_right" class="transform_translate3d_top_0 display_none easing_01 bg_grey">
                       <div id="gui_bottom_right_container" class="">
                       </div>
                       <div id="" class="position_relative float_right height_100 width_100 ">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute bottom_100 right_0 height_1205vw width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_100 left_0 width_100">
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_100 float_left">
                             <div class="position_absolute bottom_0 left_0 calc_2vw margin_1vw">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                       <div id="" class="position_absolute bottom_0 right_100 height_100 webkit_box_pack_center webkit_box_align display_webkit_box">
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_facebook_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitch_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_instagram_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_youtube_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="position_relative height_100 width_30125vw float_left">
                             <div class="position_absolute bottom_0 left_0 width_100 height_100">
                                <div id="" class="socials_twitter_handdrawn position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_left" class="transform_translate3d_left_0 display_none easing_01 bg_grey">
                       <div id="gui_left_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_fixed top_100 left_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div id="gui_right" class="transform_translate3d_left_0 display_none easing_01 bg_grey">
                       <div id="gui_right_container" class="">
                       </div>
                       <div id="">
                          <div class="position_absolute bottom_0 left_0 height_100 width_100">
                             <div class="position_absolute bottom_0 left_0 calc_2vw bg_white border_1vw_grey">
                                <div id="" class="gui_link_gear_white position_absolute top_0 left_0 bottom_0 right_0 width_50 height_50 margin_auto"></div>
                             </div>
                          </div>
                          <div id="" class="hover_show position_absolute top_100 right_0 height_100 width_100vw bg_grey">
                             <div class="position_absolute bottom_0 left_0 calc_2vw border_1vw_grey bg_pink">
                             </div>
                          </div>
                       </div>
                    </div>

              </div>
              
              <!-- hidden -->
              <div id="assets">
                <audio id="sound_effect_beep" src="https://phlygh.com/beep.4d3baad8.mp3" autostart="false"></audio>
                <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase.js"></script>
                <script src="https://phlygh.com/fly.e31bb0bc.js"></script>
              </div>

            </body>

            
  <footer id="footer" class="transform_translate3d_top100 easing_01 display_none">

    
     <nav>
        <div id="footer_tabs_1" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_2" class="active">
           <div class=""></div>
        </div>

        <div id="footer_tabs_3" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_4" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_5" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_6" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_7" class="">
           <div class=""></div>
        </div>
        
        <div id="footer_tabs_8" class="">
           <div class=""></div>
        </div>

        <div id="footer_tabs_bottom" class="">
           <div class=""></div>
        </div>

     </nav>
     
  </footer>

          </html>
        `);

        return
    }).catch(reason => {
        console.log(reason)
    })

});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;
  res.status(404).send({bongs: 'BONG '.repeat(hours)});
});

/* test

// Listen for changes in all documents in the 'users' collection
exports.useWildcard = functions.firestore
    .document('p/{userId}')
    .onWrite((change, context) => {
      // If we set `/users/marie` to {name: "Marie"} then
      // context.params.userId == "marie"
      // ... and ...
      // change.after.data() == {name: "Marie"}
      console.log(change.after.data());
    });

exports.updateUser = functions.firestore
    .document('p/{userId}')
    .onUpdate((change, context) => {
      // Get an object representing the current document
      const newValue = change.after.data();

      // ...or the previous value before this update
      const previousValue = change.before.data();
      console.log(newValue);
      console.log(previousValue);
    });

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.onFileChange = functions.storage.object().onFinalize( (event) => {
	console.log(event);
	let object = event.data;
	let bucket = object.bucket;
	let contentType = object.contentType;
	let filePath = object.name;
	console.log('File chang deteched, funct exc started');
	return;
});

exports.upload = functions.https.onRequest((request, response) => {
	if (request.method !== 'POST') {
		return response.status(500).json({
			message: 'not allowed, not a POST request boi.'
		});
	}

	response.status(200).json({
		message: 'it worked'
	});
});

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
  res.status(200).send(`<!doctype html lang="en">
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});
*/

exports.app = functions.https.onRequest(app);
