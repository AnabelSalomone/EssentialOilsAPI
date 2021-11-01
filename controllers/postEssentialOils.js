const EssentialOilSchema = require("../models/essential-oils");
const mongoose = require("mongoose");

const postEssentialOils = (req, res) => {
  const newOil = new EssentialOilSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    binomialName: req.body.binomialName,
    uses: req.body.uses,
    indications: req.body.indications,
    description: req.body.description,
  });

  const oil = newOil
    oil.save()
    .then(() => res.status(200).json(oil))
    .catch((err) => res.status(400).send(err));
};

module.exports = postEssentialOils;
