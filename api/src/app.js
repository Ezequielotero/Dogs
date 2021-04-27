const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { v4: uuidv4 } = require('uuid')
const axios = require('axios').default;




const server = express();

// const sendGetRequest = async () => {
//     try {
//         const resp = await axios.get('https://api.thedogapi.com/v1/breeds');
//         for (let i = 0; i < resp.data.length; i++) {
//           Dog.create({
//             id:uuidv4(),
//             name:resp.data[i].name,
//             height:resp.data[i].height.metric,
//             weight:resp.data[i].weight.metric,
//             years:resp.data[i].life_span
            
//           })
//           console.log('hola')
//         }
//         console.log('llene todo lo que querias')
//     }catch (err) {
//         console.error(err);
//     }

//   }
  const sendGettemps = async () => {
    try {
      var total=[]
        const resp = await axios.get('https://api.thedogapi.com/v1/breeds');
        for (let i = 0; i < resp.data.length; i++) {
            if(resp.data[i].temperament){
              var split=resp.data[i].temperament.split(', '||',')
              for (let j = 0; j < split.length; j++){
                if(!total.includes(split[j])){
                  total.push(split[j])
                }
              }
            }
                      
          }
    }catch (err) {
        console.error(err);
    }

  }
  sendGettemps()
server.name = 'API';
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.use('/',routes)



// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
