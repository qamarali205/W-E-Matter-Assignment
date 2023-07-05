const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Users=require('./model/userModel');

dotenv.config();



// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());

//post api
app.post('/signup', async(req,res)=>{
    try {
        let user = new Users(req.body);
        //data insert in database
        let result = await user.save();
        // result.result.toObject();
        // delete result.password;
        res.send(result);
        // console.log(req.body);
      } catch (error) {
        res.send({ error: "Record Not Saved" });
      }
});

app.post('/login', async(req,res)=>{
    //console.log(req.body)
    try {
        if (req.body.password && req.body.email) {
          let user = await Users.findOne(req.body).select("-password");
          
          if (user) {
            res.send(user);
          } else {
            res.send({ result: "No User Found" });
          }
        } else {
          res.send({ result: "No User Found" });
        }
      } catch (error) {
        res.send({ error: "Something error." });
      }
})

module.exports = app;