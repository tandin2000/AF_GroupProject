const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//budis im,port part
const researchAPI = require('./routes/research.routes');
const researchPaymentAPI = require('./routes/researchPayment.route');
const attendeeAPI = require('./routes/attendee.route')
const workShopAPI = require('./routes/workshop.route');
const workShopPaymentAPI = require('./routes/workshopPayment.route');


dotenv.config();
const app = express();
app.use(cors());




// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8081;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {

    if (error) {
        console.log('Database Error:', error.message);
        console.log('######################################################');
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connected...');
    initial();
    console.log('######################################################');
});


//routes
app.route('/').get((req, res) => {
    res.send("Backend working properly");
});

//serve static assets of in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('FrontEnd/build'))
}

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//Ruvindu added -----------------------RRRRRRRRRRRRRRRRRRRRRRRRR

const MainpageAPI = require('./routes/MainPage.routes');
app.use('/main', MainpageAPI());

const EventAPI = require('./routes/eventR.routes');
app.use('/item', EventAPI());

const TemplateTesAPI = require('./routes/TemplateTes.routers');
app.use('/templatetes', TemplateTesAPI());

//**************************************RRRRRRRRRRRRRRRRRRRRRRR

//budi routs
app.use("/research", researchAPI());
app.use('/researchpayments', researchPaymentAPI());
app.use('/attendee', attendeeAPI());
app.use('/workshop', workShopAPI());
app.use('/workshoppayment', workShopPaymentAPI());

//budi's end of line

app.listen(PORT, () => {
    console.log('######################################################');
    console.log(`Server is ON and running on PORT : ${PORT}`);
    console.log('...Wait DB connecting...');
});

const db = require("./models");
const Role = db.role;


  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "editor"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'editor' to roles collection");
        });

        new Role({
          name: "reviewer"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'reviewer' to roles collection");
        });
  
        new Role({
          name: "researcher"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'researcher' to roles collection");
        });
  
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
          console.log('######################################################');
        });
      }
    });
  }
 