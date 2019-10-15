const functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
/*
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

*/


// express
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});

app.use(cors);

var posts = [];
var detail = ``;

app.get('/', (req, res) => {

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
          <!DOCTYPE html>
          <html id="html" lang="en">
            <head>

              <meta name="theme-color" content="#317EFB"/>
              <meta http-equiv="content-language" content="en">
              <meta name="google-site-verification" content="djx4xejxICtAbg97NEFpOFt8PI342cgRHUGR8EH8XBk" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="google-site-verification" content="IH6dRhXpRVT_g2wrr4RH0BNT6Qpe7Dvizqa_IaiAfjA" />
              <meta name="description" content="nownigel serve" />
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

              <title>serve_antenuh / serve ${posts[0].id}</title>
              <link rel="manifest" href="."https://nownigel-67004.web.app/manifest.json">
              <link rel="shortcut icon" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon image_src" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg">
              <link rel="alternate" hreflang="en" href="https://antenuh-9d2ca.web.app/" />
              <link rel="apple-touch-icon-precomposed" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="stylesheet" href="https://antenuh-9d2ca.web.app/serve_an.e31bb0bc.css">
            </head>
            <header id="header" class="transform_translate3d_top_100 easing_01 display_none">
                 <nav>
                 </nav>
            </header>
            

            <body id="body" tabindex="0">
                  

    <main id="root" class="">
          <div id="lead" class="">

            <div id="shots" class="">
              
            </div>
            
          </div>

          

        <div id="opening" class="">
        </div>
        
        <!-- seo basics -->
        <div id="who">

        <div id="amzn-assoc-ad-6e048fd2-5132-43d3-ab5e-29d7d79883fc"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=6e048fd2-5132-43d3-ab5e-29d7d79883fc"></script>

          <div id="who_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>who is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="who_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>who is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="who_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>who is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

        </div>

        <div id="what">

          <div id="what_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>what is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="what_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>what is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="what_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>what is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

        </div>

        <div id="when">

          <div id="when_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>when is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="when_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>when is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="when_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>when is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

        </div>

        <div id="where">

          <div id="where_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>where is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="where_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>where is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="where_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>where is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

        </div>

        <div id="why">

          <div id="why_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>why is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="why_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>why is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="why_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>why is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

        </div>

        <div id="how">

          <div id="how_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>how is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="how_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>how is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>

          <div id="how_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
            <div class="position_relative float_left">
              <h2>how is <u>nownigel</u></h2>
              <p>...</p>
              <button>more info</button>
            </div>
          </div>
          
        </div>

        <!-- server seo / outro -->
        <div id="outro" class="display_webkit_box webkit_box_pack_center webkit_box_align">

        </div>

        <div id="credits" class="display_webkit_box webkit_box_pack_center webkit_box_align">

          <!-- title-->
          <h1>nownigel, content</h1>

          <!-- tab -->
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>
          <a class="tab" href="#">tab 1: 420</a>

          <!-- seo -->
          <p>id: 420, query: 420</p>
        </div>

        <!--
        <h3>development maintained by users</h3>
        <button>more info</button>
        <h3>Currating our users original media</h3>
        <button>more info</button>
        <h3>User suggested upgrades every month</h3>
        <button>more info</button>
        <h3>Available Site, Content & Live</h3>
        <button>more info</button>
        <h3>Giving the content, viewership a safe space</h3>
        <button>more info</button>
        <h3>Made with google firebase tools</h3>
        <button>more info</button>

        <h4>Users uploading content every second</h4>
        <button>more info</button>
        <h5>Your content is given a fair chance</h5>
        <button>more info</button>
        <h6>Highlighting the most original content</h6>
        <button>more info</button>
        -->


          <div id="set" class="">
            <div id="gui_stage_tv" class=""></div>
            <div id="gui_stage_lights" class=""></div>
          </div>

          <div id="scene" class="">
            <div id="player_1" class=""></div>
            <div id="mark" class=""></div>
            <div id="logo" class=""></div>
          </div>

          <div id="interactions" class="">
            <div id="nav_button" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_menu_white width_50 height_50 float_left"></div></div>
            <div id="nav_button_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_sign_in_white width_75 height_100 float_left"></div></div>
            <div id="nav_button_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_grid_white width_50 height_50 float_left"></div></div>
            <div id="nav_button_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_interaction_text_press width_100 height_100 float_left"></div></div>

          </div>

          
    <div id="modals" class="">
      <div id="modal_pop_bottom"></div>
      <div id="modal_pop_top"></div>
      <div id="modal_pop_right"></div>
      <div id="modal_pop_top">
        <div class="container">
          
                <div id="dark_view_toggle">dark</div>
                <div id="pop_top">pop_top</div>
                <div id="pop_bottom">pop_bottom</div>
                <div id="pop_left">pop_left</div>
                <div id="pop_right">pop_right</div>

                <div id="view_card">card</div>
                <div id="view_list">list</div>
                <div id="view_numbered">numbered</div>
                <div id="view_read">read</div>
                <div id="view_fifth">fifth</div>
                <div id="view_sixth">sixth</div>
                <div id="view_eighth">eighth</div>
                
        </div>
      </div>
    </div>

          <div id="assets">
                
                <!-- firebase cdn -->
                <script src="https://www.gstatic.com/firebasejs/7.1.0/firebase.js"></script>

                <!-- TODO: Add SDKs for Firebase products that you want to use
                https://firebase.google.com/docs/web/setup#available-libraries -->
                <script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>
               
                <!-- Load the Twitch embed script -->
                <script src="https://embed.twitch.tv/embed/v1.js"></script>

                <!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
                <script type="text/javascript">
                  new Twitch.Embed("twitch-embed", {
                    width: 854,
                    height: 480,
                    channel: "nownigel"
                  });
                </script>

                <!-- remote js -->
                <script src="https://antenuh-9d2ca.web.app/serve_an.e31bb0bc.js"></script>

              </div>
              
    </main>
              
            </body>
            <footer id="footer" class="transform_translate3d_top100 easing_01 display_none">
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

        posts = [];
        detail = ``;
        snapshot.forEach(doc => {
            let items = doc.data();
            posts.push(items)
        });

        posts.forEach(post => {
            if (post.id === req.params.id) {
              detail = post
            }
        });

        if (detail === ``) {
          detail = {
            id : "xxx",
            title: "does not exist"
          }
        }

        const date = new Date();
        const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
        let boy = 0;
        let posts_guides = [];

        res.send(`
          <!DOCTYPE html>
          <html id="html" lang="en">
            <head>

              <meta name="theme-color" content="#317EFB"/>
              <meta http-equiv="content-language" content="en">
              <meta name="google-site-verification" content="djx4xejxICtAbg97NEFpOFt8PI342cgRHUGR8EH8XBk" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="google-site-verification" content="IH6dRhXpRVT_g2wrr4RH0BNT6Qpe7Dvizqa_IaiAfjA" />
              <meta name="description" content="serve antenuh ${req.params.id} - ${detail.id}" />
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

              <title>serve antenuh post ${req.params.id} - ${detail.id}</title>
              <link rel="manifest" href="."https://antenuh-9d2ca.web.app/manifest.json">
              <link rel="shortcut icon" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon image_src" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg">
              <link rel="alternate" hreflang="en" href="https://antenuh-9d2ca.web.app/" />
              <link rel="apple-touch-icon-precomposed" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="stylesheet" href="https://antenuh-9d2ca.web.app/serve_an.e31bb0bc.css">
              </head>
              <header id="header" class="transform_translate3d_top_100 easing_01 display_none">
                   <nav>
                   </nav>
              </header>
              <body id="body" tabindex="0">
                                
                  
              <main id="root" class="">
              <div id="post" class="">
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${detail.youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                ${detail.id}${detail.title}
                
                <div id="twitter" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                  ${detail.twitter}
                </div>

                <div id="instagram" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/${detail.instagram}/" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/${detail.instagram}/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/${detail.instagram}/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by 🤳🏾🔋👨🏾‍🌾📼✍🏾🚲 (@nownigel)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-09-03T16:22:11+00:00">Sep 3, 2019 at 9:22am PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

                </div>

                <div id="vimeo" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <iframe id="vimeo_iframe" title="vimeo-player" src="https://player.vimeo.com/video/${detail.vimeo}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                </div>

                <div id="ad" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                    <div id="ad_iframe" class="position_relative calc_2vw border_1vw_grey bg_grey">
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

                <div id="youtube" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <iframe id="youtube_iframe" width="560" height="315" src="https://www.youtube.com/embed/${detail.youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div id="twitch" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <div id="twitch-embed"></div>
                </div>

                <div id="spotify" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <iframe id="spotify_iframe" src="https://open.spotify.com/embed-podcast/show/${detail.spotify}" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                </div>

              </div>

              <div id="lead" class="">

                <div id="shots" class="">
                  
                </div>
                
              </div>


                  <div id="opening" class="">
                  </div>
                  
                  <!-- seo basics -->
                  <div id="who">

                  <div id="amzn-assoc-ad-6e048fd2-5132-43d3-ab5e-29d7d79883fc"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=6e048fd2-5132-43d3-ab5e-29d7d79883fc"></script>

                    <div id="who_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>who is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="who_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>who is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="who_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>who is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="what">

                    <div id="what_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>what is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="what_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>what is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="what_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>what is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="when">

                    <div id="when_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>when is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="when_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>when is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="when_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>when is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="where">

                    <div id="where_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>where is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="where_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>where is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="where_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>where is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="why">

                    <div id="why_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>why is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="why_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>why is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="why_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>why is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="how">

                    <div id="how_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>how is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="how_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>how is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="how_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>how is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>
                    
                  </div>

                  <!-- server seo / outro -->
                  <div id="outro" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  </div>

                  <div id="credits" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                    <!-- title-->
                    <h1>nownigel, content</h1>

                    <!-- tab -->
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>

                    <!-- seo -->
                    <p>id: 420, query: 420</p>
                  </div>

                  <!--
                  <h3>development maintained by users</h3>
                  <button>more info</button>
                  <h3>Currating our users original media</h3>
                  <button>more info</button>
                  <h3>User suggested upgrades every month</h3>
                  <button>more info</button>
                  <h3>Available Site, Content & Live</h3>
                  <button>more info</button>
                  <h3>Giving the content, viewership a safe space</h3>
                  <button>more info</button>
                  <h3>Made with google firebase tools</h3>
                  <button>more info</button>

                  <h4>Users uploading content every second</h4>
                  <button>more info</button>
                  <h5>Your content is given a fair chance</h5>
                  <button>more info</button>
                  <h6>Highlighting the most original content</h6>
                  <button>more info</button>
                  -->


              <div id="set" class="">
                <div id="gui_stage_tv" class=""></div>
                <div id="gui_stage_lights" class=""></div>
              </div>

              <div id="scene" class="">
                <div id="player_1" class=""></div>
                <div id="mark" class=""></div>
                <div id="logo" class=""></div>
              </div>

              <div id="interactions" class="">
                <div id="nav_button" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_menu_white width_50 height_50 float_left"></div></div>
                <div id="nav_button_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_sign_in_white width_75 height_100 float_left"></div></div>
                <div id="nav_button_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_grid_white width_50 height_50 float_left"></div></div>
                <div id="nav_button_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_interaction_text_press width_100 height_100 float_left"></div></div>

              </div>

              
    <div id="modals" class="">
      <div id="modal_pop_bottom"></div>
      <div id="modal_pop_top"></div>
      <div id="modal_pop_right"></div>
      <div id="modal_pop_top">
        <div class="container">
          
                <div id="dark_view_toggle">dark</div>
                <div id="pop_top">pop_top</div>
                <div id="pop_bottom">pop_bottom</div>
                <div id="pop_left">pop_left</div>
                <div id="pop_right">pop_right</div>

                <div id="view_card">card</div>
                <div id="view_list">list</div>
                <div id="view_numbered">numbered</div>
                <div id="view_read">read</div>
                <div id="view_fifth">fifth</div>
                <div id="view_sixth">sixth</div>
                <div id="view_eighth">eighth</div>
                
        </div>
      </div>
    </div>

              <div id="assets">
                
                <!-- firebase cdn -->
                <script src="https://www.gstatic.com/firebasejs/7.1.0/firebase.js"></script>

                <!-- TODO: Add SDKs for Firebase products that you want to use
                https://firebase.google.com/docs/web/setup#available-libraries -->
                <script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>
               
                <!-- Load the Twitch embed script -->
                <script src="https://embed.twitch.tv/embed/v1.js"></script>

                <!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
                <script type="text/javascript">
                  new Twitch.Embed("twitch-embed", {
                    width: 854,
                    height: 480,
                    channel: "${detail.twitch}"
                  });
                </script>

                <!-- remote js -->
                <script src="https://antenuh-9d2ca.web.app/serve_an.e31bb0bc.js"></script>

              </div>
              
              </main>
            </body>
            <footer id="footer" class="transform_translate3d_top100 easing_01 display_none">
            </footer>

          </html>

        `);

        return
        }).catch(reason => {
            console.log(reason)
        })

});

