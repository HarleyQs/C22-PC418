const Wood = require("../models/wood-model.js");

// Create and Save a new Wood
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Add new wood type
  const wood = new Wood({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl || ""
  });

  // Save Wood in the database
  Wood.create(wood, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while add new item."
      });
    else res.send(data);
  });
};

// Retrieve all Wood Types from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  Wood.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving wood types."
      });
    else res.send(data);
  });
};

// Find a single Wood by Id
exports.findOne = (req, res) => {
  Wood.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Wood with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Wood with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a Wood identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Wood.updateById(
    req.params.id,
    new Wood(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Wood with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Wood with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Wood with the specified id in the request
exports.delete = (req, res) => {
  Wood.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Wood with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Wood with id " + req.params.id
        });
      }
    } else res.send({ message: `Wood was deleted successfully!` });
  });
};

// Delete all Wood data from the database.
exports.deleteAll = (req, res) => {
  Wood.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all data."
      });
    else res.send({ message: `All wood data were deleted successfully!` });
  });
};
