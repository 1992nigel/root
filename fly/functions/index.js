// make functions ref
const functions = require('firebase-functions');

// express
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

// def route
app.get('/', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${'BONG '.repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

// post route
app.get('/p/:id', function(req, res) {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>${req.params.id}</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>id: ${req.params.id}, query: ${req.query.sortBy}In London, the clock strikes:
        <span id="bongs">${'BONG '.repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;
  res.status(404).send({bongs: 'BONG '.repeat(hours)});
});

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

/* test
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
  res.status(200).send(`<!doctype html>
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
