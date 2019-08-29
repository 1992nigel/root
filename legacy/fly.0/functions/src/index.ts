import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

 export const getWeather = functions.https.onRequest((request, response) => {
 	const promise = admin.firestore().collection('users').doc('6x7zhGE6GBP3UtTCs17VTts9uuP2').get()
 	const p2 = promise.then(snapshot => {
 		const data = snapshot.data();
		response.send(data);
	});
	p2.catch(error => {
		console.log(error);
		response.status(500).send(error);
	});
 });
