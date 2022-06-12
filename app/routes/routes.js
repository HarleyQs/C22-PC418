module.exports = app => {
    const woodTypes = require("../controllers/controller.js");
    var router = require("express").Router();
    // Add new wood item
    router.post("/", woodTypes.create);
    // Retrieve all woodTypes
    router.get("/", woodTypes.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", woodTypes.findOne);
    // Update a Tutorial with id
    router.put("/:id", woodTypes.update);
    // Delete a Tutorial with id
    router.delete("/:id", woodTypes.delete);
    // Delete all woodTypes
    router.delete("/", woodTypes.deleteAll);
    app.use('/api/woodTypes', router);
  };