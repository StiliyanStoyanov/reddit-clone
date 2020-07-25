const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const express = require('express');
const cors = require('cors');
const firebaseConfig = require('./firebase-config');


admin.initializeApp();
firebase.initializeApp(firebaseConfig);
const db = admin.firestore();
const authAdmin = admin.auth();
const authFirebase = firebase.auth();
const FieldValue = admin.firestore.FieldValue;

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get('/', (req, res) => {
    res.end();
});
app.get('/e/:sub/', (req, res) => {
    res.send('Sub Posts');
    res.end();
});
app.get('/e/:sub/:id', (req, res) => {
    res.send('Specific Post');
    res.end();
});

app.get('/test', async (req, res) => {
    const snapshot = await db.collection('all').orderBy('upvotes', 'desc').get();
    const data = snapshot.docs.map(doc => console.log(doc.data()));
    res.end();
});

module.exports.app = functions.region('europe-west3').https.onRequest(app);
