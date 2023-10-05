
// Set express as Node.js web application 
// server framework. 
// To install express before using it as 
// an application server by using  
// "npm install express" command. 
import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    // The render method takes the name of the HTML 
    // page to be rendered as input 
    // This page should be in the views folder 
    // in the root directory. 
    res.render('home1');

});

app.get('/akashdeep', (req, res) => {

    // The render method takes the name of the HTML 
    // page to be rendered as input. 
    // This page should be in views folder in 
    // the root directory. 
    // We can pass multiple properties and values 
    // as an object, here we are passing the only name 
    res.render('home2', { name: 'Akashdeep' });
});


app.get('/akashdeepdetails', (req, res) => {

    // The render method takes the name of the html 
    // page to be rendered as input. 
    // This page should be in views folder  
    // in the root directory. 
    let data = {
        name: 'Akashdeep',
        hobbies: ['playing football', 'playing chess', 'cycling']
    }

    res.render('home3', { data: data });
});


export default app;