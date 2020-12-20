const express = require('express');
const app = express();
const cors = require('cors');
//imports route
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
// Route middleware
app.use(express.json());
 app.use(cors({
   allowedHeaders: [
     
       'Origin', 'X-Requested-With',
       'Content-Type', 'Accept',
       'X-Access-Token', 'Authorization',
       'Access-Control-Allow-Origin', '*'

     ],
     methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  
   }));
   app.use(function(req, res, next) 
   { 
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "*"); 
    next(); 
   });




app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);



app.get('/api/health', (req, res) => {
  res.status(200).send({ success: true })
});

app.listen(4000);