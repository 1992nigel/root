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
                <!--
                <?php wp_head(); ?>
                <meta name="viewport" content="minimal-ui width=device-width, initial-scale=1.0"/>
                <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
                -->

              <title>p.h.l.y.g.h. / phlygh - ${posts[0].id}</title>
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

            <header id="header">
            </header>

            <body id="body" tabindex="0">

              <!--load-->
              <div id="lead" class="width_100 float_left bg_grey"></div>

              <!-- server seo / intro -->
              <div id="main">
                
                <h1>Phlygh, content</h1>

                  <!-- tab -->
                  <a class="tab" href="1">tab 1:${posts[0].id}</a>
                  <a class="tab" href="2">tab 1:${posts[0].id}</a>
                  <a class="tab" href="3">tab 1:${posts[0].id}</a>
                  <a class="tab" href="4">tab 1:${posts[0].id}</a>
                  <a class="tab" href="5">tab 1:${posts[0].id}</a>
                  <a class="tab" href="6">tab 1:${posts[0].id}</a>
                  <a class="tab" href="7">tab 1:${posts[0].id}</a>
                  <a class="tab" href="8">tab 1:${posts[0].id}</a>

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

              </main>
              
              <!--js generated content goes here -->
              <div id="db">
                <h2>users</h2>
                <ul id="db_users"></ul>
              </div>

              <!-- hidden -->
              <div id="assets">
                <audio id="sound_effect_beep" src="https://phlygh.com/beep.4d3baad8.mp3" autostart="false"></audio>
                <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase.js"></script>
                <script src="https://phlygh.com/fly.e31bb0bc.js"></script>
              </div>

            </body>
            
            <footer id="footer">
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
              <!--
                 <?php wp_head(); ?>
                 <meta name="viewport" content="minimal-ui width=device-width, initial-scale=1.0"/>
                 <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
                 -->

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
            

            <header id="header">
            </header>

            <body id="body" tabindex="0">

              <!--load-->
              <div id="lead" class="width_100 float_left bg_grey"></div>

              <!-- server seo / intro -->
              <div id="main">
                
                <h1>Phlygh, content</h1>

                  <!-- seo -->
                  <p>req params id: ${req.params.id}, req params query: ${req.query.sortBy}
                  <p>detail id: ${detail.id}
                  <span id="bongs">${'BONG '.repeat(hours)}</span></p>

                  <!-- seo basics -->
                  <h2>Who is <u>phlygh</u></h2>
                  <p>A bunch of devs, designer and content creators.</p>

                  <h2>What is <u>phlygh</u></h2>
                  <p>A platform for original content creators, basically</p>

                  <h2>When is <u>phlygh</u></h2>
                  <p>Every minute content is shuffled and re currated to users</p>

                  <h2>Where is <u>phlygh</u></h2>
                  <p>presenting new likable and interesting content to users</p>

                  <h2>Why is <u>phlygh</u></h2>
                  <p>To safeguard ANY influence, your content and viewship is respected by our algorithem</p>

                  <h2>How is <u>phlygh</u></h2>
                  <p>Every month user submit upgrades/deprications to our open source application are voted on, discussed and re-vote on before implementations</p>

                  <!-- server seo / outro -->
                  <h2>your content, yours!</h2>
                    <h3>development maintained by users</h3>
                    <h3>Currating our users original media</h3>
                    <h3>User suggested upgrades every month</h3>
                    <h3>Available Site, Content & Live</h3>
                    <h3>Giving the content, viewership a safe space</h3>
                    <h3>Made with google firebase tools</h3>

                  <h4>Users uploading content every second</h4>
                  <h5>Your content is given a fair chance</h5>
                  <h6>Highlighting the most original content</h6>

              </main>
              
              <!--js generated content goes here -->
              <div id="db">
                <h2>users</h2>
                <ul id="db_users"></ul>
              </div>

              <!-- hidden -->
              <div id="assets">
                <audio id="sound_effect_beep" src="https://phlygh.com/beep.4d3baad8.mp3" autostart="false"></audio>
                <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase.js"></script>
                <script src="https://phlygh.com/fly.e31bb0bc.js"></script>
              </div>
            </body>
            
            <footer id="footer">
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
