let express = require('express');
let PORT = 5000;
let app = express();

app.listen(PORT, () => {
    console.log('port running on', PORT);
});

app.get('/quotes', (req, res) => {
    res.send(quotes_data);
});

app.use(express.static('server/public'));




let quotes_data = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

// CRUD:
     // Create,   Read/Retrieve,   Update,  Delete
        //post    //get            //put     //delete