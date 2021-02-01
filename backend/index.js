const express = require('express');
const Firestore = require('@google-cloud/firestore');

const db = new Firestore();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port,() => {
    console.log(`BarkBark Rest API listening on port ${port}`);
});

app.get('/', async (req, res) => {
    res.json({status: 'Bark bark! Ready to roll.'});
})

app.get('/:name', async(req, res) => {
    const name = req.params.name;
    const query = db.collection('registro').where('name', '==',  name);
    const querySnapshot = await query.get();
    if (querySnapshot.size >0){
        res.json(querySnapshot.docs[0].data());
    }
    else {
        res.json({status: 'Não encontrado!'});
    }
})