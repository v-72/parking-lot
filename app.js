const express = require('express'),
      bodyParser = require('body-parser');
const app = express();
const models = require('./models');

app.use(bodyParser.json({}));

app.get('/health-check',async(req,res)=>{
    res.send("Server is up and running !!");
})

process.on('uncaughtException', (err) => {
    console.error("!! Uncaught exception", err.message);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});