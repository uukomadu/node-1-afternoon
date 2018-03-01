// REQUIRE EXPRESS AND BODY-PARSER
const express = require("express");
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');

// CREATE AN EXPRESS APP
const app = express();

// CONFIGURE THE APP TO PARSE JSON FROM THE BODY
app.use(bodyParser.json());

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );

// DECLARE PORT (WHAT WE'RE LISTENING ON)
const port = 3000;

// CONFIGURE THE APP TO LISTEN ON PORT 3000 AND DISPLAY A MESSAGE WHEN IT IS IN LISTENING
app.listen(port, () => {console.log(`Listening to PORT: ${port}.`); } );
