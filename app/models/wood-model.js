const sql = require("./db.js");

// constructor
const Wood = function(wood) {
  this.name = wood.name;
  this.description = wood.description;
  this.imageUrl = wood.imageUrl;
};

Wood.create = (newItem, result) => {
  sql.query("INSERT INTO woods SET ?", newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created wood item: ", { id: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Wood.findById = (id, result) => {
  sql.query(`SELECT * FROM woods WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found wood type: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found wood with the id
    result({ kind: "not_found" }, null);
  });
};

Wood.getAll = (name, result) => {
  let query = "SELECT * FROM woods";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("woods: ", res);
    result(null, res);
  });
};

Wood.updateById = (id, wood, result) => {
  sql.query(
    "UPDATE woods SET name = ?, description = ?, imageUrl = ? WHERE id = ?",
    [wood.name, wood.description, wood.imageUrl, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated wood item: ", { id: id, ...wood });
      result(null, { id: id, ...wood });
    }
  );
};

Wood.remove = (id, result) => {
  sql.query("DELETE FROM woods WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted wood with id: ", id);
    result(null, res);
  });
};

Wood.removeAll = result => {
  sql.query("DELETE FROM woods", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} woods`);
    result(null, res);
  });
};

module.exports = Wood;