// post route
app.get('/:id', function(req, res) {

    db.collection("users").get().then(snapshot => {

        posts = [];
        detail = ``;
        snapshot.forEach(doc => {
            let items = doc.data();
            posts.push(items)
        });

        posts.forEach(post => {
            if (post.title === req.params.id) {
              detail = post
            }
        });

        if (detail === ``) {
          detail = {
            id : "xxx",
            title: "does not exist"
          }
        }

        const date = new Date();
        const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
        let boy = 0;
        let posts_guides = [];

        res.send(`
          <!DOCTYPE html>
          <html id="html" lang="en">
            <head>

              <meta name="theme-color" content="#317EFB"/>
              <meta http-equiv="content-language" content="en">
              <meta name="google-site-verification" content="djx4xejxICtAbg97NEFpOFt8PI342cgRHUGR8EH8XBk" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="google-site-verification" content="IH6dRhXpRVT_g2wrr4RH0BNT6Qpe7Dvizqa_IaiAfjA" />
              <meta name="description" content="serve antenuh ${req.params.id} - ${detail.id}" />
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

              <title>serve antenuh user ${req.params.id} - ${detail.id}</title>
              <link rel="manifest" href="."https://antenuh-9d2ca.web.app/manifest.json">
              <link rel="shortcut icon" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon image_src" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg">
              <link rel="alternate" hreflang="en" href="https://antenuh-9d2ca.web.app/" />
              <link rel="apple-touch-icon-precomposed" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yt3.ggpht.com/---wPrEHChGg/AAAAAAAAAAI/AAAAAAAAAAA/dcXoCF786R0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <link rel="stylesheet" href="https://antenuh-9d2ca.web.app/serve_an.e31bb0bc.css">
              </head>
              <header id="header" class="transform_translate3d_top_100 easing_01 display_none">
                   <nav>
                   </nav>
              </header>
              <body id="body" tabindex="0">
                                
                  
              <main id="root" class="">
              <div id="post" class="">
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${detail.youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                ${detail.id}${detail.title}
                
                <div id="twitter" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                  ${detail.twitter}
                </div>

                <div id="instagram" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/${detail.instagram}/" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/${detail.instagram}/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/${detail.instagram}/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by 🤳🏾🔋👨🏾‍🌾📼✍🏾🚲 (@nownigel)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-09-03T16:22:11+00:00">Sep 3, 2019 at 9:22am PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

                </div>

                <div id="vimeo" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <iframe id="vimeo_iframe" title="vimeo-player" src="https://player.vimeo.com/video/${detail.vimeo}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                </div>

                <div id="ad" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                    <div id="ad_iframe" class="position_relative calc_2vw border_1vw_grey bg_grey">
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

                <div id="youtube" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <iframe id="youtube_iframe" width="560" height="315" src="https://www.youtube.com/embed/${detail.youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div id="twitch" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <div id="twitch-embed"></div>
                </div>

                <div id="spotify" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  <iframe id="spotify_iframe" src="https://open.spotify.com/embed-podcast/show/${detail.spotify}" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                </div>

              </div>

              <div id="lead" class="">

                <div id="shots" class="">
                  
                </div>
                
              </div>


                  <div id="opening" class="">
                  </div>
                  
                  <!-- seo basics -->
                  <div id="who">

                    <div id="who_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>who is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="who_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>who is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="who_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>who is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="what">

                    <div id="what_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>what is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="what_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>what is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="what_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>what is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="when">

                    <div id="when_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>when is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="when_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>when is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="when_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>when is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="where">

                    <div id="where_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>where is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="where_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>where is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="where_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>where is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="why">

                    <div id="why_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>why is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="why_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>why is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="why_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>why is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                  </div>

                  <div id="how">

                    <div id="how_title" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>how is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="how_text" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>how is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>

                    <div id="how_media" class="display_webkit_box webkit_box_pack_center webkit_box_align">
                      <div class="position_relative float_left">
                        <h2>how is <u>nownigel</u></h2>
                        <p>...</p>
                        <button>more info</button>
                      </div>
                    </div>
                    
                  </div>

                  <!-- server seo / outro -->
                  <div id="outro" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                  </div>

                  <div id="credits" class="display_webkit_box webkit_box_pack_center webkit_box_align">

                    <!-- title-->
                    <h1>nownigel, content</h1>

                    <!-- tab -->
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>
                    <a class="tab" href="#">tab 1: 420</a>

                    <!-- seo -->
                    <p>id: 420, query: 420</p>
                  </div>

                  <!--
                  <h3>development maintained by users</h3>
                  <button>more info</button>
                  <h3>Currating our users original media</h3>
                  <button>more info</button>
                  <h3>User suggested upgrades every month</h3>
                  <button>more info</button>
                  <h3>Available Site, Content & Live</h3>
                  <button>more info</button>
                  <h3>Giving the content, viewership a safe space</h3>
                  <button>more info</button>
                  <h3>Made with google firebase tools</h3>
                  <button>more info</button>

                  <h4>Users uploading content every second</h4>
                  <button>more info</button>
                  <h5>Your content is given a fair chance</h5>
                  <button>more info</button>
                  <h6>Highlighting the most original content</h6>
                  <button>more info</button>
                  -->


              <div id="set" class="">
                <div id="gui_stage_tv" class=""></div>
                <div id="gui_stage_lights" class=""></div>
              </div>

              <div id="scene" class="">
                <div id="player_1" class=""></div>
                <div id="mark" class=""></div>
                <div id="logo" class=""></div>
              </div>

              <div id="interactions" class="">
                <div id="nav_button" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_menu_white width_50 height_50 float_left"></div></div>
                <div id="nav_button_2" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_sign_in_white width_75 height_100 float_left"></div></div>
                <div id="nav_button_3" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_link_grid_white width_50 height_50 float_left"></div></div>
                <div id="nav_button_4" class="display_webkit_box webkit_box_pack_center webkit_box_align"><div class="position_relative gui_interaction_text_press width_100 height_100 float_left"></div></div>

              </div>

              
    <div id="modals" class="">
      <div id="modal_pop_bottom"></div>
      <div id="modal_pop_top"></div>
      <div id="modal_pop_right"></div>
      <div id="modal_pop_top">
        <div class="container">
          
                <div id="dark_view_toggle">dark</div>
                <div id="pop_top">pop_top</div>
                <div id="pop_bottom">pop_bottom</div>
                <div id="pop_left">pop_left</div>
                <div id="pop_right">pop_right</div>

                <div id="view_card">card</div>
                <div id="view_list">list</div>
                <div id="view_numbered">numbered</div>
                <div id="view_read">read</div>
                <div id="view_fifth">fifth</div>
                <div id="view_sixth">sixth</div>
                <div id="view_eighth">eighth</div>
                
        </div>
      </div>
    </div>

              <div id="assets">
                
                <!-- firebase cdn -->
                <script src="https://www.gstatic.com/firebasejs/7.1.0/firebase.js"></script>

                <!-- TODO: Add SDKs for Firebase products that you want to use
                https://firebase.google.com/docs/web/setup#available-libraries -->
                <script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>
               
                <!-- Load the Twitch embed script -->
                <script src="https://embed.twitch.tv/embed/v1.js"></script>

                <!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
                <script type="text/javascript">
                  new Twitch.Embed("twitch-embed", {
                    width: 854,
                    height: 480,
                    channel: "${detail.twitch}"
                  });
                </script>

                <!-- remote js -->
                <script src="https://antenuh-9d2ca.web.app/serve_an.e31bb0bc.js"></script>

              </div>
              
              </main>
            </body>
            <footer id="footer" class="transform_translate3d_top100 easing_01 display_none">
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

exports.app = functions.https.onRequest(app);

/*

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

exports.app = functions.https.onRequest(app);


*/