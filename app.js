const express = require('express'),
      bodyParser = require('body-parser');

const app = express();
const models = require('./models');

app.use(bodyParser.json({}));
app.use('/api', require('./routes'));

//simple api to ping server
app.get('/health-check',async(req,res)=>{
    res.send("Server is up and running !!");
});

//Uncaught exception handler
process.on('uncaughtException', (err) => {
    console.error("!! Uncaught exception", err.message);
});

//Check db connection before running the server
models.sequelize.sync().then(result => {
    console.log("DB Connection success : ",result);
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on ${process.env.PORT}`);
    });
}).catch(err => {
    console.log("Unable to connect to db:",err);
});

