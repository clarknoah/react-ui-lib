const express = require("express");
const app = express();


app.use("/", express.static("static_storybook"));



app.set("port", process.env.PORT || 80);

app.listen(80, ()=>{
  console.log("Running on 80");
})

//this is my dummy comment to test merge-ability from tweeproutes branch
