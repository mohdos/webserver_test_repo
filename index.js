const app = require('express')();
const testModule = require("./controllers/test");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/TestDB", {useNewUrlParser: true, useUnifiedTopology: true}).then(result =>{
    console.log("Successfully connected to mongo");
    app.listen(3000, () => console.log("Started listening 3000"));
}).catch(error => {
    console.log("Error: ", error);
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type: ["application/*", "text/plain"]}));
// app.use(bodyParser.json({type: "*/*"}));
// app.use(bodyParser.raw({
//     inflate: true,
//     limit: 1000,
//     type: "text/plain",
//     verify: (req, res, buf, encoding) => {
//         console.log(buf.toJSON());
//         return buf.toJSON();
//     }
// }));
// app.use(bodyParser.raw({ type: "*/application" }));

app.set("view engine", "ejs");


app.use("/test", testModule);

// app.listen(3000, () => console.log("Started listening 3000"));
