const express = require('express');
const app = express();
const router = express.Router();
const testModel = require("../models/testModel");
const commentsModel = require('../models/commentsModel');
const commonFunctions = require('../helpers/helper')

router.post("/items", (req, res) => {
    const myModel = testModel({
        title: req.body.title,
        body: req.body.body
    });

    myModel.save().then(result => {
        res.send(result);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

router.post("/comments", (req, res) => {
    
    // let commentObject = {
    //     username: req.username,
    //     body: req.body.body
    // }

    // if (req.)
    console.log(req.body);
    const commentModel = commentsModel({
        username: req.body.username,
        body: req.body.body,
        likes: req.body.likes
    });

    commentModel.save().then(result => {
        res.send(result);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

router.get("/items", (req, res) => {
    console.log(req.body);
    let findingObject = {};
    if ("id" in req.body)
    {
        findingObject._id = req.body.id
    }

    if ("title" in req.body)
    {
        findingObject.title = req.body.title;
    }

    if ("date" in req.body)
    {
        findingObject.date = {$gt: commonFunctions.parseStringToDate(req.body.date)};
    }

    console.log(findingObject);

    // const options = {_id: 1, body: 1, myDate: 1}; // to show only these fields
    const options = {};
    testModel.find(findingObject, options).then(result => {
        res.send(result);
    }).catch(error => {
        res.status(500).send({
            "status": 500,
            "reason": "Could not find a document matching this criteria"
        });
    });
});

router.get("/comments", (req, res) => {
    let findingObject = {};
    if ("id" in req.body)
    {
        findingObject._id = req.body.id
    }

    if ("body" in req.body)
    {
        findingObject.title = req.body.title;
    }

    if ("username" in req.body)
    {
        findingObject.username = req.body.username;
    }

    if ("date" in req.body)
    {
        findingObject.createdAt = {$gt: commonFunctions.parseStringToDate(req.body.date)};
    }

    if ("likes" in req.body)
    {
        findingObject.likes = {$gte: req.body.likes};
    }

    console.log(findingObject);

    // const options = {_id: 1, body: 1, myDate: 1}; // to show only these fields
    const options = {};
    commentsModel.find(findingObject, options).then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
});

router.get("/comments/delete", (req, res) => {
    let findingObject = {};
    if ("id" in req.body)
    {
        findingObject._id = req.body.id
    }

    if ("body" in req.body)
    {
        findingObject.title = req.body.title;
    }

    if ("username" in req.body)
    {
        findingObject.username = req.body.username;
    }

    if ("date" in req.body)
    {
        findingObject.createdAt = {$gt: req.body.date};
    }

    if ("likes" in req.body)
    {
        findingObject.likes = {$gte: req.body.likes};
    }

    if (Object.keys(myObj).length == 0)
    {
        res.status(500).send("Error: You must have a deletion criteria to avoid deleting all the data");
        return;
    }

    console.log(findingObject);

    commentsModel.delete(findingObject).then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
});

router.get("/items/delete", (req, res) => {
    let findingObject = {};

    if ("id" in req.body)
    {
        findingObject._id = req.body.id
    }

    if ("title" in req.body)
    {
        findingObject.title = req.body.title;
    }

    if ("date" in req.body)
    {
        findingObject.date = {$gt: req.body.date};
    }

    if (Object.keys(myObj).length == 0)
    {
        res.status(500).send("Error: You must have a deletion criteria to avoid deleting all the data");
        return;
    }
    console.log(findingObject);

    testModel.delete(findingObject).then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
});

module.exports = router;